function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,p=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var o,r,i,a,u,f,c=0,l=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,u=setTimeout(j,t),l?m(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=i}function j(){var e=v();if(h(e))return O(e);u=setTimeout(j,function(e){var n=t-(e-f);return d?p(n,i-(e-c)):n}(e))}function O(e){return u=void 0,g&&o?m(e):(o=r=void 0,a)}function T(){var e=v(),n=h(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return S(f);if(d)return u=setTimeout(j,t),m(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=b(t)||0,y(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},T.flush=function(){return void 0===u?a:O(v())},T}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const m=document.querySelector("form"),S=(document.querySelector("input"),document.querySelector("textarea"),document.querySelector("button"));let h,j;const O=e(t)((e=>{"INPUT"===e.target.nodeName?h=e.target.value:j=e.target.value;const t={mail:h,textarea:j};localStorage.setItem("feedback",JSON.stringify(t)),T()}),500),T=()=>{JSON.parse(localStorage.feedback)};console.log(JSON.parse(localStorage.feedback));m.addEventListener("input",O),S.addEventListener("click",(e=>{void 0!==h&&void 0!==j&&""!==h&&""!==j||(e.preventDefault(),alert("Please, complete the application fields")),localStorage.clear(),h="",j=""}));
//# sourceMappingURL=03-feedback.1d7a486d.js.map
