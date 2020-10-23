import { setControlsStart, setControlsEnd } from '../controls/controls';
import { setAnimation, sleep } from '../animation/animation';
import { setState } from '../state/state';
import { state } from '../state/state';
import { changeAnimationSpeed } from '../app/app';

export async function mergeSort(arr, l, r, check) {
    if(check) {
        setControlsStart();
    }

    if(l < r) {
       
        let m = parseInt((l +r) / 2);
        await mergeSort(arr, l, m);
        await mergeSort(arr, m + 1, r);
        await merge(arr, l, m, r);
    }

     if(check) {
        setState({ finish: true, allowSizeChange: true, skip: false, overlayIndex: 1 });
        changeAnimationSpeed();
        setControlsEnd();
    }
}


async function merge(arr, l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;

    let arrCopy = arr.slice();

    let L = [];
    let R = [];

    for(let i  = 0; i < n1; i++) {
        L[i] = arrCopy[l + i];
    }

    for(let i  = 0; i < n2; i++) {
        R[i] = arrCopy[m  + 1 + i];
    }


    let i = 0;

    let j = 0;

    let k = l;

    
    
    while (i < n1 && j < n2)
    {   
        setAnimation( l + i, 1);
        setAnimation(m + 1 + j, 1);
       
        
        await sleep(state.speed);
       
        if (L[i] <= R[j]) 
        {
           
            setAnimation( l + i, 0);
            setAnimation(m + 1 + j, 0);

            arrCopy[k] = L[i];
            // arr[k] = L[i];
            i++;

            
        }
        else
        {

            setAnimation( l + i, 0);
            setAnimation(m + 1 + j, 0);
            
            arrCopy[k] = R[j];
            // arr[k] = R[j];
            j++;
        }
       
       
        
        k++;
    }
 
    // Copy the remaining elements of
    // L[], if there are any 
    while (i < n1) 
    {

        await sleep(state.speed);
        setAnimation( l + i, 0);
        setAnimation(m + 1 + j, 0);
        arrCopy[k] = L[i];
        // arr[k] = L[i];
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // R[], if there are any 
    while (j < n2)
    {

        await sleep(state.speed);
        setAnimation( l + i, 0);
        setAnimation(m + 1 + j, 0);

        arrCopy[k] = R[j];
        // arr[k] = R[j];
        j++;
        k++;
    }

    for(let c = l; c < k; c++) {
        
        arr[c] = arrCopy[c];
        setAnimation(c, 1);
        await sleep(state.speed);
        setAnimation(c, 0)
    }


}