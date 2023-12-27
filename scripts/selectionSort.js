function selectionSort(){
    let minIndex = 0;
    c_time = 0;

    for(let i = 0; i < n-1; i++){
        minIndex = i;
        barUpdate(barDivs[i],bars[i],"red"); // Initially ith bar ko red se mark kardenge.

        for(let j = i+1; j < n; j++){
            barUpdate(barDivs[j],bars[j],"yellow"); //aage ke every bar ko yellow se mark kardenge.

            if(bars[j] < bars[minIndex]){
                if(minIndex != i) barUpdate(barDivs[minIndex],bars[minIndex],"#3498db"); // agar min Milgaya to minindex wale ko reset kardo orginal se and new Min ko red se.
                barUpdate(barDivs[j],bars[j],"red");

                minIndex = j;
            }
            else barUpdate(barDivs[j],bars[j],"#3498db"); // agar minIndex nhi mila ith se to again reset kardo colour.
        }
        // Agar ith and Minindex same hote to phir ith wale mai green colour ka effect nhi aata isliye usko else mai define kara hai .
        if(i != minIndex){
             // For swapping ith and minIndex value .
            barUpdate(barDivs[i],bars[i],"red");
            barUpdate(barDivs[minIndex],bars[minIndex],"red");

            let temp = bars[i];
            bars[i] = bars[minIndex];
            bars[minIndex] = temp;

            barUpdate(barDivs[i],bars[i],"red");
            barUpdate(barDivs[minIndex],bars[minIndex],"red");

            barUpdate(barDivs[i],bars[i],"green")
            barUpdate(barDivs[minIndex],bars[minIndex],"#3498db");
        }
        else barUpdate(barDivs[i],bars[i],"green");
    }
    barUpdate(barDivs[n-1],bars[n-1],"green")

    enable_input_buttons()
}