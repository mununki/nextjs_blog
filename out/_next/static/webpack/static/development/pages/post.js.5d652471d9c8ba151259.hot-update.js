webpackHotUpdate("static/development/pages/post.js",{

/***/ "./posts/2018-12-18-AWS-EB-Load-Balancer-redirect-to-https.md":
/*!********************************************************************!*\
  !*** ./posts/2018-12-18-AWS-EB-Load-Balancer-redirect-to-https.md ***!
  \********************************************************************/
/*! exports provided: title, createdAt, filename, category, tag, thumb, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createdAt", function() { return createdAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filename", function() { return filename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category", function() { return category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tag", function() { return tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thumb", function() { return thumb; });
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








var title = "AWS Elastic Beanstalk makes redirect HTTP to HTTPS";
var createdAt = "2018-12-18T00:00:00.000Z";
var filename = "2018-12-18-AWS-EB-Load-Balancer-redirect-to-https";
var category = ["backend"];
var tag = ["aws", "eb", "elastic", "beanstalk", "redirect", "https"];
var thumb = "2018-12-18_thumb.jpg";
var layoutProps = {
  title: title,
  createdAt: createdAt,
  filename: filename,
  category: category,
  tag: tag,
  thumb: thumb
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
      }, "AWS Elastic Beanstalk makes redirect to HTTPS"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, "by moondaddi on 2018-12-18"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "hr",
        components: components
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h2",
        components: components
      }, "Elastic Load balancer and Elastic Beanstalk"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, "AWS Elastic Load balancer automatically distributes incoming application traffic across multiple AWS EC2. It enables your application's falut tolerance level higher and seamlessly providing the required amount of load balancing capacity needed to distribute application traffics."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, "When you deploy your application whatever it's built with any language to Elastic Beanstalk, Elastic Beanstalk automatically performs all required process in deployment for your application. One of requirements is Elastic Load balancer in front of EC2 which is generated by Elastic Beanstalk."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, "Elastic Load balancer is listening the port 80 as default. And you can set 443 port for HTTPS."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h2",
        components: components
      }, "Redirect to HTTPS"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, "Once everything sets up, You can access your application in Elastic Beanstalk through HTTP and also HTTPS."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, "If you want all requests to port 80 to redirect to port 443, HTTPS, you can make ssl_redirect.config file in .ebextensions in your application root directory."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "pre",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "code",
        components: components,
        parentName: "pre",
        props: {
          "className": "hljs language-apache"
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attribute"
        }
      }, "files"), ":\n    \"/", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attribute"
        }
      }, "etc"), "/httpd/conf.d/ssl_redirect.conf", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-string"
        }
      }, "\":\n        mode: \""), "000644", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-string"
        }
      }, "\"\n        owner: root\n        group: root\n        content: |\n            RewriteEngine On\n            <If \""), "-n '", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-variable"
        }
      }, "%{HTTP:X-Forwarded-Proto}"), "' && ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-variable"
        }
      }, "%{HTTP:X-Forwarded-Proto}"), " != 'https'", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-string"
        }
      }, "\">\n            RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R,L]\n            </If>"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h2",
        components: components
      }, "How it works"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, "During deployment of Elastic Beanstalk, it will check ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "inlineCode",
        components: components,
        parentName: "p"
      }, ".ebextendsion"), " directory if any ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "inlineCode",
        components: components,
        parentName: "p"
      }, "*.config"), " files there. If config file is found, Elastic Beanstalk will proceed it before applying the deployment of your application."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "inlineCode",
        components: components,
        parentName: "p"
      }, "ssl_redirect.config"), " file will be generated in path ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "inlineCode",
        components: components,
        parentName: "p"
      }, "/etc/httpd/conf.d/"), " and this will works for apache server to check any none https request and redirect it to https."));
    }
  }]);

  return MDXContent;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);


MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=post.js.5d652471d9c8ba151259.hot-update.js.map