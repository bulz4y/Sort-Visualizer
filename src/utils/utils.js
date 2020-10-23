import { state, setState } from '../state/state';

// Populate array with random elements
export function populateArrayAndAnimations() {
    let arr = [];
    let anims = [];
    for(let i = 0; i < state.elements; i++) {
        anims.push(0);
        let rnd = Math.floor(Math.random() * state.elements); 
        arr.push(rnd);
        // arr.push(map(rnd, 0, state.elements, 10, canvas.height));
    }
    

    setState({drawArr: arr, arr: arr, animations: anims});
}

// Map array values to ceratin range
export function map(n, start1, stop1, start2, stop2) {
    var newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
    return newval;
}


export async function swap(a, b) {
    let temp = state.arr[a];
    state.arr[a] = state.arr[b];
    state.arr[b] = temp;
}
