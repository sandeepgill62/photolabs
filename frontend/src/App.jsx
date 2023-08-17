import React from 'react';

//

import './App.scss';
import HomeRoute from './routes/HomeRoute';

// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    // <div>
    //   <TopicList />
    //   <div className="photo-list">
    //     <PhotoList />
    //   </div>
    // </div>
    <div className="App">
      <HomeRoute />
    </div>
  );
};

export default App;
