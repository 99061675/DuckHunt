var duck = document.getElementById("duck");
var miss = document.getElementById("miss");
duck.onclick = function(){pin("duck")};
miss.onclick = function(){ pin("stage")}
score = 0;
function pin(clicked){
        if(clicked == "duck"){
                score++;
                document.getElementById("punten").innerHTML = score;
        }
        else if(clicked =="stage"){
                score--;
                document.getElementById("punten").innerHTML = score;
        }
}
