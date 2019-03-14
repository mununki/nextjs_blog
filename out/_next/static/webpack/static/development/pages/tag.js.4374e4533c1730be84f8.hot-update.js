webpackHotUpdate("static/development/pages/tag.js",{

/***/ "./pages/tag/tagSearch.tsx":
/*!*********************************!*\
  !*** ./pages/tag/tagSearch.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _posts_postList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../posts/postList */ "./posts/postList.js");
/* harmony import */ var _posts_postList__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_posts_postList__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_useHandleInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/useHandleInput */ "./utils/useHandleInput.ts");
/* harmony import */ var _components_HeaderAvatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/HeaderAvatar */ "./components/HeaderAvatar.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.tsx");












var TagSearch = function TagSearch(props) {
  var useInput = Object(_utils_useHandleInput__WEBPACK_IMPORTED_MODULE_8__["useHandleInput"])("");

  var handleRoute = function handleRoute(route) {
    if (props.router) {
      props.router.push(route);
    }
  };

  var getUniqueTags = function getUniqueTags() {
    var tags = _posts_postList__WEBPACK_IMPORTED_MODULE_7___default.a.reduce(function (acc, cur) {
      return Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1___default.a([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(acc), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(cur.tag))));
    }, []);
    return tags;
  };

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_HeaderAvatar__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    id: "tag",
    className: "jsx-778206186"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-778206186" + " " + "container"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
    onSubmit: function onSubmit() {
      return handleRoute("/tag/".concat(useInput.value));
    },
    className: "jsx-778206186"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-778206186" + " " + "input-container"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    id: "tag-search-icon",
    className: "jsx-778206186"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
    className: "jsx-778206186" + " " + "fas fa-search"
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "text"
  }, useInput, {
    autoFocus: true,
    className: "jsx-778206186" + " " + (useInput.className != null && useInput.className || "tag-input")
  })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-778206186" + " " + "tag-list-container"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-778206186" + " " + "tag-title"
  }, "\uD83D\uDDC4"), getUniqueTags().map(function (tag) {
    return !useInput.value || tag.includes(useInput.value) ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      key: tag,
      className: "jsx-778206186" + " " + "tag-item"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/tag/".concat(tag)
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
      className: "jsx-778206186"
    }, tag))) : null;
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "778206186"
  }, "#tag.jsx-778206186{height:100vh;}.input-container.jsx-778206186{margin-top:3rem;position:relative;}#tag-search-icon.jsx-778206186{position:absolute;top:1.1rem;margin-left:1.5rem;font-size:2rem;color:var(--text-link-color);}.tag-input.jsx-778206186{margin:1rem 1rem;font-size:2rem;width:100%;border:none;font-family:var(--text-serif);border-bottom:2px var(--text-link-color) solid;outline:none;padding-left:50px;padding-bottom:10px;}.tag-list-container.jsx-778206186{margin:1rem;}.tag-title.jsx-778206186{font-size:2rem;margin:1rem 0;}.tag-item.jsx-778206186{display:inline-block;margin:0.5rem;font-size:1.2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm5vbGQvRG9jdW1lbnRzL2dpdC9naXRodWIvbWF0dGRhbW9uMTA4LmJsb2cvcGFnZXMvdGFnL3RhZ1NlYXJjaC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURXLEFBRzRCLEFBR0csQUFLRSxBQVFELEFBWUwsQUFJRyxBQUtNLFlBUnZCLENBNUJBLEVBZ0NnQixDQTdCSSxDQWFILENBUkosR0E2QkcsUUE1QkssQUF3QnJCLEdBaEJhLEVBYmIsQ0FrQ21CLFFBcEJMLEtBUkcsSUE2QmpCLEdBcEJnQyxRQVJELHNCQVNrQixPQVJqRCx3Q0FTZSxhQUNLLGtCQUNFLG9CQUN0QiIsImZpbGUiOiIvVXNlcnMvYXJub2xkL0RvY3VtZW50cy9naXQvZ2l0aHViL21hdHRkYW1vbjEwOC5ibG9nL3BhZ2VzL3RhZy90YWdTZWFyY2gudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciwgV2l0aFJvdXRlclByb3BzIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBVcmwsIFVybE9iamVjdCB9IGZyb20gXCJ1cmxcIjtcbmltcG9ydCBwb3N0TGlzdCBmcm9tIFwiLi4vLi4vcG9zdHMvcG9zdExpc3RcIjtcbmltcG9ydCB7IHVzZUhhbmRsZUlucHV0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3VzZUhhbmRsZUlucHV0XCI7XG5pbXBvcnQgSGVhZGVyQXZhdGFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRlckF2YXRhclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcblxuY29uc3QgVGFnU2VhcmNoID0gKHByb3BzOiBXaXRoUm91dGVyUHJvcHM8e30+KSA9PiB7XG4gIGNvbnN0IHVzZUlucHV0ID0gdXNlSGFuZGxlSW5wdXQoXCJcIik7XG4gIGNvbnN0IGhhbmRsZVJvdXRlID0gKHJvdXRlOiBzdHJpbmcgfCBVcmxPYmplY3QgfCBVcmwpID0+IHtcbiAgICBpZiAocHJvcHMucm91dGVyKSB7XG4gICAgICBwcm9wcy5yb3V0ZXIucHVzaChyb3V0ZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBnZXRVbmlxdWVUYWdzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhZ3MgPSBwb3N0TGlzdC5yZWR1Y2UoKGFjYzogc3RyaW5nW10sIGN1cikgPT4ge1xuICAgICAgcmV0dXJuIFsuLi5uZXcgU2V0KFsuLi5hY2MsIC4uLmN1ci50YWddKV07XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB0YWdzO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXJBdmF0YXIgLz5cbiAgICAgIDxkaXYgaWQ9XCJ0YWdcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KCkgPT4gaGFuZGxlUm91dGUoYC90YWcvJHt1c2VJbnB1dC52YWx1ZX1gKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8c3BhbiBpZD1cInRhZy1zZWFyY2gtaWNvblwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIiAvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWctaW5wdXRcIlxuICAgICAgICAgICAgICAgIHsuLi51c2VJbnB1dH1cbiAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZy1saXN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWctdGl0bGVcIj7wn5eEPC9kaXY+XG4gICAgICAgICAgICB7Z2V0VW5pcXVlVGFncygpLm1hcCh0YWcgPT5cbiAgICAgICAgICAgICAgIXVzZUlucHV0LnZhbHVlIHx8IHRhZy5pbmNsdWRlcyh1c2VJbnB1dC52YWx1ZSkgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3RhZ30gY2xhc3NOYW1lPVwidGFnLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdGFnLyR7dGFnfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YT57dGFnfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAjdGFnIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbnB1dC1jb250YWluZXIge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICN0YWctc2VhcmNoLWljb24ge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogMS4xcmVtO1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpbmstY29sb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGFnLWlucHV0IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDFyZW07XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXRleHQtc2VyaWYpO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggdmFyKC0tdGV4dC1saW5rLWNvbG9yKSBzb2xpZDtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRhZy1saXN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRhZy10aXRsZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50YWctaXRlbSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW07XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoVGFnU2VhcmNoKTtcbiJdfQ== */\n/*@ sourceURL=/Users/arnold/Documents/git/github/mattdamon108.blog/pages/tag/tagSearch.tsx */")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(TagSearch));

/***/ })

})
//# sourceMappingURL=tag.js.4374e4533c1730be84f8.hot-update.js.map