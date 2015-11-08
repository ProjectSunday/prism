var React = require('react');
var Link = require('react-router').Link;


var RequestedClassTile = require('./requestedclasstile');

module.exports = React.createClass({
	render: function () {
		var classes = this.props.requestedClasses;
		var tiles = [];
		if (classes.length) {
			for (var i in classes) {
				tiles.push(<RequestedClassTile key={classes[i].id} details={classes[i]} />);
			}
		} else {
			tiles.push(<div key="na" className="col-md-4 col-sm-6 col-xs-6"><em>There are no requested classes.</em></div>);
		}
		return (
			<div id="requested-classes-list" className="container">
				<div className="row">
					<div className="col-md-6 col-sm-6 col-xs-6">
	            		<h4><Link to="/about">Requested Classes</Link></h4>
					</div>
				</div>
				<div className="row">
					{tiles}
				</div>
			</div>
		)
	}
});

