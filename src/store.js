import { configureStore} from '@reduxjs/toolkit';
import dataSlice from './components/slice/dataSlice';
const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});

export default store;
