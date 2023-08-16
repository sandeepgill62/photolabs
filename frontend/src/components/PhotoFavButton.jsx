import React, { useCallback, useState, useEffect } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {

  const [selected, setSelected] = useState(false);

  const onClick = () => {
    if (selected) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          onClick={onClick}
          selected={selected}
        />
      </div>
    </div>
  );
};

export default PhotoFavButton;