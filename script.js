console.log("I am in the javascript Console.")

let n = 50;
const arr=[];
let container = document.querySelector(".container");

for(let i = 0; i < n; i++){
    arr[i] = Math.random();
}

// Below is showing our bars on display.
for(let i = 0; i < n; i++){
    let bar = document.createElement("div")
    bar.style.height = arr[i] * 80 + "%"
    bar.style.width = "20px"
    bar.classList.add("bar");
    container.appendChild(bar);
}
