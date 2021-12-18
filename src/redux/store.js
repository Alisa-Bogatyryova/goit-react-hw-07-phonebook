import { configureStore} from '@reduxjs/toolkit';
import rootReducer from './contacts/contacts-reducer';


const store = configureStore({
  reducer: rootReducer,
});

export default store;