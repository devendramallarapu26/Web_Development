// var randomNumber1 = Math.random();
var number1 = Math.floor(Math.random()* 6)+1;
var imageSource = "dice"+number1+".png";
document.querySelectorAll("img")[0].setAttribute("src",imageSource);
// alert(number1)
var randomNumber2 = Math.random();
var number2 = Math.floor(randomNumber2 * 6)+1;
var imageSource1 = "dice"+number2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imageSource1);

if (number1 >  number2){
    document.querySelector("h1").textContent = "Player1 is Winner"
}