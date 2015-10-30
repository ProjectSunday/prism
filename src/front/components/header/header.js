var React = require('react');

var Link = require('react-router').Link;

module.exports = React.createClass({
	render: function () {
		return (
			<nav id="header" className="navbar navbar-default" role="navigation">
			  	<div className="container-fluid">
			    	<div className="navbar-header">
			      		<Link to="app" className="navbar-brand"><img src="images/logo.png" alt="Local Learners Logo" title="" className="logo" /></Link>
		      		</div>
				    <div className="collapse navbar-collapse">
				      	<ul className="nav navbar-nav">
				        	<li><Link to="about">Learn</Link></li>
				        	<li><Link to="about">Teach</Link></li>
				      	</ul>
				      	<ul className="nav navbar-nav navbar-right">
				        	<form className="navbar-form navbar-left" role="search" action="http://www.google.com/search" method="get">
					          	<div className="form-group">
					            	<input  type="hidden" name="output" value="googleabout" />
					            	<input  type="hidden" name="sitesearch" value="locallearners.net" />
					            	<input  type="text"   name="q" className="headerSearchBox form-control" placeholder="Click or type / to Search" ng-model="searchText" id="headerSearchBox" autocomplete="off" ng-focus="searchBoxOnFocus()" />
					            	<button type="submit" className="btn btn-info">
					            		<span className="glyphicon glyphicon-search" title="Submit"></span>
				            		</button>
					          	</div>
				        	</form>
				      	</ul>
			  		</div>
		  		</div>
			</nav>
		)
	}
});


			// <div>
			// 	<nav className="navbar navbar-default navbar-static-top">
			// 		<div className="container">
			// 			<div className="navbar-header">
			// 				<Link to="app" className="navbar-brand">Prism</Link>
			// 			</div>

			// 			<div className="navbar-collapse collapse">
			// 				<ul className="nav navbar-nav"
			// 			</div>

			// 			<ul className="nav navbar-bar">
			// 				<li><Link to="app">Home</Link></li>		
			// 				<li><Link to="about">About</Link></li>
			// 			</ul>
			// 		</div>
			// 	</nav>
			// 	<div>header</div>
			// 	<Link to="app">Home</Link>
			// 	<br />
			// 	<Link to="about">About</Link>
			// </div>
