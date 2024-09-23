let x = Math.floor(Math.random()*6)+1;
console.log(x);

let y = Math.floor(Math.random()*6)+1;
console.log(y);

if(x > y){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(x < y){
    document.querySelector("h1").innerHTML= "Player 2 Wins";
}
else {
    document.querySelector("h1").innerHTML= "Tie";
}

document.querySelectorAll("img")[0].setAttribute("src" , "./images/dice"+ x +".png");
document.querySelectorAll("img")[1].setAttribute("src" , "./images/dice"+ y +".png")