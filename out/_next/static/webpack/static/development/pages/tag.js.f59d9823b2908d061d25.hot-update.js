webpackHotUpdate("static/development/pages/tag.js",{

/***/ "./pages/tag/tagPresenter.tsx":
/*!************************************!*\
  !*** ./pages/tag/tagPresenter.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PostCard */ "./components/PostCard.tsx");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style/index.scss */ "./style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_HeaderAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/HeaderAvatar */ "./components/HeaderAvatar.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.tsx");






/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var posts = props.posts;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_HeaderAvatar__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "content",
    className: "jsx-3186059871"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3186059871" + " " + "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3186059871" + " " + "post-list"
  }, posts.length > 0 ? posts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PostCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: post.title,
      post: post
    });
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3186059871"
  }, "No result..."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3186059871"
  }, "#content.jsx-3186059871{min-height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm5vbGQvRG9jdW1lbnRzL2dpdC9naXRodWIvbWF0dGRhbW9uMTA4LmJsb2cvcGFnZXMvdGFnL3RhZ1ByZXNlbnRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJXLEFBR2dDLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvYXJub2xkL0RvY3VtZW50cy9naXQvZ2l0aHViL21hdHRkYW1vbjEwOC5ibG9nL3BhZ2VzL3RhZy90YWdQcmVzZW50ZXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bvc3RDYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi9zdHlsZS9pbmRleC5zY3NzXCI7XG5pbXBvcnQgeyBJUG9zdCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IEhlYWRlckF2YXRhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXJBdmF0YXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBwb3N0czogSVBvc3RbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzOiBJUHJvcHMpID0+IHtcbiAgY29uc3QgeyBwb3N0cyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXJBdmF0YXIgLz5cbiAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWxpc3RcIj5cbiAgICAgICAgICAgIHtwb3N0cy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICBwb3N0cy5tYXAocG9zdCA9PiA8UG9zdENhcmQga2V5PXtwb3N0LnRpdGxlfSBwb3N0PXtwb3N0fSAvPilcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXY+Tm8gcmVzdWx0Li4uPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgI2NvbnRlbnQge1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/arnold/Documents/git/github/mattdamon108.blog/pages/tag/tagPresenter.tsx */")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null));
});

/***/ })

})
//# sourceMappingURL=tag.js.f59d9823b2908d061d25.hot-update.js.map