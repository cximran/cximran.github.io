var lw_timeago=function(){var e={whitelist:"data-timeago",keepDate:true,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"%d hours",day:"about a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years"};function h(n){var a=n<0?e.suffixFromNow:e.suffixAgo;var c=Math.abs(n)/1000;var r=c/60;var d=r/60;var b=d/24;var p=b/365;function q(j,i){return j.replace(/%d/i,i)}var o=c<45&&q(e.seconds,Math.round(c))||c<90&&q(e.minute,1)||r<45&&q(e.minutes,Math.round(r))||r<90&&q(e.hour,1)||d<24&&q(e.hours,Math.round(d))||d<42&&q(e.day,1)||b<30&&q(e.days,Math.round(b))||b<45&&q(e.month,1)||b<365&&q(e.months,Math.round(b/30))||p<1.5&&q(e.year,1)||q(e.years,Math.round(p));return o+" "+a}function g(a){return Date.now()-a}function f(){var l=document.getElementsByTagName("time");for(var b=0;b<l.length;b++){if(e.whitelist&&!l[b].hasAttribute(e.whitelist)){break}var d=l[b].getAttribute("datetime");if(!d){break}var i=new Date(d);if(!i){break}var a=h(g(i.getTime()));var c=l[b].innerHTML;if(e.keepDate){a+=" on "+l[b].innerHTML;c=i.toLocaleString()}l[b].title=c;l[b].innerHTML=a}}return f}();