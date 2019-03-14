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
  }, "#tag.jsx-778206186{height:100vh;}.input-container.jsx-778206186{margin-top:3rem;position:relative;}#tag-search-icon.jsx-778206186{position:absolute;top:1.1rem;margin-left:1.5rem;font-size:2rem;color:var(--text-link-color);}.tag-input.jsx-778206186{margin:1rem 1rem;font-size:2rem;width:100%;border:none;font-family:var(--text-serif);border-bottom:2px var(--text-link-color) solid;outline:none;padding-left:50px;padding-bottom:10px;}.tag-list-container.jsx-778206186{margin:1rem;}.tag-title.jsx-778206186{font-size:2rem;margin:1rem 0;}.tag-item.jsx-778206186{display:inline-block;margin:0.5rem;font-size:1.2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm5vbGQvRG9jdW1lbnRzL2dpdC9naXRodWIvbWF0dGRhbW9uMTA4LmJsb2cvcGFnZXMvdGFnL3RhZ1NlYXJjaC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RXLEFBRzRCLEFBR0csQUFLRSxBQVFELEFBWUwsQUFJRyxBQUtNLFlBUnZCLENBNUJBLEVBZ0NnQixDQTdCSSxDQWFILENBUkosR0E2QkcsUUE1QkssQUF3QnJCLEdBaEJhLEVBYmIsQ0FrQ21CLFFBcEJMLEtBUkcsSUE2QmpCLEdBcEJnQyxRQVJELHNCQVNrQixPQVJqRCx3Q0FTZSxhQUNLLGtCQUNFLG9CQUN0QiIsImZpbGUiOiIvVXNlcnMvYXJub2xkL0RvY3VtZW50cy9naXQvZ2l0aHViL21hdHRkYW1vbjEwOC5ibG9nL3BhZ2VzL3RhZy90YWdTZWFyY2gudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciwgV2l0aFJvdXRlclByb3BzIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBVcmwsIFVybE9iamVjdCB9IGZyb20gXCJ1cmxcIjtcbmltcG9ydCBwb3N0TGlzdCBmcm9tIFwiLi4vLi4vcG9zdHMvcG9zdExpc3RcIjtcbmltcG9ydCB7IHVzZUhhbmRsZUlucHV0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3VzZUhhbmRsZUlucHV0XCI7XG5pbXBvcnQgSGVhZGVyQXZhdGFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRlckF2YXRhclwiO1xuXG5jb25zdCBUYWdTZWFyY2ggPSAocHJvcHM6IFdpdGhSb3V0ZXJQcm9wczx7fT4pID0+IHtcbiAgY29uc3QgdXNlSW5wdXQgPSB1c2VIYW5kbGVJbnB1dChcIlwiKTtcbiAgY29uc3QgaGFuZGxlUm91dGUgPSAocm91dGU6IHN0cmluZyB8IFVybE9iamVjdCB8IFVybCkgPT4ge1xuICAgIGlmIChwcm9wcy5yb3V0ZXIpIHtcbiAgICAgIHByb3BzLnJvdXRlci5wdXNoKHJvdXRlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGdldFVuaXF1ZVRhZ3MgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFncyA9IHBvc3RMaXN0LnJlZHVjZSgoYWNjOiBzdHJpbmdbXSwgY3VyKSA9PiB7XG4gICAgICByZXR1cm4gWy4uLm5ldyBTZXQoWy4uLmFjYywgLi4uY3VyLnRhZ10pXTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHRhZ3M7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlckF2YXRhciAvPlxuICAgICAgPGRpdiBpZD1cInRhZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoKSA9PiBoYW5kbGVSb3V0ZShgL3RhZy8ke3VzZUlucHV0LnZhbHVlfWApfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGlkPVwidGFnLXNlYXJjaC1pY29uXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiIC8+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhZy1pbnB1dFwiXG4gICAgICAgICAgICAgICAgey4uLnVzZUlucHV0fVxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnLWxpc3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZy10aXRsZVwiPvCfl4Q8L2Rpdj5cbiAgICAgICAgICAgIHtnZXRVbmlxdWVUYWdzKCkubWFwKHRhZyA9PlxuICAgICAgICAgICAgICAhdXNlSW5wdXQudmFsdWUgfHwgdGFnLmluY2x1ZGVzKHVzZUlucHV0LnZhbHVlKSA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17dGFnfSBjbGFzc05hbWU9XCJ0YWctaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC90YWcvJHt0YWd9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPnt0YWd9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgICN0YWcge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI3RhZy1zZWFyY2gtaWNvbiB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAxLjFyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGluay1jb2xvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50YWctaW5wdXQge1xuICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMXJlbTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tdGV4dC1zZXJpZik7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCB2YXIoLS10ZXh0LWxpbmstY29sb3IpIHNvbGlkO1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGFnLWxpc3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGFnLXRpdGxlIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRhZy1pdGVtIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW46IDAuNXJlbTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihUYWdTZWFyY2gpO1xuIl19 */\n/*@ sourceURL=/Users/arnold/Documents/git/github/mattdamon108.blog/pages/tag/tagSearch.tsx */")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Footer, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(TagSearch));

/***/ })

})
//# sourceMappingURL=tag.js.ca115072a1937753a49b.hot-update.js.map