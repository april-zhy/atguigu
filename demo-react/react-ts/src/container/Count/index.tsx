import { Component } from "react";
import { connect } from "react-redux";
import {
  createDecrementAction,
  createIncrementAction,
} from "../../redux/store";
// import {
//   createIncrementAction,
//   createDecrementAction,
// } from "../../redux/actions/count";

interface CountProps {
  count: number;
  personNumber?: number;
  increment: (data: number) => void;
  decrement: (data: number) => void;
}

interface CountState {
  selectNumber: number;
}
class Count extends Component<CountProps, CountState> {
  constructor(props: CountProps) {
    super(props);
    this.state = { selectNumber: 1 };

    console.log(props);
  }

  onSelectChange = (event: any) => {
    this.setState({ selectNumber: event.target.value });
  };

  increment = () => {
    const { selectNumber } = this.state;
    this.props.increment(selectNumber * 1);
  };
  decrement = () => {
    const { selectNumber } = this.state;
    this.props.decrement(selectNumber * 1);
  };
  incrementWithOdd = () => {
    const { selectNumber } = this.state;
    const count = this.props.count;
    if (count % 2 !== 0) {
      this.props.increment(selectNumber * 1);
    }
  };
  incrementWithAsync = () => {
    const { selectNumber } = this.state;
    setTimeout(() => {
      this.props.increment(selectNumber * 1);
    }, 1000);
  };
  render() {
    return (
      <div style={{ padding: "10px 15px" }}>
        <h2>Count Component</h2>
        <h3>下方组件人数为：{this.props.personNumber}</h3>
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

function mapStateToProps(state: any) {
  return {
    count: state.countZHY.count,
    personNumber: state.personZHY.personCount,
  };
}
function mapDispatchToProps(dispatch: any) {
  return {
    increment: (number: number) => dispatch(createIncrementAction(number)),
    decrement: () => dispatch(createDecrementAction()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);
