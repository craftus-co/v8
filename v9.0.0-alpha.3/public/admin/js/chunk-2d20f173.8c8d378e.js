(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f173"],{b1c1:function(n,r,t){(function(n){n(t("56b3"))})((function(n){"use strict";n.defineMode("http",(function(){function n(n,r){return n.skipToEnd(),r.cur=o,"error"}function r(r,e){return r.match(/^HTTP\/\d\.\d/)?(e.cur=t,"keyword"):r.match(/^[A-Z]+/)&&/[ \t]/.test(r.peek())?(e.cur=u,"keyword"):n(r,e)}function t(r,t){var u=r.match(/^\d+/);if(!u)return n(r,t);t.cur=e;var i=Number(u[0]);return i>=100&&i<200?"positive informational":i>=200&&i<300?"positive success":i>=300&&i<400?"positive redirect":i>=400&&i<500?"negative client-error":i>=500&&i<600?"negative server-error":"error"}function e(n,r){return n.skipToEnd(),r.cur=o,null}function u(n,r){return n.eatWhile(/\S/),r.cur=i,"string-2"}function i(r,t){return r.match(/^HTTP\/\d\.\d$/)?(t.cur=o,"keyword"):n(r,t)}function o(n){return n.sol()&&!n.eat(/[ \t]/)?n.match(/^.*?:/)?"atom":(n.skipToEnd(),"error"):(n.skipToEnd(),"string")}function c(n){return n.skipToEnd(),null}return{token:function(n,r){var t=r.cur;return t!=o&&t!=c&&n.eatSpace()?null:t(n,r)},blankLine:function(n){n.cur=c},startState:function(){return{cur:r}}}})),n.defineMIME("message/http","http")}))}}]);
//# sourceMappingURL=chunk-2d20f173.8c8d378e.js.map