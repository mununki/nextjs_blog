webpackHotUpdate("static/development/pages/post.js",{

/***/ "./posts/2018-12-10-Netplan-how-to-connect-wpa2-linux.md":
/*!***************************************************************!*\
  !*** ./posts/2018-12-10-Netplan-how-to-connect-wpa2-linux.md ***!
  \***************************************************************/
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








var title = "How to connect to wireless WPA2 with Netplan";
var createdAt = "2018-12-10T00:00:00.000Z";
var filename = "2018-12-10-Netplan-how-to-connect-wpa2-linux";
var category = ["devlogs"];
var tag = ["netplan", "linux", "wireless"];
var thumb = "2018-12-10_thumb.png";
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
      }, "[Linux]", " How to connect to wireless WPA2 with Netplan"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, "by moondaddi on 2018-12-10"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "hr",
        components: components
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h2",
        components: components
      }, "Netplan?"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, "Netplan is the utility for easily configuring networking on a linux system. Ubuntu 17.10 starts including the netplan by default instead of deprecated ifupdown."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h2",
        components: components
      }, "How to connect"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h3",
        components: components
      }, "Configure ", "*", ".yaml"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, "Make new file with any name ", "*", ".yaml in ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "inlineCode",
        components: components,
        parentName: "p"
      }, "/etc/netplan"), "\nYou can make as many configuration files as you want. In that case, ", "*", ".yaml files will be applied by alphbetically."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "pre",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "code",
        components: components,
        parentName: "pre",
        props: {
          "className": "hljs language-shell"
        }
      }, "network:\n  version: 2\n    renderer: networkd\n    ethernets:  # this is for lan\n      enp2s0:\n        addresses: []\n        dhcp4: true\n    wifis:  # this is for wlan\n      wlp3s0:  # wlan interface\n        access-points: \"SSID\":  # your SSID\n          password: \"PASWORD\"  # your PASSWORD\n        dhcp4: no\n        dhcp6: true\n        addresses: [192.168.0.200/24]  # set the static IP\n        gateway4: 192.168.0.1  # gateway\n        nameservers:\n          addresses: [192.168.0.1,8.8.8.8,8.8.4.4]")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "blockquote",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components,
        parentName: "blockquote"
      }, "How to check wlan interface")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "pre",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "code",
        components: components,
        parentName: "pre",
        props: {
          "className": "hljs language-shell"
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-meta"
        }
      }, "$"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "bash"
        }
      }, " iwconfig"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h3",
        components: components
      }, "Generate conf"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, "The configuration files ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "inlineCode",
        components: components,
        parentName: "p"
      }, "/etc/netplan/*.yaml"), " needs to be generated before applying to system. The ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "em",
        components: components,
        parentName: "p"
      }, ".conf files will be generated in `/run/netplan/"), ".conf` which shadow completely YAML files."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "pre",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "code",
        components: components,
        parentName: "pre",
        props: {
          "className": "hljs language-shell"
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-meta"
        }
      }, "$"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "bash"
        }
      }, " sudo netplan --debug generate"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h3",
        components: components
      }, "Apply the generated conf"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "pre",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "code",
        components: components,
        parentName: "pre",
        props: {
          "className": "hljs language-shell"
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-meta"
        }
      }, "$"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "bash"
        }
      }, " sudo netplan apply"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h3",
        components: components
      }, "References"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, "Netplan reference page (", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "a",
        components: components,
        parentName: "p",
        props: {
          "href": "https://netplan.io/reference"
        }
      }, "https://netplan.io/reference"), ")"));
    }
  }]);

  return MDXContent;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);


MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=post.js.e4b3b2a6f0764bec4b04.hot-update.js.map