(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-247","df-1"],{"9cfc":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("af03"));function i(t){return t&&t.__esModule?t:{default:t}}var r={narrow:["p.m.ē","m.ē"],abbreviated:["p. m. ē.","m. ē."],wide:["pirms mūsu ēras","mūsu ērā"]},d={narrow:["1","2","3","4"],abbreviated:["1. cet.","2. cet.","3. cet.","4. cet."],wide:["pirmais ceturksnis","otrais ceturksnis","trešais ceturksnis","ceturtais ceturksnis"]},s={narrow:["1","2","3","4"],abbreviated:["1. cet.","2. cet.","3. cet.","4. cet."],wide:["pirmajā ceturksnī","otrajā ceturksnī","trešajā ceturksnī","ceturtajā ceturksnī"]},u={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","febr.","marts","apr.","maijs","jūn.","jūl.","aug.","sept.","okt.","nov.","dec."],wide:["janvāris","februāris","marts","aprīlis","maijs","jūnijs","jūlijs","augusts","septembris","oktobris","novembris","decembris"]},o={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","febr.","martā","apr.","maijs","jūn.","jūl.","aug.","sept.","okt.","nov.","dec."],wide:["janvārī","februārī","martā","aprīlī","maijā","jūnijā","jūlijā","augustā","septembrī","oktobrī","novembrī","decembrī"]},m={narrow:["S","P","O","T","C","P","S"],short:["Sv","P","O","T","C","Pk","S"],abbreviated:["svētd.","pirmd.","otrd.","trešd.","ceturtd.","piektd.","sestd."],wide:["svētdiena","pirmdiena","otrdiena","trešdiena","ceturtdiena","piektdiena","sestdiena"]},p={narrow:["S","P","O","T","C","P","S"],short:["Sv","P","O","T","C","Pk","S"],abbreviated:["svētd.","pirmd.","otrd.","trešd.","ceturtd.","piektd.","sestd."],wide:["svētdienā","pirmdienā","otrdienā","trešdienā","ceturtdienā","piektdienā","sestdienā"]},l={narrow:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"rīts",afternoon:"diena",evening:"vakars",night:"nakts"},abbreviated:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"rīts",afternoon:"pēcpusd.",evening:"vakars",night:"nakts"},wide:{am:"am",pm:"pm",midnight:"pusnakts",noon:"pusdienlaiks",morning:"rīts",afternoon:"pēcpusdiena",evening:"vakars",night:"nakts"}},f={narrow:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"rītā",afternoon:"dienā",evening:"vakarā",night:"naktī"},abbreviated:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"rītā",afternoon:"pēcpusd.",evening:"vakarā",night:"naktī"},wide:{am:"am",pm:"pm",midnight:"pusnaktī",noon:"pusdienlaikā",morning:"rītā",afternoon:"pēcpusdienā",evening:"vakarā",night:"naktī"}};function v(t,e){return t+"."}var c={ordinalNumber:v,era:(0,n.default)({values:r,defaultWidth:"wide"}),quarter:(0,n.default)({values:d,defaultWidth:"wide",formattingValues:s,defaultFormattingWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:(0,n.default)({values:u,defaultWidth:"wide",formattingValues:o,defaultFormattingWidth:"wide"}),day:(0,n.default)({values:m,defaultWidth:"wide",formattingValues:p,defaultFormattingWidth:"wide"}),dayPeriod:(0,n.default)({values:l,defaultWidth:"wide",formattingValues:f,defaultFormattingWidth:"wide"})},g=c;e.default=g,t.exports=e.default},af03:function(t,e,a){"use strict";function n(t){return function(e,a){var n,i=a||{},r=i.context?String(i.context):"standalone";if("formatting"===r&&t.formattingValues){var d=t.defaultFormattingWidth||t.defaultWidth,s=i.width?String(i.width):d;n=t.formattingValues[s]||t.formattingValues[d]}else{var u=t.defaultWidth,o=i.width?String(i.width):t.defaultWidth;n=t.values[o]||t.values[u]}var m=t.argumentCallback?t.argumentCallback(e):e;return n[m]}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n,t.exports=e.default}}]);
//# sourceMappingURL=df-247.210c784f.js.map