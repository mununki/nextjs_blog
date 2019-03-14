webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");

















var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(MyApp, _App);

  function MyApp() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MyApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {});

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          router = _this$props.router;
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_11__["Container"], null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_12___default.a, null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("title", {
        className: "jsx-2911575436"
      }, "Build the Codes")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_15__["default"], null), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
        className: "jsx-2911575436" + " " + (pageProps.className != null && pageProps.className || "")
      })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "2911575436"
      }, "html,body{width:100%;margin:0;padding:0;border:0;}body{font-size:1rem;font-family:Merriweather,Courier,serif;font-weight:300;width:100%;line-height:160%;-webkit-font-smoothing:antialiased;}a{-webkit-text-decoration:underline;text-decoration:underline;}a:link{color:#ed4c67;}a:visited{color:#ed4c67;}a:hover{color:#ed4c67;}a:active{color:#ed4c67;}.container{width:800px;margin:0 auto;}@media (max-width:900px){.container{width:100%;margin:0 auto;}}.post-card{background-color:#fff;padding:1rem;margin-bottom:50px;}img{width:100%;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;}blockquote{margin:0;padding:0 1em;color:#6a737d;border-left:0.25em solid #dfe2e5;word-break:break-word;}code{padding:2px 3px;border-width:0;border-radius:3px;background-color:rgba(255,229,100,0.2);}pre code{overflow:auto;word-wrap:normal;white-space:pre;}.hljs-comment,.hljs-quote{color:#d4d0ab;}.hljs-variable,.hljs-template-variable,.hljs-tag,.hljs-name,.hljs-selector-id,.hljs-selector-class,.hljs-regexp,.hljs-deletion{color:#ffa07a;}.hljs-number,.hljs-built_in,.hljs-builtin-name,.hljs-literal,.hljs-type,.hljs-params,.hljs-meta,.hljs-link{color:#f5ab35;}.hljs-attribute{color:#ffd700;}.hljs-string,.hljs-symbol,.hljs-bullet,.hljs-addition{color:#abe338;}.hljs-title,.hljs-section{color:#00e0e0;}.hljs-keyword,.hljs-selector-tag{color:#dcc6e0;}.hljs{display:block;overflow-x:auto;background:#2b2b2b;color:#f8f8f2;padding:1rem;font-size:1rem;border-radius:5px;}.hljs-emphasis{font-style:italic;}.hljs-strong{font-weight:bold;}@media screen and (-ms-high-contrast:active){.hljs-addition,.hljs-attribute,.hljs-built_in,.hljs-builtin-name,.hljs-bullet,.hljs-comment,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-string,.hljs-symbol,.hljs-type,.hljs-quote{color:highlight;}.hljs-keyword,.hljs-selector-tag{font-weight:bold;}}@media (max-width:576px){pre{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm5vbGQvRG9jdW1lbnRzL2dpdC9naXRodWIvbWF0dGRhbW9uMTA4LmJsb2cvcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJXLEFBSTBCLEFBT0ksQUFRVyxBQUdaLEFBR0EsQUFHQSxBQUdBLEFBR0YsQUFNQyxBQUtTLEFBTVgsQUFLRixBQVFPLEFBT0YsQUFPQSxBQVdBLEFBWUEsQUFLQSxBQVFBLEFBTUEsQUFNQSxBQUlBLEFBVUksQUFJRCxBQW1CQyxBQUtDLEFBTU4sU0FySEMsRUFwREwsQUFvQ08sQUFXTSxBQTJIdEIsQ0E1SWMsRUFaaEIsQUFHQSxBQUdBLEFBR0EsQUF3Q21CLEFBT25CLEFBV0EsQUFZQSxBQUtBLEFBUUEsQUFNQSxBQU1BLEFBSWtCLENBdkh5QixDQXFEMUIsQUFtR2YsQ0FuQkYsQUF3QkUsQ0E1QkYsRUF2SVksRUF3Q0csQ0FZQyxFQWhCZCxDQU5GLElBN0JXLEFBNkhVLENBbEVELEFBT0YsSUExQkcsRUFZYyxFQW5EbkMsUUFrRUEsRUFQNEMsQUFrRTVCLEtBeEhFLEFBbUNsQixNQTVCQSxHQWtIZSxPQXhIRixBQThDVyxNQTJFUCxLQXhIRSxPQXFEbkIsRUFmQSxDQW1Gb0IsQ0EzRXBCLE1BN0NxQyxXQXlIckMsd0JBeEhBIiwiZmlsZSI6Ii9Vc2Vycy9hcm5vbGQvRG9jdW1lbnRzL2dpdC9naXRodWIvbWF0dGRhbW9uMTA4LmJsb2cvcGFnZXMvX2FwcC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwLCB7IENvbnRhaW5lciwgTmV4dEFwcENvbnRleHQgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIHJvdXRlciwgY3R4IH06IE5leHRBcHBDb250ZXh0KSB7XG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xuXG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICB9XG4gICAgcmV0dXJuIHsgcGFnZVByb3BzIH07XG4gIH1cblxuICBzdGF0ZSA9IHt9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkJ1aWxkIHRoZSBDb2RlczwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogTWVycml3ZWF0aGVyLCBDb3VyaWVyLCBzZXJpZjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNjAlO1xuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGE6bGluayB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZWQ0YzY3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNlZDRjNjc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNlZDRjNjc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhOmFjdGl2ZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZWQ0YzY3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvc3QtY2FyZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBibG9ja3F1b3RlIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICAgICAgICAgICAgY29sb3I6ICM2YTczN2Q7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAwLjI1ZW0gc29saWQgI2RmZTJlNTtcbiAgICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29kZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJweCAzcHg7XG4gICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjI5LCAxMDAsIDAuMik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByZSBjb2RlIHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgIHdvcmQtd3JhcDogbm9ybWFsO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGxqcy1jb21tZW50LFxuICAgICAgICAgICAgLmhsanMtcXVvdGUge1xuICAgICAgICAgICAgICBjb2xvcjogI2Q0ZDBhYjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhsanMtdmFyaWFibGUsXG4gICAgICAgICAgICAuaGxqcy10ZW1wbGF0ZS12YXJpYWJsZSxcbiAgICAgICAgICAgIC5obGpzLXRhZyxcbiAgICAgICAgICAgIC5obGpzLW5hbWUsXG4gICAgICAgICAgICAuaGxqcy1zZWxlY3Rvci1pZCxcbiAgICAgICAgICAgIC5obGpzLXNlbGVjdG9yLWNsYXNzLFxuICAgICAgICAgICAgLmhsanMtcmVnZXhwLFxuICAgICAgICAgICAgLmhsanMtZGVsZXRpb24ge1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmYTA3YTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogT3JhbmdlICovXG4gICAgICAgICAgICAuaGxqcy1udW1iZXIsXG4gICAgICAgICAgICAuaGxqcy1idWlsdF9pbixcbiAgICAgICAgICAgIC5obGpzLWJ1aWx0aW4tbmFtZSxcbiAgICAgICAgICAgIC5obGpzLWxpdGVyYWwsXG4gICAgICAgICAgICAuaGxqcy10eXBlLFxuICAgICAgICAgICAgLmhsanMtcGFyYW1zLFxuICAgICAgICAgICAgLmhsanMtbWV0YSxcbiAgICAgICAgICAgIC5obGpzLWxpbmsge1xuICAgICAgICAgICAgICBjb2xvcjogI2Y1YWIzNTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogWWVsbG93ICovXG4gICAgICAgICAgICAuaGxqcy1hdHRyaWJ1dGUge1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZDcwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogR3JlZW4gKi9cbiAgICAgICAgICAgIC5obGpzLXN0cmluZyxcbiAgICAgICAgICAgIC5obGpzLXN5bWJvbCxcbiAgICAgICAgICAgIC5obGpzLWJ1bGxldCxcbiAgICAgICAgICAgIC5obGpzLWFkZGl0aW9uIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNhYmUzMzg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIEJsdWUgKi9cbiAgICAgICAgICAgIC5obGpzLXRpdGxlLFxuICAgICAgICAgICAgLmhsanMtc2VjdGlvbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDBlMGUwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBQdXJwbGUgKi9cbiAgICAgICAgICAgIC5obGpzLWtleXdvcmQsXG4gICAgICAgICAgICAuaGxqcy1zZWxlY3Rvci10YWcge1xuICAgICAgICAgICAgICBjb2xvcjogI2RjYzZlMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhsanMge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzJiMmIyYjtcbiAgICAgICAgICAgICAgY29sb3I6ICNmOGY4ZjI7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGxqcy1lbXBoYXNpcyB7XG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhsanMtc3Ryb25nIHtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gICAgICAgICAgICAgIC5obGpzLWFkZGl0aW9uLFxuICAgICAgICAgICAgICAuaGxqcy1hdHRyaWJ1dGUsXG4gICAgICAgICAgICAgIC5obGpzLWJ1aWx0X2luLFxuICAgICAgICAgICAgICAuaGxqcy1idWlsdGluLW5hbWUsXG4gICAgICAgICAgICAgIC5obGpzLWJ1bGxldCxcbiAgICAgICAgICAgICAgLmhsanMtY29tbWVudCxcbiAgICAgICAgICAgICAgLmhsanMtbGluayxcbiAgICAgICAgICAgICAgLmhsanMtbGl0ZXJhbCxcbiAgICAgICAgICAgICAgLmhsanMtbWV0YSxcbiAgICAgICAgICAgICAgLmhsanMtbnVtYmVyLFxuICAgICAgICAgICAgICAuaGxqcy1wYXJhbXMsXG4gICAgICAgICAgICAgIC5obGpzLXN0cmluZyxcbiAgICAgICAgICAgICAgLmhsanMtc3ltYm9sLFxuICAgICAgICAgICAgICAuaGxqcy10eXBlLFxuICAgICAgICAgICAgICAuaGxqcy1xdW90ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGhpZ2hsaWdodDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5obGpzLWtleXdvcmQsXG4gICAgICAgICAgICAgIC5obGpzLXNlbGVjdG9yLXRhZyB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgICAgIHByZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdfQ== */\n/*@ sourceURL=/Users/arnold/Documents/git/github/mattdamon108.blog/pages/_app.tsx */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_11___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=_app.js.c0463c141e540b3c8a24.hot-update.js.map