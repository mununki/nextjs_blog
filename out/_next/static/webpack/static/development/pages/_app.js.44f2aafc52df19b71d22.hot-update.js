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
        className: "jsx-2528425832"
      }, "Build the Codes")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_15__["default"], null), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
        className: "jsx-2528425832" + " " + (pageProps.className != null && pageProps.className || "")
      })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "2528425832"
      }, "html,body{width:100%;margin:0;padding:0;border:0;--background-color:#222f3e;--text-serif:Merriweather,Courier,serif;--text-san-serif:Ubuntu,\"Helvetica Neue\",Helvetica,Arial,sans-serif;--text-link-color:#ed4c67;}body{font-size:1rem;font-family: font-weight:300;width:100%;line-height:200%;-webkit-font-smoothing:antialiased;}a{-webkit-text-decoration:underline;text-decoration:underline;}a:link{color:var(--text-link-color);}a:visited{color:var(--text-link-color);}a:hover{color:var(--text-link-color);}a:active{color:var(--text-link-color);}.container{width:800px;margin:0 auto;}@media (max-width:900px){.container{width:100%;margin:0 auto;}}.post-content{background-color:#fff;padding:1rem;margin-bottom:50px;}img{width:100%;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;}blockquote{margin:0;padding:0 1em;color:#6a737d;border-left:0.25em solid #dfe2e5;word-break:break-word;}code{padding:2px 3px;border-width:0;border-radius:3px;background-color:rgba(255,229,100,0.2);font-family:Merriweather,Courier,serif;}pre code{overflow:auto;word-wrap:normal;white-space:pre;line-height:150%;}.hljs-comment,.hljs-quote{color:#d4d0ab;}.hljs-variable,.hljs-template-variable,.hljs-tag,.hljs-name,.hljs-selector-id,.hljs-selector-class,.hljs-regexp,.hljs-deletion{color:#ffa07a;}.hljs-number,.hljs-built_in,.hljs-builtin-name,.hljs-literal,.hljs-type,.hljs-params,.hljs-meta,.hljs-link{color:#f5ab35;}.hljs-attribute{color:#ffd700;}.hljs-string,.hljs-symbol,.hljs-bullet,.hljs-addition{color:#abe338;}.hljs-title,.hljs-section{color:#00e0e0;}.hljs-keyword,.hljs-selector-tag{color:#dcc6e0;}.hljs{display:block;overflow-x:auto;background:#2b2b2b;color:#f8f8f2;padding:1rem;font-family:Consolas,Menlo,Monaco,monospace;font-size:0.8rem;font-weight:600;border-radius:5px;}.hljs-emphasis{font-style:italic;}.hljs-strong{font-weight:bold;}@media screen and (-ms-high-contrast:active){.hljs-addition,.hljs-attribute,.hljs-built_in,.hljs-builtin-name,.hljs-bullet,.hljs-comment,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-string,.hljs-symbol,.hljs-type,.hljs-quote{color:highlight;}.hljs-keyword,.hljs-selector-tag{font-weight:bold;}}@media (max-width:576px){pre{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm5vbGQvRG9jdW1lbnRzL2dpdC9naXRodWIvbWF0dGRhbW9uMTA4LmJsb2cvcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJXLEFBSTBCLEFBV0ksQUFRVyxBQUdHLEFBR0EsQUFHQSxBQUdBLEFBR2pCLEFBTUMsQUFLUyxBQU1YLEFBS0YsQUFRTyxBQVFGLEFBUUEsQUFXQSxBQVlBLEFBS0EsQUFRQSxBQU1BLEFBTUEsQUFJQSxBQVlJLEFBSUQsQUFtQkMsQUFLQyxBQU1OLFNBekhDLEVBeERMLEFBd0NPLEFBV00sQUErSHRCLENBaEpjLEVBc0NHLEFBUW5CLEFBV0EsQUFZQSxBQUtBLEFBUUEsQUFNQSxBQU1BLEFBSWtCLENBeEhBLENBb0RELEFBdUdmLENBbkJGLEFBd0JFLENBNUJGLEVBL0lZLEVBNENHLENBWUMsRUFoQmQsQ0FORixHQWJBLEFBR0EsQUFHQSxBQUdBLENBN0JXLEFBbUlVLENBcEVELEFBUUYsSUEzQkcsRUFZYyxFQXZEYixLQVVULEdBNkRNLEVBUnlCLEFBb0U1QixLQXZGaEIsQ0FqQ21CLEtBS25CLEdBb0hlLENBNURmLEVBdkVxQyxJQXVEYixFQTVDYSxJQXlIWSxZQXJFTixFQWYzQyxFQVFBLGNBdkRtRSxDQVduRSxhQXlIbUIsT0FyRW5CLFVBc0VrQixnQkFDRSxrQkFDcEIsR0F0SXFCLDBCQUNyQiIsImZpbGUiOiIvVXNlcnMvYXJub2xkL0RvY3VtZW50cy9naXQvZ2l0aHViL21hdHRkYW1vbjEwOC5ibG9nL3BhZ2VzL19hcHAudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCwgeyBDb250YWluZXIsIE5leHRBcHBDb250ZXh0IH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCByb3V0ZXIsIGN0eCB9OiBOZXh0QXBwQ29udGV4dCkge1xuICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcblxuICAgIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgfVxuICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xuICB9XG5cbiAgc3RhdGUgPSB7fTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5CdWlsZCB0aGUgQ29kZXM8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBodG1sLFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcblx0XHRcdFx0XHRcdFx0LS1iYWNrZ3JvdW5kLWNvbG9yOiAjMjIyZjNlO1xuXHRcdFx0XHRcdFx0XHQtLXRleHQtc2VyaWY6IE1lcnJpd2VhdGhlciwgQ291cmllciwgc2VyaWY7XG5cdFx0XHRcdFx0XHRcdC0tdGV4dC1zYW4tc2VyaWY6IFVidW50dSwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRcdFx0XHQtLXRleHQtbGluay1jb2xvcjogI2VkNGM2NztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwMCU7XG4gICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYTpsaW5rIHtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGluay1jb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhOnZpc2l0ZWQge1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saW5rLWNvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saW5rLWNvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGE6YWN0aXZlIHtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGluay1jb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9zdC1jb250ZW50IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJsb2NrcXVvdGUge1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMWVtO1xuICAgICAgICAgICAgICBjb2xvcjogIzZhNzM3ZDtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDAuMjVlbSBzb2xpZCAjZGZlMmU1O1xuICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb2RlIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDNweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjksIDEwMCwgMC4yKTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1lcnJpd2VhdGhlciwgQ291cmllciwgc2VyaWY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByZSBjb2RlIHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgIHdvcmQtd3JhcDogbm9ybWFsO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhsanMtY29tbWVudCxcbiAgICAgICAgICAgIC5obGpzLXF1b3RlIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNkNGQwYWI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5obGpzLXZhcmlhYmxlLFxuICAgICAgICAgICAgLmhsanMtdGVtcGxhdGUtdmFyaWFibGUsXG4gICAgICAgICAgICAuaGxqcy10YWcsXG4gICAgICAgICAgICAuaGxqcy1uYW1lLFxuICAgICAgICAgICAgLmhsanMtc2VsZWN0b3ItaWQsXG4gICAgICAgICAgICAuaGxqcy1zZWxlY3Rvci1jbGFzcyxcbiAgICAgICAgICAgIC5obGpzLXJlZ2V4cCxcbiAgICAgICAgICAgIC5obGpzLWRlbGV0aW9uIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmEwN2E7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIE9yYW5nZSAqL1xuICAgICAgICAgICAgLmhsanMtbnVtYmVyLFxuICAgICAgICAgICAgLmhsanMtYnVpbHRfaW4sXG4gICAgICAgICAgICAuaGxqcy1idWlsdGluLW5hbWUsXG4gICAgICAgICAgICAuaGxqcy1saXRlcmFsLFxuICAgICAgICAgICAgLmhsanMtdHlwZSxcbiAgICAgICAgICAgIC5obGpzLXBhcmFtcyxcbiAgICAgICAgICAgIC5obGpzLW1ldGEsXG4gICAgICAgICAgICAuaGxqcy1saW5rIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmNWFiMzU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIFllbGxvdyAqL1xuICAgICAgICAgICAgLmhsanMtYXR0cmlidXRlIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmQ3MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIEdyZWVuICovXG4gICAgICAgICAgICAuaGxqcy1zdHJpbmcsXG4gICAgICAgICAgICAuaGxqcy1zeW1ib2wsXG4gICAgICAgICAgICAuaGxqcy1idWxsZXQsXG4gICAgICAgICAgICAuaGxqcy1hZGRpdGlvbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjYWJlMzM4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBCbHVlICovXG4gICAgICAgICAgICAuaGxqcy10aXRsZSxcbiAgICAgICAgICAgIC5obGpzLXNlY3Rpb24ge1xuICAgICAgICAgICAgICBjb2xvcjogIzAwZTBlMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogUHVycGxlICovXG4gICAgICAgICAgICAuaGxqcy1rZXl3b3JkLFxuICAgICAgICAgICAgLmhsanMtc2VsZWN0b3ItdGFnIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNkY2M2ZTA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5obGpzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyYjJiMmI7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZjhmOGYyO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogQ29uc29sYXMsIE1lbmxvLCBNb25hY28sIG1vbm9zcGFjZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhsanMtZW1waGFzaXMge1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5obGpzLXN0cm9uZyB7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAgICAgICAgICAgICAuaGxqcy1hZGRpdGlvbixcbiAgICAgICAgICAgICAgLmhsanMtYXR0cmlidXRlLFxuICAgICAgICAgICAgICAuaGxqcy1idWlsdF9pbixcbiAgICAgICAgICAgICAgLmhsanMtYnVpbHRpbi1uYW1lLFxuICAgICAgICAgICAgICAuaGxqcy1idWxsZXQsXG4gICAgICAgICAgICAgIC5obGpzLWNvbW1lbnQsXG4gICAgICAgICAgICAgIC5obGpzLWxpbmssXG4gICAgICAgICAgICAgIC5obGpzLWxpdGVyYWwsXG4gICAgICAgICAgICAgIC5obGpzLW1ldGEsXG4gICAgICAgICAgICAgIC5obGpzLW51bWJlcixcbiAgICAgICAgICAgICAgLmhsanMtcGFyYW1zLFxuICAgICAgICAgICAgICAuaGxqcy1zdHJpbmcsXG4gICAgICAgICAgICAgIC5obGpzLXN5bWJvbCxcbiAgICAgICAgICAgICAgLmhsanMtdHlwZSxcbiAgICAgICAgICAgICAgLmhsanMtcXVvdGUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBoaWdobGlnaHQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaGxqcy1rZXl3b3JkLFxuICAgICAgICAgICAgICAuaGxqcy1zZWxlY3Rvci10YWcge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgICBwcmUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXX0= */\n/*@ sourceURL=/Users/arnold/Documents/git/github/mattdamon108.blog/pages/_app.tsx */"));
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
//# sourceMappingURL=_app.js.44f2aafc52df19b71d22.hot-update.js.map