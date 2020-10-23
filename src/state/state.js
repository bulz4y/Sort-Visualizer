import { populateArrayAndAnimations } from '../utils/utils';
import { speed } from '../controls/controls';

// App state
export let state = {
    speed: parseInt(10 - speed.value),
    arr: [],
    animations: [],
    elements: 100,
    overlayIndex: 1,
    finish: false,
    elWidth: 0,
    skip: false,
    allowSizeChange: true
};

// resetState
export function resetState() {
    let newObj = {
        overlayIndex: 1,
        finish: false,
        arr: [],
        animations: [],
        speed: parseInt(10 - speed.value),
    };

    setState(newObj);
    populateArrayAndAnimations();
}

// Set State
export function setState(obj) {
    let newState = {
        ...state,
        ...obj
    };

    state = newState;
}
