/**
 * Created by User on 7/21/2016.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Photo = React.createClass({
	getInitialState: function(){
			return {
				images: [{
					"id": 1,
					"user": 2,
					"photo": "/media/Koala.jpg"
				}]
			};
	},

	componentWillMount: function() {
		var self = this;
		$.ajax({
			url: 'http://127.0.0.1:8000/api/v1/photos/'
			, type: 'GET'
			, error: function(xhr, textStatus, errorThrown) {

			}
		}).then(function(data) {
            self.setState({images: data});
		});
		        $.ajax({

            beforeSend: function(xhr){
                var tokennumber = sessionStorage.getItem("authToken");
                xhr.setRequestHeader('Authorization', 'Token' + tokennumber);
                console.log('Token Authorization Set as: ' + tokennumber);

            }
            , url: 'http://localhost:8000/api/v1/login/'
            , type: 'POST'
            , data: this.state
            , success: function(){
                alert('succes http://localhost:8000/api/v1/login/');
            }
            }).then(function(data) {
               // console.log("Authentication Token: ", data.token)
              //sessionStorage.setItem('authToken', data.token);
            });

	}

	, onCommentHandler: function(event) {
		var photoId = event.target.dataset.id;
		Router.HashLocation.push('photo/' + photoId);
	}
	, render: function() {
		var self = this;
		return (
			<div className="container">
				<div className="row">
					{self.state.images.map(function (item) {
						return (
						<div className="col-md-4 image-frame" key={item.id} >
							<a href={'#/photo/' + item.id}>
								<img src={'http://127.0.0.1:8000' + item.photo} id={'image-' + item.id} data-id={item.id} width="100%" height="100%"/>
							</a>
							<div className="footer-toolbar-image"></div>
						</div>
						);
					})}
					</div>
				<button type="button" className="btn btn-primary btn-lg round-btn">+</button>
			</div>);
	}
});

module.exports = Photo;