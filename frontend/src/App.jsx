import React from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from "../src/mocks/photos";
import topics from "../src/mocks/topics.js";

// Note: Rendering a single component to build components in isolation
const App = () => {

  console.log(topics);
  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} />
    </div>
  );
};

export default App;
