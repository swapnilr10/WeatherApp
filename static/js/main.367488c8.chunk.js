(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),o=a.n(r),i=(a(9),a(1)),l=(a(10),a(11),"be062f7a57acb9500a9a74437bbe7986"),s="https://api.openweathermap.org/data/2.5/";var u=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)({}),u=Object(i.a)(o,2),m=u[0],d=u[1];return c.a.createElement("div",null,c.a.createElement("img",{src:"../weatherimg2.jpg"}),c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"WEATHER APP")),c.a.createElement("main",null,c.a.createElement("div",{className:"search"},c.a.createElement("input",{type:"text",placeholder:"Enter City",onChange:function(e){return r(e.target.value)},value:a,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(s,"weather?q=").concat(a,"&units=metric&APPID=").concat(l)).then((function(e){return e.json()})).then((function(e){d(e),r(""),console.log(e)}))}})),"undefined"!=typeof m.main?c.a.createElement("div",null,c.a.createElement("div",{className:"location-box"},c.a.createElement("div",{className:"location"},m.name,", ",m.sys.country),c.a.createElement("div",{className:"date"},function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(t,", ").concat(a," ").concat(n," ").concat(c)}(new Date))),c.a.createElement("div",{className:"weather-box"},c.a.createElement("div",{className:"temp"},Math.round(m.main.temp),"\xb0c"),c.a.createElement("div",{className:"weather"},m.weather[0].main))):"",";"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.367488c8.chunk.js.map