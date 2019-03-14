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
    className: "jsx-3320971904" + " " + "post-container"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      backgroundImage: post.thumb ? "url(/static/images/post_img/".concat(post.thumb, ")") : "url(/static/images/post_img/dummy_thumb.jpg)"
    },
    className: "jsx-3320971904" + " " + "post-img-container"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3320971904" + " " + "post-body"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3320971904" + " " + "post-title"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post/".concat(post.filename)
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "jsx-3320971904"
  }, post.title))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3320971904" + " " + "post-subtitle"
  }, post.slug), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3320971904" + " " + "post-createdAt"
  }, dayjs__WEBPACK_IMPORTED_MODULE_1___default()(post.createdAt).format("MMM D, YYYY"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3320971904"
  }, ".post-container.jsx-3320971904{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:1rem;}.post-img-container.jsx-3320971904{min-width:150px;height:150px;background-size:contain;background-repeat:no-repeat;background-position:center;}.post-body.jsx-3320971904{display:inline-block;margin:0 1rem;}.post-title.jsx-3320971904{font-family:\"Ubuntu\",\"Helvetica Neue\",Helvetica,Arial, sans-serif;font-size:1.5rem;font-weight:700;margin:1rem 0 0.5rem 0;}.post-subtitle.jsx-3320971904{color:grey;}.post-createdAt.jsx-3320971904{margin:1rem 0 0 0;}@media (max-width:576px){.post-container.jsx-3320971904{display:block;margin:1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm5vbGQvRG9jdW1lbnRzL2dpdC9naXRodWIvbWF0dGRhbW9uMTA4LmJsb2cvY29tcG9uZW50cy9Qb3N0Q2FyZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNTLEFBRzBCLEFBSUcsQUFPSyxBQUtULEFBTUQsQUFHTyxBQUlGLFdBTmxCLEdBT2dCLEVBekJELEVBcUJmLEdBZGdCLEtBbUJkLEdBekJ3QixNQU8xQixrQkFOOEIsYUFVWCxRQWhCTCxPQU9lLEVBVVgsR0FoQmxCLGFBaUJ5QixTQVZ6QixjQVdBIiwiZmlsZSI6Ii9Vc2Vycy9hcm5vbGQvRG9jdW1lbnRzL2dpdC9naXRodWIvbWF0dGRhbW9uMTA4LmJsb2cvY29tcG9uZW50cy9Qb3N0Q2FyZC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJUG9zdCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgcG9zdDogSVBvc3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wczogSVByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcG9zdCB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBrZXk9e3Bvc3QudGl0bGV9IGNsYXNzTmFtZT1cInBvc3QtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInBvc3QtaW1nLWNvbnRhaW5lclwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBwb3N0LnRodW1iXG4gICAgICAgICAgICA/IGB1cmwoL3N0YXRpYy9pbWFnZXMvcG9zdF9pbWcvJHtwb3N0LnRodW1ifSlgXG4gICAgICAgICAgICA6IGB1cmwoL3N0YXRpYy9pbWFnZXMvcG9zdF9pbWcvZHVtbXlfdGh1bWIuanBnKWBcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtdGl0bGVcIj5cbiAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3QvJHtwb3N0LmZpbGVuYW1lfWB9PlxuICAgICAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1zdWJ0aXRsZVwiPntwb3N0LnNsdWd9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1jcmVhdGVkQXRcIj5cbiAgICAgICAgICB7ZGF5anMocG9zdC5jcmVhdGVkQXQpLmZvcm1hdChcIk1NTSBELCBZWVlZXCIpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAucG9zdC1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3QtaW1nLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0LWJvZHkge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0LXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsXG4gICAgICAgICAgICAgIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gMCAwLjVyZW0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3Qtc3VidGl0bGUge1xuICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0LWNyZWF0ZWRBdCB7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gMCAwIDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgLnBvc3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/arnold/Documents/git/github/mattdamon108.blog/components/PostCard.tsx */"));
});

/***/ })

})
//# sourceMappingURL=index.js.fdade8c1179231377e52.hot-update.js.map