(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-268"],{d4e5:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=l;var r={lessThanXSeconds:{singular:"mindre enn ett sekund",plural:"mindre enn {{count}} sekunder"},xSeconds:{singular:"ett sekund",plural:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{singular:"mindre enn ett minutt",plural:"mindre enn {{count}} minutter"},xMinutes:{singular:"ett minutt",plural:"{{count}} minutter"},aboutXHours:{singular:"omtrent en time",plural:"omtrent {{count}} timer"},xHours:{singular:"en time",plural:"{{count}} timer"},xDays:{singular:"en dag",plural:"{{count}} dager"},aboutXWeeks:{singular:"omtrent en uke",plural:"omtrent {{count}} uker"},xWeeks:{singular:"en uke",plural:"{{count}} uker"},aboutXMonths:{singular:"omtrent en måned",plural:"omtrent {{count}} måneder"},xMonths:{singular:"en måned",plural:"{{count}} måneder"},aboutXYears:{singular:"omtrent ett år",plural:"omtrent {{count}} år"},xYears:{singular:"ett år",plural:"{{count}} år"},overXYears:{singular:"over ett år",plural:"over {{count}} år"},almostXYears:{singular:"nesten ett år",plural:"nesten {{count}} år"}},u=["null","en","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"];function l(e,n,t){t=t||{onlyNumeric:!1};var l,a=r[e];return l="string"===typeof a?a:0===n||n>1?t.onlyNumeric?a.plural.replace("{{count}}",n):a.plural.replace("{{count}}",n<13?u[n]:n):a.singular,t.addSuffix?t.comparison>0?"om "+l:l+" siden":l}e.exports=n.default}}]);
//# sourceMappingURL=df-268.b7cc375e.js.map