(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[13],{100:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return m})),n.d(e,"a",(function(){return d}));var r=n(15),a=n.n(r),c=n(17),s=n(24),i=n.n(s),o=function(){var t=Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("".concat("http://localhost:8000/api","/categories"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("".concat("http://localhost:8000/api","/category/").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.delete("".concat("http://localhost:8000/api","/category/").concat(e),{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),m=function(){var t=Object(c.a)(a.a.mark((function t(e,n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.put("".concat("http://localhost:8000/api","/category/").concat(e),n,{headers:{authtoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.post("".concat("http://localhost:8000/api","/category"),e,{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},109:function(t,e,n){"use strict";var r=n(4);e.a=function(t){var e=t.name,n=t.handleSubmit,a=t.setName,c=t.loading;return Object(r.jsxs)("form",{className:"form create-category-form",onSubmit:n,children:[Object(r.jsxs)("div",{className:"form__input-container",children:[Object(r.jsx)("input",{id:"name",required:!0,type:"text",name:"name",className:"form-input",value:e,autoFocus:!0,onChange:function(t){return a(t.target.value)},disabled:c}),Object(r.jsx)("span",{className:"form-span"}),Object(r.jsx)("label",{htmlFor:"name",className:"form-label",children:"Name"})]}),Object(r.jsx)("button",{className:"form__btn",type:"submit",disabled:c,children:"Save"})]})}},138:function(t,e,n){"use strict";n.r(e);var r=n(84),a=n(83),c=n(89),s=n(1),i=(n(88),n(33)),o=n(23),u=n(109),l=n(100),m=n(4);e.default=function(t){var e=t.history,n=t.match,d=Object(o.c)((function(t){return Object(a.a)({},t)})).user,f=Object(s.useState)(""),b=Object(r.a)(f,2),p=b[0],h=b[1],j=Object(s.useState)(!1),_=Object(r.a)(j,2),O=_[0],v=_[1],y=function(){return Object(l.c)(n.params.slug).then((function(t){return h(t.data.name)}))};Object(s.useEffect)((function(){y()}),[y]);return Object(m.jsxs)("div",{className:"history-wrapper",children:[Object(m.jsx)("div",{className:"history__nav",children:Object(m.jsx)(c.a,{})}),Object(m.jsx)("div",{className:"history__content",children:Object(m.jsxs)("div",{className:"history__form-wrapper",children:[O?Object(m.jsx)("h1",{className:"form__header",children:"Loading..."}):Object(m.jsx)("h1",{className:"form__header",children:"Update category"}),Object(m.jsx)(u.a,{handleSubmit:function(t){t.preventDefault(),v(!0),Object(l.e)(n.params.slug,{name:p},d.token).then((function(t){v(!1),h(""),i.b.success('"'.concat(t.data.name,'" is updated')),e.push("/admin/category")})).catch((function(t){v(!1),400===t.response.status&&i.b.error(t.response.data)}))},name:p,setName:h,loading:O})]})})]})}},83:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(85);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},84:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,c=void 0;try{for(var s,i=t[Symbol.iterator]();!(r=(s=i.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(o){a=!0,c=o}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return a}))},85:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},88:function(t,e,n){},89:function(t,e,n){"use strict";var r=n(27),a=(n(90),n(4));e.a=function(){return Object(a.jsx)("nav",{className:"adminnav",children:Object(a.jsxs)("ul",{className:"adminnav__list",children:[Object(a.jsx)("li",{className:"adminnav__list__item",children:Object(a.jsx)(r.b,{className:"adminnav__list__item__link",to:"/admin/dashboard",children:"Dashboard"})}),Object(a.jsx)("li",{className:"adminnav__list__item",children:Object(a.jsx)(r.b,{className:"adminnav__list__item__link",to:"/admin/product",children:"Product"})}),Object(a.jsx)("li",{className:"adminnav__list__item",children:Object(a.jsx)(r.b,{className:"adminnav__list__item__link",to:"/admin/products",children:"Products"})}),Object(a.jsx)("li",{className:"adminnav__list__item",children:Object(a.jsx)(r.b,{className:"adminnav__list__item__link",to:"/admin/category",children:"Category"})}),Object(a.jsx)("li",{className:"adminnav__list__item",children:Object(a.jsx)(r.b,{className:"adminnav__list__item__link",to:"/user/password",children:"Password"})})]})})}},90:function(t,e,n){}}]);
//# sourceMappingURL=13.f36ac90f.chunk.js.map