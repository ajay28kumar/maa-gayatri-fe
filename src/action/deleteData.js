import { doc, deleteDoc } from 'firebase/firestore';
import { actionType } from '../constant';
import { db } from '../firebaseSetup';

const deleteData = (data) => async (dispatch) => {
  const taskDocRef = doc(db, 'stockRate', data.id);
  dispatch({
      type: actionType.DELETE_DATA_REQUEST,
      payload: {id: data.id}
  })
  try {
    await deleteDoc(taskDocRef).then(()=>{
      console.log("success delete")
      dispatch({
        type: actionType.DELETE_DATA_SUCCESS,
        payload: {id: data.id}
      })
    })
   
  } catch(err) {
    console.log("error in delete : ", err)
     dispatch({
      type: actionType.DELETE_DATA_ERROR,
      payload: {id: data.id}
    })
  }
  setTimeout(()=>{
    dispatch({
      type: actionType.DELETE_DATA_RESET})
  },2000)
}

export default deleteData;
