


/*const a=36;
console.log(a);


const name = "Mango";
console.log(name.split(""));*/



/*function splitMessage(message, delimeter) {
  let words;
   /*
words = message.split(delimeter);
  
  return words;
}
console.log("Mango hurries to the train");*/

/*const fruits = [ 'banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple', ];
const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
console.log(randomFruit);*/
/*function slugify(title) {
  
const slugify = title.toLowerCase();
  const words = slugify.split(' ');
  const slug = words.join('-');
return slug;
  
}
console.log('Arrays for begginers');



for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}
const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}*/

/*
function calculateEngravingPrice(message, pricePerWord) {
  let totalPrice;
 totalPrice = (message.split(' ').length * pricePerWord);
 
return totalPrice;
  }

/*Перевірка віку, більше чи рівняється >=18
1.
    function checkAge(age) { 
    let message;
  
    if ((age)>=18) { 
      message = 'You are an adult';
    } else {
      message = 'You are a minor';
    }
  
    return message;
  }
2.
  function isAdult(age) {
 
  const passed = (age) >= 18;

  return passed;
}
*/
  

  /*Перевіока пароля
  
  function isValidPassword(password) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    
    const isMatch = (password) === (SAVED_PASSWORD);
  
    return isMatch;
  }*/

  /*Перевірка наявності товару, порівняння між замовленним (order) та доступним (available) і виводимо відповідне інформаційне повідомлення

  function checkStorage(available, ordered) {
  let message;
   if ((available)>=(ordered)) { 
      message = "Order is processed, our manager will contact you.";
    } else {
      message = "Not enough goods in stock!";
    }
  
    return message;
}*/

/* Задача по розрахунку придбаного товару і залишку на рахунку клієнта, де:
pricePerDroid - цена одного дроида
orderedQuantity - кол-во заказанных дроидов
customerCredits - сумма средств на счету клиента

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    const totalPrice = pricePerDroid*orderedQuantity;
    let message;
    if ((totalPrice)>(customerCredits)) { 
        message = "Insufficient funds!";
      } else {
      const droids = (customerCredits)-(totalPrice);
        message = `You ordered ${orderedQuantity} droids, you have ${droids} credits left`;
      }
    
     return message;
  }*/

/* Для зміни змінної на якусь певне число:
let age = 25;
Классическая запись
age = age + 1;
console.log(age);

а js викоримтовуємо:
let a = 5;
let b = 10;
let c = 15;
let d = 20;

a +=  2;
b -= 4;
c *= 3;
d /= 10;
console.log(a, b, c, d);*/



/*Якщо є умова для IF але є ддва варіанти її виконання (якщо .... то..., а якщо жодна умова не задовільняє то.....)

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if ((password)===(null)) { 
    message =  'Canceled by user!';
  } else if ((password)===(ADMIN_PASSWORD)) { 
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}  

Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка "Access denied, wrong password!".*/


/*Перевірка значення числа в проміжку між початком та кінце за допомогою && (і)

function isNumberInRange(start, end, number) {
  const isInRange = (number)>(start) && (number)<(end); 

  return isInRange;
}*/

/*Перевірка значення числа в проміжку між початком та кінце за допомогою || (або)
function checkIfCanAccessContent(subType) {
  const canAccessContent = (subType) === "pro" || (subType) === "vip" ;

  return canAccessContent;
}

Если значение параметра subType равно строкам "pro" или "vip", пользователь получит доступ*/

/*Перевірка значення числа в проміжку між початком та кінце за допомогою ! (ні)


function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange;

  return isNotInRange;
}
*Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. То есть число должно быть меньше либо равно start и больше либо равно end. Результатом выражения проверки будет буль true или false.

Она объявляет три параметра, значения которых будут задаваться во время её вызова:

number - число, не вхождение которого проверяется
start - начало числового промежутка
end - конец числового промежутка
Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.*/



/*Коли має виконатися 3 і більше умови, використовуємо if - else- if (стількі скільки умов), ..... else (коли всі умови перераховані просто прописуємо else)
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  if (totalSpent >= 50000) {discount = GOLD_DISCOUNT;}
  else if (totalSpent >= 20000 && totalSpent < 50000) {discount = SILVER_DISCOUNT;}
  
  else if (totalSpent >= 5000 && totalSpent < 20000 ) {discount = BRONZE_DISCOUNT;}
  else {
    discount = BASE_DISCOUNT;
  }
    return discount;
}

Используя ветвления и логические операторы, дополни код функции.

Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)*/



/*Заміна звичайних If else 
function checkStorage(available, ordered) {
  let message;
  if (ordered > available) {
    message = "Not enough goods in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }
 return message;
}

на тернарний оператор

function checkStorage(available, ordered) {
  let message;
   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";

 return message;
}*/



/* При строгому равенстві заміст  if ...else,

if (type === "starter") {
  price = 0;
} else if (type === "professional") {
  price = 20;
} else if (type === "organization") {
  price = 50;
}


ми використовуємо switch


function getSubscriptionPrice(type) {
  let price;
   switch (type) { 
    case "starter":
      price = 0;
      break;

    case "professional":
      price = 20 ;
      break;

    case "organization":
      price = 50;
      break;
  }
 return price;
}*/


/*Як при  класичному if else, використовуємо switch default

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  
  switch (password){
    case null:
    message = "Canceled by user!";
    break;

    case ADMIN_PASSWORD:  
    message = "Welcome!";
    break;

    default:
    message = "Access denied, wrong password!";
  }

   return message;
}*/


/* Для  підрахунку кількості символів в строчці використовуємо length
наприклад:
Вивести повідомлення скільки символів має введене імя 

function getNameLength(name) {
  
  const message = `Name ${name} is ${name.length} characters long`;

  return message;
}*/


/* Для виведенння певного символу:
const courseTopic = "JavaScript essentials";


const courseTopicLength = (courseTopic.length); - загальна кількість
const firstElement = (courseTopic [0]); - перший елемент
const lastElement = (courseTopic[courseTopic.length-1]); - останній елемент */


/*Для створення копії рядка наприкоад:

function getSubstring(string, length) {
  const substring = string.slice (0, length); 
  return substring;
}
Дана функція копірує з початку і до всієї довжини рядка*/ 





/* для зміни регістру вводу строкуи великі букви toUpperCase або маленьки toLowerCase

function normalizeInput(input) {
  const normalizedInput = (input.toLowerCase());
  return normalizedInput;
}
*/


/*Якщо ми хочимо створити фунукцію яка перевіряє кількість символів і якщо перевищує то перевищену кількість символів замінює на "..."

function formatMessage(message, maxLength) {
  let result;
  
  if(message.length <= maxLength){
  result = message;
} else {
  result = message.slice(0, maxLength) + '...';
}
  
return result;
}*/



/*Для перевірки чи входить певний символ чи слово у задане:

function checkForName(fullName, name) {
 const result = fullName.includes(name);
  return result;
}
Тобто, fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
name - имя для проверки вхождения в полное имя.
Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.
*/

/* Для перевырки введого речення на певны слова або символи
function checkForSpam(message) {
  let result;
  
 result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
  
  return result;
}, тобто Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
Если в строке нет запрещенных слов, функция возвращает буль false.*/





/*let type;
const age = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}

console.log(type);*/ // "adult"



/*
const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total)
const diff =  apples - grapes;
console.log(diff)*/

