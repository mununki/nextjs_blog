__NEXT_REGISTER_CHUNK("posts_2018_08_28_File_upload_with_GraphQL_Apollo_Client_Django_Graphene_md_3c2d1280e6e24e9e33c5fb09df3ee21f",function(){webpackJsonp([9],{273:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(1),o=a.n(t),s=a(424);a.n(s);n.default=function(e){var n=e.components;!function(e,n){if(null==e)return{};var a,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(o[a]=e[a]);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}}(e,["components"]);return o.a.createElement(s.MDXTag,{name:"wrapper",components:n},o.a.createElement(s.MDXTag,{name:"h1",components:n},"File upload with GraphQL Apollo client & Django + Graphene"),o.a.createElement(s.MDXTag,{name:"p",components:n},"by Moondaddi on 2018-08-28"),o.a.createElement(s.MDXTag,{name:"hr",components:n}),o.a.createElement(s.MDXTag,{name:"h2",components:n},"Requirements"),o.a.createElement(s.MDXTag,{name:"pre",components:n},o.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"hljs language-code",metaString:""}},o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-meta"}},"$"),o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"bash"}}," pip install django"),"\n",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-meta"}},"$"),o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"bash"}}," pip install graphene_django"),"\n",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-meta"}},"$"),o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"bash"}}," pip install graphene-file-upload"),"\n",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-meta"}},"$"),o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"bash"}}," pip install python-resize-image"))),o.a.createElement(s.MDXTag,{name:"ul",components:n},o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Django==2.0.7"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"graphene==2.1.2"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"graphene-django==2.0.0"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"graphene-file-upload==1.0.0"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"graphql-core==2.0"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"graphql-relay==0.4.5"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"python-resize-image==1.1.11")),o.a.createElement("br",null),o.a.createElement(s.MDXTag,{name:"h2",components:n},"Backend"),o.a.createElement(s.MDXTag,{name:"blockquote",components:n},o.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"blockquote"},"Mutation part")),o.a.createElement(s.MDXTag,{name:"pre",components:n},o.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"hljs language-python",metaString:""}},o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-keyword"}},"import")," graphene\n",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-keyword"}},"from")," graphene_django ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-keyword"}},"import")," DjangoObjectType\n",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-keyword"}},"from")," graphene_file_upload.scalars ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-keyword"}},"import")," Upload\n\n",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-class"}},o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"span",props:{className:"hljs-keyword"}},"class")," ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"span",props:{className:"hljs-title"}},"CUDNewsBoard"),o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"span",props:{className:"hljs-params"}},"(graphene.Mutation)"),":"),"\n  newsboard = graphene.Field(NewsBoardType)\n\n",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-class"}},o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"span",props:{className:"hljs-keyword"}},"class")," ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"span",props:{className:"hljs-title"}},"Arguments"),":")," ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-comment"}},"# other arguments up here..."),"\n  files = Upload()\n\n  ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-function"}},o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"span",props:{className:"hljs-keyword"}},"def")," ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"span",props:{className:"hljs-title"}},"mutate"),o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"span",props:{className:"hljs-params"}},"(self, info, files=None, ...)"),":"),"\n    user = info.context.user\n\n    ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-keyword"}},"if")," ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-keyword"}},"not")," user.is_staff:\n      ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-keyword"}},"raise")," Exception(",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-string"}},"'Admin permission is required!'"),")\n\n    post = NewsBoard(user=user, title=title, content=content)\n    post.save()\n\n    ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-keyword"}},"if")," files:\n      ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-keyword"}},"for")," file ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-keyword"}},"in")," files:\n\n        postimage = NewsBoardImage(post=post, image=",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-keyword"}},"None"),")\n        postimage.save()\n\n        image_obj = Image.open(file)\n        ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-comment"}},"# resize image"),"\n        image_obj = resizeimage.resize_width(image_obj, ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-number"}},"800"),", validate=",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-keyword"}},"False"),")\n\n        new_image_io = BytesIO()\n        image_obj.save(new_image_io, image_obj.format)\n\n        temp_name = file.name\n\n        postimage.image.save(\n          temp_name,\n          content=ContentFile(new_image_io.getvalue())\n        )\n\n    ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-keyword"}},"return")," CUDNewsBoard(newsboard=post)")),o.a.createElement("br",null),o.a.createElement(s.MDXTag,{name:"h2",components:n},"Frontend"),o.a.createElement(s.MDXTag,{name:"pre",components:n},o.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"hljs language-javascript",metaString:""}},o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-keyword"}},"const")," NEW_POST_NEWS = gql",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-string"}},"`\nmutation postNew($files: Upload, ...) {\n  cudNewsboard(files: $files, ...) {\n    newsboard {\n      id\n      user {\n        id\n        fullname\n      }\n      title\n      content\n      firstDate\n      views\n      likes {\n        id\n      }\n      newsboardimages {\n        id\n        image\n      }\n    }\n  }\n}\n`"),";\n\n",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-class"}},o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"span",props:{className:"hljs-keyword"}},"class")," ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"span",props:{className:"hljs-title"}},"BoardNewsInput")," ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"span",props:{className:"hljs-keyword"}},"extends")," ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"span",props:{className:"hljs-title"}},"Component")," "),"{\n  state = {\n    ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-attr"}},"images"),": []\n  };\n\n  render() {\n    ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-keyword"}},"return")," (\n      ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"xml"}},o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"span",props:{className:"hljs-tag"}},"<",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"span",props:{className:"hljs-name"}},"div"),">"),"\n        "),'<input\n          type="file"\n          name="image"\n          onChange={({\n            target: {\n              validity,\n              files: [file]\n            }\n          }) =>\n            validity.valid &&\n            this.setState({\n              images: [...this.state.images, file]\n            })\n          }\n        />\n        <Mutation\n          mutation={NEW_POST_NEWS}\n          variables={{\n            files: this.state.images ? this.state.images : null\n          }}\n        >\n          {(cudNewsboard, { loading, error, data }) => (\n            <button\n              onClick={() => {\n                cudNewsboard();\n              }}\n            >\n              POST\n            </button>\n          )}\n        </Mutation>\n      </div>',o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"xml"}},"\n    );\n  }\n}"))),o.a.createElement("br",null),o.a.createElement(s.MDXTag,{name:"h2",components:n},"Lesson & Learn"),o.a.createElement(s.MDXTag,{name:"ol",components:n},o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"Array can be substitutive for FileList object in this case.")),o.a.createElement(s.MDXTag,{name:"pre",components:n},o.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"hljs language-javascript",metaString:""}},"state = {\n  ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-attr"}},"images"),": [file, file, file, ...]\n}")),o.a.createElement("br",null),o.a.createElement(s.MDXTag,{name:"ol",components:n,props:{start:2}},o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"Input onChange method")),o.a.createElement(s.MDXTag,{name:"pre",components:n},o.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"hljs language-javascript",metaString:""}},"<input\n  onChange={({ validity, ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-attr"}},"files"),": [file] }) =>\n    validity.valid &&\n    ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-keyword"}},"this"),".setState(",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-function"}},o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"span",props:{className:"hljs-params"}},"prevState")," =>")," {\n      ",o.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-attr"}},"images"),": [...prevState.images, file];\n    })\n  }\n/>")),o.a.createElement("br",null),o.a.createElement(s.MDXTag,{name:"h2",components:n},"References"))}},423:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},o=p(a(1)),s=p(a(426)),r=p(a(157));function p(e){return e&&e.__esModule?e:{default:e}}var m=(0,s.default)({}),c=m.Provider,l=m.Consumer;n.withMDXComponents=function(e){return function(n){var a=n.components,s=function(e,n){var a={};for(var t in e)n.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t]);return a}(n,["components"]);return o.default.createElement(l,null,function(n){return o.default.createElement(e,t({components:a||n},s))})}};var i=function(e){var n=e.components,a=e.children;return o.default.createElement(c,{value:n},a)};i.propTypes={components:r.default.object.isRequired,children:r.default.element.isRequired},n.default=i},424:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(425);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return s(t).default}});var o=a(423);function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return s(o).default}})},425:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},o=function(){function e(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,a,t){return a&&e(n.prototype,a),t&&e(n,t),n}}(),s=a(1),r=c(s),p=c(a(264)),m=a(423);function c(e){return e&&e.__esModule?e:{default:e}}var l={inlineCode:"code",wrapper:"div"},i=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,s.Component),o(n,[{key:"render",value:function(){var e=this.props,n=e.name,a=e.parentName,o=e.props,s=void 0===o?{}:o,m=e.children,c=e.components,i=void 0===c?{}:c,u=e.Layout,d=e.layoutProps,f=i[a+"."+n]||i[n]||l[n]||n;return u?((0,p.default)(this,u),r.default.createElement(u,t({components:i},d),r.default.createElement(f,s,m))):r.default.createElement(f,s,m)}}]),n}();n.default=(0,m.withMDXComponents)(i)},426:function(e,n,a){"use strict";n.__esModule=!0;var t=s(a(1)),o=s(a(427));function s(e){return e&&e.__esModule?e:{default:e}}n.default=t.default.createContext||o.default,e.exports=n.default},427:function(e,n,a){"use strict";n.__esModule=!0;var t=a(1),o=(r(t),r(a(157))),s=r(a(428));r(a(429));function r(e){return e&&e.__esModule?e:{default:e}}function p(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function m(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function c(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var l=1073741823;n.default=function(e,n){var a,r,i="__create-react-context-"+(0,s.default)()+"__",u=function(e){function a(){var n,t,o,s;p(this,a);for(var r=arguments.length,c=Array(r),l=0;l<r;l++)c[l]=arguments[l];return n=t=m(this,e.call.apply(e,[this].concat(c))),t.emitter=(o=t.props.value,s=[],{on:function(e){s.push(e)},off:function(e){s=s.filter(function(n){return n!==e})},get:function(){return o},set:function(e,n){o=e,s.forEach(function(e){return e(o,n)})}}),m(t,n)}return c(a,e),a.prototype.getChildContext=function(){var e;return(e={})[i]=this.emitter,e},a.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var a=this.props.value,t=e.value,o=void 0;((s=a)===(r=t)?0!==s||1/s==1/r:s!=s&&r!=r)?o=0:(o="function"==typeof n?n(a,t):l,0!=(o|=0)&&this.emitter.set(e.value,o))}var s,r},a.prototype.render=function(){return this.props.children},a}(t.Component);u.childContextTypes=((a={})[i]=o.default.object.isRequired,a);var d=function(n){function a(){var e,t;p(this,a);for(var o=arguments.length,s=Array(o),r=0;r<o;r++)s[r]=arguments[r];return e=t=m(this,n.call.apply(n,[this].concat(s))),t.state={value:t.getValue()},t.onUpdate=function(e,n){0!=((0|t.observedBits)&n)&&t.setState({value:t.getValue()})},m(t,e)}return c(a,n),a.prototype.componentWillReceiveProps=function(e){var n=e.observedBits;this.observedBits=void 0===n||null===n?l:n},a.prototype.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?l:e},a.prototype.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},a.prototype.getValue=function(){return this.context[i]?this.context[i].get():e},a.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},a}(t.Component);return d.contextTypes=((r={})[i]=o.default.object,r),{Provider:u,Consumer:d}},e.exports=n.default},428:function(e,n,a){"use strict";(function(n){var a="__global_unique_id__";e.exports=function(){return n[a]=(n[a]||0)+1}}).call(n,a(262))},429:function(e,n,a){"use strict";var t=a(263);e.exports=t}})});