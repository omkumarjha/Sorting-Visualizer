function merge(start,end){
    let mid = start + (end - start)/2;

    let len1 = Math.max(mid - start + 1, 0); // Ensure non-negative length
    let len2 = Math.max(end - mid, 0);       // Ensure non-negative length

    let first = new Array(len1);
    let second = new Array(len2);

    // copy 
    let mergeIndex = start;
    for(let i = 0; i < len1; i++){
        first[i] = bars[mergeIndex++];
    }

    mergeIndex = mid + 1;
    for(let i = 0; i < len2; i++){
        second[i] = bars[mergeIndex++];
    }

    // Now merge those two sorted arrays

    let i = 0 , j = 0;
    mergeIndex = start;

    while(i < len1 && j < len2){
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
}

function merging(start,end){
    // base case
    if(start >= end){
        return;
    }
    else{
        let mid = start + (end - start)/2;

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