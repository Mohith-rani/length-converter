//Input Output 
const inputField = document.getElementById('input');
const outputLength = document.getElementById('output-input');


//length variables
const mmOutput = document.getElementById('mmOutput');
const cmOutput = document.getElementById('cmOutput');
const inOutput = document.getElementById('inOutput');
const ftOutput = document.getElementById('ftOutput');
const mOutput = document.getElementById('mOutput');

const btnGroup = document.getElementById('main');
btnGroup.addEventListener('click' ,  button => {
    if(button.target.matches('button')){
        const btn = button.target;
        const btnValue = btn.textContent;

        if( btnValue === 'Mm'){
            inputField.placeholder = 'Enter Milimeters';
            inputField.addEventListener('input', convertMm);
            convertMm();


        }   else if( btnValue === 'Cm'){
            inputField.placeholder = 'Enter Centimeters';
            inputField.addEventListener('input', convertCm);
            convertCm();


        }   else if( btnValue === 'In'){
            inputField.placeholder = 'Enter Inches';
            inputField.addEventListener('input', convertIn);
            convertIn();


        }   else if( btnValue === 'Ft'){
            inputField.placeholder = 'Enter Feet';
            inputField.addEventListener('input', convertFt);
            convertFt();


        }   else if( btnValue === 'M'){
            inputField.placeholder = 'Enter Meters';
            inputField.addEventListener('input', convertM);
            convertM();
        }
    }
})


//functions
function convertMm(){
    let input = inputField.value;

    if(!input){
        return;
    }else { 
        mmOutput.textContent = input;
        cmOutput.textContent = Math.floor((input / 10) * 10000) / 10000;
        inOutput.textContent = Math.floor((input / 25.4) * 10000) / 10000;
        ftOutput.textContent = Math.floor((input / 304.8) * 10000) / 10000;
        mOutput.textContent = Math.floor((input / 1000) * 10000) / 10000;
    }
}

function convertCm(){
    let input = inputField.value;

    if(!input){
        return;
    }else { 
        mmOutput.textContent = Math.floor((input * 10) * 10000) / 10000;
        cmOutput.textContent = input;
        inOutput.textContent = Math.floor((input / 2.54) * 10000) / 10000;
        ftOutput.textContent = Math.floor((input / 30.48) * 10000) / 10000;
        mOutput.textContent = Math.floor((input / 100) * 10000) / 10000;
    }
}

function convertIn(){
    let input = inputField.value;

    if(!input){
        return;
    }else { 
        mmOutput.textContent = Math.floor((input * 25.4) * 10000) / 10000;
        cmOutput.textContent = Math.floor((input * 2.54) * 10000) / 10000;
        inOutput.textContent = input;
        ftOutput.textContent = Math.floor((input / 12) * 10000) / 10000;
        mOutput.textContent = Math.floor((input / 39.37) * 10000) / 10000;
    }
}

function convertFt(){
    let input = inputField.value;

    if(!input){
        return;
    }else { 
        mmOutput.textContent = Math.floor((input * 304.8) * 10000) / 10000;
        cmOutput.textContent = Math.floor((input * 30.48) * 10000) / 10000;
        inOutput.textContent = Math.floor((input * 12) * 10000) / 10000;
        ftOutput.textContent = input;
        mOutput.textContent = Math.floor((input / 3.281) * 10000) / 10000;
    }
}

function convertM(){
    let input = inputField.value;

    if(!input){
        return;
    }else { 
        mmOutput.textContent = Math.floor((input * 1000) * 10000) / 10000;
        cmOutput.textContent = Math.floor((input * 100) * 10000) / 10000;
        inOutput.textContent = Math.floor((input * 39.3701) * 10000) / 10000;
        ftOutput.textContent = Math.floor((input * 3.281) * 10000) / 10000;
        mOutput.textContent = input;
    }
}
