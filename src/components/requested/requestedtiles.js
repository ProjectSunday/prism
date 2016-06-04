import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Row, Col, Grid } from 'react-bootstrap'

import { RequestedTile } from '../components'

const mapStateToProps = (state, ownProps) => {
	return {
		categories: state.app.categories
	}
}

@connect(mapStateToProps)
export default class RequestedTiles extends React.Component {
	render() {
		const { categories } = this.props;

		var tiles = categories.map((c, i) => <RequestedTile key={i} category={c} /> )

		if (!tiles.length) {
			tiles.push(<Col key="na" md={4} sm={6} xs={6}><em>There are no requested classes.</em></Col>)
		}

		return (
			<Grid className="requested-tiles">
        		<h3>Requested Classes</h3>
				<Row>
					{tiles}
				</Row>
			</Grid>
		)
	}
}

// var React = require('react');
// var Link = require('react-router').Link;


// var RequestedClassTile = require('./requestedclasstile');

// module.exports = React.createClass({
// 	render: function () {
// 		var classes = this.props.requestedClasses;
// 		var tiles = [];
// 		if (classes.length) {
// 			for (var i in classes) {
// 				tiles.push(<RequestedClassTile key={classes[i].id} details={classes[i]} />);
// 			}
// 		} else {
// 			tiles.push(<div key="na" className="col-md-4 col-sm-6 col-xs-6"><em>There are no requested classes.</em></div>);
// 		}
// 		return (
// 			<div id="requested-classes-list" className="container">
// 				<div className="row">
// 					<div className="col-md-6 col-sm-6 col-xs-6">
// 	            		<h4><Link to="/requested">Requested Classes</Link></h4>
// 					</div>
// 				</div>
// 				<div className="row">
// 					{tiles}
// 				</div>
// 			</div>
// 		)
// 	}
// });

