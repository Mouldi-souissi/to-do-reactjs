import { ADD_TO_DO } from "./actiontypes";
import uuid from "uuid";

export const addtodo = (input, isDone, id) => ({
	type: ADD_TO_DO,
	input,
	isDone,
	id: uuid()
});
