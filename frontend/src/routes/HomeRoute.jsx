import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';


const HomeRoute = (props) => {
  const { topics, photos, updateFavouritedPhotoIDs } = props;

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
      />
      <div className="photo-list">
        <PhotoList
          photos={photos}
          updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
        // iconClick={iconClick}
        />
      </div>
    </div>
  );
};

export default HomeRoute;
