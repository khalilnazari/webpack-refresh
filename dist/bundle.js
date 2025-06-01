/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/hello-world.ts":
/*!****************************!*\
  !*** ./src/hello-world.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function helloWorld() {
    console.log("Hello world");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helloWorld);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hello_world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello-world */ "./src/hello-world.ts");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");

// import myImage from "./image.png";
// import "./css/style.css"

console.log("Runing addImage");
// addImage("image-container", myImage, "simple image");
console.log("Running helloWorld");
(0,_hello_world__WEBPACK_IMPORTED_MODULE_0__["default"])();
console.log('this should be the last one running');

})();

// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
function printLoop() {
    for (var index = 0; index < 10; index++) {
        console.log("Index : ", index);
    }
}
printLoop();

})();

// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
console.log("App.js is runing");
console.log('TS is runing here.');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7VUNIMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ051QztBQUN2QztBQUNBO0FBQzBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLHdEQUFVO0FBQ1Y7Ozs7Ozs7OztBQ1JBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ0xBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWNvdXJzZS8uL3NyYy9jc3Mvc3R5bGUuc2Nzcz82MmFmIiwid2VicGFjazovL3dlYnBhY2stY291cnNlLy4vc3JjL2hlbGxvLXdvcmxkLnRzIiwid2VicGFjazovL3dlYnBhY2stY291cnNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stY291cnNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvdXJzZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stY291cnNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb3Vyc2UvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb3Vyc2UvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvdXJzZS8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZnVuY3Rpb24gaGVsbG9Xb3JsZCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkhlbGxvIHdvcmxkXCIpO1xufVxuZXhwb3J0IGRlZmF1bHQgaGVsbG9Xb3JsZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGhlbGxvV29ybGQgZnJvbSBcIi4vaGVsbG8td29ybGRcIjtcbi8vIGltcG9ydCBteUltYWdlIGZyb20gXCIuL2ltYWdlLnBuZ1wiO1xuLy8gaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCJcbmltcG9ydCBcIi4vY3NzL3N0eWxlLnNjc3NcIjtcbmNvbnNvbGUubG9nKFwiUnVuaW5nIGFkZEltYWdlXCIpO1xuLy8gYWRkSW1hZ2UoXCJpbWFnZS1jb250YWluZXJcIiwgbXlJbWFnZSwgXCJzaW1wbGUgaW1hZ2VcIik7XG5jb25zb2xlLmxvZyhcIlJ1bm5pbmcgaGVsbG9Xb3JsZFwiKTtcbmhlbGxvV29ybGQoKTtcbmNvbnNvbGUubG9nKCd0aGlzIHNob3VsZCBiZSB0aGUgbGFzdCBvbmUgcnVubmluZycpO1xuIiwiZnVuY3Rpb24gcHJpbnRMb29wKCkge1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCAxMDsgaW5kZXgrKykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkluZGV4IDogXCIsIGluZGV4KTtcbiAgICB9XG59XG5wcmludExvb3AoKTtcbiIsImNvbnNvbGUubG9nKFwiQXBwLmpzIGlzIHJ1bmluZ1wiKTtcbmNvbnNvbGUubG9nKCdUUyBpcyBydW5pbmcgaGVyZS4nKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==