let stopButton = document.getElementById('stopButton');
let stopLight = document.getElementById('stopLight');
let slowButton = document.getElementById('slowButton');
let slowLight = document.getElementById('slowLight');
let goButton = document.getElementById('goButton');
let goLight = document.getElementById('goLight');

// var countStop = 0;
// var countSlow = 0;
// var countGo = 0;


let clickRedLight = function() {
    // countStop++
    stopLight.classList.toggle('stop');
    if (stopLight.style.background === 'red') {
        console.log(`${stopButton.innerText} bulb on`);
    } else {
        console.log(`${stopButton.innerText} bulb off`);
    }
    // console.log(countStop);
}


stopButton.addEventListener('click', clickRedLight);

let clickSlowLight = function() {
    // countSlow++
    slowLight.classList.toggle('slow');
    if (slowLight.style.background === 'orange') {
        console.log(`${slowButton.innerText} bulb on`);
    } else {
        console.log(`${slowButton.innerText} bulb off`);
    }
    // console.log(countSlow);
}

slowButton.addEventListener('click', clickSlowLight);

let clickGoLight = function() {
    // countGo++
    goLight.classList.toggle('go');
    if (goLight.style.background === 'green') {
        console.log(`${goButton.innerText} bulb on`);
    } else {
        console.log(`${goButton.innerText} bulb off`);
    }
    // console.log(countGo);
}

goButton.addEventListener('click', clickGoLight);


[stopButton, slowButton, goButton].forEach((button) => {
    button.addEventListener('mouseenter', (event) => {
        console.log(`Entered ${event.target.innerText} button`)
    })
    button.addEventListener('mouseleave', (event) => {
        console.log(`Left ${event.target.innerText} button`)
    })
})