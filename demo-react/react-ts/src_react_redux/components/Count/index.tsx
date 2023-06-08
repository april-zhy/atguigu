import { Component } from "react";

import store from "../../redux/store";
// 引入actionCreator,专门用来创建action对象：{ type：'increment',data:0 }
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";

export interface CountProps {
  count: number;
  increment: (data: number) => void;
  decrement: (data: number) => void;
}
export interface CountState {
  selectNumber: number;
}
export default class Count extends Component<CountProps, CountState> {
  constructor(props: CountProps) {
    super(props);
    this.state = { selectNumber: 1 };
  }

  onSelectChange = (event: any) => {
    this.setState({ selectNumber: event.target.value });
  };
  increment = () => {
    const { selectNumber } = this.state;
    // 实际上值已经改变了，但是没有渲染，当执行减操作时，这时候会调用render ,这时候会更新
    // store.dispatch({ type: "increment", param: selectNumber * 1 });
    // store.dispatch(createIncrementAction(selectNumber * 1));
    this.props.increment(selectNumber * 1);
  };
  decrement = () => {
    const { selectNumber } = this.state;
    // store.dispatch(createDecrementAction(selectNumber * 1));
    // store.dispatch({ type: "decrement", data: selectNumber * 1 });
    this.props.decrement(selectNumber * 1);
  };
  // 当count是奇数的时候才执行加法操作
  incrementWithOdd = () => {
    const { selectNumber } = this.state;
    const count = store.getState();
    if (count % 2 !== 0) {
      //   store.dispatch({ type: "increment", data: selectNumber * 1 });
      //   store.dispatch(createIncrementAction(selectNumber * 1));
      this.props.increment(selectNumber * 1);
    }
  };
  //   等1秒再加
  incrementWithAsync = () => {
    const { selectNumber } = this.state;
    setTimeout(() => {
      //   store.dispatch({ type: "increment", data: selectNumber * 1 });
      //   store.dispatch(createIncrementAction(selectNumber * 1));
      this.props.increment(selectNumber * 1);
    }, 1000);
  };
  render() {
    return (
      <div style={{ padding: "10px 15px" }}>
        <h1>Count Component</h1>
        <div>Count:{this.props.count}</div>
        <select onChange={this.onSelectChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>increment</button>&nbsp;
        <button onClick={this.decrement}>decrement</button>&nbsp;
        <button onClick={this.incrementWithOdd}>increment with odd</button>
        &nbsp;
        <button onClick={this.incrementWithAsync}>increment with async</button>
      </div>
    );
  }
}
