
// Below is the Bubble sort code.
function bubbleSort(){
    c_time = 0;
    
    for(var i = 1; i <= (n-1); i++){
        for(var j = 0; j < (n-i); j++){

            barUpdate(barDivs[j],bars[j],"yellow"); // initially jth bar will be set to yellow.

            if(bars[j] > bars[j+1]){
                
                // Swap karne se pehle dono bars ko hum red kardenge aur unki height to same hi rahegi 
                barUpdate(barDivs[j],bars[j],"red");
                barUpdate(barDivs[j+1],bars[j+1],"red");
                
                let temp = bars[j];
                bars[j] = bars[j+1];
                bars[j+1] = temp;

                // Kyuki abb random value swap hue hai to usse hum dono ki height ko set kardenge takki woh display ho paye.
                barUpdate(barDivs[j],bars[j],"red");
                barUpdate(barDivs[j+1],bars[j+1],"red");
            }
            barUpdate(barDivs[j],bars[j],"#3498db") // jaise hi jth bar process hogaya back to blue kardo
        }
        barUpdate(barDivs[j],bars[j],"green") // after every iteration eak bar apne sahi position pe aayega to usko green se mark kardiya.
    }
    barUpdate(barDivs[0],bars[0],"green") // 0th bar green se marked nhi hoga after sorting to usse mark kardo .

    enable_input_buttons()
}
