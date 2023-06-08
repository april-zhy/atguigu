import { IPerson } from "../../container/Person";
import { ADD_PERSON } from "../constant";

export const addPersonAction = (person: IPerson) => ({
  type: ADD_PERSON,
  person,
});
