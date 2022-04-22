import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import galleryReducser from "./reducers/galleryReducer";


let reducers = combineReducers({
    gallery: galleryReducser
})

type RootReducer = typeof reducers

export type RootState = ReturnType<RootReducer>

export const store = createStore(reducers, applyMiddleware(thunk))