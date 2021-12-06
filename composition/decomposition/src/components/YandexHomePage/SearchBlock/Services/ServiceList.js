import React from "react";
import PropTypes from "prop-types";
import ServiceItem from "./ServiceItem";

function ServiceList({ services }) {
  const servicesView = services.map((o) => <ServiceItem key={o.id} {...o} />);

  if (servicesView.length === 0) return null;

  return <ul className="services">{servicesView}</ul>;
}

ServiceList.defaultProps = {
  services: [],
};

ServiceList.propTypes = {
  services: PropTypes.array,
};

export default ServiceList;
