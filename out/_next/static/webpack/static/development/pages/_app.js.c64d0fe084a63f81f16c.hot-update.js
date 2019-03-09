webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);












var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _React$Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      keyword: "",
      searchInput: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_handleKeyword", function (event) {
      _this.setState({
        keyword: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_handlePress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/search?keyword=".concat(event.target.value));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_toggleSearchInput", function () {
      _this.setState({
        searchInput: !_this.state.searchInput
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "header",
        className: "jsx-79190987"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "header-top",
        className: "jsx-79190987"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "home",
        className: "jsx-79190987"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "home-title",
        className: "jsx-79190987"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "jsx-79190987"
      }, "Build my Dreams with Codes"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "home-title-sm",
        className: "jsx-79190987"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "jsx-79190987"
      }, "BDC")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "menu",
        className: "jsx-79190987"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        id: "menu-about",
        className: "jsx-79190987"
      }, "About")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        id: "search-button-sm",
        onClick: this._toggleSearchInput,
        className: "jsx-79190987" + " " + "fa fa-search"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "search-container-id",
        className: "jsx-79190987" + " " + "search-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-79190987" + " " + "icon"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-79190987" + " " + "fa fa-search"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        id: "search",
        type: "text",
        value: this.state.keyword,
        onChange: this._handleKeyword,
        onKeyPress: this._handlePress,
        className: "jsx-79190987"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "menu-button",
        onClick: function onClick() {
          return _this2.props._setShowing();
        },
        className: "jsx-79190987"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-79190987" + " " + "fas fa-bars"
      })))), this.state.searchInput ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "header-bottom",
        className: "jsx-79190987"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-79190987" + " " + "search-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-79190987" + " " + "icon"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-79190987" + " " + "fa fa-search"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        id: "search",
        type: "text",
        value: this.state.keyword,
        onChange: this._handleKeyword,
        onKeyPress: this._handlePress,
        className: "jsx-79190987"
      }))) : null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "79190987"
      }, "#menu-button.jsx-79190987{display:none;}#header.jsx-79190987 #home-title.jsx-79190987{display:inline-block;}#header.jsx-79190987 #home-title-sm.jsx-79190987{display:none;}#header.jsx-79190987{grid-area:header;background-color:#343d46;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);z-index:20;}#header-top.jsx-79190987{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:72px;}.make-fixed.jsx-79190987{position:fixed;top:0;left:0;width:100vw;}#header.jsx-79190987 #home-title.jsx-79190987 a.jsx-79190987{font-size:1.2rem;font-weight:bold;-webkit-text-decoration:none;text-decoration:none;color:#eee;margin:0 10px;padding:15px;}#header.jsx-79190987 #home-title.jsx-79190987:hover a.jsx-79190987{cursor:pointer;color:#fff;}#header.jsx-79190987 #home-title-sm.jsx-79190987 a.jsx-79190987{font-size:1.2rem;font-weight:bold;-webkit-text-decoration:none;text-decoration:none;color:#eee;margin:0 10px;padding:15px;}#header.jsx-79190987 #home-title-sm.jsx-79190987:hover a.jsx-79190987{cursor:pointer;color:#fff;}#header.jsx-79190987 a#menu-about.jsx-79190987{display:inline-block;-webkit-text-decoration:none;text-decoration:none;color:#eee;padding:15px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;}#header.jsx-79190987 a#menu-about.jsx-79190987:hover{background-color:white;-webkit-transition:0.2s;transition:0.2s;cursor:pointer;color:#000;border-bottom:4px solid #aaa;padding:15px 15px 11px 15px;}#search-button-sm.jsx-79190987{color:#4f5b66;margin:0px 10px;padding:20px 15px 19px 15px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;}#search-button-sm.jsx-79190987:hover{background-color:white;-webkit-transition:0.2s;transition:0.2s;cursor:pointer;color:#000;border-bottom:4px solid #aaa;padding:20px 15px 15px 15px;}#header.jsx-79190987 a#home-title.jsx-79190987:hover{background-color:unset;color:#fff;-webkit-transition:0.2s;transition:0.2s;}.search-container.jsx-79190987{display:inline-block;vertical-align:middle;white-space:nowrap;position:relative;padding:10px;}.search-container.jsx-79190987 input#search.jsx-79190987{width:20px;height:50px;background:#2b303b;border:none;font-size:1rem;float:left;color:#262626;padding-left:35px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;color:#2b303b;-webkit-transition:width 0.55s ease;-moz-transition:width 0.55s ease;-ms-transition:width 0.55s ease;-o-transition:width 0.55s ease;-webkit-transition:width 0.55s ease;transition:width 0.55s ease;}.search-container.jsx-79190987 input#search.jsx-79190987::-webkit-input-placeholder{color:#65737e;}.search-container.jsx-79190987 input#search.jsx-79190987:-moz-placeholder{color:#65737e;}.search-container.jsx-79190987 input#search.jsx-79190987::-moz-placeholder{color:#65737e;}.search-container.jsx-79190987 input#search.jsx-79190987:-ms-input-placeholder{color:#65737e;}.search-container.jsx-79190987 .icon.jsx-79190987{position:absolute;margin-left:20px;margin-top:15px;z-index:1;color:#4f5b66;}.search-container.jsx-79190987:hover .icon.jsx-79190987,.search-container.jsx-79190987 input#search.jsx-79190987:focus .icon.jsx-79190987,.search-container.jsx-79190987 input#search.jsx-79190987:active .icon.jsx-79190987{margin-top:17px;color:#93a2ad;-webkit-transform:scale(1.5);-moz-transform:scale(1.5);-ms-transform:scale(1.5);-o-transform:scale(1.5);-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);}.search-container.jsx-79190987 input#search.jsx-79190987:focus,.search-container.jsx-79190987 input#search.jsx-79190987:active{outline:none;width:150px;padding-left:50px;color:white;}.search-container.jsx-79190987:hover input#search.jsx-79190987{width:150px;padding-left:50px;color:white;}.search-container.jsx-79190987:hover .icon.jsx-79190987{color:#93a2ad;}#header-bottom.jsx-79190987,#search-button-sm.jsx-79190987{display:none;}@media (max-width:576px){#menu-button.jsx-79190987{display:inline-block;color:#eee;margin-right:10px;padding:15px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;}#menu-button.jsx-79190987:hover{background-color:white;-webkit-transition:0.2s;transition:0.2s;cursor:pointer;color:#000;border-bottom:4px solid #aaa;padding:15px 15px 11px 15px;}#header.jsx-79190987 #home-title.jsx-79190987{display:none;}#header.jsx-79190987 #home-title-sm.jsx-79190987{display:inline-block;}#search-container-id.jsx-79190987{display:none;}#search-button-sm.jsx-79190987{display:inline-block;}#header-bottom.jsx-79190987{display:block;}.search-container.jsx-79190987{padding-top:0px;}.search-container.jsx-79190987 input#search.jsx-79190987{width:200px;padding-left:50px;color:white;}.search-container.jsx-79190987:hover input#search.jsx-79190987{width:200px;padding-left:50px;color:white;}.search-container.jsx-79190987 input#search.jsx-79190987:focus,.search-container.jsx-79190987 input#search.jsx-79190987:active{outline:none;width:200px;padding-left:50px;color:white;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm5vbGQvRG9jdW1lbnRzL2dpdC9naXRodWIvbWF0dGRhbW9uMTA4LmJsb2cvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0VXLEFBRzRCLEFBR1EsQUFHUixBQUdJLEFBUUosQUFPRSxBQU9FLEFBU0YsQUFLRSxBQVNGLEFBS00sQUFVRSxBQVNULEFBU1MsQUFTQSxBQU1GLEFBUVYsQUFxQkcsQUFLQSxBQUtBLEFBSUEsQUFJSSxBQVVGLEFBWUgsQUFPRCxBQU1FLEFBSUQsQUFJVSxBQVNFLEFBUVYsQUFHUSxBQUdSLEFBR1EsQUFHUCxBQUdFLEFBR0osQUFLQSxBQU1DLFdBL0hILENBb0VNLEFBaURFLEFBS0EsQ0F4T3RCLEFBTUEsQUFxS2MsQUFpQmQsQUFxQkUsQUFNQSxBQXVCYyxDQWhLRSxBQXFEbEIsQUFLQSxBQUtBLEFBSUEsQUF1Q0EsQUFxQ0UsQ0FyTU0sQUFnQkssQUFjQSxDQXlHRyxBQWlFZCxDQXZOeUIsQUFzQlIsQUFjQSxDQXdHQSxHQWxKbkIsQUFzQlMsQUFrQ2MsQUEyQ0MsQUEwRlQsQUFvQmIsQUFNQSxFQXJKZ0IsQUFrQkEsQUFTTCxBQWVRLEFBMEZELEVBN0JBLEFBbUVFLENBdE10QixBQWNBLEVBN0JjLEVBcURnQixBQWtGQyxBQWtCakIsQUFpREUsQUFLQSxFQXhDTSxFQWpLQyxBQWNBLEFBbURMLENBcURBLEtBM0hsQixFQWhCb0MsQUFxR3RCLEFBb0VkLEFBaURFLEFBS0EsQ0FuSW1CLEFBc0VQLEFBbUVFLE9BOUNDLENBM0NMLEdBdENLLENBNkRqQixBQW1FRSxHQWpLMEIsQ0FrRkEsRUFWWixDQWhESSxDQWxDSCxBQWtCQSxBQTJHYSxBQU9YLE1BeEZOLEVBdERBLEdBM0NtQixBQWlGaEMsQ0F1REEsR0FsRmEsQUFrQkEsQUFrSEUsRUFsR0EsQUFVQyxFQXRERCxFQTVCRixBQWNBLEFBa0NZLENBa0ZFLElBM0ZJLEFBa0JBLEFBMEdKLEFBUU0sSUFsR2pDLENBVW9CLENBbEZKLEFBY0EsQUFjWSxZQW9CUixFQS9DTCxBQWNBLENBbUhXLEVBeEpiLEFBeUdlLEFBZ0ZOLE1BNUhRLEFBa0JBLEFBa0hFLEdBOUlQLENBM0J6QixBQWNBLENBckNBLEVBc0VBLEtBbUhFLElBakNxQixJQS9DRSxNQXRETCxFQVVwQixBQWtCQSxBQWtIRSxlQXZGa0IsQ0F0RHBCLGlCQXVEZ0IsVUF0R0ssSUF3R2lCLGdCQTRDdEMsb0JBM0NtQyxpQ0FDRCxvQkF6R3BCLFlBQ2QsQUF5R2lDLCtCQUNILGdFQUM5QiIsImZpbGUiOiIvVXNlcnMvYXJub2xkL0RvY3VtZW50cy9naXQvZ2l0aHViL21hdHRkYW1vbjEwOC5ibG9nL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAga2V5d29yZDogXCJcIixcbiAgICBzZWFyY2hJbnB1dDogZmFsc2VcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2IGlkPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBpZD1cImhlYWRlci10b3BcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJob21lXCI+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJob21lLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgIDxhPkJ1aWxkIG15IERyZWFtcyB3aXRoIENvZGVzPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJob21lLXRpdGxlLXNtXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgIDxhPkJEQzwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibWVudVwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgICAgICAgPGEgaWQ9XCJtZW51LWFib3V0XCI+QWJvdXQ8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgIGlkPVwic2VhcmNoLWJ1dHRvbi1zbVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVTZWFyY2hJbnB1dH1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8ZGl2IGlkPVwic2VhcmNoLWNvbnRhaW5lci1pZFwiIGNsYXNzTmFtZT1cInNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmtleXdvcmR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5faGFuZGxlS2V5d29yZH1cbiAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuX2hhbmRsZVByZXNzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJtZW51LWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuX3NldFNob3dpbmcoKX0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhcnNcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnNlYXJjaElucHV0ID8gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImhlYWRlci1ib3R0b21cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBpZD1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5rZXl3b3JkfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX2hhbmRsZUtleXdvcmR9XG4gICAgICAgICAgICAgICAgICBvbktleVByZXNzPXt0aGlzLl9oYW5kbGVQcmVzc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgI21lbnUtYnV0dG9uIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNoZWFkZXIgI2hvbWUtdGl0bGUge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjaGVhZGVyICNob21lLXRpdGxlLXNtIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNoZWFkZXIge1xuICAgICAgICAgICAgICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2Q0NjtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAgIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgICAgICAgICAgICB6LWluZGV4OiAyMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI2hlYWRlci10b3Age1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGhlaWdodDogNzJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1ha2UtZml4ZWQge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjaGVhZGVyICNob21lLXRpdGxlIGEge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgY29sb3I6ICNlZWU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjaGVhZGVyICNob21lLXRpdGxlOmhvdmVyIGEge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjaGVhZGVyICNob21lLXRpdGxlLXNtIGEge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgY29sb3I6ICNlZWU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjaGVhZGVyICNob21lLXRpdGxlLXNtOmhvdmVyIGEge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjaGVhZGVyIGEjbWVudS1hYm91dCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBjb2xvcjogI2VlZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNoZWFkZXIgYSNtZW51LWFib3V0OmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjYWFhO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTFweCAxNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjc2VhcmNoLWJ1dHRvbi1zbSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNGY1YjY2O1xuICAgICAgICAgICAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDE1cHggMTlweCAxNXB4O1xuICAgICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI3NlYXJjaC1idXR0b24tc206aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNhYWE7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTVweCAxNXB4IDE1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNoZWFkZXIgYSNob21lLXRpdGxlOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VhcmNoLWNvbnRhaW5lciBpbnB1dCNzZWFyY2gge1xuICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmIzMDNiO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMjYyNjI2O1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzJiMzAzYjtcblxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuNTVzIGVhc2U7XG4gICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogd2lkdGggMC41NXMgZWFzZTtcbiAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IHdpZHRoIDAuNTVzIGVhc2U7XG4gICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IHdpZHRoIDAuNTVzIGVhc2U7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNTVzIGVhc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZWFyY2gtY29udGFpbmVyIGlucHV0I3NlYXJjaDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNjU3MzdlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VhcmNoLWNvbnRhaW5lciBpbnB1dCNzZWFyY2g6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgIC8qIEZpcmVmb3ggMTgtICovXG4gICAgICAgICAgICAgIGNvbG9yOiAjNjU3MzdlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VhcmNoLWNvbnRhaW5lciBpbnB1dCNzZWFyY2g6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICAvKiBGaXJlZm94IDE5KyAqL1xuICAgICAgICAgICAgICBjb2xvcjogIzY1NzM3ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNlYXJjaC1jb250YWluZXIgaW5wdXQjc2VhcmNoOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNjU3MzdlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VhcmNoLWNvbnRhaW5lciAuaWNvbiB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNGY1YjY2O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VhcmNoLWNvbnRhaW5lcjpob3ZlciAuaWNvbixcbiAgICAgICAgICAgIC5zZWFyY2gtY29udGFpbmVyIGlucHV0I3NlYXJjaDpmb2N1cyAuaWNvbixcbiAgICAgICAgICAgIC5zZWFyY2gtY29udGFpbmVyIGlucHV0I3NlYXJjaDphY3RpdmUgLmljb24ge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxN3B4O1xuICAgICAgICAgICAgICBjb2xvcjogIzkzYTJhZDtcblxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS41KTsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuNSk7IC8qIEZpcmVmb3ggKi9cbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS41KTsgLyogSUUgOSAqL1xuICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuNSk7IC8qIE9wZXJhICovXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNlYXJjaC1jb250YWluZXIgaW5wdXQjc2VhcmNoOmZvY3VzLFxuICAgICAgICAgICAgLnNlYXJjaC1jb250YWluZXIgaW5wdXQjc2VhcmNoOmFjdGl2ZSB7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZWFyY2gtY29udGFpbmVyOmhvdmVyIGlucHV0I3NlYXJjaCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZWFyY2gtY29udGFpbmVyOmhvdmVyIC5pY29uIHtcbiAgICAgICAgICAgICAgY29sb3I6ICM5M2EyYWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjaGVhZGVyLWJvdHRvbSxcbiAgICAgICAgICAgICNzZWFyY2gtYnV0dG9uLXNtIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgICAjbWVudS1idXR0b24ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBjb2xvcjogI2VlZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgI21lbnUtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2FhYTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTFweCAxNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICNoZWFkZXIgI2hvbWUtdGl0bGUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgI2hlYWRlciAjaG9tZS10aXRsZS1zbSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICNzZWFyY2gtY29udGFpbmVyLWlkIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICNzZWFyY2gtYnV0dG9uLXNtIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgI2hlYWRlci1ib3R0b20ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZWFyY2gtY29udGFpbmVyIGlucHV0I3NlYXJjaCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlYXJjaC1jb250YWluZXI6aG92ZXIgaW5wdXQjc2VhcmNoIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VhcmNoLWNvbnRhaW5lciBpbnB1dCNzZWFyY2g6Zm9jdXMsXG4gICAgICAgICAgICAgIC5zZWFyY2gtY29udGFpbmVyIGlucHV0I3NlYXJjaDphY3RpdmUge1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuICBfaGFuZGxlS2V5d29yZCA9IGV2ZW50ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGtleXdvcmQ6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9O1xuICBfaGFuZGxlUHJlc3MgPSBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgUm91dGVyLnB1c2goYC9zZWFyY2g/a2V5d29yZD0ke2V2ZW50LnRhcmdldC52YWx1ZX1gKTtcbiAgICB9XG4gIH07XG4gIF90b2dnbGVTZWFyY2hJbnB1dCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlYXJjaElucHV0OiAhdGhpcy5zdGF0ZS5zZWFyY2hJbnB1dFxuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/arnold/Documents/git/github/mattdamon108.blog/components/Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.c64d0fe084a63f81f16c.hot-update.js.map