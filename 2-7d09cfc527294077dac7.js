(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{165:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(182),c=a.n(r),o=a(170),l=a.n(o),s=function(e){var t=e.children,a=e.title,n=e.description;return i.a.createElement("div",{className:l.a.layout},i.a.createElement(c.a,null,i.a.createElement("html",{lang:"en"}),i.a.createElement("title",null,a),i.a.createElement("meta",{name:"description",content:n})),t)};a.d(t,"a",function(){return s})},166:function(e,t,a){"use strict";a(27);var n=a(172),i=a(0),r=a.n(i),c=a(36),o=(a(169),a(173)),l=a.n(o),s=function(e){var t=e.author,a=e.isIndex;return r.a.createElement("div",{className:l.a.author},r.a.createElement(c.Link,{to:"/"},r.a.createElement("img",{src:Object(c.withPrefix)(t.photo),className:l.a.author__photo,width:"75",height:"75",alt:t.name})),a?r.a.createElement("h1",{className:l.a.author__title},r.a.createElement(c.Link,{className:l.a["author__title-link"],to:"/"},t.name)):r.a.createElement("h2",{className:l.a.author__title},r.a.createElement(c.Link,{className:l.a["author__title-link"],to:"/"},t.name)),r.a.createElement("p",{className:l.a.author__subtitle},t.bio))},m=(a(76),a(57),a(174),a(171)),u=a(176),_=a.n(u),d=function(e){var t=e.icon;return r.a.createElement("svg",{className:_.a.icon,viewBox:t.viewBox},r.a.createElement("path",{d:t.path}))},p=a(177),h=a.n(p),f=function(e){var t=e.contacts;return r.a.createElement("div",{className:h.a.contacts},r.a.createElement("ul",{className:h.a.contacts__list},Object.keys(t).map(function(e){return r.a.createElement("li",{className:h.a["contacts__list-item"],key:e},r.a.createElement("a",{className:h.a["contacts__list-item-link"],href:Object(m.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},r.a.createElement(d,{icon:Object(m.b)(e)})))})))},v=a(178),g=a.n(v),E=function(e){var t=e.copyright;return r.a.createElement("div",{className:g.a.copyright},t)},b=a(179),k=a.n(b),N=function(e){var t=e.menu;return r.a.createElement("nav",{className:k.a.menu},r.a.createElement("ul",{className:k.a.menu__list},t.map(function(e){return r.a.createElement("li",{className:k.a["menu__list-item"],key:e.path},r.a.createElement(c.Link,{to:e.path,className:k.a["menu__list-item-link"],activeClassName:k.a["menu__list-item-link--active"]},e.label))})))},x=a(180),y=a.n(x),M=function(e){var t=e.data,a=e.isIndex,n=t.site.siteMetadata,i=n.author,c=n.copyright,o=n.menu;return r.a.createElement("div",{className:y.a.sidebar},r.a.createElement("div",{className:y.a.sidebar__inner},r.a.createElement(s,{author:i,isIndex:a}),r.a.createElement(N,{menu:o}),r.a.createElement(f,{contacts:i.contacts}),r.a.createElement(E,{copyright:c})))},w=function(e){return r.a.createElement(c.StaticQuery,{query:"4073725339",render:function(t){return r.a.createElement(M,Object.assign({},e,{data:t}))},data:n})};a.d(t,"a",function(){return w})},167:function(e,t,a){"use strict";var n={TWITTER:{path:"M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z",viewBox:"0 0 26 28"},FACEBOOK:{path:"M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z",viewBox:"0 0 16 28"},LINKEDIN:{path:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",viewBox:"0 0 28 28"},VKONTAKTE:{path:"M29.953 8.125c0.234 0.641-0.5 2.141-2.344 4.594-3.031 4.031-3.359 3.656-0.859 5.984 2.406 2.234 2.906 3.313 2.984 3.453 0 0 1 1.75-1.109 1.766l-4 0.063c-0.859 0.172-2-0.609-2-0.609-1.5-1.031-2.906-3.703-4-3.359 0 0-1.125 0.359-1.094 2.766 0.016 0.516-0.234 0.797-0.234 0.797s-0.281 0.297-0.828 0.344h-1.797c-3.953 0.25-7.438-3.391-7.438-3.391s-3.813-3.938-7.156-11.797c-0.219-0.516 0.016-0.766 0.016-0.766s0.234-0.297 0.891-0.297l4.281-0.031c0.406 0.063 0.688 0.281 0.688 0.281s0.25 0.172 0.375 0.5c0.703 1.75 1.609 3.344 1.609 3.344 1.563 3.219 2.625 3.766 3.234 3.437 0 0 0.797-0.484 0.625-4.375-0.063-1.406-0.453-2.047-0.453-2.047-0.359-0.484-1.031-0.625-1.328-0.672-0.234-0.031 0.156-0.594 0.672-0.844 0.766-0.375 2.125-0.391 3.734-0.375 1.266 0.016 1.625 0.094 2.109 0.203 1.484 0.359 0.984 1.734 0.984 5.047 0 1.062-0.203 2.547 0.562 3.031 0.328 0.219 1.141 0.031 3.141-3.375 0 0 0.938-1.625 1.672-3.516 0.125-0.344 0.391-0.484 0.391-0.484s0.25-0.141 0.594-0.094l4.5-0.031c1.359-0.172 1.578 0.453 1.578 0.453z",viewBox:"0 0 31 28"},GITHUB:{path:"M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z",viewBox:"0 0 26 28"},EMAIL:{path:"M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z",viewBox:"0 0 28 28"},RSS:{path:"M6 21c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM14 22.922c0.016 0.281-0.078 0.547-0.266 0.75-0.187 0.219-0.453 0.328-0.734 0.328h-2.109c-0.516 0-0.938-0.391-0.984-0.906-0.453-4.766-4.234-8.547-9-9-0.516-0.047-0.906-0.469-0.906-0.984v-2.109c0-0.281 0.109-0.547 0.328-0.734 0.172-0.172 0.422-0.266 0.672-0.266h0.078c3.328 0.266 6.469 1.719 8.828 4.094 2.375 2.359 3.828 5.5 4.094 8.828zM22 22.953c0.016 0.266-0.078 0.531-0.281 0.734-0.187 0.203-0.438 0.313-0.719 0.313h-2.234c-0.531 0-0.969-0.406-1-0.938-0.516-9.078-7.75-16.312-16.828-16.844-0.531-0.031-0.938-0.469-0.938-0.984v-2.234c0-0.281 0.109-0.531 0.313-0.719 0.187-0.187 0.438-0.281 0.688-0.281h0.047c5.469 0.281 10.609 2.578 14.484 6.469 3.891 3.875 6.188 9.016 6.469 14.484z",viewBox:"0 0 22 28"}},i={PREV_PAGE:"← PREV",NEXT_PAGE:"→ NEXT"};a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},168:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(181),c=a.n(r),o=function(e){var t=e.title,a=e.children,r=Object(n.useRef)();return Object(n.useEffect)(function(){r.current.scrollIntoView()}),i.a.createElement("div",{ref:r,className:c.a.page},i.a.createElement("div",{className:c.a.page__inner},t&&i.a.createElement("h1",{className:c.a.page__title},t),i.a.createElement("div",{className:c.a.page__body},a)))};a.d(t,"a",function(){return o})},170:function(e,t,a){e.exports={layout:"Layout-module--layout--3Pyz6"}},171:function(e,t,a){"use strict";var n=a(167),i=function(e){var t;switch(e){case"twitter":t=n.a.TWITTER;break;case"github":t=n.a.GITHUB;break;case"vkontakte":t=n.a.VKONTAKTE;break;case"linkedin":t=n.a.LINKEDIN;break;case"email":t=n.a.EMAIL;break;case"rss":t=n.a.RSS;break;default:t={}}return t},r=function(e,t){var a;switch(e){case"twitter":a="https://www.twitter.com/"+t;break;case"github":a="https://github.com/"+t;break;case"vkontakte":a="https://vk.com/"+t;break;case"linkedin":a=""+t;break;case"email":a="mailto:"+t;break;default:a=t}return a};a.d(t,"b",function(){return i}),a.d(t,"a",function(){return r})},172:function(e){e.exports={data:{site:{siteMetadata:{title:"As long as we dare to dream and do not get in the way of ourseleves, anything is possible",subtitle:"Read, Inspired and Write.",copyright:"© 2019 techoi All rights reserved.",menu:[{label:"Posts",path:"/"},{label:"About me",path:"/pages/about"},{label:"Contact me",path:"/pages/contacts"}],author:{name:"Jimmy Choi (techoi)",photo:"/photo.jpg",bio:"Frontend Engineer, based on Sales, Business Development and Econimics.",contacts:{email:"techoi77@gmail.com",linkedin:"https://www.linkedin.com/in/choi-jimmy-640b1a17b",github:"techoi"}}}}}}},173:function(e,t,a){e.exports={author__photo:"Author-module--author__photo--36xCH",author__title:"Author-module--author__title--2CaTb","author__title-link":"Author-module--author__title-link--Yrism",author__subtitle:"Author-module--author__subtitle--cAaEB"}},174:function(e,t,a){var n=a(28),i=a(37);a(175)("keys",function(){return function(e){return i(n(e))}})},175:function(e,t,a){var n=a(11),i=a(18),r=a(19);e.exports=function(e,t){var a=(i.Object||{})[e]||Object[e],c={};c[e]=t(a),n(n.S+n.F*r(function(){a(1)}),"Object",c)}},176:function(e,t,a){e.exports={icon:"Icon-module--icon--Gpyvw"}},177:function(e,t,a){e.exports={contacts:"Contacts-module--contacts--1rGd1",contacts__list:"Contacts-module--contacts__list--3OgdW","contacts__list-item":"Contacts-module--contacts__list-item--16p9q","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2MIDn"}},178:function(e,t,a){e.exports={copyright:"Copyright-module--copyright--1ariN"}},179:function(e,t,a){e.exports={menu:"Menu-module--menu--Efbin",menu__list:"Menu-module--menu__list--31Zeo","menu__list-item":"Menu-module--menu__list-item--1lJ6B","menu__list-item-link":"Menu-module--menu__list-item-link--10Ush","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2CbUO"}},180:function(e,t,a){e.exports={sidebar:"Sidebar-module--sidebar--X4z2p",sidebar__inner:"Sidebar-module--sidebar__inner--Jdc5s"}},181:function(e,t,a){e.exports={page:"Page-module--page--2nMky",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},184:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(189),c=a.n(r),o=a(36),l=a(226),s=a.n(l),m=function(e){var t=e.edges;return i.a.createElement("div",{className:s.a.feed},t.map(function(e){return i.a.createElement("div",{className:s.a.feed__item,key:e.node.fields.slug},i.a.createElement("div",{className:s.a["feed__item-meta"]},i.a.createElement("time",{className:s.a["feed__item-meta-time"],dateTime:c()(e.node.frontmatter.date).format("MMMM D, YYYY")},c()(e.node.frontmatter.date).format("MMMM D, YYYY")),i.a.createElement("span",{className:s.a["feed__item-meta-divider"]}),i.a.createElement("span",{className:s.a["feed__item-meta-category"]},i.a.createElement(o.Link,{to:e.node.fields.categorySlug,className:s.a["feed__item-meta-category-link"]},e.node.frontmatter.category))),i.a.createElement("h2",{className:s.a["feed__item-title"]},i.a.createElement(o.Link,{className:s.a["feed__item-title-link"],to:e.node.fields.slug},e.node.frontmatter.title)),i.a.createElement("p",{className:s.a["feed__item-description"]},e.node.frontmatter.description),i.a.createElement(o.Link,{className:s.a["feed__item-readmore"],to:e.node.fields.slug},"Read"))}))};a.d(t,"a",function(){return m})},185:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(227),c=a.n(r),o=a(36),l=a(167),s=a(228),m=a.n(s),u=c.a.bind(m.a),_=function(e){var t=e.prevPagePath,a=e.nextPagePath,n=e.hasNextPage,r=e.hasPrevPage,c=u({"pagination__prev-link":!0,"pagination__prev-link--disable":!r}),s=u({"pagination__next-link":!0,"pagination__next-link--disable":!n});return i.a.createElement("div",{className:m.a.pagination},i.a.createElement("div",{className:m.a.pagination__prev},i.a.createElement(o.Link,{rel:"prev",to:t,className:c},l.b.PREV_PAGE)),i.a.createElement("div",{className:m.a.pagination__next},i.a.createElement(o.Link,{rel:"next",to:a,className:s},l.b.NEXT_PAGE)))};a.d(t,"a",function(){return _})},226:function(e,t,a){e.exports={feed__item:"Feed-module--feed__item--2D5rE","feed__item-title":"Feed-module--feed__item-title--3nigr","feed__item-title-link":"Feed-module--feed__item-title-link--iFMRs","feed__item-description":"Feed-module--feed__item-description--1uO8e","feed__item-meta-time":"Feed-module--feed__item-meta-time--3t1fg","feed__item-meta-divider":"Feed-module--feed__item-meta-divider--N-Q0A","feed__item-meta-category-link":"Feed-module--feed__item-meta-category-link--23f8F","feed__item-readmore":"Feed-module--feed__item-readmore--1u6bI"}},227:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(i.apply(this,n));else if("object"===r)for(var c in n)a.call(n,c)&&n[c]&&e.push(this&&this[c]||c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},228:function(e,t,a){e.exports={pagination:"Pagination-module--pagination--2H3nO",pagination__prev:"Pagination-module--pagination__prev--bet5s","pagination__prev-link":"Pagination-module--pagination__prev-link--1Nzs6","pagination__prev-link--disable":"Pagination-module--pagination__prev-link--disable--Yklx9",pagination__next:"Pagination-module--pagination__next--3hFiN","pagination__next-link":"Pagination-module--pagination__next-link--3FUtA","pagination__next-link--disable":"Pagination-module--pagination__next-link--disable--30UwZ"}}}]);
//# sourceMappingURL=2-7d09cfc527294077dac7.js.map