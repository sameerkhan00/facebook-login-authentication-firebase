let facebook_login =()=>{
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        var user = result.user;
         window.location="about.html"
        
        // ...
      }).catch(function(error) {
        console.log(error.message)
        // ...
      });
}

let signout =()=> {
    firebase.auth().signOut()
    .then(()=>{
        window.location= 'home.html'
        console.log("succesful")
    })
    .catch(()=>{
        console.log("error")
    })

}