"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./admin/ui-web/EditContacts/index.js":
/*!********************************************!*\
  !*** ./admin/ui-web/EditContacts/index.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var admin_ui_admin_EditCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! admin/ui-admin/EditCard */ \"./admin/ui-admin/EditCard/index.js\");\n/* harmony import */ var admin_ui_web_FormContacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! admin/ui-web/FormContacts */ \"./admin/ui-web/FormContacts/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// ui-admin\n\n// ui-web\n\nfunction EditContacts(param) {\n    var database = param.database;\n    var _this = this;\n    var contacts = database.contacts ? database.contacts : [];\n    console.log(contacts);\n    return contacts.map(function(contact, idx) {\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"jebat\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(admin_ui_admin_EditCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    title: contact.name,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(admin_ui_web_FormContacts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        titleButton: \"Uložit změny\",\n                        data: database.contact\n                    }, void 0, false, {\n                        fileName: \"/Users/radekmatyas/Desktop/M3 studio/10-2 vl-lipova/admin/ui-web/EditContacts/index.js\",\n                        lineNumber: 14,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/radekmatyas/Desktop/M3 studio/10-2 vl-lipova/admin/ui-web/EditContacts/index.js\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, idx, true, {\n            fileName: \"/Users/radekmatyas/Desktop/M3 studio/10-2 vl-lipova/admin/ui-web/EditContacts/index.js\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, _this);\n    });\n}\n_c = EditContacts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditContacts);\nvar _c;\n$RefreshReg$(_c, \"EditContacts\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hZG1pbi91aS13ZWIvRWRpdENvbnRhY3RzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxFQUFXO0FBQ21DO0FBQzlDLEVBQVM7QUFDMkM7U0FFM0NFLFlBQVksQ0FBQyxLQUFZLEVBQUUsQ0FBQztRQUFiQyxRQUFRLEdBQVYsS0FBWSxDQUFWQSxRQUFROztJQUM1QixHQUFLLENBQUNDLFFBQVEsR0FBR0QsUUFBUSxDQUFDQyxRQUFRLEdBQUdELFFBQVEsQ0FBQ0MsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUUzREMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVE7SUFDcEIsTUFBTSxDQUFDQSxRQUFRLENBQUNHLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE9BQU8sRUFBRUMsR0FBRyxFQUFLLENBQUM7b0ZBQ2xDQyxDQUFHOztnQkFBVyxDQUVYOzRGQUFDViwrREFBUTtvQkFBQ1csS0FBSyxFQUFFSCxPQUFPLENBQUNJLElBQUk7MEdBQ3hCWCxpRUFBWTt3QkFDVFksV0FBVyxFQUFDLENBQWM7d0JBQzFCQyxJQUFJLEVBQUVYLFFBQVEsQ0FBQ0ssT0FBTzs7Ozs7Ozs7Ozs7O1dBTHhCQyxHQUFHOzs7OztJQVNqQixDQUFDO0FBQ0wsQ0FBQztLQWZRUCxZQUFZO0FBaUJyQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FkbWluL3VpLXdlYi9FZGl0Q29udGFjdHMvaW5kZXguanM/NzUwNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB1aS1hZG1pblxyXG5pbXBvcnQgRWRpdENhcmQgZnJvbSBcImFkbWluL3VpLWFkbWluL0VkaXRDYXJkXCI7XHJcbi8vIHVpLXdlYlxyXG5pbXBvcnQgRm9ybUNvbnRhY3RzIGZyb20gXCJhZG1pbi91aS13ZWIvRm9ybUNvbnRhY3RzXCI7XHJcblxyXG5mdW5jdGlvbiBFZGl0Q29udGFjdHMoeyBkYXRhYmFzZSB9KSB7XHJcbiAgICBjb25zdCBjb250YWN0cyA9IGRhdGFiYXNlLmNvbnRhY3RzID8gZGF0YWJhc2UuY29udGFjdHMgOiBbXTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjb250YWN0cyk7XHJcbiAgICByZXR1cm4gY29udGFjdHMubWFwKChjb250YWN0LCBpZHgpID0+IHtcclxuICAgICAgICA8ZGl2IGtleT17aWR4fT5cclxuICAgICAgICAgICAgamViYXRcclxuICAgICAgICAgICAgPEVkaXRDYXJkIHRpdGxlPXtjb250YWN0Lm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250YWN0c1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQnV0dG9uPVwiVWxvxb5pdCB6bcSbbnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFiYXNlLmNvbnRhY3R9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0VkaXRDYXJkPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0Q29udGFjdHM7XHJcbiJdLCJuYW1lcyI6WyJFZGl0Q2FyZCIsIkZvcm1Db250YWN0cyIsIkVkaXRDb250YWN0cyIsImRhdGFiYXNlIiwiY29udGFjdHMiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiY29udGFjdCIsImlkeCIsImRpdiIsInRpdGxlIiwibmFtZSIsInRpdGxlQnV0dG9uIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./admin/ui-web/EditContacts/index.js\n");

/***/ })

});