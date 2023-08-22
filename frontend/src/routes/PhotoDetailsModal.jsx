import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {

  const { setModelData, modelPhotoData } = props;

  console.log(modelPhotoData);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} onClick={() => setModelData(false, {})} alt="close symbol" />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;
