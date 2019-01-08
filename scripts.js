function signInClickListener(email, password) {
	firebase.auth().signInWithEmailAndPassword(email, password)
	.then(function() {
		console.log(email)
		window.location.replace("./user.html");
	})
	.catch(function(error) {
		alert(error)
	});
}

function signUpClickListener(email, password) {
	firebase.auth().createUserWithEmailAndPassword(email, password)
	.then(function() {
		alert("Account created!")
	})
		.catch(function(error) {
		alert(error)
	});
}

function googleSignInClickListener() {
	var provider = new firebase.auth.GoogleAuthProvider();

	firebase.auth().signInWithPopup(provider)
	.then(function(result) {
		window.location.replace("./user.html");
	})
	.catch(function(error) {
		alert(error)
	});
}