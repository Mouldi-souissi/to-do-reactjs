import { COMPLETE_TO_DO } from "./actiontypes";
export const completetodo = (id, isDone) => ({
	type: COMPLETE_TO_DO,
	id,
	isDone
});
