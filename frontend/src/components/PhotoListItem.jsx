import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  const { item, key } = props;

  console.log(key);

  return (
    <>
      <img src={item.imageSource} alt="image" />
      <img src={item.profile} alt="" />
      <h1>{item.username}</h1>
      <h1>{item.location.city} {item.location.country}</h1>
    </>
  );
};

export default PhotoListItem;
