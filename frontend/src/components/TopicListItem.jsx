import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  const { topic } = props;

  return (
    <div className="topic-list__item">
      {topic.title}
    </div>
  );
};

export default TopicListItem;
