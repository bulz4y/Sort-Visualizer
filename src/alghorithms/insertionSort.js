import { setControlsStart, setControlsEnd } from '../controls/controls';
import { setAnimation, sleep } from '../animation/animation';
import { setState } from '../state/state';
import { state } from '../state/state';
import { changeAnimationSpeed } from '../app/app';
import { swap } from '../utils/utils';

export async function insertionSort() {
    setControlsStart();
    for(let i = 1; i < state.arr.length; i++) {

     
        setAnimation(i, 2);

        for(let j = i; j > 0; j--) {
           
            if(j !== i) {
                setAnimation(j, 1); 
            }
                  
            setAnimation(j - 1, 1);
            if(state.arr[j - 1] > state.arr[j]) {

                await sleep(state.speed);
                swap(j, j -1 , true);

                if(j !== i) {
                    setAnimation(j, 0); 
                }

                setAnimation(j - 1, 0);
                
               
            } else  {
                
                    await sleep(state.speed);
                                   
                if(j !== i) {
                    setAnimation(j, 0); 
                }
               
                setAnimation(j - 1, 0);
                break;
            }
            
        
        }

        setAnimation(i, 0); 
    }

    changeAnimationSpeed();
    setState({ finish: true, allowSizeChange: true, skip: false, overlayIndex: 1 });
    setControlsEnd();
}
