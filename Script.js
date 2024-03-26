alert ("YOU ARE THE BEST GEE!");

let { GoolgeAPIClient } = require('gooleapis');                             // to include google library 

let credentials = newGoogleAPIClient().credentaials();                      //to make request to YouTupe API

function getToken() {
    let credentials = newGoogleAPIClient().credentials();                  // to get access token  authorization server

    //...
}

let authorizationUrl = credentials.getAuthorization 

button.addEventListener("click",getToken);

function getToken() {
    let response = await
    fetch(authorizationUrl);

    response.then(function(response){
        let credentails = respnse.json();
        console.log(credentails);
    });
}
credentails.getToken().then(function(acceccToken){
    console.log(accessToken);
});