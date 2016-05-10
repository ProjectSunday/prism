import React from 'react'

import { Header, Testing } from '../components'

class Root extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {

		let root = {
			style: {
				// background: '#ccc'
			}
		}
		return (
			<div {...root}>
				<Header />
				{this.props.children}
				<Testing />
			</div>
		)
	}

}


/*
<UpcomingClassesList upcomingClasses={this.state.upcomingClasses} />

<RequestedClassesList requestedClasses={this.state.requestedClasses} />

*/

export default Root



//trash


// componentWillMount: function () {
// 	this.setState({ 
// 		upcomingClasses: [], 
// 		requestedClasses: RequestedClassesStore.getAll() 
// 	});
// },

// module.exports = React.createClass({
// 	getInitialState: function () {
// 		return {
// 			upcomingClasses: [],
// 			requestedClasses: []	
// 		}
// 	},
// });

