(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{13:function(t,e,r){t.exports=r(21)},15:function(t,e,r){"use strict";var a=r(2),n=r.n(a),i=r(6),s=r.n(i),o=r(9),l=r.n(o),u=r(0),c=r.n(u);e.a=function(t){var e=t.post;return c.a.createElement("div",{key:e.title,className:"jsx-2496144457 post-container"},c.a.createElement("div",{style:{backgroundImage:e.thumb?"url(/static/images/post_img/".concat(e.thumb,")"):"url(/static/images/post_img/dummy_thumb.jpg)"},className:"jsx-2496144457 post-img-container"}),c.a.createElement("div",{className:"jsx-2496144457 post-body"},c.a.createElement("div",{className:"jsx-2496144457 post-title"},c.a.createElement(l.a,{href:"/post/".concat(e.filename)},c.a.createElement("a",{className:"jsx-2496144457"},e.title))),c.a.createElement("div",{className:"jsx-2496144457 post-subtitle"},e.slug),c.a.createElement("div",{className:"jsx-2496144457 post-createdAt"},s()(e.createdAt).format("MMM D, YYYY"))),c.a.createElement(n.a,{styleId:"2496144457",css:[".post-container.jsx-2496144457{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:1rem;}",".post-img-container.jsx-2496144457{min-width:150px;height:150px;background-size:cover;background-repeat:no-repeat;background-position:center;}",".post-body.jsx-2496144457{display:inline-block;margin:0 1rem;}",'.post-title.jsx-2496144457{font-family:"Ubuntu","Helvetica Neue",Helvetica,Arial, sans-serif;font-size:1.5rem;font-weight:700;margin:1rem 0 0.5rem 0;}',".post-subtitle.jsx-2496144457{color:grey;}",".post-createdAt.jsx-2496144457{margin:1rem 0 0 0;}","@media (max-width:576px){.post-container.jsx-2496144457{display:block;margin:1rem;}}"]}))}},26:function(t,e,r){"use strict";var a=r(22),n=r(8);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(r(27)),s=n(r(34)),o=n(r(10)),l=n(r(11)),u=n(r(18)),c=n(r(19)),m=n(r(20)),d=n(r(31)),f=n(r(14)),h=r(44),p=a(r(0)),g=(n(r(25)),a(r(21))),v=r(23);var y=function(t){function e(){var t,r,a,n,i,l;(0,o.default)(this,e);for(var m=arguments.length,p=new Array(m),y=0;y<m;y++)p[y]=arguments[y];return r=(0,u.default)(this,(t=(0,c.default)(e)).call.apply(t,[this].concat(p))),(0,f.default)((0,d.default)((0,d.default)(r)),"formatUrls",(a=function(t,e){return{href:t&&"object"===(0,s.default)(t)?(0,h.format)(t):t,as:e&&"object"===(0,s.default)(e)?(0,h.format)(e):e}},n=null,i=null,l=null,function(t,e){if(t===n&&e===i)return l;var r=a(t,e);return n=t,i=e,l=r,r})),(0,f.default)((0,d.default)((0,d.default)(r)),"linkClicked",function(t){var e=t.currentTarget,a=e.nodeName,n=e.target;if("A"!==a||!(n&&"_self"!==n||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=r.formatUrls(r.props.href,r.props.as),s=i.href,o=i.as;if(function(t){var e=(0,h.parse)(t,!1,!0),r=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===r.protocol&&e.host===r.host}(s)){var l=window.location.pathname;s=(0,h.resolve)(l,s),o=o?(0,h.resolve)(l,o):s,t.preventDefault();var u=r.props.scroll;null==u&&(u=o.indexOf("#")<0);var c=r.props.replace?"replace":"push";g.default[c](s,o,{shallow:r.props.shallow}).then(function(t){t&&u&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){r.props.onError&&r.props.onError(t)})}}}),r}return(0,m.default)(e,t),(0,l.default)(e,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(t){(0,i.default)(this.props.href)!==(0,i.default)(t.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href,r=(0,h.resolve)(t,e);g.default.prefetch(r)}}},{key:"render",value:function(){var t=this,e=this.props.children,r=this.formatUrls(this.props.href,this.props.as),a=r.href,n=r.as;"string"==typeof e&&(e=p.default.createElement("a",null,e));var i=p.Children.only(e),s={onClick:function(e){i.props&&"function"==typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=n||a),s.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(s.href=(0,g._rewriteUrlForNextExport)(s.href)),p.default.cloneElement(i,s)}}]),e}(p.Component);e.default=y},27:function(t,e,r){t.exports=r(28)},28:function(t,e,r){var a=r(3),n=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}},293:function(t,e,r){__NEXT_REGISTER_PAGE("/tag/tagContainer",function(){return t.exports=r(98),{page:t.exports.default}})},4:function(t,e,r){"use strict";var a=r(2),n=r.n(a),i=r(0),s=r.n(i);e.a=function(){return s.a.createElement("div",{id:"header",className:"jsx-583156192"},s.a.createElement("div",{className:"jsx-583156192 container"},s.a.createElement("div",{className:"jsx-583156192 header-container"},s.a.createElement("div",{id:"header-title",className:"jsx-583156192"},s.a.createElement("a",{href:"/",className:"jsx-583156192"},"Build the Codes")),s.a.createElement("div",{id:"header-body",className:"jsx-583156192"},s.a.createElement("div",{id:"avatar-img",style:{backgroundImage:'url("/static/images/avatar/moondaddi_avatar.jpg")'},className:"jsx-583156192"}),s.a.createElement("div",{id:"profile",className:"jsx-583156192"},s.a.createElement("div",{id:"name",className:"jsx-583156192"},s.a.createElement("a",{href:"/",className:"jsx-583156192"},"moondaddi")),s.a.createElement("div",{className:"jsx-583156192"},"My dreams with Codes")),s.a.createElement("div",{id:"menu",className:"jsx-583156192"},s.a.createElement("div",{id:"header-tag",className:"jsx-583156192"},s.a.createElement("a",{href:"/tag",className:"jsx-583156192"},"Tags")))))),s.a.createElement(n.a,{styleId:"583156192",css:["#header.jsx-583156192{background-color:var(--background-color);color:white;}",".header-container.jsx-583156192{margin:0 1rem;padding:1rem 0;}","#header-title.jsx-583156192{display:block;position:relative;font-family:var(--text-san-serif);font-size:1.7rem;margin:1rem auto;font-weight:bold;}","#header-title.jsx-583156192 a.jsx-583156192{color:white;-webkit-text-decoration:none;text-decoration:none;}","#avatar-img.jsx-583156192{display:inline-block;-webkit-border-radius:25px;-moz-border-radius:25px;border-radius:25px;width:50px;height:50px;background-size:contain;background-repeat:no-repeat;background-position:center center;vertical-align:middle;}","#profile.jsx-583156192{display:inline-block;vertical-align:middle;padding-left:1rem;font-family:$font-serif;color:$text-normal-color;font-size:0.9rem;}","#header-body.jsx-583156192{position:relative;}","#menu.jsx-583156192{display:inline-block;position:absolute;right:0;font-family:$font-serif;font-size:0.9rem;margin-top:1rem;}","#menu.jsx-583156192 #header-tag.jsx-583156192{display:inline-block;margin:auto 1rem;}"]}))}},53:function(t,e,r){"use strict";r.r(e);var a=r(2),n=r.n(a),i=r(0),s=r.n(i),o=r(5),l=r(4),u=r(15);e.default=function(t){var e=t.posts;return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,null),s.a.createElement("div",{id:"content",className:"jsx-3186059871"},s.a.createElement("div",{className:"jsx-3186059871 container"},s.a.createElement("div",{className:"jsx-3186059871 post-list"},e.length>0?e.map(function(t){return s.a.createElement(u.a,{key:t.title,post:t})}):s.a.createElement("div",{className:"jsx-3186059871"},"No result..."))),s.a.createElement(n.a,{styleId:"3186059871",css:["#content.jsx-3186059871{min-height:100vh;}"]})),s.a.createElement(o.a,null))}},56:function(t,e,r){"use strict";r.r(e);var a=r(2),n=r.n(a),i=r(9),s=r.n(i),o=r(13),l=r(0),u=r.n(l),c=r(5),m=r(4),d=r(7),f=r.n(d);function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],a=!0,n=!1,i=void 0;try{for(var s,o=t[Symbol.iterator]();!(a=(s=o.next()).done)&&(r.push(s.value),!e||r.length!==e);a=!0);}catch(t){n=!0,i=t}finally{try{a||null==o.return||o.return()}finally{if(n)throw i}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t}).apply(this,arguments)}function g(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.default=Object(o.withRouter)(function(t){var e,r,a,i,o=(e="",r=h(Object(l.useState)(e),2),a=r[0],i=r[1],{value:a,onChange:function(t){i(t.target.value)}});return u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,null),u.a.createElement("div",{id:"tag",className:"jsx-778206186"},u.a.createElement("div",{className:"jsx-778206186 container"},u.a.createElement("form",{onSubmit:function(){return e="/tag/".concat(o.value),void(t.router&&t.router.push(e));var e},className:"jsx-778206186"},u.a.createElement("div",{className:"jsx-778206186 input-container"},u.a.createElement("span",{id:"tag-search-icon",className:"jsx-778206186"},u.a.createElement("i",{className:"jsx-778206186 fas fa-search"})),u.a.createElement("input",p({type:"text"},o,{autoFocus:!0,className:"jsx-778206186 "+(null!=o.className&&o.className||"tag-input")})))),u.a.createElement("div",{className:"jsx-778206186 tag-list-container"},u.a.createElement("div",{className:"jsx-778206186 tag-title"},"🗄"),f.a.reduce(function(t,e){return g(new Set([].concat(g(t),g(e.tag))))},[]).map(function(t){return!o.value||t.includes(o.value)?u.a.createElement("div",{key:t,className:"jsx-778206186 tag-item"},u.a.createElement(s.a,{href:"/tag/".concat(t)},u.a.createElement("a",{className:"jsx-778206186"},t))):null}))),u.a.createElement(n.a,{styleId:"778206186",css:["#tag.jsx-778206186{height:100vh;}",".input-container.jsx-778206186{margin-top:3rem;position:relative;}","#tag-search-icon.jsx-778206186{position:absolute;top:1.1rem;margin-left:1.5rem;font-size:2rem;color:var(--text-link-color);}",".tag-input.jsx-778206186{margin:1rem 1rem;font-size:2rem;width:100%;border:none;font-family:var(--text-serif);border-bottom:2px var(--text-link-color) solid;outline:none;padding-left:50px;padding-bottom:10px;}",".tag-list-container.jsx-778206186{margin:1rem;}",".tag-title.jsx-778206186{font-size:2rem;margin:1rem 0;}",".tag-item.jsx-778206186{display:inline-block;margin:0.5rem;font-size:1.2rem;}"]})),u.a.createElement(c.a,null))})},6:function(t,e,r){t.exports=function(){"use strict";var t="millisecond",e="second",r="minute",a="hour",n="day",i="week",s="month",o="year",l=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,u=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,e,r){var a=String(t);return!a||a.length>=e?t:""+Array(e+1-a.length).join(r)+t},m={s:c,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),a=Math.floor(r/60),n=r%60;return(e<=0?"+":"-")+c(a,2,"0")+":"+c(n,2,"0")},m:function(t,e){var r=12*(e.year()-t.year())+(e.month()-t.month()),a=t.clone().add(r,s),n=e-a<0,i=t.clone().add(r+(n?-1:1),s);return Number(-(r+(e-a)/(n?a-i:i-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(l){return{M:s,y:o,w:i,d:n,h:a,m:r,s:e,ms:t}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f="en",h={};h[f]=d;var p=function(t){return t instanceof b},g=function(t,e,r){var a;if(!t)return null;if("string"==typeof t)h[t]&&(a=t),e&&(h[t]=e,a=t);else{var n=t.name;h[n]=t,a=n}return r||(f=a),a},v=function(t,e,r){if(p(t))return t.clone();var a=e?"string"==typeof e?{format:e,pl:r}:e:{};return a.date=t,new b(a)},y=m;y.l=g,y.i=p,y.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u})};var b=function(){function c(t){this.$L=this.$L||g(t.locale,null,!0)||f,this.parse(t)}var m=c.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var a=e.match(l);if(a)return r?new Date(Date.UTC(a[1],a[2]-1,a[3]||1,a[4]||0,a[5]||0,a[6]||0,a[7]||0)):new Date(a[1],a[2]-1,a[3]||1,a[4]||0,a[5]||0,a[6]||0,a[7]||0)}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return y},m.isValid=function(){return!("Invalid Date"===this.$d.toString())},m.isSame=function(t,e){var r=v(t);return this.startOf(e)<=r&&r<=this.endOf(e)},m.isAfter=function(t,e){return v(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<v(t)},m.$g=function(t,e,r){return y.u(t)?this[e]:this.set(r,t)},m.year=function(t){return this.$g(t,"$y",o)},m.month=function(t){return this.$g(t,"$M",s)},m.day=function(t){return this.$g(t,"$W",n)},m.date=function(t){return this.$g(t,"$D","date")},m.hour=function(t){return this.$g(t,"$H",a)},m.minute=function(t){return this.$g(t,"$m",r)},m.second=function(t){return this.$g(t,"$s",e)},m.millisecond=function(e){return this.$g(e,"$ms",t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,l){var u=this,c=!!y.u(l)||l,m=y.p(t),d=function(t,e){var r=y.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return c?r:r.endOf(n)},f=function(t,e){return y.w(u.toDate()[t].apply(u.toDate(),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},h=this.$W,p=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(m){case o:return c?d(1,0):d(31,11);case s:return c?d(1,p):d(0,p+1);case i:var b=this.$locale().weekStart||0,x=(h<b?h+7:h)-b;return d(c?g-x:g+(6-x),p);case n:case"date":return f(v+"Hours",0);case a:return f(v+"Minutes",1);case r:return f(v+"Seconds",2);case e:return f(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(i,l){var u,c=y.p(i),m="set"+(this.$u?"UTC":""),d=(u={},u[n]=m+"Date",u.date=m+"Date",u[s]=m+"Month",u[o]=m+"FullYear",u[a]=m+"Hours",u[r]=m+"Minutes",u[e]=m+"Seconds",u[t]=m+"Milliseconds",u)[c],f=c===n?this.$D+(l-this.$W):l;return this.$d[d]&&this.$d[d](f),this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.add=function(t,l){var u,c=this;t=Number(t);var m=y.p(l),d=function(e,r){var a=c.clone().set("date",1).set(e,r+t);return a.set("date",Math.min(c.$D,a.daysInMonth()))},f=function(e){var r=new Date(c.$d);return r.setDate(r.getDate()+e*t),y.w(r,c)};if(m===s)return d(s,this.$M);if(m===o)return d(o,this.$y);if(m===n)return f(1);if(m===i)return f(7);var h=(u={},u[r]=6e4,u[a]=36e5,u[e]=1e3,u)[m]||1,p=this.valueOf()+t*h;return y.w(p,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var r=t||"YYYY-MM-DDTHH:mm:ssZ",a=y.z(this),n=this.$locale(),i=n.weekdays,s=n.months,o=function(t,e,r,a){return t&&t[e]||r[e].substr(0,a)},l=function(t){return y.s(e.$H%12||12,t,"0")},c={YY:String(this.$y).slice(-2),YYYY:String(this.$y),M:String(this.$M+1),MM:y.s(this.$M+1,2,"0"),MMM:o(n.monthsShort,this.$M,s,3),MMMM:s[this.$M],D:String(this.$D),DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:o(n.weekdaysMin,this.$W,i,2),ddd:o(n.weekdaysShort,this.$W,i,3),dddd:i[this.$W],H:String(this.$H),HH:y.s(this.$H,2,"0"),h:l(1),hh:l(2),a:this.$H<12?"am":"pm",A:this.$H<12?"AM":"PM",m:String(this.$m),mm:y.s(this.$m,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:a};return r.replace(u,function(t){return t.indexOf("[")>-1?t.replace(/\[|\]/g,""):c[t]||a.replace(":","")})},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(t,l,u){var c,m=y.p(l),d=v(t),f=6e4*(d.utcOffset()-this.utcOffset()),h=this-d,p=y.m(this,d);return p=(c={},c[o]=p/12,c[s]=p,c.quarter=p/3,c[i]=(h-f)/6048e5,c[n]=(h-f)/864e5,c[a]=h/36e5,c[r]=h/6e4,c[e]=h/1e3,c)[m]||h,u?p:y.a(p)},m.daysInMonth=function(){return this.endOf(s).$D},m.$locale=function(){return h[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var r=this.clone();return r.$L=g(t,e,!0),r},m.clone=function(){return y.w(this.toDate(),this)},m.toDate=function(){return new Date(this.$d)},m.toJSON=function(){return this.toISOString()},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},c}();return v.prototype=b.prototype,v.extend=function(t,e){return t(e,b,v),v},v.locale=g,v.isDayjs=p,v.unix=function(t){return v(1e3*t)},v.en=h[f],v.Ls=h,v}()},7:function(t,e){t.exports=[{title:"Commands for Postgres DB initial Setup",createdAt:"2019-02-25",filename:"2019-02-25-Commands-for-Postgres-DB-setup",category:["backend"],tag:["postgres","db"],thumb:"2019-02-25_thumb.jpg",slug:"Create DB, TABLE, USER, permission"},{title:"Kill the process using port",createdAt:"2019-03-05",filename:"2019-03-05-Kill-Process-Using-Port",category:["devlogs"],tag:["macos","kill","port"],thumb:"2019-03-05_thumb.jpg",slug:"Kill the process occupying the TCP port in abnormal and unintended way."},{title:"File upload with GraphQL Apollo client & Django + Graphene",createdAt:"2018-08-28",filename:"2018-08-28-File-upload-with-GraphQL-Apollo-Client-Django-Graphene",category:["django"],tag:["django","graphql","graphene","apollo"],thumb:"2018-08-28_thumb.png",slug:"The Graphene is the pain."},{title:"Nested Comment Reply stucture with ReactJS",createdAt:"2018-08-31",filename:"2018-08-31-Nested-Comment-Reply-sturcture-with-ReactJS",category:["react"],tag:["react","comment"],thumb:"2018-08-31_thumb.jpg",slug:"Comment structure implementation"},{title:"Markdown summary",createdAt:"2018-08-24",filename:"2018-08-24-Markdown-summary",category:["devlogs"],tag:["markdown","summary"],thumb:"2018-08-24_thumb.png",slug:"Hard to remember"},{title:"First post",createdAt:"2018-08-24",filename:"2018-08-24-First-Post",category:["devlogs"],tag:["first","post"],thumb:"2018-08-24_thumb.jpg",slug:"A late start, but a Big step forward"},{title:"How to set state with data from apollo grapqhQL query",createdAt:"2018-09-08",filename:"2018-09-08-How-to-set-state-with-data-from-graphQL-query",category:["react"],tag:["react","apollo","graphQL"],thumb:"2018-09-08_thumb.png",slug:"Prefill the data before component rendered"},{title:"How to Deploy the Next.js app to AWS Lambda",createdAt:"2019-01-11",filename:"2019-01-11-Deploy-Nextjs-app-to-AWS-Lambda",category:["react"],tag:["next","aws","lambda"],thumb:"2019-01-11_thumb.png",slug:"with Apex up"},{title:"How to replace the React Redux with Hooks",createdAt:"2019-02-11",filename:"2019-02-11-How-to-Replace-Redux-with-Hooks",category:["react"],tag:["hooks","redux"],thumb:"2019-02-11_thumb.png",slug:"React release the game-changer departing from Class programming way."},{title:"AWS Elastic Beanstalk makes redirect HTTP to HTTPS",createdAt:"2018-12-18",filename:"2018-12-18-AWS-EB-Load-Balancer-redirect-to-https",category:["backend"],tag:["aws","eb","elastic","beanstalk","redirect","https"],thumb:"2018-12-18_thumb.jpg",slug:"Sweet beanstalk"},{title:"Deploy the Prisma Server to AWS ECS and EC2 with Docker",createdAt:"2018-12-24",filename:"2018-12-24-Deploy-Prisma-Server-to-AWS-with-Docker",category:["backend"],tag:["aws","graphql","prisma","ecs"],thumb:"2018-12-24_thumb.png",slug:"Fix the bugs!"},{title:"Making virtualenv for staring Django project on MacOS",createdAt:"2018-08-25",filename:"2018-08-25-Making-virtualenv-for-Django",category:["django"],tag:["django","venv","virtualenv"],thumb:"2018-08-25_thumb.jpg",slug:"Hard to remember #2"},{title:"Some different ways to align element to vertical center",createdAt:"2018-08-30",filename:"2018-08-30-How-to-align-element-to-vertical-center",category:["htmlcss"],tag:["vertical","align"],thumb:"2018-08-30_thumb.jpeg",slug:"A Markup is one of tough task in web dev."},{title:"How to highlight code in jekyll post",createdAt:"2018-09-01",filename:"2018-09-01-How-to-highlight-code-in-jekyll",category:["devlogs"],tag:["jekyll","blog"],thumb:"2018-09-01_thumb.jpeg",slug:"The jekyll for Github page, but no more use..."},{title:"How to connect to wireless WPA2 with Netplan",createdAt:"2018-12-10",filename:"2018-12-10-Netplan-how-to-connect-wpa2-linux",category:["devlogs"],tag:["netplan","linux","wireless"],thumb:"2018-12-10_thumb.png",slug:"Hard to remember #3"},{title:"postmaster-pid File Location",createdAt:"2018-09-27",filename:"2018-09-27-postmaster-pid-Location",category:["django"],tag:["postgres","postmaster","db"],thumb:"2018-09-27_thumb.png",slug:"What the hell is `postmaster.pid`?"}]},9:function(t,e,r){t.exports=r(26)},98:function(t,e,r){"use strict";r.r(e);var a=r(0),n=r.n(a),i=r(6),s=r.n(i),o=r(13),l=r(7),u=r.n(l),c=r(53),m=r(56);e.default=Object(o.withRouter)(function(t){if(t.router&&t.router.query&&t.router.query.tag){var e=t.router.query.tag,r=u.a.filter(function(t){return t.tag.filter(function(t){return t===e}).length>0});return r.sort(function(t,e){return s()(e.createdAt).unix()-s()(t.createdAt).unix()}),r.length>0?n.a.createElement(c.default,{posts:r}):n.a.createElement("div",null,"404!")}return n.a.createElement(m.default,null)})}},[[293,1,0]]]);