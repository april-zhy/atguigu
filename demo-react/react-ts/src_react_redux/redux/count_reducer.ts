// 专门做count相关操作的，即为Count服务
// 接收两个参数，之前的状态 & 动作对象:{ type:string,data:any }

import { INCREMENT, DECREMENT } from "./constant";

export default function CountReducer(
  preState: any = 0,
  action: { type: string; data: number }
) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}
