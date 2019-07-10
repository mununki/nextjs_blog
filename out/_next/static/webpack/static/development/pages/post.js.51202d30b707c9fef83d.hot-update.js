webpackHotUpdate("static/development/pages/post.js",{

/***/ "./posts/2018-12-10-Netplan-how-to-connect-wpa2-linux.md":
/*!***************************************************************!*\
  !*** ./posts/2018-12-10-Netplan-how-to-connect-wpa2-linux.md ***!
  \***************************************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/tag */ "./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var _mdx_js_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var title = "How to connect to wireless WPA2 with Netplan";
var createdAt = "2018-12-10T00:00:00.000Z";
var filename = "2018-12-10-Netplan-how-to-connect-wpa2-linux";
var category = ["devlogs"];
var tag = ["netplan", "linux", "wireless"];
var thumb = "2018-12-10_thumb.png";
var slug = "Hard to remember";
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
  _inherits(MDXContent, _React$Component);

  function MDXContent(props) {
    var _this;

    _classCallCheck(this, MDXContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MDXContent).call(this, props));
    _this.layout = null;
    return _this;
  }

  _createClass(MDXContent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          components = _this$props.components,
          props = _objectWithoutProperties(_this$props, ["components"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "wrapper",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "h1",
        components: components
      }, "[Linux]", " How to connect to wireless WPA2 with Netplan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "p",
        components: components
      }, "by moondaddi on 2018-12-10"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "hr",
        components: components
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "h2",
        components: components
      }, "Netplan?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "p",
        components: components
      }, "Netplan is the utility for easily configuring networking on a linux system. Ubuntu 17.10 starts including the netplan by default instead of deprecated ifupdown."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "h2",
        components: components
      }, "How to connect"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "h3",
        components: components
      }, "Check the network interface"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "pre",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "code",
        components: components,
        parentName: "pre",
        props: {
          "className": "hljs language-shell"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-meta"
        }
      }, "$"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "bash"
        }
      }, " ifconfig -a"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "h3",
        components: components
      }, "Configure ", "*", ".yaml"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "p",
        components: components
      }, "Make new file with any name ", "*", ".yaml in ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "inlineCode",
        components: components,
        parentName: "p"
      }, "/etc/netplan"), "\nYou can make as many configuration files as you want. In that case, ", "*", ".yaml files will be applied by alphbetically."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "pre",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "code",
        components: components,
        parentName: "pre",
        props: {
          "className": "hljs language-shell"
        }
      }, "network:\n  version: 2\n    renderer: networkd\n    ethernets:  # this is for lan\n      enp2s0:\n        addresses: []\n        dhcp4: true\n    wifis:  # this is for wlan\n      wlp3s0:  # wlan interface\n        access-points: \"SSID\":  # your SSID\n          password: \"PASWORD\"  # your PASSWORD\n        dhcp4: no\n        dhcp6: true\n        addresses: [192.168.0.200/24]  # set the static IP\n        gateway4: 192.168.0.1  # gateway\n        nameservers:\n          addresses: [192.168.0.1,8.8.8.8,8.8.4.4]")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "blockquote",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "p",
        components: components,
        parentName: "blockquote"
      }, "How to check wlan interface")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "pre",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "code",
        components: components,
        parentName: "pre",
        props: {
          "className": "hljs language-shell"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-meta"
        }
      }, "$"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "bash"
        }
      }, " iwconfig"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "h3",
        components: components
      }, "Generate conf"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "p",
        components: components
      }, "The configuration files ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "inlineCode",
        components: components,
        parentName: "p"
      }, "/etc/netplan/*.yaml"), " needs to be generated before applying to system. The ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "em",
        components: components,
        parentName: "p"
      }, ".conf files will be generated in `/run/netplan/"), ".conf` which shadow completely YAML files."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "pre",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "code",
        components: components,
        parentName: "pre",
        props: {
          "className": "hljs language-shell"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-meta"
        }
      }, "$"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "bash"
        }
      }, " sudo netplan --debug generate"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "h3",
        components: components
      }, "Apply the generated conf"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "pre",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "code",
        components: components,
        parentName: "pre",
        props: {
          "className": "hljs language-shell"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-meta"
        }
      }, "$"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "bash"
        }
      }, " sudo netplan apply"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "h3",
        components: components
      }, "References"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
        name: "p",
        components: components
      }, "Netplan reference page (", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
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
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=post.js.51202d30b707c9fef83d.hot-update.js.map