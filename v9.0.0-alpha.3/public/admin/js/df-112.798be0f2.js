(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-112","df-1"],{af03:function(e,a,n){"use strict";function t(e){return function(a,n){var t,d=n||{},i=d.context?String(d.context):"standalone";if("formatting"===i&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=d.width?String(d.width):r;t=e.formattingValues[o]||e.formattingValues[r]}else{var m=e.defaultWidth,u=d.width?String(d.width):e.defaultWidth;t=e.values[u]||e.values[m]}var l=e.argumentCallback?e.argumentCallback(a):a;return t[l]}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=t,e.exports=a.default},b1e0:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=d(n("af03"));function d(e){return e&&e.__esModule?e:{default:e}}var i={narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","después de cristo"]},r={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},o={narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],wide:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]},m={narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","mi","ju","vi","sa"],abbreviated:["dom","lun","mar","mié","jue","vie","sab"],wide:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"]},u={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"}},l={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"}};function f(e){var a=Number(e);return a+"º"}var s={ordinalNumber:f,era:(0,t.default)({values:i,defaultWidth:"wide"}),quarter:(0,t.default)({values:r,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,t.default)({values:o,defaultWidth:"wide"}),day:(0,t.default)({values:m,defaultWidth:"wide"}),dayPeriod:(0,t.default)({values:u,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"})},g=s;a.default=g,e.exports=a.default}}]);
//# sourceMappingURL=df-112.798be0f2.js.map