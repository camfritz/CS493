const bootstrap = require('bootstrap')
const firebase = require('firebase')

var config = {
	  apiKey: "AIzaSyAtaDx6v3Q4yNAQVMe-z88v-64YKRTCOrQ",
    authDomain: "cs493-14e09.firebaseapp.com",
    databaseURL: "https://cs493-14e09.firebaseio.com",
    projectId: "cs493-14e09",
    storageBucket: "cs493-14e09.appspot.com",
    messagingSenderId: "276297056112"
};

firebase.initializeApp(config);