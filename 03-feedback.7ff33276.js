function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,c=l||f||Function("return this")(),d=Object.prototype.toString,v=Math.max,s=Math.min,p=function(){return c.Date.now()};function g(e,t,n){var o,r,a,i,u,l,f=0,c=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,a=r;return o=r=void 0,f=t,i=e.apply(a,n)}function S(e){return f=e,u=setTimeout(j,t),c?b(e):i}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-f>=a}function j(){var e=p();if(h(e))return x(e);u=setTimeout(j,function(e){var n=t-(e-l);return d?s(n,a-(e-f)):n}(e))}function x(e){return u=void 0,g&&o?b(e):(o=r=void 0,i)}function O(){var e=p(),n=h(e);if(o=arguments,r=this,l=e,n){if(void 0===u)return S(l);if(d)return u=setTimeout(j,t),b(l)}return void 0===u&&(u=setTimeout(j,t)),i}return t=y(t)||0,m(n)&&(c=!!n.leading,a=(d="maxWait"in n)?v(y(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==u&&clearTimeout(u),f=0,o=l=r=u=void 0},O.flush=function(){return void 0===u?i:x(p())},O}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||i.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return m(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector("form"),S=document.querySelector("input"),h=document.querySelector("textarea"),j=document.querySelector("button"),x=e(t)((e=>{"INPUT"===e.target.nodeName?S.value=e.target.value:h.value=e.target.value;const t={mail:S.value,textarea:h.value};localStorage.setItem("feedback",JSON.stringify(t))}),500);void 0===localStorage.feedback?(S.value="",h.value=""):(S.value=JSON.parse(localStorage.feedback).mail,h.value=JSON.parse(localStorage.feedback).textarea);b.addEventListener("input",x),j.addEventListener("click",(e=>{e.preventDefault(),S.value&&h.value?((()=>{const e={email:S.value,message:h.value};console.log(e)})(),localStorage.clear(),S.value="",h.value=""):alert("Please, complete the application fields")}));
//# sourceMappingURL=03-feedback.7ff33276.js.map
