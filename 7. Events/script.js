// Сверстать страницу и подключить к ней файл со
// скриптом. На странице должны быть три текстовых
// параграфа, поле ввода и кнопка. Напишите скрипт,
// который будет выполнять следующие условия:
//
// 1.Кнопка скрыта, если в поле ввода нет значения.
//
// 2.При клике на кнопку добавляется новый параграф,
// содержащий текст из поля ввода.
//
// 3.*Если параграфов становится больше 5, первый из
// них удаляется.

const buttonText = document.querySelector(".button-text");
const inputText = document.querySelector(".input-text");
const bodyBlock = document.querySelector(".body-block");

inputText.addEventListener('input',textInput);
buttonText.addEventListener('click',buttonTextClick);

function textInput(){
    buttonText.hidden = '' !== inputText.value ? false : true;
}

let count = 3;
function buttonTextClick(){
    console.log(count);
    if (count === 5) {
        document.querySelector('p').remove();
        count--;
    }
    let par = document.createElement('p');
    par.innerHTML = `<p> ${inputText.value} </p>`
    bodyBlock.append(par);
    count++;
}