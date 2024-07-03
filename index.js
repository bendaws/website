var audio = new Audio("mp3/error.mp3");

document.getElementById("errorbtn").addEventListener("click", function() {
    audio.play();
    document.getElementById("error").style="display: block; width: 100%; height: 100%; position: absolute;"
});

document.getElementById("error").addEventListener("click", function() {
    document.getElementById("error").style="display: none; width: 100%; height: 100%; position: absolute;"
});

var githubelem = document.querySelector(".side p");
var title = document.querySelector(".side h3");

(async ()=>{
    var outhtml = "";
    var repos = 0;
    json = await(await fetch("https://api.github.com/users/bendaws/repos?per_page=100&sort=updated")).json();
    
    for (var i=0; i<json.length;i++) {
        outhtml += "bendaws / <a href=" + json[i].html_url + " target='_blank'>" + json[i].name + "</a><br>";
        repos++;
    }

    githubelem.innerHTML = outhtml;
    title.innerHTML = "github: <a href='https://github.com/bendaws'>bendaws</a> (" + repos + " repos)"
})();