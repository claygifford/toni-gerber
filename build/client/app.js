/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function requireAll(r) {
		r.keys().forEach(r);
	}
	
	requireAll(__webpack_require__(1));
	
	var taskoApp = angular.module('lbxApp', ['ui.router']);
	
	//add all js files from the src folder
	requireAll(__webpack_require__(22));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./app.css": 2,
		"./views/home/home.css": 18,
		"./views/menu/menu.css": 20
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./app.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./app.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\r\n  background-image: url(\"/img/background.png\");  \r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position: top center;\r\n}\r\n\r\n@font-face {\r\n  font-family: Adobe-Garamond-Regular;\r\n  src: url(" + __webpack_require__(5) + ") format(\"opentype\");\r\n  src: url(" + __webpack_require__(6) + ");\r\n  src: url(" + __webpack_require__(7) + ") format('woff'),\r\n       url(" + __webpack_require__(8) + ") format('truetype');\r\n       /*src: url('../fonts/Montserrat-Light.eot?iefix') format('eot'),\r\n       url('../fonts/Montserrat-Light.svg#webfontpQgNQDw9') format('svg');*/\r\n}\r\n\r\n\r\n@font-face {\r\n  font-family: Adobe-Garamond-Semibold-Italic;\r\n  src: url(" + __webpack_require__(9) + ") format(\"opentype\");\r\n  src: url(" + __webpack_require__(10) + ");\r\n  src: url(" + __webpack_require__(11) + ") format('woff'),\r\n       url(" + __webpack_require__(12) + ") format('truetype');\r\n       /*src: url('../fonts/Montserrat-Light.eot?iefix') format('eot'),\r\n       url('../fonts/Montserrat-Light.svg#webfontpQgNQDw9') format('svg');*/\r\n}\r\n\r\n@font-face {\r\n  font-family: CFJackStory-Regular;\r\n  src: url(" + __webpack_require__(13) + ") format(\"opentype\");\r\n  src: url(" + __webpack_require__(14) + ");\r\n  src: url(" + __webpack_require__(15) + ") format('woff'),\r\n       url(" + __webpack_require__(16) + ") format('truetype');\r\n       /*src: url('../fonts/Montserrat-Light.eot?iefix') format('eot'),\r\n       url('../fonts/Montserrat-Light.svg#webfontpQgNQDw9') format('svg');*/\r\n}", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b1b3b3f59c41352d6b8501e80eea15a6.otf";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "68519131c51c595cd639e4ab3d1204d2.eot";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1e17cf395d910133d29c2a7620116965.woff";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5ce0fcbe767e5ff1fba73a104d2d0856.ttf";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6c58d9529d6d4e72724b2efa524bc10b.otf";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "89aaa507a88072ba1d7b2064aa239377.eot";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "862055c475d8afb5eabd1756b3a05585.woff";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6b2067f7c2f2052397f7176cfcb22790.ttf";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e4933cdf07164c00516496a96be5b147.otf";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5cc62f145087d00aab1cbc5cceb9e73c.eot";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "61aa5f32e1e60ef22c421e8cd03aff2d.woff";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "affeba8918d9f76f7f0b137b44bec861.ttf";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./home.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./home.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\r\n.home-area {\r\n\tdisplay: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */\r\n  \tdisplay: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */\r\n  \tdisplay: -ms-flexbox;      /* TWEENER - IE 10 */\r\n  \tdisplay: -webkit-flex;     /* NEW - Chrome */\r\n  \tdisplay: flex;\r\n\r\n\t -webkit-justify-content:center;\r\n  \tjustify-content: center;\r\n}\r\n\r\n.home-top-area {\r\n\tmax-width: 1180px;\r\n\twidth: 100%;\r\n\r\n\tdisplay: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */\r\n  \tdisplay: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */\r\n  \tdisplay: -ms-flexbox;      /* TWEENER - IE 10 */\r\n  \tdisplay: -webkit-flex;     /* NEW - Chrome */\r\n  \tdisplay: flex;\r\n\r\n/*  \t-webkit-align-items:center;\r\n  \talign-items: center;\r\n\r\n\t -webkit-justify-content:center;\r\n  \tjustify-content: center;*/\r\n}\r\n\r\n.home-left-side {\r\n\twidth: calc(50% - 10px);\r\n\tpadding-top: 10px;\t\r\n\tpadding-left: 10px;\r\n}\r\n\r\n.home-right-side {\r\n\twidth: 50%;\r\n\tpadding-top: 64px;\r\n\r\n\t-webkit-flex-grow: 1;\r\n\tflex-grow: 1;\r\n}\r\n\r\n.toni-gerber-icon {\r\n\theight: 546px;\r\n\twidth: 550px;\r\n\tbackground-image: url(\"/img/logo.png\");\r\n\tbackground-repeat: no-repeat;\r\n    background-size: contain;\r\n}\r\n\r\n.pencil-img-container {\r\n\tmargin-top: 40px;\r\n\theight: 84px;\r\n\twidth: 305px;\r\n\t\r\n\tbackground-image: url(\"/img/pencil.jpg\");\r\n\tbackground-repeat: no-repeat;\r\n    background-size: contain;\r\n}\r\n\r\n.pencil-text {\r\n\tpadding-left: 62px;\r\n\tpadding-top: 2px;\r\n}\r\n\r\n.text-topic {\r\n\tfont-size: 18px;\t\r\n\tfont-family: 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;\r\n\tfont-weight: bold;\r\n    text-transform: uppercase;\r\n    color: #221e1f;\r\n}\r\n\r\n.text-topic-body {\r\n\tfont-size: 18.5px;\t\r\n\tfont-family: 'Adobe-Garamond-Regular', Garamond, Georgia, serif;\t\r\n    color: #221e1f;\r\n}\r\n\r\n.text-sub-header {\r\n\tfont-size: 29px;\t\r\n\tfont-family: 'Adobe-Garamond-Semibold-Italic', Garamond, Georgia, serif;\r\n\tfont-weight: bold;\r\n\tfont-style: oblique;\r\n    color: #221e1f;\r\n}\r\n\r\n.text-sub-topic {\r\n\tfont-size: 14.5px;\t\r\n\tfont-family: 'Century Gothic', 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;\r\n    color: #221e1f;\r\n}\r\n.text-sub-topic-next {\r\n\tpadding-top: 4px;\r\n\tfont-size: 14.5px;\r\n\tfont-family: 'Century Gothic', 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;\r\n    color: #221e1f;\t\r\n}\r\n\r\n.link-topic {\r\n\tfont-size: 18.5px;\r\n\tfont-family: 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;\r\n\tfont-weight: bold;\r\n\tfont-style: italic;\r\n    text-transform: uppercase;    \r\n    text-decoration: underline;\r\n    color: #221e1f;\r\n    cursor: pointer;\r\n}\r\n\r\n.on-text-topic {\r\n\tfont-size: 18px;\t\r\n\tfont-family: 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;\r\n\tfont-weight: bold;\r\n    text-transform: uppercase;\r\n    color: #221e1f;\r\n    line-height: 20px;\r\n}\r\n\r\n.link-topic:hover {\r\n    text-decoration: underline;\r\n    color: black;\r\n}\r\n\r\n.home-logan-container {\r\n\tdisplay: -webkit-box;\r\n  \tdisplay: -moz-box;\r\n  \tdisplay: -ms-flexbox;\r\n  \tdisplay: -webkit-flex;\r\n  \tdisplay: flex;\r\n  \tpadding-left: 40px;\r\n}\r\n\r\n.logan-img-container {\r\n\tpadding: 10px 10px 10px 40px;\r\n\twidth: 200px;\r\n}\r\n\r\n.logan-text-container {\r\n\tpadding: 10px;\r\n\t-webkit-box-flex: 1;\r\n\t-webkit-flex: 1;\r\n\t-ms-flex: 1;\r\n\tflex: 1;\r\n}\r\n\r\n.logan-img-background {\r\n\tbackground-image: url(/img/logan.png);\r\n\tbackground-size:cover;\r\n\tbackground-position: center center;\r\n\theight: 248px;\r\n\twidth: 160px;\r\n}\r\n\r\n.home-logan-header {\r\n\tpadding: 10px 10px 10px 82px;\r\n\r\n}\r\n\r\n.toni-img-outside-border {\r\n\tdisplay: -webkit-box;\r\n  \tdisplay: -moz-box;\r\n  \tdisplay: -ms-flexbox;\r\n  \tdisplay: -webkit-flex;\r\n  \tdisplay: flex;\r\n\r\n  \t-webkit-align-items:center;\r\n  \talign-items: center;\r\n\r\n\tbackground-color: #ef3b6c;\r\n\theight: 220px;\r\n\twidth: 220px;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.toni-img-container {\r\n\tbackground-image: url(/img/toni.png);\r\n\tbackground-size:cover;\r\n\tbackground-position: top center;\r\n\theight: 200px;\r\n\twidth: 200px;\r\n\tborder-radius: 50%;\r\n\tborder: 2px solid #fff200;\r\n}\r\n\r\n.toni-container {\r\n\tdisplay: -webkit-box;\r\n  \tdisplay: -moz-box;\r\n  \tdisplay: -ms-flexbox;\r\n  \tdisplay: -webkit-flex;\r\n  \tdisplay: flex;\r\n\r\n\t-webkit-align-items:center;\r\n  \talign-items: center;\r\n\r\n  \tposition: relative;\r\n}\r\n\r\n.toni-background-border {\r\n\ttop: 70px;\r\n\tleft: 40px;\r\n\tposition: absolute;\r\n\twidth: calc(100% - 40px);\r\n\theight: 80px;\r\n\tz-index: -1;\r\n\tbackground-color: #81be41;\r\n}\r\n\r\n.toni-info {\r\n\tpadding-left: 10px;\r\n}\r\n\r\n.toni-info-header {\r\n\tfont-size: 14pt;\r\n\tfont-family: 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;\r\n\tfont-weight: bold;\r\n\tcolor: white;\r\n}\r\n\r\n.toni-info-text {\r\n\tfont-size: 12pt;\r\n\tfont-family: 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;\r\n\tcolor: white;\r\n}\r\n\r\n.latest-container {\r\n\tposition: absolute;\r\n\t/*width: 100%;*/\r\n\tpadding-bottom: 10px;\r\n\tpadding-top: 20px;\r\n\r\n\tdisplay: -webkit-box;\r\n  \tdisplay: -moz-box;\r\n  \tdisplay: -ms-flexbox;\r\n  \tdisplay: -webkit-flex;\r\n  \tdisplay: flex;\r\n\r\n\tfont-size: 15px;\r\n\tfont-style: italic;\r\n\tfont-weight: bold;\r\n\tfont-family: 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;\r\n\tcolor: #221e1f;\r\n}\r\n\r\n.latest-img-background {\r\n\theight: 85px;\r\n\twidth: 79px;\r\n\tbackground-image: url(\"/img/small.logo.png\");\r\n\tbackground-repeat: no-repeat;\r\n    background-size: contain;\r\n}\r\n\r\n.latest-text-container {\r\n\tpadding-left: 10px;\r\n\tpadding-top: 10px;\r\n}\r\n\r\na.latest-link:link, a.latest-link:visited { \r\n\tcolor: #221e1f;   \r\n    text-decoration: none;\r\n}\r\n\r\na.latest-link:link:active, a.latest-link:visited:active { \r\n\tcolor: #221e1f;\r\n}\r\n\r\n.logan-leaves-a-lot-container {\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\tbottom: 0px;\r\n\r\n}\r\n\r\n.logan-leaves-a-lot {\r\n\tvisibility: hidden;\r\n\r\n\tposition: absolute;\r\n\theight: 600px;\r\n\twidth: 600px;\r\n\tborder-radius: 50%;\r\n\tbackground-color: #00aeef;\r\n\tbottom: -25px;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\tleft: 0;\r\n\tright: 0;\r\n\r\n\tfont-size: 12pt;\r\n\tfont-family: 'CFJackStory-Regular', sans-serif;\r\n\tcolor: white;\r\n\r\n\tdisplay: -webkit-box;\r\n  \tdisplay: -moz-box;\r\n  \tdisplay: -ms-flexbox;\r\n  \tdisplay: -webkit-flex;\r\n  \tdisplay: flex;\r\n\r\n  \t-webkit-align-items:center;\r\n  \talign-items: center;\r\n\r\n  \t-webkit-flex-direction:center;\r\n  \tflex-direction: column;\r\n\r\n  \ttext-align: center;\r\n}\r\n\r\n.text-group {\r\n\tpadding-top: 20px;\r\n}\r\n\r\n.expandUp {\r\n    animation-name: expandUp;\r\n    -webkit-animation-name: expandUp;\r\n    animation-duration: 0.7s;\r\n    -webkit-animation-duration: 0.7s;\r\n    animation-timing-function: ease;\r\n    -webkit-animation-timing-function: ease;\r\n    visibility: visible !important;\r\n}\r\n\r\n@keyframes expandUp {\r\n\t0% {\r\n\t\ttransform: translateY(100%) scale(0.6) scaleY(0.5);\r\n\t}\r\n\t60%{\r\n\t\ttransform: translateY(-5%) scaleY(1.05);\r\n\t}\r\n\t75%{\r\n\t\ttransform: translateY(2%);\r\n\t}\t\r\n\t100% {\r\n\t\ttransform: translateY(0%) scale(1) scaleY(1);\r\n\t}\t\r\n}\r\n\r\n@-webkit-keyframes expandUp {\r\n\t0% {\r\n\t\t-webkit-transform: translateY(100%) scale(0.6) scaleY(0.5);\r\n\t}\r\n\t60%{\r\n\t\t-webkit-transform: translateY(-5%) scaleY(1.05);\r\n\t}\r\n\t75%{\r\n\t\t-webkit-transform: translateY(2%);\r\n\t}\t\r\n\t100% {\r\n\t\t-webkit-transform: translateY(0%) scale(1) scaleY(1);\r\n\t}\t\r\n}\r\n\r\n@media (max-width: 1150px) {\r\n  .toni-gerber-icon { \t\r\n  \theight: 446px;\r\n\twidth: 450px;\r\n  }\r\n}\r\n\r\n@media (max-width: 950px) {\r\n  .home-top-area {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .pencil-img-container {\r\n  \tmargin-right: auto;\r\n  \tmargin-left: auto;\r\n  }\r\n\r\n  .home-logan-container {\r\n\tdisplay: inline-block;\r\n  }\r\n\r\n  .home-left-side {\r\n  \tpadding-right: 10px;\r\n  \twidth: auto;\r\n  }\r\n  .home-right-side {\r\n  \tpadding-right: 10px;\r\n  \tpadding-left: 10px;\r\n  \twidth: 100%;\r\n  }\r\n}\r\n\r\n", ""]);
	
	// exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./menu.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./menu.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".menu-offset {\r\n\theight: 120px;\r\n}\r\n\r\n.menu-container {\r\n\tbackground-color: #231f20;\r\n\r\n\tdisplay: -webkit-box;\r\n  \tdisplay: -moz-box;\r\n  \tdisplay: -ms-flexbox;\r\n  \tdisplay: -webkit-flex;\r\n  \tdisplay: flex;\r\n \t\r\n \t-webkit-justify-content:center;\r\n  \tjustify-content: center;\r\n}\r\n\r\n.menu-item { \r\n\tdisplay: -webkit-box;\r\n  \tdisplay: -moz-box;\r\n  \tdisplay: -ms-flexbox;\r\n  \tdisplay: -webkit-flex;\r\n  \tdisplay: flex;\r\n\r\n  \t -webkit-align-items:center;\r\n  \talign-items: center;\r\n\r\n\tfont-size: 24px;\r\n\tfont-family: 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;\r\n\tfont-weight: bold;\r\n    text-transform: uppercase;\t\r\n\tcolor: white;\r\n\tcursor: pointer;\r\n\tpadding-top: 11px;\r\n\tpadding-bottom: 11px;\r\n\theight: 100%;\r\n}\r\n\r\n.writing-samples-menu {\r\n\tpadding-left: 41px;\r\n\tpadding-right: 41px;\r\n}\r\n\r\n.writing-samples-dropdown-menu {\r\n\twidth: 287px;\r\n\tbackground-color: #864c9e;\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\r\n\tfont-size: 17px;\r\n\tfont-family: 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;\r\n\tfont-weight: bold;\r\n\tcolor: white;\r\n}\r\n\r\n.writing-samples-dropdown-menu > li {\r\n\tpadding: 10px 10px 10px 40px;\r\n}\r\n\r\n.open > .writing-samples-menu {\r\n\tbackground-color: #695974;\r\n}\r\n\r\n.dropdown-backdrop {\r\n    display:none;\r\n}\r\n\r\n.awards-menu {\r\n\tpadding-left: 51px;\r\n\tpadding-right: 51px;\r\n}\r\n\r\n.awards-dropdown-menu {\r\n\twidth: 203px;\r\n\tbackground-color: #81be41;\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\r\n\tfont-size: 17px;\r\n\tfont-family: 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;\r\n\tfont-weight: bold;\r\n\tcolor: white;\r\n}\r\n\r\n.open > .awards-menu {\r\n\tbackground-color: #69795a;\r\n}\r\n\r\n.awards-dropdown-menu > li {\r\n\tpadding: 10px 10px 10px 10px;\r\n}\r\n\r\n.awards-text {\r\n\tfont-size: 14px;\r\n\tfont-weight: normal;\r\n\tfont-family: 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;\r\n\tcolor: white;\r\n}\r\n\r\n.certifications-menu {\r\n\tpadding-left: 44px;\r\n\tpadding-right: 44px;\r\n}\r\n\r\n.certifications-dropdown-menu {\r\n\twidth: 271px;\r\n\tbackground-color: #fbad18;\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\r\n\tfont-size: 17px;\r\n\tfont-family: 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;\r\n\tfont-weight: bold;\r\n\tcolor: white;\r\n}\r\n\r\n.open > .certifications-menu {\r\n\tbackground-color: #8b7553;\r\n}\r\n\r\n.certifications-dropdown-menu > li {\r\n\tpadding: 10px 10px 10px 10px;\r\n}\r\n\r\n\r\n.publications-menu {\r\n\tpadding-left: 53px;\r\n\tpadding-right: 53px;\r\n}\r\n\r\n.publications-dropdown-menu {\r\n\twidth: 271px;\r\n\tbackground-color: #1b9a94;\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\r\n\tfont-size: 17px;\r\n\tfont-family: 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;\r\n\tfont-weight: bold;\r\n\tcolor: white;\r\n}\r\n\r\n.open > .publications-menu {\r\n\tbackground-color: #566f6f;\r\n}\r\n\r\n.publications-dropdown-menu > li {\r\n\tpadding: 10px 22px;\r\n}\r\n\r\n.publications-text {\r\n\tfont-size: 14px;\r\n\tfont-weight: normal;\r\n\tfont-family: 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;\r\n\tcolor: white;\r\n}\r\n\r\n.writing-samples-link {\r\n\r\n}\r\n\r\na.writing-samples-link:link, a.writing-samples-link:visited { \r\n    color: white;\r\n    text-decoration: underline;\r\n}\r\n\r\na.writing-samples-link:link:active, a.writing-samples-link:visited:active { \r\n    color: white;\r\n}\r\n\r\n@media (max-width: 1050px) {\r\n  .menu-item { \t\r\n  \tfont-size: 18px;\r\n  }\r\n}\r\n\r\n@media (max-width: 850px) {\r\n  .menu-item { \t\r\n  \tfont-size: 15px;\r\n  }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .menu-container { \t\r\n  \tdisplay: block;\r\n  }\r\n}", ""]);
	
	// exports


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./app.js": 23,
		"./click-outside.js": 24,
		"./state.js": 25,
		"./views/home/home.js": 26,
		"./views/menu/menu.js": 27
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 22;


/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	angular.module('lbxApp').run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
	
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
	}]);

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	angular.module('lbxApp').directive('clickOutside', ['$window', '$parse', function ($window, $parse) {
	  return {
	    link: function link(scope, el, attr) {
	      if (!attr.clickOutside) {
	        return;
	      }
	
	      var ignore;
	      if (attr.ignoreIf) {
	        ignore = $parse(attr.ignoreIf);
	      }
	
	      var nakedEl = el[0];
	      var fn = $parse(attr.clickOutside);
	
	      var handler = function handler(e) {
	        if (nakedEl === e.target || nakedEl.contains(e.target) || ignore && ignore(scope)) {
	          return;
	        }
	
	        scope.$apply(fn);
	      };
	
	      $window.addEventListener('click', handler, true);
	
	      scope.$on('$destroy', function (e) {
	        $document.off('click', handler);
	      });
	    }
	  };
	}]);

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	
	angular.module('lbxApp').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
	
		$urlRouterProvider.otherwise('/');
	
		$locationProvider.html5Mode(true);
	
		$stateProvider.state('app', {
			url: '',
			abstract: true,
			views: {
				'': {
					templateUrl: '/src/views/main.html'
				},
				'menu@app': {
					templateUrl: '/src/views/menu/menu.html',
					controller: 'menuController'
				}
			}
		}).state('app.home', {
			url: '/',
			views: {
				'main@app': {
					templateUrl: '/src/views/home/home.html',
					controller: 'homeController'
				}
			}
		});
	}]);

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	angular.module('lbxApp').controller('homeController', ['$window', '$scope', function ($window, $scope) {
	
		$scope.myActions = function () {
			$scope.showLoganLeavesAlot = false;
		};
	
		$scope.onClick = function () {
			$scope.showLoganLeavesAlot = true;
		};
	}]);

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';
	
	angular.module('lbxApp').controller('menuController', ['$window', '$scope', function ($window, $scope) {}]);

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map