"use strict";

//! start test 1 //

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

///! end test 1 //

//! start test 2 //

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

///! end test 2 //

//! start test 3 //

// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//   const checkingPassword = correctPassword === password ? "Access granted" : "Access denied, wrong password!";
//   return checkingPassword;
// }

// checkPassword();

// console.log(checkPassword("jqueryismyjam"));

///! end test 3 //

//! start test 4 //

// function isNumberInRange(start, end, number) {
//   return number >= start && number <= end;
// }

// isNumberInRange();

// console.log(isNumberInRange(10, 30, 17)); // true
// console.log(isNumberInRange(10, 30, 5)); // false
// console.log(isNumberInRange(20, 50, 55)); // false
// console.log(isNumberInRange(20, 50, 30)); // true

///! end test 4 ///

//! start test 5 ///

// function checkAccess(subType) {
//   return subType === "pro" || subType === "vip";
// }

// checkAccess();

// console.log(checkAccess("free")); // false
// console.log(checkAccess("vip")); // true
// console.log(checkAccess("pro")); // true
// console.log(checkAccess("starter")); // false

///! end test 5 //

//! start test 6 //

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

///! end test 6 //

//! start test 7 //

// const isOnline = true;
// const isBlocked = false;
// const canChat = isOnline && !isBlocked;
// true && !false -> true && true -> true

// if (canChat) {
//   console.log("Can type in chat!");
// } else {
//   console.log("Blocked from typing in chat!");
// }

///! end test 7 //

//! start test 8 //

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

///! end test 8 //

//! start test 9 //

// const message = "Mark is black boy";
// console.log(message.length); // 17 символів довжина рядка

///! end test 9 //

//! start test 10 //

// const message = "Mark is black boy";
// console.log(message.toUpperCase()); // MARK IS BLACK BOY

///! end test 10 //

//! start test 11 //

// function getSubstring(string, length) {
//   return string.slice(0, length);
// }

// const check = getSubstring("Hello world", 11);

// console.log(check); // повертає весь рядок

///! end test 11 //

//! start test 12 //

// const thisName = "Jacob Mercer";
// console.log(thisName.slice());

///! end test 12 //

//! start test 13 //

// function normalizeInput(input, to) {
//   if (to === "upper") {
//     return input.toUpperCase();
//   } else {
//     return input.toLowerCase();
//   }
// }

// const check = normalizeInput("This ISN'T SpaM", "upper");

// console.log(check);

///! end test 13 //

//! start test 14 //

// function checkForName(fullName, firstName) {
//   return fullName.toLowerCase().includes(firstName.toLowerCase());
// }

// const checkName = checkForName("Jason Neis", "Jason");

// console.log(checkName);

///! end test 14 //

//! start test 15 //

// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext)) {
//     return "File extension matches";
//   } else {
//     return "File extension does not match";
//   }
// }

// const check = checkFileExtension("app.js", ".js");

// console.log(check);

///! end test 15 //

//! start test 16 //

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

///! end test 16 //

//! start test 17 //

// function createFileName(name, ext) {
//   const trimmedName = name.trim();
//   const file = `${trimmedName}.${ext}`;
//   return file;
// }

// const check = createFileName("report ", "csv");

// console.log(check);

///! end test 17 //

//! start test 18 //

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

///! end test 18 //

//! start test 19 //

// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 1; i <= number; i++) {
//     total += i;
//   }
//   return total;
// }

// console.log(calculateTotal(7));

///! end test 19 //

//! start test 20 //

// function calculateEvenTotal(number) {
//   let total = 0;
//   for (let i = 2; i <= number; i += 2) {
//     total += i;
//   }
//   return total;
// }

// console.log(calculateEvenTotal(10));

///! ===================================================

const start = 6;
const end = 17;
let number;

for (let i = start; i <= end; i++) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

console.log("Підсумкове значення змінної number дорівнює", 10);
