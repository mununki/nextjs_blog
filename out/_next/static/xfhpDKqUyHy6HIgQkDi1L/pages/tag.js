(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"0tVQ":function(t,e,n){n("FlQf"),n("VJsP"),t.exports=n("WEpk").Array.from},"6Zw0":function(t,e,n){"use strict";n.r(e);var r=n("UXZV"),a=n.n(r);function i(){return(i=a.a||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var o=n("ttDY"),s=n.n(o),u=n("dfwq"),c=n("YFqc"),l=n.n(c),f=n("20a2"),d=n("q1tI"),h=n.n(d),m=n("IRSK"),g=n.n(m),p=(n("ix9M"),n("doui"));e.default=Object(f.withRouter)(function(t){var e,n,r,a,o,c=(e="",n=Object(d.useState)(e),r=Object(p.default)(n,2),a=r[0],o=r[1],{value:a,onChange:function(t){o(t.target.value)}});return h.a.createElement("div",{id:"tag"},h.a.createElement("div",{className:"container"},h.a.createElement("form",{onSubmit:function(){return e="/tag/".concat(c.value),void(t.router&&t.router.push(e));var e}},h.a.createElement("div",{className:"input-container"},h.a.createElement("span",{id:"tag-search-icon"},h.a.createElement("i",{className:"fas fa-search"})),h.a.createElement("input",i({type:"text",className:"tag-input"},c,{autoFocus:!0})))),h.a.createElement("div",{className:"tag-list-container"},h.a.createElement("div",{className:"tag-title"},"🗄"),g.a.reduce(function(t,e){return Object(u.default)(new s.a([].concat(Object(u.default)(t),Object(u.default)(e.tag))))},[]).map(function(t){return!c.value||t.includes(c.value)?h.a.createElement("div",{key:t,className:"tag-item"},h.a.createElement(l.a,{href:"/tag/".concat(t)},h.a.createElement("a",null,t))):null}))))})},AMKi:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r),i=n("YFqc"),o=n.n(i),s=n("ikY9");e.default=function(t){var e=t.posts;return a.a.createElement("div",{id:"content"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"post-list"},e.length>0?e.map(function(t){return a.a.createElement("div",{key:t.title,className:"post"},a.a.createElement(o.a,{href:"/post/".concat(t.category[0].toLowerCase(),"/").concat(t.filename)},a.a.createElement("a",null,a.a.createElement(s.a,{post:t}))))}):a.a.createElement("div",null,"No result..."))))}},IP1Z:function(t,e,n){"use strict";var r=n("2faE"),a=n("rr1i");t.exports=function(t,e,n){e in t?r.f(t,e,a(0,n)):t[e]=n}},IRSK:function(t,e,n){"use strict";t.exports=[{title:"Commands for Postgres DB initial Setup",createdAt:"2019-02-25",filename:"2019-02-25-Commands-for-Postgres-DB-setup",category:["backend"],tag:["postgres","db"],thumb:"2019-02-25_thumb.jpg",slug:"Create DB, TABLE, USER, permission"},{title:"Kill the process using port",createdAt:"2019-03-05",filename:"2019-03-05-Kill-Process-Using-Port",category:["devlogs"],tag:["macos","kill","port"],thumb:"2019-03-05_thumb.jpg",slug:"Kill the process occupying the TCP port in abnormal and unintended way."},{title:"File upload with GraphQL Apollo client & Django + Graphene",createdAt:"2018-08-28",filename:"2018-08-28-File-upload-with-GraphQL-Apollo-Client-Django-Graphene",category:["django"],tag:["django","graphql","graphene","apollo"]},{title:"Nested Comment Reply stucture with ReactJS",createdAt:"2018-08-31",filename:"2018-08-31-Nested-Comment-Reply-sturcture-with-ReactJS",category:["react"],tag:["react","comment"]},{title:"Markdown summary",createdAt:"2018-08-24",filename:"2018-08-24-Markdown-summary",category:["devlogs"],tag:["markdown","summary"]},{title:"First post",createdAt:"2018-08-24",filename:"2018-08-24-First-Post",category:["devlogs"],tag:["first","post"]},{title:"How to set state with data from apollo grapqhQL query",createdAt:"2018-09-08",filename:"2018-09-08-How-to-set-state-with-data-from-graphQL-query",category:["react"],tag:["react","apollo","graphQL"]},{title:"How to Deploy the Next.js app to AWS Lambda",createdAt:"2019-01-11",filename:"2019-01-11-Deploy-Nextjs-app-to-AWS-Lambda",category:["react"],tag:["next","aws","lambda"]},{title:"How to replace the React Redux with Hooks",createdAt:"2019-02-11",filename:"2019-02-11-How-to-Replace-Redux-with-Hooks",category:["react"],tag:["hooks","redux"],thumb:"2019-02-11_thumb.jpg",slug:"React release the game-changer departing from Class programming way."},{title:"AWS Elastic Beanstalk makes redirect HTTP to HTTPS",createdAt:"2018-12-18",filename:"2018-12-18-AWS-EB-Load-Balancer-redirect-to-https",category:["backend"],tag:["aws","eb","elastic","beanstalk","redirect","https"]},{title:"Deploy the Prisma Server to AWS ECS and EC2 with Docker",createdAt:"2018-12-24",filename:"2018-12-24-Deploy-Prisma-Server-to-AWS-with-Docker",category:["backend"],tag:["aws","graphql","prisma","ecs"]},{title:"Making virtualenv for staring Django project on MacOS",createdAt:"2018-08-25",filename:"2018-08-25-Making-virtualenv-for-Django",category:["django"],tag:["django","venv","virtualenv"]},{title:"Some different ways to align element to vertical center",createdAt:"2018-08-30",filename:"2018-08-30-How-to-align-element-to-vertical-center",category:["htmlcss"],tag:["vertical","align"]},{title:"How to highlight code in jekyll post",createdAt:"2018-09-01",filename:"2018-09-01-How-to-highlight-code-in-jekyll",category:["devlogs"],tag:["jekyll","blog"]},{title:"How to connect to wireless WPA2 with Netplan",createdAt:"2018-12-10",filename:"2018-12-10-Netplan-how-to-connect-wpa2-linux",category:["devlogs"],tag:["netplan","linux","wireless"]},{title:"postmaster-pid File Location",createdAt:"2018-09-27",filename:"2018-09-27-postmaster-pid-Location",category:["django"],tag:["postgres","postmaster","db"]}]},PSyh:function(t,e,n){"use strict";n.r(e);var r=n("n8Eq");e.default=r.default},VJsP:function(t,e,n){"use strict";var r=n("2GTP"),a=n("Y7ZC"),i=n("JB68"),o=n("sNwI"),s=n("NwJ3"),u=n("tEej"),c=n("IP1Z"),l=n("fNZA");a(a.S+a.F*!n("TuGD")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,a,f,d=i(t),h="function"==typeof this?this:Array,m=arguments.length,g=m>1?arguments[1]:void 0,p=void 0!==g,v=0,y=l(d);if(p&&(g=r(g,m>2?arguments[2]:void 0,2)),null==y||h==Array&&s(y))for(n=new h(e=u(d.length));e>v;v++)c(n,v,p?g(d[v],v):d[v]);else for(f=y.call(d),n=new h;!(a=f.next()).done;v++)c(n,v,p?o(f,g,[a.value,v],!0):a.value);return n.length=v,n}})},VKFn:function(t,e,n){n("bBy9"),n("FlQf"),t.exports=n("ldVq")},VT7f:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tag",function(){var t=n("PSyh");return{page:t.default||t}}])},Wgwc:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",a="day",i="week",o="month",s="year",u=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,c=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},f={s:l,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),a=n%60;return(e<=0?"+":"-")+l(r,2,"0")+":"+l(a,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,o),a=e-r<0,i=t.clone().add(n+(a?-1:1),o);return Number(-(n+(e-r)/(a?r-i:i-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(u){return{M:o,y:s,w:i,d:a,h:r,m:n,s:e,ms:t}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h="en",m={};m[h]=d;var g=function(t){return t instanceof w},p=function(t,e,n){var r;if(!t)return null;if("string"==typeof t)m[t]&&(r=t),e&&(m[t]=e,r=t);else{var a=t.name;m[a]=t,r=a}return n||(h=r),r},v=function(t,e,n){if(g(t))return t.clone();var r=e?"string"==typeof e?{format:e,pl:n}:e:{};return r.date=t,new w(r)},y=f;y.l=p,y.i=g,y.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u})};var w=function(){function l(t){this.$L=this.$L||p(t.locale,null,!0)||h,this.parse(t)}var f=l.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(u);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return y},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return v(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<v(t)},f.$g=function(t,e,n){return y.u(t)?this[e]:this.set(n,t)},f.year=function(t){return this.$g(t,"$y",s)},f.month=function(t){return this.$g(t,"$M",o)},f.day=function(t){return this.$g(t,"$W",a)},f.date=function(t){return this.$g(t,"$D","date")},f.hour=function(t){return this.$g(t,"$H",r)},f.minute=function(t){return this.$g(t,"$m",n)},f.second=function(t){return this.$g(t,"$s",e)},f.millisecond=function(e){return this.$g(e,"$ms",t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,u){var c=this,l=!!y.u(u)||u,f=y.p(t),d=function(t,e){var n=y.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return l?n:n.endOf(a)},h=function(t,e){return y.w(c.toDate()[t].apply(c.toDate(),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},m=this.$W,g=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case s:return l?d(1,0):d(31,11);case o:return l?d(1,g):d(0,g+1);case i:var w=this.$locale().weekStart||0,$=(m<w?m+7:m)-w;return d(l?p-$:p+(6-$),g);case a:case"date":return h(v+"Hours",0);case r:return h(v+"Minutes",1);case n:return h(v+"Seconds",2);case e:return h(v+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(i,u){var c,l=y.p(i),f="set"+(this.$u?"UTC":""),d=(c={},c[a]=f+"Date",c.date=f+"Date",c[o]=f+"Month",c[s]=f+"FullYear",c[r]=f+"Hours",c[n]=f+"Minutes",c[e]=f+"Seconds",c[t]=f+"Milliseconds",c)[l],h=l===a?this.$D+(u-this.$W):u;return this.$d[d]&&this.$d[d](h),this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.add=function(t,u){var c,l=this;t=Number(t);var f=y.p(u),d=function(e,n){var r=l.clone().set("date",1).set(e,n+t);return r.set("date",Math.min(l.$D,r.daysInMonth()))},h=function(e){var n=new Date(l.$d);return n.setDate(n.getDate()+e*t),y.w(n,l)};if(f===o)return d(o,this.$M);if(f===s)return d(s,this.$y);if(f===a)return h(1);if(f===i)return h(7);var m=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[f]||1,g=this.valueOf()+t*m;return y.w(g,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=y.z(this),a=this.$locale(),i=a.weekdays,o=a.months,s=function(t,e,n,r){return t&&t[e]||n[e].substr(0,r)},u=function(t){return y.s(e.$H%12||12,t,"0")},l={YY:String(this.$y).slice(-2),YYYY:String(this.$y),M:String(this.$M+1),MM:y.s(this.$M+1,2,"0"),MMM:s(a.monthsShort,this.$M,o,3),MMMM:o[this.$M],D:String(this.$D),DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:s(a.weekdaysMin,this.$W,i,2),ddd:s(a.weekdaysShort,this.$W,i,3),dddd:i[this.$W],H:String(this.$H),HH:y.s(this.$H,2,"0"),h:u(1),hh:u(2),a:this.$H<12?"am":"pm",A:this.$H<12?"AM":"PM",m:String(this.$m),mm:y.s(this.$m,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t){return t.indexOf("[")>-1?t.replace(/\[|\]/g,""):l[t]||r.replace(":","")})},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,u,c){var l,f=y.p(u),d=v(t),h=6e4*(d.utcOffset()-this.utcOffset()),m=this-d,g=y.m(this,d);return g=(l={},l[s]=g/12,l[o]=g,l.quarter=g/3,l[i]=(m-h)/6048e5,l[a]=(m-h)/864e5,l[r]=m/36e5,l[n]=m/6e4,l[e]=m/1e3,l)[f]||m,c?g:y.a(g)},f.daysInMonth=function(){return this.endOf(o).$D},f.$locale=function(){return m[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone();return n.$L=p(t,e,!0),n},f.clone=function(){return y.w(this.toDate(),this)},f.toDate=function(){return new Date(this.$d)},f.toJSON=function(){return this.toISOString()},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},l}();return v.prototype=w.prototype,v.extend=function(t,e){return t(e,w,v),v},v.locale=p,v.isDayjs=g,v.unix=function(t){return v(1e3*t)},v.en=m[h],v.Ls=m,v}()},d04V:function(t,e,n){t.exports=n("0tVQ")},dfwq:function(t,e,n){"use strict";n.r(e);var r=n("p0XB"),a=n.n(r);var i=n("d04V"),o=n.n(i),s=n("yLu3"),u=n.n(s);function c(t){return function(t){if(a()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return o()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"default",function(){return c})},ikY9:function(t,e,n){"use strict";var r=n("Wgwc"),a=n.n(r),i=n("YFqc"),o=n.n(i),s=n("q1tI"),u=n.n(s);e.a=function(t){var e=t.post;return u.a.createElement("div",{key:e.title,className:"post-container"},u.a.createElement("div",{className:"post-img-container",style:{backgroundImage:e.thumb?"url(/static/images/post_img/".concat(e.thumb,")"):"url(/static/images/post_img/dummy_thumb.jpg)"}}),u.a.createElement("div",{className:"post-body"},u.a.createElement("div",{className:"post-title"},u.a.createElement(o.a,{href:"/post/".concat(e.filename)},u.a.createElement("a",null,e.title))),u.a.createElement("div",{className:"post-subtitle"},e.slug),u.a.createElement("div",{className:"post-createdAt"},a()(e.createdAt).format("MMM D, YYYY"))))}},ldVq:function(t,e,n){var r=n("QMMT"),a=n("UWiX")("iterator"),i=n("SBuE");t.exports=n("WEpk").isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||i.hasOwnProperty(r(e))}},n8Eq:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r),i=n("Wgwc"),o=n.n(i),s=n("20a2"),u=n("IRSK"),c=n.n(u),l=n("AMKi"),f=n("6Zw0");e.default=Object(s.withRouter)(function(t){if(t.router&&t.router.query&&t.router.query.tag){var e=t.router.query.tag,n=c.a.filter(function(t){return t.tag.filter(function(t){return t===e}).length>0});return n.sort(function(t,e){return o()(e.createdAt).unix()-o()(t.createdAt).unix()}),n.length>0?a.a.createElement(l.default,{posts:n}):a.a.createElement("div",null,"404!")}return a.a.createElement(f.default,null)})},yLu3:function(t,e,n){t.exports=n("VKFn")}},[["VT7f",1,0,2]]]);