import { Component } from "react";

import store from "../../redux/store";

export default class Count extends Component {
  state = { selectNumber: 1 };

  componentDidMount() {
    //检测redux中state的变化，只要变化，就调用render
    store.subscribe(() => {
      this.setState({});
    });
  }

  onSelectChange = (event: any) => {
    this.setState({ selectNumber: event.target.value });
  };
  increment = () => {
    const { selectNumber } = this.state;
    // 实际上值已经改变了，但是没有渲染，当执行减操作时，这时候会调用render ,这时候会更新
    store.dispatch({ type: "increment", data: selectNumber * 1 });
  };
  decrement = () => {
    const { selectNumber } = this.state;
    store.dispatch({ type: "decrement", data: selectNumber * 1 });
  };
  // 当count是奇数的时候才执行加法操作
  incrementWithOdd = () => {
    const { selectNumber } = this.state;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch({ type: "increment", data: selectNumber * 1 });
    }
  };
  //   等1秒再加
  incrementWithAsync = () => {
    const { selectNumber } = this.state;
    setTimeout(() => {
      store.dispatch({ type: "increment", data: selectNumber * 1 });
    }, 1000);
  };
  render() {
    return (
      <div style={{ padding: "10px 15px" }}>
        <h1>Count Component</h1>
        <div>当前求和为: {store.getState()}</div>
        <select onChange={this.onSelectChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>加</button>&nbsp;
        <button onClick={this.decrement}>减</button>&nbsp;
        <button onClick={this.incrementWithOdd}>奇数加</button>&nbsp;
        <button onClick={this.incrementWithAsync}>异步加</button>
      </div>
    );
  }
}
