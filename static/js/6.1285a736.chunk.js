(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[6],{101:function(e,t,c){"use strict";var r=c(83),a=c(27),s=c(86),n=c(96),i=(c(102),c(104)),o=c.n(i),l=c(23),u=c(33),d=c(4);t.a=function(e){var t=e.product,c=Object(l.b)(),i=t.images,p=t.title,j=t.description,h=t.slug,m=t.price;return Object(d.jsxs)("div",{className:"product-card-wrapper",children:[Object(d.jsx)("div",{className:"product-card__image-wrapper",children:Object(d.jsx)("img",{className:"product-card__img",src:i&&i.length?i[0].url:n.a,alt:"product"})}),Object(d.jsx)("h3",{className:"product-card__title",children:p}),Object(d.jsx)("p",{className:"product-card__about",children:"".concat(j&&j.substring(0,50),"...")}),Object(d.jsx)("div",{className:"product-card__price-container",children:Object(d.jsxs)("p",{className:"product-card__price",children:["$",m]})}),Object(d.jsxs)("div",{className:"product-card__button-container",children:[Object(d.jsxs)(a.b,{className:"product-cart__button",to:"/product/".concat(h),children:[Object(d.jsx)(s.e,{className:"product-cart__button__icon"}),Object(d.jsx)("p",{className:"btn__text",children:"View Product"})]}),Object(d.jsxs)("button",{disabled:t.quantity<1,onClick:function(){var e=[];if("undefined"!==typeof window){localStorage.getItem("cart")&&(e=JSON.parse(localStorage.getItem("cart"))),e.push(Object(r.a)(Object(r.a)({},t),{},{count:1})),u.b.success("Added to cart");var a=o.a.uniqWith(e,o.a.isEqual);localStorage.setItem("cart",JSON.stringify(a)),c({type:"ADD_TO_CART",payload:a})}},className:"product-cart__button",children:[Object(d.jsx)(s.f,{className:"product-cart__button__icon"}),Object(d.jsx)("p",{className:"btn__text",children:"Add to Cart"})]})]})]})}},102:function(e,t,c){},103:function(e,t,c){"use strict";t.a=c.p+"static/media/hero-image.e1d0ccef.jpg"},119:function(e,t,c){},147:function(e,t,c){"use strict";c.r(t);var r=c(84),a=c(91),s=c(1),n=c(95),i=c(101),o=c(103),l=c(87),u=c.p+"static/media/item1.a7521623.jpg",d=c.p+"static/media/item2.c11729fe.jpg",p=c.p+"static/media/item3.db13901e.jpg",j=c.p+"static/media/item4.01c2e61a.jpg",h=(c(119),c(4));t.default=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],m=t[1],_=Object(s.useState)([]),b=Object(r.a)(_,2),x=b[0],f=b[1];Object(s.useEffect)((function(){O(),N()}),[]);var O=function(){Object(l.c)("createdAt","desc",3).then((function(e){m(e.data)})).catch((function(e){console.log(e)}))},N=function(){Object(l.c)("sold","desc",3).then((function(e){f(e.data)})).catch((function(e){console.log(e)}))},v="linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(1, 1, 1, 1))";return Object(h.jsxs)("div",{className:"home-wrapper",children:[Object(h.jsx)(a.a,{image:o.a,header:"Lorem ipsum dolor sit, elit.",text:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(h.jsxs)("div",{className:"types-wrapper",children:[Object(h.jsx)("h2",{className:"types-wrapper__header",children:"Backpack Types"}),Object(h.jsx)("p",{className:"types-wrapper__text",children:"Molestie ac feugiat sed lectus"})]}),Object(h.jsx)("div",{className:"types-wrapper-showcase content-wrapper",children:Object(h.jsxs)("div",{className:"showcase__items-container",children:[Object(h.jsxs)("div",{className:"showcase__item",children:[Object(h.jsx)("div",{className:"showcase__item__image-container",style:{backgroundImage:"".concat(v,", url(").concat(u,")")}}),Object(h.jsxs)("div",{className:"showcase__item__description",children:[Object(h.jsx)("h3",{className:"description__header",children:"Maecenas Ultricies Mieget"}),Object(h.jsx)("p",{className:"description__text",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolor sit elit."})]})]}),Object(h.jsxs)("div",{className:"showcase__item",children:[Object(h.jsx)("div",{className:"showcase__item__image-container",style:{backgroundImage:"".concat(v,", url(").concat(d,")")}}),Object(h.jsxs)("div",{className:"showcase__item__description",children:[Object(h.jsx)("h3",{className:"description__header",children:"Laoreet Nonarcu Curabitur"}),Object(h.jsx)("p",{className:"description__text",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolor sit elit."})]})]}),Object(h.jsxs)("div",{className:"showcase__item",children:[Object(h.jsx)("div",{className:"showcase__item__image-container",style:{backgroundImage:"".concat(v,", url(").concat(p,")")}}),Object(h.jsxs)("div",{className:"showcase__item__description",children:[Object(h.jsx)("h3",{className:"description__header",children:"Facilis Volutpat Estvelit"}),Object(h.jsx)("p",{className:"description__text",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolor sit elit."})]})]}),Object(h.jsxs)("div",{className:"showcase__item",children:[Object(h.jsx)("div",{className:"showcase__item__image-container",style:{backgroundImage:"".concat(v,", url(").concat(j,")")}}),Object(h.jsxs)("div",{className:"showcase__item__description",children:[Object(h.jsx)("h3",{className:"description__header",children:"Cursus Metus Aliquam Eleifend"}),Object(h.jsx)("p",{className:"description__text",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolor sit elit."})]})]})]})}),Object(h.jsxs)("div",{className:"new-wrapper content-wrapper",children:[Object(h.jsxs)("div",{className:"types-wrapper",children:[Object(h.jsx)("h2",{className:"types-wrapper__header",children:"New Arrivals"}),Object(h.jsx)("p",{className:"types-wrapper__text",children:"Molestie ac feugiat sed lectus"})]}),Object(h.jsx)("div",{className:"products",children:c.map((function(e){return Object(h.jsx)(i.a,{product:e},e._id)}))})]}),Object(h.jsxs)("div",{className:"popular-wrapper content-wrapper",children:[Object(h.jsxs)("div",{className:"types-wrapper",children:[Object(h.jsx)("h2",{className:"types-wrapper__header",children:"Popular"}),Object(h.jsx)("p",{className:"types-wrapper__text",children:"Molestie ac feugiat sed lectus"})]}),Object(h.jsx)("div",{className:"products products__popular",children:x.map((function(e){return Object(h.jsx)(i.a,{product:e},e._id)}))})]}),Object(h.jsx)(n.a,{})]})}},87:function(e,t,c){"use strict";c.d(t,"a",(function(){return o})),c.d(t,"g",(function(){return l})),c.d(t,"d",(function(){return u})),c.d(t,"b",(function(){return d})),c.d(t,"h",(function(){return p})),c.d(t,"e",(function(){return j})),c.d(t,"c",(function(){return h})),c.d(t,"f",(function(){return m}));var r=c(15),a=c.n(r),s=c(17),n=c(24),i=c.n(n),o=function(){var e=Object(s.a)(a.a.mark((function e(t,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("".concat("http://localhost:8000/api","/product"),t,{headers:{authtoken:c}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),l=function(){var e=Object(s.a)(a.a.mark((function e(t,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.delete("".concat("http://localhost:8000/api","/product/").concat(t),{headers:{authtoken:c}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),u=function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat("http://localhost:8000/api","/products/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat("http://localhost:8000/api","/product/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(s.a)(a.a.mark((function e(t,c,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.put("".concat("http://localhost:8000/api","/product/").concat(t),c,{headers:{authtoken:r}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,c,r){return e.apply(this,arguments)}}(),j=function(){var e=Object(s.a)(a.a.mark((function e(t,c,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("".concat("http://localhost:8000/api","/products"),{sort:t,order:c,page:r});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,c,r){return e.apply(this,arguments)}}(),h=function(){var e=Object(s.a)(a.a.mark((function e(t,c,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("".concat("http://localhost:8000/api","/products/list"),{sort:t,order:c,limit:r});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,c,r){return e.apply(this,arguments)}}(),m=function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("".concat("http://localhost:8000/api","/product/related/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},91:function(e,t,c){"use strict";c(92);var r=c(4);t.a=function(e){var t=e.header,c=e.text,a=e.image;return Object(r.jsx)("div",{className:"hero",style:{backgroundImage:"url(".concat(a,")")},children:Object(r.jsxs)("div",{className:"hero__text",children:[Object(r.jsx)("h1",{className:"hero-text__header",children:t}),Object(r.jsx)("p",{className:"hero-text__text",children:c})]})})}},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){"use strict";var r=c(27),a=c(4),s=function(e){var t=e.text,c=e.where;return Object(a.jsx)(r.b,{className:"footer-col__link",to:c,children:t})},n=(c(93),function(e){var t=e.header,c=e.link1,r=e.link2,s=e.link3,n=e.info;return Object(a.jsxs)("div",{className:"footer-col",children:[Object(a.jsx)("h3",{className:"footer-col__header",children:t}),c,r,s,Object(a.jsx)("p",{className:"footer-col__text-info",children:n})]})}),i=c(97),o=c(86),l=c(98);c(94);t.a=function(){return Object(a.jsxs)("footer",{className:"footer",children:[Object(a.jsx)("div",{className:"footer__layer",children:Object(a.jsxs)("div",{className:"footer__layer-container",children:[Object(a.jsxs)("div",{className:"footer__layer__icons-container",children:[Object(a.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:Object(a.jsx)(i.a,{className:"footer__layer__icons__icon"})}),Object(a.jsx)("a",{href:"https://twitter.com/home",target:"_blank",rel:"noreferrer",children:Object(a.jsx)(i.e,{className:"footer__layer__icons__icon"})}),Object(a.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:Object(a.jsx)(i.b,{className:"footer__layer__icons__icon"})}),Object(a.jsx)("a",{href:"tel:83952500005",children:Object(a.jsx)(l.d,{className:"footer__layer__icons__icon"})}),Object(a.jsx)("a",{href:"mailto:priem@bgu.ru",children:Object(a.jsx)(o.c,{className:"footer__layer__icons__icon"})})]}),Object(a.jsxs)("div",{className:"footer__layer-nav",children:[Object(a.jsx)(r.b,{to:"/shop",className:"footer__layer-nav__link",children:"Shop"}),Object(a.jsx)(r.b,{to:"/contact",className:"footer__layer-nav__link",children:"Contact Us"}),Object(a.jsx)(r.b,{to:"/about",className:"footer__layer-nav__link",children:"About Us"})]})]})}),Object(a.jsx)("div",{className:"footer__layer1",children:Object(a.jsxs)("div",{className:"footer__layer1-container",children:[Object(a.jsx)(n,{header:"About Us",link1:Object(a.jsx)(s,{where:"/shop",text:"About organization"}),link2:Object(a.jsx)(s,{where:"/shop",text:"Our clients"}),link3:Object(a.jsx)(s,{where:"/shop",text:"Our partners"})}),Object(a.jsx)(n,{header:"Quick Links",link1:Object(a.jsx)(s,{where:"/shop",text:"Introduction"}),link2:Object(a.jsx)(s,{where:"/shop",text:"Organizaion Team"}),link3:Object(a.jsx)(s,{where:"/shop",text:"Press Enquiries"})}),Object(a.jsx)(n,{header:"Important Links",link1:Object(a.jsx)(s,{where:"/shop",text:"Privacy Policy"}),link2:Object(a.jsx)(s,{where:"/shop",text:"Cookies Policy"}),link3:Object(a.jsx)(s,{where:"/shop",text:"Terms & Conditions"})}),Object(a.jsx)(n,{header:"Contact info",info:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."}),Object(a.jsx)(n,{header:"Achievements",info:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."}),Object(a.jsx)(n,{header:"Useful information",info:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."}),Object(a.jsx)(n,{header:"Shipping information",info:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."}),Object(a.jsx)(n,{header:"Customer Service",info:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."})]})})]})}},96:function(e,t,c){"use strict";t.a=c.p+"static/media/default.41d879f2.jpg"}}]);
//# sourceMappingURL=6.1285a736.chunk.js.map