/**
 * Created by User on 7/21/2016.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;




var Register = React.createClass({
	getInitialState: function() {
          return {
            username: null
            , password: null
          };
        }
        , userChangeHandler: function(event) {
            this.setState({username: event.target.value});
        }

        , passwordChangeHandler: function(event) {
            this.setState({password: event.target.value});
        }

        , formSubmitHandler: function(event) {
            event.preventDefault();
            console.log(this.state);
            $.ajax({
              url: 'http://127.0.0.1:8000/api/v1/users/'
              , type: 'POST'
              , data: this.state
              , error: function(response){
              console.log(response.responseJSON);
              }
            }).then(function(data) {
              sessionStorage.setItem('authToken', data.token);
              //redirect to homepage
            });
        },
	render: function() {
		var styles = {
			margin: 'auto',
			width: 800,
			height: 1200,
			align: 'center',
			padding: '8% 0 0',
			borderRadius: 10
			};

		var coolfont = {
			fontFamily: 'Verdana',
			fontSize: 24,
			color: 'gray',
			margin: 4
		};

		var forms = {
			position: 'relative',
			backgroundColor: '#e6e6ff',
			textAlign: 'center',
			boxShadow: '1px 1px 10px 0px rgba(90,90,90,0.75)',
			borderRadius: 10,
			padding: '8% 0 0'

			};

		var bodystyle = {
			height: 850,
			width: 1880,
			padding: undefined,
			margin: 'auto',
			backgroundImage: 'url("http://www.pptbackgroundstemplates.com/backgrounds/abstract-bubbles-ppt-backgrounds-powerpoint.jpg")'
			};
		var imput = {
			fontFamily: "Verdana",
			outline: 1,
			background: 'f2f2f2',
			display: "inline-block",
			border: 0,
			margin: 12,
			padding: 5,
			fontSize: 18,
			textAlign: 'center',
			width: '40%',
			borderRadius: 8
		};
			
		var button = {
			fontFamily: "roboto",
			textTransform: 'uppercase',
			outline: 0,
			background: '#808080',
			width: '30%',
			border: 1,
			margin: 5,
			padding: 10,
			color: '#FFFFFF',
			fontSize: 16,
			borderRadius: 12
		};


		return (
			<div style={bodystyle}>
				<div className="Register Form" style={styles}>
				<form class="login-form" style={forms}>
				<h1 style={coolfont}>Register</h1>
				<input type="text" name="username" placeholder="username" style={imput} onChange={this.userChangeHandler}/>
				<br/>
				<input type="password" name="password" placeholder="password" style={imput} onChange={this.passwordChangeHandler}/><br/>
				<button name="submit" style={button} onClick={this.formSubmitHandler}>Create account</button>
				<p class="message">Already have an account? <a href="#">Login in!</a></p>
				<br/>
				</form>
				</div>
			</div>


		);
	}
});

module.exports = Register;