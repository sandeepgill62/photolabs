import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoListItem from '../components/PhotoListItem';

const PhotoDetailsModal = (props) => {

  const { setModelData, modelPhotoData, photos } = props;

  const item = modelPhotoData;
  console.log(item.similarPhotos);
  console.log();
  // console.log(photos);


  console.log(modelPhotoData);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} onClick={() => setModelData(false, {})} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <img src={item.urls.regular} className="photo-details-modal__image" alt="main image" />
        <h1 className="photo-details-modal__header">Similar Photos</h1>
        <div className="photo-details-modal__images">
          <PhotoList
            photos={Object.values(item.similarPhotos)}
          />
        </div>
      </div>
    </div >
  );
};

export default PhotoDetailsModal;
