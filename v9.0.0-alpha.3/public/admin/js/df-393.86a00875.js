(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-393","df-0","df-1","df-2","df-3","df-388","df-389","df-390","df-391","df-392"],{"1f21":function(t,e,n){"use strict";function a(t){return function(e){var n=e||{},a=n.width?String(n.width):t.defaultWidth,i=t.formats[a]||t.formats[t.defaultWidth];return i}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a,t.exports=e.default},2381:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("af03"));function i(t){return t&&t.__esModule?t:{default:t}}var r={narrow:["TCN","SCN"],abbreviated:["trước CN","sau CN"],wide:["trước Công Nguyên","sau Công Nguyên"]},u={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["Quý 1","Quý 2","Quý 3","Quý 4"]},h={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["quý I","quý II","quý III","quý IV"]},o={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["Thg 1","Thg 2","Thg 3","Thg 4","Thg 5","Thg 6","Thg 7","Thg 8","Thg 9","Thg 10","Thg 11","Thg 12"],wide:["Tháng Một","Tháng Hai","Tháng Ba","Tháng Tư","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám","Tháng Chín","Tháng Mười","Tháng Mười Một","Tháng Mười Hai"]},d={narrow:["01","02","03","04","05","06","07","08","09","10","11","12"],abbreviated:["thg 1","thg 2","thg 3","thg 4","thg 5","thg 6","thg 7","thg 8","thg 9","thg 10","thg 11","thg 12"],wide:["tháng 01","tháng 02","tháng 03","tháng 04","tháng 05","tháng 06","tháng 07","tháng 08","tháng 09","tháng 10","tháng 11","tháng 12"]},l={narrow:["CN","T2","T3","T4","T5","T6","T7"],short:["CN","Th 2","Th 3","Th 4","Th 5","Th 6","Th 7"],abbreviated:["CN","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],wide:["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"]},g={narrow:{am:"am",pm:"pm",midnight:"nửa đêm",noon:"tr",morning:"sg",afternoon:"ch",evening:"tối",night:"đêm"},abbreviated:{am:"AM",pm:"PM",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"},wide:{am:"SA",pm:"CH",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"}},f={narrow:{am:"am",pm:"pm",midnight:"nửa đêm",noon:"tr",morning:"sg",afternoon:"ch",evening:"tối",night:"đêm"},abbreviated:{am:"AM",pm:"PM",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"},wide:{am:"SA",pm:"CH",midnight:"nửa đêm",noon:"giữa trưa",morning:"vào buổi sáng",afternoon:"vào buổi chiều",evening:"vào buổi tối",night:"vào ban đêm"}};function s(t,e){var n=e||{},a=String(n.unit),i=parseInt(t,10);if("quarter"===a)switch(i){case 1:return"I";case 2:return"II";case 3:return"III";case 4:return"IV"}else if("day"===a)switch(i){case 1:return"thứ 2";case 2:return"thứ 3";case 3:return"thứ 4";case 4:return"thứ 5";case 5:return"thứ 6";case 6:return"thứ 7";case 7:return"chủ nhật"}else{if("week"===a)return 1===i?"thứ nhất":"thứ "+i;if("dayOfYear"===a)return 1===i?"đầu tiên":"thứ "+i}return i}var c={ordinalNumber:s,era:(0,a.default)({values:r,defaultWidth:"wide"}),quarter:(0,a.default)({values:u,defaultWidth:"wide",formattingValues:h,defaultFormattingWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:(0,a.default)({values:o,defaultWidth:"wide",formattingValues:d,defaultFormattingWidth:"wide"}),day:(0,a.default)({values:l,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:g,defaultWidth:"wide",formattingValues:f,defaultFormattingWidth:"wide"})},m=c;e.default=m,t.exports=e.default},"3ad1":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("9686")),i=r(n("b028"));function r(t){return t&&t.__esModule?t:{default:t}}var u=/^(\d+)/i,h=/\d+/i,o={narrow:/^(tcn|scn)/i,abbreviated:/^(trước CN|sau CN)/i,wide:/^(trước Công Nguyên|sau Công Nguyên)/i},d={any:[/^t/i,/^s/i]},l={narrow:/^([1234]|i{1,3}v?)/i,abbreviated:/^q([1234]|i{1,3}v?)/i,wide:/^quý ([1234]|i{1,3}v?)/i},g={any:[/(1|i)$/i,/(2|ii)$/i,/(3|iii)$/i,/(4|iv)$/i]},f={narrow:/^(0?[2-9]|10|11|12|0?1)/i,abbreviated:/^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i,wide:/^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i},s={narrow:[/0?1$/i,/0?2/i,/3/,/4/,/5/,/6/,/7/,/8/,/9/,/10/,/11/,/12/],abbreviated:[/^thg[ _]?0?1(?!\d)/i,/^thg[ _]?0?2/i,/^thg[ _]?0?3/i,/^thg[ _]?0?4/i,/^thg[ _]?0?5/i,/^thg[ _]?0?6/i,/^thg[ _]?0?7/i,/^thg[ _]?0?8/i,/^thg[ _]?0?9/i,/^thg[ _]?10/i,/^thg[ _]?11/i,/^thg[ _]?12/i],wide:[/^tháng ?(Một|0?1(?!\d))/i,/^tháng ?(Hai|0?2)/i,/^tháng ?(Ba|0?3)/i,/^tháng ?(Tư|0?4)/i,/^tháng ?(Năm|0?5)/i,/^tháng ?(Sáu|0?6)/i,/^tháng ?(Bảy|0?7)/i,/^tháng ?(Tám|0?8)/i,/^tháng ?(Chín|0?9)/i,/^tháng ?(Mười|10)/i,/^tháng ?(Mười ?Một|11)/i,/^tháng ?(Mười ?Hai|12)/i]},c={narrow:/^(CN|T2|T3|T4|T5|T6|T7)/i,short:/^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,abbreviated:/^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,wide:/^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i},m={narrow:[/CN/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i],short:[/CN/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i],abbreviated:[/CN/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i],wide:[/(Chủ|Chúa) ?Nhật/i,/Hai/i,/Ba/i,/Tư/i,/Năm/i,/Sáu/i,/Bảy/i]},v={narrow:/^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,abbreviated:/^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,wide:/^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i},T={any:{am:/^(a|sa)/i,pm:/^(p|ch[^i]*)/i,midnight:/nửa đêm/i,noon:/trưa/i,morning:/sáng/i,afternoon:/chiều/i,evening:/tối/i,night:/^đêm/i}},b={ordinalNumber:(0,a.default)({matchPattern:u,parsePattern:h,valueCallback:function(t){return parseInt(t,10)}}),era:(0,i.default)({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:d,defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:g,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,i.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:v,defaultMatchWidth:"any",parsePatterns:T,defaultParseWidth:"any"})},p=b;e.default=p,t.exports=e.default},7464:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("c7a1")),i=o(n("9b49")),r=o(n("feab")),u=o(n("2381")),h=o(n("3ad1"));function o(t){return t&&t.__esModule?t:{default:t}}var d={code:"vi",formatDistance:a.default,formatLong:i.default,formatRelative:r.default,localize:u.default,match:h.default,options:{weekStartsOn:1,firstWeekContainsDate:1}},l=d;e.default=l,t.exports=e.default},9686:function(t,e,n){"use strict";function a(t){return function(e,n){var a=String(e),i=n||{},r=a.match(t.matchPattern);if(!r)return null;var u=r[0],h=a.match(t.parsePattern);if(!h)return null;var o=t.valueCallback?t.valueCallback(h[0]):h[0];return o=i.valueCallback?i.valueCallback(o):o,{value:o,rest:a.slice(u.length)}}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a,t.exports=e.default},"9b49":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("1f21"));function i(t){return t&&t.__esModule?t:{default:t}}var r={full:"EEEE, 'ngày' d MMMM 'năm' y",long:"'ngày' d MMMM 'năm' y",medium:"d MMM 'năm' y",short:"dd/MM/y"},u={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},h={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},o={date:(0,a.default)({formats:r,defaultWidth:"full"}),time:(0,a.default)({formats:u,defaultWidth:"full"}),dateTime:(0,a.default)({formats:h,defaultWidth:"full"})},d=o;e.default=d,t.exports=e.default},af03:function(t,e,n){"use strict";function a(t){return function(e,n){var a,i=n||{},r=i.context?String(i.context):"standalone";if("formatting"===r&&t.formattingValues){var u=t.defaultFormattingWidth||t.defaultWidth,h=i.width?String(i.width):u;a=t.formattingValues[h]||t.formattingValues[u]}else{var o=t.defaultWidth,d=i.width?String(i.width):t.defaultWidth;a=t.values[d]||t.values[o]}var l=t.argumentCallback?t.argumentCallback(e):e;return a[l]}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a,t.exports=e.default},b028:function(t,e,n){"use strict";function a(t){return function(e,n){var a=String(e),u=n||{},h=u.width,o=h&&t.matchPatterns[h]||t.matchPatterns[t.defaultMatchWidth],d=a.match(o);if(!d)return null;var l,g=d[0],f=h&&t.parsePatterns[h]||t.parsePatterns[t.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(f)?r(f,(function(t){return t.test(g)})):i(f,(function(t){return t.test(g)})),l=t.valueCallback?t.valueCallback(l):l,l=u.valueCallback?u.valueCallback(l):l,{value:l,rest:a.slice(g.length)}}}function i(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function r(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a,t.exports=e.default},c7a1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var a={lessThanXSeconds:{one:"dưới 1 giây",other:"dưới {{count}} giây"},xSeconds:{one:"1 giây",other:"{{count}} giây"},halfAMinute:"nửa phút",lessThanXMinutes:{one:"dưới 1 phút",other:"dưới {{count}} phút"},xMinutes:{one:"1 phút",other:"{{count}} phút"},aboutXHours:{one:"khoảng 1 giờ",other:"khoảng {{count}} giờ"},xHours:{one:"1 giờ",other:"{{count}} giờ"},xDays:{one:"1 ngày",other:"{{count}} ngày"},aboutXWeeks:{one:"khoảng 1 tuần",other:"khoảng {{count}} tuần"},xWeeks:{one:"1 tuần",other:"{{count}} tuần"},aboutXMonths:{one:"khoảng 1 tháng",other:"khoảng {{count}} tháng"},xMonths:{one:"1 tháng",other:"{{count}} tháng"},aboutXYears:{one:"khoảng 1 năm",other:"khoảng {{count}} năm"},xYears:{one:"1 năm",other:"{{count}} năm"},overXYears:{one:"hơn 1 năm",other:"hơn {{count}} năm"},almostXYears:{one:"gần 1 năm",other:"gần {{count}} năm"}};function i(t,e,n){var i;return n=n||{},i="string"===typeof a[t]?a[t]:1===e?a[t].one:a[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?i+" nữa":i+" trước":i}t.exports=e.default},feab:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var a={lastWeek:"eeee 'tuần trước vào lúc' p",yesterday:"'hôm qua vào lúc' p",today:"'hôm nay vào lúc' p",tomorrow:"'ngày mai vào lúc' p",nextWeek:"eeee 'tới vào lúc' p",other:"P"};function i(t,e,n,i){return a[t]}t.exports=e.default}}]);
//# sourceMappingURL=df-393.86a00875.js.map