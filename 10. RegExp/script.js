// Пользователь вводит текстовую строку. Определить с
// помощью регулярного выражения, является ли
// введённая строка:
// 1. Датой.
// 2. Адресом электронной почты.
// 3. *Номером телефона.

const input = prompt("Введите дату, email или номер телефона: ");
const regexpDate = /\d{1,2}[\.\/]\d{2}[\.\/]\d{2,4}/;
const regexpEmail = /[a-zA-Z_\.\d]+@[a-z\d]+\.[a-z]{2,5}/;
const regexpPhonenumber = [/[0-9]{11}/,/\+7+[0-9]{10}/,/7+\s+[0-9]{3}\s+[0-9]{7}/];

if (regexpDate.test(input)){
    alert('Valid Date');
} else if (regexpEmail.test(input)){
    alert('Valid Email');
} else if (regexpPhonenumber[0].test(input)||regexpPhonenumber[1].test(input)||regexpPhonenumber[2].test(input)){
    alert('Valid Phone number');
} else {
    alert('Valid value not found');
}
