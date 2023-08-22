import React, { useState, useEffect } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {

  const { item, updateFavouritedPhotoIDs, photoClick } = props;

  const [selected, setSelected] = useState(false);

  const clickOnIcon = () => {
    if (selected) {
      setSelected(false);
      updateFavouritedPhotoIDs(item.id, selected);
    } else {
      setSelected(true);
      updateFavouritedPhotoIDs(item.id, selected);
    }
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        clickOnIcon={clickOnIcon}
        selected={selected}
      />
      <img className="photo-list__image" onClick={photoClick} src={item.urls.regular} alt="image" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={item.user.profile} alt="" />
        <div>
          <p className="photo-list__user-info">{item.user.username}</p>
          <p className="photo-list__user-location">{item.location.city} {item.location.country}</p>
        </div>
      </div>
    </div >
  );
};

export default PhotoListItem;
