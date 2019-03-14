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
    className: "jsx-407463209"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-407463209" + " " + "container"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
    onSubmit: function onSubmit() {
      return handleRoute("/tag/".concat(useInput.value));
    },
    className: "jsx-407463209"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-407463209" + " " + "input-container"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    id: "tag-search-icon",
    className: "jsx-407463209"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
    className: "jsx-407463209" + " " + "fas fa-search"
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "text"
  }, useInput, {
    autoFocus: true,
    className: "jsx-407463209" + " " + (useInput.className != null && useInput.className || "tag-input")
  })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-407463209" + " " + "tag-list-container"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-407463209" + " " + "tag-title"
  }, "\uD83D\uDDC4"), getUniqueTags().map(function (tag) {
    return !useInput.value || tag.includes(useInput.value) ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      key: tag,
      className: "jsx-407463209" + " " + "tag-item"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/tag/".concat(tag)
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
      className: "jsx-407463209"
    }, tag))) : null;
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "407463209"
  }, "#tag.jsx-407463209{height:100vh;}.input-container.jsx-407463209{margin-top:3rem;position:relative;}#tag-search-icon.jsx-407463209{position:absolute;top:1.1rem;margin-left:1.5rem;font-size:2rem;color:var(--text-link-color);}.tag-input.jsx-407463209{margin:1rem 1rem;font-size:2rem;width:100%;border:none;font-family:var(--text-serif);border-bottom:2px var(--text-link-color) solid;outline:none;padding-left:50px;padding-bottom:10px;}.tag-list-container.jsx-407463209{margin:1rem;}.tag-title.jsx-407463209{font-size:2rem;margin:1rem 0;}.tag-item.jsx-407463209{display:inline-block;margin:0.5rem;font-size:1.2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm5vbGQvRG9jdW1lbnRzL2dpdC9naXRodWIvbWF0dGRhbW9uMTA4LmJsb2cvcGFnZXMvdGFnL3RhZ1NlYXJjaC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENTLEFBRzBCLEFBR0csQUFLRSxBQVFELEFBWUwsQUFJRyxBQUtNLFlBUnZCLENBNUJBLEVBZ0NnQixDQTdCSSxDQWFILENBUkosR0E2QkcsUUE1QkssQUF3QnJCLEdBaEJhLEVBYmIsQ0FrQ21CLFFBcEJMLEtBUkcsSUE2QmpCLEdBcEJnQyxRQVJELHNCQVNrQixPQVJqRCx3Q0FTZSxhQUNLLGtCQUNFLG9CQUN0QiIsImZpbGUiOiIvVXNlcnMvYXJub2xkL0RvY3VtZW50cy9naXQvZ2l0aHViL21hdHRkYW1vbjEwOC5ibG9nL3BhZ2VzL3RhZy90YWdTZWFyY2gudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciwgV2l0aFJvdXRlclByb3BzIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBVcmwsIFVybE9iamVjdCB9IGZyb20gXCJ1cmxcIjtcbmltcG9ydCBwb3N0TGlzdCBmcm9tIFwiLi4vLi4vcG9zdHMvcG9zdExpc3RcIjtcbmltcG9ydCB7IHVzZUhhbmRsZUlucHV0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3VzZUhhbmRsZUlucHV0XCI7XG5cbmNvbnN0IFRhZ1NlYXJjaCA9IChwcm9wczogV2l0aFJvdXRlclByb3BzPHt9PikgPT4ge1xuICBjb25zdCB1c2VJbnB1dCA9IHVzZUhhbmRsZUlucHV0KFwiXCIpO1xuICBjb25zdCBoYW5kbGVSb3V0ZSA9IChyb3V0ZTogc3RyaW5nIHwgVXJsT2JqZWN0IHwgVXJsKSA9PiB7XG4gICAgaWYgKHByb3BzLnJvdXRlcikge1xuICAgICAgcHJvcHMucm91dGVyLnB1c2gocm91dGUpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZ2V0VW5pcXVlVGFncyA9ICgpID0+IHtcbiAgICBjb25zdCB0YWdzID0gcG9zdExpc3QucmVkdWNlKChhY2M6IHN0cmluZ1tdLCBjdXIpID0+IHtcbiAgICAgIHJldHVybiBbLi4ubmV3IFNldChbLi4uYWNjLCAuLi5jdXIudGFnXSldO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gdGFncztcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJ0YWdcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXsoKSA9PiBoYW5kbGVSb3V0ZShgL3RhZy8ke3VzZUlucHV0LnZhbHVlfWApfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJ0YWctc2VhcmNoLWljb25cIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0YWctaW5wdXRcIiB7Li4udXNlSW5wdXR9IGF1dG9Gb2N1cyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnLWxpc3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWctdGl0bGVcIj7wn5eEPC9kaXY+XG4gICAgICAgICAge2dldFVuaXF1ZVRhZ3MoKS5tYXAodGFnID0+XG4gICAgICAgICAgICAhdXNlSW5wdXQudmFsdWUgfHwgdGFnLmluY2x1ZGVzKHVzZUlucHV0LnZhbHVlKSA/IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3RhZ30gY2xhc3NOYW1lPVwidGFnLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3RhZy8ke3RhZ31gfT5cbiAgICAgICAgICAgICAgICAgIDxhPnt0YWd9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgICN0YWcge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICN0YWctc2VhcmNoLWljb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAxLjFyZW07XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGluay1jb2xvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRhZy1pbnB1dCB7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gMXJlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXRleHQtc2VyaWYpO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHZhcigtLXRleHQtbGluay1jb2xvcikgc29saWQ7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRhZy1saXN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRhZy10aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGFnLWl0ZW0ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihUYWdTZWFyY2gpO1xuIl19 */\n/*@ sourceURL=/Users/arnold/Documents/git/github/mattdamon108.blog/pages/tag/tagSearch.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(TagSearch));

/***/ })

})
//# sourceMappingURL=tag.js.26e4c609416293e97804.hot-update.js.map