
import { useState } from 'react';

const useApplicationData = () => {

  const [photoIDs, setPhotoIDs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalPhotoData, setModalPhotoData] = useState({});

  const updateFavouritedPhotoIDs = (id, action) => {
    if (!action) {
      setPhotoIDs((prevPhotoIDs) => [...prevPhotoIDs, id]);
    } else {
      setPhotoIDs(oldValues => {
        return oldValues.filter(itemID => itemID !== id);
      });
    }
  };

  const setModalData = (flag, item) => {
    setShowModal(flag);
    setModalPhotoData(item);
  };

  return {
    photoIDs,
    showModal,
    modalPhotoData,
    updateFavouritedPhotoIDs,
    setModalData
  };
};

export default useApplicationData;