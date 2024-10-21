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

/***/ "(app-pages-browser)/./src/lib/dbUtils.ts":
/*!****************************!*\
  !*** ./src/lib/dbUtils.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! idb */ \"(app-pages-browser)/./node_modules/idb/build/index.js\");\n\nclass DbService {\n    async initDB() {\n        return (0,idb__WEBPACK_IMPORTED_MODULE_0__.openDB)(this.DB_NAME, this.DB_VERSION, {\n            upgrade: (db)=>{\n                if (!db.objectStoreNames.contains(this.STORE_NAME)) {\n                    db.createObjectStore(this.STORE_NAME);\n                }\n            }\n        });\n    }\n    async saveMnemonicToDB(mnemonic, keyPairs, network) {\n        const db = await this.initDB();\n        const store = db.transaction(this.STORE_NAME, \"readwrite\").objectStore(this.STORE_NAME);\n        const existingData = await store.get(strin) || {};\n        existingData[mnemonic] = {\n            keyPairs\n        };\n        await store.put(existingData, \"sol\");\n    }\n    async getMnemonicFromDB(network) {\n        const db = await this.initDB();\n        const store = db.transaction(this.STORE_NAME, \"readonly\").objectStore(this.STORE_NAME);\n        const data = await store.get(network);\n        return data;\n    }\n    async removeWalletFromDB(network, mnemonic, idx) {\n        const db = await this.initDB();\n        const store = db.transaction(this.STORE_NAME, \"readwrite\").objectStore(this.STORE_NAME);\n        const existingData = await store.get(network) || {};\n        if (existingData[mnemonic] && existingData[mnemonic].keyPairs) {\n            existingData[mnemonic].keyPairs = existingData[mnemonic].keyPairs.filter((keypair)=>keypair.idx !== idx);\n            await store.put(existingData, network);\n        }\n    }\n    async clearWallets(network) {\n        const db = await this.initDB();\n        const store = db.transaction(this.STORE_NAME, \"readwrite\").objectStore(this.STORE_NAME);\n        await store.delete(network);\n    }\n    constructor(){\n        this.DB_NAME = \"walletDB\";\n        this.DB_VERSION = 1;\n        this.STORE_NAME = \"wallets\";\n        console.log(\"DbService constructor\");\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (DbService);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvZGJVdGlscy50cyIsIm1hcHBpbmdzIjoiOztBQUE2QjtBQWU3QixNQUFNQztJQVNGLE1BQWNDLFNBQVM7UUFDbkIsT0FBT0YsMkNBQU1BLENBQUMsSUFBSSxDQUFDRyxPQUFPLEVBQUUsSUFBSSxDQUFDQyxVQUFVLEVBQUU7WUFDekNDLFNBQVMsQ0FBQ0M7Z0JBQ04sSUFBSSxDQUFDQSxHQUFHQyxnQkFBZ0IsQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxHQUFHO29CQUNoREgsR0FBR0ksaUJBQWlCLENBQUMsSUFBSSxDQUFDRCxVQUFVO2dCQUN4QztZQUNKO1FBQ0o7SUFDSjtJQUVBLE1BQWFFLGlCQUFpQkMsUUFBZ0IsRUFBRUMsUUFBa0UsRUFBRUMsT0FBZSxFQUFFO1FBQ2pJLE1BQU1SLEtBQUssTUFBTSxJQUFJLENBQUNKLE1BQU07UUFDNUIsTUFBTWEsUUFBUVQsR0FBR1UsV0FBVyxDQUFDLElBQUksQ0FBQ1AsVUFBVSxFQUFFLGFBQWFRLFdBQVcsQ0FBQyxJQUFJLENBQUNSLFVBQVU7UUFDdEYsTUFBTVMsZUFBZSxNQUFPSCxNQUFNSSxHQUFHLENBQUNDLFVBQVcsQ0FBQztRQUNsREYsWUFBWSxDQUFDTixTQUFTLEdBQUc7WUFBRUM7UUFBUztRQUNwQyxNQUFNRSxNQUFNTSxHQUFHLENBQUNILGNBQWM7SUFDbEM7SUFFQSxNQUFhSSxrQkFBa0JSLE9BQWUsRUFBRTtRQUM1QyxNQUFNUixLQUFLLE1BQU0sSUFBSSxDQUFDSixNQUFNO1FBQzVCLE1BQU1hLFFBQVFULEdBQUdVLFdBQVcsQ0FBQyxJQUFJLENBQUNQLFVBQVUsRUFBRSxZQUFZUSxXQUFXLENBQUMsSUFBSSxDQUFDUixVQUFVO1FBQ3JGLE1BQU1jLE9BQU8sTUFBTVIsTUFBTUksR0FBRyxDQUFDTDtRQUM3QixPQUFPUztJQUNYO0lBRUEsTUFBYUMsbUJBQW1CVixPQUFlLEVBQUVGLFFBQWdCLEVBQUVhLEdBQVcsRUFBaUI7UUFDM0YsTUFBTW5CLEtBQUssTUFBTSxJQUFJLENBQUNKLE1BQU07UUFDNUIsTUFBTWEsUUFBUVQsR0FBR1UsV0FBVyxDQUFDLElBQUksQ0FBQ1AsVUFBVSxFQUFFLGFBQWFRLFdBQVcsQ0FBQyxJQUFJLENBQUNSLFVBQVU7UUFDdEYsTUFBTVMsZUFBNEIsTUFBT0gsTUFBTUksR0FBRyxDQUFDTCxZQUFhLENBQUM7UUFFakUsSUFBSUksWUFBWSxDQUFDTixTQUFTLElBQUlNLFlBQVksQ0FBQ04sU0FBUyxDQUFDQyxRQUFRLEVBQUU7WUFDM0RLLFlBQVksQ0FBQ04sU0FBUyxDQUFDQyxRQUFRLEdBQUdLLFlBQVksQ0FBQ04sU0FBUyxDQUFDQyxRQUFRLENBQUNhLE1BQU0sQ0FBQyxDQUFDQyxVQUFZQSxRQUFRRixHQUFHLEtBQUtBO1lBQ3RHLE1BQU1WLE1BQU1NLEdBQUcsQ0FBQ0gsY0FBY0o7UUFDbEM7SUFDSjtJQUVBLE1BQWFjLGFBQWFkLE9BQWUsRUFBaUI7UUFDdEQsTUFBTVIsS0FBSyxNQUFNLElBQUksQ0FBQ0osTUFBTTtRQUM1QixNQUFNYSxRQUFRVCxHQUFHVSxXQUFXLENBQUMsSUFBSSxDQUFDUCxVQUFVLEVBQUUsYUFBYVEsV0FBVyxDQUFDLElBQUksQ0FBQ1IsVUFBVTtRQUN0RixNQUFNTSxNQUFNYyxNQUFNLENBQUNmO0lBQ3ZCO0lBNUNBZ0IsYUFBYzthQUpOM0IsVUFBVTthQUNWQyxhQUFhO2FBQ2JLLGFBQWE7UUFHakJzQixRQUFRQyxHQUFHLENBQUM7SUFDaEI7QUEyQ0o7QUFFQSwrREFBZS9CLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9kYlV0aWxzLnRzPzkyODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb3BlbkRCIH0gZnJvbSAnaWRiJztcbmludGVyZmFjZSBLZXlQYWlyIHtcbiAgICBpZHg6IG51bWJlcjtcbiAgICBwdWJsaWNLZXk6IHN0cmluZztcbiAgICBwcml2YXRlS2V5OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBNbmVtb25pY0RhdGEge1xuICAgIGtleVBhaXJzOiBLZXlQYWlyW107XG59XG5cbmludGVyZmFjZSBOZXR3b3JrRGF0YSB7XG4gICAgW21uZW1vbmljOiBzdHJpbmddOiBNbmVtb25pY0RhdGE7XG59XG5cbmNsYXNzIERiU2VydmljZSB7XG4gICAgcHJpdmF0ZSBEQl9OQU1FID0gJ3dhbGxldERCJztcbiAgICBwcml2YXRlIERCX1ZFUlNJT04gPSAxO1xuICAgIHByaXZhdGUgU1RPUkVfTkFNRSA9ICd3YWxsZXRzJztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnRGJTZXJ2aWNlIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBpbml0REIoKSB7XG4gICAgICAgIHJldHVybiBvcGVuREIodGhpcy5EQl9OQU1FLCB0aGlzLkRCX1ZFUlNJT04sIHtcbiAgICAgICAgICAgIHVwZ3JhZGU6IChkYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyh0aGlzLlNUT1JFX05BTUUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKHRoaXMuU1RPUkVfTkFNRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHNhdmVNbmVtb25pY1RvREIobW5lbW9uaWM6IHN0cmluZywga2V5UGFpcnM6IHsgaWR4OiBudW1iZXIsIHB1YmxpY0tleTogc3RyaW5nLCBwcml2YXRlS2V5OiBzdHJpbmcgfVtdLCBuZXR3b3JrOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZGIgPSBhd2FpdCB0aGlzLmluaXREQigpO1xuICAgICAgICBjb25zdCBzdG9yZSA9IGRiLnRyYW5zYWN0aW9uKHRoaXMuU1RPUkVfTkFNRSwgJ3JlYWR3cml0ZScpLm9iamVjdFN0b3JlKHRoaXMuU1RPUkVfTkFNRSk7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRGF0YSA9IChhd2FpdCBzdG9yZS5nZXQoc3RyaW4pKSB8fCB7fTtcbiAgICAgICAgZXhpc3RpbmdEYXRhW21uZW1vbmljXSA9IHsga2V5UGFpcnMgfTtcbiAgICAgICAgYXdhaXQgc3RvcmUucHV0KGV4aXN0aW5nRGF0YSwgJ3NvbCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRNbmVtb25pY0Zyb21EQihuZXR3b3JrOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZGIgPSBhd2FpdCB0aGlzLmluaXREQigpO1xuICAgICAgICBjb25zdCBzdG9yZSA9IGRiLnRyYW5zYWN0aW9uKHRoaXMuU1RPUkVfTkFNRSwgJ3JlYWRvbmx5Jykub2JqZWN0U3RvcmUodGhpcy5TVE9SRV9OQU1FKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHN0b3JlLmdldChuZXR3b3JrKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHJlbW92ZVdhbGxldEZyb21EQihuZXR3b3JrOiBzdHJpbmcsIG1uZW1vbmljOiBzdHJpbmcsIGlkeDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IGRiID0gYXdhaXQgdGhpcy5pbml0REIoKTtcbiAgICAgICAgY29uc3Qgc3RvcmUgPSBkYi50cmFuc2FjdGlvbih0aGlzLlNUT1JFX05BTUUsICdyZWFkd3JpdGUnKS5vYmplY3RTdG9yZSh0aGlzLlNUT1JFX05BTUUpO1xuICAgICAgICBjb25zdCBleGlzdGluZ0RhdGE6IE5ldHdvcmtEYXRhID0gKGF3YWl0IHN0b3JlLmdldChuZXR3b3JrKSkgfHwge307XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nRGF0YVttbmVtb25pY10gJiYgZXhpc3RpbmdEYXRhW21uZW1vbmljXS5rZXlQYWlycykge1xuICAgICAgICAgICAgZXhpc3RpbmdEYXRhW21uZW1vbmljXS5rZXlQYWlycyA9IGV4aXN0aW5nRGF0YVttbmVtb25pY10ua2V5UGFpcnMuZmlsdGVyKChrZXlwYWlyKSA9PiBrZXlwYWlyLmlkeCAhPT0gaWR4KTtcbiAgICAgICAgICAgIGF3YWl0IHN0b3JlLnB1dChleGlzdGluZ0RhdGEsIG5ldHdvcmspO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNsZWFyV2FsbGV0cyhuZXR3b3JrOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgZGIgPSBhd2FpdCB0aGlzLmluaXREQigpO1xuICAgICAgICBjb25zdCBzdG9yZSA9IGRiLnRyYW5zYWN0aW9uKHRoaXMuU1RPUkVfTkFNRSwgJ3JlYWR3cml0ZScpLm9iamVjdFN0b3JlKHRoaXMuU1RPUkVfTkFNRSk7XG4gICAgICAgIGF3YWl0IHN0b3JlLmRlbGV0ZShuZXR3b3JrKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERiU2VydmljZTsiXSwibmFtZXMiOlsib3BlbkRCIiwiRGJTZXJ2aWNlIiwiaW5pdERCIiwiREJfTkFNRSIsIkRCX1ZFUlNJT04iLCJ1cGdyYWRlIiwiZGIiLCJvYmplY3RTdG9yZU5hbWVzIiwiY29udGFpbnMiLCJTVE9SRV9OQU1FIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJzYXZlTW5lbW9uaWNUb0RCIiwibW5lbW9uaWMiLCJrZXlQYWlycyIsIm5ldHdvcmsiLCJzdG9yZSIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJleGlzdGluZ0RhdGEiLCJnZXQiLCJzdHJpbiIsInB1dCIsImdldE1uZW1vbmljRnJvbURCIiwiZGF0YSIsInJlbW92ZVdhbGxldEZyb21EQiIsImlkeCIsImZpbHRlciIsImtleXBhaXIiLCJjbGVhcldhbGxldHMiLCJkZWxldGUiLCJjb25zdHJ1Y3RvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/dbUtils.ts\n"));

/***/ })

});