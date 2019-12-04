import { createStore, combineReducers } from "redux";
import { reducer } from "./reducers/reducer0";

const initialState = {
	tasks: []
};

const megaReducer = combineReducers({
	tasks: reducer
});

export const store = createStore(
	megaReducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// store.dispatch(addtodo);
console.log(store.getState());
