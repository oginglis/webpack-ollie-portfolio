!function(n){var t={};function e(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(o,i,function(t){return n[t]}.bind(null,i));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=64)}([function(n,t,e){(function(t){var e=function(n){return n&&n.Math==Math&&n};n.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||Function("return this")()}).call(this,e(29))},function(n,t,e){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),r=[];function s(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function c(n,t){for(var e={},o=[],i=0;i<n.length;i++){var a=n[i],c=t.base?a[0]+t.base:a[0],l=e[c]||0,p="".concat(c," ").concat(l);e[c]=l+1;var d=s(p),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(r[d].references++,r[d].updater(u)):r.push({identifier:p,updater:g(u,t),references:1}),o.push(p)}return o}function l(n){var t=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=e.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){t.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(t);else{var r=a(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var p,d=(p=[],function(n,t){return p[n]=t,p.filter(Boolean).join("\n")});function u(n,t,e,o){var i=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=d(t,i);else{var a=document.createTextNode(i),r=n.childNodes;r[t]&&n.removeChild(r[t]),r.length?n.insertBefore(a,r[t]):n.appendChild(a)}}function f(n,t,e){var o=e.css,i=e.media,a=e.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var m=null,h=0;function g(n,t){var e,o,i;if(t.singleton){var a=h++;e=m||(m=l(t)),o=u.bind(null,e,a,!1),i=u.bind(null,e,a,!0)}else e=l(t),o=f.bind(null,e,t),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else i()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var e=c(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<e.length;o++){var i=s(e[o]);r[i].references--}for(var a=c(n,t),l=0;l<e.length;l++){var p=s(e[l]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}e=a}}}},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var i=(r=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[e].concat(a).concat([i]).join("\n")}var r,s,c;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);o&&i[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),t.push(c))}},t}},function(n,t){var e={}.hasOwnProperty;n.exports=function(n,t){return e.call(n,t)}},function(n,t,e){var o=e(5);n.exports=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(n,t){n.exports=function(n){try{return!!n()}catch(n){return!0}}},function(n,t){n.exports=function(n){return"object"==typeof n?null!==n:"function"==typeof n}},function(n,t,e){var o=e(4),i=e(14),a=e(11);n.exports=o?function(n,t,e){return i.f(n,t,a(1,e))}:function(n,t,e){return n[t]=e,n}},function(n,t,e){var o=e(31),i=e(33);n.exports=function(n){return o(i(n))}},function(n,t,e){var o=e(0),i=e(7);n.exports=function(n,t){try{i(o,n,t)}catch(e){o[n]=t}return t}},function(n,t,e){var o=e(4),i=e(30),a=e(11),r=e(8),s=e(12),c=e(3),l=e(13),p=Object.getOwnPropertyDescriptor;t.f=o?p:function(n,t){if(n=r(n),t=s(t,!0),l)try{return p(n,t)}catch(n){}if(c(n,t))return a(!i.f.call(n,t),n[t])}},function(n,t){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}},function(n,t,e){var o=e(6);n.exports=function(n,t){if(!o(n))return n;var e,i;if(t&&"function"==typeof(e=n.toString)&&!o(i=e.call(n)))return i;if("function"==typeof(e=n.valueOf)&&!o(i=e.call(n)))return i;if(!t&&"function"==typeof(e=n.toString)&&!o(i=e.call(n)))return i;throw TypeError("Can't convert object to primitive value")}},function(n,t,e){var o=e(4),i=e(5),a=e(34);n.exports=!o&&!i((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},function(n,t,e){var o=e(4),i=e(13),a=e(15),r=e(12),s=Object.defineProperty;t.f=o?s:function(n,t,e){if(a(n),t=r(t,!0),a(e),i)try{return s(n,t,e)}catch(n){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(n[t]=e.value),n}},function(n,t,e){var o=e(6);n.exports=function(n){if(!o(n))throw TypeError(String(n)+" is not an object");return n}},function(n,t,e){var o=e(17),i=Function.toString;"function"!=typeof o.inspectSource&&(o.inspectSource=function(n){return i.call(n)}),n.exports=o.inspectSource},function(n,t,e){var o=e(0),i=e(9),a=o["__core-js_shared__"]||i("__core-js_shared__",{});n.exports=a},function(n,t){n.exports={}},function(n,t,e){var o=e(44),i=e(0),a=function(n){return"function"==typeof n?n:void 0};n.exports=function(n,t){return arguments.length<2?a(o[n])||a(i[n]):o[n]&&o[n][t]||i[n]&&i[n][t]}},function(n,t){var e=Math.ceil,o=Math.floor;n.exports=function(n){return isNaN(n=+n)?0:(n>0?o:e)(n)}},function(n,t,e){var o=e(2),i=e(55),a=e(56);t=o(!1);var r=i(a);t.push([n.i,".load {\n  position: absolute;\n  top: 50vh;\n  left: 50vw;\n  transform: translate(-50%, -50%) scale(1);\n  opacity: 0%;\n  -webkit-opacity: 0;\n  font-size: 78.5px;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  font-family: kormelink ;\n  font-weight: normal;\n  z-index: 2;\n  transition: opacity 1s;\n  transition-timing-function: linear;\n  animation-name: zoom;\n  animation-duration: 3s;\n  transition: transform 3s ease;\n}\n\n.load.active {\n  -webkit-opacity: 1;\n  opacity: 100%;\n  transform: translate(-50%, -50%) scale(1.1);\n}\n\n.homepage-image-fullscreen {\n  display: flex;\n  align-items: center;\n  height: 100vh;\n  width:100vw;\n}\n\n\n.homepage-image-div {\n  height:100%;\n  opacity: 0% !important;\n  -webkit-opacity: 0;\n  margin:0 auto;\n  width: 50vh;\n  background:url("+r+") 50% 50% no-repeat;\n  transition: opacity 2s;\n  transition-timing-function: ease;\n  background-size:contain;\n  overflow: hidden;\n  mix-blend-mode: multiply;\n}\n\n\n.homepage-image-div.active {\n  opacity: 1 !important;\n  -webkit-opacity: 1 !important;\n}\n\n@media only screen and (min-width: 375px) {\n  .homepage-image-div {\n    width: 80vw;\n    opacity: 0 !important;\n  }\n  .homepage-image-div.active {\n    opacity: 1 !important;\n    -webkit-opacity: 1 !important;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .homepage-image-div {\n    width: 50vh;\n    opacity: 0 !important;\n  }\n  .homepage-image-div.active {\n    opacity: 1 !important;\n    -webkit-opacity: 1 !important;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  .homepage-image-div {\n    width: 50vh;\n    opacity: 0 !important;\n  }\n  .homepage-image-div.active {\n    opacity: 1 !important;\n    -webkit-opacity: 1 !important;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .homepage-image-div {\n    width: 50vh;\n    opacity: 0 !important;\n  }\n  .homepage-image-div.active {\n    opacity: 1 !important;\n    -webkit-opacity: 1 !important;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  .homepage-image-div {\n    width: 50vh;\n    opacity: 0 !important;\n  }\n  .homepage-image-div.active {\n    opacity: 1 !important;\n    -webkit-opacity: 1 !important;\n  }\n}\n",""]),n.exports=t},function(n,t,e){(t=e(2)(!1)).push([n.i,".show-page-wrapper {\n  display: flex;\n  height: 100vh;\n}\n\n@media only screen and (max-width: 600px) {\n  .show-page-wrapper {\n    display: flex;\n    flex-direction: column-reverse;\n    height: auto;\n    align-items: center;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .show-page-text-left {\n    width: 100vw;\n    height: auto;\n    padding: 30px 50px 30px 30px;\n    overflow: auto;\n    position: relative;\n  }\n}\n\n@media only screen and (min-width: 601px) {\n  .show-page-text-left {\n    width: 50vw;\n    padding: 30px 50px 30px 30px;\n    overflow: scroll;\n    margin-bottom: 35px;\n  }\n}\n\n.show-page-title {\n  white-space: nowrap;\n  font-size:2.3rem;\n  overflow: hidden;\n}\n\n.app-type {\n  position: relative;\n  font-size: 20px;\n  top: -7px;\n  right: -7px;\n}\n\n\n@media only screen and (max-width: 600px) {\n  .app-type {\n    position: relative;\n    font-size: 10px;\n    top: -10px;\n    right: -7px;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .app-type {\n    position: relative;\n    font-size: 20px;\n    top: -7px;\n    right: -7px;\n  }\n}\n\nh2.show-tech {\n  font-family: kormelink !important;\n  font-weight: normal;\n  font-size: 20px;\n}\n\n.show-body-text {\n  font-family: kormelink ;\n  font-weight: normal;\n  text-align: justify;\n}\n\n@media only screen and (max-width: 600px) {\n  .facts {\n    font-family: neue-haas-grotesk-text,sans-serif;\n    font-weight: lighter;\n    font-size: 12px;\n    display: inline-block;\n    border: 1px solid black;\n    padding: 5px;\n  }\n}\n\n@media only screen and (min-width: 601px) {\n  .facts {\n    font-family: neue-haas-grotesk-text,sans-serif;\n    font-weight: lighter;\n    font-size: 12px;\n    display: inline-block;\n    border: 1px solid black;\n    padding: 5px;\n    cursor: pointer;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .date-show {\n    transform: rotate(-90deg);\n    font-family: neue-haas-grotesk-text,sans-serif;\n    font-weight: lighter;\n    font-size: 12px;\n    position: absolute;\n    top: 50%;\n    right: 2%;\n  }\n}\n\n@media only screen and (min-width: 601px) {\n  .date-show {\n    transform: rotate(-90deg);\n    font-family: neue-haas-grotesk-text,sans-serif;\n    font-weight: lighter;\n    font-size: 12px;\n    position: absolute;\n    right: 51vw;\n    top: 45vh;\n  }\n}\n\n\n@media only screen and (max-width: 600px) {\n  .back-to-projects {\n    right: 2%;\n    position: absolute;\n    top: 74px;\n    font-family: neue-haas-grotesk-text,sans-serif;\n    font-weight: lighter;\n    font-size: 12px;\n    transform: rotate(-90deg) translateY(39px);\n  }\n\n  .back-to-projects:hover{\n   text-decoration: underline;\n  }\n}\n\n@media only screen and (min-width: 601px) {\n  .back-to-projects {\n    position: absolute;\n    bottom: 46px;\n    font-family: neue-haas-grotesk-text,sans-serif;\n    font-weight: lighter;\n    font-size: 12px;\n    left: 30px;\n  }\n\n  .back-to-projects:hover{\n    text-decoration: underline;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .show-page-images-right {\n    padding: 30px;\n    width: 100vw;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    border-bottom: 1px solid black;\n  }\n}\n\n@media only screen and (min-width: 601px) {\n  .show-page-images-right {\n    padding: 30px;\n    width: 50vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    border-left: 1px solid black;\n  }\n}\n\n@media only screen and (min-width: 601px) {\n  .show-image {\n    width: 100%;\n    -webkit-opacity: 100%;\n    opacity: 1;\n    -webkit-transition: opacity 1s ease-in;\n    -moz-transition: opacity 1s ease-in;\n    -ms-transition: opacity 1s ease-in;\n    -o-transition: opacity 1s ease-in;\n    transition: opacity 1s ease-in;\n  }\n  .show-image.loader {\n    opacity: 1;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .show-image {\n    width: 100%;\n    -webkit-opacity: 100%;\n    opacity: 1;\n    -webkit-transition: opacity 1s ease-in;\n    -moz-transition: opacity 1s ease-in;\n    -ms-transition: opacity 1s ease-in;\n    -o-transition: opacity 1s ease-in;\n    transition: opacity 1s ease-in;\n  }\n  .show-image.loader {\n    opacity: 1;\n  }\n}\n",""]),n.exports=t},function(n,t,e){(t=e(2)(!1)).push([n.i,".center-text {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -51%) scale(.6);\n    font-weight: lighter;\n    font-size: 2.9vh;\n    text-align: justify;\n}\n\n.github-decoration {\n  text-decoration: underline;\n  text-align: center;\n}\n",""]),n.exports=t},function(n,t,e){(t=e(2)(!1)).push([n.i,".code-card {\n  border-bottom: 1px solid black;\n  padding: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  overflow: auto;\n}\n\n.code-card:hover {\n  border-bottom: 1px solid black;\n  padding: 30px;\n  background-color: rgb(0,0,0,0.05);\n}\n\n@media only screen and (max-width: 600px) {\n  .code-card {\n    border-bottom: 1px solid black;\n    padding: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    overflow: auto;\n    max-height: 208px;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .code-card {\n    border-bottom: 1px solid black;\n    padding: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    overflow: auto;\n    min-height: 300px;\n    max-height: 300px;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n .code-card {\n    border-bottom: 1px solid black;\n    padding: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    overflow: auto;\n    min-height: 241px;\n    max-height: 280px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .code-card {\n    border-bottom: 1px solid black;\n    padding: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    overflow: auto;\n    min-height: 200px;\n    max-height: 200px;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  .code-card {\n    border-bottom: 1px solid black;\n    padding: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    overflow: auto;\n    min-height: 200px;\n    max-height: 200px;\n  }\n}\n\n.main-card-text {\n  padding-right: 60px;\n}\n\n@media only screen and (max-width: 600px) {\n  .project-title {\n    font-size: 25px;\n    white-space: nowrap;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .project-title {\n    white-space: nowrap;\n    font-size:2.3rem;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .app-type-projects {\n    position: relative;\n    font-size: 15px;\n    top: -5px;\n    right: -7px;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .app-type-projects {\n    position: relative;\n    font-size: 20px;\n    top: -7px;\n    right: -7px;\n  }\n}\n\n.index-tech {\n  font-family: kormelink ;\n  font-weight: normal;\n  font-size: 20px;\n}\n\n@media only screen and (max-width: 600px) {\n  .index-tech {\n    display:none;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  a h2.index-tech {\n    text-decoration: none;\n    color: black;\n  }\n\n  a h2.index-tech:hover {\n      text-decoration: none;\n      color: black;\n  }\n}\n\n.index-body-text {\n  font-family: kormelink ;\n  font-weight: normal;\n  margin-bottom: 0px;\n  text-align: justify;\n  text-overflow: ellipsis;\n}\n\n@media only screen and (max-width: 600px) {\n  .index-body-text {\n    display: none;\n  }\n}\n\n.date {\n  transform: rotate(-90deg);\n  font-family: neue-haas-grotesk-text,sans-serif;\n  font-weight: lighter;\n  font-size: 12px;\n  position: absolute;\n  right: 23px;\n}\n\n.cards-wrapper {\n  margin-bottom: 30px;\n}\n",""]),n.exports=t},function(n,t,e){(t=e(2)(!1)).push([n.i,'.navbar.active {\n  -webkit-opacity: 100%;\n  opacity: 1;\n}\n\n/* Place the navbar at the bottom of the page, and make it stick */\n.navbar {\n  opacity: 0;\n  -webkit-opacity: 0;\n  overflow: hidden;\n  position: fixed !important;\n  bottom: 0;\n  width: 100%;\n  border-top: 1px solid black;\n  z-index: 30;\n  transition: opacity 1s;\n  transition-timing-function: ease;\n  padding: 8px 30px;\n}\n\n/* Style the links inside the navigation bar */\n.navbar a {\n  float: left;\n  display: block;\n  color: black;\n  text-align: center;\n  text-decoration: none;\n  font-size: 12px;\n}\n\n/* Change the color of links on hover */\n.navbar a:hover {\n  text-decoration: underline;\n  color: black;\n}\n\n/* Hide the link that should open and close the navbar on small screens */\n.navbar .icon {\n  display: none;\n}\n\n\n.code-navbar {\n  position: absolute;\n  bottom: 8px;\n  right: 102px;\n}\n\n/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the navbar (.icon) */\n@media screen and (max-width: 600px) {\n  .navbar.active a:not(:first-child) {display: none;}\n  .navbar.active a.icon {\n    float: right;\n    display: block;\n    position: relative;\n    right: -15px;\n  }\n}\n\n/* The "responsive" class is added to the navbar with JavaScript when the user clicks on the icon. This class makes the navbar look good on small screens (display the links vertically instead of horizontally) */\n@media screen and (max-width: 600px) {\n  .navbar.active.responsive a.icon {\n    position: absolute;\n    right: 15px;\n    bottom: 8px;\n  }\n  .navbar.active.responsive a {\n    float: none;\n    display: block;\n    text-align: left;\n  }\n}\n',""]),n.exports=t},function(n,t,e){(t=e(2)(!1)).push([n.i,"@keyframes modal-video {\n    from {\n        opacity: 0\n    }\n    to {\n        opacity: 1\n    }\n}\n\n@keyframes modal-video-inner {\n    from {\n        transform: translate(0, 100px)\n    }\n    to {\n        transform: translate(0, 0)\n    }\n}\n\n.modal-video {\n    position: fixed ;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    padding: 30px;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 1000000;\n    cursor: pointer;\n    opacity: 1;\n    animation-timing-function: ease-out;\n    animation-duration: .3s;\n    animation-name: modal-video;\n    -webkit-transition: opacity .3s ease-out;\n    -moz-transition: opacity .3s ease-out;\n    -ms-transition: opacity .3s ease-out;\n    -o-transition: opacity .3s ease-out;\n    transition: opacity .3s ease-out\n}\n\n.modal-video-close {\n    opacity: 0\n}\n\n.modal-video-close .modal-video-movie-wrap {\n    -webkit-transform: translate(0, 100px);\n    -moz-transform: translate(0, 100px);\n    -ms-transform: translate(0, 100px);\n    -o-transform: translate(0, 100px);\n    transform: translate(0, 100px)\n}\n\n.modal-video-body {\n    max-width: 940px;\n    width: 100%;\n    height: 100%;\n    margin: 0 auto;\n    display: table\n}\n\n.modal-video-inner {\n    display: table-cell;\n    vertical-align: middle;\n    width: 100%;\n    height: 100%\n}\n\n.modal-video-movie-wrap {\n    width: 100%;\n    height: 0;\n    position: relative;\n    padding-bottom: 56.25%;\n    background-color: #333;\n    animation-timing-function: ease-out;\n    animation-duration: .3s;\n    animation-name: modal-video-inner;\n    -webkit-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0);\n    -webkit-transition: -webkit-transform .3s ease-out;\n    -moz-transition: -moz-transform .3s ease-out;\n    -ms-transition: -ms-transform .3s ease-out;\n    -o-transition: -o-transform .3s ease-out;\n    transition: transform .3s ease-out\n}\n\n.modal-video-movie-wrap iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%\n}\n\n.modal-video-close-btn {\n    position: absolute;\n    z-index: 2;\n    top: -35px;\n    right: -35px;\n    display: inline-block;\n    width: 35px;\n    height: 35px;\n    overflow: hidden;\n    border: none;\n    background: transparent\n}\n\n.modal-video-close-btn:before {\n    transform: rotate(45deg)\n}\n\n.modal-video-close-btn:after {\n    transform: rotate(-45deg)\n}\n\n.modal-video-close-btn:before,\n.modal-video-close-btn:after {\n    content: '';\n    position: absolute;\n    height: 2px;\n    width: 100%;\n    top: 50%;\n    left: 0;\n    margin-top: -1px;\n    background: #fff;\n    border-radius: 5px;\n    margin-top: -6px\n}\n",""]),n.exports=t},function(n,t,e){var o=e(28),i=e(0),a=e(53),r=[].slice,s=function(n){return function(t,e){var o=arguments.length>2,i=o?r.call(arguments,2):void 0;return n(o?function(){("function"==typeof t?t:Function(t)).apply(this,i)}:t,e)}};o({global:!0,bind:!0,forced:/MSIE .\./.test(a)},{setTimeout:s(i.setTimeout),setInterval:s(i.setInterval)})},function(n,t,e){var o=e(0),i=e(10).f,a=e(7),r=e(35),s=e(9),c=e(42),l=e(52);n.exports=function(n,t){var e,p,d,u,f,m=n.target,h=n.global,g=n.stat;if(e=h?o:g?o[m]||s(m,{}):(o[m]||{}).prototype)for(p in t){if(u=t[p],d=n.noTargetGet?(f=i(e,p))&&f.value:e[p],!l(h?p:m+(g?".":"#")+p,n.forced)&&void 0!==d){if(typeof u==typeof d)continue;c(u,d)}(n.sham||d&&d.sham)&&a(u,"sham",!0),r(e,p,u,n)}}},function(n,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(n){"object"==typeof window&&(e=window)}n.exports=e},function(n,t,e){"use strict";var o={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,a=i&&!o.call({1:2},1);t.f=a?function(n){var t=i(this,n);return!!t&&t.enumerable}:o},function(n,t,e){var o=e(5),i=e(32),a="".split;n.exports=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(n){return"String"==i(n)?a.call(n,""):Object(n)}:Object},function(n,t){var e={}.toString;n.exports=function(n){return e.call(n).slice(8,-1)}},function(n,t){n.exports=function(n){if(null==n)throw TypeError("Can't call method on "+n);return n}},function(n,t,e){var o=e(0),i=e(6),a=o.document,r=i(a)&&i(a.createElement);n.exports=function(n){return r?a.createElement(n):{}}},function(n,t,e){var o=e(0),i=e(7),a=e(3),r=e(9),s=e(16),c=e(36),l=c.get,p=c.enforce,d=String(String).split("String");(n.exports=function(n,t,e,s){var c=!!s&&!!s.unsafe,l=!!s&&!!s.enumerable,u=!!s&&!!s.noTargetGet;"function"==typeof e&&("string"!=typeof t||a(e,"name")||i(e,"name",t),p(e).source=d.join("string"==typeof t?t:"")),n!==o?(c?!u&&n[t]&&(l=!0):delete n[t],l?n[t]=e:i(n,t,e)):l?n[t]=e:r(t,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||s(this)}))},function(n,t,e){var o,i,a,r=e(37),s=e(0),c=e(6),l=e(7),p=e(3),d=e(38),u=e(18),f=s.WeakMap;if(r){var m=new f,h=m.get,g=m.has,x=m.set;o=function(n,t){return x.call(m,n,t),t},i=function(n){return h.call(m,n)||{}},a=function(n){return g.call(m,n)}}else{var v=d("state");u[v]=!0,o=function(n,t){return l(n,v,t),t},i=function(n){return p(n,v)?n[v]:{}},a=function(n){return p(n,v)}}n.exports={set:o,get:i,has:a,enforce:function(n){return a(n)?i(n):o(n,{})},getterFor:function(n){return function(t){var e;if(!c(t)||(e=i(t)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return e}}}},function(n,t,e){var o=e(0),i=e(16),a=o.WeakMap;n.exports="function"==typeof a&&/native code/.test(i(a))},function(n,t,e){var o=e(39),i=e(41),a=o("keys");n.exports=function(n){return a[n]||(a[n]=i(n))}},function(n,t,e){var o=e(40),i=e(17);(n.exports=function(n,t){return i[n]||(i[n]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.4",mode:o?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(n,t){n.exports=!1},function(n,t){var e=0,o=Math.random();n.exports=function(n){return"Symbol("+String(void 0===n?"":n)+")_"+(++e+o).toString(36)}},function(n,t,e){var o=e(3),i=e(43),a=e(10),r=e(14);n.exports=function(n,t){for(var e=i(t),s=r.f,c=a.f,l=0;l<e.length;l++){var p=e[l];o(n,p)||s(n,p,c(t,p))}}},function(n,t,e){var o=e(19),i=e(45),a=e(51),r=e(15);n.exports=o("Reflect","ownKeys")||function(n){var t=i.f(r(n)),e=a.f;return e?t.concat(e(n)):t}},function(n,t,e){var o=e(0);n.exports=o},function(n,t,e){var o=e(46),i=e(50).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(n){return o(n,i)}},function(n,t,e){var o=e(3),i=e(8),a=e(47).indexOf,r=e(18);n.exports=function(n,t){var e,s=i(n),c=0,l=[];for(e in s)!o(r,e)&&o(s,e)&&l.push(e);for(;t.length>c;)o(s,e=t[c++])&&(~a(l,e)||l.push(e));return l}},function(n,t,e){var o=e(8),i=e(48),a=e(49),r=function(n){return function(t,e,r){var s,c=o(t),l=i(c.length),p=a(r,l);if(n&&e!=e){for(;l>p;)if((s=c[p++])!=s)return!0}else for(;l>p;p++)if((n||p in c)&&c[p]===e)return n||p||0;return!n&&-1}};n.exports={includes:r(!0),indexOf:r(!1)}},function(n,t,e){var o=e(20),i=Math.min;n.exports=function(n){return n>0?i(o(n),9007199254740991):0}},function(n,t,e){var o=e(20),i=Math.max,a=Math.min;n.exports=function(n,t){var e=o(n);return e<0?i(e+t,0):a(e,t)}},function(n,t){n.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(n,t){t.f=Object.getOwnPropertySymbols},function(n,t,e){var o=e(5),i=/#|\.prototype\./,a=function(n,t){var e=s[r(n)];return e==l||e!=c&&("function"==typeof t?o(t):!!t)},r=a.normalize=function(n){return String(n).replace(i,".").toLowerCase()},s=a.data={},c=a.NATIVE="N",l=a.POLYFILL="P";n.exports=a},function(n,t,e){var o=e(19);n.exports=o("navigator","userAgent")||""},function(n,t,e){var o=e(1),i=e(21);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(i,a),i.locals?i.locals:{});n.exports=r},function(n,t,e){"use strict";n.exports=function(n,t){return t||(t={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,t,e){"use strict";e.r(t),t.default=e.p+"img/o.jpeg"},function(n,t,e){var o=e(1),i=e(58);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(i,a),i.locals?i.locals:{});n.exports=r},function(n,t,e){var o=e(2),i=e(21),a=e(22),r=e(23),s=e(24),c=e(25),l=e(26);(t=o(!1)).i(i),t.i(a),t.i(r),t.i(s),t.i(c),t.i(l),t.push([n.i,"html, body {\n  margin: 0;\n  background-size: cover;\n  background-color: #ebe2da;\n  font-family: neue-haas-grotesk-text,sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n\nhtml, .homepage-body {\n  height: 100vh;\n}\n\na {\n  text-decoration: none;\n  color: #212529;\n}\n\na:hover {\n  text-decoration: none;\n  color: #212529;\n}\n",""]),n.exports=t},function(n,t,e){var o=e(1),i=e(22);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(i,a),i.locals?i.locals:{});n.exports=r},function(n,t,e){var o=e(1),i=e(23);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(i,a),i.locals?i.locals:{});n.exports=r},function(n,t,e){var o=e(1),i=e(24);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(i,a),i.locals?i.locals:{});n.exports=r},function(n,t,e){var o=e(1),i=e(25);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(i,a),i.locals?i.locals:{});n.exports=r},function(n,t,e){var o=e(1),i=e(26);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(i,a),i.locals?i.locals:{});n.exports=r},function(n,t,e){"use strict";e.r(t);e(27);var o=function(){var n=document.querySelector(".shuffle"),t=document.querySelector(".navbar"),e=document.querySelector(".load"),o=document.querySelector(".homepage-image-div"),i=document.getElementById("body"),a=function(){var n=["#ebe2da","#dddddd","#dbc8bc","#958e7d","#D3D3D3","#ECE5BD"],t=n[Math.floor(Math.random()*n.length)];document.getElementById("body").style.backgroundColor=t,document.querySelector(".navbar").style.backgroundColor=t;var e=document.getElementById("body").style.backgroundColor;localStorage.setItem("usercolour",e)},r=function(){e.style.transition="opacity 1s ease, transform 1s ease",e.style.transform="translate(-50%, -50%) scale(1.1)",e.classList.remove("active")},s=function(){o.classList.add("active"),t.classList.add("active"),console.log(o.classList.value),console.log(t.classList.value)},c=function(){e.classList.add("active")};window.addEventListener("DOMContentLoaded",(function(){sessionStorage.isVisited?(i.style.backgroundColor=localStorage.getItem("usercolour"),t.style.backgroundColor=localStorage.getItem("usercolour"),o.style.transition="opacity 0s",t.style.transition="opacity 0s",o.classList.add("active"),t.classList.add("active")):(o.style.opacity="0",console.log(o.classList.value),console.log(o.style),console.log(t.classList.value),t.classList.remove("active"),a(),setTimeout(c,100),setTimeout(r,2e3),setTimeout(s,2700),sessionStorage.setItem("isVisited",!0))})),n.addEventListener("click",(function(n){a()}))};e(54),e(57),e(59),e(60),e(61),e(62),e(63);o(),document.querySelector(".icon").addEventListener("click",myFunction)}]);