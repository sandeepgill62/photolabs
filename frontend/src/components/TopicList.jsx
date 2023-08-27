import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from './TopicListItem';

const TopicList = ({ topics, updatePhotosByTopics }) => {

  const topicListItemArray = topics ? topics.map((topic) =>
    <div key={topic.id}>
      <TopicListItem
        topic={topic}
        updatePhotosByTopics={updatePhotosByTopics}
      />
    </div>
  ) : null;

  return (
    <div className="top-nav-bar__topic-list">
      {topicListItemArray}
    </div>
  );
};

export default TopicList;
