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
    className: "jsx-2725464137"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2725464137" + " " + "container"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
    onSubmit: function onSubmit() {
      return handleRoute("/tag/".concat(useInput.value));
    },
    className: "jsx-2725464137"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2725464137" + " " + "input-container"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    id: "tag-search-icon",
    className: "jsx-2725464137"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
    className: "jsx-2725464137" + " " + "fas fa-search"
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "text"
  }, useInput, {
    autoFocus: true,
    className: "jsx-2725464137" + " " + (useInput.className != null && useInput.className || "tag-input")
  })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2725464137" + " " + "tag-list-container"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2725464137" + " " + "tag-title"
  }, "\uD83D\uDDC4"), getUniqueTags().map(function (tag) {
    return !useInput.value || tag.includes(useInput.value) ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      key: tag,
      className: "jsx-2725464137" + " " + "tag-item"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/tag/".concat(tag)
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
      className: "jsx-2725464137"
    }, tag))) : null;
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2725464137"
  }, "#tag.jsx-2725464137{height:100vh;}.input-container.jsx-2725464137{margin-top:3rem;position:relative;}#tag-search-icon.jsx-2725464137{position:absolute;top:1rem;margin-left:1.5rem;font-size:2rem;color:$text-link-color;}.tag-input.jsx-2725464137{margin:1rem 1rem;font-size:2rem;width:100%;border:none;border-bottom:2px #ed4c67 solid;outline:none;padding-left:50px;}.tag-list-container.jsx-2725464137{margin:1rem;}.tag-title.jsx-2725464137{font-size:2rem;margin:1rem 0;}.tag-item.jsx-2725464137{display:inline-block;margin:0.5rem;font-size:1.2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm5vbGQvRG9jdW1lbnRzL2dpdC9naXRodWIvbWF0dGRhbW9uMTA4LmJsb2cvcGFnZXMvdGFnL3RhZ1NlYXJjaC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENTLEFBRzBCLEFBR0csQUFLRSxBQVFELEFBVUwsQUFJRyxBQUtNLFlBUnZCLENBMUJBLEVBOEJnQixDQTNCSSxDQWFILENBUk4sR0EyQkssTUExQkssRUFzQnJCLEdBZGEsRUFiYixDQWdDbUIsUUFsQkwsR0FSRyxNQTJCakIsR0FsQmtDLE1BUlQsdUJBQ3pCLEdBUWUsYUFDSyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2Fybm9sZC9Eb2N1bWVudHMvZ2l0L2dpdGh1Yi9tYXR0ZGFtb24xMDguYmxvZy9wYWdlcy90YWcvdGFnU2VhcmNoLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIsIFdpdGhSb3V0ZXJQcm9wcyB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVXJsLCBVcmxPYmplY3QgfSBmcm9tIFwidXJsXCI7XG5pbXBvcnQgcG9zdExpc3QgZnJvbSBcIi4uLy4uL3Bvc3RzL3Bvc3RMaXN0XCI7XG5pbXBvcnQgeyB1c2VIYW5kbGVJbnB1dCB9IGZyb20gXCIuLi8uLi91dGlscy91c2VIYW5kbGVJbnB1dFwiO1xuXG5jb25zdCBUYWdTZWFyY2ggPSAocHJvcHM6IFdpdGhSb3V0ZXJQcm9wczx7fT4pID0+IHtcbiAgY29uc3QgdXNlSW5wdXQgPSB1c2VIYW5kbGVJbnB1dChcIlwiKTtcbiAgY29uc3QgaGFuZGxlUm91dGUgPSAocm91dGU6IHN0cmluZyB8IFVybE9iamVjdCB8IFVybCkgPT4ge1xuICAgIGlmIChwcm9wcy5yb3V0ZXIpIHtcbiAgICAgIHByb3BzLnJvdXRlci5wdXNoKHJvdXRlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGdldFVuaXF1ZVRhZ3MgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFncyA9IHBvc3RMaXN0LnJlZHVjZSgoYWNjOiBzdHJpbmdbXSwgY3VyKSA9PiB7XG4gICAgICByZXR1cm4gWy4uLm5ldyBTZXQoWy4uLmFjYywgLi4uY3VyLnRhZ10pXTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHRhZ3M7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwidGFnXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KCkgPT4gaGFuZGxlUm91dGUoYC90YWcvJHt1c2VJbnB1dC52YWx1ZX1gKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGlkPVwidGFnLXNlYXJjaC1pY29uXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidGFnLWlucHV0XCIgey4uLnVzZUlucHV0fSBhdXRvRm9jdXMgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZy1saXN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnLXRpdGxlXCI+8J+XhDwvZGl2PlxuICAgICAgICAgIHtnZXRVbmlxdWVUYWdzKCkubWFwKHRhZyA9PlxuICAgICAgICAgICAgIXVzZUlucHV0LnZhbHVlIHx8IHRhZy5pbmNsdWRlcyh1c2VJbnB1dC52YWx1ZSkgPyAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXt0YWd9IGNsYXNzTmFtZT1cInRhZy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC90YWcvJHt0YWd9YH0+XG4gICAgICAgICAgICAgICAgICA8YT57dGFnfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAjdGFnIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbnB1dC1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjdGFnLXNlYXJjaC1pY29uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBjb2xvcjogJHRleHQtbGluay1jb2xvcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGFnLWlucHV0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSAxcmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggI2VkNGM2NyBzb2xpZDtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRhZy1saXN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRhZy10aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGFnLWl0ZW0ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihUYWdTZWFyY2gpO1xuIl19 */\n/*@ sourceURL=/Users/arnold/Documents/git/github/mattdamon108.blog/pages/tag/tagSearch.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(TagSearch));

/***/ })

})
//# sourceMappingURL=tag.js.931f6ba4e5ebd8bd9145.hot-update.js.map