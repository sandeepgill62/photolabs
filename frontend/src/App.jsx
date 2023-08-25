import React, { useEffect } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from "../src/mocks/photos";
import topics from "../src/mocks/topics.js";
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    photoIDs,
    showModal,
    modalPhotoData,
    updateFavouritedPhotoIDs,
    setModalData
  } = useApplicationData();

  let isFavPhotoExist = false;

  { isFavPhotoExist = photoIDs.length ? !isFavPhotoExist : isFavPhotoExist; }

  // useEffect(() => {
  //   console.log(photoIDs);
  // }, [photoIDs]);

  useEffect(() => {
    // console.log(modelPhotoData);
  }, [modalPhotoData]);

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
        isFavPhotoExist={isFavPhotoExist}
        setModalData={setModalData}
      />
      {
        showModal &&
        < PhotoDetailsModal
          setModalData={setModalData}
          modalPhotoData={modalPhotoData}
          updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
        />
      }
    </div >
  );
};

export default App;
