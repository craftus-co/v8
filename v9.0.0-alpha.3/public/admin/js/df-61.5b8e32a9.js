(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-61","df-1"],{a3cb:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=d(t("af03"));function d(e){return e&&e.__esModule?e:{default:e}}var a={narrow:["př. n. l.","n. l."],abbreviated:["př. n. l.","n. l."],wide:["před naším letopočtem","našeho letopočtu"]},r={narrow:["1","2","3","4"],abbreviated:["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"],wide:["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"]},i={narrow:["L","Ú","B","D","K","Č","Č","S","Z","Ř","L","P"],abbreviated:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],wide:["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"]},l={narrow:["L","Ú","B","D","K","Č","Č","S","Z","Ř","L","P"],abbreviated:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],wide:["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"]},p={narrow:["ne","po","út","st","čt","pá","so"],short:["ne","po","út","st","čt","pá","so"],abbreviated:["ned","pon","úte","stř","čtv","pát","sob"],wide:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"]},u={narrow:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"}},v={narrow:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"}};function f(e){var n=Number(e);return n+"."}var s={ordinalNumber:f,era:(0,o.default)({values:a,defaultWidth:"wide"}),quarter:(0,o.default)({values:r,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,o.default)({values:i,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"}),day:(0,o.default)({values:p,defaultWidth:"wide"}),dayPeriod:(0,o.default)({values:u,defaultWidth:"wide",formattingValues:v,defaultFormattingWidth:"wide"})},m=s;n.default=m,e.exports=n.default},af03:function(e,n,t){"use strict";function o(e){return function(n,t){var o,d=t||{},a=d.context?String(d.context):"standalone";if("formatting"===a&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,i=d.width?String(d.width):r;o=e.formattingValues[i]||e.formattingValues[r]}else{var l=e.defaultWidth,p=d.width?String(d.width):e.defaultWidth;o=e.values[p]||e.values[l]}var u=e.argumentCallback?e.argumentCallback(n):n;return o[u]}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=o,e.exports=n.default}}]);
//# sourceMappingURL=df-61.5b8e32a9.js.map