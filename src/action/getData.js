import { collection, getDocs } from 'firebase/firestore';
import { actionType } from '../constant';
import { db } from '../firebaseSetup';

const getData = () => (dispatch) => {
  const fetchData = async () => await getDocs(collection(db, 'stockRate'));
  fetchData().then((res) => {
    const responseData = {};
    res.docs.forEach((doc) => {
      responseData[doc.id] = { id: doc.id, ...doc.data() };
    });
    dispatch({
      type: actionType.GET_ALL_DATA_SUCCESS,
      payload: responseData,
    });
  });
};

export default getData;
