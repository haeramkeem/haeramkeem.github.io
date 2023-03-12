(()=>{"use strict";var e={571:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    background-color: #000030;\n    min-height: 100vh;\n}\n\ninput, textarea, button {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    border: none;\n    outline-style: none;\n    border-radius: 0px;\n    height: 100%;\n    width: 100%;\n    background: none\n}\n\na, go-to {\n    color: white;\n    text-decoration: none;\n    cursor: pointer;\n}\n\na:hover, go-to:hover {\n    text-decoration: underline;\n}\n\n/* ------------------------------------ GLOBAL CLASS -------------------------------------- */\n.one-page {\n    width: 100%;\n    height: calc(100vw * 0.6);\n    overflow: hidden;\n}\n\n/* ------------------------------------ FONTS -------------------------------------- */\n\n.font-coming-soon {\n    font-family: 'Coming Soon', cursive;\n}\n\n.font-luckiest-guy {\n    font-family: 'Luckiest Guy', cursive;\n}\n\n/* ----------------------------------------- HEADER ------------------------------------------ */\n\nheader {\n    position: fixed;\n    width: 100%;\n    height: 64px;\n    mix-blend-mode: difference;\n    z-index: 1;\n    padding: 0px 40px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader>h1 {\n    font-family: 'Oswald', sans-serif;\n}\n\nnav>go-to {\n    margin-left: 10px;\n    font-family: 'Contrail One', cursive;\n}\n\n/* ----------------------------------------- MAIN ------------------------------------------ */\n#slide-list,\n#slide-list>* {\n    height: 100%;\n}\n\n#slide-list>* {\n    float: left;\n    width: 100vw;\n}\n\n#slide-list>img {\n    object-fit: cover;\n}\n\n/* ----------------------------------------- WORK-THUMBNAIL ------------------------------------------ */\nwork-thumbnail {\n    cursor: pointer;\n}\n\n.wt-top,\n.wt-bottom,\n.wt-bottom>img {\n    width: 100%;\n    height: 100%;\n}\n\n.wt-bottom>img {\n    object-fit: cover;\n}\n\n.wt-top {\n    position: relative;\n    top: -100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    color: white;\n}\n\n/* ------------------------------------------ DETAIL ---------------------------------------------- */\ndetail-page {\n    display: block;\n    padding: 64px 40px 8px 40px;\n    color: white;\n    font-family: 'Fira Sans Condensed', sans-serif;\n}\n\ndetail-page>h2 {\n    font-size: 64px;\n    font-weight: 500;\n}\n\ndetail-page>h3 {\n    font-size: 32px;\n    font-weight: 100;\n    font-style: italic;\n}\n\ndetail-page>img {\n    width: 100%;\n}\n\n.dp-wrapper {\n    padding: 16px 0px;\n    display: flex;\n}\n\n.dp-description {\n    width: 70%;\n    padding-right: 16px;\n}\n.dp-links {\n    width: 30%;\n}\n\n.dp-wrapper h4 {\n    font-size: 32px;\n    font-weight: 400;\n}\n\n.dp-description>p,\n.dp-links>a {\n    font-weight: 100;\n}\n\n/* ------------------------------------------ FOOTER ---------------------------------------------- */\nmusic-player {\n    display: block;\n    padding: 10px 40px;\n    background-color: #000060;\n}\n\n#copyright-box {\n    color: white;\n    background-color: #000090;\n    font-family: 'Sriracha', cursive;\n    font-size: 6vw;\n    text-align: center;\n}\n\n#contact-box {\n    padding: 30px 10%;\n    background-color: #0000c0;\n    font-family: 'Lily Script One', cursive;\n    font-size: 4vw;\n    color: white;\n}\n\n#contact-box>a {\n    display: inline-block;\n    text-decoration: underline;\n}\n\n#github {\n    width: calc(30% - 10px);\n}\n\n#email {\n    width: calc(70% - 10px);\n    cursor: pointer;\n}\n",""]);const i=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},374:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var o=n(379),r=n.n(o),i=n(795),s=n.n(i),a=n(695),l=n.n(a),u=n(216),c=n.n(u),d=n(571),p={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=l()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};p.domAPI=s(),p.insertStyleElement=c(),r()(d.Z,p);const f=d.Z&&d.Z.locals?d.Z.locals:void 0},695:e=>{var t={};e.exports=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},s=[],a=0;a<e.length;a++){var l=e[a],u=o.base?l[0]+o.base:l[0],c=i[u]||0,d="".concat(u," ").concat(c);i[u]=c+1;var p=n(d),f={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(t[p].references++,t[p].updater(f)):t.push({identifier:d,updater:r(f,o),references:1}),s.push(d)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);t[a].references--}for(var l=o(e,r),u=0;u<i.length;u++){var c=n(i[u]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=l}}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},178:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(407));class i extends r.default{constructor(){super()}get template(){return'\n        <header>\n            <h1><a href="/"></a></h1>\n        </header>\n        <main id="page-view"></main>\n        '}dispatch(){window.$store.dispatch("getWorks")}}t.default=i},582:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(407));class i extends r.default{constructor(){super(),this.href=this.getAttribute("href")||""}get listeners(){return[{query:"self",eventName:"click",eventListener:e=>{e.preventDefault(),window.$router.push(this.href)}}]}}t.default=i},942:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(407));class i extends r.default{constructor(){super()}get template(){return'\n<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/123950713&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/platform" title="Boiler Room" target="_blank" style="color: #cccccc; text-decoration: none;">Boiler Room</a> · <a href="https://soundcloud.com/platform/kaytranada-boiler-room" title="Kaytranada Boiler Room Montreal DJ Set" target="_blank" style="color: #cccccc; text-decoration: none;">Kaytranada Boiler Room Montreal DJ Set</a></div>\n        '}}t.default=i},861:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(407));class i extends r.default{constructor(){super();const e=parseInt(this.getAttribute("index"));this.project=window.$store.state.works[e],this.overlap=this.getAttribute("overlap")||"disable"}get template(){const e="always"===this.overlap?"visible":"hidden";return`\n        <div class="wt-bottom">\n                <img src="${this.project.spec.images.banner}"></img>\n            </div>\n            <div class="wt-top" style="visibility:${e};">\n                <h2>${this.project.metadata.name}</h2>\n                <p>${this.project.spec.description.short}</p>\n            </div>\n        `}get listeners(){const e=this.select(".wt-bottom"),t=[{query:"self",eventName:"click",eventListener:e=>{e.preventDefault(),window.$router.push(`/works/${this.project.metadata.urlEscape}`)}}];return e&&"hover"===this.overlap&&t.push({query:"self",eventName:"pointerenter",eventListener:t=>{e.style.visibility="visible"}},{query:"self",eventName:"pointerleave",eventListener:t=>{e.style.visibility="hidden"}}),t}}t.default=i},740:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(861)),i=o(n(942)),s=o(n(582));t.default=function(){customElements.define("work-thumbnail",r.default),customElements.define("music-player",i.default),customElements.define("go-to",s.default)}},959:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(){this.components={}}subscribe(e,t){return this.components.hasOwnProperty(e)||(this.components[e]=[]),this.components[e].push(t)}publish(e){return this.components.hasOwnProperty(e)?this.components[e].map((e=>e.render())):[]}}},407:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});class n extends HTMLElement{constructor(e){super(),void 0!==e&&window.$store.events.subscribe(e.subscribe,this)}connectedCallback(){this.innerHTML=this.template||this.innerHTML,this.dispatch(),this.listeners.forEach((e=>{this.select(e.query).addEventListener(e.eventName,e.eventListener)}))}select(e){return"self"===e?this:this.querySelector(e)}get template(){return""}get listeners(){return[]}render(){}dispatch(){}}t.default=n},607:function(e,t,n){var o,r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(374);const i=r(n(740)),s=r(n(905));i.default(),s.default(),r(n(440)).default(),r(n(527)).default(),null===(o=document.getElementById("app"))||void 0===o||o.appendChild(document.createElement("main-app"))},54:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(407));class i extends r.default{constructor(){super()}get template(){return'<example-component props="example-props"></example-component>'}dispatch(){window.$store.dispatch("getSomethingFromJSONPlaceholder","")}}t.default=i},628:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(407));class i extends r.default{constructor(){super()}get template(){return'<example-component props="example-props"></example-component>'}dispatch(){window.$store.dispatch("getSomethingFromJSONPlaceholder","")}}t.default=i},108:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(407));class i extends r.default{constructor(){super();const e=window.location.pathname.split("/").pop();this.project=window.$store.state.works.filter((t=>t.metadata.urlEscape===e))[0]}get template(){const e=this.project.spec.description.full?`<p>${this.project.spec.description.full}</p>`:"",t=this.project.spec.images.additional.reduce(((e,t)=>e+`<img src="${t}"></img>`),""),n=this.project.spec.urls.additional.reduce(((e,t)=>e+this.genAnchor(t,"Additional Links")),"");return`\n        <h2>${this.project.metadata.name}</h2>\n        <h3>${this.project.spec.description.short}</h3>\n        <img src="${this.project.spec.images.banner}"></img>\n        ${t}\n        <div class="dp-wrapper">\n            <div class="dp-description">\n                <h4>Description</h4>\n                ${e}\n            </div>\n            <div class="dp-links">\n                <h4>Links</h4>\n                ${this.genAnchor(this.project.spec.urls.gitRepository,"Official Git Repository")}\n                ${n}\n            </div>\n        </div>\n        `}genAnchor(e,t){return`<a href="${e}" target="_blank">${t}</a>`}}t.default=i},721:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(407));class i extends r.default{constructor(){super({subscribe:"works"}),this.intervalID=setInterval((()=>{})),this.numberOfSlides=0}get template(){return'\n        <div class="one-page">\n            <div id="slide-list">\n                <img src="prerelease.png" alt="Main image">\n            </div>\n        </div>\n        '}dispatch(){window.$store.dispatch("getWorks")}render(){const e=this.select("#slide-list"),t=window.$store.state.works.filter((e=>"running"===e.status.enum));t.forEach(((t,n)=>{e.innerHTML+=`\n                <work-thumbnail index=${n}></work-thumbnail>\n            `})),this.numberOfSlides=t.length+1,e.style.width=window.innerWidth*this.numberOfSlides+"px";let n=0;this.intervalID=setInterval((()=>{e.style.transition="500ms",n=n<this.numberOfSlides-1?n+1:0,e.style.transform=`translateX(-${window.innerWidth*n}px)`}),5e3)}get listeners(){const e=[];return e.push({query:"self",eventName:"resize",eventListener:e=>{clearInterval(this.intervalID);const t=this.select("#slide-list");t.style.width=window.innerWidth*this.numberOfSlides+"px";let n=0;this.intervalID=setInterval((()=>{t.style.transition="500ms",n=n<this.numberOfSlides-1?n+1:0,t.style.transform=`translateX(-${window.innerWidth*n}px)`}),5e3)}}),e}}t.default=i},859:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(407));class i extends r.default{constructor(){super()}get template(){return'<example-component props="example-props"></example-component>'}dispatch(){window.$store.dispatch("getSomethingFromJSONPlaceholder","")}}t.default=i},905:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(178)),i=o(n(54)),s=o(n(628)),a=o(n(721)),l=o(n(859)),u=o(n(108));t.default=function(){customElements.define("main-app",r.default),customElements.define("about-page",i.default),customElements.define("contact-page",s.default),customElements.define("home-page",a.default),customElements.define("works-page",l.default),customElements.define("detail-page",u.default)}},440:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(458));t.default=function(){window.onload=()=>{window.$router=new r.default("#page-view"),window.$router.push(window.location.pathname)}}},458:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(547));t.default=class{constructor(e){this.target=document.querySelector(e),window.onpopstate=()=>{this.render(r.default(window.location.pathname))}}render(e){var t;if("/"===e.component[0])console.warn(`Invalid Router Path: ${e.component}`);else{const n=document.createElement(e.component);for(let t of e.attributes)n.setAttribute(t.name,t.value);const o=this.target.children;for(;0!==o.length;)null===(t=o.item(0))||void 0===t||t.remove();this.target.appendChild(n)}}push(e){window.history.pushState({},e,window.location.origin+e),this.render(r.default(e))}pushWithRefresh(e){"string"==typeof e?window.location.pathname=e:window.location.reload()}refresh(){window.location.reload()}}},547:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){switch(e){case"/":return{component:"home-page",attributes:[]};case"/about":return{component:"about-page",attributes:[]};case"/contact":return{component:"contact-page",attributes:[]};case"/works":return{component:"works-page",attributes:[]}}return/\/works\/.*/.test(e)?{component:"detail-page",attributes:[]}:{component:"home-page",attributes:[]}}},170:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});const n={getWorks(e){fetch("https://raw.githubusercontent.com/saltwalks/saltwalks.github.io/gh-pages/api/works").then((t=>{t.ok&&t.json().then((t=>{e.commit("works","overwrite",t)}))})).catch()}};t.default=n},527:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(170)),i=o(n(503)),s=o(n(419)),a=o(n(470));t.default=function(){window.$store=new a.default({actions:r.default,state:i.default,mutations:s.default})}},419:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default={overwrite:(e,t)=>t}},503:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default={works:[]}},470:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(959));t.default=class{constructor(e){this.events=new r.default,this.status="resting",this.actions=e.actions,this.mutations=e.mutations;let t=this;this.state=new Proxy(e.state,{set:function(e,n,o){return e[n.toString()]=o,console.log(`[${new Date}] State changed : ${n.toString()}`),t.events.publish(`${n.toString()}`),t.status="mutations",!0}})}dispatch(e,t){return"function"!=typeof this.actions[e]?(console.error(`Action ${e} doesn't exists`),!1):(this.status="action",this.actions[e](this,t),!0)}commit(e,t,n){if("function"!=typeof this.mutations[t])return console.error(`Mutation ${t} doesn't exists`),!1;this.status="mutation";let o=this.mutations[t](this.state[e],n);return this.state[e]=o,!0}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(607)})();