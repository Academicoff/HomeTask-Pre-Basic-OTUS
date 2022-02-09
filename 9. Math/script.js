// 1. Даны длины трёх сторон треугольника. Определить,
//     является ли треугольник прямоугольным.
// 2. Пользователь вводит число R. Написать программу,
//     которая выведет в консоль длину окружности и
// площадь круга с радиусом R.
// 3. *Пользователь вводит числа a, b и c. Написать
// программу, выводящую корни квадратного
// уравнения с коэффициентами a, b и c.

// 1
let a = 7;
let b = 5;
let c = 10;

// квадрат гипотенузы равен сумме квадратов катетов
const result = (a ** 2 + b ** 2 === c ** 2) ? 'Прямоугольный' : 'Не прямоугольный';
console.log(result);

// 2
const input = +prompt('Введите R-адиус круга: ');
const circleLength = 2 * Math.PI * input;
const circleSquare = Math.PI * input ** 2;
console.log(`Площадь круга с радиусом ${Math.round(input)} равна: ${Math.round(circleSquare)}. Длина окружности равна: ${Math.round(circleLength)}`);

// 3
const abc = prompt('Введите коэффициенты a,b,c для квадратного уровнения, через запятую: ');
[a, b, c] = abc.split(',');
// ax2 + bx + c = 0 => D = b2 - 4ac
console.log(`Уравнение: ${a}x2 + ${b}x + ${c} = 0`);
const discr = b ** 2 - 4 * a * c;
console.log(`Дискриминант D: ${discr}`);

if (discr > 0) {
  const x1 = (-b + Math.sqrt(discr)) / (2 * a);
  const x2 = (-b - Math.sqrt(discr)) / (2 * a);
  console.log(`x1= ${x1}, x2= ${x2}`);
} else if (discr === 0) {
  const x = -b / (2 * a);
  console.log(`x= ${x}`);
} else {
  console.log('У данного уравнения нет корней!');
}
