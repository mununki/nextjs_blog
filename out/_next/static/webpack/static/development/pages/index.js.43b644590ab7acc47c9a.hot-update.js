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
    className: "jsx-2496144457" + " " + "post-container"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      backgroundImage: post.thumb ? "url(/static/images/post_img/".concat(post.thumb, ")") : "url(/static/images/post_img/dummy_thumb.jpg)"
    },
    className: "jsx-2496144457" + " " + "post-img-container"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2496144457" + " " + "post-body"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2496144457" + " " + "post-title"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post/".concat(post.filename)
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "jsx-2496144457"
  }, post.title))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2496144457" + " " + "post-subtitle"
  }, post.slug), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2496144457" + " " + "post-createdAt"
  }, dayjs__WEBPACK_IMPORTED_MODULE_1___default()(post.createdAt).format("MMM D, YYYY"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2496144457"
  }, ".post-container.jsx-2496144457{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:1rem;}.post-img-container.jsx-2496144457{min-width:150px;height:150px;background-size:cover;background-repeat:no-repeat;background-position:center;}.post-body.jsx-2496144457{display:inline-block;margin:0 1rem;}.post-title.jsx-2496144457{font-family:\"Ubuntu\",\"Helvetica Neue\",Helvetica,Arial, sans-serif;font-size:1.5rem;font-weight:700;margin:1rem 0 0.5rem 0;}.post-subtitle.jsx-2496144457{color:grey;}.post-createdAt.jsx-2496144457{margin:1rem 0 0 0;}@media (max-width:576px){.post-container.jsx-2496144457{display:block;margin:1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm5vbGQvRG9jdW1lbnRzL2dpdC9naXRodWIvbWF0dGRhbW9uMTA4LmJsb2cvY29tcG9uZW50cy9Qb3N0Q2FyZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNTLEFBRzBCLEFBSUcsQUFPSyxBQUtULEFBTUQsQUFHTyxBQUlGLFdBTmxCLEdBT2dCLEVBekJELEVBcUJmLEdBZGdCLEtBbUJkLEdBekJzQixNQU94QixnQkFOOEIsZUFVWCxRQWhCTCxLQU9lLElBVVgsR0FoQmxCLGFBaUJ5QixPQVZ6QixnQkFXQSIsImZpbGUiOiIvVXNlcnMvYXJub2xkL0RvY3VtZW50cy9naXQvZ2l0aHViL21hdHRkYW1vbjEwOC5ibG9nL2NvbXBvbmVudHMvUG9zdENhcmQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSVBvc3QgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHBvc3Q6IElQb3N0O1xufVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHM6IElQcm9wcykgPT4ge1xuICBjb25zdCB7IHBvc3QgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXYga2V5PXtwb3N0LnRpdGxlfSBjbGFzc05hbWU9XCJwb3N0LWNvbnRhaW5lclwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJwb3N0LWltZy1jb250YWluZXJcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogcG9zdC50aHVtYlxuICAgICAgICAgICAgPyBgdXJsKC9zdGF0aWMvaW1hZ2VzL3Bvc3RfaW1nLyR7cG9zdC50aHVtYn0pYFxuICAgICAgICAgICAgOiBgdXJsKC9zdGF0aWMvaW1hZ2VzL3Bvc3RfaW1nL2R1bW15X3RodW1iLmpwZylgXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LXRpdGxlXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0LyR7cG9zdC5maWxlbmFtZX1gfT5cbiAgICAgICAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3Qtc3VidGl0bGVcIj57cG9zdC5zbHVnfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtY3JlYXRlZEF0XCI+XG4gICAgICAgICAge2RheWpzKHBvc3QuY3JlYXRlZEF0KS5mb3JtYXQoXCJNTU0gRCwgWVlZWVwiKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLnBvc3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0LWltZy1jb250YWluZXIge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3QtYm9keSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3QtdGl0bGUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCxcbiAgICAgICAgICAgICAgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwIDAuNXJlbSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9zdC1zdWJ0aXRsZSB7XG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3QtY3JlYXRlZEF0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwIDAgMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgICAucG9zdC1jb250YWluZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/arnold/Documents/git/github/mattdamon108.blog/components/PostCard.tsx */"));
});

/***/ })

})
//# sourceMappingURL=index.js.43b644590ab7acc47c9a.hot-update.js.map