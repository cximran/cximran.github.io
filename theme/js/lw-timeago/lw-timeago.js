var lw_timeago=function(){var b={whitelist:"data-timeago",keepDate:true,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"%d hours",day:"about a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years"};function c(i){var m=i<0?b.suffixFromNow:b.suffixAgo;var k=Math.abs(i)/1000;var e=k/60;var j=e/60;var l=j/24;var g=l/365;function f(n,o){return n.replace(/%d/i,o)}var h=k<45&&f(b.seconds,Math.round(k))||k<90&&f(b.minute,1)||e<45&&f(b.minutes,Math.round(e))||e<90&&f(b.hour,1)||j<24&&f(b.hours,Math.round(j))||j<42&&f(b.day,1)||l<30&&f(b.days,Math.round(l))||l<45&&f(b.month,1)||l<365&&f(b.months,Math.round(l/30))||g<1.5&&f(b.year,1)||f(b.years,Math.round(g));return h+" "+m}function d(e){return Date.now()-e}function a(){var g=document.getElementsByTagName("time");for(var e=0;e<g.length;e++){if(b.whitelist&&!g[e].hasAttribute(b.whitelist)){break}var j=g[e].getAttribute("datetime");if(!j){break}var h=new Date(j);if(!h){break}var f=c(d(h.getTime()));var k=g[e].innerHTML;if(b.keepDate){f+=" on "+g[e].innerHTML;k=h.toLocaleString()}g[e].title=k;g[e].innerHTML=f}}return a}();