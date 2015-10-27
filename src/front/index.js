$ = jQuery = require('jquery');

var React 		= require('react');
var ReactDOM 	= require('react-dom');

require('./components/debug/reloadtimer');
var HomePage = require('./components/homepage');

ReactDOM.render(<HomePage />, document.getElementById('index-content'));