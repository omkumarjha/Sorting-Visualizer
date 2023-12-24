let n = 50; // representing Number of bars 
const arr=[]; // where we will put all the bars 
let container = document.querySelector(".container");
let allSorts = document.querySelectorAll(".sort")
let barSizeRangeInput = document.querySelector(".barSizeRangeInput")
let speedBarRangeInput = document.querySelector(".speedBarRangeInput")
let newArray = document.querySelector(".newArray")

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

function animate(moves){
    if(moves.length == 0){
        showBars() // agar bars sorted ho gaye to again showBars() call karo so that background color wale swapped bars mai color hatt jaye.
        enable_input_buttons(); // saare input buttons work karne lag jayenge only after the animation ends.
    }
    else{
        const move = moves.shift();
        const [i,j] = move.indices;

        if(move.type=="swap") swap(i,j,arr);

        showBars(move);
        setTimeout(function(){
            animate(moves);
        },10)
    }
}

function disable_input_buttons(){
    Array.from(allSorts).forEach((element)=>{
        element.disabled = true;
    })
    barSizeRangeInput.disabled = true;
    speedBarRangeInput.disabled = true;
    newArray.disabled = true;
}

function enable_input_buttons(){
    Array.from(allSorts).forEach((element)=>{
        element.disabled = false;
    })
    barSizeRangeInput.disabled = false;
    speedBarRangeInput.disabled = false;
    newArray.disabled = false;
}

function bubbleSort(){
    disable_input_buttons();
    const moves = [];
    const copy = [...arr];

    for(let i = 1; i <= (n-1); i++){
        for(let j = 0; j < (n-i); j++){
            // Confusion hai ki yeh below colors kaise show honge swapped bars ke and add sound also.
            moves.push({ // For every comparison yeh wala object add hote rahega
                indices : [j,j+1],
                type : "comp",
            });

            if(copy[j] > copy[j+1]){
                moves.push({ // jab final swapping honi hogi tab yeh wala object dalega . To visualize better change setTimeOut to 1000 ms.
                    indices : [j,j+1],
                    type : "swap",
                });
                swap(j,j+1,copy);
            }
        }
    }
    animate(moves);
    showBars()
}

// Below is showing the bars on screen.
function showBars(move){
    container.innerHTML = "";
    for(let i = 0; i < n; i++){
        let bar = document.createElement("div")
        bar.style.height = arr[i] * 80 + "%"
        bar.style.width = "20px"
        bar.classList.add("bar");
        // when we are swapping two bars and showing it to the screen then at that time we are just giving Background color to those swapped bars .
        if(move && move.indices.includes(i)){
            bar.style.backgroundColor = move.type == "swap" ? "blue" : "red";
        }
        container.appendChild(bar);
    }
}

// Below code jis bhi sorting name pe click ho raha hai usko highlight kardega.
Array.from(allSorts).forEach((element,index)=>{
    element.addEventListener("click",(e)=>{
        Array.from(allSorts).forEach((element)=>{
            element.style.background = "none";
        })
        e.target.style.background = "#3498db";
    })
})

barSizeRangeInput.addEventListener("input",()=>{
    n = barSizeRangeInput.value;
})