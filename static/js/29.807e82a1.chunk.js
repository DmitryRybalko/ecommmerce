(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[29],{123:function(e,s,c){},149:function(e,s,c){"use strict";c.r(s);var n=c(83),t=c(84),i=c(27),l=c(6),a=c(1),m=c(129),r=c(23),o=(c(123),c.p+"static/media/cart.2e38273d.svg"),j=c(4);s.default=Object(l.g)((function(){var e=Object(a.useState)(!1),s=Object(t.a)(e,2),c=s[0],b=s[1],u=Object(r.b)(),d=Object(l.f)(),h=Object(r.c)((function(e){return Object(n.a)({},e)})),O=h.user,g=h.cart,x=function(){m.a.auth().signOut(),u({type:"LOG_OUT",payload:null}),d.push("/signin")};return Object(a.useEffect)((function(){d.listen((function(){b(!1)}))})),Object(j.jsxs)("nav",{className:"nav",children:[Object(j.jsxs)("div",{className:"nav__logo-wrapper",children:[Object(j.jsx)("div",{className:"logo-circle"}),Object(j.jsx)("div",{className:"logo-circle"}),Object(j.jsx)("div",{className:"logo-container",children:Object(j.jsx)(i.b,{to:"/",className:"logo",children:"Backpacks"})})]}),Object(j.jsxs)("ul",{className:"nav__list-menu",children:[Object(j.jsx)("li",{className:"list-menu__item-container",children:Object(j.jsx)(i.b,{to:"/shop",className:"list-menu__item-link",children:"Shop"})}),Object(j.jsx)("li",{className:"list-menu__item-container",children:Object(j.jsx)(i.b,{to:"/contact",className:"list-menu__item-link",children:"Contact Us"})}),Object(j.jsx)("li",{className:"list-menu__item-container",children:Object(j.jsx)(i.b,{to:"/about",className:"list-menu__item-link",children:"About Us"})})]}),Object(j.jsxs)("div",{className:"nav__items-wrapper",children:[Object(j.jsxs)("div",{className:"login-container",children:[!O&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(i.b,{to:"/signin",className:"login signIn ",children:"Sign In"}),Object(j.jsx)(i.b,{to:"/signup",className:"login ",children:"Sign Up"})]}),O&&Object(j.jsxs)(j.Fragment,{children:[O&&"subscriber"===O.role&&Object(j.jsx)(i.b,{to:"/user/history",className:"login ",children:"User"}),O&&"admin"===O.role&&Object(j.jsx)(i.b,{to:"/admin/dashboard",className:"login ",children:"Admin"}),Object(j.jsx)(i.b,{onClick:x,to:"/signup",className:"login ",children:"Log Out"})]})]}),Object(j.jsx)("div",{className:"cart-icon-wrapper",children:Object(j.jsxs)(i.b,{to:"/cart",className:"cart-link",children:[Object(j.jsx)("img",{className:"cart-icon",src:o,alt:"cart"}),g&&g.length>0?Object(j.jsx)("div",{className:"cart-circle"}):""]})}),Object(j.jsxs)("div",{onClick:function(){return b(!c)},className:"menu-wrapper",children:[Object(j.jsx)("div",{className:"menu-line menu-line1"}),Object(j.jsx)("div",{className:"menu-line menu-line2"}),Object(j.jsx)("div",{className:"menu-line menu-line3"})]})]}),Object(j.jsx)("div",{onClick:function(){b(!c)},className:"menu-toggle",id:c?"menu-toggle-active":"",children:Object(j.jsxs)("div",{className:"menu-toggle__container",children:[Object(j.jsx)(i.b,{to:"/shop",className:"list-menu__item mobile-menu-link",children:"Shop"}),Object(j.jsx)(i.b,{to:"/contact",className:"list-menu__item mobile-menu-link",children:"Contact Us"}),Object(j.jsx)(i.b,{to:"/about",className:"list-menu__item mobile-menu-link",children:"About Us"}),!O&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(i.b,{to:"/signin",className:"mobile-menu-link",children:"Sign In"}),Object(j.jsx)(i.b,{to:"/signup",className:"mobile-menu-link",children:"Sign Up"})]}),O&&Object(j.jsxs)(j.Fragment,{children:[O&&"subscriber"===O.role&&Object(j.jsx)(i.b,{to:"/user/history",className:"mobile-menu-link",children:"User"}),O&&"admin"===O.role&&Object(j.jsx)(i.b,{to:"/admin/dashboard",className:"mobile-menu-link",children:"Admin"}),Object(j.jsx)(i.b,{onClick:x,to:"/signup",className:"mobile-menu-link",children:"Log Out"})]}),Object(j.jsx)("a",{href:"https://www.facebook.com/",className:"menu-link",target:"_blank",children:"Facebook"}),Object(j.jsx)("a",{href:"https://www.instagram.com/",className:"menu-link",target:"_blank",children:"Instagram"}),Object(j.jsx)("a",{href:"https://twitter.com/",className:"menu-link",target:"_blank",children:"Twitter"})]})})]})}))}}]);
//# sourceMappingURL=29.807e82a1.chunk.js.map