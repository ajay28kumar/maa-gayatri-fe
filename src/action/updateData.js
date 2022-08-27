import { actionType } from "../constant";
import {collection, where, doc,query, updateDoc, Timestamp} from 'firebase/firestore';
import {db} from '../firebaseSetup';

export default(itemData) => async (dispatch) => {
   const taskDocRef = doc(db, 'stockRate', itemData.id)
   try{
     await updateDoc(taskDocRef, {
       ...itemData,
       updatedAt: Timestamp.now()
     });
     dispatch({
        type: actionType.UPDATE_DATA_SUCCESS,
        payload : {
            ...itemData,
            updatedAt: Timestamp.now()
        }
    })
   } catch (err) {
     alert(err)
   }
   return dispatch ({
       type: actionType.UPDATE_DATA_REQUEST,
       payload: itemData
   })
};