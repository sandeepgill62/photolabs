import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
//
import '../styles/PhotoList.scss';

//

import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {

  const { item, key } = props;

  return (
    <div className="photo-list">
      <div className="photo-list__item">
        <PhotoFavButton />
        <img className="photo-list__image" src={item.imageSource} alt="image" />

        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={item.profile} alt="" />
          <div>
            <p className="photo-list__user-info">{item.username}</p>
            <p className="photo-list__user-location">{item.location.city} {item.location.country}</p>
          </div>
        </div>
      </div >
    </div>
  );
};

export default PhotoListItem;
