import React from "react";
import PropTypes from "prop-types";
import { apiKey } from "./ApiKey";
import { useParams } from "react-router-dom";

const GifView = () => {
  const { id } = useParams();
  return (
    <div>
      <p>Id of this gif: {id}</p>
    </div>
  );
};

export default GifView;
