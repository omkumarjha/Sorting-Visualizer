function merge(start,end){
    let mid = Math.floor(start + (end - start) / 2);

    let len1 = mid - start + 1; 
    let len2 = end - mid;
    let first = new Array(len1);
    let firstDiv = new Array(len1);

    let second = new Array(len2);
    let secondDiv = new Array(len2);

    // copy 
    let mergeIndex = start;
    for(let i = 0; i < len1; i++){
        first[i] = bars[mergeIndex];
        firstDiv[i] = barDivs[mergeIndex++];
    }

    mergeIndex = mid + 1;
    for(let i = 0; i < len2; i++){
        second[i] = bars[mergeIndex];
        secondDiv[i] = barDivs[mergeIndex++];
    }

    // Now merge those two sorted arrays

    let i = 0 , j = 0;
    mergeIndex = start;

    while(i < len1 && j < len2){
        barUpdate(firstDiv[i],first[i],"red");
        barUpdate(secondDiv[j],second[j],"red");

        if(first[i] < second[j]){
            bars[mergeIndex++] = first[i++];
        }
        else{
            bars[mergeIndex++] = second[j++];
        }
    }

    while(i < len1){
        bars[mergeIndex++] = first[i++];
    }

    while(j < len2){
        bars[mergeIndex++] = second[j++];
    }

    for(let i = start; i <= end; i++){
        barUpdate(barDivs[i],bars[i],"green");
    }
}

function merging(start,end){
    // base case
    if(start >= end){
        return;
    }
    else{
        let mid = Math.floor(start + (end - start) / 2);

        barUpdate(barDivs[mid],bars[mid],"yellow");

        // left part ko sort karo
        merging(start,mid);

        // right part ko sort karo
        merging(mid+1,end);

        // ab woh dono sorted parts ko merge karke bars mai assign kardo
        merge(start,end);
    }
    
}


function mergeSort(){
    c_time = 0;

    merging(0,n-1);

    enable_input_buttons();
}