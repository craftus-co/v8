(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0ffe"],{"9f83":function(e,t,n){(function(e){e(n("56b3"))})((function(e){"use strict";e.defineMode("smalltalk",(function(e){var t=/[+\-\/\\*~<>=@%|&?!.,:;^]/,n=/true|false|nil|self|super|thisContext/,a=function(e,t){this.next=e,this.parent=t},i=function(e,t,n){this.name=e,this.context=t,this.eos=n},r=function(){this.context=new a(o,null),this.expectVariable=!0,this.indentation=0,this.userIndentationDelta=0};r.prototype.userIndent=function(t){this.userIndentationDelta=t>0?t/e.indentUnit-this.indentation:0};var o=function(e,r,o){var d=new i(null,r,!1),f=e.next();return'"'===f?d=s(e,new a(s,r)):"'"===f?d=u(e,new a(u,r)):"#"===f?"'"===e.peek()?(e.next(),d=c(e,new a(c,r))):e.eatWhile(/[^\s.{}\[\]()]/)?d.name="string-2":d.name="meta":"$"===f?("<"===e.next()&&(e.eatWhile(/[^\s>]/),e.next()),d.name="string-2"):"|"===f&&o.expectVariable?d.context=new a(l,r):/[\[\]{}()]/.test(f)?(d.name="bracket",d.eos=/[\[{(]/.test(f),"["===f?o.indentation++:"]"===f&&(o.indentation=Math.max(0,o.indentation-1))):t.test(f)?(e.eatWhile(t),d.name="operator",d.eos=";"!==f):/\d/.test(f)?(e.eatWhile(/[\w\d]/),d.name="number"):/[\w_]/.test(f)?(e.eatWhile(/[\w\d_]/),d.name=o.expectVariable?n.test(e.current())?"keyword":"variable":null):d.eos=o.expectVariable,d},s=function(e,t){return e.eatWhile(/[^"]/),new i("comment",e.eat('"')?t.parent:t,!0)},u=function(e,t){return e.eatWhile(/[^']/),new i("string",e.eat("'")?t.parent:t,!1)},c=function(e,t){return e.eatWhile(/[^']/),new i("string-2",e.eat("'")?t.parent:t,!1)},l=function(e,t){var n=new i(null,t,!1),a=e.next();return"|"===a?(n.context=t.parent,n.eos=!0):(e.eatWhile(/[^|]/),n.name="variable"),n};return{startState:function(){return new r},token:function(e,t){if(t.userIndent(e.indentation()),e.eatSpace())return null;var n=t.context.next(e,t.context,t);return t.context=n.context,t.expectVariable=n.eos,n.name},blankLine:function(e){e.userIndent(0)},indent:function(t,n){var a=t.context.next===o&&n&&"]"===n.charAt(0)?-1:t.userIndentationDelta;return(t.indentation+a)*e.indentUnit},electricChars:"]"}})),e.defineMIME("text/x-stsrc",{name:"smalltalk"})}))}}]);
//# sourceMappingURL=chunk-2d0f0ffe.2de3cd3e.js.map