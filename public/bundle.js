!function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var r=function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,"draw",(function(t){e._ctx.clearRect(0,0,e._w,e._h),e.axis(),e.grid(),t.forEach((function(t){var n=t[t.length-1],a=t[0];t.forEach((function(t){e.drawLine(t)})),e.drawPhasorRound(n),e.xScale({value:10,startX:0,shift:a.t,f:1}),e.yScale()}))})),a(this,"drawLine",(function(t){var n=t.x,a=t.y,r=t.prevX,i=t.prevY,o=t.r;t.phasorX;e._ctx.beginPath(),e._ctx.strokeStyle="green",e._ctx.moveTo(r,i),e._ctx.lineTo(n,a),e._ctx.stroke(),e._ctx.lineWidth=o,e._ctx.closePath()})),a(this,"drawPhasorRound",(function(t){var n=t.phasorX,a=(t.x,t.prevY,t.y),r=t.maxAmplitude,i=t.r,o=(t.color,e._xAxisStartPosition/2),s=e._h/2,c=r,p=e._xAxisStartPosition/2,l=e._h/2,u=n+e._xAxisStartPosition/2,h=a;e._ctx.beginPath(),e._ctx.arc(o,s,c,0,2*Math.PI),e._ctx.strokeStyle="green",e._ctx.moveTo(p,l),e._ctx.lineTo(u,h),e._ctx.stroke(),e._ctx.lineWidth=i,e._ctx.closePath()})),a(this,"viewElements",(function(){e._ctx.beginPath(),e._ctx.font="20px Georgia",e._ctx.fillText("ωt",e._w-25,e._h/2+20),e._ctx.closePath()})),a(this,"xScale",(function(t){for(var n=t.shift,a=e._w-e._xAxisStartPosition,r=64/t.f,i=e._h/2,o=a/r,s=n/r|0,c=-n%r,p=1;p<=o;p++){var l=a*p/o+c+e._xAxisStartPosition;p%1||e._ctx.fillText((p+s)/5,l-7,i+20),e._ctx.strokeRect(l,i-5,0,10)}})),a(this,"yScale",(function(t){for(var n=1;n<=20;n++)e._ctx.fillText(-Math.round(10*(n/5-2))/10,e._xAxisStartPosition+10,e._h*n/20),e._ctx.strokeRect(e._xAxisStartPosition-5,e._h*n/20,10,0)})),a(this,"grid",(function(){var t=e._h/36,n=e._w/64;e._ctx.beginPath(),e._ctx.strokeStyle="lightgrey";for(var a=0;a<t;a++)36*a!=e._h/2&&e._ctx.strokeRect(0,36*a,e._w,.1);for(var r=0;r<n;r++)64*r!==e._xAxisStartPosition&&e._ctx.strokeRect(64*r,0,.1,e._w);e._ctx.stroke()})),a(this,"axis",(function(){e._ctx.beginPath(),e._ctx.moveTo(0,e._h/2),e._ctx.lineTo(e._w,e._h/2),e._ctx.strokeStyle="blue",e._ctx.moveTo(e._xAxisStartPosition,0),e._ctx.lineTo(e._xAxisStartPosition,e._h),e._ctx.stroke()})),a(this,"replaceWaveView",(function(t,n){e._ctx.translate(t,n)})),a(this,"clearCanvas",(function(){e._ctx.clearRect(0,0,e._canvas.width,e._canvas.height)})),this._h="720",this._w="1280",this._canvas=document.createElement("canvas"),this._canvas.setAttribute("width",this._w),this._canvas.setAttribute("height",this._h),this._ctx=this._canvas.getContext("2d"),this._xAxisStartPosition=448},i=(n(0),function(){return document.createElement("input")}),o=function(t,e){var n=document.createElement("div");return e&&(n.className=e),n.innerText=t,n},s=(n(1),function(){var t=document.createElement("button");return t.className="wave-set__button",t.innerText="SET",t}),c=function(t){var e=document.createElement("div");return e.className=t,e};var p=function t(){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.bottomWrapper=document.createElement("div"),this.bottomWrapper.className="wrapper__bottom",this.ampLabel=o("Amplitute (Imax)","amp-field__label"),this.ampButton=s(),this.ampInput=i();var n=c("fields__amp-field");n.append.apply(n,[this.ampLabel,this.ampInput,this.ampButton]),this.freqLabel=o("Frequency per second","freq-field__label"),this.freqButton=s(),this.freqInput=i();var a,r=c("fields__freq-field");r.append.apply(r,[this.freqLabel,this.freqInput,this.freqButton]),this.stopButton=((a=document.createElement("button")).className="wave-stop__button",a.style.padding="10px",a.innerText="Stop",a.style.backgroundColor="red",a),this.stopWrapper=c("bottom__stop-wrapper"),this.stopWrapper.append(this.stopButton);var p=c("bottom__fields");p.append.apply(p,[n,r]),(e=this.bottomWrapper).append.apply(e,[p,this.stopWrapper])};n(2);var l=function t(){var e,n,a;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.headerWrapper=c("header__wrapper"),this.ampRInp=c("amp-field__readOnly"),this.freqRInp=c("freq-field__readOnly"),this.apmLabel=o("Instant amplitude(i):","amp-field__label"),this.freqLabel=o("Phase:","freq-field__label"),this.ampFieldWrapper=c("wrapper__amp-field"),(e=this.ampFieldWrapper).append.apply(e,[this.ampRInp,this.apmLabel]),this.freqFieldWrapper=c("wrapper__freq-field"),(n=this.freqFieldWrapper).append.apply(n,[this.freqRInp,this.freqLabel]),(a=this.headerWrapper).append.apply(a,[this.ampFieldWrapper,this.freqFieldWrapper])};function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=new function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,"onAmpClick",(function(t){e.bottom.ampButton.onclick=function(){var n=e.bottom.ampInput.value;t(n)}})),u(this,"onFreqClick",(function(t){e.bottom.freqButton.onclick=function(){var n=e.bottom.freqInput.value;t(n)}})),u(this,"onStopClick",(function(t){var n=!1;e.bottom.stopButton.onclick=function(){n=!n,e.bottom.stopButton.innerText=n?"Resume":"Stop",e.bottom.stopButton.style.backgroundColor=n?"#00cc00":"red",t(n)}})),u(this,"displayParams",(function(t){var n=t.y,a=(t.f,t.phase);t.angleSpeed;e.header.ampRInp.innerText=n,e.header.freqRInp.innerText=a})),this.waveCanvas=new r,this._canvas=this.waveCanvas._canvas,this._canvas.style.border="3px solid black",this._root=document.getElementById("root");var n=document.createElement("div");n.className="canvas-wrapper";var a=document.createElement("div");a.className="wrapper",this.bottom=new p,this.header=new l,n.append(this._canvas),a.append.apply(a,[this.header.headerWrapper,n,this.bottom.bottomWrapper]),this._root.append(a)};function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=new function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,"getAllWaves",(function(){return e._waves})),f(this,"getWaveById",(function(t){return e._waves[t]})),f(this,"addWave",(function(t){return e._waves.push([t])})),f(this,"addWaveById",(function(t,n){return e._waves[t].push(n)})),f(this,"clearAllWaves",(function(){return e._waves=[]})),this._waves=[]};function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}new function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,"displayParams",(function(t){var n=-Math.round((t.y-e._h/2)/180*1e3)/1e3,a=(t.f,{y:n,phase:(t.angleSpeed*t.t*180/Math.PI|0)%360});h.displayParams(a)})),m(this,"setAmplitude",(function(t,n){d.getWaveById(0).forEach((function(n){n.maxAmplitude=+t*e._h/4}))})),m(this,"setFreq",(function(t,e){d.getWaveById(0).forEach((function(e){e.f=+t}))})),m(this,"setWave",(function(){var t=1*e._h/4;e._w;d.addWave({maxAmplitude:t,f:1,r:1.2,t:0,id:0,xt:0,xIsStop:!1,xSpeed:1}),d.addWave({maxAmplitude:.5*e._h/4,f:2,r:1.2,t:0,id:1,xt:0,xIsStop:!1,xSpeed:1})})),m(this,"animate",(function(){if(!e.isStop){var t=d.getAllWaves();t.forEach((function(t){var n=v({},t[t.length-1]);t.forEach((function(t){t.xIsStop&&(t.x-=1,t.prevX-=1),n.x>e._w&&(t.xIsStop=!0)})),t.length>832&&t.shift();var a=v({},t[t.length-1]);e.waveMove(a)})),h.waveCanvas.draw(t)}})),m(this,"waveMove",(function(t){t.prevY=t.y,t.prevX=t.x,t.prevPhasorX=t.phasorX,t.angleSpeed=t.angleSpeed&&!t.f?t.angleSpeed:2*Math.PI*(t.f/(e._w/2)),t.y=e._h/2-t.maxAmplitude*Math.sin(t.angleSpeed*t.t),t.phasorX=t.maxAmplitude*Math.cos(t.angleSpeed*t.t),t.x=t.xt+448,t.t+=1,t.xIsStop||(t.xt=t.t),e.displayParams(t),d.addWaveById(t.id,t)})),m(this,"distance",(function(t,e,n,a){return Math.sqrt(Math.pow(t-n,2)+Math.pow(e-a,2))})),this._w="1280",this._h="720",this.isStop=!1,setInterval((function(){e.animate()}),0),this.setWave(),h.onAmpClick(this.setAmplitude),h.onFreqClick(this.setFreq),h.onStopClick((function(){return e.isStop=!e.isStop}))}}]);