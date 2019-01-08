function signInClickListener(email, password) {
	firebase.auth().signInWithEmailAndPassword(email, password)
	.then(function() {
		console.log(email)
		alert("Success!");
	})
	.catch(function(error) {
		alert(error)
	});
}

function signUpClickListener(email, password) {
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
		alert(error)
	});
}