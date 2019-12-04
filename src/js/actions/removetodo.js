import { REMOVE_TO_DO } from "./actiontypes";

export const removetodo = id => ({
	type: REMOVE_TO_DO,
	id
});
