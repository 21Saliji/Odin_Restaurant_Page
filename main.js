/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Lato:wght@300;400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --bg: #e8ede8;\r\n  --bg-surface: #dde5dc;\r\n  --bg-card: #f0f4f0;\r\n  --border: #c2cfc2;\r\n  --accent: #3a6b45;\r\n  --accent-light: #4e8a5c;\r\n  --accent-dim: rgba(58, 107, 69, 0.08);\r\n  --text: #2c3b2d;\r\n  --text-muted: #6b7d6b;\r\n  --font-mono: 'JetBrains Mono', monospace;\r\n  --font-body: 'Lato', sans-serif;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background: var(--bg);\r\n  color: var(--text);\r\n  font-family: var(--font-body);\r\n  font-size: 16px;\r\n  line-height: 1.7;\r\n}\r\n\r\nheader {\r\n  background: var(--bg-surface);\r\n  border-bottom: 1px solid var(--border);\r\n  padding: 1rem 2rem;\r\n}\r\n\r\nheader p.logo {\r\n  font-family: var(--font-mono);\r\n  font-size: 0.7rem;\r\n  color: var(--accent);\r\n  letter-spacing: 0.15em;\r\n  margin-bottom: 0.75rem;\r\n  opacity: 0.7;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n}\r\n\r\nnav button {\r\n  background: none;\r\n  border: none;\r\n  border-bottom: 2px solid transparent;\r\n  color: var(--text-muted);\r\n  cursor: pointer;\r\n  font-family: var(--font-body);\r\n  font-size: 0.85rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.05em;\r\n  padding: 0.4rem 0.9rem 0.5rem;\r\n  text-transform: uppercase;\r\n  transition: color 0.2s ease;\r\n}\r\n\r\nnav button:hover {\r\n  color: var(--text);\r\n}\r\n\r\nnav button.active {\r\n  color: var(--accent);\r\n  border-bottom-color: var(--accent);\r\n}\r\n\r\n#content {\r\n  max-width: 760px;\r\n  margin: 0 auto;\r\n  padding: 2.5rem 1.5rem;\r\n}\r\n\r\n#content h1 {\r\n  font-size: 1.8rem;\r\n  font-weight: 700;\r\n  color: var(--accent);\r\n  margin-bottom: 1rem;\r\n  padding-bottom: 0.5rem;\r\n  border-bottom: 1px solid var(--border);\r\n}\r\n\r\n#content h3 {\r\n  font-family: var(--font-mono);\r\n  font-size: 0.72rem;\r\n  color: var(--text-muted);\r\n  letter-spacing: 0.12em;\r\n  text-transform: uppercase;\r\n  margin-top: 2rem;\r\n  margin-bottom: 0.75rem;\r\n}\r\n\r\n#content p {\r\n  font-size: 0.95rem;\r\n  color: var(--text);\r\n  font-weight: 300;\r\n  margin-bottom: 0.9rem;\r\n  max-width: 600px;\r\n}\r\n\r\n#content ul {\r\n  list-style: none;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\r\n  gap: 0.5rem;\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n#content ul li {\r\n  background: var(--bg-card);\r\n  border: 1px solid var(--border);\r\n  border-radius: 6px;\r\n  font-size: 0.85rem;\r\n  color: var(--text-muted);\r\n  padding: 0.6rem 1rem;\r\n  transition: border-color 0.2s ease, color 0.2s ease;\r\n}\r\n\r\n#content ul li:hover {\r\n  border-color: var(--accent);\r\n  color: var(--text);\r\n}\r\n\r\n.menu-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));\r\n  gap: 0.75rem;\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.menu-grid li {\r\n  background: var(--bg-card);\r\n  border: 1px solid var(--border);\r\n  border-radius: 6px;\r\n  padding: 0.9rem 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.4rem;\r\n  font-size: 0.9rem;\r\n  color: var(--text);\r\n  transition: border-color 0.2s ease;\r\n}\r\n\r\n.menu-grid li:hover {\r\n  border-color: var(--accent);\r\n}\r\n\r\n.menu-grid li span.price {\r\n  font-family: var(--font-mono);\r\n  font-size: 0.75rem;\r\n  color: var(--accent-light);\r\n}\r\n\r\n::-webkit-scrollbar { width: 5px; }\r\n::-webkit-scrollbar-track { background: var(--bg); }\r\n::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }\r\n::-webkit-scrollbar-thumb:hover { background: var(--accent); }\r\n\r\n::selection {\r\n  background: var(--accent-dim);\r\n  color: var(--accent);\r\n}\r\n\r\n/* mobile */\r\n@media (max-width: 600px) {\r\n  header { padding: 0.75rem 1rem; }\r\n  #content { padding: 1.5rem 1rem; }\r\n  #content h1 { font-size: 1.4rem; }\r\n  .menu-grid { grid-template-columns: 1fr 1fr; }\r\n}\r\n\r\n#founder-img {\r\n  width: 200px;\r\n  height: 200px;\r\n  border-radius: 50%;\r\n  background: var(--bg-card);\r\n  border: 2px solid var(--border);\r\n  margin: 1.5rem 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin_restaurant_page/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin_restaurant_page/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin_restaurant_page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/Founder.png"
/*!*************************!*\
  !*** ./src/Founder.png ***!
  \*************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"5f42595f1567dcee7998.png\";\n\n//# sourceURL=webpack://odin_restaurant_page/./src/Founder.png?\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAbout: () => (/* binding */ loadAbout)\n/* harmony export */ });\n/* harmony import */ var _Founder_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Founder.png */ \"./src/Founder.png\");\n\r\n\r\nfunction loadAbout() {\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = '';\r\n\r\n    const headline = document.createElement('h1');\r\n    headline.textContent = \"About the Founder\";\r\n    content.appendChild(headline);\r\n\r\n    const founderImg = document.createElement('div');\r\n    founderImg.id = 'founder-img';\r\n    content.appendChild(founderImg);\r\n\r\n    founderImg.style.backgroundImage = `url(\"${_Founder_png__WEBPACK_IMPORTED_MODULE_0__}\")`;\r\n    founderImg.style.backgroundSize = 'cover';\r\n    founderImg.style.backgroundPosition = 'center';\r\n    content.appendChild(founderImg);\r\n\r\n    \r\n    const story = document.createElement('p');\r\n    story.textContent = \"Yauncai's Bistro was founded by Yauncai,\";\r\n    story.textContent += \" a software engineer turned culinary architect.\";\r\n    story.textContent += \" After years of debugging code,\";\r\n    story.textContent += \" Yauncai realized that a perfectly balanced plate is just like a well-written function:\";\r\n    story.textContent += \" clean, efficient, and satisfying.\";\r\n    content.appendChild(story);\r\n\r\n    const missionHeader = document.createElement('h3');\r\n    missionHeader.textContent = \"Our Mission\";\r\n    content.appendChild(missionHeader);\r\n\r\n    const mission = document.createElement('p');\r\n    mission.textContent = \"We aim to provide a sanctuary for developers where the coffee is strong, the Wi-Fi is fast, and the food never throws a 404 error.\";\r\n    content.appendChild(mission);\r\n}\r\n\n\n//# sourceURL=webpack://odin_restaurant_page/./src/about.js?\n}");

/***/ },

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = '';\r\n\r\n    const headline = document.createElement('h1');\r\n    headline.textContent = \"Contact Us\";\r\n    content.appendChild(headline);\r\n\r\n    const info = document.createElement('p');\r\n    info.textContent = \"📍 6670, Mabandla Valley, SA\";\r\n    content.appendChild(info);\r\n\r\n    const phone = document.createElement('p');\r\n    phone.textContent = \"📞 063-010-1010\";\r\n    content.appendChild(phone);\r\n}\r\n\n\n//# sourceURL=webpack://odin_restaurant_page/./src/contact.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _initial_page_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial-page-load.js */ \"./src/initial-page-load.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst homeBtn = document.getElementById('home-btn');\r\nconst menuBtn = document.getElementById('menu-btn');\r\nconst contactBtn = document.getElementById('contact-btn');\r\nconst aboutBtn = document.getElementById('about-btn');\r\n\r\n\r\nconst buttons = [homeBtn, menuBtn, contactBtn, aboutBtn];\r\nconst setActive = (btn) => buttons.forEach(b => b.classList.toggle('active', b === btn));\r\n\r\n(0,_initial_page_load_js__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\r\nsetActive(homeBtn);\r\n\r\nhomeBtn.addEventListener('click', () => {\r\n    (0,_initial_page_load_js__WEBPACK_IMPORTED_MODULE_1__.loadHome)(); setActive(homeBtn);\r\n});\r\n\r\nmenuBtn.addEventListener('click', () => {\r\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.loadMenu)(); setActive(menuBtn);\r\n});\r\n\r\ncontactBtn.addEventListener('click', () => {\r\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.loadContact)(); setActive(contactBtn);\r\n});\r\n\r\naboutBtn.addEventListener('click', () => {\r\n    (0,_about_js__WEBPACK_IMPORTED_MODULE_4__.loadAbout)(); setActive(aboutBtn);\r\n});\n\n//# sourceURL=webpack://odin_restaurant_page/./src/index.js?\n}");

/***/ },

/***/ "./src/initial-page-load.js"
/*!**********************************!*\
  !*** ./src/initial-page-load.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\r\n    const content = document.getElementById('content');\r\n    \r\n    \r\n    content.innerHTML = '';\r\n\r\n    \r\n    const headline = document.createElement('h1');\r\n    headline.textContent = \"Yauncai's Bistro\";\r\n    content.appendChild(headline);\r\n\r\n\r\n    const welcomePara = document.createElement('p');\r\n    welcomePara.textContent = \"Welcome to Yauncai's Bistro, where we serve the best imaginary food in the digital world!\";\r\n    content.appendChild(welcomePara);\r\n\r\n    const storyPara = document.createElement('p');\r\n    storyPara.innerHTML = \"Our restaurant was founded on the belief that code and cuisine go hand-in-hand. <br>Whether you are looking for a quick byte or a full-course algorithm, we have something for every developer's appetite.\";\r\n    content.appendChild(storyPara);\r\n\r\n    \r\n    const hoursHeader = document.createElement('h3');\r\n    hoursHeader.textContent = \"Hours\";\r\n    content.appendChild(hoursHeader);\r\n\r\n    const hoursList = document.createElement('ul');\r\n    const hours = [\r\n        \"Sunday: 8am - 8pm\", \"Monday: 6am - 6pm\", \"Tuesday: 6am - 6pm\",\r\n        \"Wednesday: 6am - 6pm\", \"Thursday: 6am - 10pm\", \"Friday: 6am - 10pm\", \"Saturday: 8am - 10pm\"\r\n    ];\r\n\r\n    hours.forEach(dayText => {\r\n        const li = document.createElement('li');\r\n        li.textContent = dayText;\r\n        hoursList.appendChild(li);\r\n    });\r\n    content.appendChild(hoursList);\r\n}\r\n\n\n//# sourceURL=webpack://odin_restaurant_page/./src/initial-page-load.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = ''; \r\n\r\n    const headline = document.createElement('h1');\r\n    headline.textContent = \"Our Menu\";\r\n    content.appendChild(headline);\r\n\r\n    const menuList = document.createElement('ul');\r\n    menuList.classList.add('menu-grid'); \r\n    const items = [\r\n        { name: \"Binary Burger\", price: \"$10\" },\r\n        { name: \"Syntax Salad\", price: \"$8\" },\r\n        { name: \"Full-Stack Fajitas\", price: \"$15\" },\r\n        { name: \"Algorithmic Apple Pie\", price: \"$6\" },\r\n        { name: \"Recursive Ramen\", price: \"$12\" },\r\n        { name: \"Debugging Coffee\", price: \"$5\" },\r\n        { name: \"404 Fries\", price: \"$4\" },\r\n        { name: \"SQL on the Beach\", price: \"$14\" },\r\n        {name: \"Bloody M-Array\", price: \"$13\"},\r\n        {name: \"The Captcha Mocktail\", price: \"$9\"},\r\n        {name: \"The Infinite Loop Latte\", price: \"$7\"},\r\n        {name: \"The Stack Overflow Sundae\", price: \"$11\"}\r\n    ];\r\n\r\n    items.forEach(item => {\r\n        const li = document.createElement('li');\r\n        li.textContent = `${item.name} — ${item.price}`;\r\n        menuList.appendChild(li);\r\n    });\r\n\r\n    content.appendChild(menuList);\r\n}\r\n\n\n//# sourceURL=webpack://odin_restaurant_page/./src/menu.js?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;