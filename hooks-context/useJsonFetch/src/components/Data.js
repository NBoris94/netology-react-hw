import React from "react";
import PropTypes from "prop-types";
import useJsonFetch from "../hooks/useJsonFetch";
import Loader from "./Loader";

function Data({ url, opts }) {
  const [data, error, loading] = useJsonFetch(url, opts);

  const dataMessage = data.status === "ok" ? "Данные загружены" : "";

  return (
    <div className="card">
      {loading && <Loader />}
      {error ? <p className="error">{error}</p> : <p className="data">{dataMessage}</p>}
    </div>
  );
}

Data.defaultProps = {
  url: "",
  opts: {},
};

Data.propTypes = {
  url: PropTypes.string,
  opts: PropTypes.object,
};

export default Data;
