import React, { useCallback, useState, useEffect } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {

  // const { clickOnIcon, selected } = props;

  const { item, updateFavouritedPhotoIDs } = props;

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