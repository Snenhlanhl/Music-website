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


// let apiUrl = "https://www.googleapis.com/youtube/v3/";

function search() {
let apiKey ="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";
let apiUrl =`https://www.googleapis.com/youtube/v3/search?key=${apikey}&part=snippet&q=query`;
axios.get(apiUrl).then();
}


function getData() {
    let response =awaitfetch(apiUrl);
}
if (response.ok === false) {
    console.error("Error making request to YouTube API");
}
response.then(response => response.json());
let data = response.data;

let dataObj = {
    title: data.title,
    views:data.views,
    likes: data.likes,
    dislikes: data.dislikes,
    likesDislikesRatio:(data.likes/dataDislikes)*100

};

function callback(dataObj) {
    let dataObj = {
        title: data.title,
        views:data.views,
        likes: data.likes,
        dislikes: data.dislikes,
        likesDislikesRatio:(data.likes/dataDislikes)*100
    };

}
getData().then(callback);

function renderData() {
    let container = document.getElementById('dataContainer');
    let dataObj = getData().then(callback);
    container.innerHTML= JSON.string(dataObj);

    container.innerHTML+="<h1>Title:</h1>";
    container.innerHTML+="<p>Description:</p>";
    container.innerHTML+="<p>Views:</p>";
    container.innerHTML+="<P>Likes:</p>";
    container.innerHTML+="<p>Dislikes:</P>";
    container.innerHTML+="<P>Published on:</p>" + Data.parse(response.data.publishedAt)+ "GMT";
    container.innerHTML+="<img src=" + response.data.thumbnailUrl + "alt=" + response.data.videold +"/>";

}
function submit(){
    if (document.querySelector('input').value==="") {
        return false;
    }
    document.querySelector('input').value=document.querySelector('input').value.trim(); 
    try{
        //code here 
    }
    catch (err) {
        console.error(erro.message);
        document.querySelector('input').value="";
        return false;
    }
    
}