import { configureStore } from '@reduxjs/toolkit'
import fetchData from './fetchData'
import reload from './reload';

export default configureStore({
  reducer: {
      data: fetchData,
      reload: reload
  },
});