import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ topics, isFavPhotoExist, updatePhotosByTopics }) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => updatePhotosByTopics(false)}>PhotoLabs</span>
      <TopicList
        topics={topics}
        updatePhotosByTopics={updatePhotosByTopics}
      />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;