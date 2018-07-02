document.addEventListener("DOMContentLoaded", function(event) {
      (function myLoop (i) {          
        setTimeout(function () {
            var contentTable = document.getElementById("contentTable")
            if(contentTable.style.backgroundColor == "blue"){
                contentTable.style.color = "blue"
                contentTable.style.backgroundColor = "red"
            } else {
                contentTable.style.color = "red"
                contentTable.style.backgroundColor = "blue"
            }
           if (--i) myLoop(i);      //  decrement i and call myLoop again if i > 0
        }, 300)
     })(20000000);
     
     thunderFuck()
     
  });

function thunderFuck(){
    let audio = document.getElementById("lllama");
    audio.play();
}
function bahbah(){
    let audio = document.getElementById("goat");
    audio.playbackRate = 2
    audio.play();
}