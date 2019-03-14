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

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    id: "tag",
    className: "jsx-698305709"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-698305709" + " " + "container"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
    onSubmit: function onSubmit() {
      return handleRoute("/tag/".concat(useInput.value));
    },
    className: "jsx-698305709"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-698305709" + " " + "input-container"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    id: "tag-search-icon",
    className: "jsx-698305709"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
    className: "jsx-698305709" + " " + "fas fa-search"
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "text"
  }, useInput, {
    autoFocus: true,
    className: "jsx-698305709" + " " + (useInput.className != null && useInput.className || "tag-input")
  })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-698305709" + " " + "tag-list-container"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-698305709" + " " + "tag-title"
  }, "\uD83D\uDDC4"), getUniqueTags().map(function (tag) {
    return !useInput.value || tag.includes(useInput.value) ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      key: tag,
      className: "jsx-698305709" + " " + "tag-item"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/tag/".concat(tag)
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
      className: "jsx-698305709"
    }, tag))) : null;
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "698305709"
  }, "#tag.jsx-698305709{height:100vh;}.input-container.jsx-698305709{margin-top:3rem;position:relative;}#tag-search-icon.jsx-698305709{position:absolute;top:1rem;margin-left:1.5rem;font-size:2rem;color:var(--text-link-color);}.tag-input.jsx-698305709{margin:1rem 1rem;font-size:2rem;width:100%;border:none;border-bottom:2px #ed4c67 solid;outline:none;padding-left:50px;}.tag-list-container.jsx-698305709{margin:1rem;}.tag-title.jsx-698305709{font-size:2rem;margin:1rem 0;}.tag-item.jsx-698305709{display:inline-block;margin:0.5rem;font-size:1.2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm5vbGQvRG9jdW1lbnRzL2dpdC9naXRodWIvbWF0dGRhbW9uMTA4LmJsb2cvcGFnZXMvdGFnL3RhZ1NlYXJjaC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENTLEFBRzBCLEFBR0csQUFLRSxBQVFELEFBVUwsQUFJRyxBQUtNLFlBUnZCLENBMUJBLEVBOEJnQixDQTNCSSxDQWFILENBUk4sR0EyQkssTUExQkssRUFzQnJCLEdBZGEsRUFiYixDQWdDbUIsUUFsQkwsR0FSRyxNQTJCakIsR0FsQmtDLE1BUkgsMEJBU2hCLEdBUmYsVUFTb0Isa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9hcm5vbGQvRG9jdW1lbnRzL2dpdC9naXRodWIvbWF0dGRhbW9uMTA4LmJsb2cvcGFnZXMvdGFnL3RhZ1NlYXJjaC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB3aXRoUm91dGVyLCBXaXRoUm91dGVyUHJvcHMgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFVybCwgVXJsT2JqZWN0IH0gZnJvbSBcInVybFwiO1xuaW1wb3J0IHBvc3RMaXN0IGZyb20gXCIuLi8uLi9wb3N0cy9wb3N0TGlzdFwiO1xuaW1wb3J0IHsgdXNlSGFuZGxlSW5wdXQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXNlSGFuZGxlSW5wdXRcIjtcblxuY29uc3QgVGFnU2VhcmNoID0gKHByb3BzOiBXaXRoUm91dGVyUHJvcHM8e30+KSA9PiB7XG4gIGNvbnN0IHVzZUlucHV0ID0gdXNlSGFuZGxlSW5wdXQoXCJcIik7XG4gIGNvbnN0IGhhbmRsZVJvdXRlID0gKHJvdXRlOiBzdHJpbmcgfCBVcmxPYmplY3QgfCBVcmwpID0+IHtcbiAgICBpZiAocHJvcHMucm91dGVyKSB7XG4gICAgICBwcm9wcy5yb3V0ZXIucHVzaChyb3V0ZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBnZXRVbmlxdWVUYWdzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhZ3MgPSBwb3N0TGlzdC5yZWR1Y2UoKGFjYzogc3RyaW5nW10sIGN1cikgPT4ge1xuICAgICAgcmV0dXJuIFsuLi5uZXcgU2V0KFsuLi5hY2MsIC4uLmN1ci50YWddKV07XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB0YWdzO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cInRhZ1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eygpID0+IGhhbmRsZVJvdXRlKGAvdGFnLyR7dXNlSW5wdXQudmFsdWV9YCl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8c3BhbiBpZD1cInRhZy1zZWFyY2gtaWNvblwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInRhZy1pbnB1dFwiIHsuLi51c2VJbnB1dH0gYXV0b0ZvY3VzIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWctbGlzdC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZy10aXRsZVwiPvCfl4Q8L2Rpdj5cbiAgICAgICAgICB7Z2V0VW5pcXVlVGFncygpLm1hcCh0YWcgPT5cbiAgICAgICAgICAgICF1c2VJbnB1dC52YWx1ZSB8fCB0YWcuaW5jbHVkZXModXNlSW5wdXQudmFsdWUpID8gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17dGFnfSBjbGFzc05hbWU9XCJ0YWctaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdGFnLyR7dGFnfWB9PlxuICAgICAgICAgICAgICAgICAgPGE+e3RhZ308L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgI3RhZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI3RhZy1zZWFyY2gtaWNvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDFyZW07XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGluay1jb2xvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRhZy1pbnB1dCB7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gMXJlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4ICNlZDRjNjcgc29saWQ7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50YWctbGlzdC1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50YWctdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRhZy1pdGVtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMC41cmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoVGFnU2VhcmNoKTtcbiJdfQ== */\n/*@ sourceURL=/Users/arnold/Documents/git/github/mattdamon108.blog/pages/tag/tagSearch.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(TagSearch));

/***/ })

})
//# sourceMappingURL=tag.js.cef80bdebc8bc060df06.hot-update.js.map