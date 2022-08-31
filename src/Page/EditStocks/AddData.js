import DataForm from './DataForm';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebaseSetup';

const AddData = () => {
  const handleSubmit = async (e, stockData) => {
    e.preventDefault();
    const { remainingStock, ...rest } = stockData || {};
    const data = {
      ...rest,
      createdAt: Timestamp.now(),
    };
    try {
      await addDoc(collection(db, 'stockRate'), data);
    } catch (err) {
      console.log('error in update : ', err);
    }
  };
  return <DataForm onSubmitAction={handleSubmit} />;
};

export default AddData;
