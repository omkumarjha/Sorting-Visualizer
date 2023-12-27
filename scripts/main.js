let n = 50; // representing Number of bars 
const bars=[]; // where we will put all the bars random value.
const barDivs=[]; // Jaha pe saare bar elements aayenge.
let container = document.querySelector(".container");
let allSorts = document.querySelectorAll(".sort")
let barSizeRangeInput = document.querySelector(".barSizeRangeInput")
let speedbarrangeInput = document.querySelector(".speedBarRangeInput")
let newArray = document.querySelector(".newArray")
let speed = speedbarrangeInput.value;

// below is for initial speed setup .
if(speed == '1') speed = 1;
else if(speed == '2') speed = 10;
else if(speed == '3') speed = 100;
else if(speed == '4') speed = 1000;
else speed = 10000;

let delay_time=10000/(Math.floor(n/10)*speed); // Inital delay hai jaise speed change hogi again delay change ho jayega.

init(); // This function is just to initalize the bars with random heights and later we will apply sorting .
function init(){
    for(let i = 0; i < n; i++){
        bars[i] = Math.random();
    }
    showBars();
}

// It will disable all input and buttons.
function disable_input_buttons(){
    Array.from(allSorts).forEach((element)=>{
        element.disabled = true;
    })
    barSizeRangeInput.disabled = true;
    speedbarrangeInput.disabled = true;
    newArray.disabled = true;
}

// Below is showing the bars on screen.
function showBars(){
    container.innerHTML = "";
    for(let i = 0; i < n; i++){
        let bar = document.createElement("div")
        barDivs[i] = bar;
        bar.style.height = bars[i] * 80 + "%"
        bar.style.width = "20px"
        bar.classList.add("bar");
        container.appendChild(bar);
    }
}

// Below code jis bhi sorting name pe click ho raha hai usko highlight kardega.
Array.from(allSorts).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        Array.from(allSorts).forEach((element)=>{
            element.style.background = "none";
        })
        e.target.style.background = "#3498db";
        runalgo(e.target);
    })
})

// size wale input and speed wale input mai jaise jaise changes hoga waise waise yeh below listeners trigger ho jayenge.
barSizeRangeInput.addEventListener("input",()=>{
    n = barSizeRangeInput.value;
    init();
})

// Jaise jaise speed wale input range mai changes honge this function will trigger
speedbarrangeInput.addEventListener("input",()=>{
    switch(speedbarrangeInput.value){
        case "1" : 
            speed = 1;
            break;
        case "2":
            speed = 10;
            break;
        case "3":
            speed = 100;
            break;
        case "4":
            speed = 1000;
            break;
        case "5":
            speed = 10000;
            break;
    }
    delay_time=10000/(Math.floor(n/10)*speed); 
})

// Yeh function based on kon se type ke sorting karna chahte ho usse call kardega.
function runalgo(e){
    disable_input_buttons();

    switch(e.innerHTML){
        case "Bubble Sort":bubbleSort();
                        break;
        case "Selection Sort":selectionSort();
                        break;
        case "Insertion Sort":insertionSort();
                        break;
        case "Merge Sort":Merge();
                        break;
        case "Quick Sort":Quick();
                        break;
        case "Heap Sort":Heap();
                        break;
    }
}