var lw_timeago=function(){var g={whitelist:"data-timeago",keepDate:true,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"%d hours",day:"about a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years"};function f(n){var a=n<0?g.suffixFromNow:g.suffixAgo;var c=Math.abs(n)/1000;var r=c/60;var d=r/60;var b=d/24;var p=b/365;function q(j,i){return j.replace(/%d/i,i)}var o=c<45&&q(g.seconds,Math.round(c))||c<90&&q(g.minute,1)||r<45&&q(g.minutes,Math.round(r))||r<90&&q(g.hour,1)||d<24&&q(g.hours,Math.round(d))||d<42&&q(g.day,1)||b<30&&q(g.days,Math.round(b))||b<45&&q(g.month,1)||b<365&&q(g.months,Math.round(b/30))||p<1.5&&q(g.year,1)||q(g.years,Math.round(p));return o+" "+a}function e(a){return Date.now()-a}function h(){var l=document.getElementsByTagName("time");for(var b=0;b<l.length;b++){if(g.whitelist&&!l[b].hasAttribute(g.whitelist)){break}var d=l[b].getAttribute("datetime");if(!d){break}var i=new Date(d);if(!i){break}var a=f(e(i.getTime()));var c=l[b].innerHTML;if(g.keepDate){a+=" on "+l[b].innerHTML;c=i.toLocaleString()}l[b].title=c;l[b].innerHTML=a}}return h}();