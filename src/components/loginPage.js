/**
 * Created by User on 7/21/2016.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;




var Login = React.createClass({
	setInitialState: function() {
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
              url: 'http://127.0.0.1:8000/api/v1/login/'
              , type: 'POST'
              , data: this.state
              , succes: function(){
            console.log("merge");              
              }
            }).then(function(data) {
              sessionStorage.setItem('authToken', data.token);
              Router.HashLocation.push("home");
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

	, render: function() {
		document.body.style.backgroundImage = "url('http://www.pptbackgroundstemplates.com/backgrounds/abstract-bubbles-ppt-backgrounds-powerpoint.jpg')";
		document.body.style.backgroundPosition = "cover";

		var styles = {
			margin: 'auto',
			width: 420,
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
			padding: '10% 0 0'
		};

		var bodystyle = {
			height: 850,
			width: '100%',
			padding: undefined,
			margin: 'left'
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
			width: '80%',
			borderRadius: 8
		};

		var button = {
			fontFamily: "Verdana",
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

			<div className="Allah" >
				<div className="Login Form" style={styles}>
					<form class="login-form" style={forms}>
					<h1 style={coolfont}>Login</h1>		
					<input type="text" placeholder="username" onChange={this.userChangeHandler} style={imput} /><br/>
					<input type="password" placeholder="password" onChange={this.passwordChangeHandler} style={imput} /><br/>
					<button name="submit" style={button} onClick={this.formSubmitHandler}>login</button>
					<p class="message">Not registered? <a href="#/register">Create an account</a></p><br/>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = Login;