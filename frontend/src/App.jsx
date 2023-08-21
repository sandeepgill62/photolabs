import React, { useState, useEffect } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from "../src/mocks/photos";
import topics from "../src/mocks/topics.js";

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [photoIDs, setPhotoIDs] = useState([]);

  const updateFavouritedPhotoIDs = (id, action) => {
    if (!action) {
      setPhotoIDs((prevPhotoIDs) => [...prevPhotoIDs, id]);
    } else {
      setPhotoIDs(oldValues => {
        return oldValues.filter(itemID => itemID !== id);
      });
    }
  };

  useEffect(() => {
    console.log(photoIDs);
  }, [photoIDs]);

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
      />
    </div >
  );
};

export default App;
