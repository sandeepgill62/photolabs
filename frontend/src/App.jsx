import React from 'react';

//
import PhotoList from './components/PhotoList';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="photo-list">
      <PhotoList />
    </div>
  );
};

export default App;
