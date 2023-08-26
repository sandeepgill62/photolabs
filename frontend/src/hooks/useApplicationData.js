import { useEffect, useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SHOW_MODAL: "SHOW_MODAL",
  MODAL_PHOTO_DATA: "MODAL_PHOTO_DATA",
  // SET_PHOTO_DATA: "SET_PHOTO_DATA",
  // SET_TOPIC_DATA: "SET_TOPIC_DATA",
  // SELECT_PHOTO: "SELECT_PHOTO",
  // DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return [...state, action.id];
    case ACTIONS.FAV_PHOTO_REMOVED:
      return state.filter((id) => id !== action.id);
    case ACTIONS.SHOW_MODAL:
      return action.flag;
    case ACTIONS.MODAL_PHOTO_DATA:
      return action.item;
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

const useApplicationData = () => {
  //const [photoIDs, setPhotoIDs] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  // const [modalPhotoData, setModalPhotoData] = useState({});

  const [photoIDs, dispatch1] = useReducer(reducer, []);
  const [showModal, dispatch2] = useReducer(reducer, false);
  const [modalPhotoData, dispatch3] = useReducer(reducer, {});

  const updateFavouritedPhotoIDs = (id, action) => {
    if (!action) {
      console.log("add");
      dispatch1({ type: ACTIONS.FAV_PHOTO_ADDED, id: id });
      //setPhotoIDs((prevPhotoIDs) => [...prevPhotoIDs, id]);
    } else {
      console.log("remove");
      dispatch1({ type: ACTIONS.FAV_PHOTO_REMOVED, id: id });
      // setPhotoIDs((oldValues) => {
      //   return oldValues.filter((itemID) => itemID !== id);
      // });
    }
  };

  const updateModalData = (flag, item) => {
    dispatch2({ type: ACTIONS.SHOW_MODAL, flag: flag });
    dispatch3({ type: ACTIONS.MODAL_PHOTO_DATA, item: item });
    // setShowModal(flag);
    // setModalPhotoData(item);
  };

  useEffect(() => {
    console.log(photoIDs);
  }, [photoIDs]);

  return {
    photoIDs,
    showModal,
    modalPhotoData,
    updateFavouritedPhotoIDs,
    updateModalData,
  };
};

export default useApplicationData;
