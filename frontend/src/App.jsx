import React from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

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

  return (
    <div className="App">
      <HomeRoute
        topics={fetchData.topicData}
        photos={fetchData.photoData}
        updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
        isFavPhotoExist={isFavPhotoExist}
        updateModalData={updateModalData}
        updatePhotosByTopics={updatePhotosByTopics}
        photoIDs={photoIDs}
      />
      {
        showModal && modalPhotoData &&
        < PhotoDetailsModal
          modalPhotoData={modalPhotoData}
          updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
          updateModalData={updateModalData}
          photoIDs={photoIDs}
        />
      }
    </div >
  );
};

export default App;
