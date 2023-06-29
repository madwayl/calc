/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Spline+Sans+Mono:wght@300;400;500;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    margin: 0;
    padding: 0;
    text-align: end;
    box-sizing: border-box;
    font-family: 'Spline Sans Mono', monospace;

    display:flex; 
    flex-direction:column; 
    justify-content:center;
    min-height:100vh;

    min-width: fit-content;

    background-color: #F2E5D7;
}


div[data-section="calculator"] {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
}

div[data-section="body"] {
    /* background-color: #A8DADC; */
    box-shadow: 2px 2px 24px #14110f6d;
    padding: 15px;
    border-radius: 15px;
    background-color: #14110fd8;
}

.error {
    color: #E63946 !important;
}

/* SECTION: SCREEN */
div[data-section="screen"]{
    width: 270px;
    min-height: auto;

    padding: 10px;
    border-radius: 15px;
    margin-bottom: 15px;
    text-align: right;

}

/* RESULT */
div[data-section="result"]{
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-wrap: wrap;
    flex-direction: column;
    min-height: 55px;
    font-weight: 600;
    font-size: 45px;
    overflow-x: auto;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    color: #FFD285;
}
div[data-section="result"]::-webkit-scrollbar {
    display: none; /*  Chrome */
}

/* ENTER */
div[data-section="entry"]{
    min-height: 30px;
    height: max-content;
    font-size: 20px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end; 
    overflow-x: auto;
    
    -ms-overflow-style: none;
    scrollbar-width: none;
    
    overflow-wrap: break-word;

    color: #8F5A00;
    
    margin-top: 10px;
}

div[data-section="entry"]::-webkit-scrollbar {
    display: none;
}

/* !SECTION */

/* SECTION: Buttons */
div[data-section="buttons"] {
    display: flex;
    gap: 10px;
    padding: 10px;
}

input {
    border-radius: 300px;
    width: 60px;
    height: 60px;
    font-size: large;
    font-family: 'Spline Sans Mono', monospace;
    font-weight: 600;
    border: 0;
    color: #23416C;
    background-color: #ffeccc;
}

input:active {
    border-radius: 30%;
}

/* SECTION: Numbers */
.number:hover {
    color: #14253E;
    background-color: #FFDA99;
}

.number-active {
    color: #14253E;
    background-color: #FFDA99;
    border-radius: 30%;
}
/* !SECTION */

/* SECTION: Operators */
.symbol {
    background-color: #FCAC5D;
}

.symbol:hover {
    background-color: #FB8F23;
    color: #14253E;
}

.symbol-active{
    background-color: #FB8F23;
    color: #14253E;
    border-radius: 30%;
}
/* !SECTION */

/* SECTION: Delete */
.delete {
    background-color: #E63946;
}

.delete:hover {
    background-color: #DA1B2B;
    color: #14253E;
}

.delete-active {
    background-color: #DA1B2B;
    color: #14253E;
    border-radius: 30%;
}
/* !SECTION */

/* SECTION: Backspace */
.backspace{
    background-color: #D37D4A;
}

.backspace:hover {
    background-color: #C56630;
    color: #14253E;
}

.backspace-active {
    background-color: #C56630;
    color: #14253E;
    border-radius: 30%;
}
/* !SECTION */

div[data-section*="col"] {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

div[data-section*="row"] {
    display: flex;
    gap: 10px;
}

div[data-section="symbols"] {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
/* !SECTION */

footer {
    text-align: center;
    font-weight: 300;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;IACV,eAAe;IACf,sBAAsB;IACtB,0CAA0C;;IAE1C,YAAY;IACZ,qBAAqB;IACrB,sBAAsB;IACtB,gBAAgB;;IAEhB,sBAAsB;;IAEtB,yBAAyB;AAC7B;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,+BAA+B;IAC/B,kCAAkC;IAClC,aAAa;IACb,mBAAmB;IACnB,2BAA2B;AAC/B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA,oBAAoB;AACpB;IACI,YAAY;IACZ,gBAAgB;;IAEhB,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,iBAAiB;;AAErB;;AAEA,WAAW;AACX;IACI,aAAa;IACb,qBAAqB;IACrB,yBAAyB;IACzB,eAAe;IACf,sBAAsB;IACtB,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,wBAAwB,GAAG,gBAAgB;IAC3C,qBAAqB,EAAE,YAAY;;IAEnC,cAAc;AAClB;AACA;IACI,aAAa,EAAE,YAAY;AAC/B;;AAEA,UAAU;AACV;IACI,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,yBAAyB;IACzB,gBAAgB;;IAEhB,wBAAwB;IACxB,qBAAqB;;IAErB,yBAAyB;;IAEzB,cAAc;;IAEd,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA,aAAa;;AAEb,qBAAqB;AACrB;IACI,aAAa;IACb,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,0CAA0C;IAC1C,gBAAgB;IAChB,SAAS;IACT,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;AACtB;;AAEA,qBAAqB;AACrB;IACI,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,kBAAkB;AACtB;AACA,aAAa;;AAEb,uBAAuB;AACvB;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,kBAAkB;AACtB;AACA,aAAa;;AAEb,oBAAoB;AACpB;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,kBAAkB;AACtB;AACA,aAAa;;AAEb,uBAAuB;AACvB;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,kBAAkB;AACtB;AACA,aAAa;;AAEb;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA,aAAa;;AAEb;IACI,kBAAkB;IAClB,gBAAgB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Spline+Sans+Mono:wght@300;400;500;600&display=swap');\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    text-align: end;\r\n    box-sizing: border-box;\r\n    font-family: 'Spline Sans Mono', monospace;\r\n\r\n    display:flex; \r\n    flex-direction:column; \r\n    justify-content:center;\r\n    min-height:100vh;\r\n\r\n    min-width: fit-content;\r\n\r\n    background-color: #F2E5D7;\r\n}\r\n\r\n\r\ndiv[data-section=\"calculator\"] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 50px auto;\r\n}\r\n\r\ndiv[data-section=\"body\"] {\r\n    /* background-color: #A8DADC; */\r\n    box-shadow: 2px 2px 24px #14110f6d;\r\n    padding: 15px;\r\n    border-radius: 15px;\r\n    background-color: #14110fd8;\r\n}\r\n\r\n.error {\r\n    color: #E63946 !important;\r\n}\r\n\r\n/* SECTION: SCREEN */\r\ndiv[data-section=\"screen\"]{\r\n    width: 270px;\r\n    min-height: auto;\r\n\r\n    padding: 10px;\r\n    border-radius: 15px;\r\n    margin-bottom: 15px;\r\n    text-align: right;\r\n\r\n}\r\n\r\n/* RESULT */\r\ndiv[data-section=\"result\"]{\r\n    display: flex;\r\n    align-items: flex-end;\r\n    justify-content: flex-end;\r\n    flex-wrap: wrap;\r\n    flex-direction: column;\r\n    min-height: 55px;\r\n    font-weight: 600;\r\n    font-size: 45px;\r\n    overflow-x: auto;\r\n    -ms-overflow-style: none;  /* IE and Edge */\r\n    scrollbar-width: none; /* Firefox */\r\n\r\n    color: #FFD285;\r\n}\r\ndiv[data-section=\"result\"]::-webkit-scrollbar {\r\n    display: none; /*  Chrome */\r\n}\r\n\r\n/* ENTER */\r\ndiv[data-section=\"entry\"]{\r\n    min-height: 30px;\r\n    height: max-content;\r\n    font-size: 20px;\r\n    flex-wrap: wrap;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n    justify-content: flex-end; \r\n    overflow-x: auto;\r\n    \r\n    -ms-overflow-style: none;\r\n    scrollbar-width: none;\r\n    \r\n    overflow-wrap: break-word;\r\n\r\n    color: #8F5A00;\r\n    \r\n    margin-top: 10px;\r\n}\r\n\r\ndiv[data-section=\"entry\"]::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n/* !SECTION */\r\n\r\n/* SECTION: Buttons */\r\ndiv[data-section=\"buttons\"] {\r\n    display: flex;\r\n    gap: 10px;\r\n    padding: 10px;\r\n}\r\n\r\ninput {\r\n    border-radius: 300px;\r\n    width: 60px;\r\n    height: 60px;\r\n    font-size: large;\r\n    font-family: 'Spline Sans Mono', monospace;\r\n    font-weight: 600;\r\n    border: 0;\r\n    color: #23416C;\r\n    background-color: #ffeccc;\r\n}\r\n\r\ninput:active {\r\n    border-radius: 30%;\r\n}\r\n\r\n/* SECTION: Numbers */\r\n.number:hover {\r\n    color: #14253E;\r\n    background-color: #FFDA99;\r\n}\r\n\r\n.number-active {\r\n    color: #14253E;\r\n    background-color: #FFDA99;\r\n    border-radius: 30%;\r\n}\r\n/* !SECTION */\r\n\r\n/* SECTION: Operators */\r\n.symbol {\r\n    background-color: #FCAC5D;\r\n}\r\n\r\n.symbol:hover {\r\n    background-color: #FB8F23;\r\n    color: #14253E;\r\n}\r\n\r\n.symbol-active{\r\n    background-color: #FB8F23;\r\n    color: #14253E;\r\n    border-radius: 30%;\r\n}\r\n/* !SECTION */\r\n\r\n/* SECTION: Delete */\r\n.delete {\r\n    background-color: #E63946;\r\n}\r\n\r\n.delete:hover {\r\n    background-color: #DA1B2B;\r\n    color: #14253E;\r\n}\r\n\r\n.delete-active {\r\n    background-color: #DA1B2B;\r\n    color: #14253E;\r\n    border-radius: 30%;\r\n}\r\n/* !SECTION */\r\n\r\n/* SECTION: Backspace */\r\n.backspace{\r\n    background-color: #D37D4A;\r\n}\r\n\r\n.backspace:hover {\r\n    background-color: #C56630;\r\n    color: #14253E;\r\n}\r\n\r\n.backspace-active {\r\n    background-color: #C56630;\r\n    color: #14253E;\r\n    border-radius: 30%;\r\n}\r\n/* !SECTION */\r\n\r\ndiv[data-section*=\"col\"] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n\r\ndiv[data-section*=\"row\"] {\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\ndiv[data-section=\"symbols\"] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n/* !SECTION */\r\n\r\nfooter {\r\n    text-align: center;\r\n    font-weight: 300;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/scripts/calculate.js":
/*!**********************************!*\
  !*** ./src/scripts/calculate.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ calculate)
/* harmony export */ });
/* harmony import */ var js_big_decimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-big-decimal */ "./node_modules/js-big-decimal/dist/node/js-big-decimal.js");
/* harmony import */ var js_big_decimal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_big_decimal__WEBPACK_IMPORTED_MODULE_0__);


// Input: 9*3+5/100
// Input: -9*-3+5/100

// const bigDecimal = require('js-big-decimal')

function calculate(truncEntry) {
    // function calculate(truncEntry) {
    // truncEntry = truncEntry.replaceAll(/(?<=\d)[\+\-\*\/\%]/g, " $& ")
    let truncArray = truncEntry.split(' ')

    let fixedTruncArray = truncArray.map(n => !Number(n) ? n : Number(n))

    let indexOfOperand;

    while (true) {
        if ((indexOfOperand = fixedTruncArray.indexOf('%')) == -1 ? false : true) {
            fixedTruncArray.splice(
                indexOfOperand - 1,
                2,
                js_big_decimal__WEBPACK_IMPORTED_MODULE_0___default().subtract(fixedTruncArray[indexOfOperand - 1], 100, 2)
            );
            continue;
        } else if ((indexOfOperand = fixedTruncArray.indexOf('/')) == -1 ? false : true) {
            fixedTruncArray.splice(
                indexOfOperand - 1,
                3,
                js_big_decimal__WEBPACK_IMPORTED_MODULE_0___default().divide(fixedTruncArray[indexOfOperand - 1], fixedTruncArray[indexOfOperand + 1], 3)
            );
            continue;
        } else if ((indexOfOperand = fixedTruncArray.indexOf('*')) == -1 ? false : true) {
            fixedTruncArray.splice(
                indexOfOperand - 1,
                3,
                js_big_decimal__WEBPACK_IMPORTED_MODULE_0___default().multiply(fixedTruncArray[indexOfOperand - 1], fixedTruncArray[indexOfOperand + 1])
            );
            continue;
        } else if ((indexOfOperand = fixedTruncArray.indexOf('+')) == -1 ? false : true) {
            fixedTruncArray.splice(
                indexOfOperand - 1,
                3,
                js_big_decimal__WEBPACK_IMPORTED_MODULE_0___default().add(fixedTruncArray[indexOfOperand - 1], fixedTruncArray[indexOfOperand + 1])
            );
            continue;
        } else if ((indexOfOperand = fixedTruncArray.indexOf('-')) == -1 ? false : true) {
            fixedTruncArray.splice(
                indexOfOperand - 1,
                3,
                js_big_decimal__WEBPACK_IMPORTED_MODULE_0___default().subtract(fixedTruncArray[indexOfOperand - 1], fixedTruncArray[indexOfOperand + 1])
            );
            continue;
        } else { break }
    }

    return fixedTruncArray[0]
}

// calculate('9*3+5/100')
// calculate('-9*+3+5/100')
calculate('-9.25*+3.983+5.23/100.23')


/***/ }),

/***/ "./src/scripts/script.js":
/*!*******************************!*\
  !*** ./src/scripts/script.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _calculate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculate */ "./src/scripts/calculate.js");



let bf = 0, bl = 0, // Brackets Front + Brackets Last
    result = null  // Result of the entry value

let oldTime, newTime; // Calculate Time for Long Press on Backspace


const entryScreen = document.querySelector('div[data-section="entry"]');
entryScreen.textContent = "";

const resultScreen = document.querySelector('div[data-section="result"]');
resultScreen.textContent = "";

// SECTION Calculator Operations

/* FIXME 🟢
    1. Empty Values are allowed with .includes and considered true
        ✅ - Added another boolean statement to avoid the same
    2. Issues with % symbols
        ✅ - Created a separate while loop for checking %
    3. Issues with brackets based multiplication
        ✅ - Made flow to add multiplication after bracket calculation
    4. Avoid eval()
        ✅ - Used Function()
    5. Unhandled Error
        ✅ - Moved to try/catch block
    6. Fix Exponentials with Small Decimals
        ✅ - Check Length of repeating value
    7. Issue with -(-3) Operate Calculation
        ✅ - Fixed with Check on -1 and +1 with calculation and make calculation
    8. Fix Bugs on : 3-(-3)+(3-(-3) | 3-(-3)4 | 3 + (+3)4
        ✅ - Fixed with changes on final result string calculation
*/

function operate(entry) {

    let beforeIndex, afterIndex
    entry = entry.replaceAll('x', '*')

    // entry = entry.replaceAll(' ', '')

    try {
        while (beforeIndex !== -1) {

            beforeIndex = entry.lastIndexOf('(')
            afterIndex = entry.indexOf(')', beforeIndex)

            if (beforeIndex !== -1 && afterIndex === -1) {
                entry += ')';
                afterIndex = entry.indexOf(')', beforeIndex);
            }

            let bracketedEntry = entry.slice(beforeIndex + 1, afterIndex)

            entry = entry.slice(beforeIndex - 1, bracketedEntry.length, (0,_calculate__WEBPACK_IMPORTED_MODULE_1__["default"])(bracketedEntry))

        }
    } catch (e) {
        return 'ERROR'
    }

    return result
}
// !SECTION


// SECTION Event Actions

/* FIXME 🟢
    1. Entering more than 1 symbol not encountering error
        ✅ - Entered Statement to disallow more than 1 operator together
            a. Reversing from the Error
                ✅ - use Previous Value 
            b. Not Calculating the End Result After Error Removed
                ✅ - Check for Double operator entry / operate if not
    2. Issues with unfinished brackets
        ✅ - Check exact entry and add end bracket
    3. Issue on Equals after Exponents
        ✅ - Corrected with converting Exponents to Number
    4. Issues with Text Wrap
        ✅ - Solved with placing breaking space
        ✅ - Modified breaking space to none on calculation
    5. Issues with Backspace with Space Character
        ✅ - Matched with Regex to remove two spaces on the operator entry
    6. Do not enter space on operators + and - , if before is no numbers
        Allow Space : 123% - 123
        Disallow Space : 123/-123 | 123*-123 | 123(-12 + | +123
            ✅ - Ignore Spacing when LastChar is '/*(' and ''
    7. Show error on - 1(x 
        ✅ - Separate Check for Bracket & '+/' added
    8. Not joining Mouse and Keyboard Click for Brackets
        ✅ - Remove separate keyboard based bracket calculation
                and integrate with Mouse based bracket calculation
*/

function eventAction(eventValue) {

    // let LastChar;

    // On Clear
    if (eventValue === "C") {
        entryScreen.textContent = "";
        resultScreen.textContent = "";
        bl = 0; bf = 0;
        return
    }

    // On Equals
    else if (eventValue === "=") {

        if (resultScreen.textContent.includes('e+'))
            entryScreen.textContent = Number(resultScreen.textContent).toString()
        else if (resultScreen.textContent.includes('e-'))
            entryScreen.textContent = Number(resultScreen.textContent).toFixed(resultScreen.textContent.length - 3).toString()
        else
            entryScreen.textContent = resultScreen.textContent;

        resultScreen.textContent = "";
        bl = 0; bf = 0;

        // Do not acknowledge Error after Equal
        if (resultScreen.textContent == "ERROR") entryScreen.textContent = ""

    }

    // On Backspace
    else if (eventValue === "B") {

        // Long Press Backspace
        if (newTime - oldTime > 1000) {
            entryScreen.textContent = "";
            bl = 0; bf = 0;
            // console.log(newTime - oldTime)
        }
        // Short Press Backspace
        else {

            // Reduce Bracket Count after Backspace
            if (entryScreen.textContent.replaceAll(' ', '').slice(-1) == ')') bl--
            else if (entryScreen.textContent.replaceAll(' ', '').slice(-1) == '(') bf--

            if (entryScreen.textContent.slice(-3).match(/\s[+-x/]\s/g))
                entryScreen.textContent = entryScreen.textContent.slice(0, -3);
            else
                entryScreen.textContent = entryScreen.textContent.slice(0, -1);

            let beforeLastChar = entryScreen.textContent.replaceAll(' ', '').slice(-2, -1)

            if (!'+-x/'.includes(beforeLastChar))
                if (entryScreen.textContent.slice(-3).match(/\s[+-x/]\s/g))
                    resultScreen.textContent = operate(entryScreen.textContent.slice(0, -3))
                else
                    resultScreen.textContent = operate(entryScreen.textContent)
        }

        return
    }

    // On Brackets by Mouse Click

    /* FIXME 🟢
    Fixing the Bracket errors (incorrect Bracket Sequence) showing up
        - ((8)9) ✅
        - ((9)-(9)) ✅
    */

    else if (eventValue === "()") {
        let islastValueNumber = '0123456789'.includes(entryScreen.textContent.slice(-1));
        let islastValueBracket = ')' === entryScreen.textContent.slice(-1)

        if (bf - bl == 0) {
            entryScreen.textContent += "(";
            bf++
        } else if (bf > bl && (islastValueNumber || islastValueBracket)) {
            entryScreen.textContent += ")";
            bl++
        } else if (bf > bl && !islastValueNumber) {
            entryScreen.textContent += "(";
            bf++
        }

        if (bf - bl == 0 && entryScreen.textContent.slice(-1) == ')') {
            resultScreen.textContent = operate(entryScreen.textContent)
        }
        return
    }

    // On Keyboard Specific Brackets
    else if (eventValue === '(') {
        bf++;
        entryScreen.textContent += eventValue;
        return
    }

    else if (eventValue === ')') {
        bl++;
        entryScreen.textContent += eventValue;

        if (!(bf >= bl)) return 'ERROR';
    }

    // On Other Entries
    else {
        const LastChar = entryScreen.textContent.replaceAll(' ', '').slice(-1);

        const al_pm = '+-'.includes(eventValue) && 'x/('.includes(LastChar) //Allow '+ or -' for characters 'x/('

        // Add space only when last char is '+-x/'

        if ('+-x/'.includes(eventValue) && !al_pm)
            entryScreen.textContent += ' ' + eventValue + ' ';
        else
            entryScreen.textContent += eventValue;

        // Return Error on double operator entry
        if (("+-x/(".includes(LastChar) && "+-x/".includes(eventValue) && LastChar != '') && !al_pm) {
            resultScreen.textContent = 'ERROR';
        } else {
            if ("+-x/(".includes(eventValue))
                return
            else
                resultScreen.textContent = operate(entryScreen.textContent)
        }
    }

    // Allow to operate only if no symbols are typed
    // if (!"+-x/(".includes(entryScreen.textContent.replaceAll(' ', '').slice(-1)) && eventValue !== "=") {
    //     resultScreen.textContent = operate(entryScreen.textContent)

    // }

    // if (!"+-x/(".includes(eventValue)) {
    //     resultScreen.textContent = operate(entryScreen.textContent)
    // }

    // Always Scroll Entry to Left
    entryScreen.scrollLeft = entryScreen.scrollWidth - entryScreen.clientHeight
}
// !SECTION

// Check on Error & Enable Error Class
function checkError() {
    if (resultScreen.textContent == 'ERROR') resultScreen.classList.add('error')
    else resultScreen.classList.remove('error')
}

/* FIXME 🟢
    1. Hover action on KeyDown
        ✅ - Added Switch with Data Attributes
    2. Long Press Toggles ClassList Wrong
        ✅ - Check using Ternary Operator for Keyup or Keydown
*/
function hoverOnKeyPress(eventKey, eventType) {

    const btnActive = document.querySelector(`input[data-value~="${eventKey}"`);

    const isKeyDown = eventType == "keydown";

    switch (eventKey) {
        case 'b':
        case 'Backspace':
            isKeyDown ? btnActive.classList.add('backspace-active') : btnActive.classList.remove('backspace-active')

        case 'c':
        case 'Delete':
            isKeyDown ? btnActive.classList.add('delete-active') : btnActive.classList.remove('delete-active')

        case '=': case 'Enter':
        case '*': case 'x': case '/':
        case '%': case '(': case ')':
        case '-': case '+':
            isKeyDown ? btnActive.classList.add('symbols-active') : btnActive.classList.remove('symbols-active')


        case '1': case '2': case '3': case '4':
        case '5': case '6': case '7': case '8':
        case '9': case '0': case '.':
            isKeyDown ? btnActive.classList.add('number-active') : btnActive.classList.remove('number-active')

    }

}

const Buttons = document.querySelectorAll('input');

// SECTION Event Listeners 
// SECTION Mouse
for (let button of Buttons) {
    button.addEventListener('click', (e) => {
        eventAction(e.target.value);

        checkError()
    });
}
// !SECTION

// SECTION Keyboard 
document.addEventListener('keydown', (e) => {
    // console.log(e.key, e.code);

    // Ignored Keys
    if ('adefghijklmnopqrstuvwyz&^$#`~!@_{[]}:;"\'\\<,>?'.includes(e.key)) {
        // console.log('Key Ignored: ', e.key)
        return
    }

    // Acknowledged Keys

    // Hover on Key
    hoverOnKeyPress(e.key, e.type)

    if (e.key === "Delete" || e.key === "c") eventAction('C')
    else if (e.key === "=" || e.key === "Enter") eventAction('=')
    else if (e.key === "Backspace" || e.key === "b") eventAction('B')
    else if (e.key === "*" || e.key === "x") eventAction('x')
    else if ('1234567890-+=%()./'.includes(e.key)) {
        // console.log('Key Acknowledged: ', e.key)
        eventAction(e.key)
    } else {
        return
    }

    checkError()

});

document.addEventListener('keyup', (e) => {

    hoverOnKeyPress(e.key, e.type)
});
// !SECTION
// !SECTION


// SECTION Long Press of Backspace
let backspace = document.querySelector('input[value="B"]');
backspace.addEventListener('mousedown', () => {
    oldTime = new Date
});
backspace.addEventListener('mouseup', () => {
    newTime = new Date
});
// !SECTION

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcalc"] = self["webpackChunkcalc"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-2884e3"], () => (__webpack_require__("./src/scripts/script.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map