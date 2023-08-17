import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from './TopicListItem';

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = (props) => {

  const { topics } = props;

  const topicListItemArray = topics.map((topic) =>
    <div key={topic.id}><TopicListItem topic={topic} /></div>
  );

  // const topicListItemArray = sampleDataForTopicList.map((topic) =>
  //   <div key={topic.id}><TopicListItem topic={topic} /></div>
  // );

  return (
    <div className="top-nav-bar__topic-list">
      {topicListItemArray}
    </div>
  );
};

export default TopicList;
