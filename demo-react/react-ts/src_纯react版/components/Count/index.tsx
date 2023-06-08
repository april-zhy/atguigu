import React, { Component } from "react";

export default class Count extends Component {
  state = { count: 0, selectNumber: 1 };

  onSelectChange = (event: any) => {
    this.setState({ selectNumber: event.target.value });
  };
  increment = () => {
    const { count, selectNumber } = this.state;
    this.setState({ count: count + selectNumber * 1 });
  };
  decrement = () => {
    const { count, selectNumber } = this.state;
    this.setState({ count: count - selectNumber * 1 });
  };
  // 当count是奇数的时候才执行加法操作
  incrementWithOdd = () => {
    const { count, selectNumber } = this.state;
    if (count % 2 !== 0) {
      this.setState({ count: count + selectNumber * 1 });
    }
  };
  //   等1秒再加
  incrementWithAsync = () => {
    const { count, selectNumber } = this.state;
    setTimeout(() => {
      this.setState({ count: count + selectNumber * 1 });
    }, 1000);
  };
  render() {
    return (
      <div style={{ padding: "10px 15px" }}>
        <h1>Count Component</h1>
        <div>当前求和为: {this.state.count}</div>
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
