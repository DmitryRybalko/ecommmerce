(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[28],{131:function(e,t,r){"use strict";r.r(t);var n=r(15),c=r.n(n),a=r(17),o=r(83),i=r(84),s=r(27),u=r(1),l=r(33),f=r(34),b=r(23),m=r(4);t.default=function(e){var t=e.history,r=Object(u.useState)(""),n=Object(i.a)(r,2),p=n[0],j=n[1],d=Object(b.c)((function(e){return Object(o.a)({},e)})).user;Object(u.useEffect)((function(){d&&d.token&&t.push("/")}),[d,t]);var h=function(){var e=Object(a.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r={url:"http://localhost:3000/signup/complete",handleCodeInApp:!0},e.next=4,f.a.sendSignInLinkToEmail(p,r);case 4:l.b.success("We sent you an email to ".concat(p,".")),window.localStorage.setItem("userEmail",p),j("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"signIn-wrapper",children:[Object(m.jsx)("h1",{className:"form__header",children:"Get started with us today!"}),Object(m.jsxs)("form",{className:"form",onSubmit:h,children:[Object(m.jsxs)("div",{className:"form__input-container",children:[Object(m.jsx)("input",{id:"email",required:!0,type:"email",name:"email",className:"form-input",value:p,onChange:function(e){return j(e.target.value)}}),Object(m.jsx)("span",{className:"form-span"}),Object(m.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"})]}),Object(m.jsx)("button",{className:"form__btn",type:"submit",children:"Sign Up"}),Object(m.jsx)("span",{className:"form__login",children:Object(m.jsxs)("p",{className:"form__login-text",children:["Already have an account? Login"," ",Object(m.jsx)(s.b,{className:"form-link",to:"/signin",children:"here"})]})})]})]})}},83:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(85);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},84:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,c=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(s){c=!0,a=s}finally{try{n||null==i.return||i.return()}finally{if(c)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return c}))},85:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=28.fb378a8f.chunk.js.map