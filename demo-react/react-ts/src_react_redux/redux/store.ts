// 创建唯一的store 并且添加不同的reducers
import { createStore, applyMiddleware } from "redux";

import CountReducer from "./count_reducer";
import thunk from "redux-thunk";

const store = createStore(CountReducer, applyMiddleware(thunk));

export default store;
