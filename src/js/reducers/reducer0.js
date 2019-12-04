import { ADD_TO_DO } from "../actions/actiontypes";
import { REMOVE_TO_DO } from "../actions/actiontypes";
import { COMPLETE_TO_DO } from "../actions/actiontypes";
import { EDIT_TO_DO } from "../actions/actiontypes";

// const initialState = {
// 	tasks: [
// 		{
// 			id: "",
// 			desc: "go",
// 			isDone: false
// 		}
// 	]
// };

export const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TO_DO:
			return [
				...state,
				{ input: action.input, isDone: action.isDone, id: action.id }
			];
		case REMOVE_TO_DO:
			return state.filter(el => el.id !== action.id);
		case COMPLETE_TO_DO:
			// return state.map(
			// 	el => el.id === action.id && { ...el, isDone: !el.isDone }
			// );
			return state.map(el => {
				if (el.id === action.id) {
					return { ...el, isDone: !el.isDone };
				} else {
					return el;
				}
			});
		case EDIT_TO_DO:
			return state.map(el => {
				if (el.id === action.id) {
					return { ...el, input: action.input };
				} else {
					return el;
				}
			});

		// return state.map(
		// 	el => el.id === action.id && { ...el, input: action.input }
		// );

		default:
			return state;
	}
};
