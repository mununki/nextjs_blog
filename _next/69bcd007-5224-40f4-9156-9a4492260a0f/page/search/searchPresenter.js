module.exports=__NEXT_REGISTER_PAGE("/search/searchPresenter",function(){return{page:webpackJsonp([10],{162:function(e,n,t){"use strict";n.a="\nul {\n  list-style-type: none;\n  padding: 0;\n  text-align: center;\n  margin-bottom: 0;\n}\nul li {\n  display: inline-block;\n  padding: 2px 10px;\n  margin: 0px 5px;\n}\nul li a {\n  color: #aaa;\n  text-decoration: none;\n}\nul li a:hover {\n  color: #000;\n}\n.current-page {\n  color: #000;\n  border-bottom: 3px solid #343d46;\n}\n.container {\n  height: calc(100vh - 282px);\n}\n.post-list {\n  background-color: #fff;\n  border: 1px solid #eee;\n  padding: 20px;\n  margin-bottom: 50px;\n  border-radius: 5px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.post{\n  padding: 10px;\n}\n.post a {\n  display: flex;\n  color: black;\n  justify-content: space-between;\n  text-decoration: none;\n}\n.post a .post-title {\n  font-size: 1.2rem;\n}\n.post a .post-title:hover {\n  font-size: 1.2rem;\n  text-decoration: underline;\n}\n.post a .post-createdAt {\n  width: 150px;\n  color: #999;\n  font-size: 0.8rem;\n  vertical-align: baseline;\n  text-align: right;\n}\n"},199:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),o=t.n(a),r=t(137),l=t.n(r),c=t(162);n.default=function(e){var n=e.posts;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"content"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"post-list"},n.length>0?n.map(function(e,n){return o.a.createElement("div",{key:n,className:"post"},o.a.createElement(l.a,{href:"/post/".concat(e.category[0].toLowerCase(),"/").concat(e.filename)},o.a.createElement("a",null,o.a.createElement("span",{className:"post-title"},e.title),o.a.createElement("span",{className:"post-createdAt"},o.a.createElement("i",{className:"far fa-calendar-alt"})," "+e.createdAt))))}):o.a.createElement("div",null,"No result...")))),o.a.createElement("style",{jsx:"true"},c.a))}},426:function(e,n,t){e.exports=t(199)}},[426]).default}});