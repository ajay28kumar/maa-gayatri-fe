import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { actionType } from '../constant';
import { db } from '../firebaseSetup';

export default (data) => async (dispatch) => {
  const payload = {
    ...data,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  };
  try {
    await addDoc(collection(db, 'stockRate'), payload);
    dispatch({
      type: actionType.UPDATE_DATA_SUCCESS,
      payload,
    });
  } catch (err) {
    console.log('error in update : ', err);
  }
};
