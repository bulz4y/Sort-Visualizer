import { setState, state }  from '../state/state';

export function setAnimation(index, value) {
    let anims = state.animations.slice();
    anims[index] = value;
    setState({ animations: anims });
}



export function sleep(ms) {
    if(!state.skip) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }  
}