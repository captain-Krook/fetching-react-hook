import React from "react";
import "./bloc.css";

const Bloc = ({ data }) => {
  const { name, username } = data;
  const { lat, lng } = data.address.geo;

  return (
    <div className="blocUser">
      <h1>
        name: {name} <br /> username: {username}
        <br />
        lat: {lat}
        <br />
        lng: {lng}
      </h1>
    </div>
  );
};

export default Bloc;
