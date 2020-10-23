import { setState, resetState, state } from '../state/state';
import { populateArrayAndAnimations } from '../utils/utils';
import { bubbleSort } from '../alghorithms/bubbleSort';
import { selectionSort } from '../alghorithms/selectionSort';
import { insertionSort } from '../alghorithms/insertionSort';
import { changeAnimationSpeed } from '../app/app';
import { quickSort } from '../alghorithms/quickSort';
import { mergeSort } from '../alghorithms/mergeSort';


let select = document.getElementById('select');
export let speed = document.getElementById('rangeSpeed');
let size = document.getElementById('rangeSize');
let skip = document.getElementById('skip');



// Check if Internet Explorer
function IECheck() 
{

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > -1 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // IE
    {
        return true;
    }
    else  // If another browser, return false
    {
        return false;
    }

}


export function setupControlListeners() {

    skip.addEventListener('click', function(e) {
        setState({skip: true});
    });
    

    if(IECheck()) {
       
        speed.addEventListener('change', function(e) {
            setState({ speed: 1});
            
            setState({ speed: parseInt(10 - e.target.value) });
            changeAnimationSpeed(parseInt(10 - e.target.value));
            
            
        })
        
        size.addEventListener('change', function(e) {
           
            
        
            let elements = parseInt(e.target.value);
            let width = canvas.width / elements;
            setState({ speed: parseInt(10 - speed.value), elements: elements, elWidth: width, finish: false});
            populateArrayAndAnimations();
            
            
        })
    } else {
        
        speed.addEventListener('input', function(e) {
            setState({ speed: 1});
            
            setState({ speed: parseInt(10 - e.target.value) });
            changeAnimationSpeed(parseInt(10 - e.target.value));
            
            
        })
        
        size.addEventListener('input', function(e) {
        
            let elements = parseInt(e.target.value);
            let width = canvas.width / elements;
            setState({ elements: elements, elWidth: width, finish: false});
            populateArrayAndAnimations();
            
            
        })
    }
 
    
    select.addEventListener('change', function(e) {
        
        let val = e.target.value;
        
        if((val !== '0')) {
            resetState();
            changeAnimationSpeed(state.speed);
        }

        
    
        switch(val) {
            case '1':               
                bubbleSort();
                break;
            case '2':
                selectionSort();
                break;
            case '3':
                insertionSort();
                break;
            case '4':
                quickSort(state.arr, 0, state.arr.length - 1, true);
                break;
            case '5':
                mergeSort(state.arr, 0, state.arr.length - 1, true);
                break;
        }
        
    });
}



export function setControlsStart() {
    size.disabled = true;
    select.disabled = true;
    skip.disabled = false;
    skip.classList.remove('disabled');
}

export function setControlsEnd() {
    size.disabled = false;
    select.disabled = false;
    skip.disabled = true;
    skip.classList.add('disabled');
}
