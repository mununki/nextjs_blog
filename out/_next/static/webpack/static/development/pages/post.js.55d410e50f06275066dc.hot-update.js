webpackHotUpdate("static/development/pages/post.js",{

/***/ "./posts/2018-09-27-postmaster-pid-Location.md":
/*!*****************************************************!*\
  !*** ./posts/2018-09-27-postmaster-pid-Location.md ***!
  \*****************************************************/
/*! exports provided: title, createdAt, filename, category, tag, thumb, slug, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createdAt", function() { return createdAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filename", function() { return filename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category", function() { return category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tag", function() { return tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thumb", function() { return thumb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slug", function() { return slug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mdx-js/tag */ "./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var _mdx_js_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__);








var title = "postmaster-pid File Location";
var createdAt = "2018-09-27T00:00:00.000Z";
var filename = "2018-09-27-postmaster-pid-Location";
var category = ["django"];
var tag = ["postgres", "postmaster", "db"];
var thumb = "2018-09-27_thumb.png";
var slug = "What the hell is `postmaster.pid`?";
var layoutProps = {
  title: title,
  createdAt: createdAt,
  filename: filename,
  category: category,
  tag: tag,
  thumb: thumb,
  slug: slug
};

var MDXContent =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MDXContent, _React$Component);

  function MDXContent(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MDXContent);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MDXContent).call(this, props));
    _this.layout = null;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MDXContent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          components = _this$props.components,
          props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["components"]);

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "wrapper",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h1",
        components: components
      }, "'postmaster.pid' File Location"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, "by Moondaddi on 2018-09-27"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "hr",
        components: components
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h2",
        components: components
      }, "Where is the 'postmaster.pid'?"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, "Time to time, I encounter the error when I try to start PostgreSQL DB again. Especially, right after cold power-off, it comes a lot to me. If you use GUI interface of PostgreSQL, it gives you a long instruction failed to start properly. But, simply, you can start again after delete this 'postmaster.pid' file in your macOS system."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h2",
        components: components
      }, "Location of 'postmaster.pid'"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "pre",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "code",
        components: components,
        parentName: "pre",
        props: {
          "className": "hljs language-shell"
        }
      }, "/Users/user_name/Library/Application Support/Postgres/var-10")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "blockquote",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components,
        parentName: "blockquote"
      }, "Note: PostgreSQL ver. 10, it can be changed depends on what version of postgres you use.")));
    }
  }]);

  return MDXContent;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);


MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=post.js.55d410e50f06275066dc.hot-update.js.map