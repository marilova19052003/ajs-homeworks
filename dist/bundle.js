/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class Character {\r\n  constructor(name, type, health, level, attack, defence) {\r\n    this.name = name;\r\n    this.type = type;\r\n    this.health = health;\r\n    this.level = level;\r\n    this.attack = attack;\r\n    this.defence = defence;\r\n  }\r\n}\r\nclass Team {\r\n  constructor() {\r\n    this.characters = [];\r\n  }\r\n\r\n  addCharacter(character) {\r\n    this.characters.push(character);\r\n  }\r\n\r\n  *[Symbol.iterator]() {\r\n    for (const character of this.characters) {\r\n      yield character;\r\n    }\r\n  }\r\n}\r\nconst team = new Team();\r\nteam.addCharacter(new Character(\"Лучник\", \"Bowman\", 50, 1, 40, 10));\r\nteam.addCharacter(new Character(\"Мечник\", \"Swordsman\", 60, 1, 50, 20));\r\n\r\nfor (const character of team) {\r\n  console.log(character);\r\n}\r\nconsole.log(canIterate(new Map())); // true\r\nconsole.log(canIterate(new Set())); // true\r\nconsole.log(canIterate(null)); // false\r\nconsole.log(canIterate(10)); // false\r\nconsole.log(canIterate(\"Netology\")); // true\r\n\n\n//# sourceURL=webpack://ajs-homeworks2/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;