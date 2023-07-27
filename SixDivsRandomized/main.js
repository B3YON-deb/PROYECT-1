/** @format */

var First = document.getElementById("FirstDiv");
var Buttom1 = document.getElementById("Boton1");
var FirstClass = document.querySelector(".FirstClass");
function swapperColor() {
    var colorKye = "123456789ABCDEF";
    var hastype = "#";
    for (let i = 0; i < 6; i++) {
        var Randomized = Math.floor(Math.random() * colorKye.length);
        hastype += colorKye[Randomized];
        FirstClass.innerHTML = hastype;
    }
    return hastype;
}

Buttom1.addEventListener("click", () => {
    First.style.backgroundColor = swapperColor();
});

// _________________________________________________________________________________

var Second = document.querySelector(".Second_div");
var SecondClass = document.querySelector(".SecondClass");
var Buttom2 = document.getElementById("Boton2");

function SwapperFont() {
    var FontContainer = [
        "Arial, sans-serif",
        "Cursive, cursive",
        "Courier New, monospace",
        "Gothic A1, sans-serif",
        "Brush Script MT, cursive",
        "Impact, sans-serif",
        "Pacifico, cursive",
        "Lucida Console, monospace",
        "Playfair Display, serif",
    ];

    for (var i = 0; i < 9; i++) {
        var Randomized = Math.floor(Math.random() * FontContainer.length);
        var main = FontContainer[Randomized];
        return main;
    }
}

Buttom2.addEventListener("click", () => {
    SecondClass.style.fontSize = "1.5rem";
    SecondClass.style.fontFamily = SwapperFont();
});

// _________________________________________________________________________________;

var Buttom3 = document.getElementById("Boton3");
var ThirdClass = document.querySelector(".ThirdClass");

let i = 0;
function handleClick() {
    i++;
    ThirdClass.style.transform = `rotate(${90 * i}deg)`;
    ThirdClass.style.transition = "900ms";
}

Buttom3.addEventListener("click", handleClick);

// _________________________________________________________________________________;

var Buttom4 = document.getElementById("Boton4");
var Circle = document.querySelector(".Circlecy");
function Movement() {
    Circle.classList.toggle("CircleActive");
}

Buttom4.addEventListener("click", Movement);

// _________________________________________________________________________________;


var Buttom5 = document.getElementById("Boton5");
var Square = document.querySelector(".FifthClass");
function ActiveSquare() {
    Square.classList.toggle("Square_active");
}

Buttom5.addEventListener("click", ActiveSquare);

// _________________________________________________________________________________;

var Buttom6 = document.getElementById("Boton6");
var Scaled = document.querySelector(".SixthClass");
function ActiveScale() {
    Scaled.classList.toggle("Scale_active");
}

Buttom6.addEventListener("click", ActiveScale);