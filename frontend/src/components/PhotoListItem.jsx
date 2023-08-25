import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {

  const { item, updateFavouritedPhotoIDs, setModalData } = props;

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
        item={item}
      />
      <img className="photo-list__image" onClick={() => setModalData(true, item)} src={item.urls.regular} alt="image" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={item.user.profile} alt="profile photos" />
        <div>
          <p className="photo-list__user-info">{item.user.username}</p>
          <p className="photo-list__user-location">{item.location.city} {item.location.country}</p>
        </div>
      </div>
    </div >
  );
};

export default PhotoListItem;
