"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function() {
		var style = {
		background: '#808080'
		};
		var coolfont = {
		fontFamily: 'verdana',
		fontSize: 32,
		color: '#33ccff',
		textAlign: 'center',
		margin: 4
		};
		return (
        <nav className="navbar navbar-default">
          <div className="container-fluid" style={style}>
              <ul className="nav navbar-nav">
		<p style={coolfont}>Pentagram</p>
              </ul>
          </div>
        </nav>
		);
	}
});

module.exports = Header;
