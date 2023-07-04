"use strict";
(self["webpackChunkpages"] = self["webpackChunkpages"] || []).push([["client_src_utils_index_ts"],{

/***/ "./client/src/utils/index.ts":
/*!***********************************!*\
  !*** ./client/src/utils/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hydrateAtRoot = void 0;
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var client_1 = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
var rootEle = document.getElementById("root");
var hydrateAtRoot = function (component) {
    if (rootEle)
        (0, client_1.hydrateRoot)(rootEle, (0, react_1.createElement)(component));
};
exports.hydrateAtRoot = hydrateAtRoot;


/***/ })

}]);
//# sourceMappingURL=client_src_utils_index_ts.js.map