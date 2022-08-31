import { actionType } from '../constant';
import { doc, updateDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebaseSetup';

const updateData = (itemData) => async (dispatch) => {
  const taskDocRef = doc(db, 'stockRate', itemData.id);
  try {
    await updateDoc(taskDocRef, {
      ...itemData,
      updatedAt: Timestamp.now(),
    });
    dispatch({
      type: actionType.UPDATE_DATA_SUCCESS,
      payload: {
        ...itemData,
        updatedAt: Timestamp.now(),
      },
    });
  } catch (err) {
    alert(err);
  }
  return dispatch({
    type: actionType.UPDATE_DATA_REQUEST,
    payload: itemData,
  });
};

export default updateData;
