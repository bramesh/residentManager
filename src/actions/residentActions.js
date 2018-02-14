import axios from 'axios';

export function getResidents() {
	return function(dispatch) {
		axios.get('/residents')
			.then(function(response) {
				dispatch({type: 'GET_RESIDENTS', payload: response.data})
			})
			.catch(function(err) {
				dispatch({type: 'GET_RESIDENTS_ERROR', payload: err})
			})
	}
}