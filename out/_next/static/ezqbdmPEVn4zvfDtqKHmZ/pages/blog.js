(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{15:function(t,e,r){"use strict";var n=r(2),a=r.n(n),i=r(6),s=r.n(i),o=r(9),l=r.n(o),u=r(0),c=r.n(u);e.a=function(t){var e=t.post;return c.a.createElement("div",{key:e.title,className:"jsx-2496144457 post-container"},c.a.createElement("div",{style:{backgroundImage:e.thumb?"url(/static/images/post_img/".concat(e.thumb,")"):"url(/static/images/post_img/dummy_thumb.jpg)"},className:"jsx-2496144457 post-img-container"}),c.a.createElement("div",{className:"jsx-2496144457 post-body"},c.a.createElement("div",{className:"jsx-2496144457 post-title"},c.a.createElement(l.a,{href:"/post/".concat(e.filename)},c.a.createElement("a",{className:"jsx-2496144457"},e.title))),c.a.createElement("div",{className:"jsx-2496144457 post-subtitle"},e.slug),c.a.createElement("div",{className:"jsx-2496144457 post-createdAt"},s()(e.createdAt).format("MMM D, YYYY"))),c.a.createElement(a.a,{styleId:"2496144457",css:[".post-container.jsx-2496144457{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:1rem;}",".post-img-container.jsx-2496144457{min-width:150px;height:150px;background-size:cover;background-repeat:no-repeat;background-position:center;}",".post-body.jsx-2496144457{display:inline-block;margin:0 1rem;}",'.post-title.jsx-2496144457{font-family:"Ubuntu","Helvetica Neue",Helvetica,Arial, sans-serif;font-size:1.5rem;font-weight:700;margin:1rem 0 0.5rem 0;}',".post-subtitle.jsx-2496144457{color:grey;}",".post-createdAt.jsx-2496144457{margin:1rem 0 0 0;}","@media (max-width:576px){.post-container.jsx-2496144457{display:block;margin:1rem;}}"]}))}},26:function(t,e,r){"use strict";var n=r(22),a=r(8);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(r(27)),s=a(r(34)),o=a(r(10)),l=a(r(11)),u=a(r(18)),c=a(r(19)),d=a(r(20)),h=a(r(31)),f=a(r(14)),m=r(44),p=n(r(0)),g=(a(r(25)),n(r(21))),y=r(23);var v=function(t){function e(){var t,r,n,a,i,l;(0,o.default)(this,e);for(var d=arguments.length,p=new Array(d),v=0;v<d;v++)p[v]=arguments[v];return r=(0,u.default)(this,(t=(0,c.default)(e)).call.apply(t,[this].concat(p))),(0,f.default)((0,h.default)((0,h.default)(r)),"formatUrls",(n=function(t,e){return{href:t&&"object"===(0,s.default)(t)?(0,m.format)(t):t,as:e&&"object"===(0,s.default)(e)?(0,m.format)(e):e}},a=null,i=null,l=null,function(t,e){if(t===a&&e===i)return l;var r=n(t,e);return a=t,i=e,l=r,r})),(0,f.default)((0,h.default)((0,h.default)(r)),"linkClicked",function(t){var e=t.currentTarget,n=e.nodeName,a=e.target;if("A"!==n||!(a&&"_self"!==a||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=r.formatUrls(r.props.href,r.props.as),s=i.href,o=i.as;if(function(t){var e=(0,m.parse)(t,!1,!0),r=(0,m.parse)((0,y.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===r.protocol&&e.host===r.host}(s)){var l=window.location.pathname;s=(0,m.resolve)(l,s),o=o?(0,m.resolve)(l,o):s,t.preventDefault();var u=r.props.scroll;null==u&&(u=o.indexOf("#")<0);var c=r.props.replace?"replace":"push";g.default[c](s,o,{shallow:r.props.shallow}).then(function(t){t&&u&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){r.props.onError&&r.props.onError(t)})}}}),r}return(0,d.default)(e,t),(0,l.default)(e,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(t){(0,i.default)(this.props.href)!==(0,i.default)(t.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href,r=(0,m.resolve)(t,e);g.default.prefetch(r)}}},{key:"render",value:function(){var t=this,e=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,a=r.as;"string"==typeof e&&(e=p.default.createElement("a",null,e));var i=p.Children.only(e),s={onClick:function(e){i.props&&"function"==typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=a||n),s.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(s.href=(0,g._rewriteUrlForNextExport)(s.href)),p.default.cloneElement(i,s)}}]),e}(p.Component);e.default=v},27:function(t,e,r){t.exports=r(28)},273:function(t,e,r){__NEXT_REGISTER_PAGE("/blog",function(){return t.exports=r(274),{page:t.exports.default}})},274:function(t,e,r){"use strict";r.r(e);var n=r(95);e.default=n.default},28:function(t,e,r){var n=r(3),a=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},4:function(t,e,r){"use strict";var n=r(2),a=r.n(n),i=r(0),s=r.n(i);e.a=function(){return s.a.createElement("div",{id:"header",className:"jsx-3072866633"},s.a.createElement("div",{className:"jsx-3072866633 container"},s.a.createElement("div",{className:"jsx-3072866633 header-container"},s.a.createElement("div",{id:"header-title",className:"jsx-3072866633"},s.a.createElement("a",{href:"/",className:"jsx-3072866633"},"Build the Codes")),s.a.createElement("div",{id:"header-body",className:"jsx-3072866633"},s.a.createElement("div",{id:"avatar-img",style:{backgroundImage:'url("/static/images/avatar/moondaddi_avatar.jpg")'},className:"jsx-3072866633"}),s.a.createElement("div",{id:"profile",className:"jsx-3072866633"},s.a.createElement("div",{id:"name",className:"jsx-3072866633"},s.a.createElement("a",{href:"/",className:"jsx-3072866633"},"moondaddi")),s.a.createElement("div",{className:"jsx-3072866633"},"My dreams with Codes")),s.a.createElement("div",{id:"menu",className:"jsx-3072866633"})))),s.a.createElement(a.a,{styleId:"3072866633",css:["#header.jsx-3072866633{background-color:var(--background-color);color:white;}",".header-container.jsx-3072866633{margin:0 1rem;padding:1rem 0;}","#header-title.jsx-3072866633{display:block;position:relative;font-family:var(--text-san-serif);font-size:1.7rem;margin:1rem auto;font-weight:bold;}","#header-title.jsx-3072866633 a.jsx-3072866633{color:white;-webkit-text-decoration:none;text-decoration:none;}","#avatar-img.jsx-3072866633{display:inline-block;-webkit-border-radius:25px;-moz-border-radius:25px;border-radius:25px;width:50px;height:50px;background-size:contain;background-repeat:no-repeat;background-position:center center;vertical-align:middle;}","#profile.jsx-3072866633{display:inline-block;vertical-align:middle;padding-left:1rem;font-family:$font-serif;color:$text-normal-color;font-size:0.9rem;}","#header-body.jsx-3072866633{position:relative;}","#menu.jsx-3072866633{display:inline-block;position:absolute;right:0;font-family:$font-serif;font-size:0.9rem;margin-top:1rem;}","#menu.jsx-3072866633 #header-tag.jsx-3072866633{display:inline-block;margin:auto 1rem;}","@media (max-width:576px){#menu.jsx-3072866633{display:block;text-align:right;position:relative;}}"]}))}},52:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),i=r(5),s=r(4),o=r(15);e.default=function(t){var e=t.posts;return a.a.createElement(a.a.Fragment,null,a.a.createElement(s.a,null),a.a.createElement("div",{id:"content"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{id:"content-index"},e&&e.map(function(t){return a.a.createElement(o.a,{key:t.title,post:t})})))),a.a.createElement(i.a,null))}},6:function(t,e,r){t.exports=function(){"use strict";var t="millisecond",e="second",r="minute",n="hour",a="day",i="week",s="month",o="year",l=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,u=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},d={s:c,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),a=r%60;return(e<=0?"+":"-")+c(n,2,"0")+":"+c(a,2,"0")},m:function(t,e){var r=12*(e.year()-t.year())+(e.month()-t.month()),n=t.clone().add(r,s),a=e-n<0,i=t.clone().add(r+(a?-1:1),s);return Number(-(r+(e-n)/(a?n-i:i-n))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(l){return{M:s,y:o,w:i,d:a,h:n,m:r,s:e,ms:t}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f="en",m={};m[f]=h;var p=function(t){return t instanceof b},g=function(t,e,r){var n;if(!t)return null;if("string"==typeof t)m[t]&&(n=t),e&&(m[t]=e,n=t);else{var a=t.name;m[a]=t,n=a}return r||(f=n),n},y=function(t,e,r){if(p(t))return t.clone();var n=e?"string"==typeof e?{format:e,pl:r}:e:{};return n.date=t,new b(n)},v=d;v.l=g,v.i=p,v.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u})};var b=function(){function c(t){this.$L=this.$L||g(t.locale,null,!0)||f,this.parse(t)}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(v.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(l);if(n)return r?new Date(Date.UTC(n[1],n[2]-1,n[3]||1,n[4]||0,n[5]||0,n[6]||0,n[7]||0)):new Date(n[1],n[2]-1,n[3]||1,n[4]||0,n[5]||0,n[6]||0,n[7]||0)}return new Date(e)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return v},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,e){var r=y(t);return this.startOf(e)<=r&&r<=this.endOf(e)},d.isAfter=function(t,e){return y(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<y(t)},d.$g=function(t,e,r){return v.u(t)?this[e]:this.set(r,t)},d.year=function(t){return this.$g(t,"$y",o)},d.month=function(t){return this.$g(t,"$M",s)},d.day=function(t){return this.$g(t,"$W",a)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",n)},d.minute=function(t){return this.$g(t,"$m",r)},d.second=function(t){return this.$g(t,"$s",e)},d.millisecond=function(e){return this.$g(e,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,l){var u=this,c=!!v.u(l)||l,d=v.p(t),h=function(t,e){var r=v.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return c?r:r.endOf(a)},f=function(t,e){return v.w(u.toDate()[t].apply(u.toDate(),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},m=this.$W,p=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case o:return c?h(1,0):h(31,11);case s:return c?h(1,p):h(0,p+1);case i:var b=this.$locale().weekStart||0,w=(m<b?m+7:m)-b;return h(c?g-w:g+(6-w),p);case a:case"date":return f(y+"Hours",0);case n:return f(y+"Minutes",1);case r:return f(y+"Seconds",2);case e:return f(y+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(i,l){var u,c=v.p(i),d="set"+(this.$u?"UTC":""),h=(u={},u[a]=d+"Date",u.date=d+"Date",u[s]=d+"Month",u[o]=d+"FullYear",u[n]=d+"Hours",u[r]=d+"Minutes",u[e]=d+"Seconds",u[t]=d+"Milliseconds",u)[c],f=c===a?this.$D+(l-this.$W):l;return this.$d[h]&&this.$d[h](f),this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.add=function(t,l){var u,c=this;t=Number(t);var d=v.p(l),h=function(e,r){var n=c.clone().set("date",1).set(e,r+t);return n.set("date",Math.min(c.$D,n.daysInMonth()))},f=function(e){var r=new Date(c.$d);return r.setDate(r.getDate()+e*t),v.w(r,c)};if(d===s)return h(s,this.$M);if(d===o)return h(o,this.$y);if(d===a)return f(1);if(d===i)return f(7);var m=(u={},u[r]=6e4,u[n]=36e5,u[e]=1e3,u)[d]||1,p=this.valueOf()+t*m;return v.w(p,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var r=t||"YYYY-MM-DDTHH:mm:ssZ",n=v.z(this),a=this.$locale(),i=a.weekdays,s=a.months,o=function(t,e,r,n){return t&&t[e]||r[e].substr(0,n)},l=function(t){return v.s(e.$H%12||12,t,"0")},c={YY:String(this.$y).slice(-2),YYYY:String(this.$y),M:String(this.$M+1),MM:v.s(this.$M+1,2,"0"),MMM:o(a.monthsShort,this.$M,s,3),MMMM:s[this.$M],D:String(this.$D),DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:o(a.weekdaysMin,this.$W,i,2),ddd:o(a.weekdaysShort,this.$W,i,3),dddd:i[this.$W],H:String(this.$H),HH:v.s(this.$H,2,"0"),h:l(1),hh:l(2),a:this.$H<12?"am":"pm",A:this.$H<12?"AM":"PM",m:String(this.$m),mm:v.s(this.$m,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:n};return r.replace(u,function(t){return t.indexOf("[")>-1?t.replace(/\[|\]/g,""):c[t]||n.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,l,u){var c,d=v.p(l),h=y(t),f=6e4*(h.utcOffset()-this.utcOffset()),m=this-h,p=v.m(this,h);return p=(c={},c[o]=p/12,c[s]=p,c.quarter=p/3,c[i]=(m-f)/6048e5,c[a]=(m-f)/864e5,c[n]=m/36e5,c[r]=m/6e4,c[e]=m/1e3,c)[d]||m,u?p:v.a(p)},d.daysInMonth=function(){return this.endOf(s).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var r=this.clone();return r.$L=g(t,e,!0),r},d.clone=function(){return v.w(this.toDate(),this)},d.toDate=function(){return new Date(this.$d)},d.toJSON=function(){return this.toISOString()},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return y.prototype=b.prototype,y.extend=function(t,e){return t(e,b,y),y},y.locale=g,y.isDayjs=p,y.unix=function(t){return y(1e3*t)},y.en=m[f],y.Ls=m,y}()},7:function(t,e){t.exports=[{title:"Commands for Postgres DB initial Setup",createdAt:"2019-02-25",filename:"2019-02-25-Commands-for-Postgres-DB-setup",category:["backend"],tag:["postgres","db"],thumb:"2019-02-25_thumb.jpg",slug:"Create DB, TABLE, USER, permission"},{title:"Kill the process using port",createdAt:"2019-03-05",filename:"2019-03-05-Kill-Process-Using-Port",category:["devlogs"],tag:["macos","kill","port"],thumb:"2019-03-05_thumb.jpg",slug:"Kill the process occupying the TCP port in abnormal and unintended way."},{title:"File upload with GraphQL Apollo client & Django + Graphene",createdAt:"2018-08-28",filename:"2018-08-28-File-upload-with-GraphQL-Apollo-Client-Django-Graphene",category:["django"],tag:["django","graphql","graphene","apollo"],thumb:"2018-08-28_thumb.png",slug:"The Graphene is the pain."},{title:"Nested Comment Reply stucture with ReactJS",createdAt:"2018-08-31",filename:"2018-08-31-Nested-Comment-Reply-sturcture-with-ReactJS",category:["react"],tag:["react","comment"],thumb:"2018-08-31_thumb.jpg",slug:"Comment structure implementation"},{title:"Markdown summary",createdAt:"2018-08-24",filename:"2018-08-24-Markdown-summary",category:["devlogs"],tag:["markdown","summary"],thumb:"2018-08-24_thumb.png",slug:"Hard to remember"},{title:"First post",createdAt:"2018-08-24",filename:"2018-08-24-First-Post",category:["devlogs"],tag:["first","post"],thumb:"2018-08-24_thumb.jpg",slug:"A late start, but a Big step forward"},{title:"How to set state with data from apollo grapqhQL query",createdAt:"2018-09-08",filename:"2018-09-08-How-to-set-state-with-data-from-graphQL-query",category:["react"],tag:["react","apollo","graphQL"],thumb:"2018-09-08_thumb.png",slug:"Prefill the data before component rendered"},{title:"How to Deploy the Next.js app to AWS Lambda",createdAt:"2019-01-11",filename:"2019-01-11-Deploy-Nextjs-app-to-AWS-Lambda",category:["react"],tag:["next","aws","lambda"],thumb:"2019-01-11_thumb.png",slug:"with Apex up"},{title:"How to replace the React Redux with Hooks",createdAt:"2019-02-11",filename:"2019-02-11-How-to-Replace-Redux-with-Hooks",category:["react"],tag:["hooks","redux"],thumb:"2019-02-11_thumb.png",slug:"React release the game-changer departing from Class programming way."},{title:"AWS Elastic Beanstalk makes redirect HTTP to HTTPS",createdAt:"2018-12-18",filename:"2018-12-18-AWS-EB-Load-Balancer-redirect-to-https",category:["backend"],tag:["aws","eb","elastic","beanstalk","redirect","https"],thumb:"2018-12-18_thumb.jpg",slug:"Sweet beanstalk"},{title:"Deploy the Prisma Server to AWS ECS and EC2 with Docker",createdAt:"2018-12-24",filename:"2018-12-24-Deploy-Prisma-Server-to-AWS-with-Docker",category:["backend"],tag:["aws","graphql","prisma","ecs"],thumb:"2018-12-24_thumb.png",slug:"Fix the bugs!"},{title:"Making virtualenv for staring Django project on MacOS",createdAt:"2018-08-25",filename:"2018-08-25-Making-virtualenv-for-Django",category:["django"],tag:["django","venv","virtualenv"],thumb:"2018-08-25_thumb.jpg",slug:"Hard to remember #2"},{title:"Some different ways to align element to vertical center",createdAt:"2018-08-30",filename:"2018-08-30-How-to-align-element-to-vertical-center",category:["htmlcss"],tag:["vertical","align"],thumb:"2018-08-30_thumb.jpeg",slug:"A Markup is one of tough task in web dev."},{title:"How to highlight code in jekyll post",createdAt:"2018-09-01",filename:"2018-09-01-How-to-highlight-code-in-jekyll",category:["devlogs"],tag:["jekyll","blog"],thumb:"2018-09-01_thumb.jpeg",slug:"The jekyll for Github page, but no more use..."},{title:"How to connect to wireless WPA2 with Netplan",createdAt:"2018-12-10",filename:"2018-12-10-Netplan-how-to-connect-wpa2-linux",category:["devlogs"],tag:["netplan","linux","wireless"],thumb:"2018-12-10_thumb.png",slug:"Hard to remember #3"},{title:"postmaster-pid File Location",createdAt:"2018-09-27",filename:"2018-09-27-postmaster-pid-Location",category:["django"],tag:["postgres","postmaster","db"],thumb:"2018-09-27_thumb.png",slug:"What the hell is `postmaster.pid`?"}]},9:function(t,e,r){t.exports=r(26)},95:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),i=r(6),s=r.n(i),o=r(7),l=r.n(o),u=r(52);e.default=function(){l.a.sort(function(t,e){return s()(e.createdAt).unix()-s()(t.createdAt).unix()});var t=l.a;return a.a.createElement(u.default,{posts:t})}}},[[273,1,0]]]);