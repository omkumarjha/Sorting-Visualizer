
function swap(i,j){

    barUpdate(barDivs[i],bars[i],"red");//Color update
    barUpdate(barDivs[j],bars[j],"red");//Color update

    var temp=bars[i];
    bars[i]=bars[j];
    bars[j]=temp;

    barUpdate(barDivs[i],bars[i],"red");//Height update
    barUpdate(barDivs[j],bars[j],"red");//Height update

    barUpdate(barDivs[i],bars[i],"#3498db");//Color update
    barUpdate(barDivs[j],bars[j],"#3498db");//Color update
}

function max_heapify(n,i){
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && bars[l]>bars[largest]){
        if(largest!=i){
            barUpdate(barDivs[largest],bars[largest],"#3498db");//Color update
        }

        largest=l;

        barUpdate(barDivs[largest],bars[largest],"red");//Color update
    }

    if(r<n && bars[r]>bars[largest]){
        if(largest!=i){
            barUpdate(barDivs[largest],bars[largest],"#3498db");//Color update
        }

        largest=r;

        barUpdate(barDivs[largest],bars[largest],"red");//Color update
    }

    if(largest!=i){
        swap(i,largest);
        max_heapify(n,largest);
    }
}

function heap_sort(){
    for(var i= Math.floor(n / 2);i>=0;i--){
        max_heapify(n,i);
    }

    for(var i=n-1;i>0;i--){
        swap(0,i);
        barUpdate(barDivs[i],bars[i],"green");//Color update
        barUpdate(barDivs[i],bars[i],"yellow");//Color update

        max_heapify(i,0);

        barUpdate(barDivs[i],bars[i],"#3498db");//Color update
        barUpdate(barDivs[i],bars[i],"green");//Color update
    }
    barUpdate(barDivs[i],bars[i],"green");//Color update
}

function heapSort(){
    c_time = 0;

    heap_sort();

    enable_input_buttons()
}