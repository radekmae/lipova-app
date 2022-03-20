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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var admin_ui_admin_EditCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! admin/ui-admin/EditCard */ \"./admin/ui-admin/EditCard/index.js\");\n/* harmony import */ var admin_ui_web_FormContacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! admin/ui-web/FormContacts */ \"./admin/ui-web/FormContacts/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n// ui-admin\n\n// ui-web\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar EditContacts = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(EditContacts, Component1);\n    var _super = _createSuper(EditContacts);\n    function EditContacts() {\n        _classCallCheck(this, EditContacts);\n        return _super.apply(this, arguments);\n    }\n    _createClass(EditContacts, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                var database = this.props.database;\n                return database && database.contacts.map(function(contact, idx) {\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"jebat\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(admin_ui_admin_EditCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                title: contact.name,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(admin_ui_web_FormContacts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    titleButton: \"Uložit změny\",\n                                    data: database.contact\n                                }, void 0, false, {\n                                    fileName: \"/Users/radekmatyas/Desktop/M3 studio/10-2 vl-lipova/admin/ui-web/EditContacts/index.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 29\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/radekmatyas/Desktop/M3 studio/10-2 vl-lipova/admin/ui-web/EditContacts/index.js\",\n                                lineNumber: 17,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, idx, true, {\n                        fileName: \"/Users/radekmatyas/Desktop/M3 studio/10-2 vl-lipova/admin/ui-web/EditContacts/index.js\",\n                        lineNumber: 15,\n                        columnNumber: 21\n                    }, _this));\n                });\n            }\n        }\n    ]);\n    return EditContacts;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditContacts);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hZG1pbi91aS13ZWIvRWRpdENvbnRhY3RzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QztBQUN4QyxFQUFXO0FBQ21DO0FBQzlDLEVBQVM7QUFDMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTlDSSxZQUFZLGlCQUFsQixRQUFROztjQUFGQSxZQUFZOzhCQUFaQSxZQUFZO2FBQVpBLFlBQVk7OEJBQVpBLFlBQVk7OztpQkFBWkEsWUFBWTs7WUFDZEMsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDOztnQkFDTixHQUFLLENBQUdDLFFBQVEsR0FBSyxJQUFJLENBQUNDLEtBQUssQ0FBdkJELFFBQVE7Z0JBRWhCLE1BQU0sQ0FDRkEsUUFBUSxJQUNSQSxRQUFRLENBQUNFLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsT0FBTyxFQUFFQyxHQUFHLEVBQUssQ0FBQztvQkFDckMsTUFBTSw2RUFDREMsQ0FBRzs7NEJBQVcsQ0FFWDt3R0FBQ1YsK0RBQVE7Z0NBQUNXLEtBQUssRUFBRUgsT0FBTyxDQUFDSSxJQUFJO3NIQUN4QlgsaUVBQVk7b0NBQ1RZLFdBQVcsRUFBQyxDQUFjO29DQUMxQkMsSUFBSSxFQUFFVixRQUFRLENBQUNJLE9BQU87Ozs7Ozs7Ozs7Ozt1QkFMeEJDLEdBQUc7Ozs7O2dCQVVyQixDQUFDO1lBRVQsQ0FBQzs7O1dBcEJDUCxZQUFZO0VBQVNILDRDQUFTO0FBdUJwQywrREFBZUcsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FkbWluL3VpLXdlYi9FZGl0Q29udGFjdHMvaW5kZXguanM/NzUwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIHVpLWFkbWluXHJcbmltcG9ydCBFZGl0Q2FyZCBmcm9tIFwiYWRtaW4vdWktYWRtaW4vRWRpdENhcmRcIjtcclxuLy8gdWktd2ViXHJcbmltcG9ydCBGb3JtQ29udGFjdHMgZnJvbSBcImFkbWluL3VpLXdlYi9Gb3JtQ29udGFjdHNcIjtcclxuXHJcbmNsYXNzIEVkaXRDb250YWN0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhYmFzZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgZGF0YWJhc2UgJiZcclxuICAgICAgICAgICAgZGF0YWJhc2UuY29udGFjdHMubWFwKChjb250YWN0LCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGplYmF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0Q2FyZCB0aXRsZT17Y29udGFjdC5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udGFjdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUJ1dHRvbj1cIlVsb8W+aXQgem3Em255XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhYmFzZS5jb250YWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9FZGl0Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdENvbnRhY3RzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJFZGl0Q2FyZCIsIkZvcm1Db250YWN0cyIsIkVkaXRDb250YWN0cyIsInJlbmRlciIsImRhdGFiYXNlIiwicHJvcHMiLCJjb250YWN0cyIsIm1hcCIsImNvbnRhY3QiLCJpZHgiLCJkaXYiLCJ0aXRsZSIsIm5hbWUiLCJ0aXRsZUJ1dHRvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./admin/ui-web/EditContacts/index.js\n");

/***/ })

});