import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../../components/Auth/Slice';

const rootReducer = {
    authreducer: AuthReducer,
};

const store =configureStore({
    reducer: rootReducer,
});

export default store;