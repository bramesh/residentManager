import {combineReducers} from 'redux';

import {ResidentReducer} from './ResidentReducer.js'

export default combineReducers({
	residents: ResidentReducer
})