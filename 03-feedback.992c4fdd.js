!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=c||d||Function("return this")(),s=Object.prototype.toString,b=Math.max,g=Math.min,y=function(){return v.Date.now()};function p(e,t,n){var o,i,a,u,f,l,c=0,d=!1,v=!1,s=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function T(e){return c=e,f=setTimeout(x,t),d?p(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=a}function x(){var e=y();if(j(e))return h(e);f=setTimeout(x,function(e){var n=t-(e-l);return v?g(n,a-(e-c)):n}(e))}function h(e){return f=void 0,s&&o?p(e):(o=i=void 0,u)}function w(){var e=y(),n=j(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return T(l);if(v)return f=setTimeout(x,t),p(l)}return void 0===f&&(f=setTimeout(x,t)),u}return t=S(t)||0,m(n)&&(d=!!n.leading,a=(v="maxWait"in n)?b(S(n.maxWait)||0,t):a,s="trailing"in n?!!n.trailing:s),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},w.flush=function(){return void 0===f?u:h(y())},w}function m(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(m(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=m(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return m(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var T=document.querySelector("form"),j=document.querySelector("input"),x=document.querySelector("textarea"),h=document.querySelector("button"),w=e(t)((function(e){"INPUT"===e.target.nodeName?localStorage.setItem("feedbackMail",e.target.value):localStorage.setItem("feedbackTextarea",e.target.value)}),500);void 0===localStorage.feedbackMail?j.value="":j.value=localStorage.feedbackMail,void 0===localStorage.feedbackTextarea?x.value="":x.value=localStorage.feedbackTextarea;T.addEventListener("input",w),h.addEventListener("click",(function(){localStorage.clear(),j.value="",x.value=""}))}();
//# sourceMappingURL=03-feedback.992c4fdd.js.map
