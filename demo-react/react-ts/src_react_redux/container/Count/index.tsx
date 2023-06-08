// 容器,不能称之为组件，因为是无实体的，理解为虚拟的中介

// 引入UI组件
import CountUI from "../../components/Count";

// 引入action
import {
  createIncrementAction,
  createDecrementAction,
} from "../../redux/count_action";

// 引入connect 用于连接UI组件和redux
import { connect } from "react-redux";

function mapStateToProps(state: any) {
  return {
    count: state,
  };
}
function mapDispatchToProps(dispatch: any) {
  return {
    increment: (number: number) => dispatch(createIncrementAction(number)),
    decrement: (number: number) => dispatch(createDecrementAction(number)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
