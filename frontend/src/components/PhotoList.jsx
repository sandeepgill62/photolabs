import React from "react";

import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, updateFavouritedPhotoIDs, updateModalData }) => {

  const photoListItemArray = photos ? photos.map((item) =>
    <li key={item.id}>
      <PhotoListItem
        item={item}
        updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
        updateModalData={updateModalData}
      />
    </li>
  ) : null;

  return (
    <ul className="photo-list">
      {photoListItemArray}
    </ul>
  );
};

export default PhotoList;
