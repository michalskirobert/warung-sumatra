import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import reducers from "@store/reducers";

const rootReducer = combineReducers({
  ...reducers,
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
