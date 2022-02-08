// 1. В переменных a и b хранятся числа. Написать
// программу, которая выводит в консоль произведение
// и сумму этих чисел.
//
// let a = 10;
// let b = 20;
// console.log("a * b = " + a * b + "| a + b = " + (a + b));

export function sum(a, b){
    return a + b;
}
export function product(a, b){
    return a * b;
}
console.log("a * b = " + product(a, b) + "| a + b = " + sum(a, b));