import { configureStore } from "@reduxjs/toolkit";
import placeReducer from './slices/placeSlice';
import routeStatusReducer from './slices/routeStatusSlice';

export default configureStore({
    reducer: {
        places: placeReducer,
        route: routeStatusReducer,
    },
})