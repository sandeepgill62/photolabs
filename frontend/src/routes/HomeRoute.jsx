import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigationBar />
      <div className="photo-list">
        <PhotoList />
      </div>
    </div>
  );
};

export default HomeRoute;
