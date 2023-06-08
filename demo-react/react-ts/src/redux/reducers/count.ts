// 专门做count相关操作的，即为Count服务
// 接收两个参数，之前的状态 & 动作对象:{ type:string,data:any }

import { INCREMENT, DECREMENT } from "../constant";

export default function CountReducer(
  preState: number = 0,
  action: { type2: string; data: number }
) {
  const { type2, data } = action;
  switch (type2) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}
