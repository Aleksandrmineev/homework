// Данные и числа в переменных let и константах:
// const firstName = 'John' - не меняется
// let age = 20 - возможно изменится в будущем
// var lastName = 'Smith' - устаревший способ объявления переменных

const firstName = 'Alex'
const lastName = 'Smith'
const age = 40
const height = 170
const weight = 80

// для вывода в консоль
console.log(firstName)
console.log(lastName)
console.log(age)
console.log(height)
console.log(weight)

// вариант отображения: 
console.log('My name is ', firstName, lastName, '.', 'I am', age, 'years old', 'my height is', height, 'sm', 'and weight is', weight, 'kg.')

// Математические операторы и операнды:
// + - * ** %
const a = 5
// в данном выражении = является оператором, a и 5 операндами, а const - переменная
const sum = 2 + 2
// в данном выражении + является оператором
const minus = 10 - 5

const x = 10
const y = 20
const result = x * y
const division = y / 2
const num = 2

console.log(sum)
console.log(minus)

console.log(result)
// или
console.log(x * y)

console.log(division)
console.log(3 ** 2)
// 3 во второй степени
console.log(5 % 2)
// остаток от деления. Остаток будет равен 1.
console.log('Hello ' + 'World')

console.log(-num)


// ========================================
// if (если) else (то) || (или) && (и) else if (иначе если)
const firstNumber = 5
const secondNumber = 20
let result1 = null

if (firstNumber == secondNumber) {
    result1 = firstNumber + secondNumber
    console.log(result1)
    // Если верно, то выведет сумму 2х переменных. Если неверно, оставит без ответа.
} else {
    result1 = secondNumber - firstNumber
    console.log(result1)
}
// иначе другая формула. То есть if если Thrue, то выполняется сложение, else иначе Falsh - вычитание

if (firstNumber > secondNumber) {
    result1 = firstNumber + secondNumber
    console.log(result1)
    // Если верно, то выведет сумму 2х переменных. Если неверно, оставит без ответа.
} else {
    result1 = secondNumber - firstNumber
    console.log(result1)
}

if (firstNumber === 10 || secondNumber === 20) {
    result1 = firstNumber + secondNumber
    console.log(result1)
    // ЕСЛИ первый оператор СТРОГО РАВЕН 10 ИЛИ второе оператор СТРОГО РАВЕН 20
    // Выводим в консоль Результат1.
} else {
    result1 = secondNumber - firstNumber
    console.log(result1)
}
// ИНАЧЕ второй оператор минус первый оператор

const alex = 'admin'
if (alex === 'user') {
    console.log('Alex is user')
}
else if (alex === 'vip') {
    console.log('Alex is vip user')
}
else {
    console.log('Alex is Admin')
}
// Тернарный оператор: в одной строчке ЕСЛИ ? ТО : ИНАЧЕ. Операторы отделяются ? и :
alex === 'admin' ? console.log('Alex is admin') : console.log('Alex is not admin')

console.log("Hello" + " " + "World")
// Сложит Hello, пробел и World и выдаст Hello World

//Циклы
let i = 0
// пусть i равен 0
while (i < 10) {
    i = i + 1
    console.log(i)
}
// пока i меньше 10, считай i + 1, и выводи в консоль
do {
    i = i + 1
    console.log(i)
} while (i < 15)
// считай i+1 и выводи в консоль, пока i < 15

for (let i = 1; i <= 10; i = i + 2) {
    console.log(`Пройден ${i} круг`)
}
// Для пусть i=0 и до 10 выполняем i+2

// Массивы
const numbers = [1, 2, 3, 4, 5]
console.log(numbers)

const numbers1 = [1, '2', true, [1, 2, 3], 5]
console.log(numbers1)

const numbers2 = [1, 2, 3, 4, 6]
numbers2[4] = 5
// [4] в данном примере индекс массива. Т.к. массив начинается с 0, то 1 это нулевой индекс массива
// а команда меняет 4 номер массива (т.е. цифру 6) на цифру 5.
console.log(numbers2)

for (let i = 0; i < numbers2.length; i++) {
    console.log(numbers2[i] + 1)
}
// для (пусть i = 0; пока i < numbers2.длина; считай i + 1) {выведи в консоль numbers2 i + 1}
// получается, он берет элемент массива и выводит 1+1; 2+1; 3+1; 4+1; 5+1

// Функции
function sumNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber
}
const result2 = sumNumbers(3, 10)
console.log(result2)
console.log(sumNumbers(-2, 2))
// =================================
const users = [`John`, `Ann`, `Alex`, `Max`]
const numbers5 = [1, 2, 3]
// Это массив из четырёх строк: ["John", "Ann", "Alex", "Max"].
// Он константный (const), но его элементы можно изменять (например, users[0] = "Mike").
function checkForCopyItem(array, item) {
    //  Функция принимает два аргумента:
    // array → массив, в котором ищем элемент. item → элемент, который проверяем.
    for (let i = 0; i < array.length; i++) {
        // Цикл for проходит по массиву
        // i = 0; → начинаем с первого элемента массива.
        // i < array.length; → выполняем пока i меньше длины массива.
        // i++ → увеличиваем i на 1 на каждой итерации.
        if (array[i] === item) {
            // Если текущий элемент массива (array[i]) совпадает с item, значит найден дубликат.
            return `There is a copy of the ${item} in array`
            // Если найден элемент — вернуть результат
            // Функция завершается сразу же, если найдётся item.
        }
    }
    return 'There is no such item in the array'
    // Если цикл прошёл весь массив и ничего не нашёл, то возвращаем эту строку.
}
console.log(checkForCopyItem(users, `Alex`))
// Передаём массив users и строку "Alex".
// Функция проходит массив и находит "Alex".

console.log(checkForCopyItem(users, `Ann`)); // Найдёт: "There is a copy of the Ann in array"
console.log(checkForCopyItem(users, `Mike`)); // Не найдёт: "There is no such item in the array"
console.log(checkForCopyItem(numbers5, 2)); // найдет
console.log(checkForCopyItem(numbers5, 5)); // не найдет

// Можно улучшить и упростить
function checkForCopyItem(array, item) {
    return array.includes(item) ? `There is a copy of the ${item} in array` : 'There is no such item in the array'
}
console.log(checkForCopyItem(users, `Ann`))

// ============================================
// 1) Создайте функцию, которая в качестве аргумента будет принимать имя, 
// а возвращать строчку ‘Hello “аргумент функции”’.

const users2 = [`Саша`, `Леша`, `Дима`, `Петя`, `Гриша`, `Андрей`, `Валера`]
function checkForCopyItem(array, item) {
    return array.includes(item) ? `Привет ${item}` : 'Твоего имени нет в массиве переменной users2'
}
console.log(checkForCopyItem(users2, `Дима`))

//2) Создайте массив чисел, далее создайте функцию, 
// которая будет принимать в качестве аргумента массив чисел. 
// Функция должна перебирать полученный массив 
// и если число больше 10 - выводить это число в консоль.
const numbers6 = [3, 7, 10, 15, 20, 5, 12, 8, 25, 30];
function logNumber(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i]);
        }
    }
}
logNumber(numbers6);

// 3) Предлагаю вам реализовать простенький калькулятор. 
// Создайте функцию, которая будет принимать три аргумента, 
// два числа и строку для выбора оператора. 
// Запишите результат выполнения функции в переменную и выведите в консоль.
// Подобным образом реализуйте 4 математические операции: сложение, вычитание, умножение и деление.

//Это задание я выполнил с помощью чатаГПТ, но разобрался как он устроен.

function calculator(nummerA, nummerB, operator) {
    let result; //создаем переменную для возврата (хранения) результата
    if (operator === 'plus') { //если оператор плюс
        result = nummerA + nummerB; //суммируем номерА и номерБ
    }
    else if (operator === 'minus') { //иначе если оператор минус
        result = nummerA - nummerB; //вычитаем
    }
    else if (operator === 'multiply') {
        result = nummerA * nummerB; //умножаем
    }
    else if (operator === 'divide') {
        result = nummerA / nummerB; //делим
    }
    else { //иначе (без если) неизвестный оператор.
        return "Ошибка: неизвестный оператор!";
        //Тут нет проверки номерА и номерБ на то, что это число. Только проверка оператора.
    }
    return result; //тут храним результат
}

//Теперь прогоняем через функцию Калькулятор разные значения: 
console.log(calculator(2, 3, 'minus')); // -1
console.log(calculator(10, 5, 'plus')); // 15
console.log(calculator(4, 2, 'multiply')); // 8
console.log(calculator(9, 3, 'divide')); // 3
console.log(calculator(5, 0, 'divide')); // Infinity
console.log(calculator(5, 3, 'unknown')); // Ошибка: неизвестный оператор!
console.log(calculator(`A`, 3, 'plus')); // A3
console.log(calculator(`A`, 3, 'minus')); // NaN
console.log(calculator(`A`, 3, 'фывфыв')); // Ошибка: неизвестный оператор!

//Вариант 2. Подсказал чатГПТ
function calculator(nummerA, nummerB, operator) {
    const operations = {
        plus: nummerA + nummerB,
        minus: nummerA - nummerB,
        multiply: nummerA * nummerB,
        divide: nummerB !== 0 ? nummerA / nummerB : "Ошибка: деление на 0!"
    };

    return operations[operator] ?? "Ошибка: неизвестный оператор!";
}
console.log(calculator(2, 3, 'plus')); // 5
console.log(calculator(10, 5, 'minus')); // 5
console.log(calculator(4, 2, 'multiply')); // 8
console.log(calculator(9, 3, 'divide')); // 3
console.log(calculator(5, 0, 'divide')); // Ошибка: деление на 0!
console.log(calculator(5, 3, 'unknown')); // Ошибка: неизвестный оператор!


//====================================================
//Объекты

const users3 = [
    {
        name: 'alex',
        age: 23,
        isAdmin: false
    },
    {
        name: 'john',
        age: 30,
        isAdmin: true
    },
]

users3.push({
    name: 'ivan',
    age: 30,
    isAdmin: true
})

for (let i = 0; i < users3.length; i++) {
    console.log(users3[i].name)
    console.log(users3[i].age)
}

const foo = 'Hello world'
console.log(foo.toUpperCase())


// Создайте объект с вашим описанием(имя, возраст и т.д.).
// Создайте метод объекта, который в качестве аргумента 
// будет принимать имя и возвращать строку ‘Hello “переданный аргумент”’.

const users4 = {
    Alex: {
        age: 23,
        height: 170,
        profession: 'Фронтенд Девелопер',
        hobbies: ["кодинг", "шахматы", "иностранный язык"],
        isAdmin: false,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    }
};
users4.Alex.sayHello("John"); 
users4.Alex.sayHello("Мария");


// Создать массив объектов и посчитать количество не админов. Ну и заодно админов.
const users5 = [
    {
        name: 'alex',
        age: 23,
        isAdmin: false
    },
    {
        name: 'john',
        age: 30,
        isAdmin: true
    },
    {
        name: 'Vanya',
        age: 35,
        isAdmin: false
    },
    {
        name: 'Petya',
        age: 32,
        isAdmin: false
    },
];

let n = 0;
let m = 0;

for (let user of users5) {
    if (!user.isAdmin) {
        n++;
    } else {
        m++;
    }
}

console.log(`Не админов: ${n}`);
console.log(`Админов: ${m}`);