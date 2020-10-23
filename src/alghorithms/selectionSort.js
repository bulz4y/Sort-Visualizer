import { setControlsStart, setControlsEnd } from '../controls/controls';
import { setAnimation, sleep } from '../animation/animation';
import { setState } from '../state/state';
import { state } from '../state/state';
import { changeAnimationSpeed } from '../app/app';
import { swap } from '../utils/utils';

export async function selectionSort() {

    setControlsStart();
    for(let i = 0; i < state.arr.length - 1; i++) {
        let minIndx = i;

        setAnimation(i - 1, 2);
        setAnimation(minIndx, 1);  
         
        for(let j = i + 1; j < state.arr.length; j++) {
            setAnimation(j, 1);
            await sleep(state.speed);
            
            if(state.arr[j] < state.arr[minIndx]) {                          
                setAnimation(minIndx, 0);
                minIndx = j;
                setAnimation(minIndx, 1);
            }
             else {
                setAnimation(j, 0);
            }

           
            
        }
        
        swap(minIndx, i);

        setAnimation(i - 1, 0);
        setAnimation(minIndx, 0);
    }

    setState({ finish: true, allowSizeChange: true, skip: false, overlayIndex: 1 });
    changeAnimationSpeed();
    setControlsEnd();
}

