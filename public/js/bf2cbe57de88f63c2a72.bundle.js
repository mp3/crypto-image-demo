(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{23:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}n.r(t);var l=function(e,t){return e(t={exports:{}},t.exports),t.exports}(function(e){"undefined"!=typeof window&&function(t){var n=t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype,r=t.Blob&&function(){try{return Boolean(new Blob)}catch(e){return!1}}(),a=r&&t.Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(e){return!1}}(),i=t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder||t.MSBlobBuilder,o=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,l=(r||i)&&t.atob&&t.ArrayBuffer&&t.Uint8Array&&function(e){var t,n,l,c,s,u,f,h,d;if(!(t=e.match(o)))throw new Error("invalid data URI");for(n=t[2]?t[1]:"text/plain"+(t[3]||";charset=US-ASCII"),l=!!t[4],c=e.slice(t[0].length),s=l?atob(c):decodeURIComponent(c),u=new ArrayBuffer(s.length),f=new Uint8Array(u),h=0;h<s.length;h+=1)f[h]=s.charCodeAt(h);return r?new Blob([a?f:u],{type:n}):((d=new i).append(u),d.getBlob(n))};t.HTMLCanvasElement&&!n.toBlob&&(n.mozGetAsFile?n.toBlob=function(e,t,r){var a=this;setTimeout(function(){r&&n.toDataURL&&l?e(l(a.toDataURL(t,r))):e(a.mozGetAsFile("blob",t))})}:n.toDataURL&&l&&(n.toBlob=function(e,t,n){var r=this;setTimeout(function(){e(l(r.toDataURL(t,n)))})})),e.exports?e.exports=l:t.dataURLtoBlob=l}(window)}),c={strict:!0,checkOrientation:!0,maxWidth:1/0,maxHeight:1/0,minWidth:0,minHeight:0,width:void 0,height:void 0,quality:.8,mimeType:"auto",convertSize:5e6,beforeDraw:null,drew:null,success:null,error:null},s="undefined"!=typeof window?window:{},u=Array.prototype.slice;var f=/^image\/.+$/;function h(e){return f.test(e)}var d=String.fromCharCode;var g=s.btoa;function p(e){var t,n=new DataView(e);try{var r,a,i;if(255===n.getUint8(0)&&216===n.getUint8(1))for(var o=n.byteLength,l=2;l+1<o;){if(255===n.getUint8(l)&&225===n.getUint8(l+1)){a=l;break}l+=1}if(a){var c=a+10;if("Exif"===function(e,t,n){var r,a="";for(n+=t,r=t;r<n;r+=1)a+=d(e.getUint8(r));return a}(n,a+4,4)){var s=n.getUint16(c);if(((r=18761===s)||19789===s)&&42===n.getUint16(c+2,r)){var u=n.getUint32(c+4,r);u>=8&&(i=c+u)}}}if(i){var f,h,g=n.getUint16(i,r);for(h=0;h<g;h+=1)if(f=i+12*h+2,274===n.getUint16(f,r)){f+=8,t=n.getUint16(f,r),n.setUint16(f,1,r);break}}}catch(e){t=1}return t}var b=/\.\d*(?:0|9){12}\d*$/;function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return b.test(e)?Math.round(e*t)/t:e}var v=s.ArrayBuffer,w=s.FileReader,y=s.URL||s.webkitURL,x=/\.\w+$/,k=s.Compressor,U=function(){function e(t,n){!
/*!
 * Compressor.js v1.0.5
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2019-01-23T10:53:08.724Z
 */
function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.file=t,this.image=new Image,this.options=o({},c,n),this.aborted=!1,this.result=null,this.init()}var t,n,a;return t=e,a=[{key:"noConflict",value:function(){return window.Compressor=k,e}},{key:"setDefaults",value:function(e){i(c,e)}}],(n=[{key:"init",value:function(){var e=this,t=this.file,n=this.options;if(r=t,"undefined"!=typeof Blob&&(r instanceof Blob||"[object Blob]"===Object.prototype.toString.call(r))){var r,a=t.type;if(h(a))if(y&&w)if(v||(n.checkOrientation=!1),y&&!n.checkOrientation)this.load({url:y.createObjectURL(t)});else{var o=new w,l=n.checkOrientation&&"image/jpeg"===a;this.reader=o,o.onload=function(n){var r=n.target.result,o={};if(l){var c=p(r);c>1||!y?(o.url=function(e,t){for(var n,r=[],a=new Uint8Array(e);a.length>0;)r.push(d.apply(null,(n=a.subarray(0,8192),Array.from?Array.from(n):u.call(n)))),a=a.subarray(8192);return"data:".concat(t,";base64,").concat(g(r.join("")))}(r,a),c>1&&i(o,function(e){var t=0,n=1,r=1;switch(e){case 2:n=-1;break;case 3:t=-180;break;case 4:r=-1;break;case 5:t=90,r=-1;break;case 6:t=90;break;case 7:t=90,n=-1;break;case 8:t=-90}return{rotate:t,scaleX:n,scaleY:r}}(c))):o.url=y.createObjectURL(t)}else o.url=r;e.load(o)},o.onabort=function(){e.fail(new Error("Aborted to read the image with FileReader."))},o.onerror=function(){e.fail(new Error("Failed to read the image with FileReader."))},o.onloadend=function(){e.reader=null},l?o.readAsArrayBuffer(t):o.readAsDataURL(t)}else this.fail(new Error("The current browser does not support image compression."));else this.fail(new Error("The first argument must be an image File or Blob object."))}else this.fail(new Error("The first argument must be a File or Blob object."))}},{key:"load",value:function(e){var t=this,n=this.file,r=this.image;r.onload=function(){t.draw(o({},e,{naturalWidth:r.naturalWidth,naturalHeight:r.naturalHeight}))},r.onabort=function(){t.fail(new Error("Aborted to load the image."))},r.onerror=function(){t.fail(new Error("Failed to load the image."))},r.alt=n.name,r.src=e.url}},{key:"draw",value:function(e){var t=this,n=e.naturalWidth,r=e.naturalHeight,a=e.rotate,i=void 0===a?0:a,o=e.scaleX,c=void 0===o?1:o,s=e.scaleY,u=void 0===s?1:s,f=this.file,d=this.image,g=this.options,p=document.createElement("canvas"),b=p.getContext("2d"),v=n/r,w=Math.abs(i)%180==90,y=Math.max(g.maxWidth,0)||1/0,x=Math.max(g.maxHeight,0)||1/0,k=Math.max(g.minWidth,0)||0,U=Math.max(g.minHeight,0)||0,B=Math.max(g.width,0)||n,E=Math.max(g.height,0)||r;if(w){var j=[x,y];y=j[0],x=j[1];var O=[U,k];k=O[0],U=O[1];var A=[E,B];B=A[0],E=A[1]}y<1/0&&x<1/0?x*v>y?x=y/v:y=x*v:y<1/0?x=y/v:x<1/0&&(y=x*v),k>0&&U>0?U*v>k?U=k/v:k=U*v:k>0?U=k/v:U>0&&(k=U*v),E*v>B?E=B/v:B=E*v;var R=-(B=Math.floor(m(Math.min(Math.max(B,k),y))))/2,D=-(E=Math.floor(m(Math.min(Math.max(E,U),x))))/2,M=B,L=E;if(w){var T=[E,B];B=T[0],E=T[1]}p.width=B,p.height=E,h(g.mimeType)||(g.mimeType=f.type);var S="transparent";if(f.size>g.convertSize&&"image/png"===g.mimeType&&(S="#fff",g.mimeType="image/jpeg"),b.fillStyle=S,b.fillRect(0,0,B,E),g.beforeDraw&&g.beforeDraw.call(this,b,p),!this.aborted&&(b.save(),b.translate(B/2,E/2),b.rotate(i*Math.PI/180),b.scale(c,u),b.drawImage(d,R,D,M,L),b.restore(),g.drew&&g.drew.call(this,b,p),!this.aborted)){var z=function(e){t.aborted||t.done({naturalWidth:n,naturalHeight:r,result:e})};p.toBlob?p.toBlob(z,g.mimeType,g.quality):z(l(p.toDataURL(g.mimeType,g.quality)))}}},{key:"done",value:function(e){var t,n,r=e.naturalWidth,a=e.naturalHeight,i=e.result,o=this.file,l=this.image,c=this.options;if(y&&!c.checkOrientation&&y.revokeObjectURL(l.src),i)if(c.strict&&i.size>o.size&&c.mimeType===o.type&&!(c.width>r||c.height>a||c.minWidth>r||c.minHeight>a))i=o;else{var s=new Date;i.lastModified=s.getTime(),i.lastModifiedDate=s,i.name=o.name,i.name&&i.type!==o.type&&(i.name=i.name.replace(x,(t=i.type,"jpeg"===(n=h(t)?t.substr(6):"")&&(n="jpg"),".".concat(n))))}else i=o;this.result=i,c.success&&c.success.call(this,i)}},{key:"fail",value:function(e){var t=this.options;if(!t.error)throw e;t.error.call(this,e)}},{key:"abort",value:function(){this.aborted||(this.aborted=!0,this.reader?this.reader.abort():this.image.complete?this.fail(new Error("The compression process has been aborted.")):(this.image.onload=null,this.image.onabort()))}}])&&r(t.prototype,n),a&&r(t,a),e}(),B=n(0),E=n(5),j=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},O=function(){document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px")};O(),window.addEventListener("resize",function(){return O()});t.default=function(){var e=B.useState(new Blob),t=e[0],n=e[1],r=B.useState(""),a=r[0],i=r[1],o=B.useState(0),l=o[0],c=o[1],s=B.useState(!1),u=s[0],f=s[1],h=B.useState(""),d=h[0],g=h[1],p=B.useRef(null),b=new FileReader;B.useEffect(function(){l>0&&t.size&&m(t)}),b.onload=function(e){var n=e.target.result;if(i(n),l<250)c(l+1);else{var r=window.URL.createObjectURL(t);g(r)}c(0)};var m=function(e){new U(e,{convertSize:0,maxHeight:1e3,maxWidth:1e3,quality:1-l/250,success:function(e){n(e),b.readAsDataURL(e)},error:function(e){console.error(e)}})},v=function(e){e.preventDefault(),g("");var t=e.dataTransfer.files;Array.from(t).forEach(function(e){e.type.includes("image/")&&m(e)})},w=function(){f(!1)};return B.createElement(S,null,a?null:B.createElement(W,null,"Drop or Select image file here"),B.createElement(C,{ref:p,type:"file",accept:"image/*",onChange:function(e){e.preventDefault(),g("");var t=e.target.files;t&&Array.from(t).forEach(function(e){e.type.includes("image/")&&m(e)})}}),B.createElement(H,{src:a||""}),B.createElement(F,{onClick:function(){var e=p.current;e&&e.click()},onDragOver:function(e){v(e),f(!0)},onDrop:function(e){v(e),w()},onDragLeave:w,"data-dragover":u}),d?B.createElement(z,{href:d,download:"dissolved.jpg"},"Download"):null)};var A,R,D,M,L,T,S=E.b.div(A||(A=j(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: calc(var(--vh, 1vh) * 100);\n  background-color: #000;\n  font-family: sans-serif;\n"],["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: calc(var(--vh, 1vh) * 100);\n  background-color: #000;\n  font-family: sans-serif;\n"]))),z=E.b.a(R||(R=j(["\n  position: absolute;\n  top: 40px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  border-radius: 8px;\n  box-shadow: 0 4px 4px rgba(128, 128, 128, 0.8);\n  width: 140px;\n  height: 32px;\n  padding: 8px;\n  font-size: 28px;\n  text-align: center;\n  text-decoration: none;\n  background-color: rgb(224, 224, 224);\n  color: #000;\n"],["\n  position: absolute;\n  top: 40px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  border-radius: 8px;\n  box-shadow: 0 4px 4px rgba(128, 128, 128, 0.8);\n  width: 140px;\n  height: 32px;\n  padding: 8px;\n  font-size: 28px;\n  text-align: center;\n  text-decoration: none;\n  background-color: rgb(224, 224, 224);\n  color: #000;\n"]))),C=E.b.input(D||(D=j(["\n  display: none;\n"],["\n  display: none;\n"]))),H=E.b.img(M||(M=j(["\n  max-width: 100%;\n  max-height: 100%;\n"],["\n  max-width: 100%;\n  max-height: 100%;\n"]))),W=E.b.div(L||(L=j(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 40px;\n  margin: auto;\n  text-align: center;\n  font-size: 36px;\n  font-weight: bold;\n  color: #fff;\n"],["\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 40px;\n  margin: auto;\n  text-align: center;\n  font-size: 36px;\n  font-weight: bold;\n  color: #fff;\n"]))),F=E.b.div(T||(T=j(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: calc(var(--vh, 1vh) * 100);\n  background-color: transparent;\n\n  &[data-dragover='true'] {\n    background-color: rgba(150, 150, 150, 0.5);\n  }\n"],["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: calc(var(--vh, 1vh) * 100);\n  background-color: transparent;\n\n  &[data-dragover='true'] {\n    background-color: rgba(150, 150, 150, 0.5);\n  }\n"])))}}]);