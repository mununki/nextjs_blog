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
        className: "jsx-2349303119"
      }, "Moondaddi's Blog")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        id: "layout",
        className: "jsx-2349303119"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_13__["default"], {
        _setShowing: this._setShowing
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Category__WEBPACK_IMPORTED_MODULE_14__["default"], {
        isShowing: isShowing,
        _setShowing: this._setShowing,
        router: router
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
        className: "jsx-2349303119" + " " + (pageProps.className != null && pageProps.className || "")
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_15__["default"], null)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "2349303119"
      }, "html,body{margin:0;padding:0;border:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\", Helvetica,Arial,sans-serif,\"Apple Color Emoji\", \"Segoe UI Emoji\",\"Segoe UI Symbol\";font-size:1rem;font-weight:300;line-height:160%;}#layout{display:grid;grid-template-columns:300px 1fr;grid-template-areas:\"header header\" \"category content\" \"footer footer\";}#footer{grid-area:footer;background-color:#eee;}#content{grid-area:content;display:grid;grid-template-columns:minmax(auto,100px) 1fr minmax(auto,100px);grid-template-areas:\"left-span container right-span\";padding:50px 0px;background:radial-gradient(black 15%,transparent 16%) 0 0, radial-gradient(black 15%,transparent 16%) 8px 8px, radial-gradient(rgba(255,255,255,0.1) 15%,transparent 20%) 0 1px, radial-gradient(rgba(255,255,255,0.1) 15%,transparent 20%) 8px 9px;background-color:#282828;background-size:16px 16px;}@media (max-width:576px){#layout{display:grid;grid-template-columns:1fr;grid-template-areas:\"header\" \"content\" \"footer\";}#content{grid-area:content;display:grid;grid-template-columns:1fr;grid-template-areas:\"container\";padding:50px 0px;}img{width:100%;}}.container{grid-area:container;padding:20px 10px 20px 10px;min-width:0;}.add-padding-for-fixed-header{padding:90px 10px 20px 10px;}.post-card{background-color:#fff;border:1px solid #eee;padding:20px;margin-bottom:50px;border-radius:5px;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);}img{width:100%;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;}blockquote{margin:0;padding:0 1em;color:#6a737d;border-left:0.25em solid #dfe2e5;word-break:break-word;}code{color:#c0392b;padding:2px 3px;border:1px solid #ccc;border-radius:3px;}pre code{overflow:auto;word-wrap:normal;white-space:pre;}.hljs-comment,.hljs-quote{color:#d4d0ab;}.hljs-variable,.hljs-template-variable,.hljs-tag,.hljs-name,.hljs-selector-id,.hljs-selector-class,.hljs-regexp,.hljs-deletion{color:#ffa07a;}.hljs-number,.hljs-built_in,.hljs-builtin-name,.hljs-literal,.hljs-type,.hljs-params,.hljs-meta,.hljs-link{color:#f5ab35;}.hljs-attribute{color:#ffd700;}.hljs-string,.hljs-symbol,.hljs-bullet,.hljs-addition{color:#abe338;}.hljs-title,.hljs-section{color:#00e0e0;}.hljs-keyword,.hljs-selector-tag{color:#dcc6e0;}.hljs{display:block;overflow-x:auto;background:#2b2b2b;color:#f8f8f2;padding:1rem;font-size:1rem;border-radius:5px;}.hljs-emphasis{font-style:italic;}.hljs-strong{font-weight:bold;}@media screen and (-ms-high-contrast:active){.hljs-addition,.hljs-attribute,.hljs-built_in,.hljs-builtin-name,.hljs-bullet,.hljs-comment,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-string,.hljs-symbol,.hljs-type,.hljs-quote{color:highlight;}.hljs-keyword,.hljs-selector-tag{font-weight:bold;}}@media (max-width:576px){pre{width:calc(100vw - 60px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm5vbGQvRG9jdW1lbnRzL2dpdC9naXRodWIvbWF0dGRhbW9uMTA4LmJsb2cvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRVcsQUFJd0IsQUFXSSxBQUtJLEFBSUMsQUFnQkgsQUFLSyxBQU9QLEFBSU8sQUFNUSxBQU1OLEFBVVgsQUFLRixBQVFLLEFBT0EsQUFRQSxBQVdBLEFBWUEsQUFLQSxBQVFBLEFBTUEsQUFNQSxBQUlBLEFBVUksQUFJRCxBQW1CQyxBQUtDLEFBTVEsU0FyTWpCLEFBK0VJLEVBL0JkLEFBMEJzQixFQS9EVSxBQXlCSixDQW1EWixBQU9DLEFBUW5CLEFBV0EsQUFZQSxBQUtBLEFBUUEsQUFNQSxBQU1BLEFBSWtCLEVBaUNoQixDQTNLc0IsQUF3SnhCLEFBd0JFLENBNUthLEFBcUJFLEFBMkhqQixDQW5LVyxDQW1EbUIsRUFZTixDQWdCUixFQXNIZCxHQWxNcUMsQUFzRHZDLEVBOEJ3QixBQW1FSCxDQXRJK0MsQUFxQnRDLEFBcURaLE1BZGlCLEVBaEVuQyxBQW9Cb0QsS0E0QnJDLENBckQwRCxFQXFGekUsQ0E1Q2MsQ0F1R0UsR0FuRUksS0E5Q2dCLEFBdUJmLEdBWnJCLEdBdUdlLE9BM0VTLEFBUXhCLE1BdkJvQixBQTJGSCxXQXhIZixFQU1tQixDQStCckIsQ0FvRm9CLENBNUVwQixFQWRvQyxDQS9DbUIsV0F1QnJELEdBbUhGLE9BbkpBLGdDQVVtQixnQkErQ25CLENBekNhLEdBeEJJLGVBQ0MsZ0JBQ0MsaUJBQ25CLGlNQXNCMkIseUJBQ0MsMEJBQzVCIiwiZmlsZSI6Ii9Vc2Vycy9hcm5vbGQvRG9jdW1lbnRzL2dpdC9naXRodWIvbWF0dGRhbW9uMTA4LmJsb2cvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAsIHsgQ29udGFpbmVyIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuLi9jb21wb25lbnRzL0NhdGVnb3J5XCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIHJvdXRlciwgY3R4IH0pIHtcbiAgICBsZXQgcGFnZVByb3BzID0ge307XG5cbiAgICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIH1cbiAgICByZXR1cm4geyBwYWdlUHJvcHMgfTtcbiAgfVxuICBzdGF0ZSA9IHtcbiAgICBpc1Nob3dpbmc6IG51bGxcbiAgfTtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJcIik7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgY29uc3QgY29udGFpbmVyQ2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lci1jYXRlZ29yeVwiKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gaGVhZGVyLm9mZnNldFRvcCArIDI1MCkge1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcIm1ha2UtZml4ZWRcIik7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWRkLXBhZGRpbmctZm9yLWZpeGVkLWhlYWRlclwiKTtcbiAgICAgICAgY29udGFpbmVyQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcIm1ha2UtZml4ZWQtY2F0ZWdvcnlcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcIm1ha2UtZml4ZWRcIik7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiYWRkLXBhZGRpbmctZm9yLWZpeGVkLWhlYWRlclwiKTtcbiAgICAgICAgY29udGFpbmVyQ2F0ZWdvcnkuY2xhc3NMaXN0LnJlbW92ZShcIm1ha2UtZml4ZWQtY2F0ZWdvcnlcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIik7XG4gIH1cbiAgX3NldFNob3dpbmcgPSBuYW1lID0+IHtcbiAgICBpZiAobmFtZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzU2hvd2luZzogbmFtZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmlzU2hvd2luZykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpc1Nob3dpbmc6IG51bGxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpc1Nob3dpbmc6IFwiY2F0ZWdvcnlcIlxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpc1Nob3dpbmcgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPk1vb25kYWRkaSdzIEJsb2c8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgaWQ9XCJsYXlvdXRcIj5cbiAgICAgICAgICA8SGVhZGVyIF9zZXRTaG93aW5nPXt0aGlzLl9zZXRTaG93aW5nfSAvPlxuICAgICAgICAgIDxDYXRlZ29yeVxuICAgICAgICAgICAgaXNTaG93aW5nPXtpc1Nob3dpbmd9XG4gICAgICAgICAgICBfc2V0U2hvd2luZz17dGhpcy5fc2V0U2hvd2luZ31cbiAgICAgICAgICAgIHJvdXRlcj17cm91dGVyfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBodG1sLFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsXG4gICAgICAgICAgICAgICAgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLFxuICAgICAgICAgICAgICAgIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTYwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNsYXlvdXQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoZWFkZXIgaGVhZGVyXCIgXCJjYXRlZ29yeSBjb250ZW50XCIgXCJmb290ZXIgZm9vdGVyXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjZm9vdGVyIHtcbiAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBmb290ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjY29udGVudCB7XG4gICAgICAgICAgICAgIGdyaWQtYXJlYTogY29udGVudDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoYXV0bywgMTAwcHgpIDFmciBtaW5tYXgoYXV0bywgMTAwcHgpO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImxlZnQtc3BhbiBjb250YWluZXIgcmlnaHQtc3BhblwiO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGJsYWNrIDE1JSwgdHJhbnNwYXJlbnQgMTYlKSAwIDAsXG4gICAgICAgICAgICAgICAgcmFkaWFsLWdyYWRpZW50KGJsYWNrIDE1JSwgdHJhbnNwYXJlbnQgMTYlKSA4cHggOHB4LFxuICAgICAgICAgICAgICAgIHJhZGlhbC1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMTUlLCB0cmFuc3BhcmVudCAyMCUpIDBcbiAgICAgICAgICAgICAgICAgIDFweCxcbiAgICAgICAgICAgICAgICByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDE1JSwgdHJhbnNwYXJlbnQgMjAlKVxuICAgICAgICAgICAgICAgICAgOHB4IDlweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgICAgI2xheW91dCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImhlYWRlclwiIFwiY29udGVudFwiIFwiZm9vdGVyXCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgI2NvbnRlbnQge1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogY29udGVudDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiY29udGFpbmVyXCI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNTBweCAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGdyaWQtYXJlYTogY29udGFpbmVyO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHggMjBweCAxMHB4O1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hZGQtcGFkZGluZy1mb3ItZml4ZWQtaGVhZGVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogOTBweCAxMHB4IDIwcHggMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcG9zdCBzdHlsZSBoZXJlIVxuICAgICAgICAgICAgLy8gYmVjYXVzZSA8TUQgLz4gbG9hZGVkIGVhcmxpZXIgdGhhbiA8c3R5bGUganN4IC8+IGluIGluZGV4UHJlc2VudGVyLmpzIGFuZCBwb3N0UHJlc2VudGVyLmpzXG4gICAgICAgICAgICAucG9zdC1jYXJkIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgICAgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBibG9ja3F1b3RlIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICAgICAgICAgICAgY29sb3I6ICM2YTczN2Q7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAwLjI1ZW0gc29saWQgI2RmZTJlNTtcbiAgICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29kZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjYzAzOTJiO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAycHggM3B4O1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByZSBjb2RlIHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgIHdvcmQtd3JhcDogbm9ybWFsO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgICAgICAgICAgICAvLyB3aWR0aDogY2FsYygxMDB2dyAtIDM2MHB4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhsanMtY29tbWVudCxcbiAgICAgICAgICAgIC5obGpzLXF1b3RlIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNkNGQwYWI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5obGpzLXZhcmlhYmxlLFxuICAgICAgICAgICAgLmhsanMtdGVtcGxhdGUtdmFyaWFibGUsXG4gICAgICAgICAgICAuaGxqcy10YWcsXG4gICAgICAgICAgICAuaGxqcy1uYW1lLFxuICAgICAgICAgICAgLmhsanMtc2VsZWN0b3ItaWQsXG4gICAgICAgICAgICAuaGxqcy1zZWxlY3Rvci1jbGFzcyxcbiAgICAgICAgICAgIC5obGpzLXJlZ2V4cCxcbiAgICAgICAgICAgIC5obGpzLWRlbGV0aW9uIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmEwN2E7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIE9yYW5nZSAqL1xuICAgICAgICAgICAgLmhsanMtbnVtYmVyLFxuICAgICAgICAgICAgLmhsanMtYnVpbHRfaW4sXG4gICAgICAgICAgICAuaGxqcy1idWlsdGluLW5hbWUsXG4gICAgICAgICAgICAuaGxqcy1saXRlcmFsLFxuICAgICAgICAgICAgLmhsanMtdHlwZSxcbiAgICAgICAgICAgIC5obGpzLXBhcmFtcyxcbiAgICAgICAgICAgIC5obGpzLW1ldGEsXG4gICAgICAgICAgICAuaGxqcy1saW5rIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmNWFiMzU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIFllbGxvdyAqL1xuICAgICAgICAgICAgLmhsanMtYXR0cmlidXRlIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmQ3MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIEdyZWVuICovXG4gICAgICAgICAgICAuaGxqcy1zdHJpbmcsXG4gICAgICAgICAgICAuaGxqcy1zeW1ib2wsXG4gICAgICAgICAgICAuaGxqcy1idWxsZXQsXG4gICAgICAgICAgICAuaGxqcy1hZGRpdGlvbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjYWJlMzM4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBCbHVlICovXG4gICAgICAgICAgICAuaGxqcy10aXRsZSxcbiAgICAgICAgICAgIC5obGpzLXNlY3Rpb24ge1xuICAgICAgICAgICAgICBjb2xvcjogIzAwZTBlMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogUHVycGxlICovXG4gICAgICAgICAgICAuaGxqcy1rZXl3b3JkLFxuICAgICAgICAgICAgLmhsanMtc2VsZWN0b3ItdGFnIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNkY2M2ZTA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5obGpzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyYjJiMmI7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZjhmOGYyO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhsanMtZW1waGFzaXMge1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5obGpzLXN0cm9uZyB7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAgICAgICAgICAgICAuaGxqcy1hZGRpdGlvbixcbiAgICAgICAgICAgICAgLmhsanMtYXR0cmlidXRlLFxuICAgICAgICAgICAgICAuaGxqcy1idWlsdF9pbixcbiAgICAgICAgICAgICAgLmhsanMtYnVpbHRpbi1uYW1lLFxuICAgICAgICAgICAgICAuaGxqcy1idWxsZXQsXG4gICAgICAgICAgICAgIC5obGpzLWNvbW1lbnQsXG4gICAgICAgICAgICAgIC5obGpzLWxpbmssXG4gICAgICAgICAgICAgIC5obGpzLWxpdGVyYWwsXG4gICAgICAgICAgICAgIC5obGpzLW1ldGEsXG4gICAgICAgICAgICAgIC5obGpzLW51bWJlcixcbiAgICAgICAgICAgICAgLmhsanMtcGFyYW1zLFxuICAgICAgICAgICAgICAuaGxqcy1zdHJpbmcsXG4gICAgICAgICAgICAgIC5obGpzLXN5bWJvbCxcbiAgICAgICAgICAgICAgLmhsanMtdHlwZSxcbiAgICAgICAgICAgICAgLmhsanMtcXVvdGUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBoaWdobGlnaHQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaGxqcy1rZXl3b3JkLFxuICAgICAgICAgICAgICAuaGxqcy1zZWxlY3Rvci10YWcge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgICBwcmUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNjBweCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdfQ== */\n/*@ sourceURL=/Users/arnold/Documents/git/github/mattdamon108.blog/pages/_app.js */"));
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
//# sourceMappingURL=_app.js.f96db46e5b16fb83f618.hot-update.js.map