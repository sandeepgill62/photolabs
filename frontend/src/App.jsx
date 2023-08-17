import React from 'react';

//
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div>
      <TopicList />
      <div className="photo-list">
        <PhotoList />
      </div>
    </div>
  );
};

export default App;
