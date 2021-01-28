var duck = document.getElementById("duck");
var miss = document.getElementById("stage");
var getal = 0;
var ducktop = 175;
var duckleft = 500;
var afstand = 75;
var schuin = 37;
centreObject(duck);
var timer = setInterval(myTimer, 500);
var direction = ["N" , "NE", "E", "SE", "S" , "SW", "W", "NW"];
duck.onclick = function() {pin("duck")};
miss.onclick = function() {pin("stage")};

centreObject(duck);

function myTimer(){
        beweging(direction[Math.floor(Math.random()*direction.length)]);
}
function beweging(direction) {
        switch (direction) {
                case "N":
                        var move=parseInt(duck.style.top, 10)- afstand;
                        duck.style.top=move+"px";
                        break;
                case "NE":
                        var move=parseInt(duck.style.top, 10)- schuin;
                        duck.style.top=move+"px";
                        var move=parseInt(duck.style.left, 10)+ schuin;
                        duck.style.left=move+"px";
                        break;
                case "E":
                        var move=parseInt(duck.style.left, 10)+ afstand;
                        duck.style.left=move+"px";
                        break;
                case "SE":
                        var move=parseInt(duck.style.left, 10)+ schuin;
                        duck.style.left=move+"px";
                        var move=parseInt(duck.style.top, 10)+ schuin;
                        duck.style.top=move+"px";
                        break;
                case "S":
                        var move=parseInt(duck.style.top, 10)+ afstand;
                        duck.style.top=move+"px";
                        break;
                case "SW":
                        var move=parseInt(duck.style.top, 10)+ schuin;
                        duck.style.top=move+"px";
                        var move=parseInt(duck.style.left, 10)- schuin;
                        duck.style.left=move+"px";
                        break;
                case "W":
                        var move=parseInt(duck.style.left, 10)- afstand;
                        duck.style.left=move+"px";
                        break;
                case "NW":
                        var move=parseInt(duck.style.left, 10)- schuin;
                        duck.style.left=move+"px";
                        var move=parseInt(duck.style.top, 10)- schuin;
                        duck.style.top=move+"px";
                }
}
function pin(clicked){
        if (clicked == "duck") {
                getal++;
                document.getElementById("test").innerHTML = "Punten: "+ getal;
        } else if (clicked == "stage") {
                getal--;
                document.getElementById("test").innerHTML = "Punten: "+ getal;
        }
}
function centreObject(object) {
        var background_w = parseInt(window.getComputedStyle(miss).width.replace('px', ''));
        var background_h = parseInt(window.getComputedStyle(miss).height.replace('px', ''));

        var personage_w = parseInt(window.getComputedStyle(duck).width.replace('px', ''));
        var personage_h = parseInt(window.getComputedStyle(duck).height.replace('px', ''));

        var pos_x = (background_w / 2) - (personage_w / 2);
        var pos_y = (background_h / 2) - (personage_h / 2);

        duck.style.position='absolute';
        duck.style.top = pos_y +'px';
        duck.style.left = pos_x + 'px';
}