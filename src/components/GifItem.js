import React from "react";
import PropTypes from "prop-types";

const GifItem = (props) => {
  const { url, title, username } = props;
  return (
    <article>
      <div className="gif_info">
        <img src={url} alt="" className="gif_img" />
        <h2 className="gif_title">{title}</h2>
        <p className="gif_author">Added by: {username}</p>
      </div>
    </article>
  );
};

GifItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  username: PropTypes.string,
};

GifItem.defaultProps = {
  username: "Not given",
};

export default GifItem;
