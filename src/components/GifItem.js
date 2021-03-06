import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const GifItem = (props) => {
  const { id, url, title, username } = props;
  return (
    <article>
      <div className="gif_info">
        <img src={url} alt="" className="gif_img" />
        <h2 className="gif_title">
          <Link to={`/gifs/${id}`}>{title}</Link>
        </h2>
        <p className="gif_author">Added by: {username}</p>
      </div>
    </article>
  );
};

GifItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  username: PropTypes.string,
};

GifItem.defaultProps = {
  title: "No title given",
  username: "No username given",
};

export default GifItem;
