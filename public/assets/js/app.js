!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3)}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});e.exports=a},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],l=t.base?i[0]+t.base:i[0],d=n[l]||0,u="".concat(l," ").concat(d);n[l]=d+1;var s=c(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(a[s].references++,a[s].updater(f)):a.push({identifier:u,updater:y(f,t),references:1}),o.push(u)}return o}function d(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,s=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=s(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function v(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,p=0;function y(e,t){var n,o,r;if(t.singleton){var i=p++;n=m||(m=d(t)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=d(t),o=v.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);a[r].references--}for(var i=l(e,t),d=0;d<n.length;d++){var u=c(n[d]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=i}}}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);var o,r=document.querySelector(".overlay"),i=document.querySelectorAll(".modal"),a=function(e){27===e.keyCode&&l()},c=function(e){if(e&&r){var t=e.querySelector(".modal__control"),n=e.querySelector('input[type="tel"]');n&&s(n),document.body.offsetWidth>767?document.body.paddingRight="".concat(function(){var e=document.createElement("div");e.style.overflowY="scroll",e.style.width="50px",e.style.height="50px",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),"px"):(o=window.scrollY,document.body.style.top="-".concat(o,"px")),document.body.classList.add("body_hidden"),r.classList.add("overlay--show"),r.addEventListener("click",(function(){l()})),t.addEventListener("click",(function(){l()})),document.addEventListener("keydown",a),e.classList.remove("modal--hidden"),e.classList.remove("modal--closed"),e.classList.add("modal--opened")}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];i.length<1||!r||(i.forEach((function(t){r.classList.remove("overlay--show"),t.classList.remove("modal--opened"),t.classList.add("modal--closed"),e?d():setTimeout(d,590)})),document.removeEventListener("keydown",a))},d=function(){i.forEach((function(e){e.classList.add("modal--hidden")})),document.body.style.paddingRight="",document.body.classList.remove("body_hidden"),document.body.offsetWidth<=767&&window.scrollTo(0,parseInt(o||"0",10))},u=document.querySelector(".success_modal"),s=function(e){e.value.length<24?e.setCustomValidity("Пожалуйста, введите номер телефона полностью"):e.setCustomValidity("")},f=function(e){var t="+7 ( ___ ) ___ - __ - __",n=0,o=t.replace(/\D/g,""),r=e.value.replace(/\D/g,"");o.length>=r.length&&(r=o),e.value=t.replace(/./g,(function(e){return/[_\d]/.test(e)&&n<r.length?r.charAt(n++):n>=r.length?"":e}))},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.querySelectorAll("input"),o=e.querySelector('input[type="tel"]'),r=e.querySelector(".modal__invalid");o.addEventListener("focus",(function(){"+7 "!==o.value&&""!==o.value||(o.value="+7 ")})),o.addEventListener("input",(function(){f(o),s(o)})),t&&n.forEach((function(e){e.addEventListener("input",(function(){e.checkValidity()&&(e.parentElement.classList.remove("modal__label--invalid"),r.style.display="none")})),e.addEventListener("invalid",(function(t){t.preventDefault(),e.parentElement.classList.add("modal__label--invalid"),r.style.display="block"}))})),e.addEventListener("submit",(function(e){e.preventDefault(),s(o),t&&l(t),c(u)}))},m=document.querySelector(".page_header__main_nav"),p=m.querySelector(".control"),y=document.querySelector(".page_header__top").cloneNode(!0),h=function(){y&&y.remove(),m.classList.add("main_nav--closed")},b=document.querySelector(".main_screen__form_request"),_=document.querySelector(".feedback_modal"),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=e.querySelector(".page_header__link--feedback");t.addEventListener("click",(function(e){e.preventDefault(),c(_)}))};s(b.querySelector('input[type="tel"]')),v(b),v(_,!0),g(),document.querySelector(".page_header__control").addEventListener("click",(function(){g(y),function(){if(document.body.offsetWidth<=1023){var e=m.querySelector(".site_list");m.append(y),e.after(y),y.style.display="block"}p.addEventListener("click",(function(){h()})),m.classList.remove("main_nav--closed")}()}))}]);