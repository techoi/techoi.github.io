(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{164:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(165),i=a(36),s=(a(27),a(169),a(216)),c=a(171),u=a(217),l=a.n(u),m=function(t){var e=t.data.site.siteMetadata.author;return r.a.createElement("div",{className:l.a.author},r.a.createElement("p",{className:l.a.author__bio},e.bio,r.a.createElement("a",{className:l.a["author__bio-twitter"],href:Object(c.a)("twitter",e.contacts.twitter),rel:"noopener noreferrer",target:"_blank"},r.a.createElement("strong",null,e.name)," has no Twitter right now")))},d=function(t){return r.a.createElement(i.StaticQuery,{query:"2015307863",render:function(e){return r.a.createElement(m,Object.assign({},t,{data:e}))},data:s})},f=a(218),p=a(219),h=a.n(p),v=function(t){var e=t.data,a=t.postTitle,n=t.postSlug,o=e.site.siteMetadata,i=o.siteUrl,s=o.disqusShortname;return s?r.a.createElement(h.a,{shortname:s,identifier:a,title:a,url:i+n}):null},_=function(t){return r.a.createElement(i.StaticQuery,{query:"1989642023",render:function(e){return r.a.createElement(v,Object.assign({},t,{data:e}))},data:f})},g=a(221),b=a.n(g),E=function(t){var e=t.body,a=t.title;return r.a.createElement("div",{className:b.a.content},r.a.createElement("h1",{className:b.a.content__title},a),r.a.createElement("div",{className:b.a.content__body,dangerouslySetInnerHTML:{__html:e}}))},y=a(189),w=a.n(y),k=a(223),N=a.n(k),M=function(t){var e=t.date;return r.a.createElement("div",{className:N.a.meta},r.a.createElement("p",{className:N.a.meta__date},"Published ",w()(e).format("D MMM YYYY")))},T=a(224),O=a.n(T),S=function(t){var e=t.tags,a=t.tagSlugs;return r.a.createElement("div",{className:O.a.tags},r.a.createElement("ul",{className:O.a.tags__list},a.map(function(t,a){return r.a.createElement("li",{className:O.a["tags__list-item"],key:e[a]},r.a.createElement(i.Link,{to:t,className:O.a["tags__list-item-link"]},e[a]))})))},x=a(225),z=a.n(x),P=function(t){var e=t.post,a=e.frontmatter,n=a.tags,o=a.title,s=a.date,c=e.html,u=e.fields.tagSlugs;return r.a.createElement("div",{className:z.a.post},r.a.createElement(i.Link,{className:z.a["post__home-button"],to:"/"},"All Posts"),r.a.createElement("div",{className:z.a.post__content},r.a.createElement(E,{body:c,title:o})),r.a.createElement("div",{className:z.a.post__footer},r.a.createElement(M,{date:s}),r.a.createElement(S,{tags:n,tagSlugs:u}),r.a.createElement(d,null)),r.a.createElement("div",{className:z.a.post__comments},r.a.createElement(_,{postSlug:e.fields.slug,postTitle:e.frontmatter.title})))};a.d(e,"query",function(){return j});var j="2204190620";e.default=function(t){var e=t.data,a=e.site.siteMetadata,n=a.title,i=a.subtitle,s=e.markdownRemark.frontmatter,c=s.title,u=s.description,l=null!==u?u:i;return r.a.createElement(o.a,{title:c+" - "+n,description:l},r.a.createElement(P,{post:e.markdownRemark}))}},165:function(t,e,a){"use strict";var n=a(0),r=a.n(n),o=a(182),i=a.n(o),s=a(170),c=a.n(s),u=function(t){var e=t.children,a=t.title,n=t.description;return r.a.createElement("div",{className:c.a.layout},r.a.createElement(i.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n})),e)};a.d(e,"a",function(){return u})},167:function(t,e,a){"use strict";var n={TWITTER:{path:"M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z",viewBox:"0 0 26 28"},FACEBOOK:{path:"M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z",viewBox:"0 0 16 28"},LINKEDIN:{path:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",viewBox:"0 0 28 28"},VKONTAKTE:{path:"M29.953 8.125c0.234 0.641-0.5 2.141-2.344 4.594-3.031 4.031-3.359 3.656-0.859 5.984 2.406 2.234 2.906 3.313 2.984 3.453 0 0 1 1.75-1.109 1.766l-4 0.063c-0.859 0.172-2-0.609-2-0.609-1.5-1.031-2.906-3.703-4-3.359 0 0-1.125 0.359-1.094 2.766 0.016 0.516-0.234 0.797-0.234 0.797s-0.281 0.297-0.828 0.344h-1.797c-3.953 0.25-7.438-3.391-7.438-3.391s-3.813-3.938-7.156-11.797c-0.219-0.516 0.016-0.766 0.016-0.766s0.234-0.297 0.891-0.297l4.281-0.031c0.406 0.063 0.688 0.281 0.688 0.281s0.25 0.172 0.375 0.5c0.703 1.75 1.609 3.344 1.609 3.344 1.563 3.219 2.625 3.766 3.234 3.437 0 0 0.797-0.484 0.625-4.375-0.063-1.406-0.453-2.047-0.453-2.047-0.359-0.484-1.031-0.625-1.328-0.672-0.234-0.031 0.156-0.594 0.672-0.844 0.766-0.375 2.125-0.391 3.734-0.375 1.266 0.016 1.625 0.094 2.109 0.203 1.484 0.359 0.984 1.734 0.984 5.047 0 1.062-0.203 2.547 0.562 3.031 0.328 0.219 1.141 0.031 3.141-3.375 0 0 0.938-1.625 1.672-3.516 0.125-0.344 0.391-0.484 0.391-0.484s0.25-0.141 0.594-0.094l4.5-0.031c1.359-0.172 1.578 0.453 1.578 0.453z",viewBox:"0 0 31 28"},GITHUB:{path:"M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z",viewBox:"0 0 26 28"},EMAIL:{path:"M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z",viewBox:"0 0 28 28"},RSS:{path:"M6 21c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM14 22.922c0.016 0.281-0.078 0.547-0.266 0.75-0.187 0.219-0.453 0.328-0.734 0.328h-2.109c-0.516 0-0.938-0.391-0.984-0.906-0.453-4.766-4.234-8.547-9-9-0.516-0.047-0.906-0.469-0.906-0.984v-2.109c0-0.281 0.109-0.547 0.328-0.734 0.172-0.172 0.422-0.266 0.672-0.266h0.078c3.328 0.266 6.469 1.719 8.828 4.094 2.375 2.359 3.828 5.5 4.094 8.828zM22 22.953c0.016 0.266-0.078 0.531-0.281 0.734-0.187 0.203-0.438 0.313-0.719 0.313h-2.234c-0.531 0-0.969-0.406-1-0.938-0.516-9.078-7.75-16.312-16.828-16.844-0.531-0.031-0.938-0.469-0.938-0.984v-2.234c0-0.281 0.109-0.531 0.313-0.719 0.187-0.187 0.438-0.281 0.688-0.281h0.047c5.469 0.281 10.609 2.578 14.484 6.469 3.891 3.875 6.188 9.016 6.469 14.484z",viewBox:"0 0 22 28"}},r={PREV_PAGE:"← PREV",NEXT_PAGE:"→ NEXT"};a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r})},170:function(t,e,a){t.exports={layout:"Layout-module--layout--EpQHE"}},171:function(t,e,a){"use strict";var n=a(167),r=function(t){var e;switch(t){case"twitter":e=n.a.TWITTER;break;case"github":e=n.a.GITHUB;break;case"vkontakte":e=n.a.VKONTAKTE;break;case"linkedin":e=n.a.LINKEDIN;break;case"email":e=n.a.EMAIL;break;case"rss":e=n.a.RSS;break;default:e={}}return e},o=function(t,e){var a;switch(t){case"twitter":a="https://www.twitter.com/"+e;break;case"github":a="https://github.com/"+e;break;case"vkontakte":a="https://vk.com/"+e;break;case"linkedin":a=""+e;break;case"email":a="mailto:"+e;break;default:a=e}return a};a.d(e,"b",function(){return r}),a.d(e,"a",function(){return o})},216:function(t){t.exports={data:{site:{siteMetadata:{author:{name:"Jimmy Choi (techoi)",bio:"Frontend Engineer, based on Sales, Business Development and Econimics.",contacts:{twitter:"#"}}}}}}},217:function(t,e,a){t.exports={author:"Author-module--author--2kf8a","author__bio-twitter":"Author-module--author__bio-twitter--MufFK"}},218:function(t){t.exports={data:{site:{siteMetadata:{disqusShortname:"techoi",url:"https://techoi.github.io"}}}}},219:function(t,e,a){"use strict";t.exports=a(220)},220:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),o=s(a(0)),i=s(a(1));function s(t){return t&&t.__esModule?t:{default:t}}var c=["shortname","identifier","title","url","category_id","onNewComment","language"],u=!1;function l(t,e){var a=e.onNewComment,n=e.language,r=function(t,e){var a={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n]);return a}(e,["onNewComment","language"]);for(var o in r)t.page[o]=r[o];t.language=n,a&&(t.callbacks={onNewComment:[a]})}var m=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.default.Component),r(e,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(t,e){return t.identifier!==this.props.identifier}},{key:"render",value:function(){var t=this,e=Object.keys(this.props).reduce(function(e,a){return c.some(function(t){return t===a})?e:n({},e,function(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}({},a,t.props[a]))},{});return o.default.createElement("div",e,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!u){var t=this.disqus=document.createElement("script"),e=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];t.async=!0,t.type="text/javascript",t.src="//"+this.props.shortname+".disqus.com/embed.js",e.appendChild(t),u=!0}}},{key:"loadDisqus",value:function(){var t=this,e={};c.forEach(function(a){"shortname"!==a&&t.props[a]&&(e[a]=t.props[a])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){l(this,e),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){l(this,e)},this.addDisqusScript())}}]),e}();m.displayName="DisqusThread",m.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},m.defaultProps={url:"undefined"==typeof window?null:window.location.href},e.default=m},221:function(t,e,a){t.exports={content:"Content-module--content--1tfQQ",content__title:"Content-module--content__title--1qFLI",content__body:"Content-module--content__body--2bfha"}},223:function(t,e,a){t.exports={meta__date:"Meta-module--meta__date--3FNDv"}},224:function(t,e,a){t.exports={tags:"Tags-module--tags--1oNz4",tags__list:"Tags-module--tags__list--2UTD-","tags__list-item":"Tags-module--tags__list-item--b7tap","tags__list-item-link":"Tags-module--tags__list-item-link--1hQL0"}},225:function(t,e,a){t.exports={post__footer:"Post-module--post__footer--1BvmJ",post__comments:"Post-module--post__comments--2T8dL","post__home-button":"Post-module--post__home-button--3zx_9"}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-7beeefb8387f336b4d5b.js.map