(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d222924"],{ced0:function(t,i,e){(function(t){t(e("56b3"))})((function(t){"use strict";t.defineMode("yaml",(function(){var t=["true","false","on","off","yes","no"],i=new RegExp("\\b(("+t.join(")|(")+"))$","i");return{token:function(t,e){var n=t.peek(),r=e.escaped;if(e.escaped=!1,"#"==n&&(0==t.pos||/\s/.test(t.string.charAt(t.pos-1))))return t.skipToEnd(),"comment";if(t.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))return"string";if(e.literal&&t.indentation()>e.keyCol)return t.skipToEnd(),"string";if(e.literal&&(e.literal=!1),t.sol()){if(e.keyCol=0,e.pair=!1,e.pairStart=!1,t.match(/---/))return"def";if(t.match(/\.\.\./))return"def";if(t.match(/\s*-\s+/))return"meta"}if(t.match(/^(\{|\}|\[|\])/))return"{"==n?e.inlinePairs++:"}"==n?e.inlinePairs--:"["==n?e.inlineList++:e.inlineList--,"meta";if(e.inlineList>0&&!r&&","==n)return t.next(),"meta";if(e.inlinePairs>0&&!r&&","==n)return e.keyCol=0,e.pair=!1,e.pairStart=!1,t.next(),"meta";if(e.pairStart){if(t.match(/^\s*(\||\>)\s*/))return e.literal=!0,"meta";if(t.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))return"variable-2";if(0==e.inlinePairs&&t.match(/^\s*-?[0-9\.\,]+\s?$/))return"number";if(e.inlinePairs>0&&t.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))return"number";if(t.match(i))return"keyword"}return!e.pair&&t.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)?(e.pair=!0,e.keyCol=t.indentation(),"atom"):e.pair&&t.match(/^:\s*/)?(e.pairStart=!0,"meta"):(e.pairStart=!1,e.escaped="\\"==n,t.next(),null)},startState:function(){return{pair:!1,pairStart:!1,keyCol:0,inlinePairs:0,inlineList:0,literal:!1,escaped:!1}},lineComment:"#",fold:"indent"}})),t.defineMIME("text/x-yaml","yaml"),t.defineMIME("text/yaml","yaml")}))}}]);
//# sourceMappingURL=chunk-2d222924.3d838e1a.js.map