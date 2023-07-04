"use strict";
(self["webpackChunkpages"] = self["webpackChunkpages"] || []).push([["client_src_pages_Home_index_tsx"],{

/***/ "./client/src/components/Duck/index.tsx":
/*!**********************************************!*\
  !*** ./client/src/components/Duck/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Duck = function () {
    var _a = (0, react_1.useState)(0), count = _a[0], setCount = _a[1];
    (0, react_1.useEffect)(function () {
        var id = setInterval(function () {
            console.log("hi from duck");
            setCount(function (count) { return count + 1; });
        }, 1000);
        return function () { return clearInterval(id); };
    }, []);
    return (0, jsx_runtime_1.jsxs)("div", { children: ["This is the duck component. count: ", count] });
};
exports["default"] = Duck;


/***/ }),

/***/ "./client/src/pages/Home/index.tsx":
/*!*****************************************!*\
  !*** ./client/src/pages/Home/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var Duck_1 = __webpack_require__(/*! ../../components/Duck */ "./client/src/components/Duck/index.tsx");
var Home = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Hello world!" }), (0, jsx_runtime_1.jsx)(Duck_1.default, {})] }));
};
exports["default"] = Home;


/***/ })

}]);
//# sourceMappingURL=client_src_pages_Home_index_tsx.js.map