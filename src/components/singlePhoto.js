"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Photo = React.createClass({
	getInitialState: function(){
			return {
				imageLoaded: false,
				image: '',
				comments: '',
				likes: ''
			};
	}

	, componentWillMount: function() {
		var self = this;
		$.ajax({
			url: 'http://127.0.0.1:8000/api/v1/photos/'
			, type: 'GET'
			, error: function(xhr, textStatus, errorThrown) {

			}
		}).then(function(data) {
			function findPhoto(img) {
				return img.id === parseInt(self.props.params.photo_id);
			}
            self.setState({imageLoaded: true});
			self.setState({image: data.find(findPhoto)});
		});
	}

	, onCommentHandler: function(event) {
		event.persist();

		var id = event.target.id;
		var elem = document.getElementById("comm-for-" + id);

		if (elem.style.display === 'block')
		{
			elem.style.display = 'none';
		}
		else
		{
			elem.style.display = 'block';
		}
	}
	, render: function() {
		var self = this;
		return (
			<div className="container">
				<div className="row">
						<img src={'http://127.0.0.1:8000' + self.state.image.photo} />
					</div>
			</div>);
	}
});

module.exports = Photo;