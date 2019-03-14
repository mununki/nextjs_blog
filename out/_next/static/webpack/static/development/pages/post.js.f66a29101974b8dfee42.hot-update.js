webpackHotUpdate("static/development/pages/post.js",{

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/string-hash/index.js":
false,

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
false,

/***/ "./node_modules/styled-jsx/dist/style.js":
false,

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
false,

/***/ "./node_modules/styled-jsx/style.js":
false,

/***/ "./pages/post/postPresenter.tsx":
/*!**************************************!*\
  !*** ./pages/post/postPresenter.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var PostPresenter = function PostPresenter(props) {
  var MD = __webpack_require__("./posts sync recursive ^\\.\\/.*\\.md$")("./".concat(props.post.filename, ".md"));

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post-card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MD.default, null))));
};

/* harmony default export */ __webpack_exports__["default"] = (PostPresenter);

/***/ })

})
//# sourceMappingURL=post.js.f66a29101974b8dfee42.hot-update.js.map