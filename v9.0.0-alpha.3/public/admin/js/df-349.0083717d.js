(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-349","df-1"],{af03:function(e,n,t){"use strict";function a(e){return function(n,t){var a,i=t||{},r=i.context?String(i.context):"standalone";if("formatting"===r&&e.formattingValues){var d=e.defaultFormattingWidth||e.defaultWidth,o=i.width?String(i.width):d;a=e.formattingValues[o]||e.formattingValues[d]}else{var u=e.defaultWidth,f=i.width?String(i.width):e.defaultWidth;a=e.values[f]||e.values[u]}var l=e.argumentCallback?e.argumentCallback(n):n;return a[l]}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=a,e.exports=n.default},c2a4:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t("af03"));function i(e){return e&&e.__esModule?e:{default:e}}var r={narrow:["கி.மு.","கி.பி."],abbreviated:["கி.மு.","கி.பி."],wide:["கிறிஸ்துவுக்கு முன்","அன்னோ டோமினி"]},d={narrow:["1","2","3","4"],abbreviated:["காலா.1","காலா.2","காலா.3","காலா.4"],wide:["ஒன்றாம் காலாண்டு","இரண்டாம் காலாண்டு","மூன்றாம் காலாண்டு","நான்காம் காலாண்டு"]},o={narrow:["ஜ","பி","மா","ஏ","மே","ஜூ","ஜூ","ஆ","செ","அ","ந","டி"],abbreviated:["ஜன.","பிப்.","மார்.","ஏப்.","மே","ஜூன்","ஜூலை","ஆக.","செப்.","அக்.","நவ.","டிச."],wide:["ஜனவரி","பிப்ரவரி","மார்ச்","ஏப்ரல்","மே","ஜூன்","ஜூலை","ஆகஸ்ட்","செப்டம்பர்","அக்டோபர்","நவம்பர்","டிசம்பர்"]},u={narrow:["ஞா","தி","செ","பு","வி","வெ","ச"],short:["ஞா","தி","செ","பு","வி","வெ","ச"],abbreviated:["ஞாயி.","திங்.","செவ்.","புத.","வியா.","வெள்.","சனி"],wide:["ஞாயிறு","திங்கள்","செவ்வாய்","புதன்","வியாழன்","வெள்ளி","சனி"]},f={narrow:{am:"மு.ப",pm:"பி.ப",midnight:"நள்.",noon:"நண்.",morning:"கா.",afternoon:"மதி.",evening:"மா.",night:"இர."},abbreviated:{am:"முற்பகல்",pm:"பிற்பகல்",midnight:"நள்ளிரவு",noon:"நண்பகல்",morning:"காலை",afternoon:"மதியம்",evening:"மாலை",night:"இரவு"},wide:{am:"முற்பகல்",pm:"பிற்பகல்",midnight:"நள்ளிரவு",noon:"நண்பகல்",morning:"காலை",afternoon:"மதியம்",evening:"மாலை",night:"இரவு"}},l={narrow:{am:"மு.ப",pm:"பி.ப",midnight:"நள்.",noon:"நண்.",morning:"கா.",afternoon:"மதி.",evening:"மா.",night:"இர."},abbreviated:{am:"முற்பகல்",pm:"பிற்பகல்",midnight:"நள்ளிரவு",noon:"நண்பகல்",morning:"காலை",afternoon:"மதியம்",evening:"மாலை",night:"இரவு"},wide:{am:"முற்பகல்",pm:"பிற்பகல்",midnight:"நள்ளிரவு",noon:"நண்பகல்",morning:"காலை",afternoon:"மதியம்",evening:"மாலை",night:"இரவு"}};function m(e,n){var t=Number(e);return t}var g={ordinalNumber:m,era:(0,a.default)({values:r,defaultWidth:"wide"}),quarter:(0,a.default)({values:d,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,a.default)({values:o,defaultWidth:"wide"}),day:(0,a.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:f,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"})},v=g;n.default=v,e.exports=n.default}}]);
//# sourceMappingURL=df-349.0083717d.js.map