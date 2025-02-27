var random_no1 = Math.floor(Math.random()*6+1);
var random_no2 = Math.floor(Math.random()*6+1);
// alert(random_no1);
// alert(random_no2);
var imgs1 = "./images/dice" + random_no1 + ".png";
var imgs2 = "./images/dice" + random_no2 + ".png";
var change = document.querySelectorAll('img')[0];
change.setAttribute("src",imgs1);
var change = document.querySelectorAll('img')[1];
change.setAttribute("src",imgs2);
if(random_no1 > random_no2)
{
    document.querySelector("h1").innerHTML = "Player 1 is Win☠️";
}
else if (random_no1 < random_no2)
{
    document.querySelector("h1").innerHTML = "Player 2 is Win💀";

}
else {
    document.querySelector("h1").innerHTML = "Draw👻";

}