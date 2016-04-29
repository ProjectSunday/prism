// var React = require('react');
// var Link = require('react-router').Link;


// var UpcomingClassTile = require('./upcomingclasstile');

// module.exports = React.createClass({
// 	render: function () {
// 		var classes = this.props.upcomingClasses;
// 		var tiles = [];

//         if (classes.length) {
//             for (var i in classes) {
//                 tiles.push(<UpcomingClassTile key={classes[i].id} details={classes[i]} />);
//             }
//         } else {
//             tiles.push(<div key="na" className="col-md-4 col-sm-6 col-xs-6"><em>There are no upcoming classes.</em></div>);
//         }

// 		return (
// 			<div id="upcoming-classes-list" className="container">
// 				<div className="row">
// 					<div className="col-md-6 col-sm-6 col-xs-6">
// 	            		<h4><Link to="/about">Upcoming Classes</Link></h4>
// 					</div>
// 				</div>
// 				<div className="row">
// 					{tiles}
// 				</div>
// 			</div>
// 		)
// 	}
// });


import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { CategoryDropDown, UpcomingTile } from '../../components'

const mapStateToProps = (state, ownProps) => {
	return {
		upcomingClasses: state.main.upcomingClasses
	}
}

@connect(mapStateToProps)
export default class TopUpcoming extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {

		const { upcomingClasses } = this.props

		var nodes = upcomingClasses.map((u, i) => <UpcomingTile key={i} {...u} />)

		let container = {
			className: 'container'
		}

		let header = {
			className: 'row'
		}

		let title = {
			className: 'col-md-6 col-sm-6 col-xs-6'
		}

		let category = {
			className: 'col-md-2 pull-right'
		}

		let categoryDropDown = {
			additionalOptions: [ 
				{ id: 0, name: 'All Categories'}
			],
			onSelect: (e) => { console.log('yo', e.target.value) }
		}

		let body = {
			className: 'row'
		}
		
		return (
			<div {...container}>
				<div {...header}>
					<div {...title}>
	            		<h4><Link to="/about">Upcoming Classes</Link></h4>
					</div>
					<div {...category}>
						<CategoryDropDown {...categoryDropDown}/>
					</div>
				</div>
				<div {...body}>
					{nodes}
				</div>
			</div>
		)
	}
}

