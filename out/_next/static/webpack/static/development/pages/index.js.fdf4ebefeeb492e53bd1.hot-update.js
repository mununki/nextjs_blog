webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index/AboutPresenter.tsx":
/*!****************************************!*\
  !*** ./pages/index/AboutPresenter.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.tsx");
/* harmony import */ var _components_HeaderAbout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/HeaderAbout */ "./components/HeaderAbout.tsx");
/* harmony import */ var _works_AnyPoem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./works/AnyPoem */ "./pages/index/works/AnyPoem.tsx");
/* harmony import */ var _works_Go__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./works/Go */ "./pages/index/works/Go.tsx");
/* harmony import */ var _works_JSlib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./works/JSlib */ "./pages/index/works/JSlib.tsx");
/* harmony import */ var _works_Lodem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./works/Lodem */ "./pages/index/works/Lodem.tsx");
/* harmony import */ var _works_RateLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./works/RateLink */ "./pages/index/works/RateLink.tsx");
/* harmony import */ var _works_RateLinkMobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./works/RateLinkMobile */ "./pages/index/works/RateLinkMobile.tsx");
/* harmony import */ var _works_Rust__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./works/Rust */ "./pages/index/works/Rust.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var workList = [{
  id: 1,
  name: "ratelink",
  alias: "RateLink"
}, {
  id: 2,
  name: "ratelinkmobile",
  alias: "RateLink mobile"
}, {
  id: 3,
  name: "lodem",
  alias: "Lodem"
}, {
  id: 4,
  name: "anypoem",
  alias: "Any-Poem"
}, {
  id: 5,
  name: "jslib",
  alias: "JS Library"
}, {
  id: 6,
  name: "rust",
  alias: "Rust"
}, {
  id: 7,
  name: "go",
  alias: "Go"
}];

var WorkIndexSM = function WorkIndexSM(props) {
  var currentWork = workList.filter(function (w) {
    return w.name === props.name;
  });
  var previousWork = currentWork[0].id - 1 < 1 ? null : workList.filter(function (w) {
    return w.id === currentWork[0].id - 1;
  });
  var nextWork = currentWork[0].id + 1 > 6 ? null : workList.filter(function (w) {
    return w.id === currentWork[0].id + 1;
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, previousWork ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "index",
    onClick: function onClick() {
      return props.setName(previousWork[0].name);
    }
  }, "\u2190  Prev") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "index"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "current"
  }, currentWork[0].alias), nextWork ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "index",
    onClick: function onClick() {
      return props.setName(nextWork[0].name);
    }
  }, "Next \u2192") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "index"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    jsx: true
  }, "\n          .container {\n            display: flex;\n          }\n          .current {\n            flex: 1;\n            text-align: center;\n            padding: 0.5rem;\n          }\n          .index {\n            flex: 1;\n            text-align: center;\n            cursor: pointer;\n            color: var(--text-link-color);\n            text-decoration: underline;\n            padding: 0.5rem;\n          }\n        "));
};

var useWorks = function useWorks(value) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setWork = _useState2[1];

  var onClick = function onClick(v) {
    setWork(v);
  };

  return {
    name: name,
    onClick: onClick
  };
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var works = useWorks("ratelink");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "about-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "about-greeting"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HeaderAbout__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-intro"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, "Hi~\uD83D\uDC4B I'm a Full Stack developer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, "+= an enthusiastic learner + open source contributor"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "subtitle"
  }, "I design, build, deploy, launch from the concept to the completion."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "subtitle"
  }, "Reach me if you have any project or inquiries."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "about-works"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-title"
  }, "Recent Works"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-work-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-work-index"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      return works.onClick("ratelink");
    },
    className: works.name === "ratelink" ? "selected" : undefined
  }, "RateLink"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      return works.onClick("ratelinkmobile");
    },
    className: works.name === "ratelinkmobile" ? "selected" : undefined
  }, "RateLink Mobile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      return works.onClick("lodem");
    },
    className: works.name === "lodem" ? "selected" : undefined
  }, "Lodem"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      return works.onClick("anypoem");
    },
    className: works.name === "anypoem" ? "selected" : undefined
  }, "Any-Poem \uD83D\uDEA7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      return works.onClick("jslib");
    },
    className: works.name === "jslib" ? "selected" : undefined
  }, "JS Library"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      return works.onClick("rust");
    },
    className: works.name === "rust" ? "selected" : undefined
  }, "Rust projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      return works.onClick("go");
    },
    className: works.name === "go" ? "selected" : undefined
  }, "Go projects")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-work-index-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WorkIndexSM, {
    name: works.name,
    setName: works.onClick
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-work-content"
  }, works.name === "ratelink" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_works_RateLink__WEBPACK_IMPORTED_MODULE_7__["default"], null) : null, works.name === "ratelinkmobile" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_works_RateLinkMobile__WEBPACK_IMPORTED_MODULE_8__["default"], null) : null, works.name === "lodem" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_works_Lodem__WEBPACK_IMPORTED_MODULE_6__["default"], null) : null, works.name === "anypoem" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_works_AnyPoem__WEBPACK_IMPORTED_MODULE_3__["default"], null) : null, works.name === "jslib" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_works_JSlib__WEBPACK_IMPORTED_MODULE_5__["default"], null) : null, works.name === "rust" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_works_Rust__WEBPACK_IMPORTED_MODULE_9__["default"], null) : null, works.name === "go" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_works_Go__WEBPACK_IMPORTED_MODULE_4__["default"], null) : null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "about-skillset"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Skill set")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "about-skillset-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "webdev"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-skillset-title"
  }, "Web development"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-skillset-subtitle"
  }, "React"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-skillset-description"
  }, "I am fully confident to build frontend web app with React. I deeply understand how React works with state, lifecycle, hooks and context. I'm focusing to improve the performance and better experience for users. Not only SPA, I am fully aware of how important SEO is, I built a couple of SSR web app projects with Next.js. Also, I'm very experienced with bundling assets using webpack and transpiling modern Javascript code(ES6) with babel."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-skillset-subtitle"
  }, "GraphQL"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-skillset-description"
  }, "I'm very experienced with GraphQL. I can build a backend as GraphQL api with Node.js and Django, as well as a frontend to communicate each other with GraphQL. I can implement to send and receive a multipart data(eg. image file) with GraphQL."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-skillset-subtitle"
  }, "Node.js and Django"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-skillset-description"
  }, "I fully understand how http requet/response works with headers, cors, authorization, and json web authentication. I am very experienced with Node.js and Django to build a backend api or server. I know how to deploy it on AWS with docker or serverless."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-skillset-subtitle"
  }, "Go"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-skillset-description"
  }, "I'm confident with building a backend application with Go. I'm specially experienced with GraphQL backend with Go. And, I'm enjoying to build helper tools for development by myself."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-skillset-subtitle"
  }, "DevOps"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-skillset-description"
  }, "I am well aware of AWS service architecture and how to compose it for whatever it needs. I know what the pros and cons of serverless architecture and how to use it. Also, I am used to deploy my apps as containerized using Docker.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "webdev"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-skillset-title"
  }, "Mobile app development"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-skillset-subtitle"
  }, "React Native"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-skillset-description"
  }, "I am very comfortable to build a mobile app with React Native and Native modules if needed in case. I know how to build a React Native app with Xcode and Android Studio with Native modules. I really enjoying to improve the performance and give a solid experience to users.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "systemlang"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-skillset-title"
  }, "Low level system language"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-skillset-subtitle"
  }, "Rust"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-skillset-description"
  }, "I am an enthusiastic learner. I really enjoy to challenge new languages and build a something new with it. I started learning the Rust which is very powerful low level system language. And I built a several projects with it. I'm very enjoying to make an utilities to improve a process or automation."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "about-hireme"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-title"
  }, "Work with me"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-hireme-body"
  }, "If you are looking for a developer with a communicative, punctual, professional mind-set, or if you have a project to work with someone else,", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " get in touch with me.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    about: true
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    jsx: true
  }, "\n          #about-container {\n            font-size: 1rem;\n            line-height: 2rem;\n            font-family: var(--text-san-serif);\n          }\n          .about-greeting {\n            height: 100vh;\n            min-height: 800px;\n            display: flex;\n            flex-direction: column;\n          }\n          .about-intro {\n            width: 1200px;\n            margin: auto;\n          }\n          .about-intro .title {\n            font-size: 2.5rem;\n            line-height: 4rem;\n            padding: 0 2rem;\n            word-break: break-word;\n          }\n          .about-intro .subtitle {\n            font-size: 1.7rem;\n            color: grey;\n            line-height: 2.5rem;\n            padding: 0 2rem;\n            word-break: break-word;\n            margin: 1rem 0;\n          }\n          #about-works {\n            height: 100%;\n            min-height: 100vh;\n            margin-bottom: 3rem;\n          }\n          #about-skillset {\n            height: 100%;\n            min-height: 100vh;\n            margin-bottom: 5rem;\n          }\n          #about-hireme {\n            height: 100%;\n          }\n          .section-container {\n            width: 1200px;\n            margin: 0 auto;\n          }\n          .section-title {\n            padding: 2rem;\n            font-size: 1.5rem;\n            color: grey;\n          }\n          .about-work-body {\n            display: -ms-flexbox;\n            display: -webkit-flex;\n            display: flex;\n          }\n          .about-work-index {\n            width: 20%;\n            min-width: 200px;\n            height: 100%;\n          }\n          .about-work-index div {\n            padding: 0.5rem 2rem;\n          }\n          .about-work-index div:hover {\n            cursor: pointer;\n            color: var(--text-link-color);\n          }\n          .about-work-index-sm {\n            display: none;\n          }\n          .selected {\n            color: var(--text-link-color);\n          }\n          .about-work-content {\n            height: 100%;\n            padding: 1rem;\n          }\n          #about-skillset-body {\n            padding: 0 2rem;\n          }\n          .about-skillset-title {\n            font-size: 1.5rem;\n            color: var(--text-link-color);\n            margin: 2rem 0;\n          }\n          .about-skillset-subtitle {\n            font-size: 1.3rem;\n            margin: 1rem 0;\n          }\n          .about-skillset-description {\n            color: grey;\n            margin: 1rem 0;\n          }\n          .about-hireme-body {\n            font-size: 2rem;\n            padding: 0 2rem;\n            line-height: 3rem;\n            margin-bottom: 10rem;\n          }\n          @media screen and (max-width: 1200px) {\n            .about-intro {\n              width: 100%;\n            }\n            .about-intro .title {\n              font-size: 2.5rem;\n              line-height: 4rem;\n            }\n            .about-intro .subtitle {\n              font-size: 1.5rem;\n              line-height: 2.5rem;\n            }\n            .about-work-container {\n              width: 100%;\n            }\n            .section-container {\n              width: 100%;\n            }\n          }\n          @media screen and (max-width: 576px) {\n            .about-intro .title {\n              font-size: 2rem;\n              line-height: 3rem;\n            }\n            .about-intro .subtitle {\n              font-size: 1.5rem;\n              line-height: 2.5rem;\n            }\n            .about-work-container {\n              width: 100%;\n            }\n            .about-work-body {\n              flex-direction: column;\n            }\n            .section-container {\n              width: 100%;\n            }\n            .about-work-index {\n              display: none;\n            }\n            .about-work-index-sm {\n              display: block;\n            }\n            #about-skillset-body {\n              padding: 0 1rem;\n            }\n          }\n        "));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/index/AboutPresenter")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.fdf4ebefeeb492e53bd1.hot-update.js.map