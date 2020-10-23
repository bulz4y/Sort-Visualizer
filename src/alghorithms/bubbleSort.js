import { setControlsStart, setControlsEnd } from '../controls/controls';
import { setAnimation, sleep } from '../animation/animation';
import { setState } from '../state/state';
import { state } from '../state/state';
import { changeAnimationSpeed } from '../app/app';
import { swap } from '../utils/utils';

export async function bubbleSort() {   
    setControlsStart();
 
     for(let i = 0; i < state.arr.length - 1; i++) {
        
         for(let j = 0; j < state.arr.length - i - 1; j++) {
             setAnimation(j, 1);
             setAnimation(j + 1, 1);
             if(state.arr[j] > state.arr[j + 1]) {   
                      
                 await sleep(state.speed);
                 swap(j, j + 1, true);                     
             } else {
                 
                 
                 await sleep(state.speed);
                
             }
 
             setAnimation(j, 0);
             setAnimation(j + 1, 0); 
             
 
            
             
         }
 
 
     }
 
     
     setState({ finish: true, allowSizeChange: true, skip: false, overlayIndex: 1 });
     changeAnimationSpeed();
     
     setControlsEnd();
 }