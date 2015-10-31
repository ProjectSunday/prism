var React = require('react');

var Link = require('react-router').Link;

module.exports = React.createClass({
	render: function () {
		return (
			<nav id="header" className="navbar navbar-default" role="navigation">
			  	<div className="container-fluid">
			    	<div className="navbar-header">
			      		<Link to="/" className="navbar-brand"><img src="images/logo.png" alt="Local Learners Logo" title="" className="logo" /></Link>
		      		</div>
				    <div className="collapse navbar-collapse">
				      	<ul className="nav navbar-nav">
							<li className="dropdown">
								<a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Classes <span className="caret"></span></a>
								<ul className="dropdown-menu" role="menu">
									<li><Link to="/about">Upcoming Classes</Link></li>
									<li><Link to="/requested">Requested Classes</Link></li>
								</ul>
							</li>
				        	<li><Link to="/about">Learn</Link></li>
				        	<li><Link to="/about">Teach</Link></li>
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

