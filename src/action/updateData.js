import { actionType } from '../constant';
import { doc, updateDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebaseSetup';

const updateData = (itemData) => async (dispatch) => {
  const taskDocRef = doc(db, 'stockRate', itemData.id);
  dispatch({
    type: actionType.UPDATE_DATA_REQUEST,
    payload: itemData,
  });
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
  setTimeout(()=>{
    dispatch({
      type: actionType.UPDATE_DATA_RESET})
  },1000)
};

export default updateData;
