(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-36"],{"2cfd":function(e,t,n){"use strict";function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default},4170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=u(n("701a")),a=u(n("6068"));function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){(0,a.default)(2,arguments);var u=(0,r.default)(e,n),o=(0,r.default)(t,n);return u.getTime()===o.getTime()}e.exports=t.default},6068:function(e,t,n){"use strict";function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,e.exports=t.default},"701a":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var r=o(n("2cfd")),a=o(n("d8e8")),u=o(n("6068"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){(0,u.default)(1,arguments);var n=t||{},o=n.locale,s=o&&o.options&&o.options.weekStartsOn,f=null==s?0:(0,r.default)(s),c=null==n.weekStartsOn?f:(0,r.default)(n.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var l=(0,a.default)(e),i=l.getUTCDay(),d=(i<c?7:0)+i-c;return l.setUTCDate(l.getUTCDate()-d),l.setUTCHours(0,0,0,0),l}e.exports=t.default},d8e8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var r=a(n("6068"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e){(0,r.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}e.exports=t.default},de6f:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var r=a(n("4170"));function a(e){return e&&e.__esModule?e:{default:e}}var u=["нядзелю","панядзелак","аўторак","сераду","чацвер","пятніцу","суботу"];function o(e){var t=u[e];switch(e){case 0:case 3:case 5:case 6:return"'у мінулую "+t+" а' p";case 1:case 2:case 4:return"'у мінулы "+t+" а' p"}}function s(e){var t=u[e];return"'у "+t+" а' p"}function f(e){var t=u[e];switch(e){case 0:case 3:case 5:case 6:return"'у наступную "+t+" а' p";case 1:case 2:case 4:return"'у наступны "+t+" а' p"}}var c={lastWeek:function(e,t,n){var a=e.getUTCDay();return(0,r.default)(e,t,n)?s(a):o(a)},yesterday:"'учора а' p",today:"'сёння а' p",tomorrow:"'заўтра а' p",nextWeek:function(e,t,n){var a=e.getUTCDay();return(0,r.default)(e,t,n)?s(a):f(a)},other:"P"};function l(e,t,n,r){var a=c[e];return"function"===typeof a?a(t,n,r):a}e.exports=t.default}}]);
//# sourceMappingURL=df-36.59c07626.js.map