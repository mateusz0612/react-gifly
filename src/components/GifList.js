import React from "react";
import GifItem from "./GifItem";
import "../css/GifList.css";

const GifList = (props) => {
  const { data } = props;
  return (
    <section className="items">
      {data.map((item) => {
        const { id, title, username } = item;
        const url = item.images.original.url;
        const props = {
          id,
          title,
          url,
          username: username ? username : undefined,
        };
        return <GifItem {...props} key={id} />;
      })}
    </section>
  );
};

export default GifList;
