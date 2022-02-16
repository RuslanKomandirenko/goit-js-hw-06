const btns = document.querySelectorAll('button');
let counterValue = 0;
const decrBtnEl = document.querySelector('[data-action="decrement"]');
const incrBtnEl = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');
value.textContent = counterValue;


const decrHandleClick = (event) => {
    counterValue -= 1;
    console.log("event: ", event);
    // console.log('-1');
};

decrBtnEl.addEventListener('click', decrHandleClick);

const incrHandleClick = (event) => {
    counterValue += 1;
    console.log("event: ", event);
    // console.log('+1');
};

incrBtnEl.addEventListener('click', incrHandleClick);


if (incrBtnEl === '+1') {
    value = counterValue += 1;
} else {
    counterValue -= 1;
}
value = counterValue;


console.log('counterValue');