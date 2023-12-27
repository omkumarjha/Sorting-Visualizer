function insertionSort(){
    let i = 1 , j = 0;
    let temp;
    c_time = 0;

    while(i <= n-1){
        barUpdate(barDivs[i],bars[i],"yellow");
        temp = bars[i];
        while(j >= 0){
            if(bars[j] > temp){
                barUpdate(barDivs[j],bars[j],"red");
                barUpdate(barDivs[j+1],bars[j+1],"red");

                bars[j+1] = bars[j];

                barUpdate(barDivs[j],bars[j],"red");
                barUpdate(barDivs[j+1],bars[j+1],"red");

                if(j == i-1) barUpdate(barDivs[i],bars[i],"yellow");
            }
            else{
                break;
            }

            j--;
        }
        bars[j+1] = temp;

        i++;
        j = i-1;

        for(let k = 0; k < j; k++){
            barUpdate(barDivs[k],bars[k],"green");
        }
    }
    barUpdate(barDivs[n-1],bars[n-1],"green");
    enable_input_buttons();

}