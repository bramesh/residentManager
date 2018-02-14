export function ResidentReducer (state={residents:[]}, action) {
	switch(action.type) {
		case 'GET_RESIDENTS':
		return {residents:[...state, ...action.payload]}
		break;
	}
	return state;
}