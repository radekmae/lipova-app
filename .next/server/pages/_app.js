/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./admin/components/Database/context.js":
/*!**********************************************!*\
  !*** ./admin/components/Database/context.js ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DatabaseContext\": () => (/* binding */ DatabaseContext),\n/* harmony export */   \"DatabaseProvider\": () => (/* binding */ DatabaseProvider),\n/* harmony export */   \"useDatabaseContext\": () => (/* binding */ useDatabaseContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_Firebase_initFirebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Firebase/initFirebase */ \"./components/Firebase/initFirebase.js\");\n/* harmony import */ var _initialDatabase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initialDatabase */ \"./admin/components/Database/initialDatabase.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/database */ \"firebase/database\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Firebase_initFirebase__WEBPACK_IMPORTED_MODULE_2__, firebase_database__WEBPACK_IMPORTED_MODULE_4__]);\n([components_Firebase_initFirebase__WEBPACK_IMPORTED_MODULE_2__, firebase_database__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n// import { child, get } from \"firebase/database\";\n\n\n\n// Admin Database Context\nconst DatabaseContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    user: null\n});\nfunction DatabaseProvider({ children  }) {\n    const { 0: database , 1: setDatabase  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_initialDatabase__WEBPACK_IMPORTED_MODULE_3__.initialDatabase);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.onValue)(components_Firebase_initFirebase__WEBPACK_IMPORTED_MODULE_2__.dbRef, (snapshot)=>{\n            if (snapshot.exists()) {\n                const db = snapshot.val();\n                setDatabase({\n                    database: db.web,\n                    settings: db.admin.settings,\n                    loading: false\n                });\n            }\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DatabaseContext.Provider, {\n        value: {\n            ...database\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/radekmatyas/Desktop/M3 studio/10-2 vl-lipova/admin/components/Database/context.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this));\n}\nconst useDatabaseContext = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DatabaseContext);\n};\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hZG1pbi9jb21wb25lbnRzL0RhdGFiYXNlL2NvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkU7QUFDN0UsRUFBa0Q7QUFDTTtBQUNMO0FBRVI7QUFFM0MsRUFBeUI7QUFFbEIsS0FBSyxDQUFDUSxlQUFlLGlCQUFHSixvREFBYSxDQUFDLENBQUM7SUFBQ0ssSUFBSSxFQUFFLElBQUk7QUFBQyxDQUFDO0FBRXBELFNBQVNDLGdCQUFnQixDQUFDLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQzVDLEtBQUssTUFBRUMsUUFBUSxNQUFFQyxXQUFXLE1BQUlaLCtDQUFRLENBQUNLLDZEQUFlO0lBRXhESixnREFBUyxLQUFPLENBQUM7UUFDYkssMERBQU8sQ0FBQ0YsbUVBQUssR0FBR1MsUUFBUSxHQUFLLENBQUM7WUFDMUIsRUFBRSxFQUFFQSxRQUFRLENBQUNDLE1BQU0sSUFBSSxDQUFDO2dCQUNwQixLQUFLLENBQUNDLEVBQUUsR0FBR0YsUUFBUSxDQUFDRyxHQUFHO2dCQUN2QkosV0FBVyxDQUFDLENBQUM7b0JBQ1RELFFBQVEsRUFBRUksRUFBRSxDQUFDRSxHQUFHO29CQUNoQkMsUUFBUSxFQUFFSCxFQUFFLENBQUNJLEtBQUssQ0FBQ0QsUUFBUTtvQkFDM0JFLE9BQU8sRUFBRSxLQUFLO2dCQUNsQixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSw2RUFDRGIsZUFBZSxDQUFDYyxRQUFRO1FBQUNDLEtBQUssRUFBRSxDQUFDO2VBQUlYLFFBQVE7UUFBQyxDQUFDO2tCQUMzQ0QsUUFBUTs7Ozs7O0FBR3JCLENBQUM7QUFFTSxLQUFLLENBQUNhLGtCQUFrQixPQUFTLENBQUM7SUFDckMsTUFBTSxDQUFDckIsaURBQVUsQ0FBQ0ssZUFBZTtBQUNyQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmwtbGlwb3ZhLy4vYWRtaW4vY29tcG9uZW50cy9EYXRhYmFzZS9jb250ZXh0LmpzP2ZjYTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgY2hpbGQsIGdldCB9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xyXG5pbXBvcnQgeyBkYlJlZiB9IGZyb20gXCJjb21wb25lbnRzL0ZpcmViYXNlL2luaXRGaXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBpbml0aWFsRGF0YWJhc2UgfSBmcm9tIFwiLi9pbml0aWFsRGF0YWJhc2VcIjtcclxuXHJcbmltcG9ydCB7IG9uVmFsdWUgfSBmcm9tIFwiZmlyZWJhc2UvZGF0YWJhc2VcIjtcclxuXHJcbi8vIEFkbWluIERhdGFiYXNlIENvbnRleHRcclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhYmFzZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHsgdXNlcjogbnVsbCB9KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEYXRhYmFzZVByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3QgW2RhdGFiYXNlLCBzZXREYXRhYmFzZV0gPSB1c2VTdGF0ZShpbml0aWFsRGF0YWJhc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgb25WYWx1ZShkYlJlZiwgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzbmFwc2hvdC5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGIgPSBzbmFwc2hvdC52YWwoKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGFiYXNlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhYmFzZTogZGIud2ViLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiBkYi5hZG1pbi5zZXR0aW5ncyxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RGF0YWJhc2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IC4uLmRhdGFiYXNlIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9EYXRhYmFzZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlRGF0YWJhc2VDb250ZXh0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHVzZUNvbnRleHQoRGF0YWJhc2VDb250ZXh0KTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImRiUmVmIiwiaW5pdGlhbERhdGFiYXNlIiwib25WYWx1ZSIsIkRhdGFiYXNlQ29udGV4dCIsInVzZXIiLCJEYXRhYmFzZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkYXRhYmFzZSIsInNldERhdGFiYXNlIiwic25hcHNob3QiLCJleGlzdHMiLCJkYiIsInZhbCIsIndlYiIsInNldHRpbmdzIiwiYWRtaW4iLCJsb2FkaW5nIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZURhdGFiYXNlQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./admin/components/Database/context.js\n");

/***/ }),

/***/ "./admin/components/Database/index.js":
/*!********************************************!*\
  !*** ./admin/components/Database/index.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DatabaseContext\": () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.DatabaseContext),\n/* harmony export */   \"DatabaseProvider\": () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.DatabaseProvider),\n/* harmony export */   \"useDatabaseContext\": () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.useDatabaseContext),\n/* harmony export */   \"initialDatabase\": () => (/* reexport safe */ _initialDatabase__WEBPACK_IMPORTED_MODULE_1__.initialDatabase)\n/* harmony export */ });\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ \"./admin/components/Database/context.js\");\n/* harmony import */ var _initialDatabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialDatabase */ \"./admin/components/Database/initialDatabase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context__WEBPACK_IMPORTED_MODULE_0__]);\n_context__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hZG1pbi9jb21wb25lbnRzL0RhdGFiYXNlL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlrQjtBQUNpQztBQU1oQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZsLWxpcG92YS8uL2FkbWluL2NvbXBvbmVudHMvRGF0YWJhc2UvaW5kZXguanM/M2Q3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgRGF0YWJhc2VDb250ZXh0LFxyXG4gICAgRGF0YWJhc2VQcm92aWRlcixcclxuICAgIHVzZURhdGFiYXNlQ29udGV4dCxcclxufSBmcm9tIFwiLi9jb250ZXh0XCI7XHJcbmltcG9ydCB7IGluaXRpYWxEYXRhYmFzZSB9IGZyb20gXCIuL2luaXRpYWxEYXRhYmFzZVwiO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIERhdGFiYXNlQ29udGV4dCxcclxuICAgIERhdGFiYXNlUHJvdmlkZXIsXHJcbiAgICB1c2VEYXRhYmFzZUNvbnRleHQsXHJcbiAgICBpbml0aWFsRGF0YWJhc2UsXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJEYXRhYmFzZUNvbnRleHQiLCJEYXRhYmFzZVByb3ZpZGVyIiwidXNlRGF0YWJhc2VDb250ZXh0IiwiaW5pdGlhbERhdGFiYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./admin/components/Database/index.js\n");

/***/ }),

/***/ "./admin/components/Database/initialDatabase.js":
/*!******************************************************!*\
  !*** ./admin/components/Database/initialDatabase.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialDatabase\": () => (/* binding */ initialDatabase)\n/* harmony export */ });\nconst initialDatabase = {\n    loading: true,\n    database: {\n        contacts: [],\n        flats: [],\n        floors: [],\n        pins: {},\n        standards: {\n            flats: {},\n            house: {},\n            system: {}\n        },\n        strings: {}\n    },\n    settings: {\n        weblock: {\n            data: {}\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hZG1pbi9jb21wb25lbnRzL0RhdGFiYXNlL2luaXRpYWxEYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sS0FBSyxDQUFDQSxlQUFlLEdBQUcsQ0FBQztJQUM1QkMsT0FBTyxFQUFFLElBQUk7SUFDYkMsUUFBUSxFQUFFLENBQUM7UUFDUEMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNaQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ1RDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDVkMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNSQyxTQUFTLEVBQUUsQ0FBQztZQUNSSCxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ1RJLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDVEMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNkLENBQUM7UUFDREMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNmLENBQUM7SUFDREMsUUFBUSxFQUFFLENBQUM7UUFDUEMsT0FBTyxFQUFFLENBQUM7WUFBQ0MsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUFDLENBQUM7SUFDekIsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92bC1saXBvdmEvLi9hZG1pbi9jb21wb25lbnRzL0RhdGFiYXNlL2luaXRpYWxEYXRhYmFzZS5qcz82M2JiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsRGF0YWJhc2UgPSB7XG4gICAgbG9hZGluZzogdHJ1ZSxcbiAgICBkYXRhYmFzZToge1xuICAgICAgICBjb250YWN0czogW10sXG4gICAgICAgIGZsYXRzOiBbXSxcbiAgICAgICAgZmxvb3JzOiBbXSxcbiAgICAgICAgcGluczoge30sXG4gICAgICAgIHN0YW5kYXJkczoge1xuICAgICAgICAgICAgZmxhdHM6IHt9LFxuICAgICAgICAgICAgaG91c2U6IHt9LFxuICAgICAgICAgICAgc3lzdGVtOiB7fSxcbiAgICAgICAgfSxcbiAgICAgICAgc3RyaW5nczoge30sXG4gICAgfSxcbiAgICBzZXR0aW5nczoge1xuICAgICAgICB3ZWJsb2NrOiB7IGRhdGE6IHt9IH0sXG4gICAgfSxcbn07XG4iXSwibmFtZXMiOlsiaW5pdGlhbERhdGFiYXNlIiwibG9hZGluZyIsImRhdGFiYXNlIiwiY29udGFjdHMiLCJmbGF0cyIsImZsb29ycyIsInBpbnMiLCJzdGFuZGFyZHMiLCJob3VzZSIsInN5c3RlbSIsInN0cmluZ3MiLCJzZXR0aW5ncyIsIndlYmxvY2siLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./admin/components/Database/initialDatabase.js\n");

/***/ }),

/***/ "./components/Cookies/index.js":
/*!*************************************!*\
  !*** ./components/Cookies/index.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeUserCookie\": () => (/* reexport safe */ _userCookies__WEBPACK_IMPORTED_MODULE_0__.removeUserCookie),\n/* harmony export */   \"setUserCookie\": () => (/* reexport safe */ _userCookies__WEBPACK_IMPORTED_MODULE_0__.setUserCookie),\n/* harmony export */   \"getUserFromCookie\": () => (/* reexport safe */ _userCookies__WEBPACK_IMPORTED_MODULE_0__.getUserFromCookie)\n/* harmony export */ });\n/* harmony import */ var _userCookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userCookies */ \"./components/Cookies/userCookies.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_userCookies__WEBPACK_IMPORTED_MODULE_0__]);\n_userCookies__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nvb2tpZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUlzQjtBQUV3QyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZsLWxpcG92YS8uL2NvbXBvbmVudHMvQ29va2llcy9pbmRleC5qcz9mZjhhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICByZW1vdmVVc2VyQ29va2llLFxyXG4gICAgc2V0VXNlckNvb2tpZSxcclxuICAgIGdldFVzZXJGcm9tQ29va2llLFxyXG59IGZyb20gXCIuL3VzZXJDb29raWVzXCI7XHJcblxyXG5leHBvcnQgeyByZW1vdmVVc2VyQ29va2llLCBzZXRVc2VyQ29va2llLCBnZXRVc2VyRnJvbUNvb2tpZSB9O1xyXG4iXSwibmFtZXMiOlsicmVtb3ZlVXNlckNvb2tpZSIsInNldFVzZXJDb29raWUiLCJnZXRVc2VyRnJvbUNvb2tpZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Cookies/index.js\n");

/***/ }),

/***/ "./components/Cookies/userCookies.js":
/*!*******************************************!*\
  !*** ./components/Cookies/userCookies.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUserFromCookie\": () => (/* binding */ getUserFromCookie),\n/* harmony export */   \"setUserCookie\": () => (/* binding */ setUserCookie),\n/* harmony export */   \"removeUserCookie\": () => (/* binding */ removeUserCookie)\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\nconst getUserFromCookie = ()=>{\n    const cookie = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"auth\");\n    if (!cookie) {\n        return;\n    }\n    return JSON.parse(cookie);\n};\nconst setUserCookie = (user)=>{\n    js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(\"auth\", JSON.stringify(user), {\n        expires: 1 / 24\n    });\n};\nconst removeUserCookie = ()=>js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove(\"auth\")\n;\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nvb2tpZXMvdXNlckNvb2tpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQjtBQUV4QixLQUFLLENBQUNDLGlCQUFpQixPQUFTLENBQUM7SUFDcEMsS0FBSyxDQUFDQyxNQUFNLEdBQUdGLHFEQUFXLENBQUMsQ0FBTTtJQUNqQyxFQUFFLEdBQUdFLE1BQU0sRUFBRSxDQUFDO1FBQ1YsTUFBTTtJQUNWLENBQUM7SUFDRCxNQUFNLENBQUNFLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxNQUFNO0FBQzVCLENBQUM7QUFFTSxLQUFLLENBQUNJLGFBQWEsSUFBSUMsSUFBSSxHQUFLLENBQUM7SUFDcENQLHFEQUFXLENBQUMsQ0FBTSxPQUFFSSxJQUFJLENBQUNLLFNBQVMsQ0FBQ0YsSUFBSSxHQUFHLENBQUM7UUFDdkNHLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRTtJQUNuQixDQUFDO0FBQ0wsQ0FBQztBQUVNLEtBQUssQ0FBQ0MsZ0JBQWdCLE9BQVNYLHdEQUFjLENBQUMsQ0FBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZsLWxpcG92YS8uL2NvbXBvbmVudHMvQ29va2llcy91c2VyQ29va2llcy5qcz8xMzY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJGcm9tQ29va2llID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvb2tpZSA9IGNvb2tpZXMuZ2V0KFwiYXV0aFwiKTtcbiAgICBpZiAoIWNvb2tpZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBKU09OLnBhcnNlKGNvb2tpZSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0VXNlckNvb2tpZSA9ICh1c2VyKSA9PiB7XG4gICAgY29va2llcy5zZXQoXCJhdXRoXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpLCB7XG4gICAgICAgIGV4cGlyZXM6IDEgLyAyNCxcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVVc2VyQ29va2llID0gKCkgPT4gY29va2llcy5yZW1vdmUoXCJhdXRoXCIpO1xuIl0sIm5hbWVzIjpbImNvb2tpZXMiLCJnZXRVc2VyRnJvbUNvb2tpZSIsImNvb2tpZSIsImdldCIsIkpTT04iLCJwYXJzZSIsInNldFVzZXJDb29raWUiLCJ1c2VyIiwic2V0Iiwic3RyaW5naWZ5IiwiZXhwaXJlcyIsInJlbW92ZVVzZXJDb29raWUiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Cookies/userCookies.js\n");

/***/ }),

/***/ "./components/Firebase/initFirebase.js":
/*!*********************************************!*\
  !*** ./components/Firebase/initFirebase.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initFirebase\": () => (/* binding */ initFirebase),\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"dbRef\": () => (/* binding */ dbRef)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/database */ \"firebase/database\");\n/* harmony import */ var constants_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constants/firebaseConfig */ \"./constants/firebaseConfig.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_database__WEBPACK_IMPORTED_MODULE_1__, firebase_app__WEBPACK_IMPORTED_MODULE_0__]);\n([firebase_database__WEBPACK_IMPORTED_MODULE_1__, firebase_app__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n// Modular Firebase v.9 Initialization.\n\n\n\nfunction initFirebase() {\n    if (true) {\n        console.warn(\"INITED FIREBASE\");\n        return (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(constants_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    }\n}\nconst app = initFirebase();\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.getDatabase)();\nconst dbRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(db, \"database\");\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpcmViYXNlL2luaXRGaXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsRUFBdUM7QUFDSztBQUNRO0FBQ1A7QUFFdEMsU0FBU0ksWUFBWSxHQUFHLENBQUM7SUFDNUIsRUFBRSxFQUFFLElBQTJCLEVBQUUsQ0FBQztRQUM5QkUsT0FBTyxDQUFDQyxJQUFJLENBQUMsQ0FBaUI7UUFDOUIsTUFBTSxDQUFDUCwyREFBYSxDQUFDRyxnRUFBTTtJQUMvQixDQUFDO0FBQ0wsQ0FBQztBQUVNLEtBQUssQ0FBQ0ssR0FBRyxHQUFHSixZQUFZO0FBRXhCLEtBQUssQ0FBQ0ssRUFBRSxHQUFHUiw4REFBVztBQUV0QixLQUFLLENBQUNTLEtBQUssR0FBR1Isc0RBQUcsQ0FBQ08sRUFBRSxFQUFFLENBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92bC1saXBvdmEvLi9jb21wb25lbnRzL0ZpcmViYXNlL2luaXRGaXJlYmFzZS5qcz9mYWIwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZHVsYXIgRmlyZWJhc2Ugdi45IEluaXRpYWxpemF0aW9uLlxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldERhdGFiYXNlLCByZWYgfSBmcm9tIFwiZmlyZWJhc2UvZGF0YWJhc2VcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcImNvbnN0YW50cy9maXJlYmFzZUNvbmZpZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEZpcmViYXNlKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiSU5JVEVEIEZJUkVCQVNFXCIpO1xuICAgICAgICByZXR1cm4gaW5pdGlhbGl6ZUFwcChjb25maWcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFwcCA9IGluaXRGaXJlYmFzZSgpO1xuXG5leHBvcnQgY29uc3QgZGIgPSBnZXREYXRhYmFzZSgpO1xuXG5leHBvcnQgY29uc3QgZGJSZWYgPSByZWYoZGIsIFwiZGF0YWJhc2VcIik7XG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldERhdGFiYXNlIiwicmVmIiwiY29uZmlnIiwiaW5pdEZpcmViYXNlIiwidW5kZWZpbmVkIiwiY29uc29sZSIsIndhcm4iLCJhcHAiLCJkYiIsImRiUmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Firebase/initFirebase.js\n");

/***/ }),

/***/ "./components/Session/context.js":
/*!***************************************!*\
  !*** ./components/Session/context.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"useAuthContext\": () => (/* binding */ useAuthContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _mapUserData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapUserData */ \"./components/Session/mapUserData.js\");\n/* harmony import */ var components_Cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Cookies */ \"./components/Cookies/index.js\");\n/* harmony import */ var constants_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! constants/routes */ \"./constants/routes.js\");\n/* harmony import */ var constants_publicPages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! constants/publicPages */ \"./constants/publicPages.js\");\n/* harmony import */ var constants_authPages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! constants/authPages */ \"./constants/authPages.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Cookies__WEBPACK_IMPORTED_MODULE_5__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__]);\n([components_Cookies__WEBPACK_IMPORTED_MODULE_5__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\n// components\n\n\n// constants\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    user: null\n});\nfunction AuthProvider({ children  }) {\n    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();\n    const logout = async ()=>{\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(auth);\n        (0,components_Cookies__WEBPACK_IMPORTED_MODULE_5__.removeUserCookie)();\n        router.push(constants_routes__WEBPACK_IMPORTED_MODULE_6__.LOGIN);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribeListener = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onIdTokenChanged)(auth, (user)=>{\n            if (user) {\n                const userData = (0,_mapUserData__WEBPACK_IMPORTED_MODULE_4__.mapUserData)(user);\n                (0,components_Cookies__WEBPACK_IMPORTED_MODULE_5__.setUserCookie)(userData);\n                setUser(userData);\n                if (router.pathname == constants_routes__WEBPACK_IMPORTED_MODULE_6__.LOGIN) {\n                    router.push(constants_routes__WEBPACK_IMPORTED_MODULE_6__.ADMIN);\n                }\n            } else {\n                (0,components_Cookies__WEBPACK_IMPORTED_MODULE_5__.removeUserCookie)();\n                setUser();\n                if (constants_authPages__WEBPACK_IMPORTED_MODULE_8__[\"default\"].includes(router.pathname)) {\n                    return router.push(constants_routes__WEBPACK_IMPORTED_MODULE_6__.LOGIN);\n                } else if (!constants_publicPages__WEBPACK_IMPORTED_MODULE_7__[\"default\"].includes(router.pathname)) {\n                    router.push(constants_routes__WEBPACK_IMPORTED_MODULE_6__.LANDING);\n                }\n            }\n        });\n        const userFromCookie = (0,components_Cookies__WEBPACK_IMPORTED_MODULE_5__.getUserFromCookie)();\n        setUser(userFromCookie);\n        return ()=>{\n            unsubscribeListener();\n        };\n    }, [\n        auth\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user: user1,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/radekmatyas/Desktop/M3 studio/10-2 vl-lipova/components/Session/context.js\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, this));\n}\nconst useAuthContext = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n};\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nlc3Npb24vY29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNFO0FBQy9CO0FBQzJCO0FBQ2xFLEVBQWE7QUFDOEI7QUFLaEI7QUFDM0IsRUFBWTtBQUM4QjtBQUNLO0FBQ0o7QUFFcEMsS0FBSyxDQUFDZSxXQUFXLGlCQUFHWixvREFBYSxDQUFDLENBQUM7SUFBQ2EsSUFBSSxFQUFFLElBQUk7QUFBQyxDQUFDO0FBRWhELFNBQVNDLFlBQVksQ0FBQyxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxLQUFLLE1BQUVGLEtBQUksTUFBRUcsT0FBTyxNQUFJbkIsK0NBQVEsQ0FBQyxLQUFLO0lBQ3RDLEtBQUssQ0FBQ29CLE1BQU0sR0FBR2hCLHNEQUFTO0lBQ3hCLEtBQUssQ0FBQ2lCLElBQUksR0FBR2Ysc0RBQU87SUFFcEIsS0FBSyxDQUFDZ0IsTUFBTSxhQUFlLENBQUM7UUFDeEIsS0FBSyxDQUFDakIsc0RBQU8sQ0FBQ2dCLElBQUk7UUFDbEJaLG9FQUFnQjtRQUNoQlcsTUFBTSxDQUFDRyxJQUFJLENBQUNYLG1EQUFZO0lBQzVCLENBQUM7SUFFRFgsZ0RBQVMsS0FBTyxDQUFDO1FBQ2IsS0FBSyxDQUFDd0IsbUJBQW1CLEdBQUdsQiwrREFBZ0IsQ0FBQ2MsSUFBSSxHQUFHTCxJQUFJLEdBQUssQ0FBQztZQUMxRCxFQUFFLEVBQUVBLElBQUksRUFBRSxDQUFDO2dCQUNQLEtBQUssQ0FBQ1UsUUFBUSxHQUFHbEIseURBQVcsQ0FBQ1EsSUFBSTtnQkFDakNOLGlFQUFhLENBQUNnQixRQUFRO2dCQUN0QlAsT0FBTyxDQUFDTyxRQUFRO2dCQUNoQixFQUFFLEVBQUVOLE1BQU0sQ0FBQ08sUUFBUSxJQUFJZixtREFBWSxFQUFFLENBQUM7b0JBQ2xDUSxNQUFNLENBQUNHLElBQUksQ0FBQ1gsbURBQVk7Z0JBQzVCLENBQUM7WUFDTCxDQUFDLE1BQU0sQ0FBQztnQkFDSkgsb0VBQWdCO2dCQUNoQlUsT0FBTztnQkFDUCxFQUFFLEVBQUVMLG9FQUFrQixDQUFDTSxNQUFNLENBQUNPLFFBQVEsR0FBRyxDQUFDO29CQUN0QyxNQUFNLENBQUNQLE1BQU0sQ0FBQ0csSUFBSSxDQUFDWCxtREFBWTtnQkFDbkMsQ0FBQyxNQUFNLEVBQUUsR0FBR0Msc0VBQW9CLENBQUNPLE1BQU0sQ0FBQ08sUUFBUSxHQUFHLENBQUM7b0JBQ2hEUCxNQUFNLENBQUNHLElBQUksQ0FBQ1gscURBQWM7Z0JBQzlCLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUVELEtBQUssQ0FBQ21CLGNBQWMsR0FBR3BCLHFFQUFpQjtRQUN4Q1EsT0FBTyxDQUFDWSxjQUFjO1FBRXRCLE1BQU0sS0FBTyxDQUFDO1lBQ1ZOLG1CQUFtQjtRQUN2QixDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUNKO1FBQUFBLElBQUk7SUFBQSxDQUFDO0lBRVQsTUFBTSw2RUFDRE4sV0FBVyxDQUFDaUIsUUFBUTtRQUFDQyxLQUFLLEVBQUUsQ0FBQztZQUFDakIsSUFBSSxFQUFKQSxLQUFJO1lBQUVNLE1BQU07UUFBQyxDQUFDO2tCQUN4Q0osUUFBUTs7Ozs7O0FBR3JCLENBQUM7QUFFTSxLQUFLLENBQUNnQixjQUFjLE9BQVMsQ0FBQztJQUNqQyxNQUFNLENBQUNoQyxpREFBVSxDQUFDYSxXQUFXO0FBQ2pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92bC1saXBvdmEvLi9jb21wb25lbnRzL1Nlc3Npb24vY29udGV4dC5qcz9kNjE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHNpZ25PdXQsIGdldEF1dGgsIG9uSWRUb2tlbkNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1hcFVzZXJEYXRhIH0gZnJvbSBcIi4vbWFwVXNlckRhdGFcIjtcclxuaW1wb3J0IHtcclxuICAgIHJlbW92ZVVzZXJDb29raWUsXHJcbiAgICBzZXRVc2VyQ29va2llLFxyXG4gICAgZ2V0VXNlckZyb21Db29raWUsXHJcbn0gZnJvbSBcImNvbXBvbmVudHMvQ29va2llc1wiO1xyXG4vLyBjb25zdGFudHNcclxuaW1wb3J0ICogYXMgUk9VVEVTIGZyb20gXCJjb25zdGFudHMvcm91dGVzXCI7XHJcbmltcG9ydCBwdWJsaWNQYWdlcyBmcm9tIFwiY29uc3RhbnRzL3B1YmxpY1BhZ2VzXCI7XHJcbmltcG9ydCBhdXRoUGFnZXMgZnJvbSBcImNvbnN0YW50cy9hdXRoUGFnZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoeyB1c2VyOiBudWxsIH0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuXHJcbiAgICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgc2lnbk91dChhdXRoKTtcclxuICAgICAgICByZW1vdmVVc2VyQ29va2llKCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goUk9VVEVTLkxPR0lOKTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB1bnN1YnNjcmliZUxpc3RlbmVyID0gb25JZFRva2VuQ2hhbmdlZChhdXRoLCAodXNlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSBtYXBVc2VyRGF0YSh1c2VyKTtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJDb29raWUodXNlckRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcih1c2VyRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocm91dGVyLnBhdGhuYW1lID09IFJPVVRFUy5MT0dJTikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFJPVVRFUy5BRE1JTik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVVc2VyQ29va2llKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXV0aFBhZ2VzLmluY2x1ZGVzKHJvdXRlci5wYXRobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goUk9VVEVTLkxPR0lOKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXB1YmxpY1BhZ2VzLmluY2x1ZGVzKHJvdXRlci5wYXRobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChST1VURVMuTEFORElORyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlckZyb21Db29raWUgPSBnZXRVc2VyRnJvbUNvb2tpZSgpO1xyXG4gICAgICAgIHNldFVzZXIodXNlckZyb21Db29raWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB1bnN1YnNjcmliZUxpc3RlbmVyKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFthdXRoXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgbG9nb3V0IH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoQ29udGV4dCA9ICgpID0+IHtcclxuICAgIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJzaWduT3V0IiwiZ2V0QXV0aCIsIm9uSWRUb2tlbkNoYW5nZWQiLCJtYXBVc2VyRGF0YSIsInJlbW92ZVVzZXJDb29raWUiLCJzZXRVc2VyQ29va2llIiwiZ2V0VXNlckZyb21Db29raWUiLCJST1VURVMiLCJwdWJsaWNQYWdlcyIsImF1dGhQYWdlcyIsIkF1dGhDb250ZXh0IiwidXNlciIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwic2V0VXNlciIsInJvdXRlciIsImF1dGgiLCJsb2dvdXQiLCJwdXNoIiwiTE9HSU4iLCJ1bnN1YnNjcmliZUxpc3RlbmVyIiwidXNlckRhdGEiLCJwYXRobmFtZSIsIkFETUlOIiwiaW5jbHVkZXMiLCJMQU5ESU5HIiwidXNlckZyb21Db29raWUiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Session/context.js\n");

/***/ }),

/***/ "./components/Session/index.js":
/*!*************************************!*\
  !*** ./components/Session/index.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.AuthProvider),\n/* harmony export */   \"useAuthContext\": () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.useAuthContext),\n/* harmony export */   \"mapUserData\": () => (/* reexport safe */ _mapUserData__WEBPACK_IMPORTED_MODULE_1__.mapUserData)\n/* harmony export */ });\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ \"./components/Session/context.js\");\n/* harmony import */ var _mapUserData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapUserData */ \"./components/Session/mapUserData.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context__WEBPACK_IMPORTED_MODULE_0__]);\n_context__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nlc3Npb24vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFFO0FBQzFCO0FBRXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmwtbGlwb3ZhLy4vY29tcG9uZW50cy9TZXNzaW9uL2luZGV4LmpzPzRjN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aENvbnRleHQsIEF1dGhQcm92aWRlciwgdXNlQXV0aENvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0XCI7XHJcbmltcG9ydCB7IG1hcFVzZXJEYXRhIH0gZnJvbSBcIi4vbWFwVXNlckRhdGFcIjtcclxuXHJcbmV4cG9ydCB7IEF1dGhDb250ZXh0LCBBdXRoUHJvdmlkZXIsIHVzZUF1dGhDb250ZXh0LCBtYXBVc2VyRGF0YSB9O1xyXG4iXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJ1c2VBdXRoQ29udGV4dCIsIm1hcFVzZXJEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Session/index.js\n");

/***/ }),

/***/ "./components/Session/mapUserData.js":
/*!*******************************************!*\
  !*** ./components/Session/mapUserData.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mapUserData\": () => (/* binding */ mapUserData)\n/* harmony export */ });\nconst mapUserData = (user)=>{\n    const { uid , email , accessToken , displayName , photoUrl  } = user;\n    return {\n        id: uid,\n        email,\n        token: accessToken,\n        name: displayName,\n        userImage: photoUrl\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nlc3Npb24vbWFwVXNlckRhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLEtBQUssQ0FBQ0EsV0FBVyxJQUFJQyxJQUFJLEdBQUssQ0FBQztJQUNsQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxHQUFHLEdBQUVDLEtBQUssR0FBRUMsV0FBVyxHQUFFQyxXQUFXLEdBQUVDLFFBQVEsRUFBQyxDQUFDLEdBQUdMLElBQUk7SUFDL0QsTUFBTSxDQUFDLENBQUM7UUFDSk0sRUFBRSxFQUFFTCxHQUFHO1FBQ1BDLEtBQUs7UUFDTEssS0FBSyxFQUFFSixXQUFXO1FBQ2xCSyxJQUFJLEVBQUVKLFdBQVc7UUFDakJLLFNBQVMsRUFBRUosUUFBUTtJQUN2QixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZsLWxpcG92YS8uL2NvbXBvbmVudHMvU2Vzc2lvbi9tYXBVc2VyRGF0YS5qcz9mNmRmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBtYXBVc2VyRGF0YSA9ICh1c2VyKSA9PiB7XG4gICAgY29uc3QgeyB1aWQsIGVtYWlsLCBhY2Nlc3NUb2tlbiwgZGlzcGxheU5hbWUsIHBob3RvVXJsIH0gPSB1c2VyO1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkOiB1aWQsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICB0b2tlbjogYWNjZXNzVG9rZW4sXG4gICAgICAgIG5hbWU6IGRpc3BsYXlOYW1lLFxuICAgICAgICB1c2VySW1hZ2U6IHBob3RvVXJsLFxuICAgIH07XG59O1xuIl0sIm5hbWVzIjpbIm1hcFVzZXJEYXRhIiwidXNlciIsInVpZCIsImVtYWlsIiwiYWNjZXNzVG9rZW4iLCJkaXNwbGF5TmFtZSIsInBob3RvVXJsIiwiaWQiLCJ0b2tlbiIsIm5hbWUiLCJ1c2VySW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Session/mapUserData.js\n");

/***/ }),

/***/ "./constants/authPages.js":
/*!********************************!*\
  !*** ./constants/authPages.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var constants_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constants/routes */ \"./constants/routes.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\n    constants_routes__WEBPACK_IMPORTED_MODULE_0__.ADMIN,\n    constants_routes__WEBPACK_IMPORTED_MODULE_0__.ACCOUNT\n]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvYXV0aFBhZ2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBDO0FBRTFDLGlFQUFlLENBQUNBO0lBQUFBLG1EQUFZO0lBQUVBLHFEQUFjO0FBQUEsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmwtbGlwb3ZhLy4vY29uc3RhbnRzL2F1dGhQYWdlcy5qcz84MTAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJPVVRFUyBmcm9tIFwiY29uc3RhbnRzL3JvdXRlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBbUk9VVEVTLkFETUlOLCBST1VURVMuQUNDT1VOVF07XG4iXSwibmFtZXMiOlsiUk9VVEVTIiwiQURNSU4iLCJBQ0NPVU5UIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./constants/authPages.js\n");

/***/ }),

/***/ "./constants/firebaseConfig.js":
/*!*************************************!*\
  !*** ./constants/firebaseConfig.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    apiKey: \"AIzaSyChBVwhcTI7RKfdnk8biesUjNgDL2UIgRg\",\n    authDomain: \"vl-lipova-2.firebaseapp.com\",\n    databaseURL: \"https://vl-lipova-2-default-rtdb.firebaseio.com\",\n    projectId: \"vl-lipova-2\",\n    storageBucket: \"vl-lipova-2.appspot.com\",\n    messagingSenderId: \"489003267232\",\n    appId: \"1:489003267232:web:69f69e520e06dcedd9c5c5\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvZmlyZWJhc2VDb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlLENBQUM7SUFDWkEsTUFBTSxFQUFFLENBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsQ0FBNkI7SUFDekNDLFdBQVcsRUFBRSxDQUFpRDtJQUM5REMsU0FBUyxFQUFFLENBQWE7SUFDeEJDLGFBQWEsRUFBRSxDQUF5QjtJQUN4Q0MsaUJBQWlCLEVBQUUsQ0FBYztJQUNqQ0MsS0FBSyxFQUFFLENBQTJDO0FBQ3RELENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZsLWxpcG92YS8uL2NvbnN0YW50cy9maXJlYmFzZUNvbmZpZy5qcz9lM2JmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5Q2hCVndoY1RJN1JLZmRuazhiaWVzVWpOZ0RMMlVJZ1JnXCIsXG4gICAgYXV0aERvbWFpbjogXCJ2bC1saXBvdmEtMi5maXJlYmFzZWFwcC5jb21cIixcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL3ZsLWxpcG92YS0yLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJ2bC1saXBvdmEtMlwiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwidmwtbGlwb3ZhLTIuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI0ODkwMDMyNjcyMzJcIixcbiAgICBhcHBJZDogXCIxOjQ4OTAwMzI2NzIzMjp3ZWI6NjlmNjllNTIwZTA2ZGNlZGQ5YzVjNVwiLFxufTtcbiJdLCJuYW1lcyI6WyJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./constants/firebaseConfig.js\n");

/***/ }),

/***/ "./constants/publicPages.js":
/*!**********************************!*\
  !*** ./constants/publicPages.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var constants_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constants/routes */ \"./constants/routes.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\n    constants_routes__WEBPACK_IMPORTED_MODULE_0__.LOGIN,\n    constants_routes__WEBPACK_IMPORTED_MODULE_0__.LANDING\n]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvcHVibGljUGFnZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEM7QUFFMUMsaUVBQWUsQ0FBQ0E7SUFBQUEsbURBQVk7SUFBRUEscURBQWM7QUFBQSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92bC1saXBvdmEvLi9jb25zdGFudHMvcHVibGljUGFnZXMuanM/MDc3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBST1VURVMgZnJvbSBcImNvbnN0YW50cy9yb3V0ZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgW1JPVVRFUy5MT0dJTiwgUk9VVEVTLkxBTkRJTkddO1xuIl0sIm5hbWVzIjpbIlJPVVRFUyIsIkxPR0lOIiwiTEFORElORyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./constants/publicPages.js\n");

/***/ }),

/***/ "./constants/routes.js":
/*!*****************************!*\
  !*** ./constants/routes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LANDING\": () => (/* binding */ LANDING),\n/* harmony export */   \"LOGIN\": () => (/* binding */ LOGIN),\n/* harmony export */   \"ADMIN\": () => (/* binding */ ADMIN),\n/* harmony export */   \"ACCOUNT\": () => (/* binding */ ACCOUNT)\n/* harmony export */ });\nconst LANDING = \"/\";\nconst LOGIN = \"/login\";\nconst ADMIN = \"/admin\";\nconst ACCOUNT = \"/account\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvcm91dGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxLQUFLLENBQUNBLE9BQU8sR0FBRyxDQUFHO0FBQ25CLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLENBQVE7QUFDdEIsS0FBSyxDQUFDQyxLQUFLLEdBQUcsQ0FBUTtBQUN0QixLQUFLLENBQUNDLE9BQU8sR0FBRyxDQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmwtbGlwb3ZhLy4vY29uc3RhbnRzL3JvdXRlcy5qcz9kOTJkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBMQU5ESU5HID0gXCIvXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dJTiA9IFwiL2xvZ2luXCI7XHJcbmV4cG9ydCBjb25zdCBBRE1JTiA9IFwiL2FkbWluXCI7XHJcbmV4cG9ydCBjb25zdCBBQ0NPVU5UID0gXCIvYWNjb3VudFwiO1xyXG4iXSwibmFtZXMiOlsiTEFORElORyIsIkxPR0lOIiwiQURNSU4iLCJBQ0NPVU5UIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./constants/routes.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_Session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Session */ \"./components/Session/index.js\");\n/* harmony import */ var admin_components_Database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! admin/components/Database */ \"./admin/components/Database/index.js\");\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styles_font_flaticon_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/font/flaticon.css */ \"./styles/font/flaticon.css\");\n/* harmony import */ var styles_font_flaticon_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_font_flaticon_css__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Session__WEBPACK_IMPORTED_MODULE_1__, admin_components_Database__WEBPACK_IMPORTED_MODULE_2__]);\n([components_Session__WEBPACK_IMPORTED_MODULE_1__, admin_components_Database__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(admin_components_Database__WEBPACK_IMPORTED_MODULE_2__.DatabaseProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Session__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/radekmatyas/Desktop/M3 studio/10-2 vl-lipova/pages/_app.js\",\n                lineNumber: 11,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/radekmatyas/Desktop/M3 studio/10-2 vl-lipova/pages/_app.js\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/radekmatyas/Desktop/M3 studio/10-2 vl-lipova/pages/_app.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDVztBQUVqQztBQUNNO1NBRXhCRSxHQUFHLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUNwQyxNQUFNLDZFQUNESCx1RUFBZ0I7OEZBQ1pELDREQUFZO2tHQUNSRyxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXhDLENBQUM7QUFFRCxpRUFBZUYsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmwtbGlwb3ZhLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCJjb21wb25lbnRzL1Nlc3Npb25cIjtcbmltcG9ydCB7IERhdGFiYXNlUHJvdmlkZXIgfSBmcm9tIFwiYWRtaW4vY29tcG9uZW50cy9EYXRhYmFzZVwiO1xuXG5pbXBvcnQgXCJzdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBcInN0eWxlcy9mb250L2ZsYXRpY29uLmNzc1wiO1xuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPERhdGFiYXNlUHJvdmlkZXI+XG4gICAgICAgICAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQXV0aFByb3ZpZGVyPlxuICAgICAgICA8L0RhdGFiYXNlUHJvdmlkZXI+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIkRhdGFiYXNlUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/font/flaticon.css":
/*!**********************************!*\
  !*** ./styles/font/flaticon.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/database");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();