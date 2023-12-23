"use strict";

//! ==================================================

// function checkStorage(available, ordered) {
//   if (ordered == 0) {
//     return "There are no products in the order!";
//   } else if (available >= ordered) {
//     return "The order is accepted, our manager will contact you";
//   } else {
//     return "Your order is too large, there are not enough items in stock!";
//   }
// }

// checkStorage();

// console.log(checkStorage(50, 10));
// console.log(checkStorage(50, 0));
// console.log(checkStorage(50, 55));

///! ==================================================

//! ==================================================

// function biggerNumber(a, b) {
//   if (a > b) {
//     return a;
//   } else if (a < b) {
//     return b;
//   } else {
//     return `${a} та ${b} це є однакові числа !`;
//   }
// }

// biggerNumber();

// console.log(biggerNumber(100, 100));

///! ==================================================

//! ==================================================

// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//   const checkingPassword = correctPassword === password ? "Access granted" : "Access denied, wrong password!";
//   return checkingPassword;
// }

// checkPassword();

// console.log(checkPassword("jqueryismyjam"));

///! ==================================================

//! ==================================================

// function isNumberInRange(start, end, number) {
//   return number >= start && number <= end;
// }

// isNumberInRange();

// console.log(isNumberInRange(10, 30, 17)); // true
// console.log(isNumberInRange(10, 30, 5)); // false
// console.log(isNumberInRange(20, 50, 55)); // false
// console.log(isNumberInRange(20, 50, 30)); // true

///! ==================================================

//! ==================================================

// function checkAccess(subType) {
//   return subType === "pro" || subType === "vip";
// }

// checkAccess();

// console.log(checkAccess("free")); // false
// console.log(checkAccess("vip")); // true
// console.log(checkAccess("pro")); // true
// console.log(checkAccess("starter")); // false

///! ==================================================

//! ==================================================

// function checkChatPermission(isBlocked) {
//   const canChat = !isBlocked; // "!false -> true"

//   if (canChat) {
//     console.log("Can type in chat!");
//   } else {
//     console.log("Blocked from typing in chat!");
//   }
// }

// checkChatPermission();

// function checkChatPermissionTrueToFalse(isBlocked) {
//   const canChat = isBlocked; // "true -> false"

//   if (canChat) {
//     console.log("Can type in chat!");
//   } else {
//     console.log("Blocked from typing in chat!");
//   }
// }

// checkChatPermissionTrueToFalse();

// console.log(Boolean(0)); // false
// console.log(Boolean(!0)); // true

///! ==================================================

//! ==================================================

// const isOnline = true;
// const isBlocked = false;
// const canChat = isOnline && !isBlocked;
// true && !false -> true && true -> true

// if (canChat) {
//   console.log("Can type in chat!");
// } else {
//   console.log("Blocked from typing in chat!");
// }

///! ==================================================

//! ==================================================

// function toggleModalVisibility(isVisible) {
//   return !isVisible;
// }

// toggleModalVisibility();

// console.log(toggleModalVisibility(false)); // true

// function toggleModalVisibility(isVisible) {
//   return !isVisible;
// }

// toggleModalVisibility();

// console.log(toggleModalVisibility(true)); //false

///! ==================================================

//! ==================================================

// const message = "Mark is black boy";
// console.log(message.length); // 17 символів довжина рядка

///! ==================================================

//! ==================================================

// const message = "Mark is black boy";
// console.log(message.toUpperCase()); // MARK IS BLACK BOY

///! ==================================================

//! ==================================================

// function getSubstring(string, length) {
//   return string.slice(0, length);
// }

// const check = getSubstring("Hello world", 11);

// console.log(check); // повертає весь рядок

///! ==================================================

//! ==================================================

// const thisName = "Jacob Mercer";
// console.log(thisName.slice());

///! ==================================================

//! ==================================================

// function normalizeInput(input, to) {
//   if (to === "upper") {
//     return input.toUpperCase();
//   } else {
//     return input.toLowerCase();
//   }
// }

// const check = normalizeInput("This ISN'T SpaM", "upper");

// console.log(check);

///! ==================================================

//! ==================================================

// function checkForName(fullName, firstName) {
//   return fullName.toLowerCase().includes(firstName.toLowerCase());
// }

// const checkName = checkForName("Jason Neis", "Jason");

// console.log(checkName);

///! ==================================================

//! ==================================================

// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext)) {
//     return "File extension matches";
//   } else {
//     return "File extension does not match";
//   }
// }

// const check = checkFileExtension("app.js", ".js");

// console.log(check);

///! ==================================================

//! ==================================================

// function getFileName(file) {
//   const dotIndex = file.indexOf(".");
//   if (dotIndex !== -1) {
//     return file.slice(0, dotIndex);
//   } else {
//     return file;
//   }
// }

// const check = getFileName("index.html"); // поверне index

// console.log(check);

///! ==================================================

//! ==================================================

// function createFileName(name, ext) {
//   const trimmedName = name.trim();
//   const file = `${trimmedName}.${ext}`;
//   return file;
// }

// const check = createFileName("report ", "csv");

// console.log(check);

///! ==================================================

//! ==================================================

// function calculateTotal(number) {
//   if (number <= 0) {
//     return 0;
//   } else {
//     return (number * (number + 1)) / 2;
//   }
// }
// calculateTotal();

// console.log(calculateTotal(1)); // Повертає 1
// console.log(calculateTotal(3)); // Повертає 6
// console.log(calculateTotal(0)); // Повертає 0
// console.log(calculateTotal(18)); // Повертає 171
// console.log(calculateTotal(24)); // Повертає 300

///! ==================================================

//! ==================================================

// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 1; i <= number; i++) {
//     total += i;
//   }
//   return total;
// }

// console.log(calculateTotal(7));

///! ==================================================

//! ==================================================

// function calculateEvenTotal(number) {
//   let total = 0;
//   for (let i = 2; i <= number; i += 2) {
//     total += i;
//   }
//   return total;
// }

// console.log(calculateEvenTotal(10));

///! ==================================================

//! ==================================================

// const start = 2;
// const end = 11;
// let number;

// for (let i = start; i < end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// console.log(number);

///! ==================================================

//! ==================================================

// function findNumber(start, end, divisor) {
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }

// const check = findNumber(16, 35, 7);

// console.log(check);

///! ==================================================

//! ==================================================

// function getOrderQuantity(order) {
//   return order.length;
// }

// console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]));

///! ==================================================

//! ==================================================

// const planets = ["Earth", "Mars", "Venus", "Penis"];

// const lastElementIndex = planets.length - 1;

// console.log(planets[lastElementIndex]); // видасть назву останнього елементу
// console.log(lastElementIndex); // видасть індекс останнього елементу

///! ==================================================

//! ==================================================

// function getLastElementMeta(array) {
//   const result = array[array.length - 1];
//   return [array.length - 1, result];
// }

// console.log(getLastElementMeta(["apple", "peach"]));

///! ==================================================

//! ==================================================

// function getExtremeElements(array) {
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];
//   return [firstElement, lastElement];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5])); // [1, 5]
// console.log(getExtremeElements(["Earth", "Mars", "Venus"])); // ["Earth", "Venus"]
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"])); // ["apple", "banana"]

///! ==================================================

//! ==================================================

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає 138
// console.log(calculateTotalPrice([164, 48, 291])); // повертає 503

///! ==================================================

//! ==================================================

// function checkStorage(storage, item) {
//   const lowerCaseItem = item.toLowerCase();
//   if (storage.includes(lowerCaseItem)) {
//     return `${lowerCaseItem} is available to order!`;
//   } else {
//     return "Sorry! We are out of stock!";
//   }
// }

// console.log(checkStorage(["apple", "plum", "pear"], "pEAr")); // виводить pear is available to order!

///! ==================================================

//! ==================================================

// function createReversedArray() {
//   const args = Array.from(arguments);
//   return args.reverse();
// }

// console.log(createReversedArray(412, 371, 94, 63, 176));

///! ==================================================

//! ==================================================

// function createReversedArray() {
//   const args = [...arguments];
//   return args.reverse();
// }

// console.log(createReversedArray(412, 371, 94, 63, 176));

///! ==================================================

//! ==================================================

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

///! ==================================================

//! ==================================================

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

///! ==================================================

//! ==================================================

// function logItems(items) {
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(i + 1);
//   }
// }

// logItems(["qaz", "wsx", "edc", "rfv", "tgb"]); // 5

///! ==================================================

//! ==================================================

// function countProps(object) {
//   const propCount = Object.keys(object).length;
//   return propCount;
// }

// console.log(countProps({ name: "Mango", age: 2 })); // 2

///! ==================================================

//! ==================================================

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys); // [ 'descr', 'rating', 'price' ]
// console.log(values); // [ 'Spacious apartment in the city center', 4, 2153 ]

///! ==================================================

//! ==================================================

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const values = Object.values(salaries);
//   for (let i = 0; i < values.length; i += 1) {
//     totalSalary += values[i];
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({})); // 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // 400

///! ==================================================

//! ==================================================

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const result of colors) {
//   hexColors.push(result.hex);
//   rgbColors.push(result.rgb);
// }

// console.log(hexColors); // [ '#f44336', '#2196f3', '#4caf50', '#ffeb3b' ]
// console.log(rgbColors); // [ '244,67,54', '33,150,243', '76,175,80', '255,235,59' ]

///! ==================================================

//! ==================================================

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const result of products) {
//     if (productName === result.name) {
//       return result.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice("Radar")); // 1300
// console.log(getProductPrice("Grip")); // 1200
// console.log(getProductPrice("Scanner")); // 2700
// console.log(getProductPrice("Engine")); // null

///! ==================================================

//! ==================================================

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const result = [];

//   for (const product of products) {
//     for (const key in product) {
//       if (key === propName) {
//         result.push(product[key]);
//       }
//     }
//   }
//   return result;
// }

// console.log(getAllPropValues("name")); // [ 'Radar', 'Scanner', 'Droid', 'Grip' ]
// console.log(getAllPropValues("quantity")); // [ 4, 3, 7, 9 ]
// console.log(getAllPropValues("price")); // [ 1300, 2700, 400, 1200 ]
// console.log(getAllPropValues("category")); // []

///! ==================================================

//! ==================================================

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   let totalPrice = 0;

//   for (let i = 0; i < products.length; i += 1) {
//     if (products[i].name === productName) {
//       totalPrice = products[i].price * products[i].quantity;
//       return totalPrice;
//     }
//   }
//   return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice("Blaster")); // Product Blaster not found!
// console.log(calculateTotalPrice("Radar")); // 5200

///! ==================================================

//! ==================================================

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return "List of all available potions";
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };

// console.log(atTheOldToad.getPotions()); // List of all available potions
// console.log(atTheOldToad.addPotion("Power potion")); // Adding Power potion

///! ==================================================

//! ==================================================

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };

// console.log(atTheOldToad.getPotions());

///! ==================================================

//! ==================================================

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };

// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.getPotions()); // [ 'Speed potion', 'Stone skin', 'Invisibility' ]

///! ==================================================

//! ==================================================

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;

//     for (const result of this.potions) {
//       totalPrice += result.price;
//     }
//     return totalPrice;
//   },
// };

// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.getPotions()); // додались два значення вище в масив potions
// console.log(atTheOldToad.getTotalPrice()); // 1870

///! ==================================================

//! ==================================================

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const result of this.potions) {
//       if (result.name === oldName) {
//         result.name = newName;
//       }
//     }
//   },
// };

// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility")); // { name: 'Invisibility', price: 520 }
// console.log(atTheOldToad.getPotions());

///! ==================================================

//! ==================================================

// function add(...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   return sum;
// }

// console.log(add(15, 27)); // 42
// console.log(add(12, 4, 11, 48)); // 75
// console.log(add(32, 6, 13, 19, 8)); // 78

///! ==================================================

//! ==================================================

// function addOverNum(value, ...args) {
//   let totalSum = 0;
//   for (let i = 0; i < args.length; i++) {
//     if (args[i] > value) {
//       totalSum += args[i];
//     }
//   }
//   return totalSum;
// }

// console.log(addOverNum(50, 15, 27)); // 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); // 51

///! ==================================================

//! ==================================================

// function getExtremeScores(scores) {
//   const numbers = {
//     best: Math.max(...scores),
//     worst: Math.min(...scores),
//   };
//   return numbers;
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); // { best: 93, worst: 17 }
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24])); // { best: 81, worst: 4 }

///! ==================================================

//! ==================================================

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores); // масив всіх значень
// console.log(bestScore); // 97
// console.log(worstScore); // 14

///! ==================================================

//! ==================================================

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings); // змінить значення public, withPassword, timePerQuestion, в об'єкті defaultSettings

///! ==================================================

//! ==================================================

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);

///! ==================================================

//! ==================================================

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// registerGuest("Mango", greet); // "Registering Mango!"
// "Welcome Mango!"

// registerGuest("Mango", notify); // "Registering Mango!"
// "Dear Mango, your room will be ready in 30 minutes"

///! ==================================================

//! ==================================================

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

///! ==================================================

//! ==================================================

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

///! ==================================================

//! ==================================================

// function filterArray(numbers, value) {
//   let result = [];
//   numbers.forEach(function (number) {
//     if (number > value) {
//       result.push(number);
//     }
//   });
//   return result;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [ 24, 41, 76 ]
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [ 4, 5 ]

///! ==================================================

//! ==================================================

// const changeEven = (numbers, value) => {
//   const updatedNumbers = [];

//   numbers.forEach((elem) => {
//     updatedNumbers.push(elem % 2 === 0 ? elem + value : elem);
//   });

//   return updatedNumbers;
// };

// console.log(changeEven([1, 2, 3, 4, 5], 10)); // [ 1, 12, 3, 14, 5 ]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // [ 12, 18, 3, 7, 14, 16 ]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); // [ 17, 124, 168, 31, 142 ]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // [ 144, 13, 81, 192, 136, 154 ]

///! ==================================================

//! ==================================================

// function changeEven(numbers, value) {
//   const updatedNumbers = [];

//   numbers.forEach((elem) => {
//     updatedNumbers.push(elem % 2 === 0 ? elem + value : elem);
//   });

//   return updatedNumbers;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10)); // [ 1, 12, 3, 14, 5 ]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // [ 12, 18, 3, 7, 14, 16 ]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); // [ 17, 124, 168, 31, 142 ]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // [ 144, 13, 81, 192, 136, 154 ]

///! ==================================================

//! ==================================================

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order("Smoked"));

///! ==================================================
