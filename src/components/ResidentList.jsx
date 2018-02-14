import React from 'react';

import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import {getResidents} from '../actions/residentActions';

class ResidentList extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getResidents();
	}
	render() {
		const residents = this.props.residents;
		const residentNames = residents.map(resident => (
				<div key={resident._id}>{resident.residentName}</div>
			))
		return(
			<div>
				{residentNames}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		residents: state.residents.residents
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getResidents,
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ResidentList);