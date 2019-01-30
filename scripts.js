var currentUser;
var notes;

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

function getCurrentUser() {
firebase.auth().onAuthStateChanged(function(user) {
	if(user) {
			var email;
			if(user != null) {
				email = user.email;
				document.getElementById("email").innerHTML = email;

				displayName = user.displayName
				document.getElementById("name").innerHTML = displayName;

				currentUser = user;
				readNotes();
			}
		}
		else {
			window.location.replace("./index.html")
			currentUser = null;
		}
	});
}