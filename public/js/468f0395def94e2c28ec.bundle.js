(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{57:function(n,e,t){"use strict";t.r(e);var o=t(0),r=t(5),a=t(33),i=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n};e.default=function(){var n=Object(o.useState)(""),e=n[0],t=n[1],r=Object(o.useState)(""),i=r[0],c=r[1],p=Object(o.useState)(""),l=p[0],d=p[1],g=Object(o.useState)(""),s=g[0],u=g[1],b=Object(o.useState)(""),z=b[0],E=b[1],S=Object(o.useState)(""),j=S[0],O=S[1],D=Object(o.useState)(!1),A=D[0],I=D[1],C=Object(o.useRef)(null),R=new FileReader;R.onload=function(n){var e=n.target.result;d(e)};var L=function(n){n.preventDefault();var e=n.dataTransfer.files;e&&R.readAsDataURL(e[0])};return o.createElement(x,null,o.createElement(f,null,o.createElement(m,null,"Encryption"),o.createElement(h,{onInput:function(n){var e=n.target;if(e){var o=e.value;t(o)}},placeholder:"encryption key...",type:"password"}),o.createElement(y,{ref:C,type:"file",accept:"image/*",onChange:function(n){n.preventDefault();var e=n.target.files;e&&R.readAsDataURL(e[0])}}),o.createElement(v,{style:{backgroundImage:"url("+l+")",cursor:"pointer"},onClick:function(){var n=C.current;n&&n.click()},onDragOver:function(n){L(n),I(!0)},onDragLeave:function(){I(!1)},onDrop:L,"data-on-drag":A,"data-no-image":!l}),o.createElement(k,{onClick:function(){var n=a.SHA256(e).toString(a.enc.Base64),t=a.AES.encrypt(l,n);u(t.toString())}},"encrypt"),o.createElement(w,{value:s,placeholder:"encrypted data...",disabled:!0})),o.createElement(f,null,o.createElement(m,null,"Decryption"),o.createElement(h,{onInput:function(n){var e=n.target;if(e){var t=e.value;c(t)}},placeholder:"encryption key...",type:"password"}),o.createElement(w,{onInput:function(n){var e=n.target;if(e){var t=e.value;E(t)}},placeholder:"encrypted data..."}),o.createElement(k,{onClick:function(){var n=a.SHA256(i).toString(a.enc.Base64);try{var e=a.AES.decrypt(z,n);O(e.toString(a.enc.Utf8))}catch(n){alert(n)}}},"decrypt"),o.createElement(v,{style:{backgroundImage:"url("+j+")"},"data-no-image":!l})))};var c,p,l,d,g,s,u,b,x=r.b.div(c||(c=i(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  background-color: #fff;\n  font-family: sans-serif;\n"],["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  background-color: #fff;\n  font-family: sans-serif;\n"]))),f=r.b.section(p||(p=i(["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 20px;\n\n  &:first-of-type {\n    border-right: 1px solid #ccc;\n  }\n"],["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 20px;\n\n  &:first-of-type {\n    border-right: 1px solid #ccc;\n  }\n"]))),m=r.b.h2(l||(l=i(["\n  margin-bottom: 40px;\n  font-size: 24px;\n  text-align: center;\n  color: #aaa;\n"],["\n  margin-bottom: 40px;\n  font-size: 24px;\n  text-align: center;\n  color: #aaa;\n"]))),h=r.b.input(d||(d=i(["\n  appearance: none;\n  width: 400px;\n  height: 40px;\n  box-sizing: border-box;\n  margin-bottom: 40px;\n  padding: 8px;\n  outline: none;\n  border: 1px solid #ccc;\n  font-size: 14px;\n"],["\n  appearance: none;\n  width: 400px;\n  height: 40px;\n  box-sizing: border-box;\n  margin-bottom: 40px;\n  padding: 8px;\n  outline: none;\n  border: 1px solid #ccc;\n  font-size: 14px;\n"]))),y=r.b.input(g||(g=i(["\n  display: none;\n"],["\n  display: none;\n"]))),v=r.b.div(s||(s=i(["\n  position: relative;\n  width: 400px;\n  height: 400px;\n  box-sizing: border-box;\n  margin-bottom: 40px;\n  border: 1px solid #ccc;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  /* background-color: #eee; */\n\n  &[data-on-drag='true'] {\n    background-color: #eee;\n  }\n\n  &[data-no-image='true'] {\n    &::after {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      width: 100px;\n      height: 14px;\n      font-size: 14px;\n      line-height: 1;\n      margin: auto;\n      text-align: center;\n      content: 'image';\n    }\n  }\n"],["\n  position: relative;\n  width: 400px;\n  height: 400px;\n  box-sizing: border-box;\n  margin-bottom: 40px;\n  border: 1px solid #ccc;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  /* background-color: #eee; */\n\n  &[data-on-drag='true'] {\n    background-color: #eee;\n  }\n\n  &[data-no-image='true'] {\n    &::after {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      width: 100px;\n      height: 14px;\n      font-size: 14px;\n      line-height: 1;\n      margin: auto;\n      text-align: center;\n      content: 'image';\n    }\n  }\n"]))),w=r.b.textarea(u||(u=i(["\n  appearance: none;\n  width: 400px;\n  height: 400px;\n  box-sizing: border-box;\n  margin-bottom: 40px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  outline: none;\n  resize: none;\n"],["\n  appearance: none;\n  width: 400px;\n  height: 400px;\n  box-sizing: border-box;\n  margin-bottom: 40px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  outline: none;\n  resize: none;\n"]))),k=r.b.button(b||(b=i(["\n  appearance: none;\n  padding: 10px;\n  outline: none;\n  margin-bottom: 40px;\n  font-size: 14px;\n  cursor: pointer;\n"],["\n  appearance: none;\n  padding: 10px;\n  outline: none;\n  margin-bottom: 40px;\n  font-size: 14px;\n  cursor: pointer;\n"])))}}]);