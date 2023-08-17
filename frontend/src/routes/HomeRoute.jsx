import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const { topics, photos } = props;
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} />
      <div className="photo-list">
        <PhotoList photos={photos} />
      </div>
    </div>
  );
};

export default HomeRoute;
