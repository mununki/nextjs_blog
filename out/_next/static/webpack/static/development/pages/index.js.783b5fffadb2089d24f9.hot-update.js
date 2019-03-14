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
    className: "jsx-2260781473" + " " + "post-container"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      backgroundImage: post.thumb ? "url(/static/images/post_img/".concat(post.thumb, ")") : "url(/static/images/post_img/dummy_thumb.jpg)"
    },
    className: "jsx-2260781473" + " " + "post-img-container"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2260781473" + " " + "post-body"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2260781473" + " " + "post-title"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post/".concat(post.filename)
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "jsx-2260781473"
  }, post.title))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2260781473" + " " + "post-subtitle"
  }, post.slug), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2260781473" + " " + "post-createdAt"
  }, dayjs__WEBPACK_IMPORTED_MODULE_1___default()(post.createdAt).format("MMM D, YYYY"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2260781473"
  }, ".post-container.jsx-2260781473{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:1rem;}.post-img-container.jsx-2260781473{min-width:150px;height:150px;background-repeat:no-repeat;background-position:center;}.post-body.jsx-2260781473{display:inline-block;margin:0 1rem;}.post-title.jsx-2260781473{font-family:$font-san-serif;font-size:1.5rem;font-weight:700;margin:1rem 0 0.5rem 0;}.post-subtitle.jsx-2260781473{color:grey;}.post-createdAt.jsx-2260781473{margin:1rem 0 0 0;}@media (max-width:576px){.post-container.jsx-2260781473{display:block;margin:1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm5vbGQvRG9jdW1lbnRzL2dpdC9naXRodWIvbWF0dGRhbW9uMTA4LmJsb2cvY29tcG9uZW50cy9Qb3N0Q2FyZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNTLEFBRzBCLEFBSUcsQUFNSyxBQUlPLEFBTWpCLEFBR08sQUFJRixXQU5sQixHQU9nQixFQXZCRCxFQW1CZixHQWJnQixLQWtCZCxFQWRpQixDQVRXLE1BTTlCLFVBSWtCLFlBVFcsSUFVSixhQWhCWCxVQU9kLEFBVUEsRUFoQkEiLCJmaWxlIjoiL1VzZXJzL2Fybm9sZC9Eb2N1bWVudHMvZ2l0L2dpdGh1Yi9tYXR0ZGFtb24xMDguYmxvZy9jb21wb25lbnRzL1Bvc3RDYXJkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElQb3N0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBwb3N0OiBJUG9zdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzOiBJUHJvcHMpID0+IHtcbiAgY29uc3QgeyBwb3N0IH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17cG9zdC50aXRsZX0gY2xhc3NOYW1lPVwicG9zdC1jb250YWluZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwicG9zdC1pbWctY29udGFpbmVyXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IHBvc3QudGh1bWJcbiAgICAgICAgICAgID8gYHVybCgvc3RhdGljL2ltYWdlcy9wb3N0X2ltZy8ke3Bvc3QudGh1bWJ9KWBcbiAgICAgICAgICAgIDogYHVybCgvc3RhdGljL2ltYWdlcy9wb3N0X2ltZy9kdW1teV90aHVtYi5qcGcpYFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1ib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC10aXRsZVwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdC8ke3Bvc3QuZmlsZW5hbWV9YH0+XG4gICAgICAgICAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LXN1YnRpdGxlXCI+e3Bvc3Quc2x1Z308L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWNyZWF0ZWRBdFwiPlxuICAgICAgICAgIHtkYXlqcyhwb3N0LmNyZWF0ZWRBdCkuZm9ybWF0KFwiTU1NIEQsIFlZWVlcIil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5wb3N0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9zdC1pbWctY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3QtYm9keSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3QtdGl0bGUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXNhbi1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwIDAuNXJlbSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9zdC1zdWJ0aXRsZSB7XG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3QtY3JlYXRlZEF0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwIDAgMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgICAucG9zdC1jb250YWluZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/arnold/Documents/git/github/mattdamon108.blog/components/PostCard.tsx */"));
});

/***/ })

})
//# sourceMappingURL=index.js.783b5fffadb2089d24f9.hot-update.js.map