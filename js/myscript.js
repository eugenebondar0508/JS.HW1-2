// const name = prompt('Введите имя: ');
// alert('Привет, ' + name);

// const year = 2020;
// const age = +prompt('Введите год Вашего рождения:');
// alert(year - age);

// const long = +prompt('Введите длинну стороны:');
// alert(long * long + 'м2');

// const radius = +prompt('Введите радиус окружности(м): ');
// const p = +3.14;
// alert('Площадь круга равна: ' + radius * p + ' м2');

// const long = +prompt('Введите расстояние между населенными пунктами(км):');
// const time = +prompt('Вветиде предпологаемое время в пути(часов):');
// alert('Скорость движения: ' + long / time + 'км/ч');

// const dol = +prompt('Введите сумму в долларах: ');
// const euro = 0.92;
// alert(dol * euro);

// const volume = +prompt('Введите обьем флешки(Гб): ');
// const gb = volume * 1000;
// const file = 820;
// const balance = gb % file;
// alert((gb - balance) / file + ' файлов');

// const volume = +prompt('Введите сумму денег в кошельке: ');
// const price = +prompt('Введите цену шоколадки: ');
// const change = volume % price;
// alert('Количество шоколадок: ' + (volume - change) / price);
// alert('Сдача: ' + change);


// const sum = +prompt('Введите сумму вклада за 2 месяца: ');
// const sumYear = sum * 6;
// const percentYear = sumYear / 100 * 5;
// const percent = percentYear / 6;
// alert('Проценты за 2 месяца: ' + percent);





// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
// let age = +prompt('Введите возраст: ');
// let message = (age < 3) ? 'Ребенок' :
//     (age >= 12) ? 'Подросток' :
//         (age >= 18) ? 'Взрослый' :
//             (age >= 60) ? 'Пенсионер' :
//                 'Какой необычный возраст!';

// alert(message);


// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

// let key = +prompt('Enter number');
// switch (key) {
//     case 0:
//         alert(')')
//         break;
//     case 1:
//         alert('!')
//         break;
//     case 2:
//         alert('@')
//         break;
//     case 3:
//         alert('#')
//         break;
//     case 4:
//         alert('$')
//         break;
//     case 5:
//         alert('%')
//         break;
//     case 6:
//         alert('^')
//         break;
//     case 7:
//         alert('&')
//         break;
//     case 8:
//         alert('*')
//         break;
//     case 9:
//         alert('(')
//         break;
//     default:
//         alert('Error')
//         break;



// }

// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

// let x = prompt('Введите год: ');
// if (x % 100 !== 0 && x % 400 == 0) {
//     alert('Год высокосный');
// } else if (x % 4 == 0 && x % 100 !== 0) {
//     alert('Год высокосный');
// } else {
//     alert('Год не высокосный');
// } 

// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

// let number = prompt('Введите трехзначное число : ');
// number = number + '';
// if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
//     alert('Есть');
// }
// else
//     alert('Нету');

// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

// let number = prompt('Введите пятизначное число:');
// number = number + '';
// if (number === number.split('').reverse().join(''))
//     alert('Палиндром');
// else alert('Не палиндром');


// Написать конвертор валют.Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.


// let sum = prompt('Введите сумму в долларах:');
// let currency = prompt('EUR = 1, UAH = 2, AZN = 3');
// switch (currency) {
//     case '1':
//         alert(sum * 0.9 + ' EUR')
//         break;
//     case '2':
//         alert(sum * 28 + ' UAH')
//         break;
//     case '3':
//         alert(sum * 1.7 + ' AZN')
//         break;
// }

// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.?

// let sum = prompt('Введите сумму покупки: ');
// if (sum >= 200 && sum < 300) {
//     alert(sum / 100 * 97 + ' со скидкой 3%');
// } else if (sum >= 300 && sum < 500) {
//     alert(sum / 100 * 95 + ' со скидкой 5%');
// } else if (sum >= 500) {
//     alert(sum / 100 * 95 + ' со скидкой 5%');
// }


// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
// let long = prompt('Введите длинну окружност ');
// let p = prompt('Введите периметр квадрата');
// alert(long <= p / 2 ? 'Да' : 'Нет');


// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

// let capital = prompt('Столица Украины? 1 - Киев; 2 - Мельбурн ; 3 - Будапешт; ');
// let currency = prompt('Валюта в Украине? 1 - Гривна; 2 - Рубль ; 3 - Крона; ');
// let indepday = prompt('День Независимости в Украине празднуют? 1 - 3 Сентября; 2 - 13 Декабря ; 3 - 24 Августа; ');
// let score = 0;
// if (capital == 1)
//     score += 2;
// if (currency == 1)
//     score += 2;
// if (indepday == 3)
//     score += 2;
// alert('Ваши балы: ' + score);

// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.

//HW 3-5
//HW 3-5
//HW 3-5

//Подсчитать сумму всех чисел в заданном пользователем диапазоне.
// let number1 = +prompt('Enter number 1: ');
// let number2 = +prompt('Enter number 2: ');
// let sum = 0;
// while (number1 <= number2) {
//     sum += number1;
//     number1++;

// }
// alert(sum);


// Запросить 2 числа и найти только наибольший общий делитель.

// function gcd(x, y) {
//     while (y !== 0) y = x % (x = y);
//     return x;
//   }
//   console.log( gcd(21, 14) );


// Запросить у пользователя число и вывести все делители этого числа.
// let number = +prompt('Enter number: ');
// let i = 2;
// while (i < number) {
//     if (!(number % i)) {
//         console.log(i);
//     }
//     i++;

// }
// // Определить количество цифр в введенном числе.
// let number = +prompt('Enter number');
// let result = 0;
// for (let i = 1; number / i >= 1; i *= 10) {
//     result++;
// }
// console.log(result);

// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
// let number;
// let = sumP = 0;
// for (let i = 1; i < 11; i++) {
//     number = prompt("Enter number " + i);
//     if (number > 0 && number % 2 == 0) {
//         document.write(number + ' - Положительное и четное<br>');

//     } else if (number > 0 && number % 2 != 0) {
//         document.write(number + ' - Положительное и нечетное<br>');
//     } else if (number < 0 && number % 2 == 0) {
//         document.write(number + ' - Отрицательное и четное<br>');
//     } else if (number < 0 && number % 2 != 0) {
//         document.write(number + ' - Отрицательное и нечетное<br>');
//     } else {
//         document.write('Равно нулю <br>');
//     }
// }



// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
// do {
//     let number1 = +prompt('Enter number');
//     let number2 = +prompt('Enter number');
//     let symbol = prompt('Enter symbol');
//     alert(eval(number1 + symbol + number2));
// }
// while (prompt('Enother one yes / no?') == 'yes');


// Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
// let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Восскресение'];
// let i = 0;
// while (true) {
//     alert(`${days[i]}. Хотите увидеть следующий день?`);
//     i++;
//     if (i == 7) {
//         i = 0;
//     }
// }

// // Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
// let result = 1;
// for (let number = 2; number <= 9; number++) {
//     for (let x = 1; x <= 10; x++) {
//         result = number * x;
//         document.write(`${number} x ${x} = ${result} <br>`);
//     }
// }


// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
// let a = +prompt('Enter first number');
// let b = +prompt('Enter second number');
// function checkNumber(a, b) {
//     if (a == b) {
//         return 0;
//     } else {
//         return (a > b) ? 1 : -1;
//     }
// }
// alert(checkNumber(a, b));

// Написать функцию, которая вычисляет факториал переданного ей числа.
// let a = +prompt('Enter number');
// function factorial(a) {
//     return (a != 1) ? a * factorial(a - 1) : 1;
// }
// alert(factorial(a));


// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
// let a = +prompt('Enter first number');
// let b = +prompt('Enter second number');
// let c = +prompt('Enter third number');
// function number(a, b, c) {
//     return String(a) + String(b) + String(c);
// }
// alert(number(a, b, c));


// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
// let a = +prompt('Enter first number');
// let b = +prompt('Enter second number');
// function square(a, b) {
//     if (a > 0 && b > 0) {
//         return (a * b);
//     } else if (a <= 0) {
//         return (b * b);
//     } else if (b <= 0) {
//         return (a * a);
//     }
// }
// alert(square(a, b));

// Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
// let a = +prompt('Enter number');
// function isPerfect(a) {
//     let sum = 0;
//     for (let i = 1; i < a; i++) {
//         if (!(a % i)) {
//             sum += i;
//         }
//     } return a === sum ? true : false;
// }
// alert(isPerfect(a));


// let a = +prompt('Enter first number');
// let b = +prompt('Enter second number');
// function range(a, b) {

// }

// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными.Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
// function isPerfect(a) {
//     let sum = 0;
//     for (let i = 1; i < a; i++) {
//         if (!(a % i)) {
//             sum += i;
//         }
//     } return a === sum ? true : false;
// }
// function range(min, max) {
//     for (let i = min; i <= max; i++) {
//         if (isPerfect(i)) console.log(i);
//     }
// }
// range(1, 10000);

// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

// function setTime(h) {
//     return function setMin(m = "00") {
//         return function setSec(s = "00") {
//             return `${h}:${m}:${s}`
//         }
//     }
// }
// let time = setTime(28)(10)();
// alert(time);


// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
// let h = +prompt('Enter hours');
// let m = +prompt('Enter minutes');
// let s = +prompt('Enter seconds');
// function time(h, m, s) {
//     return `${h * 3600}:${m * 60}:${s}`
// }
// alert(time(h, m, s));



// Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
// function hourConvert(sec) {
//     let h = Math.floor(sec / 3600);
//     let s = sec % 100;
//     let m = (sec - h * 3600 - s) / 60;
//     return `«${h}:${m}:${s}»`;
// }
// alert(hourConvert(10000));


// Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»
// Не работает!
// function secConvert(h, m, s) {
//     return function setMinutes(m = '00') {
//         return function setSeconds(s = '00') {
//             return (h * 3600) + (m * 60) + s;
//         }
//     }
// }
// function hourConvert(sec) {
//     let h = Math.floor(sec / 3600);
//     let s = sec % 100;
//     let m = (sec - h * 3600 - s) / 60;
//     return `«${h}:${m}:${s}»`;
// }

// function timeConvert(h1, m1, s1, h2, m2, s2) {
//     let res1 = secConvert(h1, m1, s1);
//     let res2 = secConvert(h2, m2, s2);
//     let result;
//     if (res1 < res2) {
//         result = res2 - res1;
//     } else {
//         result = res1 - res2;
//     }
//     alert(hourConvert(result));
// }


// timeConvert(10, 20, 30, 9, 10, 0);

// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

// let car = {
//     name: "audi",
//     model: "TT",
//     age: 2002,
//     speed: 160
// };

// Функция для вывода на экран информации об автомобиле;
// function info(obj) {
//     for (let key in obj) {
//         alert(`${key} : ${obj[key]}`);
//     }
// }
// info(car);

// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
// function getTime(obj, distance) {
//     let time = (distance / obj.speed);
//     let restTime = Math.floor(time / 4);
//     return `${time + restTime} hours`;
// }
// alert(getTime(car, 380));

// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 
// let fraction = {
//     numerator: 10,
//     denominator: 2
// };

// Функция сложения 2-х объектов-дробей;
// function plusFraction(obj) {
//     let a = obj.numerator;
//     let b = obj.denominator;
//     return a + b;
// }
// alert(plusFraction(fraction));
// Функция вычитания 2-х объектов-дробей;
// function minusFraction(obj) {
//     let a = obj.numerator;
//     let b = obj.denominator;
//     if (a > b) {
//         return a - b;
//     } else {
//         return b - a;
//     }
// }
// alert(minusFraction(fraction));

// Функция умножения 2-х объектов-дробей;
// function multiplicationFraction(obj) {
//     let a = obj.numerator;
//     let b = obj.denominator;
//     return a * b;
// }
// alert(multiplicationFraction(fraction));


// Функция деления 2-х объектов-дробей;
// function segmentationFraction(obj) {
//     let a = obj.numerator;
//     let b = obj.denominator;
//     if (a > b) {
//         return a / b;
//     } else {
//         return b / a;
//     }
// }
// alert(segmentationFraction(fraction));

// Функция сокращения объекта - дроби.
// function segmentationFraction(obj) {
//     let a = obj.numerator;
//     let b = obj.denominator;
//     let min, max, x;
//     if (a > b) {
//         max = a;
//         min = b;
//     } else if (b > a) {
//         max = b;
//         min = a;
//     } else {
//         x = 1;
//     }
//     while (min && max) {
//         min > max ? min %= max : max %= min;
//     }
//     min += max;
//     x = min;
//     return `${a}/${b} = ${a / x}/${b / x}`;
// }
// alert(segmentationFraction(fraction));


// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
// let time = {
//     hours: 10,
//     minutes: 20,
//     seconds: 30
// };

// Функция вывода времени на экран;
// function info(obj) {
//     alert(`${obj.hours}:${obj.minutes}:${obj.seconds}`);
// }
// info(time);

// Функция изменения времени на переданное количество секунд;
// function changeSeconds(obj, changeSeconds) {
//     let newHours = +obj.hours;
//     let newMinutes = +obj.minutes;
//     let newSeconds = +obj.seconds + changeSeconds;
//     if (newSeconds >= 60) {
//         newMinutes += Math.floor(newSeconds / 60);
//         newSeconds %= 60;
//     }
//     if (newSeconds < 10) {
//         return `${obj.hours}:${newMinutes}:0${newSeconds}`;
//     }
//     return `${obj.hours}:${newMinutes}:${newSeconds}`;
// }
// alert(changeSeconds(time, 50));

// Функция изменения времени на переданное количество минут;
// function changeMinutes(obj, changeMinutes) {
//     let newHours = +obj.hours;
//     let newMinutes = +obj.minutes + changeMinutes;
//     let newSeconds = +obj.seconds;
//     if (newMinutes >= 60) {
//         newHours += Math.floor(newMinutes / 60);
//         newMinutes %= 60;
//     }
//     if (newMinutes < 10) {
//         return `${newHours}:0${newMinutes}:${obj.seconds}`;
//     }
//     return `${newHours}:${newMinutes}:${obj.seconds}`;
// }
// alert(changeMinutes(time, 65));

// Функция изменения времени на переданное количество часов. 
// function changeHours(obj, changeHours) {
//     let newHours = +obj.hours + changeHours;
//     if (newHours >= 24) {
//         newHours %= 24;
//     } if (newHours < 10) {
//         return `0${newHours}:${obj.minutes}:${obj.seconds}`;
//     }
//     return `${newHours}:${obj.minutes}:${obj.seconds}`;
// }
// alert(changeHours(time, 15));