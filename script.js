let n = 50;
const arr=[];
let container = document.querySelector(".container");

init(); // This function is just to initalize the bars with random heights and later we will apply sorting .
function init(){
    for(let i = 0; i < n; i++){
        arr[i] = Math.random();
    }
    showBars();
}

// Its just swapping two values in an array .
function swap(a, b,copy) {
    let temp = copy[a];
    copy[a] = copy[b];
    copy[b] = temp;
}

function animate(swaps){
    if(swaps.length == 0){
        showBars()
    }
    else{
        const [i,j] = swaps.shift();

        swap(i,j,arr);
        showBars([i,j]);
        setTimeout(function(){
            animate(swaps);
        },10)
    }
}


function bubbleSort(){
    const swaps = [];
    const copy = [...arr];
    console.log("yes")

    for(let i = 1; i <= (n-1); i++){
        for(let j = 0; j < (n-i); j++){
            if(copy[j] > copy[j+1]){
                swaps.push([j,j+1]);
                swap(j,j+1,copy);
            }
        }
    }
    animate(swaps)
    showBars()
}

// Below is showing the bars on screen.
function showBars(indices){
    container.innerHTML = "";
    for(let i = 0; i < n; i++){
        let bar = document.createElement("div")
        bar.style.height = arr[i] * 80 + "%"
        bar.style.width = "20px"
        bar.classList.add("bar");
        if(indices && indices.includes(i)){
            bar.style.backgroundColor = "red";
        }
        container.appendChild(bar);
    }
}