webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PostCard.tsx":
/*!*********************************!*\
  !*** ./components/PostCard.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var post = props.post;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    key: post.title,
    className: "jsx-3465336271" + " " + "post-container"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      backgroundImage: post.thumb ? "url(/static/images/post_img/".concat(post.thumb, ")") : "url(/static/images/post_img/dummy_thumb.jpg)"
    },
    className: "jsx-3465336271" + " " + "post-img-container"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3465336271" + " " + "post-body"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3465336271" + " " + "post-title"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post/".concat(post.filename)
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "jsx-3465336271"
  }, post.title))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3465336271" + " " + "post-subtitle"
  }, post.slug), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3465336271" + " " + "post-createdAt"
  }, dayjs__WEBPACK_IMPORTED_MODULE_1___default()(post.createdAt).format("MMM D, YYYY"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3465336271"
  }, ".post-container.jsx-3465336271{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:1rem;}.post-img-container.jsx-3465336271{min-width:150px;height:150px;background-repeat:no-repeat;background-position:center;}.post-body.jsx-3465336271{display:inline-block;margin:0 1rem;}.post-title.jsx-3465336271{font-family:$font-san-serif;font-size:1.5rem;font-weight:700;margin:1rem 0 0.5rem 0;}.post-subtitle.jsx-3465336271{color:grey;}.post-createdAt.jsx-3465336271{margin:1rem 0 0 0;}@media (max-width:576px){.post-container.jsx-3465336271{display:block;margin:1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm5vbGQvRG9jdW1lbnRzL2dpdC9naXRodWIvbWF0dGRhbW9uMTA4LmJsb2cvY29tcG9uZW50cy9Qb3N0Q2FyZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNTLEFBRzBCLEFBS0csQUFPSyxBQUtPLEFBT2pCLEFBSU8sQUFLRixXQVJsQixHQVNnQixFQTVCRCxFQXVCZixHQWhCZ0IsS0FzQmQsRUFqQmlCLENBWFcsTUFPOUIsVUFLa0IsWUFYVyxJQVlKLGFBbkJYLFVBUWQsQUFZQSxFQW5CQSIsImZpbGUiOiIvVXNlcnMvYXJub2xkL0RvY3VtZW50cy9naXQvZ2l0aHViL21hdHRkYW1vbjEwOC5ibG9nL2NvbXBvbmVudHMvUG9zdENhcmQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSVBvc3QgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHBvc3Q6IElQb3N0O1xufVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHM6IElQcm9wcykgPT4ge1xuICBjb25zdCB7IHBvc3QgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXYga2V5PXtwb3N0LnRpdGxlfSBjbGFzc05hbWU9XCJwb3N0LWNvbnRhaW5lclwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJwb3N0LWltZy1jb250YWluZXJcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogcG9zdC50aHVtYlxuICAgICAgICAgICAgPyBgdXJsKC9zdGF0aWMvaW1hZ2VzL3Bvc3RfaW1nLyR7cG9zdC50aHVtYn0pYFxuICAgICAgICAgICAgOiBgdXJsKC9zdGF0aWMvaW1hZ2VzL3Bvc3RfaW1nL2R1bW15X3RodW1iLmpwZylgXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LXRpdGxlXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0LyR7cG9zdC5maWxlbmFtZX1gfT5cbiAgICAgICAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3Qtc3VidGl0bGVcIj57cG9zdC5zbHVnfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtY3JlYXRlZEF0XCI+XG4gICAgICAgICAge2RheWpzKHBvc3QuY3JlYXRlZEF0KS5mb3JtYXQoXCJNTU0gRCwgWVlZWVwiKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLnBvc3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBvc3QtaW1nLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBvc3QtYm9keSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucG9zdC10aXRsZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtc2FuLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDAgMC41cmVtIDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBvc3Qtc3VidGl0bGUge1xuICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBvc3QtY3JlYXRlZEF0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwIDAgMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgIC5wb3N0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/arnold/Documents/git/github/mattdamon108.blog/components/PostCard.tsx */"));
});

/***/ })

})
//# sourceMappingURL=index.js.51a21cd9be8a2205d8b1.hot-update.js.map