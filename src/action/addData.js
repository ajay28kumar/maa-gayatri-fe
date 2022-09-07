import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { actionType } from '../constant';
import { db } from '../firebaseSetup';

const addData = (data) => async (dispatch) => {
  const payload = {
    ...data,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  };
  dispatch({
    type: actionType.UPDATE_DATA_REQUEST
  });
  try {
    await addDoc(collection(db, 'stockRate'), payload);
    dispatch({
      type: actionType.UPDATE_DATA_SUCCESS,
      payload,
    });
  } catch (err) {
    console.log('error in update : ', err);
  }
  setTimeout(()=>{
    dispatch({
      type: actionType.UPDATE_DATA_RESET
    });
  },2000);
};

export default addData;
