// // 创建唯一的store 并且添加不同的reducers
// import {
//   legacy_createStore as createStore,
//   applyMiddleware,
//   combineReducers,
// } from "redux";
// import thunk from "redux-thunk";
// import CountReducer from "./reducers/count";
// import PersonReducer from "./reducers/person";

import { createSlice, configureStore } from "@reduxjs/toolkit";
import { stat } from "fs";
import { combineReducers } from "redux";

// const allReducer = combineReducers({
//   he: CountReducer,
//   rens: PersonReducer,
// });

// const store = createStore(allReducer, applyMiddleware(thunk));

// export default store;

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    createIncrementAction: (state, action) => {
      state.count = state.count + action.payload;
    },
    createDecrementAction: (state) => {
      state.count--;
    },
  },
  extraReducers: {},
});

const personSlice = createSlice({
  name: "person",
  initialState: {
    persons: [{ uid: "001", name: "xxx", age: 12 }] as Array<any>,
    personCount: 0,
  },
  reducers: {
    addPersonAction: (
      state,
      action: {
        type: string;
        payload: { uid: string; name: string; age: number };
      }
    ) => {
      state.persons.push(action.payload);
      state.personCount = state.persons.length;
    },
  },
});

export const { createIncrementAction, createDecrementAction } =
  counterSlice.actions;

export const { addPersonAction } = personSlice.actions;

const allReducer = combineReducers({
  personZHY: personSlice.reducer,
  countZHY: counterSlice.reducer,
});

export default configureStore({
  reducer: allReducer,
});
