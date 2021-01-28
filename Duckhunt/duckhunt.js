var duck = document.getElementById("duck");
var miss = document.getElementById("stage");
var getal = 0;
duck.onclick = function(){pin("duck")};
miss.onclick = function(){pin("stage")};
function pin(clicked){
        if(clicked == "duck"){
                getal++;
                document.getElementById("test").innerHTML = getal;
               
        }
        else if(clicked == "stage"){
                getal--;
                document.getElementById("test").innerHTML = getal;
        }
}

/*function fly(direction){
        if(spel == true){
                switch(direction){
                        case "N":
                                directionX= directionX;
                                directionY= directionY + afstand;
                                duck.style.top= directionY+ "px";
                                duck.style.left= directionX+ "px";
                }
        }
}*/