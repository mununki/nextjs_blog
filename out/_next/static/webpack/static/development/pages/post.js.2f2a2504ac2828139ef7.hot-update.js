webpackHotUpdate("static/development/pages/post.js",{

/***/ "./components/HeaderAvatar.tsx":
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
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.tsx");




var PostPresenter = function PostPresenter(props) {
  var MD = __webpack_require__("./posts sync recursive ^\\.\\/.*\\.md$")("./".concat(props.post.filename, ".md"));

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MD.default, null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterAvatar, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (PostPresenter);

/***/ })

})
//# sourceMappingURL=post.js.2f2a2504ac2828139ef7.hot-update.js.map