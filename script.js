console.log("I am in the javascript Console.")

let n = 10;
const arr=[];
let container = document.querySelector(".container");

for(let i = 0; i < n; i++){
    arr[i] = Math.random();
}

for(let i = 0; i < n; i++){
    let bar = document.createElement("div")
    bar.style.height = arr[i] * 100 + "%"
    bar.classList.add("bar");
    container.appendChild(bar);
}
