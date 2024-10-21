"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[network]/page",{

/***/ "(app-pages-browser)/./src/app/components/Button.tsx":
/*!***************************************!*\
  !*** ./src/app/components/Button.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Button: function() { return /* binding */ Button; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Button = (param)=>{\n    let { children, variant = \"default\", size = \"default\", className = \"\", ...props } = param;\n    const baseStyles = \"inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-80 disabled:pointer-events-none ring-offset-background\";\n    const variantStyles = {\n        default: \"bg-primary text-primary-foreground hover:bg-primary/90\",\n        outline: \"border border-input hover:bg-accent hover:text-accent-foreground\",\n        ghost: \"hover:bg-accent hover:text-accent-foreground\",\n        destructive: \"bg-destructive text-destructive-foreground hover:bg-destructive/90\",\n        light: \"bg-white text-black hover:bg-gray-100\",\n        bright: \"bg-blue-600 text-white hover:bg-blue-700\"\n    };\n    const sizeStyles = {\n        default: \"h-10 py-2 px-4\",\n        sm: \"h-9 px-3 rounded-md\",\n        lg: \"h-11 px-8 rounded-md\",\n        icon: \"h-10 w-10\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"\".concat(baseStyles, \" \").concat(variantStyles[variant], \" \").concat(sizeStyles[size], \" \").concat(className),\n        ...props,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/j4web/Downloads/proxima/src/app/components/Button.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Button;\nvar _c;\n$RefreshReg$(_c, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9CdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlCO0FBUWxCLE1BQU1DLFNBQWdDO1FBQUMsRUFDNUNDLFFBQVEsRUFDUkMsVUFBVSxTQUFTLEVBQ25CQyxPQUFPLFNBQVMsRUFDaEJDLFlBQVksRUFBRSxFQUNkLEdBQUdDLE9BQ0o7SUFDQyxNQUFNQyxhQUFhO0lBRW5CLE1BQU1DLGdCQUFnQjtRQUNwQkMsU0FBUztRQUNUQyxTQUFTO1FBQ1RDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLFFBQVE7SUFDVjtJQUVBLE1BQU1DLGFBQWE7UUFDakJOLFNBQVM7UUFDVE8sSUFBSTtRQUNKQyxJQUFJO1FBQ0pDLE1BQU07SUFDUjtJQUVBLHFCQUNFLDhEQUFDQztRQUNDZCxXQUFXLEdBQWlCRyxPQUFkRCxZQUFXLEtBQTJEUSxPQUF4RFAsYUFBYSxDQUFDTCxRQUFzQyxFQUFDLEtBQWtERSxPQUEvQ1UsVUFBVSxDQUFDWCxLQUFnQyxFQUFDLEtBQWEsT0FBVkM7UUFDbEksR0FBR0MsS0FBSztrQkFFUko7Ozs7OztBQUdQLEVBQUM7S0FqQ1lEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9CdXR0b24udHN4P2IxMGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbnRlcmZhY2UgQnV0dG9uUHJvcHMgZXh0ZW5kcyBSZWFjdC5CdXR0b25IVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD4ge1xuICB2YXJpYW50PzogJ2RlZmF1bHQnIHwgJ291dGxpbmUnIHwgJ2dob3N0JyB8ICdkZXN0cnVjdGl2ZScgfCAnbGlnaHQnIHwgJ2JyaWdodCdcbiAgc2l6ZT86ICdkZWZhdWx0JyB8ICdzbScgfCAnbGcnIHwgJ2ljb24nXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuZXhwb3J0IGNvbnN0IEJ1dHRvbjogUmVhY3QuRkM8QnV0dG9uUHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIHZhcmlhbnQgPSAnZGVmYXVsdCcsXG4gIHNpemUgPSAnZGVmYXVsdCcsXG4gIGNsYXNzTmFtZSA9ICcnLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCBiYXNlU3R5bGVzID0gXCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWNvbG9ycyBmb2N1cy12aXNpYmxlOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMiBmb2N1cy12aXNpYmxlOnJpbmctcmluZyBmb2N1cy12aXNpYmxlOnJpbmctb2Zmc2V0LTIgZGlzYWJsZWQ6b3BhY2l0eS04MCBkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIHJpbmctb2Zmc2V0LWJhY2tncm91bmRcIlxuXG4gIGNvbnN0IHZhcmlhbnRTdHlsZXMgPSB7XG4gICAgZGVmYXVsdDogXCJiZy1wcmltYXJ5IHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIGhvdmVyOmJnLXByaW1hcnkvOTBcIixcbiAgICBvdXRsaW5lOiBcImJvcmRlciBib3JkZXItaW5wdXQgaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmRcIixcbiAgICBnaG9zdDogXCJob3ZlcjpiZy1hY2NlbnQgaG92ZXI6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZFwiLFxuICAgIGRlc3RydWN0aXZlOiBcImJnLWRlc3RydWN0aXZlIHRleHQtZGVzdHJ1Y3RpdmUtZm9yZWdyb3VuZCBob3ZlcjpiZy1kZXN0cnVjdGl2ZS85MFwiLFxuICAgIGxpZ2h0OiBcImJnLXdoaXRlIHRleHQtYmxhY2sgaG92ZXI6YmctZ3JheS0xMDBcIixcbiAgICBicmlnaHQ6IFwiYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBob3ZlcjpiZy1ibHVlLTcwMFwiXG4gIH1cblxuICBjb25zdCBzaXplU3R5bGVzID0ge1xuICAgIGRlZmF1bHQ6IFwiaC0xMCBweS0yIHB4LTRcIixcbiAgICBzbTogXCJoLTkgcHgtMyByb3VuZGVkLW1kXCIsXG4gICAgbGc6IFwiaC0xMSBweC04IHJvdW5kZWQtbWRcIixcbiAgICBpY29uOiBcImgtMTAgdy0xMFwiXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT17YCR7YmFzZVN0eWxlc30gJHt2YXJpYW50U3R5bGVzW3ZhcmlhbnQgYXMga2V5b2YgdHlwZW9mIHZhcmlhbnRTdHlsZXNdfSAke3NpemVTdHlsZXNbc2l6ZSBhcyBrZXlvZiB0eXBlb2Ygc2l6ZVN0eWxlc119ICR7Y2xhc3NOYW1lfWB9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYnV0dG9uPlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiY2hpbGRyZW4iLCJ2YXJpYW50Iiwic2l6ZSIsImNsYXNzTmFtZSIsInByb3BzIiwiYmFzZVN0eWxlcyIsInZhcmlhbnRTdHlsZXMiLCJkZWZhdWx0Iiwib3V0bGluZSIsImdob3N0IiwiZGVzdHJ1Y3RpdmUiLCJsaWdodCIsImJyaWdodCIsInNpemVTdHlsZXMiLCJzbSIsImxnIiwiaWNvbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Button.tsx\n"));

/***/ })

});