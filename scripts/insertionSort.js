function insertionSort(){
    let i = 1 , j = 0;
    let temp;
    c_time = 0;

    while(i <= n-1){
        barUpdate(barDivs[i],bars[i],"yellow"); // initially ith bar jiske piche comparison karna hai usse yellow se mark kardo .
        temp = bars[i];
        while(j >= 0){
            if(bars[j] > temp){
                // Jaise hi jth bar ko j+1 me move karne ki baari aati hai to dono ke color ko red kardo .
                barUpdate(barDivs[j],bars[j],"red");
                barUpdate(barDivs[j+1],bars[j+1],"red"); // color change.

                bars[j+1] = bars[j];

                barUpdate(barDivs[j],bars[j],"red");
                barUpdate(barDivs[j+1],bars[j+1],"red"); // height change.

                if(j == i-1) barUpdate(barDivs[i],bars[i],"yellow"); // matlab hum chahte hai ki ith baar ka color yellow hi rahe jab tak piche comparision chal raha hai . .
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