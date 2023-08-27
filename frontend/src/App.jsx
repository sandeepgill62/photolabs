import React, { useEffect } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    photoIDs,
    showModal,
    modalPhotoData,
    fetchData,
    updateFavouritedPhotoIDs,
    updateModalData,
    updatePhotosByTopics
  } = useApplicationData();

  let isFavPhotoExist = false;

  { isFavPhotoExist = photoIDs.length ? !isFavPhotoExist : isFavPhotoExist; }

  // useEffect(() => {
  //   console.log(photoIDs);
  // }, [photoIDs]);

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  return (
    <div className="App">
      <HomeRoute
        topics={fetchData.topicData}
        photos={fetchData.photoData}
        updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
        isFavPhotoExist={isFavPhotoExist}
        updateModalData={updateModalData}
        updatePhotosByTopics={updatePhotosByTopics}
      />
      {
        showModal && modalPhotoData &&
        < PhotoDetailsModal
          modalPhotoData={modalPhotoData}
          updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
          updateModalData={updateModalData}
        />
      }
    </div >
  );
};

export default App;
