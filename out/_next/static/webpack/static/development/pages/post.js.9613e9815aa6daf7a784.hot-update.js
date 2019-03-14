webpackHotUpdate("static/development/pages/post.js",{

/***/ "./posts/2018-12-24-Deploy-Prisma-Server-to-AWS-with-Docker.md":
/*!*********************************************************************!*\
  !*** ./posts/2018-12-24-Deploy-Prisma-Server-to-AWS-with-Docker.md ***!
  \*********************************************************************/
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








var title = "Deploy the Prisma Server to AWS ECS and EC2 with Docker";
var createdAt = "2018-12-24T00:00:00.000Z";
var filename = "2018-12-24-Deploy-Prisma-Server-to-AWS-with-Docker";
var category = ["backend"];
var tag = ["aws", "graphql", "prisma", "ecs"];
var thumb = "2018-12-24_thumb.png";
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
      }, "Deploy the Prisma Server to the AWS EC2 with Docker"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, "by moondaddi on 2018-12-24"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "hr",
        components: components
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h2",
        components: components
      }, "Prisma?"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, "Simply, the ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "a",
        components: components,
        parentName: "p",
        props: {
          "href": "https://www.prisma.io/"
        }
      }, "Prisma"), " is the new ORM(", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "a",
        components: components,
        parentName: "p",
        props: {
          "href": "https://en.wikipedia.org/wiki/Object-relational_mapping"
        }
      }, "Object Relational Mapping"), ") based on GraphQL query language. The Prisma can make your whole workflow to set up the graphQL API a lot easier. All you need is only graphQL schema in order to set up the graphQL API."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "blockquote",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components,
        parentName: "blockquote"
      }, "ex. GraphQL schema")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "pre",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "code",
        components: components,
        parentName: "pre",
        props: {
          "className": "hljs language-js"
        }
      }, "type Tweet {\n  ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "id"), ": ID! @unique\n  createdAt: DateTime!\n  text: ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-built_in"
        }
      }, "String"), "!\n  owner: User!\n  location: Location!\n}\n\ntype User {\n  ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "id"), ": ID! @unique\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  handle: ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-built_in"
        }
      }, "String"), "! @unique\n  name: ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-built_in"
        }
      }, "String"), "\n  tweets: [Tweet!]!\n}\n\ntype Location {\n  ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "latitude"), ": Float!\n  longitude: Float!\n}")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, "If you make your graphQL schema to ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "inlineCode",
        components: components,
        parentName: "p"
      }, "datamodel.prisma"), " file. It's all set. Prisma will deploy your schema to the connected DB(Prisma Cloud or your Remote DB/Local DB) and generate all kind of graphQL schema (types and resolvers) for you automatically. Fantastic, isn't it?"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h2",
        components: components
      }, "Structure"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "img",
        components: components,
        parentName: "p",
        props: {
          "src": "/static/images/post_img/2018-12-24_prisma_structure.jpg",
          "alt": "Prisma structure"
        }
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "blockquote",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components,
        parentName: "blockquote"
      }, "GraphQL API Server = GraphQL API + Prisma Server")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, "Prisma API Server consists of two parts, ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "inlineCode",
        components: components,
        parentName: "p"
      }, "GraphQL API"), " + ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "inlineCode",
        components: components,
        parentName: "p"
      }, "Prisma Server"), ". GraphQL API is the backend layer which contains your business logic, such as querying users, sign up, log in, locations, and so on. You can set it up with Express or GraphQL Yoga, etc. Otherwise, Prisma Server means the backend server which contains all the graphQL schema as per your data model and is connected to database. Prisma suggests the Docker in order to set up Prisma Server."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, "This post will explain how to deploy this Prisma Server to AWS ECS and ECR service."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h2",
        components: components
      }, "Deploy the Prisma Server"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h2",
        components: components
      }, "Requirements"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "ul",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "li",
        components: components,
        parentName: "ul"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components,
        parentName: "li"
      }, "Docker"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "blockquote",
        components: components,
        parentName: "li"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components,
        parentName: "blockquote"
      }, "(for mac) ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "a",
        components: components,
        parentName: "p",
        props: {
          "href": "https://hub.docker.com/editions/community/docker-ce-desktop-mac"
        }
      }, "https://hub.docker.com/editions/community/docker-ce-desktop-mac")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "li",
        components: components,
        parentName: "ul"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components,
        parentName: "li"
      }, "Prisma Cli"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
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
      }, " npm i -g prisma"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-meta"
        }
      }, "#"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "bash"
        }
      }, " or"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
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
      }, " yarn global add prisma"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h2",
        components: components
      }, "(Option 1) Using Docker machine"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, "This is using docker-machine in cli. The docker-machine will create a docker machine on AWS EC2 directly. and docker-compose will compose the prisma server along with ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "inlineCode",
        components: components,
        parentName: "p"
      }, "docker-compse.yml"), " in docker-machine."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h3",
        components: components
      }, "Create the docker machine on AWS EC2"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
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
      }, " docker-machine create --driver amazonec2 --amazonec2-region ap-northeast-2 --amazonec2-vpc-id __SPECIFIC_VPC__ prisma-server-example"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "ul",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "li",
        components: components,
        parentName: "ul"
      }, "If creating EC2 instance is failed, check your AWS credentials and IAM policy.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h3",
        components: components
      }, "Activate new machine as active host"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
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
      }, " docker-machine prisma-server-example"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
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
      }, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "span",
        props: {
          "className": "hljs-built_in"
        }
      }, "eval"), " $(docker-machine env prisma-server-example)"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-meta"
        }
      }, "\n#"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "bash"
        }
      }, " check docker-machine"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
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
      }, " docker-machine ls"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h3",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "inlineCode",
        components: components,
        parentName: "h3"
      }, "docker-compose.yml"), " file"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "pre",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "code",
        components: components,
        parentName: "pre",
        props: {
          "className": "hljs language-yml"
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "version:"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-string"
        }
      }, "\"3\""), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "services:"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "  prisma:"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "    image:"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-string"
        }
      }, "prismagraphql/prisma:1.23"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "    restart:"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-string"
        }
      }, "always"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "    ports:"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-bullet"
        }
      }, "      -"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-string"
        }
      }, "\"4466:4466\""), "\n    ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-comment"
        }
      }, "# logging available in AWS CloudWatch"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "    logging:"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "      driver:"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-string"
        }
      }, "awslogs"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "      options:"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "        awslogs-group:"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-string"
        }
      }, "__AWSLOG_GROUP__"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "        awslogs-region:"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-string"
        }
      }, "ap-northeast-2"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "        awslogs-stream-prefix:"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-string"
        }
      }, "__AWSLOG_STREAM_PREFIX__"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "    environment:"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "      PRISMA_CONFIG:"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-string"
        }
      }, "|\n"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "        port:"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-number"
        }
      }, "4466"), "\n        ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-comment"
        }
      }, "# managementApiSecret: __SECRET_KEY__"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "        databases:"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "          default:"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "            connector:"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-string"
        }
      }, "postgres"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-comment"
        }
      }, "# PostgreSQL"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "            host:"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-string"
        }
      }, "__AWS_RDS_HOST__"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "            database:"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-string"
        }
      }, "__DB_NAME__"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "            schema:"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-string"
        }
      }, "__DB_SCHEMA__"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "            user:"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-string"
        }
      }, "__DB_USERNAME__"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "            password:"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-string"
        }
      }, "__DB_PASSWORD__"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "            rawAccess:"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-literal"
        }
      }, "true"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "            port:"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-number"
        }
      }, "5432"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "            migrations:"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-literal"
        }
      }, "false"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h3",
        components: components
      }, "Compose Prisma Server in new docker machine"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "pre",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "code",
        components: components,
        parentName: "pre",
        props: {
          "className": "hljs language-shell"
        }
      }, "docker compose up -d")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h3",
        components: components
      }, "Assign security group and check inbound rules"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "ul",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "li",
        components: components,
        parentName: "ul"
      }, "Basically, EC2 is assigned new security group as defalut. You need to check its inbound rule and open 4466 port.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h3",
        components: components
      }, "Set the elastic load balancer (optional)"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h3",
        components: components
      }, "Modify prisma.yml"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "pre",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "code",
        components: components,
        parentName: "pre",
        props: {
          "className": "hljs language-yml"
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "endpoint:"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "http://__AWS_EC2_ADDRESS__:4466"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "datamodel:"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-string"
        }
      }, "datamodel.prisma"), "\n\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "generate:"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "  - generator:"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-string"
        }
      }, "javascript-client"), "\n", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-attr"
        }
      }, "    output:"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "span",
        components: components,
        parentName: "code",
        props: {
          "className": "hljs-string"
        }
      }, "./generated/prisma-client/"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h3",
        components: components
      }, "Deploy datamodel.prisma to Prisma Server in AWS EC2"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
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
      }, " PRISMA_MANAGEMENT_API_SECRET=__SECRET_KEY__ prisma deploy"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h3",
        components: components
      }, "Generate prisma client for GraphQL API"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
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
      }, " prisma generate"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, "References"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "blockquote",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components,
        parentName: "blockquote"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "a",
        components: components,
        parentName: "p",
        props: {
          "href": "https://docs.docker.com/machine/drivers/aws/"
        }
      }, "https://docs.docker.com/machine/drivers/aws/"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "a",
        components: components,
        parentName: "p",
        props: {
          "href": "https://docs.docker.com/machine/examples/aws/#step-2-use-machine-to-create-the-instance"
        }
      }, "https://docs.docker.com/machine/examples/aws/#step-2-use-machine-to-create-the-instance"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "hr",
        components: components
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h2",
        components: components
      }, "(Option 2) Using AWS ECS Cli"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h3",
        components: components
      }, "Create EC2 and ECS cluster"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
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
      }, " ecs-cli up --keypair __AWS_KEYPAIR_NAME__ --capability-iam --vpc __SPECIFIC_VPC__ --subnets __SUBNET_1__,__SUBNET_2__ --size 1 --instance-type t2.micro --cluster-config prisma-server-ecs"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "ul",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "li",
        components: components,
        parentName: "ul"
      }, "It will generate the cloudformation which will proceed the whole process to generate EC2 instance and ECS cluster.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h3",
        components: components
      }, "Compose the Prisma Server to ECS container"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
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
      }, " ecs-cli compose up --create-log-groups --cluster-config prisma-server-ecs"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "ul",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "li",
        components: components,
        parentName: "ul"
      }, "It will generate the new Task definition. You can check the new Task definition is runnig.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "h3",
        components: components
      }, "Check if the new Task definition is running"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
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
      }, " esc-cli ps"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "ul",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "li",
        components: components,
        parentName: "ul"
      }, "If your new Task definition is working well, you might want to make new service in ECS cluster in order to manage the task.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components
      }, "References"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "blockquote",
        components: components
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "p",
        components: components,
        parentName: "blockquote"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "a",
        components: components,
        parentName: "p",
        props: {
          "href": "https://docs.aws.amazon.com/ko_kr/AmazonECR/latest/userguide/ECR_AWSCLI.html"
        }
      }, "https://docs.aws.amazon.com/ko_kr/AmazonECR/latest/userguide/ECR_AWSCLI.html"), " > ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"], {
        name: "a",
        components: components,
        parentName: "p",
        props: {
          "href": "https://docs.aws.amazon.com/ko_kr/AmazonECS/latest/developerguide/ECS_CLI_tutorial_EC2.html"
        }
      }, "https://docs.aws.amazon.com/ko_kr/AmazonECS/latest/developerguide/ECS_CLI_tutorial_EC2.html"))));
    }
  }]);

  return MDXContent;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);


MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=post.js.9613e9815aa6daf7a784.hot-update.js.map