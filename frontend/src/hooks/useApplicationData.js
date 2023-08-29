
import { useEffect, useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SHOW_MODAL: "SHOW_MODAL",
  MODAL_PHOTO_DATA: "MODAL_PHOTO_DATA",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return [...state, action.payload];
    case ACTIONS.FAV_PHOTO_REMOVED:
      return state.filter((id) => id !== action.payload);
    case ACTIONS.SHOW_MODAL:
      return action.payload;
    case ACTIONS.MODAL_PHOTO_DATA:
      return action.payload;
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, photoData: action.payload };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

const useApplicationData = () => {

  const initialState = {
    photoData: [],
    topicData: []
  };

  const [photoIDs, setPhotoIds] = useReducer(reducer, []);
  const [showModal, setShowModal] = useReducer(reducer, false);
  const [modalPhotoData, setModalPhotoData] = useReducer(reducer, {});
  const [fetchData, setFetchData] = useReducer(reducer, initialState);

  const updateFavouritedPhotoIDs = (id) => {
    if (photoIDs.indexOf(id) < 0) {
      setPhotoIds({ type: ACTIONS.FAV_PHOTO_ADDED, payload: id });
    } else {
      setPhotoIds({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: id });
    }
  };

  const updateModalData = (flag, item) => {
    setShowModal({ type: ACTIONS.SHOW_MODAL, payload: flag });
    setModalPhotoData({ type: ACTIONS.MODAL_PHOTO_DATA, payload: item });
  };

  const fetchAllPhotos = () => {
    fetch('/api/photos')
      .then(res => res.json())
      .then((data) => setFetchData({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  };

  useEffect(() => {
    fetchAllPhotos();
  }, []);

  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then((data) => setFetchData({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []);

  const updatePhotosByTopics = (flag, topic) => {
    if (flag) {
      fetch(`/api/topics/photos/${topic.id}`)
        .then(res => res.json())
        .then((data) => setFetchData({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data }));
    } else {
      fetchAllPhotos();
    }
  };

  return {
    photoIDs,
    showModal,
    modalPhotoData,
    fetchData,
    updateFavouritedPhotoIDs,
    updateModalData,
    updatePhotosByTopics
  };
};

export default useApplicationData;
