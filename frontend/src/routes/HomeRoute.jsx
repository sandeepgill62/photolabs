import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const { topics, photos, updateFavouritedPhotoIDs, isFavPhotoExist, photoClick } = props;

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
      />
      <div className="photo-list">
        <PhotoList
          photos={photos}
          updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
          photoClick={photoClick}
        />
      </div>
    </div>
  );
};

export default HomeRoute;
