(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229082"],{dc5b:function(e,i,t){(function(e){e(t("56b3"))})((function(e){"use strict";e.defineMode("properties",(function(){return{token:function(e,i){var t=e.sol()||i.afterSection,n=e.eol();if(i.afterSection=!1,t&&(i.nextMultiline?(i.inMultiline=!0,i.nextMultiline=!1):i.position="def"),n&&!i.nextMultiline&&(i.inMultiline=!1,i.position="def"),t)while(e.eatSpace());var o=e.next();return!t||"#"!==o&&"!"!==o&&";"!==o?t&&"["===o?(i.afterSection=!0,e.skipTo("]"),e.eat("]"),"header"):"="===o||":"===o?(i.position="quote",null):("\\"===o&&"quote"===i.position&&e.eol()&&(i.nextMultiline=!0),i.position):(i.position="comment",e.skipToEnd(),"comment")},startState:function(){return{position:"def",nextMultiline:!1,inMultiline:!1,afterSection:!1}}}})),e.defineMIME("text/x-properties","properties"),e.defineMIME("text/x-ini","properties")}))}}]);
//# sourceMappingURL=chunk-2d229082.740c0288.js.map