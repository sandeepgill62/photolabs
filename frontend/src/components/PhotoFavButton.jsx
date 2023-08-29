import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ updateFavouritedPhotoIDs, item, photoIDs }) => {

  const clickOnIcon = () => {
    updateFavouritedPhotoIDs(item.id);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          clickOnIcon={clickOnIcon}
          selected={photoIDs.indexOf(item.id) > -1}
        />
      </div>
    </div>
  );
};

export default PhotoFavButton;