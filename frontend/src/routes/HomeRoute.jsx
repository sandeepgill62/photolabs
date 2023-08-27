import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const {
    topics,
    photos,
    updateFavouritedPhotoIDs,
    isFavPhotoExist,
    updateModalData,
    updatePhotosByTopics
  } = props;

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
        updatePhotosByTopics={updatePhotosByTopics}
      />
      <div className="photo-list">
        <PhotoList
          photos={photos}
          updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
          updateModalData={updateModalData}
        />
      </div>
    </div>
  );
};

export default HomeRoute;
