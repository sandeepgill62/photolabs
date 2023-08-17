import React from 'react';

//
import PhotoList from './components/PhotoList';
import TopNavigationBar from './components/TopNavigationBar';
import './App.scss';

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
      <TopNavigationBar />
      <div>
        <div className="photo-list">
          <PhotoList />
        </div>
      </div>
    </div>
  );
};

export default App;
