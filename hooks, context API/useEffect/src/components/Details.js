import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Details({ info }) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});

  const loadDetailsHandler = (id) => {
    setLoading(true);
    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadDetailsHandler(info.id);
  }, [info.id]);

  return loading ? (
    <p>Загрузка</p>
  ) : (
    <div className="card">
      <img src={profile.avatar} alt="" className="card__avatar" />
      <h3 className="card__name">{profile.name}</h3>
      <p className="card__text">
        City: <span className="card__city">{profile.details.city}</span>
      </p>
      <p className="card__text">
        Company: <span className="card__company">{profile.details.company}</span>
      </p>
      <p className="card__text">
        Position: <span className="card__position">{profile.details.position}</span>
      </p>
    </div>
  );
}

Details.defaulProps = {
  info: {
    id: 0,
    name: "",
  },
};

Details.propTypes = {
  info: PropTypes.object,
};

export default Details;
