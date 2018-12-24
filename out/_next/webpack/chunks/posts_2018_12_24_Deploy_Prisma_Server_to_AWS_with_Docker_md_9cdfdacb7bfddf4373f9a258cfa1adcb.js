
        __NEXT_REGISTER_CHUNK('posts_2018_12_24_Deploy_Prisma_Server_to_AWS_with_Docker_md_9cdfdacb7bfddf4373f9a258cfa1adcb', function() {
      webpackJsonp([0],{

/***/ "./node_modules/@mdx-js/tag/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mdxTag = __webpack_require__("./node_modules/@mdx-js/tag/dist/mdx-tag.js");

Object.defineProperty(exports, 'MDXTag', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mdxTag).default;
  }
});

var _mdxProvider = __webpack_require__("./node_modules/@mdx-js/tag/dist/mdx-provider.js");

Object.defineProperty(exports, 'MDXProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mdxProvider).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/@mdx-js/tag/dist/mdx-provider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMDXComponents = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _createReactContext2 = __webpack_require__("./node_modules/create-react-context/lib/index.js");

var _createReactContext3 = _interopRequireDefault(_createReactContext2);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _createReactContext = (0, _createReactContext3.default)({}),
    Provider = _createReactContext.Provider,
    Consumer = _createReactContext.Consumer;

var withMDXComponents = function withMDXComponents(Component) {
  return function (_ref) {
    var components = _ref.components,
        props = _objectWithoutProperties(_ref, ['components']);

    return _react2.default.createElement(
      Consumer,
      null,
      function (contextComponents) {
        return _react2.default.createElement(Component, _extends({ components: components || contextComponents }, props));
      }
    );
  };
};

exports.withMDXComponents = withMDXComponents;
var MDXProvider = function MDXProvider(_ref2) {
  var components = _ref2.components,
      children = _ref2.children;
  return _react2.default.createElement(
    Provider,
    { value: components },
    children
  );
};

MDXProvider.propTypes = {
  components: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.element.isRequired
};

exports.default = MDXProvider;

/***/ }),

/***/ "./node_modules/@mdx-js/tag/dist/mdx-tag.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _hoistNonReactStatics = __webpack_require__("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _mdxProvider = __webpack_require__("./node_modules/@mdx-js/tag/dist/mdx-provider.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaults = {
  inlineCode: 'code',
  wrapper: 'div'
};

var MDXTag = function (_Component) {
  _inherits(MDXTag, _Component);

  function MDXTag() {
    _classCallCheck(this, MDXTag);

    return _possibleConstructorReturn(this, (MDXTag.__proto__ || Object.getPrototypeOf(MDXTag)).apply(this, arguments));
  }

  _createClass(MDXTag, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          parentName = _props.parentName,
          _props$props = _props.props,
          childProps = _props$props === undefined ? {} : _props$props,
          children = _props.children,
          _props$components = _props.components,
          components = _props$components === undefined ? {} : _props$components,
          Layout = _props.Layout,
          layoutProps = _props.layoutProps;


      var Component = components[parentName + '.' + name] || components[name] || defaults[name] || name;

      if (Layout) {
        (0, _hoistNonReactStatics2.default)(this, Layout);

        return _react2.default.createElement(
          Layout,
          _extends({ components: components }, layoutProps),
          _react2.default.createElement(
            Component,
            childProps,
            children
          )
        );
      }

      return _react2.default.createElement(
        Component,
        childProps,
        children
      );
    }
  }]);

  return MDXTag;
}(_react.Component);

exports.default = (0, _mdxProvider.withMDXComponents)(MDXTag);

/***/ }),

/***/ "./node_modules/create-react-context/lib/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gud = __webpack_require__("./node_modules/gud/index.js");

var _gud2 = _interopRequireDefault(_gud);

var _warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (true) {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(_react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(_react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/create-react-context/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _implementation = __webpack_require__("./node_modules/create-react-context/lib/implementation.js");

var _implementation2 = _interopRequireDefault(_implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/gud/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return global[key] = (global[key] || 0) + 1;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./posts/2018-12-24-Deploy-Prisma-Server-to-AWS-with-Docker.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/arnold/Documents/git/github/mattdamon108.blog/posts/2018-12-24-Deploy-Prisma-Server-to-AWS-with-Docker.md";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Deploy the Prisma Server to the AWS EC2 with Docker"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "by moondaddi on 2018-12-24"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Prisma?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Simply, the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://www.prisma.io/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Prisma"), " is the new ORM(", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://en.wikipedia.org/wiki/Object-relational_mapping"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Object Relational Mapping"), ") based on GraphQL query language. The Prisma can make your whole workflow to set up the graphQL API a lot easier. All you need is only graphQL schema in order to set up the graphQL API."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "blockquote",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "blockquote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "ex. GraphQL schema")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "hljs language-graphql",
      "metaString": ""
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-selector-tag"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "type"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-selector-tag"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Tweet"), " {\n  ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attribute"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "id"), ": ID! ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-variable"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "@unique"), "\n  ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attribute"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "createdAt"), ": DateTime!\n  ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attribute"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "text"), ": String!\n  ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attribute"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "owner"), ": User!\n  ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attribute"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "location"), ": Location!\n}\n\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-selector-tag"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "type"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-selector-tag"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "User"), " {\n  ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attribute"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "id"), ": ID! ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-variable"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "@unique"), "\n  ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attribute"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "createdAt"), ": DateTime!\n  ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attribute"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "updatedAt"), ": DateTime!\n  ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attribute"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "handle"), ": String! ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-variable"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "@unique"), "\n  ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attribute"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "name"), ": String\n  ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attribute"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "tweets"), ": [Tweet!]!\n}\n\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-selector-tag"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "type"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-selector-tag"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "Location"), " {\n  ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attribute"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "latitude"), ": Float!\n  ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attribute"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "longitude"), ": Float!\n}")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "If you make your graphQL schema to ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "datamodel.prisma"), " file. It's all set. Prisma will deploy your schema to the connected DB(Prisma Cloud or your Remote DB/Local DB) and generate all kind of graphQL schema (types and resolvers) for you automatically. Fantastic, isn't it?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "Structure"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "/static/images/post_img/prisma_structure.jpg",
      "alt": "Prisma structure"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "blockquote",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "blockquote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "GraphQL API Server = GraphQL API + Prisma Server")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "Prisma API Server consists of two parts, ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "GraphQL API"), " + ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "Prisma Server"), ". GraphQL API is the backend layer which contains your business logic, such as querying users, sign up, log in, locations, and so on. You can set it up with Express or GraphQL Yoga, etc. Otherwise, Prisma Server means the backend server which contains all the graphQL schema as per your data model and is connected to database. Prisma suggests the Docker in order to set up Prisma Server."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "This post will explain how to deploy this Prisma Server to AWS ECS and ECR service."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "Deploy the Prisma Server"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, "Requirements"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, "Docker"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "blockquote",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "blockquote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, "(for mac) ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://hub.docker.com/editions/community/docker-ce-desktop-mac"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, "https://hub.docker.com/editions/community/docker-ce-desktop-mac")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, "Prisma Cli"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "hljs language-shell",
      "metaString": ""
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-meta"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, "$"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "bash"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, " npm i -g prisma"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-meta"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, "#"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "bash"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, " or"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-meta"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, "$"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "bash"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, " yarn global add prisma"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, "(Option 1) Using Docker machine"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, "This is using docker-machine in cli. The docker-machine will create a docker machine on AWS EC2 directly. and docker-compose will compose the prisma server along with ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, "docker-compse.yml"), " in docker-machine."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, "Create the docker machine on AWS EC2"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "hljs language-shell",
      "metaString": ""
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-meta"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, "$"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "bash"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, " docker-machine create --driver amazonec2 --amazonec2-region ap-northeast-2 --amazonec2-vpc-id __SPECIFIC_VPC__ prisma-server-example"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, "If creating EC2 instance is failed, check your AWS credentials and IAM policy.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, "Activate new machine as active host"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "hljs language-shell",
      "metaString": ""
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-meta"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, "$"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "bash"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, " docker-machine prisma-server-example"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-meta"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, "$"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "bash"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "span",
    props: {
      "className": "hljs-built_in"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, "eval"), " $(docker-machine env prisma-server-example)"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-meta"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, "\n#"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "bash"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, " check docker-machine"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-meta"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, "$"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "bash"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, " docker-machine ls"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, "docker-compose.yml"), " file"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "hljs language-yml",
      "metaString": ""
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, "version:"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, "\"3\""), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, "services:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, "  prisma:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, "    image:"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, "prismagraphql/prisma:1.23"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, "    restart:"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, "always"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, "    ports:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-bullet"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, "      -"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, "\"4466:4466\""), "\n    ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-comment"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, "# logging available in AWS CloudWatch"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, "    logging:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, "      driver:"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, "awslogs"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, "      options:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, "        awslogs-group:"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, "__AWSLOG_GROUP__"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, "        awslogs-region:"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, "ap-northeast-2"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, "        awslogs-stream-prefix:"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, "__AWSLOG_STREAM_PREFIX__"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, "    environment:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, "      PRISMA_CONFIG:"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, "|\n"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, "        port:"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-number"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, "4466"), "\n        ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-comment"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, "# managementApiSecret: __SECRET_KEY__"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, "        databases:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, "          default:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, "            connector:"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, "postgres"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-comment"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, "# PostgreSQL"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, "            host:"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, "__AWS_RDS_HOST__"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }, "            database:"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }, "__DB_NAME__"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }, "            schema:"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }, "__DB_SCHEMA__"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, "            user:"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, "__DB_USERNAME__"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, "            password:"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, "__DB_PASSWORD__"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, "            rawAccess:"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-literal"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, "true"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, "            port:"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-number"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, "5432"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, "            migrations:"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-literal"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, "false"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }, "Compose Prisma Server in new docker machine"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "hljs language-shell",
      "metaString": ""
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }, "docker compose up -d")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }, "Assign security group and check inbound rules"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }, "Basically, EC2 is assigned new security group as defalut. You need to check its inbound rule and open 4466 port.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, "Set the elastic load balancer (optional)"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, "Modify prisma.yml"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "hljs language-yml",
      "metaString": ""
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, "endpoint:"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, "http://__AWS_EC2_ADDRESS__:4466"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }, "datamodel:"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }, "datamodel.prisma"), "\n\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }, "generate:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, "  - generator:"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, "javascript-client"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-attr"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }, "    output:"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }, "./generated/prisma-client/"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, "Deploy datamodel.prisma to Prisma Server in AWS EC2"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "hljs language-shell",
      "metaString": ""
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-meta"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    }
  }, "$"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "bash"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    }
  }, " PRISMA_MANAGEMENT_API_SECRET=__SECRET_KEY__ prisma deploy"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }, "Generate prisma client for GraphQL API"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "hljs language-shell",
      "metaString": ""
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-meta"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    }
  }, "$"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "bash"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    }
  }, " prisma generate"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    }
  }, "References"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "blockquote",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "blockquote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://docs.docker.com/machine/drivers/aws/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    }
  }, "https://docs.docker.com/machine/drivers/aws/"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://docs.docker.com/machine/examples/aws/#step-2-use-machine-to-create-the-instance"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    }
  }, "https://docs.docker.com/machine/examples/aws/#step-2-use-machine-to-create-the-instance"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "hr",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    }
  }, "(Option 2) Using AWS ECS Cli"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    }
  }, "Create EC2 and ECS cluster"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "hljs language-shell",
      "metaString": ""
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-meta"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    }
  }, "$"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "bash"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    }
  }, " ecs-cli up --keypair __AWS_KEYPAIR_NAME__ --capability-iam --vpc __SPECIFIC_VPC__ --subnets __SUBNET_1__,__SUBNET_2__ --size 1 --instance-type t2.micro --cluster-config prisma-server-ecs"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    }
  }, "It will generate the cloudformation which will proceed the whole process to generate EC2 instance and ECS cluster.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    }
  }, "Compose the Prisma Server to ECS container"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "hljs language-shell",
      "metaString": ""
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-meta"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    }
  }, "$"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "bash"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    }
  }, " ecs-cli compose up --create-log-groups --cluster-config prisma-server-ecs"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    }
  }, "It will generate the new Task definition. You can check the new Task definition is runnig.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    }
  }, "Check if the new Task definition is running"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "hljs language-shell",
      "metaString": ""
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-meta"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    }
  }, "$"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "bash"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    }
  }, " esc-cli ps"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    }
  }, "If your new Task definition is working well, you might want to make new service in ECS cluster in order to manage the task.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    }
  }, "References"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "blockquote",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "blockquote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://docs.aws.amazon.com/ko_kr/AmazonECR/latest/userguide/ECR_AWSCLI.html"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    }
  }, "https://docs.aws.amazon.com/ko_kr/AmazonECR/latest/userguide/ECR_AWSCLI.html"), " > ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://docs.aws.amazon.com/ko_kr/AmazonECS/latest/developerguide/ECS_CLI_tutorial_EC2.html"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    }
  }, "https://docs.aws.amazon.com/ko_kr/AmazonECS/latest/developerguide/ECS_CLI_tutorial_EC2.html"))));
});

/***/ })

})
        })
      ;
//# sourceMappingURL=posts_2018_12_24_Deploy_Prisma_Server_to_AWS_with_Docker_md_9cdfdacb7bfddf4373f9a258cfa1adcb.js.map