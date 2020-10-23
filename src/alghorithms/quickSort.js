import { swap } from "../utils/utils";
import { setAnimation, sleep } from "../animation/animation";
import { state, setState } from "../state/state";
import { setControlsEnd, setControlsStart } from "../controls/controls";
import { changeAnimationSpeed } from "../app/app";

export async function quickSort(arr, low, high, check) {
    if(check) {
        setControlsStart();
    }

    let pi;
    if(low < high) {
        pi = await partition(arr, low, high);
        
        await quickSort(arr, low, pi - 1);
        await quickSort(arr, pi + 1, high);
       
    }


    if(check) {
        setState({ finish: true, allowSizeChange: true, skip: false, overlayIndex: 1 });
        changeAnimationSpeed();
        setControlsEnd();
    }
}



async function partition(arr, low, high) {
   
    setAnimation(high, 2);
    
    let pivot = arr[high];

    let i =  low - 1;

    for(let j = low; j <= high - 1; j++) {


        setAnimation(j, 1);
        await sleep(state.speed);
        if(state.arr[j] < pivot) {
            i++;
            swap(i, j);;
           
        } 
        setAnimation(j, 0);
       
    }


    setAnimation(high, 0);

    swap(i + 1, high);
   
    return (i + 1);
}