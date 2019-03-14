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
        className: "jsx-614215340"
      }, "Build the Codes")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_15__["default"], null), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
        className: "jsx-614215340" + " " + (pageProps.className != null && pageProps.className || "")
      })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "614215340"
      }, "html,body{width:100%;margin:0;padding:0;border:0;--background-color:#222f3e;--text-serif:Merriweather,Courier,serif;--text-san-serif:Ubuntu,\"Helvetica Neue\",Helvetica,Arial,sans-serif;--text-link-color:#ed4c67;}body{font-size:1rem;font-family: font-weight:300;width:100%;line-height:200%;-webkit-font-smoothing:antialiased;}a{-webkit-text-decoration:underline;text-decoration:underline;}a:link{color:#ed4c67;}a:visited{color:#ed4c67;}a:hover{color:#ed4c67;}a:active{color:#ed4c67;}.container{width:800px;margin:0 auto;}@media (max-width:900px){.container{width:100%;margin:0 auto;}}.post-content{background-color:#fff;padding:1rem;margin-bottom:50px;}img{width:100%;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;}blockquote{margin:0;padding:0 1em;color:#6a737d;border-left:0.25em solid #dfe2e5;word-break:break-word;}code{padding:2px 3px;border-width:0;border-radius:3px;background-color:rgba(255,229,100,0.2);font-family:Merriweather,Courier,serif;}pre code{overflow:auto;word-wrap:normal;white-space:pre;line-height:150%;}.hljs-comment,.hljs-quote{color:#d4d0ab;}.hljs-variable,.hljs-template-variable,.hljs-tag,.hljs-name,.hljs-selector-id,.hljs-selector-class,.hljs-regexp,.hljs-deletion{color:#ffa07a;}.hljs-number,.hljs-built_in,.hljs-builtin-name,.hljs-literal,.hljs-type,.hljs-params,.hljs-meta,.hljs-link{color:#f5ab35;}.hljs-attribute{color:#ffd700;}.hljs-string,.hljs-symbol,.hljs-bullet,.hljs-addition{color:#abe338;}.hljs-title,.hljs-section{color:#00e0e0;}.hljs-keyword,.hljs-selector-tag{color:#dcc6e0;}.hljs{display:block;overflow-x:auto;background:#2b2b2b;color:#f8f8f2;padding:1rem;font-family:Consolas,Menlo,Monaco,monospace;font-size:0.8rem;font-weight:600;border-radius:5px;}.hljs-emphasis{font-style:italic;}.hljs-strong{font-weight:bold;}@media screen and (-ms-high-contrast:active){.hljs-addition,.hljs-attribute,.hljs-built_in,.hljs-builtin-name,.hljs-bullet,.hljs-comment,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-string,.hljs-symbol,.hljs-type,.hljs-quote{color:highlight;}.hljs-keyword,.hljs-selector-tag{font-weight:bold;}}@media (max-width:576px){pre{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm5vbGQvRG9jdW1lbnRzL2dpdC9naXRodWIvbWF0dGRhbW9uMTA4LmJsb2cvcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJXLEFBSTBCLEFBV0ksQUFRVyxBQUdaLEFBR0EsQUFHQSxBQUdBLEFBR0YsQUFNQyxBQUtTLEFBTVgsQUFLRixBQVFPLEFBUUYsQUFRQSxBQVdBLEFBWUEsQUFLQSxBQVFBLEFBTUEsQUFNQSxBQUlBLEFBWUksQUFJRCxBQW1CQyxBQUtDLEFBTU4sU0F6SEMsRUF4REwsQUF3Q08sQUFXTSxBQStIdEIsQ0FoSmMsRUFaaEIsQUFHQSxBQUdBLEFBR0EsQUF5Q21CLEFBUW5CLEFBV0EsQUFZQSxBQUtBLEFBUUEsQUFNQSxBQU1BLEFBSWtCLENBeEhBLENBb0RELEFBdUdmLENBbkJGLEFBd0JFLENBNUJGLEVBL0lZLEVBNENHLENBWUMsRUFoQmQsQ0FORixJQWpDVyxBQW1JVSxDQXBFRCxBQVFGLElBM0JHLEVBWWMsRUF2RGIsS0FVVCxHQTZETSxFQVJ5QixBQW9FNUIsS0F2RmhCLENBakNtQixLQUtuQixHQW9IZSxDQTVEZixFQXZFcUMsSUF1RGIsRUE1Q2EsSUF5SFksWUFyRU4sRUFmM0MsRUFRQSxjQXZEbUUsQ0FXbkUsYUF5SG1CLE9BckVuQixVQXNFa0IsZ0JBQ0Usa0JBQ3BCLEdBdElxQiwwQkFDckIiLCJmaWxlIjoiL1VzZXJzL2Fybm9sZC9Eb2N1bWVudHMvZ2l0L2dpdGh1Yi9tYXR0ZGFtb24xMDguYmxvZy9wYWdlcy9fYXBwLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAsIHsgQ29udGFpbmVyLCBOZXh0QXBwQ29udGV4dCB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5cbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgcm91dGVyLCBjdHggfTogTmV4dEFwcENvbnRleHQpIHtcbiAgICBsZXQgcGFnZVByb3BzID0ge307XG5cbiAgICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIH1cbiAgICByZXR1cm4geyBwYWdlUHJvcHMgfTtcbiAgfVxuXG4gIHN0YXRlID0ge307XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+QnVpbGQgdGhlIENvZGVzPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgaHRtbCxcbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICBib3JkZXI6IDA7XG5cdFx0XHRcdFx0XHRcdC0tYmFja2dyb3VuZC1jb2xvcjogIzIyMmYzZTtcblx0XHRcdFx0XHRcdFx0LS10ZXh0LXNlcmlmOiBNZXJyaXdlYXRoZXIsIENvdXJpZXIsIHNlcmlmO1xuXHRcdFx0XHRcdFx0XHQtLXRleHQtc2FuLXNlcmlmOiBVYnVudHUsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0XHRcdFx0XHRcdFx0LS10ZXh0LWxpbmstY29sb3I6ICNlZDRjNjc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMDAlO1xuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGE6bGluayB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZWQ0YzY3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNlZDRjNjc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNlZDRjNjc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhOmFjdGl2ZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZWQ0YzY3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvc3QtY29udGVudCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBibG9ja3F1b3RlIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICAgICAgICAgICAgY29sb3I6ICM2YTczN2Q7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAwLjI1ZW0gc29saWQgI2RmZTJlNTtcbiAgICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29kZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJweCAzcHg7XG4gICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjI5LCAxMDAsIDAuMik7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZXJyaXdlYXRoZXIsIENvdXJpZXIsIHNlcmlmO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmUgY29kZSB7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5obGpzLWNvbW1lbnQsXG4gICAgICAgICAgICAuaGxqcy1xdW90ZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZDRkMGFiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGxqcy12YXJpYWJsZSxcbiAgICAgICAgICAgIC5obGpzLXRlbXBsYXRlLXZhcmlhYmxlLFxuICAgICAgICAgICAgLmhsanMtdGFnLFxuICAgICAgICAgICAgLmhsanMtbmFtZSxcbiAgICAgICAgICAgIC5obGpzLXNlbGVjdG9yLWlkLFxuICAgICAgICAgICAgLmhsanMtc2VsZWN0b3ItY2xhc3MsXG4gICAgICAgICAgICAuaGxqcy1yZWdleHAsXG4gICAgICAgICAgICAuaGxqcy1kZWxldGlvbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZhMDdhO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBPcmFuZ2UgKi9cbiAgICAgICAgICAgIC5obGpzLW51bWJlcixcbiAgICAgICAgICAgIC5obGpzLWJ1aWx0X2luLFxuICAgICAgICAgICAgLmhsanMtYnVpbHRpbi1uYW1lLFxuICAgICAgICAgICAgLmhsanMtbGl0ZXJhbCxcbiAgICAgICAgICAgIC5obGpzLXR5cGUsXG4gICAgICAgICAgICAuaGxqcy1wYXJhbXMsXG4gICAgICAgICAgICAuaGxqcy1tZXRhLFxuICAgICAgICAgICAgLmhsanMtbGluayB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZjVhYjM1O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBZZWxsb3cgKi9cbiAgICAgICAgICAgIC5obGpzLWF0dHJpYnV0ZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZkNzAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBHcmVlbiAqL1xuICAgICAgICAgICAgLmhsanMtc3RyaW5nLFxuICAgICAgICAgICAgLmhsanMtc3ltYm9sLFxuICAgICAgICAgICAgLmhsanMtYnVsbGV0LFxuICAgICAgICAgICAgLmhsanMtYWRkaXRpb24ge1xuICAgICAgICAgICAgICBjb2xvcjogI2FiZTMzODtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogQmx1ZSAqL1xuICAgICAgICAgICAgLmhsanMtdGl0bGUsXG4gICAgICAgICAgICAuaGxqcy1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMGUwZTA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIFB1cnBsZSAqL1xuICAgICAgICAgICAgLmhsanMta2V5d29yZCxcbiAgICAgICAgICAgIC5obGpzLXNlbGVjdG9yLXRhZyB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZGNjNmUwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGxqcyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmIyYjJiO1xuICAgICAgICAgICAgICBjb2xvcjogI2Y4ZjhmMjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBNZW5sbywgTW9uYWNvLCBtb25vc3BhY2U7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5obGpzLWVtcGhhc2lzIHtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGxqcy1zdHJvbmcge1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgICAgICAgICAgICAgLmhsanMtYWRkaXRpb24sXG4gICAgICAgICAgICAgIC5obGpzLWF0dHJpYnV0ZSxcbiAgICAgICAgICAgICAgLmhsanMtYnVpbHRfaW4sXG4gICAgICAgICAgICAgIC5obGpzLWJ1aWx0aW4tbmFtZSxcbiAgICAgICAgICAgICAgLmhsanMtYnVsbGV0LFxuICAgICAgICAgICAgICAuaGxqcy1jb21tZW50LFxuICAgICAgICAgICAgICAuaGxqcy1saW5rLFxuICAgICAgICAgICAgICAuaGxqcy1saXRlcmFsLFxuICAgICAgICAgICAgICAuaGxqcy1tZXRhLFxuICAgICAgICAgICAgICAuaGxqcy1udW1iZXIsXG4gICAgICAgICAgICAgIC5obGpzLXBhcmFtcyxcbiAgICAgICAgICAgICAgLmhsanMtc3RyaW5nLFxuICAgICAgICAgICAgICAuaGxqcy1zeW1ib2wsXG4gICAgICAgICAgICAgIC5obGpzLXR5cGUsXG4gICAgICAgICAgICAgIC5obGpzLXF1b3RlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogaGlnaGxpZ2h0O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmhsanMta2V5d29yZCxcbiAgICAgICAgICAgICAgLmhsanMtc2VsZWN0b3ItdGFnIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgICAgcHJlIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl19 */\n/*@ sourceURL=/Users/arnold/Documents/git/github/mattdamon108.blog/pages/_app.tsx */"));
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
//# sourceMappingURL=_app.js.efd9a557bb9ffabb1cbe.hot-update.js.map