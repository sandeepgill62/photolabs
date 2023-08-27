
import { useEffect, useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SHOW_MODAL: "SHOW_MODAL",
  MODAL_PHOTO_DATA: "MODAL_PHOTO_DATA",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  // SELECT_PHOTO: "SELECT_PHOTO",
  // DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
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

  const [photoIDs, dispatch1] = useReducer(reducer, []);
  const [showModal, dispatch2] = useReducer(reducer, false);
  const [modalPhotoData, dispatch3] = useReducer(reducer, {});
  const [fetchData, dispatch4] = useReducer(reducer, initialState);

  const updateFavouritedPhotoIDs = (id, action) => {
    if (!action) {
      dispatch1({ type: ACTIONS.FAV_PHOTO_ADDED, payload: id });
    } else {
      dispatch1({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: id });
    }
  };

  const updateModalData = (flag, item) => {
    console.log(flag);
    console.log(item);

    dispatch2({ type: ACTIONS.SHOW_MODAL, payload: flag });
    dispatch3({ type: ACTIONS.MODAL_PHOTO_DATA, payload: item });

  };

  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then((data) => dispatch4({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  }, []);

  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then((data) => dispatch4({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []);

  return {
    photoIDs,
    showModal,
    modalPhotoData,
    fetchData,
    updateFavouritedPhotoIDs,
    updateModalData
  };
};

export default useApplicationData;
