/* # Домашнее задание №5 «Массивы»

Создайте массив целых чисел из 10 элементов.
[x] 1. Выведите в консоль сумму всех элементов массива.
[x] 2. Создайте новый массив на основе исходного, в
котором каждый элемент будет вдвое больше
элемента исходного массива с таким же индексом.
(a[1] = 3, b[1] = 6, где a — исходный массив, b — новый
массив).
[x] 3.*Найдите и выведите в консоль наибольший и
наименьший элементы исходного массива. */

const firstArray = [4, 20, 3, 41, 50, 2, 17, 8, 23, 10];

// first
let sum = 0;
firstArray.forEach((element) => {
  sum += element;
});
console.log(`Сумма элементов массива: ${sum}`);

// second
const secondMassive = firstArray.map((element) => {
  const newElement = element * 2;
  return newElement;
});
console.log(`Новый массив: ${secondMassive}`);

// third
// не красивое решение через forEach
let min = +firstArray[0];
let max = +firstArray[0];

firstArray.forEach((element) => {
  if (max < element) {
    max = element;
  }
  if (min > element) {
    min = element;
  }
});
console.log(`Минимальный элемент: ${min}, максимальный элемент: ${max}`);

// красивое
const indexMax = firstArray.indexOf(Math.max(...firstArray));
const indexMin = firstArray.indexOf(Math.min(...firstArray));
console.log(`Минимальный элемент: ${firstArray[indexMin]}, максимальный элемент: ${firstArray[indexMax]}`);
