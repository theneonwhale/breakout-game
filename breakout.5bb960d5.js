parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Jodt":[function(require,module,exports) {
for(var t=document.getElementById("myCanvas"),e=t.getContext("2d"),n=t.width/2,o=t.height-30,i=2,a=-2,c=10,r=10,d=70,f=(t.width-d)/2,h=!1,l=!1,u=4,s=5,v=75,m=20,y=10,g=30,w=30,x=0,C=3,P=[],E=0;E<s;E+=1){P[E]=[];for(var O=0;O<u;O+=1)P[E][O]={x:0,y:0,status:1}}function k(){for(var t=0;t<s;t+=1)for(var n=0;n<u;n+=1)if(1==P[t][n].status){var o=t*(v+y)+w,i=n*(m+y)+g;P[t][n].x=o,P[t][n].y=i,e.beginPath(),e.rect(o,i,v,m),e.fill(),e.closePath()}}function A(){e.beginPath(),e.arc(n,o,c,0,2*Math.PI),e.fill(),e.closePath()}function I(){e.clearRect(0,0,t.width,t.height),k(),A(),L(),N(),p(),M(),(n+i>t.width-c||n+i<c)&&(i=-i,S()),o+a<c?(a=-a,S()):o+a>t.height-c&&(n>f&&n<f+d?a=-a:(C-=1)?(n=t.width/2,o=t.height-30,i=2,a=-2,f=(t.width-d)/2):(alert("GAME OVER"),document.location.reload())),n+=i,o+=a,h&&f<t.width-d?f+=6:l&&f>0&&(f-=6),requestAnimationFrame(I)}function L(){e.beginPath(),e.rect(f,t.height-r,d,r),e.fill(),e.closePath()}function S(){var t=function(t,e){return Math.round(Math.random()*(e-t)+t)},n=t(0,255),o=t(0,255),i=t(0,255);e.fillStyle="rgb(".concat(n,",").concat(o,",").concat(i,")")}function R(e){var n=e.clientX-t.offsetLeft;n>0&&n<t.width&&(f=n-d/2)}function T(t){39==t.keyCode?h=!0:37==t.keyCode&&(l=!0)}function b(t){39==t.keyCode?h=!1:37==t.keyCode&&(l=!1)}function M(){for(var t=0;t<s;t+=1)for(var e=0;e<u;e+=1){var i=P[t][e];1==i.status&&n>i.x&&n<i.x+v&&o>i.y&&o<i.y+m&&(a=-a,i.status=0,x+=5,S(),x==u*s*5&&(alert("YOU WIN, CONGRATULATIONS! YOUR SCORE IS ".concat(x," POINTS.")),document.location.reload()))}}function N(){e.font="16px Arial",e.fillText("Score: "+x,8,20)}function p(){e.font="16px Arial",e.fillText("Lives: "+C,t.width-65,20)}document.addEventListener("keydown",T,!1),document.addEventListener("keyup",b,!1),document.addEventListener("mousemove",R,!1),I();
},{}]},{},["Jodt"], null)
//# sourceMappingURL=/breakout-game/breakout.5bb960d5.js.map