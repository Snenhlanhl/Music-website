alert ("YOU ARE THE BEST GEE!");

let apiKey ="AIzaSyBYI-y5QgFThvFEDrWGLBSpN1IfFtAS36U";
let searchQuery= "music";

fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchQuery}&key=${apiKey}`)
.then(response => response.json())
.then(data => {
    let youtubeContent = document.getElementById('youtubeContent');
    youtubeContent.innerHTML= '<h2>Search result</h2>';
    data.items.forEach( item => {
        let vidoeTittle = item.snippet.title;
        youtubeContent.innerHTML += `<div>${vidoeTittle}</div>`;
        
    });
})
.catch(error => {
    console.error('Error fatching search result', Error);
});

function submit(event) {
    event.preventDefualt();
}
document.querySelector('form').addEventListener('submit', submit);






