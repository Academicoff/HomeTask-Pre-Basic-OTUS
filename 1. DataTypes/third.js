const input = prompt("Введите трехзначное число: ");
let sum = 0;
if (typeof input != Number) {
    alert(`Вы ввели не число! Попробуйте снова.`);
} else if (input.length != 3) {
    alert(`Вы ввели не трехзначное число! Попробуйте снова.`);
} else {
    for (let i = 0; i < input.length; i++) {
        sum += Number(input[i]);
    }
    alert(`Сумма цифр числа: ${input} равняется ${sum}.`);
}