// 创建唯一的store 并且添加不同的reducers
import { createStore } from "redux";

import CountReducer from "./count_reducer";

const store = createStore(CountReducer);
console.log(store);

export default store;
