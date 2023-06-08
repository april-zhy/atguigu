// create action
import { INCREMENT, DECREMENT } from "../constant";

export const createIncrementAction = (data: number) => ({
  type: INCREMENT,
  data,
});
export const createDecrementAction = (data: number) => ({
  type: DECREMENT,
  data,
});
