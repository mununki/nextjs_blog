webpackHotUpdate("static/development/pages/post.js",{

/***/ "./posts/2018-08-28-File-upload-with-GraphQL-Apollo-Client-Django-Graphene.md":
/*!************************************************************************************!*\
  !*** ./posts/2018-08-28-File-upload-with-GraphQL-Apollo-Client-Django-Graphene.md ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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








var layoutProps = {};

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
      }, "File upload with GraphQL Apollo client & Django + Graphene"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, "by Moondaddi on 2018-08-28"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "hr",
        components: components
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h2",
        components: components
      }, "Requirements"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
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
      }, " pip install django"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
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
      }, " pip install graphene_django"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
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
      }, " pip install graphene-file-upload"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
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
      }, " pip install python-resize-image"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "ul",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "li",
        components: components,
        parentName: "ul"
      }, "Django==2.0.7"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "li",
        components: components,
        parentName: "ul"
      }, "graphene==2.1.2"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "li",
        components: components,
        parentName: "ul"
      }, "graphene-django==2.0.0"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "li",
        components: components,
        parentName: "ul"
      }, "graphene-file-upload==1.0.0"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "li",
        components: components,
        parentName: "ul"
      }, "graphql-core==2.0"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "li",
        components: components,
        parentName: "ul"
      }, "graphql-relay==0.4.5"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "li",
        components: components,
        parentName: "ul"
      }, "python-resize-image==1.1.11")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h2",
        components: components
      }, "Backend"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "blockquote",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components,
        parentName: "blockquote"
      }, "Mutation part")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "pre",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "code",
        components: components,
        parentName: "pre",
        props: {
          "className": "hljs language-python"
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-keyword"
        }
      }, "import"), " graphene\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-keyword"
        }
      }, "from"), " graphene_django ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-keyword"
        }
      }, "import"), " DjangoObjectType\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-keyword"
        }
      }, "from"), " graphene_file_upload.scalars ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-keyword"
        }
      }, "import"), " Upload\n\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-class"
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "span",
        props: {
          "className": "hljs-keyword"
        }
      }, "class"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "span",
        props: {
          "className": "hljs-title"
        }
      }, "CUDNewsBoard"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "span",
        props: {
          "className": "hljs-params"
        }
      }, "(graphene.Mutation)"), ":"), "\n  newsboard = graphene.Field(NewsBoardType)\n\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-class"
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "span",
        props: {
          "className": "hljs-keyword"
        }
      }, "class"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "span",
        props: {
          "className": "hljs-title"
        }
      }, "Arguments"), ":"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-comment"
        }
      }, "# other arguments up here..."), "\n  files = Upload()\n\n  ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-function"
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "span",
        props: {
          "className": "hljs-keyword"
        }
      }, "def"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "span",
        props: {
          "className": "hljs-title"
        }
      }, "mutate"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "span",
        props: {
          "className": "hljs-params"
        }
      }, "(self, info, files=None, ...)"), ":"), "\n    user = info.context.user\n\n    ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-keyword"
        }
      }, "if"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-keyword"
        }
      }, "not"), " user.is_staff:\n      ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-keyword"
        }
      }, "raise"), " Exception(", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-string"
        }
      }, "'Admin permission is required!'"), ")\n\n    post = NewsBoard(user=user, title=title, content=content)\n    post.save()\n\n    ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-keyword"
        }
      }, "if"), " files:\n      ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-keyword"
        }
      }, "for"), " file ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-keyword"
        }
      }, "in"), " files:\n\n        postimage = NewsBoardImage(post=post, image=", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-keyword"
        }
      }, "None"), ")\n        postimage.save()\n\n        image_obj = Image.open(file)\n        ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-comment"
        }
      }, "# resize image"), "\n        image_obj = resizeimage.resize_width(image_obj, ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-number"
        }
      }, "800"), ", validate=", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-keyword"
        }
      }, "False"), ")\n\n        new_image_io = BytesIO()\n        image_obj.save(new_image_io, image_obj.format)\n\n        temp_name = file.name\n\n        postimage.image.save(\n          temp_name,\n          content=ContentFile(new_image_io.getvalue())\n        )\n\n    ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-keyword"
        }
      }, "return"), " CUDNewsBoard(newsboard=post)")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h2",
        components: components
      }, "Frontend"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "pre",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "code",
        components: components,
        parentName: "pre",
        props: {
          "className": "hljs language-javascript"
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-keyword"
        }
      }, "const"), " NEW_POST_NEWS = gql", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-string"
        }
      }, "`\nmutation postNew($files: Upload, ...) {\n  cudNewsboard(files: $files, ...) {\n    newsboard {\n      id\n      user {\n        id\n        fullname\n      }\n      title\n      content\n      firstDate\n      views\n      likes {\n        id\n      }\n      newsboardimages {\n        id\n        image\n      }\n    }\n  }\n}\n`"), ";\n\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-class"
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "span",
        props: {
          "className": "hljs-keyword"
        }
      }, "class"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "span",
        props: {
          "className": "hljs-title"
        }
      }, "BoardNewsInput"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "span",
        props: {
          "className": "hljs-keyword"
        }
      }, "extends"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "span",
        props: {
          "className": "hljs-title"
        }
      }, "Component"), " "), "{\n  state = {\n    ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "images"), ": []\n  };\n\n  render() {\n    ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-keyword"
        }
      }, "return"), " (\n      ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "xml"
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "span",
        props: {
          "className": "hljs-tag"
        }
      }, "<", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "span",
        props: {
          "className": "hljs-name"
        }
      }, "div"), ">"), "\n        "), "<input\n          type=\"file\"\n          name=\"image\"\n          onChange={({\n            target: {\n              validity,\n              files: [file]\n            }\n          }) =>\n            validity.valid &&\n            this.setState({\n              images: [...this.state.images, file]\n            })\n          }\n        />\n        <Mutation\n          mutation={NEW_POST_NEWS}\n          variables={{\n            files: this.state.images ? this.state.images : null\n          }}\n        >\n          {(cudNewsboard, { loading, error, data }) => (\n            <button\n              onClick={() => {\n                cudNewsboard();\n              }}\n            >\n              POST\n            </button>\n          )}\n        </Mutation>\n      </div>", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "xml"
        }
      }, "\n    );\n  }\n}"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h2",
        components: components
      }, "Lesson & Learn"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "ol",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "li",
        components: components,
        parentName: "ol"
      }, "Array can be substitutive for FileList object in this case.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "pre",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "code",
        components: components,
        parentName: "pre",
        props: {
          "className": "hljs language-javascript"
        }
      }, "state = {\n  ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "images"), ": [file, file, file, ...]\n}")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "ol",
        components: components,
        props: {
          "start": 2
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "li",
        components: components,
        parentName: "ol"
      }, "Input onChange method")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "pre",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "code",
        components: components,
        parentName: "pre",
        props: {
          "className": "hljs language-javascript"
        }
      }, "<input\n  onChange={({ validity, ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "files"), ": [file] }) =>\n    validity.valid &&\n    ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-keyword"
        }
      }, "this"), ".setState(", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-function"
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "span",
        props: {
          "className": "hljs-params"
        }
      }, "prevState"), " =>"), " {\n      ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "images"), ": [...prevState.images, file];\n    })\n  }\n/>")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h2",
        components: components
      }, "References"));
    }
  }]);

  return MDXContent;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);


MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=post.js.9e0d81fb3e78f5e744c5.hot-update.js.map