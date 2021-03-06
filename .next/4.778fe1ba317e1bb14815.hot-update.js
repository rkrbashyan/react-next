webpackHotUpdate(4,{

/***/ "./components/User.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/rubenkrbashyan/React/react-next/components/User.js';

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();



var user = function user(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 5
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 6
                }
            },
            props.name
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            },
            'Age: ',
            props.age
        )
    );
};

var _default = user;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(user, 'user', '/Users/rubenkrbashyan/React/react-next/components/User.js');
    reactHotLoader.register(_default, 'default', '/Users/rubenkrbashyan/React/react-next/components/User.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/auth/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_User__ = __webpack_require__("./components/User.js");
var _jsxFileName = '/Users/rubenkrbashyan/React/react-next/pages/auth/index.js';

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();





var authIndexPage = function authIndexPage() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            },
            'Auth Index Page'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_User__["a" /* default */], { name: 'Ru', age: '44', __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        })
    );
};

var _default = authIndexPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(authIndexPage, 'authIndexPage', '/Users/rubenkrbashyan/React/react-next/pages/auth/index.js');
    reactHotLoader.register(_default, 'default', '/Users/rubenkrbashyan/React/react-next/pages/auth/index.js');
    leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/auth")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.778fe1ba317e1bb14815.hot-update.js.map