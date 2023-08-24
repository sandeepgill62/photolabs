import React, { useState, useEffect } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from "../src/mocks/photos";
import topics from "../src/mocks/topics.js";

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [photoIDs, setPhotoIDs] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [modelPhotoData, setModelPhotoData] = useState({});
  let isFavPhotoExist = false;

  const updateFavouritedPhotoIDs = (id, action) => {
    if (!action) {
      setPhotoIDs((prevPhotoIDs) => [...prevPhotoIDs, id]);
    } else {
      setPhotoIDs(oldValues => {
        return oldValues.filter(itemID => itemID !== id);
      });
    }
  };

  const setModelData = (flag, item) => {
    setShowModel(flag);
    setModelPhotoData(item);
  };

  { isFavPhotoExist = photoIDs.length ? !isFavPhotoExist : isFavPhotoExist; }

  // useEffect(() => {
  //   console.log(photoIDs);
  // }, [photoIDs]);

  useEffect(() => {
    // console.log(modelPhotoData);
  }, [modelPhotoData]);

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
        isFavPhotoExist={isFavPhotoExist}
        setModelData={setModelData}
      />
      {
        showModel &&
        < PhotoDetailsModal
          setModelData={setModelData}
          modelPhotoData={modelPhotoData}
          updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
        />
      }
    </div >
  );
};

export default App;
