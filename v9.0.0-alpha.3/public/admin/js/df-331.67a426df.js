(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-331","df-1"],{8813:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("af03"));function i(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=Number(e);return String(t).concat(".")}var d={narrow:["пр.н.е.","АД"],abbreviated:["пр. Хр.","по. Хр."],wide:["Пре Христа","После Христа"]},o={narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец"],wide:["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар"]},u={narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец"],wide:["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар"]},f={narrow:["1.","2.","3.","4."],abbreviated:["1. кв.","2. кв.","3. кв.","4. кв."],wide:["1. квартал","2. квартал","3. квартал","4. квартал"]},l={narrow:["Н","П","У","С","Ч","П","С"],short:["нед","пон","уто","сре","чет","пет","суб"],abbreviated:["нед","пон","уто","сре","чет","пет","суб"],wide:["недеља","понедељак","уторак","среда","четвртак","петак","субота"]},g={narrow:{am:"АМ",pm:"ПМ",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"поподне",evening:"увече",night:"ноћу"},abbreviated:{am:"АМ",pm:"ПМ",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"поподне",evening:"увече",night:"ноћу"},wide:{am:"AM",pm:"PM",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"после подне",evening:"увече",night:"ноћу"}},m={narrow:{am:"AM",pm:"PM",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"поподне",evening:"увече",night:"ноћу"},abbreviated:{am:"AM",pm:"PM",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"поподне",evening:"увече",night:"ноћу"},wide:{am:"AM",pm:"PM",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"после подне",evening:"увече",night:"ноћу"}},w={ordinalNumber:r,era:(0,a.default)({values:d,defaultWidth:"wide"}),quarter:(0,a.default)({values:f,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,a.default)({values:o,defaultWidth:"wide",formattingValues:u,defaultFormattingWidth:"wide"}),day:(0,a.default)({values:l,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:m,defaultWidth:"wide",formattingValues:g,defaultFormattingWidth:"wide"})},h=w;t.default=h,e.exports=t.default},af03:function(e,t,n){"use strict";function a(e){return function(t,n){var a,i=n||{},r=i.context?String(i.context):"standalone";if("formatting"===r&&e.formattingValues){var d=e.defaultFormattingWidth||e.defaultWidth,o=i.width?String(i.width):d;a=e.formattingValues[o]||e.formattingValues[d]}else{var u=e.defaultWidth,f=i.width?String(i.width):e.defaultWidth;a=e.values[f]||e.values[u]}var l=e.argumentCallback?e.argumentCallback(t):t;return a[l]}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a,e.exports=t.default}}]);
//# sourceMappingURL=df-331.67a426df.js.map