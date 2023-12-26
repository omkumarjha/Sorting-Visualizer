function selectionSort(){
    let minIndex = 0;

    for(let i = 0; i < n-1; i++){
        minIndex = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        swap(i,minIndex,arr);
    }
    showBars()
}