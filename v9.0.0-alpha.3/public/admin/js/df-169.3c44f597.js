(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-169","df-1"],{af03:function(e,n,t){"use strict";function a(e){return function(n,t){var a,r=t||{},i=r.context?String(r.context):"standalone";if("formatting"===i&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,d=r.width?String(r.width):o;a=e.formattingValues[d]||e.formattingValues[o]}else{var u=e.defaultWidth,l=r.width?String(r.width):e.defaultWidth;a=e.values[l]||e.values[u]}var f=e.argumentCallback?e.argumentCallback(n):n;return a[f]}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=a,e.exports=n.default},cee0:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("af03"));function r(e){return e&&e.__esModule?e:{default:e}}var i={locale:{1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},number:{"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"}},o={narrow:["ईसा-पूर्व","ईस्वी"],abbreviated:["ईसा-पूर्व","ईस्वी"],wide:["ईसा-पूर्व","ईसवी सन"]},d={narrow:["1","2","3","4"],abbreviated:["ति1","ति2","ति3","ति4"],wide:["पहली तिमाही","दूसरी तिमाही","तीसरी तिमाही","चौथी तिमाही"]},u={narrow:["ज","फ़","मा","अ","मई","जू","जु","अग","सि","अक्तू","न","दि"],abbreviated:["जन","फ़र","मार्च","अप्रैल","मई","जून","जुल","अग","सित","अक्तू","नव","दिस"],wide:["जनवरी","फ़रवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितंबर","अक्तूबर","नवंबर","दिसंबर"]},l={narrow:["र","सो","मं","बु","गु","शु","श"],short:["र","सो","मं","बु","गु","शु","श"],abbreviated:["रवि","सोम","मंगल","बुध","गुरु","शुक्र","शनि"],wide:["रविवार","सोमवार","मंगलवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"]},f={narrow:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},abbreviated:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},wide:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"}},m={narrow:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},abbreviated:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},wide:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"}};function c(e){var n=v.localeToNumber(e),t=v.numberToLocale(n),a=n%10;switch(a){case 2:case 3:case 4:case 6:case 1:case 5:case 7:case 8:case 9:case 0:return t}}function g(e){var n=e.toString().replace(/[१२३४५६७८९०]/g,(function(e){return i.number[e]}));return Number(n)}function s(e){return e.toString().replace(/\d/g,(function(e){return i.locale[e]}))}var v={localeToNumber:g,numberToLocale:s,ordinalNumber:c,era:(0,a.default)({values:o,defaultWidth:"wide"}),quarter:(0,a.default)({values:d,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,a.default)({values:u,defaultWidth:"wide"}),day:(0,a.default)({values:l,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:f,defaultWidth:"wide",formattingValues:m,defaultFormattingWidth:"wide"})},h=v;n.default=h,e.exports=n.default}}]);
//# sourceMappingURL=df-169.3c44f597.js.map