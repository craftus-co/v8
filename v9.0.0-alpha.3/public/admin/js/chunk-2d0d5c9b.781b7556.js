(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d5c9b"],{"707c":function(e,n,t){(function(e){e(t("56b3"))})((function(e){"use strict";function n(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var t=["package","message","import","syntax","required","optional","repeated","reserved","default","extensions","packed","bool","bytes","double","enum","float","string","int32","int64","uint32","uint64","sint32","sint64","fixed32","fixed64","sfixed32","sfixed64","option","service","rpc","returns"],r=n(t);e.registerHelper("hintWords","protobuf",t);var i=new RegExp("^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*");function o(e){if(e.eatSpace())return null;if(e.match("//"))return e.skipToEnd(),"comment";if(e.match(/^[0-9\.+-]/,!1)){if(e.match(/^[+-]?0x[0-9a-fA-F]+/))return"number";if(e.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/))return"number";if(e.match(/^[+-]?\d+([EeDd][+-]?\d+)?/))return"number"}return e.match(/^"([^"]|(""))*"/)||e.match(/^'([^']|(''))*'/)?"string":e.match(r)?"keyword":e.match(i)?"variable":(e.next(),null)}e.defineMode("protobuf",(function(){return{token:o,fold:"brace"}})),e.defineMIME("text/x-protobuf","protobuf")}))}}]);
//# sourceMappingURL=chunk-2d0d5c9b.781b7556.js.map