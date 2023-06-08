import { IPerson } from "../../container/Person";
import { ADD_PERSON } from "../constant";

export default function PersonReducer(
  prePersons: Array<IPerson> = [],
  action: { type: string; person: IPerson }
) {
  const { type, person } = action;
  switch (type) {
    case ADD_PERSON:
      return [...prePersons, { ...person }];
    default:
      return [...prePersons];
  }
}
