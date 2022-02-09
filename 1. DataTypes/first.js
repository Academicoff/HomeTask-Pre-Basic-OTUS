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
export function prod(a, b){
    return a * b;
}

export function result(sum,prod){
    return console.log("Product " + prod + " Sum " + sum);
}
