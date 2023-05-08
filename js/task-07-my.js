// Напиши скрипт, который реагирует на изменение значения 
// input#font-size-control (событие input) и изменяет инлайн-стиль span#text 
// обновляя свойство font-size. 

// В результате при перетаскивании ползунка будет меняться размер текста.

const inputEl = document.querySelector('#font-size-control');
const outputEL = document.querySelector('#text');


inputEl.addEventListener('input', onInputeSize);


function onInputeSize (event){
    const fontSizeOut = event.target.value +'px';
    console.log(fontSizeOut);
    outputEL.style.fontSizeOut = fontSize;
}