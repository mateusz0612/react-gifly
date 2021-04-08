import React from "react";

const GifItem = (props) => {
  const { id, url, title } = props;
  return (
    <article key={id}>
      <div className="gif_info">
        <img src={url} alt="" className="gif_img" />
        <h2 className="gif_title">{title}</h2>
      </div>
    </article>
  );
};

export default GifItem;
