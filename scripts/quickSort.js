function partition(start,end){
        
    let pivot = bars[start]; // start ko as a pivot lelenge.
    let pivotIndex = start+1; // woh correct position jaha pe pivot element hona chahiye.
    barUpdate(barDivs[start],bars[start],"yellow");
    
    // Below code is we are ensuring ki pivot ke left mai saare usse chote ya equal and right mai saare pivot se greater hone chahiye.
    for(let i = start+1; i <= end; i++){
        if(bars[i] <= pivot){
            barUpdate(barDivs[i],bars[i],"yellow")

            barUpdate(barDivs[i],bars[i],"red")
            barUpdate(barDivs[pivotIndex],bars[pivotIndex],"red")

            let temp = bars[pivotIndex];
            bars[pivotIndex] = bars[i];
            bars[i] = temp;

            barUpdate(barDivs[i],bars[i],"red")
            barUpdate(barDivs[pivotIndex],bars[pivotIndex],"red")

            barUpdate(barDivs[i],bars[i],"#3498db")
            barUpdate(barDivs[pivotIndex],bars[pivotIndex],"#3498db")

            pivotIndex++;
        }
    }

    // yaha pe pivotindex-1 ko position specify kar raha hai jaha pe pivot element hona chahiye.

    barUpdate(barDivs[start],bars[start],"red")
    barUpdate(barDivs[pivotIndex-1],bars[pivotIndex-1],"red")

    let temp = bars[pivotIndex-1];
    bars[pivotIndex-1] = bars[start];
    bars[start] = temp;

    barUpdate(barDivs[start],bars[start],"red")
    barUpdate(barDivs[pivotIndex-1],bars[pivotIndex-1],"red") // height change.

    for(let k = start; k <= pivotIndex; k++){
        barUpdate(barDivs[k],bars[k],"green")
    }
    
    return pivotIndex-1; // position of the pivot element.
}

function quickSorting(start,end){
    if(start >= end){
        return;
    }
    else{
        let p = partition(start,end);
        
        quickSorting(start,p-1);
        
        quickSorting(p+1,end);
    }
}

function quickSort(){
    c_time = 0;
    let start = 0 , end = n-1;
    
    quickSorting(start,end);
    enable_input_buttons();
}