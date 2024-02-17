// Movement Animation to happen
const card = document.querySelector(".calculator");
const container = document.querySelector(".container");

// Moving Animation Event
card.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /25;
    let yAxis = (window.innerHeight / 2, e.pageY) /25;
    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
});

// Animate In
container.addEventListener("mouseenter", e => {
    card.style.transition = "none";
})


// Animate Out
container.addEventListener("mouseleave", e => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
})


let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach(buttons => {
    buttons.addEventListener("click", (e) => {
        if(e.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1);
            input.value = string;
        }

        else{
        string += e.target.innerHTML;
        input.value = string;
        }
    })
})

