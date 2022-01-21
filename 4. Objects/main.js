/*[x] Создайте объект user, содержащий поле name со
значением ‘John’.

[x] 1. Запросить у пользователя ввод числа. Записать
введенное значение в поле age объекта user.

[x] 2. Создать копию объекта user с именем admin.
Добавить новому объекту поле role со значением
‘admin’.

[x] 3. *Записать все значения полей объекта admin в
отдельные переменные. Имена переменных
должны совпадать с названиями полей.*/

//first
const user = {
    name: "John",
    age() {
        this.name = prompt("Сколько лет User'у? Введите число");
        console.log(this.name);
    }
};
user.age();

const input = prompt("Сколько лет User'у? Введите число");
user.age = input;
console.log(user.age);

//second
let admin = Object.assign({}, user);
admin.role = "admin";
console.log(admin.role);

//let admin = {...user, role:{...role}};

//third
let { name, age, role } = admin;
console.log(`name: ${name} age: ${age} role: ${role}`)