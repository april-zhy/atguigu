// 专门做count相关操作的，即为Count服务
// 接收两个参数，之前的状态 & 动作对象:{ type:string,data:any }

export default function CountReducer(
  preState: any = 0,
  action: { type: string; data: number }
) {
  const { type, data } = action;
  console.log("CountReducer: preState", preState);
  console.log("CountReducer: type&data", type, data);

  switch (type) {
    case "increment":
      return preState + data;
    case "decrement":
      return preState - data;
    default:
      return preState;
  }
}
