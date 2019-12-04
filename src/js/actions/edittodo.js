import { EDIT_TO_DO } from "./actiontypes";
export const edittodo = (id, input) => ({
	type: EDIT_TO_DO,
	id,
	input
});
