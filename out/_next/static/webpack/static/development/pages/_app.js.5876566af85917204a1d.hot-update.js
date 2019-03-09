webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Category__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Category */ "./components/Category.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_16__);


















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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      isShowing: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "_setShowing", function (name) {
      if (name) {
        _this.setState({
          isShowing: name
        });
      } else {
        if (_this.state.isShowing) {
          _this.setState({
            isShowing: null
          });
        } else {
          _this.setState({
            isShowing: "category"
          });
        }
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var header = document.querySelector("#header");
      var container = document.querySelector(".container");
      var containerCategory = document.querySelector("#container-category");
      window.addEventListener("scroll", function () {
        if (window.pageYOffset > header.offsetTop + 250) {
          header.classList.add("make-fixed");
          container.classList.add("add-padding-for-fixed-header");
          containerCategory.classList.add("make-fixed-category");
        } else {
          header.classList.remove("make-fixed");
          container.classList.remove("add-padding-for-fixed-header");
          containerCategory.classList.remove("make-fixed-category");
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          router = _this$props.router;
      var isShowing = this.state.isShowing;
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_11__["Container"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_16___default.a, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("title", {
        className: "jsx-1819391530"
      }, "Moondaddi's Blog")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        id: "layout",
        className: "jsx-1819391530"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_13__["default"], {
        _setShowing: this._setShowing
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Category__WEBPACK_IMPORTED_MODULE_14__["default"], {
        isShowing: isShowing,
        _setShowing: this._setShowing,
        router: router
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
        className: "jsx-1819391530" + " " + (pageProps.className != null && pageProps.className || "")
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_15__["default"], null)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "1819391530"
      }, "html,body{margin:0;padding:0;border:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\", Helvetica,Arial,sans-serif,\"Apple Color Emoji\", \"Segoe UI Emoji\",\"Segoe UI Symbol\";font-size:1rem;font-weight:300;line-height:160%;}#layout{display:grid;grid-template-columns:300px 1fr;grid-template-areas:\"header header\" \"category content\" \"footer footer\";}#footer{grid-area:footer;background-color:#eee;}#content{grid-area:content;display:grid;grid-template-columns:minmax(auto,100px) 1fr minmax(auto,100px);grid-template-areas:\"left-span container right-span\";padding:50px 0px;background:radial-gradient(black 15%,transparent 16%) 0 0, radial-gradient(black 15%,transparent 16%) 8px 8px, radial-gradient(rgba(255,255,255,0.1) 15%,transparent 20%) 0 1px, radial-gradient(rgba(255,255,255,0.1) 15%,transparent 20%) 8px 9px;background-color:#282828;background-size:16px 16px;}@media (max-width:576px){#layout{display:grid;grid-template-columns:1fr;grid-template-areas:\"header\" \"content\" \"footer\";}#content{grid-area:content;display:grid;grid-template-columns:1fr;grid-template-areas:\"container\";padding:50px 0px;}img{width:100%;}}.container{grid-area:container;padding:20px 10px 20px 10px;min-width:0;}.add-padding-for-fixed-header{padding:90px 10px 20px 10px;}.index-h2-title{display:inline-block;border:5px solid #2c3e50;border-radius:35px;padding:10px 20px;background-color:#fff;}.pinned{border:5px solid #e74c3c;}#latest{color:#f39c12;}#pinned{color:#e74c3c;}.post-card{background-color:#fff;border:1px solid #eee;padding:20px;margin-bottom:50px;border-radius:5px;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);}img{width:100%;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;}blockquote{margin:0;padding:0 1em;color:#6a737d;border-left:0.25em solid #dfe2e5;word-break:break-word;}code{color:#c0392b;padding:2px 3px;border:1px solid #ccc;border-radius:3px;}pre code{overflow:auto;word-wrap:normal;white-space:pre;}.hljs-comment,.hljs-quote{color:#d4d0ab;}.hljs-variable,.hljs-template-variable,.hljs-tag,.hljs-name,.hljs-selector-id,.hljs-selector-class,.hljs-regexp,.hljs-deletion{color:#ffa07a;}.hljs-number,.hljs-built_in,.hljs-builtin-name,.hljs-literal,.hljs-type,.hljs-params,.hljs-meta,.hljs-link{color:#f5ab35;}.hljs-attribute{color:#ffd700;}.hljs-string,.hljs-symbol,.hljs-bullet,.hljs-addition{color:#abe338;}.hljs-title,.hljs-section{color:#00e0e0;}.hljs-keyword,.hljs-selector-tag{color:#dcc6e0;}.hljs{display:block;overflow-x:auto;background:#2b2b2b;color:#f8f8f2;padding:1rem;font-size:1rem;border-radius:5px;}.hljs-emphasis{font-style:italic;}.hljs-strong{font-weight:bold;}@media screen and (-ms-high-contrast:active){.hljs-addition,.hljs-attribute,.hljs-built_in,.hljs-builtin-name,.hljs-bullet,.hljs-comment,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-string,.hljs-symbol,.hljs-type,.hljs-quote{color:highlight;}.hljs-keyword,.hljs-selector-tag{font-weight:bold;}}@media (max-width:576px){pre{width:calc(100vw - 60px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm5vbGQvRG9jdW1lbnRzL2dpdC9naXRodWIvbWF0dGRhbW9uMTA4LmJsb2cvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRVcsQUFJd0IsQUFXSSxBQUtJLEFBSUMsQUFnQkgsQUFLSyxBQU9QLEFBSU8sQUFNUSxBQU9QLEFBT0ksQUFHWCxBQUdBLEFBR1EsQUFVWCxBQUtGLEFBUUssQUFPQSxBQVFBLEFBV0EsQUFZQSxBQUtBLEFBUUEsQUFNQSxBQU1BLEFBSUEsQUFVSSxBQUlELEFBbUJDLEFBS0MsQUFNUSxTQXROakIsQUFnR0ksRUFoRGQsQUEyQ3NCLEVBaEZVLEFBeUJKLENBdUM5QixBQUdBLEFBMEJrQixBQU9DLEFBUW5CLEFBV0EsQUFZQSxBQUtBLEFBUUEsQUFNQSxBQU1BLEFBSWtCLEVBaUNoQixDQTVMc0IsQUF5S3hCLEFBd0JFLENBN0xhLEFBcUJFLEFBNElqQixDQXBMVyxDQW1EbUIsQ0FhSCxDQWdCSCxDQWdCUixFQXpCaEIsQUErSUUsR0FuTnFDLEFBc0R2QyxFQStDd0IsQUFtRUgsQ0F2SitDLEFBcUJ0QyxBQXNFWixNQWRpQixFQWpGbkMsQUFvQm9ELEtBNkNyQyxDQXRFMEQsQ0FzRHBELENBZ0RyQixDQTdEYyxDQXdIRSxHQW5FSSxLQS9EZ0IsQUF3Q2YsR0E3QnJCLEdBd0hlLEVBM0dLLEtBZ0NJLEFBUXhCLE1BdkJvQixBQTJGSCxPQTNHTyxJQTlCdEIsRUFNbUIsQ0FnRHJCLENBb0ZvQixDQTVFcEIsRUFkb0MsQ0FoRW1CLFVBK0N2RCxDQXhCRSxHQW9JRixPQXBLQSxnQ0FVbUIsZ0JBZ0VuQixDQTFEYSxHQXhCSSxlQUNDLGdCQUNDLGlCQUNuQixpTUFzQjJCLHlCQUNDLDBCQUM1QiIsImZpbGUiOiIvVXNlcnMvYXJub2xkL0RvY3VtZW50cy9naXQvZ2l0aHViL21hdHRkYW1vbjEwOC5ibG9nL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXRlZ29yeVwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCByb3V0ZXIsIGN0eCB9KSB7XG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xuXG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICB9XG4gICAgcmV0dXJuIHsgcGFnZVByb3BzIH07XG4gIH1cbiAgc3RhdGUgPSB7XG4gICAgaXNTaG93aW5nOiBudWxsXG4gIH07XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGNvbnRhaW5lckNhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXItY2F0ZWdvcnlcIik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IGhlYWRlci5vZmZzZXRUb3AgKyAyNTApIHtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtYWtlLWZpeGVkXCIpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFkZC1wYWRkaW5nLWZvci1maXhlZC1oZWFkZXJcIik7XG4gICAgICAgIGNvbnRhaW5lckNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJtYWtlLWZpeGVkLWNhdGVnb3J5XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJtYWtlLWZpeGVkXCIpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImFkZC1wYWRkaW5nLWZvci1maXhlZC1oZWFkZXJcIik7XG4gICAgICAgIGNvbnRhaW5lckNhdGVnb3J5LmNsYXNzTGlzdC5yZW1vdmUoXCJtYWtlLWZpeGVkLWNhdGVnb3J5XCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIpO1xuICB9XG4gIF9zZXRTaG93aW5nID0gbmFtZSA9PiB7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc1Nob3dpbmc6IG5hbWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5pc1Nob3dpbmcpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXNTaG93aW5nOiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXNTaG93aW5nOiBcImNhdGVnb3J5XCJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaXNTaG93aW5nIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5Nb29uZGFkZGkncyBCbG9nPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2IGlkPVwibGF5b3V0XCI+XG4gICAgICAgICAgPEhlYWRlciBfc2V0U2hvd2luZz17dGhpcy5fc2V0U2hvd2luZ30gLz5cbiAgICAgICAgICA8Q2F0ZWdvcnlcbiAgICAgICAgICAgIGlzU2hvd2luZz17aXNTaG93aW5nfVxuICAgICAgICAgICAgX3NldFNob3dpbmc9e3RoaXMuX3NldFNob3dpbmd9XG4gICAgICAgICAgICByb3V0ZXI9e3JvdXRlcn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgaHRtbCxcbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLFxuICAgICAgICAgICAgICAgIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIixcbiAgICAgICAgICAgICAgICBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjbGF5b3V0IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaGVhZGVyIGhlYWRlclwiIFwiY2F0ZWdvcnkgY29udGVudFwiIFwiZm9vdGVyIGZvb3RlclwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI2Zvb3RlciB7XG4gICAgICAgICAgICAgIGdyaWQtYXJlYTogZm9vdGVyO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI2NvbnRlbnQge1xuICAgICAgICAgICAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KGF1dG8sIDEwMHB4KSAxZnIgbWlubWF4KGF1dG8sIDEwMHB4KTtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJsZWZ0LXNwYW4gY29udGFpbmVyIHJpZ2h0LXNwYW5cIjtcbiAgICAgICAgICAgICAgcGFkZGluZzogNTBweCAwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChibGFjayAxNSUsIHRyYW5zcGFyZW50IDE2JSkgMCAwLFxuICAgICAgICAgICAgICAgIHJhZGlhbC1ncmFkaWVudChibGFjayAxNSUsIHRyYW5zcGFyZW50IDE2JSkgOHB4IDhweCxcbiAgICAgICAgICAgICAgICByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDE1JSwgdHJhbnNwYXJlbnQgMjAlKSAwXG4gICAgICAgICAgICAgICAgICAxcHgsXG4gICAgICAgICAgICAgICAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAxNSUsIHRyYW5zcGFyZW50IDIwJSlcbiAgICAgICAgICAgICAgICAgIDhweCA5cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgICAgICNsYXlvdXQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoZWFkZXJcIiBcImNvbnRlbnRcIiBcImZvb3RlclwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICNjb250ZW50IHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImNvbnRhaW5lclwiO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBncmlkLWFyZWE6IGNvbnRhaW5lcjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAxMHB4IDIwcHggMTBweDtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWRkLXBhZGRpbmctZm9yLWZpeGVkLWhlYWRlciB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDkwcHggMTBweCAyMHB4IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHBvc3Qgc3R5bGUgaGVyZSFcbiAgICAgICAgICAgIC8vIGJlY2F1c2UgPE1EIC8+IGxvYWRlZCBlYXJsaWVyIHRoYW4gPHN0eWxlIGpzeCAvPiBpbiBpbmRleFByZXNlbnRlci5qcyBhbmQgcG9zdFByZXNlbnRlci5qc1xuICAgICAgICAgICAgLy8gU28sIGltcGxlbWVudCB0aGUgc3l0bGUgYXMgZ2xvYmFsIGhlcmUhXG4gICAgICAgICAgICAuaW5kZXgtaDItdGl0bGUge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICMyYzNlNTA7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5waW5uZWQge1xuICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjZTc0YzNjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI2xhdGVzdCB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZjM5YzEyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI3Bpbm5lZCB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZTc0YzNjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvc3QtY2FyZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAgIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYmxvY2txdW90ZSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxZW07XG4gICAgICAgICAgICAgIGNvbG9yOiAjNmE3MzdkO1xuICAgICAgICAgICAgICBib3JkZXItbGVmdDogMC4yNWVtIHNvbGlkICNkZmUyZTU7XG4gICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvZGUge1xuICAgICAgICAgICAgICBjb2xvcjogI2MwMzkyYjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDNweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmUgY29kZSB7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICAgICAgICAgICAgLy8gd2lkdGg6IGNhbGMoMTAwdncgLSAzNjBweCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5obGpzLWNvbW1lbnQsXG4gICAgICAgICAgICAuaGxqcy1xdW90ZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZDRkMGFiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGxqcy12YXJpYWJsZSxcbiAgICAgICAgICAgIC5obGpzLXRlbXBsYXRlLXZhcmlhYmxlLFxuICAgICAgICAgICAgLmhsanMtdGFnLFxuICAgICAgICAgICAgLmhsanMtbmFtZSxcbiAgICAgICAgICAgIC5obGpzLXNlbGVjdG9yLWlkLFxuICAgICAgICAgICAgLmhsanMtc2VsZWN0b3ItY2xhc3MsXG4gICAgICAgICAgICAuaGxqcy1yZWdleHAsXG4gICAgICAgICAgICAuaGxqcy1kZWxldGlvbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZhMDdhO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBPcmFuZ2UgKi9cbiAgICAgICAgICAgIC5obGpzLW51bWJlcixcbiAgICAgICAgICAgIC5obGpzLWJ1aWx0X2luLFxuICAgICAgICAgICAgLmhsanMtYnVpbHRpbi1uYW1lLFxuICAgICAgICAgICAgLmhsanMtbGl0ZXJhbCxcbiAgICAgICAgICAgIC5obGpzLXR5cGUsXG4gICAgICAgICAgICAuaGxqcy1wYXJhbXMsXG4gICAgICAgICAgICAuaGxqcy1tZXRhLFxuICAgICAgICAgICAgLmhsanMtbGluayB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZjVhYjM1O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBZZWxsb3cgKi9cbiAgICAgICAgICAgIC5obGpzLWF0dHJpYnV0ZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZkNzAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBHcmVlbiAqL1xuICAgICAgICAgICAgLmhsanMtc3RyaW5nLFxuICAgICAgICAgICAgLmhsanMtc3ltYm9sLFxuICAgICAgICAgICAgLmhsanMtYnVsbGV0LFxuICAgICAgICAgICAgLmhsanMtYWRkaXRpb24ge1xuICAgICAgICAgICAgICBjb2xvcjogI2FiZTMzODtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogQmx1ZSAqL1xuICAgICAgICAgICAgLmhsanMtdGl0bGUsXG4gICAgICAgICAgICAuaGxqcy1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMGUwZTA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIFB1cnBsZSAqL1xuICAgICAgICAgICAgLmhsanMta2V5d29yZCxcbiAgICAgICAgICAgIC5obGpzLXNlbGVjdG9yLXRhZyB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZGNjNmUwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGxqcyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmIyYjJiO1xuICAgICAgICAgICAgICBjb2xvcjogI2Y4ZjhmMjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5obGpzLWVtcGhhc2lzIHtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGxqcy1zdHJvbmcge1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgICAgICAgICAgICAgLmhsanMtYWRkaXRpb24sXG4gICAgICAgICAgICAgIC5obGpzLWF0dHJpYnV0ZSxcbiAgICAgICAgICAgICAgLmhsanMtYnVpbHRfaW4sXG4gICAgICAgICAgICAgIC5obGpzLWJ1aWx0aW4tbmFtZSxcbiAgICAgICAgICAgICAgLmhsanMtYnVsbGV0LFxuICAgICAgICAgICAgICAuaGxqcy1jb21tZW50LFxuICAgICAgICAgICAgICAuaGxqcy1saW5rLFxuICAgICAgICAgICAgICAuaGxqcy1saXRlcmFsLFxuICAgICAgICAgICAgICAuaGxqcy1tZXRhLFxuICAgICAgICAgICAgICAuaGxqcy1udW1iZXIsXG4gICAgICAgICAgICAgIC5obGpzLXBhcmFtcyxcbiAgICAgICAgICAgICAgLmhsanMtc3RyaW5nLFxuICAgICAgICAgICAgICAuaGxqcy1zeW1ib2wsXG4gICAgICAgICAgICAgIC5obGpzLXR5cGUsXG4gICAgICAgICAgICAgIC5obGpzLXF1b3RlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogaGlnaGxpZ2h0O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmhsanMta2V5d29yZCxcbiAgICAgICAgICAgICAgLmhsanMtc2VsZWN0b3ItdGFnIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgICAgcHJlIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDYwcHgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXX0= */\n/*@ sourceURL=/Users/arnold/Documents/git/github/mattdamon108.blog/pages/_app.js */"));
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
//# sourceMappingURL=_app.js.5876566af85917204a1d.hot-update.js.map