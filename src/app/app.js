
import { state, setState } from '../state/state';
import { populateArrayAndAnimations, map } from '../utils/utils';
import { setupControlListeners } from '../controls/controls';

// Setup Canvas
let canvas;
let ctx;

function createCanvas() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    let headerHeight = document.querySelector('.filters').clientHeight;
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight - headerHeight;
}


// Change settings on window resize event
function resizeCanvasEvent() {
    window.addEventListener('resize', function() {
        
        let headerHeight = document.querySelector('.filters').clientHeight;
        
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight - headerHeight;
        
        let width = canvas.width / state.elements;
        setState({elWidth: width});
    });
}




// Draw Array
function drawArray() {
    
    for(let i = 0; i < state.arr.length; i++) {

        switch(state.animations[i]) {
            case 0:
                ctx.fillStyle = 'white';
                break;
            case 1:
                ctx.fillStyle = 'red';
                break;
            case 2:    
                ctx.fillStyle = 'green';
                break;
        }
        
        let height = map(state.arr[i], 0, state.elements, 10, canvas.height);
        ctx.strokeRect(i * state.elWidth, canvas.height - height, state.elWidth , height);
        ctx.fillRect(i * state.elWidth, canvas.height - height, state.elWidth ,  height);
    }
}



// Overlay Finish Draw
function overlayDraw() {
  

    if(state.overlayIndex > state.arr.length) {
        return;
    }

    for(let i = 0; i < state.overlayIndex; i++) {
        ctx.fillStyle='green';
        let height = map(state.arr[i], 0, state.elements, 10, canvas.height);
        ctx.strokeRect(i * state.elWidth, canvas.height - height, state.elWidth , height);
        ctx.fillRect(i * state.elWidth, canvas.height - height, state.elWidth , height);
    }
}


// Change Speed On Finish
export function changeAnimationSpeed(ms) {
    let milis = ms || 12;
    setState({ speed: milis });
    clearInterval(stop);
    stop = setInterval(draw, state.speed);
}


function setup() {
    //Canvas
    createCanvas();
    resizeCanvasEvent();
    setupControlListeners();

    // State
    setState({ elWidth: canvas.width / state.elements });
    populateArrayAndAnimations();
}

function draw() {
  
    ctx.fillStyle='black';
    ctx.strokeStyle='#000';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    drawArray();  

    if(state.finish) {
        
        
        overlayDraw();

        let ind = state.overlayIndex;                     
        setState({ overlayIndex: ++ind})
    }
}


// Start
let stop;
export function init() {
    setup();
    stop = setInterval(draw, state.speed);
}






