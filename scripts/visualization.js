let c_time = 0;

// Every calling of barUpdate c_time += delay_time ho jayega .
// iss function ka kaam hai ji jth baar ke mai new color dena and uski height ko set kardena with new random value.
function barUpdate(bar,random,color){
    setTimeout(()=>{
        bar.style.backgroundColor = color;
        bar.style.height = random * 80 + "%"; // random value se jth bar ki height ko hum again set kardenge.
    },c_time+=delay_time)
}

// Below function tab hi chalega jab saare bar updates function call hogaye honge ya jab sorting Algo poora finish hogaya hoga.
function enable_input_buttons(){
    setTimeout(()=>{
        Array.from(allSorts).forEach((element)=>{
            element.disabled = false;
        })
        barSizeRangeInput.disabled = false;
        speedbarrangeInput.disabled = false;
        newArray.disabled = false;
    },c_time+=delay_time)
}