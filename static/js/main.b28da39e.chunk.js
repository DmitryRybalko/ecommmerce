(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[3],{34:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o}));var c=n(22);n(60),n(61);c.a.initializeApp({apiKey:"AIzaSyBFWwQHvUuNx03lIMT_BcED4MS2BcVCKjw",authDomain:"ecommerce-c89c2.firebaseapp.com",projectId:"ecommerce-c89c2",storageBucket:"ecommerce-c89c2.appspot.com",messagingSenderId:"991699533914",appId:"1:991699533914:web:0f0920de45840bc8f81863",measurementId:"G-KS8GFNGTV4"});var a=c.a.firestore(),r=c.a.auth(),o=new c.a.auth.GoogleAuthProvider},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return l}));var c=n(15),a=n.n(c),r=n(17),o=n(24),u=n.n(o),s=function(){var e=Object(r.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("".concat("http://localhost:8000/api","/create-or-update-user"),{},{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(r.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("".concat("http://localhost:8000/api","/current-user"),{},{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(r.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("".concat("http://localhost:8000/api","/current-admin"),{},{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},45:function(e,t,n){"use strict";var c=n(47),a=(n(79),n(1)),r=n(4);t.a=function(){var e=c.a.timeline();return Object(a.useEffect)((function(){e.to(".gear",{rotation:360,duration:3,repeat:-1,ease:"linear"}),e.to(".svg3",{rotation:-360,duration:3,repeat:-1,ease:"linear"},"-=3")})),Object(r.jsx)("section",{className:"showcase",children:Object(r.jsxs)("div",{className:"svg-wrapper",children:[Object(r.jsx)("svg",{className:"svg1 gear",xmlns:"http://www.w3.org/2000/svg",width:"70",height:"70",viewBox:"0 0 24 24",children:Object(r.jsx)("path",{d:"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"})}),Object(r.jsx)("svg",{className:"svg2 gear",xmlns:"http://www.w3.org/2000/svg",width:"70",height:"70",viewBox:"0 0 24 24",children:Object(r.jsx)("path",{d:"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"})}),Object(r.jsx)("svg",{className:"svg3 gear",xmlns:"http://www.w3.org/2000/svg",width:"70",height:"70",viewBox:"0 0 24 24",children:Object(r.jsx)("path",{d:"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"})})]})})}},58:function(e,t,n){},79:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(18),o=n.n(r),u=n(27),s=n(20),i=n(23),l=n(46),h=[];"undefined"!==typeof window&&(h=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]);var p=Object(s.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGGED_IN_USER":case"LOG_OUT":return t.payload;default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":return t.payload;default:return e}}}),j=n(15),b=n.n(j),d=n(17),m=n(6),f=n(33),O=(n(58),n(59),n(34)),x=n(35),v=n(45),g=n(4),y=Object(c.lazy)((function(){return n.e(26).then(n.bind(null,130))})),w=Object(c.lazy)((function(){return n.e(28).then(n.bind(null,131))})),z=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(6)]).then(n.bind(null,147))})),k=Object(c.lazy)((function(){return Promise.all([n.e(19),n.e(29)]).then(n.bind(null,149))})),S=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(7)]).then(n.bind(null,132))})),I=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,133))})),N=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(15)]).then(n.bind(null,146))})),P=Object(c.lazy)((function(){return n.e(16).then(n.bind(null,134))})),_=Object(c.lazy)((function(){return n.e(23).then(n.bind(null,135))})),G=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,150))})),B=Object(c.lazy)((function(){return n.e(24).then(n.bind(null,136))})),E=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,137))})),A=Object(c.lazy)((function(){return n.e(13).then(n.bind(null,138))})),D=Object(c.lazy)((function(){return n.e(8).then(n.bind(null,139))})),T=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,140))})),M=Object(c.lazy)((function(){return n.e(22).then(n.bind(null,141))})),R=Object(c.lazy)((function(){return n.e(21).then(n.bind(null,142))})),U=Object(c.lazy)((function(){return n.e(25).then(n.bind(null,143))})),C=Object(c.lazy)((function(){return n.e(18).then(n.bind(null,148))})),J=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(10)]).then(n.bind(null,144))})),K=Object(c.lazy)((function(){return n.e(20).then(n.bind(null,151))})),L=Object(c.lazy)((function(){return n.e(27).then(n.bind(null,145))})),F=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,152))}));var V=function(){var e=Object(i.b)();return Object(c.useEffect)((function(){var t=O.a.onAuthStateChanged(function(){var t=Object(d.a)(b.a.mark((function t(n){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,n.getIdTokenResult();case 3:c=t.sent,Object(x.c)(c.token).then((function(t){e({type:"LOGGED_IN_USER",payload:{name:t.data.name,email:t.data.email,token:c.token,role:t.data.role,_id:t.data._id}})})).catch((function(e){console.log(e)}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());return function(){return t()}}),[e]),Object(g.jsx)(c.Suspense,{fallback:Object(g.jsx)(v.a,{}),children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(k,{}),Object(g.jsx)(f.a,{}),Object(g.jsxs)(m.c,{children:[Object(g.jsx)(m.a,{exact:!0,path:"/",component:z}),Object(g.jsx)(m.a,{exact:!0,path:"/signup",component:w}),Object(g.jsx)(m.a,{exact:!0,path:"/signin",component:y}),Object(g.jsx)(m.a,{exact:!0,path:"/signup/complete",component:L}),Object(g.jsx)(m.a,{exact:!0,path:"/resetPassword",component:U}),Object(g.jsx)(m.a,{exact:!0,path:"/shop",component:S}),Object(g.jsx)(m.a,{exact:!0,path:"/cart",component:G}),Object(g.jsx)(m.a,{exact:!0,path:"/contact",component:I}),Object(g.jsx)(m.a,{exact:!0,path:"/product/:slug",component:J}),Object(g.jsx)(M,{exact:!0,path:"/user/history",component:P}),Object(g.jsx)(M,{exact:!0,path:"/user/payment",component:C}),Object(g.jsx)(M,{exact:!0,path:"/checkout",component:B}),Object(g.jsx)(M,{exact:!0,path:"/user/password",component:_}),Object(g.jsx)(R,{exact:!0,path:"/admin/dashboard",component:K}),Object(g.jsx)(R,{exact:!0,path:"/admin/product",component:D}),Object(g.jsx)(R,{exact:!0,path:"/admin/product/:slug",component:T}),Object(g.jsx)(R,{exact:!0,path:"/admin/category",component:E}),Object(g.jsx)(R,{exact:!0,path:"/admin/products",component:F}),Object(g.jsx)(R,{exact:!0,path:"/admin/category/:slug",component:A}),Object(g.jsx)(m.a,{exact:!0,path:"/about",component:N})]})]})})},W=Object(s.createStore)(p,Object(l.composeWithDevTools)());o.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(i.a,{store:W,children:Object(g.jsx)(u.a,{children:Object(g.jsx)(V,{})})})}),document.getElementById("root"))}},[[82,4,5]]]);
//# sourceMappingURL=main.b28da39e.chunk.js.map