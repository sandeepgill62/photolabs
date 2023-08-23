import React, { useCallback, useState, useEffect } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {

  const { clickOnIcon, selected } = props;

  //

  //

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          clickOnIcon={clickOnIcon}
          selected={selected}
        />
      </div>
    </div>
  );
};

export default PhotoFavButton;