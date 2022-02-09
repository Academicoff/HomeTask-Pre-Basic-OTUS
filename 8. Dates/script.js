// Домашнее задание №8 «Работа с датами»
//  1. Запросите у пользователя дату в формате
// ДД.ММ.ГГГГ. Напишите программу, выводящую день
// недели по введённой дате.
// 2. Написать программу, которая выводит в консоль
// количество минут, прошедшее с начала сегодняшнего
// дня.
// 3. *В двух переменных хранятся даты рождения двух
// пользователей в формате ДД.ММ.ГГГГ. Написать
// программу, которая определяет более молодого
// пользователя.

// #1
const input = prompt('Enter date: DD.MM.YYYY');
const [day, month, year] = input.split('.');
const newDate = new Date(`${year}-${month}-${day}`);
const dayOfWeek = newDate.getDay();
const sdayOfWeek = dayOfWeekToString(dayOfWeek);
console.log(`День недели: ${sdayOfWeek}`);

function dayOfWeekToString(dayOfWeek) {
  let sdayOfWeek = '';
  switch (dayOfWeek) {
    case 0:
      sdayOfWeek = 'Sunday';
      break;
    case 1:
      sdayOfWeek = 'Monday';
      break;
    case 2:
      sdayOfWeek = 'Tuesday';
      break;
    case 3:
      sdayOfWeek = 'Wednesday';
      break;
    case 4:
      sdayOfWeek = 'Thursday';
      break;
    case 5:
      sdayOfWeek = 'Friday';
      break;
    case 6:
      sdayOfWeek = 'Saturday';
      break;
  }
  return sdayOfWeek;
}

// #2
const dateNow = new Date();
console.log(`1: ${dateNow.getMinutes()} + 2: ${dateNow.getHours()}`);
const minutesNow = dateNow.getMinutes() + dateNow.getHours() * 60;
console.log(`Прошло минут: ${minutesNow}`);

// #3
const firstBirthDate = '05.02.1990';
const secondBirthDate = '02.02.1990';
const firstBirthDateTimeStamp = sdateToTimestamp(firstBirthDate);
const secondBirthDateTimeStamp = sdateToTimestamp(secondBirthDate);
firstBirthDateTimeStamp > secondBirthDateTimeStamp ? console.log('Первый старше') : console.log('Второй старше');

function sdateToTimestamp(sDate1) {
  const [day, month, year] = sDate1.split('.');
  const newDate = new Date(`${year}-${month}-${day}`);
  const dateTimeStamp = newDate.getTime();
  console.log(dateTimeStamp);
  return dateTimeStamp;
}
