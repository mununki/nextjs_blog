webpackHotUpdate("static/development/pages/index.js",{

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

/***/ "./pages/index/indexPresenter.js":
/*!***************************************!*\
  !*** ./pages/index/indexPresenter.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_codeHighlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../style/codeHighlight */ "./style/codeHighlight.js");



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var latestPosts = props.latestPosts,
      pinnedPosts = props.pinnedPosts;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "index-h2-title"
  }, "Latest Posts ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    id: "latest",
    className: "fas fa-comment"
  })), latestPosts && latestPosts.map(function (post, key) {
    var MD = __webpack_require__("./posts sync recursive ^\\.\\/.*\\.md$")("./".concat(post.filename, ".md")).default;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: key,
      className: "post-card"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MD, null));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "index-h2-title pinned"
  }, "Pinned Posts ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    id: "pinned",
    className: "fas fa-thumbtack"
  })), pinnedPosts ? latestPosts.map(function (post, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: key,
      className: "post"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/post/".concat(post.category[0].toLowerCase(), "/").concat(post.filename)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "post-title"
    }, post.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "post-createdAt"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "far fa-calendar-alt"
    }), " " + post.createdAt))));
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post"
  }, "...")))));
});

/***/ })

})
//# sourceMappingURL=index.js.1e66033692c09af4b0e7.hot-update.js.map