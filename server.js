module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),
/* 5 */
/*!***************************************!*\
  !*** ./src/client/core/constants.tsx ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACTION = {
    CHECKBOX: {
        ADD: 'ac@checkbox.add',
        DELETE: 'ac@checkbox.delete',
    },
};


/***/ }),
/* 6 */
/*!*************************************************!*\
  !*** ./src/client/modules/checkbox/actions.tsx ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = __webpack_require__(/*! redux-actions */ 4);
var constants_1 = __webpack_require__(/*! ../../core/constants */ 5);
exports.addCheckbox = redux_actions_1.createAction(constants_1.ACTION.CHECKBOX.ADD);


/***/ }),
/* 7 */
/*!*******************************************************!*\
  !*** ./src/client/layouts/default/DefaultLayout.scss ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
	"layout": "_2ZyRsXsw469dQ_sjFiPesJ"
};

/***/ }),
/* 8 */
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {"name":"react-typescript","version":"1.5.3","license":"MIT","description":"React & typescript boilerplate","repository":"https://github.com/nfq-eta/react-typescript","homepage":"https://github.com/nfq-eta/react-typescript","main":"src/client/index.tsx","scripts":{"cm":"git-cz","predev":"tcm -p src/client/**/*.{css,scss}","prebuild":"tcm -p src/client/**/*.{css,scss} && rimraf ./dist ./coverage","cleanup":"yarn prebuild","build:server":"cross-env NODE_ENV=production webpack --env=server --display-error-details","build":"cross-env NODE_ENV=production webpack -p --env=prod --display-error-details && yarn build:server","prebuild:start":"yarn build","postbuild":"yarn build-storybook","build:start":"serve -s -o -C -n dist","lint":"tslint -c ./tslint.json -p ./tsconfig.json -t stylish","lint:css":"stylelint './src/client/**/*.{css,scss}'","test":"jest --watch --no-cache","test:ci":"jest --env=jsdom --no-cache --maxWorkers=2","test:coverage":"cross-env NODE_ENV=test jest --env=jsdom --no-cache --coverage","prepush":"yarn test:ci --notify && yarn lint && yarn lint:css","dev":"cross-env NODE_ENV=development webpack-dev-server --open --env=dev","start":"node ./dist/server.js","start:storybook":"start-storybook -p 6006 -c config/storybook","build-storybook":"build-storybook -c config/storybook -o ./dist/docs","version":"conventional-changelog -i CHANGELOG.md -s -r 0 && git add CHANGELOG.md","precommit":"lint-staged"},"devDependencies":{"@storybook/addon-actions":"^3.2.17","@storybook/addon-info":"^3.2.17","@storybook/addon-knobs":"^3.2.17","@storybook/addon-links":"^3.2.17","@storybook/addon-options":"^3.2.17","@storybook/react":"^3.2.17","@types/compression":"^0.0.35","@types/enzyme":"^3.1.5","@types/enzyme-to-json":"^1.5.0","@types/express":"^4.11.0","@types/extract-text-webpack-plugin":"^3.0.0","@types/get-port":"^3.2.0","@types/history":"^4.6.2","@types/html-webpack-plugin":"^2.30.1","@types/jest":"^21.1.8","@types/node":"^8.0.57","@types/optimize-css-assets-webpack-plugin":"^1.3.1","@types/package-json":"^4.0.1","@types/react":"^16.0.25","@types/react-dom":"^16.0.3","@types/react-hot-loader":"^3.0.5","@types/react-redux":"^5.0.13","@types/react-router-dom":"^4.2.3","@types/react-router-redux":"^5.0.10","@types/react-test-renderer":"^16.0.0","@types/redux-actions":"^2.2.3","@types/redux-logger":"^3.0.5","@types/redux-mock-store":"^0.0.12","@types/storybook__addon-actions":"^3.0.1","@types/storybook__addon-info":"^3.2.1","@types/storybook__addon-knobs":"^3.2.1","@types/storybook__addon-options":"^3.2.0","@types/storybook__react":"^3.0.5","@types/uniqid":"^4.1.2","@types/webpack":"^3.8.1","@types/webpack-dotenv-plugin":"^2.0.0","@types/webpack-env":"^1.13.3","@types/webpack-merge":"^4.1.1","babel-core":"^6.26.0","babel-loader":"^7.1.2","babel-polyfill":"^6.26.0","babel-preset-es2015":"^6.24.1","babel-preset-react":"^6.24.1","babel-preset-stage-0":"^6.24.1","babel-runtime":"^6.26.0","color-convert":"^1.9.1","commitizen":"^3.0.5","compression":"^1.7.1","conventional-changelog-cli":"^1.3.5","cross-env":"^5.1.1","css-hot-loader":"^1.3.4","css-loader":"^0.28.7","cz-conventional-changelog":"^2.1.0","enzyme":"^3.2.0","enzyme-adapter-react-16":"^1.1.0","enzyme-to-json":"^3.2.2","express":"^4.16.2","extract-text-webpack-plugin":"^3.0.2","file-loader":"^1.1.5","get-port":"^3.2.0","history":"^4.7.2","html-webpack-plugin":"^2.30.1","http-status-enum":"^1.0.2","husky":"^0.14.3","identity-obj-proxy":"^3.0.0","jest":"^22.3.0","json-d-ts":"^1.0.1","lint-staged":"^6.1.1","mkdirp":"^0.5.1","node-sass":"^4.11.0","optimize-css-assets-webpack-plugin":"^3.2.0","prettier":"^1.10.2","raf":"^3.4.0","react-docgen-typescript-webpack-plugin":"^1.1.0","react-hot-loader":"^3.1.3","react-test-renderer":"^16.1.1","redux-actions":"^2.2.1","redux-logger":"^3.0.6","redux-mock-store":"^1.3.0","redux-observable":"^0.17.0","resolve-url-loader":"^2.2.1","rimraf":"^2.6.2","sass-loader":"^6.0.6","serve":"^10.1.1","source-map-loader":"^0.2.3","style-loader":"^0.19.0","stylelint":"^9.0.0","stylelint-config-css-modules":"^1.2.0","stylelint-config-sass-guidelines":"^4.1.0","stylelint-order":"^0.8.1","stylelint-scss":"^2.3.0","ts-jest":"^22.0.4","ts-loader":"^3.5.0","ts-node":"^4.1.0","tslib":"^1.9.0","tslint":"^5.9.1","tslint-config-airbnb":"^5.8.0","tslint-plugin-prettier":"^1.3.0","tslint-react":"^3.5.1","tsutils":"^2.21.1","typed-css-modules":"^0.3.1","typescript":"^3.2.2","typescript-babel-jest":"^1.0.5","typings-for-css-modules-loader":"^1.7.0","uniqid":"^4.1.1","url-loader":"^0.6.2","webpack":"^3.10.0","webpack-dashboard":"^2.0.0","webpack-dev-middleware":"^1.12.2","webpack-dev-server":"^3.1.14","webpack-dotenv-plugin":"^2.0.2","webpack-hot-middleware":"^2.21.0","webpack-merge":"^4.1.1"},"dependencies":{"react":"^16.2.1","react-dom":"^16.2.1","react-redux":"^5.0.6","redux-devtools-extension":"^2.13.2","react-router-dom":"^4.2.2","react-router-redux":"^4.0.8","react-router4-with-layouts":"^1.2.6","redux":"^3.7.2"},"lint-staged":{"src/**/*.{js,jsx,ts,tsx,json,css,scss}":["prettier --write","git add"]},"jest":{"testURL":"http://localhost/","globals":{"ts-jest":{"skipBabel":true}},"setupFiles":["<rootDir>/config/jest/bootstrap.js"],"snapshotSerializers":["enzyme-to-json/serializer"],"transform":{"^.+\\.tsx?$":"<rootDir>/node_modules/ts-jest/preprocessor.js"},"testRegex":"^.+\\.test\\.tsx?$","collectCoverageFrom":["src/**/*.tsx","!src/client/index.tsx","!<rootDir>/node_modules/","!src/**/*.story.tsx"],"moduleFileExtensions":["js","jsx","json","ts","tsx"],"moduleNameMapper":{"^.+\\.s?css$":"identity-obj-proxy"},"coverageDirectory":"./coverage/"},"stylelint":{"extends":["stylelint-config-sass-guidelines","stylelint-config-css-modules"],"rules":{"indentation":4,"number-leading-zero":null,"selector-class-pattern":"^[a-z][a-zA-Z0-9]+$","order/properties-alphabetical-order":null,"max-nesting-depth":[3],"selector-max-compound-selectors":4}},"config":{"commitizen":{"path":"node_modules/cz-conventional-changelog"}},"engines":{"node":">= 8.9","yarn":">= 1.3.2"}}

/***/ }),
/* 9 */
/*!************************************!*\
  !*** multi ./src/server/index.tsx ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/server/index.tsx */10);


/***/ }),
/* 10 */
/*!******************************!*\
  !*** ./src/server/index.tsx ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var path = __webpack_require__(/*! path */ 11);
var fs = __webpack_require__(/*! fs */ 12);
var express = __webpack_require__(/*! express */ 13);
var React = __webpack_require__(/*! react */ 0);
var react_redux_1 = __webpack_require__(/*! react-redux */ 3);
var server_1 = __webpack_require__(/*! react-dom/server */ 14);
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ 1);
var getPort = __webpack_require__(/*! get-port */ 19);
var compression = __webpack_require__(/*! compression */ 20);
var store_1 = __webpack_require__(/*! ../client/core/store */ 21);
var routes_1 = __webpack_require__(/*! ../client/core/routes */ 27);
var initialState_1 = __webpack_require__(/*! ../client/core/initialState */ 47);
var normalizePort = function (val) {
    return typeof val === 'string' ? parseInt(val, 10) : val;
};
var readCss = function (file) {
    var abs = path.resolve(file);
    return fs.readFileSync(abs, 'utf8');
};
var styles = readCss('dist/css/app.css');
var name = __webpack_require__(/*! ../../package.json */ 8).name;
var description = __webpack_require__(/*! ../../package.json */ 8).description;
var renderHtml = function (html, preLoadedState) {
    return "\n    <!doctype html>\n    <html lang=\"en-us\">\n        <head>\n            <meta charset=\"UTF-8\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n            <title>" + name + "</title>\n            <meta name=\"Description\" content=\"" + description + "\">\n            <style>\n                " + styles + "\n            </style>\n        </head>\n        <body>\n            <div id=\"app\">" + html + "</div>\n            <script>\n                window.__PRELOADED_STATE__ = " + JSON.stringify(preLoadedState).replace(/</g, '\\u003c') + "\n            </script>\n            <script src=\"/js/vendors.js\" async></script>\n            <script src=\"/js/app.js\" async></script>\n        </body>\n    </html>\n    ";
};
var port = normalizePort(process.env.PORT || 8080);
var app = express();
app.use(compression());
app.use('/js', express.static(path.join('dist', 'js'), { redirect: false }));
app.use('/css', express.static(path.join('dist', 'css'), { redirect: false }));
app.use(function (req, res) {
    var store = store_1.configureStore(initialState_1.initialState);
    var context = {};
    var html = server_1.renderToString(React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(react_router_dom_1.StaticRouter, { basename: process.env.BASE_PATH !== '' ? process.env.BASE_PATH : undefined, location: req.url, context: context },
            React.createElement(routes_1.CoreRoutes, null))));
    if (context.url) {
        res.redirect(301, context.url);
    }
    else {
        res.send(renderHtml(html, store.getState()));
    }
});
getPort({ port: port }).then(function (rPort) {
    app.listen(rPort, function () { return console.log("App is listening on http://localhost:" + rPort); });
});


/***/ }),
/* 11 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 12 */
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 13 */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 14 */
/*!******************************************!*\
  !*** ./node_modules/react-dom/server.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./server.node */ 15);


/***/ }),
/* 15 */
/*!***********************************************!*\
  !*** ./node_modules/react-dom/server.node.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react-dom-server.node.production.min.js */ 16);
} else {
  module.exports = require('./cjs/react-dom-server.node.development.js');
}


/***/ }),
/* 16 */
/*!****************************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom-server.node.production.min.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.7.0
 * react-dom-server.node.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var p=__webpack_require__(/*! object-assign */ 17),q=__webpack_require__(/*! react */ 0),aa=__webpack_require__(/*! stream */ 18);function ba(a,b,f,c,e,d,h,g){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var B=[f,c,e,d,h,g],A=0;a=Error(b.replace(/%s/g,function(){return B[A++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function u(a){for(var b=arguments.length-1,f="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)f+="&args[]="+encodeURIComponent(arguments[c+1]);ba(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",f)}
var w="function"===typeof Symbol&&Symbol.for,y=w?Symbol.for("react.portal"):60106,z=w?Symbol.for("react.fragment"):60107,C=w?Symbol.for("react.strict_mode"):60108,D=w?Symbol.for("react.profiler"):60114,E=w?Symbol.for("react.provider"):60109,F=w?Symbol.for("react.context"):60110,G=w?Symbol.for("react.concurrent_mode"):60111,H=w?Symbol.for("react.forward_ref"):60112,I=w?Symbol.for("react.suspense"):60113,J=w?Symbol.for("react.memo"):60115,ca=w?Symbol.for("react.lazy"):60116;
function L(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case G:return"ConcurrentMode";case z:return"Fragment";case y:return"Portal";case D:return"Profiler";case C:return"StrictMode";case I:return"Suspense"}if("object"===typeof a)switch(a.$$typeof){case F:return"Context.Consumer";case E:return"Context.Provider";case H:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");
case J:return L(a.type);case ca:if(a=1===a._status?a._result:null)return L(a)}return null}var da=q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ea={};function M(a,b){for(var f=a._threadCount|0;f<=b;f++)a[f]=a._currentValue2,a._threadCount=f+1}function fa(a,b,f){var c=a.contextType;if("object"===typeof c&&null!==c)return M(c,f),c[f];if(a=a.contextTypes){f={};for(var e in a)f[e]=b[e];b=f}else b=ea;return b}for(var N=new Uint16Array(16),O=0;15>O;O++)N[O]=O+1;N[15]=0;
var ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,ja={},ka={};
function la(a){if(ia.call(ka,a))return!0;if(ia.call(ja,a))return!1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return!1}function ma(a,b,f,c){if(null!==f&&0===f.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(c)return!1;if(null!==f)return!f.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function na(a,b,f,c){if(null===b||"undefined"===typeof b||ma(a,b,f,c))return!0;if(c)return!1;if(null!==f)switch(f.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function P(a,b,f,c,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=c;this.attributeNamespace=e;this.mustUseProperty=f;this.propertyName=a;this.type=b}var Q={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){Q[a]=new P(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];Q[b]=new P(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){Q[a]=new P(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){Q[a]=new P(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){Q[a]=new P(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){Q[a]=new P(a,3,!0,a,null)});
["capture","download"].forEach(function(a){Q[a]=new P(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){Q[a]=new P(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){Q[a]=new P(a,5,!1,a.toLowerCase(),null)});var R=/[\-:]([a-z])/g;function S(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(R,
S);Q[b]=new P(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(R,S);Q[b]=new P(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(R,S);Q[b]=new P(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});Q.tabIndex=new P("tabIndex",1,!1,"tabindex",null);var oa=/["'&<>]/;
function T(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=oa.exec(a);if(b){var f="",c,e=0;for(c=b.index;c<a.length;c++){switch(a.charCodeAt(c)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}e!==c&&(f+=a.substring(e,c));e=c+1;f+=b}a=e!==c?f+a.substring(e,c):f}return a}var pa=!1;function qa(a,b,f,c){for(;pa;)pa=!1,f=a(b,c);return f}
var U=0,ra={readContext:function(a){var b=U;M(a,b);return a[b]}},sa={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function ta(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
var ua={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},va=p({menuitem:!0},ua),V={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,
gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wa=["Webkit","ms","Moz","O"];Object.keys(V).forEach(function(a){wa.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);V[b]=V[a]})});
var xa=/([A-Z])/g,ya=/^ms-/,W=q.Children.toArray,X=da.ReactCurrentOwner,za={listing:!0,pre:!0,textarea:!0},Aa=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Ba={},Y={};function Ca(a){if(void 0===a||null===a)return a;var b="";q.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}var Da=Object.prototype.hasOwnProperty,Ea={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function Fa(a,b){void 0===a&&u("152",L(b)||"Component")}
function Ga(a,b,f){function c(e,c){var d=fa(c,b,f),g=[],h=!1,l={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===g)return null},enqueueReplaceState:function(a,b){h=!0;g=[b]},enqueueSetState:function(a,b){if(null===g)return null;g.push(b)}},k=void 0;if(c.prototype&&c.prototype.isReactComponent){if(k=new c(e.props,d,l),"function"===typeof c.getDerivedStateFromProps){var r=c.getDerivedStateFromProps.call(null,e.props,k.state);null!=r&&(k.state=p({},k.state,r))}}else if(k=c(e.props,
d,l),k=qa(c,e.props,k,d),null==k||null==k.render){a=k;Fa(a,c);return}k.props=e.props;k.context=d;k.updater=l;l=k.state;void 0===l&&(k.state=l=null);if("function"===typeof k.UNSAFE_componentWillMount||"function"===typeof k.componentWillMount)if("function"===typeof k.componentWillMount&&"function"!==typeof c.getDerivedStateFromProps&&k.componentWillMount(),"function"===typeof k.UNSAFE_componentWillMount&&"function"!==typeof c.getDerivedStateFromProps&&k.UNSAFE_componentWillMount(),g.length){l=g;var m=
h;g=null;h=!1;if(m&&1===l.length)k.state=l[0];else{r=m?l[0]:k.state;var t=!0;for(m=m?1:0;m<l.length;m++){var v=l[m];v="function"===typeof v?v.call(k,r,e.props,d):v;null!=v&&(t?(t=!1,r=p({},r,v)):p(r,v))}k.state=r}}else g=null;a=k.render();Fa(a,c);e=void 0;if("function"===typeof k.getChildContext&&(d=c.childContextTypes,"object"===typeof d)){e=k.getChildContext();for(var K in e)K in d?void 0:u("108",L(c)||"Unknown",K)}e&&(b=p({},b,e))}for(;q.isValidElement(a);){var e=a,d=e.type;if("function"!==typeof d)break;
c(e,d)}return{child:a,context:b}}
var Z=function(){function a(b,f){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");q.isValidElement(b)?b.type!==z?b=[b]:(b=b.props.children,b=q.isValidElement(b)?[b]:W(b)):b=W(b);b={type:null,domNamespace:sa.html,children:b,childIndex:0,context:ea,footer:""};var c=N[0];if(0===c){var e=N;c=e.length;var d=2*c;65536>=d?void 0:u("304");var h=new Uint16Array(d);h.set(e);N=h;N[0]=c+1;for(e=c;e<d-1;e++)N[e]=e+1;N[d-1]=0}else N[0]=N[c];this.threadID=c;this.stack=[b];this.exhausted=
!1;this.currentSelectValue=null;this.previousWasTextNode=!1;this.makeStaticMarkup=f;this.suspenseDepth=0;this.contextIndex=-1;this.contextStack=[];this.contextValueStack=[]}a.prototype.destroy=function(){if(!this.exhausted){this.exhausted=!0;var a=this.threadID;N[a]=N[0];N[0]=a}};a.prototype.pushProvider=function(a){var b=++this.contextIndex,c=a.type._context,e=this.threadID;M(c,e);var d=c[e];this.contextStack[b]=c;this.contextValueStack[b]=d;c[e]=a.props.value};a.prototype.popProvider=function(){var a=
this.contextIndex,f=this.contextStack[a],c=this.contextValueStack[a];this.contextStack[a]=null;this.contextValueStack[a]=null;this.contextIndex--;f[this.threadID]=c};a.prototype.read=function(a){if(this.exhausted)return null;var b=U;U=this.threadID;var c=X.currentDispatcher;X.currentDispatcher=ra;try{for(var e=[""],d=!1;e[0].length<a;){if(0===this.stack.length){this.exhausted=!0;var h=this.threadID;N[h]=N[0];N[0]=h;break}var g=this.stack[this.stack.length-1];if(d||g.childIndex>=g.children.length){var B=
g.footer;""!==B&&(this.previousWasTextNode=!1);this.stack.pop();if("select"===g.type)this.currentSelectValue=null;else if(null!=g.type&&null!=g.type.type&&g.type.type.$$typeof===E)this.popProvider(g.type);else if(g.type===I){this.suspenseDepth--;var A=e.pop();if(d){d=!1;var n=g.fallbackFrame;n?void 0:u("303");this.stack.push(n);continue}else e[this.suspenseDepth]+=A}e[this.suspenseDepth]+=B}else{var l=g.children[g.childIndex++],k="";try{k+=this.render(l,g.context,g.domNamespace)}catch(r){throw r;
}finally{}e.length<=this.suspenseDepth&&e.push("");e[this.suspenseDepth]+=k}}return e[0]}finally{X.currentDispatcher=c,U=b}};a.prototype.render=function(a,f,c){if("string"===typeof a||"number"===typeof a){c=""+a;if(""===c)return"";if(this.makeStaticMarkup)return T(c);if(this.previousWasTextNode)return"\x3c!-- --\x3e"+T(c);this.previousWasTextNode=!0;return T(c)}f=Ga(a,f,this.threadID);a=f.child;f=f.context;if(null===a||!1===a)return"";if(!q.isValidElement(a)){if(null!=a&&null!=a.$$typeof){var b=a.$$typeof;
b===y?u("257"):void 0;u("258",b.toString())}a=W(a);this.stack.push({type:null,domNamespace:c,children:a,childIndex:0,context:f,footer:""});return""}b=a.type;if("string"===typeof b)return this.renderDOM(a,f,c);switch(b){case C:case G:case D:case z:return a=W(a.props.children),this.stack.push({type:null,domNamespace:c,children:a,childIndex:0,context:f,footer:""}),"";case I:u("294")}if("object"===typeof b&&null!==b)switch(b.$$typeof){case H:var d=b.render(a.props,a.ref);d=qa(b.render,a.props,d,a.ref);
d=W(d);this.stack.push({type:null,domNamespace:c,children:d,childIndex:0,context:f,footer:""});return"";case J:return a=[q.createElement(b.type,p({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:c,children:a,childIndex:0,context:f,footer:""}),"";case E:return b=W(a.props.children),c={type:a,domNamespace:c,children:b,childIndex:0,context:f,footer:""},this.pushProvider(a),this.stack.push(c),"";case F:b=a.type;d=a.props;var h=this.threadID;M(b,h);b=W(d.children(b[h]));this.stack.push({type:a,
domNamespace:c,children:b,childIndex:0,context:f,footer:""});return"";case ca:u("295")}u("130",null==b?b:typeof b,"")};a.prototype.renderDOM=function(a,f,c){var b=a.type.toLowerCase();c===sa.html&&ta(b);Ba.hasOwnProperty(b)||(Aa.test(b)?void 0:u("65",b),Ba[b]=!0);var d=a.props;if("input"===b)d=p({type:void 0},d,{defaultChecked:void 0,defaultValue:void 0,value:null!=d.value?d.value:d.defaultValue,checked:null!=d.checked?d.checked:d.defaultChecked});else if("textarea"===b){var h=d.value;if(null==h){h=
d.defaultValue;var g=d.children;null!=g&&(null!=h?u("92"):void 0,Array.isArray(g)&&(1>=g.length?void 0:u("93"),g=g[0]),h=""+g);null==h&&(h="")}d=p({},d,{value:void 0,children:""+h})}else if("select"===b)this.currentSelectValue=null!=d.value?d.value:d.defaultValue,d=p({},d,{value:void 0});else if("option"===b){g=this.currentSelectValue;var B=Ca(d.children);if(null!=g){var A=null!=d.value?d.value+"":B;h=!1;if(Array.isArray(g))for(var n=0;n<g.length;n++){if(""+g[n]===A){h=!0;break}}else h=""+g===A;d=
p({selected:void 0,children:void 0},d,{selected:h,children:B})}}if(h=d)va[b]&&(null!=h.children||null!=h.dangerouslySetInnerHTML?u("137",b,""):void 0),null!=h.dangerouslySetInnerHTML&&(null!=h.children?u("60"):void 0,"object"===typeof h.dangerouslySetInnerHTML&&"__html"in h.dangerouslySetInnerHTML?void 0:u("61")),null!=h.style&&"object"!==typeof h.style?u("62",""):void 0;h=d;g=this.makeStaticMarkup;B=1===this.stack.length;A="<"+a.type;for(x in h)if(Da.call(h,x)){var l=h[x];if(null!=l){if("style"===
x){n=void 0;var k="",r="";for(n in l)if(l.hasOwnProperty(n)){var m=0===n.indexOf("--"),t=l[n];if(null!=t){var v=n;if(Y.hasOwnProperty(v))v=Y[v];else{var K=v.replace(xa,"-$1").toLowerCase().replace(ya,"-ms-");v=Y[v]=K}k+=r+v+":";r=n;m=null==t||"boolean"===typeof t||""===t?"":m||"number"!==typeof t||0===t||V.hasOwnProperty(r)&&V[r]?(""+t).trim():t+"px";k+=m;r=";"}}l=k||null}n=null;b:if(m=b,t=h,-1===m.indexOf("-"))m="string"===typeof t.is;else switch(m){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":m=
!1;break b;default:m=!0}if(m)Ea.hasOwnProperty(x)||(n=x,n=la(n)&&null!=l?n+"="+('"'+T(l)+'"'):"");else{m=x;n=l;l=Q.hasOwnProperty(m)?Q[m]:null;if(t="style"!==m)t=null!==l?0===l.type:!(2<m.length)||"o"!==m[0]&&"O"!==m[0]||"n"!==m[1]&&"N"!==m[1]?!1:!0;t||na(m,n,l,!1)?n="":null!==l?(m=l.attributeName,l=l.type,n=3===l||4===l&&!0===n?m+'=""':m+"="+('"'+T(n)+'"')):n=la(m)?m+"="+('"'+T(n)+'"'):""}n&&(A+=" "+n)}}g||B&&(A+=' data-reactroot=""');var x=A;h="";ua.hasOwnProperty(b)?x+="/>":(x+=">",h="</"+a.type+
">");a:{g=d.dangerouslySetInnerHTML;if(null!=g){if(null!=g.__html){g=g.__html;break a}}else if(g=d.children,"string"===typeof g||"number"===typeof g){g=T(g);break a}g=null}null!=g?(d=[],za[b]&&"\n"===g.charAt(0)&&(x+="\n"),x+=g):d=W(d.children);a=a.type;c=null==c||"http://www.w3.org/1999/xhtml"===c?ta(a):"http://www.w3.org/2000/svg"===c&&"foreignObject"===a?"http://www.w3.org/1999/xhtml":c;this.stack.push({domNamespace:c,type:b,children:d,childIndex:0,context:f,footer:h});this.previousWasTextNode=
!1;return x};return a}();function Ha(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}});b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}
var Ia=function(a){function b(f,c){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");var e=a.call(this,{});if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");e=!e||"object"!==typeof e&&"function"!==typeof e?this:e;e.partialRenderer=new Z(f,c);return e}Ha(b,a);b.prototype._destroy=function(a,b){this.partialRenderer.destroy();b(a)};b.prototype._read=function(a){try{this.push(this.partialRenderer.read(a))}catch(c){this.destroy(c)}};
return b}(aa.Readable),Ja={renderToString:function(a){a=new Z(a,!1);try{return a.read(Infinity)}finally{a.destroy()}},renderToStaticMarkup:function(a){a=new Z(a,!0);try{return a.read(Infinity)}finally{a.destroy()}},renderToNodeStream:function(a){return new Ia(a,!1)},renderToStaticNodeStream:function(a){return new Ia(a,!0)},version:"16.7.0"},Ka={default:Ja},La=Ka&&Ja||Ka;module.exports=La.default||La;


/***/ }),
/* 17 */
/*!********************************!*\
  !*** external "object-assign" ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 18 */
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 19 */
/*!***************************!*\
  !*** external "get-port" ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("get-port");

/***/ }),
/* 20 */
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 21 */
/*!***********************************!*\
  !*** ./src/client/core/store.tsx ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(/*! redux */ 2);
var redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ 22);
var middleware_1 = __webpack_require__(/*! ./middleware */ 23);
var reducers_1 = __webpack_require__(/*! ./reducers */ 25);
function configureStore(initialState) {
    var middleware = redux_1.applyMiddleware(middleware_1.reduxLogger);
    if (false) {
        middleware = redux_devtools_extension_1.composeWithDevTools(middleware);
    }
    var store = redux_1.createStore(reducers_1.default, initialState, middleware);
    if (false) {
        module.hot.accept('./reducers', function () {
            var nextReducer = require('./reducers').default;
            store.replaceReducer(nextReducer);
        });
    }
    return store;
}
exports.configureStore = configureStore;


/***/ }),
/* 22 */
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 23 */
/*!**********************************************!*\
  !*** ./src/client/core/middleware/index.tsx ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_logger_1 = __webpack_require__(/*! redux-logger */ 24);
exports.reduxLogger = redux_logger_1.default;


/***/ }),
/* 24 */
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 25 */
/*!**************************************!*\
  !*** ./src/client/core/reducers.tsx ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(/*! redux */ 2);
var reducers_1 = __webpack_require__(/*! ../modules/checkbox/reducers */ 26);
var rootReducer = redux_1.combineReducers({
    checkBoxItems: reducers_1.default,
});
exports.default = rootReducer;


/***/ }),
/* 26 */
/*!**************************************************!*\
  !*** ./src/client/modules/checkbox/reducers.tsx ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var redux_actions_1 = __webpack_require__(/*! redux-actions */ 4);
var constants_1 = __webpack_require__(/*! ../../core/constants */ 5);
var initialState = [];
exports.default = redux_actions_1.handleActions((_a = {},
    _a[constants_1.ACTION.CHECKBOX.ADD] = function (state, action) {
        return state.concat([action.payload]);
    },
    _a), initialState);


/***/ }),
/* 27 */
/*!************************************!*\
  !*** ./src/client/core/routes.tsx ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ 1);
var react_router4_with_layouts_1 = __webpack_require__(/*! react-router4-with-layouts */ 28);
var HomePage_1 = __webpack_require__(/*! ../pages/home/HomePage */ 29);
var DemoPage_1 = __webpack_require__(/*! ../pages/demo/DemoPage */ 31);
var LoginPage_1 = __webpack_require__(/*! ../pages/login/LoginPage */ 37);
var DefaultLayout_1 = __webpack_require__(/*! ../layouts/default/DefaultLayout */ 39);
var EmptyLayout_1 = __webpack_require__(/*! ../layouts/empty/EmptyLayout */ 46);
exports.CoreRoutes = function () { return (React.createElement(react_router_dom_1.Switch, null,
    React.createElement(react_router4_with_layouts_1.Route, { path: "/", component: HomePage_1.HomePage, exact: true, layout: DefaultLayout_1.DefaultLayout }),
    React.createElement(react_router4_with_layouts_1.Route, { path: "/demo", component: DemoPage_1.DemoPage, layout: DefaultLayout_1.DefaultLayout }),
    React.createElement(react_router4_with_layouts_1.Route, { path: "/login", component: LoginPage_1.LoginPage, layout: EmptyLayout_1.EmptyLayout }))); };


/***/ }),
/* 28 */
/*!*********************************************!*\
  !*** external "react-router4-with-layouts" ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-router4-with-layouts");

/***/ }),
/* 29 */
/*!********************************************!*\
  !*** ./src/client/pages/home/HomePage.tsx ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var styles = __webpack_require__(/*! ./HomePage.scss */ 30);
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage(props) {
        return _super.call(this, props) || this;
    }
    HomePage.prototype.render = function () {
        return React.createElement("main", { className: styles.page }, "Component name: HomePage");
    };
    return HomePage;
}(React.Component));
exports.HomePage = HomePage;


/***/ }),
/* 30 */
/*!*********************************************!*\
  !*** ./src/client/pages/home/HomePage.scss ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
	"page": "_R1BtWtfK3h4Fw3uoOQ3R"
};

/***/ }),
/* 31 */
/*!********************************************!*\
  !*** ./src/client/pages/demo/DemoPage.tsx ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var styles = __webpack_require__(/*! ./DemoPage.scss */ 32);
var AppContainer_1 = __webpack_require__(/*! ../../containers/AppContainer */ 33);
var actions_1 = __webpack_require__(/*! ../../modules/checkbox/actions */ 6);
var DemoPage = (function (_super) {
    __extends(DemoPage, _super);
    function DemoPage(props) {
        return _super.call(this, props) || this;
    }
    DemoPage.prototype.render = function () {
        return (React.createElement("main", { className: styles.page },
            "Component name: DemoPage",
            React.createElement(AppContainer_1.default, { addAction: actions_1.addCheckbox, items: [] })));
    };
    return DemoPage;
}(React.Component));
exports.DemoPage = DemoPage;


/***/ }),
/* 32 */
/*!*********************************************!*\
  !*** ./src/client/pages/demo/DemoPage.scss ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
	"page": "_2I9bBt-llMFhV6VebXZacP"
};

/***/ }),
/* 33 */
/*!************************************************!*\
  !*** ./src/client/containers/AppContainer.tsx ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var redux_1 = __webpack_require__(/*! redux */ 2);
var react_redux_1 = __webpack_require__(/*! react-redux */ 3);
var uniqId = __webpack_require__(/*! uniqid */ 34);
var CheckBoxComponent_1 = __webpack_require__(/*! ../components/checkbox/CheckBoxComponent */ 35);
var actions_1 = __webpack_require__(/*! ../modules/checkbox/actions */ 6);
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.selectedItems = new Map();
        _this.handleClick = function (item, checked) {
            if (checked) {
                _this.selectedItems.set(item.id, item);
            }
            else {
                _this.selectedItems.delete(item.id);
            }
        };
        _this.handleAdd = function () {
            _this.props.addAction({
                id: uniqId(),
                label: 'Demo',
                value: 'demo',
            });
        };
        _this.handleDelete = function () {
        };
        _this.state = { items: [] };
        return _this;
    }
    App.prototype.isSelected = function (item) {
        return this.selectedItems.has(item.id);
    };
    App.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("button", { onClick: this.handleAdd }, "Add more"),
            this.props.items.map(function (item) { return (React.createElement("div", { key: item.id },
                React.createElement(CheckBoxComponent_1.CheckBox, { item: item, handleClick: _this.handleClick }),
                React.createElement("button", { onClick: _this.handleDelete.bind(_this, item) }, "Delete"))); })));
    };
    App.defaultProps = {
        items: [
            {
                id: 'string',
                label: 'Demo',
                value: 'demo',
            },
        ],
        addAction: actions_1.addCheckbox,
    };
    return App;
}(React.Component));
exports.AppDisconnected = App;
function mapStateToProps(state) {
    return {
        items: state.checkBoxItems,
    };
}
exports.mapStateToProps = mapStateToProps;
function mapDispatchToProps(dispatch) {
    return {
        addAction: redux_1.bindActionCreators(actions_1.addCheckbox, dispatch),
    };
}
exports.mapDispatchToProps = mapDispatchToProps;
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);


/***/ }),
/* 34 */
/*!*************************!*\
  !*** external "uniqid" ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("uniqid");

/***/ }),
/* 35 */
/*!**************************************************************!*\
  !*** ./src/client/components/checkbox/CheckBoxComponent.tsx ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var styles = __webpack_require__(/*! ./CheckBoxComponent.css */ 36);
var CheckBox = (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (e) {
            var checked = e.target.checked;
            _this.setState({ checked: checked });
            _this.props.handleClick(_this.props.item, checked);
        };
        _this.state = {
            checked: !!props.checked,
        };
        return _this;
    }
    CheckBox.prototype.componentWillMount = function () {
        this.setState({
            checked: !!this.props.checked,
        });
    };
    CheckBox.prototype.render = function () {
        var _a = this.props.item, value = _a.value, label = _a.label;
        return (React.createElement("label", { className: this.state.checked ? styles.checkBox : styles.checkBoxSelected },
            React.createElement("input", { type: "checkbox", onChange: this.handleClick, value: value, defaultChecked: this.props.checked }),
            label));
    };
    CheckBox.defaultProps = {
        checked: false,
    };
    return CheckBox;
}(React.Component));
exports.CheckBox = CheckBox;


/***/ }),
/* 36 */
/*!**************************************************************!*\
  !*** ./src/client/components/checkbox/CheckBoxComponent.css ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
	"checkBox": "usymS7Nkqf0uESbRnxkRH",
	"checkBoxSelected": "_1Mip5yUCg3Quf9cLcNEICl usymS7Nkqf0uESbRnxkRH"
};

/***/ }),
/* 37 */
/*!**********************************************!*\
  !*** ./src/client/pages/login/LoginPage.tsx ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var styles = __webpack_require__(/*! ./LoginPage.scss */ 38);
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ 1);
var LoginPage = (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(props) {
        return _super.call(this, props) || this;
    }
    LoginPage.prototype.render = function () {
        return (React.createElement("main", { className: styles.page },
            "Component name: LoginPage",
            React.createElement("hr", null),
            React.createElement(react_router_dom_1.NavLink, { to: '/' }, "back to home")));
    };
    return LoginPage;
}(React.Component));
exports.LoginPage = LoginPage;


/***/ }),
/* 38 */
/*!***********************************************!*\
  !*** ./src/client/pages/login/LoginPage.scss ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
	"page": "_62GT1Dg690LkfTBcH7dGy"
};

/***/ }),
/* 39 */
/*!******************************************************!*\
  !*** ./src/client/layouts/default/DefaultLayout.tsx ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var HeaderComponent_1 = __webpack_require__(/*! ../../components/header/HeaderComponent */ 40);
var FooterComponent_1 = __webpack_require__(/*! ../../components/footer/FooterComponent */ 44);
var styles = __webpack_require__(/*! ./DefaultLayout.scss */ 7);
var DefaultLayout = (function (_super) {
    __extends(DefaultLayout, _super);
    function DefaultLayout(props) {
        return _super.call(this, props) || this;
    }
    DefaultLayout.prototype.render = function () {
        return (React.createElement("div", { className: styles.layout },
            "Component name: DefaultLayout",
            React.createElement(HeaderComponent_1.HeaderComponent, { key: 'header' }),
            this.props.children,
            React.createElement(FooterComponent_1.FooterComponent, { key: 'footer' })));
    };
    return DefaultLayout;
}(React.Component));
exports.DefaultLayout = DefaultLayout;


/***/ }),
/* 40 */
/*!**********************************************************!*\
  !*** ./src/client/components/header/HeaderComponent.tsx ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var styles = __webpack_require__(/*! ./HeaderComponent.scss */ 41);
var NavigationComponent_1 = __webpack_require__(/*! ../navigation/NavigationComponent */ 42);
var HeaderComponent = (function (_super) {
    __extends(HeaderComponent, _super);
    function HeaderComponent(props) {
        return _super.call(this, props) || this;
    }
    HeaderComponent.prototype.render = function () {
        return (React.createElement("div", { className: styles.header },
            "Component name: HeaderComponent",
            React.createElement(NavigationComponent_1.NavigationComponent, null)));
    };
    return HeaderComponent;
}(React.Component));
exports.HeaderComponent = HeaderComponent;


/***/ }),
/* 41 */
/*!***********************************************************!*\
  !*** ./src/client/components/header/HeaderComponent.scss ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
	"header": "RnmmjinHL6WsHJBl8rtyb"
};

/***/ }),
/* 42 */
/*!******************************************************************!*\
  !*** ./src/client/components/navigation/NavigationComponent.tsx ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ 1);
var styles = __webpack_require__(/*! ./NavigationComponent.scss */ 43);
var NavigationComponent = (function (_super) {
    __extends(NavigationComponent, _super);
    function NavigationComponent(props) {
        return _super.call(this, props) || this;
    }
    NavigationComponent.prototype.render = function () {
        return (React.createElement("nav", { className: styles.navigation },
            React.createElement("div", null, "Component name: NavigationComponent"),
            React.createElement(react_router_dom_1.NavLink, { to: '/', exact: true }, "Home"),
            React.createElement(react_router_dom_1.NavLink, { to: '/demo' }, "Demo"),
            React.createElement(react_router_dom_1.NavLink, { to: '/login', style: { float: 'right' } }, "Login")));
    };
    return NavigationComponent;
}(React.Component));
exports.NavigationComponent = NavigationComponent;


/***/ }),
/* 43 */
/*!*******************************************************************!*\
  !*** ./src/client/components/navigation/NavigationComponent.scss ***!
  \*******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
	"navigation": "_1eBufkGeiUVOsc791udF6P"
};

/***/ }),
/* 44 */
/*!**********************************************************!*\
  !*** ./src/client/components/footer/FooterComponent.tsx ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var styles = __webpack_require__(/*! ./FooterComponent.scss */ 45);
var FooterComponent = (function (_super) {
    __extends(FooterComponent, _super);
    function FooterComponent(props) {
        return _super.call(this, props) || this;
    }
    FooterComponent.prototype.render = function () {
        return React.createElement("footer", { className: styles.footer }, "Component name: FooterComponent");
    };
    return FooterComponent;
}(React.Component));
exports.FooterComponent = FooterComponent;


/***/ }),
/* 45 */
/*!***********************************************************!*\
  !*** ./src/client/components/footer/FooterComponent.scss ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
	"footer": "_1CAv33Pc8SJnfGn1m27kEc"
};

/***/ }),
/* 46 */
/*!**************************************************!*\
  !*** ./src/client/layouts/empty/EmptyLayout.tsx ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var styles = __webpack_require__(/*! ../default/DefaultLayout.scss */ 7);
var EmptyLayout = (function (_super) {
    __extends(EmptyLayout, _super);
    function EmptyLayout(props) {
        return _super.call(this, props) || this;
    }
    EmptyLayout.prototype.render = function () {
        return (React.createElement("div", { className: styles.layout },
            "Component name: EmptyLayout",
            this.props.children));
    };
    return EmptyLayout;
}(React.Component));
exports.EmptyLayout = EmptyLayout;


/***/ }),
/* 47 */
/*!******************************************!*\
  !*** ./src/client/core/initialState.tsx ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initialState = {
    checkBoxItems: [{ id: '1', label: '1', value: '1' }, { id: '2', label: '2', value: '2' }],
};


/***/ })
/******/ ]);