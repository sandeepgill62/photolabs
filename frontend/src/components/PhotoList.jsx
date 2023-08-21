import React, { useEffect } from "react";

import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  const { photos, updateFavouritedPhotoIDs } = props;

  const photoListItemArray = photos.map((item) =>
    <li key={item.id}>
      <PhotoListItem
        item={item}
        updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
      />
    </li>
  );

  return (
    <ul className="photo-list">
      {photoListItemArray}
    </ul>
  );
};

export default PhotoList;
