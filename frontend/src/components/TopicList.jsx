import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from './TopicListItem';

const TopicList = (props) => {

  const { topics, updatePhotosByTopics } = props;

  const topicListItemArray = topics.map((topic) =>
    <div key={topic.id}>
      <TopicListItem
        topic={topic}
        updatePhotosByTopics={updatePhotosByTopics}
      />
    </div>
  );

  return (
    <div className="top-nav-bar__topic-list">
      {topicListItemArray}
    </div>
  );
};

export default TopicList;
