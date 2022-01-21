/*[x] 3. *Запросить у пользователя ввод числа N. Вывести в
консоль среднее арифметическое всех нечётных
чисел от 1 до N*/

const input = prompt("Введите число: ");
let numberAvg = 0;
let count = 0;

for (let i = 1; i <= input; i++) {
    if (i % 2 !== 0) {
        numberAvg += i;
        count++;
        console.log(numberAvg + "| " + count);
    }
}
console.log(numberAvg / count);