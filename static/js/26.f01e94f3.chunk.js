(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[26],{130:function(e,t,r){"use strict";r.r(t);var n=r(15),a=r.n(n),o=r(17),c=r(84),s=r(83),i=r(1),u=r(27),l=r(33),f=r(23),b=r(35),p=r(34),m=r(4);t.default=function(e){var t=e.history,r=Object(f.b)(),n=Object(f.c)((function(e){return Object(s.a)({},e)})).user,d=function(e){var r=t.location.state;r?t.push(r.from):"admin"===e.data.role?t.push("/admin/dashboard"):t.push("/user/history")};Object(i.useEffect)((function(){n&&n.token&&t.push("/")}),[n,t]);var j=Object(i.useState)(""),h=Object(c.a)(j,2),O=h[0],y=h[1],v=Object(i.useState)(""),g=Object(c.a)(v,2),w=g[0],x=g[1],_=Object(i.useState)(!1),k=Object(c.a)(_,2),N=k[0],S=k[1],P=function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.a.signInWithPopup(p.c).then(function(){var e=Object(o.a)(a.a.mark((function e(t){var n,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.user,e.next=3,n.getIdTokenResult();case 3:o=e.sent,Object(b.a)(o.token).then((function(e){r({type:"LOGGED_IN_USER",payload:{name:e.data.name,email:e.data.email,token:o.token,role:e.data.role,_id:e.data._id}}),d(e)})).catch((function(e){console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){l.b.error(e.message)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,o,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),t.preventDefault(),e.prev=2,e.next=5,p.a.signInWithEmailAndPassword(O,w);case 5:return n=e.sent,o=n.user,e.next=9,o.getIdTokenResult();case 9:c=e.sent,Object(b.a)(c.token).then((function(e){r({type:"LOGGED_IN_USER",payload:{name:e.data.name,email:e.data.email,token:c.token,role:e.data.role,_id:e.data._id}}),d(e)})).catch((function(e){console.log(e)})),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),l.b.error(e.t0.message),S(!1);case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"signIn-wrapper",children:[N?Object(m.jsx)("h1",{className:"form__header",children:"Loading..."}):Object(m.jsx)("h1",{className:"form__header",children:"Sign in"}),Object(m.jsxs)("form",{className:"form",onSubmit:I,children:[Object(m.jsxs)("div",{className:"form__input-container",children:[Object(m.jsx)("input",{id:"email",type:"email",required:!0,name:"email",className:"form-input",value:O,onChange:function(e){return y(e.target.value)}}),Object(m.jsx)("span",{className:"form-span"}),Object(m.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"})]}),Object(m.jsxs)("div",{className:"form__input-container",children:[Object(m.jsx)("input",{id:"password",required:!0,type:"password",name:"password",className:"form-input",value:w,onChange:function(e){return x(e.target.value)}}),Object(m.jsx)("span",{className:"form-span"}),Object(m.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"})]}),Object(m.jsx)("button",{className:"form__btn",type:"submit",children:"Sign In"}),Object(m.jsx)("button",{onClick:P,className:"form__btn form__btn-google",type:"submit",children:"Sign In with Google"}),Object(m.jsx)(u.b,{className:"forgot-psw-link",to:"/resetPassword",children:"Forgot your password?"})]})]})}},83:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(85);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},84:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(i){a=!0,o=i}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return a}))},85:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=26.f01e94f3.chunk.js.map