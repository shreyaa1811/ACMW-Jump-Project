(()=>{"use strict";var e,t,r,a,o,n={},c={};function i(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=n,i.c=c,e=[],i.O=(t,r,a,o)=>{if(!r){var n=1/0;for(f=0;f<e.length;f++){r=e[f][0],a=e[f][1],o=e[f][2];for(var c=!0,d=0;d<r.length;d++)(!1&o||n>=o)&&Object.keys(i.O).every((e=>i.O[e](r[d])))?r.splice(d--,1):(c=!1,o<n&&(n=o));if(c){e.splice(f--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[r,a,o]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var n={};t=t||[null,r({}),r([]),r(r)];for(var c=2&a&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,i.d(o,n),o},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"assets/js/"+({48:"a94703ab",98:"a7bd4aaa",235:"a7456010",252:"c292996e",283:"c530a2ec",401:"17896441",450:"980ede2d",503:"51063452",634:"c4f5d8e4",647:"5e95c892",742:"aba21aa0",917:"f3a8cf2a",918:"1d23c79f",976:"0e384e19"}[e]||e)+"."+{42:"fd1dd99f",48:"cb8188de",98:"8ced03a4",235:"715823fd",252:"6bd7da36",283:"f1eca8f7",401:"d89f8fac",450:"629e0cee",503:"47077a4a",634:"3ecff0e9",647:"4ce284e6",742:"920bd4bc",917:"f51132f1",918:"8c80ebb5",976:"c2ffdda2"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="acmw-jump-prakash:",i.l=(e,t,r,n)=>{if(a[e])a[e].push(t);else{var c,d;if(void 0!==r)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var l=u[f];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+r){c=l;break}}c||(d=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.setAttribute("data-webpack",o+r),c.src=e),a[e]=[t];var s=(t,r)=>{c.onerror=c.onload=null,clearTimeout(p);var o=a[e];if(delete a[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=s.bind(null,c.onerror),c.onload=s.bind(null,c.onload),d&&document.head.appendChild(c)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/ACMW-Jump-Project/",i.gca=function(e){return e={17896441:"401",51063452:"503",a94703ab:"48",a7bd4aaa:"98",a7456010:"235",c292996e:"252",c530a2ec:"283","980ede2d":"450",c4f5d8e4:"634","5e95c892":"647",aba21aa0:"742",f3a8cf2a:"917","1d23c79f":"918","0e384e19":"976"}[e]||e,i.p+i.u(e)},(()=>{var e={354:0,869:0};i.f.j=(t,r)=>{var a=i.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(354|869)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var n=i.p+i.u(t),c=new Error;i.l(n,(r=>{if(i.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",c.name="ChunkLoadError",c.type=o,c.request=n,a[1](c)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,n=r[0],c=r[1],d=r[2],u=0;if(n.some((t=>0!==e[t]))){for(a in c)i.o(c,a)&&(i.m[a]=c[a]);if(d)var f=d(i)}for(t&&t(r);u<n.length;u++)o=n[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(f)},r=self.webpackChunkacmw_jump_prakash=self.webpackChunkacmw_jump_prakash||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();