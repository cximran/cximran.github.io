var lw_timeago=function(){var d={whitelist:"data-timeago",keepDate:true,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"%d hours",day:"about a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years"};function a(i){var m=i<0?d.suffixFromNow:d.suffixAgo;var k=Math.abs(i)/1000;var e=k/60;var j=e/60;var l=j/24;var g=l/365;function f(n,o){return n.replace(/%d/i,o)}var h=k<45&&f(d.seconds,Math.round(k))||k<90&&f(d.minute,1)||e<45&&f(d.minutes,Math.round(e))||e<90&&f(d.hour,1)||j<24&&f(d.hours,Math.round(j))||j<42&&f(d.day,1)||l<30&&f(d.days,Math.round(l))||l<45&&f(d.month,1)||l<365&&f(d.months,Math.round(l/30))||g<1.5&&f(d.year,1)||f(d.years,Math.round(g));return h+" "+m}function b(e){return Date.now()-e}function c(){var g=document.getElementsByTagName("time");for(var e=0;e<g.length;e++){if(d.whitelist&&!g[e].hasAttribute(d.whitelist)){break}var j=g[e].getAttribute("datetime");if(!j){break}var h=new Date(j);if(!h){break}var f=a(b(h.getTime()));var k=g[e].innerHTML;if(d.keepDate){f+=" on "+g[e].innerHTML;k=h.toLocaleString()}g[e].title=k;g[e].innerHTML=f}}return c}();