/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = prestashop;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var DropDown = (function () {
  function DropDown(el) {
    _classCallCheck(this, DropDown);

    this.el = el;
  }

  _createClass(DropDown, [{
    key: 'init',
    value: function init() {
      this.el.on('show.bs.dropdown', function (e, el) {
        if (el) {
          (0, _jquery2['default'])('#' + el).find('.dropdown-menu').first().stop(true, true).slideDown();
        } else {
          (0, _jquery2['default'])(e.target).find('.dropdown-menu').first().stop(true, true).slideDown();
        }
      });

      this.el.on('hide.bs.dropdown', function (e, el) {
        if (el) {
          (0, _jquery2['default'])('#' + el).find('.dropdown-menu').first().stop(true, true).slideUp();
        } else {
          (0, _jquery2['default'])(e.target).find('.dropdown-menu').first().stop(true, true).slideUp();
        }
      });

      this.el.find('select.link').each(function (idx, el) {
        (0, _jquery2['default'])(el).on('change', function (event) {
          window.location = (0, _jquery2['default'])(this).val();
        });
      });
    }
  }]);

  return DropDown;
})();

exports['default'] = DropDown;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var ProductMinitature = (function () {
  function ProductMinitature() {
    _classCallCheck(this, ProductMinitature);
  }

  _createClass(ProductMinitature, [{
    key: 'init',
    value: function init() {
      (0, _jquery2['default'])('.js-product-miniature').each(function (index, element) {
        //Limit number of shown colors
        if ((0, _jquery2['default'])(element).find('.color').length > 5) {
          (function () {
            var count = 0;

            (0, _jquery2['default'])(element).find('.color').each(function (index, element) {
              if (index > 4) {
                (0, _jquery2['default'])(element).hide();
                count++;
              }
            });

            (0, _jquery2['default'])(element).find('.js-count').append('+' + count);
          })();
        }
      });
    }
  }]);

  return ProductMinitature;
})();

exports['default'] = ProductMinitature;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * SSR Window 1.0.1
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2018, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: July 18, 2018
 */


Object.defineProperty(exports, '__esModule', {
  value: true
});
var doc = typeof document === 'undefined' ? {
  body: {},
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  activeElement: {
    blur: function blur() {},
    nodeName: ''
  },
  querySelector: function querySelector() {
    return null;
  },
  querySelectorAll: function querySelectorAll() {
    return [];
  },
  getElementById: function getElementById() {
    return null;
  },
  createEvent: function createEvent() {
    return {
      initEvent: function initEvent() {}
    };
  },
  createElement: function createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function setAttribute() {},
      getElementsByTagName: function getElementsByTagName() {
        return [];
      }
    };
  },
  location: { hash: '' }
} : document; // eslint-disable-line

var win = typeof window === 'undefined' ? {
  document: doc,
  navigator: {
    userAgent: ''
  },
  location: {},
  history: {},
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  getComputedStyle: function getComputedStyle() {
    return {
      getPropertyValue: function getPropertyValue() {
        return '';
      }
    };
  },
  Image: function Image() {},
  Date: function Date() {},
  screen: {},
  setTimeout: function setTimeout() {},
  clearTimeout: function clearTimeout() {}
} : window; // eslint-disable-line

exports.window = win;
exports.document = doc;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! VelocityJS.org (1.5.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */ /*************************
 Velocity jQuery Shim
 *************************/ /*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */ /* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */ /* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */(function(window){"use strict"; /***************
	 Setup
	 ***************/ /* If jQuery is already loaded, there's no point in loading this shim. */if(window.jQuery){return;} /* jQuery base. */var $=function $(selector,context){return new $.fn.init(selector,context);}; /********************
	 Private Methods
	 ********************/ /* jQuery */$.isWindow = function(obj){ /* jshint eqeqeq: false */return obj && obj === obj.window;}; /* jQuery */$.type = function(obj){if(!obj){return obj + "";}return typeof obj === "object" || typeof obj === "function"?class2type[toString.call(obj)] || "object":typeof obj;}; /* jQuery */$.isArray = Array.isArray || function(obj){return $.type(obj) === "array";}; /* jQuery */function isArraylike(obj){var length=obj.length,type=$.type(obj);if(type === "function" || $.isWindow(obj)){return false;}if(obj.nodeType === 1 && length){return true;}return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;} /***************
	 $ Methods
	 ***************/ /* jQuery: Support removed for IE<9. */$.isPlainObject = function(obj){var key;if(!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)){return false;}try{if(obj.constructor && !hasOwn.call(obj,"constructor") && !hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false;}}catch(e) {return false;}for(key in obj) {}return key === undefined || hasOwn.call(obj,key);}; /* jQuery */$.each = function(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);if(args){if(isArray){for(;i < length;i++) {value = callback.apply(obj[i],args);if(value === false){break;}}}else {for(i in obj) {if(!obj.hasOwnProperty(i)){continue;}value = callback.apply(obj[i],args);if(value === false){break;}}}}else {if(isArray){for(;i < length;i++) {value = callback.call(obj[i],i,obj[i]);if(value === false){break;}}}else {for(i in obj) {if(!obj.hasOwnProperty(i)){continue;}value = callback.call(obj[i],i,obj[i]);if(value === false){break;}}}}return obj;}; /* Custom */$.data = function(node,key,value){ /* $.getData() */if(value === undefined){var getId=node[$.expando],store=getId && cache[getId];if(key === undefined){return store;}else if(store){if(key in store){return store[key];}} /* $.setData() */}else if(key !== undefined){var setId=node[$.expando] || (node[$.expando] = ++$.uuid);cache[setId] = cache[setId] || {};cache[setId][key] = value;return value;}}; /* Custom */$.removeData = function(node,keys){var id=node[$.expando],store=id && cache[id];if(store){ // Cleanup the entire store if no keys are provided.
if(!keys){delete cache[id];}else {$.each(keys,function(_,key){delete store[key];});}}}; /* jQuery */$.extend = function(){var src,copyIsArray,copy,name,options,clone,target=arguments[0] || {},i=1,length=arguments.length,deep=false;if(typeof target === "boolean"){deep = target;target = arguments[i] || {};i++;}if(typeof target !== "object" && $.type(target) !== "function"){target = {};}if(i === length){target = this;i--;}for(;i < length;i++) {if(options = arguments[i]){for(name in options) {if(!options.hasOwnProperty(name)){continue;}src = target[name];copy = options[name];if(target === copy){continue;}if(deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))){if(copyIsArray){copyIsArray = false;clone = src && $.isArray(src)?src:[];}else {clone = src && $.isPlainObject(src)?src:{};}target[name] = $.extend(deep,clone,copy);}else if(copy !== undefined){target[name] = copy;}}}}return target;}; /* jQuery 1.4.3 */$.queue = function(elem,type,data){function $makeArray(arr,results){var ret=results || [];if(arr){if(isArraylike(Object(arr))){ /* $.merge */(function(first,second){var len=+second.length,j=0,i=first.length;while(j < len) {first[i++] = second[j++];}if(len !== len){while(second[j] !== undefined) {first[i++] = second[j++];}}first.length = i;return first;})(ret,typeof arr === "string"?[arr]:arr);}else {[].push.call(ret,arr);}}return ret;}if(!elem){return;}type = (type || "fx") + "queue";var q=$.data(elem,type);if(!data){return q || [];}if(!q || $.isArray(data)){q = $.data(elem,type,$makeArray(data));}else {q.push(data);}return q;}; /* jQuery 1.4.3 */$.dequeue = function(elems,type){ /* Custom: Embed element iteration. */$.each(elems.nodeType?[elems]:elems,function(i,elem){type = type || "fx";var queue=$.queue(elem,type),fn=queue.shift();if(fn === "inprogress"){fn = queue.shift();}if(fn){if(type === "fx"){queue.unshift("inprogress");}fn.call(elem,function(){$.dequeue(elem,type);});}});}; /******************
	 $.fn Methods
	 ******************/ /* jQuery */$.fn = $.prototype = {init:function init(selector){ /* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */if(selector.nodeType){this[0] = selector;return this;}else {throw new Error("Not a DOM node.");}},offset:function offset(){ /* jQuery altered code: Dropped disconnected DOM node checking. */var box=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return {top:box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),left:box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)};},position:function position(){ /* jQuery */function offsetParentFn(elem){var offsetParent=elem.offsetParent;while(offsetParent && offsetParent.nodeName.toLowerCase() !== "html" && offsetParent.style && offsetParent.style.position.toLowerCase() === "static") {offsetParent = offsetParent.offsetParent;}return offsetParent || document;} /* Zepto */var elem=this[0],offsetParent=offsetParentFn(elem),offset=this.offset(),parentOffset=/^(?:body|html)$/i.test(offsetParent.nodeName)?{top:0,left:0}:$(offsetParent).offset();offset.top -= parseFloat(elem.style.marginTop) || 0;offset.left -= parseFloat(elem.style.marginLeft) || 0;if(offsetParent.style){parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0;}return {top:offset.top - parentOffset.top,left:offset.left - parentOffset.left};}}; /**********************
	 Private Variables
	 **********************/ /* For $.data() */var cache={};$.expando = "velocity" + new Date().getTime();$.uuid = 0; /* For $.queue() */var class2type={},hasOwn=class2type.hasOwnProperty,toString=class2type.toString;var types="Boolean Number String Function Array Date RegExp Object Error".split(" ");for(var i=0;i < types.length;i++) {class2type["[object " + types[i] + "]"] = types[i].toLowerCase();} /* Makes $(node) possible, without having to call init. */$.fn.init.prototype = $.fn; /* Globalize Velocity onto the window, and assign its Utilities property. */window.Velocity = {Utilities:$};})(window); /******************
 Velocity.js
 ******************/(function(factory){"use strict"; /* CommonJS module. */if(typeof module === "object" && typeof module.exports === "object"){module.exports = factory(); /* AMD module. */}else if(true){!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); /* Browser globals. */}else {factory();}})(function(){"use strict";return (function(global,window,document,undefined){ /***************
		 Summary
		 ***************/ /*
		 - CSS: CSS stack that works independently from the rest of Velocity.
		 - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
		 - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
		 - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
		 Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
		 - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
		 - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
		 - completeCall(): Handles the cleanup process for each Velocity call.
		 */ /*********************
		 Helper Functions
		 *********************/ /* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */var IE=(function(){if(document.documentMode){return document.documentMode;}else {for(var i=7;i > 4;i--) {var div=document.createElement("div");div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";if(div.getElementsByTagName("span").length){div = null;return i;}}}return undefined;})(); /* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */var rAFShim=(function(){var timeLast=0;return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback){var timeCurrent=new Date().getTime(),timeDelta; /* Dynamically set delay on a per-tick basis to match 60fps. */ /* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */timeDelta = Math.max(0,16 - (timeCurrent - timeLast));timeLast = timeCurrent + timeDelta;return setTimeout(function(){callback(timeCurrent + timeDelta);},timeDelta);};})();var performance=(function(){var perf=window.performance || {};if(typeof perf.now !== "function"){var nowOffset=perf.timing && perf.timing.navigationStart?perf.timing.navigationStart:new Date().getTime();perf.now = function(){return new Date().getTime() - nowOffset;};}return perf;})(); /* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */function compactSparseArray(array){var index=-1,length=array?array.length:0,result=[];while(++index < length) {var value=array[index];if(value){result.push(value);}}return result;} /**
		 * Shim for "fixing" IE's lack of support (IE < 9) for applying slice
		 * on host objects like NamedNodeMap, NodeList, and HTMLCollection
		 * (technically, since host objects have been implementation-dependent,
		 * at least before ES2015, IE hasn't needed to work this way).
		 * Also works on strings, fixes IE < 9 to allow an explicit undefined
		 * for the 2nd argument (as in Firefox), and prevents errors when
		 * called on other DOM objects.
		 */var _slice=(function(){var slice=Array.prototype.slice;try{ // Can't be used with DOM elements in IE < 9
slice.call(document.documentElement);return slice;}catch(e) { // Fails in IE < 9
// This will work for genuine arrays, array-like objects, 
// NamedNodeMap (attributes, entities, notations),
// NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
return function(begin,end){var len=this.length;if(typeof begin !== "number"){begin = 0;} // IE < 9 gets unhappy with an undefined end argument
if(typeof end !== "number"){end = len;} // For native Array objects, we use the native slice function
if(this.slice){return slice.call(this,begin,end);} // For array like object we handle it ourselves.
var i,cloned=[], // Handle negative value for "begin"
start=begin >= 0?begin:Math.max(0,len + begin), // Handle negative value for "end"
upTo=end < 0?len + end:Math.min(end,len), // Actual expected size of the slice
size=upTo - start;if(size > 0){cloned = new Array(size);if(this.charAt){for(i = 0;i < size;i++) {cloned[i] = this.charAt(start + i);}}else {for(i = 0;i < size;i++) {cloned[i] = this[start + i];}}}return cloned;};}})(); /* .indexOf doesn't exist in IE<9 */var _inArray=function _inArray(){if(Array.prototype.includes){return function(arr,val){return arr.includes(val);};}if(Array.prototype.indexOf){return function(arr,val){return arr.indexOf(val) >= 0;};}return function(arr,val){for(var i=0;i < arr.length;i++) {if(arr[i] === val){return true;}}return false;};};function sanitizeElements(elements){ /* Unwrap jQuery/Zepto objects. */if(Type.isWrapped(elements)){elements = _slice.call(elements); /* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */}else if(Type.isNode(elements)){elements = [elements];}return elements;}var Type={isNumber:function isNumber(variable){return typeof variable === "number";},isString:function isString(variable){return typeof variable === "string";},isArray:Array.isArray || function(variable){return Object.prototype.toString.call(variable) === "[object Array]";},isFunction:function isFunction(variable){return Object.prototype.toString.call(variable) === "[object Function]";},isNode:function isNode(variable){return variable && variable.nodeType;}, /* Determine if variable is an array-like wrapped jQuery, Zepto or similar element, or even a NodeList etc. */ /* NOTE: HTMLFormElements also have a length. */isWrapped:function isWrapped(variable){return variable && variable !== window && Type.isNumber(variable.length) && !Type.isString(variable) && !Type.isFunction(variable) && !Type.isNode(variable) && (variable.length === 0 || Type.isNode(variable[0]));},isSVG:function isSVG(variable){return window.SVGElement && variable instanceof window.SVGElement;},isEmptyObject:function isEmptyObject(variable){for(var name in variable) {if(variable.hasOwnProperty(name)){return false;}}return true;}}; /*****************
		 Dependencies
		 *****************/var $,isJQuery=false;if(global.fn && global.fn.jquery){$ = global;isJQuery = true;}else {$ = window.Velocity.Utilities;}if(IE <= 8 && !isJQuery){throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");}else if(IE <= 7){ /* Revert to jQuery's $.animate(), and lose Velocity's extra features. */jQuery.fn.velocity = jQuery.fn.animate; /* Now that $.fn.velocity is aliased, abort this Velocity declaration. */return;} /*****************
		 Constants
		 *****************/var DURATION_DEFAULT=400,EASING_DEFAULT="swing"; /*************
		 State
		 *************/var Velocity={ /* Container for page-wide Velocity state data. */State:{ /* Detect mobile devices to determine if mobileHA should be turned on. */isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent), /* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */isAndroid:/Android/i.test(window.navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(window.navigator.userAgent),isChrome:window.chrome,isFirefox:/Firefox/i.test(window.navigator.userAgent), /* Create a cached element for re-use when checking for CSS property prefixes. */prefixElement:document.createElement("div"), /* Cache every prefix match to avoid repeating lookups. */prefixMatches:{}, /* Cache the anchor used for animating window scrolling. */scrollAnchor:null, /* Cache the browser-specific property names associated with the scroll anchor. */scrollPropertyLeft:null,scrollPropertyTop:null, /* Keep track of whether our RAF tick is running. */isTicking:false, /* Container for every in-progress call to Velocity. */calls:[],delayedElements:{count:0}}, /* Velocity's custom CSS stack. Made global for unit testing. */CSS:{ /* Defined below. */}, /* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */Utilities:$, /* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */Redirects:{ /* Manually registered by the user. */},Easings:{ /* Defined below. */}, /* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */Promise:window.Promise, /* Velocity option defaults, which can be overriden by the user. */defaults:{queue:"",duration:DURATION_DEFAULT,easing:EASING_DEFAULT,begin:undefined,complete:undefined,progress:undefined,display:undefined,visibility:undefined,loop:false,delay:false,mobileHA:true, /* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */_cacheValues:true, /* Advanced: Set to false if the promise should always resolve on empty element lists. */promiseRejectEmpty:true}, /* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */init:function init(element){$.data(element,"velocity",{ /* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */isSVG:Type.isSVG(element), /* Keep track of whether the element is currently being animated by Velocity.
					 This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */isAnimating:false, /* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */computedStyle:null, /* Tween data is cached for each animation on the element so that data can be passed across calls --
					 in particular, end values are used as subsequent start values in consecutive Velocity calls. */tweensContainer:null, /* The full root property values of each CSS hook being animated on this element are cached so that:
					 1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
					 2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */rootPropertyValueCache:{}, /* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */transformCache:{}});}, /* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */hook:null, /* Defined below. */ /* Velocity-wide animation time remapping for testing purposes. */mock:false,version:{major:1,minor:5,patch:2}, /* Set to 1 or 2 (most verbose) to output debug info to console. */debug:false, /* Use rAF high resolution timestamp when available */timestamp:true, /* Pause all animations */pauseAll:function pauseAll(queueName){var currentTime=new Date().getTime();$.each(Velocity.State.calls,function(i,activeCall){if(activeCall){ /* If we have a queueName and this call is not on that queue, skip */if(queueName !== undefined && (activeCall[2].queue !== queueName || activeCall[2].queue === false)){return true;} /* Set call to paused */activeCall[5] = {resume:false};}}); /* Pause timers on any currently delayed calls */$.each(Velocity.State.delayedElements,function(k,element){if(!element){return;}pauseDelayOnElement(element,currentTime);});}, /* Resume all animations */resumeAll:function resumeAll(queueName){var currentTime=new Date().getTime();$.each(Velocity.State.calls,function(i,activeCall){if(activeCall){ /* If we have a queueName and this call is not on that queue, skip */if(queueName !== undefined && (activeCall[2].queue !== queueName || activeCall[2].queue === false)){return true;} /* Set call to resumed if it was paused */if(activeCall[5]){activeCall[5].resume = true;}}}); /* Resume timers on any currently delayed calls */$.each(Velocity.State.delayedElements,function(k,element){if(!element){return;}resumeDelayOnElement(element,currentTime);});}}; /* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */if(window.pageYOffset !== undefined){Velocity.State.scrollAnchor = window;Velocity.State.scrollPropertyLeft = "pageXOffset";Velocity.State.scrollPropertyTop = "pageYOffset";}else {Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;Velocity.State.scrollPropertyLeft = "scrollLeft";Velocity.State.scrollPropertyTop = "scrollTop";} /* Shorthand alias for jQuery's $.data() utility. */function Data(element){ /* Hardcode a reference to the plugin name. */var response=$.data(element,"velocity"); /* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */return response === null?undefined:response;} /**************
		 Delay Timer
		 **************/function pauseDelayOnElement(element,currentTime){ /* Check for any delay timers, and pause the set timeouts (while preserving time data)
			 to be resumed when the "resume" command is issued */var data=Data(element);if(data && data.delayTimer && !data.delayPaused){data.delayRemaining = data.delay - currentTime + data.delayBegin;data.delayPaused = true;clearTimeout(data.delayTimer.setTimeout);}}function resumeDelayOnElement(element,currentTime){ /* Check for any paused timers and resume */var data=Data(element);if(data && data.delayTimer && data.delayPaused){ /* If the element was mid-delay, re initiate the timeout with the remaining delay */data.delayPaused = false;data.delayTimer.setTimeout = setTimeout(data.delayTimer.next,data.delayRemaining);}} /**************
		 Easing
		 **************/ /* Step easing generator. */function generateStep(steps){return function(p){return Math.round(p * steps) * (1 / steps);};} /* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */function generateBezier(mX1,mY1,mX2,mY2){var NEWTON_ITERATIONS=4,NEWTON_MIN_SLOPE=0.001,SUBDIVISION_PRECISION=0.0000001,SUBDIVISION_MAX_ITERATIONS=10,kSplineTableSize=11,kSampleStepSize=1.0 / (kSplineTableSize - 1.0),float32ArraySupported=("Float32Array" in window); /* Must contain four arguments. */if(arguments.length !== 4){return false;} /* Arguments must be numbers. */for(var i=0;i < 4;++i) {if(typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])){return false;}} /* X values must be in the [0, 1] range. */mX1 = Math.min(mX1,1);mX2 = Math.min(mX2,1);mX1 = Math.max(mX1,0);mX2 = Math.max(mX2,0);var mSampleValues=float32ArraySupported?new Float32Array(kSplineTableSize):new Array(kSplineTableSize);function A(aA1,aA2){return 1.0 - 3.0 * aA2 + 3.0 * aA1;}function B(aA1,aA2){return 3.0 * aA2 - 6.0 * aA1;}function C(aA1){return 3.0 * aA1;}function calcBezier(aT,aA1,aA2){return ((A(aA1,aA2) * aT + B(aA1,aA2)) * aT + C(aA1)) * aT;}function getSlope(aT,aA1,aA2){return 3.0 * A(aA1,aA2) * aT * aT + 2.0 * B(aA1,aA2) * aT + C(aA1);}function newtonRaphsonIterate(aX,aGuessT){for(var i=0;i < NEWTON_ITERATIONS;++i) {var currentSlope=getSlope(aGuessT,mX1,mX2);if(currentSlope === 0.0){return aGuessT;}var currentX=calcBezier(aGuessT,mX1,mX2) - aX;aGuessT -= currentX / currentSlope;}return aGuessT;}function calcSampleValues(){for(var i=0;i < kSplineTableSize;++i) {mSampleValues[i] = calcBezier(i * kSampleStepSize,mX1,mX2);}}function binarySubdivide(aX,aA,aB){var currentX,currentT,i=0;do {currentT = aA + (aB - aA) / 2.0;currentX = calcBezier(currentT,mX1,mX2) - aX;if(currentX > 0.0){aB = currentT;}else {aA = currentT;}}while(Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);return currentT;}function getTForX(aX){var intervalStart=0.0,currentSample=1,lastSample=kSplineTableSize - 1;for(;currentSample !== lastSample && mSampleValues[currentSample] <= aX;++currentSample) {intervalStart += kSampleStepSize;}--currentSample;var dist=(aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),guessForT=intervalStart + dist * kSampleStepSize,initialSlope=getSlope(guessForT,mX1,mX2);if(initialSlope >= NEWTON_MIN_SLOPE){return newtonRaphsonIterate(aX,guessForT);}else if(initialSlope === 0.0){return guessForT;}else {return binarySubdivide(aX,intervalStart,intervalStart + kSampleStepSize);}}var _precomputed=false;function precompute(){_precomputed = true;if(mX1 !== mY1 || mX2 !== mY2){calcSampleValues();}}var f=function f(aX){if(!_precomputed){precompute();}if(mX1 === mY1 && mX2 === mY2){return aX;}if(aX === 0){return 0;}if(aX === 1){return 1;}return calcBezier(getTForX(aX),mY1,mY2);};f.getControlPoints = function(){return [{x:mX1,y:mY1},{x:mX2,y:mY2}];};var str="generateBezier(" + [mX1,mY1,mX2,mY2] + ")";f.toString = function(){return str;};return f;} /* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */ /* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
		 then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */var generateSpringRK4=(function(){function springAccelerationForState(state){return -state.tension * state.x - state.friction * state.v;}function springEvaluateStateWithDerivative(initialState,dt,derivative){var state={x:initialState.x + derivative.dx * dt,v:initialState.v + derivative.dv * dt,tension:initialState.tension,friction:initialState.friction};return {dx:state.v,dv:springAccelerationForState(state)};}function springIntegrateState(state,dt){var a={dx:state.v,dv:springAccelerationForState(state)},b=springEvaluateStateWithDerivative(state,dt * 0.5,a),c=springEvaluateStateWithDerivative(state,dt * 0.5,b),d=springEvaluateStateWithDerivative(state,dt,c),dxdt=1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),dvdt=1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);state.x = state.x + dxdt * dt;state.v = state.v + dvdt * dt;return state;}return function springRK4Factory(tension,friction,duration){var initState={x:-1,v:0,tension:null,friction:null},path=[0],time_lapsed=0,tolerance=1 / 10000,DT=16 / 1000,have_duration,dt,last_state;tension = parseFloat(tension) || 500;friction = parseFloat(friction) || 20;duration = duration || null;initState.tension = tension;initState.friction = friction;have_duration = duration !== null; /* Calculate the actual time it takes for this animation to complete with the provided conditions. */if(have_duration){ /* Run the simulation without a duration. */time_lapsed = springRK4Factory(tension,friction); /* Compute the adjusted time delta. */dt = time_lapsed / duration * DT;}else {dt = DT;}while(true) { /* Next/step function .*/last_state = springIntegrateState(last_state || initState,dt); /* Store the position. */path.push(1 + last_state.x);time_lapsed += 16; /* If the change threshold is reached, break. */if(!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)){break;}} /* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
				 computed path and returns a snapshot of the position according to a given percentComplete. */return !have_duration?time_lapsed:function(percentComplete){return path[percentComplete * (path.length - 1) | 0];};};})(); /* jQuery easings. */Velocity.Easings = {linear:function linear(p){return p;},swing:function swing(p){return 0.5 - Math.cos(p * Math.PI) / 2;}, /* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */spring:function spring(p){return 1 - Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6);}}; /* CSS3 and Robert Penner easings. */$.each([["ease",[0.25,0.1,0.25,1.0]],["ease-in",[0.42,0.0,1.00,1.0]],["ease-out",[0.00,0.0,0.58,1.0]],["ease-in-out",[0.42,0.0,0.58,1.0]],["easeInSine",[0.47,0,0.745,0.715]],["easeOutSine",[0.39,0.575,0.565,1]],["easeInOutSine",[0.445,0.05,0.55,0.95]],["easeInQuad",[0.55,0.085,0.68,0.53]],["easeOutQuad",[0.25,0.46,0.45,0.94]],["easeInOutQuad",[0.455,0.03,0.515,0.955]],["easeInCubic",[0.55,0.055,0.675,0.19]],["easeOutCubic",[0.215,0.61,0.355,1]],["easeInOutCubic",[0.645,0.045,0.355,1]],["easeInQuart",[0.895,0.03,0.685,0.22]],["easeOutQuart",[0.165,0.84,0.44,1]],["easeInOutQuart",[0.77,0,0.175,1]],["easeInQuint",[0.755,0.05,0.855,0.06]],["easeOutQuint",[0.23,1,0.32,1]],["easeInOutQuint",[0.86,0,0.07,1]],["easeInExpo",[0.95,0.05,0.795,0.035]],["easeOutExpo",[0.19,1,0.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[0.6,0.04,0.98,0.335]],["easeOutCirc",[0.075,0.82,0.165,1]],["easeInOutCirc",[0.785,0.135,0.15,0.86]]],function(i,easingArray){Velocity.Easings[easingArray[0]] = generateBezier.apply(null,easingArray[1]);}); /* Determine the appropriate easing type given an easing input. */function getEasing(value,duration){var easing=value; /* The easing option can either be a string that references a pre-registered easing,
			 or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */if(Type.isString(value)){ /* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */if(!Velocity.Easings[value]){easing = false;}}else if(Type.isArray(value) && value.length === 1){easing = generateStep.apply(null,value);}else if(Type.isArray(value) && value.length === 2){ /* springRK4 must be passed the animation's duration. */ /* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing
				 function generated with default tension and friction values. */easing = generateSpringRK4.apply(null,value.concat([duration]));}else if(Type.isArray(value) && value.length === 4){ /* Note: If the bezier array contains non-numbers, generateBezier() returns false. */easing = generateBezier.apply(null,value);}else {easing = false;} /* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
			 if the Velocity-wide default has been incorrectly modified. */if(easing === false){if(Velocity.Easings[Velocity.defaults.easing]){easing = Velocity.defaults.easing;}else {easing = EASING_DEFAULT;}}return easing;} /*****************
		 CSS Stack
		 *****************/ /* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
		 It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */ /* Note: A "CSS" shorthand is aliased so that our code is easier to read. */var CSS=Velocity.CSS = { /*************
			 RegEx
			 *************/RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i, /* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, /* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig}, /************
			 Lists
			 ************/Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"],units:["%", // relative
"em","ex","ch","rem", // font relative
"vw","vh","vmin","vmax", // viewport relative
"cm","mm","Q","in","pc","pt","px", // absolute lengths
"deg","grad","rad","turn", // angles
"s","ms" // time
],colorNames:{"aliceblue":"240,248,255","antiquewhite":"250,235,215","aquamarine":"127,255,212","aqua":"0,255,255","azure":"240,255,255","beige":"245,245,220","bisque":"255,228,196","black":"0,0,0","blanchedalmond":"255,235,205","blueviolet":"138,43,226","blue":"0,0,255","brown":"165,42,42","burlywood":"222,184,135","cadetblue":"95,158,160","chartreuse":"127,255,0","chocolate":"210,105,30","coral":"255,127,80","cornflowerblue":"100,149,237","cornsilk":"255,248,220","crimson":"220,20,60","cyan":"0,255,255","darkblue":"0,0,139","darkcyan":"0,139,139","darkgoldenrod":"184,134,11","darkgray":"169,169,169","darkgrey":"169,169,169","darkgreen":"0,100,0","darkkhaki":"189,183,107","darkmagenta":"139,0,139","darkolivegreen":"85,107,47","darkorange":"255,140,0","darkorchid":"153,50,204","darkred":"139,0,0","darksalmon":"233,150,122","darkseagreen":"143,188,143","darkslateblue":"72,61,139","darkslategray":"47,79,79","darkturquoise":"0,206,209","darkviolet":"148,0,211","deeppink":"255,20,147","deepskyblue":"0,191,255","dimgray":"105,105,105","dimgrey":"105,105,105","dodgerblue":"30,144,255","firebrick":"178,34,34","floralwhite":"255,250,240","forestgreen":"34,139,34","fuchsia":"255,0,255","gainsboro":"220,220,220","ghostwhite":"248,248,255","gold":"255,215,0","goldenrod":"218,165,32","gray":"128,128,128","grey":"128,128,128","greenyellow":"173,255,47","green":"0,128,0","honeydew":"240,255,240","hotpink":"255,105,180","indianred":"205,92,92","indigo":"75,0,130","ivory":"255,255,240","khaki":"240,230,140","lavenderblush":"255,240,245","lavender":"230,230,250","lawngreen":"124,252,0","lemonchiffon":"255,250,205","lightblue":"173,216,230","lightcoral":"240,128,128","lightcyan":"224,255,255","lightgoldenrodyellow":"250,250,210","lightgray":"211,211,211","lightgrey":"211,211,211","lightgreen":"144,238,144","lightpink":"255,182,193","lightsalmon":"255,160,122","lightseagreen":"32,178,170","lightskyblue":"135,206,250","lightslategray":"119,136,153","lightsteelblue":"176,196,222","lightyellow":"255,255,224","limegreen":"50,205,50","lime":"0,255,0","linen":"250,240,230","magenta":"255,0,255","maroon":"128,0,0","mediumaquamarine":"102,205,170","mediumblue":"0,0,205","mediumorchid":"186,85,211","mediumpurple":"147,112,219","mediumseagreen":"60,179,113","mediumslateblue":"123,104,238","mediumspringgreen":"0,250,154","mediumturquoise":"72,209,204","mediumvioletred":"199,21,133","midnightblue":"25,25,112","mintcream":"245,255,250","mistyrose":"255,228,225","moccasin":"255,228,181","navajowhite":"255,222,173","navy":"0,0,128","oldlace":"253,245,230","olivedrab":"107,142,35","olive":"128,128,0","orangered":"255,69,0","orange":"255,165,0","orchid":"218,112,214","palegoldenrod":"238,232,170","palegreen":"152,251,152","paleturquoise":"175,238,238","palevioletred":"219,112,147","papayawhip":"255,239,213","peachpuff":"255,218,185","peru":"205,133,63","pink":"255,192,203","plum":"221,160,221","powderblue":"176,224,230","purple":"128,0,128","red":"255,0,0","rosybrown":"188,143,143","royalblue":"65,105,225","saddlebrown":"139,69,19","salmon":"250,128,114","sandybrown":"244,164,96","seagreen":"46,139,87","seashell":"255,245,238","sienna":"160,82,45","silver":"192,192,192","skyblue":"135,206,235","slateblue":"106,90,205","slategray":"112,128,144","snow":"255,250,250","springgreen":"0,255,127","steelblue":"70,130,180","tan":"210,180,140","teal":"0,128,128","thistle":"216,191,216","tomato":"255,99,71","turquoise":"64,224,208","violet":"238,130,238","wheat":"245,222,179","whitesmoke":"245,245,245","white":"255,255,255","yellowgreen":"154,205,50","yellow":"255,255,0"}}, /************
			 Hooks
			 ************/ /* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
			 (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */ /* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
			 tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */Hooks:{ /********************
				 Registration
				 ********************/ /* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */ /* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */templates:{"textShadow":["Color X Y Blur","black 0px 0px 0px"],"boxShadow":["Color X Y Blur Spread","black 0px 0px 0px 0px"],"clip":["Top Right Bottom Left","0px 0px 0px 0px"],"backgroundPosition":["X Y","0% 0%"],"transformOrigin":["X Y Z","50% 50% 0px"],"perspectiveOrigin":["X Y","50% 50%"]}, /* A "registered" hook is one that has been converted from its template form into a live,
				 tweenable property. It contains data to associate it with its root property. */registered:{ /* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],
					 which consists of the subproperty's name, the associated root property's name,
					 and the subproperty's position in the root's value. */}, /* Convert the templates into individual hooks then append them to the registered object above. */register:function register(){ /* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
					 currently set to "transparent" default to their respective template below when color-animated,
					 and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
					 which is almost always set closer to black than white. */for(var i=0;i < CSS.Lists.colors.length;i++) {var rgbComponents=CSS.Lists.colors[i] === "color"?"0 0 0 1":"255 255 255 1";CSS.Hooks.templates[CSS.Lists.colors[i]] = ["Red Green Blue Alpha",rgbComponents];}var rootProperty,hookTemplate,hookNames; /* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
					 Thus, we re-arrange the templates accordingly. */if(IE){for(rootProperty in CSS.Hooks.templates) {if(!CSS.Hooks.templates.hasOwnProperty(rootProperty)){continue;}hookTemplate = CSS.Hooks.templates[rootProperty];hookNames = hookTemplate[0].split(" ");var defaultValues=hookTemplate[1].match(CSS.RegEx.valueSplit);if(hookNames[0] === "Color"){ /* Reposition both the hook's name and its default value to the end of their respective strings. */hookNames.push(hookNames.shift());defaultValues.push(defaultValues.shift()); /* Replace the existing template for the hook's root property. */CSS.Hooks.templates[rootProperty] = [hookNames.join(" "),defaultValues.join(" ")];}}} /* Hook registration. */for(rootProperty in CSS.Hooks.templates) {if(!CSS.Hooks.templates.hasOwnProperty(rootProperty)){continue;}hookTemplate = CSS.Hooks.templates[rootProperty];hookNames = hookTemplate[0].split(" ");for(var j in hookNames) {if(!hookNames.hasOwnProperty(j)){continue;}var fullHookName=rootProperty + hookNames[j],hookPosition=j; /* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
							 and the hook's position in its template's default value string. */CSS.Hooks.registered[fullHookName] = [rootProperty,hookPosition];}}}, /*****************************
				 Injection and Extraction
				 *****************************/ /* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */ /* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */getRoot:function getRoot(property){var hookData=CSS.Hooks.registered[property];if(hookData){return hookData[0];}else { /* If there was no hook match, return the property name untouched. */return property;}},getUnit:function getUnit(str,start){var unit=(str.substr(start || 0,5).match(/^[a-z%]+/) || [])[0] || "";if(unit && _inArray(CSS.Lists.units,unit)){return unit;}return "";},fixColors:function fixColors(str){return str.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g,function($0,$1,$2){if(CSS.Lists.colorNames.hasOwnProperty($2)){return ($1?$1:"rgba(") + CSS.Lists.colorNames[$2] + ($1?"":",1)");}return $1 + $2;});}, /* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that
				 the targeted hook can be injected or extracted at its standard position. */cleanRootPropertyValue:function cleanRootPropertyValue(rootProperty,rootPropertyValue){ /* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */if(CSS.RegEx.valueUnwrap.test(rootPropertyValue)){rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];} /* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
					 default to the root's default value as defined in CSS.Hooks.templates. */ /* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
					 zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */if(CSS.Values.isCSSNullValue(rootPropertyValue)){rootPropertyValue = CSS.Hooks.templates[rootProperty][1];}return rootPropertyValue;}, /* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */extractValue:function extractValue(fullHookName,rootPropertyValue){var hookData=CSS.Hooks.registered[fullHookName];if(hookData){var hookRoot=hookData[0],hookPosition=hookData[1];rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot,rootPropertyValue); /* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];}else { /* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */return rootPropertyValue;}}, /* Inject the hook's value into its root property's value. This is used to piece back together the root property
				 once Velocity has updated one of its individually hooked values through tweening. */injectValue:function injectValue(fullHookName,hookValue,rootPropertyValue){var hookData=CSS.Hooks.registered[fullHookName];if(hookData){var hookRoot=hookData[0],hookPosition=hookData[1],rootPropertyValueParts,rootPropertyValueUpdated;rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot,rootPropertyValue); /* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
						 then reconstruct the rootPropertyValue string. */rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);rootPropertyValueParts[hookPosition] = hookValue;rootPropertyValueUpdated = rootPropertyValueParts.join(" ");return rootPropertyValueUpdated;}else { /* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */return rootPropertyValue;}}}, /*******************
			 Normalizations
			 *******************/ /* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
			 and reformatting special properties (e.g. clip, rgba) to look like standard ones. */Normalizations:{ /* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
				 the targeted element (which may need to be queried), and the targeted property value. */registered:{clip:function clip(type,element,propertyValue){switch(type){case "name":return "clip"; /* Clip needs to be unwrapped and stripped of its commas during extraction. */case "extract":var extracted; /* If Velocity also extracted this value, skip extraction. */if(CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)){extracted = propertyValue;}else { /* Remove the "rect()" wrapper. */extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap); /* Strip off commas. */extracted = extracted?extracted[1].replace(/,(\s+)?/g," "):propertyValue;}return extracted; /* Clip needs to be re-wrapped during injection. */case "inject":return "rect(" + propertyValue + ")";}},blur:function blur(type,element,propertyValue){switch(type){case "name":return Velocity.State.isFirefox?"filter":"-webkit-filter";case "extract":var extracted=parseFloat(propertyValue); /* If extracted is NaN, meaning the value isn't already extracted. */if(!(extracted || extracted === 0)){var blurComponent=propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i); /* If the filter string had a blur component, return just the blur value and unit type. */if(blurComponent){extracted = blurComponent[1]; /* If the component doesn't exist, default blur to 0. */}else {extracted = 0;}}return extracted; /* Blur needs to be re-wrapped during injection. */case "inject": /* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */if(!parseFloat(propertyValue)){return "none";}else {return "blur(" + propertyValue + ")";}}}, /* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */opacity:function opacity(type,element,propertyValue){if(IE <= 8){switch(type){case "name":return "filter";case "extract": /* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
									 Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */var extracted=propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);if(extracted){ /* Convert to decimal value. */propertyValue = extracted[1] / 100;}else { /* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */propertyValue = 1;}return propertyValue;case "inject": /* Opacified elements are required to have their zoom property set to a non-zero value. */element.style.zoom = 1; /* Setting the filter property on elements with certain font property combinations can result in a
									 highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
									 value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */if(parseFloat(propertyValue) >= 1){return "";}else { /* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100,10) + ")";}} /* With all other browsers, normalization is not required; return the same values that were passed in. */}else {switch(type){case "name":return "opacity";case "extract":return propertyValue;case "inject":return propertyValue;}}}}, /*****************************
				 Batched Registrations
				 *****************************/ /* Note: Batched normalizations extend the CSS.Normalizations.registered object. */register:function register(){ /*****************
					 Transforms
					 *****************/ /* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
					 so that they can be referenced in a properties map by their individual names. */ /* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
					 setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
					 Transform setting is batched in this way to improve performance: the transform style only needs to be updated
					 once when multiple transform subproperties are being animated simultaneously. */ /* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
					 transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
					 from being normalized for these browsers so that tweening skips these properties altogether
					 (since it will ignore them as being unsupported by the browser.) */if((!IE || IE > 9) && !Velocity.State.isGingerbread){ /* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
						 share the same name, the latter is given a unique token within Velocity: "transformPerspective". */CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);}for(var i=0;i < CSS.Lists.transformsBase.length;i++) { /* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
						 paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */(function(){var transformName=CSS.Lists.transformsBase[i];CSS.Normalizations.registered[transformName] = function(type,element,propertyValue){switch(type){ /* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */case "name":return "transform"; /* Transform values are cached onto a per-element transformCache object. */case "extract": /* If this transform has yet to be assigned a value, return its null value. */if(Data(element) === undefined || Data(element).transformCache[transformName] === undefined){ /* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */return (/^scale/i.test(transformName)?1:0); /* When transform values are set, they are wrapped in parentheses as per the CSS spec.
											 Thus, when extracting their values (for tween calculations), we strip off the parentheses. */}return Data(element).transformCache[transformName].replace(/[()]/g,"");case "inject":var invalid=false; /* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
										 Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */ /* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */switch(transformName.substr(0,transformName.length - 1)){ /* Whitelist unit types for each transform. */case "translate":invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);break; /* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */case "scal":case "scale": /* Chrome on Android has a bug in which scaled elements blur if their initial scale
												 value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
												 and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */if(Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1){propertyValue = 1;}invalid = !/(\d)$/i.test(propertyValue);break;case "skew":invalid = !/(deg|\d)$/i.test(propertyValue);break;case "rotate":invalid = !/(deg|\d)$/i.test(propertyValue);break;}if(!invalid){ /* As per the CSS spec, wrap the value in parentheses. */Data(element).transformCache[transformName] = "(" + propertyValue + ")";} /* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */return Data(element).transformCache[transformName];}};})();} /*************
					 Colors
					 *************/ /* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
					 Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */for(var j=0;j < CSS.Lists.colors.length;j++) { /* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
						 (Otherwise, all functions would take the final for loop's colorName.) */(function(){var colorName=CSS.Lists.colors[j]; /* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */CSS.Normalizations.registered[colorName] = function(type,element,propertyValue){switch(type){case "name":return colorName; /* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */case "extract":var extracted; /* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */if(CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)){extracted = propertyValue;}else {var converted,colorNames={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"}; /* Convert color names to rgb. */if(/^[A-z]+$/i.test(propertyValue)){if(colorNames[propertyValue] !== undefined){converted = colorNames[propertyValue];}else { /* If an unmatched color name is provided, default to black. */converted = colorNames.black;} /* Convert hex values to rgb. */}else if(CSS.RegEx.isHex.test(propertyValue)){converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")"; /* If the provided color doesn't match any of the accepted color formats, default to black. */}else if(!/^rgba?\(/i.test(propertyValue)){converted = colorNames.black;} /* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
											 repeated spaces (in case the value included spaces to begin with). */extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ");} /* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */if((!IE || IE > 8) && extracted.split(" ").length === 3){extracted += " 1";}return extracted;case "inject": /* If we have a pattern then it might already have the right values */if(/^rgb/.test(propertyValue)){return propertyValue;} /* If this is IE<=8 and an alpha component exists, strip it off. */if(IE <= 8){if(propertyValue.split(" ").length === 4){propertyValue = propertyValue.split(/\s+/).slice(0,3).join(" ");} /* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */}else if(propertyValue.split(" ").length === 3){propertyValue += " 1";} /* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
										 on all values but the fourth (R, G, and B only accept whole numbers). */return (IE <= 8?"rgb":"rgba") + "(" + propertyValue.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"") + ")";}};})();} /**************
					 Dimensions
					 **************/function augmentDimension(name,element,wantInner){var isBorderBox=CSS.getPropertyValue(element,"boxSizing").toString().toLowerCase() === "border-box";if(isBorderBox === (wantInner || false)){ /* in box-sizing mode, the CSS width / height accessors already give the outerWidth / outerHeight. */var i,value,augment=0,sides=name === "width"?["Left","Right"]:["Top","Bottom"],fields=["padding" + sides[0],"padding" + sides[1],"border" + sides[0] + "Width","border" + sides[1] + "Width"];for(i = 0;i < fields.length;i++) {value = parseFloat(CSS.getPropertyValue(element,fields[i]));if(!isNaN(value)){augment += value;}}return wantInner?-augment:augment;}return 0;}function getDimension(name,wantInner){return function(type,element,propertyValue){switch(type){case "name":return name;case "extract":return parseFloat(propertyValue) + augmentDimension(name,element,wantInner);case "inject":return parseFloat(propertyValue) - augmentDimension(name,element,wantInner) + "px";}};}CSS.Normalizations.registered.innerWidth = getDimension("width",true);CSS.Normalizations.registered.innerHeight = getDimension("height",true);CSS.Normalizations.registered.outerWidth = getDimension("width");CSS.Normalizations.registered.outerHeight = getDimension("height");}}, /************************
			 CSS Property Names
			 ************************/Names:{ /* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
				 Camelcasing is used to normalize property names between and across calls. */camelCase:function camelCase(property){return property.replace(/-(\w)/g,function(match,subMatch){return subMatch.toUpperCase();});}, /* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */SVGAttribute:function SVGAttribute(property){var SVGAttributes="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2"; /* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */if(IE || Velocity.State.isAndroid && !Velocity.State.isChrome){SVGAttributes += "|transform";}return new RegExp("^(" + SVGAttributes + ")$","i").test(property);}, /* Determine whether a property should be set with a vendor prefix. */ /* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
				 If the property is not at all supported by the browser, return a false flag. */prefixCheck:function prefixCheck(property){ /* If this property has already been checked, return the cached value. */if(Velocity.State.prefixMatches[property]){return [Velocity.State.prefixMatches[property],true];}else {var vendors=["","Webkit","Moz","ms","O"];for(var i=0,vendorsLength=vendors.length;i < vendorsLength;i++) {var propertyPrefixed;if(i === 0){propertyPrefixed = property;}else { /* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */propertyPrefixed = vendors[i] + property.replace(/^\w/,function(match){return match.toUpperCase();});} /* Check if the browser supports this property as prefixed. */if(Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])){ /* Cache the match. */Velocity.State.prefixMatches[property] = propertyPrefixed;return [propertyPrefixed,true];}} /* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */return [property,false];}}}, /************************
			 CSS Property Values
			 ************************/Values:{ /* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */hexToRgb:function hexToRgb(hex){var shortformRegex=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,longformRegex=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgbParts;hex = hex.replace(shortformRegex,function(m,r,g,b){return r + r + g + g + b + b;});rgbParts = longformRegex.exec(hex);return rgbParts?[parseInt(rgbParts[1],16),parseInt(rgbParts[2],16),parseInt(rgbParts[3],16)]:[0,0,0];},isCSSNullValue:function isCSSNullValue(value){ /* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
					 Thus, we check for both falsiness and these special strings. */ /* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
					 templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */ /* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */return !value || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value);}, /* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */getUnitType:function getUnitType(property){if(/^(rotate|skew)/i.test(property)){return "deg";}else if(/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)){ /* The above properties are unitless. */return "";}else { /* Default to px for all other properties. */return "px";}}, /* HTML elements default to an associated display type when they're not set to display:none. */ /* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */getDisplayType:function getDisplayType(element){var tagName=element && element.tagName.toString().toLowerCase();if(/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)){return "inline";}else if(/^(li)$/i.test(tagName)){return "list-item";}else if(/^(tr)$/i.test(tagName)){return "table-row";}else if(/^(table)$/i.test(tagName)){return "table";}else if(/^(tbody)$/i.test(tagName)){return "table-row-group"; /* Default to "block" when no match is found. */}else {return "block";}}, /* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */addClass:function addClass(element,className){if(element){if(element.classList){element.classList.add(className);}else if(Type.isString(element.className)){ // Element.className is around 15% faster then set/getAttribute
element.className += (element.className.length?" ":"") + className;}else { // Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
var currentClass=element.getAttribute(IE <= 7?"className":"class") || "";element.setAttribute("class",currentClass + (currentClass?" ":"") + className);}}},removeClass:function removeClass(element,className){if(element){if(element.classList){element.classList.remove(className);}else if(Type.isString(element.className)){ // Element.className is around 15% faster then set/getAttribute
// TODO: Need some jsperf tests on performance - can we get rid of the regex and maybe use split / array manipulation?
element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)","gi")," ");}else { // Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
var currentClass=element.getAttribute(IE <= 7?"className":"class") || "";element.setAttribute("class",currentClass.replace(new RegExp("(^|\s)" + className.split(" ").join("|") + "(\s|$)","gi")," "));}}}}, /****************************
			 Style Getting & Setting
			 ****************************/ /* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */getPropertyValue:function getPropertyValue(element,property,rootPropertyValue,forceStyleLookup){ /* Get an element's computed property value. */ /* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
				 style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
				 *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */function computePropertyValue(element,property){ /* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
					 element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
					 offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
					 We subtract border and padding to get the sum of interior + scrollbar. */var computedValue=0; /* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
					 of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
					 codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
					 Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */if(IE <= 8){computedValue = $.css(element,property); /* GET */ /* All other browsers support getComputedStyle. The returned live object reference is cached onto its
						 associated element so that it does not need to be refetched upon every GET. */}else { /* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
						 toggle display to the element type's default value. */var toggleDisplay=false;if(/^(width|height)$/.test(property) && CSS.getPropertyValue(element,"display") === 0){toggleDisplay = true;CSS.setPropertyValue(element,"display",CSS.Values.getDisplayType(element));}var revertDisplay=function revertDisplay(){if(toggleDisplay){CSS.setPropertyValue(element,"display","none");}};if(!forceStyleLookup){if(property === "height" && CSS.getPropertyValue(element,"boxSizing").toString().toLowerCase() !== "border-box"){var contentBoxHeight=element.offsetHeight - (parseFloat(CSS.getPropertyValue(element,"borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element,"borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element,"paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element,"paddingBottom")) || 0);revertDisplay();return contentBoxHeight;}else if(property === "width" && CSS.getPropertyValue(element,"boxSizing").toString().toLowerCase() !== "border-box"){var contentBoxWidth=element.offsetWidth - (parseFloat(CSS.getPropertyValue(element,"borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element,"borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element,"paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element,"paddingRight")) || 0);revertDisplay();return contentBoxWidth;}}var computedStyle; /* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
						 of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */if(Data(element) === undefined){computedStyle = window.getComputedStyle(element,null); /* GET */ /* If the computedStyle object has yet to be cached, do so now. */}else if(!Data(element).computedStyle){computedStyle = Data(element).computedStyle = window.getComputedStyle(element,null); /* GET */ /* If computedStyle is cached, use it. */}else {computedStyle = Data(element).computedStyle;} /* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
						 Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
						 So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */if(property === "borderColor"){property = "borderTopColor";} /* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
						 instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */if(IE === 9 && property === "filter"){computedValue = computedStyle.getPropertyValue(property); /* GET */}else {computedValue = computedStyle[property];} /* Fall back to the property's style value (if defined) when computedValue returns nothing,
						 which can happen when the element hasn't been painted. */if(computedValue === "" || computedValue === null){computedValue = element.style[property];}revertDisplay();} /* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
					 defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
					 effect as being set to 0, so no conversion is necessary.) */ /* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
					 property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
					 to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */if(computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)){var position=computePropertyValue(element,"position"); /* GET */ /* For absolute positioning, jQuery's $.position() only returns values for top and left;
						 right and bottom will have their "auto" value reverted to 0. */ /* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
						 Not a big deal since we're currently in a GET batch anyway. */if(position === "fixed" || position === "absolute" && /top|left/i.test(property)){ /* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */computedValue = $(element).position()[property] + "px"; /* GET */}}return computedValue;}var propertyValue; /* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),
				 extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */if(CSS.Hooks.registered[property]){var hook=property,hookRoot=CSS.Hooks.getRoot(hook); /* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
					 query the DOM for the root property's value. */if(rootPropertyValue === undefined){ /* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */rootPropertyValue = CSS.getPropertyValue(element,CSS.Names.prefixCheck(hookRoot)[0]); /* GET */} /* If this root has a normalization registered, peform the associated normalization extraction. */if(CSS.Normalizations.registered[hookRoot]){rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract",element,rootPropertyValue);} /* Extract the hook's value. */propertyValue = CSS.Hooks.extractValue(hook,rootPropertyValue); /* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),
					 normalize the property's name and value, and handle the special case of transforms. */ /* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly
					 numerical and therefore do not require normalization extraction. */}else if(CSS.Normalizations.registered[property]){var normalizedPropertyName,normalizedPropertyValue;normalizedPropertyName = CSS.Normalizations.registered[property]("name",element); /* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
					 At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
					 This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
					 thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */if(normalizedPropertyName !== "transform"){normalizedPropertyValue = computePropertyValue(element,CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */ /* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */if(CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]){normalizedPropertyValue = CSS.Hooks.templates[property][1];}}propertyValue = CSS.Normalizations.registered[property]("extract",element,normalizedPropertyValue);} /* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */if(!/^[\d-]/.test(propertyValue)){ /* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
					 their HTML attribute values instead of their CSS style values. */var data=Data(element);if(data && data.isSVG && CSS.Names.SVGAttribute(property)){ /* Since the height/width attribute values must be set manually, they don't reflect computed values.
						 Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */if(/^(height|width)$/i.test(property)){ /* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */try{propertyValue = element.getBBox()[property];}catch(error) {propertyValue = 0;} /* Otherwise, access the attribute value directly. */}else {propertyValue = element.getAttribute(property);}}else {propertyValue = computePropertyValue(element,CSS.Names.prefixCheck(property)[0]); /* GET */}} /* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
				 convert CSS null-values to an integer of value 0. */if(CSS.Values.isCSSNullValue(propertyValue)){propertyValue = 0;}if(Velocity.debug >= 2){console.log("Get " + property + ": " + propertyValue);}return propertyValue;}, /* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */setPropertyValue:function setPropertyValue(element,property,propertyValue,rootPropertyValue,scrollData){var propertyName=property; /* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */if(property === "scroll"){ /* If a container option is present, scroll the container instead of the browser window. */if(scrollData.container){scrollData.container["scroll" + scrollData.direction] = propertyValue; /* Otherwise, Velocity defaults to scrolling the browser window. */}else {if(scrollData.direction === "Left"){window.scrollTo(propertyValue,scrollData.alternateValue);}else {window.scrollTo(scrollData.alternateValue,propertyValue);}}}else { /* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
					 Thus, for now, we merely cache transforms being SET. */if(CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name",element) === "transform"){ /* Perform a normalization injection. */ /* Note: The normalization logic handles the transformCache updating. */CSS.Normalizations.registered[property]("inject",element,propertyValue);propertyName = "transform";propertyValue = Data(element).transformCache[property];}else { /* Inject hooks. */if(CSS.Hooks.registered[property]){var hookName=property,hookRoot=CSS.Hooks.getRoot(property); /* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element,hookRoot); /* GET */propertyValue = CSS.Hooks.injectValue(hookName,propertyValue,rootPropertyValue);property = hookRoot;} /* Normalize names and values. */if(CSS.Normalizations.registered[property]){propertyValue = CSS.Normalizations.registered[property]("inject",element,propertyValue);property = CSS.Normalizations.registered[property]("name",element);} /* Assign the appropriate vendor prefix before performing an official style update. */propertyName = CSS.Names.prefixCheck(property)[0]; /* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
						 Try/catch is avoided for other browsers since it incurs a performance overhead. */if(IE <= 8){try{element.style[propertyName] = propertyValue;}catch(error) {if(Velocity.debug){console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]");}} /* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */ /* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */}else {var data=Data(element);if(data && data.isSVG && CSS.Names.SVGAttribute(property)){ /* Note: For SVG attributes, vendor-prefixed property names are never used. */ /* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */element.setAttribute(property,propertyValue);}else {element.style[propertyName] = propertyValue;}}if(Velocity.debug >= 2){console.log("Set " + property + " (" + propertyName + "): " + propertyValue);}}} /* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */return [propertyName,propertyValue];}, /* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */ /* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */flushTransformCache:function flushTransformCache(element){var transformString="",data=Data(element); /* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
				 (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */if((IE || Velocity.State.isAndroid && !Velocity.State.isChrome) && data && data.isSVG){ /* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
					 Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */var getTransformFloat=function getTransformFloat(transformProperty){return parseFloat(CSS.getPropertyValue(element,transformProperty));}; /* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
					 we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */var SVGTransforms={translate:[getTransformFloat("translateX"),getTransformFloat("translateY")],skewX:[getTransformFloat("skewX")],skewY:[getTransformFloat("skewY")], /* If the scale property is set (non-1), use that value for the scaleX and scaleY values
						 (this behavior mimics the result of animating all these properties at once on HTML elements). */scale:getTransformFloat("scale") !== 1?[getTransformFloat("scale"),getTransformFloat("scale")]:[getTransformFloat("scaleX"),getTransformFloat("scaleY")], /* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
						 defining the rotation's origin point. We ignore the origin values (default them to 0). */rotate:[getTransformFloat("rotateZ"),0,0]}; /* Iterate through the transform properties in the user-defined property map order.
					 (This mimics the behavior of non-SVG transform animation.) */$.each(Data(element).transformCache,function(transformName){ /* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
						 properties so that they match up with SVG's accepted transform properties. */if(/^translate/i.test(transformName)){transformName = "translate";}else if(/^scale/i.test(transformName)){transformName = "scale";}else if(/^rotate/i.test(transformName)){transformName = "rotate";} /* Check that we haven't yet deleted the property from the SVGTransforms container. */if(SVGTransforms[transformName]){ /* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " "; /* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
							 re-insert the same master property if we encounter another one of its axis-specific properties. */delete SVGTransforms[transformName];}});}else {var transformValue,perspective; /* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */$.each(Data(element).transformCache,function(transformName){transformValue = Data(element).transformCache[transformName]; /* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */if(transformName === "transformPerspective"){perspective = transformValue;return true;} /* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */if(IE === 9 && transformName === "rotateZ"){transformName = "rotate";}transformString += transformName + transformValue + " ";}); /* If present, set the perspective subproperty first. */if(perspective){transformString = "perspective" + perspective + " " + transformString;}}CSS.setPropertyValue(element,"transform",transformString);}}; /* Register hooks and normalizations. */CSS.Hooks.register();CSS.Normalizations.register(); /* Allow hook setting in the same fashion as jQuery's $.css(). */Velocity.hook = function(elements,arg2,arg3){var value;elements = sanitizeElements(elements);$.each(elements,function(i,element){ /* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */if(Data(element) === undefined){Velocity.init(element);} /* Get property value. If an element set was passed in, only return the value for the first element. */if(arg3 === undefined){if(value === undefined){value = CSS.getPropertyValue(element,arg2);} /* Set property value. */}else { /* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */var adjustedSet=CSS.setPropertyValue(element,arg2,arg3); /* Transform properties don't automatically set. They have to be flushed to the DOM. */if(adjustedSet[0] === "transform"){Velocity.CSS.flushTransformCache(element);}value = adjustedSet;}});return value;}; /*****************
		 Animation
		 *****************/var animate=function animate(){var opts; /******************
			 Call Chain
			 ******************/ /* Logic for determining what to return to the call stack when exiting out of Velocity. */function getChain(){ /* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
				 default to null instead of returning the targeted elements so that utility function's return value is standardized. */if(isUtility){return promiseData.promise || null; /* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */}else {return elementsWrapped;}} /*************************
			 Arguments Assignment
			 *************************/ /* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
			 objects are defined on a container object that's passed in as Velocity's sole argument. */ /* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */var syntacticSugar=arguments[0] && (arguments[0].p || $.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || Type.isString(arguments[0].properties)), /* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */isUtility, /* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly
					 passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */elementsWrapped,argumentIndex;var elements,propertiesMap,options; /* Detect jQuery/Zepto elements being animated via the $.fn method. */if(Type.isWrapped(this)){isUtility = false;argumentIndex = 0;elements = this;elementsWrapped = this; /* Otherwise, raw elements are being animated via the utility function. */}else {isUtility = true;argumentIndex = 1;elements = syntacticSugar?arguments[0].elements || arguments[0].e:arguments[0];} /***************
			 Promises
			 ***************/var promiseData={promise:null,resolver:null,rejecter:null}; /* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
			 promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
			 method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
			 call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */ /* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
			 triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
			 grouped together for the purposes of resolving and rejecting a promise. */if(isUtility && Velocity.Promise){promiseData.promise = new Velocity.Promise(function(resolve,reject){promiseData.resolver = resolve;promiseData.rejecter = reject;});}if(syntacticSugar){propertiesMap = arguments[0].properties || arguments[0].p;options = arguments[0].options || arguments[0].o;}else {propertiesMap = arguments[argumentIndex];options = arguments[argumentIndex + 1];}elements = sanitizeElements(elements);if(!elements){if(promiseData.promise){if(!propertiesMap || !options || options.promiseRejectEmpty !== false){promiseData.rejecter();}else {promiseData.resolver();}}return;} /* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
			 single raw DOM element is passed in (which doesn't contain a length property). */var elementsLength=elements.length,elementsIndex=0; /***************************
			 Argument Overloading
			 ***************************/ /* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
			 Overloading is detected by checking for the absence of an object being passed into options. */ /* Note: The stop/finish/pause/resume actions do not accept animation options, and are therefore excluded from this check. */if(!/^(stop|finish|finishAll|pause|resume)$/i.test(propertiesMap) && !$.isPlainObject(options)){ /* The utility function shifts all arguments one position to the right, so we adjust for that offset. */var startingArgumentPosition=argumentIndex + 1;options = {}; /* Iterate through all options arguments */for(var i=startingArgumentPosition;i < arguments.length;i++) { /* Treat a number as a duration. Parse it out. */ /* Note: The following RegEx will return true if passed an array with a number as its first item.
					 Thus, arrays are skipped from this check. */if(!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))){options.duration = arguments[i]; /* Treat strings and arrays as easings. */}else if(Type.isString(arguments[i]) || Type.isArray(arguments[i])){options.easing = arguments[i]; /* Treat a function as a complete callback. */}else if(Type.isFunction(arguments[i])){options.complete = arguments[i];}}} /*********************
			 Action Detection
			 *********************/ /* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
			 or they can be started, stopped, paused, resumed, or reversed . If a literal or referenced properties map is passed in as Velocity's
			 first argument, the associated action is "start". Alternatively, "scroll", "reverse", "pause", "resume" or "stop" can be passed in 
			 instead of a properties map. */var action;switch(propertiesMap){case "scroll":action = "scroll";break;case "reverse":action = "reverse";break;case "pause": /*******************
					 Action: Pause
					 *******************/var currentTime=new Date().getTime(); /* Handle delay timers */$.each(elements,function(i,element){pauseDelayOnElement(element,currentTime);}); /* Pause and Resume are call-wide (not on a per element basis). Thus, calling pause or resume on a 
					 single element will cause any calls that containt tweens for that element to be paused/resumed
					 as well. */ /* Iterate through all calls and pause any that contain any of our elements */$.each(Velocity.State.calls,function(i,activeCall){var found=false; /* Inactive calls are set to false by the logic inside completeCall(). Skip them. */if(activeCall){ /* Iterate through the active call's targeted elements. */$.each(activeCall[1],function(k,activeElement){var queueName=options === undefined?"":options;if(queueName !== true && activeCall[2].queue !== queueName && !(options === undefined && activeCall[2].queue === false)){return true;} /* Iterate through the calls targeted by the stop command. */$.each(elements,function(l,element){ /* Check that this call was applied to the target element. */if(element === activeElement){ /* Set call to paused */activeCall[5] = {resume:false}; /* Once we match an element, we can bounce out to the next call entirely */found = true;return false;}}); /* Proceed to check next call if we have already matched */if(found){return false;}});}}); /* Since pause creates no new tweens, exit out of Velocity. */return getChain();case "resume": /*******************
					 Action: Resume
					 *******************/ /* Handle delay timers */$.each(elements,function(i,element){resumeDelayOnElement(element,currentTime);}); /* Pause and Resume are call-wide (not on a per elemnt basis). Thus, calling pause or resume on a 
					 single element will cause any calls that containt tweens for that element to be paused/resumed
					 as well. */ /* Iterate through all calls and pause any that contain any of our elements */$.each(Velocity.State.calls,function(i,activeCall){var found=false; /* Inactive calls are set to false by the logic inside completeCall(). Skip them. */if(activeCall){ /* Iterate through the active call's targeted elements. */$.each(activeCall[1],function(k,activeElement){var queueName=options === undefined?"":options;if(queueName !== true && activeCall[2].queue !== queueName && !(options === undefined && activeCall[2].queue === false)){return true;} /* Skip any calls that have never been paused */if(!activeCall[5]){return true;} /* Iterate through the calls targeted by the stop command. */$.each(elements,function(l,element){ /* Check that this call was applied to the target element. */if(element === activeElement){ /* Flag a pause object to be resumed, which will occur during the next tick. In
										 addition, the pause object will at that time be deleted */activeCall[5].resume = true; /* Once we match an element, we can bounce out to the next call entirely */found = true;return false;}}); /* Proceed to check next call if we have already matched */if(found){return false;}});}}); /* Since resume creates no new tweens, exit out of Velocity. */return getChain();case "finish":case "finishAll":case "stop": /*******************
					 Action: Stop
					 *******************/ /* Clear the currently-active delay on each targeted element. */$.each(elements,function(i,element){if(Data(element) && Data(element).delayTimer){ /* Stop the timer from triggering its cached next() function. */clearTimeout(Data(element).delayTimer.setTimeout); /* Manually call the next() function so that the subsequent queue items can progress. */if(Data(element).delayTimer.next){Data(element).delayTimer.next();}delete Data(element).delayTimer;} /* If we want to finish everything in the queue, we have to iterate through it
						 and call each function. This will make them active calls below, which will
						 cause them to be applied via the duration setting. */if(propertiesMap === "finishAll" && (options === true || Type.isString(options))){ /* Iterate through the items in the element's queue. */$.each($.queue(element,Type.isString(options)?options:""),function(_,item){ /* The queue array can contain an "inprogress" string, which we skip. */if(Type.isFunction(item)){item();}}); /* Clearing the $.queue() array is achieved by resetting it to []. */$.queue(element,Type.isString(options)?options:"",[]);}});var callsToStop=[]; /* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
					 been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
					 is stopped, the next item in its animation queue is immediately triggered. */ /* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
					 or a custom queue string can be passed in. */ /* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
					 regardless of the element's current queue state. */ /* Iterate through every active call. */$.each(Velocity.State.calls,function(i,activeCall){ /* Inactive calls are set to false by the logic inside completeCall(). Skip them. */if(activeCall){ /* Iterate through the active call's targeted elements. */$.each(activeCall[1],function(k,activeElement){ /* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
								 clear calls associated with the relevant queue. */ /* Call stopping logic works as follows:
								 - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
								 - options === undefined --> stop current queue:"" call and all queue:false calls.
								 - options === false --> stop only queue:false calls.
								 - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */var queueName=options === undefined?"":options;if(queueName !== true && activeCall[2].queue !== queueName && !(options === undefined && activeCall[2].queue === false)){return true;} /* Iterate through the calls targeted by the stop command. */$.each(elements,function(l,element){ /* Check that this call was applied to the target element. */if(element === activeElement){ /* Optionally clear the remaining queued calls. If we're doing "finishAll" this won't find anything,
										 due to the queue-clearing above. */if(options === true || Type.isString(options)){ /* Iterate through the items in the element's queue. */$.each($.queue(element,Type.isString(options)?options:""),function(_,item){ /* The queue array can contain an "inprogress" string, which we skip. */if(Type.isFunction(item)){ /* Pass the item's callback a flag indicating that we want to abort from the queue call.
													 (Specifically, the queue will resolve the call's associated promise then abort.)  */item(null,true);}}); /* Clearing the $.queue() array is achieved by resetting it to []. */$.queue(element,Type.isString(options)?options:"",[]);}if(propertiesMap === "stop"){ /* Since "reverse" uses cached start values (the previous call's endValues), these values must be
											 changed to reflect the final value that the elements were actually tweened to. */ /* Note: If only queue:false/queue:"custom" animations are currently running on an element, it won't have a tweensContainer
											 object. Also, queue:false/queue:"custom" animations can't be reversed. */var data=Data(element);if(data && data.tweensContainer && (queueName === true || queueName === "")){$.each(data.tweensContainer,function(m,activeTween){activeTween.endValue = activeTween.currentValue;});}callsToStop.push(i);}else if(propertiesMap === "finish" || propertiesMap === "finishAll"){ /* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
											 they finish upon the next rAf tick then proceed with normal call completion logic. */activeCall[2].duration = 1;}}});});}}); /* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
					 that the complete callback and display:none setting should be skipped since we're completing prematurely. */if(propertiesMap === "stop"){$.each(callsToStop,function(i,j){completeCall(j,true);});if(promiseData.promise){ /* Immediately resolve the promise associated with this stop call since stop runs synchronously. */promiseData.resolver(elements);}} /* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */return getChain();default: /* Treat a non-empty plain object as a literal properties map. */if($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)){action = "start"; /****************
						 Redirects
						 ****************/ /* Check if a string matches a registered redirect (see Redirects above). */}else if(Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]){opts = $.extend({},options);var durationOriginal=opts.duration,delayOriginal=opts.delay || 0; /* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */if(opts.backwards === true){elements = $.extend(true,[],elements).reverse();} /* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */$.each(elements,function(elementIndex,element){ /* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */if(parseFloat(opts.stagger)){opts.delay = delayOriginal + parseFloat(opts.stagger) * elementIndex;}else if(Type.isFunction(opts.stagger)){opts.delay = delayOriginal + opts.stagger.call(element,elementIndex,elementsLength);} /* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
							 the duration of each element's animation, using floors to prevent producing very short durations. */if(opts.drag){ /* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap)?1000:DURATION_DEFAULT); /* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
								 B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
								 The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */opts.duration = Math.max(opts.duration * (opts.backwards?1 - elementIndex / elementsLength:(elementIndex + 1) / elementsLength),opts.duration * 0.75,200);} /* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
							 reduce the opts checking logic required inside the redirect. */Velocity.Redirects[propertiesMap].call(element,element,opts || {},elementIndex,elementsLength,elements,promiseData.promise?promiseData:undefined);}); /* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
						 (The performance overhead up to this point is virtually non-existant.) */ /* Note: The jQuery call chain is kept intact by returning the complete element set. */return getChain();}else {var abortError="Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";if(promiseData.promise){promiseData.rejecter(new Error(abortError));}else if(window.console){console.log(abortError);}return getChain();}} /**************************
			 Call-Wide Variables
			 **************************/ /* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
			 being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
			 avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
			 conversion metrics across Velocity animations that are not immediately consecutively chained. */var callUnitConversionData={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null}; /* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
			 Velocity.State.calls array that is processed during animation ticking. */var call=[]; /************************
			 Element Processing
			 ************************/ /* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
			 1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
			 2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
			 3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
			 `elementArrayIndex` allows passing index of the element in the original array to value functions.
			 If `elementsIndex` were used instead the index would be determined by the elements' per-element queue.
			 */function processElement(element,elementArrayIndex){ /*************************
				 Part I: Pre-Queueing
				 *************************/ /***************************
				 Element-Wide Variables
				 ***************************/var  /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */opts=$.extend({},Velocity.defaults,options), /* A container for the processed data associated with each property in the propertyMap.
						 (Each property in the map produces its own "tween".) */tweensContainer={},elementUnitConversionData; /******************
				 Element Init
				 ******************/if(Data(element) === undefined){Velocity.init(element);} /******************
				 Option: Delay
				 ******************/ /* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */ /* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()
				 (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */if(parseFloat(opts.delay) && opts.queue !== false){$.queue(element,opts.queue,function(next,clearQueue){if(clearQueue === true){ /* Do not continue with animation queueing. */return true;} /* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */Velocity.velocityQueueEntryFlag = true; /* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
						 The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command, and
						 delayBegin/delayTime is used to ensure we can "pause" and "resume" a tween that is still mid-delay. */ /* Temporarily store delayed elements to facilite access for global pause/resume */var callIndex=Velocity.State.delayedElements.count++;Velocity.State.delayedElements[callIndex] = element;var delayComplete=(function(index){return function(){ /* Clear the temporary element */Velocity.State.delayedElements[index] = false; /* Finally, issue the call */next();};})(callIndex);Data(element).delayBegin = new Date().getTime();Data(element).delay = parseFloat(opts.delay);Data(element).delayTimer = {setTimeout:setTimeout(next,parseFloat(opts.delay)),next:delayComplete};});} /*********************
				 Option: Duration
				 *********************/ /* Support for jQuery's named durations. */switch(opts.duration.toString().toLowerCase()){case "fast":opts.duration = 200;break;case "normal":opts.duration = DURATION_DEFAULT;break;case "slow":opts.duration = 600;break;default: /* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */opts.duration = parseFloat(opts.duration) || 1;} /************************
				 Global Option: Mock
				 ************************/if(Velocity.mock !== false){ /* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
					 Alternatively, a multiplier can be passed in to time remap all delays and durations. */if(Velocity.mock === true){opts.duration = opts.delay = 1;}else {opts.duration *= parseFloat(Velocity.mock) || 1;opts.delay *= parseFloat(Velocity.mock) || 1;}} /*******************
				 Option: Easing
				 *******************/opts.easing = getEasing(opts.easing,opts.duration); /**********************
				 Option: Callbacks
				 **********************/ /* Callbacks must functions. Otherwise, default to null. */if(opts.begin && !Type.isFunction(opts.begin)){opts.begin = null;}if(opts.progress && !Type.isFunction(opts.progress)){opts.progress = null;}if(opts.complete && !Type.isFunction(opts.complete)){opts.complete = null;} /*********************************
				 Option: Display & Visibility
				 *********************************/ /* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */ /* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */if(opts.display !== undefined && opts.display !== null){opts.display = opts.display.toString().toLowerCase(); /* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */if(opts.display === "auto"){opts.display = Velocity.CSS.Values.getDisplayType(element);}}if(opts.visibility !== undefined && opts.visibility !== null){opts.visibility = opts.visibility.toString().toLowerCase();} /**********************
				 Option: mobileHA
				 **********************/ /* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
				 on animating elements. HA is removed from the element at the completion of its animation. */ /* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */ /* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */opts.mobileHA = opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread; /***********************
				 Part II: Queueing
				 ***********************/ /* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
				 In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */ /* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
				 the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */function buildQueue(next){var data,lastTweensContainer; /*******************
					 Option: Begin
					 *******************/ /* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */if(opts.begin && elementsIndex === 0){ /* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */try{opts.begin.call(elements,elements);}catch(error) {setTimeout(function(){throw error;},1);}} /*****************************************
					 Tween Data Construction (for Scroll)
					 *****************************************/ /* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */if(action === "scroll"){ /* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */var scrollDirection=/^x$/i.test(opts.axis)?"Left":"Top",scrollOffset=parseFloat(opts.offset) || 0,scrollPositionCurrent,scrollPositionCurrentAlternate,scrollPositionEnd; /* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
						 as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */if(opts.container){ /* Ensure that either a jQuery object or a raw DOM element was passed in. */if(Type.isWrapped(opts.container) || Type.isNode(opts.container)){ /* Extract the raw DOM element from the jQuery wrapper. */opts.container = opts.container[0] || opts.container; /* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
								 (due to the user's natural interaction with the page). */scrollPositionCurrent = opts.container["scroll" + scrollDirection]; /* GET */ /* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
								 -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
								 the scroll container's current scroll position. */scrollPositionEnd = scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */ /* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */}else {opts.container = null;}}else { /* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
							 the appropriate cached property names (which differ based on browser type). */scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]]; /* GET */ /* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left"?"Top":"Left")]]; /* GET */ /* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
							 and therefore end values do not need to be compounded onto current values. */scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */} /* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */tweensContainer = {scroll:{rootPropertyValue:false,startValue:scrollPositionCurrent,currentValue:scrollPositionCurrent,endValue:scrollPositionEnd,unitType:"",easing:opts.easing,scrollData:{container:opts.container,direction:scrollDirection,alternateValue:scrollPositionCurrentAlternate}},element:element};if(Velocity.debug){console.log("tweensContainer (scroll): ",tweensContainer.scroll,element);} /******************************************
						 Tween Data Construction (for Reverse)
						 ******************************************/ /* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
						 that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
						 the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */ /* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */ /* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
						 there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
						 as reverting to the element's values as they were prior to the previous *Velocity* call. */}else if(action === "reverse"){data = Data(element); /* Abort if there is no prior animation data to reverse to. */if(!data){return;}if(!data.tweensContainer){ /* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */$.dequeue(element,opts.queue);return;}else { /*********************
							 Options Parsing
							 *********************/ /* If the element was hidden via the display option in the previous call,
							 revert display to "auto" prior to reversal so that the element is visible again. */if(data.opts.display === "none"){data.opts.display = "auto";}if(data.opts.visibility === "hidden"){data.opts.visibility = "visible";} /* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
							 Further, remove the previous call's callback options; typically, users do not want these to be refired. */data.opts.loop = false;data.opts.begin = null;data.opts.complete = null; /* Since we're extending an opts object that has already been extended with the defaults options object,
							 we remove non-explicitly-defined properties that are auto-assigned values. */if(!options.easing){delete opts.easing;}if(!options.duration){delete opts.duration;} /* The opts object used for reversal is an extension of the options object optionally passed into this
							 reverse call plus the options used in the previous Velocity call. */opts = $.extend({},data.opts,opts); /*************************************
							 Tweens Container Reconstruction
							 *************************************/ /* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */lastTweensContainer = $.extend(true,{},data?data.tweensContainer:null); /* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */for(var lastTween in lastTweensContainer) { /* In addition to tween data, tweensContainers contain an element property that we ignore here. */if(lastTweensContainer.hasOwnProperty(lastTween) && lastTween !== "element"){var lastStartValue=lastTweensContainer[lastTween].startValue;lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;lastTweensContainer[lastTween].endValue = lastStartValue; /* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
									 Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
									 The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */if(!Type.isEmptyObject(options)){lastTweensContainer[lastTween].easing = opts.easing;}if(Velocity.debug){console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]),element);}}}tweensContainer = lastTweensContainer;} /*****************************************
						 Tween Data Construction (for Start)
						 *****************************************/}else if(action === "start"){ /*************************
						 Value Transferring
						 *************************/ /* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
						 while the element was in the process of being animated by Velocity, then this current call is safe to use
						 the end values from the prior call as its start values. Velocity attempts to perform this value transfer
						 process whenever possible in order to avoid requerying the DOM. */ /* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
						 then the DOM is queried for the element's current values as a last resort. */ /* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */data = Data(element); /* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
						 to transfer over end values to use as start values. If it's set to true and there is a previous
						 Velocity call to pull values from, do so. */if(data && data.tweensContainer && data.isAnimating === true){lastTweensContainer = data.tweensContainer;} /***************************
						 Tween Data Calculation
						 ***************************/ /* This function parses property data and defaults endValue, easing, and startValue as appropriate. */ /* Property map values can either take the form of 1) a single value representing the end value,
						 or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
						 The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
						 the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */var parsePropertyValue=function parsePropertyValue(valueData,skipResolvingEasing){var endValue,easing,startValue; /* If we have a function as the main argument then resolve it first, in case it returns an array that needs to be split */if(Type.isFunction(valueData)){valueData = valueData.call(element,elementArrayIndex,elementsLength);} /* Handle the array format, which can be structured as one of three potential overloads:
							 A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */if(Type.isArray(valueData)){ /* endValue is always the first item in the array. Don't bother validating endValue's value now
								 since the ensuing property cycling logic does that. */endValue = valueData[0]; /* Two-item array format: If the second item is a number, function, or hex string, treat it as a
								 start value since easings can only be non-hex strings or arrays. */if(!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1]) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])){startValue = valueData[1]; /* Two or three-item array: If the second item is a non-hex string easing name or an array, treat it as an easing. */}else if(Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1]) && Velocity.Easings[valueData[1]] || Type.isArray(valueData[1])){easing = skipResolvingEasing?valueData[1]:getEasing(valueData[1],opts.duration); /* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */startValue = valueData[2];}else {startValue = valueData[1] || valueData[2];} /* Handle the single-value format. */}else {endValue = valueData;} /* Default to the call's easing if a per-property easing type was not defined. */if(!skipResolvingEasing){easing = easing || opts.easing;} /* If functions were passed in as values, pass the function the current element as its context,
							 plus the element's index and the element set's size as arguments. Then, assign the returned value. */if(Type.isFunction(endValue)){endValue = endValue.call(element,elementArrayIndex,elementsLength);}if(Type.isFunction(startValue)){startValue = startValue.call(element,elementArrayIndex,elementsLength);} /* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */return [endValue || 0,easing,startValue];};var fixPropertyValue=function fixPropertyValue(property,valueData){ /* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */var rootProperty=CSS.Hooks.getRoot(property),rootPropertyValue=false, /* Parse out endValue, easing, and startValue from the property's data. */endValue=valueData[0],easing=valueData[1],startValue=valueData[2],pattern; /**************************
							 Start Value Sourcing
							 **************************/ /* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
							 inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
							 Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */ /* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
							 there is no way to check for their explicit browser support, and so we skip skip this check for them. */if((!data || !data.isSVG) && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined){if(Velocity.debug){console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");}return;} /* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
							 animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
							 a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */if((opts.display !== undefined && opts.display !== null && opts.display !== "none" || opts.visibility !== undefined && opts.visibility !== "hidden") && /opacity|filter/.test(property) && !startValue && endValue !== 0){startValue = 0;} /* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
							 for all of the current call's properties that were *also* animated in the previous call. */ /* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */if(opts._cacheValues && lastTweensContainer && lastTweensContainer[property]){if(startValue === undefined){startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;} /* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
								 instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
								 attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */rootPropertyValue = data.rootPropertyValueCache[rootProperty]; /* If values were not transferred from a previous Velocity call, query the DOM as needed. */}else { /* Handle hooked properties. */if(CSS.Hooks.registered[property]){if(startValue === undefined){rootPropertyValue = CSS.getPropertyValue(element,rootProperty); /* GET */ /* Note: The following getPropertyValue() call does not actually trigger a DOM query;
										 getPropertyValue() will extract the hook from rootPropertyValue. */startValue = CSS.getPropertyValue(element,property,rootPropertyValue); /* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;
										 just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual
										 root property value (if one is set), but this is acceptable since the primary reason users forcefeed is
										 to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */}else { /* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */rootPropertyValue = CSS.Hooks.templates[rootProperty][1];} /* Handle non-hooked properties that haven't already been defined via forcefeeding. */}else if(startValue === undefined){startValue = CSS.getPropertyValue(element,property); /* GET */}} /**************************
							 Value Data Extraction
							 **************************/var separatedValue,endValueUnitType,startValueUnitType,operator=false; /* Separates a property value into its numeric value and its unit type. */var separateValue=function separateValue(property,value){var unitType,numericValue;numericValue = (value || "0").toString().toLowerCase() /* Match the unit type at the end of the value. */.replace(/[%A-z]+$/,function(match){ /* Grab the unit type. */unitType = match; /* Strip the unit type off of value. */return "";}); /* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */if(!unitType){unitType = CSS.Values.getUnitType(property);}return [numericValue,unitType];};if(startValue !== endValue && Type.isString(startValue) && Type.isString(endValue)){pattern = "";var iStart=0, // index in startValue
iEnd=0, // index in endValue
aStart=[], // array of startValue numbers
aEnd=[], // array of endValue numbers
inCalc=0, // Keep track of being inside a "calc()" so we don't duplicate it
inRGB=0, // Keep track of being inside an RGB as we can't use fractional values
inRGBA=0; // Keep track of being inside an RGBA as we must pass fractional for the alpha channel
startValue = CSS.Hooks.fixColors(startValue);endValue = CSS.Hooks.fixColors(endValue);while(iStart < startValue.length && iEnd < endValue.length) {var cStart=startValue[iStart],cEnd=endValue[iEnd];if(/[\d\.-]/.test(cStart) && /[\d\.-]/.test(cEnd)){var tStart=cStart, // temporary character buffer
tEnd=cEnd, // temporary character buffer
dotStart=".", // Make sure we can only ever match a single dot in a decimal
dotEnd="."; // Make sure we can only ever match a single dot in a decimal
while(++iStart < startValue.length) {cStart = startValue[iStart];if(cStart === dotStart){dotStart = ".."; // Can never match two characters
}else if(!/\d/.test(cStart)){break;}tStart += cStart;}while(++iEnd < endValue.length) {cEnd = endValue[iEnd];if(cEnd === dotEnd){dotEnd = ".."; // Can never match two characters
}else if(!/\d/.test(cEnd)){break;}tEnd += cEnd;}var uStart=CSS.Hooks.getUnit(startValue,iStart), // temporary unit type
uEnd=CSS.Hooks.getUnit(endValue,iEnd); // temporary unit type
iStart += uStart.length;iEnd += uEnd.length;if(uStart === uEnd){ // Same units
if(tStart === tEnd){ // Same numbers, so just copy over
pattern += tStart + uStart;}else { // Different numbers, so store them
pattern += "{" + aStart.length + (inRGB?"!":"") + "}" + uStart;aStart.push(parseFloat(tStart));aEnd.push(parseFloat(tEnd));}}else { // Different units, so put into a "calc(from + to)" and animate each side to/from zero
var nStart=parseFloat(tStart),nEnd=parseFloat(tEnd);pattern += (inCalc < 5?"calc":"") + "(" + (nStart?"{" + aStart.length + (inRGB?"!":"") + "}":"0") + uStart + " + " + (nEnd?"{" + (aStart.length + (nStart?1:0)) + (inRGB?"!":"") + "}":"0") + uEnd + ")";if(nStart){aStart.push(nStart);aEnd.push(0);}if(nEnd){aStart.push(0);aEnd.push(nEnd);}}}else if(cStart === cEnd){pattern += cStart;iStart++;iEnd++; // Keep track of being inside a calc()
if(inCalc === 0 && cStart === "c" || inCalc === 1 && cStart === "a" || inCalc === 2 && cStart === "l" || inCalc === 3 && cStart === "c" || inCalc >= 4 && cStart === "("){inCalc++;}else if(inCalc && inCalc < 5 || inCalc >= 4 && cStart === ")" && --inCalc < 5){inCalc = 0;} // Keep track of being inside an rgb() / rgba()
if(inRGB === 0 && cStart === "r" || inRGB === 1 && cStart === "g" || inRGB === 2 && cStart === "b" || inRGB === 3 && cStart === "a" || inRGB >= 3 && cStart === "("){if(inRGB === 3 && cStart === "a"){inRGBA = 1;}inRGB++;}else if(inRGBA && cStart === ","){if(++inRGBA > 3){inRGB = inRGBA = 0;}}else if(inRGBA && inRGB < (inRGBA?5:4) || inRGB >= (inRGBA?4:3) && cStart === ")" && --inRGB < (inRGBA?5:4)){inRGB = inRGBA = 0;}}else {inCalc = 0; // TODO: changing units, fixing colours
break;}}if(iStart !== startValue.length || iEnd !== endValue.length){if(Velocity.debug){console.error("Trying to pattern match mis-matched strings [\"" + endValue + "\", \"" + startValue + "\"]");}pattern = undefined;}if(pattern){if(aStart.length){if(Velocity.debug){console.log("Pattern found \"" + pattern + "\" -> ",aStart,aEnd,"[" + startValue + "," + endValue + "]");}startValue = aStart;endValue = aEnd;endValueUnitType = startValueUnitType = "";}else {pattern = undefined;}}}if(!pattern){ /* Separate startValue. */separatedValue = separateValue(property,startValue);startValue = separatedValue[0];startValueUnitType = separatedValue[1]; /* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */separatedValue = separateValue(property,endValue);endValue = separatedValue[0].replace(/^([+-\/*])=/,function(match,subMatch){operator = subMatch; /* Strip the operator off of the value. */return "";});endValueUnitType = separatedValue[1]; /* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */startValue = parseFloat(startValue) || 0;endValue = parseFloat(endValue) || 0; /***************************************
								 Property-Specific Value Conversion
								 ***************************************/ /* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */if(endValueUnitType === "%"){ /* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
									 which is identical to the em unit's behavior, so we piggyback off of that. */if(/^(fontSize|lineHeight)$/.test(property)){ /* Convert % into an em decimal value. */endValue = endValue / 100;endValueUnitType = "em"; /* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */}else if(/^scale/.test(property)){endValue = endValue / 100;endValueUnitType = ""; /* For RGB components, take the defined percentage of 255 and strip off the unit type. */}else if(/(Red|Green|Blue)$/i.test(property)){endValue = endValue / 100 * 255;endValueUnitType = "";}}} /***************************
							 Unit Ratio Calculation
							 ***************************/ /* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
							 %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
							 for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
							 from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
							 1) Calculating the ratio of %/em/rem/vh/vw relative to pixels
							 2) Converting startValue into the same unit of measurement as endValue based on these ratios. */ /* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
							 setting values with the target unit type then comparing the returned pixel value. */ /* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
							 of batching the SETs and GETs together upfront outweights the potential overhead
							 of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */ /* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */var calculateUnitRatios=function calculateUnitRatios(){ /************************
								 Same Ratio Checks
								 ************************/ /* The properties below are used to determine whether the element differs sufficiently from this call's
								 previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
								 of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
								 this is done to minimize DOM querying. */var sameRatioIndicators={myParent:element.parentNode || document.body, /* GET */position:CSS.getPropertyValue(element,"position"), /* GET */fontSize:CSS.getPropertyValue(element,"fontSize") /* GET */}, /* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */samePercentRatio=sameRatioIndicators.position === callUnitConversionData.lastPosition && sameRatioIndicators.myParent === callUnitConversionData.lastParent, /* Determine if the same em ratio can be used. em is relative to the element's fontSize. */sameEmRatio=sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize; /* Store these ratio indicators call-wide for the next element to compare against. */callUnitConversionData.lastParent = sameRatioIndicators.myParent;callUnitConversionData.lastPosition = sameRatioIndicators.position;callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize; /***************************
								 Element-Specific Units
								 ***************************/ /* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
								 of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */var measurement=100,unitRatios={};if(!sameEmRatio || !samePercentRatio){var dummy=data && data.isSVG?document.createElementNS("http://www.w3.org/2000/svg","rect"):document.createElement("div");Velocity.init(dummy);sameRatioIndicators.myParent.appendChild(dummy); /* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
									 Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */ /* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */$.each(["overflow","overflowX","overflowY"],function(i,property){Velocity.CSS.setPropertyValue(dummy,property,"hidden");});Velocity.CSS.setPropertyValue(dummy,"position",sameRatioIndicators.position);Velocity.CSS.setPropertyValue(dummy,"fontSize",sameRatioIndicators.fontSize);Velocity.CSS.setPropertyValue(dummy,"boxSizing","content-box"); /* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */$.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(i,property){Velocity.CSS.setPropertyValue(dummy,property,measurement + "%");}); /* paddingLeft arbitrarily acts as our proxy property for the em ratio. */Velocity.CSS.setPropertyValue(dummy,"paddingLeft",measurement + "em"); /* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy,"width",null,true)) || 1) / measurement; /* GET */unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy,"height",null,true)) || 1) / measurement; /* GET */unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy,"paddingLeft")) || 1) / measurement; /* GET */sameRatioIndicators.myParent.removeChild(dummy);}else {unitRatios.emToPx = callUnitConversionData.lastEmToPx;unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;} /***************************
								 Element-Agnostic Units
								 ***************************/ /* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
								 once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
								 that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
								 so we calculate it now. */if(callUnitConversionData.remToPx === null){ /* Default to browsers' default fontSize of 16px in the case of 0. */callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body,"fontSize")) || 16; /* GET */} /* Similarly, viewport units are %-relative to the window's inner dimensions. */if(callUnitConversionData.vwToPx === null){callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */}unitRatios.remToPx = callUnitConversionData.remToPx;unitRatios.vwToPx = callUnitConversionData.vwToPx;unitRatios.vhToPx = callUnitConversionData.vhToPx;if(Velocity.debug >= 1){console.log("Unit ratios: " + JSON.stringify(unitRatios),element);}return unitRatios;}; /********************
							 Unit Conversion
							 ********************/ /* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */if(/[\/*]/.test(operator)){endValueUnitType = startValueUnitType; /* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
								 is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
								 on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
								 would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */ /* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */}else if(startValueUnitType !== endValueUnitType && startValue !== 0){ /* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */ /* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
								 match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
								 which remains past the point of the animation's completion. */if(endValue === 0){endValueUnitType = startValueUnitType;}else { /* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
									 If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */elementUnitConversionData = elementUnitConversionData || calculateUnitRatios(); /* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */ /* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */var axis=/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x"?"x":"y"; /* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
									 1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */switch(startValueUnitType){case "%": /* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
											 Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
											 to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */startValue *= axis === "x"?elementUnitConversionData.percentToPxWidth:elementUnitConversionData.percentToPxHeight;break;case "px": /* px acts as our midpoint in the unit conversion process; do nothing. */break;default:startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];} /* Invert the px ratios to convert into to the target unit. */switch(endValueUnitType){case "%":startValue *= 1 / (axis === "x"?elementUnitConversionData.percentToPxWidth:elementUnitConversionData.percentToPxHeight);break;case "px": /* startValue is already in px, do nothing; we're done. */break;default:startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];}}} /*********************
							 Relative Values
							 *********************/ /* Operator logic must be performed last since it requires unit-normalized start and end values. */ /* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
							 to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
							 50 points is added on top of the current % value. */switch(operator){case "+":endValue = startValue + endValue;break;case "-":endValue = startValue - endValue;break;case "*":endValue = startValue * endValue;break;case "/":endValue = startValue / endValue;break;} /**************************
							 tweensContainer Push
							 **************************/ /* Construct the per-property tween object, and push it to the element's tweensContainer. */tweensContainer[property] = {rootPropertyValue:rootPropertyValue,startValue:startValue,currentValue:startValue,endValue:endValue,unitType:endValueUnitType,easing:easing};if(pattern){tweensContainer[property].pattern = pattern;}if(Velocity.debug){console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]),element);}}; /* Create a tween out of each property, and append its associated data to tweensContainer. */for(var property in propertiesMap) {if(!propertiesMap.hasOwnProperty(property)){continue;} /* The original property name's format must be used for the parsePropertyValue() lookup,
							 but we then use its camelCase styling to normalize it for manipulation. */var propertyName=CSS.Names.camelCase(property),valueData=parsePropertyValue(propertiesMap[property]); /* Find shorthand color properties that have been passed a hex string. */ /* Would be quicker to use CSS.Lists.colors.includes() if possible */if(_inArray(CSS.Lists.colors,propertyName)){ /* Parse the value data for each shorthand. */var endValue=valueData[0],easing=valueData[1],startValue=valueData[2];if(CSS.RegEx.isHex.test(endValue)){ /* Convert the hex strings into their RGB component arrays. */var colorComponents=["Red","Green","Blue"],endValueRGB=CSS.Values.hexToRgb(endValue),startValueRGB=startValue?CSS.Values.hexToRgb(startValue):undefined; /* Inject the RGB component tweens into propertiesMap. */for(var i=0;i < colorComponents.length;i++) {var dataArray=[endValueRGB[i]];if(easing){dataArray.push(easing);}if(startValueRGB !== undefined){dataArray.push(startValueRGB[i]);}fixPropertyValue(propertyName + colorComponents[i],dataArray);} /* If we have replaced a shortcut color value then don't update the standard property name */continue;}}fixPropertyValue(propertyName,valueData);} /* Along with its property data, store a reference to the element itself onto tweensContainer. */tweensContainer.element = element;} /*****************
					 Call Push
					 *****************/ /* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
					 being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */if(tweensContainer.element){ /* Apply the "velocity-animating" indicator class. */CSS.Values.addClass(element,"velocity-animating"); /* The call array houses the tweensContainers for each element being animated in the current call. */call.push(tweensContainer);data = Data(element);if(data){ /* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */if(opts.queue === ""){data.tweensContainer = tweensContainer;data.opts = opts;} /* Switch on the element's animating flag. */data.isAnimating = true;} /* Once the final element in this call's element set has been processed, push the call array onto
						 Velocity.State.calls for the animation tick to immediately begin processing. */if(elementsIndex === elementsLength - 1){ /* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
							 Anything on this call container is subjected to tick() processing. */Velocity.State.calls.push([call,elements,opts,null,promiseData.resolver,null,0]); /* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */if(Velocity.State.isTicking === false){Velocity.State.isTicking = true; /* Start the tick loop. */tick();}}else {elementsIndex++;}}} /* When the queue option is set to false, the call skips the element's queue and fires immediately. */if(opts.queue === false){ /* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
					 we manually inject the delay property here with an explicit setTimeout. */if(opts.delay){ /* Temporarily store delayed elements to facilitate access for global pause/resume */var callIndex=Velocity.State.delayedElements.count++;Velocity.State.delayedElements[callIndex] = element;var delayComplete=(function(index){return function(){ /* Clear the temporary element */Velocity.State.delayedElements[index] = false; /* Finally, issue the call */buildQueue();};})(callIndex);Data(element).delayBegin = new Date().getTime();Data(element).delay = parseFloat(opts.delay);Data(element).delayTimer = {setTimeout:setTimeout(buildQueue,parseFloat(opts.delay)),next:delayComplete};}else {buildQueue();} /* Otherwise, the call undergoes element queueing as normal. */ /* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */}else {$.queue(element,opts.queue,function(next,clearQueue){ /* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
						 so it's fine if this is repeatedly triggered for each element in the associated call.) */if(clearQueue === true){if(promiseData.promise){promiseData.resolver(elements);} /* Do not continue with animation queueing. */return true;} /* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
						 See completeCall() for further details. */Velocity.velocityQueueEntryFlag = true;buildQueue(next);});} /*********************
				 Auto-Dequeuing
				 *********************/ /* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element
				 must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
				 for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
				 queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
				 first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */ /* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
				 each one of the elements in the set has reached the end of its individually pre-existing queue chain. */ /* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.
				 Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */if((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress"){$.dequeue(element);}} /**************************
			 Element Set Iteration
			 **************************/ /* If the "nodeType" property exists on the elements variable, we're animating a single element.
			 Place it in an array so that $.each() can iterate over it. */$.each(elements,function(i,element){ /* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */if(Type.isNode(element)){processElement(element,i);}}); /******************
			 Option: Loop
			 ******************/ /* The loop option accepts an integer indicating how many times the element should loop between the values in the
			 current call's properties map and the element's property values prior to this call. */ /* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
			 to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
			 which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */opts = $.extend({},Velocity.defaults,options);opts.loop = parseInt(opts.loop,10);var reverseCallsCount=opts.loop * 2 - 1;if(opts.loop){ /* Double the loop count to convert it into its appropriate number of "reverse" calls.
				 Subtract 1 from the resulting value since the current call is included in the total alternation count. */for(var x=0;x < reverseCallsCount;x++) { /* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
					 isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
					 call so that the delay logic that occurs inside *Pre-Queueing* can process it. */var reverseOptions={delay:opts.delay,progress:opts.progress}; /* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
					 so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */if(x === reverseCallsCount - 1){reverseOptions.display = opts.display;reverseOptions.visibility = opts.visibility;reverseOptions.complete = opts.complete;}animate(elements,"reverse",reverseOptions);}} /***************
			 Chaining
			 ***************/ /* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */return getChain();}; /* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */Velocity = $.extend(animate,Velocity); /* For legacy support, also expose the literal animate method. */Velocity.animate = animate; /**************
		 Timing
		 **************/ /* Ticker function. */var ticker=window.requestAnimationFrame || rAFShim; /* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
		 To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
		 devices to avoid wasting battery power on inactive tabs. */ /* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */if(!Velocity.State.isMobile && document.hidden !== undefined){var updateTicker=function updateTicker(){ /* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */if(document.hidden){ticker = function(callback){ /* The tick function needs a truthy first argument in order to pass its internal timestamp check. */return setTimeout(function(){callback(true);},16);}; /* The rAF loop has been paused by the browser, so we manually restart the tick. */tick();}else {ticker = window.requestAnimationFrame || rAFShim;}}; /* Page could be sitting in the background at this time (i.e. opened as new tab) so making sure we use correct ticker from the start */updateTicker(); /* And then run check again every time visibility changes */document.addEventListener("visibilitychange",updateTicker);} /************
		 Tick
		 ************/ /* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */function tick(timestamp){ /* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
			 We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
			 the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
			 calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
			 the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
			 by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */if(timestamp){ /* We normally use RAF's high resolution timestamp but as it can be significantly offset when the browser is
				 under high stress we give the option for choppiness over allowing the browser to drop huge chunks of frames.
				 We use performance.now() and shim it if it doesn't exist for when the tab is hidden. */var timeCurrent=Velocity.timestamp && timestamp !== true?timestamp:performance.now(); /********************
				 Call Iteration
				 ********************/var callsLength=Velocity.State.calls.length; /* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
				 when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
				 has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */if(callsLength > 10000){Velocity.State.calls = compactSparseArray(Velocity.State.calls);callsLength = Velocity.State.calls.length;} /* Iterate through each active call. */for(var i=0;i < callsLength;i++) { /* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */if(!Velocity.State.calls[i]){continue;} /************************
					 Call-Wide Variables
					 ************************/var callContainer=Velocity.State.calls[i],call=callContainer[0],opts=callContainer[2],timeStart=callContainer[3],firstTick=!timeStart,tweenDummyValue=null,pauseObject=callContainer[5],millisecondsEllapsed=callContainer[6]; /* If timeStart is undefined, then this is the first time that this call has been processed by tick().
					 We assign timeStart now so that its value is as close to the real animation start time as possible.
					 (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
					 between that time and now would cause the first few frames of the tween to be skipped since
					 percentComplete is calculated relative to timeStart.) */ /* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
					 first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
					 same style value as the element's current value. */if(!timeStart){timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;} /* If a pause object is present, skip processing unless it has been set to resume */if(pauseObject){if(pauseObject.resume === true){ /* Update the time start to accomodate the paused completion amount */timeStart = callContainer[3] = Math.round(timeCurrent - millisecondsEllapsed - 16); /* Remove pause object after processing */callContainer[5] = null;}else {continue;}}millisecondsEllapsed = callContainer[6] = timeCurrent - timeStart; /* The tween's completion percentage is relative to the tween's start time, not the tween's start value
					 (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
					 Accordingly, we ensure that percentComplete does not exceed 1. */var percentComplete=Math.min(millisecondsEllapsed / opts.duration,1); /**********************
					 Element Iteration
					 **********************/ /* For every call, iterate through each of the elements in its set. */for(var j=0,callLength=call.length;j < callLength;j++) {var tweensContainer=call[j],element=tweensContainer.element; /* Check to see if this element has been deleted midway through the animation by checking for the
						 continued existence of its data cache. If it's gone, or the element is currently paused, skip animating this element. */if(!Data(element)){continue;}var transformPropertyExists=false; /**********************************
						 Display & Visibility Toggling
						 **********************************/ /* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
						 (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */if(opts.display !== undefined && opts.display !== null && opts.display !== "none"){if(opts.display === "flex"){var flexValues=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];$.each(flexValues,function(i,flexValue){CSS.setPropertyValue(element,"display",flexValue);});}CSS.setPropertyValue(element,"display",opts.display);} /* Same goes with the visibility option, but its "none" equivalent is "hidden". */if(opts.visibility !== undefined && opts.visibility !== "hidden"){CSS.setPropertyValue(element,"visibility",opts.visibility);} /************************
						 Property Iteration
						 ************************/ /* For every element, iterate through each property. */for(var property in tweensContainer) { /* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */if(tweensContainer.hasOwnProperty(property) && property !== "element"){var tween=tweensContainer[property],currentValue, /* Easing can either be a pre-genereated function or a string that references a pre-registered easing
										 on the Velocity.Easings object. In either case, return the appropriate easing *function*. */easing=Type.isString(tween.easing)?Velocity.Easings[tween.easing]:tween.easing; /******************************
								 Current Value Calculation
								 ******************************/if(Type.isString(tween.pattern)){var patternReplace=percentComplete === 1?function($0,index,round){var result=tween.endValue[index];return round?Math.round(result):result;}:function($0,index,round){var startValue=tween.startValue[index],tweenDelta=tween.endValue[index] - startValue,result=startValue + tweenDelta * easing(percentComplete,opts,tweenDelta);return round?Math.round(result):result;};currentValue = tween.pattern.replace(/{(\d+)(!)?}/g,patternReplace);}else if(percentComplete === 1){ /* If this is the last tick pass (if we've reached 100% completion for this tween),
									 ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */currentValue = tween.endValue;}else { /* Otherwise, calculate currentValue based on the current delta from startValue. */var tweenDelta=tween.endValue - tween.startValue;currentValue = tween.startValue + tweenDelta * easing(percentComplete,opts,tweenDelta); /* If no value change is occurring, don't proceed with DOM updating. */}if(!firstTick && currentValue === tween.currentValue){continue;}tween.currentValue = currentValue; /* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
								 it can be passed into the progress callback. */if(property === "tween"){tweenDummyValue = currentValue;}else { /******************
									 Hooks: Part I
									 ******************/var hookRoot; /* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
									 for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
									 rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
									 updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
									 subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */if(CSS.Hooks.registered[property]){hookRoot = CSS.Hooks.getRoot(property);var rootPropertyValueCache=Data(element).rootPropertyValueCache[hookRoot];if(rootPropertyValueCache){tween.rootPropertyValue = rootPropertyValueCache;}} /*****************
									 DOM Update
									 *****************/ /* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */ /* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */var adjustedSetData=CSS.setPropertyValue(element, /* SET */property,tween.currentValue + (IE < 9 && parseFloat(currentValue) === 0?"":tween.unitType),tween.rootPropertyValue,tween.scrollData); /*******************
									 Hooks: Part II
									 *******************/ /* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */if(CSS.Hooks.registered[property]){ /* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */if(CSS.Normalizations.registered[hookRoot]){Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract",null,adjustedSetData[1]);}else {Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];}} /***************
									 Transforms
									 ***************/ /* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */if(adjustedSetData[0] === "transform"){transformPropertyExists = true;}}}} /****************
						 mobileHA
						 ****************/ /* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
						 It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */if(opts.mobileHA){ /* Don't set the null transform hack if we've already done so. */if(Data(element).transformCache.translate3d === undefined){ /* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */Data(element).transformCache.translate3d = "(0px, 0px, 0px)";transformPropertyExists = true;}}if(transformPropertyExists){CSS.flushTransformCache(element);}} /* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
					 Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */if(opts.display !== undefined && opts.display !== "none"){Velocity.State.calls[i][2].display = false;}if(opts.visibility !== undefined && opts.visibility !== "hidden"){Velocity.State.calls[i][2].visibility = false;} /* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */if(opts.progress){opts.progress.call(callContainer[1],callContainer[1],percentComplete,Math.max(0,timeStart + opts.duration - timeCurrent),timeStart,tweenDummyValue);} /* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */if(percentComplete === 1){completeCall(i);}}} /* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */if(Velocity.State.isTicking){ticker(tick);}} /**********************
		 Call Completion
		 **********************/ /* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */function completeCall(callIndex,isStopped){ /* Ensure the call exists. */if(!Velocity.State.calls[callIndex]){return false;} /* Pull the metadata from the call. */var call=Velocity.State.calls[callIndex][0],elements=Velocity.State.calls[callIndex][1],opts=Velocity.State.calls[callIndex][2],resolver=Velocity.State.calls[callIndex][4];var remainingCallsExist=false; /*************************
			 Element Finalization
			 *************************/for(var i=0,callLength=call.length;i < callLength;i++) {var element=call[i].element; /* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */ /* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */ /* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */if(!isStopped && !opts.loop){if(opts.display === "none"){CSS.setPropertyValue(element,"display",opts.display);}if(opts.visibility === "hidden"){CSS.setPropertyValue(element,"visibility",opts.visibility);}} /* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
				 a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
				 an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
				 we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
				 is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */var data=Data(element);if(opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))){ /* The element may have been deleted. Ensure that its data cache still exists before acting on it. */if(data){data.isAnimating = false; /* Clear the element's rootPropertyValueCache, which will become stale. */data.rootPropertyValueCache = {};var transformHAPropertyExists=false; /* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */$.each(CSS.Lists.transforms3D,function(i,transformName){var defaultValue=/^scale/.test(transformName)?1:0,currentValue=data.transformCache[transformName];if(data.transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)){transformHAPropertyExists = true;delete data.transformCache[transformName];}}); /* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */if(opts.mobileHA){transformHAPropertyExists = true;delete data.transformCache.translate3d;} /* Flush the subproperty removals to the DOM. */if(transformHAPropertyExists){CSS.flushTransformCache(element);} /* Remove the "velocity-animating" indicator class. */CSS.Values.removeClass(element,"velocity-animating");}} /*********************
				 Option: Complete
				 *********************/ /* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */ /* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */if(!isStopped && opts.complete && !opts.loop && i === callLength - 1){ /* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */try{opts.complete.call(elements,elements);}catch(error) {setTimeout(function(){throw error;},1);}} /**********************
				 Promise Resolving
				 **********************/ /* Note: Infinite loops don't return promises. */if(resolver && opts.loop !== true){resolver(elements);} /****************************
				 Option: Loop (Infinite)
				 ****************************/if(data && opts.loop === true && !isStopped){ /* If a rotateX/Y/Z property is being animated by 360 deg with loop:true, swap tween start/end values to enable
					 continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */$.each(data.tweensContainer,function(propertyName,tweenContainer){if(/^rotate/.test(propertyName) && (parseFloat(tweenContainer.startValue) - parseFloat(tweenContainer.endValue)) % 360 === 0){var oldStartValue=tweenContainer.startValue;tweenContainer.startValue = tweenContainer.endValue;tweenContainer.endValue = oldStartValue;}if(/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%"){tweenContainer.endValue = 0;tweenContainer.startValue = 100;}});Velocity(element,"reverse",{loop:true,delay:opts.delay});} /***************
				 Dequeueing
				 ***************/ /* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
				 which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
				 $.dequeue() must still be called in order to completely clear jQuery's animation queue. */if(opts.queue !== false){$.dequeue(element,opts.queue);}} /************************
			 Calls Array Cleanup
			 ************************/ /* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
			 (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */Velocity.State.calls[callIndex] = false; /* Iterate through the calls array to determine if this was the final in-progress animation.
			 If so, set a flag to end ticking and clear the calls array. */for(var j=0,callsLength=Velocity.State.calls.length;j < callsLength;j++) {if(Velocity.State.calls[j] !== false){remainingCallsExist = true;break;}}if(remainingCallsExist === false){ /* tick() will detect this flag upon its next iteration and subsequently turn itself off. */Velocity.State.isTicking = false; /* Clear the calls array so that its length is reset. */delete Velocity.State.calls;Velocity.State.calls = [];}} /******************
		 Frameworks
		 ******************/ /* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
		 If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
		 also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
		 accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
		 (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */global.Velocity = Velocity;if(global !== window){ /* Assign the element function to Velocity's core animate() method. */global.fn.velocity = animate; /* Assign the object function's defaults to Velocity's global defaults object. */global.fn.velocity.defaults = Velocity.defaults;} /***********************
		 Packaged Redirects
		 ***********************/ /* slideUp, slideDown */$.each(["Down","Up"],function(i,direction){Velocity.Redirects["slide" + direction] = function(element,options,elementsIndex,elementsSize,elements,promiseData){var opts=$.extend({},options),begin=opts.begin,complete=opts.complete,inlineValues={},computedValues={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""};if(opts.display === undefined){ /* Show the element before slideDown begins and hide the element after slideUp completes. */ /* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */opts.display = direction === "Down"?Velocity.CSS.Values.getDisplayType(element) === "inline"?"inline-block":"block":"none";}opts.begin = function(){ /* If the user passed in a begin callback, fire it now. */if(elementsIndex === 0 && begin){begin.call(elements,elements);} /* Cache the elements' original vertical dimensional property values so that we can animate back to them. */for(var property in computedValues) {if(!computedValues.hasOwnProperty(property)){continue;}inlineValues[property] = element.style[property]; /* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
						 use forcefeeding to start from computed values and animate down to 0. */var propertyValue=CSS.getPropertyValue(element,property);computedValues[property] = direction === "Down"?[propertyValue,0]:[0,propertyValue];} /* Force vertical overflow content to clip so that sliding works as expected. */inlineValues.overflow = element.style.overflow;element.style.overflow = "hidden";};opts.complete = function(){ /* Reset element to its pre-slide inline values once its slide animation is complete. */for(var property in inlineValues) {if(inlineValues.hasOwnProperty(property)){element.style[property] = inlineValues[property];}} /* If the user passed in a complete callback, fire it now. */if(elementsIndex === elementsSize - 1){if(complete){complete.call(elements,elements);}if(promiseData){promiseData.resolver(elements);}}};Velocity(element,computedValues,opts);};}); /* fadeIn, fadeOut */$.each(["In","Out"],function(i,direction){Velocity.Redirects["fade" + direction] = function(element,options,elementsIndex,elementsSize,elements,promiseData){var opts=$.extend({},options),complete=opts.complete,propertiesMap={opacity:direction === "In"?1:0}; /* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
				 callbacks by firing them only when the final element has been reached. */if(elementsIndex !== 0){opts.begin = null;}if(elementsIndex !== elementsSize - 1){opts.complete = null;}else {opts.complete = function(){if(complete){complete.call(elements,elements);}if(promiseData){promiseData.resolver(elements);}};} /* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */ /* Note: We allow users to pass in "null" to skip display setting altogether. */if(opts.display === undefined){opts.display = direction === "In"?"auto":"none";}Velocity(this,propertiesMap,opts);};});return Velocity;})(window.jQuery || window.Zepto || window,window,window?window.document:undefined);}); /******************
 Known Issues
 ******************/ /* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.
 Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties
 will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */ /* Browser support: Using this shim instead of jQuery proper removes support for IE8. */ // and will not fail on other DOM objects (as do DOM elements in IE < 9)

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var g;

// This works in non-strict mode
g = (function () {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

__webpack_require__(32);

__webpack_require__(24);

__webpack_require__(27);

__webpack_require__(23);

__webpack_require__(28);

var _swiper = __webpack_require__(30);

var _swiper2 = _interopRequireDefault(_swiper);

__webpack_require__(22);

__webpack_require__(11);

__webpack_require__(17);

__webpack_require__(20);

__webpack_require__(21);

__webpack_require__(10);

var _componentsDropDown = __webpack_require__(2);

var _componentsDropDown2 = _interopRequireDefault(_componentsDropDown);

var _componentsForm = __webpack_require__(13);

var _componentsForm2 = _interopRequireDefault(_componentsForm);

var _componentsProductMiniature = __webpack_require__(3);

var _componentsProductMiniature2 = _interopRequireDefault(_componentsProductMiniature);

var _componentsProductSelect = __webpack_require__(14);

var _componentsProductSelect2 = _interopRequireDefault(_componentsProductSelect);

var _componentsTopMenu = __webpack_require__(16);

var _componentsTopMenu2 = _interopRequireDefault(_componentsTopMenu);

var _componentsSearchBar = __webpack_require__(15);

var _componentsSearchBar2 = _interopRequireDefault(_componentsSearchBar);

var _prestashop = __webpack_require__(1);

var _prestashop2 = _interopRequireDefault(_prestashop);

var _events = __webpack_require__(26);

var _events2 = _interopRequireDefault(_events);

__webpack_require__(18);

__webpack_require__(19);

__webpack_require__(12);

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

// "inherit" EventEmitter
for (var i in _events2['default'].prototype) {
	_prestashop2['default'][i] = _events2['default'].prototype[i];
}

(0, _jquery2['default'])(document).ready(function () {
	var dropDownEl = (0, _jquery2['default'])('.js-dropdown');
	var form = new _componentsForm2['default']();
	var topMenuEl = (0, _jquery2['default'])('.js-top-menu ul[data-depth="0"]');

	var dropDown = new _componentsDropDown2['default'](dropDownEl);
	var topMenu = new _componentsTopMenu2['default'](topMenuEl);
	var productMinitature = new _componentsProductMiniature2['default']();
	var productSelect = new _componentsProductSelect2['default']();
	var searchBar = new _componentsSearchBar2['default']();

	dropDown.init();
	form.init();
	topMenu.init();
	productMinitature.init();
	productSelect.init();
	searchBar.init();

	if (_prestashop2['default'].configuration.is_catalog) {
		(0, _jquery2['default'])("*[id^='_(desktop|mobile)_cart']").each(function (idx, el) {
			el.remove();
		});
	}

	var swiper = new _swiper2['default']('.swiper-container', {
		navigation: {
			nextEl: '.swiper-btn-next',
			prevEl: '.swiper-btn-prev'
		},

		slidesPerView: 1,
		spaceBetween: 10,

		breakpoints: {
			576: {
				slidesPerView: 2
			},
			768: {
				slidesPerView: 4
			}
		}
	});

	(0, _jquery2['default'])('.carousel[data-touch="true"]').swipe({
		swipe: function swipe(event, direction, distance, duration, fingerCount, fingerData) {
			if (direction == 'left') {
				(0, _jquery2['default'])(this).carousel('next');
			}
			if (direction == 'right') {
				(0, _jquery2['default'])(this).carousel('prev');
			}
		},
		allowPageScroll: 'vertical'
	});
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \n            @include btn-tertiary;\n                    ^\n      No mixin named btn-tertiary\n      in /home/randy/Documents/AutomotiveSalesTheme/_dev/css/components/featuredproducts.scss (line 170, column 22)\n    at runLoaders (/home/randy/Documents/AutomotiveSalesTheme/_dev/node_modules/webpack/lib/NormalModule.js:192:19)\n    at /home/randy/Documents/AutomotiveSalesTheme/_dev/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /home/randy/Documents/AutomotiveSalesTheme/_dev/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/home/randy/Documents/AutomotiveSalesTheme/_dev/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (/home/randy/Documents/AutomotiveSalesTheme/_dev/node_modules/sass-loader/lib/loader.js:55:13)\n    at Object.done [as callback] (/home/randy/Documents/AutomotiveSalesTheme/_dev/node_modules/neo-async/async.js:8067:18)\n    at options.error (/home/randy/Documents/AutomotiveSalesTheme/_dev/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _prestashop = __webpack_require__(1);

var _prestashop2 = _interopRequireDefault(_prestashop);

_prestashop2['default'].cart = _prestashop2['default'].cart || {};

_prestashop2['default'].cart.active_inputs = null;

var spinnerSelector = 'input[name="product-quantity-spin"]';
var hasError = false;
var isUpdateOperation = false;
var errorMsg = '';

/**
 * Attach Bootstrap TouchSpin event handlers
 */
function createSpin() {
  _jquery2['default'].each((0, _jquery2['default'])(spinnerSelector), function (index, spinner) {
    (0, _jquery2['default'])(spinner).TouchSpin({
      verticalbuttons: true,
      verticalupclass: 'fa fa-plus touchspin-up',
      verticaldownclass: 'fa fa-minus touchspin-down',
      buttondown_class: 'btn btn-touchspin js-touchspin js-increase-product-quantity',
      buttonup_class: 'btn btn-touchspin js-touchspin js-decrease-product-quantity',
      min: parseInt((0, _jquery2['default'])(spinner).attr('min'), 10),
      max: 1000000
    });
  });

  CheckUpdateQuantityOperations.switchErrorStat();
}

(0, _jquery2['default'])(document).ready(function () {
  var productLineInCartSelector = '.js-cart-line-product-quantity';
  var promises = [];

  _prestashop2['default'].on('updateCart', function () {
    (0, _jquery2['default'])('.quickview').modal('hide');
  });

  _prestashop2['default'].on('updatedCart', function () {
    createSpin();
  });

  createSpin();

  var $body = (0, _jquery2['default'])('body');

  function isTouchSpin(namespace) {
    return namespace === 'on.startupspin' || namespace === 'on.startdownspin';
  }

  function shouldIncreaseProductQuantity(namespace) {
    return namespace === 'on.startupspin';
  }

  function findCartLineProductQuantityInput($target) {
    var $input = $target.parents('.bootstrap-touchspin').find(productLineInCartSelector);

    if ($input.is(':focus')) {
      return null;
    }

    return $input;
  }

  function camelize(subject) {
    var actionTypeParts = subject.split('-');
    var i = undefined;
    var part = undefined;
    var camelizedSubject = '';

    for (i = 0; i < actionTypeParts.length; i++) {
      part = actionTypeParts[i];

      if (0 !== i) {
        part = part.substring(0, 1).toUpperCase() + part.substring(1);
      }

      camelizedSubject = camelizedSubject + part;
    }

    return camelizedSubject;
  }

  function parseCartAction($target, namespace) {
    if (!isTouchSpin(namespace)) {
      return {
        url: $target.attr('href'),
        type: camelize($target.data('link-action'))
      };
    }

    var $input = findCartLineProductQuantityInput($target);
    if (!$input) {
      return;
    }

    var cartAction = {};
    if (shouldIncreaseProductQuantity(namespace)) {
      cartAction = {
        url: $input.data('up-url'),
        type: 'increaseProductQuantity'
      };
    } else {
      cartAction = {
        url: $input.data('down-url'),
        type: 'decreaseProductQuantity'
      };
    }

    return cartAction;
  }

  var abortPreviousRequests = function abortPreviousRequests() {
    var promise;
    while (promises.length > 0) {
      promise = promises.pop();
      promise.abort();
    }
  };

  var getTouchSpinInput = function getTouchSpinInput($button) {
    return (0, _jquery2['default'])($button.parents('.bootstrap-touchspin').find('input'));
  };

  var handleCartAction = function handleCartAction(event) {
    event.preventDefault();

    var $target = (0, _jquery2['default'])(event.currentTarget);
    var dataset = event.currentTarget.dataset;

    var cartAction = parseCartAction($target, event.namespace);
    var requestData = {
      ajax: '1',
      action: 'update'
    };

    if (typeof cartAction === 'undefined') {
      return;
    }

    abortPreviousRequests();
    _jquery2['default'].ajax({
      url: cartAction.url,
      method: 'POST',
      data: requestData,
      dataType: 'json',
      beforeSend: function beforeSend(jqXHR) {
        promises.push(jqXHR);
      }
    }).then(function (resp) {
      CheckUpdateQuantityOperations.checkUpdateOpertation(resp);
      var $quantityInput = getTouchSpinInput($target);
      $quantityInput.val(resp.quantity);

      // Refresh cart preview
      _prestashop2['default'].emit('updateCart', {
        reason: dataset
      });
    }).fail(function (resp) {
      _prestashop2['default'].emit('handleError', {
        eventType: 'updateProductInCart',
        resp: resp,
        cartAction: cartAction.type
      });
    });
  };

  $body.on('click', '[data-link-action="delete-from-cart"], [data-link-action="remove-voucher"]', handleCartAction);

  $body.on('touchspin.on.startdownspin', spinnerSelector, handleCartAction);
  $body.on('touchspin.on.startupspin', spinnerSelector, handleCartAction);

  function sendUpdateQuantityInCartRequest(updateQuantityInCartUrl, requestData, $target) {
    abortPreviousRequests();

    return _jquery2['default'].ajax({
      url: updateQuantityInCartUrl,
      method: 'POST',
      data: requestData,
      dataType: 'json',
      beforeSend: function beforeSend(jqXHR) {
        promises.push(jqXHR);
      }
    }).then(function (resp) {
      CheckUpdateQuantityOperations.checkUpdateOpertation(resp);
      $target.val(resp.quantity);

      var dataset;
      if ($target && $target.dataset) {
        dataset = $target.dataset;
      } else {
        dataset = resp;
      }

      // Refresh cart preview
      _prestashop2['default'].emit('updateCart', {
        reason: dataset
      });
    }).fail(function (resp) {
      _prestashop2['default'].emit('handleError', { eventType: 'updateProductQuantityInCart', resp: resp });
    });
  }

  function getRequestData(quantity) {
    return {
      ajax: '1',
      qty: Math.abs(quantity),
      action: 'update',
      op: getQuantityChangeType(quantity)
    };
  }

  function getQuantityChangeType($quantity) {
    return $quantity > 0 ? 'up' : 'down';
  }

  function updateProductQuantityInCart(event) {
    var $target = (0, _jquery2['default'])(event.currentTarget);
    var updateQuantityInCartUrl = $target.data('update-url');
    var baseValue = $target.attr('value');

    // There should be a valid product quantity in cart
    var targetValue = $target.val();
    if (targetValue != parseInt(targetValue) || targetValue < 0 || isNaN(targetValue)) {
      $target.val(baseValue);
      return;
    }

    // There should be a new product quantity in cart
    var qty = targetValue - baseValue;
    if (qty === 0) {
      return;
    }

    $target.attr('value', targetValue);
    sendUpdateQuantityInCartRequest(updateQuantityInCartUrl, getRequestData(qty), $target);
  }

  $body.on('focusout keyup', productLineInCartSelector, function (event) {
    if (event.type === 'keyup') {
      if (event.keyCode === 13) {
        updateProductQuantityInCart(event);
      }
      return false;
    }

    updateProductQuantityInCart(event);
  });

  var $timeoutEffect = 400;

  $body.on('hidden.bs.collapse', '#promo-code', function () {
    (0, _jquery2['default'])('.display-promo').show($timeoutEffect);
  });

  $body.on('click', '.promo-code-button', function (event) {
    event.preventDefault();

    (0, _jquery2['default'])('#promo-code').collapse('toggle');
  });

  $body.on('click', '.display-promo', function (event) {
    (0, _jquery2['default'])(event.currentTarget).hide($timeoutEffect);
  });

  $body.on('click', '.js-discount .code', function (event) {
    event.stopPropagation();

    var $code = (0, _jquery2['default'])(event.currentTarget);
    var $discountInput = (0, _jquery2['default'])('[name=discount_name]');

    $discountInput.val($code.text());
    // Show promo code field
    (0, _jquery2['default'])('#promo-code').collapse('show');
    (0, _jquery2['default'])('.display-promo').hide($timeoutEffect);

    return false;
  });
});

var CheckUpdateQuantityOperations = {
  'switchErrorStat': function switchErrorStat() {
    /**
     * if errorMsg is not empty or if notifications are shown, we have error to display
     * if hasError is true, quantity was not updated : we don't disable checkout button
     */
    var $checkoutBtn = (0, _jquery2['default'])('.checkout a');
    if ((0, _jquery2['default'])("#notifications article.alert-danger").length || '' !== errorMsg && !hasError) {
      $checkoutBtn.addClass('disabled');
    }

    if ('' !== errorMsg) {
      var strError = ' <article class="alert alert-danger" role="alert" data-alert="danger"><ul><li>' + errorMsg + '</li></ul></article>';
      (0, _jquery2['default'])('#notifications .container').html(strError);
      errorMsg = '';
      isUpdateOperation = false;
      if (hasError) {
        // if hasError is true, quantity was not updated : allow checkout
        $checkoutBtn.removeClass('disabled');
      }
    } else if (!hasError && isUpdateOperation) {
      hasError = false;
      isUpdateOperation = false;
      (0, _jquery2['default'])('#notifications .container').html('');
      $checkoutBtn.removeClass('disabled');
    }
  },
  'checkUpdateOpertation': function checkUpdateOpertation(resp) {
    /**
     * resp.hasError can be not defined but resp.errors not empty: quantity is updated but order cannot be placed
     * when resp.hasError=true, quantity is not updated
     */
    hasError = resp.hasOwnProperty('hasError');
    var errors = resp.errors || "";
    // 1.7.2.x returns errors as string, 1.7.3.x returns array
    if (errors instanceof Array) {
      errorMsg = errors.join(" ");
    } else {
      errorMsg = errors;
    }

    isUpdateOperation = true;
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _prestashop = __webpack_require__(1);

var _prestashop2 = _interopRequireDefault(_prestashop);

function setUpCheckout() {
  (0, _jquery2['default'])('.js-terms a').on('click', function (event) {
    event.preventDefault();
    var url = (0, _jquery2['default'])(event.target).attr('href');
    if (url) {
      // TODO: Handle request if no pretty URL
      url += '?content_only=1';
      _jquery2['default'].get(url, function (content) {
        (0, _jquery2['default'])('#modal').find('.js-modal-content').html((0, _jquery2['default'])(content).find('.page-cms').contents());
      }).fail(function (resp) {
        _prestashop2['default'].emit('handleError', { eventType: 'clickTerms', resp: resp });
      });
    }

    (0, _jquery2['default'])('#modal').modal('show');
  });

  (0, _jquery2['default'])('.js-gift-checkbox').on('click', function (event) {
    (0, _jquery2['default'])('#gift').collapse('toggle');
  });
}

function toggleImage() {
  // Arrow show/hide details Checkout page
  (0, _jquery2['default'])('.card-block .cart-summary-products p a').on('click', function (icon) {
    icon = (0, _jquery2['default'])(this).find('i.fa');

    if (icon.hasClass('fa-chevron-down')) {
      icon.removeClass('fa-chevron-down');
      icon.addClass('fa-chevron-up');
    } else {
      icon.removeClass('fa-chevron-up');
      icon.addClass('fa-chevron-down');
    }
    // if (icon.text() == 'expand_more') {
    //   icon.text('expand_less');
    // } else {
    //   icon.text('expand_more');
    // }
  });
}

(0, _jquery2['default'])(document).ready(function () {
  if ((0, _jquery2['default'])('body#checkout').length === 1) {
    setUpCheckout();
    toggleImage();
  }

  _prestashop2['default'].on('updatedDeliveryForm', function (params) {
    if (typeof params.deliveryOption === 'undefined' || 0 === params.deliveryOption.length) {
      return;
    }
    // Hide all carrier extra content ...
    (0, _jquery2['default'])(".carrier-extra-content").hide();
    // and show the one related to the selected carrier
    params.deliveryOption.next(".carrier-extra-content").slideDown();
  });
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _prestashop = __webpack_require__(1);

var _prestashop2 = _interopRequireDefault(_prestashop);

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

_prestashop2['default'].blockcart = _prestashop2['default'].blockcart || {};

_prestashop2['default'].blockcart.showModal = function (html) {
  function getBlockCartModal() {
    return (0, _jquery2['default'])('#blockcart-modal');
  }

  var $blockCartModal = getBlockCartModal();
  if ($blockCartModal.length) {
    $blockCartModal.remove();
  }

  (0, _jquery2['default'])('body').append(html);

  $blockCartModal = getBlockCartModal();
  $blockCartModal.modal('show').on('hidden.bs.modal', function (event) {
    _prestashop2['default'].emit('updateProduct', {
      reason: event.currentTarget.dataset,
      event: event
    });
  });
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var Form = (function () {
  function Form() {
    _classCallCheck(this, Form);
  }

  _createClass(Form, [{
    key: 'init',
    value: function init() {
      this.parentFocus();
      this.togglePasswordVisibility();
    }
  }, {
    key: 'parentFocus',
    value: function parentFocus() {
      (0, _jquery2['default'])('.js-child-focus').focus(function () {
        (0, _jquery2['default'])(this).closest('.js-parent-focus').addClass('focus');
      });
      (0, _jquery2['default'])('.js-child-focus').focusout(function () {
        (0, _jquery2['default'])(this).closest('.js-parent-focus').removeClass('focus');
      });
    }
  }, {
    key: 'togglePasswordVisibility',
    value: function togglePasswordVisibility() {
      (0, _jquery2['default'])('button[data-action="show-password"]').on('click', function () {
        var elm = (0, _jquery2['default'])(this).closest('.input-group').children('input.js-visible-password');
        if (elm.attr('type') === 'password') {
          elm.attr('type', 'text');
          (0, _jquery2['default'])(this).text((0, _jquery2['default'])(this).data('textHide'));
        } else {
          elm.attr('type', 'password');
          (0, _jquery2['default'])(this).text((0, _jquery2['default'])(this).data('textShow'));
        }
      });
    }
  }]);

  return Form;
})();

exports['default'] = Form;
module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(5);

var ProductSelect = (function () {
  function ProductSelect() {
    _classCallCheck(this, ProductSelect);
  }

  _createClass(ProductSelect, [{
    key: 'init',
    value: function init() {
      var _this = this;

      var MAX_THUMBS = 5;
      var $arrows = (0, _jquery2['default'])('.js-modal-arrows');
      var $thumbnails = (0, _jquery2['default'])('.js-modal-product-images');

      (0, _jquery2['default'])('body').on('click', '.js-modal-thumb', function (event) {
        if ((0, _jquery2['default'])('.js-modal-thumb').hasClass('selected')) {
          (0, _jquery2['default'])('.js-modal-thumb').removeClass('selected');
        }
        (0, _jquery2['default'])(event.currentTarget).addClass('selected');
        (0, _jquery2['default'])('.js-modal-product-cover').attr('src', (0, _jquery2['default'])(event.target).data('image-large-src'));
        (0, _jquery2['default'])('.js-modal-product-cover').attr('title', (0, _jquery2['default'])(event.target).attr('title'));
        (0, _jquery2['default'])('.js-modal-product-cover').attr('alt', (0, _jquery2['default'])(event.target).attr('alt'));
      }).on('click', 'aside#thumbnails', function (event) {
        if (event.target.id == 'thumbnails') {
          (0, _jquery2['default'])('#product-modal').modal('hide');
        }
      });

      if ((0, _jquery2['default'])('.js-modal-product-images li').length <= MAX_THUMBS) {
        $arrows.css('opacity', '.2');
      } else {
        $arrows.on('click', function (event) {
          if ((0, _jquery2['default'])(event.target).hasClass('arrow-up') && $thumbnails.position().top < 0) {
            _this.move('up');
            (0, _jquery2['default'])('.js-modal-arrow-down').css('opacity', '1');
          } else if ((0, _jquery2['default'])(event.target).hasClass('arrow-down') && $thumbnails.position().top + $thumbnails.height() > (0, _jquery2['default'])('.js-modal-mask').height()) {
            _this.move('down');
            (0, _jquery2['default'])('.js-modal-arrow-up').css('opacity', '1');
          }
        });
      }
    }
  }, {
    key: 'move',
    value: function move(direction) {
      var THUMB_MARGIN = 10;
      var $thumbnails = (0, _jquery2['default'])('.js-modal-product-images');
      var thumbHeight = (0, _jquery2['default'])('.js-modal-product-images li img').height() + THUMB_MARGIN;
      var currentPosition = $thumbnails.position().top;
      $thumbnails.velocity({
        translateY: direction === 'up' ? currentPosition + thumbHeight : currentPosition - thumbHeight
      }, function () {
        if ($thumbnails.position().top >= 0) {
          (0, _jquery2['default'])('.js-modal-arrow-up').css('opacity', '.2');
        } else if ($thumbnails.position().top + $thumbnails.height() <= (0, _jquery2['default'])('.js-modal-mask').height()) {
          (0, _jquery2['default'])('.js-modal-arrow-down').css('opacity', '.2');
        }
      });
    }
  }]);

  return ProductSelect;
})();

exports['default'] = ProductSelect;
module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var SearchBar = (function () {
	function SearchBar() {
		_classCallCheck(this, SearchBar);
	}

	_createClass(SearchBar, [{
		key: 'init',
		value: function init() {
			var self = this;

			this.searchInitHeader();
			this.searchInit404();
		}
	}, {
		key: 'searchInitHeader',
		value: function searchInitHeader() {
			var container = (0, _jquery2['default'])('.header-nav .search-widget');
			var control = (0, _jquery2['default'])('.header-nav .search-widget .search-toggle');
			var submit = (0, _jquery2['default'])('.header-nav .search-widget .search-submit');
			var input = (0, _jquery2['default'])('.header-nav .search-widget .search-input');

			var icon_text_open = 'search';
			var icon_text_close = 'close';

			control.click(function (e) {
				(0, _jquery2['default'])('.header-nav .search-widget .search-input').toggleClass('d-none');

				container.toggleClass('-open');

				(0, _jquery2['default'])('.header-nav .search-widget .icon-toggle').fadeOut(250, function () {
					// if (container.hasClass('-open')) {
					// 	$(this).text(icon_text_close).fadeIn(250);
					// } else {
					// 	$(this).text(icon_text_open).fadeIn(250);
					// }
					(0, _jquery2['default'])(this).toggleClass('fa-search fa-times').fadeIn(250);
				});
			});
		}
	}, {
		key: 'searchInit404',
		value: function searchInit404() {
			var container = (0, _jquery2['default'])('.page-not-found .search-widget'),
			    input = (0, _jquery2['default'])('.page-not-found .search-widget .search-input'),
			    toggle = (0, _jquery2['default'])('.page-not-found .search-widget .search-toggle');

			input.toggleClass('d-none d-block');
			toggle.toggleClass('d-none');
		}
	}]);

	return SearchBar;
})();

exports['default'] = SearchBar;
module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _dropDown = __webpack_require__(2);

var _dropDown2 = _interopRequireDefault(_dropDown);

var TopMenu = (function (_DropDown) {
  _inherits(TopMenu, _DropDown);

  function TopMenu() {
    _classCallCheck(this, TopMenu);

    _get(Object.getPrototypeOf(TopMenu.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(TopMenu, [{
    key: 'init',
    value: function init() {
      var _this = this;

      var elmtClass = undefined;
      var self = this;
      // this.el.find('li').hover((e) => {
      //   if (this.el.parent().hasClass('mobile')) {
      //     return;
      //   }
      //   const currentTargetClass = $(e.currentTarget).attr('class');
      //   if (elmtClass !== currentTargetClass) {
      //     elmtClass = currentTargetClass;

      //     if (elmtClass && $(e.target).data('depth') === 0) {
      //       $(`.${elmtClass} .js-sub-menu > .top-menu`).css({
      //         top: $(`.${elmtClass}`).height() + $(`.${elmtClass}`).position().top
      //       });
      //     }
      //   }
      // });
      this.el.find('.submenu').each(function (index, element) {
        var target = (0, _jquery2['default'])(element),
            targetDepth = 2;

        if (target.find('.top-menu[data-depth="' + targetDepth + '"]').length) {
          target.addClass('submenu--full');
        }
      });
      (0, _jquery2['default'])('#_mobile_top_menu .category > a').click(function (e) {
        var toggler = (0, _jquery2['default'])(e.currentTarget).children('.navbar-toggler');

        if ((0, _jquery2['default'])(e.target).is(toggler) || toggler.find((0, _jquery2['default'])(e.target))) {
          e.preventDefault();
        }
      });
      (0, _jquery2['default'])('#menu-icon').on('click', function () {
        (0, _jquery2['default'])('#mobile_top_menu_wrapper').toggleClass('d-flex d-none');
        self.toggleMobileMenu();
      });
      (0, _jquery2['default'])('.js-top-menu .category').mouseleave(function () {
        if (_this.el.parent().hasClass('mobile')) {
          return;
        }
      });
      (0, _jquery2['default'])('.js-top-menu .category').click(function (e) {
        if (_this.el.parent().hasClass('mobile')) {
          if ((0, _jquery2['default'])(e.target).is('.collapse-icons .fa')) {
            e.preventDefault();
          }
        }
      });
      prestashop.on('responsive update', function (event) {
        (0, _jquery2['default'])('.js-sub-menu').removeAttr('style');
        self.toggleMobileMenu();
      });
      _get(Object.getPrototypeOf(TopMenu.prototype), 'init', this).call(this);
    }
  }, {
    key: 'toggleMobileMenu',
    value: function toggleMobileMenu() {
      (0, _jquery2['default'])('#header').toggleClass('is-open');
      if ((0, _jquery2['default'])('#mobile_top_menu_wrapper').is(":visible")) {
        (0, _jquery2['default'])('#notifications, #wrapper, #footer').hide();
      } else {
        (0, _jquery2['default'])('#notifications, #wrapper, #footer').show();
      }
    }
  }]);

  return TopMenu;
})(_dropDown2['default']);

exports['default'] = TopMenu;
module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function initRmaItemSelector() {
  (0, _jquery2['default'])('#order-return-form table thead input[type=checkbox]').on('click', function () {
    var checked = (0, _jquery2['default'])(this).prop('checked');
    (0, _jquery2['default'])('#order-return-form table tbody input[type=checkbox]').each(function (_, checkbox) {
      (0, _jquery2['default'])(checkbox).prop('checked', checked);
    });
  });
}

function setupCustomerScripts() {
  if ((0, _jquery2['default'])('body#order-detail')) {
    initRmaItemSelector();
  }
}

(0, _jquery2['default'])(document).ready(setupCustomerScripts);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {
  var nextId = 0;var Filestyle = function Filestyle(element, options) {
    this.options = options;this.$elementFilestyle = [];this.$element = $(element);
  };Filestyle.prototype = { clear: function clear() {
      this.$element.val("");this.$elementFilestyle.find(":text").val("");this.$elementFilestyle.find(".badge").remove();
    }, destroy: function destroy() {
      this.$element.removeAttr("style").removeData("filestyle");this.$elementFilestyle.remove();
    }, disabled: function disabled(value) {
      if (value === true) {
        if (!this.options.disabled) {
          this.$element.attr("disabled", "true");this.$elementFilestyle.find("label").attr("disabled", "true");this.options.disabled = true;
        }
      } else {
        if (value === false) {
          if (this.options.disabled) {
            this.$element.removeAttr("disabled");this.$elementFilestyle.find("label").removeAttr("disabled");this.options.disabled = false;
          }
        } else {
          return this.options.disabled;
        }
      }
    }, buttonBefore: function buttonBefore(value) {
      if (value === true) {
        if (!this.options.buttonBefore) {
          this.options.buttonBefore = true;if (this.options.input) {
            this.$elementFilestyle.remove();this.constructor();this.pushNameFiles();
          }
        }
      } else {
        if (value === false) {
          if (this.options.buttonBefore) {
            this.options.buttonBefore = false;if (this.options.input) {
              this.$elementFilestyle.remove();this.constructor();this.pushNameFiles();
            }
          }
        } else {
          return this.options.buttonBefore;
        }
      }
    }, icon: function icon(value) {
      if (value === true) {
        if (!this.options.icon) {
          this.options.icon = true;this.$elementFilestyle.find("label").prepend(this.htmlIcon());
        }
      } else {
        if (value === false) {
          if (this.options.icon) {
            this.options.icon = false;this.$elementFilestyle.find(".icon-span-filestyle").remove();
          }
        } else {
          return this.options.icon;
        }
      }
    }, input: function input(value) {
      if (value === true) {
        if (!this.options.input) {
          this.options.input = true;if (this.options.buttonBefore) {
            this.$elementFilestyle.append(this.htmlInput());
          } else {
            this.$elementFilestyle.prepend(this.htmlInput());
          }this.$elementFilestyle.find(".badge").remove();this.pushNameFiles();this.$elementFilestyle.find(".group-span-filestyle").addClass("input-group-btn");
        }
      } else {
        if (value === false) {
          if (this.options.input) {
            this.options.input = false;this.$elementFilestyle.find(":text").remove();var files = this.pushNameFiles();if (files.length > 0 && this.options.badge) {
              this.$elementFilestyle.find("label").append(' <span class="badge">' + files.length + "</span>");
            }this.$elementFilestyle.find(".group-span-filestyle").removeClass("input-group-btn");
          }
        } else {
          return this.options.input;
        }
      }
    }, size: function size(value) {
      if (value !== undefined) {
        var btn = this.$elementFilestyle.find("label"),
            input = this.$elementFilestyle.find("input");btn.removeClass("btn-lg btn-sm");input.removeClass("input-lg input-sm");if (value != "nr") {
          btn.addClass("btn-" + value);input.addClass("input-" + value);
        }
      } else {
        return this.options.size;
      }
    }, placeholder: function placeholder(value) {
      if (value !== undefined) {
        this.options.placeholder = value;this.$elementFilestyle.find("input").attr("placeholder", value);
      } else {
        return this.options.placeholder;
      }
    }, buttonText: function buttonText(value) {
      if (value !== undefined) {
        this.options.buttonText = value;this.$elementFilestyle.find("label .buttonText").html(this.options.buttonText);
      } else {
        return this.options.buttonText;
      }
    }, buttonName: function buttonName(value) {
      if (value !== undefined) {
        this.options.buttonName = value;this.$elementFilestyle.find("label").attr({ "class": "btn " + this.options.buttonName });
      } else {
        return this.options.buttonName;
      }
    }, iconName: function iconName(value) {
      if (value !== undefined) {
        this.$elementFilestyle.find(".icon-span-filestyle").attr({ "class": "icon-span-filestyle " + this.options.iconName });
      } else {
        return this.options.iconName;
      }
    }, htmlIcon: function htmlIcon() {
      if (this.options.icon) {
        return '<span class="icon-span-filestyle ' + this.options.iconName + '"></span> ';
      } else {
        return "";
      }
    }, htmlInput: function htmlInput() {
      if (this.options.input) {
        return '<input type="text" class="form-control ' + (this.options.size == "nr" ? "" : "input-" + this.options.size) + '" placeholder="' + this.options.placeholder + '" disabled> ';
      } else {
        return "";
      }
    }, pushNameFiles: function pushNameFiles() {
      var content = "",
          files = [];if (this.$element[0].files === undefined) {
        files[0] = { name: this.$element[0] && this.$element[0].value };
      } else {
        files = this.$element[0].files;
      }for (var i = 0; i < files.length; i++) {
        content += files[i].name.split("\\").pop() + ", ";
      }if (content !== "") {
        this.$elementFilestyle.find(":text").val(content.replace(/\, $/g, ""));
      } else {
        this.$elementFilestyle.find(":text").val("");
      }return files;
    }, constructor: function constructor() {
      var _self = this,
          html = "",
          id = _self.$element.attr("id"),
          files = [],
          btn = "",
          $label;if (id === "" || !id) {
        id = "filestyle-" + nextId;_self.$element.attr({ id: id });nextId++;
      }btn = '<span class="group-span-filestyle ' + (_self.options.input ? "input-group-btn" : "") + '"><label for="' + id + '" class="btn ' + _self.options.buttonName + " " + (_self.options.size == "nr" ? "" : "btn-" + _self.options.size) + '" ' + (_self.options.disabled ? 'disabled="true"' : "") + ">" + _self.htmlIcon() + '<span class="buttonText">' + _self.options.buttonText + "</span></label></span>";html = _self.options.buttonBefore ? btn + _self.htmlInput() : _self.htmlInput() + btn;_self.$elementFilestyle = $('<div class="bootstrap-filestyle input-group">' + html + "</div>");_self.$elementFilestyle.find(".group-span-filestyle").attr("tabindex", "0").keypress(function (e) {
        if (e.keyCode === 13 || e.charCode === 32) {
          _self.$elementFilestyle.find("label").click();return false;
        }
      });_self.$element.css({ position: "absolute", clip: "rect(0px 0px 0px 0px)" }).attr("tabindex", "-1").after(_self.$elementFilestyle);if (_self.options.disabled) {
        _self.$element.attr("disabled", "true");
      }_self.$element.change(function () {
        var files = _self.pushNameFiles();if (_self.options.input == false && _self.options.badge) {
          if (_self.$elementFilestyle.find(".badge").length == 0) {
            _self.$elementFilestyle.find("label").append(' <span class="badge">' + files.length + "</span>");
          } else {
            if (files.length == 0) {
              _self.$elementFilestyle.find(".badge").remove();
            } else {
              _self.$elementFilestyle.find(".badge").html(files.length);
            }
          }
        } else {
          _self.$elementFilestyle.find(".badge").remove();
        }
      });if (window.navigator.userAgent.search(/firefox/i) > -1) {
        _self.$elementFilestyle.find("label").click(function () {
          _self.$element.click();return false;
        });
      }
    } };var old = $.fn.filestyle;$.fn.filestyle = function (option, value) {
    var get = "",
        element = this.each(function () {
      if ($(this).attr("type") === "file") {
        var $this = $(this),
            data = $this.data("filestyle"),
            options = $.extend({}, $.fn.filestyle.defaults, option, typeof option === "object" && option);if (!data) {
          $this.data("filestyle", data = new Filestyle(this, options));data.constructor();
        }if (typeof option === "string") {
          get = data[option](value);
        }
      }
    });if (typeof get !== undefined) {
      return get;
    } else {
      return element;
    }
  };$.fn.filestyle.defaults = { buttonText: "Choose file", iconName: "glyphicon glyphicon-folder-open", buttonName: "btn-default", size: "nr", input: true, badge: true, icon: true, buttonBefore: false, disabled: false, placeholder: "" };$.fn.filestyle.noConflict = function () {
    $.fn.filestyle = old;return this;
  };$(function () {
    $(".filestyle").each(function () {
      var $this = $(this),
          options = { input: $this.attr("data-input") === "false" ? false : true, icon: $this.attr("data-icon") === "false" ? false : true, buttonBefore: $this.attr("data-buttonBefore") === "true" ? true : false, disabled: $this.attr("data-disabled") === "true" ? true : false, size: $this.attr("data-size"), buttonText: $this.attr("data-buttonText"), buttonName: $this.attr("data-buttonName"), iconName: $this.attr("data-iconName"), badge: $this.attr("data-badge") === "false" ? false : true, placeholder: $this.attr("data-placeholder") };$this.filestyle(options);
    });
  });
})(window.jQuery);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {
  $.fn.scrollbox = function (config) {
    var defConfig = { linear: false, startDelay: 2, delay: 3, step: 5, speed: 32, switchItems: 1, direction: "vertical", distance: "auto", autoPlay: true, onMouseOverPause: true, paused: false, queue: null, listElement: "ul", listItemElement: "li", infiniteLoop: true, switchAmount: 0, afterForward: null, afterBackward: null, triggerStackable: false };config = $.extend(defConfig, config);config.scrollOffset = config.direction === "vertical" ? "scrollTop" : "scrollLeft";if (config.queue) {
      config.queue = $("#" + config.queue);
    }return this.each(function () {
      var container = $(this),
          containerUL,
          scrollingId = null,
          nextScrollId = null,
          paused = false,
          releaseStack,
          backward,
          forward,
          resetClock,
          scrollForward,
          scrollBackward,
          forwardHover,
          pauseHover,
          switchCount = 0,
          stackedTriggerIndex = 0;if (config.onMouseOverPause) {
        container.bind("mouseover", function () {
          paused = true;
        });container.bind("mouseout", function () {
          paused = false;
        });
      }containerUL = container.children(config.listElement + ":first-child");if (config.infiniteLoop === false && config.switchAmount === 0) {
        config.switchAmount = containerUL.children().length;
      }scrollForward = function () {
        if (paused) {
          return;
        }var curLi, i, newScrollOffset, scrollDistance, theStep;curLi = containerUL.children(config.listItemElement + ":first-child");scrollDistance = config.distance !== "auto" ? config.distance : config.direction === "vertical" ? curLi.outerHeight(true) : curLi.outerWidth(true);if (!config.linear) {
          theStep = Math.max(3, parseInt((scrollDistance - container[0][config.scrollOffset]) * .3, 10));newScrollOffset = Math.min(container[0][config.scrollOffset] + theStep, scrollDistance);
        } else {
          newScrollOffset = Math.min(container[0][config.scrollOffset] + config.step, scrollDistance);
        }container[0][config.scrollOffset] = newScrollOffset;if (newScrollOffset >= scrollDistance) {
          for (i = 0; i < config.switchItems; i++) {
            if (config.queue && config.queue.find(config.listItemElement).length > 0) {
              containerUL.append(config.queue.find(config.listItemElement)[0]);containerUL.children(config.listItemElement + ":first-child").remove();
            } else {
              containerUL.append(containerUL.children(config.listItemElement + ":first-child"));
            }++switchCount;
          }container[0][config.scrollOffset] = 0;clearInterval(scrollingId);scrollingId = null;if ($.isFunction(config.afterForward)) {
            config.afterForward.call(container, { switchCount: switchCount, currentFirstChild: containerUL.children(config.listItemElement + ":first-child") });
          }if (config.triggerStackable && stackedTriggerIndex !== 0) {
            releaseStack();return;
          }if (config.infiniteLoop === false && switchCount >= config.switchAmount) {
            return;
          }if (config.autoPlay) {
            nextScrollId = setTimeout(forward, config.delay * 1e3);
          }
        }
      };scrollBackward = function () {
        if (paused) {
          return;
        }var curLi, i, newScrollOffset, scrollDistance, theStep;if (container[0][config.scrollOffset] === 0) {
          for (i = 0; i < config.switchItems; i++) {
            containerUL.children(config.listItemElement + ":last-child").insertBefore(containerUL.children(config.listItemElement + ":first-child"));
          }curLi = containerUL.children(config.listItemElement + ":first-child");scrollDistance = config.distance !== "auto" ? config.distance : config.direction === "vertical" ? curLi.height() : curLi.width();container[0][config.scrollOffset] = scrollDistance;
        }if (!config.linear) {
          theStep = Math.max(3, parseInt(container[0][config.scrollOffset] * .3, 10));newScrollOffset = Math.max(container[0][config.scrollOffset] - theStep, 0);
        } else {
          newScrollOffset = Math.max(container[0][config.scrollOffset] - config.step, 0);
        }container[0][config.scrollOffset] = newScrollOffset;if (newScrollOffset === 0) {
          --switchCount;clearInterval(scrollingId);scrollingId = null;if ($.isFunction(config.afterBackward)) {
            config.afterBackward.call(container, { switchCount: switchCount, currentFirstChild: containerUL.children(config.listItemElement + ":first-child") });
          }if (config.triggerStackable && stackedTriggerIndex !== 0) {
            releaseStack();return;
          }if (config.autoPlay) {
            nextScrollId = setTimeout(forward, config.delay * 1e3);
          }
        }
      };releaseStack = function () {
        if (stackedTriggerIndex === 0) {
          return;
        }if (stackedTriggerIndex > 0) {
          stackedTriggerIndex--;nextScrollId = setTimeout(forward, 0);
        } else {
          stackedTriggerIndex++;nextScrollId = setTimeout(backward, 0);
        }
      };forward = function () {
        clearInterval(scrollingId);scrollingId = setInterval(scrollForward, config.speed);
      };backward = function () {
        clearInterval(scrollingId);scrollingId = setInterval(scrollBackward, config.speed);
      };forwardHover = function () {
        config.autoPlay = true;paused = false;clearInterval(scrollingId);scrollingId = setInterval(scrollForward, config.speed);
      };pauseHover = function () {
        paused = true;
      };resetClock = function (delay) {
        config.delay = delay || config.delay;clearTimeout(nextScrollId);if (config.autoPlay) {
          nextScrollId = setTimeout(forward, config.delay * 1e3);
        }
      };if (config.autoPlay) {
        nextScrollId = setTimeout(forward, config.startDelay * 1e3);
      }container.bind("resetClock", function (delay) {
        resetClock(delay);
      });container.bind("forward", function () {
        if (config.triggerStackable) {
          if (scrollingId !== null) {
            stackedTriggerIndex++;
          } else {
            forward();
          }
        } else {
          clearTimeout(nextScrollId);forward();
        }
      });container.bind("backward", function () {
        if (config.triggerStackable) {
          if (scrollingId !== null) {
            stackedTriggerIndex--;
          } else {
            backward();
          }
        } else {
          clearTimeout(nextScrollId);backward();
        }
      });container.bind("pauseHover", function () {
        pauseHover();
      });container.bind("forwardHover", function () {
        forwardHover();
      });container.bind("speedUp", function (event, speed) {
        if (speed === "undefined") {
          speed = Math.max(1, parseInt(config.speed / 2, 10));
        }config.speed = speed;
      });container.bind("speedDown", function (event, speed) {
        if (speed === "undefined") {
          speed = config.speed * 2;
        }config.speed = speed;
      });container.bind("updateConfig", function (event, options) {
        config = $.extend(config, options);
      });
    });
  };
})(jQuery);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _prestashop = __webpack_require__(1);

var _prestashop2 = _interopRequireDefault(_prestashop);

__webpack_require__(5);

var _componentsProductMiniature = __webpack_require__(3);

var _componentsProductMiniature2 = _interopRequireDefault(_componentsProductMiniature);

(0, _jquery2['default'])(document).ready(function () {
  _prestashop2['default'].on('clickQuickView', function (elm) {
    var data = {
      'action': 'quickview',
      'id_product': elm.dataset.idProduct,
      'id_product_attribute': elm.dataset.idProductAttribute
    };
    _jquery2['default'].post(_prestashop2['default'].urls.pages.product, data, null, 'json').then(function (resp) {
      (0, _jquery2['default'])('body').append(resp.quickview_html);
      var productModal = (0, _jquery2['default'])('#quickview-modal-' + resp.product.id + '-' + resp.product.id_product_attribute);
      productModal.modal('show');
      productConfig(productModal);
      productModal.on('hidden.bs.modal', function () {
        productModal.remove();
      });
    }).fail(function (resp) {
      _prestashop2['default'].emit('handleError', { eventType: 'clickQuickView', resp: resp });
    });
  });

  var productConfig = function productConfig(qv) {
    var MAX_THUMBS = 4;
    var $arrows = (0, _jquery2['default'])('.js-arrows');
    var $thumbnails = qv.find('.js-qv-product-images');
    (0, _jquery2['default'])('.js-thumb').on('click', function (event) {
      if ((0, _jquery2['default'])('.js-thumb').hasClass('selected')) {
        (0, _jquery2['default'])('.js-thumb').removeClass('selected');
      }
      (0, _jquery2['default'])(event.currentTarget).addClass('selected');
      (0, _jquery2['default'])('.js-qv-product-cover').attr('src', (0, _jquery2['default'])(event.target).data('image-large-src'));
    });
    if ($thumbnails.find('li').length <= MAX_THUMBS) {
      $arrows.hide();
    } else {
      $arrows.on('click', function (event) {
        if ((0, _jquery2['default'])(event.target).hasClass('arrow-up') && (0, _jquery2['default'])('.js-qv-product-images').position().top < 0) {
          move('up');
          (0, _jquery2['default'])('.arrow-down').css('opacity', '1');
        } else if ((0, _jquery2['default'])(event.target).hasClass('arrow-down') && $thumbnails.position().top + $thumbnails.height() > (0, _jquery2['default'])('.js-qv-mask').height()) {
          move('down');
          (0, _jquery2['default'])('.arrow-up').css('opacity', '1');
        }
      });
    }
    qv.find('#quantity_wanted').TouchSpin({
      verticalbuttons: true,
      verticalupclass: 'fa fa-plus touchspin-up',
      verticaldownclass: 'fa fa-minus touchspin-down',
      buttondown_class: 'btn btn-touchspin js-touchspin',
      buttonup_class: 'btn btn-touchspin js-touchspin',
      min: 1,
      max: 1000000
    });
  };
  var move = function move(direction) {
    var THUMB_MARGIN = 20;
    var $thumbnails = (0, _jquery2['default'])('.js-qv-product-images');
    var thumbHeight = (0, _jquery2['default'])('.js-qv-product-images li img').height() + THUMB_MARGIN;
    var currentPosition = $thumbnails.position().top;
    $thumbnails.velocity({
      translateY: direction === 'up' ? currentPosition + thumbHeight : currentPosition - thumbHeight
    }, function () {
      if ($thumbnails.position().top >= 0) {
        (0, _jquery2['default'])('.arrow-up').css('opacity', '.2');
      } else if ($thumbnails.position().top + $thumbnails.height() <= (0, _jquery2['default'])('.js-qv-mask').height()) {
        (0, _jquery2['default'])('.arrow-down').css('opacity', '.2');
      }
    });
  };
  (0, _jquery2['default'])('body').on('click', '#search_filter_toggler', function () {
    (0, _jquery2['default'])('#search_filters_wrapper').removeClass('hidden-sm-down');
    (0, _jquery2['default'])('#content-wrapper').addClass('hidden-sm-down');
    (0, _jquery2['default'])('#footer').addClass('hidden-sm-down');
  });
  (0, _jquery2['default'])('#search_filter_controls .clear').on('click', function () {
    (0, _jquery2['default'])('#search_filters_wrapper').addClass('hidden-sm-down');
    (0, _jquery2['default'])('#content-wrapper').removeClass('hidden-sm-down');
    (0, _jquery2['default'])('#footer').removeClass('hidden-sm-down');
  });
  (0, _jquery2['default'])('#search_filter_controls .ok').on('click', function () {
    (0, _jquery2['default'])('#search_filters_wrapper').addClass('hidden-sm-down');
    (0, _jquery2['default'])('#content-wrapper').removeClass('hidden-sm-down');
    (0, _jquery2['default'])('#footer').removeClass('hidden-sm-down');
  });

  var parseSearchUrl = function parseSearchUrl(event) {
    if (event.target.dataset.searchUrl !== undefined) {
      return event.target.dataset.searchUrl;
    }

    if ((0, _jquery2['default'])(event.target).parent()[0].dataset.searchUrl === undefined) {
      throw new Error('Can not parse search URL');
    }

    return (0, _jquery2['default'])(event.target).parent()[0].dataset.searchUrl;
  };

  (0, _jquery2['default'])('body').on('change', '#search_filters input[data-search-url]', function (event) {
    _prestashop2['default'].emit('updateFacets', parseSearchUrl(event));
  });

  (0, _jquery2['default'])('body').on('click', '.js-search-filters-clear-all', function (event) {
    _prestashop2['default'].emit('updateFacets', parseSearchUrl(event));
  });

  (0, _jquery2['default'])('body').on('click', '.js-search-link', function (event) {
    event.preventDefault();
    _prestashop2['default'].emit('updateFacets', (0, _jquery2['default'])(event.target).closest('a').get(0).href);
  });

  (0, _jquery2['default'])('body').on('change', '#search_filters select', function (event) {
    var form = (0, _jquery2['default'])(event.target).closest('form');
    _prestashop2['default'].emit('updateFacets', '?' + form.serialize());
  });

  _prestashop2['default'].on('updateProductList', function (data) {
    updateProductListDOM(data);
    window.scrollTo(0, 0);
  });
});

function updateProductListDOM(data) {
  (0, _jquery2['default'])('#search_filters').replaceWith(data.rendered_facets);
  (0, _jquery2['default'])('#js-active-search-filters').replaceWith(data.rendered_active_filters);
  (0, _jquery2['default'])('#js-product-list-top').replaceWith(data.rendered_products_top);
  (0, _jquery2['default'])('#js-product-list').replaceWith(data.rendered_products);
  (0, _jquery2['default'])('#js-product-list-bottom').replaceWith(data.rendered_products_bottom);
  if (data.rendered_products_header) {
    (0, _jquery2['default'])('#js-product-list-header').replaceWith(data.rendered_products_header);
  }

  var productMinitature = new _componentsProductMiniature2['default']();
  productMinitature.init();
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _prestashop = __webpack_require__(1);

var _prestashop2 = _interopRequireDefault(_prestashop);

(0, _jquery2['default'])(document).ready(function () {
  createProductSpin();
  createInputFile();
  coverImage();
  imageScrollBox();

  _prestashop2['default'].on('updatedProduct', function (event) {
    createInputFile();
    coverImage();
    if (event && event.product_minimal_quantity) {
      var minimalProductQuantity = parseInt(event.product_minimal_quantity, 10);
      var quantityInputSelector = '#quantity_wanted';
      var quantityInput = (0, _jquery2['default'])(quantityInputSelector);

      // @see http://www.virtuosoft.eu/code/bootstrap-touchspin/ about Bootstrap TouchSpin
      quantityInput.trigger('touchspin.updatesettings', { min: minimalProductQuantity });
    }
    imageScrollBox();
    (0, _jquery2['default'])((0, _jquery2['default'])('.tabs .nav-link.active').attr('href')).addClass('active').removeClass('fade');
    (0, _jquery2['default'])('.js-product-images-modal').replaceWith(event.product_images_modal);
  });

  function coverImage() {
    (0, _jquery2['default'])('.js-thumb').on('click', function (event) {
      (0, _jquery2['default'])('.js-modal-product-cover').attr('src', (0, _jquery2['default'])(event.target).data('image-large-src'));
      (0, _jquery2['default'])('.selected').removeClass('selected');
      (0, _jquery2['default'])(event.target).addClass('selected');
      (0, _jquery2['default'])('.js-qv-product-cover').prop('src', (0, _jquery2['default'])(event.currentTarget).data('image-large-src'));
    });
  }

  function imageScrollBox() {
    if ((0, _jquery2['default'])('#main .js-qv-product-images li').length > 2) {
      (0, _jquery2['default'])('#main .js-qv-mask').addClass('scroll');
      (0, _jquery2['default'])('.scroll-box-arrows').addClass('scroll');
      (0, _jquery2['default'])('#main .js-qv-mask').scrollbox({
        direction: 'h',
        distance: 113,
        autoPlay: false
      });
      (0, _jquery2['default'])('.scroll-box-arrows .left').click(function () {
        (0, _jquery2['default'])('#main .js-qv-mask').trigger('backward');
      });
      (0, _jquery2['default'])('.scroll-box-arrows .right').click(function () {
        (0, _jquery2['default'])('#main .js-qv-mask').trigger('forward');
      });
    } else {
      (0, _jquery2['default'])('#main .js-qv-mask').removeClass('scroll');
      (0, _jquery2['default'])('.scroll-box-arrows').removeClass('scroll');
    }
  }

  function createInputFile() {
    (0, _jquery2['default'])('.js-file-input').on('change', function (event) {
      var target = undefined,
          file = undefined;

      if ((target = (0, _jquery2['default'])(event.currentTarget)[0]) && (file = target.files[0])) {
        (0, _jquery2['default'])(target).prev().text(file.name);
      }
    });
  }

  function createProductSpin() {
    var $quantityInput = (0, _jquery2['default'])('#quantity_wanted');

    $quantityInput.TouchSpin({
      verticalbuttons: true,
      verticalupclass: 'fa fa-plus touchspin-up',
      verticaldownclass: 'fa fa-minus touchspin-down',
      buttondown_class: 'btn btn-touchspin js-touchspin',
      buttonup_class: 'btn btn-touchspin js-touchspin',
      min: parseInt($quantityInput.attr('min'), 10),
      max: 1000000
    });

    (0, _jquery2['default'])('body').on('change keyup', '#quantity_wanted', function (e) {
      (0, _jquery2['default'])(e.currentTarget).trigger('touchspin.stopspin');
      _prestashop2['default'].emit('updateProduct', {
        eventType: 'updatedProductQuantity',
        event: e
      });
    });
  }
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _prestashop = __webpack_require__(1);

var _prestashop2 = _interopRequireDefault(_prestashop);

_prestashop2['default'].responsive = _prestashop2['default'].responsive || {};

_prestashop2['default'].responsive.current_width = window.innerWidth;
_prestashop2['default'].responsive.min_width = 768;
_prestashop2['default'].responsive.mobile = _prestashop2['default'].responsive.current_width < _prestashop2['default'].responsive.min_width;

function swapChildren(obj1, obj2) {
	var temp = obj2.children().detach();
	obj2.empty().append(obj1.children().detach());
	obj1.append(temp);
}

function toggleMobileStyles() {
	if (_prestashop2['default'].responsive.mobile) {
		(0, _jquery2['default'])("*[id^='_desktop_']").each(function (idx, el) {
			var target = (0, _jquery2['default'])('#' + el.id.replace('_desktop_', '_mobile_'));
			if (target.length) {
				swapChildren((0, _jquery2['default'])(el), target);
			}
		});
	} else {
		(0, _jquery2['default'])("*[id^='_mobile_']").each(function (idx, el) {
			var target = (0, _jquery2['default'])('#' + el.id.replace('_mobile_', '_desktop_'));
			if (target.length) {
				swapChildren((0, _jquery2['default'])(el), target);
			}
		});
	}
	_prestashop2['default'].emit('responsive update', {
		mobile: _prestashop2['default'].responsive.mobile
	});
}

(0, _jquery2['default'])(window).on('resize', function () {
	var _cw = _prestashop2['default'].responsive.current_width;
	var _mw = _prestashop2['default'].responsive.min_width;
	var _w = window.innerWidth;
	var _toggle = _cw >= _mw && _w < _mw || _cw < _mw && _w >= _mw;
	_prestashop2['default'].responsive.current_width = _w;
	_prestashop2['default'].responsive.mobile = _prestashop2['default'].responsive.current_width < _prestashop2['default'].responsive.min_width;
	if (_toggle) {
		toggleMobileStyles();
	}
});

(0, _jquery2['default'])(document).ready(function () {
	if (_prestashop2['default'].responsive.mobile) {
		toggleMobileStyles();
	}
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Bootstrap TouchSpin - v3.1.1
 *  A mobile and touch friendly input spinner component for Bootstrap 3.
 *  http://www.virtuosoft.eu/code/bootstrap-touchspin/
 *
 *  Made by István Ujj-Mészáros
 *  Under Apache License v2.0 License
 */


(function ($) {
  'use strict';

  var _currentSpinnerId = 0;

  function _scopedEventName(name, id) {
    return name + '.touchspin_' + id;
  }

  function _scopeEventNames(names, id) {
    return $.map(names, function (name) {
      return _scopedEventName(name, id);
    });
  }

  $.fn.TouchSpin = function (options) {

    if (options === 'destroy') {
      this.each(function () {
        var originalinput = $(this),
            originalinput_data = originalinput.data();
        $(document).off(_scopeEventNames(['mouseup', 'touchend', 'touchcancel', 'mousemove', 'touchmove', 'scroll', 'scrollstart'], originalinput_data.spinnerid).join(' '));
      });
      return;
    }

    var defaults = {
      min: 0,
      max: 100,
      initval: '',
      replacementval: '',
      step: 1,
      decimals: 0,
      stepinterval: 100,
      forcestepdivisibility: 'round', // none | floor | round | ceil
      stepintervaldelay: 500,
      verticalbuttons: false,
      verticalupclass: 'glyphicon glyphicon-chevron-up',
      verticaldownclass: 'glyphicon glyphicon-chevron-down',
      prefix: '',
      postfix: '',
      prefix_extraclass: '',
      postfix_extraclass: '',
      booster: true,
      boostat: 10,
      maxboostedstep: false,
      mousewheel: true,
      buttondown_class: 'btn btn-default',
      buttonup_class: 'btn btn-default',
      buttondown_txt: '-',
      buttonup_txt: '+'
    };

    var attributeMap = {
      min: 'min',
      max: 'max',
      initval: 'init-val',
      replacementval: 'replacement-val',
      step: 'step',
      decimals: 'decimals',
      stepinterval: 'step-interval',
      verticalbuttons: 'vertical-buttons',
      verticalupclass: 'vertical-up-class',
      verticaldownclass: 'vertical-down-class',
      forcestepdivisibility: 'force-step-divisibility',
      stepintervaldelay: 'step-interval-delay',
      prefix: 'prefix',
      postfix: 'postfix',
      prefix_extraclass: 'prefix-extra-class',
      postfix_extraclass: 'postfix-extra-class',
      booster: 'booster',
      boostat: 'boostat',
      maxboostedstep: 'max-boosted-step',
      mousewheel: 'mouse-wheel',
      buttondown_class: 'button-down-class',
      buttonup_class: 'button-up-class',
      buttondown_txt: 'button-down-txt',
      buttonup_txt: 'button-up-txt'
    };

    return this.each(function () {

      var settings,
          originalinput = $(this),
          originalinput_data = originalinput.data(),
          container,
          elements,
          value,
          downSpinTimer,
          upSpinTimer,
          downDelayTimeout,
          upDelayTimeout,
          spincount = 0,
          spinning = false;

      init();

      function init() {
        if (originalinput.data('alreadyinitialized')) {
          return;
        }

        originalinput.data('alreadyinitialized', true);
        _currentSpinnerId += 1;
        originalinput.data('spinnerid', _currentSpinnerId);

        if (!originalinput.is('input')) {
          console.log('Must be an input.');
          return;
        }

        _initSettings();
        _setInitval();
        _checkValue();
        _buildHtml();
        _initElements();
        _hideEmptyPrefixPostfix();
        _bindEvents();
        _bindEventsInterface();
        elements.input.css('display', 'block');
      }

      function _setInitval() {
        if (settings.initval !== '' && originalinput.val() === '') {
          originalinput.val(settings.initval);
        }
      }

      function changeSettings(newsettings) {
        _updateSettings(newsettings);
        _checkValue();

        var value = elements.input.val();

        if (value !== '') {
          value = Number(elements.input.val());
          elements.input.val(value.toFixed(settings.decimals));
        }
      }

      function _initSettings() {
        settings = $.extend({}, defaults, originalinput_data, _parseAttributes(), options);
      }

      function _parseAttributes() {
        var data = {};
        $.each(attributeMap, function (key, value) {
          var attrName = 'bts-' + value + '';
          if (originalinput.is('[data-' + attrName + ']')) {
            data[key] = originalinput.data(attrName);
          }
        });
        return data;
      }

      function _updateSettings(newsettings) {
        settings = $.extend({}, settings, newsettings);
      }

      function _buildHtml() {
        var initval = originalinput.val(),
            parentelement = originalinput.parent();

        if (initval !== '') {
          initval = Number(initval).toFixed(settings.decimals);
        }

        originalinput.data('initvalue', initval).val(initval);
        originalinput.addClass('form-control');

        if (parentelement.hasClass('input-group')) {
          _advanceInputGroup(parentelement);
        } else {
          _buildInputGroup();
        }
      }

      function _advanceInputGroup(parentelement) {
        parentelement.addClass('bootstrap-touchspin');

        var prev = originalinput.prev(),
            next = originalinput.next();

        var downhtml,
            uphtml,
            prefixhtml = '<span class="input-group-addon bootstrap-touchspin-prefix">' + settings.prefix + '</span>',
            postfixhtml = '<span class="input-group-addon bootstrap-touchspin-postfix">' + settings.postfix + '</span>';

        if (prev.hasClass('input-group-btn')) {
          downhtml = '<button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + '</button>';
          prev.append(downhtml);
        } else {
          downhtml = '<span class="input-group-btn"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + '</button></span>';
          $(downhtml).insertBefore(originalinput);
        }

        if (next.hasClass('input-group-btn')) {
          uphtml = '<button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + '</button>';
          next.prepend(uphtml);
        } else {
          uphtml = '<span class="input-group-btn"><button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + '</button></span>';
          $(uphtml).insertAfter(originalinput);
        }

        $(prefixhtml).insertBefore(originalinput);
        $(postfixhtml).insertAfter(originalinput);

        container = parentelement;
      }

      function _buildInputGroup() {
        var html;

        if (settings.verticalbuttons) {
          html = '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' + settings.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + settings.postfix + '</span><span class="input-group-btn-vertical"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-up" type="button"><i class="' + settings.verticalupclass + '"></i></button><button class="' + settings.buttonup_class + ' bootstrap-touchspin-down" type="button"><i class="' + settings.verticaldownclass + '"></i></button></span></div>';
        } else {
          html = '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' + settings.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + settings.postfix + '</span><span class="input-group-btn"><button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + '</button></span></div>';
        }

        container = $(html).insertBefore(originalinput);

        $('.bootstrap-touchspin-prefix', container).after(originalinput);

        if (originalinput.hasClass('input-sm')) {
          container.addClass('input-group-sm');
        } else if (originalinput.hasClass('input-lg')) {
          container.addClass('input-group-lg');
        }
      }

      function _initElements() {
        elements = {
          down: $('.bootstrap-touchspin-down', container),
          up: $('.bootstrap-touchspin-up', container),
          input: $('input', container),
          prefix: $('.bootstrap-touchspin-prefix', container).addClass(settings.prefix_extraclass),
          postfix: $('.bootstrap-touchspin-postfix', container).addClass(settings.postfix_extraclass)
        };
      }

      function _hideEmptyPrefixPostfix() {
        if (settings.prefix === '') {
          elements.prefix.hide();
        }

        if (settings.postfix === '') {
          elements.postfix.hide();
        }
      }

      function _bindEvents() {
        originalinput.on('keydown', function (ev) {
          var code = ev.keyCode || ev.which;

          if (code === 38) {
            if (spinning !== 'up') {
              upOnce();
              startUpSpin();
            }
            ev.preventDefault();
          } else if (code === 40) {
            if (spinning !== 'down') {
              downOnce();
              startDownSpin();
            }
            ev.preventDefault();
          }
        });

        originalinput.on('keyup', function (ev) {
          var code = ev.keyCode || ev.which;

          if (code === 38) {
            stopSpin();
          } else if (code === 40) {
            stopSpin();
          }
        });

        originalinput.on('blur', function () {
          _checkValue();
        });

        elements.down.on('keydown', function (ev) {
          var code = ev.keyCode || ev.which;

          if (code === 32 || code === 13) {
            if (spinning !== 'down') {
              downOnce();
              startDownSpin();
            }
            ev.preventDefault();
          }
        });

        elements.down.on('keyup', function (ev) {
          var code = ev.keyCode || ev.which;

          if (code === 32 || code === 13) {
            stopSpin();
          }
        });

        elements.up.on('keydown', function (ev) {
          var code = ev.keyCode || ev.which;

          if (code === 32 || code === 13) {
            if (spinning !== 'up') {
              upOnce();
              startUpSpin();
            }
            ev.preventDefault();
          }
        });

        elements.up.on('keyup', function (ev) {
          var code = ev.keyCode || ev.which;

          if (code === 32 || code === 13) {
            stopSpin();
          }
        });

        elements.down.on('mousedown.touchspin', function (ev) {
          elements.down.off('touchstart.touchspin'); // android 4 workaround

          if (originalinput.is(':disabled')) {
            return;
          }

          downOnce();
          startDownSpin();

          ev.preventDefault();
          ev.stopPropagation();
        });

        elements.down.on('touchstart.touchspin', function (ev) {
          elements.down.off('mousedown.touchspin'); // android 4 workaround

          if (originalinput.is(':disabled')) {
            return;
          }

          downOnce();
          startDownSpin();

          ev.preventDefault();
          ev.stopPropagation();
        });

        elements.up.on('mousedown.touchspin', function (ev) {
          elements.up.off('touchstart.touchspin'); // android 4 workaround

          if (originalinput.is(':disabled')) {
            return;
          }

          upOnce();
          startUpSpin();

          ev.preventDefault();
          ev.stopPropagation();
        });

        elements.up.on('touchstart.touchspin', function (ev) {
          elements.up.off('mousedown.touchspin'); // android 4 workaround

          if (originalinput.is(':disabled')) {
            return;
          }

          upOnce();
          startUpSpin();

          ev.preventDefault();
          ev.stopPropagation();
        });

        elements.up.on('mouseout touchleave touchend touchcancel', function (ev) {
          if (!spinning) {
            return;
          }

          ev.stopPropagation();
          stopSpin();
        });

        elements.down.on('mouseout touchleave touchend touchcancel', function (ev) {
          if (!spinning) {
            return;
          }

          ev.stopPropagation();
          stopSpin();
        });

        elements.down.on('mousemove touchmove', function (ev) {
          if (!spinning) {
            return;
          }

          ev.stopPropagation();
          ev.preventDefault();
        });

        elements.up.on('mousemove touchmove', function (ev) {
          if (!spinning) {
            return;
          }

          ev.stopPropagation();
          ev.preventDefault();
        });

        $(document).on(_scopeEventNames(['mouseup', 'touchend', 'touchcancel'], _currentSpinnerId).join(' '), function (ev) {
          if (!spinning) {
            return;
          }

          ev.preventDefault();
          stopSpin();
        });

        $(document).on(_scopeEventNames(['mousemove', 'touchmove', 'scroll', 'scrollstart'], _currentSpinnerId).join(' '), function (ev) {
          if (!spinning) {
            return;
          }

          ev.preventDefault();
          stopSpin();
        });

        originalinput.on('mousewheel DOMMouseScroll', function (ev) {
          if (!settings.mousewheel || !originalinput.is(':focus')) {
            return;
          }

          var delta = ev.originalEvent.wheelDelta || -ev.originalEvent.deltaY || -ev.originalEvent.detail;

          ev.stopPropagation();
          ev.preventDefault();

          if (delta < 0) {
            downOnce();
          } else {
            upOnce();
          }
        });
      }

      function _bindEventsInterface() {
        originalinput.on('touchspin.uponce', function () {
          stopSpin();
          upOnce();
        });

        originalinput.on('touchspin.downonce', function () {
          stopSpin();
          downOnce();
        });

        originalinput.on('touchspin.startupspin', function () {
          startUpSpin();
        });

        originalinput.on('touchspin.startdownspin', function () {
          startDownSpin();
        });

        originalinput.on('touchspin.stopspin', function () {
          stopSpin();
        });

        originalinput.on('touchspin.updatesettings', function (e, newsettings) {
          changeSettings(newsettings);
        });
      }

      function _forcestepdivisibility(value) {
        switch (settings.forcestepdivisibility) {
          case 'round':
            return (Math.round(value / settings.step) * settings.step).toFixed(settings.decimals);
          case 'floor':
            return (Math.floor(value / settings.step) * settings.step).toFixed(settings.decimals);
          case 'ceil':
            return (Math.ceil(value / settings.step) * settings.step).toFixed(settings.decimals);
          default:
            return value;
        }
      }

      function _checkValue() {
        var val, parsedval, returnval;

        val = originalinput.val();

        if (val === '') {
          if (settings.replacementval !== '') {
            originalinput.val(settings.replacementval);
            originalinput.trigger('change');
          }
          return;
        }

        if (settings.decimals > 0 && val === '.') {
          return;
        }

        parsedval = parseFloat(val);

        if (isNaN(parsedval)) {
          if (settings.replacementval !== '') {
            parsedval = settings.replacementval;
          } else {
            parsedval = 0;
          }
        }

        returnval = parsedval;

        if (parsedval.toString() !== val) {
          returnval = parsedval;
        }

        if (parsedval < settings.min) {
          returnval = settings.min;
        }

        if (parsedval > settings.max) {
          returnval = settings.max;
        }

        returnval = _forcestepdivisibility(returnval);

        if (Number(val).toString() !== returnval.toString()) {
          originalinput.val(returnval);
          originalinput.trigger('change');
        }
      }

      function _getBoostedStep() {
        if (!settings.booster) {
          return settings.step;
        } else {
          var boosted = Math.pow(2, Math.floor(spincount / settings.boostat)) * settings.step;

          if (settings.maxboostedstep) {
            if (boosted > settings.maxboostedstep) {
              boosted = settings.maxboostedstep;
              value = Math.round(value / boosted) * boosted;
            }
          }

          return Math.max(settings.step, boosted);
        }
      }

      function upOnce() {
        _checkValue();

        value = parseFloat(elements.input.val());
        if (isNaN(value)) {
          value = 0;
        }

        var initvalue = value,
            boostedstep = _getBoostedStep();

        value = value + boostedstep;

        if (value > settings.max) {
          value = settings.max;
          originalinput.trigger('touchspin.on.max');
          stopSpin();
        }

        elements.input.val(Number(value).toFixed(settings.decimals));

        if (initvalue !== value) {
          originalinput.trigger('change');
        }
      }

      function downOnce() {
        _checkValue();

        value = parseFloat(elements.input.val());
        if (isNaN(value)) {
          value = 0;
        }

        var initvalue = value,
            boostedstep = _getBoostedStep();

        value = value - boostedstep;

        if (value < settings.min) {
          value = settings.min;
          originalinput.trigger('touchspin.on.min');
          stopSpin();
        }

        elements.input.val(value.toFixed(settings.decimals));

        if (initvalue !== value) {
          originalinput.trigger('change');
        }
      }

      function startDownSpin() {
        stopSpin();

        spincount = 0;
        spinning = 'down';

        originalinput.trigger('touchspin.on.startspin');
        originalinput.trigger('touchspin.on.startdownspin');

        downDelayTimeout = setTimeout(function () {
          downSpinTimer = setInterval(function () {
            spincount++;
            downOnce();
          }, settings.stepinterval);
        }, settings.stepintervaldelay);
      }

      function startUpSpin() {
        stopSpin();

        spincount = 0;
        spinning = 'up';

        originalinput.trigger('touchspin.on.startspin');
        originalinput.trigger('touchspin.on.startupspin');

        upDelayTimeout = setTimeout(function () {
          upSpinTimer = setInterval(function () {
            spincount++;
            upOnce();
          }, settings.stepinterval);
        }, settings.stepintervaldelay);
      }

      function stopSpin() {
        clearTimeout(downDelayTimeout);
        clearTimeout(upDelayTimeout);
        clearInterval(downSpinTimer);
        clearInterval(upSpinTimer);

        switch (spinning) {
          case 'up':
            originalinput.trigger('touchspin.on.stopupspin');
            originalinput.trigger('touchspin.on.stopspin');
            break;
          case 'down':
            originalinput.trigger('touchspin.on.stopdownspin');
            originalinput.trigger('touchspin.on.stopspin');
            break;
        }

        spincount = 0;
        spinning = false;
      }
    });
  };
})(jQuery);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */


!(function (t, e) {
   true ? e(exports, __webpack_require__(0), __webpack_require__(29)) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper);
})(undefined, function (t, g, u) {
  "use strict";function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }function e(e, t) {
    var n = Object.keys(e);if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);t && (i = i.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, i);
    }return n;
  }function l(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};t % 2 ? e(Object(r), !0).forEach(function (t) {
        var e, n, i;e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach(function (t) {
        Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }return o;
  }g = g && g.hasOwnProperty("default") ? g["default"] : g, u = u && u.hasOwnProperty("default") ? u["default"] : u;var n = "transitionend";function o(t) {
    var e = this,
        n = !1;return g(this).one(_.TRANSITION_END, function () {
      n = !0;
    }), setTimeout(function () {
      n || _.triggerTransitionEnd(e);
    }, t), this;
  }var _ = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(t) {
      for (; t += ~ ~(1e6 * Math.random()), document.getElementById(t););return t;
    }, getSelectorFromElement: function getSelectorFromElement(t) {
      var e = t.getAttribute("data-target");if (!e || "#" === e) {
        var n = t.getAttribute("href");e = n && "#" !== n ? n.trim() : "";
      }try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    }, getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
      if (!t) return 0;var e = g(t).css("transition-duration"),
          n = g(t).css("transition-delay"),
          i = parseFloat(e),
          o = parseFloat(n);return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0;
    }, reflow: function reflow(t) {
      return t.offsetHeight;
    }, triggerTransitionEnd: function triggerTransitionEnd(t) {
      g(t).trigger(n);
    }, supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(n);
    }, isElement: function isElement(t) {
      return (t[0] || t).nodeType;
    }, typeCheckConfig: function typeCheckConfig(t, e, n) {
      for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
        var o = n[i],
            r = e[i],
            s = r && _.isElement(r) ? "element" : (a = r, ({}).toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
      }var a;
    }, findShadowRoot: function findShadowRoot(t) {
      if (!document.documentElement.attachShadow) return null;if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;var e = t.getRootNode();return e instanceof ShadowRoot ? e : null;
    }, jQueryDetection: function jQueryDetection() {
      if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t = g.fn.jquery.split(" ")[0].split(".");if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    } };_.jQueryDetection(), g.fn.emulateTransitionEnd = o, g.event.special[_.TRANSITION_END] = { bindType: n, delegateType: n, handle: function handle(t) {
      if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
    } };var r = "alert",
      a = "bs.alert",
      c = "." + a,
      h = g.fn[r],
      f = { CLOSE: "close" + c, CLOSED: "closed" + c, CLICK_DATA_API: "click" + c + ".data-api" },
      d = "alert",
      m = "fade",
      p = "show",
      v = (function () {
    function i(t) {
      this._element = t;
    }var t = i.prototype;return t.close = function (t) {
      var e = this._element;t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, t.dispose = function () {
      g.removeData(this._element, a), this._element = null;
    }, t._getRootElement = function (t) {
      var e = _.getSelectorFromElement(t),
          n = !1;return e && (n = document.querySelector(e)), n = n || g(t).closest("." + d)[0];
    }, t._triggerCloseEvent = function (t) {
      var e = g.Event(f.CLOSE);return g(t).trigger(e), e;
    }, t._removeElement = function (e) {
      var n = this;if ((g(e).removeClass(p), g(e).hasClass(m))) {
        var t = _.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(t);
      } else this._destroyElement(e);
    }, t._destroyElement = function (t) {
      g(t).detach().trigger(f.CLOSED).remove();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this),
            e = t.data(a);e || (e = new i(this), t.data(a, e)), "close" === n && e[n](this);
      });
    }, i._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, s(i, null, [{ key: "VERSION", get: function get() {
        return "4.4.1";
      } }]), i;
  })();g(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', v._handleDismiss(new v())), g.fn[r] = v._jQueryInterface, g.fn[r].Constructor = v, g.fn[r].noConflict = function () {
    return g.fn[r] = h, v._jQueryInterface;
  };var y = "button",
      E = "bs.button",
      C = "." + E,
      T = ".data-api",
      b = g.fn[y],
      S = "active",
      D = "btn",
      I = "focus",
      w = '[data-toggle^="button"]',
      A = '[data-toggle="buttons"]',
      N = '[data-toggle="button"]',
      O = '[data-toggle="buttons"] .btn',
      k = 'input:not([type="hidden"])',
      P = ".active",
      L = ".btn",
      j = { CLICK_DATA_API: "click" + C + T, FOCUS_BLUR_DATA_API: "focus" + C + T + " blur" + C + T, LOAD_DATA_API: "load" + C + T },
      H = (function () {
    function n(t) {
      this._element = t;
    }var t = n.prototype;return t.toggle = function () {
      var t = !0,
          e = !0,
          n = g(this._element).closest(A)[0];if (n) {
        var i = this._element.querySelector(k);if (i) {
          if ("radio" === i.type) if (i.checked && this._element.classList.contains(S)) t = !1;else {
            var o = n.querySelector(P);o && g(o).removeClass(S);
          } else "checkbox" === i.type ? "LABEL" === this._element.tagName && i.checked === this._element.classList.contains(S) && (t = !1) : t = !1;t && (i.checked = !this._element.classList.contains(S), g(i).trigger("change")), i.focus(), e = !1;
        }
      }this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S));
    }, t.dispose = function () {
      g.removeData(this._element, E), this._element = null;
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(E);t || (t = new n(this), g(this).data(E, t)), "toggle" === e && t[e]();
      });
    }, s(n, null, [{ key: "VERSION", get: function get() {
        return "4.4.1";
      } }]), n;
  })();g(document).on(j.CLICK_DATA_API, w, function (t) {
    var e = t.target;if ((g(e).hasClass(D) || (e = g(e).closest(L)[0]), !e || e.hasAttribute("disabled") || e.classList.contains("disabled"))) t.preventDefault();else {
      var n = e.querySelector(k);if (n && (n.hasAttribute("disabled") || n.classList.contains("disabled"))) return void t.preventDefault();H._jQueryInterface.call(g(e), "toggle");
    }
  }).on(j.FOCUS_BLUR_DATA_API, w, function (t) {
    var e = g(t.target).closest(L)[0];g(e).toggleClass(I, /^focus(in)?$/.test(t.type));
  }), g(window).on(j.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(O)), e = 0, n = t.length; e < n; e++) {
      var i = t[e],
          o = i.querySelector(k);o.checked || o.hasAttribute("checked") ? i.classList.add(S) : i.classList.remove(S);
    }for (var r = 0, s = (t = [].slice.call(document.querySelectorAll(N))).length; r < s; r++) {
      var a = t[r];"true" === a.getAttribute("aria-pressed") ? a.classList.add(S) : a.classList.remove(S);
    }
  }), g.fn[y] = H._jQueryInterface, g.fn[y].Constructor = H, g.fn[y].noConflict = function () {
    return g.fn[y] = b, H._jQueryInterface;
  };var R = "carousel",
      x = "bs.carousel",
      F = "." + x,
      U = ".data-api",
      W = g.fn[R],
      q = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
      M = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
      K = "next",
      Q = "prev",
      B = "left",
      V = "right",
      Y = { SLIDE: "slide" + F, SLID: "slid" + F, KEYDOWN: "keydown" + F, MOUSEENTER: "mouseenter" + F, MOUSELEAVE: "mouseleave" + F, TOUCHSTART: "touchstart" + F, TOUCHMOVE: "touchmove" + F, TOUCHEND: "touchend" + F, POINTERDOWN: "pointerdown" + F, POINTERUP: "pointerup" + F, DRAG_START: "dragstart" + F, LOAD_DATA_API: "load" + F + U, CLICK_DATA_API: "click" + F + U },
      z = "carousel",
      X = "active",
      $ = "slide",
      G = "carousel-item-right",
      J = "carousel-item-left",
      Z = "carousel-item-next",
      tt = "carousel-item-prev",
      et = "pointer-event",
      nt = ".active",
      it = ".active.carousel-item",
      ot = ".carousel-item",
      rt = ".carousel-item img",
      st = ".carousel-item-next, .carousel-item-prev",
      at = ".carousel-indicators",
      lt = "[data-slide], [data-slide-to]",
      ct = '[data-ride="carousel"]',
      ht = { TOUCH: "touch", PEN: "pen" },
      ut = (function () {
    function r(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(at), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }var t = r.prototype;return t.next = function () {
      this._isSliding || this._slide(K);
    }, t.nextWhenVisible = function () {
      !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next();
    }, t.prev = function () {
      this._isSliding || this._slide(Q);
    }, t.pause = function (t) {
      t || (this._isPaused = !0), this._element.querySelector(st) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, t.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, t.to = function (t) {
      var e = this;this._activeElement = this._element.querySelector(it);var n = this._getItemIndex(this._activeElement);if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) g(this._element).one(Y.SLID, function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();var i = n < t ? K : Q;this._slide(i, this._items[t]);
      }
    }, t.dispose = function () {
      g(this._element).off(F), g.removeData(this._element, x), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, t._getConfig = function (t) {
      return t = l({}, q, {}, t), _.typeCheckConfig(R, t, M), t;
    }, t._handleSwipe = function () {
      var t = Math.abs(this.touchDeltaX);if (!(t <= 40)) {
        var e = t / this.touchDeltaX;(this.touchDeltaX = 0) < e && this.prev(), e < 0 && this.next();
      }
    }, t._addEventListeners = function () {
      var e = this;this._config.keyboard && g(this._element).on(Y.KEYDOWN, function (t) {
        return e._keydown(t);
      }), "hover" === this._config.pause && g(this._element).on(Y.MOUSEENTER, function (t) {
        return e.pause(t);
      }).on(Y.MOUSELEAVE, function (t) {
        return e.cycle(t);
      }), this._config.touch && this._addTouchEventListeners();
    }, t._addTouchEventListeners = function () {
      var e = this;if (this._touchSupported) {
        var n = function n(t) {
          e._pointerEvent && ht[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX);
        },
            i = function i(t) {
          e._pointerEvent && ht[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
            return e.cycle(t);
          }, 500 + e._config.interval));
        };g(this._element.querySelectorAll(rt)).on(Y.DRAG_START, function (t) {
          return t.preventDefault();
        }), this._pointerEvent ? (g(this._element).on(Y.POINTERDOWN, function (t) {
          return n(t);
        }), g(this._element).on(Y.POINTERUP, function (t) {
          return i(t);
        }), this._element.classList.add(et)) : (g(this._element).on(Y.TOUCHSTART, function (t) {
          return n(t);
        }), g(this._element).on(Y.TOUCHMOVE, function (t) {
          return (function (t) {
            t.originalEvent.touches && 1 < t.originalEvent.touches.length ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX;
          })(t);
        }), g(this._element).on(Y.TOUCHEND, function (t) {
          return i(t);
        }));
      }
    }, t._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {case 37:
          t.preventDefault(), this.prev();break;case 39:
          t.preventDefault(), this.next();}
    }, t._getItemIndex = function (t) {
      return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(ot)) : [], this._items.indexOf(t);
    }, t._getItemByDirection = function (t, e) {
      var n = t === K,
          i = t === Q,
          o = this._getItemIndex(e),
          r = this._items.length - 1;if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;var s = (o + (t === Q ? -1 : 1)) % this._items.length;return -1 == s ? this._items[this._items.length - 1] : this._items[s];
    }, t._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          i = this._getItemIndex(this._element.querySelector(it)),
          o = g.Event(Y.SLIDE, { relatedTarget: t, direction: e, from: i, to: n });return g(this._element).trigger(o), o;
    }, t._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        var e = [].slice.call(this._indicatorsElement.querySelectorAll(nt));g(e).removeClass(X);var n = this._indicatorsElement.children[this._getItemIndex(t)];n && g(n).addClass(X);
      }
    }, t._slide = function (t, e) {
      var n,
          i,
          o,
          r = this,
          s = this._element.querySelector(it),
          a = this._getItemIndex(s),
          l = e || s && this._getItemByDirection(t, s),
          c = this._getItemIndex(l),
          h = Boolean(this._interval);if ((o = t === K ? (n = J, i = Z, B) : (n = G, i = tt, V), l && g(l).hasClass(X))) this._isSliding = !1;else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);var u = g.Event(Y.SLID, { relatedTarget: l, direction: o, from: a, to: c });if (g(this._element).hasClass($)) {
          g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);var f = parseInt(l.getAttribute("data-interval"), 10);f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = f) : this._config.interval = this._config.defaultInterval || this._config.interval;var d = _.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END, function () {
            g(l).removeClass(n + " " + i).addClass(X), g(s).removeClass(X + " " + i + " " + n), r._isSliding = !1, setTimeout(function () {
              return g(r._element).trigger(u);
            }, 0);
          }).emulateTransitionEnd(d);
        } else g(s).removeClass(X), g(l).addClass(X), this._isSliding = !1, g(this._element).trigger(u);h && this.cycle();
      }
    }, r._jQueryInterface = function (i) {
      return this.each(function () {
        var t = g(this).data(x),
            e = l({}, q, {}, g(this).data());"object" == typeof i && (e = l({}, e, {}, i));var n = "string" == typeof i ? i : e.slide;if ((t || (t = new r(this, e), g(this).data(x, t)), "number" == typeof i)) t.to(i);else if ("string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n]();
        } else e.interval && e.ride && (t.pause(), t.cycle());
      });
    }, r._dataApiClickHandler = function (t) {
      var e = _.getSelectorFromElement(this);if (e) {
        var n = g(e)[0];if (n && g(n).hasClass(z)) {
          var i = l({}, g(n).data(), {}, g(this).data()),
              o = this.getAttribute("data-slide-to");o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(x).to(o), t.preventDefault();
        }
      }
    }, s(r, null, [{ key: "VERSION", get: function get() {
        return "4.4.1";
      } }, { key: "Default", get: function get() {
        return q;
      } }]), r;
  })();g(document).on(Y.CLICK_DATA_API, lt, ut._dataApiClickHandler), g(window).on(Y.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(ct)), e = 0, n = t.length; e < n; e++) {
      var i = g(t[e]);ut._jQueryInterface.call(i, i.data());
    }
  }), g.fn[R] = ut._jQueryInterface, g.fn[R].Constructor = ut, g.fn[R].noConflict = function () {
    return g.fn[R] = W, ut._jQueryInterface;
  };var ft = "collapse",
      dt = "bs.collapse",
      gt = "." + dt,
      _t = g.fn[ft],
      mt = { toggle: !0, parent: "" },
      pt = { toggle: "boolean", parent: "(string|element)" },
      vt = { SHOW: "show" + gt, SHOWN: "shown" + gt, HIDE: "hide" + gt, HIDDEN: "hidden" + gt, CLICK_DATA_API: "click" + gt + ".data-api" },
      yt = "show",
      Et = "collapse",
      Ct = "collapsing",
      Tt = "collapsed",
      bt = "width",
      St = "height",
      Dt = ".show, .collapsing",
      It = '[data-toggle="collapse"]',
      wt = (function () {
    function a(e, t) {
      this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));for (var n = [].slice.call(document.querySelectorAll(It)), i = 0, o = n.length; i < o; i++) {
        var r = n[i],
            s = _.getSelectorFromElement(r),
            a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
          return t === e;
        });null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r));
      }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }var t = a.prototype;return t.toggle = function () {
      g(this._element).hasClass(yt) ? this.hide() : this.show();
    }, t.show = function () {
      var t,
          e,
          n = this;if (!this._isTransitioning && !g(this._element).hasClass(yt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Dt)).filter(function (t) {
        return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(Et);
      })).length && (t = null), !(t && (e = g(t).not(this._selector).data(dt)) && e._isTransitioning))) {
        var i = g.Event(vt.SHOW);if ((g(this._element).trigger(i), !i.isDefaultPrevented())) {
          t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(dt, null));var o = this._getDimension();g(this._element).removeClass(Et).addClass(Ct), this._element.style[o] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(Tt).attr("aria-expanded", !0), this.setTransitioning(!0);var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
              s = _.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END, function () {
            g(n._element).removeClass(Ct).addClass(Et).addClass(yt), n._element.style[o] = "", n.setTransitioning(!1), g(n._element).trigger(vt.SHOWN);
          }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px";
        }
      }
    }, t.hide = function () {
      var t = this;if (!this._isTransitioning && g(this._element).hasClass(yt)) {
        var e = g.Event(vt.HIDE);if ((g(this._element).trigger(e), !e.isDefaultPrevented())) {
          var n = this._getDimension();this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), g(this._element).addClass(Ct).removeClass(Et).removeClass(yt);var i = this._triggerArray.length;if (0 < i) for (var o = 0; o < i; o++) {
            var r = this._triggerArray[o],
                s = _.getSelectorFromElement(r);if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(yt) || g(r).addClass(Tt).attr("aria-expanded", !1);
          }this.setTransitioning(!0);this._element.style[n] = "";var a = _.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END, function () {
            t.setTransitioning(!1), g(t._element).removeClass(Ct).addClass(Et).trigger(vt.HIDDEN);
          }).emulateTransitionEnd(a);
        }
      }
    }, t.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, t.dispose = function () {
      g.removeData(this._element, dt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, t._getConfig = function (t) {
      return (t = l({}, mt, {}, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(ft, t, pt), t;
    }, t._getDimension = function () {
      return g(this._element).hasClass(bt) ? bt : St;
    }, t._getParent = function () {
      var t,
          n = this;_.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
          i = [].slice.call(t.querySelectorAll(e));return g(i).each(function (t, e) {
        n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
      }), t;
    }, t._addAriaAndCollapsedClass = function (t, e) {
      var n = g(t).hasClass(yt);e.length && g(e).toggleClass(Tt, !n).attr("aria-expanded", n);
    }, a._getTargetFromElement = function (t) {
      var e = _.getSelectorFromElement(t);return e ? document.querySelector(e) : null;
    }, a._jQueryInterface = function (i) {
      return this.each(function () {
        var t = g(this),
            e = t.data(dt),
            n = l({}, mt, {}, t.data(), {}, "object" == typeof i && i ? i : {});if ((!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(dt, e)), "string" == typeof i)) {
          if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');e[i]();
        }
      });
    }, s(a, null, [{ key: "VERSION", get: function get() {
        return "4.4.1";
      } }, { key: "Default", get: function get() {
        return mt;
      } }]), a;
  })();g(document).on(vt.CLICK_DATA_API, It, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();var n = g(this),
        e = _.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(e));g(i).each(function () {
      var t = g(this),
          e = t.data(dt) ? "toggle" : n.data();wt._jQueryInterface.call(t, e);
    });
  }), g.fn[ft] = wt._jQueryInterface, g.fn[ft].Constructor = wt, g.fn[ft].noConflict = function () {
    return g.fn[ft] = _t, wt._jQueryInterface;
  };var At = "dropdown",
      Nt = "bs.dropdown",
      Ot = "." + Nt,
      kt = ".data-api",
      Pt = g.fn[At],
      Lt = new RegExp("38|40|27"),
      jt = { HIDE: "hide" + Ot, HIDDEN: "hidden" + Ot, SHOW: "show" + Ot, SHOWN: "shown" + Ot, CLICK: "click" + Ot, CLICK_DATA_API: "click" + Ot + kt, KEYDOWN_DATA_API: "keydown" + Ot + kt, KEYUP_DATA_API: "keyup" + Ot + kt },
      Ht = "disabled",
      Rt = "show",
      xt = "dropup",
      Ft = "dropright",
      Ut = "dropleft",
      Wt = "dropdown-menu-right",
      qt = "position-static",
      Mt = '[data-toggle="dropdown"]',
      Kt = ".dropdown form",
      Qt = ".dropdown-menu",
      Bt = ".navbar-nav",
      Vt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      Yt = "top-start",
      zt = "top-end",
      Xt = "bottom-start",
      $t = "bottom-end",
      Gt = "right-start",
      Jt = "left-start",
      Zt = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
      te = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
      ee = (function () {
    function c(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }var t = c.prototype;return t.toggle = function () {
      if (!this._element.disabled && !g(this._element).hasClass(Ht)) {
        var t = g(this._menu).hasClass(Rt);c._clearMenus(), t || this.show(!0);
      }
    }, t.show = function (t) {
      if ((void 0 === t && (t = !1), !(this._element.disabled || g(this._element).hasClass(Ht) || g(this._menu).hasClass(Rt)))) {
        var e = { relatedTarget: this._element },
            n = g.Event(jt.SHOW, e),
            i = c._getParentFromElement(this._element);if ((g(i).trigger(n), !n.isDefaultPrevented())) {
          if (!this._inNavbar && t) {
            if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o = this._element;"parent" === this._config.reference ? o = i : _.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && g(i).addClass(qt), this._popper = new u(o, this._menu, this._getPopperConfig());
          }"ontouchstart" in document.documentElement && 0 === g(i).closest(Bt).length && g(document.body).children().on("mouseover", null, g.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), g(this._menu).toggleClass(Rt), g(i).toggleClass(Rt).trigger(g.Event(jt.SHOWN, e));
        }
      }
    }, t.hide = function () {
      if (!this._element.disabled && !g(this._element).hasClass(Ht) && g(this._menu).hasClass(Rt)) {
        var t = { relatedTarget: this._element },
            e = g.Event(jt.HIDE, t),
            n = c._getParentFromElement(this._element);g(n).trigger(e), e.isDefaultPrevented() || (this._popper && this._popper.destroy(), g(this._menu).toggleClass(Rt), g(n).toggleClass(Rt).trigger(g.Event(jt.HIDDEN, t)));
      }
    }, t.dispose = function () {
      g.removeData(this._element, Nt), g(this._element).off(Ot), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, t.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, t._addEventListeners = function () {
      var e = this;g(this._element).on(jt.CLICK, function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle();
      });
    }, t._getConfig = function (t) {
      return t = l({}, this.constructor.Default, {}, g(this._element).data(), {}, t), _.typeCheckConfig(At, t, this.constructor.DefaultType), t;
    }, t._getMenuElement = function () {
      if (!this._menu) {
        var t = c._getParentFromElement(this._element);t && (this._menu = t.querySelector(Qt));
      }return this._menu;
    }, t._getPlacement = function () {
      var t = g(this._element.parentNode),
          e = Xt;return t.hasClass(xt) ? (e = Yt, g(this._menu).hasClass(Wt) && (e = zt)) : t.hasClass(Ft) ? e = Gt : t.hasClass(Ut) ? e = Jt : g(this._menu).hasClass(Wt) && (e = $t), e;
    }, t._detectNavbar = function () {
      return 0 < g(this._element).closest(".navbar").length;
    }, t._getOffset = function () {
      var e = this,
          t = {};return "function" == typeof this._config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, {}, e._config.offset(t.offsets, e._element) || {}), t;
      } : t.offset = this._config.offset, t;
    }, t._getPopperConfig = function () {
      var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), l({}, t, {}, this._config.popperConfig);
    }, c._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(Nt);if ((t || (t = new c(this, "object" == typeof e ? e : null), g(this).data(Nt, t)), "string" == typeof e)) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');t[e]();
        }
      });
    }, c._clearMenus = function (t) {
      if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = [].slice.call(document.querySelectorAll(Mt)), n = 0, i = e.length; n < i; n++) {
        var o = c._getParentFromElement(e[n]),
            r = g(e[n]).data(Nt),
            s = { relatedTarget: e[n] };if ((t && "click" === t.type && (s.clickEvent = t), r)) {
          var a = r._menu;if (g(o).hasClass(Rt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
            var l = g.Event(jt.HIDE, s);g(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), e[n].setAttribute("aria-expanded", "false"), r._popper && r._popper.destroy(), g(a).removeClass(Rt), g(o).removeClass(Rt).trigger(g.Event(jt.HIDDEN, s)));
          }
        }
      }
    }, c._getParentFromElement = function (t) {
      var e,
          n = _.getSelectorFromElement(t);return n && (e = document.querySelector(n)), e || t.parentNode;
    }, c._dataApiKeydownHandler = function (t) {
      if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(Qt).length)) : Lt.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Ht))) {
        var e = c._getParentFromElement(this),
            n = g(e).hasClass(Rt);if (n || 27 !== t.which) if (n && (!n || 27 !== t.which && 32 !== t.which)) {
          var i = [].slice.call(e.querySelectorAll(Vt)).filter(function (t) {
            return g(t).is(":visible");
          });if (0 !== i.length) {
            var o = i.indexOf(t.target);38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus();
          }
        } else {
          if (27 === t.which) {
            var r = e.querySelector(Mt);g(r).trigger("focus");
          }g(this).trigger("click");
        }
      }
    }, s(c, null, [{ key: "VERSION", get: function get() {
        return "4.4.1";
      } }, { key: "Default", get: function get() {
        return Zt;
      } }, { key: "DefaultType", get: function get() {
        return te;
      } }]), c;
  })();g(document).on(jt.KEYDOWN_DATA_API, Mt, ee._dataApiKeydownHandler).on(jt.KEYDOWN_DATA_API, Qt, ee._dataApiKeydownHandler).on(jt.CLICK_DATA_API + " " + jt.KEYUP_DATA_API, ee._clearMenus).on(jt.CLICK_DATA_API, Mt, function (t) {
    t.preventDefault(), t.stopPropagation(), ee._jQueryInterface.call(g(this), "toggle");
  }).on(jt.CLICK_DATA_API, Kt, function (t) {
    t.stopPropagation();
  }), g.fn[At] = ee._jQueryInterface, g.fn[At].Constructor = ee, g.fn[At].noConflict = function () {
    return g.fn[At] = Pt, ee._jQueryInterface;
  };var ne = "modal",
      ie = "bs.modal",
      oe = "." + ie,
      re = g.fn[ne],
      se = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      ae = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
      le = { HIDE: "hide" + oe, HIDE_PREVENTED: "hidePrevented" + oe, HIDDEN: "hidden" + oe, SHOW: "show" + oe, SHOWN: "shown" + oe, FOCUSIN: "focusin" + oe, RESIZE: "resize" + oe, CLICK_DISMISS: "click.dismiss" + oe, KEYDOWN_DISMISS: "keydown.dismiss" + oe, MOUSEUP_DISMISS: "mouseup.dismiss" + oe, MOUSEDOWN_DISMISS: "mousedown.dismiss" + oe, CLICK_DATA_API: "click" + oe + ".data-api" },
      ce = "modal-dialog-scrollable",
      he = "modal-scrollbar-measure",
      ue = "modal-backdrop",
      fe = "modal-open",
      de = "fade",
      ge = "show",
      _e = "modal-static",
      me = ".modal-dialog",
      pe = ".modal-body",
      ve = '[data-toggle="modal"]',
      ye = '[data-dismiss="modal"]',
      Ee = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      Ce = ".sticky-top",
      Te = (function () {
    function o(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(me), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
    }var t = o.prototype;return t.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, t.show = function (t) {
      var e = this;if (!this._isShown && !this._isTransitioning) {
        g(this._element).hasClass(de) && (this._isTransitioning = !0);var n = g.Event(le.SHOW, { relatedTarget: t });g(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), g(this._element).on(le.CLICK_DISMISS, ye, function (t) {
          return e.hide(t);
        }), g(this._dialog).on(le.MOUSEDOWN_DISMISS, function () {
          g(e._element).one(le.MOUSEUP_DISMISS, function (t) {
            g(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, t.hide = function (t) {
      var e = this;if ((t && t.preventDefault(), this._isShown && !this._isTransitioning)) {
        var n = g.Event(le.HIDE);if ((g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented())) {
          this._isShown = !1;var i = g(this._element).hasClass(de);if ((i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), g(document).off(le.FOCUSIN), g(this._element).removeClass(ge), g(this._element).off(le.CLICK_DISMISS), g(this._dialog).off(le.MOUSEDOWN_DISMISS), i)) {
            var o = _.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END, function (t) {
              return e._hideModal(t);
            }).emulateTransitionEnd(o);
          } else this._hideModal();
        }
      }
    }, t.dispose = function () {
      [window, this._element, this._dialog].forEach(function (t) {
        return g(t).off(oe);
      }), g(document).off(le.FOCUSIN), g.removeData(this._element, ie), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, t.handleUpdate = function () {
      this._adjustDialog();
    }, t._getConfig = function (t) {
      return t = l({}, se, {}, t), _.typeCheckConfig(ne, t, ae), t;
    }, t._triggerBackdropTransition = function () {
      var t = this;if ("static" === this._config.backdrop) {
        var e = g.Event(le.HIDE_PREVENTED);if ((g(this._element).trigger(e), e.defaultPrevented)) return;this._element.classList.add(_e);var n = _.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END, function () {
          t._element.classList.remove(_e);
        }).emulateTransitionEnd(n), this._element.focus();
      } else this.hide();
    }, t._showElement = function (t) {
      var e = this,
          n = g(this._element).hasClass(de),
          i = this._dialog ? this._dialog.querySelector(pe) : null;this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), g(this._dialog).hasClass(ce) && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && _.reflow(this._element), g(this._element).addClass(ge), this._config.focus && this._enforceFocus();function o() {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(r);
      }var r = g.Event(le.SHOWN, { relatedTarget: t });if (n) {
        var s = _.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(s);
      } else o();
    }, t._enforceFocus = function () {
      var e = this;g(document).off(le.FOCUSIN).on(le.FOCUSIN, function (t) {
        document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus();
      });
    }, t._setEscapeEvent = function () {
      var e = this;this._isShown && this._config.keyboard ? g(this._element).on(le.KEYDOWN_DISMISS, function (t) {
        27 === t.which && e._triggerBackdropTransition();
      }) : this._isShown || g(this._element).off(le.KEYDOWN_DISMISS);
    }, t._setResizeEvent = function () {
      var e = this;this._isShown ? g(window).on(le.RESIZE, function (t) {
        return e.handleUpdate(t);
      }) : g(window).off(le.RESIZE);
    }, t._hideModal = function () {
      var t = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
        g(document.body).removeClass(fe), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(le.HIDDEN);
      });
    }, t._removeBackdrop = function () {
      this._backdrop && (g(this._backdrop).remove(), this._backdrop = null);
    }, t._showBackdrop = function (t) {
      var e = this,
          n = g(this._element).hasClass(de) ? de : "";if (this._isShown && this._config.backdrop) {
        if ((this._backdrop = document.createElement("div"), this._backdrop.className = ue, n && this._backdrop.classList.add(n), g(this._backdrop).appendTo(document.body), g(this._element).on(le.CLICK_DISMISS, function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && e._triggerBackdropTransition();
        }), n && _.reflow(this._backdrop), g(this._backdrop).addClass(ge), !t)) return;if (!n) return void t();var i = _.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        g(this._backdrop).removeClass(ge);var o = function o() {
          e._removeBackdrop(), t && t();
        };if (g(this._element).hasClass(de)) {
          var r = _.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
        } else o();
      } else t && t();
    }, t._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, t._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, t._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, t._setScrollbar = function () {
      var o = this;if (this._isBodyOverflowing) {
        var t = [].slice.call(document.querySelectorAll(Ee)),
            e = [].slice.call(document.querySelectorAll(Ce));g(t).each(function (t, e) {
          var n = e.style.paddingRight,
              i = g(e).css("padding-right");g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
        }), g(e).each(function (t, e) {
          var n = e.style.marginRight,
              i = g(e).css("margin-right");g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px");
        });var n = document.body.style.paddingRight,
            i = g(document.body).css("padding-right");g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
      }g(document.body).addClass(fe);
    }, t._resetScrollbar = function () {
      var t = [].slice.call(document.querySelectorAll(Ee));g(t).each(function (t, e) {
        var n = g(e).data("padding-right");g(e).removeData("padding-right"), e.style.paddingRight = n || "";
      });var e = [].slice.call(document.querySelectorAll("" + Ce));g(e).each(function (t, e) {
        var n = g(e).data("margin-right");"undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right");
      });var n = g(document.body).data("padding-right");g(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
    }, t._getScrollbarWidth = function () {
      var t = document.createElement("div");t.className = he, document.body.appendChild(t);var e = t.getBoundingClientRect().width - t.clientWidth;return document.body.removeChild(t), e;
    }, o._jQueryInterface = function (n, i) {
      return this.each(function () {
        var t = g(this).data(ie),
            e = l({}, se, {}, g(this).data(), {}, "object" == typeof n && n ? n : {});if ((t || (t = new o(this, e), g(this).data(ie, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n](i);
        } else e.show && t.show(i);
      });
    }, s(o, null, [{ key: "VERSION", get: function get() {
        return "4.4.1";
      } }, { key: "Default", get: function get() {
        return se;
      } }]), o;
  })();g(document).on(le.CLICK_DATA_API, ve, function (t) {
    var e,
        n = this,
        i = _.getSelectorFromElement(this);i && (e = document.querySelector(i));var o = g(e).data(ie) ? "toggle" : l({}, g(e).data(), {}, g(this).data());"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();var r = g(e).one(le.SHOW, function (t) {
      t.isDefaultPrevented() || r.one(le.HIDDEN, function () {
        g(n).is(":visible") && n.focus();
      });
    });Te._jQueryInterface.call(g(e), o, this);
  }), g.fn[ne] = Te._jQueryInterface, g.fn[ne].Constructor = Te, g.fn[ne].noConflict = function () {
    return g.fn[ne] = re, Te._jQueryInterface;
  };var be = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      Se = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
      De = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      Ie = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function we(t, r, e) {
    if (0 === t.length) return t;if (e && "function" == typeof e) return e(t);for (var n = new window.DOMParser().parseFromString(t, "text/html"), s = Object.keys(r), a = [].slice.call(n.body.querySelectorAll("*")), i = function i(t) {
      var e = a[t],
          n = e.nodeName.toLowerCase();if (-1 === s.indexOf(e.nodeName.toLowerCase())) return e.parentNode.removeChild(e), "continue";var i = [].slice.call(e.attributes),
          o = [].concat(r["*"] || [], r[n] || []);i.forEach(function (t) {
        !(function (t, e) {
          var n = t.nodeName.toLowerCase();if (-1 !== e.indexOf(n)) return -1 === be.indexOf(n) || Boolean(t.nodeValue.match(De) || t.nodeValue.match(Ie));for (var i = e.filter(function (t) {
            return t instanceof RegExp;
          }), o = 0, r = i.length; o < r; o++) if (n.match(i[o])) return !0;return !1;
        })(t, o) && e.removeAttribute(t.nodeName);
      });
    }, o = 0, l = a.length; o < l; o++) i(o);return n.body.innerHTML;
  }var Ae = "tooltip",
      Ne = "bs.tooltip",
      Oe = "." + Ne,
      ke = g.fn[Ae],
      Pe = "bs-tooltip",
      Le = new RegExp("(^|\\s)" + Pe + "\\S+", "g"),
      je = ["sanitize", "whiteList", "sanitizeFn"],
      He = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object", popperConfig: "(null|object)" },
      Re = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
      xe = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: Se, popperConfig: null },
      Fe = "show",
      Ue = "out",
      We = { HIDE: "hide" + Oe, HIDDEN: "hidden" + Oe, SHOW: "show" + Oe, SHOWN: "shown" + Oe, INSERTED: "inserted" + Oe, CLICK: "click" + Oe, FOCUSIN: "focusin" + Oe, FOCUSOUT: "focusout" + Oe, MOUSEENTER: "mouseenter" + Oe, MOUSELEAVE: "mouseleave" + Oe },
      qe = "fade",
      Me = "show",
      Ke = ".tooltip-inner",
      Qe = ".arrow",
      Be = "hover",
      Ve = "focus",
      Ye = "click",
      ze = "manual",
      Xe = (function () {
    function i(t, e) {
      if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }var t = i.prototype;return t.enable = function () {
      this._isEnabled = !0;
    }, t.disable = function () {
      this._isEnabled = !1;
    }, t.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, t.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this.constructor.DATA_KEY,
            n = g(t.currentTarget).data(e);n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (g(this.getTipElement()).hasClass(Me)) return void this._leave(null, this);this._enter(null, this);
      }
    }, t.dispose = function () {
      clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, t.show = function () {
      var e = this;if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements");var t = g.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
        g(this.element).trigger(t);var n = _.findShadowRoot(this.element),
            i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);if (t.isDefaultPrevented() || !i) return;var o = this.getTipElement(),
            r = _.getUID(this.constructor.NAME);o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(qe);var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
            a = this._getAttachment(s);this.addAttachmentClass(a);var l = this._getContainer();g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o, this._getPopperConfig(a)), g(o).addClass(Me), "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);var c = function c() {
          e.config.animation && e._fixTransition();var t = e._hoverState;e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), t === Ue && e._leave(null, e);
        };if (g(this.tip).hasClass(qe)) {
          var h = _.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h);
        } else c();
      }
    }, t.hide = function (t) {
      function e() {
        n._hoverState !== Fe && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), g(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t();
      }var n = this,
          i = this.getTipElement(),
          o = g.Event(this.constructor.Event.HIDE);if ((g(this.element).trigger(o), !o.isDefaultPrevented())) {
        if ((g(i).removeClass(Me), "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), this._activeTrigger[Ye] = !1, this._activeTrigger[Ve] = !1, this._activeTrigger[Be] = !1, g(this.tip).hasClass(qe))) {
          var r = _.getTransitionDurationFromElement(i);g(i).one(_.TRANSITION_END, e).emulateTransitionEnd(r);
        } else e();this._hoverState = "";
      }
    }, t.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, t.isWithContent = function () {
      return Boolean(this.getTitle());
    }, t.addAttachmentClass = function (t) {
      g(this.getTipElement()).addClass(Pe + "-" + t);
    }, t.getTipElement = function () {
      return this.tip = this.tip || g(this.config.template)[0], this.tip;
    }, t.setContent = function () {
      var t = this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ke)), this.getTitle()), g(t).removeClass(qe + " " + Me);
    }, t.setElementContent = function (t, e) {
      "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = we(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text());
    }, t.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");return t = t || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title);
    }, t._getPopperConfig = function (t) {
      var e = this;return l({}, { placement: t, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: Qe }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function onCreate(t) {
          t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
        }, onUpdate: function onUpdate(t) {
          return e._handlePopperPlacementChange(t);
        } }, {}, this.config.popperConfig);
    }, t._getOffset = function () {
      var e = this,
          t = {};return "function" == typeof this.config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, {}, e.config.offset(t.offsets, e.element) || {}), t;
      } : t.offset = this.config.offset, t;
    }, t._getContainer = function () {
      return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container);
    }, t._getAttachment = function (t) {
      return Re[t.toUpperCase()];
    }, t._setListeners = function () {
      var i = this;this.config.trigger.split(" ").forEach(function (t) {
        if ("click" === t) g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
          return i.toggle(t);
        });else if (t !== ze) {
          var e = t === Be ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = t === Be ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;g(i.element).on(e, i.config.selector, function (t) {
            return i._enter(t);
          }).on(n, i.config.selector, function (t) {
            return i._leave(t);
          });
        }
      }), this._hideModalHandler = function () {
        i.element && i.hide();
      }, g(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = l({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
    }, t._fixTitle = function () {
      var t = typeof this.element.getAttribute("data-original-title");!this.element.getAttribute("title") && "string" == t || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, t._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;(e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Ve : Be] = !0), g(e.getTipElement()).hasClass(Me) || e._hoverState === Fe ? e._hoverState = Fe : (clearTimeout(e._timeout), e._hoverState = Fe, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        e._hoverState === Fe && e.show();
      }, e.config.delay.show) : e.show());
    }, t._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;(e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Ve : Be] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = Ue, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        e._hoverState === Ue && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, t._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;return !1;
    }, t._getConfig = function (t) {
      var e = g(this.element).data();return Object.keys(e).forEach(function (t) {
        -1 !== je.indexOf(t) && delete e[t];
      }), "number" == typeof (t = l({}, this.constructor.Default, {}, e, {}, "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _.typeCheckConfig(Ae, t, this.constructor.DefaultType), t.sanitize && (t.template = we(t.template, t.whiteList, t.sanitizeFn)), t;
    }, t._getDelegateConfig = function () {
      var t = {};if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);return t;
    }, t._cleanTipClass = function () {
      var t = g(this.getTipElement()),
          e = t.attr("class").match(Le);null !== e && e.length && t.removeClass(e.join(""));
    }, t._handlePopperPlacementChange = function (t) {
      var e = t.instance;this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
    }, t._fixTransition = function () {
      var t = this.getTipElement(),
          e = this.config.animation;null === t.getAttribute("x-placement") && (g(t).removeClass(qe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this).data(Ne),
            e = "object" == typeof n && n;if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ne, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n]();
        }
      });
    }, s(i, null, [{ key: "VERSION", get: function get() {
        return "4.4.1";
      } }, { key: "Default", get: function get() {
        return xe;
      } }, { key: "NAME", get: function get() {
        return Ae;
      } }, { key: "DATA_KEY", get: function get() {
        return Ne;
      } }, { key: "Event", get: function get() {
        return We;
      } }, { key: "EVENT_KEY", get: function get() {
        return Oe;
      } }, { key: "DefaultType", get: function get() {
        return He;
      } }]), i;
  })();g.fn[Ae] = Xe._jQueryInterface, g.fn[Ae].Constructor = Xe, g.fn[Ae].noConflict = function () {
    return g.fn[Ae] = ke, Xe._jQueryInterface;
  };var $e = "popover",
      Ge = "bs.popover",
      Je = "." + Ge,
      Ze = g.fn[$e],
      tn = "bs-popover",
      en = new RegExp("(^|\\s)" + tn + "\\S+", "g"),
      nn = l({}, Xe.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
      on = l({}, Xe.DefaultType, { content: "(string|element|function)" }),
      rn = "fade",
      sn = "show",
      an = ".popover-header",
      ln = ".popover-body",
      cn = { HIDE: "hide" + Je, HIDDEN: "hidden" + Je, SHOW: "show" + Je, SHOWN: "shown" + Je, INSERTED: "inserted" + Je, CLICK: "click" + Je, FOCUSIN: "focusin" + Je, FOCUSOUT: "focusout" + Je, MOUSEENTER: "mouseenter" + Je, MOUSELEAVE: "mouseleave" + Je },
      hn = (function (t) {
    function i() {
      return t.apply(this, arguments) || this;
    }!(function (t, e) {
      t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e;
    })(i, t);var e = i.prototype;return e.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, e.addAttachmentClass = function (t) {
      g(this.getTipElement()).addClass(tn + "-" + t);
    }, e.getTipElement = function () {
      return this.tip = this.tip || g(this.config.template)[0], this.tip;
    }, e.setContent = function () {
      var t = g(this.getTipElement());this.setElementContent(t.find(an), this.getTitle());var e = this._getContent();"function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(ln), e), t.removeClass(rn + " " + sn);
    }, e._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, e._cleanTipClass = function () {
      var t = g(this.getTipElement()),
          e = t.attr("class").match(en);null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this).data(Ge),
            e = "object" == typeof n ? n : null;if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ge, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n]();
        }
      });
    }, s(i, null, [{ key: "VERSION", get: function get() {
        return "4.4.1";
      } }, { key: "Default", get: function get() {
        return nn;
      } }, { key: "NAME", get: function get() {
        return $e;
      } }, { key: "DATA_KEY", get: function get() {
        return Ge;
      } }, { key: "Event", get: function get() {
        return cn;
      } }, { key: "EVENT_KEY", get: function get() {
        return Je;
      } }, { key: "DefaultType", get: function get() {
        return on;
      } }]), i;
  })(Xe);g.fn[$e] = hn._jQueryInterface, g.fn[$e].Constructor = hn, g.fn[$e].noConflict = function () {
    return g.fn[$e] = Ze, hn._jQueryInterface;
  };var un = "scrollspy",
      fn = "bs.scrollspy",
      dn = "." + fn,
      gn = g.fn[un],
      _n = { offset: 10, method: "auto", target: "" },
      mn = { offset: "number", method: "string", target: "(string|element)" },
      pn = { ACTIVATE: "activate" + dn, SCROLL: "scroll" + dn, LOAD_DATA_API: "load" + dn + ".data-api" },
      vn = "dropdown-item",
      yn = "active",
      En = '[data-spy="scroll"]',
      Cn = ".nav, .list-group",
      Tn = ".nav-link",
      bn = ".nav-item",
      Sn = ".list-group-item",
      Dn = ".dropdown",
      In = ".dropdown-item",
      wn = ".dropdown-toggle",
      An = "offset",
      Nn = "position",
      On = (function () {
    function n(t, e) {
      var n = this;this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + Tn + "," + this._config.target + " " + Sn + "," + this._config.target + " " + In, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, g(this._scrollElement).on(pn.SCROLL, function (t) {
        return n._process(t);
      }), this.refresh(), this._process();
    }var t = n.prototype;return t.refresh = function () {
      var e = this,
          t = this._scrollElement === this._scrollElement.window ? An : Nn,
          o = "auto" === this._config.method ? t : this._config.method,
          r = o === Nn ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
        var e,
            n = _.getSelectorFromElement(t);if ((n && (e = document.querySelector(n)), e)) {
          var i = e.getBoundingClientRect();if (i.width || i.height) return [g(e)[o]().top + r, n];
        }return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1]);
      });
    }, t.dispose = function () {
      g.removeData(this._element, fn), g(this._scrollElement).off(dn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, t._getConfig = function (t) {
      if ("string" != typeof (t = l({}, _n, {}, "object" == typeof t && t ? t : {})).target) {
        var e = g(t.target).attr("id");e || (e = _.getUID(un), g(t.target).attr("id", e)), t.target = "#" + e;
      }return _.typeCheckConfig(un, t, mn), t;
    }, t._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, t._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, t._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, t._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
        var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();for (var o = this._offsets.length; o--;) {
          this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
        }
      }
    }, t._activate = function (e) {
      this._activeTarget = e, this._clear();var t = this._selector.split(",").map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      }),
          n = g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(vn) ? (n.closest(Dn).find(wn).addClass(yn), n.addClass(yn)) : (n.addClass(yn), n.parents(Cn).prev(Tn + ", " + Sn).addClass(yn), n.parents(Cn).prev(bn).children(Tn).addClass(yn)), g(this._scrollElement).trigger(pn.ACTIVATE, { relatedTarget: e });
    }, t._clear = function () {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
        return t.classList.contains(yn);
      }).forEach(function (t) {
        return t.classList.remove(yn);
      });
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(fn);if ((t || (t = new n(this, "object" == typeof e && e), g(this).data(fn, t)), "string" == typeof e)) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');t[e]();
        }
      });
    }, s(n, null, [{ key: "VERSION", get: function get() {
        return "4.4.1";
      } }, { key: "Default", get: function get() {
        return _n;
      } }]), n;
  })();g(window).on(pn.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(En)), e = t.length; e--;) {
      var n = g(t[e]);On._jQueryInterface.call(n, n.data());
    }
  }), g.fn[un] = On._jQueryInterface, g.fn[un].Constructor = On, g.fn[un].noConflict = function () {
    return g.fn[un] = gn, On._jQueryInterface;
  };var kn = "bs.tab",
      Pn = "." + kn,
      Ln = g.fn.tab,
      jn = { HIDE: "hide" + Pn, HIDDEN: "hidden" + Pn, SHOW: "show" + Pn, SHOWN: "shown" + Pn, CLICK_DATA_API: "click" + Pn + ".data-api" },
      Hn = "dropdown-menu",
      Rn = "active",
      xn = "disabled",
      Fn = "fade",
      Un = "show",
      Wn = ".dropdown",
      qn = ".nav, .list-group",
      Mn = ".active",
      Kn = "> li > .active",
      Qn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      Bn = ".dropdown-toggle",
      Vn = "> .dropdown-menu .active",
      Yn = (function () {
    function i(t) {
      this._element = t;
    }var t = i.prototype;return t.show = function () {
      var n = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Rn) || g(this._element).hasClass(xn))) {
        var t,
            i,
            e = g(this._element).closest(qn)[0],
            o = _.getSelectorFromElement(this._element);if (e) {
          var r = "UL" === e.nodeName || "OL" === e.nodeName ? Kn : Mn;i = (i = g.makeArray(g(e).find(r)))[i.length - 1];
        }var s = g.Event(jn.HIDE, { relatedTarget: this._element }),
            a = g.Event(jn.SHOW, { relatedTarget: i });if ((i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented())) {
          o && (t = document.querySelector(o)), this._activate(this._element, e);var l = function l() {
            var t = g.Event(jn.HIDDEN, { relatedTarget: n._element }),
                e = g.Event(jn.SHOWN, { relatedTarget: i });g(i).trigger(t), g(n._element).trigger(e);
          };t ? this._activate(t, t.parentNode, l) : l();
        }
      }
    }, t.dispose = function () {
      g.removeData(this._element, kn), this._element = null;
    }, t._activate = function (t, e, n) {
      function i() {
        return o._transitionComplete(t, r, n);
      }var o = this,
          r = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Mn) : g(e).find(Kn))[0],
          s = n && r && g(r).hasClass(Fn);if (r && s) {
        var a = _.getTransitionDurationFromElement(r);g(r).removeClass(Un).one(_.TRANSITION_END, i).emulateTransitionEnd(a);
      } else i();
    }, t._transitionComplete = function (t, e, n) {
      if (e) {
        g(e).removeClass(Rn);var i = g(e.parentNode).find(Vn)[0];i && g(i).removeClass(Rn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }if ((g(t).addClass(Rn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), t.classList.contains(Fn) && t.classList.add(Un), t.parentNode && g(t.parentNode).hasClass(Hn))) {
        var o = g(t).closest(Wn)[0];if (o) {
          var r = [].slice.call(o.querySelectorAll(Bn));g(r).addClass(Rn);
        }t.setAttribute("aria-expanded", !0);
      }n && n();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this),
            e = t.data(kn);if ((e || (e = new i(this), t.data(kn, e)), "string" == typeof n)) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');e[n]();
        }
      });
    }, s(i, null, [{ key: "VERSION", get: function get() {
        return "4.4.1";
      } }]), i;
  })();g(document).on(jn.CLICK_DATA_API, Qn, function (t) {
    t.preventDefault(), Yn._jQueryInterface.call(g(this), "show");
  }), g.fn.tab = Yn._jQueryInterface, g.fn.tab.Constructor = Yn, g.fn.tab.noConflict = function () {
    return g.fn.tab = Ln, Yn._jQueryInterface;
  };var zn = "toast",
      Xn = "bs.toast",
      $n = "." + Xn,
      Gn = g.fn[zn],
      Jn = { CLICK_DISMISS: "click.dismiss" + $n, HIDE: "hide" + $n, HIDDEN: "hidden" + $n, SHOW: "show" + $n, SHOWN: "shown" + $n },
      Zn = "fade",
      ti = "hide",
      ei = "show",
      ni = "showing",
      ii = { animation: "boolean", autohide: "boolean", delay: "number" },
      oi = { animation: !0, autohide: !0, delay: 500 },
      ri = '[data-dismiss="toast"]',
      si = (function () {
    function i(t, e) {
      this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners();
    }var t = i.prototype;return t.show = function () {
      var t = this,
          e = g.Event(Jn.SHOW);if ((g(this._element).trigger(e), !e.isDefaultPrevented())) {
        this._config.animation && this._element.classList.add(Zn);var n = function n() {
          t._element.classList.remove(ni), t._element.classList.add(ei), g(t._element).trigger(Jn.SHOWN), t._config.autohide && (t._timeout = setTimeout(function () {
            t.hide();
          }, t._config.delay));
        };if ((this._element.classList.remove(ti), _.reflow(this._element), this._element.classList.add(ni), this._config.animation)) {
          var i = _.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END, n).emulateTransitionEnd(i);
        } else n();
      }
    }, t.hide = function () {
      if (this._element.classList.contains(ei)) {
        var t = g.Event(Jn.HIDE);g(this._element).trigger(t), t.isDefaultPrevented() || this._close();
      }
    }, t.dispose = function () {
      clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(ei) && this._element.classList.remove(ei), g(this._element).off(Jn.CLICK_DISMISS), g.removeData(this._element, Xn), this._element = null, this._config = null;
    }, t._getConfig = function (t) {
      return t = l({}, oi, {}, g(this._element).data(), {}, "object" == typeof t && t ? t : {}), _.typeCheckConfig(zn, t, this.constructor.DefaultType), t;
    }, t._setListeners = function () {
      var t = this;g(this._element).on(Jn.CLICK_DISMISS, ri, function () {
        return t.hide();
      });
    }, t._close = function () {
      function t() {
        e._element.classList.add(ti), g(e._element).trigger(Jn.HIDDEN);
      }var e = this;if ((this._element.classList.remove(ei), this._config.animation)) {
        var n = _.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END, t).emulateTransitionEnd(n);
      } else t();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this),
            e = t.data(Xn);if ((e || (e = new i(this, "object" == typeof n && n), t.data(Xn, e)), "string" == typeof n)) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');e[n](this);
        }
      });
    }, s(i, null, [{ key: "VERSION", get: function get() {
        return "4.4.1";
      } }, { key: "DefaultType", get: function get() {
        return ii;
      } }, { key: "Default", get: function get() {
        return oi;
      } }]), i;
  })();g.fn[zn] = si._jQueryInterface, g.fn[zn].Constructor = si, g.fn[zn].noConflict = function () {
    return g.fn[zn] = Gn, si._jQueryInterface;
  }, t.Alert = v, t.Button = H, t.Carousel = ut, t.Collapse = wt, t.Dropdown = ee, t.Modal = Te, t.Popover = hn, t.Scrollspy = On, t.Tab = Yn, t.Toast = si, t.Tooltip = Xe, t.Util = _, Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.min.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Dom7 2.1.3
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * http://framework7.io/docs/dom.html
 *
 * Copyright 2019, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: February 11, 2019
 */


Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ssrWindow = __webpack_require__(4);

var Dom7 = function Dom7(arr) {
  _classCallCheck(this, Dom7);

  var self = this;
  // Create array-like object
  for (var i = 0; i < arr.length; i += 1) {
    self[i] = arr[i];
  }
  self.length = arr.length;
  // Return collection with methods
  return this;
};

function $(selector, context) {
  var arr = [];
  var i = 0;
  if (selector && !context) {
    if (selector instanceof Dom7) {
      return selector;
    }
  }
  if (selector) {
    // String
    if (typeof selector === 'string') {
      var els = undefined;
      var tempParent = undefined;
      var _html = selector.trim();
      if (_html.indexOf('<') >= 0 && _html.indexOf('>') >= 0) {
        var toCreate = 'div';
        if (_html.indexOf('<li') === 0) toCreate = 'ul';
        if (_html.indexOf('<tr') === 0) toCreate = 'tbody';
        if (_html.indexOf('<td') === 0 || _html.indexOf('<th') === 0) toCreate = 'tr';
        if (_html.indexOf('<tbody') === 0) toCreate = 'table';
        if (_html.indexOf('<option') === 0) toCreate = 'select';
        tempParent = _ssrWindow.document.createElement(toCreate);
        tempParent.innerHTML = _html;
        for (i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i]);
        }
      } else {
        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
          // Pure ID selector
          els = [_ssrWindow.document.getElementById(selector.trim().split('#')[1])];
        } else {
          // Other selectors
          els = (context || _ssrWindow.document).querySelectorAll(selector.trim());
        }
        for (i = 0; i < els.length; i += 1) {
          if (els[i]) arr.push(els[i]);
        }
      }
    } else if (selector.nodeType || selector === _ssrWindow.window || selector === _ssrWindow.document) {
      // Node/element
      arr.push(selector);
    } else if (selector.length > 0 && selector[0].nodeType) {
      // Array of elements or instance of Dom
      for (i = 0; i < selector.length; i += 1) {
        arr.push(selector[i]);
      }
    }
  }
  return new Dom7(arr);
}

$.fn = Dom7.prototype;
$.Class = Dom7;
$.Dom7 = Dom7;

function unique(arr) {
  var uniqueArray = [];
  for (var i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }
  return uniqueArray;
}
function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, function (match, group1) {
    return group1.toUpperCase();
  });
}

function requestAnimationFrame(callback) {
  if (_ssrWindow.window.requestAnimationFrame) return _ssrWindow.window.requestAnimationFrame(callback);else if (_ssrWindow.window.webkitRequestAnimationFrame) return _ssrWindow.window.webkitRequestAnimationFrame(callback);
  return _ssrWindow.window.setTimeout(callback, 1000 / 60);
}
function cancelAnimationFrame(id) {
  if (_ssrWindow.window.cancelAnimationFrame) return _ssrWindow.window.cancelAnimationFrame(id);else if (_ssrWindow.window.webkitCancelAnimationFrame) return _ssrWindow.window.webkitCancelAnimationFrame(id);
  return _ssrWindow.window.clearTimeout(id);
}

// Classes and attributes
function addClass(className) {
  if (typeof className === 'undefined') {
    return this;
  }
  var classes = className.split(' ');
  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.add(classes[i]);
    }
  }
  return this;
}
function removeClass(className) {
  var classes = className.split(' ');
  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.remove(classes[i]);
    }
  }
  return this;
}
function hasClass(className) {
  if (!this[0]) return false;
  return this[0].classList.contains(className);
}
function toggleClass(className) {
  var classes = className.split(' ');
  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.toggle(classes[i]);
    }
  }
  return this;
}
function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  }

  // Set attrs
  for (var i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      // eslint-disable-next-line
      for (var attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }
  return this;
}
// eslint-disable-next-line
function removeAttr(attr) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }
  return this;
}
// eslint-disable-next-line
function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        // eslint-disable-next-line
        for (var propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }
    return this;
  }
}
function data(key, value) {
  var el = undefined;
  if (typeof value === 'undefined') {
    el = this[0];
    // Get value
    if (el) {
      if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
        return el.dom7ElementDataStorage[key];
      }

      var dataKey = el.getAttribute('data-' + key);
      if (dataKey) {
        return dataKey;
      }
      return undefined;
    }
    return undefined;
  }

  // Set value
  for (var i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }
  return this;
}
function removeData(key) {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];
    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}
function dataset() {
  var el = this[0];
  if (!el) return undefined;
  var dataset = {}; // eslint-disable-line
  if (el.dataset) {
    // eslint-disable-next-line
    for (var dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (var i = 0; i < el.attributes.length; i += 1) {
      // eslint-disable-next-line
      var _attr = el.attributes[i];
      if (_attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(_attr.name.split('data-')[1])] = _attr.value;
      }
    }
  }
  // eslint-disable-next-line
  for (var key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }
  return dataset;
}
function val(value) {
  var dom = this;
  if (typeof value === 'undefined') {
    if (dom[0]) {
      if (dom[0].multiple && dom[0].nodeName.toLowerCase() === 'select') {
        var values = [];
        for (var i = 0; i < dom[0].selectedOptions.length; i += 1) {
          values.push(dom[0].selectedOptions[i].value);
        }
        return values;
      }
      return dom[0].value;
    }
    return undefined;
  }

  for (var i = 0; i < dom.length; i += 1) {
    var el = dom[i];
    if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') {
      for (var j = 0; j < el.options.length; j += 1) {
        el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
      }
    } else {
      el.value = value;
    }
  }
  return dom;
}
// Transforms
// eslint-disable-next-line
function transform(transform) {
  for (var i = 0; i < this.length; i += 1) {
    var elStyle = this[i].style;
    elStyle.webkitTransform = transform;
    elStyle.transform = transform;
  }
  return this;
}
function transition(duration) {
  if (typeof duration !== 'string') {
    duration = duration + 'ms'; // eslint-disable-line
  }
  for (var i = 0; i < this.length; i += 1) {
    var elStyle = this[i].style;
    elStyle.webkitTransitionDuration = duration;
    elStyle.transitionDuration = duration;
  }
  return this;
}
// Events
function on() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var eventType = args[0];
  var targetSelector = args[1];
  var listener = args[2];
  var capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];

    targetSelector = undefined;
  }
  if (!capture) capture = false;

  function handleLiveEvent(e) {
    var target = e.target;
    if (!target) return;
    var eventData = e.target.dom7EventData || [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
      var _parents = $(target).parents(); // eslint-disable-line
      for (var k = 0; k < _parents.length; k += 1) {
        if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
      }
    }
  }
  function handleEvent(e) {
    var eventData = e && e.target ? e.target.dom7EventData || [] : [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    listener.apply(this, eventData);
  }
  var events = eventType.split(' ');
  var j = undefined;
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];
    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        var _event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[_event]) el.dom7Listeners[_event] = [];
        el.dom7Listeners[_event].push({
          listener: listener,
          proxyListener: handleEvent
        });
        el.addEventListener(_event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        var _event2 = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[_event2]) el.dom7LiveListeners[_event2] = [];
        el.dom7LiveListeners[_event2].push({
          listener: listener,
          proxyListener: handleLiveEvent
        });
        el.addEventListener(_event2, handleLiveEvent, capture);
      }
    }
  }
  return this;
}
function off() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var eventType = args[0];
  var targetSelector = args[1];
  var listener = args[2];
  var capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];

    targetSelector = undefined;
  }
  if (!capture) capture = false;

  var events = eventType.split(' ');
  for (var i = 0; i < events.length; i += 1) {
    var _event3 = events[i];
    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      var handlers = undefined;
      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[_event3];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[_event3];
      }
      if (handlers && handlers.length) {
        for (var k = handlers.length - 1; k >= 0; k -= 1) {
          var handler = handlers[k];
          if (listener && handler.listener === listener) {
            el.removeEventListener(_event3, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(_event3, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(_event3, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }
  return this;
}
function once() {
  var dom = this;

  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  var eventName = args[0];
  var targetSelector = args[1];
  var listener = args[2];
  var capture = args[3];

  if (typeof args[1] === 'function') {
    eventName = args[0];
    listener = args[1];
    capture = args[2];

    targetSelector = undefined;
  }
  function onceHandler() {
    for (var _len4 = arguments.length, eventArgs = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      eventArgs[_key4] = arguments[_key4];
    }

    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);
    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }
  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}
function trigger() {
  for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  var events = args[0].split(' ');
  var eventData = args[1];
  for (var i = 0; i < events.length; i += 1) {
    var _event4 = events[i];
    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      var evt = undefined;
      try {
        evt = new _ssrWindow.window.CustomEvent(_event4, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
      } catch (e) {
        evt = _ssrWindow.document.createEvent('Event');
        evt.initEvent(_event4, true, true);
        evt.detail = eventData;
      }
      // eslint-disable-next-line
      el.dom7EventData = args.filter(function (data, dataIndex) {
        return dataIndex > 0;
      });
      el.dispatchEvent(evt);
      el.dom7EventData = [];
      delete el.dom7EventData;
    }
  }
  return this;
}
function transitionEnd(callback) {
  var events = ['webkitTransitionEnd', 'transitionend'];
  var dom = this;
  var i = undefined;
  function fireCallBack(e) {
    /* jshint validthis:true */
    if (e.target !== this) return;
    callback.call(this, e);
    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }
  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }
  return this;
}
function animationEnd(callback) {
  var events = ['webkitAnimationEnd', 'animationend'];
  var dom = this;
  var i = undefined;
  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }
  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }
  return this;
}
// Sizing/Styles
function width() {
  if (this[0] === _ssrWindow.window) {
    return _ssrWindow.window.innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}
function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      var _styles = this.styles();
      return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
    }
    return this[0].offsetWidth;
  }
  return null;
}
function height() {
  if (this[0] === _ssrWindow.window) {
    return _ssrWindow.window.innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}
function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      var _styles2 = this.styles();
      return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
    }
    return this[0].offsetHeight;
  }
  return null;
}
function offset() {
  if (this.length > 0) {
    var el = this[0];
    var box = el.getBoundingClientRect();
    var body = _ssrWindow.document.body;
    var clientTop = el.clientTop || body.clientTop || 0;
    var clientLeft = el.clientLeft || body.clientLeft || 0;
    var _scrollTop = el === _ssrWindow.window ? _ssrWindow.window.scrollY : el.scrollTop;
    var _scrollLeft = el === _ssrWindow.window ? _ssrWindow.window.scrollX : el.scrollLeft;
    return {
      top: box.top + _scrollTop - clientTop,
      left: box.left + _scrollLeft - clientLeft
    };
  }

  return null;
}
function hide() {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }
  return this;
}
function show() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];
    if (el.style.display === 'none') {
      el.style.display = '';
    }
    if (_ssrWindow.window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }
  return this;
}
function styles() {
  if (this[0]) return _ssrWindow.window.getComputedStyle(this[0], null);
  return {};
}
function css(props, value) {
  var i = undefined;
  if (arguments.length === 1) {
    if (typeof props === 'string') {
      if (this[0]) return _ssrWindow.window.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      for (i = 0; i < this.length; i += 1) {
        // eslint-disable-next-line
        for (var _prop in props) {
          this[i].style[_prop] = props[_prop];
        }
      }
      return this;
    }
  }
  if (arguments.length === 2 && typeof props === 'string') {
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }
    return this;
  }
  return this;
}

// Dom manipulation
function toArray() {
  var arr = [];
  for (var i = 0; i < this.length; i += 1) {
    arr.push(this[i]);
  }
  return arr;
}
// Iterate over the collection passing elements to `callback`
function each(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this;
  // Iterate over the current collection
  for (var i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], i, this[i]) === false) {
      // End the loop early
      return this;
    }
  }
  // Return `this` to allow chained DOM operations
  return this;
}
function forEach(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this;
  // Iterate over the current collection
  for (var i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], this[i], i) === false) {
      // End the loop early
      return this;
    }
  }
  // Return `this` to allow chained DOM operations
  return this;
}
function filter(callback) {
  var matchedItems = [];
  var dom = this;
  for (var i = 0; i < dom.length; i += 1) {
    if (callback.call(dom[i], i, dom[i])) matchedItems.push(dom[i]);
  }
  return new Dom7(matchedItems);
}
function map(callback) {
  var modifiedItems = [];
  var dom = this;
  for (var i = 0; i < dom.length; i += 1) {
    modifiedItems.push(callback.call(dom[i], i, dom[i]));
  }
  return new Dom7(modifiedItems);
}
// eslint-disable-next-line
function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : undefined;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }
  return this;
}
// eslint-disable-next-line
function text(text) {
  if (typeof text === 'undefined') {
    if (this[0]) {
      return this[0].textContent.trim();
    }
    return null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }
  return this;
}
function is(selector) {
  var el = this[0];
  var compareWith = undefined;
  var i = undefined;
  if (!el || typeof selector === 'undefined') return false;
  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);else if (el.msMatchesSelector) return el.msMatchesSelector(selector);

    compareWith = $(selector);
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }
    return false;
  } else if (selector === _ssrWindow.document) return el === _ssrWindow.document;else if (selector === _ssrWindow.window) return el === _ssrWindow.window;

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }
    return false;
  }
  return false;
}
function indexOf(el) {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i] === el) return i;
  }
  return -1;
}
function index() {
  var child = this[0];
  var i = undefined;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
// eslint-disable-next-line
function eq(index) {
  if (typeof index === 'undefined') return this;
  var length = this.length;
  var returnIndex = undefined;
  if (index > length - 1) {
    return new Dom7([]);
  }
  if (index < 0) {
    returnIndex = length + index;
    if (returnIndex < 0) return new Dom7([]);
    return new Dom7([this[returnIndex]]);
  }
  return new Dom7([this[index]]);
}
function append() {
  var newChild = undefined;

  for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  for (var k = 0; k < args.length; k += 1) {
    newChild = args[k];
    for (var i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = _ssrWindow.document.createElement('div');
        tempDiv.innerHTML = newChild;
        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (var j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}
// eslint-disable-next-line
function appendTo(parent) {
  $(parent).append(this);
  return this;
}
function prepend(newChild) {
  var i = undefined;
  var j = undefined;
  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      var tempDiv = _ssrWindow.document.createElement('div');
      tempDiv.innerHTML = newChild;
      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }
  return this;
}
// eslint-disable-next-line
function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}
function insertBefore(selector) {
  var before = $(selector);
  for (var i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (var j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}
function insertAfter(selector) {
  var after = $(selector);
  for (var i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (var j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}
function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return new Dom7([this[0].nextElementSibling]);
      }
      return new Dom7([]);
    }

    if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
    return new Dom7([]);
  }
  return new Dom7([]);
}
function nextAll(selector) {
  var nextEls = [];
  var el = this[0];
  if (!el) return new Dom7([]);
  while (el.nextElementSibling) {
    var _next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if ($(_next).is(selector)) nextEls.push(_next);
    } else nextEls.push(_next);
    el = _next;
  }
  return new Dom7(nextEls);
}
function prev(selector) {
  if (this.length > 0) {
    var el = this[0];
    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return new Dom7([el.previousElementSibling]);
      }
      return new Dom7([]);
    }

    if (el.previousElementSibling) return new Dom7([el.previousElementSibling]);
    return new Dom7([]);
  }
  return new Dom7([]);
}
function prevAll(selector) {
  var prevEls = [];
  var el = this[0];
  if (!el) return new Dom7([]);
  while (el.previousElementSibling) {
    var _prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if ($(_prev).is(selector)) prevEls.push(_prev);
    } else prevEls.push(_prev);
    el = _prev;
  }
  return new Dom7(prevEls);
}
function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}
function parent(selector) {
  var parents = []; // eslint-disable-line
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }
  return $(unique(parents));
}
function parents(selector) {
  var parents = []; // eslint-disable-line
  for (var i = 0; i < this.length; i += 1) {
    var _parent = this[i].parentNode; // eslint-disable-line
    while (_parent) {
      if (selector) {
        if ($(_parent).is(selector)) parents.push(_parent);
      } else {
        parents.push(_parent);
      }
      _parent = _parent.parentNode;
    }
  }
  return $(unique(parents));
}
function closest(selector) {
  var closest = this; // eslint-disable-line
  if (typeof selector === 'undefined') {
    return new Dom7([]);
  }
  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }
  return closest;
}
function find(selector) {
  var foundElements = [];
  for (var i = 0; i < this.length; i += 1) {
    var found = this[i].querySelectorAll(selector);
    for (var j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }
  return new Dom7(foundElements);
}
function children(selector) {
  var children = []; // eslint-disable-line
  for (var i = 0; i < this.length; i += 1) {
    var childNodes = this[i].childNodes;

    for (var j = 0; j < childNodes.length; j += 1) {
      if (!selector) {
        if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
      } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }
  return new Dom7(unique(children));
}
function remove() {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }
  return this;
}
function detach() {
  return this.remove();
}
function add() {
  var dom = this;
  var i = undefined;
  var j = undefined;

  for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  for (i = 0; i < args.length; i += 1) {
    var toAdd = $(args[i]);
    for (j = 0; j < toAdd.length; j += 1) {
      dom[dom.length] = toAdd[j];
      dom.length += 1;
    }
  }
  return dom;
}
function empty() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];
    if (el.nodeType === 1) {
      for (var j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }
      el.textContent = '';
    }
  }
  return this;
}

function scrollTo() {
  for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    args[_key8] = arguments[_key8];
  }

  var left = args[0];
  var top = args[1];
  var duration = args[2];
  var easing = args[3];
  var callback = args[4];

  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    left = args[0];
    top = args[1];
    duration = args[2];
    callback = args[3];
    easing = args[4];
  }
  if (typeof easing === 'undefined') easing = 'swing';

  return this.each(function animate() {
    var el = this;
    var currentTop = undefined;
    var currentLeft = undefined;
    var maxTop = undefined;
    var maxLeft = undefined;
    var newTop = undefined;
    var newLeft = undefined;
    var scrollTop = undefined; // eslint-disable-line
    var scrollLeft = undefined; // eslint-disable-line
    var animateTop = top > 0 || top === 0;
    var animateLeft = left > 0 || left === 0;
    if (typeof easing === 'undefined') {
      easing = 'swing';
    }
    if (animateTop) {
      currentTop = el.scrollTop;
      if (!duration) {
        el.scrollTop = top;
      }
    }
    if (animateLeft) {
      currentLeft = el.scrollLeft;
      if (!duration) {
        el.scrollLeft = left;
      }
    }
    if (!duration) return;
    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }
    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }
    var startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;
    function render() {
      var time = arguments.length <= 0 || arguments[0] === undefined ? new Date().getTime() : arguments[0];

      if (startTime === null) {
        startTime = time;
      }
      var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      var easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      var done = undefined;
      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);
      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }
      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }
      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }
      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }
      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  });
}
// scrollTop(top, duration, easing, callback) {
function scrollTop() {
  for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    args[_key9] = arguments[_key9];
  }

  var top = args[0];
  var duration = args[1];
  var easing = args[2];
  var callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    top = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }
  var dom = this;
  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }
  return dom.scrollTo(undefined, top, duration, easing, callback);
}
function scrollLeft() {
  for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    args[_key10] = arguments[_key10];
  }

  var left = args[0];
  var duration = args[1];
  var easing = args[2];
  var callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    left = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }
  var dom = this;
  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }
  return dom.scrollTo(left, undefined, duration, easing, callback);
}

function animate(initialProps, initialParams) {
  var els = this;
  var a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing' }, // or 'linear'
    /* Callbacks
    begin(elements)
    complete(elements)
    progress(elements, complete, remaining, start, tweenValue)
    */
    initialParams),

    elements: els,
    animating: false,
    que: [],

    easingProgress: function easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      }
      if (typeof easing === 'function') {
        return easing(progress);
      }
      return progress;
    },
    stop: function stop() {
      if (a.frameId) {
        cancelAnimationFrame(a.frameId);
      }
      a.animating = false;
      a.elements.each(function (index, el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },
    done: function done(complete) {
      a.animating = false;
      a.elements.each(function (index, el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);
      if (a.que.length > 0) {
        var que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate: function animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }
      var elements = [];

      // Define & Cache Initials & Units
      a.elements.each(function (index, el) {
        var initialFullValue = undefined;
        var initialValue = undefined;
        var unit = undefined;
        var finalValue = undefined;
        var finalFullValue = undefined;

        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;

        elements[index] = {
          container: el
        };
        Object.keys(props).forEach(function (prop) {
          initialFullValue = _ssrWindow.window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue: initialFullValue,
            initialValue: initialValue,
            unit: unit,
            finalValue: finalValue,
            finalFullValue: finalFullValue,
            currentValue: initialValue
          };
        });
      });

      var startTime = null;
      var time = undefined;
      var elementsDone = 0;
      var propsDone = 0;
      var done = undefined;
      var began = false;

      a.animating = true;

      function render() {
        time = new Date().getTime();
        var progress = undefined;
        var easeProgress = undefined;
        // let el;
        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }
        if (startTime === null) {
          startTime = time;
        }
        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }

        elements.forEach(function (element) {
          var el = element;
          if (done || el.done) return;
          Object.keys(props).forEach(function (prop) {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            var _el$prop = el[prop];
            var initialValue = _el$prop.initialValue;
            var finalValue = _el$prop.finalValue;
            var unit = _el$prop.unit;

            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
            var currentValue = el[prop].currentValue;

            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;
              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }
              if (elementsDone === elements.length) {
                done = true;
              }
            }
            if (done) {
              a.done(params.complete);
              return;
            }
            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return;
        // Then call
        a.frameId = requestAnimationFrame(render);
      }
      a.frameId = requestAnimationFrame(render);
      return a;
    }
  };

  if (a.elements.length === 0) {
    return els;
  }

  var animateInstance = undefined;
  for (var i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }
  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  var els = this;
  for (var i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

var noTrigger = 'resize scroll'.split(' ');
function eventShortcut(name) {
  for (var _len11 = arguments.length, args = Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
    args[_key11 - 1] = arguments[_key11];
  }

  if (typeof args[0] === 'undefined') {
    for (var i = 0; i < this.length; i += 1) {
      if (noTrigger.indexOf(name) < 0) {
        if (name in this[i]) this[i][name]();else {
          $(this[i]).trigger(name);
        }
      }
    }
    return this;
  }
  return this.on.apply(this, [name].concat(args));
}

function click() {
  for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
    args[_key12] = arguments[_key12];
  }

  return eventShortcut.bind(this).apply(undefined, ['click'].concat(args));
}
function blur() {
  for (var _len13 = arguments.length, args = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
    args[_key13] = arguments[_key13];
  }

  return eventShortcut.bind(this).apply(undefined, ['blur'].concat(args));
}
function focus() {
  for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
    args[_key14] = arguments[_key14];
  }

  return eventShortcut.bind(this).apply(undefined, ['focus'].concat(args));
}
function focusin() {
  for (var _len15 = arguments.length, args = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
    args[_key15] = arguments[_key15];
  }

  return eventShortcut.bind(this).apply(undefined, ['focusin'].concat(args));
}
function focusout() {
  for (var _len16 = arguments.length, args = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
    args[_key16] = arguments[_key16];
  }

  return eventShortcut.bind(this).apply(undefined, ['focusout'].concat(args));
}
function keyup() {
  for (var _len17 = arguments.length, args = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
    args[_key17] = arguments[_key17];
  }

  return eventShortcut.bind(this).apply(undefined, ['keyup'].concat(args));
}
function keydown() {
  for (var _len18 = arguments.length, args = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
    args[_key18] = arguments[_key18];
  }

  return eventShortcut.bind(this).apply(undefined, ['keydown'].concat(args));
}
function keypress() {
  for (var _len19 = arguments.length, args = Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
    args[_key19] = arguments[_key19];
  }

  return eventShortcut.bind(this).apply(undefined, ['keypress'].concat(args));
}
function submit() {
  for (var _len20 = arguments.length, args = Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
    args[_key20] = arguments[_key20];
  }

  return eventShortcut.bind(this).apply(undefined, ['submit'].concat(args));
}
function change() {
  for (var _len21 = arguments.length, args = Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
    args[_key21] = arguments[_key21];
  }

  return eventShortcut.bind(this).apply(undefined, ['change'].concat(args));
}
function mousedown() {
  for (var _len22 = arguments.length, args = Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
    args[_key22] = arguments[_key22];
  }

  return eventShortcut.bind(this).apply(undefined, ['mousedown'].concat(args));
}
function mousemove() {
  for (var _len23 = arguments.length, args = Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
    args[_key23] = arguments[_key23];
  }

  return eventShortcut.bind(this).apply(undefined, ['mousemove'].concat(args));
}
function mouseup() {
  for (var _len24 = arguments.length, args = Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
    args[_key24] = arguments[_key24];
  }

  return eventShortcut.bind(this).apply(undefined, ['mouseup'].concat(args));
}
function mouseenter() {
  for (var _len25 = arguments.length, args = Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
    args[_key25] = arguments[_key25];
  }

  return eventShortcut.bind(this).apply(undefined, ['mouseenter'].concat(args));
}
function mouseleave() {
  for (var _len26 = arguments.length, args = Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
    args[_key26] = arguments[_key26];
  }

  return eventShortcut.bind(this).apply(undefined, ['mouseleave'].concat(args));
}
function mouseout() {
  for (var _len27 = arguments.length, args = Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
    args[_key27] = arguments[_key27];
  }

  return eventShortcut.bind(this).apply(undefined, ['mouseout'].concat(args));
}
function mouseover() {
  for (var _len28 = arguments.length, args = Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
    args[_key28] = arguments[_key28];
  }

  return eventShortcut.bind(this).apply(undefined, ['mouseover'].concat(args));
}
function touchstart() {
  for (var _len29 = arguments.length, args = Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
    args[_key29] = arguments[_key29];
  }

  return eventShortcut.bind(this).apply(undefined, ['touchstart'].concat(args));
}
function touchend() {
  for (var _len30 = arguments.length, args = Array(_len30), _key30 = 0; _key30 < _len30; _key30++) {
    args[_key30] = arguments[_key30];
  }

  return eventShortcut.bind(this).apply(undefined, ['touchend'].concat(args));
}
function touchmove() {
  for (var _len31 = arguments.length, args = Array(_len31), _key31 = 0; _key31 < _len31; _key31++) {
    args[_key31] = arguments[_key31];
  }

  return eventShortcut.bind(this).apply(undefined, ['touchmove'].concat(args));
}
function resize() {
  for (var _len32 = arguments.length, args = Array(_len32), _key32 = 0; _key32 < _len32; _key32++) {
    args[_key32] = arguments[_key32];
  }

  return eventShortcut.bind(this).apply(undefined, ['resize'].concat(args));
}
function scroll() {
  for (var _len33 = arguments.length, args = Array(_len33), _key33 = 0; _key33 < _len33; _key33++) {
    args[_key33] = arguments[_key33];
  }

  return eventShortcut.bind(this).apply(undefined, ['scroll'].concat(args));
}

exports.$ = $;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.hasClass = hasClass;
exports.toggleClass = toggleClass;
exports.attr = attr;
exports.removeAttr = removeAttr;
exports.prop = prop;
exports.data = data;
exports.removeData = removeData;
exports.dataset = dataset;
exports.val = val;
exports.transform = transform;
exports.transition = transition;
exports.on = on;
exports.off = off;
exports.once = once;
exports.trigger = trigger;
exports.transitionEnd = transitionEnd;
exports.animationEnd = animationEnd;
exports.width = width;
exports.outerWidth = outerWidth;
exports.height = height;
exports.outerHeight = outerHeight;
exports.offset = offset;
exports.hide = hide;
exports.show = show;
exports.styles = styles;
exports.css = css;
exports.toArray = toArray;
exports.each = each;
exports.forEach = forEach;
exports.filter = filter;
exports.map = map;
exports.html = html;
exports.text = text;
exports.is = is;
exports.indexOf = indexOf;
exports.index = index;
exports.eq = eq;
exports.append = append;
exports.appendTo = appendTo;
exports.prepend = prepend;
exports.prependTo = prependTo;
exports.insertBefore = insertBefore;
exports.insertAfter = insertAfter;
exports.next = next;
exports.nextAll = nextAll;
exports.prev = prev;
exports.prevAll = prevAll;
exports.siblings = siblings;
exports.parent = parent;
exports.parents = parents;
exports.closest = closest;
exports.find = find;
exports.children = children;
exports.remove = remove;
exports.detach = detach;
exports.add = add;
exports.empty = empty;
exports.scrollTo = scrollTo;
exports.scrollTop = scrollTop;
exports.scrollLeft = scrollLeft;
exports.animate = animate;
exports.stop = stop;
exports.click = click;
exports.blur = blur;
exports.focus = focus;
exports.focusin = focusin;
exports.focusout = focusout;
exports.keyup = keyup;
exports.keydown = keydown;
exports.keypress = keypress;
exports.submit = submit;
exports.change = change;
exports.mousedown = mousedown;
exports.mousemove = mousemove;
exports.mouseup = mouseup;
exports.mouseenter = mouseenter;
exports.mouseleave = mouseleave;
exports.mouseout = mouseout;
exports.mouseover = mouseover;
exports.touchstart = touchstart;
exports.touchend = touchend;
exports.touchmove = touchmove;
exports.resize = resize;
exports.scroll = scroll;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};

var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function get() {
    return defaultMaxListeners;
  },
  set: function set(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function () {

  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = type === 'error';

  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0) er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined) return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0) return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  checkListener(listener);
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
};

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;

  checkListener(listener);

  events = this._events;
  if (events === undefined) return this;

  list = events[type];
  if (list === undefined) return this;

  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;

    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }

    if (list.length === 1) events[type] = list[0];

    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;

  events = this._events;
  if (events === undefined) return this;

  // not listening for removeListener, no need to emit
  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;
    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }

  return this;
};

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined) return [];

  var evlistener = events[type];
  if (evlistener === undefined) return [];

  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i) copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var require;var require;

!(function (e) {
  if (true) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    var t;t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.flexibility = e();
  }
})(function () {
  return (function e(t, r, l) {
    function n(o, i) {
      if (!r[o]) {
        if (!t[o]) {
          var s = "function" == typeof require && require;if (!i && s) return require(o, !0);if (f) return f(o, !0);var a = new Error("Cannot find module '" + o + "'");throw (a.code = "MODULE_NOT_FOUND", a);
        }var c = r[o] = { exports: {} };t[o][0].call(c.exports, function (e) {
          var r = t[o][1][e];return n(r ? r : e);
        }, c, c.exports, e, t, r, l);
      }return r[o].exports;
    }for (var f = "function" == typeof require && require, o = 0; o < l.length; o++) n(l[o]);return n;
  })({ 1: [function (e, t, r) {
      t.exports = function (e) {
        var t,
            r,
            l,
            n = -1;if (e.lines.length > 1 && "flex-start" === e.style.alignContent) for (t = 0; l = e.lines[++n];) l.crossStart = t, t += l.cross;else if (e.lines.length > 1 && "flex-end" === e.style.alignContent) for (t = e.flexStyle.crossSpace; l = e.lines[++n];) l.crossStart = t, t += l.cross;else if (e.lines.length > 1 && "center" === e.style.alignContent) for (t = e.flexStyle.crossSpace / 2; l = e.lines[++n];) l.crossStart = t, t += l.cross;else if (e.lines.length > 1 && "space-between" === e.style.alignContent) for (r = e.flexStyle.crossSpace / (e.lines.length - 1), t = 0; l = e.lines[++n];) l.crossStart = t, t += l.cross + r;else if (e.lines.length > 1 && "space-around" === e.style.alignContent) for (r = 2 * e.flexStyle.crossSpace / (2 * e.lines.length), t = r / 2; l = e.lines[++n];) l.crossStart = t, t += l.cross + r;else for (r = e.flexStyle.crossSpace / e.lines.length, t = e.flexStyle.crossInnerBefore; l = e.lines[++n];) l.crossStart = t, l.cross += r, t += l.cross;
      };
    }, {}], 2: [function (e, t, r) {
      t.exports = function (e) {
        for (var t, r = -1; line = e.lines[++r];) for (t = -1; child = line.children[++t];) {
          var l = child.style.alignSelf;"auto" === l && (l = e.style.alignItems), "flex-start" === l ? child.flexStyle.crossStart = line.crossStart : "flex-end" === l ? child.flexStyle.crossStart = line.crossStart + line.cross - child.flexStyle.crossOuter : "center" === l ? child.flexStyle.crossStart = line.crossStart + (line.cross - child.flexStyle.crossOuter) / 2 : (child.flexStyle.crossStart = line.crossStart, child.flexStyle.crossOuter = line.cross, child.flexStyle.cross = child.flexStyle.crossOuter - child.flexStyle.crossBefore - child.flexStyle.crossAfter);
        }
      };
    }, {}], 3: [function (e, t, r) {
      t.exports = function l(e, l) {
        var t = "row" === l || "row-reverse" === l,
            r = e.mainAxis;if (r) {
          var n = t && "inline" === r || !t && "block" === r;n || (e.flexStyle = { main: e.flexStyle.cross, cross: e.flexStyle.main, mainOffset: e.flexStyle.crossOffset, crossOffset: e.flexStyle.mainOffset, mainBefore: e.flexStyle.crossBefore, mainAfter: e.flexStyle.crossAfter, crossBefore: e.flexStyle.mainBefore, crossAfter: e.flexStyle.mainAfter, mainInnerBefore: e.flexStyle.crossInnerBefore, mainInnerAfter: e.flexStyle.crossInnerAfter, crossInnerBefore: e.flexStyle.mainInnerBefore, crossInnerAfter: e.flexStyle.mainInnerAfter, mainBorderBefore: e.flexStyle.crossBorderBefore, mainBorderAfter: e.flexStyle.crossBorderAfter, crossBorderBefore: e.flexStyle.mainBorderBefore, crossBorderAfter: e.flexStyle.mainBorderAfter });
        } else t ? e.flexStyle = { main: e.style.width, cross: e.style.height, mainOffset: e.style.offsetWidth, crossOffset: e.style.offsetHeight, mainBefore: e.style.marginLeft, mainAfter: e.style.marginRight, crossBefore: e.style.marginTop, crossAfter: e.style.marginBottom, mainInnerBefore: e.style.paddingLeft, mainInnerAfter: e.style.paddingRight, crossInnerBefore: e.style.paddingTop, crossInnerAfter: e.style.paddingBottom, mainBorderBefore: e.style.borderLeftWidth, mainBorderAfter: e.style.borderRightWidth, crossBorderBefore: e.style.borderTopWidth, crossBorderAfter: e.style.borderBottomWidth } : e.flexStyle = { main: e.style.height, cross: e.style.width, mainOffset: e.style.offsetHeight, crossOffset: e.style.offsetWidth, mainBefore: e.style.marginTop, mainAfter: e.style.marginBottom, crossBefore: e.style.marginLeft, crossAfter: e.style.marginRight, mainInnerBefore: e.style.paddingTop, mainInnerAfter: e.style.paddingBottom, crossInnerBefore: e.style.paddingLeft, crossInnerAfter: e.style.paddingRight, mainBorderBefore: e.style.borderTopWidth, mainBorderAfter: e.style.borderBottomWidth, crossBorderBefore: e.style.borderLeftWidth, crossBorderAfter: e.style.borderRightWidth }, "content-box" === e.style.boxSizing && ("number" == typeof e.flexStyle.main && (e.flexStyle.main += e.flexStyle.mainInnerBefore + e.flexStyle.mainInnerAfter + e.flexStyle.mainBorderBefore + e.flexStyle.mainBorderAfter), "number" == typeof e.flexStyle.cross && (e.flexStyle.cross += e.flexStyle.crossInnerBefore + e.flexStyle.crossInnerAfter + e.flexStyle.crossBorderBefore + e.flexStyle.crossBorderAfter));e.mainAxis = t ? "inline" : "block", e.crossAxis = t ? "block" : "inline", "number" == typeof e.style.flexBasis && (e.flexStyle.main = e.style.flexBasis + e.flexStyle.mainInnerBefore + e.flexStyle.mainInnerAfter + e.flexStyle.mainBorderBefore + e.flexStyle.mainBorderAfter), e.flexStyle.mainOuter = e.flexStyle.main, e.flexStyle.crossOuter = e.flexStyle.cross, "auto" === e.flexStyle.mainOuter && (e.flexStyle.mainOuter = e.flexStyle.mainOffset), "auto" === e.flexStyle.crossOuter && (e.flexStyle.crossOuter = e.flexStyle.crossOffset), "number" == typeof e.flexStyle.mainBefore && (e.flexStyle.mainOuter += e.flexStyle.mainBefore), "number" == typeof e.flexStyle.mainAfter && (e.flexStyle.mainOuter += e.flexStyle.mainAfter), "number" == typeof e.flexStyle.crossBefore && (e.flexStyle.crossOuter += e.flexStyle.crossBefore), "number" == typeof e.flexStyle.crossAfter && (e.flexStyle.crossOuter += e.flexStyle.crossAfter);
      };
    }, {}], 4: [function (e, t, r) {
      var l = e("../reduce");t.exports = function (e) {
        if (e.mainSpace > 0) {
          var t = l(e.children, function (e, t) {
            return e + parseFloat(t.style.flexGrow);
          }, 0);t > 0 && (e.main = l(e.children, function (r, l) {
            return "auto" === l.flexStyle.main ? l.flexStyle.main = l.flexStyle.mainOffset + parseFloat(l.style.flexGrow) / t * e.mainSpace : l.flexStyle.main += parseFloat(l.style.flexGrow) / t * e.mainSpace, l.flexStyle.mainOuter = l.flexStyle.main + l.flexStyle.mainBefore + l.flexStyle.mainAfter, r + l.flexStyle.mainOuter;
          }, 0), e.mainSpace = 0);
        }
      };
    }, { "../reduce": 12 }], 5: [function (e, t, r) {
      var l = e("../reduce");t.exports = function (e) {
        if (e.mainSpace < 0) {
          var t = l(e.children, function (e, t) {
            return e + parseFloat(t.style.flexShrink);
          }, 0);t > 0 && (e.main = l(e.children, function (r, l) {
            return l.flexStyle.main += parseFloat(l.style.flexShrink) / t * e.mainSpace, l.flexStyle.mainOuter = l.flexStyle.main + l.flexStyle.mainBefore + l.flexStyle.mainAfter, r + l.flexStyle.mainOuter;
          }, 0), e.mainSpace = 0);
        }
      };
    }, { "../reduce": 12 }], 6: [function (e, t, r) {
      var l = e("../reduce");t.exports = function (e) {
        var t;e.lines = [t = { main: 0, cross: 0, children: [] }];for (var r, n = -1; r = e.children[++n];) "nowrap" === e.style.flexWrap || 0 === t.children.length || "auto" === e.flexStyle.main || e.flexStyle.main - e.flexStyle.mainInnerBefore - e.flexStyle.mainInnerAfter - e.flexStyle.mainBorderBefore - e.flexStyle.mainBorderAfter >= t.main + r.flexStyle.mainOuter ? (t.main += r.flexStyle.mainOuter, t.cross = Math.max(t.cross, r.flexStyle.crossOuter)) : e.lines.push(t = { main: r.flexStyle.mainOuter, cross: r.flexStyle.crossOuter, children: [] }), t.children.push(r);e.flexStyle.mainLines = l(e.lines, function (e, t) {
          return Math.max(e, t.main);
        }, 0), e.flexStyle.crossLines = l(e.lines, function (e, t) {
          return e + t.cross;
        }, 0), "auto" === e.flexStyle.main && (e.flexStyle.main = Math.max(e.flexStyle.mainOffset, e.flexStyle.mainLines + e.flexStyle.mainInnerBefore + e.flexStyle.mainInnerAfter + e.flexStyle.mainBorderBefore + e.flexStyle.mainBorderAfter)), "auto" === e.flexStyle.cross && (e.flexStyle.cross = Math.max(e.flexStyle.crossOffset, e.flexStyle.crossLines + e.flexStyle.crossInnerBefore + e.flexStyle.crossInnerAfter + e.flexStyle.crossBorderBefore + e.flexStyle.crossBorderAfter)), e.flexStyle.crossSpace = e.flexStyle.cross - e.flexStyle.crossInnerBefore - e.flexStyle.crossInnerAfter - e.flexStyle.crossBorderBefore - e.flexStyle.crossBorderAfter - e.flexStyle.crossLines, e.flexStyle.mainOuter = e.flexStyle.main + e.flexStyle.mainBefore + e.flexStyle.mainAfter, e.flexStyle.crossOuter = e.flexStyle.cross + e.flexStyle.crossBefore + e.flexStyle.crossAfter;
      };
    }, { "../reduce": 12 }], 7: [function (e, t, r) {
      function l(t) {
        for (var r, l = -1; r = t.children[++l];) e("./flex-direction")(r, t.style.flexDirection);e("./flex-direction")(t, t.style.flexDirection), e("./order")(t), e("./flexbox-lines")(t), e("./align-content")(t), l = -1;for (var n; n = t.lines[++l];) n.mainSpace = t.flexStyle.main - t.flexStyle.mainInnerBefore - t.flexStyle.mainInnerAfter - t.flexStyle.mainBorderBefore - t.flexStyle.mainBorderAfter - n.main, e("./flex-grow")(n), e("./flex-shrink")(n), e("./margin-main")(n), e("./margin-cross")(n), e("./justify-content")(n, t.style.justifyContent, t);e("./align-items")(t);
      }t.exports = l;
    }, { "./align-content": 1, "./align-items": 2, "./flex-direction": 3, "./flex-grow": 4, "./flex-shrink": 5, "./flexbox-lines": 6, "./justify-content": 8, "./margin-cross": 9, "./margin-main": 10, "./order": 11 }], 8: [function (e, t, r) {
      t.exports = function (e, t, r) {
        var l,
            n,
            f,
            o = r.flexStyle.mainInnerBefore,
            i = -1;if ("flex-end" === t) for (l = e.mainSpace, l += o; f = e.children[++i];) f.flexStyle.mainStart = l, l += f.flexStyle.mainOuter;else if ("center" === t) for (l = e.mainSpace / 2, l += o; f = e.children[++i];) f.flexStyle.mainStart = l, l += f.flexStyle.mainOuter;else if ("space-between" === t) for (n = e.mainSpace / (e.children.length - 1), l = 0, l += o; f = e.children[++i];) f.flexStyle.mainStart = l, l += f.flexStyle.mainOuter + n;else if ("space-around" === t) for (n = 2 * e.mainSpace / (2 * e.children.length), l = n / 2, l += o; f = e.children[++i];) f.flexStyle.mainStart = l, l += f.flexStyle.mainOuter + n;else for (l = 0, l += o; f = e.children[++i];) f.flexStyle.mainStart = l, l += f.flexStyle.mainOuter;
      };
    }, {}], 9: [function (e, t, r) {
      t.exports = function (e) {
        for (var t, r = -1; t = e.children[++r];) {
          var l = 0;"auto" === t.flexStyle.crossBefore && ++l, "auto" === t.flexStyle.crossAfter && ++l;var n = e.cross - t.flexStyle.crossOuter;"auto" === t.flexStyle.crossBefore && (t.flexStyle.crossBefore = n / l), "auto" === t.flexStyle.crossAfter && (t.flexStyle.crossAfter = n / l), "auto" === t.flexStyle.cross ? t.flexStyle.crossOuter = t.flexStyle.crossOffset + t.flexStyle.crossBefore + t.flexStyle.crossAfter : t.flexStyle.crossOuter = t.flexStyle.cross + t.flexStyle.crossBefore + t.flexStyle.crossAfter;
        }
      };
    }, {}], 10: [function (e, t, r) {
      t.exports = function (e) {
        for (var t, r = 0, l = -1; t = e.children[++l];) "auto" === t.flexStyle.mainBefore && ++r, "auto" === t.flexStyle.mainAfter && ++r;if (r > 0) {
          for (l = -1; t = e.children[++l];) "auto" === t.flexStyle.mainBefore && (t.flexStyle.mainBefore = e.mainSpace / r), "auto" === t.flexStyle.mainAfter && (t.flexStyle.mainAfter = e.mainSpace / r), "auto" === t.flexStyle.main ? t.flexStyle.mainOuter = t.flexStyle.mainOffset + t.flexStyle.mainBefore + t.flexStyle.mainAfter : t.flexStyle.mainOuter = t.flexStyle.main + t.flexStyle.mainBefore + t.flexStyle.mainAfter;e.mainSpace = 0;
        }
      };
    }, {}], 11: [function (e, t, r) {
      var l = /^(column|row)-reverse$/;t.exports = function (e) {
        e.children.sort(function (e, t) {
          return e.style.order - t.style.order || e.index - t.index;
        }), l.test(e.style.flexDirection) && e.children.reverse();
      };
    }, {}], 12: [function (e, t, r) {
      function l(e, t, r) {
        for (var l = e.length, n = -1; ++n < l;) n in e && (r = t(r, e[n], n));return r;
      }t.exports = l;
    }, {}], 13: [function (e, t, r) {
      function l(e) {
        i(o(e));
      }var n = e("./read"),
          f = e("./write"),
          o = e("./readAll"),
          i = e("./writeAll");t.exports = l, t.exports.read = n, t.exports.write = f, t.exports.readAll = o, t.exports.writeAll = i;
    }, { "./read": 15, "./readAll": 16, "./write": 17, "./writeAll": 18 }], 14: [function (e, t, r) {
      function l(e, t) {
        var r = String(e).match(f);if (!r) return e;var l = r[1],
            o = r[2];return "px" === o ? 1 * l : "cm" === o ? .3937 * l * 96 : "in" === o ? 96 * l : "mm" === o ? .3937 * l * 96 / 10 : "pc" === o ? 12 * l * 96 / 72 : "pt" === o ? 96 * l / 72 : "rem" === o ? 16 * l : n(e, t);
      }function n(e, t) {
        o.style.cssText = "border:none!important;clip:rect(0 0 0 0)!important;display:block!important;font-size:1em!important;height:0!important;margin:0!important;padding:0!important;position:relative!important;width:" + e + "!important", t.parentNode.insertBefore(o, t.nextSibling);var r = o.offsetWidth;return t.parentNode.removeChild(o), r;
      }t.exports = l;var f = /^([-+]?\d*\.?\d+)(%|[a-z]+)$/,
          o = document.createElement("div");
    }, {}], 15: [function (e, t, r) {
      function l(e) {
        var t = { alignContent: "stretch", alignItems: "stretch", alignSelf: "auto", borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0, boxSizing: "content-box", display: "inline", flexBasis: "auto", flexDirection: "row", flexGrow: 0, flexShrink: 1, flexWrap: "nowrap", justifyContent: "flex-start", height: "auto", marginTop: 0, marginRight: 0, marginLeft: 0, marginBottom: 0, paddingTop: 0, paddingRight: 0, paddingLeft: 0, paddingBottom: 0, maxHeight: "none", maxWidth: "none", minHeight: 0, minWidth: 0, order: 0, position: "static", width: "auto" },
            r = e instanceof Element;if (r) {
          var l = e.hasAttribute("data-style"),
              i = l ? e.getAttribute("data-style") : e.getAttribute("style") || "";l || e.setAttribute("data-style", i);var a = window.getComputedStyle && getComputedStyle(e) || {};o(t, a);var c = e.currentStyle || {};n(t, c), f(t, i);for (var y in t) t[y] = s(t[y], e);var x = e.getBoundingClientRect();t.offsetHeight = x.height || e.offsetHeight, t.offsetWidth = x.width || e.offsetWidth;
        }var S = { element: e, style: t };return S;
      }function n(e, t) {
        for (var r in e) {
          var l = (r in t);if (l) e[r] = t[r];else {
            var n = r.replace(/[A-Z]/g, "-$&").toLowerCase(),
                f = (n in t);f && (e[r] = t[n]);
          }
        }var o = ("-js-display" in t);o && (e.display = t["-js-display"]);
      }function f(e, t) {
        for (var r; r = i.exec(t);) {
          var l = r[1].toLowerCase().replace(/-[a-z]/g, function (e) {
            return e.slice(1).toUpperCase();
          });e[l] = r[2];
        }
      }function o(e, t) {
        for (var r in e) {
          var l = (r in t);l && !/^(alignSelf|height|width)$/.test(r) && (e[r] = t[r]);
        }
      }t.exports = l;var i = /([^\s:;]+)\s*:\s*([^;]+?)\s*(;|$)/g,
          s = e("./getComputedLength");
    }, { "./getComputedLength": 14 }], 16: [function (e, t, r) {
      function l(e) {
        var t = [];return n(e, t), t;
      }function n(e, t) {
        for (var r, l = f(e), i = [], s = -1; r = e.childNodes[++s];) {
          var a = 3 === r.nodeType && !/^\s*$/.test(r.nodeValue);if (l && a) {
            var c = r;r = e.insertBefore(document.createElement("flex-item"), c), r.appendChild(c);
          }var y = r instanceof Element;if (y) {
            var x = n(r, t);if (l) {
              var S = r.style;S.display = "inline-block", S.position = "absolute", x.style = o(r).style, i.push(x);
            }
          }
        }var m = { element: e, children: i };return l && (m.style = o(e).style, t.push(m)), m;
      }function f(e) {
        var t = e instanceof Element,
            r = t && e.getAttribute("data-style"),
            l = t && e.currentStyle && e.currentStyle["-js-display"],
            n = i.test(r) || s.test(l);return n;
      }t.exports = l;var o = e("../read"),
          i = /(^|;)\s*display\s*:\s*(inline-)?flex\s*(;|$)/i,
          s = /^(inline-)?flex$/i;
    }, { "../read": 15 }], 17: [function (e, t, r) {
      function l(e) {
        f(e);var t = e.element.style,
            r = "inline" === e.mainAxis ? ["main", "cross"] : ["cross", "main"];t.boxSizing = "content-box", t.display = "block", t.position = "relative", t.width = n(e.flexStyle[r[0]] - e.flexStyle[r[0] + "InnerBefore"] - e.flexStyle[r[0] + "InnerAfter"] - e.flexStyle[r[0] + "BorderBefore"] - e.flexStyle[r[0] + "BorderAfter"]), t.height = n(e.flexStyle[r[1]] - e.flexStyle[r[1] + "InnerBefore"] - e.flexStyle[r[1] + "InnerAfter"] - e.flexStyle[r[1] + "BorderBefore"] - e.flexStyle[r[1] + "BorderAfter"]);for (var l, o = -1; l = e.children[++o];) {
          var i = l.element.style,
              s = "inline" === l.mainAxis ? ["main", "cross"] : ["cross", "main"];i.boxSizing = "content-box", i.display = "block", i.position = "absolute", "auto" !== l.flexStyle[s[0]] && (i.width = n(l.flexStyle[s[0]] - l.flexStyle[s[0] + "InnerBefore"] - l.flexStyle[s[0] + "InnerAfter"] - l.flexStyle[s[0] + "BorderBefore"] - l.flexStyle[s[0] + "BorderAfter"])), "auto" !== l.flexStyle[s[1]] && (i.height = n(l.flexStyle[s[1]] - l.flexStyle[s[1] + "InnerBefore"] - l.flexStyle[s[1] + "InnerAfter"] - l.flexStyle[s[1] + "BorderBefore"] - l.flexStyle[s[1] + "BorderAfter"])), i.top = n(l.flexStyle[s[1] + "Start"]), i.left = n(l.flexStyle[s[0] + "Start"]), i.marginTop = n(l.flexStyle[s[1] + "Before"]), i.marginRight = n(l.flexStyle[s[0] + "After"]), i.marginBottom = n(l.flexStyle[s[1] + "After"]), i.marginLeft = n(l.flexStyle[s[0] + "Before"]);
        }
      }function n(e) {
        return "string" == typeof e ? e : Math.max(e, 0) + "px";
      }t.exports = l;var f = e("../flexbox");
    }, { "../flexbox": 7 }], 18: [function (e, t, r) {
      function l(e) {
        for (var t, r = -1; t = e[++r];) n(t);
      }t.exports = l;var n = e("../write");
    }, { "../write": 17 }] }, {}, [13])(13);
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */


!(function (factory) {
  "function" == "function" && __webpack_require__(7) && __webpack_require__(7).jQuery ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory("undefined" != typeof module && module.exports ? __webpack_require__(0) : jQuery);
})(function ($) {
  "use strict";function init(options) {
    return !options || void 0 !== options.allowPageScroll || void 0 === options.swipe && void 0 === options.swipeStatus || (options.allowPageScroll = NONE), void 0 !== options.click && void 0 === options.tap && (options.tap = options.click), options || (options = {}), options = $.extend({}, $.fn.swipe.defaults, options), this.each(function () {
      var $this = $(this),
          plugin = $this.data(PLUGIN_NS);plugin || (plugin = new TouchSwipe(this, options), $this.data(PLUGIN_NS, plugin));
    });
  }function TouchSwipe(element, options) {
    function touchStart(jqEvent) {
      if (!(getTouchInProgress() || $(jqEvent.target).closest(options.excludedElements, $element).length > 0)) {
        var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;if (!event.pointerType || "mouse" != event.pointerType || 0 != options.fallbackToMouseEvents) {
          var ret,
              touches = event.touches,
              evt = touches ? touches[0] : event;return phase = PHASE_START, touches ? fingerCount = touches.length : options.preventDefaultEvents !== !1 && jqEvent.preventDefault(), distance = 0, direction = null, currentDirection = null, pinchDirection = null, duration = 0, startTouchesDistance = 0, endTouchesDistance = 0, pinchZoom = 1, pinchDistance = 0, maximumsMap = createMaximumsData(), cancelMultiFingerRelease(), createFingerData(0, evt), !touches || fingerCount === options.fingers || options.fingers === ALL_FINGERS || hasPinches() ? (startTime = getTimeStamp(), 2 == fingerCount && (createFingerData(1, touches[1]), startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start)), (options.swipeStatus || options.pinchStatus) && (ret = triggerHandler(event, phase))) : ret = !1, ret === !1 ? (phase = PHASE_CANCEL, triggerHandler(event, phase), ret) : (options.hold && (holdTimeout = setTimeout($.proxy(function () {
            $element.trigger("hold", [event.target]), options.hold && (ret = options.hold.call($element, event, event.target));
          }, this), options.longTapThreshold)), setTouchInProgress(!0), null);
        }
      }
    }function touchMove(jqEvent) {
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;if (phase !== PHASE_END && phase !== PHASE_CANCEL && !inMultiFingerRelease()) {
        var ret,
            touches = event.touches,
            evt = touches ? touches[0] : event,
            currentFinger = updateFingerData(evt);if ((endTime = getTimeStamp(), touches && (fingerCount = touches.length), options.hold && clearTimeout(holdTimeout), phase = PHASE_MOVE, 2 == fingerCount && (0 == startTouchesDistance ? (createFingerData(1, touches[1]), startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start)) : (updateFingerData(touches[1]), endTouchesDistance = calculateTouchesDistance(fingerData[0].end, fingerData[1].end), pinchDirection = calculatePinchDirection(fingerData[0].end, fingerData[1].end)), pinchZoom = calculatePinchZoom(startTouchesDistance, endTouchesDistance), pinchDistance = Math.abs(startTouchesDistance - endTouchesDistance)), fingerCount === options.fingers || options.fingers === ALL_FINGERS || !touches || hasPinches())) {
          if ((direction = calculateDirection(currentFinger.start, currentFinger.end), currentDirection = calculateDirection(currentFinger.last, currentFinger.end), validateDefaultEvent(jqEvent, currentDirection), distance = calculateDistance(currentFinger.start, currentFinger.end), duration = calculateDuration(), setMaxDistance(direction, distance), ret = triggerHandler(event, phase), !options.triggerOnTouchEnd || options.triggerOnTouchLeave)) {
            var inBounds = !0;if (options.triggerOnTouchLeave) {
              var bounds = getbounds(this);inBounds = isInBounds(currentFinger.end, bounds);
            }!options.triggerOnTouchEnd && inBounds ? phase = getNextPhase(PHASE_MOVE) : options.triggerOnTouchLeave && !inBounds && (phase = getNextPhase(PHASE_END)), phase != PHASE_CANCEL && phase != PHASE_END || triggerHandler(event, phase);
          }
        } else phase = PHASE_CANCEL, triggerHandler(event, phase);ret === !1 && (phase = PHASE_CANCEL, triggerHandler(event, phase));
      }
    }function touchEnd(jqEvent) {
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent,
          touches = event.touches;if (touches) {
        if (touches.length && !inMultiFingerRelease()) return startMultiFingerRelease(event), !0;if (touches.length && inMultiFingerRelease()) return !0;
      }return inMultiFingerRelease() && (fingerCount = fingerCountAtRelease), endTime = getTimeStamp(), duration = calculateDuration(), didSwipeBackToCancel() || !validateSwipeDistance() ? (phase = PHASE_CANCEL, triggerHandler(event, phase)) : options.triggerOnTouchEnd || options.triggerOnTouchEnd === !1 && phase === PHASE_MOVE ? (options.preventDefaultEvents !== !1 && jqEvent.cancelable !== !1 && jqEvent.preventDefault(), phase = PHASE_END, triggerHandler(event, phase)) : !options.triggerOnTouchEnd && hasTap() ? (phase = PHASE_END, triggerHandlerForGesture(event, phase, TAP)) : phase === PHASE_MOVE && (phase = PHASE_CANCEL, triggerHandler(event, phase)), setTouchInProgress(!1), null;
    }function touchCancel() {
      fingerCount = 0, endTime = 0, startTime = 0, startTouchesDistance = 0, endTouchesDistance = 0, pinchZoom = 1, cancelMultiFingerRelease(), setTouchInProgress(!1);
    }function touchLeave(jqEvent) {
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;options.triggerOnTouchLeave && (phase = getNextPhase(PHASE_END), triggerHandler(event, phase));
    }function removeListeners() {
      $element.off(START_EV, touchStart), $element.off(CANCEL_EV, touchCancel), $element.off(MOVE_EV, touchMove), $element.off(END_EV, touchEnd), LEAVE_EV && $element.off(LEAVE_EV, touchLeave), setTouchInProgress(!1);
    }function getNextPhase(currentPhase) {
      var nextPhase = currentPhase,
          validTime = validateSwipeTime(),
          validDistance = validateSwipeDistance(),
          didCancel = didSwipeBackToCancel();return !validTime || didCancel ? nextPhase = PHASE_CANCEL : !validDistance || currentPhase != PHASE_MOVE || options.triggerOnTouchEnd && !options.triggerOnTouchLeave ? !validDistance && currentPhase == PHASE_END && options.triggerOnTouchLeave && (nextPhase = PHASE_CANCEL) : nextPhase = PHASE_END, nextPhase;
    }function triggerHandler(event, phase) {
      var ret,
          touches = event.touches;return (didSwipe() || hasSwipes()) && (ret = triggerHandlerForGesture(event, phase, SWIPE)), (didPinch() || hasPinches()) && ret !== !1 && (ret = triggerHandlerForGesture(event, phase, PINCH)), didDoubleTap() && ret !== !1 ? ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP) : didLongTap() && ret !== !1 ? ret = triggerHandlerForGesture(event, phase, LONG_TAP) : didTap() && ret !== !1 && (ret = triggerHandlerForGesture(event, phase, TAP)), phase === PHASE_CANCEL && touchCancel(event), phase === PHASE_END && (touches ? touches.length || touchCancel(event) : touchCancel(event)), ret;
    }function triggerHandlerForGesture(event, phase, gesture) {
      var ret;if (gesture == SWIPE) {
        if (($element.trigger("swipeStatus", [phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection]), options.swipeStatus && (ret = options.swipeStatus.call($element, event, phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection), ret === !1))) return !1;if (phase == PHASE_END && validateSwipe()) {
          if ((clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), $element.trigger("swipe", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipe && (ret = options.swipe.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection), ret === !1))) return !1;switch (direction) {case LEFT:
              $element.trigger("swipeLeft", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeLeft && (ret = options.swipeLeft.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));break;case RIGHT:
              $element.trigger("swipeRight", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeRight && (ret = options.swipeRight.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));break;case UP:
              $element.trigger("swipeUp", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeUp && (ret = options.swipeUp.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));break;case DOWN:
              $element.trigger("swipeDown", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeDown && (ret = options.swipeDown.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));}
        }
      }if (gesture == PINCH) {
        if (($element.trigger("pinchStatus", [phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchStatus && (ret = options.pinchStatus.call($element, event, phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData), ret === !1))) return !1;if (phase == PHASE_END && validatePinch()) switch (pinchDirection) {case IN:
            $element.trigger("pinchIn", [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchIn && (ret = options.pinchIn.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData));break;case OUT:
            $element.trigger("pinchOut", [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchOut && (ret = options.pinchOut.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData));}
      }return gesture == TAP ? phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), hasDoubleTap() && !inDoubleTap() ? (doubleTapStartTime = getTimeStamp(), singleTapTimeout = setTimeout($.proxy(function () {
        doubleTapStartTime = null, $element.trigger("tap", [event.target]), options.tap && (ret = options.tap.call($element, event, event.target));
      }, this), options.doubleTapThreshold)) : (doubleTapStartTime = null, $element.trigger("tap", [event.target]), options.tap && (ret = options.tap.call($element, event, event.target)))) : gesture == DOUBLE_TAP ? phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), doubleTapStartTime = null, $element.trigger("doubletap", [event.target]), options.doubleTap && (ret = options.doubleTap.call($element, event, event.target))) : gesture == LONG_TAP && (phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), doubleTapStartTime = null, $element.trigger("longtap", [event.target]), options.longTap && (ret = options.longTap.call($element, event, event.target)))), ret;
    }function validateSwipeDistance() {
      var valid = !0;return null !== options.threshold && (valid = distance >= options.threshold), valid;
    }function didSwipeBackToCancel() {
      var cancelled = !1;return null !== options.cancelThreshold && null !== direction && (cancelled = getMaxDistance(direction) - distance >= options.cancelThreshold), cancelled;
    }function validatePinchDistance() {
      return null !== options.pinchThreshold ? pinchDistance >= options.pinchThreshold : !0;
    }function validateSwipeTime() {
      var result;return result = options.maxTimeThreshold ? !(duration >= options.maxTimeThreshold) : !0;
    }function validateDefaultEvent(jqEvent, direction) {
      if (options.preventDefaultEvents !== !1) if (options.allowPageScroll === NONE) jqEvent.preventDefault();else {
        var auto = options.allowPageScroll === AUTO;switch (direction) {case LEFT:
            (options.swipeLeft && auto || !auto && options.allowPageScroll != HORIZONTAL) && jqEvent.preventDefault();break;case RIGHT:
            (options.swipeRight && auto || !auto && options.allowPageScroll != HORIZONTAL) && jqEvent.preventDefault();break;case UP:
            (options.swipeUp && auto || !auto && options.allowPageScroll != VERTICAL) && jqEvent.preventDefault();break;case DOWN:
            (options.swipeDown && auto || !auto && options.allowPageScroll != VERTICAL) && jqEvent.preventDefault();break;case NONE:}
      }
    }function validatePinch() {
      var hasCorrectFingerCount = validateFingers(),
          hasEndPoint = validateEndPoint(),
          hasCorrectDistance = validatePinchDistance();return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance;
    }function hasPinches() {
      return !!(options.pinchStatus || options.pinchIn || options.pinchOut);
    }function didPinch() {
      return !(!validatePinch() || !hasPinches());
    }function validateSwipe() {
      var hasValidTime = validateSwipeTime(),
          hasValidDistance = validateSwipeDistance(),
          hasCorrectFingerCount = validateFingers(),
          hasEndPoint = validateEndPoint(),
          didCancel = didSwipeBackToCancel(),
          valid = !didCancel && hasEndPoint && hasCorrectFingerCount && hasValidDistance && hasValidTime;return valid;
    }function hasSwipes() {
      return !!(options.swipe || options.swipeStatus || options.swipeLeft || options.swipeRight || options.swipeUp || options.swipeDown);
    }function didSwipe() {
      return !(!validateSwipe() || !hasSwipes());
    }function validateFingers() {
      return fingerCount === options.fingers || options.fingers === ALL_FINGERS || !SUPPORTS_TOUCH;
    }function validateEndPoint() {
      return 0 !== fingerData[0].end.x;
    }function hasTap() {
      return !!options.tap;
    }function hasDoubleTap() {
      return !!options.doubleTap;
    }function hasLongTap() {
      return !!options.longTap;
    }function validateDoubleTap() {
      if (null == doubleTapStartTime) return !1;var now = getTimeStamp();return hasDoubleTap() && now - doubleTapStartTime <= options.doubleTapThreshold;
    }function inDoubleTap() {
      return validateDoubleTap();
    }function validateTap() {
      return (1 === fingerCount || !SUPPORTS_TOUCH) && (isNaN(distance) || distance < options.threshold);
    }function validateLongTap() {
      return duration > options.longTapThreshold && DOUBLE_TAP_THRESHOLD > distance;
    }function didTap() {
      return !(!validateTap() || !hasTap());
    }function didDoubleTap() {
      return !(!validateDoubleTap() || !hasDoubleTap());
    }function didLongTap() {
      return !(!validateLongTap() || !hasLongTap());
    }function startMultiFingerRelease(event) {
      previousTouchEndTime = getTimeStamp(), fingerCountAtRelease = event.touches.length + 1;
    }function cancelMultiFingerRelease() {
      previousTouchEndTime = 0, fingerCountAtRelease = 0;
    }function inMultiFingerRelease() {
      var withinThreshold = !1;if (previousTouchEndTime) {
        var diff = getTimeStamp() - previousTouchEndTime;diff <= options.fingerReleaseThreshold && (withinThreshold = !0);
      }return withinThreshold;
    }function getTouchInProgress() {
      return !($element.data(PLUGIN_NS + "_intouch") !== !0);
    }function setTouchInProgress(val) {
      $element && (val === !0 ? ($element.on(MOVE_EV, touchMove), $element.on(END_EV, touchEnd), LEAVE_EV && $element.on(LEAVE_EV, touchLeave)) : ($element.off(MOVE_EV, touchMove, !1), $element.off(END_EV, touchEnd, !1), LEAVE_EV && $element.off(LEAVE_EV, touchLeave, !1)), $element.data(PLUGIN_NS + "_intouch", val === !0));
    }function createFingerData(id, evt) {
      var f = { start: { x: 0, y: 0 }, last: { x: 0, y: 0 }, end: { x: 0, y: 0 } };return f.start.x = f.last.x = f.end.x = evt.pageX || evt.clientX, f.start.y = f.last.y = f.end.y = evt.pageY || evt.clientY, fingerData[id] = f, f;
    }function updateFingerData(evt) {
      var id = void 0 !== evt.identifier ? evt.identifier : 0,
          f = getFingerData(id);return null === f && (f = createFingerData(id, evt)), f.last.x = f.end.x, f.last.y = f.end.y, f.end.x = evt.pageX || evt.clientX, f.end.y = evt.pageY || evt.clientY, f;
    }function getFingerData(id) {
      return fingerData[id] || null;
    }function setMaxDistance(direction, distance) {
      direction != NONE && (distance = Math.max(distance, getMaxDistance(direction)), maximumsMap[direction].distance = distance);
    }function getMaxDistance(direction) {
      return maximumsMap[direction] ? maximumsMap[direction].distance : void 0;
    }function createMaximumsData() {
      var maxData = {};return maxData[LEFT] = createMaximumVO(LEFT), maxData[RIGHT] = createMaximumVO(RIGHT), maxData[UP] = createMaximumVO(UP), maxData[DOWN] = createMaximumVO(DOWN), maxData;
    }function createMaximumVO(dir) {
      return { direction: dir, distance: 0 };
    }function calculateDuration() {
      return endTime - startTime;
    }function calculateTouchesDistance(startPoint, endPoint) {
      var diffX = Math.abs(startPoint.x - endPoint.x),
          diffY = Math.abs(startPoint.y - endPoint.y);return Math.round(Math.sqrt(diffX * diffX + diffY * diffY));
    }function calculatePinchZoom(startDistance, endDistance) {
      var percent = endDistance / startDistance * 1;return percent.toFixed(2);
    }function calculatePinchDirection() {
      return 1 > pinchZoom ? OUT : IN;
    }function calculateDistance(startPoint, endPoint) {
      return Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)));
    }function calculateAngle(startPoint, endPoint) {
      var x = startPoint.x - endPoint.x,
          y = endPoint.y - startPoint.y,
          r = Math.atan2(y, x),
          angle = Math.round(180 * r / Math.PI);return 0 > angle && (angle = 360 - Math.abs(angle)), angle;
    }function calculateDirection(startPoint, endPoint) {
      if (comparePoints(startPoint, endPoint)) return NONE;var angle = calculateAngle(startPoint, endPoint);return 45 >= angle && angle >= 0 ? LEFT : 360 >= angle && angle >= 315 ? LEFT : angle >= 135 && 225 >= angle ? RIGHT : angle > 45 && 135 > angle ? DOWN : UP;
    }function getTimeStamp() {
      var now = new Date();return now.getTime();
    }function getbounds(el) {
      el = $(el);var offset = el.offset(),
          bounds = { left: offset.left, right: offset.left + el.outerWidth(), top: offset.top, bottom: offset.top + el.outerHeight() };return bounds;
    }function isInBounds(point, bounds) {
      return point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom;
    }function comparePoints(pointA, pointB) {
      return pointA.x == pointB.x && pointA.y == pointB.y;
    }var options = $.extend({}, options),
        useTouchEvents = SUPPORTS_TOUCH || SUPPORTS_POINTER || !options.fallbackToMouseEvents,
        START_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
        MOVE_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
        END_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
        LEAVE_EV = useTouchEvents ? SUPPORTS_POINTER ? "mouseleave" : null : "mouseleave",
        CANCEL_EV = SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerCancel" : "pointercancel" : "touchcancel",
        distance = 0,
        direction = null,
        currentDirection = null,
        duration = 0,
        startTouchesDistance = 0,
        endTouchesDistance = 0,
        pinchZoom = 1,
        pinchDistance = 0,
        pinchDirection = 0,
        maximumsMap = null,
        $element = $(element),
        phase = "start",
        fingerCount = 0,
        fingerData = {},
        startTime = 0,
        endTime = 0,
        previousTouchEndTime = 0,
        fingerCountAtRelease = 0,
        doubleTapStartTime = 0,
        singleTapTimeout = null,
        holdTimeout = null;try {
      $element.on(START_EV, touchStart), $element.on(CANCEL_EV, touchCancel);
    } catch (e) {
      $.error("events not supported " + START_EV + "," + CANCEL_EV + " on jQuery.swipe");
    }this.enable = function () {
      return this.disable(), $element.on(START_EV, touchStart), $element.on(CANCEL_EV, touchCancel), $element;
    }, this.disable = function () {
      return removeListeners(), $element;
    }, this.destroy = function () {
      removeListeners(), $element.data(PLUGIN_NS, null), $element = null;
    }, this.option = function (property, value) {
      if ("object" == typeof property) options = $.extend(options, property);else if (void 0 !== options[property]) {
        if (void 0 === value) return options[property];options[property] = value;
      } else {
        if (!property) return options;$.error("Option " + property + " does not exist on jQuery.swipe.options");
      }return null;
    };
  }var VERSION = "1.6.18",
      LEFT = "left",
      RIGHT = "right",
      UP = "up",
      DOWN = "down",
      IN = "in",
      OUT = "out",
      NONE = "none",
      AUTO = "auto",
      SWIPE = "swipe",
      PINCH = "pinch",
      TAP = "tap",
      DOUBLE_TAP = "doubletap",
      LONG_TAP = "longtap",
      HORIZONTAL = "horizontal",
      VERTICAL = "vertical",
      ALL_FINGERS = "all",
      DOUBLE_TAP_THRESHOLD = 10,
      PHASE_START = "start",
      PHASE_MOVE = "move",
      PHASE_END = "end",
      PHASE_CANCEL = "cancel",
      SUPPORTS_TOUCH = ("ontouchstart" in window),
      SUPPORTS_POINTER_IE10 = window.navigator.msPointerEnabled && !window.PointerEvent && !SUPPORTS_TOUCH,
      SUPPORTS_POINTER = (window.PointerEvent || window.navigator.msPointerEnabled) && !SUPPORTS_TOUCH,
      PLUGIN_NS = "TouchSwipe",
      defaults = { fingers: 1, threshold: 75, cancelThreshold: null, pinchThreshold: 20, maxTimeThreshold: null, fingerReleaseThreshold: 250, longTapThreshold: 500, doubleTapThreshold: 200, swipe: null, swipeLeft: null, swipeRight: null, swipeUp: null, swipeDown: null, swipeStatus: null, pinchIn: null, pinchOut: null, pinchStatus: null, click: null, tap: null, doubleTap: null, longTap: null, hold: null, triggerOnTouchEnd: !0, triggerOnTouchLeave: !1, allowPageScroll: "auto", fallbackToMouseEvents: !0, excludedElements: ".noSwipe", preventDefaultEvents: !0 };$.fn.swipe = function (method) {
    var $this = $(this),
        plugin = $this.data(PLUGIN_NS);if (plugin && "string" == typeof method) {
      if (plugin[method]) return plugin[method].apply(plugin, Array.prototype.slice.call(arguments, 1));$.error("Method " + method + " does not exist on jQuery.swipe");
    } else if (plugin && "object" == typeof method) plugin.option.apply(plugin, arguments);else if (!(plugin || "object" != typeof method && method)) return init.apply(this, arguments);return $this;
  }, $.fn.swipe.version = VERSION, $.fn.swipe.defaults = defaults, $.fn.swipe.phases = { PHASE_START: PHASE_START, PHASE_MOVE: PHASE_MOVE, PHASE_END: PHASE_END, PHASE_CANCEL: PHASE_CANCEL }, $.fn.swipe.directions = { LEFT: LEFT, RIGHT: RIGHT, UP: UP, DOWN: DOWN, IN: IN, OUT: OUT }, $.fn.swipe.pageScroll = { NONE: NONE, HORIZONTAL: HORIZONTAL, VERTICAL: VERTICAL, AUTO: AUTO }, $.fn.swipe.fingers = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5, ALL: ALL_FINGERS };
});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


Object.defineProperty(exports, '__esModule', {
  value: true
});
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = (function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
})();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(_x) {
  var _again = true;

  _function: while (_again) {
    var element = _x;
    _again = false;

    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
      return document.body;
    }

    switch (element.nodeName) {
      case 'HTML':
      case 'BODY':
        return element.ownerDocument.body;
      case '#document':
        return element.body;
    }

    // Firefox want us to check `-x` and `-y` variations as well

    var _getStyleComputedProp = getStyleComputedProperty(element),
        overflow = _getStyleComputedProp.overflow,
        overflowX = _getStyleComputedProp.overflowX,
        overflowY = _getStyleComputedProp.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return element;
    }

    _x = getParentNode(element);
    _again = true;
    _getStyleComputedProp = overflow = overflowX = overflowY = undefined;
    continue _function;
  }
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(_x2) {
  var _again2 = true;

  _function2: while (_again2) {
    var element = _x2;
    _again2 = false;

    if (!element) {
      return document.documentElement;
    }

    var noOffsetParent = isIE(10) ? document.body : null;

    // NOTE: 1 DOM access here
    var offsetParent = element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    while (offsetParent === noOffsetParent && element.nextElementSibling) {
      offsetParent = (element = element.nextElementSibling).offsetParent;
    }

    var nodeName = offsetParent && offsetParent.nodeName;

    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
      return element ? element.ownerDocument.documentElement : document.documentElement;
    }

    // .offsetParent will return the closest TH, TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
      _x2 = offsetParent;
      _again2 = true;
      noOffsetParent = offsetParent = nodeName = undefined;
      continue _function2;
    }

    return offsetParent;
  }
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(_x3) {
  var _again3 = true;

  _function3: while (_again3) {
    var node = _x3;
    _again3 = false;

    if (node.parentNode !== null) {
      _x3 = node.parentNode;
      _again3 = true;
      continue _function3;
    }

    return node;
  }
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(_x4, _x5) {
  var _again4 = true;

  _function4: while (_again4) {
    var element1 = _x4,
        element2 = _x5;
    _again4 = false;

    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
      return document.documentElement;
    }

    // Here we make sure to give as "start" the element that comes first in the DOM
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;

    // Get common ancestor container
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;

    // Both nodes are inside #document

    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
      if (isOffsetContainer(commonAncestorContainer)) {
        return commonAncestorContainer;
      }

      return getOffsetParent(commonAncestorContainer);
    }

    // one of the nodes is inside shadowDOM, find which one
    var element1root = getRoot(element1);
    if (element1root.host) {
      _x4 = element1root.host;
      _x5 = element2;
      _again4 = true;
      order = start = end = range = commonAncestorContainer = element1root = undefined;
      continue _function4;
    } else {
      _x4 = element1;
      _x5 = getRoot(element2).host;
      _again4 = true;
      order = start = end = range = commonAncestorContainer = element1root = undefined;
      continue _function4;
    }
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var defineProperty = function defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(_x6) {
  var _again5 = true;

  _function5: while (_again5) {
    var element = _x6;
    _again5 = false;

    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
      return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
      return true;
    }
    var parentNode = getParentNode(element);
    if (!parentNode) {
      return false;
    }
    _x6 = parentNode;
    _again5 = true;
    nodeName = parentNode = undefined;
    continue _function5;
  }
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = (function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs

  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
})();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */

Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

exports['default'] = Popper;

//# sourceMappingURL=popper.js.map
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Swiper 5.3.8
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 24, 2020
 */Object.defineProperty(exports,'__esModule',{value:true});var _get=function get(_x14,_x15,_x16){var _again=true;_function: while(_again) {var object=_x14,property=_x15,receiver=_x16;_again = false;if(object === null)object = Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc === undefined){var parent=Object.getPrototypeOf(object);if(parent === null){return undefined;}else {_x14 = parent;_x15 = property;_x16 = receiver;_again = true;desc = parent = undefined;continue _function;}}else if('value' in desc){return desc.value;}else {var getter=desc.get;if(getter === undefined){return undefined;}return getter.call(receiver);}}};var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if('value' in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();function _inherits(subClass,superClass){if(typeof superClass !== 'function' && superClass !== null){throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else {obj[key] = value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}var _dom7DistDom7Modular=__webpack_require__(25);var _ssrWindow=__webpack_require__(4);var Methods={addClass:_dom7DistDom7Modular.addClass,removeClass:_dom7DistDom7Modular.removeClass,hasClass:_dom7DistDom7Modular.hasClass,toggleClass:_dom7DistDom7Modular.toggleClass,attr:_dom7DistDom7Modular.attr,removeAttr:_dom7DistDom7Modular.removeAttr,data:_dom7DistDom7Modular.data,transform:_dom7DistDom7Modular.transform,transition:_dom7DistDom7Modular.transition,on:_dom7DistDom7Modular.on,off:_dom7DistDom7Modular.off,trigger:_dom7DistDom7Modular.trigger,transitionEnd:_dom7DistDom7Modular.transitionEnd,outerWidth:_dom7DistDom7Modular.outerWidth,outerHeight:_dom7DistDom7Modular.outerHeight,offset:_dom7DistDom7Modular.offset,css:_dom7DistDom7Modular.css,each:_dom7DistDom7Modular.each,html:_dom7DistDom7Modular.html,text:_dom7DistDom7Modular.text,is:_dom7DistDom7Modular.is,index:_dom7DistDom7Modular.index,eq:_dom7DistDom7Modular.eq,append:_dom7DistDom7Modular.append,prepend:_dom7DistDom7Modular.prepend,next:_dom7DistDom7Modular.next,nextAll:_dom7DistDom7Modular.nextAll,prev:_dom7DistDom7Modular.prev,prevAll:_dom7DistDom7Modular.prevAll,parent:_dom7DistDom7Modular.parent,parents:_dom7DistDom7Modular.parents,closest:_dom7DistDom7Modular.closest,find:_dom7DistDom7Modular.find,children:_dom7DistDom7Modular.children,filter:_dom7DistDom7Modular.filter,remove:_dom7DistDom7Modular.remove,add:_dom7DistDom7Modular.add,styles:_dom7DistDom7Modular.styles};Object.keys(Methods).forEach(function(methodName){_dom7DistDom7Modular.$.fn[methodName] = _dom7DistDom7Modular.$.fn[methodName] || Methods[methodName];});var Utils={deleteProps:function deleteProps(obj){var object=obj;Object.keys(object).forEach(function(key){try{object[key] = null;}catch(e) { // no getter for object
}try{delete object[key];}catch(e) { // something got wrong
}});},nextTick:function nextTick(callback){var delay=arguments.length <= 1 || arguments[1] === undefined?0:arguments[1];return setTimeout(callback,delay);},now:function now(){return Date.now();},getTranslate:function getTranslate(el){var axis=arguments.length <= 1 || arguments[1] === undefined?'x':arguments[1];var matrix=undefined;var curTransform=undefined;var transformMatrix=undefined;var curStyle=_ssrWindow.window.getComputedStyle(el,null);if(_ssrWindow.window.WebKitCSSMatrix){curTransform = curStyle.transform || curStyle.webkitTransform;if(curTransform.split(',').length > 6){curTransform = curTransform.split(', ').map(function(a){return a.replace(',','.');}).join(', ');} // Some old versions of Webkit choke when 'none' is passed; pass
// empty string instead in this case
transformMatrix = new _ssrWindow.window.WebKitCSSMatrix(curTransform === 'none'?'':curTransform);}else {transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(','matrix(1, 0, 0, 1,');matrix = transformMatrix.toString().split(',');}if(axis === 'x'){ // Latest Chrome and webkits Fix
if(_ssrWindow.window.WebKitCSSMatrix)curTransform = transformMatrix.m41; // Crazy IE10 Matrix
else if(matrix.length === 16)curTransform = parseFloat(matrix[12]); // Normal Browsers
else curTransform = parseFloat(matrix[4]);}if(axis === 'y'){ // Latest Chrome and webkits Fix
if(_ssrWindow.window.WebKitCSSMatrix)curTransform = transformMatrix.m42; // Crazy IE10 Matrix
else if(matrix.length === 16)curTransform = parseFloat(matrix[13]); // Normal Browsers
else curTransform = parseFloat(matrix[5]);}return curTransform || 0;},parseUrlQuery:function parseUrlQuery(url){var query={};var urlToParse=url || _ssrWindow.window.location.href;var i=undefined;var params=undefined;var param=undefined;var length=undefined;if(typeof urlToParse === 'string' && urlToParse.length){urlToParse = urlToParse.indexOf('?') > -1?urlToParse.replace(/\S*\?/,''):'';params = urlToParse.split('&').filter(function(paramsPart){return paramsPart !== '';});length = params.length;for(i = 0;i < length;i += 1) {param = params[i].replace(/#\S+/g,'').split('=');query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined'?undefined:decodeURIComponent(param[1]) || '';}}return query;},isObject:function isObject(o){return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;},extend:function extend(){for(var _len=arguments.length,args=Array(_len),_key=0;_key < _len;_key++) {args[_key] = arguments[_key];}var to=Object(args[0]);for(var i=1;i < args.length;i += 1) {var nextSource=args[i];if(nextSource !== undefined && nextSource !== null){var keysArray=Object.keys(Object(nextSource));for(var nextIndex=0,len=keysArray.length;nextIndex < len;nextIndex += 1) {var nextKey=keysArray[nextIndex];var desc=Object.getOwnPropertyDescriptor(nextSource,nextKey);if(desc !== undefined && desc.enumerable){if(Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])){Utils.extend(to[nextKey],nextSource[nextKey]);}else if(!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])){to[nextKey] = {};Utils.extend(to[nextKey],nextSource[nextKey]);}else {to[nextKey] = nextSource[nextKey];}}}}}return to;}};var Support=(function Support(){return {touch:_ssrWindow.window.Modernizr && _ssrWindow.window.Modernizr.touch === true || (function checkTouch(){return !!(_ssrWindow.window.navigator.maxTouchPoints > 0 || 'ontouchstart' in _ssrWindow.window || _ssrWindow.window.DocumentTouch && _ssrWindow.document instanceof _ssrWindow.window.DocumentTouch);})(),pointerEvents:!!_ssrWindow.window.PointerEvent && 'maxTouchPoints' in _ssrWindow.window.navigator && _ssrWindow.window.navigator.maxTouchPoints > 0,observer:(function checkObserver(){return 'MutationObserver' in _ssrWindow.window || 'WebkitMutationObserver' in _ssrWindow.window;})(),passiveListener:(function checkPassiveListener(){var supportsPassive=false;try{var opts=Object.defineProperty({},'passive',{ // eslint-disable-next-line
get:function get(){supportsPassive = true;}});_ssrWindow.window.addEventListener('testPassiveListener',null,opts);}catch(e) { // No support
}return supportsPassive;})(),gestures:(function checkGestures(){return 'ongesturestart' in _ssrWindow.window;})()};})();var SwiperClass=(function(){function SwiperClass(){var params=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];_classCallCheck(this,SwiperClass);var self=this;self.params = params; // Events
self.eventsListeners = {};if(self.params && self.params.on){Object.keys(self.params.on).forEach(function(eventName){self.on(eventName,self.params.on[eventName]);});}}_createClass(SwiperClass,[{key:'on',value:function on(events,handler,priority){var self=this;if(typeof handler !== 'function')return self;var method=priority?'unshift':'push';events.split(' ').forEach(function(event){if(!self.eventsListeners[event])self.eventsListeners[event] = [];self.eventsListeners[event][method](handler);});return self;}},{key:'once',value:function once(events,handler,priority){var self=this;if(typeof handler !== 'function')return self;function onceHandler(){self.off(events,onceHandler);if(onceHandler.f7proxy){delete onceHandler.f7proxy;}for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2 < _len2;_key2++) {args[_key2] = arguments[_key2];}handler.apply(self,args);}onceHandler.f7proxy = handler;return self.on(events,onceHandler,priority);}},{key:'off',value:function off(events,handler){var self=this;if(!self.eventsListeners)return self;events.split(' ').forEach(function(event){if(typeof handler === 'undefined'){self.eventsListeners[event] = [];}else if(self.eventsListeners[event] && self.eventsListeners[event].length){self.eventsListeners[event].forEach(function(eventHandler,index){if(eventHandler === handler || eventHandler.f7proxy && eventHandler.f7proxy === handler){self.eventsListeners[event].splice(index,1);}});}});return self;}},{key:'emit',value:function emit(){var self=this;if(!self.eventsListeners)return self;var events=undefined;var data=undefined;var context=undefined;for(var _len3=arguments.length,args=Array(_len3),_key3=0;_key3 < _len3;_key3++) {args[_key3] = arguments[_key3];}if(typeof args[0] === 'string' || Array.isArray(args[0])){events = args[0];data = args.slice(1,args.length);context = self;}else {events = args[0].events;data = args[0].data;context = args[0].context || self;}var eventsArray=Array.isArray(events)?events:events.split(' ');eventsArray.forEach(function(event){if(self.eventsListeners && self.eventsListeners[event]){(function(){var handlers=[];self.eventsListeners[event].forEach(function(eventHandler){handlers.push(eventHandler);});handlers.forEach(function(eventHandler){eventHandler.apply(context,data);});})();}});return self;}},{key:'useModulesParams',value:function useModulesParams(instanceParams){var instance=this;if(!instance.modules)return;Object.keys(instance.modules).forEach(function(moduleName){var module=instance.modules[moduleName]; // Extend params
if(module.params){Utils.extend(instanceParams,module.params);}});}},{key:'useModules',value:function useModules(){var modulesParams=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var instance=this;if(!instance.modules)return;Object.keys(instance.modules).forEach(function(moduleName){var module=instance.modules[moduleName];var moduleParams=modulesParams[moduleName] || {}; // Extend instance methods and props
if(module.instance){Object.keys(module.instance).forEach(function(modulePropName){var moduleProp=module.instance[modulePropName];if(typeof moduleProp === 'function'){instance[modulePropName] = moduleProp.bind(instance);}else {instance[modulePropName] = moduleProp;}});} // Add event listeners
if(module.on && instance.on){Object.keys(module.on).forEach(function(moduleEventName){instance.on(moduleEventName,module.on[moduleEventName]);});} // Module create callback
if(module.create){module.create.bind(instance)(moduleParams);}});}}],[{key:'installModule',value:function installModule(module){var Class=this;if(!Class.prototype.modules)Class.prototype.modules = {};var name=module.name || Object.keys(Class.prototype.modules).length + '_' + Utils.now();Class.prototype.modules[name] = module; // Prototype
if(module.proto){Object.keys(module.proto).forEach(function(key){Class.prototype[key] = module.proto[key];});} // Class
if(module['static']){Object.keys(module['static']).forEach(function(key){Class[key] = module['static'][key];});} // Callback
if(module.install){for(var _len4=arguments.length,params=Array(_len4 > 1?_len4 - 1:0),_key4=1;_key4 < _len4;_key4++) {params[_key4 - 1] = arguments[_key4];}module.install.apply(Class,params);}return Class;}},{key:'use',value:function use(module){var Class=this;if(Array.isArray(module)){module.forEach(function(m){return Class.installModule(m);});return Class;}for(var _len5=arguments.length,params=Array(_len5 > 1?_len5 - 1:0),_key5=1;_key5 < _len5;_key5++) {params[_key5 - 1] = arguments[_key5];}return Class.installModule.apply(Class,[module].concat(params));}},{key:'components',set:function set(components){var Class=this;if(!Class.use)return;Class.use(components);}}]);return SwiperClass;})();function updateSize(){var swiper=this;var width=undefined;var height=undefined;var $el=swiper.$el;if(typeof swiper.params.width !== 'undefined'){width = swiper.params.width;}else {width = $el[0].clientWidth;}if(typeof swiper.params.height !== 'undefined'){height = swiper.params.height;}else {height = $el[0].clientHeight;}if(width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()){return;} // Subtract paddings
width = width - parseInt($el.css('padding-left'),10) - parseInt($el.css('padding-right'),10);height = height - parseInt($el.css('padding-top'),10) - parseInt($el.css('padding-bottom'),10);Utils.extend(swiper,{width:width,height:height,size:swiper.isHorizontal()?width:height});}function updateSlides(){var swiper=this;var params=swiper.params;var $wrapperEl=swiper.$wrapperEl;var swiperSize=swiper.size;var rtl=swiper.rtlTranslate;var wrongRTL=swiper.wrongRTL;var isVirtual=swiper.virtual && params.virtual.enabled;var previousSlidesLength=isVirtual?swiper.virtual.slides.length:swiper.slides.length;var slides=$wrapperEl.children('.' + swiper.params.slideClass);var slidesLength=isVirtual?swiper.virtual.slides.length:slides.length;var snapGrid=[];var slidesGrid=[];var slidesSizesGrid=[];function slidesForMargin(slideIndex){if(!params.cssMode)return true;if(slideIndex === slides.length - 1){return false;}return true;}var offsetBefore=params.slidesOffsetBefore;if(typeof offsetBefore === 'function'){offsetBefore = params.slidesOffsetBefore.call(swiper);}var offsetAfter=params.slidesOffsetAfter;if(typeof offsetAfter === 'function'){offsetAfter = params.slidesOffsetAfter.call(swiper);}var previousSnapGridLength=swiper.snapGrid.length;var previousSlidesGridLength=swiper.snapGrid.length;var spaceBetween=params.spaceBetween;var slidePosition=-offsetBefore;var prevSlideSize=0;var index=0;if(typeof swiperSize === 'undefined'){return;}if(typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0){spaceBetween = parseFloat(spaceBetween.replace('%','')) / 100 * swiperSize;}swiper.virtualSize = -spaceBetween; // reset margins
if(rtl)slides.css({marginLeft:'',marginTop:''});else slides.css({marginRight:'',marginBottom:''});var slidesNumberEvenToRows=undefined;if(params.slidesPerColumn > 1){if(Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn){slidesNumberEvenToRows = slidesLength;}else {slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;}if(params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row'){slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows,params.slidesPerView * params.slidesPerColumn);}} // Calc slides
var slideSize=undefined;var slidesPerColumn=params.slidesPerColumn;var slidesPerRow=slidesNumberEvenToRows / slidesPerColumn;var numFullColumns=Math.floor(slidesLength / params.slidesPerColumn);for(var i=0;i < slidesLength;i += 1) {slideSize = 0;var _slide=slides.eq(i);if(params.slidesPerColumn > 1){ // Set slides order
var newSlideOrderIndex=undefined;var column=undefined;var row=undefined;if(params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1){var groupIndex=Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));var slideIndexInGroup=i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;var columnsInGroup=groupIndex === 0?params.slidesPerGroup:Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn),params.slidesPerGroup);row = Math.floor(slideIndexInGroup / columnsInGroup);column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;_slide.css({'-webkit-box-ordinal-group':newSlideOrderIndex,'-moz-box-ordinal-group':newSlideOrderIndex,'-ms-flex-order':newSlideOrderIndex,'-webkit-order':newSlideOrderIndex,order:newSlideOrderIndex});}else if(params.slidesPerColumnFill === 'column'){column = Math.floor(i / slidesPerColumn);row = i - column * slidesPerColumn;if(column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1){row += 1;if(row >= slidesPerColumn){row = 0;column += 1;}}}else {row = Math.floor(i / slidesPerRow);column = i - row * slidesPerRow;}_slide.css('margin-' + (swiper.isHorizontal()?'top':'left'),row !== 0 && params.spaceBetween && params.spaceBetween + 'px');}if(_slide.css('display') === 'none')continue; // eslint-disable-line
if(params.slidesPerView === 'auto'){var slideStyles=_ssrWindow.window.getComputedStyle(_slide[0],null);var currentTransform=_slide[0].style.transform;var currentWebKitTransform=_slide[0].style.webkitTransform;if(currentTransform){_slide[0].style.transform = 'none';}if(currentWebKitTransform){_slide[0].style.webkitTransform = 'none';}if(params.roundLengths){slideSize = swiper.isHorizontal()?_slide.outerWidth(true):_slide.outerHeight(true);}else { // eslint-disable-next-line
if(swiper.isHorizontal()){var width=parseFloat(slideStyles.getPropertyValue('width'));var paddingLeft=parseFloat(slideStyles.getPropertyValue('padding-left'));var paddingRight=parseFloat(slideStyles.getPropertyValue('padding-right'));var marginLeft=parseFloat(slideStyles.getPropertyValue('margin-left'));var marginRight=parseFloat(slideStyles.getPropertyValue('margin-right'));var boxSizing=slideStyles.getPropertyValue('box-sizing');if(boxSizing && boxSizing === 'border-box'){slideSize = width + marginLeft + marginRight;}else {slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;}}else {var height=parseFloat(slideStyles.getPropertyValue('height'));var paddingTop=parseFloat(slideStyles.getPropertyValue('padding-top'));var paddingBottom=parseFloat(slideStyles.getPropertyValue('padding-bottom'));var marginTop=parseFloat(slideStyles.getPropertyValue('margin-top'));var marginBottom=parseFloat(slideStyles.getPropertyValue('margin-bottom'));var boxSizing=slideStyles.getPropertyValue('box-sizing');if(boxSizing && boxSizing === 'border-box'){slideSize = height + marginTop + marginBottom;}else {slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;}}}if(currentTransform){_slide[0].style.transform = currentTransform;}if(currentWebKitTransform){_slide[0].style.webkitTransform = currentWebKitTransform;}if(params.roundLengths)slideSize = Math.floor(slideSize);}else {slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;if(params.roundLengths)slideSize = Math.floor(slideSize);if(slides[i]){if(swiper.isHorizontal()){slides[i].style.width = slideSize + 'px';}else {slides[i].style.height = slideSize + 'px';}}}if(slides[i]){slides[i].swiperSlideSize = slideSize;}slidesSizesGrid.push(slideSize);if(params.centeredSlides){slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;if(prevSlideSize === 0 && i !== 0)slidePosition = slidePosition - swiperSize / 2 - spaceBetween;if(i === 0)slidePosition = slidePosition - swiperSize / 2 - spaceBetween;if(Math.abs(slidePosition) < 1 / 1000)slidePosition = 0;if(params.roundLengths)slidePosition = Math.floor(slidePosition);if(index % params.slidesPerGroup === 0)snapGrid.push(slidePosition);slidesGrid.push(slidePosition);}else {if(params.roundLengths)slidePosition = Math.floor(slidePosition);if((index - Math.min(swiper.params.slidesPerGroupSkip,index)) % swiper.params.slidesPerGroup === 0)snapGrid.push(slidePosition);slidesGrid.push(slidePosition);slidePosition = slidePosition + slideSize + spaceBetween;}swiper.virtualSize += slideSize + spaceBetween;prevSlideSize = slideSize;index += 1;}swiper.virtualSize = Math.max(swiper.virtualSize,swiperSize) + offsetAfter;var newSlidesGrid=undefined;if(rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')){$wrapperEl.css({width:swiper.virtualSize + params.spaceBetween + 'px'});}if(params.setWrapperSize){if(swiper.isHorizontal())$wrapperEl.css({width:swiper.virtualSize + params.spaceBetween + 'px'});else $wrapperEl.css({height:swiper.virtualSize + params.spaceBetween + 'px'});}if(params.slidesPerColumn > 1){swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;if(swiper.isHorizontal())$wrapperEl.css({width:swiper.virtualSize + params.spaceBetween + 'px'});else $wrapperEl.css({height:swiper.virtualSize + params.spaceBetween + 'px'});if(params.centeredSlides){newSlidesGrid = [];for(var i=0;i < snapGrid.length;i += 1) {var slidesGridItem=snapGrid[i];if(params.roundLengths)slidesGridItem = Math.floor(slidesGridItem);if(snapGrid[i] < swiper.virtualSize + snapGrid[0])newSlidesGrid.push(slidesGridItem);}snapGrid = newSlidesGrid;}} // Remove last grid elements depending on width
if(!params.centeredSlides){newSlidesGrid = [];for(var i=0;i < snapGrid.length;i += 1) {var slidesGridItem=snapGrid[i];if(params.roundLengths)slidesGridItem = Math.floor(slidesGridItem);if(snapGrid[i] <= swiper.virtualSize - swiperSize){newSlidesGrid.push(slidesGridItem);}}snapGrid = newSlidesGrid;if(Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1){snapGrid.push(swiper.virtualSize - swiperSize);}}if(snapGrid.length === 0)snapGrid = [0];if(params.spaceBetween !== 0){if(swiper.isHorizontal()){if(rtl)slides.filter(slidesForMargin).css({marginLeft:spaceBetween + 'px'});else slides.filter(slidesForMargin).css({marginRight:spaceBetween + 'px'});}else slides.filter(slidesForMargin).css({marginBottom:spaceBetween + 'px'});}if(params.centeredSlides && params.centeredSlidesBounds){(function(){var allSlidesSize=0;slidesSizesGrid.forEach(function(slideSizeValue){allSlidesSize += slideSizeValue + (params.spaceBetween?params.spaceBetween:0);});allSlidesSize -= params.spaceBetween;var maxSnap=allSlidesSize - swiperSize;snapGrid = snapGrid.map(function(snap){if(snap < 0)return -offsetBefore;if(snap > maxSnap)return maxSnap + offsetAfter;return snap;});})();}if(params.centerInsufficientSlides){var allSlidesSize=0;slidesSizesGrid.forEach(function(slideSizeValue){allSlidesSize += slideSizeValue + (params.spaceBetween?params.spaceBetween:0);});allSlidesSize -= params.spaceBetween;if(allSlidesSize < swiperSize){(function(){var allSlidesOffset=(swiperSize - allSlidesSize) / 2;snapGrid.forEach(function(snap,snapIndex){snapGrid[snapIndex] = snap - allSlidesOffset;});slidesGrid.forEach(function(snap,snapIndex){slidesGrid[snapIndex] = snap + allSlidesOffset;});})();}}Utils.extend(swiper,{slides:slides,snapGrid:snapGrid,slidesGrid:slidesGrid,slidesSizesGrid:slidesSizesGrid});if(slidesLength !== previousSlidesLength){swiper.emit('slidesLengthChange');}if(snapGrid.length !== previousSnapGridLength){if(swiper.params.watchOverflow)swiper.checkOverflow();swiper.emit('snapGridLengthChange');}if(slidesGrid.length !== previousSlidesGridLength){swiper.emit('slidesGridLengthChange');}if(params.watchSlidesProgress || params.watchSlidesVisibility){swiper.updateSlidesOffset();}}function updateAutoHeight(speed){var swiper=this;var activeSlides=[];var newHeight=0;var i=undefined;if(typeof speed === 'number'){swiper.setTransition(speed);}else if(speed === true){swiper.setTransition(swiper.params.speed);} // Find slides currently in view
if(swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1){if(swiper.params.centeredSlides){swiper.visibleSlides.each(function(index,slide){activeSlides.push(slide);});}else {for(i = 0;i < Math.ceil(swiper.params.slidesPerView);i += 1) {var _index=swiper.activeIndex + i;if(_index > swiper.slides.length)break;activeSlides.push(swiper.slides.eq(_index)[0]);}}}else {activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);} // Find new height from highest slide in view
for(i = 0;i < activeSlides.length;i += 1) {if(typeof activeSlides[i] !== 'undefined'){var height=activeSlides[i].offsetHeight;newHeight = height > newHeight?height:newHeight;}} // Update Height
if(newHeight)swiper.$wrapperEl.css('height',newHeight + 'px');}function updateSlidesOffset(){var swiper=this;var slides=swiper.slides;for(var i=0;i < slides.length;i += 1) {slides[i].swiperSlideOffset = swiper.isHorizontal()?slides[i].offsetLeft:slides[i].offsetTop;}}function updateSlidesProgress(){var translate=arguments.length <= 0 || arguments[0] === undefined?this && this.translate || 0:arguments[0];var swiper=this;var params=swiper.params;var slides=swiper.slides;var rtl=swiper.rtlTranslate;if(slides.length === 0)return;if(typeof slides[0].swiperSlideOffset === 'undefined')swiper.updateSlidesOffset();var offsetCenter=-translate;if(rtl)offsetCenter = translate; // Visible Slides
slides.removeClass(params.slideVisibleClass);swiper.visibleSlidesIndexes = [];swiper.visibleSlides = [];for(var i=0;i < slides.length;i += 1) {var _slide2=slides[i];var slideProgress=(offsetCenter + (params.centeredSlides?swiper.minTranslate():0) - _slide2.swiperSlideOffset) / (_slide2.swiperSlideSize + params.spaceBetween);if(params.watchSlidesVisibility || params.centeredSlides && params.autoHeight){var slideBefore=-(offsetCenter - _slide2.swiperSlideOffset);var slideAfter=slideBefore + swiper.slidesSizesGrid[i];var isVisible=slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;if(isVisible){swiper.visibleSlides.push(_slide2);swiper.visibleSlidesIndexes.push(i);slides.eq(i).addClass(params.slideVisibleClass);}}_slide2.progress = rtl?-slideProgress:slideProgress;}swiper.visibleSlides = (0,_dom7DistDom7Modular.$)(swiper.visibleSlides);}function updateProgress(translate){var swiper=this;if(typeof translate === 'undefined'){var multiplier=swiper.rtlTranslate?-1:1; // eslint-disable-next-line
translate = swiper && swiper.translate && swiper.translate * multiplier || 0;}var params=swiper.params;var translatesDiff=swiper.maxTranslate() - swiper.minTranslate();var progress=swiper.progress;var isBeginning=swiper.isBeginning;var isEnd=swiper.isEnd;var wasBeginning=isBeginning;var wasEnd=isEnd;if(translatesDiff === 0){progress = 0;isBeginning = true;isEnd = true;}else {progress = (translate - swiper.minTranslate()) / translatesDiff;isBeginning = progress <= 0;isEnd = progress >= 1;}Utils.extend(swiper,{progress:progress,isBeginning:isBeginning,isEnd:isEnd});if(params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight)swiper.updateSlidesProgress(translate);if(isBeginning && !wasBeginning){swiper.emit('reachBeginning toEdge');}if(isEnd && !wasEnd){swiper.emit('reachEnd toEdge');}if(wasBeginning && !isBeginning || wasEnd && !isEnd){swiper.emit('fromEdge');}swiper.emit('progress',progress);}function updateSlidesClasses(){var swiper=this;var slides=swiper.slides;var params=swiper.params;var $wrapperEl=swiper.$wrapperEl;var activeIndex=swiper.activeIndex;var realIndex=swiper.realIndex;var isVirtual=swiper.virtual && params.virtual.enabled;slides.removeClass(params.slideActiveClass + ' ' + params.slideNextClass + ' ' + params.slidePrevClass + ' ' + params.slideDuplicateActiveClass + ' ' + params.slideDuplicateNextClass + ' ' + params.slideDuplicatePrevClass);var activeSlide=undefined;if(isVirtual){activeSlide = swiper.$wrapperEl.find('.' + params.slideClass + '[data-swiper-slide-index="' + activeIndex + '"]');}else {activeSlide = slides.eq(activeIndex);} // Active classes
activeSlide.addClass(params.slideActiveClass);if(params.loop){ // Duplicate to all looped slides
if(activeSlide.hasClass(params.slideDuplicateClass)){$wrapperEl.children('.' + params.slideClass + ':not(.' + params.slideDuplicateClass + ')[data-swiper-slide-index="' + realIndex + '"]').addClass(params.slideDuplicateActiveClass);}else {$wrapperEl.children('.' + params.slideClass + '.' + params.slideDuplicateClass + '[data-swiper-slide-index="' + realIndex + '"]').addClass(params.slideDuplicateActiveClass);}} // Next Slide
var nextSlide=activeSlide.nextAll('.' + params.slideClass).eq(0).addClass(params.slideNextClass);if(params.loop && nextSlide.length === 0){nextSlide = slides.eq(0);nextSlide.addClass(params.slideNextClass);} // Prev Slide
var prevSlide=activeSlide.prevAll('.' + params.slideClass).eq(0).addClass(params.slidePrevClass);if(params.loop && prevSlide.length === 0){prevSlide = slides.eq(-1);prevSlide.addClass(params.slidePrevClass);}if(params.loop){ // Duplicate to all looped slides
if(nextSlide.hasClass(params.slideDuplicateClass)){$wrapperEl.children('.' + params.slideClass + ':not(.' + params.slideDuplicateClass + ')[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(params.slideDuplicateNextClass);}else {$wrapperEl.children('.' + params.slideClass + '.' + params.slideDuplicateClass + '[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(params.slideDuplicateNextClass);}if(prevSlide.hasClass(params.slideDuplicateClass)){$wrapperEl.children('.' + params.slideClass + ':not(.' + params.slideDuplicateClass + ')[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(params.slideDuplicatePrevClass);}else {$wrapperEl.children('.' + params.slideClass + '.' + params.slideDuplicateClass + '[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(params.slideDuplicatePrevClass);}}}function updateActiveIndex(newActiveIndex){var swiper=this;var translate=swiper.rtlTranslate?swiper.translate:-swiper.translate;var slidesGrid=swiper.slidesGrid;var snapGrid=swiper.snapGrid;var params=swiper.params;var previousIndex=swiper.activeIndex;var previousRealIndex=swiper.realIndex;var previousSnapIndex=swiper.snapIndex;var activeIndex=newActiveIndex;var snapIndex=undefined;if(typeof activeIndex === 'undefined'){for(var i=0;i < slidesGrid.length;i += 1) {if(typeof slidesGrid[i + 1] !== 'undefined'){if(translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2){activeIndex = i;}else if(translate >= slidesGrid[i] && translate < slidesGrid[i + 1]){activeIndex = i + 1;}}else if(translate >= slidesGrid[i]){activeIndex = i;}} // Normalize slideIndex
if(params.normalizeSlideIndex){if(activeIndex < 0 || typeof activeIndex === 'undefined')activeIndex = 0;}}if(snapGrid.indexOf(translate) >= 0){snapIndex = snapGrid.indexOf(translate);}else {var skip=Math.min(params.slidesPerGroupSkip,activeIndex);snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);}if(snapIndex >= snapGrid.length)snapIndex = snapGrid.length - 1;if(activeIndex === previousIndex){if(snapIndex !== previousSnapIndex){swiper.snapIndex = snapIndex;swiper.emit('snapIndexChange');}return;} // Get real index
var realIndex=parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex,10);Utils.extend(swiper,{snapIndex:snapIndex,realIndex:realIndex,previousIndex:previousIndex,activeIndex:activeIndex});swiper.emit('activeIndexChange');swiper.emit('snapIndexChange');if(previousRealIndex !== realIndex){swiper.emit('realIndexChange');}if(swiper.initialized || swiper.params.runCallbacksOnInit){swiper.emit('slideChange');}}function updateClickedSlide(e){var swiper=this;var params=swiper.params;var slide=(0,_dom7DistDom7Modular.$)(e.target).closest('.' + params.slideClass)[0];var slideFound=false;if(slide){for(var i=0;i < swiper.slides.length;i += 1) {if(swiper.slides[i] === slide)slideFound = true;}}if(slide && slideFound){swiper.clickedSlide = slide;if(swiper.virtual && swiper.params.virtual.enabled){swiper.clickedIndex = parseInt((0,_dom7DistDom7Modular.$)(slide).attr('data-swiper-slide-index'),10);}else {swiper.clickedIndex = (0,_dom7DistDom7Modular.$)(slide).index();}}else {swiper.clickedSlide = undefined;swiper.clickedIndex = undefined;return;}if(params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex){swiper.slideToClickedSlide();}}var update={updateSize:updateSize,updateSlides:updateSlides,updateAutoHeight:updateAutoHeight,updateSlidesOffset:updateSlidesOffset,updateSlidesProgress:updateSlidesProgress,updateProgress:updateProgress,updateSlidesClasses:updateSlidesClasses,updateActiveIndex:updateActiveIndex,updateClickedSlide:updateClickedSlide};function getTranslate(){var axis=arguments.length <= 0 || arguments[0] === undefined?this.isHorizontal()?'x':'y':arguments[0];var swiper=this;var params=swiper.params;var rtl=swiper.rtlTranslate;var translate=swiper.translate;var $wrapperEl=swiper.$wrapperEl;if(params.virtualTranslate){return rtl?-translate:translate;}if(params.cssMode){return translate;}var currentTranslate=Utils.getTranslate($wrapperEl[0],axis);if(rtl)currentTranslate = -currentTranslate;return currentTranslate || 0;}function setTranslate(translate,byController){var swiper=this;var rtl=swiper.rtlTranslate;var params=swiper.params;var $wrapperEl=swiper.$wrapperEl;var wrapperEl=swiper.wrapperEl;var progress=swiper.progress;var x=0;var y=0;var z=0;if(swiper.isHorizontal()){x = rtl?-translate:translate;}else {y = translate;}if(params.roundLengths){x = Math.floor(x);y = Math.floor(y);}if(params.cssMode){wrapperEl[swiper.isHorizontal()?'scrollLeft':'scrollTop'] = swiper.isHorizontal()?-x:-y;}else if(!params.virtualTranslate){$wrapperEl.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');}swiper.previousTranslate = swiper.translate;swiper.translate = swiper.isHorizontal()?x:y; // Check if we need to update progress
var newProgress=undefined;var translatesDiff=swiper.maxTranslate() - swiper.minTranslate();if(translatesDiff === 0){newProgress = 0;}else {newProgress = (translate - swiper.minTranslate()) / translatesDiff;}if(newProgress !== progress){swiper.updateProgress(translate);}swiper.emit('setTranslate',swiper.translate,byController);}function minTranslate(){return -this.snapGrid[0];}function maxTranslate(){return -this.snapGrid[this.snapGrid.length - 1];}function translateTo(translate,speed,runCallbacks,translateBounds,internal){if(translate === undefined)translate = 0;if(speed === undefined)speed = this.params.speed;if(runCallbacks === undefined)runCallbacks = true;if(translateBounds === undefined)translateBounds = true;var swiper=this;var params=swiper.params;var wrapperEl=swiper.wrapperEl;if(swiper.animating && params.preventInteractionOnTransition){return false;}var minTranslate=swiper.minTranslate();var maxTranslate=swiper.maxTranslate();var newTranslate=undefined;if(translateBounds && translate > minTranslate)newTranslate = minTranslate;else if(translateBounds && translate < maxTranslate)newTranslate = maxTranslate;else newTranslate = translate; // Update progress
swiper.updateProgress(newTranslate);if(params.cssMode){var isH=swiper.isHorizontal();if(speed === 0){wrapperEl[isH?'scrollLeft':'scrollTop'] = -newTranslate;}else { // eslint-disable-next-line
if(wrapperEl.scrollTo){var _wrapperEl$scrollTo;wrapperEl.scrollTo((_wrapperEl$scrollTo = {},_defineProperty(_wrapperEl$scrollTo,isH?'left':'top',-newTranslate),_defineProperty(_wrapperEl$scrollTo,'behavior','smooth'),_wrapperEl$scrollTo));}else {wrapperEl[isH?'scrollLeft':'scrollTop'] = -newTranslate;}}return true;}if(speed === 0){swiper.setTransition(0);swiper.setTranslate(newTranslate);if(runCallbacks){swiper.emit('beforeTransitionStart',speed,internal);swiper.emit('transitionEnd');}}else {swiper.setTransition(speed);swiper.setTranslate(newTranslate);if(runCallbacks){swiper.emit('beforeTransitionStart',speed,internal);swiper.emit('transitionStart');}if(!swiper.animating){swiper.animating = true;if(!swiper.onTranslateToWrapperTransitionEnd){swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e){if(!swiper || swiper.destroyed)return;if(e.target !== this)return;swiper.$wrapperEl[0].removeEventListener('transitionend',swiper.onTranslateToWrapperTransitionEnd);swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd',swiper.onTranslateToWrapperTransitionEnd);swiper.onTranslateToWrapperTransitionEnd = null;delete swiper.onTranslateToWrapperTransitionEnd;if(runCallbacks){swiper.emit('transitionEnd');}};}swiper.$wrapperEl[0].addEventListener('transitionend',swiper.onTranslateToWrapperTransitionEnd);swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd',swiper.onTranslateToWrapperTransitionEnd);}}return true;}var translate={getTranslate:getTranslate,setTranslate:setTranslate,minTranslate:minTranslate,maxTranslate:maxTranslate,translateTo:translateTo};function setTransition(duration,byController){var swiper=this;if(!swiper.params.cssMode){swiper.$wrapperEl.transition(duration);}swiper.emit('setTransition',duration,byController);}function transitionStart(runCallbacks,direction){if(runCallbacks === undefined)runCallbacks = true;var swiper=this;var activeIndex=swiper.activeIndex;var params=swiper.params;var previousIndex=swiper.previousIndex;if(params.cssMode)return;if(params.autoHeight){swiper.updateAutoHeight();}var dir=direction;if(!dir){if(activeIndex > previousIndex)dir = 'next';else if(activeIndex < previousIndex)dir = 'prev';else dir = 'reset';}swiper.emit('transitionStart');if(runCallbacks && activeIndex !== previousIndex){if(dir === 'reset'){swiper.emit('slideResetTransitionStart');return;}swiper.emit('slideChangeTransitionStart');if(dir === 'next'){swiper.emit('slideNextTransitionStart');}else {swiper.emit('slidePrevTransitionStart');}}}function transitionEnd(runCallbacks,direction){if(runCallbacks === undefined)runCallbacks = true;var swiper=this;var activeIndex=swiper.activeIndex;var previousIndex=swiper.previousIndex;var params=swiper.params;swiper.animating = false;if(params.cssMode)return;swiper.setTransition(0);var dir=direction;if(!dir){if(activeIndex > previousIndex)dir = 'next';else if(activeIndex < previousIndex)dir = 'prev';else dir = 'reset';}swiper.emit('transitionEnd');if(runCallbacks && activeIndex !== previousIndex){if(dir === 'reset'){swiper.emit('slideResetTransitionEnd');return;}swiper.emit('slideChangeTransitionEnd');if(dir === 'next'){swiper.emit('slideNextTransitionEnd');}else {swiper.emit('slidePrevTransitionEnd');}}}var transition={setTransition:setTransition,transitionStart:transitionStart,transitionEnd:transitionEnd};function slideTo(index,speed,runCallbacks,internal){if(index === undefined)index = 0;if(speed === undefined)speed = this.params.speed;if(runCallbacks === undefined)runCallbacks = true;var swiper=this;var slideIndex=index;if(slideIndex < 0)slideIndex = 0;var params=swiper.params;var snapGrid=swiper.snapGrid;var slidesGrid=swiper.slidesGrid;var previousIndex=swiper.previousIndex;var activeIndex=swiper.activeIndex;var rtl=swiper.rtlTranslate;var wrapperEl=swiper.wrapperEl;if(swiper.animating && params.preventInteractionOnTransition){return false;}var skip=Math.min(swiper.params.slidesPerGroupSkip,slideIndex);var snapIndex=skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);if(snapIndex >= snapGrid.length)snapIndex = snapGrid.length - 1;if((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks){swiper.emit('beforeSlideChangeStart');}var translate=-snapGrid[snapIndex]; // Update progress
swiper.updateProgress(translate); // Normalize slideIndex
if(params.normalizeSlideIndex){for(var i=0;i < slidesGrid.length;i += 1) {if(-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)){slideIndex = i;}}} // Directions locks
if(swiper.initialized && slideIndex !== activeIndex){if(!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()){return false;}if(!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()){if((activeIndex || 0) !== slideIndex)return false;}}var direction=undefined;if(slideIndex > activeIndex)direction = 'next';else if(slideIndex < activeIndex)direction = 'prev';else direction = 'reset'; // Update Index
if(rtl && -translate === swiper.translate || !rtl && translate === swiper.translate){swiper.updateActiveIndex(slideIndex); // Update Height
if(params.autoHeight){swiper.updateAutoHeight();}swiper.updateSlidesClasses();if(params.effect !== 'slide'){swiper.setTranslate(translate);}if(direction !== 'reset'){swiper.transitionStart(runCallbacks,direction);swiper.transitionEnd(runCallbacks,direction);}return false;}if(params.cssMode){var isH=swiper.isHorizontal();var t=-translate;if(rtl){t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;}if(speed === 0){wrapperEl[isH?'scrollLeft':'scrollTop'] = t;}else { // eslint-disable-next-line
if(wrapperEl.scrollTo){var _wrapperEl$scrollTo2;wrapperEl.scrollTo((_wrapperEl$scrollTo2 = {},_defineProperty(_wrapperEl$scrollTo2,isH?'left':'top',t),_defineProperty(_wrapperEl$scrollTo2,'behavior','smooth'),_wrapperEl$scrollTo2));}else {wrapperEl[isH?'scrollLeft':'scrollTop'] = t;}}return true;}if(speed === 0){swiper.setTransition(0);swiper.setTranslate(translate);swiper.updateActiveIndex(slideIndex);swiper.updateSlidesClasses();swiper.emit('beforeTransitionStart',speed,internal);swiper.transitionStart(runCallbacks,direction);swiper.transitionEnd(runCallbacks,direction);}else {swiper.setTransition(speed);swiper.setTranslate(translate);swiper.updateActiveIndex(slideIndex);swiper.updateSlidesClasses();swiper.emit('beforeTransitionStart',speed,internal);swiper.transitionStart(runCallbacks,direction);if(!swiper.animating){swiper.animating = true;if(!swiper.onSlideToWrapperTransitionEnd){swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e){if(!swiper || swiper.destroyed)return;if(e.target !== this)return;swiper.$wrapperEl[0].removeEventListener('transitionend',swiper.onSlideToWrapperTransitionEnd);swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd',swiper.onSlideToWrapperTransitionEnd);swiper.onSlideToWrapperTransitionEnd = null;delete swiper.onSlideToWrapperTransitionEnd;swiper.transitionEnd(runCallbacks,direction);};}swiper.$wrapperEl[0].addEventListener('transitionend',swiper.onSlideToWrapperTransitionEnd);swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd',swiper.onSlideToWrapperTransitionEnd);}}return true;}function slideToLoop(index,speed,runCallbacks,internal){if(index === undefined)index = 0;if(speed === undefined)speed = this.params.speed;if(runCallbacks === undefined)runCallbacks = true;var swiper=this;var newIndex=index;if(swiper.params.loop){newIndex += swiper.loopedSlides;}return swiper.slideTo(newIndex,speed,runCallbacks,internal);} /* eslint no-unused-vars: "off" */function slideNext(speed,runCallbacks,internal){if(speed === undefined)speed = this.params.speed;if(runCallbacks === undefined)runCallbacks = true;var swiper=this;var params=swiper.params;var animating=swiper.animating;var increment=swiper.activeIndex < params.slidesPerGroupSkip?1:params.slidesPerGroup;if(params.loop){if(animating)return false;swiper.loopFix(); // eslint-disable-next-line
swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;}return swiper.slideTo(swiper.activeIndex + increment,speed,runCallbacks,internal);} /* eslint no-unused-vars: "off" */function slidePrev(speed,runCallbacks,internal){if(speed === undefined)speed = this.params.speed;if(runCallbacks === undefined)runCallbacks = true;var swiper=this;var params=swiper.params;var animating=swiper.animating;var snapGrid=swiper.snapGrid;var slidesGrid=swiper.slidesGrid;var rtlTranslate=swiper.rtlTranslate;if(params.loop){if(animating)return false;swiper.loopFix(); // eslint-disable-next-line
swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;}var translate=rtlTranslate?swiper.translate:-swiper.translate;function normalize(val){if(val < 0)return -Math.floor(Math.abs(val));return Math.floor(val);}var normalizedTranslate=normalize(translate);var normalizedSnapGrid=snapGrid.map(function(val){return normalize(val);});var normalizedSlidesGrid=slidesGrid.map(function(val){return normalize(val);});var currentSnap=snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];var prevSnap=snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];if(typeof prevSnap === 'undefined' && params.cssMode){snapGrid.forEach(function(snap){if(!prevSnap && normalizedTranslate >= snap)prevSnap = snap;});}var prevIndex=undefined;if(typeof prevSnap !== 'undefined'){prevIndex = slidesGrid.indexOf(prevSnap);if(prevIndex < 0)prevIndex = swiper.activeIndex - 1;}return swiper.slideTo(prevIndex,speed,runCallbacks,internal);} /* eslint no-unused-vars: "off" */function slideReset(speed,runCallbacks,internal){if(speed === undefined)speed = this.params.speed;if(runCallbacks === undefined)runCallbacks = true;var swiper=this;return swiper.slideTo(swiper.activeIndex,speed,runCallbacks,internal);} /* eslint no-unused-vars: "off" */function slideToClosest(speed,runCallbacks,internal){if(speed === undefined)speed = this.params.speed;if(runCallbacks === undefined)runCallbacks = true;var threshold=arguments.length <= 3 || arguments[3] === undefined?0.5:arguments[3];var swiper=this;var index=swiper.activeIndex;var skip=Math.min(swiper.params.slidesPerGroupSkip,index);var snapIndex=skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);var translate=swiper.rtlTranslate?swiper.translate:-swiper.translate;if(translate >= swiper.snapGrid[snapIndex]){ // The current translate is on or after the current snap index, so the choice
// is between the current index and the one after it.
var currentSnap=swiper.snapGrid[snapIndex];var nextSnap=swiper.snapGrid[snapIndex + 1];if(translate - currentSnap > (nextSnap - currentSnap) * threshold){index += swiper.params.slidesPerGroup;}}else { // The current translate is before the current snap index, so the choice
// is between the current index and the one before it.
var prevSnap=swiper.snapGrid[snapIndex - 1];var currentSnap=swiper.snapGrid[snapIndex];if(translate - prevSnap <= (currentSnap - prevSnap) * threshold){index -= swiper.params.slidesPerGroup;}}index = Math.max(index,0);index = Math.min(index,swiper.slidesGrid.length - 1);return swiper.slideTo(index,speed,runCallbacks,internal);}function slideToClickedSlide(){var swiper=this;var params=swiper.params;var $wrapperEl=swiper.$wrapperEl;var slidesPerView=params.slidesPerView === 'auto'?swiper.slidesPerViewDynamic():params.slidesPerView;var slideToIndex=swiper.clickedIndex;var realIndex=undefined;if(params.loop){if(swiper.animating)return;realIndex = parseInt((0,_dom7DistDom7Modular.$)(swiper.clickedSlide).attr('data-swiper-slide-index'),10);if(params.centeredSlides){if(slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2){swiper.loopFix();slideToIndex = $wrapperEl.children('.' + params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + params.slideDuplicateClass + ')').eq(0).index();Utils.nextTick(function(){swiper.slideTo(slideToIndex);});}else {swiper.slideTo(slideToIndex);}}else if(slideToIndex > swiper.slides.length - slidesPerView){swiper.loopFix();slideToIndex = $wrapperEl.children('.' + params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + params.slideDuplicateClass + ')').eq(0).index();Utils.nextTick(function(){swiper.slideTo(slideToIndex);});}else {swiper.slideTo(slideToIndex);}}else {swiper.slideTo(slideToIndex);}}var slide={slideTo:slideTo,slideToLoop:slideToLoop,slideNext:slideNext,slidePrev:slidePrev,slideReset:slideReset,slideToClosest:slideToClosest,slideToClickedSlide:slideToClickedSlide};function loopCreate(){var swiper=this;var params=swiper.params;var $wrapperEl=swiper.$wrapperEl; // Remove duplicated slides
$wrapperEl.children('.' + params.slideClass + '.' + params.slideDuplicateClass).remove();var slides=$wrapperEl.children('.' + params.slideClass);if(params.loopFillGroupWithBlank){var blankSlidesNum=params.slidesPerGroup - slides.length % params.slidesPerGroup;if(blankSlidesNum !== params.slidesPerGroup){for(var i=0;i < blankSlidesNum;i += 1) {var blankNode=(0,_dom7DistDom7Modular.$)(_ssrWindow.document.createElement('div')).addClass(params.slideClass + ' ' + params.slideBlankClass);$wrapperEl.append(blankNode);}slides = $wrapperEl.children('.' + params.slideClass);}}if(params.slidesPerView === 'auto' && !params.loopedSlides)params.loopedSlides = slides.length;swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView,10));swiper.loopedSlides += params.loopAdditionalSlides;if(swiper.loopedSlides > slides.length){swiper.loopedSlides = slides.length;}var prependSlides=[];var appendSlides=[];slides.each(function(index,el){var slide=(0,_dom7DistDom7Modular.$)(el);if(index < swiper.loopedSlides)appendSlides.push(el);if(index < slides.length && index >= slides.length - swiper.loopedSlides)prependSlides.push(el);slide.attr('data-swiper-slide-index',index);});for(var i=0;i < appendSlides.length;i += 1) {$wrapperEl.append((0,_dom7DistDom7Modular.$)(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));}for(var i=prependSlides.length - 1;i >= 0;i -= 1) {$wrapperEl.prepend((0,_dom7DistDom7Modular.$)(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));}}function loopFix(){var swiper=this;swiper.emit('beforeLoopFix');var activeIndex=swiper.activeIndex;var slides=swiper.slides;var loopedSlides=swiper.loopedSlides;var allowSlidePrev=swiper.allowSlidePrev;var allowSlideNext=swiper.allowSlideNext;var snapGrid=swiper.snapGrid;var rtl=swiper.rtlTranslate;var newIndex=undefined;swiper.allowSlidePrev = true;swiper.allowSlideNext = true;var snapTranslate=-snapGrid[activeIndex];var diff=snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding
if(activeIndex < loopedSlides){newIndex = slides.length - loopedSlides * 3 + activeIndex;newIndex += loopedSlides;var slideChanged=swiper.slideTo(newIndex,0,false,true);if(slideChanged && diff !== 0){swiper.setTranslate((rtl?-swiper.translate:swiper.translate) - diff);}}else if(activeIndex >= slides.length - loopedSlides){ // Fix For Positive Oversliding
newIndex = -slides.length + activeIndex + loopedSlides;newIndex += loopedSlides;var slideChanged=swiper.slideTo(newIndex,0,false,true);if(slideChanged && diff !== 0){swiper.setTranslate((rtl?-swiper.translate:swiper.translate) - diff);}}swiper.allowSlidePrev = allowSlidePrev;swiper.allowSlideNext = allowSlideNext;swiper.emit('loopFix');}function loopDestroy(){var swiper=this;var $wrapperEl=swiper.$wrapperEl;var params=swiper.params;var slides=swiper.slides;$wrapperEl.children('.' + params.slideClass + '.' + params.slideDuplicateClass + ',.' + params.slideClass + '.' + params.slideBlankClass).remove();slides.removeAttr('data-swiper-slide-index');}var loop={loopCreate:loopCreate,loopFix:loopFix,loopDestroy:loopDestroy};function setGrabCursor(moving){var swiper=this;if(Support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode)return;var el=swiper.el;el.style.cursor = 'move';el.style.cursor = moving?'-webkit-grabbing':'-webkit-grab';el.style.cursor = moving?'-moz-grabbin':'-moz-grab';el.style.cursor = moving?'grabbing':'grab';}function unsetGrabCursor(){var swiper=this;if(Support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode)return;swiper.el.style.cursor = '';}var grabCursor={setGrabCursor:setGrabCursor,unsetGrabCursor:unsetGrabCursor};function appendSlide(slides){var swiper=this;var $wrapperEl=swiper.$wrapperEl;var params=swiper.params;if(params.loop){swiper.loopDestroy();}if(typeof slides === 'object' && 'length' in slides){for(var i=0;i < slides.length;i += 1) {if(slides[i])$wrapperEl.append(slides[i]);}}else {$wrapperEl.append(slides);}if(params.loop){swiper.loopCreate();}if(!(params.observer && Support.observer)){swiper.update();}}function prependSlide(slides){var swiper=this;var params=swiper.params;var $wrapperEl=swiper.$wrapperEl;var activeIndex=swiper.activeIndex;if(params.loop){swiper.loopDestroy();}var newActiveIndex=activeIndex + 1;if(typeof slides === 'object' && 'length' in slides){for(var i=0;i < slides.length;i += 1) {if(slides[i])$wrapperEl.prepend(slides[i]);}newActiveIndex = activeIndex + slides.length;}else {$wrapperEl.prepend(slides);}if(params.loop){swiper.loopCreate();}if(!(params.observer && Support.observer)){swiper.update();}swiper.slideTo(newActiveIndex,0,false);}function addSlide(index,slides){var swiper=this;var $wrapperEl=swiper.$wrapperEl;var params=swiper.params;var activeIndex=swiper.activeIndex;var activeIndexBuffer=activeIndex;if(params.loop){activeIndexBuffer -= swiper.loopedSlides;swiper.loopDestroy();swiper.slides = $wrapperEl.children('.' + params.slideClass);}var baseLength=swiper.slides.length;if(index <= 0){swiper.prependSlide(slides);return;}if(index >= baseLength){swiper.appendSlide(slides);return;}var newActiveIndex=activeIndexBuffer > index?activeIndexBuffer + 1:activeIndexBuffer;var slidesBuffer=[];for(var i=baseLength - 1;i >= index;i -= 1) {var currentSlide=swiper.slides.eq(i);currentSlide.remove();slidesBuffer.unshift(currentSlide);}if(typeof slides === 'object' && 'length' in slides){for(var i=0;i < slides.length;i += 1) {if(slides[i])$wrapperEl.append(slides[i]);}newActiveIndex = activeIndexBuffer > index?activeIndexBuffer + slides.length:activeIndexBuffer;}else {$wrapperEl.append(slides);}for(var i=0;i < slidesBuffer.length;i += 1) {$wrapperEl.append(slidesBuffer[i]);}if(params.loop){swiper.loopCreate();}if(!(params.observer && Support.observer)){swiper.update();}if(params.loop){swiper.slideTo(newActiveIndex + swiper.loopedSlides,0,false);}else {swiper.slideTo(newActiveIndex,0,false);}}function removeSlide(slidesIndexes){var swiper=this;var params=swiper.params;var $wrapperEl=swiper.$wrapperEl;var activeIndex=swiper.activeIndex;var activeIndexBuffer=activeIndex;if(params.loop){activeIndexBuffer -= swiper.loopedSlides;swiper.loopDestroy();swiper.slides = $wrapperEl.children('.' + params.slideClass);}var newActiveIndex=activeIndexBuffer;var indexToRemove=undefined;if(typeof slidesIndexes === 'object' && 'length' in slidesIndexes){for(var i=0;i < slidesIndexes.length;i += 1) {indexToRemove = slidesIndexes[i];if(swiper.slides[indexToRemove])swiper.slides.eq(indexToRemove).remove();if(indexToRemove < newActiveIndex)newActiveIndex -= 1;}newActiveIndex = Math.max(newActiveIndex,0);}else {indexToRemove = slidesIndexes;if(swiper.slides[indexToRemove])swiper.slides.eq(indexToRemove).remove();if(indexToRemove < newActiveIndex)newActiveIndex -= 1;newActiveIndex = Math.max(newActiveIndex,0);}if(params.loop){swiper.loopCreate();}if(!(params.observer && Support.observer)){swiper.update();}if(params.loop){swiper.slideTo(newActiveIndex + swiper.loopedSlides,0,false);}else {swiper.slideTo(newActiveIndex,0,false);}}function removeAllSlides(){var swiper=this;var slidesIndexes=[];for(var i=0;i < swiper.slides.length;i += 1) {slidesIndexes.push(i);}swiper.removeSlide(slidesIndexes);}var manipulation={appendSlide:appendSlide,prependSlide:prependSlide,addSlide:addSlide,removeSlide:removeSlide,removeAllSlides:removeAllSlides};var Device=(function Device(){var platform=_ssrWindow.window.navigator.platform;var ua=_ssrWindow.window.navigator.userAgent;var device={ios:false,android:false,androidChrome:false,desktop:false,iphone:false,ipod:false,ipad:false,edge:false,ie:false,firefox:false,macos:false,windows:false,cordova:!!(_ssrWindow.window.cordova || _ssrWindow.window.phonegap),phonegap:!!(_ssrWindow.window.cordova || _ssrWindow.window.phonegap),electron:false};var screenWidth=_ssrWindow.window.screen.width;var screenHeight=_ssrWindow.window.screen.height;var android=ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
var ipad=ua.match(/(iPad).*OS\s([\d_]+)/);var ipod=ua.match(/(iPod)(.*OS\s([\d_]+))?/);var iphone=!ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);var ie=ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;var edge=ua.indexOf('Edge/') >= 0;var firefox=ua.indexOf('Gecko/') >= 0 && ua.indexOf('Firefox/') >= 0;var windows=platform === 'Win32';var electron=ua.toLowerCase().indexOf('electron') >= 0;var macos=platform === 'MacIntel'; // iPadOs 13 fix
if(!ipad && macos && Support.touch && (screenWidth === 1024 && screenHeight === 1366 ||  // Pro 12.9
screenWidth === 834 && screenHeight === 1194 // Pro 11
 || screenWidth === 834 && screenHeight === 1112 // Pro 10.5
 || screenWidth === 768 && screenHeight === 1024) // other
){ipad = ua.match(/(Version)\/([\d.]+)/);macos = false;}device.ie = ie;device.edge = edge;device.firefox = firefox; // Android
if(android && !windows){device.os = 'android';device.osVersion = android[2];device.android = true;device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;}if(ipad || iphone || ipod){device.os = 'ios';device.ios = true;} // iOS
if(iphone && !ipod){device.osVersion = iphone[2].replace(/_/g,'.');device.iphone = true;}if(ipad){device.osVersion = ipad[2].replace(/_/g,'.');device.ipad = true;}if(ipod){device.osVersion = ipod[3]?ipod[3].replace(/_/g,'.'):null;device.ipod = true;} // iOS 8+ changed UA
if(device.ios && device.osVersion && ua.indexOf('Version/') >= 0){if(device.osVersion.split('.')[0] === '10'){device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];}} // Webview
device.webView = !!((iphone || ipad || ipod) && (ua.match(/.*AppleWebKit(?!.*Safari)/i) || _ssrWindow.window.navigator.standalone)) || _ssrWindow.window.matchMedia && _ssrWindow.window.matchMedia('(display-mode: standalone)').matches;device.webview = device.webView;device.standalone = device.webView; // Desktop
device.desktop = !(device.ios || device.android) || electron;if(device.desktop){device.electron = electron;device.macos = macos;device.windows = windows;if(device.macos){device.os = 'macos';}if(device.windows){device.os = 'windows';}} // Pixel Ratio
device.pixelRatio = _ssrWindow.window.devicePixelRatio || 1; // Export object
return device;})();function onTouchStart(event){var swiper=this;var data=swiper.touchEventsData;var params=swiper.params;var touches=swiper.touches;if(swiper.animating && params.preventInteractionOnTransition){return;}var e=event;if(e.originalEvent)e = e.originalEvent;var $targetEl=(0,_dom7DistDom7Modular.$)(e.target);if(params.touchEventsTarget === 'wrapper'){if(!$targetEl.closest(swiper.wrapperEl).length)return;}data.isTouchEvent = e.type === 'touchstart';if(!data.isTouchEvent && 'which' in e && e.which === 3)return;if(!data.isTouchEvent && 'button' in e && e.button > 0)return;if(data.isTouched && data.isMoved)return;if(params.noSwiping && $targetEl.closest(params.noSwipingSelector?params.noSwipingSelector:'.' + params.noSwipingClass)[0]){swiper.allowClick = true;return;}if(params.swipeHandler){if(!$targetEl.closest(params.swipeHandler)[0])return;}touches.currentX = e.type === 'touchstart'?e.targetTouches[0].pageX:e.pageX;touches.currentY = e.type === 'touchstart'?e.targetTouches[0].pageY:e.pageY;var startX=touches.currentX;var startY=touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
var edgeSwipeDetection=params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;var edgeSwipeThreshold=params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;if(edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= _ssrWindow.window.screen.width - edgeSwipeThreshold)){return;}Utils.extend(data,{isTouched:true,isMoved:false,allowTouchCallbacks:true,isScrolling:undefined,startMoving:undefined});touches.startX = startX;touches.startY = startY;data.touchStartTime = Utils.now();swiper.allowClick = true;swiper.updateSize();swiper.swipeDirection = undefined;if(params.threshold > 0)data.allowThresholdMove = false;if(e.type !== 'touchstart'){var preventDefault=true;if($targetEl.is(data.formElements))preventDefault = false;if(_ssrWindow.document.activeElement && (0,_dom7DistDom7Modular.$)(_ssrWindow.document.activeElement).is(data.formElements) && _ssrWindow.document.activeElement !== $targetEl[0]){_ssrWindow.document.activeElement.blur();}var shouldPreventDefault=preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;if(params.touchStartForcePreventDefault || shouldPreventDefault){e.preventDefault();}}swiper.emit('touchStart',e);}function onTouchMove(event){var swiper=this;var data=swiper.touchEventsData;var params=swiper.params;var touches=swiper.touches;var rtl=swiper.rtlTranslate;var e=event;if(e.originalEvent)e = e.originalEvent;if(!data.isTouched){if(data.startMoving && data.isScrolling){swiper.emit('touchMoveOpposite',e);}return;}if(data.isTouchEvent && e.type === 'mousemove')return;var targetTouch=e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);var pageX=e.type === 'touchmove'?targetTouch.pageX:e.pageX;var pageY=e.type === 'touchmove'?targetTouch.pageY:e.pageY;if(e.preventedByNestedSwiper){touches.startX = pageX;touches.startY = pageY;return;}if(!swiper.allowTouchMove){ // isMoved = true;
swiper.allowClick = false;if(data.isTouched){Utils.extend(touches,{startX:pageX,startY:pageY,currentX:pageX,currentY:pageY});data.touchStartTime = Utils.now();}return;}if(data.isTouchEvent && params.touchReleaseOnEdges && !params.loop){if(swiper.isVertical()){ // Vertical
if(pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()){data.isTouched = false;data.isMoved = false;return;}}else if(pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()){return;}}if(data.isTouchEvent && _ssrWindow.document.activeElement){if(e.target === _ssrWindow.document.activeElement && (0,_dom7DistDom7Modular.$)(e.target).is(data.formElements)){data.isMoved = true;swiper.allowClick = false;return;}}if(data.allowTouchCallbacks){swiper.emit('touchMove',e);}if(e.targetTouches && e.targetTouches.length > 1)return;touches.currentX = pageX;touches.currentY = pageY;var diffX=touches.currentX - touches.startX;var diffY=touches.currentY - touches.startY;if(swiper.params.threshold && Math.sqrt(Math.pow(diffX,2) + Math.pow(diffY,2)) < swiper.params.threshold)return;if(typeof data.isScrolling === 'undefined'){var touchAngle=undefined;if(swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX){data.isScrolling = false;}else { // eslint-disable-next-line
if(diffX * diffX + diffY * diffY >= 25){touchAngle = Math.atan2(Math.abs(diffY),Math.abs(diffX)) * 180 / Math.PI;data.isScrolling = swiper.isHorizontal()?touchAngle > params.touchAngle:90 - touchAngle > params.touchAngle;}}}if(data.isScrolling){swiper.emit('touchMoveOpposite',e);}if(typeof data.startMoving === 'undefined'){if(touches.currentX !== touches.startX || touches.currentY !== touches.startY){data.startMoving = true;}}if(data.isScrolling){data.isTouched = false;return;}if(!data.startMoving){return;}swiper.allowClick = false;if(!params.cssMode){e.preventDefault();}if(params.touchMoveStopPropagation && !params.nested){e.stopPropagation();}if(!data.isMoved){if(params.loop){swiper.loopFix();}data.startTranslate = swiper.getTranslate();swiper.setTransition(0);if(swiper.animating){swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');}data.allowMomentumBounce = false; // Grab Cursor
if(params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)){swiper.setGrabCursor(true);}swiper.emit('sliderFirstMove',e);}swiper.emit('sliderMove',e);data.isMoved = true;var diff=swiper.isHorizontal()?diffX:diffY;touches.diff = diff;diff *= params.touchRatio;if(rtl)diff = -diff;swiper.swipeDirection = diff > 0?'prev':'next';data.currentTranslate = diff + data.startTranslate;var disableParentSwiper=true;var resistanceRatio=params.resistanceRatio;if(params.touchReleaseOnEdges){resistanceRatio = 0;}if(diff > 0 && data.currentTranslate > swiper.minTranslate()){disableParentSwiper = false;if(params.resistance)data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff,resistanceRatio);}else if(diff < 0 && data.currentTranslate < swiper.maxTranslate()){disableParentSwiper = false;if(params.resistance)data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff,resistanceRatio);}if(disableParentSwiper){e.preventedByNestedSwiper = true;} // Directions locks
if(!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate){data.currentTranslate = data.startTranslate;}if(!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate){data.currentTranslate = data.startTranslate;} // Threshold
if(params.threshold > 0){if(Math.abs(diff) > params.threshold || data.allowThresholdMove){if(!data.allowThresholdMove){data.allowThresholdMove = true;touches.startX = touches.currentX;touches.startY = touches.currentY;data.currentTranslate = data.startTranslate;touches.diff = swiper.isHorizontal()?touches.currentX - touches.startX:touches.currentY - touches.startY;return;}}else {data.currentTranslate = data.startTranslate;return;}}if(!params.followFinger || params.cssMode)return; // Update active index in free mode
if(params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility){swiper.updateActiveIndex();swiper.updateSlidesClasses();}if(params.freeMode){ // Velocity
if(data.velocities.length === 0){data.velocities.push({position:touches[swiper.isHorizontal()?'startX':'startY'],time:data.touchStartTime});}data.velocities.push({position:touches[swiper.isHorizontal()?'currentX':'currentY'],time:Utils.now()});} // Update progress
swiper.updateProgress(data.currentTranslate); // Update translate
swiper.setTranslate(data.currentTranslate);}function onTouchEnd(event){var swiper=this;var data=swiper.touchEventsData;var params=swiper.params;var touches=swiper.touches;var rtl=swiper.rtlTranslate;var $wrapperEl=swiper.$wrapperEl;var slidesGrid=swiper.slidesGrid;var snapGrid=swiper.snapGrid;var e=event;if(e.originalEvent)e = e.originalEvent;if(data.allowTouchCallbacks){swiper.emit('touchEnd',e);}data.allowTouchCallbacks = false;if(!data.isTouched){if(data.isMoved && params.grabCursor){swiper.setGrabCursor(false);}data.isMoved = false;data.startMoving = false;return;} // Return Grab Cursor
if(params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)){swiper.setGrabCursor(false);} // Time diff
var touchEndTime=Utils.now();var timeDiff=touchEndTime - data.touchStartTime; // Tap, doubleTap, Click
if(swiper.allowClick){swiper.updateClickedSlide(e);swiper.emit('tap click',e);if(timeDiff < 300 && touchEndTime - data.lastClickTime < 300){swiper.emit('doubleTap doubleClick',e);}}data.lastClickTime = Utils.now();Utils.nextTick(function(){if(!swiper.destroyed)swiper.allowClick = true;});if(!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate){data.isTouched = false;data.isMoved = false;data.startMoving = false;return;}data.isTouched = false;data.isMoved = false;data.startMoving = false;var currentPos=undefined;if(params.followFinger){currentPos = rtl?swiper.translate:-swiper.translate;}else {currentPos = -data.currentTranslate;}if(params.cssMode){return;}if(params.freeMode){if(currentPos < -swiper.minTranslate()){swiper.slideTo(swiper.activeIndex);return;}if(currentPos > -swiper.maxTranslate()){if(swiper.slides.length < snapGrid.length){swiper.slideTo(snapGrid.length - 1);}else {swiper.slideTo(swiper.slides.length - 1);}return;}if(params.freeModeMomentum){var _ret4=(function(){if(data.velocities.length > 1){var lastMoveEvent=data.velocities.pop();var velocityEvent=data.velocities.pop();var distance=lastMoveEvent.position - velocityEvent.position;var time=lastMoveEvent.time - velocityEvent.time;swiper.velocity = distance / time;swiper.velocity /= 2;if(Math.abs(swiper.velocity) < params.freeModeMinimumVelocity){swiper.velocity = 0;} // this implies that the user stopped moving a finger then released.
// There would be no events with distance zero, so the last event is stale.
if(time > 150 || Utils.now() - lastMoveEvent.time > 300){swiper.velocity = 0;}}else {swiper.velocity = 0;}swiper.velocity *= params.freeModeMomentumVelocityRatio;data.velocities.length = 0;var momentumDuration=1000 * params.freeModeMomentumRatio;var momentumDistance=swiper.velocity * momentumDuration;var newPosition=swiper.translate + momentumDistance;if(rtl)newPosition = -newPosition;var doBounce=false;var afterBouncePosition=undefined;var bounceAmount=Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;var needsLoopFix=undefined;if(newPosition < swiper.maxTranslate()){if(params.freeModeMomentumBounce){if(newPosition + swiper.maxTranslate() < -bounceAmount){newPosition = swiper.maxTranslate() - bounceAmount;}afterBouncePosition = swiper.maxTranslate();doBounce = true;data.allowMomentumBounce = true;}else {newPosition = swiper.maxTranslate();}if(params.loop && params.centeredSlides)needsLoopFix = true;}else if(newPosition > swiper.minTranslate()){if(params.freeModeMomentumBounce){if(newPosition - swiper.minTranslate() > bounceAmount){newPosition = swiper.minTranslate() + bounceAmount;}afterBouncePosition = swiper.minTranslate();doBounce = true;data.allowMomentumBounce = true;}else {newPosition = swiper.minTranslate();}if(params.loop && params.centeredSlides)needsLoopFix = true;}else if(params.freeModeSticky){var nextSlide=undefined;for(var j=0;j < snapGrid.length;j += 1) {if(snapGrid[j] > -newPosition){nextSlide = j;break;}}if(Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next'){newPosition = snapGrid[nextSlide];}else {newPosition = snapGrid[nextSlide - 1];}newPosition = -newPosition;}if(needsLoopFix){swiper.once('transitionEnd',function(){swiper.loopFix();});} // Fix duration
if(swiper.velocity !== 0){if(rtl){momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);}else {momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);}if(params.freeModeSticky){ // If freeModeSticky is active and the user ends a swipe with a slow-velocity
// event, then durations can be 20+ seconds to slide one (or zero!) slides.
// It's easy to see this when simulating touch with mouse events. To fix this,
// limit single-slide swipes to the default slide duration. This also has the
// nice side effect of matching slide speed if the user stopped moving before
// lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
// For faster swipes, also apply limits (albeit higher ones).
var moveDistance=Math.abs((rtl?-newPosition:newPosition) - swiper.translate);var currentSlideSize=swiper.slidesSizesGrid[swiper.activeIndex];if(moveDistance < currentSlideSize){momentumDuration = params.speed;}else if(moveDistance < 2 * currentSlideSize){momentumDuration = params.speed * 1.5;}else {momentumDuration = params.speed * 2.5;}}}else if(params.freeModeSticky){swiper.slideToClosest();return {v:undefined};}if(params.freeModeMomentumBounce && doBounce){swiper.updateProgress(afterBouncePosition);swiper.setTransition(momentumDuration);swiper.setTranslate(newPosition);swiper.transitionStart(true,swiper.swipeDirection);swiper.animating = true;$wrapperEl.transitionEnd(function(){if(!swiper || swiper.destroyed || !data.allowMomentumBounce)return;swiper.emit('momentumBounce');swiper.setTransition(params.speed);setTimeout(function(){swiper.setTranslate(afterBouncePosition);$wrapperEl.transitionEnd(function(){if(!swiper || swiper.destroyed)return;swiper.transitionEnd();});},0);});}else if(swiper.velocity){swiper.updateProgress(newPosition);swiper.setTransition(momentumDuration);swiper.setTranslate(newPosition);swiper.transitionStart(true,swiper.swipeDirection);if(!swiper.animating){swiper.animating = true;$wrapperEl.transitionEnd(function(){if(!swiper || swiper.destroyed)return;swiper.transitionEnd();});}}else {swiper.updateProgress(newPosition);}swiper.updateActiveIndex();swiper.updateSlidesClasses();})();if(typeof _ret4 === 'object')return _ret4.v;}else if(params.freeModeSticky){swiper.slideToClosest();return;}if(!params.freeModeMomentum || timeDiff >= params.longSwipesMs){swiper.updateProgress();swiper.updateActiveIndex();swiper.updateSlidesClasses();}return;} // Find current slide
var stopIndex=0;var groupSize=swiper.slidesSizesGrid[0];for(var i=0;i < slidesGrid.length;i += i < params.slidesPerGroupSkip?1:params.slidesPerGroup) {var _increment=i < params.slidesPerGroupSkip - 1?1:params.slidesPerGroup;if(typeof slidesGrid[i + _increment] !== 'undefined'){if(currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]){stopIndex = i;groupSize = slidesGrid[i + _increment] - slidesGrid[i];}}else if(currentPos >= slidesGrid[i]){stopIndex = i;groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];}} // Find current slide size
var ratio=(currentPos - slidesGrid[stopIndex]) / groupSize;var increment=stopIndex < params.slidesPerGroupSkip - 1?1:params.slidesPerGroup;if(timeDiff > params.longSwipesMs){ // Long touches
if(!params.longSwipes){swiper.slideTo(swiper.activeIndex);return;}if(swiper.swipeDirection === 'next'){if(ratio >= params.longSwipesRatio)swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);}if(swiper.swipeDirection === 'prev'){if(ratio > 1 - params.longSwipesRatio)swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);}}else { // Short swipes
if(!params.shortSwipes){swiper.slideTo(swiper.activeIndex);return;}var isNavButtonTarget=swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);if(!isNavButtonTarget){if(swiper.swipeDirection === 'next'){swiper.slideTo(stopIndex + increment);}if(swiper.swipeDirection === 'prev'){swiper.slideTo(stopIndex);}}else if(e.target === swiper.navigation.nextEl){swiper.slideTo(stopIndex + increment);}else {swiper.slideTo(stopIndex);}}}function onResize(){var swiper=this;var params=swiper.params;var el=swiper.el;if(el && el.offsetWidth === 0)return; // Breakpoints
if(params.breakpoints){swiper.setBreakpoint();} // Save locks
var allowSlideNext=swiper.allowSlideNext;var allowSlidePrev=swiper.allowSlidePrev;var snapGrid=swiper.snapGrid; // Disable locks on resize
swiper.allowSlideNext = true;swiper.allowSlidePrev = true;swiper.updateSize();swiper.updateSlides();swiper.updateSlidesClasses();if((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides){swiper.slideTo(swiper.slides.length - 1,0,false,true);}else {swiper.slideTo(swiper.activeIndex,0,false,true);}if(swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused){swiper.autoplay.run();} // Return locks after resize
swiper.allowSlidePrev = allowSlidePrev;swiper.allowSlideNext = allowSlideNext;if(swiper.params.watchOverflow && snapGrid !== swiper.snapGrid){swiper.checkOverflow();}}function onClick(e){var swiper=this;if(!swiper.allowClick){if(swiper.params.preventClicks)e.preventDefault();if(swiper.params.preventClicksPropagation && swiper.animating){e.stopPropagation();e.stopImmediatePropagation();}}}function onScroll(){var swiper=this;var wrapperEl=swiper.wrapperEl;var rtlTranslate=swiper.rtlTranslate;swiper.previousTranslate = swiper.translate;if(swiper.isHorizontal()){if(rtlTranslate){swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;}else {swiper.translate = -wrapperEl.scrollLeft;}}else {swiper.translate = -wrapperEl.scrollTop;} // eslint-disable-next-line
if(swiper.translate === -0)swiper.translate = 0;swiper.updateActiveIndex();swiper.updateSlidesClasses();var newProgress=undefined;var translatesDiff=swiper.maxTranslate() - swiper.minTranslate();if(translatesDiff === 0){newProgress = 0;}else {newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;}if(newProgress !== swiper.progress){swiper.updateProgress(rtlTranslate?-swiper.translate:swiper.translate);}swiper.emit('setTranslate',swiper.translate,false);}var dummyEventAttached=false;function dummyEventListener(){}function attachEvents(){var swiper=this;var params=swiper.params;var touchEvents=swiper.touchEvents;var el=swiper.el;var wrapperEl=swiper.wrapperEl;swiper.onTouchStart = onTouchStart.bind(swiper);swiper.onTouchMove = onTouchMove.bind(swiper);swiper.onTouchEnd = onTouchEnd.bind(swiper);if(params.cssMode){swiper.onScroll = onScroll.bind(swiper);}swiper.onClick = onClick.bind(swiper);var capture=!!params.nested; // Touch Events
if(!Support.touch && Support.pointerEvents){el.addEventListener(touchEvents.start,swiper.onTouchStart,false);_ssrWindow.document.addEventListener(touchEvents.move,swiper.onTouchMove,capture);_ssrWindow.document.addEventListener(touchEvents.end,swiper.onTouchEnd,false);}else {if(Support.touch){var passiveListener=touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners?{passive:true,capture:false}:false;el.addEventListener(touchEvents.start,swiper.onTouchStart,passiveListener);el.addEventListener(touchEvents.move,swiper.onTouchMove,Support.passiveListener?{passive:false,capture:capture}:capture);el.addEventListener(touchEvents.end,swiper.onTouchEnd,passiveListener);if(touchEvents.cancel){el.addEventListener(touchEvents.cancel,swiper.onTouchEnd,passiveListener);}if(!dummyEventAttached){_ssrWindow.document.addEventListener('touchstart',dummyEventListener);dummyEventAttached = true;}}if(params.simulateTouch && !Device.ios && !Device.android || params.simulateTouch && !Support.touch && Device.ios){el.addEventListener('mousedown',swiper.onTouchStart,false);_ssrWindow.document.addEventListener('mousemove',swiper.onTouchMove,capture);_ssrWindow.document.addEventListener('mouseup',swiper.onTouchEnd,false);}} // Prevent Links Clicks
if(params.preventClicks || params.preventClicksPropagation){el.addEventListener('click',swiper.onClick,true);}if(params.cssMode){wrapperEl.addEventListener('scroll',swiper.onScroll);} // Resize handler
if(params.updateOnWindowResize){swiper.on(Device.ios || Device.android?'resize orientationchange observerUpdate':'resize observerUpdate',onResize,true);}else {swiper.on('observerUpdate',onResize,true);}}function detachEvents(){var swiper=this;var params=swiper.params;var touchEvents=swiper.touchEvents;var el=swiper.el;var wrapperEl=swiper.wrapperEl;var capture=!!params.nested; // Touch Events
if(!Support.touch && Support.pointerEvents){el.removeEventListener(touchEvents.start,swiper.onTouchStart,false);_ssrWindow.document.removeEventListener(touchEvents.move,swiper.onTouchMove,capture);_ssrWindow.document.removeEventListener(touchEvents.end,swiper.onTouchEnd,false);}else {if(Support.touch){var passiveListener=touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners?{passive:true,capture:false}:false;el.removeEventListener(touchEvents.start,swiper.onTouchStart,passiveListener);el.removeEventListener(touchEvents.move,swiper.onTouchMove,capture);el.removeEventListener(touchEvents.end,swiper.onTouchEnd,passiveListener);if(touchEvents.cancel){el.removeEventListener(touchEvents.cancel,swiper.onTouchEnd,passiveListener);}}if(params.simulateTouch && !Device.ios && !Device.android || params.simulateTouch && !Support.touch && Device.ios){el.removeEventListener('mousedown',swiper.onTouchStart,false);_ssrWindow.document.removeEventListener('mousemove',swiper.onTouchMove,capture);_ssrWindow.document.removeEventListener('mouseup',swiper.onTouchEnd,false);}} // Prevent Links Clicks
if(params.preventClicks || params.preventClicksPropagation){el.removeEventListener('click',swiper.onClick,true);}if(params.cssMode){wrapperEl.removeEventListener('scroll',swiper.onScroll);} // Resize handler
swiper.off(Device.ios || Device.android?'resize orientationchange observerUpdate':'resize observerUpdate',onResize);}var events={attachEvents:attachEvents,detachEvents:detachEvents};function setBreakpoint(){var swiper=this;var activeIndex=swiper.activeIndex;var initialized=swiper.initialized;var _swiper$loopedSlides=swiper.loopedSlides;var loopedSlides=_swiper$loopedSlides === undefined?0:_swiper$loopedSlides;var params=swiper.params;var $el=swiper.$el;var breakpoints=params.breakpoints;if(!breakpoints || breakpoints && Object.keys(breakpoints).length === 0)return; // Get breakpoint for window width and update parameters
var breakpoint=swiper.getBreakpoint(breakpoints);if(breakpoint && swiper.currentBreakpoint !== breakpoint){(function(){var breakpointOnlyParams=breakpoint in breakpoints?breakpoints[breakpoint]:undefined;if(breakpointOnlyParams){['slidesPerView','spaceBetween','slidesPerGroup','slidesPerGroupSkip','slidesPerColumn'].forEach(function(param){var paramValue=breakpointOnlyParams[param];if(typeof paramValue === 'undefined')return;if(param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')){breakpointOnlyParams[param] = 'auto';}else if(param === 'slidesPerView'){breakpointOnlyParams[param] = parseFloat(paramValue);}else {breakpointOnlyParams[param] = parseInt(paramValue,10);}});}var breakpointParams=breakpointOnlyParams || swiper.originalParams;var wasMultiRow=params.slidesPerColumn > 1;var isMultiRow=breakpointParams.slidesPerColumn > 1;if(wasMultiRow && !isMultiRow){$el.removeClass(params.containerModifierClass + 'multirow ' + params.containerModifierClass + 'multirow-column');}else if(!wasMultiRow && isMultiRow){$el.addClass(params.containerModifierClass + 'multirow');if(breakpointParams.slidesPerColumnFill === 'column'){$el.addClass(params.containerModifierClass + 'multirow-column');}}var directionChanged=breakpointParams.direction && breakpointParams.direction !== params.direction;var needsReLoop=params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);if(directionChanged && initialized){swiper.changeDirection();}Utils.extend(swiper.params,breakpointParams);Utils.extend(swiper,{allowTouchMove:swiper.params.allowTouchMove,allowSlideNext:swiper.params.allowSlideNext,allowSlidePrev:swiper.params.allowSlidePrev});swiper.currentBreakpoint = breakpoint;if(needsReLoop && initialized){swiper.loopDestroy();swiper.loopCreate();swiper.updateSlides();swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides,0,false);}swiper.emit('breakpoint',breakpointParams);})();}}function getBreakpoint(breakpoints){ // Get breakpoint for window width
if(!breakpoints)return undefined;var breakpoint=false;var points=Object.keys(breakpoints).map(function(point){if(typeof point === 'string' && point.indexOf('@') === 0){var minRatio=parseFloat(point.substr(1));var value=_ssrWindow.window.innerHeight * minRatio;return {value:value,point:point};}return {value:point,point:point};});points.sort(function(a,b){return parseInt(a.value,10) - parseInt(b.value,10);});for(var i=0;i < points.length;i += 1) {var _points$i=points[i];var point=_points$i.point;var value=_points$i.value;if(value <= _ssrWindow.window.innerWidth){breakpoint = point;}}return breakpoint || 'max';}var breakpoints={setBreakpoint:setBreakpoint,getBreakpoint:getBreakpoint};function addClasses(){var swiper=this;var classNames=swiper.classNames;var params=swiper.params;var rtl=swiper.rtl;var $el=swiper.$el;var suffixes=[];suffixes.push('initialized');suffixes.push(params.direction);if(params.freeMode){suffixes.push('free-mode');}if(params.autoHeight){suffixes.push('autoheight');}if(rtl){suffixes.push('rtl');}if(params.slidesPerColumn > 1){suffixes.push('multirow');if(params.slidesPerColumnFill === 'column'){suffixes.push('multirow-column');}}if(Device.android){suffixes.push('android');}if(Device.ios){suffixes.push('ios');}if(params.cssMode){suffixes.push('css-mode');}suffixes.forEach(function(suffix){classNames.push(params.containerModifierClass + suffix);});$el.addClass(classNames.join(' '));}function removeClasses(){var swiper=this;var $el=swiper.$el;var classNames=swiper.classNames;$el.removeClass(classNames.join(' '));}var classes={addClasses:addClasses,removeClasses:removeClasses};function loadImage(imageEl,src,srcset,sizes,checkForComplete,callback){var image=undefined;function onReady(){if(callback)callback();}if(!imageEl.complete || !checkForComplete){if(src){image = new _ssrWindow.window.Image();image.onload = onReady;image.onerror = onReady;if(sizes){image.sizes = sizes;}if(srcset){image.srcset = srcset;}if(src){image.src = src;}}else {onReady();}}else { // image already loaded...
onReady();}}function preloadImages(){var swiper=this;swiper.imagesToLoad = swiper.$el.find('img');function onReady(){if(typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed)return;if(swiper.imagesLoaded !== undefined)swiper.imagesLoaded += 1;if(swiper.imagesLoaded === swiper.imagesToLoad.length){if(swiper.params.updateOnImagesReady)swiper.update();swiper.emit('imagesReady');}}for(var i=0;i < swiper.imagesToLoad.length;i += 1) {var imageEl=swiper.imagesToLoad[i];swiper.loadImage(imageEl,imageEl.currentSrc || imageEl.getAttribute('src'),imageEl.srcset || imageEl.getAttribute('srcset'),imageEl.sizes || imageEl.getAttribute('sizes'),true,onReady);}}var images={loadImage:loadImage,preloadImages:preloadImages};function checkOverflow(){var swiper=this;var params=swiper.params;var wasLocked=swiper.isLocked;var lastSlidePosition=swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;if(params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition){swiper.isLocked = lastSlidePosition <= swiper.size;}else {swiper.isLocked = swiper.snapGrid.length === 1;}swiper.allowSlideNext = !swiper.isLocked;swiper.allowSlidePrev = !swiper.isLocked; // events
if(wasLocked !== swiper.isLocked)swiper.emit(swiper.isLocked?'lock':'unlock');if(wasLocked && wasLocked !== swiper.isLocked){swiper.isEnd = false;swiper.navigation.update();}}var checkOverflow$1={checkOverflow:checkOverflow};var defaults={init:true,direction:'horizontal',touchEventsTarget:'container',initialSlide:0,speed:300,cssMode:false,updateOnWindowResize:true, //
preventInteractionOnTransition:false, // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
edgeSwipeDetection:false,edgeSwipeThreshold:20, // Free mode
freeMode:false,freeModeMomentum:true,freeModeMomentumRatio:1,freeModeMomentumBounce:true,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:false,freeModeMinimumVelocity:0.02, // Autoheight
autoHeight:false, // Set wrapper width
setWrapperSize:false, // Virtual Translate
virtualTranslate:false, // Effects
effect:'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
// Breakpoints
breakpoints:undefined, // Slides grid
spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:'column',slidesPerGroup:1,slidesPerGroupSkip:0,centeredSlides:false,centeredSlidesBounds:false,slidesOffsetBefore:0, // in px
slidesOffsetAfter:0, // in px
normalizeSlideIndex:true,centerInsufficientSlides:false, // Disable swiper and hide navigation when container not overflow
watchOverflow:false, // Round length
roundLengths:false, // Touches
touchRatio:1,touchAngle:45,simulateTouch:true,shortSwipes:true,longSwipes:true,longSwipesRatio:0.5,longSwipesMs:300,followFinger:true,allowTouchMove:true,threshold:0,touchMoveStopPropagation:false,touchStartPreventDefault:true,touchStartForcePreventDefault:false,touchReleaseOnEdges:false, // Unique Navigation Elements
uniqueNavElements:true, // Resistance
resistance:true,resistanceRatio:0.85, // Progress
watchSlidesProgress:false,watchSlidesVisibility:false, // Cursor
grabCursor:false, // Clicks
preventClicks:true,preventClicksPropagation:true,slideToClickedSlide:false, // Images
preloadImages:true,updateOnImagesReady:true, // loop
loop:false,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:false, // Swiping/no swiping
allowSlidePrev:true,allowSlideNext:true,swipeHandler:null, // '.swipe-handler',
noSwiping:true,noSwipingClass:'swiper-no-swiping',noSwipingSelector:null, // Passive Listeners
passiveListeners:true, // NS
containerModifierClass:'swiper-container-', // NEW
slideClass:'swiper-slide',slideBlankClass:'swiper-slide-invisible-blank',slideActiveClass:'swiper-slide-active',slideDuplicateActiveClass:'swiper-slide-duplicate-active',slideVisibleClass:'swiper-slide-visible',slideDuplicateClass:'swiper-slide-duplicate',slideNextClass:'swiper-slide-next',slideDuplicateNextClass:'swiper-slide-duplicate-next',slidePrevClass:'swiper-slide-prev',slideDuplicatePrevClass:'swiper-slide-duplicate-prev',wrapperClass:'swiper-wrapper', // Callbacks
runCallbacksOnInit:true}; /* eslint no-param-reassign: "off" */var prototypes={update:update,translate:translate,transition:transition,slide:slide,loop:loop,grabCursor:grabCursor,manipulation:manipulation,events:events,breakpoints:breakpoints,checkOverflow:checkOverflow$1,classes:classes,images:images};var extendedDefaults={};var Swiper=(function(_SwiperClass){_inherits(Swiper,_SwiperClass);function Swiper(){_classCallCheck(this,Swiper);var el=undefined;var params=undefined;for(var _len6=arguments.length,args=Array(_len6),_key6=0;_key6 < _len6;_key6++) {args[_key6] = arguments[_key6];}if(args.length === 1 && args[0].constructor && args[0].constructor === Object){params = args[0];}else {el = args[0];params = args[1];}if(!params)params = {};params = Utils.extend({},params);if(el && !params.el)params.el = el;_get(Object.getPrototypeOf(Swiper.prototype),'constructor',this).call(this,params);Object.keys(prototypes).forEach(function(prototypeGroup){Object.keys(prototypes[prototypeGroup]).forEach(function(protoMethod){if(!Swiper.prototype[protoMethod]){Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];}});}); // Swiper Instance
var swiper=this;if(typeof swiper.modules === 'undefined'){swiper.modules = {};}Object.keys(swiper.modules).forEach(function(moduleName){var module=swiper.modules[moduleName];if(module.params){var moduleParamName=Object.keys(module.params)[0];var moduleParams=module.params[moduleParamName];if(typeof moduleParams !== 'object' || moduleParams === null)return;if(!(moduleParamName in params && 'enabled' in moduleParams))return;if(params[moduleParamName] === true){params[moduleParamName] = {enabled:true};}if(typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])){params[moduleParamName].enabled = true;}if(!params[moduleParamName])params[moduleParamName] = {enabled:false};}}); // Extend defaults with modules params
var swiperParams=Utils.extend({},defaults);swiper.useModulesParams(swiperParams); // Extend defaults with passed params
swiper.params = Utils.extend({},swiperParams,extendedDefaults,params);swiper.originalParams = Utils.extend({},swiper.params);swiper.passedParams = Utils.extend({},params); // Save Dom lib
swiper.$ = _dom7DistDom7Modular.$; // Find el
var $el=(0,_dom7DistDom7Modular.$)(swiper.params.el);el = $el[0];if(!el){return undefined;}if($el.length > 1){var _ret6=(function(){var swipers=[];$el.each(function(index,containerEl){var newParams=Utils.extend({},params,{el:containerEl});swipers.push(new Swiper(newParams));});return {v:swipers};})();if(typeof _ret6 === 'object')return _ret6.v;}el.swiper = swiper;$el.data('swiper',swiper); // Find Wrapper
var $wrapperEl=undefined;if(el && el.shadowRoot && el.shadowRoot.querySelector){$wrapperEl = (0,_dom7DistDom7Modular.$)(el.shadowRoot.querySelector('.' + swiper.params.wrapperClass)); // Children needs to return slot items
$wrapperEl.children = function(options){return $el.children(options);};}else {$wrapperEl = $el.children('.' + swiper.params.wrapperClass);} // Extend Swiper
Utils.extend(swiper,{$el:$el,el:el,$wrapperEl:$wrapperEl,wrapperEl:$wrapperEl[0], // Classes
classNames:[], // Slides
slides:(0,_dom7DistDom7Modular.$)(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[], // isDirection
isHorizontal:function isHorizontal(){return swiper.params.direction === 'horizontal';},isVertical:function isVertical(){return swiper.params.direction === 'vertical';}, // RTL
rtl:el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',rtlTranslate:swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),wrongRTL:$wrapperEl.css('display') === '-webkit-box', // Indexes
activeIndex:0,realIndex:0, //
isBeginning:true,isEnd:false, // Props
translate:0,previousTranslate:0,progress:0,velocity:0,animating:false, // Locks
allowSlideNext:swiper.params.allowSlideNext,allowSlidePrev:swiper.params.allowSlidePrev, // Touch Events
touchEvents:(function touchEvents(){var touch=['touchstart','touchmove','touchend','touchcancel'];var desktop=['mousedown','mousemove','mouseup'];if(Support.pointerEvents){desktop = ['pointerdown','pointermove','pointerup'];}swiper.touchEventsTouch = {start:touch[0],move:touch[1],end:touch[2],cancel:touch[3]};swiper.touchEventsDesktop = {start:desktop[0],move:desktop[1],end:desktop[2]};return Support.touch || !swiper.params.simulateTouch?swiper.touchEventsTouch:swiper.touchEventsDesktop;})(),touchEventsData:{isTouched:undefined,isMoved:undefined,allowTouchCallbacks:undefined,touchStartTime:undefined,isScrolling:undefined,currentTranslate:undefined,startTranslate:undefined,allowThresholdMove:undefined, // Form elements to match
formElements:'input, select, option, textarea, button, video, label', // Last click time
lastClickTime:Utils.now(),clickTimeout:undefined, // Velocities
velocities:[],allowMomentumBounce:undefined,isTouchEvent:undefined,startMoving:undefined}, // Clicks
allowClick:true, // Touches
allowTouchMove:swiper.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0}, // Images
imagesToLoad:[],imagesLoaded:0}); // Install Modules
swiper.useModules(); // Init
if(swiper.params.init){swiper.init();} // Return app instance
return swiper;}_createClass(Swiper,[{key:'slidesPerViewDynamic',value:function slidesPerViewDynamic(){var swiper=this;var params=swiper.params;var slides=swiper.slides;var slidesGrid=swiper.slidesGrid;var swiperSize=swiper.size;var activeIndex=swiper.activeIndex;var spv=1;if(params.centeredSlides){var slideSize=slides[activeIndex].swiperSlideSize;var breakLoop=undefined;for(var i=activeIndex + 1;i < slides.length;i += 1) {if(slides[i] && !breakLoop){slideSize += slides[i].swiperSlideSize;spv += 1;if(slideSize > swiperSize)breakLoop = true;}}for(var i=activeIndex - 1;i >= 0;i -= 1) {if(slides[i] && !breakLoop){slideSize += slides[i].swiperSlideSize;spv += 1;if(slideSize > swiperSize)breakLoop = true;}}}else {for(var i=activeIndex + 1;i < slides.length;i += 1) {if(slidesGrid[i] - slidesGrid[activeIndex] < swiperSize){spv += 1;}}}return spv;}},{key:'update',value:function update(){var swiper=this;if(!swiper || swiper.destroyed)return;var snapGrid=swiper.snapGrid;var params=swiper.params; // Breakpoints
if(params.breakpoints){swiper.setBreakpoint();}swiper.updateSize();swiper.updateSlides();swiper.updateProgress();swiper.updateSlidesClasses();function setTranslate(){var translateValue=swiper.rtlTranslate?swiper.translate * -1:swiper.translate;var newTranslate=Math.min(Math.max(translateValue,swiper.maxTranslate()),swiper.minTranslate());swiper.setTranslate(newTranslate);swiper.updateActiveIndex();swiper.updateSlidesClasses();}var translated=undefined;if(swiper.params.freeMode){setTranslate();if(swiper.params.autoHeight){swiper.updateAutoHeight();}}else {if((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides){translated = swiper.slideTo(swiper.slides.length - 1,0,false,true);}else {translated = swiper.slideTo(swiper.activeIndex,0,false,true);}if(!translated){setTranslate();}}if(params.watchOverflow && snapGrid !== swiper.snapGrid){swiper.checkOverflow();}swiper.emit('update');}},{key:'changeDirection',value:function changeDirection(newDirection){var needUpdate=arguments.length <= 1 || arguments[1] === undefined?true:arguments[1];var swiper=this;var currentDirection=swiper.params.direction;if(!newDirection){ // eslint-disable-next-line
newDirection = currentDirection === 'horizontal'?'vertical':'horizontal';}if(newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical'){return swiper;}swiper.$el.removeClass('' + swiper.params.containerModifierClass + currentDirection).addClass('' + swiper.params.containerModifierClass + newDirection);swiper.params.direction = newDirection;swiper.slides.each(function(slideIndex,slideEl){if(newDirection === 'vertical'){slideEl.style.width = '';}else {slideEl.style.height = '';}});swiper.emit('changeDirection');if(needUpdate)swiper.update();return swiper;}},{key:'init',value:function init(){var swiper=this;if(swiper.initialized)return;swiper.emit('beforeInit'); // Set breakpoint
if(swiper.params.breakpoints){swiper.setBreakpoint();} // Add Classes
swiper.addClasses(); // Create loop
if(swiper.params.loop){swiper.loopCreate();} // Update size
swiper.updateSize(); // Update slides
swiper.updateSlides();if(swiper.params.watchOverflow){swiper.checkOverflow();} // Set Grab Cursor
if(swiper.params.grabCursor){swiper.setGrabCursor();}if(swiper.params.preloadImages){swiper.preloadImages();} // Slide To Initial Slide
if(swiper.params.loop){swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides,0,swiper.params.runCallbacksOnInit);}else {swiper.slideTo(swiper.params.initialSlide,0,swiper.params.runCallbacksOnInit);} // Attach events
swiper.attachEvents(); // Init Flag
swiper.initialized = true; // Emit
swiper.emit('init');}},{key:'destroy',value:function destroy(){var deleteInstance=arguments.length <= 0 || arguments[0] === undefined?true:arguments[0];var cleanStyles=arguments.length <= 1 || arguments[1] === undefined?true:arguments[1];var swiper=this;var params=swiper.params;var $el=swiper.$el;var $wrapperEl=swiper.$wrapperEl;var slides=swiper.slides;if(typeof swiper.params === 'undefined' || swiper.destroyed){return null;}swiper.emit('beforeDestroy'); // Init Flag
swiper.initialized = false; // Detach events
swiper.detachEvents(); // Destroy loop
if(params.loop){swiper.loopDestroy();} // Cleanup styles
if(cleanStyles){swiper.removeClasses();$el.removeAttr('style');$wrapperEl.removeAttr('style');if(slides && slides.length){slides.removeClass([params.slideVisibleClass,params.slideActiveClass,params.slideNextClass,params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');}}swiper.emit('destroy'); // Detach emitter events
Object.keys(swiper.eventsListeners).forEach(function(eventName){swiper.off(eventName);});if(deleteInstance !== false){swiper.$el[0].swiper = null;swiper.$el.data('swiper',null);Utils.deleteProps(swiper);}swiper.destroyed = true;return null;}}],[{key:'extendDefaults',value:function extendDefaults(newDefaults){Utils.extend(extendedDefaults,newDefaults);}},{key:'extendedDefaults',get:function get(){return extendedDefaults;}},{key:'defaults',get:function get(){return defaults;}},{key:'Class',get:function get(){return SwiperClass;}},{key:'$',get:function get(){return _dom7DistDom7Modular.$;}}]);return Swiper;})(SwiperClass);var Device$1={name:'device',proto:{device:Device},'static':{device:Device}};var Support$1={name:'support',proto:{support:Support},'static':{support:Support}};var Browser=(function Browser(){function isSafari(){var ua=_ssrWindow.window.navigator.userAgent.toLowerCase();return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;}return {isEdge:!!_ssrWindow.window.navigator.userAgent.match(/Edge/g),isSafari:isSafari(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(_ssrWindow.window.navigator.userAgent)};})();var Browser$1={name:'browser',proto:{browser:Browser},'static':{browser:Browser}};var Resize={name:'resize',create:function create(){var swiper=this;Utils.extend(swiper,{resize:{resizeHandler:function resizeHandler(){if(!swiper || swiper.destroyed || !swiper.initialized)return;swiper.emit('beforeResize');swiper.emit('resize');},orientationChangeHandler:function orientationChangeHandler(){if(!swiper || swiper.destroyed || !swiper.initialized)return;swiper.emit('orientationchange');}}});},on:{init:function init(){var swiper=this; // Emit resize
_ssrWindow.window.addEventListener('resize',swiper.resize.resizeHandler); // Emit orientationchange
_ssrWindow.window.addEventListener('orientationchange',swiper.resize.orientationChangeHandler);},destroy:function destroy(){var swiper=this;_ssrWindow.window.removeEventListener('resize',swiper.resize.resizeHandler);_ssrWindow.window.removeEventListener('orientationchange',swiper.resize.orientationChangeHandler);}}};var Observer={func:_ssrWindow.window.MutationObserver || _ssrWindow.window.WebkitMutationObserver,attach:function attach(target){var options=arguments.length <= 1 || arguments[1] === undefined?{}:arguments[1];var swiper=this;var ObserverFunc=Observer.func;var observer=new ObserverFunc(function(mutations){ // The observerUpdate event should only be triggered
// once despite the number of mutations.  Additional
// triggers are redundant and are very costly
if(mutations.length === 1){swiper.emit('observerUpdate',mutations[0]);return;}var observerUpdate=function observerUpdate(){swiper.emit('observerUpdate',mutations[0]);};if(_ssrWindow.window.requestAnimationFrame){_ssrWindow.window.requestAnimationFrame(observerUpdate);}else {_ssrWindow.window.setTimeout(observerUpdate,0);}});observer.observe(target,{attributes:typeof options.attributes === 'undefined'?true:options.attributes,childList:typeof options.childList === 'undefined'?true:options.childList,characterData:typeof options.characterData === 'undefined'?true:options.characterData});swiper.observer.observers.push(observer);},init:function init(){var swiper=this;if(!Support.observer || !swiper.params.observer)return;if(swiper.params.observeParents){var containerParents=swiper.$el.parents();for(var i=0;i < containerParents.length;i += 1) {swiper.observer.attach(containerParents[i]);}} // Observe container
swiper.observer.attach(swiper.$el[0],{childList:swiper.params.observeSlideChildren}); // Observe wrapper
swiper.observer.attach(swiper.$wrapperEl[0],{attributes:false});},destroy:function destroy(){var swiper=this;swiper.observer.observers.forEach(function(observer){observer.disconnect();});swiper.observer.observers = [];}};var Observer$1={name:'observer',params:{observer:false,observeParents:false,observeSlideChildren:false},create:function create(){var swiper=this;Utils.extend(swiper,{observer:{init:Observer.init.bind(swiper),attach:Observer.attach.bind(swiper),destroy:Observer.destroy.bind(swiper),observers:[]}});},on:{init:function init(){var swiper=this;swiper.observer.init();},destroy:function destroy(){var swiper=this;swiper.observer.destroy();}}};var Virtual={update:function update(force){var swiper=this;var _swiper$params=swiper.params;var slidesPerView=_swiper$params.slidesPerView;var slidesPerGroup=_swiper$params.slidesPerGroup;var centeredSlides=_swiper$params.centeredSlides;var _swiper$params$virtual=swiper.params.virtual;var addSlidesBefore=_swiper$params$virtual.addSlidesBefore;var addSlidesAfter=_swiper$params$virtual.addSlidesAfter;var _swiper$virtual=swiper.virtual;var previousFrom=_swiper$virtual.from;var previousTo=_swiper$virtual.to;var slides=_swiper$virtual.slides;var previousSlidesGrid=_swiper$virtual.slidesGrid;var renderSlide=_swiper$virtual.renderSlide;var previousOffset=_swiper$virtual.offset;swiper.updateActiveIndex();var activeIndex=swiper.activeIndex || 0;var offsetProp=undefined;if(swiper.rtlTranslate)offsetProp = 'right';else offsetProp = swiper.isHorizontal()?'left':'top';var slidesAfter=undefined;var slidesBefore=undefined;if(centeredSlides){slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;}else {slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;slidesBefore = slidesPerGroup + addSlidesAfter;}var from=Math.max((activeIndex || 0) - slidesBefore,0);var to=Math.min((activeIndex || 0) + slidesAfter,slides.length - 1);var offset=(swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);Utils.extend(swiper.virtual,{from:from,to:to,offset:offset,slidesGrid:swiper.slidesGrid});function onRendered(){swiper.updateSlides();swiper.updateProgress();swiper.updateSlidesClasses();if(swiper.lazy && swiper.params.lazy.enabled){swiper.lazy.load();}}if(previousFrom === from && previousTo === to && !force){if(swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset){swiper.slides.css(offsetProp,offset + 'px');}swiper.updateProgress();return;}if(swiper.params.virtual.renderExternal){swiper.params.virtual.renderExternal.call(swiper,{offset:offset,from:from,to:to,slides:(function getSlides(){var slidesToRender=[];for(var i=from;i <= to;i += 1) {slidesToRender.push(slides[i]);}return slidesToRender;})()});onRendered();return;}var prependIndexes=[];var appendIndexes=[];if(force){swiper.$wrapperEl.find('.' + swiper.params.slideClass).remove();}else {for(var i=previousFrom;i <= previousTo;i += 1) {if(i < from || i > to){swiper.$wrapperEl.find('.' + swiper.params.slideClass + '[data-swiper-slide-index="' + i + '"]').remove();}}}for(var i=0;i < slides.length;i += 1) {if(i >= from && i <= to){if(typeof previousTo === 'undefined' || force){appendIndexes.push(i);}else {if(i > previousTo)appendIndexes.push(i);if(i < previousFrom)prependIndexes.push(i);}}}appendIndexes.forEach(function(index){swiper.$wrapperEl.append(renderSlide(slides[index],index));});prependIndexes.sort(function(a,b){return b - a;}).forEach(function(index){swiper.$wrapperEl.prepend(renderSlide(slides[index],index));});swiper.$wrapperEl.children('.swiper-slide').css(offsetProp,offset + 'px');onRendered();},renderSlide:function renderSlide(slide,index){var swiper=this;var params=swiper.params.virtual;if(params.cache && swiper.virtual.cache[index]){return swiper.virtual.cache[index];}var $slideEl=params.renderSlide?(0,_dom7DistDom7Modular.$)(params.renderSlide.call(swiper,slide,index)):(0,_dom7DistDom7Modular.$)('<div class="' + swiper.params.slideClass + '" data-swiper-slide-index="' + index + '">' + slide + '</div>');if(!$slideEl.attr('data-swiper-slide-index'))$slideEl.attr('data-swiper-slide-index',index);if(params.cache)swiper.virtual.cache[index] = $slideEl;return $slideEl;},appendSlide:function appendSlide(slides){var swiper=this;if(typeof slides === 'object' && 'length' in slides){for(var i=0;i < slides.length;i += 1) {if(slides[i])swiper.virtual.slides.push(slides[i]);}}else {swiper.virtual.slides.push(slides);}swiper.virtual.update(true);},prependSlide:function prependSlide(slides){var swiper=this;var activeIndex=swiper.activeIndex;var newActiveIndex=activeIndex + 1;var numberOfNewSlides=1;if(Array.isArray(slides)){for(var i=0;i < slides.length;i += 1) {if(slides[i])swiper.virtual.slides.unshift(slides[i]);}newActiveIndex = activeIndex + slides.length;numberOfNewSlides = slides.length;}else {swiper.virtual.slides.unshift(slides);}if(swiper.params.virtual.cache){(function(){var cache=swiper.virtual.cache;var newCache={};Object.keys(cache).forEach(function(cachedIndex){var $cachedEl=cache[cachedIndex];var cachedElIndex=$cachedEl.attr('data-swiper-slide-index');if(cachedElIndex){$cachedEl.attr('data-swiper-slide-index',parseInt(cachedElIndex,10) + 1);}newCache[parseInt(cachedIndex,10) + numberOfNewSlides] = $cachedEl;});swiper.virtual.cache = newCache;})();}swiper.virtual.update(true);swiper.slideTo(newActiveIndex,0);},removeSlide:function removeSlide(slidesIndexes){var swiper=this;if(typeof slidesIndexes === 'undefined' || slidesIndexes === null)return;var activeIndex=swiper.activeIndex;if(Array.isArray(slidesIndexes)){for(var i=slidesIndexes.length - 1;i >= 0;i -= 1) {swiper.virtual.slides.splice(slidesIndexes[i],1);if(swiper.params.virtual.cache){delete swiper.virtual.cache[slidesIndexes[i]];}if(slidesIndexes[i] < activeIndex)activeIndex -= 1;activeIndex = Math.max(activeIndex,0);}}else {swiper.virtual.slides.splice(slidesIndexes,1);if(swiper.params.virtual.cache){delete swiper.virtual.cache[slidesIndexes];}if(slidesIndexes < activeIndex)activeIndex -= 1;activeIndex = Math.max(activeIndex,0);}swiper.virtual.update(true);swiper.slideTo(activeIndex,0);},removeAllSlides:function removeAllSlides(){var swiper=this;swiper.virtual.slides = [];if(swiper.params.virtual.cache){swiper.virtual.cache = {};}swiper.virtual.update(true);swiper.slideTo(0,0);}};var Virtual$1={name:'virtual',params:{virtual:{enabled:false,slides:[],cache:true,renderSlide:null,renderExternal:null,addSlidesBefore:0,addSlidesAfter:0}},create:function create(){var swiper=this;Utils.extend(swiper,{virtual:{update:Virtual.update.bind(swiper),appendSlide:Virtual.appendSlide.bind(swiper),prependSlide:Virtual.prependSlide.bind(swiper),removeSlide:Virtual.removeSlide.bind(swiper),removeAllSlides:Virtual.removeAllSlides.bind(swiper),renderSlide:Virtual.renderSlide.bind(swiper),slides:swiper.params.virtual.slides,cache:{}}});},on:{beforeInit:function beforeInit(){var swiper=this;if(!swiper.params.virtual.enabled)return;swiper.classNames.push(swiper.params.containerModifierClass + 'virtual');var overwriteParams={watchSlidesProgress:true};Utils.extend(swiper.params,overwriteParams);Utils.extend(swiper.originalParams,overwriteParams);if(!swiper.params.initialSlide){swiper.virtual.update();}},setTranslate:function setTranslate(){var swiper=this;if(!swiper.params.virtual.enabled)return;swiper.virtual.update();}}};var Keyboard={handle:function handle(event){var swiper=this;var rtl=swiper.rtlTranslate;var e=event;if(e.originalEvent)e = e.originalEvent; // jquery fix
var kc=e.keyCode || e.charCode; // Directions locks
if(!swiper.allowSlideNext && (swiper.isHorizontal() && kc === 39 || swiper.isVertical() && kc === 40 || kc === 34)){return false;}if(!swiper.allowSlidePrev && (swiper.isHorizontal() && kc === 37 || swiper.isVertical() && kc === 38 || kc === 33)){return false;}if(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey){return undefined;}if(_ssrWindow.document.activeElement && _ssrWindow.document.activeElement.nodeName && (_ssrWindow.document.activeElement.nodeName.toLowerCase() === 'input' || _ssrWindow.document.activeElement.nodeName.toLowerCase() === 'textarea')){return undefined;}if(swiper.params.keyboard.onlyInViewport && (kc === 33 || kc === 34 || kc === 37 || kc === 39 || kc === 38 || kc === 40)){var inView=false; // Check that swiper should be inside of visible area of window
if(swiper.$el.parents('.' + swiper.params.slideClass).length > 0 && swiper.$el.parents('.' + swiper.params.slideActiveClass).length === 0){return undefined;}var windowWidth=_ssrWindow.window.innerWidth;var windowHeight=_ssrWindow.window.innerHeight;var swiperOffset=swiper.$el.offset();if(rtl)swiperOffset.left -= swiper.$el[0].scrollLeft;var swiperCoord=[[swiperOffset.left,swiperOffset.top],[swiperOffset.left + swiper.width,swiperOffset.top],[swiperOffset.left,swiperOffset.top + swiper.height],[swiperOffset.left + swiper.width,swiperOffset.top + swiper.height]];for(var i=0;i < swiperCoord.length;i += 1) {var point=swiperCoord[i];if(point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight){inView = true;}}if(!inView)return undefined;}if(swiper.isHorizontal()){if(kc === 33 || kc === 34 || kc === 37 || kc === 39){if(e.preventDefault)e.preventDefault();else e.returnValue = false;}if((kc === 34 || kc === 39) && !rtl || (kc === 33 || kc === 37) && rtl)swiper.slideNext();if((kc === 33 || kc === 37) && !rtl || (kc === 34 || kc === 39) && rtl)swiper.slidePrev();}else {if(kc === 33 || kc === 34 || kc === 38 || kc === 40){if(e.preventDefault)e.preventDefault();else e.returnValue = false;}if(kc === 34 || kc === 40)swiper.slideNext();if(kc === 33 || kc === 38)swiper.slidePrev();}swiper.emit('keyPress',kc);return undefined;},enable:function enable(){var swiper=this;if(swiper.keyboard.enabled)return;(0,_dom7DistDom7Modular.$)(_ssrWindow.document).on('keydown',swiper.keyboard.handle);swiper.keyboard.enabled = true;},disable:function disable(){var swiper=this;if(!swiper.keyboard.enabled)return;(0,_dom7DistDom7Modular.$)(_ssrWindow.document).off('keydown',swiper.keyboard.handle);swiper.keyboard.enabled = false;}};var Keyboard$1={name:'keyboard',params:{keyboard:{enabled:false,onlyInViewport:true}},create:function create(){var swiper=this;Utils.extend(swiper,{keyboard:{enabled:false,enable:Keyboard.enable.bind(swiper),disable:Keyboard.disable.bind(swiper),handle:Keyboard.handle.bind(swiper)}});},on:{init:function init(){var swiper=this;if(swiper.params.keyboard.enabled){swiper.keyboard.enable();}},destroy:function destroy(){var swiper=this;if(swiper.keyboard.enabled){swiper.keyboard.disable();}}}};function isEventSupported(){var eventName='onwheel';var isSupported=(eventName in _ssrWindow.document);if(!isSupported){var element=_ssrWindow.document.createElement('div');element.setAttribute(eventName,'return;');isSupported = typeof element[eventName] === 'function';}if(!isSupported && _ssrWindow.document.implementation && _ssrWindow.document.implementation.hasFeature // always returns true in newer browsers as per the standard.
// @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
 && _ssrWindow.document.implementation.hasFeature('','') !== true){ // This is the only way to test support for the `wheel` event in IE9+.
isSupported = _ssrWindow.document.implementation.hasFeature('Events.wheel','3.0');}return isSupported;}var Mousewheel={lastScrollTime:Utils.now(),lastEventBeforeSnap:undefined,recentWheelEvents:[],event:function event(){if(_ssrWindow.window.navigator.userAgent.indexOf('firefox') > -1)return 'DOMMouseScroll';return isEventSupported()?'wheel':'mousewheel';},normalize:function normalize(e){ // Reasonable defaults
var PIXEL_STEP=10;var LINE_HEIGHT=40;var PAGE_HEIGHT=800;var sX=0;var sY=0; // spinX, spinY
var pX=0;var pY=0; // pixelX, pixelY
// Legacy
if('detail' in e){sY = e.detail;}if('wheelDelta' in e){sY = -e.wheelDelta / 120;}if('wheelDeltaY' in e){sY = -e.wheelDeltaY / 120;}if('wheelDeltaX' in e){sX = -e.wheelDeltaX / 120;} // side scrolling on FF with DOMMouseScroll
if('axis' in e && e.axis === e.HORIZONTAL_AXIS){sX = sY;sY = 0;}pX = sX * PIXEL_STEP;pY = sY * PIXEL_STEP;if('deltaY' in e){pY = e.deltaY;}if('deltaX' in e){pX = e.deltaX;}if(e.shiftKey && !pX){ // if user scrolls with shift he wants horizontal scroll
pX = pY;pY = 0;}if((pX || pY) && e.deltaMode){if(e.deltaMode === 1){ // delta in LINE units
pX *= LINE_HEIGHT;pY *= LINE_HEIGHT;}else { // delta in PAGE units
pX *= PAGE_HEIGHT;pY *= PAGE_HEIGHT;}} // Fall-back if spin cannot be determined
if(pX && !sX){sX = pX < 1?-1:1;}if(pY && !sY){sY = pY < 1?-1:1;}return {spinX:sX,spinY:sY,pixelX:pX,pixelY:pY};},handleMouseEnter:function handleMouseEnter(){var swiper=this;swiper.mouseEntered = true;},handleMouseLeave:function handleMouseLeave(){var swiper=this;swiper.mouseEntered = false;},handle:function handle(event){var e=event;var swiper=this;var params=swiper.params.mousewheel;if(swiper.params.cssMode){e.preventDefault();}var target=swiper.$el;if(swiper.params.mousewheel.eventsTarged !== 'container'){target = (0,_dom7DistDom7Modular.$)(swiper.params.mousewheel.eventsTarged);}if(!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges)return true;if(e.originalEvent)e = e.originalEvent; // jquery fix
var delta=0;var rtlFactor=swiper.rtlTranslate?-1:1;var data=Mousewheel.normalize(e);if(params.forceToAxis){if(swiper.isHorizontal()){if(Math.abs(data.pixelX) > Math.abs(data.pixelY))delta = data.pixelX * rtlFactor;else return true;}else if(Math.abs(data.pixelY) > Math.abs(data.pixelX))delta = data.pixelY;else return true;}else {delta = Math.abs(data.pixelX) > Math.abs(data.pixelY)?-data.pixelX * rtlFactor:-data.pixelY;}if(delta === 0)return true;if(params.invert)delta = -delta;if(!swiper.params.freeMode){ // Register the new event in a variable which stores the relevant data
var newEvent={time:Utils.now(),delta:Math.abs(delta),direction:Math.sign(delta),raw:event}; // Keep the most recent events
var recentWheelEvents=swiper.mousewheel.recentWheelEvents;if(recentWheelEvents.length >= 2){recentWheelEvents.shift(); // only store the last N events
}var prevEvent=recentWheelEvents.length?recentWheelEvents[recentWheelEvents.length - 1]:undefined;recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
//   If direction has changed or
//   if the scroll is quicker than the previous one:
//     Animate the slider.
// Else (this is the first time the wheel is moved):
//     Animate the slider.
if(prevEvent){if(newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta){swiper.mousewheel.animateSlider(newEvent);}}else {swiper.mousewheel.animateSlider(newEvent);} // If it's time to release the scroll:
//   Return now so you don't hit the preventDefault.
if(swiper.mousewheel.releaseScroll(newEvent)){return true;}}else {var _ret8=(function(){ // Freemode or scrollContainer:
// If we recently snapped after a momentum scroll, then ignore wheel events
// to give time for the deceleration to finish. Stop ignoring after 500 msecs
// or if it's a new scroll (larger delta or inverse sign as last event before
// an end-of-momentum snap).
var newEvent={time:Utils.now(),delta:Math.abs(delta),direction:Math.sign(delta)};var lastEventBeforeSnap=swiper.mousewheel.lastEventBeforeSnap;var ignoreWheelEvents=lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;if(!ignoreWheelEvents){swiper.mousewheel.lastEventBeforeSnap = undefined;if(swiper.params.loop){swiper.loopFix();}var position=swiper.getTranslate() + delta * params.sensitivity;var wasBeginning=swiper.isBeginning;var wasEnd=swiper.isEnd;if(position >= swiper.minTranslate())position = swiper.minTranslate();if(position <= swiper.maxTranslate())position = swiper.maxTranslate();swiper.setTransition(0);swiper.setTranslate(position);swiper.updateProgress();swiper.updateActiveIndex();swiper.updateSlidesClasses();if(!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd){swiper.updateSlidesClasses();}if(swiper.params.freeModeSticky){(function(){ // When wheel scrolling starts with sticky (aka snap) enabled, then detect
// the end of a momentum scroll by storing recent (N=15?) wheel events.
// 1. do all N events have decreasing or same (absolute value) delta?
// 2. did all N events arrive in the last M (M=500?) msecs?
// 3. does the earliest event have an (absolute value) delta that's
//    at least P (P=1?) larger than the most recent event's delta?
// 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
// If 1-4 are "yes" then we're near the end of a momuntum scroll deceleration.
// Snap immediately and ignore remaining wheel events in this scroll.
// See comment above for "remaining wheel events in this scroll" determination.
// If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
clearTimeout(swiper.mousewheel.timeout);swiper.mousewheel.timeout = undefined;var recentWheelEvents=swiper.mousewheel.recentWheelEvents;if(recentWheelEvents.length >= 15){recentWheelEvents.shift(); // only store the last N events
}var prevEvent=recentWheelEvents.length?recentWheelEvents[recentWheelEvents.length - 1]:undefined;var firstEvent=recentWheelEvents[0];recentWheelEvents.push(newEvent);if(prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)){ // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
recentWheelEvents.splice(0);}else if(recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6){(function(){ // We're at the end of the deceleration of a momentum scroll, so there's no need
// to wait for more events. Snap ASAP on the next tick.
// Also, because there's some remaining momentum we'll bias the snap in the
// direction of the ongoing scroll because it's better UX for the scroll to snap
// in the same direction as the scroll instead of reversing to snap.  Therefore,
// if it's already scrolled more than 20% in the current direction, keep going.
var snapToThreshold=delta > 0?0.8:0.2;swiper.mousewheel.lastEventBeforeSnap = newEvent;recentWheelEvents.splice(0);swiper.mousewheel.timeout = Utils.nextTick(function(){swiper.slideToClosest(swiper.params.speed,true,undefined,snapToThreshold);},0); // no delay; move on next tick
})();}if(!swiper.mousewheel.timeout){ // if we get here, then we haven't detected the end of a momentum scroll, so
// we'll consider a scroll "complete" when there haven't been any wheel events
// for 500ms.
swiper.mousewheel.timeout = Utils.nextTick(function(){var snapToThreshold=0.5;swiper.mousewheel.lastEventBeforeSnap = newEvent;recentWheelEvents.splice(0);swiper.slideToClosest(swiper.params.speed,true,undefined,snapToThreshold);},500);}})();} // Emit event
if(!ignoreWheelEvents)swiper.emit('scroll',e); // Stop autoplay
if(swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction)swiper.autoplay.stop(); // Return page scroll on edge positions
if(position === swiper.minTranslate() || position === swiper.maxTranslate())return {v:true};}})();if(typeof _ret8 === 'object')return _ret8.v;}if(e.preventDefault)e.preventDefault();else e.returnValue = false;return false;},animateSlider:function animateSlider(newEvent){var swiper=this; // If the movement is NOT big enough and
// if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
//   Don't go any further (avoid insignificant scroll movement).
if(newEvent.delta >= 6 && Utils.now() - swiper.mousewheel.lastScrollTime < 60){ // Return false as a default
return true;} // If user is scrolling towards the end:
//   If the slider hasn't hit the latest slide or
//   if the slider is a loop and
//   if the slider isn't moving right now:
//     Go to next slide and
//     emit a scroll event.
// Else (the user is scrolling towards the beginning) and
// if the slider hasn't hit the first slide or
// if the slider is a loop and
// if the slider isn't moving right now:
//   Go to prev slide and
//   emit a scroll event.
if(newEvent.direction < 0){if((!swiper.isEnd || swiper.params.loop) && !swiper.animating){swiper.slideNext();swiper.emit('scroll',newEvent.raw);}}else if((!swiper.isBeginning || swiper.params.loop) && !swiper.animating){swiper.slidePrev();swiper.emit('scroll',newEvent.raw);} // If you got here is because an animation has been triggered so store the current time
swiper.mousewheel.lastScrollTime = new _ssrWindow.window.Date().getTime(); // Return false as a default
return false;},releaseScroll:function releaseScroll(newEvent){var swiper=this;var params=swiper.params.mousewheel;if(newEvent.direction < 0){if(swiper.isEnd && !swiper.params.loop && params.releaseOnEdges){ // Return true to animate scroll on edges
return true;}}else if(swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges){ // Return true to animate scroll on edges
return true;}return false;},enable:function enable(){var swiper=this;var event=Mousewheel.event();if(swiper.params.cssMode){swiper.wrapperEl.removeEventListener(event,swiper.mousewheel.handle);return true;}if(!event)return false;if(swiper.mousewheel.enabled)return false;var target=swiper.$el;if(swiper.params.mousewheel.eventsTarged !== 'container'){target = (0,_dom7DistDom7Modular.$)(swiper.params.mousewheel.eventsTarged);}target.on('mouseenter',swiper.mousewheel.handleMouseEnter);target.on('mouseleave',swiper.mousewheel.handleMouseLeave);target.on(event,swiper.mousewheel.handle);swiper.mousewheel.enabled = true;return true;},disable:function disable(){var swiper=this;var event=Mousewheel.event();if(swiper.params.cssMode){swiper.wrapperEl.addEventListener(event,swiper.mousewheel.handle);return true;}if(!event)return false;if(!swiper.mousewheel.enabled)return false;var target=swiper.$el;if(swiper.params.mousewheel.eventsTarged !== 'container'){target = (0,_dom7DistDom7Modular.$)(swiper.params.mousewheel.eventsTarged);}target.off(event,swiper.mousewheel.handle);swiper.mousewheel.enabled = false;return true;}};var Mousewheel$1={name:'mousewheel',params:{mousewheel:{enabled:false,releaseOnEdges:false,invert:false,forceToAxis:false,sensitivity:1,eventsTarged:'container'}},create:function create(){var swiper=this;Utils.extend(swiper,{mousewheel:{enabled:false,enable:Mousewheel.enable.bind(swiper),disable:Mousewheel.disable.bind(swiper),handle:Mousewheel.handle.bind(swiper),handleMouseEnter:Mousewheel.handleMouseEnter.bind(swiper),handleMouseLeave:Mousewheel.handleMouseLeave.bind(swiper),animateSlider:Mousewheel.animateSlider.bind(swiper),releaseScroll:Mousewheel.releaseScroll.bind(swiper),lastScrollTime:Utils.now(),lastEventBeforeSnap:undefined,recentWheelEvents:[]}});},on:{init:function init(){var swiper=this;if(!swiper.params.mousewheel.enabled && swiper.params.cssMode){swiper.mousewheel.disable();}if(swiper.params.mousewheel.enabled)swiper.mousewheel.enable();},destroy:function destroy(){var swiper=this;if(swiper.params.cssMode){swiper.mousewheel.enable();}if(swiper.mousewheel.enabled)swiper.mousewheel.disable();}}};var Navigation={update:function update(){ // Update Navigation Buttons
var swiper=this;var params=swiper.params.navigation;if(swiper.params.loop)return;var _swiper$navigation=swiper.navigation;var $nextEl=_swiper$navigation.$nextEl;var $prevEl=_swiper$navigation.$prevEl;if($prevEl && $prevEl.length > 0){if(swiper.isBeginning){$prevEl.addClass(params.disabledClass);}else {$prevEl.removeClass(params.disabledClass);}$prevEl[swiper.params.watchOverflow && swiper.isLocked?'addClass':'removeClass'](params.lockClass);}if($nextEl && $nextEl.length > 0){if(swiper.isEnd){$nextEl.addClass(params.disabledClass);}else {$nextEl.removeClass(params.disabledClass);}$nextEl[swiper.params.watchOverflow && swiper.isLocked?'addClass':'removeClass'](params.lockClass);}},onPrevClick:function onPrevClick(e){var swiper=this;e.preventDefault();if(swiper.isBeginning && !swiper.params.loop)return;swiper.slidePrev();},onNextClick:function onNextClick(e){var swiper=this;e.preventDefault();if(swiper.isEnd && !swiper.params.loop)return;swiper.slideNext();},init:function init(){var swiper=this;var params=swiper.params.navigation;if(!(params.nextEl || params.prevEl))return;var $nextEl=undefined;var $prevEl=undefined;if(params.nextEl){$nextEl = (0,_dom7DistDom7Modular.$)(params.nextEl);if(swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1){$nextEl = swiper.$el.find(params.nextEl);}}if(params.prevEl){$prevEl = (0,_dom7DistDom7Modular.$)(params.prevEl);if(swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1){$prevEl = swiper.$el.find(params.prevEl);}}if($nextEl && $nextEl.length > 0){$nextEl.on('click',swiper.navigation.onNextClick);}if($prevEl && $prevEl.length > 0){$prevEl.on('click',swiper.navigation.onPrevClick);}Utils.extend(swiper.navigation,{$nextEl:$nextEl,nextEl:$nextEl && $nextEl[0],$prevEl:$prevEl,prevEl:$prevEl && $prevEl[0]});},destroy:function destroy(){var swiper=this;var _swiper$navigation2=swiper.navigation;var $nextEl=_swiper$navigation2.$nextEl;var $prevEl=_swiper$navigation2.$prevEl;if($nextEl && $nextEl.length){$nextEl.off('click',swiper.navigation.onNextClick);$nextEl.removeClass(swiper.params.navigation.disabledClass);}if($prevEl && $prevEl.length){$prevEl.off('click',swiper.navigation.onPrevClick);$prevEl.removeClass(swiper.params.navigation.disabledClass);}}};var Navigation$1={name:'navigation',params:{navigation:{nextEl:null,prevEl:null,hideOnClick:false,disabledClass:'swiper-button-disabled',hiddenClass:'swiper-button-hidden',lockClass:'swiper-button-lock'}},create:function create(){var swiper=this;Utils.extend(swiper,{navigation:{init:Navigation.init.bind(swiper),update:Navigation.update.bind(swiper),destroy:Navigation.destroy.bind(swiper),onNextClick:Navigation.onNextClick.bind(swiper),onPrevClick:Navigation.onPrevClick.bind(swiper)}});},on:{init:function init(){var swiper=this;swiper.navigation.init();swiper.navigation.update();},toEdge:function toEdge(){var swiper=this;swiper.navigation.update();},fromEdge:function fromEdge(){var swiper=this;swiper.navigation.update();},destroy:function destroy(){var swiper=this;swiper.navigation.destroy();},click:function click(e){var swiper=this;var _swiper$navigation3=swiper.navigation;var $nextEl=_swiper$navigation3.$nextEl;var $prevEl=_swiper$navigation3.$prevEl;if(swiper.params.navigation.hideOnClick && !(0,_dom7DistDom7Modular.$)(e.target).is($prevEl) && !(0,_dom7DistDom7Modular.$)(e.target).is($nextEl)){var isHidden=undefined;if($nextEl){isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);}else if($prevEl){isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);}if(isHidden === true){swiper.emit('navigationShow',swiper);}else {swiper.emit('navigationHide',swiper);}if($nextEl){$nextEl.toggleClass(swiper.params.navigation.hiddenClass);}if($prevEl){$prevEl.toggleClass(swiper.params.navigation.hiddenClass);}}}}};var Pagination={update:function update(){ // Render || Update Pagination bullets/items
var swiper=this;var rtl=swiper.rtl;var params=swiper.params.pagination;if(!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0)return;var slidesLength=swiper.virtual && swiper.params.virtual.enabled?swiper.virtual.slides.length:swiper.slides.length;var $el=swiper.pagination.$el; // Current/Total
var current=undefined;var total=swiper.params.loop?Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup):swiper.snapGrid.length;if(swiper.params.loop){current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);if(current > slidesLength - 1 - swiper.loopedSlides * 2){current -= slidesLength - swiper.loopedSlides * 2;}if(current > total - 1)current -= total;if(current < 0 && swiper.params.paginationType !== 'bullets')current = total + current;}else if(typeof swiper.snapIndex !== 'undefined'){current = swiper.snapIndex;}else {current = swiper.activeIndex || 0;} // Types
if(params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0){(function(){var bullets=swiper.pagination.bullets;var firstIndex=undefined;var lastIndex=undefined;var midIndex=undefined;if(params.dynamicBullets){swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal()?'outerWidth':'outerHeight'](true);$el.css(swiper.isHorizontal()?'width':'height',swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + 'px');if(params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined){swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;if(swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1){swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;}else if(swiper.pagination.dynamicBulletIndex < 0){swiper.pagination.dynamicBulletIndex = 0;}}firstIndex = current - swiper.pagination.dynamicBulletIndex;lastIndex = firstIndex + (Math.min(bullets.length,params.dynamicMainBullets) - 1);midIndex = (lastIndex + firstIndex) / 2;}bullets.removeClass(params.bulletActiveClass + ' ' + params.bulletActiveClass + '-next ' + params.bulletActiveClass + '-next-next ' + params.bulletActiveClass + '-prev ' + params.bulletActiveClass + '-prev-prev ' + params.bulletActiveClass + '-main');if($el.length > 1){bullets.each(function(index,bullet){var $bullet=(0,_dom7DistDom7Modular.$)(bullet);var bulletIndex=$bullet.index();if(bulletIndex === current){$bullet.addClass(params.bulletActiveClass);}if(params.dynamicBullets){if(bulletIndex >= firstIndex && bulletIndex <= lastIndex){$bullet.addClass(params.bulletActiveClass + '-main');}if(bulletIndex === firstIndex){$bullet.prev().addClass(params.bulletActiveClass + '-prev').prev().addClass(params.bulletActiveClass + '-prev-prev');}if(bulletIndex === lastIndex){$bullet.next().addClass(params.bulletActiveClass + '-next').next().addClass(params.bulletActiveClass + '-next-next');}}});}else {var $bullet=bullets.eq(current);var bulletIndex=$bullet.index();$bullet.addClass(params.bulletActiveClass);if(params.dynamicBullets){var $firstDisplayedBullet=bullets.eq(firstIndex);var $lastDisplayedBullet=bullets.eq(lastIndex);for(var i=firstIndex;i <= lastIndex;i += 1) {bullets.eq(i).addClass(params.bulletActiveClass + '-main');}if(swiper.params.loop){if(bulletIndex >= bullets.length - params.dynamicMainBullets){for(var i=params.dynamicMainBullets;i >= 0;i -= 1) {bullets.eq(bullets.length - i).addClass(params.bulletActiveClass + '-main');}bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + '-prev');}else {$firstDisplayedBullet.prev().addClass(params.bulletActiveClass + '-prev').prev().addClass(params.bulletActiveClass + '-prev-prev');$lastDisplayedBullet.next().addClass(params.bulletActiveClass + '-next').next().addClass(params.bulletActiveClass + '-next-next');}}else {$firstDisplayedBullet.prev().addClass(params.bulletActiveClass + '-prev').prev().addClass(params.bulletActiveClass + '-prev-prev');$lastDisplayedBullet.next().addClass(params.bulletActiveClass + '-next').next().addClass(params.bulletActiveClass + '-next-next');}}}if(params.dynamicBullets){var dynamicBulletsLength=Math.min(bullets.length,params.dynamicMainBullets + 4);var bulletsOffset=(swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;var offsetProp=rtl?'right':'left';bullets.css(swiper.isHorizontal()?offsetProp:'top',bulletsOffset + 'px');}})();}if(params.type === 'fraction'){$el.find('.' + params.currentClass).text(params.formatFractionCurrent(current + 1));$el.find('.' + params.totalClass).text(params.formatFractionTotal(total));}if(params.type === 'progressbar'){var progressbarDirection=undefined;if(params.progressbarOpposite){progressbarDirection = swiper.isHorizontal()?'vertical':'horizontal';}else {progressbarDirection = swiper.isHorizontal()?'horizontal':'vertical';}var scale=(current + 1) / total;var scaleX=1;var scaleY=1;if(progressbarDirection === 'horizontal'){scaleX = scale;}else {scaleY = scale;}$el.find('.' + params.progressbarFillClass).transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')').transition(swiper.params.speed);}if(params.type === 'custom' && params.renderCustom){$el.html(params.renderCustom(swiper,current + 1,total));swiper.emit('paginationRender',swiper,$el[0]);}else {swiper.emit('paginationUpdate',swiper,$el[0]);}$el[swiper.params.watchOverflow && swiper.isLocked?'addClass':'removeClass'](params.lockClass);},render:function render(){ // Render Container
var swiper=this;var params=swiper.params.pagination;if(!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0)return;var slidesLength=swiper.virtual && swiper.params.virtual.enabled?swiper.virtual.slides.length:swiper.slides.length;var $el=swiper.pagination.$el;var paginationHTML='';if(params.type === 'bullets'){var numberOfBullets=swiper.params.loop?Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup):swiper.snapGrid.length;for(var i=0;i < numberOfBullets;i += 1) {if(params.renderBullet){paginationHTML += params.renderBullet.call(swiper,i,params.bulletClass);}else {paginationHTML += '<' + params.bulletElement + ' class="' + params.bulletClass + '"></' + params.bulletElement + '>';}}$el.html(paginationHTML);swiper.pagination.bullets = $el.find('.' + params.bulletClass);}if(params.type === 'fraction'){if(params.renderFraction){paginationHTML = params.renderFraction.call(swiper,params.currentClass,params.totalClass);}else {paginationHTML = '<span class="' + params.currentClass + '"></span>' + ' / ' + ('<span class="' + params.totalClass + '"></span>');}$el.html(paginationHTML);}if(params.type === 'progressbar'){if(params.renderProgressbar){paginationHTML = params.renderProgressbar.call(swiper,params.progressbarFillClass);}else {paginationHTML = '<span class="' + params.progressbarFillClass + '"></span>';}$el.html(paginationHTML);}if(params.type !== 'custom'){swiper.emit('paginationRender',swiper.pagination.$el[0]);}},init:function init(){var swiper=this;var params=swiper.params.pagination;if(!params.el)return;var $el=(0,_dom7DistDom7Modular.$)(params.el);if($el.length === 0)return;if(swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && swiper.$el.find(params.el).length === 1){$el = swiper.$el.find(params.el);}if(params.type === 'bullets' && params.clickable){$el.addClass(params.clickableClass);}$el.addClass(params.modifierClass + params.type);if(params.type === 'bullets' && params.dynamicBullets){$el.addClass('' + params.modifierClass + params.type + '-dynamic');swiper.pagination.dynamicBulletIndex = 0;if(params.dynamicMainBullets < 1){params.dynamicMainBullets = 1;}}if(params.type === 'progressbar' && params.progressbarOpposite){$el.addClass(params.progressbarOppositeClass);}if(params.clickable){$el.on('click','.' + params.bulletClass,function onClick(e){e.preventDefault();var index=(0,_dom7DistDom7Modular.$)(this).index() * swiper.params.slidesPerGroup;if(swiper.params.loop)index += swiper.loopedSlides;swiper.slideTo(index);});}Utils.extend(swiper.pagination,{$el:$el,el:$el[0]});},destroy:function destroy(){var swiper=this;var params=swiper.params.pagination;if(!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0)return;var $el=swiper.pagination.$el;$el.removeClass(params.hiddenClass);$el.removeClass(params.modifierClass + params.type);if(swiper.pagination.bullets)swiper.pagination.bullets.removeClass(params.bulletActiveClass);if(params.clickable){$el.off('click','.' + params.bulletClass);}}};var Pagination$1={name:'pagination',params:{pagination:{el:null,bulletElement:'span',clickable:false,hideOnClick:false,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:false,type:'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
dynamicBullets:false,dynamicMainBullets:1,formatFractionCurrent:function formatFractionCurrent(number){return number;},formatFractionTotal:function formatFractionTotal(number){return number;},bulletClass:'swiper-pagination-bullet',bulletActiveClass:'swiper-pagination-bullet-active',modifierClass:'swiper-pagination-', // NEW
currentClass:'swiper-pagination-current',totalClass:'swiper-pagination-total',hiddenClass:'swiper-pagination-hidden',progressbarFillClass:'swiper-pagination-progressbar-fill',progressbarOppositeClass:'swiper-pagination-progressbar-opposite',clickableClass:'swiper-pagination-clickable', // NEW
lockClass:'swiper-pagination-lock'}},create:function create(){var swiper=this;Utils.extend(swiper,{pagination:{init:Pagination.init.bind(swiper),render:Pagination.render.bind(swiper),update:Pagination.update.bind(swiper),destroy:Pagination.destroy.bind(swiper),dynamicBulletIndex:0}});},on:{init:function init(){var swiper=this;swiper.pagination.init();swiper.pagination.render();swiper.pagination.update();},activeIndexChange:function activeIndexChange(){var swiper=this;if(swiper.params.loop){swiper.pagination.update();}else if(typeof swiper.snapIndex === 'undefined'){swiper.pagination.update();}},snapIndexChange:function snapIndexChange(){var swiper=this;if(!swiper.params.loop){swiper.pagination.update();}},slidesLengthChange:function slidesLengthChange(){var swiper=this;if(swiper.params.loop){swiper.pagination.render();swiper.pagination.update();}},snapGridLengthChange:function snapGridLengthChange(){var swiper=this;if(!swiper.params.loop){swiper.pagination.render();swiper.pagination.update();}},destroy:function destroy(){var swiper=this;swiper.pagination.destroy();},click:function click(e){var swiper=this;if(swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !(0,_dom7DistDom7Modular.$)(e.target).hasClass(swiper.params.pagination.bulletClass)){var isHidden=swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);if(isHidden === true){swiper.emit('paginationShow',swiper);}else {swiper.emit('paginationHide',swiper);}swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);}}}};var Scrollbar={setTranslate:function setTranslate(){var swiper=this;if(!swiper.params.scrollbar.el || !swiper.scrollbar.el)return;var scrollbar=swiper.scrollbar;var rtl=swiper.rtlTranslate;var progress=swiper.progress;var dragSize=scrollbar.dragSize;var trackSize=scrollbar.trackSize;var $dragEl=scrollbar.$dragEl;var $el=scrollbar.$el;var params=swiper.params.scrollbar;var newSize=dragSize;var newPos=(trackSize - dragSize) * progress;if(rtl){newPos = -newPos;if(newPos > 0){newSize = dragSize - newPos;newPos = 0;}else if(-newPos + dragSize > trackSize){newSize = trackSize + newPos;}}else if(newPos < 0){newSize = dragSize + newPos;newPos = 0;}else if(newPos + dragSize > trackSize){newSize = trackSize - newPos;}if(swiper.isHorizontal()){$dragEl.transform('translate3d(' + newPos + 'px, 0, 0)');$dragEl[0].style.width = newSize + 'px';}else {$dragEl.transform('translate3d(0px, ' + newPos + 'px, 0)');$dragEl[0].style.height = newSize + 'px';}if(params.hide){clearTimeout(swiper.scrollbar.timeout);$el[0].style.opacity = 1;swiper.scrollbar.timeout = setTimeout(function(){$el[0].style.opacity = 0;$el.transition(400);},1000);}},setTransition:function setTransition(duration){var swiper=this;if(!swiper.params.scrollbar.el || !swiper.scrollbar.el)return;swiper.scrollbar.$dragEl.transition(duration);},updateSize:function updateSize(){var swiper=this;if(!swiper.params.scrollbar.el || !swiper.scrollbar.el)return;var scrollbar=swiper.scrollbar;var $dragEl=scrollbar.$dragEl;var $el=scrollbar.$el;$dragEl[0].style.width = '';$dragEl[0].style.height = '';var trackSize=swiper.isHorizontal()?$el[0].offsetWidth:$el[0].offsetHeight;var divider=swiper.size / swiper.virtualSize;var moveDivider=divider * (trackSize / swiper.size);var dragSize=undefined;if(swiper.params.scrollbar.dragSize === 'auto'){dragSize = trackSize * divider;}else {dragSize = parseInt(swiper.params.scrollbar.dragSize,10);}if(swiper.isHorizontal()){$dragEl[0].style.width = dragSize + 'px';}else {$dragEl[0].style.height = dragSize + 'px';}if(divider >= 1){$el[0].style.display = 'none';}else {$el[0].style.display = '';}if(swiper.params.scrollbar.hide){$el[0].style.opacity = 0;}Utils.extend(scrollbar,{trackSize:trackSize,divider:divider,moveDivider:moveDivider,dragSize:dragSize});scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked?'addClass':'removeClass'](swiper.params.scrollbar.lockClass);},getPointerPosition:function getPointerPosition(e){var swiper=this;if(swiper.isHorizontal()){return e.type === 'touchstart' || e.type === 'touchmove'?e.targetTouches[0].clientX:e.clientX;}return e.type === 'touchstart' || e.type === 'touchmove'?e.targetTouches[0].clientY:e.clientY;},setDragPosition:function setDragPosition(e){var swiper=this;var scrollbar=swiper.scrollbar;var rtl=swiper.rtlTranslate;var $el=scrollbar.$el;var dragSize=scrollbar.dragSize;var trackSize=scrollbar.trackSize;var dragStartPos=scrollbar.dragStartPos;var positionRatio=undefined;positionRatio = (scrollbar.getPointerPosition(e) - $el.offset()[swiper.isHorizontal()?'left':'top'] - (dragStartPos !== null?dragStartPos:dragSize / 2)) / (trackSize - dragSize);positionRatio = Math.max(Math.min(positionRatio,1),0);if(rtl){positionRatio = 1 - positionRatio;}var position=swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;swiper.updateProgress(position);swiper.setTranslate(position);swiper.updateActiveIndex();swiper.updateSlidesClasses();},onDragStart:function onDragStart(e){var swiper=this;var params=swiper.params.scrollbar;var scrollbar=swiper.scrollbar;var $wrapperEl=swiper.$wrapperEl;var $el=scrollbar.$el;var $dragEl=scrollbar.$dragEl;swiper.scrollbar.isTouched = true;swiper.scrollbar.dragStartPos = e.target === $dragEl[0] || e.target === $dragEl?scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal()?'left':'top']:null;e.preventDefault();e.stopPropagation();$wrapperEl.transition(100);$dragEl.transition(100);scrollbar.setDragPosition(e);clearTimeout(swiper.scrollbar.dragTimeout);$el.transition(0);if(params.hide){$el.css('opacity',1);}if(swiper.params.cssMode){swiper.$wrapperEl.css('scroll-snap-type','none');}swiper.emit('scrollbarDragStart',e);},onDragMove:function onDragMove(e){var swiper=this;var scrollbar=swiper.scrollbar;var $wrapperEl=swiper.$wrapperEl;var $el=scrollbar.$el;var $dragEl=scrollbar.$dragEl;if(!swiper.scrollbar.isTouched)return;if(e.preventDefault)e.preventDefault();else e.returnValue = false;scrollbar.setDragPosition(e);$wrapperEl.transition(0);$el.transition(0);$dragEl.transition(0);swiper.emit('scrollbarDragMove',e);},onDragEnd:function onDragEnd(e){var swiper=this;var params=swiper.params.scrollbar;var scrollbar=swiper.scrollbar;var $wrapperEl=swiper.$wrapperEl;var $el=scrollbar.$el;if(!swiper.scrollbar.isTouched)return;swiper.scrollbar.isTouched = false;if(swiper.params.cssMode){swiper.$wrapperEl.css('scroll-snap-type','');$wrapperEl.transition('');}if(params.hide){clearTimeout(swiper.scrollbar.dragTimeout);swiper.scrollbar.dragTimeout = Utils.nextTick(function(){$el.css('opacity',0);$el.transition(400);},1000);}swiper.emit('scrollbarDragEnd',e);if(params.snapOnRelease){swiper.slideToClosest();}},enableDraggable:function enableDraggable(){var swiper=this;if(!swiper.params.scrollbar.el)return;var scrollbar=swiper.scrollbar;var touchEventsTouch=swiper.touchEventsTouch;var touchEventsDesktop=swiper.touchEventsDesktop;var params=swiper.params;var $el=scrollbar.$el;var target=$el[0];var activeListener=Support.passiveListener && params.passiveListeners?{passive:false,capture:false}:false;var passiveListener=Support.passiveListener && params.passiveListeners?{passive:true,capture:false}:false;if(!Support.touch){target.addEventListener(touchEventsDesktop.start,swiper.scrollbar.onDragStart,activeListener);_ssrWindow.document.addEventListener(touchEventsDesktop.move,swiper.scrollbar.onDragMove,activeListener);_ssrWindow.document.addEventListener(touchEventsDesktop.end,swiper.scrollbar.onDragEnd,passiveListener);}else {target.addEventListener(touchEventsTouch.start,swiper.scrollbar.onDragStart,activeListener);target.addEventListener(touchEventsTouch.move,swiper.scrollbar.onDragMove,activeListener);target.addEventListener(touchEventsTouch.end,swiper.scrollbar.onDragEnd,passiveListener);}},disableDraggable:function disableDraggable(){var swiper=this;if(!swiper.params.scrollbar.el)return;var scrollbar=swiper.scrollbar;var touchEventsTouch=swiper.touchEventsTouch;var touchEventsDesktop=swiper.touchEventsDesktop;var params=swiper.params;var $el=scrollbar.$el;var target=$el[0];var activeListener=Support.passiveListener && params.passiveListeners?{passive:false,capture:false}:false;var passiveListener=Support.passiveListener && params.passiveListeners?{passive:true,capture:false}:false;if(!Support.touch){target.removeEventListener(touchEventsDesktop.start,swiper.scrollbar.onDragStart,activeListener);_ssrWindow.document.removeEventListener(touchEventsDesktop.move,swiper.scrollbar.onDragMove,activeListener);_ssrWindow.document.removeEventListener(touchEventsDesktop.end,swiper.scrollbar.onDragEnd,passiveListener);}else {target.removeEventListener(touchEventsTouch.start,swiper.scrollbar.onDragStart,activeListener);target.removeEventListener(touchEventsTouch.move,swiper.scrollbar.onDragMove,activeListener);target.removeEventListener(touchEventsTouch.end,swiper.scrollbar.onDragEnd,passiveListener);}},init:function init(){var swiper=this;if(!swiper.params.scrollbar.el)return;var scrollbar=swiper.scrollbar;var $swiperEl=swiper.$el;var params=swiper.params.scrollbar;var $el=(0,_dom7DistDom7Modular.$)(params.el);if(swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1){$el = $swiperEl.find(params.el);}var $dragEl=$el.find('.' + swiper.params.scrollbar.dragClass);if($dragEl.length === 0){$dragEl = (0,_dom7DistDom7Modular.$)('<div class="' + swiper.params.scrollbar.dragClass + '"></div>');$el.append($dragEl);}Utils.extend(scrollbar,{$el:$el,el:$el[0],$dragEl:$dragEl,dragEl:$dragEl[0]});if(params.draggable){scrollbar.enableDraggable();}},destroy:function destroy(){var swiper=this;swiper.scrollbar.disableDraggable();}};var Scrollbar$1={name:'scrollbar',params:{scrollbar:{el:null,dragSize:'auto',hide:false,draggable:false,snapOnRelease:true,lockClass:'swiper-scrollbar-lock',dragClass:'swiper-scrollbar-drag'}},create:function create(){var swiper=this;Utils.extend(swiper,{scrollbar:{init:Scrollbar.init.bind(swiper),destroy:Scrollbar.destroy.bind(swiper),updateSize:Scrollbar.updateSize.bind(swiper),setTranslate:Scrollbar.setTranslate.bind(swiper),setTransition:Scrollbar.setTransition.bind(swiper),enableDraggable:Scrollbar.enableDraggable.bind(swiper),disableDraggable:Scrollbar.disableDraggable.bind(swiper),setDragPosition:Scrollbar.setDragPosition.bind(swiper),getPointerPosition:Scrollbar.getPointerPosition.bind(swiper),onDragStart:Scrollbar.onDragStart.bind(swiper),onDragMove:Scrollbar.onDragMove.bind(swiper),onDragEnd:Scrollbar.onDragEnd.bind(swiper),isTouched:false,timeout:null,dragTimeout:null}});},on:{init:function init(){var swiper=this;swiper.scrollbar.init();swiper.scrollbar.updateSize();swiper.scrollbar.setTranslate();},update:function update(){var swiper=this;swiper.scrollbar.updateSize();},resize:function resize(){var swiper=this;swiper.scrollbar.updateSize();},observerUpdate:function observerUpdate(){var swiper=this;swiper.scrollbar.updateSize();},setTranslate:function setTranslate(){var swiper=this;swiper.scrollbar.setTranslate();},setTransition:function setTransition(duration){var swiper=this;swiper.scrollbar.setTransition(duration);},destroy:function destroy(){var swiper=this;swiper.scrollbar.destroy();}}};var Parallax={setTransform:function setTransform(el,progress){var swiper=this;var rtl=swiper.rtl;var $el=(0,_dom7DistDom7Modular.$)(el);var rtlFactor=rtl?-1:1;var p=$el.attr('data-swiper-parallax') || '0';var x=$el.attr('data-swiper-parallax-x');var y=$el.attr('data-swiper-parallax-y');var scale=$el.attr('data-swiper-parallax-scale');var opacity=$el.attr('data-swiper-parallax-opacity');if(x || y){x = x || '0';y = y || '0';}else if(swiper.isHorizontal()){x = p;y = '0';}else {y = p;x = '0';}if(x.indexOf('%') >= 0){x = parseInt(x,10) * progress * rtlFactor + '%';}else {x = x * progress * rtlFactor + 'px';}if(y.indexOf('%') >= 0){y = parseInt(y,10) * progress + '%';}else {y = y * progress + 'px';}if(typeof opacity !== 'undefined' && opacity !== null){var currentOpacity=opacity - (opacity - 1) * (1 - Math.abs(progress));$el[0].style.opacity = currentOpacity;}if(typeof scale === 'undefined' || scale === null){$el.transform('translate3d(' + x + ', ' + y + ', 0px)');}else {var currentScale=scale - (scale - 1) * (1 - Math.abs(progress));$el.transform('translate3d(' + x + ', ' + y + ', 0px) scale(' + currentScale + ')');}},setTranslate:function setTranslate(){var swiper=this;var $el=swiper.$el;var slides=swiper.slides;var progress=swiper.progress;var snapGrid=swiper.snapGrid;$el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function(index,el){swiper.parallax.setTransform(el,progress);});slides.each(function(slideIndex,slideEl){var slideProgress=slideEl.progress;if(swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto'){slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);}slideProgress = Math.min(Math.max(slideProgress,-1),1);(0,_dom7DistDom7Modular.$)(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function(index,el){swiper.parallax.setTransform(el,slideProgress);});});},setTransition:function setTransition(){var duration=arguments.length <= 0 || arguments[0] === undefined?this.params.speed:arguments[0];var swiper=this;var $el=swiper.$el;$el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function(index,parallaxEl){var $parallaxEl=(0,_dom7DistDom7Modular.$)(parallaxEl);var parallaxDuration=parseInt($parallaxEl.attr('data-swiper-parallax-duration'),10) || duration;if(duration === 0)parallaxDuration = 0;$parallaxEl.transition(parallaxDuration);});}};var Parallax$1={name:'parallax',params:{parallax:{enabled:false}},create:function create(){var swiper=this;Utils.extend(swiper,{parallax:{setTransform:Parallax.setTransform.bind(swiper),setTranslate:Parallax.setTranslate.bind(swiper),setTransition:Parallax.setTransition.bind(swiper)}});},on:{beforeInit:function beforeInit(){var swiper=this;if(!swiper.params.parallax.enabled)return;swiper.params.watchSlidesProgress = true;swiper.originalParams.watchSlidesProgress = true;},init:function init(){var swiper=this;if(!swiper.params.parallax.enabled)return;swiper.parallax.setTranslate();},setTranslate:function setTranslate(){var swiper=this;if(!swiper.params.parallax.enabled)return;swiper.parallax.setTranslate();},setTransition:function setTransition(duration){var swiper=this;if(!swiper.params.parallax.enabled)return;swiper.parallax.setTransition(duration);}}};var Zoom={ // Calc Scale From Multi-touches
getDistanceBetweenTouches:function getDistanceBetweenTouches(e){if(e.targetTouches.length < 2)return 1;var x1=e.targetTouches[0].pageX;var y1=e.targetTouches[0].pageY;var x2=e.targetTouches[1].pageX;var y2=e.targetTouches[1].pageY;var distance=Math.sqrt(Math.pow(x2 - x1,2) + Math.pow(y2 - y1,2));return distance;}, // Events
onGestureStart:function onGestureStart(e){var swiper=this;var params=swiper.params.zoom;var zoom=swiper.zoom;var gesture=zoom.gesture;zoom.fakeGestureTouched = false;zoom.fakeGestureMoved = false;if(!Support.gestures){if(e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2){return;}zoom.fakeGestureTouched = true;gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);}if(!gesture.$slideEl || !gesture.$slideEl.length){gesture.$slideEl = (0,_dom7DistDom7Modular.$)(e.target).closest('.' + swiper.params.slideClass);if(gesture.$slideEl.length === 0)gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');gesture.$imageWrapEl = gesture.$imageEl.parent('.' + params.containerClass);gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;if(gesture.$imageWrapEl.length === 0){gesture.$imageEl = undefined;return;}}if(gesture.$imageEl){gesture.$imageEl.transition(0);}swiper.zoom.isScaling = true;},onGestureChange:function onGestureChange(e){var swiper=this;var params=swiper.params.zoom;var zoom=swiper.zoom;var gesture=zoom.gesture;if(!Support.gestures){if(e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2){return;}zoom.fakeGestureMoved = true;gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);}if(!gesture.$imageEl || gesture.$imageEl.length === 0)return;if(Support.gestures){zoom.scale = e.scale * zoom.currentScale;}else {zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;}if(zoom.scale > gesture.maxRatio){zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1,0.5);}if(zoom.scale < params.minRatio){zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1,0.5);}gesture.$imageEl.transform('translate3d(0,0,0) scale(' + zoom.scale + ')');},onGestureEnd:function onGestureEnd(e){var swiper=this;var params=swiper.params.zoom;var zoom=swiper.zoom;var gesture=zoom.gesture;if(!Support.gestures){if(!zoom.fakeGestureTouched || !zoom.fakeGestureMoved){return;}if(e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android){return;}zoom.fakeGestureTouched = false;zoom.fakeGestureMoved = false;}if(!gesture.$imageEl || gesture.$imageEl.length === 0)return;zoom.scale = Math.max(Math.min(zoom.scale,gesture.maxRatio),params.minRatio);gesture.$imageEl.transition(swiper.params.speed).transform('translate3d(0,0,0) scale(' + zoom.scale + ')');zoom.currentScale = zoom.scale;zoom.isScaling = false;if(zoom.scale === 1)gesture.$slideEl = undefined;},onTouchStart:function onTouchStart(e){var swiper=this;var zoom=swiper.zoom;var gesture=zoom.gesture;var image=zoom.image;if(!gesture.$imageEl || gesture.$imageEl.length === 0)return;if(image.isTouched)return;if(Device.android)e.preventDefault();image.isTouched = true;image.touchesStart.x = e.type === 'touchstart'?e.targetTouches[0].pageX:e.pageX;image.touchesStart.y = e.type === 'touchstart'?e.targetTouches[0].pageY:e.pageY;},onTouchMove:function onTouchMove(e){var swiper=this;var zoom=swiper.zoom;var gesture=zoom.gesture;var image=zoom.image;var velocity=zoom.velocity;if(!gesture.$imageEl || gesture.$imageEl.length === 0)return;swiper.allowClick = false;if(!image.isTouched || !gesture.$slideEl)return;if(!image.isMoved){image.width = gesture.$imageEl[0].offsetWidth;image.height = gesture.$imageEl[0].offsetHeight;image.startX = Utils.getTranslate(gesture.$imageWrapEl[0],'x') || 0;image.startY = Utils.getTranslate(gesture.$imageWrapEl[0],'y') || 0;gesture.slideWidth = gesture.$slideEl[0].offsetWidth;gesture.slideHeight = gesture.$slideEl[0].offsetHeight;gesture.$imageWrapEl.transition(0);if(swiper.rtl){image.startX = -image.startX;image.startY = -image.startY;}} // Define if we need image drag
var scaledWidth=image.width * zoom.scale;var scaledHeight=image.height * zoom.scale;if(scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight)return;image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2,0);image.maxX = -image.minX;image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2,0);image.maxY = -image.minY;image.touchesCurrent.x = e.type === 'touchmove'?e.targetTouches[0].pageX:e.pageX;image.touchesCurrent.y = e.type === 'touchmove'?e.targetTouches[0].pageY:e.pageY;if(!image.isMoved && !zoom.isScaling){if(swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)){image.isTouched = false;return;}if(!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)){image.isTouched = false;return;}}e.preventDefault();e.stopPropagation();image.isMoved = true;image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;if(image.currentX < image.minX){image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1,0.8);}if(image.currentX > image.maxX){image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1,0.8);}if(image.currentY < image.minY){image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1,0.8);}if(image.currentY > image.maxY){image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1,0.8);} // Velocity
if(!velocity.prevPositionX)velocity.prevPositionX = image.touchesCurrent.x;if(!velocity.prevPositionY)velocity.prevPositionY = image.touchesCurrent.y;if(!velocity.prevTime)velocity.prevTime = Date.now();velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;if(Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2)velocity.x = 0;if(Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2)velocity.y = 0;velocity.prevPositionX = image.touchesCurrent.x;velocity.prevPositionY = image.touchesCurrent.y;velocity.prevTime = Date.now();gesture.$imageWrapEl.transform('translate3d(' + image.currentX + 'px, ' + image.currentY + 'px,0)');},onTouchEnd:function onTouchEnd(){var swiper=this;var zoom=swiper.zoom;var gesture=zoom.gesture;var image=zoom.image;var velocity=zoom.velocity;if(!gesture.$imageEl || gesture.$imageEl.length === 0)return;if(!image.isTouched || !image.isMoved){image.isTouched = false;image.isMoved = false;return;}image.isTouched = false;image.isMoved = false;var momentumDurationX=300;var momentumDurationY=300;var momentumDistanceX=velocity.x * momentumDurationX;var newPositionX=image.currentX + momentumDistanceX;var momentumDistanceY=velocity.y * momentumDurationY;var newPositionY=image.currentY + momentumDistanceY; // Fix duration
if(velocity.x !== 0)momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);if(velocity.y !== 0)momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);var momentumDuration=Math.max(momentumDurationX,momentumDurationY);image.currentX = newPositionX;image.currentY = newPositionY; // Define if we need image drag
var scaledWidth=image.width * zoom.scale;var scaledHeight=image.height * zoom.scale;image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2,0);image.maxX = -image.minX;image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2,0);image.maxY = -image.minY;image.currentX = Math.max(Math.min(image.currentX,image.maxX),image.minX);image.currentY = Math.max(Math.min(image.currentY,image.maxY),image.minY);gesture.$imageWrapEl.transition(momentumDuration).transform('translate3d(' + image.currentX + 'px, ' + image.currentY + 'px,0)');},onTransitionEnd:function onTransitionEnd(){var swiper=this;var zoom=swiper.zoom;var gesture=zoom.gesture;if(gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex){if(gesture.$imageEl){gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');}if(gesture.$imageWrapEl){gesture.$imageWrapEl.transform('translate3d(0,0,0)');}zoom.scale = 1;zoom.currentScale = 1;gesture.$slideEl = undefined;gesture.$imageEl = undefined;gesture.$imageWrapEl = undefined;}}, // Toggle Zoom
toggle:function toggle(e){var swiper=this;var zoom=swiper.zoom;if(zoom.scale && zoom.scale !== 1){ // Zoom Out
zoom.out();}else { // Zoom In
zoom['in'](e);}},'in':function _in(e){var swiper=this;var zoom=swiper.zoom;var params=swiper.params.zoom;var gesture=zoom.gesture;var image=zoom.image;if(!gesture.$slideEl){if(swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual){gesture.$slideEl = swiper.$wrapperEl.children('.' + swiper.params.slideActiveClass);}else {gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);}gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');gesture.$imageWrapEl = gesture.$imageEl.parent('.' + params.containerClass);}if(!gesture.$imageEl || gesture.$imageEl.length === 0)return;gesture.$slideEl.addClass('' + params.zoomedSlideClass);var touchX=undefined;var touchY=undefined;var offsetX=undefined;var offsetY=undefined;var diffX=undefined;var diffY=undefined;var translateX=undefined;var translateY=undefined;var imageWidth=undefined;var imageHeight=undefined;var scaledWidth=undefined;var scaledHeight=undefined;var translateMinX=undefined;var translateMinY=undefined;var translateMaxX=undefined;var translateMaxY=undefined;var slideWidth=undefined;var slideHeight=undefined;if(typeof image.touchesStart.x === 'undefined' && e){touchX = e.type === 'touchend'?e.changedTouches[0].pageX:e.pageX;touchY = e.type === 'touchend'?e.changedTouches[0].pageY:e.pageY;}else {touchX = image.touchesStart.x;touchY = image.touchesStart.y;}zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;if(e){slideWidth = gesture.$slideEl[0].offsetWidth;slideHeight = gesture.$slideEl[0].offsetHeight;offsetX = gesture.$slideEl.offset().left;offsetY = gesture.$slideEl.offset().top;diffX = offsetX + slideWidth / 2 - touchX;diffY = offsetY + slideHeight / 2 - touchY;imageWidth = gesture.$imageEl[0].offsetWidth;imageHeight = gesture.$imageEl[0].offsetHeight;scaledWidth = imageWidth * zoom.scale;scaledHeight = imageHeight * zoom.scale;translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2,0);translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2,0);translateMaxX = -translateMinX;translateMaxY = -translateMinY;translateX = diffX * zoom.scale;translateY = diffY * zoom.scale;if(translateX < translateMinX){translateX = translateMinX;}if(translateX > translateMaxX){translateX = translateMaxX;}if(translateY < translateMinY){translateY = translateMinY;}if(translateY > translateMaxY){translateY = translateMaxY;}}else {translateX = 0;translateY = 0;}gesture.$imageWrapEl.transition(300).transform('translate3d(' + translateX + 'px, ' + translateY + 'px,0)');gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(' + zoom.scale + ')');},out:function out(){var swiper=this;var zoom=swiper.zoom;var params=swiper.params.zoom;var gesture=zoom.gesture;if(!gesture.$slideEl){if(swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual){gesture.$slideEl = swiper.$wrapperEl.children('.' + swiper.params.slideActiveClass);}else {gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);}gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');gesture.$imageWrapEl = gesture.$imageEl.parent('.' + params.containerClass);}if(!gesture.$imageEl || gesture.$imageEl.length === 0)return;zoom.scale = 1;zoom.currentScale = 1;gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');gesture.$slideEl.removeClass('' + params.zoomedSlideClass);gesture.$slideEl = undefined;}, // Attach/Detach Events
enable:function enable(){var swiper=this;var zoom=swiper.zoom;if(zoom.enabled)return;zoom.enabled = true;var passiveListener=swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners?{passive:true,capture:false}:false;var activeListenerWithCapture=Support.passiveListener?{passive:false,capture:true}:true;var slideSelector='.' + swiper.params.slideClass; // Scale image
if(Support.gestures){swiper.$wrapperEl.on('gesturestart',slideSelector,zoom.onGestureStart,passiveListener);swiper.$wrapperEl.on('gesturechange',slideSelector,zoom.onGestureChange,passiveListener);swiper.$wrapperEl.on('gestureend',slideSelector,zoom.onGestureEnd,passiveListener);}else if(swiper.touchEvents.start === 'touchstart'){swiper.$wrapperEl.on(swiper.touchEvents.start,slideSelector,zoom.onGestureStart,passiveListener);swiper.$wrapperEl.on(swiper.touchEvents.move,slideSelector,zoom.onGestureChange,activeListenerWithCapture);swiper.$wrapperEl.on(swiper.touchEvents.end,slideSelector,zoom.onGestureEnd,passiveListener);if(swiper.touchEvents.cancel){swiper.$wrapperEl.on(swiper.touchEvents.cancel,slideSelector,zoom.onGestureEnd,passiveListener);}} // Move image
swiper.$wrapperEl.on(swiper.touchEvents.move,'.' + swiper.params.zoom.containerClass,zoom.onTouchMove,activeListenerWithCapture);},disable:function disable(){var swiper=this;var zoom=swiper.zoom;if(!zoom.enabled)return;swiper.zoom.enabled = false;var passiveListener=swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners?{passive:true,capture:false}:false;var activeListenerWithCapture=Support.passiveListener?{passive:false,capture:true}:true;var slideSelector='.' + swiper.params.slideClass; // Scale image
if(Support.gestures){swiper.$wrapperEl.off('gesturestart',slideSelector,zoom.onGestureStart,passiveListener);swiper.$wrapperEl.off('gesturechange',slideSelector,zoom.onGestureChange,passiveListener);swiper.$wrapperEl.off('gestureend',slideSelector,zoom.onGestureEnd,passiveListener);}else if(swiper.touchEvents.start === 'touchstart'){swiper.$wrapperEl.off(swiper.touchEvents.start,slideSelector,zoom.onGestureStart,passiveListener);swiper.$wrapperEl.off(swiper.touchEvents.move,slideSelector,zoom.onGestureChange,activeListenerWithCapture);swiper.$wrapperEl.off(swiper.touchEvents.end,slideSelector,zoom.onGestureEnd,passiveListener);if(swiper.touchEvents.cancel){swiper.$wrapperEl.off(swiper.touchEvents.cancel,slideSelector,zoom.onGestureEnd,passiveListener);}} // Move image
swiper.$wrapperEl.off(swiper.touchEvents.move,'.' + swiper.params.zoom.containerClass,zoom.onTouchMove,activeListenerWithCapture);}};var Zoom$1={name:'zoom',params:{zoom:{enabled:false,maxRatio:3,minRatio:1,toggle:true,containerClass:'swiper-zoom-container',zoomedSlideClass:'swiper-slide-zoomed'}},create:function create(){var swiper=this;var zoom={enabled:false,scale:1,currentScale:1,isScaling:false,gesture:{$slideEl:undefined,slideWidth:undefined,slideHeight:undefined,$imageEl:undefined,$imageWrapEl:undefined,maxRatio:3},image:{isTouched:undefined,isMoved:undefined,currentX:undefined,currentY:undefined,minX:undefined,minY:undefined,maxX:undefined,maxY:undefined,width:undefined,height:undefined,startX:undefined,startY:undefined,touchesStart:{},touchesCurrent:{}},velocity:{x:undefined,y:undefined,prevPositionX:undefined,prevPositionY:undefined,prevTime:undefined}};'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'.split(' ').forEach(function(methodName){zoom[methodName] = Zoom[methodName].bind(swiper);});Utils.extend(swiper,{zoom:zoom});var scale=1;Object.defineProperty(swiper.zoom,'scale',{get:function get(){return scale;},set:function set(value){if(scale !== value){var imageEl=swiper.zoom.gesture.$imageEl?swiper.zoom.gesture.$imageEl[0]:undefined;var slideEl=swiper.zoom.gesture.$slideEl?swiper.zoom.gesture.$slideEl[0]:undefined;swiper.emit('zoomChange',value,imageEl,slideEl);}scale = value;}});},on:{init:function init(){var swiper=this;if(swiper.params.zoom.enabled){swiper.zoom.enable();}},destroy:function destroy(){var swiper=this;swiper.zoom.disable();},touchStart:function touchStart(e){var swiper=this;if(!swiper.zoom.enabled)return;swiper.zoom.onTouchStart(e);},touchEnd:function touchEnd(e){var swiper=this;if(!swiper.zoom.enabled)return;swiper.zoom.onTouchEnd(e);},doubleTap:function doubleTap(e){var swiper=this;if(swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle){swiper.zoom.toggle(e);}},transitionEnd:function transitionEnd(){var swiper=this;if(swiper.zoom.enabled && swiper.params.zoom.enabled){swiper.zoom.onTransitionEnd();}},slideChange:function slideChange(){var swiper=this;if(swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode){swiper.zoom.onTransitionEnd();}}}};var Lazy={loadInSlide:function loadInSlide(index){var loadInDuplicate=arguments.length <= 1 || arguments[1] === undefined?true:arguments[1];var swiper=this;var params=swiper.params.lazy;if(typeof index === 'undefined')return;if(swiper.slides.length === 0)return;var isVirtual=swiper.virtual && swiper.params.virtual.enabled;var $slideEl=isVirtual?swiper.$wrapperEl.children('.' + swiper.params.slideClass + '[data-swiper-slide-index="' + index + '"]'):swiper.slides.eq(index);var $images=$slideEl.find('.' + params.elementClass + ':not(.' + params.loadedClass + '):not(.' + params.loadingClass + ')');if($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)){$images = $images.add($slideEl[0]);}if($images.length === 0)return;$images.each(function(imageIndex,imageEl){var $imageEl=(0,_dom7DistDom7Modular.$)(imageEl);$imageEl.addClass(params.loadingClass);var background=$imageEl.attr('data-background');var src=$imageEl.attr('data-src');var srcset=$imageEl.attr('data-srcset');var sizes=$imageEl.attr('data-sizes');swiper.loadImage($imageEl[0],src || background,srcset,sizes,false,function(){if(typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed)return;if(background){$imageEl.css('background-image','url("' + background + '")');$imageEl.removeAttr('data-background');}else {if(srcset){$imageEl.attr('srcset',srcset);$imageEl.removeAttr('data-srcset');}if(sizes){$imageEl.attr('sizes',sizes);$imageEl.removeAttr('data-sizes');}if(src){$imageEl.attr('src',src);$imageEl.removeAttr('data-src');}}$imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);$slideEl.find('.' + params.preloaderClass).remove();if(swiper.params.loop && loadInDuplicate){var slideOriginalIndex=$slideEl.attr('data-swiper-slide-index');if($slideEl.hasClass(swiper.params.slideDuplicateClass)){var originalSlide=swiper.$wrapperEl.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + swiper.params.slideDuplicateClass + ')');swiper.lazy.loadInSlide(originalSlide.index(),false);}else {var duplicatedSlide=swiper.$wrapperEl.children('.' + swiper.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');swiper.lazy.loadInSlide(duplicatedSlide.index(),false);}}swiper.emit('lazyImageReady',$slideEl[0],$imageEl[0]);if(swiper.params.autoHeight){swiper.updateAutoHeight();}});swiper.emit('lazyImageLoad',$slideEl[0],$imageEl[0]);});},load:function load(){var swiper=this;var $wrapperEl=swiper.$wrapperEl;var swiperParams=swiper.params;var slides=swiper.slides;var activeIndex=swiper.activeIndex;var isVirtual=swiper.virtual && swiperParams.virtual.enabled;var params=swiperParams.lazy;var slidesPerView=swiperParams.slidesPerView;if(slidesPerView === 'auto'){slidesPerView = 0;}function slideExist(index){if(isVirtual){if($wrapperEl.children('.' + swiperParams.slideClass + '[data-swiper-slide-index="' + index + '"]').length){return true;}}else if(slides[index])return true;return false;}function slideIndex(slideEl){if(isVirtual){return (0,_dom7DistDom7Modular.$)(slideEl).attr('data-swiper-slide-index');}return (0,_dom7DistDom7Modular.$)(slideEl).index();}if(!swiper.lazy.initialImageLoaded)swiper.lazy.initialImageLoaded = true;if(swiper.params.watchSlidesVisibility){$wrapperEl.children('.' + swiperParams.slideVisibleClass).each(function(elIndex,slideEl){var index=isVirtual?(0,_dom7DistDom7Modular.$)(slideEl).attr('data-swiper-slide-index'):(0,_dom7DistDom7Modular.$)(slideEl).index();swiper.lazy.loadInSlide(index);});}else if(slidesPerView > 1){for(var i=activeIndex;i < activeIndex + slidesPerView;i += 1) {if(slideExist(i))swiper.lazy.loadInSlide(i);}}else {swiper.lazy.loadInSlide(activeIndex);}if(params.loadPrevNext){if(slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1){var amount=params.loadPrevNextAmount;var spv=slidesPerView;var maxIndex=Math.min(activeIndex + spv + Math.max(amount,spv),slides.length);var minIndex=Math.max(activeIndex - Math.max(spv,amount),0); // Next Slides
for(var i=activeIndex + slidesPerView;i < maxIndex;i += 1) {if(slideExist(i))swiper.lazy.loadInSlide(i);} // Prev Slides
for(var i=minIndex;i < activeIndex;i += 1) {if(slideExist(i))swiper.lazy.loadInSlide(i);}}else {var nextSlide=$wrapperEl.children('.' + swiperParams.slideNextClass);if(nextSlide.length > 0)swiper.lazy.loadInSlide(slideIndex(nextSlide));var prevSlide=$wrapperEl.children('.' + swiperParams.slidePrevClass);if(prevSlide.length > 0)swiper.lazy.loadInSlide(slideIndex(prevSlide));}}}};var Lazy$1={name:'lazy',params:{lazy:{enabled:false,loadPrevNext:false,loadPrevNextAmount:1,loadOnTransitionStart:false,elementClass:'swiper-lazy',loadingClass:'swiper-lazy-loading',loadedClass:'swiper-lazy-loaded',preloaderClass:'swiper-lazy-preloader'}},create:function create(){var swiper=this;Utils.extend(swiper,{lazy:{initialImageLoaded:false,load:Lazy.load.bind(swiper),loadInSlide:Lazy.loadInSlide.bind(swiper)}});},on:{beforeInit:function beforeInit(){var swiper=this;if(swiper.params.lazy.enabled && swiper.params.preloadImages){swiper.params.preloadImages = false;}},init:function init(){var swiper=this;if(swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0){swiper.lazy.load();}},scroll:function scroll(){var swiper=this;if(swiper.params.freeMode && !swiper.params.freeModeSticky){swiper.lazy.load();}},resize:function resize(){var swiper=this;if(swiper.params.lazy.enabled){swiper.lazy.load();}},scrollbarDragMove:function scrollbarDragMove(){var swiper=this;if(swiper.params.lazy.enabled){swiper.lazy.load();}},transitionStart:function transitionStart(){var swiper=this;if(swiper.params.lazy.enabled){if(swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded){swiper.lazy.load();}}},transitionEnd:function transitionEnd(){var swiper=this;if(swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart){swiper.lazy.load();}},slideChange:function slideChange(){var swiper=this;if(swiper.params.lazy.enabled && swiper.params.cssMode){swiper.lazy.load();}}}}; /* eslint no-bitwise: ["error", { "allow": [">>"] }] */var Controller={LinearSpline:function LinearSpline(x,y){var binarySearch=(function search(){var maxIndex=undefined;var minIndex=undefined;var guess=undefined;return function(array,val){minIndex = -1;maxIndex = array.length;while(maxIndex - minIndex > 1) {guess = maxIndex + minIndex >> 1;if(array[guess] <= val){minIndex = guess;}else {maxIndex = guess;}}return maxIndex;};})();this.x = x;this.y = y;this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
// (x1,y1) is the known point before given value,
// (x3,y3) is the known point after given value.
var i1=undefined;var i3=undefined;this.interpolate = function interpolate(x2){if(!x2)return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):
i3 = binarySearch(this.x,x2);i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
// y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];};return this;}, // xxx: for now i will just save one spline function to to
getInterpolateFunction:function getInterpolateFunction(c){var swiper=this;if(!swiper.controller.spline){swiper.controller.spline = swiper.params.loop?new Controller.LinearSpline(swiper.slidesGrid,c.slidesGrid):new Controller.LinearSpline(swiper.snapGrid,c.snapGrid);}},setTranslate:function setTranslate(_setTranslate,byController){var swiper=this;var controlled=swiper.controller.control;var multiplier=undefined;var controlledTranslate=undefined;function setControlledTranslate(c){ // this will create an Interpolate function based on the snapGrids
// x is the Grid of the scrolled scroller and y will be the controlled scroller
// it makes sense to create this only once and recall it for the interpolation
// the function does a lot of value caching for performance
var translate=swiper.rtlTranslate?-swiper.translate:swiper.translate;if(swiper.params.controller.by === 'slide'){swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
// but it did not work out
controlledTranslate = -swiper.controller.spline.interpolate(-translate);}if(!controlledTranslate || swiper.params.controller.by === 'container'){multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();}if(swiper.params.controller.inverse){controlledTranslate = c.maxTranslate() - controlledTranslate;}c.updateProgress(controlledTranslate);c.setTranslate(controlledTranslate,swiper);c.updateActiveIndex();c.updateSlidesClasses();}if(Array.isArray(controlled)){for(var i=0;i < controlled.length;i += 1) {if(controlled[i] !== byController && controlled[i] instanceof Swiper){setControlledTranslate(controlled[i]);}}}else if(controlled instanceof Swiper && byController !== controlled){setControlledTranslate(controlled);}},setTransition:function setTransition(duration,byController){var swiper=this;var controlled=swiper.controller.control;var i=undefined;function setControlledTransition(c){c.setTransition(duration,swiper);if(duration !== 0){c.transitionStart();if(c.params.autoHeight){Utils.nextTick(function(){c.updateAutoHeight();});}c.$wrapperEl.transitionEnd(function(){if(!controlled)return;if(c.params.loop && swiper.params.controller.by === 'slide'){c.loopFix();}c.transitionEnd();});}}if(Array.isArray(controlled)){for(i = 0;i < controlled.length;i += 1) {if(controlled[i] !== byController && controlled[i] instanceof Swiper){setControlledTransition(controlled[i]);}}}else if(controlled instanceof Swiper && byController !== controlled){setControlledTransition(controlled);}}};var Controller$1={name:'controller',params:{controller:{control:undefined,inverse:false,by:'slide'}}, // or 'container'
create:function create(){var swiper=this;Utils.extend(swiper,{controller:{control:swiper.params.controller.control,getInterpolateFunction:Controller.getInterpolateFunction.bind(swiper),setTranslate:Controller.setTranslate.bind(swiper),setTransition:Controller.setTransition.bind(swiper)}});},on:{update:function update(){var swiper=this;if(!swiper.controller.control)return;if(swiper.controller.spline){swiper.controller.spline = undefined;delete swiper.controller.spline;}},resize:function resize(){var swiper=this;if(!swiper.controller.control)return;if(swiper.controller.spline){swiper.controller.spline = undefined;delete swiper.controller.spline;}},observerUpdate:function observerUpdate(){var swiper=this;if(!swiper.controller.control)return;if(swiper.controller.spline){swiper.controller.spline = undefined;delete swiper.controller.spline;}},setTranslate:function setTranslate(translate,byController){var swiper=this;if(!swiper.controller.control)return;swiper.controller.setTranslate(translate,byController);},setTransition:function setTransition(duration,byController){var swiper=this;if(!swiper.controller.control)return;swiper.controller.setTransition(duration,byController);}}};var a11y={makeElFocusable:function makeElFocusable($el){$el.attr('tabIndex','0');return $el;},addElRole:function addElRole($el,role){$el.attr('role',role);return $el;},addElLabel:function addElLabel($el,label){$el.attr('aria-label',label);return $el;},disableEl:function disableEl($el){$el.attr('aria-disabled',true);return $el;},enableEl:function enableEl($el){$el.attr('aria-disabled',false);return $el;},onEnterKey:function onEnterKey(e){var swiper=this;var params=swiper.params.a11y;if(e.keyCode !== 13)return;var $targetEl=(0,_dom7DistDom7Modular.$)(e.target);if(swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)){if(!(swiper.isEnd && !swiper.params.loop)){swiper.slideNext();}if(swiper.isEnd){swiper.a11y.notify(params.lastSlideMessage);}else {swiper.a11y.notify(params.nextSlideMessage);}}if(swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)){if(!(swiper.isBeginning && !swiper.params.loop)){swiper.slidePrev();}if(swiper.isBeginning){swiper.a11y.notify(params.firstSlideMessage);}else {swiper.a11y.notify(params.prevSlideMessage);}}if(swiper.pagination && $targetEl.is('.' + swiper.params.pagination.bulletClass)){$targetEl[0].click();}},notify:function notify(message){var swiper=this;var notification=swiper.a11y.liveRegion;if(notification.length === 0)return;notification.html('');notification.html(message);},updateNavigation:function updateNavigation(){var swiper=this;if(swiper.params.loop || !swiper.navigation)return;var _swiper$navigation4=swiper.navigation;var $nextEl=_swiper$navigation4.$nextEl;var $prevEl=_swiper$navigation4.$prevEl;if($prevEl && $prevEl.length > 0){if(swiper.isBeginning){swiper.a11y.disableEl($prevEl);}else {swiper.a11y.enableEl($prevEl);}}if($nextEl && $nextEl.length > 0){if(swiper.isEnd){swiper.a11y.disableEl($nextEl);}else {swiper.a11y.enableEl($nextEl);}}},updatePagination:function updatePagination(){var swiper=this;var params=swiper.params.a11y;if(swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length){swiper.pagination.bullets.each(function(bulletIndex,bulletEl){var $bulletEl=(0,_dom7DistDom7Modular.$)(bulletEl);swiper.a11y.makeElFocusable($bulletEl);swiper.a11y.addElRole($bulletEl,'button');swiper.a11y.addElLabel($bulletEl,params.paginationBulletMessage.replace(/\{\{index\}\}/,$bulletEl.index() + 1));});}},init:function init(){var swiper=this;swiper.$el.append(swiper.a11y.liveRegion); // Navigation
var params=swiper.params.a11y;var $nextEl=undefined;var $prevEl=undefined;if(swiper.navigation && swiper.navigation.$nextEl){$nextEl = swiper.navigation.$nextEl;}if(swiper.navigation && swiper.navigation.$prevEl){$prevEl = swiper.navigation.$prevEl;}if($nextEl){swiper.a11y.makeElFocusable($nextEl);swiper.a11y.addElRole($nextEl,'button');swiper.a11y.addElLabel($nextEl,params.nextSlideMessage);$nextEl.on('keydown',swiper.a11y.onEnterKey);}if($prevEl){swiper.a11y.makeElFocusable($prevEl);swiper.a11y.addElRole($prevEl,'button');swiper.a11y.addElLabel($prevEl,params.prevSlideMessage);$prevEl.on('keydown',swiper.a11y.onEnterKey);} // Pagination
if(swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length){swiper.pagination.$el.on('keydown','.' + swiper.params.pagination.bulletClass,swiper.a11y.onEnterKey);}},destroy:function destroy(){var swiper=this;if(swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0)swiper.a11y.liveRegion.remove();var $nextEl=undefined;var $prevEl=undefined;if(swiper.navigation && swiper.navigation.$nextEl){$nextEl = swiper.navigation.$nextEl;}if(swiper.navigation && swiper.navigation.$prevEl){$prevEl = swiper.navigation.$prevEl;}if($nextEl){$nextEl.off('keydown',swiper.a11y.onEnterKey);}if($prevEl){$prevEl.off('keydown',swiper.a11y.onEnterKey);} // Pagination
if(swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length){swiper.pagination.$el.off('keydown','.' + swiper.params.pagination.bulletClass,swiper.a11y.onEnterKey);}}};var A11y={name:'a11y',params:{a11y:{enabled:true,notificationClass:'swiper-notification',prevSlideMessage:'Previous slide',nextSlideMessage:'Next slide',firstSlideMessage:'This is the first slide',lastSlideMessage:'This is the last slide',paginationBulletMessage:'Go to slide {{index}}'}},create:function create(){var swiper=this;Utils.extend(swiper,{a11y:{liveRegion:(0,_dom7DistDom7Modular.$)('<span class="' + swiper.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')}});Object.keys(a11y).forEach(function(methodName){swiper.a11y[methodName] = a11y[methodName].bind(swiper);});},on:{init:function init(){var swiper=this;if(!swiper.params.a11y.enabled)return;swiper.a11y.init();swiper.a11y.updateNavigation();},toEdge:function toEdge(){var swiper=this;if(!swiper.params.a11y.enabled)return;swiper.a11y.updateNavigation();},fromEdge:function fromEdge(){var swiper=this;if(!swiper.params.a11y.enabled)return;swiper.a11y.updateNavigation();},paginationUpdate:function paginationUpdate(){var swiper=this;if(!swiper.params.a11y.enabled)return;swiper.a11y.updatePagination();},destroy:function destroy(){var swiper=this;if(!swiper.params.a11y.enabled)return;swiper.a11y.destroy();}}};var History={init:function init(){var swiper=this;if(!swiper.params.history)return;if(!_ssrWindow.window.history || !_ssrWindow.window.history.pushState){swiper.params.history.enabled = false;swiper.params.hashNavigation.enabled = true;return;}var history=swiper.history;history.initialized = true;history.paths = History.getPathValues();if(!history.paths.key && !history.paths.value)return;history.scrollToSlide(0,history.paths.value,swiper.params.runCallbacksOnInit);if(!swiper.params.history.replaceState){_ssrWindow.window.addEventListener('popstate',swiper.history.setHistoryPopState);}},destroy:function destroy(){var swiper=this;if(!swiper.params.history.replaceState){_ssrWindow.window.removeEventListener('popstate',swiper.history.setHistoryPopState);}},setHistoryPopState:function setHistoryPopState(){var swiper=this;swiper.history.paths = History.getPathValues();swiper.history.scrollToSlide(swiper.params.speed,swiper.history.paths.value,false);},getPathValues:function getPathValues(){var pathArray=_ssrWindow.window.location.pathname.slice(1).split('/').filter(function(part){return part !== '';});var total=pathArray.length;var key=pathArray[total - 2];var value=pathArray[total - 1];return {key:key,value:value};},setHistory:function setHistory(key,index){var swiper=this;if(!swiper.history.initialized || !swiper.params.history.enabled)return;var slide=swiper.slides.eq(index);var value=History.slugify(slide.attr('data-history'));if(!_ssrWindow.window.location.pathname.includes(key)){value = key + '/' + value;}var currentState=_ssrWindow.window.history.state;if(currentState && currentState.value === value){return;}if(swiper.params.history.replaceState){_ssrWindow.window.history.replaceState({value:value},null,value);}else {_ssrWindow.window.history.pushState({value:value},null,value);}},slugify:function slugify(text){return text.toString().replace(/\s+/g,'-').replace(/[^\w-]+/g,'').replace(/--+/g,'-').replace(/^-+/,'').replace(/-+$/,'');},scrollToSlide:function scrollToSlide(speed,value,runCallbacks){var swiper=this;if(value){for(var i=0,_length=swiper.slides.length;i < _length;i += 1) {var _slide3=swiper.slides.eq(i);var slideHistory=History.slugify(_slide3.attr('data-history'));if(slideHistory === value && !_slide3.hasClass(swiper.params.slideDuplicateClass)){var _index2=_slide3.index();swiper.slideTo(_index2,speed,runCallbacks);}}}else {swiper.slideTo(0,speed,runCallbacks);}}};var History$1={name:'history',params:{history:{enabled:false,replaceState:false,key:'slides'}},create:function create(){var swiper=this;Utils.extend(swiper,{history:{init:History.init.bind(swiper),setHistory:History.setHistory.bind(swiper),setHistoryPopState:History.setHistoryPopState.bind(swiper),scrollToSlide:History.scrollToSlide.bind(swiper),destroy:History.destroy.bind(swiper)}});},on:{init:function init(){var swiper=this;if(swiper.params.history.enabled){swiper.history.init();}},destroy:function destroy(){var swiper=this;if(swiper.params.history.enabled){swiper.history.destroy();}},transitionEnd:function transitionEnd(){var swiper=this;if(swiper.history.initialized){swiper.history.setHistory(swiper.params.history.key,swiper.activeIndex);}},slideChange:function slideChange(){var swiper=this;if(swiper.history.initialized && swiper.params.cssMode){swiper.history.setHistory(swiper.params.history.key,swiper.activeIndex);}}}};var HashNavigation={onHashCange:function onHashCange(){var swiper=this;var newHash=_ssrWindow.document.location.hash.replace('#','');var activeSlideHash=swiper.slides.eq(swiper.activeIndex).attr('data-hash');if(newHash !== activeSlideHash){var newIndex=swiper.$wrapperEl.children('.' + swiper.params.slideClass + '[data-hash="' + newHash + '"]').index();if(typeof newIndex === 'undefined')return;swiper.slideTo(newIndex);}},setHash:function setHash(){var swiper=this;if(!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled)return;if(swiper.params.hashNavigation.replaceState && _ssrWindow.window.history && _ssrWindow.window.history.replaceState){_ssrWindow.window.history.replaceState(null,null,'#' + swiper.slides.eq(swiper.activeIndex).attr('data-hash') || '');}else {var _slide4=swiper.slides.eq(swiper.activeIndex);var hash=_slide4.attr('data-hash') || _slide4.attr('data-history');_ssrWindow.document.location.hash = hash || '';}},init:function init(){var swiper=this;if(!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled)return;swiper.hashNavigation.initialized = true;var hash=_ssrWindow.document.location.hash.replace('#','');if(hash){var speed=0;for(var i=0,_length2=swiper.slides.length;i < _length2;i += 1) {var _slide5=swiper.slides.eq(i);var slideHash=_slide5.attr('data-hash') || _slide5.attr('data-history');if(slideHash === hash && !_slide5.hasClass(swiper.params.slideDuplicateClass)){var _index3=_slide5.index();swiper.slideTo(_index3,speed,swiper.params.runCallbacksOnInit,true);}}}if(swiper.params.hashNavigation.watchState){(0,_dom7DistDom7Modular.$)(_ssrWindow.window).on('hashchange',swiper.hashNavigation.onHashCange);}},destroy:function destroy(){var swiper=this;if(swiper.params.hashNavigation.watchState){(0,_dom7DistDom7Modular.$)(_ssrWindow.window).off('hashchange',swiper.hashNavigation.onHashCange);}}};var HashNavigation$1={name:'hash-navigation',params:{hashNavigation:{enabled:false,replaceState:false,watchState:false}},create:function create(){var swiper=this;Utils.extend(swiper,{hashNavigation:{initialized:false,init:HashNavigation.init.bind(swiper),destroy:HashNavigation.destroy.bind(swiper),setHash:HashNavigation.setHash.bind(swiper),onHashCange:HashNavigation.onHashCange.bind(swiper)}});},on:{init:function init(){var swiper=this;if(swiper.params.hashNavigation.enabled){swiper.hashNavigation.init();}},destroy:function destroy(){var swiper=this;if(swiper.params.hashNavigation.enabled){swiper.hashNavigation.destroy();}},transitionEnd:function transitionEnd(){var swiper=this;if(swiper.hashNavigation.initialized){swiper.hashNavigation.setHash();}},slideChange:function slideChange(){var swiper=this;if(swiper.hashNavigation.initialized && swiper.params.cssMode){swiper.hashNavigation.setHash();}}}}; /* eslint no-underscore-dangle: "off" */var Autoplay={run:function run(){var swiper=this;var $activeSlideEl=swiper.slides.eq(swiper.activeIndex);var delay=swiper.params.autoplay.delay;if($activeSlideEl.attr('data-swiper-autoplay')){delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;}clearTimeout(swiper.autoplay.timeout);swiper.autoplay.timeout = Utils.nextTick(function(){if(swiper.params.autoplay.reverseDirection){if(swiper.params.loop){swiper.loopFix();swiper.slidePrev(swiper.params.speed,true,true);swiper.emit('autoplay');}else if(!swiper.isBeginning){swiper.slidePrev(swiper.params.speed,true,true);swiper.emit('autoplay');}else if(!swiper.params.autoplay.stopOnLastSlide){swiper.slideTo(swiper.slides.length - 1,swiper.params.speed,true,true);swiper.emit('autoplay');}else {swiper.autoplay.stop();}}else if(swiper.params.loop){swiper.loopFix();swiper.slideNext(swiper.params.speed,true,true);swiper.emit('autoplay');}else if(!swiper.isEnd){swiper.slideNext(swiper.params.speed,true,true);swiper.emit('autoplay');}else if(!swiper.params.autoplay.stopOnLastSlide){swiper.slideTo(0,swiper.params.speed,true,true);swiper.emit('autoplay');}else {swiper.autoplay.stop();}if(swiper.params.cssMode && swiper.autoplay.running)swiper.autoplay.run();},delay);},start:function start(){var swiper=this;if(typeof swiper.autoplay.timeout !== 'undefined')return false;if(swiper.autoplay.running)return false;swiper.autoplay.running = true;swiper.emit('autoplayStart');swiper.autoplay.run();return true;},stop:function stop(){var swiper=this;if(!swiper.autoplay.running)return false;if(typeof swiper.autoplay.timeout === 'undefined')return false;if(swiper.autoplay.timeout){clearTimeout(swiper.autoplay.timeout);swiper.autoplay.timeout = undefined;}swiper.autoplay.running = false;swiper.emit('autoplayStop');return true;},pause:function pause(speed){var swiper=this;if(!swiper.autoplay.running)return;if(swiper.autoplay.paused)return;if(swiper.autoplay.timeout)clearTimeout(swiper.autoplay.timeout);swiper.autoplay.paused = true;if(speed === 0 || !swiper.params.autoplay.waitForTransition){swiper.autoplay.paused = false;swiper.autoplay.run();}else {swiper.$wrapperEl[0].addEventListener('transitionend',swiper.autoplay.onTransitionEnd);swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd',swiper.autoplay.onTransitionEnd);}}};var Autoplay$1={name:'autoplay',params:{autoplay:{enabled:false,delay:3000,waitForTransition:true,disableOnInteraction:true,stopOnLastSlide:false,reverseDirection:false}},create:function create(){var swiper=this;Utils.extend(swiper,{autoplay:{running:false,paused:false,run:Autoplay.run.bind(swiper),start:Autoplay.start.bind(swiper),stop:Autoplay.stop.bind(swiper),pause:Autoplay.pause.bind(swiper),onVisibilityChange:function onVisibilityChange(){if(document.visibilityState === 'hidden' && swiper.autoplay.running){swiper.autoplay.pause();}if(document.visibilityState === 'visible' && swiper.autoplay.paused){swiper.autoplay.run();swiper.autoplay.paused = false;}},onTransitionEnd:function onTransitionEnd(e){if(!swiper || swiper.destroyed || !swiper.$wrapperEl)return;if(e.target !== this)return;swiper.$wrapperEl[0].removeEventListener('transitionend',swiper.autoplay.onTransitionEnd);swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd',swiper.autoplay.onTransitionEnd);swiper.autoplay.paused = false;if(!swiper.autoplay.running){swiper.autoplay.stop();}else {swiper.autoplay.run();}}}});},on:{init:function init(){var swiper=this;if(swiper.params.autoplay.enabled){swiper.autoplay.start();document.addEventListener('visibilitychange',swiper.autoplay.onVisibilityChange);}},beforeTransitionStart:function beforeTransitionStart(speed,internal){var swiper=this;if(swiper.autoplay.running){if(internal || !swiper.params.autoplay.disableOnInteraction){swiper.autoplay.pause(speed);}else {swiper.autoplay.stop();}}},sliderFirstMove:function sliderFirstMove(){var swiper=this;if(swiper.autoplay.running){if(swiper.params.autoplay.disableOnInteraction){swiper.autoplay.stop();}else {swiper.autoplay.pause();}}},touchEnd:function touchEnd(){var swiper=this;if(swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction){swiper.autoplay.run();}},destroy:function destroy(){var swiper=this;if(swiper.autoplay.running){swiper.autoplay.stop();}document.removeEventListener('visibilitychange',swiper.autoplay.onVisibilityChange);}}};var Fade={setTranslate:function setTranslate(){var swiper=this;var slides=swiper.slides;for(var i=0;i < slides.length;i += 1) {var $slideEl=swiper.slides.eq(i);var _offset=$slideEl[0].swiperSlideOffset;var tx=-_offset;if(!swiper.params.virtualTranslate)tx -= swiper.translate;var ty=0;if(!swiper.isHorizontal()){ty = tx;tx = 0;}var slideOpacity=swiper.params.fadeEffect.crossFade?Math.max(1 - Math.abs($slideEl[0].progress),0):1 + Math.min(Math.max($slideEl[0].progress,-1),0);$slideEl.css({opacity:slideOpacity}).transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');}},setTransition:function setTransition(duration){var swiper=this;var slides=swiper.slides;var $wrapperEl=swiper.$wrapperEl;slides.transition(duration);if(swiper.params.virtualTranslate && duration !== 0){(function(){var eventTriggered=false;slides.transitionEnd(function(){if(eventTriggered)return;if(!swiper || swiper.destroyed)return;eventTriggered = true;swiper.animating = false;var triggerEvents=['webkitTransitionEnd','transitionend'];for(var i=0;i < triggerEvents.length;i += 1) {$wrapperEl.trigger(triggerEvents[i]);}});})();}}};var EffectFade={name:'effect-fade',params:{fadeEffect:{crossFade:false}},create:function create(){var swiper=this;Utils.extend(swiper,{fadeEffect:{setTranslate:Fade.setTranslate.bind(swiper),setTransition:Fade.setTransition.bind(swiper)}});},on:{beforeInit:function beforeInit(){var swiper=this;if(swiper.params.effect !== 'fade')return;swiper.classNames.push(swiper.params.containerModifierClass + 'fade');var overwriteParams={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:true,spaceBetween:0,virtualTranslate:true};Utils.extend(swiper.params,overwriteParams);Utils.extend(swiper.originalParams,overwriteParams);},setTranslate:function setTranslate(){var swiper=this;if(swiper.params.effect !== 'fade')return;swiper.fadeEffect.setTranslate();},setTransition:function setTransition(duration){var swiper=this;if(swiper.params.effect !== 'fade')return;swiper.fadeEffect.setTransition(duration);}}};var Cube={setTranslate:function setTranslate(){var swiper=this;var $el=swiper.$el;var $wrapperEl=swiper.$wrapperEl;var slides=swiper.slides;var swiperWidth=swiper.width;var swiperHeight=swiper.height;var rtl=swiper.rtlTranslate;var swiperSize=swiper.size;var params=swiper.params.cubeEffect;var isHorizontal=swiper.isHorizontal();var isVirtual=swiper.virtual && swiper.params.virtual.enabled;var wrapperRotate=0;var $cubeShadowEl=undefined;if(params.shadow){if(isHorizontal){$cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');if($cubeShadowEl.length === 0){$cubeShadowEl = (0,_dom7DistDom7Modular.$)('<div class="swiper-cube-shadow"></div>');$wrapperEl.append($cubeShadowEl);}$cubeShadowEl.css({height:swiperWidth + 'px'});}else {$cubeShadowEl = $el.find('.swiper-cube-shadow');if($cubeShadowEl.length === 0){$cubeShadowEl = (0,_dom7DistDom7Modular.$)('<div class="swiper-cube-shadow"></div>');$el.append($cubeShadowEl);}}}for(var i=0;i < slides.length;i += 1) {var $slideEl=slides.eq(i);var slideIndex=i;if(isVirtual){slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'),10);}var slideAngle=slideIndex * 90;var round=Math.floor(slideAngle / 360);if(rtl){slideAngle = -slideAngle;round = Math.floor(-slideAngle / 360);}var progress=Math.max(Math.min($slideEl[0].progress,1),-1);var tx=0;var ty=0;var tz=0;if(slideIndex % 4 === 0){tx = -round * 4 * swiperSize;tz = 0;}else if((slideIndex - 1) % 4 === 0){tx = 0;tz = -round * 4 * swiperSize;}else if((slideIndex - 2) % 4 === 0){tx = swiperSize + round * 4 * swiperSize;tz = swiperSize;}else if((slideIndex - 3) % 4 === 0){tx = -swiperSize;tz = 3 * swiperSize + swiperSize * 4 * round;}if(rtl){tx = -tx;}if(!isHorizontal){ty = tx;tx = 0;}var _transform='rotateX(' + (isHorizontal?0:-slideAngle) + 'deg) rotateY(' + (isHorizontal?slideAngle:0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';if(progress <= 1 && progress > -1){wrapperRotate = slideIndex * 90 + progress * 90;if(rtl)wrapperRotate = -slideIndex * 90 - progress * 90;}$slideEl.transform(_transform);if(params.slideShadows){ // Set shadows
var shadowBefore=isHorizontal?$slideEl.find('.swiper-slide-shadow-left'):$slideEl.find('.swiper-slide-shadow-top');var shadowAfter=isHorizontal?$slideEl.find('.swiper-slide-shadow-right'):$slideEl.find('.swiper-slide-shadow-bottom');if(shadowBefore.length === 0){shadowBefore = (0,_dom7DistDom7Modular.$)('<div class="swiper-slide-shadow-' + (isHorizontal?'left':'top') + '"></div>');$slideEl.append(shadowBefore);}if(shadowAfter.length === 0){shadowAfter = (0,_dom7DistDom7Modular.$)('<div class="swiper-slide-shadow-' + (isHorizontal?'right':'bottom') + '"></div>');$slideEl.append(shadowAfter);}if(shadowBefore.length)shadowBefore[0].style.opacity = Math.max(-progress,0);if(shadowAfter.length)shadowAfter[0].style.opacity = Math.max(progress,0);}}$wrapperEl.css({'-webkit-transform-origin':'50% 50% -' + swiperSize / 2 + 'px','-moz-transform-origin':'50% 50% -' + swiperSize / 2 + 'px','-ms-transform-origin':'50% 50% -' + swiperSize / 2 + 'px','transform-origin':'50% 50% -' + swiperSize / 2 + 'px'});if(params.shadow){if(isHorizontal){$cubeShadowEl.transform('translate3d(0px, ' + (swiperWidth / 2 + params.shadowOffset) + 'px, ' + -swiperWidth / 2 + 'px) rotateX(90deg) rotateZ(0deg) scale(' + params.shadowScale + ')');}else {var shadowAngle=Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;var multiplier=1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);var scale1=params.shadowScale;var scale2=params.shadowScale / multiplier;var _offset2=params.shadowOffset;$cubeShadowEl.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (swiperHeight / 2 + _offset2) + 'px, ' + -swiperHeight / 2 / scale2 + 'px) rotateX(-90deg)');}}var zFactor=Browser.isSafari || Browser.isUiWebView?-swiperSize / 2:0;$wrapperEl.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (swiper.isHorizontal()?0:wrapperRotate) + 'deg) rotateY(' + (swiper.isHorizontal()?-wrapperRotate:0) + 'deg)');},setTransition:function setTransition(duration){var swiper=this;var $el=swiper.$el;var slides=swiper.slides;slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);if(swiper.params.cubeEffect.shadow && !swiper.isHorizontal()){$el.find('.swiper-cube-shadow').transition(duration);}}};var EffectCube={name:'effect-cube',params:{cubeEffect:{slideShadows:true,shadow:true,shadowOffset:20,shadowScale:0.94}},create:function create(){var swiper=this;Utils.extend(swiper,{cubeEffect:{setTranslate:Cube.setTranslate.bind(swiper),setTransition:Cube.setTransition.bind(swiper)}});},on:{beforeInit:function beforeInit(){var swiper=this;if(swiper.params.effect !== 'cube')return;swiper.classNames.push(swiper.params.containerModifierClass + 'cube');swiper.classNames.push(swiper.params.containerModifierClass + '3d');var overwriteParams={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:true,resistanceRatio:0,spaceBetween:0,centeredSlides:false,virtualTranslate:true};Utils.extend(swiper.params,overwriteParams);Utils.extend(swiper.originalParams,overwriteParams);},setTranslate:function setTranslate(){var swiper=this;if(swiper.params.effect !== 'cube')return;swiper.cubeEffect.setTranslate();},setTransition:function setTransition(duration){var swiper=this;if(swiper.params.effect !== 'cube')return;swiper.cubeEffect.setTransition(duration);}}};var Flip={setTranslate:function setTranslate(){var swiper=this;var slides=swiper.slides;var rtl=swiper.rtlTranslate;for(var i=0;i < slides.length;i += 1) {var $slideEl=slides.eq(i);var progress=$slideEl[0].progress;if(swiper.params.flipEffect.limitRotation){progress = Math.max(Math.min($slideEl[0].progress,1),-1);}var _offset3=$slideEl[0].swiperSlideOffset;var rotate=-180 * progress;var rotateY=rotate;var rotateX=0;var tx=-_offset3;var ty=0;if(!swiper.isHorizontal()){ty = tx;tx = 0;rotateX = -rotateY;rotateY = 0;}else if(rtl){rotateY = -rotateY;}$slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;if(swiper.params.flipEffect.slideShadows){ // Set shadows
var shadowBefore=swiper.isHorizontal()?$slideEl.find('.swiper-slide-shadow-left'):$slideEl.find('.swiper-slide-shadow-top');var shadowAfter=swiper.isHorizontal()?$slideEl.find('.swiper-slide-shadow-right'):$slideEl.find('.swiper-slide-shadow-bottom');if(shadowBefore.length === 0){shadowBefore = (0,_dom7DistDom7Modular.$)('<div class="swiper-slide-shadow-' + (swiper.isHorizontal()?'left':'top') + '"></div>');$slideEl.append(shadowBefore);}if(shadowAfter.length === 0){shadowAfter = (0,_dom7DistDom7Modular.$)('<div class="swiper-slide-shadow-' + (swiper.isHorizontal()?'right':'bottom') + '"></div>');$slideEl.append(shadowAfter);}if(shadowBefore.length)shadowBefore[0].style.opacity = Math.max(-progress,0);if(shadowAfter.length)shadowAfter[0].style.opacity = Math.max(progress,0);}$slideEl.transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');}},setTransition:function setTransition(duration){var swiper=this;var slides=swiper.slides;var activeIndex=swiper.activeIndex;var $wrapperEl=swiper.$wrapperEl;slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);if(swiper.params.virtualTranslate && duration !== 0){(function(){var eventTriggered=false; // eslint-disable-next-line
slides.eq(activeIndex).transitionEnd(function onTransitionEnd(){if(eventTriggered)return;if(!swiper || swiper.destroyed)return; // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
eventTriggered = true;swiper.animating = false;var triggerEvents=['webkitTransitionEnd','transitionend'];for(var i=0;i < triggerEvents.length;i += 1) {$wrapperEl.trigger(triggerEvents[i]);}});})();}}};var EffectFlip={name:'effect-flip',params:{flipEffect:{slideShadows:true,limitRotation:true}},create:function create(){var swiper=this;Utils.extend(swiper,{flipEffect:{setTranslate:Flip.setTranslate.bind(swiper),setTransition:Flip.setTransition.bind(swiper)}});},on:{beforeInit:function beforeInit(){var swiper=this;if(swiper.params.effect !== 'flip')return;swiper.classNames.push(swiper.params.containerModifierClass + 'flip');swiper.classNames.push(swiper.params.containerModifierClass + '3d');var overwriteParams={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:true,spaceBetween:0,virtualTranslate:true};Utils.extend(swiper.params,overwriteParams);Utils.extend(swiper.originalParams,overwriteParams);},setTranslate:function setTranslate(){var swiper=this;if(swiper.params.effect !== 'flip')return;swiper.flipEffect.setTranslate();},setTransition:function setTransition(duration){var swiper=this;if(swiper.params.effect !== 'flip')return;swiper.flipEffect.setTransition(duration);}}};var Coverflow={setTranslate:function setTranslate(){var swiper=this;var swiperWidth=swiper.width;var swiperHeight=swiper.height;var slides=swiper.slides;var $wrapperEl=swiper.$wrapperEl;var slidesSizesGrid=swiper.slidesSizesGrid;var params=swiper.params.coverflowEffect;var isHorizontal=swiper.isHorizontal();var transform=swiper.translate;var center=isHorizontal?-transform + swiperWidth / 2:-transform + swiperHeight / 2;var rotate=isHorizontal?params.rotate:-params.rotate;var translate=params.depth; // Each slide offset from center
for(var i=0,_length3=slides.length;i < _length3;i += 1) {var $slideEl=slides.eq(i);var slideSize=slidesSizesGrid[i];var slideOffset=$slideEl[0].swiperSlideOffset;var offsetMultiplier=(center - slideOffset - slideSize / 2) / slideSize * params.modifier;var rotateY=isHorizontal?rotate * offsetMultiplier:0;var rotateX=isHorizontal?0:rotate * offsetMultiplier; // var rotateZ = 0
var translateZ=-translate * Math.abs(offsetMultiplier);var stretch=params.stretch; // Allow percentage to make a relative stretch for responsive sliders
if(typeof stretch === 'string' && stretch.indexOf('%') !== -1){stretch = parseFloat(params.stretch) / 100 * slideSize;}var translateY=isHorizontal?0:stretch * offsetMultiplier;var translateX=isHorizontal?stretch * offsetMultiplier:0; // Fix for ultra small values
if(Math.abs(translateX) < 0.001)translateX = 0;if(Math.abs(translateY) < 0.001)translateY = 0;if(Math.abs(translateZ) < 0.001)translateZ = 0;if(Math.abs(rotateY) < 0.001)rotateY = 0;if(Math.abs(rotateX) < 0.001)rotateX = 0;var slideTransform='translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';$slideEl.transform(slideTransform);$slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;if(params.slideShadows){ // Set shadows
var $shadowBeforeEl=isHorizontal?$slideEl.find('.swiper-slide-shadow-left'):$slideEl.find('.swiper-slide-shadow-top');var $shadowAfterEl=isHorizontal?$slideEl.find('.swiper-slide-shadow-right'):$slideEl.find('.swiper-slide-shadow-bottom');if($shadowBeforeEl.length === 0){$shadowBeforeEl = (0,_dom7DistDom7Modular.$)('<div class="swiper-slide-shadow-' + (isHorizontal?'left':'top') + '"></div>');$slideEl.append($shadowBeforeEl);}if($shadowAfterEl.length === 0){$shadowAfterEl = (0,_dom7DistDom7Modular.$)('<div class="swiper-slide-shadow-' + (isHorizontal?'right':'bottom') + '"></div>');$slideEl.append($shadowAfterEl);}if($shadowBeforeEl.length)$shadowBeforeEl[0].style.opacity = offsetMultiplier > 0?offsetMultiplier:0;if($shadowAfterEl.length)$shadowAfterEl[0].style.opacity = -offsetMultiplier > 0?-offsetMultiplier:0;}} // Set correct perspective for IE10
if(Support.pointerEvents || Support.prefixedPointerEvents){var ws=$wrapperEl[0].style;ws.perspectiveOrigin = center + 'px 50%';}},setTransition:function setTransition(duration){var swiper=this;swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);}};var EffectCoverflow={name:'effect-coverflow',params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:true}},create:function create(){var swiper=this;Utils.extend(swiper,{coverflowEffect:{setTranslate:Coverflow.setTranslate.bind(swiper),setTransition:Coverflow.setTransition.bind(swiper)}});},on:{beforeInit:function beforeInit(){var swiper=this;if(swiper.params.effect !== 'coverflow')return;swiper.classNames.push(swiper.params.containerModifierClass + 'coverflow');swiper.classNames.push(swiper.params.containerModifierClass + '3d');swiper.params.watchSlidesProgress = true;swiper.originalParams.watchSlidesProgress = true;},setTranslate:function setTranslate(){var swiper=this;if(swiper.params.effect !== 'coverflow')return;swiper.coverflowEffect.setTranslate();},setTransition:function setTransition(duration){var swiper=this;if(swiper.params.effect !== 'coverflow')return;swiper.coverflowEffect.setTransition(duration);}}};var Thumbs={init:function init(){var swiper=this;var thumbsParams=swiper.params.thumbs;var SwiperClass=swiper.constructor;if(thumbsParams.swiper instanceof SwiperClass){swiper.thumbs.swiper = thumbsParams.swiper;Utils.extend(swiper.thumbs.swiper.originalParams,{watchSlidesProgress:true,slideToClickedSlide:false});Utils.extend(swiper.thumbs.swiper.params,{watchSlidesProgress:true,slideToClickedSlide:false});}else if(Utils.isObject(thumbsParams.swiper)){swiper.thumbs.swiper = new SwiperClass(Utils.extend({},thumbsParams.swiper,{watchSlidesVisibility:true,watchSlidesProgress:true,slideToClickedSlide:false}));swiper.thumbs.swiperCreated = true;}swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);swiper.thumbs.swiper.on('tap',swiper.thumbs.onThumbClick);},onThumbClick:function onThumbClick(){var swiper=this;var thumbsSwiper=swiper.thumbs.swiper;if(!thumbsSwiper)return;var clickedIndex=thumbsSwiper.clickedIndex;var clickedSlide=thumbsSwiper.clickedSlide;if(clickedSlide && (0,_dom7DistDom7Modular.$)(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass))return;if(typeof clickedIndex === 'undefined' || clickedIndex === null)return;var slideToIndex=undefined;if(thumbsSwiper.params.loop){slideToIndex = parseInt((0,_dom7DistDom7Modular.$)(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'),10);}else {slideToIndex = clickedIndex;}if(swiper.params.loop){var currentIndex=swiper.activeIndex;if(swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)){swiper.loopFix(); // eslint-disable-next-line
swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;currentIndex = swiper.activeIndex;}var prevIndex=swiper.slides.eq(currentIndex).prevAll('[data-swiper-slide-index="' + slideToIndex + '"]').eq(0).index();var nextIndex=swiper.slides.eq(currentIndex).nextAll('[data-swiper-slide-index="' + slideToIndex + '"]').eq(0).index();if(typeof prevIndex === 'undefined')slideToIndex = nextIndex;else if(typeof nextIndex === 'undefined')slideToIndex = prevIndex;else if(nextIndex - currentIndex < currentIndex - prevIndex)slideToIndex = nextIndex;else slideToIndex = prevIndex;}swiper.slideTo(slideToIndex);},update:function update(initial){var swiper=this;var thumbsSwiper=swiper.thumbs.swiper;if(!thumbsSwiper)return;var slidesPerView=thumbsSwiper.params.slidesPerView === 'auto'?thumbsSwiper.slidesPerViewDynamic():thumbsSwiper.params.slidesPerView;var autoScrollOffset=swiper.params.thumbs.autoScrollOffset;var useOffset=autoScrollOffset && !thumbsSwiper.params.loop;if(swiper.realIndex !== thumbsSwiper.realIndex || useOffset){var currentThumbsIndex=thumbsSwiper.activeIndex;var newThumbsIndex=undefined;var direction=undefined;if(thumbsSwiper.params.loop){if(thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)){thumbsSwiper.loopFix(); // eslint-disable-next-line
thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;currentThumbsIndex = thumbsSwiper.activeIndex;} // Find actual thumbs index to slide to
var prevThumbsIndex=thumbsSwiper.slides.eq(currentThumbsIndex).prevAll('[data-swiper-slide-index="' + swiper.realIndex + '"]').eq(0).index();var nextThumbsIndex=thumbsSwiper.slides.eq(currentThumbsIndex).nextAll('[data-swiper-slide-index="' + swiper.realIndex + '"]').eq(0).index();if(typeof prevThumbsIndex === 'undefined')newThumbsIndex = nextThumbsIndex;else if(typeof nextThumbsIndex === 'undefined')newThumbsIndex = prevThumbsIndex;else if(nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex)newThumbsIndex = currentThumbsIndex;else if(nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex)newThumbsIndex = nextThumbsIndex;else newThumbsIndex = prevThumbsIndex;direction = swiper.activeIndex > swiper.previousIndex?'next':'prev';}else {newThumbsIndex = swiper.realIndex;direction = newThumbsIndex > swiper.previousIndex?'next':'prev';}if(useOffset){newThumbsIndex += direction === 'next'?autoScrollOffset:-1 * autoScrollOffset;}if(thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0){if(thumbsSwiper.params.centeredSlides){if(newThumbsIndex > currentThumbsIndex){newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;}else {newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;}}else if(newThumbsIndex > currentThumbsIndex){newThumbsIndex = newThumbsIndex - slidesPerView + 1;}thumbsSwiper.slideTo(newThumbsIndex,initial?0:undefined);}} // Activate thumbs
var thumbsToActivate=1;var thumbActiveClass=swiper.params.thumbs.slideThumbActiveClass;if(swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides){thumbsToActivate = swiper.params.slidesPerView;}if(!swiper.params.thumbs.multipleActiveThumbs){thumbsToActivate = 1;}thumbsToActivate = Math.floor(thumbsToActivate);thumbsSwiper.slides.removeClass(thumbActiveClass);if(thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled){for(var i=0;i < thumbsToActivate;i += 1) {thumbsSwiper.$wrapperEl.children('[data-swiper-slide-index="' + (swiper.realIndex + i) + '"]').addClass(thumbActiveClass);}}else {for(var i=0;i < thumbsToActivate;i += 1) {thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);}}}};var Thumbs$1={name:'thumbs',params:{thumbs:{swiper:null,multipleActiveThumbs:true,autoScrollOffset:0,slideThumbActiveClass:'swiper-slide-thumb-active',thumbsContainerClass:'swiper-container-thumbs'}},create:function create(){var swiper=this;Utils.extend(swiper,{thumbs:{swiper:null,init:Thumbs.init.bind(swiper),update:Thumbs.update.bind(swiper),onThumbClick:Thumbs.onThumbClick.bind(swiper)}});},on:{beforeInit:function beforeInit(){var swiper=this;var thumbs=swiper.params.thumbs;if(!thumbs || !thumbs.swiper)return;swiper.thumbs.init();swiper.thumbs.update(true);},slideChange:function slideChange(){var swiper=this;if(!swiper.thumbs.swiper)return;swiper.thumbs.update();},update:function update(){var swiper=this;if(!swiper.thumbs.swiper)return;swiper.thumbs.update();},resize:function resize(){var swiper=this;if(!swiper.thumbs.swiper)return;swiper.thumbs.update();},observerUpdate:function observerUpdate(){var swiper=this;if(!swiper.thumbs.swiper)return;swiper.thumbs.update();},setTransition:function setTransition(duration){var swiper=this;var thumbsSwiper=swiper.thumbs.swiper;if(!thumbsSwiper)return;thumbsSwiper.setTransition(duration);},beforeDestroy:function beforeDestroy(){var swiper=this;var thumbsSwiper=swiper.thumbs.swiper;if(!thumbsSwiper)return;if(swiper.thumbs.swiperCreated && thumbsSwiper){thumbsSwiper.destroy();}}}}; // Swiper Class
var components=[Device$1,Support$1,Browser$1,Resize,Observer$1,Virtual$1,Keyboard$1,Mousewheel$1,Navigation$1,Pagination$1,Scrollbar$1,Parallax$1,Zoom$1,Lazy$1,Controller$1,A11y,History$1,HashNavigation$1,Autoplay$1,EffectFade,EffectCube,EffectFlip,EffectCoverflow,Thumbs$1];if(typeof Swiper.use === 'undefined'){Swiper.use = Swiper.Class.use;Swiper.installModule = Swiper.Class.installModule;}Swiper.use(components);exports['default'] = Swiper; //# sourceMappingURL=swiper.esm.bundle.js.map
module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.4.7 */



(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Tether = factory();
  }
})(undefined, function () {

  'use strict';

  var _createClass = (function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  })();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  var TetherBase = undefined;
  if (typeof TetherBase === 'undefined') {
    TetherBase = { modules: [] };
  }

  var zeroElement = null;

  // Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
  // if the element lies within a nested document (<frame> or <iframe>-like).
  function getActualBoundingClientRect(node) {
    var boundingRect = node.getBoundingClientRect();

    // The original object returned by getBoundingClientRect is immutable, so we clone it
    // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
    var rect = {};
    for (var k in boundingRect) {
      rect[k] = boundingRect[k];
    }

    try {
      if (node.ownerDocument !== document) {
        var _frameElement = node.ownerDocument.defaultView.frameElement;
        if (_frameElement) {
          var frameRect = getActualBoundingClientRect(_frameElement);
          rect.top += frameRect.top;
          rect.bottom += frameRect.top;
          rect.left += frameRect.left;
          rect.right += frameRect.left;
        }
      }
    } catch (err) {
      // Ignore "Access is denied" in IE11/Edge
    }

    return rect;
  }

  function getScrollParents(el) {
    // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
    // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    var computedStyle = getComputedStyle(el) || {};
    var position = computedStyle.position;
    var parents = [];

    if (position === 'fixed') {
      return [el];
    }

    var parent = el;
    while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
      var style = undefined;
      try {
        style = getComputedStyle(parent);
      } catch (err) {}

      if (typeof style === 'undefined' || style === null) {
        parents.push(parent);
        return parents;
      }

      var _style = style;
      var overflow = _style.overflow;
      var overflowX = _style.overflowX;
      var overflowY = _style.overflowY;

      if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
        if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
          parents.push(parent);
        }
      }
    }

    parents.push(el.ownerDocument.body);

    // If the node is within a frame, account for the parent window scroll
    if (el.ownerDocument !== document) {
      parents.push(el.ownerDocument.defaultView);
    }

    return parents;
  }

  var uniqueId = (function () {
    var id = 0;
    return function () {
      return ++id;
    };
  })();

  var zeroPosCache = {};
  var getOrigin = function getOrigin() {
    // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
    // jitter as the user scrolls that messes with our ability to detect if two positions
    // are equivilant or not.  We place an element at the top left of the page that will
    // get the same jitter, so we can cancel the two out.
    var node = zeroElement;
    if (!node || !document.body.contains(node)) {
      node = document.createElement('div');
      node.setAttribute('data-tether-id', uniqueId());
      extend(node.style, {
        top: 0,
        left: 0,
        position: 'absolute'
      });

      document.body.appendChild(node);

      zeroElement = node;
    }

    var id = node.getAttribute('data-tether-id');
    if (typeof zeroPosCache[id] === 'undefined') {
      zeroPosCache[id] = getActualBoundingClientRect(node);

      // Clear the cache when this position call is done
      defer(function () {
        delete zeroPosCache[id];
      });
    }

    return zeroPosCache[id];
  };

  function removeUtilElements() {
    if (zeroElement) {
      document.body.removeChild(zeroElement);
    }
    zeroElement = null;
  };

  function getBounds(el) {
    var doc = undefined;
    if (el === document) {
      doc = document;
      el = document.documentElement;
    } else {
      doc = el.ownerDocument;
    }

    var docEl = doc.documentElement;

    var box = getActualBoundingClientRect(el);

    var origin = getOrigin();

    box.top -= origin.top;
    box.left -= origin.left;

    if (typeof box.width === 'undefined') {
      box.width = document.body.scrollWidth - box.left - box.right;
    }
    if (typeof box.height === 'undefined') {
      box.height = document.body.scrollHeight - box.top - box.bottom;
    }

    box.top = box.top - docEl.clientTop;
    box.left = box.left - docEl.clientLeft;
    box.right = doc.body.clientWidth - box.width - box.left;
    box.bottom = doc.body.clientHeight - box.height - box.top;

    return box;
  }

  function getOffsetParent(el) {
    return el.offsetParent || document.documentElement;
  }

  var _scrollBarSize = null;
  function getScrollBarSize() {
    if (_scrollBarSize) {
      return _scrollBarSize;
    }
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';

    var outer = document.createElement('div');
    extend(outer.style, {
      position: 'absolute',
      top: 0,
      left: 0,
      pointerEvents: 'none',
      visibility: 'hidden',
      width: '200px',
      height: '150px',
      overflow: 'hidden'
    });

    outer.appendChild(inner);

    document.body.appendChild(outer);

    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);

    var width = widthContained - widthScroll;

    _scrollBarSize = { width: width, height: width };
    return _scrollBarSize;
  }

  function extend() {
    var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var args = [];

    Array.prototype.push.apply(args, arguments);

    args.slice(1).forEach(function (obj) {
      if (obj) {
        for (var key in obj) {
          if (({}).hasOwnProperty.call(obj, key)) {
            out[key] = obj[key];
          }
        }
      }
    });

    return out;
  }

  function removeClass(el, name) {
    if (typeof el.classList !== 'undefined') {
      name.split(' ').forEach(function (cls) {
        if (cls.trim()) {
          el.classList.remove(cls);
        }
      });
    } else {
      var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
      var className = getClassName(el).replace(regex, ' ');
      setClassName(el, className);
    }
  }

  function addClass(el, name) {
    if (typeof el.classList !== 'undefined') {
      name.split(' ').forEach(function (cls) {
        if (cls.trim()) {
          el.classList.add(cls);
        }
      });
    } else {
      removeClass(el, name);
      var cls = getClassName(el) + (' ' + name);
      setClassName(el, cls);
    }
  }

  function hasClass(el, name) {
    if (typeof el.classList !== 'undefined') {
      return el.classList.contains(name);
    }
    var className = getClassName(el);
    return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
  }

  function getClassName(el) {
    // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
    // completely separately SVGAnimatedString base classes
    if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
      return el.className.baseVal;
    }
    return el.className;
  }

  function setClassName(el, className) {
    el.setAttribute('class', className);
  }

  function updateClasses(el, add, all) {
    // Of the set of 'all' classes, we need the 'add' classes, and only the
    // 'add' classes to be set.
    all.forEach(function (cls) {
      if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
        removeClass(el, cls);
      }
    });

    add.forEach(function (cls) {
      if (!hasClass(el, cls)) {
        addClass(el, cls);
      }
    });
  }

  var deferred = [];

  var defer = function defer(fn) {
    deferred.push(fn);
  };

  var flush = function flush() {
    var fn = undefined;
    while (fn = deferred.pop()) {
      fn();
    }
  };

  var Evented = (function () {
    function Evented() {
      _classCallCheck(this, Evented);
    }

    _createClass(Evented, [{
      key: 'on',
      value: function on(event, handler, ctx) {
        var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

        if (typeof this.bindings === 'undefined') {
          this.bindings = {};
        }
        if (typeof this.bindings[event] === 'undefined') {
          this.bindings[event] = [];
        }
        this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
      }
    }, {
      key: 'once',
      value: function once(event, handler, ctx) {
        this.on(event, handler, ctx, true);
      }
    }, {
      key: 'off',
      value: function off(event, handler) {
        if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
          return;
        }

        if (typeof handler === 'undefined') {
          delete this.bindings[event];
        } else {
          var i = 0;
          while (i < this.bindings[event].length) {
            if (this.bindings[event][i].handler === handler) {
              this.bindings[event].splice(i, 1);
            } else {
              ++i;
            }
          }
        }
      }
    }, {
      key: 'trigger',
      value: function trigger(event) {
        if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
          var i = 0;

          for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          while (i < this.bindings[event].length) {
            var _bindings$event$i = this.bindings[event][i];
            var handler = _bindings$event$i.handler;
            var ctx = _bindings$event$i.ctx;
            var once = _bindings$event$i.once;

            var context = ctx;
            if (typeof context === 'undefined') {
              context = this;
            }

            handler.apply(context, args);

            if (once) {
              this.bindings[event].splice(i, 1);
            } else {
              ++i;
            }
          }
        }
      }
    }]);

    return Evented;
  })();

  TetherBase.Utils = {
    getActualBoundingClientRect: getActualBoundingClientRect,
    getScrollParents: getScrollParents,
    getBounds: getBounds,
    getOffsetParent: getOffsetParent,
    extend: extend,
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    updateClasses: updateClasses,
    defer: defer,
    flush: flush,
    uniqueId: uniqueId,
    Evented: Evented,
    getScrollBarSize: getScrollBarSize,
    removeUtilElements: removeUtilElements
  };
  /* globals TetherBase, performance */

  'use strict';

  var _slicedToArray = (function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  })();

  var _createClass = (function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  })();

  var _get = function get(_x6, _x7, _x8) {
    var _again = true;_function: while (_again) {
      var object = _x6,
          property = _x7,
          receiver = _x8;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);if (parent === null) {
          return undefined;
        } else {
          _x6 = parent;_x7 = property;_x8 = receiver;_again = true;desc = parent = undefined;continue _function;
        }
      } else if ('value' in desc) {
        return desc.value;
      } else {
        var getter = desc.get;if (getter === undefined) {
          return undefined;
        }return getter.call(receiver);
      }
    }
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  if (typeof TetherBase === 'undefined') {
    throw new Error('You must include the utils.js file before tether.js');
  }

  var _TetherBase$Utils = TetherBase.Utils;
  var getScrollParents = _TetherBase$Utils.getScrollParents;
  var getBounds = _TetherBase$Utils.getBounds;
  var getOffsetParent = _TetherBase$Utils.getOffsetParent;
  var extend = _TetherBase$Utils.extend;
  var addClass = _TetherBase$Utils.addClass;
  var removeClass = _TetherBase$Utils.removeClass;
  var updateClasses = _TetherBase$Utils.updateClasses;
  var defer = _TetherBase$Utils.defer;
  var flush = _TetherBase$Utils.flush;
  var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
  var removeUtilElements = _TetherBase$Utils.removeUtilElements;

  function within(a, b) {
    var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

    return a + diff >= b && b >= a - diff;
  }

  var transformKey = (function () {
    if (typeof document === 'undefined') {
      return '';
    }
    var el = document.createElement('div');

    var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
    for (var i = 0; i < transforms.length; ++i) {
      var key = transforms[i];
      if (el.style[key] !== undefined) {
        return key;
      }
    }
  })();

  var tethers = [];

  var position = function position() {
    tethers.forEach(function (tether) {
      tether.position(false);
    });
    flush();
  };

  function now() {
    if (typeof performance === 'object' && typeof performance.now === 'function') {
      return performance.now();
    }
    return +new Date();
  }

  (function () {
    var lastCall = null;
    var lastDuration = null;
    var pendingTimeout = null;

    var tick = function tick() {
      if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
        // We voluntarily throttle ourselves if we can't manage 60fps
        lastDuration = Math.min(lastDuration - 16, 250);

        // Just in case this is the last event, remember to position just once more
        pendingTimeout = setTimeout(tick, 250);
        return;
      }

      if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
        // Some browsers call events a little too frequently, refuse to run more than is reasonable
        return;
      }

      if (pendingTimeout != null) {
        clearTimeout(pendingTimeout);
        pendingTimeout = null;
      }

      lastCall = now();
      position();
      lastDuration = now() - lastCall;
    };

    if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
      ['resize', 'scroll', 'touchmove'].forEach(function (event) {
        window.addEventListener(event, tick);
      });
    }
  })();

  var MIRROR_LR = {
    center: 'center',
    left: 'right',
    right: 'left'
  };

  var MIRROR_TB = {
    middle: 'middle',
    top: 'bottom',
    bottom: 'top'
  };

  var OFFSET_MAP = {
    top: 0,
    left: 0,
    middle: '50%',
    center: '50%',
    bottom: '100%',
    right: '100%'
  };

  var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
    var left = attachment.left;
    var top = attachment.top;

    if (left === 'auto') {
      left = MIRROR_LR[relativeToAttachment.left];
    }

    if (top === 'auto') {
      top = MIRROR_TB[relativeToAttachment.top];
    }

    return { left: left, top: top };
  };

  var attachmentToOffset = function attachmentToOffset(attachment) {
    var left = attachment.left;
    var top = attachment.top;

    if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
      left = OFFSET_MAP[attachment.left];
    }

    if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
      top = OFFSET_MAP[attachment.top];
    }

    return { left: left, top: top };
  };

  function addOffset() {
    var out = { top: 0, left: 0 };

    for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
      offsets[_key] = arguments[_key];
    }

    offsets.forEach(function (_ref) {
      var top = _ref.top;
      var left = _ref.left;

      if (typeof top === 'string') {
        top = parseFloat(top, 10);
      }
      if (typeof left === 'string') {
        left = parseFloat(left, 10);
      }

      out.top += top;
      out.left += left;
    });

    return out;
  }

  function offsetToPx(offset, size) {
    if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
      offset.left = parseFloat(offset.left, 10) / 100 * size.width;
    }
    if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
      offset.top = parseFloat(offset.top, 10) / 100 * size.height;
    }

    return offset;
  }

  var parseOffset = function parseOffset(value) {
    var _value$split = value.split(' ');

    var _value$split2 = _slicedToArray(_value$split, 2);

    var top = _value$split2[0];
    var left = _value$split2[1];

    return { top: top, left: left };
  };
  var parseAttachment = parseOffset;

  var TetherClass = (function (_Evented) {
    _inherits(TetherClass, _Evented);

    function TetherClass(options) {
      var _this = this;

      _classCallCheck(this, TetherClass);

      _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
      this.position = this.position.bind(this);

      tethers.push(this);

      this.history = [];

      this.setOptions(options, false);

      TetherBase.modules.forEach(function (module) {
        if (typeof module.initialize !== 'undefined') {
          module.initialize.call(_this);
        }
      });

      this.position();
    }

    _createClass(TetherClass, [{
      key: 'getClass',
      value: function getClass() {
        var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
        var classes = this.options.classes;

        if (typeof classes !== 'undefined' && classes[key]) {
          return this.options.classes[key];
        } else if (this.options.classPrefix) {
          return this.options.classPrefix + '-' + key;
        } else {
          return key;
        }
      }
    }, {
      key: 'setOptions',
      value: function setOptions(options) {
        var _this2 = this;

        var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

        var defaults = {
          offset: '0 0',
          targetOffset: '0 0',
          targetAttachment: 'auto auto',
          classPrefix: 'tether'
        };

        this.options = extend(defaults, options);

        var _options = this.options;
        var element = _options.element;
        var target = _options.target;
        var targetModifier = _options.targetModifier;

        this.element = element;
        this.target = target;
        this.targetModifier = targetModifier;

        if (this.target === 'viewport') {
          this.target = document.body;
          this.targetModifier = 'visible';
        } else if (this.target === 'scroll-handle') {
          this.target = document.body;
          this.targetModifier = 'scroll-handle';
        }

        ['element', 'target'].forEach(function (key) {
          if (typeof _this2[key] === 'undefined') {
            throw new Error('Tether Error: Both element and target must be defined');
          }

          if (typeof _this2[key].jquery !== 'undefined') {
            _this2[key] = _this2[key][0];
          } else if (typeof _this2[key] === 'string') {
            _this2[key] = document.querySelector(_this2[key]);
          }
        });

        addClass(this.element, this.getClass('element'));
        if (!(this.options.addTargetClasses === false)) {
          addClass(this.target, this.getClass('target'));
        }

        if (!this.options.attachment) {
          throw new Error('Tether Error: You must provide an attachment');
        }

        this.targetAttachment = parseAttachment(this.options.targetAttachment);
        this.attachment = parseAttachment(this.options.attachment);
        this.offset = parseOffset(this.options.offset);
        this.targetOffset = parseOffset(this.options.targetOffset);

        if (typeof this.scrollParents !== 'undefined') {
          this.disable();
        }

        if (this.targetModifier === 'scroll-handle') {
          this.scrollParents = [this.target];
        } else {
          this.scrollParents = getScrollParents(this.target);
        }

        if (!(this.options.enabled === false)) {
          this.enable(pos);
        }
      }
    }, {
      key: 'getTargetBounds',
      value: function getTargetBounds() {
        if (typeof this.targetModifier !== 'undefined') {
          if (this.targetModifier === 'visible') {
            if (this.target === document.body) {
              return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
            } else {
              var bounds = getBounds(this.target);

              var out = {
                height: bounds.height,
                width: bounds.width,
                top: bounds.top,
                left: bounds.left
              };

              out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
              out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
              out.height = Math.min(innerHeight, out.height);
              out.height -= 2;

              out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
              out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
              out.width = Math.min(innerWidth, out.width);
              out.width -= 2;

              if (out.top < pageYOffset) {
                out.top = pageYOffset;
              }
              if (out.left < pageXOffset) {
                out.left = pageXOffset;
              }

              return out;
            }
          } else if (this.targetModifier === 'scroll-handle') {
            var bounds = undefined;
            var target = this.target;
            if (target === document.body) {
              target = document.documentElement;

              bounds = {
                left: pageXOffset,
                top: pageYOffset,
                height: innerHeight,
                width: innerWidth
              };
            } else {
              bounds = getBounds(target);
            }

            var style = getComputedStyle(target);

            var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

            var scrollBottom = 0;
            if (hasBottomScroll) {
              scrollBottom = 15;
            }

            var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

            var out = {
              width: 15,
              height: height * 0.975 * (height / target.scrollHeight),
              left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
            };

            var fitAdj = 0;
            if (height < 408 && this.target === document.body) {
              fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
            }

            if (this.target !== document.body) {
              out.height = Math.max(out.height, 24);
            }

            var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
            out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

            if (this.target === document.body) {
              out.height = Math.max(out.height, 24);
            }

            return out;
          }
        } else {
          return getBounds(this.target);
        }
      }
    }, {
      key: 'clearCache',
      value: function clearCache() {
        this._cache = {};
      }
    }, {
      key: 'cache',
      value: function cache(k, getter) {
        // More than one module will often need the same DOM info, so
        // we keep a cache which is cleared on each position call
        if (typeof this._cache === 'undefined') {
          this._cache = {};
        }

        if (typeof this._cache[k] === 'undefined') {
          this._cache[k] = getter.call(this);
        }

        return this._cache[k];
      }
    }, {
      key: 'enable',
      value: function enable() {
        var _this3 = this;

        var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

        if (!(this.options.addTargetClasses === false)) {
          addClass(this.target, this.getClass('enabled'));
        }
        addClass(this.element, this.getClass('enabled'));
        this.enabled = true;

        this.scrollParents.forEach(function (parent) {
          if (parent !== _this3.target.ownerDocument) {
            parent.addEventListener('scroll', _this3.position);
          }
        });

        if (pos) {
          this.position();
        }
      }
    }, {
      key: 'disable',
      value: function disable() {
        var _this4 = this;

        removeClass(this.target, this.getClass('enabled'));
        removeClass(this.element, this.getClass('enabled'));
        this.enabled = false;

        if (typeof this.scrollParents !== 'undefined') {
          this.scrollParents.forEach(function (parent) {
            parent.removeEventListener('scroll', _this4.position);
          });
        }
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        var _this5 = this;

        this.disable();

        tethers.forEach(function (tether, i) {
          if (tether === _this5) {
            tethers.splice(i, 1);
          }
        });

        // Remove any elements we were using for convenience from the DOM
        if (tethers.length === 0) {
          removeUtilElements();
        }
      }
    }, {
      key: 'updateAttachClasses',
      value: function updateAttachClasses(elementAttach, targetAttach) {
        var _this6 = this;

        elementAttach = elementAttach || this.attachment;
        targetAttach = targetAttach || this.targetAttachment;
        var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

        if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
          // updateAttachClasses can be called more than once in a position call, so
          // we need to clean up after ourselves such that when the last defer gets
          // ran it doesn't add any extra classes from previous calls.
          this._addAttachClasses.splice(0, this._addAttachClasses.length);
        }

        if (typeof this._addAttachClasses === 'undefined') {
          this._addAttachClasses = [];
        }
        var add = this._addAttachClasses;

        if (elementAttach.top) {
          add.push(this.getClass('element-attached') + '-' + elementAttach.top);
        }
        if (elementAttach.left) {
          add.push(this.getClass('element-attached') + '-' + elementAttach.left);
        }
        if (targetAttach.top) {
          add.push(this.getClass('target-attached') + '-' + targetAttach.top);
        }
        if (targetAttach.left) {
          add.push(this.getClass('target-attached') + '-' + targetAttach.left);
        }

        var all = [];
        sides.forEach(function (side) {
          all.push(_this6.getClass('element-attached') + '-' + side);
          all.push(_this6.getClass('target-attached') + '-' + side);
        });

        defer(function () {
          if (!(typeof _this6._addAttachClasses !== 'undefined')) {
            return;
          }

          updateClasses(_this6.element, _this6._addAttachClasses, all);
          if (!(_this6.options.addTargetClasses === false)) {
            updateClasses(_this6.target, _this6._addAttachClasses, all);
          }

          delete _this6._addAttachClasses;
        });
      }
    }, {
      key: 'position',
      value: function position() {
        var _this7 = this;

        var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

        // flushChanges commits the changes immediately, leave true unless you are positioning multiple
        // tethers (in which case call Tether.Utils.flush yourself when you're done)

        if (!this.enabled) {
          return;
        }

        this.clearCache();

        // Turn 'auto' attachments into the appropriate corner or edge
        var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

        this.updateAttachClasses(this.attachment, targetAttachment);

        var elementPos = this.cache('element-bounds', function () {
          return getBounds(_this7.element);
        });

        var width = elementPos.width;
        var height = elementPos.height;

        if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
          var _lastSize = this.lastSize;

          // We cache the height and width to make it possible to position elements that are
          // getting hidden.
          width = _lastSize.width;
          height = _lastSize.height;
        } else {
          this.lastSize = { width: width, height: height };
        }

        var targetPos = this.cache('target-bounds', function () {
          return _this7.getTargetBounds();
        });
        var targetSize = targetPos;

        // Get an actual px offset from the attachment
        var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
        var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

        var manualOffset = offsetToPx(this.offset, { width: width, height: height });
        var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

        // Add the manually provided offset
        offset = addOffset(offset, manualOffset);
        targetOffset = addOffset(targetOffset, manualTargetOffset);

        // It's now our goal to make (element position + offset) == (target position + target offset)
        var left = targetPos.left + targetOffset.left - offset.left;
        var top = targetPos.top + targetOffset.top - offset.top;

        for (var i = 0; i < TetherBase.modules.length; ++i) {
          var _module2 = TetherBase.modules[i];
          var ret = _module2.position.call(this, {
            left: left,
            top: top,
            targetAttachment: targetAttachment,
            targetPos: targetPos,
            elementPos: elementPos,
            offset: offset,
            targetOffset: targetOffset,
            manualOffset: manualOffset,
            manualTargetOffset: manualTargetOffset,
            scrollbarSize: scrollbarSize,
            attachment: this.attachment
          });

          if (ret === false) {
            return false;
          } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
            continue;
          } else {
            top = ret.top;
            left = ret.left;
          }
        }

        // We describe the position three different ways to give the optimizer
        // a chance to decide the best possible way to position the element
        // with the fewest repaints.
        var next = {
          // It's position relative to the page (absolute positioning when
          // the element is a child of the body)
          page: {
            top: top,
            left: left
          },

          // It's position relative to the viewport (fixed positioning)
          viewport: {
            top: top - pageYOffset,
            bottom: pageYOffset - top - height + innerHeight,
            left: left - pageXOffset,
            right: pageXOffset - left - width + innerWidth
          }
        };

        var doc = this.target.ownerDocument;
        var win = doc.defaultView;

        var scrollbarSize = undefined;
        if (win.innerHeight > doc.documentElement.clientHeight) {
          scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
          next.viewport.bottom -= scrollbarSize.height;
        }

        if (win.innerWidth > doc.documentElement.clientWidth) {
          scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
          next.viewport.right -= scrollbarSize.width;
        }

        if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
          // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
          next.page.bottom = doc.body.scrollHeight - top - height;
          next.page.right = doc.body.scrollWidth - left - width;
        }

        if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
          (function () {
            var offsetParent = _this7.cache('target-offsetparent', function () {
              return getOffsetParent(_this7.target);
            });
            var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
              return getBounds(offsetParent);
            });
            var offsetParentStyle = getComputedStyle(offsetParent);
            var offsetParentSize = offsetPosition;

            var offsetBorder = {};
            ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
              offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
            });

            offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
            offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

            if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
              if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
                // We're within the visible part of the target's scroll parent
                var scrollTop = offsetParent.scrollTop;
                var scrollLeft = offsetParent.scrollLeft;

                // It's position relative to the target's offset parent (absolute positioning when
                // the element is moved to be a child of the target's offset parent).
                next.offset = {
                  top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                  left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
                };
              }
            }
          })();
        }

        // We could also travel up the DOM and try each containing context, rather than only
        // looking at the body, but we're gonna get diminishing returns.

        this.move(next);

        this.history.unshift(next);

        if (this.history.length > 3) {
          this.history.pop();
        }

        if (flushChanges) {
          flush();
        }

        return true;
      }

      // THE ISSUE
    }, {
      key: 'move',
      value: function move(pos) {
        var _this8 = this;

        if (!(typeof this.element.parentNode !== 'undefined')) {
          return;
        }

        var same = {};

        for (var type in pos) {
          same[type] = {};

          for (var key in pos[type]) {
            var found = false;

            for (var i = 0; i < this.history.length; ++i) {
              var point = this.history[i];
              if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
                found = true;
                break;
              }
            }

            if (!found) {
              same[type][key] = true;
            }
          }
        }

        var css = { top: '', left: '', right: '', bottom: '' };

        var transcribe = function transcribe(_same, _pos) {
          var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
          var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
          if (gpu !== false) {
            var yPos = undefined,
                xPos = undefined;
            if (_same.top) {
              css.top = 0;
              yPos = _pos.top;
            } else {
              css.bottom = 0;
              yPos = -_pos.bottom;
            }

            if (_same.left) {
              css.left = 0;
              xPos = _pos.left;
            } else {
              css.right = 0;
              xPos = -_pos.right;
            }

            if (typeof window.devicePixelRatio === 'number' && devicePixelRatio % 1 === 0) {
              xPos = Math.round(xPos * devicePixelRatio) / devicePixelRatio;
              yPos = Math.round(yPos * devicePixelRatio) / devicePixelRatio;
            }

            css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';

            if (transformKey !== 'msTransform') {
              // The Z transform will keep this in the GPU (faster, and prevents artifacts),
              // but IE9 doesn't support 3d transforms and will choke.
              css[transformKey] += " translateZ(0)";
            }
          } else {
            if (_same.top) {
              css.top = _pos.top + 'px';
            } else {
              css.bottom = _pos.bottom + 'px';
            }

            if (_same.left) {
              css.left = _pos.left + 'px';
            } else {
              css.right = _pos.right + 'px';
            }
          }
        };

        var moved = false;
        if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
          css.position = 'absolute';
          transcribe(same.page, pos.page);
        } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
          css.position = 'fixed';
          transcribe(same.viewport, pos.viewport);
        } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
          (function () {
            css.position = 'absolute';
            var offsetParent = _this8.cache('target-offsetparent', function () {
              return getOffsetParent(_this8.target);
            });

            if (getOffsetParent(_this8.element) !== offsetParent) {
              defer(function () {
                _this8.element.parentNode.removeChild(_this8.element);
                offsetParent.appendChild(_this8.element);
              });
            }

            transcribe(same.offset, pos.offset);
            moved = true;
          })();
        } else {
          css.position = 'absolute';
          transcribe({ top: true, left: true }, pos.page);
        }

        if (!moved) {
          if (this.options.bodyElement) {
            if (this.element.parentNode !== this.options.bodyElement) {
              this.options.bodyElement.appendChild(this.element);
            }
          } else {
            var isFullscreenElement = function isFullscreenElement(e) {
              var d = e.ownerDocument;
              var fe = d.fullscreenElement || d.webkitFullscreenElement || d.mozFullScreenElement || d.msFullscreenElement;
              return fe === e;
            };

            var offsetParentIsBody = true;

            var currentNode = this.element.parentNode;
            while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY' && !isFullscreenElement(currentNode)) {
              if (getComputedStyle(currentNode).position !== 'static') {
                offsetParentIsBody = false;
                break;
              }

              currentNode = currentNode.parentNode;
            }

            if (!offsetParentIsBody) {
              this.element.parentNode.removeChild(this.element);
              this.element.ownerDocument.body.appendChild(this.element);
            }
          }
        }

        // Any css change will trigger a repaint, so let's avoid one if nothing changed
        var writeCSS = {};
        var write = false;
        for (var key in css) {
          var val = css[key];
          var elVal = this.element.style[key];

          if (elVal !== val) {
            write = true;
            writeCSS[key] = val;
          }
        }

        if (write) {
          defer(function () {
            extend(_this8.element.style, writeCSS);
            _this8.trigger('repositioned');
          });
        }
      }
    }]);

    return TetherClass;
  })(Evented);

  TetherClass.modules = [];

  TetherBase.position = position;

  var Tether = extend(TetherClass, TetherBase);
  /* globals TetherBase */

  'use strict';

  var _slicedToArray = (function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  })();

  var _TetherBase$Utils = TetherBase.Utils;
  var getBounds = _TetherBase$Utils.getBounds;
  var extend = _TetherBase$Utils.extend;
  var updateClasses = _TetherBase$Utils.updateClasses;
  var defer = _TetherBase$Utils.defer;

  var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

  function getBoundingRect(tether, to) {
    if (to === 'scrollParent') {
      to = tether.scrollParents[0];
    } else if (to === 'window') {
      to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
    }

    if (to === document) {
      to = to.documentElement;
    }

    if (typeof to.nodeType !== 'undefined') {
      (function () {
        var node = to;
        var size = getBounds(to);
        var pos = size;
        var style = getComputedStyle(to);

        to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

        // Account any parent Frames scroll offset
        if (node.ownerDocument !== document) {
          var win = node.ownerDocument.defaultView;
          to[0] += win.pageXOffset;
          to[1] += win.pageYOffset;
          to[2] += win.pageXOffset;
          to[3] += win.pageYOffset;
        }

        BOUNDS_FORMAT.forEach(function (side, i) {
          side = side[0].toUpperCase() + side.substr(1);
          if (side === 'Top' || side === 'Left') {
            to[i] += parseFloat(style['border' + side + 'Width']);
          } else {
            to[i] -= parseFloat(style['border' + side + 'Width']);
          }
        });
      })();
    }

    return to;
  }

  TetherBase.modules.push({
    position: function position(_ref) {
      var _this = this;

      var top = _ref.top;
      var left = _ref.left;
      var targetAttachment = _ref.targetAttachment;

      if (!this.options.constraints) {
        return true;
      }

      var _cache = this.cache('element-bounds', function () {
        return getBounds(_this.element);
      });

      var height = _cache.height;
      var width = _cache.width;

      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
        var _lastSize = this.lastSize;

        // Handle the item getting hidden as a result of our positioning without glitching
        // the classes in and out
        width = _lastSize.width;
        height = _lastSize.height;
      }

      var targetSize = this.cache('target-bounds', function () {
        return _this.getTargetBounds();
      });

      var targetHeight = targetSize.height;
      var targetWidth = targetSize.width;

      var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

      this.options.constraints.forEach(function (constraint) {
        var outOfBoundsClass = constraint.outOfBoundsClass;
        var pinnedClass = constraint.pinnedClass;

        if (outOfBoundsClass) {
          allClasses.push(outOfBoundsClass);
        }
        if (pinnedClass) {
          allClasses.push(pinnedClass);
        }
      });

      allClasses.forEach(function (cls) {
        ['left', 'top', 'right', 'bottom'].forEach(function (side) {
          allClasses.push(cls + '-' + side);
        });
      });

      var addClasses = [];

      var tAttachment = extend({}, targetAttachment);
      var eAttachment = extend({}, this.attachment);

      this.options.constraints.forEach(function (constraint) {
        var to = constraint.to;
        var attachment = constraint.attachment;
        var pin = constraint.pin;

        if (typeof attachment === 'undefined') {
          attachment = '';
        }

        var changeAttachX = undefined,
            changeAttachY = undefined;
        if (attachment.indexOf(' ') >= 0) {
          var _attachment$split = attachment.split(' ');

          var _attachment$split2 = _slicedToArray(_attachment$split, 2);

          changeAttachY = _attachment$split2[0];
          changeAttachX = _attachment$split2[1];
        } else {
          changeAttachX = changeAttachY = attachment;
        }

        var bounds = getBoundingRect(_this, to);

        if (changeAttachY === 'target' || changeAttachY === 'both') {
          if (top < bounds[1] && tAttachment.top === 'top') {
            top += targetHeight;
            tAttachment.top = 'bottom';
          }

          if (top + height > bounds[3] && tAttachment.top === 'bottom') {
            top -= targetHeight;
            tAttachment.top = 'top';
          }
        }

        if (changeAttachY === 'together') {
          if (tAttachment.top === 'top') {
            if (eAttachment.top === 'bottom' && top < bounds[1]) {
              top += targetHeight;
              tAttachment.top = 'bottom';

              top += height;
              eAttachment.top = 'top';
            } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
              top -= height - targetHeight;
              tAttachment.top = 'bottom';

              eAttachment.top = 'bottom';
            }
          }

          if (tAttachment.top === 'bottom') {
            if (eAttachment.top === 'top' && top + height > bounds[3]) {
              top -= targetHeight;
              tAttachment.top = 'top';

              top -= height;
              eAttachment.top = 'bottom';
            } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
              top += height - targetHeight;
              tAttachment.top = 'top';

              eAttachment.top = 'top';
            }
          }

          if (tAttachment.top === 'middle') {
            if (top + height > bounds[3] && eAttachment.top === 'top') {
              top -= height;
              eAttachment.top = 'bottom';
            } else if (top < bounds[1] && eAttachment.top === 'bottom') {
              top += height;
              eAttachment.top = 'top';
            }
          }
        }

        if (changeAttachX === 'target' || changeAttachX === 'both') {
          if (left < bounds[0] && tAttachment.left === 'left') {
            left += targetWidth;
            tAttachment.left = 'right';
          }

          if (left + width > bounds[2] && tAttachment.left === 'right') {
            left -= targetWidth;
            tAttachment.left = 'left';
          }
        }

        if (changeAttachX === 'together') {
          if (left < bounds[0] && tAttachment.left === 'left') {
            if (eAttachment.left === 'right') {
              left += targetWidth;
              tAttachment.left = 'right';

              left += width;
              eAttachment.left = 'left';
            } else if (eAttachment.left === 'left') {
              left += targetWidth;
              tAttachment.left = 'right';

              left -= width;
              eAttachment.left = 'right';
            }
          } else if (left + width > bounds[2] && tAttachment.left === 'right') {
            if (eAttachment.left === 'left') {
              left -= targetWidth;
              tAttachment.left = 'left';

              left -= width;
              eAttachment.left = 'right';
            } else if (eAttachment.left === 'right') {
              left -= targetWidth;
              tAttachment.left = 'left';

              left += width;
              eAttachment.left = 'left';
            }
          } else if (tAttachment.left === 'center') {
            if (left + width > bounds[2] && eAttachment.left === 'left') {
              left -= width;
              eAttachment.left = 'right';
            } else if (left < bounds[0] && eAttachment.left === 'right') {
              left += width;
              eAttachment.left = 'left';
            }
          }
        }

        if (changeAttachY === 'element' || changeAttachY === 'both') {
          if (top < bounds[1] && eAttachment.top === 'bottom') {
            top += height;
            eAttachment.top = 'top';
          }

          if (top + height > bounds[3] && eAttachment.top === 'top') {
            top -= height;
            eAttachment.top = 'bottom';
          }
        }

        if (changeAttachX === 'element' || changeAttachX === 'both') {
          if (left < bounds[0]) {
            if (eAttachment.left === 'right') {
              left += width;
              eAttachment.left = 'left';
            } else if (eAttachment.left === 'center') {
              left += width / 2;
              eAttachment.left = 'left';
            }
          }

          if (left + width > bounds[2]) {
            if (eAttachment.left === 'left') {
              left -= width;
              eAttachment.left = 'right';
            } else if (eAttachment.left === 'center') {
              left -= width / 2;
              eAttachment.left = 'right';
            }
          }
        }

        if (typeof pin === 'string') {
          pin = pin.split(',').map(function (p) {
            return p.trim();
          });
        } else if (pin === true) {
          pin = ['top', 'left', 'right', 'bottom'];
        }

        pin = pin || [];

        var pinned = [];
        var oob = [];

        if (top < bounds[1]) {
          if (pin.indexOf('top') >= 0) {
            top = bounds[1];
            pinned.push('top');
          } else {
            oob.push('top');
          }
        }

        if (top + height > bounds[3]) {
          if (pin.indexOf('bottom') >= 0) {
            top = bounds[3] - height;
            pinned.push('bottom');
          } else {
            oob.push('bottom');
          }
        }

        if (left < bounds[0]) {
          if (pin.indexOf('left') >= 0) {
            left = bounds[0];
            pinned.push('left');
          } else {
            oob.push('left');
          }
        }

        if (left + width > bounds[2]) {
          if (pin.indexOf('right') >= 0) {
            left = bounds[2] - width;
            pinned.push('right');
          } else {
            oob.push('right');
          }
        }

        if (pinned.length) {
          (function () {
            var pinnedClass = undefined;
            if (typeof _this.options.pinnedClass !== 'undefined') {
              pinnedClass = _this.options.pinnedClass;
            } else {
              pinnedClass = _this.getClass('pinned');
            }

            addClasses.push(pinnedClass);
            pinned.forEach(function (side) {
              addClasses.push(pinnedClass + '-' + side);
            });
          })();
        }

        if (oob.length) {
          (function () {
            var oobClass = undefined;
            if (typeof _this.options.outOfBoundsClass !== 'undefined') {
              oobClass = _this.options.outOfBoundsClass;
            } else {
              oobClass = _this.getClass('out-of-bounds');
            }

            addClasses.push(oobClass);
            oob.forEach(function (side) {
              addClasses.push(oobClass + '-' + side);
            });
          })();
        }

        if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
          eAttachment.left = tAttachment.left = false;
        }
        if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
          eAttachment.top = tAttachment.top = false;
        }

        if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
          _this.updateAttachClasses(eAttachment, tAttachment);
          _this.trigger('update', {
            attachment: eAttachment,
            targetAttachment: tAttachment
          });
        }
      });

      defer(function () {
        if (!(_this.options.addTargetClasses === false)) {
          updateClasses(_this.target, addClasses, allClasses);
        }
        updateClasses(_this.element, addClasses, allClasses);
      });

      return { top: top, left: left };
    }
  });
  /* globals TetherBase */

  'use strict';

  var _TetherBase$Utils = TetherBase.Utils;
  var getBounds = _TetherBase$Utils.getBounds;
  var updateClasses = _TetherBase$Utils.updateClasses;
  var defer = _TetherBase$Utils.defer;

  TetherBase.modules.push({
    position: function position(_ref) {
      var _this = this;

      var top = _ref.top;
      var left = _ref.left;

      var _cache = this.cache('element-bounds', function () {
        return getBounds(_this.element);
      });

      var height = _cache.height;
      var width = _cache.width;

      var targetPos = this.getTargetBounds();

      var bottom = top + height;
      var right = left + width;

      var abutted = [];
      if (top <= targetPos.bottom && bottom >= targetPos.top) {
        ['left', 'right'].forEach(function (side) {
          var targetPosSide = targetPos[side];
          if (targetPosSide === left || targetPosSide === right) {
            abutted.push(side);
          }
        });
      }

      if (left <= targetPos.right && right >= targetPos.left) {
        ['top', 'bottom'].forEach(function (side) {
          var targetPosSide = targetPos[side];
          if (targetPosSide === top || targetPosSide === bottom) {
            abutted.push(side);
          }
        });
      }

      var allClasses = [];
      var addClasses = [];

      var sides = ['left', 'top', 'right', 'bottom'];
      allClasses.push(this.getClass('abutted'));
      sides.forEach(function (side) {
        allClasses.push(_this.getClass('abutted') + '-' + side);
      });

      if (abutted.length) {
        addClasses.push(this.getClass('abutted'));
      }

      abutted.forEach(function (side) {
        addClasses.push(_this.getClass('abutted') + '-' + side);
      });

      defer(function () {
        if (!(_this.options.addTargetClasses === false)) {
          updateClasses(_this.target, addClasses, allClasses);
        }
        updateClasses(_this.element, addClasses, allClasses);
      });

      return true;
    }
  });
  /* globals TetherBase */

  'use strict';

  var _slicedToArray = (function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  })();

  TetherBase.modules.push({
    position: function position(_ref) {
      var top = _ref.top;
      var left = _ref.left;

      if (!this.options.shift) {
        return;
      }

      var shift = this.options.shift;
      if (typeof this.options.shift === 'function') {
        shift = this.options.shift.call(this, { top: top, left: left });
      }

      var shiftTop = undefined,
          shiftLeft = undefined;
      if (typeof shift === 'string') {
        shift = shift.split(' ');
        shift[1] = shift[1] || shift[0];

        var _shift = shift;

        var _shift2 = _slicedToArray(_shift, 2);

        shiftTop = _shift2[0];
        shiftLeft = _shift2[1];

        shiftTop = parseFloat(shiftTop, 10);
        shiftLeft = parseFloat(shiftLeft, 10);
      } else {
        shiftTop = shift.top;
        shiftLeft = shift.left;
      }

      top += shiftTop;
      left += shiftLeft;

      return { top: top, left: left };
    }
  });
  return Tether;
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Tether"] = __webpack_require__(31);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(8);
module.exports = __webpack_require__(9);


/***/ })
/******/ ]);