var G=Object.defineProperty;var $=(n,t,e)=>t in n?G(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var g=(n,t,e)=>$(n,typeof t!="symbol"?t+"":t,e);import{g as J,r as V}from"./index-Zz4BVi2a.js";/*!
* Talkdesk Confidential
*
* Copyright (C) Talkdesk Inc. 2024
*
* The source code for this program is not published or otherwise divested
* of its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office. Unauthorized copying of this file, via any medium
* is strictly prohibited.
*/function q(n,t){return!n||!t?!1:n.contains?n.contains(t):n.childNodes?Array.prototype.indexOf.call(n.childNodes,t)!==-1:!1}function Z(n){const t=n.charCodeAt(0);return t>=65&&t<=90}function k(n){const t=[...n].map((e,r)=>Z(e)?r===0?e.toLowerCase():"-"+e.toLowerCase():e).join("");return"--".concat(t)}function Q(n,t){const e=Object.keys(t);return e.length?e.reduce((r,i)=>i.indexOf("-")>-1||i.indexOf("_")>-1?r:(n.style.setProperty(k(i),t[i]),{...r,[k(i)]:t[i]}),{}):{}}function j(n,t){let e;if(typeof n=="string"?e=n.indexOf("#")>-1?document.querySelector(n):document.getElementById(n):e=n,e)return Q(e,t)}function ee(n){const t=document.createElement("style");return t.id=n,t}function _(n,t){return t.querySelector("#".concat(n))}function te(n,t,e=document.head){const r=_(t,e);if(r)return r.innerHTML=n,()=>{const i=_(t,e);i&&e.removeChild(i)};{const i=ee(t);return i.innerHTML=n,e.appendChild(i),()=>{const o=_(t,e);o&&e.removeChild(o)}}}function ne(n,t){try{return JSON.stringify(n)}catch(e){return""}}function re(n,t,e){try{return JSON.parse(n)}catch(r){return t}}class ie{constructor(t,e={}){g(this,"_moving",!1);g(this,"_moved",!1);g(this,"_initialXY",[0,0]);g(this,"_startXY",[0,0]);g(this,"_boundaryValue",5);g(this,"_rb",null);g(this,"_isPC",!0);this.current=t,this.options=e,this.onMoveStart=this.onMoveStart.bind(this),this.onMoving=this.onMoving.bind(this),this.onMoveEnd=this.onMoveEnd.bind(this),this.removeDocumentListeners=this.removeDocumentListeners.bind(this),this.current.addEventListener("mousedown",this.onMoveStart),this.current.addEventListener("touchstart",this.onMoveStart),this._rb=new ResizeObserver(()=>{this.reset()}),this._rb.observe(document.body)}getEventInfo(t){return t.touches?(this._isPC=!1,{clientXY:[t.touches[0].clientX,t.touches[0].clientY]}):(this._isPC=!0,{clientXY:[t.clientX,t.clientY]})}onMoveStart(t){t.stopPropagation(),t.preventDefault(),this._initialXY=[this.current.offsetLeft,this.current.offsetTop],this._startXY=this.getEventInfo(t).clientXY,this._moved=!1,this.addDocumentListeners()}onMoving(t){var d,c;t.stopPropagation(),t.preventDefault();const{clientXY:e}=this.getEventInfo(t),[r,i]=e,o=r-this._startXY[0],a=i-this._startXY[1];Math.abs(o)<this._boundaryValue&&Math.abs(a)<this._boundaryValue||(this._moved||(this._moved=!0),this._moving=!0,this.current.style.left=Math.min(Math.max(0,this._initialXY[0]+o),window.innerWidth-this.current.offsetWidth)+"px",this.current.style.top=Math.min(Math.max(0,this._initialXY[1]+a),window.innerHeight-this.current.offsetHeight)+"px",(c=(d=this.options)==null?void 0:d.onChange)==null||c.call(d,"moving"))}onMoveEnd(t){var e,r,i,o;t.stopPropagation(),t.preventDefault(),this._moving&&((r=(e=this.options)==null?void 0:e.onChange)==null||r.call(e,"moveEnded")),this._moved||(o=(i=this.options)==null?void 0:i.onClick)==null||o.call(i),this._moved=!1,this.removeDocumentListeners()}addDocumentListeners(){document.addEventListener("mousemove",this.onMoving,{passive:!1}),document.addEventListener("mouseup",this.onMoveEnd,{passive:!1}),this.current.addEventListener("touchmove",this.onMoving,{passive:!1}),this.current.addEventListener("touchend",this.onMoveEnd,{passive:!1})}removeDocumentListeners(){document.removeEventListener("mousemove",this.onMoving),document.removeEventListener("mouseup",this.onMoveEnd),this.current.removeEventListener("touchmove",this.onMoveEnd),this.current.removeEventListener("touchend",this.onMoveEnd)}reset(){this._isPC&&(this.current.style.top="",this.current.style.left="")}destroy(){var t;this.current.removeEventListener("mousedown",this.onMoveStart),this.current.removeEventListener("touchstart",this.onMoveStart),this.removeDocumentListeners(),(t=this._rb)==null||t.disconnect(),this._rb=null}}const x={Topic:"WidgetCommunication",Methods:{Maximize:"Maximize",Minimize:"Minimize",GetAllConfig:"GetAllConfig",GetCredentials:"GetCredentials",GetTdAccessToken:"GetTdAccessToken",SetBadge:"SetBadge",FrameOpened:"FrameOpened",DownloadTranscript:"DownloadTranscript",UpdatePreviewConfig:"UpdatePreviewConfig",PreviewReady:"PreviewReady",ConversationStart:"ConversationStart",FrameReady:"FrameReady",FrameResize:"FrameResize",UpdateAppConfigs:"UpdateAppConfigs",UpdateContext:"UpdateContext"}};var M={exports:{}},b=typeof Reflect=="object"?Reflect:null,A=b&&typeof b.apply=="function"?b.apply:function(t,e,r){return Function.prototype.apply.call(t,e,r)},C;b&&typeof b.ownKeys=="function"?C=b.ownKeys:Object.getOwnPropertySymbols?C=function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:C=function(t){return Object.getOwnPropertyNames(t)};function oe(n){console&&console.warn&&console.warn(n)}var W=Number.isNaN||function(t){return t!==t};function l(){l.init.call(this)}M.exports=l;M.exports.once=ce;l.EventEmitter=l;l.prototype._events=void 0;l.prototype._eventsCount=0;l.prototype._maxListeners=void 0;var T=10;function E(n){if(typeof n!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n)}Object.defineProperty(l,"defaultMaxListeners",{enumerable:!0,get:function(){return T},set:function(n){if(typeof n!="number"||n<0||W(n))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+n+".");T=n}});l.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};l.prototype.setMaxListeners=function(t){if(typeof t!="number"||t<0||W(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this};function H(n){return n._maxListeners===void 0?l.defaultMaxListeners:n._maxListeners}l.prototype.getMaxListeners=function(){return H(this)};l.prototype.emit=function(t){for(var e=[],r=1;r<arguments.length;r++)e.push(arguments[r]);var i=t==="error",o=this._events;if(o!==void 0)i=i&&o.error===void 0;else if(!i)return!1;if(i){var a;if(e.length>0&&(a=e[0]),a instanceof Error)throw a;var d=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw d.context=a,d}var c=o[t];if(c===void 0)return!1;if(typeof c=="function")A(c,this,e);else for(var s=c.length,h=U(c,s),r=0;r<s;++r)A(h[r],this,e);return!0};function D(n,t,e,r){var i,o,a;if(E(e),o=n._events,o===void 0?(o=n._events=Object.create(null),n._eventsCount=0):(o.newListener!==void 0&&(n.emit("newListener",t,e.listener?e.listener:e),o=n._events),a=o[t]),a===void 0)a=o[t]=e,++n._eventsCount;else if(typeof a=="function"?a=o[t]=r?[e,a]:[a,e]:r?a.unshift(e):a.push(e),i=H(n),i>0&&a.length>i&&!a.warned){a.warned=!0;var d=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");d.name="MaxListenersExceededWarning",d.emitter=n,d.type=t,d.count=a.length,oe(d)}return n}l.prototype.addListener=function(t,e){return D(this,t,e,!1)};l.prototype.on=l.prototype.addListener;l.prototype.prependListener=function(t,e){return D(this,t,e,!0)};function ae(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Y(n,t,e){var r={fired:!1,wrapFn:void 0,target:n,type:t,listener:e},i=ae.bind(r);return i.listener=e,r.wrapFn=i,i}l.prototype.once=function(t,e){return E(e),this.on(t,Y(this,t,e)),this};l.prototype.prependOnceListener=function(t,e){return E(e),this.prependListener(t,Y(this,t,e)),this};l.prototype.removeListener=function(t,e){var r,i,o,a,d;if(E(e),i=this._events,i===void 0)return this;if(r=i[t],r===void 0)return this;if(r===e||r.listener===e)--this._eventsCount===0?this._events=Object.create(null):(delete i[t],i.removeListener&&this.emit("removeListener",t,r.listener||e));else if(typeof r!="function"){for(o=-1,a=r.length-1;a>=0;a--)if(r[a]===e||r[a].listener===e){d=r[a].listener,o=a;break}if(o<0)return this;o===0?r.shift():se(r,o),r.length===1&&(i[t]=r[0]),i.removeListener!==void 0&&this.emit("removeListener",t,d||e)}return this};l.prototype.off=l.prototype.removeListener;l.prototype.removeAllListeners=function(t){var e,r,i;if(r=this._events,r===void 0)return this;if(r.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):r[t]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete r[t]),this;if(arguments.length===0){var o=Object.keys(r),a;for(i=0;i<o.length;++i)a=o[i],a!=="removeListener"&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(e=r[t],typeof e=="function")this.removeListener(t,e);else if(e!==void 0)for(i=e.length-1;i>=0;i--)this.removeListener(t,e[i]);return this};function F(n,t,e){var r=n._events;if(r===void 0)return[];var i=r[t];return i===void 0?[]:typeof i=="function"?e?[i.listener||i]:[i]:e?de(i):U(i,i.length)}l.prototype.listeners=function(t){return F(this,t,!0)};l.prototype.rawListeners=function(t){return F(this,t,!1)};l.listenerCount=function(n,t){return typeof n.listenerCount=="function"?n.listenerCount(t):X.call(n,t)};l.prototype.listenerCount=X;function X(n){var t=this._events;if(t!==void 0){var e=t[n];if(typeof e=="function")return 1;if(e!==void 0)return e.length}return 0}l.prototype.eventNames=function(){return this._eventsCount>0?C(this._events):[]};function U(n,t){for(var e=new Array(t),r=0;r<t;++r)e[r]=n[r];return e}function se(n,t){for(;t+1<n.length;t++)n[t]=n[t+1];n.pop()}function de(n){for(var t=new Array(n.length),e=0;e<t.length;++e)t[e]=n[e].listener||n[e];return t}function ce(n,t){return new Promise(function(e,r){function i(a){n.removeListener(t,o),r(a)}function o(){typeof n.removeListener=="function"&&n.removeListener("error",i),e([].slice.call(arguments))}K(n,t,o,{once:!0}),t!=="error"&&le(n,i,{once:!0})})}function le(n,t,e){typeof n.on=="function"&&K(n,"error",t,e)}function K(n,t,e,r){if(typeof n.on=="function")r.once?n.once(t,e):n.on(t,e);else if(typeof n.addEventListener=="function")n.addEventListener(t,function i(o){r.once&&n.removeEventListener(t,i),e(o)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof n)}var he=M.exports;const ue=J(he);var L=function(){return L=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++){e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},L.apply(this,arguments)};function N(n,t,e,r){function i(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function d(h){try{s(r.next(h))}catch(m){a(m)}}function c(h){try{s(r.throw(h))}catch(m){a(m)}}function s(h){h.done?o(h.value):i(h.value).then(d,c)}s((r=r.apply(n,[])).next())})}function R(n,t){var e={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function d(s){return function(h){return c([s,h])}}function c(s){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(e=0)),e;)try{if(r=1,i&&(o=s[0]&2?i.return:s[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;switch(i=0,o&&(s=[s[0]&2,o.value]),s[0]){case 0:case 1:o=s;break;case 4:return e.label++,{value:s[1],done:!1};case 5:e.label++,i=s[1],s=[0];continue;case 7:s=e.ops.pop(),e.trys.pop();continue;default:if(o=e.trys,!(o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){e=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){e.label=s[1];break}if(s[0]===6&&e.label<o[1]){e.label=o[1],o=s;break}if(o&&e.label<o[2]){e.label=o[2],e.ops.push(s);break}o[2]&&e.ops.pop(),e.trys.pop();continue}s=t.call(n,e)}catch(h){s=[6,h],i=0}finally{r=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}var ge=function(){function n(t){this.options=t,this._traceId=0,this._methods=new Map,this._emitter=new ue,this._handlerOnMessageByBound=this.handlerOnMessage.bind(this),this.createService(),this.getListener().addEventListener("message",this._handlerOnMessageByBound,!1)}return n.jsonParseData=function(t,e){try{return JSON.parse(t)}catch(r){return e}},n.jsonStringifyData=function(t){try{return JSON.stringify(t)}catch(e){return""}},n.runHandler=function(t){return N(this,void 0,void 0,function(){var e,r;return R(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,t()];case 1:return e=i.sent(),[2,{data:e,error:null}];case 2:return r=i.sent(),[2,{error:typeof r=="string"?r:r.message}];case 3:return[2]}})})},n.prototype.destroy=function(){this._emitter.removeAllListeners(),this._methods.clear(),this.getListener().removeEventListener("message",this._handlerOnMessageByBound,!1)},n.prototype.register=function(t,e){this._methods.set(t,e),this.log("Register ".concat(t),this._methods)},n.prototype.unregister=function(t){this._methods.delete(t),this.log("Unregister ".concat(t),this._methods)},n.prototype.trigger=function(t){for(var e=this,r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];return new Promise(function(o){var a=e.createId();e.sendMessage({id:a,method:t,payload:r,type:"request"}),e.log("Trigger ".concat(t," | ").concat(a),r),e._emitter.once("response_".concat(a),function(d){o(d.payload),e.log("Receive ".concat(t," | ").concat(a),n.jsonStringifyData(d))})})},n.prototype.createId=function(){return"".concat(this.options.name,"_").concat(this._traceId++)},n.prototype.createService=function(){var t=this;this._emitter.on(this.options.topic,function(e){return N(t,void 0,void 0,function(){var r,i,o,a,d;return R(this,function(c){switch(c.label){case 0:return r=e.id,i=e.payload,o=e.method,a=this._methods.get(o),a?[4,n.runHandler(function(){return a.apply(void 0,i)})]:[3,2];case 1:return d=c.sent(),this.sendMessage({id:r,method:o,payload:d,type:"response"}),[3,3];case 2:this.sendMessage({id:r,method:o,payload:{error:"No found method in service"},type:"response"}),c.label=3;case 3:return[2]}})})})},n.prototype.sendMessage=function(t){var e=this.options,r=e.sender,i=e.origin,o=e.topic,a=n.jsonStringifyData(L(L({},t),{topic:o}));if(!r.postMessage)throw new Error("The sender no found postMessage method please check the sender option");a&&r.postMessage(a,i||"*")},n.prototype.handlerOnMessage=function(t){var e=t.data;if(e){var r=n.jsonParseData(e,null);if(!(!r||r.topic!==this.options.topic)){var i=r.id,o=r.type;o==="request"&&this._emitter.emit(this.options.topic,r),o==="response"&&this._emitter.emit("response_".concat(i),r)}}},n.prototype.getListener=function(){return this.options.listener||window},n.prototype.log=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var i=this.options,o=i.debug,a=i.name;if(o){var d=new Date().toISOString(),c="[RPC] [".concat(d,"] [").concat(a,"] ").concat(t);console.groupCollapsed(c),e!=null&&e.length&&console.info.apply(console,e),console.groupEnd()}},Object.defineProperty(n.prototype,"methods",{get:function(){return this._methods},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"emitter",{get:function(){return this._emitter},enumerable:!1,configurable:!0}),n}();class fe{constructor(){g(this,"appConfig",{});g(this,"touchpoint",null);g(this,"appProps",null);g(this,"context",{});g(this,"participantName","")}setAppConfig(t){var r;const e=(t==null?void 0:t.styles)||{};return this.appConfig={...this.appConfig,...t,styles:Object.keys(e).length?{...(r=this.appConfig)==null?void 0:r.styles,...e}:{}},this.appConfig}setTouchpoint(t){this.touchpoint=t}setParticipantName(t){this.participantName=t}setAppProps(t){this.appProps=t}getAllConfig(){return{appConfig:this.appConfig,touchpoint:this.touchpoint,context:this.context,appProps:this.appProps,participantName:this.participantName,injectorWindowHref:window.location.href,injectorWindowHostname:window.location.hostname}}setContextParam(t){this.context=t}clearAll(){this.appConfig={},this.touchpoint=null,this.context={},this.participantName=""}}const w=new fe,pe='@keyframes loading{0%,5%{transform:translate(40px) scale(1);background:#e9e9e9}10%{transform:translate(40px) scale(1);background:var(--chat-theme-color, #1f1f1f)}40%{transform:translate(20px) scale(1.5);background:var(--chat-theme-color, #1f1f1f)}90%,95%{transform:translate(0) scale(1);background:var(--chat-theme-color, #1f1f1f)}to{transform:translate(0) scale(1);background:#e9e9e9}}@keyframes move-x{0%,10%{transform:translate(0)}90%,to{transform:translate(20px)}}@keyframes dot1-animate{0%{transform:matrix(1,0,0,1,285.389,355.211)}25%{transform:matrix(.9957,0,0,.9957,286.3071,355.4352)}50%{transform:matrix(.7195,0,0,.7195,331.1569,366.3884)}to{transform:matrix(.6882,0,0,.6882,350.5277,371.1191) scale(0)}}@keyframes dot2-animate{0%{transform:matrix(1,0,0,1,354.999,355.211)}25%{transform:matrix(.9957,0,0,.9957,354.999,355.4352)}50%{transform:matrix(.7195,0,0,.7195,354.999,366.3883)}to{transform:matrix(.6882,0,0,.6882,354.999,371.119) scale(0)}}@keyframes dot3-animate{0%{transform:matrix(1,0,0,1,424.611,355.211)}25%{transform:matrix(.9957,0,0,.9957,423.6929,355.4352)}50%{transform:matrix(.7195 0,0,.7195,378.8418,366.3884)}to{transform:matrix(.6882,0,0,.6882,359.474,371.1191) scale(0)}}@keyframes wave-animate{0%{transform:scale(0)}to{transform:scale(1)}}.tdw-widget-wrapper{--chat-z-index: 99999;position:fixed;z-index:var(--chat-z-index)}.tdw-widget-wrapper[data-preview]{position:sticky;display:flex;flex-direction:column;gap:24px;align-items:self-end}.tdw-widget{position:fixed;right:20px;bottom:var(--chat-position-bottom, 20px);z-index:var(--chat-z-index);width:var(--chat-container-width, 360px);min-width:360px;height:var(--chat-container-height, 680px);max-height:calc(var(--chat-screen-height) - var(--chat-position-bottom, 20px) - 20px);border:none;border-radius:20px;box-shadow:0 32px 20px rgba(0,0,0,.02),0 16px 16px rgba(0,0,0,.04),0 4px 8px rgba(0,0,0,.06),0 -4px 24px rgba(0,0,0,.08);overflow:hidden;transform-origin:right bottom;transition:height .2s,visibility 1s,opacity 83ms ease-out,transform .4s cubic-bezier(.25,.8,.25,1);will-change:width,height,visibility,opacity,transform}.tdw-widget[aria-hidden=true]{opacity:0;visibility:hidden;pointer-events:none;transform:scale(0)}.tdw-widget[aria-hidden=false]{opacity:1;visibility:visible;pointer-events:auto;transform:scale(1)}.tdw-widget[data-preview]{position:unset}.tdw-widget iframe{width:100%;height:100%;border:none;border-radius:inherit}@media only screen and (max-width: 600px),(max-height: 620px){.tdw-widget[data-responsive-layout=true]{top:0;right:0;bottom:0;left:0;overflow:hidden;width:var(--chat-screen-width, 100%);min-width:var(--chat-screen-width, 100%);max-width:var(--chat-screen-width, 100%);height:var(--chat-screen-height, 100%);min-height:var(--chat-screen-height, 100%);max-height:var(--chat-screen-height, 100%);border-radius:0}}.tdw-widget-trigger{--box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 8%), 0 16px 16px 0 rgba(0, 0, 0, 4%), 0 32px 20px 0 rgba(0, 0, 0, 2%);position:fixed;right:var(--trigger-button-position-right, 10px);bottom:var(--trigger-button-position-bottom, 20px);z-index:var(--chat-z-index);display:flex;justify-content:center;align-items:center;width:var(--trigger-button-width, 64px);height:var(--trigger-button-height, 64px);border:none;border-radius:50%;cursor:pointer;background-image:var(--chat-icon);background-size:56%;background-repeat:no-repeat;background-position:center;transition:background-color .1s ease-in-out;box-shadow:var(--chat-launcher-shadow, var(--box-shadow));background-color:var(--chat-launcher-color, #1f1f1f)}.tdw-widget-trigger:hover{background-color:var(--chat-hover-launcher-color, #383838)}.tdw-widget-trigger[data-has-chat-icon=yes] .tdw-widget-trigger-animate{display:none}.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg g[data-target=wave]{display:block;transform-origin:center 52%;animation:wave-animate 2s infinite;animation-direction:alternate;animation-delay:0s,1s}.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg g[data-target=dot1]{animation:dot1-animate 2s infinite;animation-direction:alternate;animation-delay:0s,4s}.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg g[data-target=dot2]{animation:dot2-animate 2s infinite;animation-direction:alternate;animation-delay:0s,4s}.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg g[data-target=dot3]{animation:dot3-animate 2s infinite;animation-direction:alternate;animation-delay:0s,4s}.tdw-widget-trigger[data-preview]{position:relative;right:unset;bottom:unset}.tdw-widget-trigger[data-has-chat-icon=no] .tdw-widget-trigger-animate svg>g>g:nth-child(2)>g>path,.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg>g>g:nth-child(2)>g>path{fill:#fff}.tdw-widget-trigger-animate{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;border-radius:50%;background-color:var(--chat-hover-launcher-color, #383838)}.tdw-widget-trigger-animate svg{position:relative;width:100%;height:100%;transform:translateZ(0);content-visibility:visible}.tdw-widget-trigger-animate svg g[data-target]{animation:none}.tdw-widget-trigger-animate svg g[data-target=wave]{display:none}.tdw-widget-trigger-animate svg g[data-target=circle]>g>g>path,.tdw-widget-trigger-animate svg g[data-target=dot1]>g>path,.tdw-widget-trigger-animate svg g[data-target=dot2]>g>path,.tdw-widget-trigger-animate svg g[data-target=dot3]>g>path,.tdw-widget-trigger-animate svg g[data-target=wave]>g>g>path{fill:var(--chat-launcher-color, #383838)}.tdw-widget-trigger-animate:hover svg g[data-target=circle]>g>g>path,.tdw-widget-trigger-animate:hover svg g[data-target=dot1]>g>path,.tdw-widget-trigger-animate:hover svg g[data-target=dot2]>g>path,.tdw-widget-trigger-animate:hover svg g[data-target=dot3]>g>path,.tdw-widget-trigger-animate:hover svg g[data-target=wave]>g>g>path{fill:var(--chat-hover-launcher-color, #383838)}.tdw-widget-trigger-badge{position:absolute;top:0;right:0;width:20px;height:20px;line-height:20px;text-align:center;color:#fff;background-color:#f5222d;font-size:10px;border-radius:50%;box-sizing:border-box;transition:right,width,border-radius .25s ease}.tdw-widget-trigger-badge-more{right:-4px;width:31px;border-radius:48px}.tdw-widget-loading{display:flex;flex-direction:column;width:100%;height:100%}.tdw-widget-header{height:64px;background-color:var(--chat-header-background-color, #f8f8f8);border-top-left-radius:8px;border-top-right-radius:8px}.tdw-widget-content{display:flex;flex-direction:column;justify-content:center;align-items:center;height:calc(100% - 56px);padding:16px;box-sizing:border-box}.tdw-loader{position:relative;width:100px;height:10px}.tdw-loader:before,.tdw-loader:after{content:"";position:absolute;top:0;left:0;width:10px;height:10px;margin-left:25%;border-radius:50%;box-shadow:20px 0 #e9e9e9;background:#e9e9e9;animation:move-x 1s linear infinite}.tdw-loader:after{box-shadow:none;transform:translate(40px) scale(1);z-index:2;animation:loading 1s linear infinite}',me=n=>{const t={chatIcon:n.chatIcon?"url(".concat(n.chatIcon,")"):void 0,chatThemeColor:n.chatThemeColor,chatHoverThemeColor:n.chatHoverThemeColor,triggerButtonWidth:n.triggerButtonWidth,triggerButtonHeight:n.triggerButtonHeight,triggerButtonPositionBottom:n.triggerButtonPositionBottom,triggerButtonPositionRight:n.triggerButtonPositionRight,chatPositionBottom:n.chatPositionBottom,chatContainerHeight:n.chatContainerHeight,chatContainerWidth:n.chatContainerWidth,chatLauncherColor:n.chatLauncherColor,chatHoverLauncherColor:n.chatHoverLauncherColor,chatLauncherShadow:n.chatLauncherShadow};return V(t,{removeEmptyString:!0})},ve="talkdesk-chat-widget-style";function we(n){var i,o,a,d,c,s,h,m,p,u,y,f,v,S,O,P;const t=n==null?void 0:n.config,e=t?re(t,{}):n==null?void 0:n.widgetSettings,r={};return(o=(i=e==null?void 0:e.appearance)==null?void 0:i.theme)!=null&&o.brandColor&&(r.chatThemeColor=(a=e==null?void 0:e.appearance)==null?void 0:a.theme.brandColor,r.chatHoverThemeColor=(d=e==null?void 0:e.appearance)==null?void 0:d.theme.brandColor),(s=(c=e==null?void 0:e.appearance)==null?void 0:c.launcher)!=null&&s.color&&(r.chatLauncherColor=(m=(h=e==null?void 0:e.appearance)==null?void 0:h.launcher)==null?void 0:m.color,r.chatHoverLauncherColor=(u=(p=e==null?void 0:e.appearance)==null?void 0:p.launcher)==null?void 0:u.color),(f=(y=e==null?void 0:e.appearance)==null?void 0:y.launcher)!=null&&f.iconUrl&&(r.chatIcon=(S=(v=e==null?void 0:e.appearance)==null?void 0:v.launcher)==null?void 0:S.iconUrl),(P=(O=e==null?void 0:e.appearance)==null?void 0:O.launcher)!=null&&P.shadow&&(r.chatLauncherShadow=e.appearance.launcher.shadow),r}function ye(n={},t){return me({...we(t),...n})}function be(n){const t=[];return t.push(te(pe,ve,n)),()=>{t.forEach(e=>e()),t.length=0}}function xe(n,t={},e){const r=ye(t,e);if(Object.keys(r).length)return j(n,r)}function Ce(n,t){const e=()=>{j(n,{chatScreenWidth:window.innerWidth+"px",chatScreenHeight:window.innerHeight+"px"})},r=()=>{e()};return e(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}}const I="tdw-widget-wrapper";function Le({root:n,isPreview:t=!1}){const e=document.createElement("div");return e.className=I,e.setAttribute("data-".concat(I),""),t&&e.setAttribute("data-preview",""),n.appendChild(e),{element:e,destroy:()=>{q(n,e)&&n.removeChild(e),e.remove()}}}const Ee='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 710 710" width="710" height="710" preserveAspectRatio="xMidYMid meet"><g clip-path="url(#__lottie_element_51)" data-target="circle"><g transform="matrix(1,0,0,1,355,355)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(31,31,31)" fill-opacity="1" d=" M0,-355.0159912109375 C196.07000732421875,-355.0159912109375 355.0159912109375,-196.07000732421875 355.0159912109375,0 C355.0159912109375,196.07000732421875 196.07000732421875,355.0159912109375 0,355.0159912109375 C-196.07000732421875,355.0159912109375 -355.0159912109375,196.07000732421875 -355.0159912109375,0 C-355.0159912109375,-196.07000732421875 -196.07000732421875,-355.0159912109375 0,-355.0159912109375z"></path></g></g><g transform="matrix(1,0,0,1,354.9989929199219,384.5849914550781)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-67.62200164794922,-135.24400329589844 C-67.62200164794922,-135.24400329589844 67.62200164794922,-135.24400329589844 67.62200164794922,-135.24400329589844 C123.64199829101562,-135.24400329589844 169.05499267578125,-89.83100128173828 169.05499267578125,-33.81100082397461 C169.05499267578125,22.20800018310547 123.64199829101562,67.62200164794922 67.62200164794922,67.62200164794922 C67.62200164794922,67.62200164794922 50.71699905395508,67.62200164794922 50.71699905395508,67.62200164794922 C50.71699905395508,67.62200164794922 -50.71699905395508,135.24400329589844 -50.71699905395508,135.24400329589844 C-50.71699905395508,135.24400329589844 -50.71699905395508,67.62200164794922 -50.71699905395508,67.62200164794922 C-50.71699905395508,67.62200164794922 -67.62200164794922,67.62200164794922 -67.62200164794922,67.62200164794922 C-123.64199829101562,67.62200164794922 -169.05499267578125,22.20800018310547 -169.05499267578125,-33.81100082397461 C-169.05499267578125,-89.83100128173828 -123.64199829101562,-135.24400329589844 -67.62200164794922,-135.24400329589844z"></path></g></g><g data-target="dot3" transform="matrix(1,0,0,1,424.6109924316406,355.21099853515625)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(30,30,30)" fill-opacity="1" d=" M0,-19.58300018310547 C-10.984000205993652,-19.58300018310547 -19.88800048828125,-10.815999984741211 -19.88800048828125,0 C-19.88800048828125,10.8149995803833 -10.984000205993652,19.58300018310547 0,19.58300018310547 C10.984000205993652,19.58300018310547 19.88800048828125,10.8149995803833 19.88800048828125,0 C19.88800048828125,-10.815999984741211 10.984000205993652,-19.58300018310547 0,-19.58300018310547z"></path></g></g><g data-target="dot1" transform="matrix(1,0,0,1,285.3890075683594,355.21099853515625)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(30,30,30)" fill-opacity="1" d=" M0,-19.58300018310547 C-10.984000205993652,-19.58300018310547 -19.888999938964844,-10.815999984741211 -19.888999938964844,0 C-19.888999938964844,10.8149995803833 -10.984000205993652,19.58300018310547 0,19.58300018310547 C10.984000205993652,19.58300018310547 19.888999938964844,10.8149995803833 19.888999938964844,0 C19.888999938964844,-10.815999984741211 10.984000205993652,-19.58300018310547 0,-19.58300018310547z"></path></g></g><g data-target="dot2" transform="matrix(1,0,0,1,354.9989929199219,355.21099853515625)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(30,30,30)" fill-opacity="1" d=" M-0.0010000000474974513,-19.58300018310547 C-10.984999656677246,-19.58300018310547 -19.888999938964844,-10.815999984741211 -19.888999938964844,0 C-19.888999938964844,10.8149995803833 -10.984999656677246,19.58300018310547 -0.0010000000474974513,19.58300018310547 C10.984000205993652,19.58300018310547 19.888999938964844,10.8149995803833 19.888999938964844,0 C19.888999938964844,-10.815999984741211 10.984000205993652,-19.58300018310547 -0.0010000000474974513,-19.58300018310547z"></path></g></g><g data-target="wave"><g transform="matrix(0.9995219707489014,-0.03091629408299923,0.03091629408299923,0.9995219707489014,356.4827575683594,355.05108642578125)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(31,31,31)" fill-opacity="1" d=" M73.96199798583984,-17.92799949645996 C73.96199798583984,-17.92799949645996 49.125999450683594,-29.759000778198242 49.125999450683594,-29.759000778198242 C40.44200134277344,-9.998000144958496 21.340900421142578,2.770447254180908 0.46700000762939453,2.7699999809265137 C-21.07493782043457,2.769519567489624 -40.41497039794922,-10.566868782043457 -48.804969787597656,-31.209869384765625 C-48.804969787597656,-31.209869384765625 -60.26470184326172,-26.16266632080078 -60.26519775390625,-26.1624755859375 C-60.265830993652344,-26.162199020385742 -73.96195220947266,-20.127910614013672 -73.96195220947266,-20.127910614013672 C-61.29095458984375,11.061088562011719 -32.06700134277344,31.209999084472656 0.46700000762939453,31.209999084472656 C31.999000549316406,31.209999084472656 60.83599853515625,11.920999526977539 73.96199798583984,-17.92799949645996z"></path></g></g></g></g></svg>';function _e(){const n=document.createElement("div");return n.className="tdw-widget-trigger-animate",n.innerHTML=Ee,{destroy:()=>{n.remove()},get element(){return n}}}const z="talkdesk-chat-widget-trigger";function Me(n,t,e=!1){const r=_e(),i=document.createElement("button");i.id=z,i.className="tdw-widget-trigger",i.ariaLabel="Open chat widget",e&&i.setAttribute("data-preview","");let o=null,a=null;const d=()=>{a==null||a.destroy(),a=null},c=()=>{a||(a=new ie(i,{onClick:()=>{}}))},s=()=>{document.getElementById(z)||(n.appendChild(i),i.appendChild(r.element),i.onclick=()=>{})};return{open:()=>{s(),i.style.display=""},close:()=>{i.style.display="none"},update:({enablePointMoveTriggerButton:f,themes:v={}})=>{f&&c(),i.setAttribute("data-has-chat-icon",v!=null&&v["--chat-icon"]?"yes":"no")},destroy:()=>{d(),i.removeChild(r.element),r.destroy(),i.remove()},setBadge:f=>{f>0?(o||(o=document.createElement("span"),o.className="tdw-widget-trigger-badge ".concat(f>9?"tdw-widget-trigger-badge-more":""),o.ariaLabel="new message indicator",i.appendChild(o)),o.textContent=f>99?"99+":f.toString()):o&&(o.remove(),o=null)}}}function Se(n){const t=document.createElement("div");t.id=n,t.className="tdw-widget";const e=new Map;return{element:t,append:(s,h)=>{e.set(s,h),t.appendChild(h.element)},remove:s=>{const h=e.get(s);h&&(h.destroy(),e.delete(s))},show:()=>{t.setAttribute("aria-hidden","false")},hide:()=>{t.setAttribute("aria-hidden","true")},isMounted:()=>!!document.getElementById(n),destroy:()=>{t.remove(),e.forEach(s=>s.destroy()),e.clear()}}}function Oe(){const n=document.createElement("div");return n.className="tdw-widget-loading",n.id="tdw-widget-loading",n.ariaLabel="Loading",n.innerHTML=['<div class="tdw-widget-content">','<span class="tdw-loader"></span>',"</div>"].join(""),{element:n,destroy:()=>{n.remove()}}}function Pe(n){const t=document.createElement("iframe");t.title="Chat Widget",t.allowFullscreen=!0,t.style.display="none";const e=()=>{t.style.display="block",n()};return t.addEventListener("load",e),{element:t,destroy:()=>{t.removeEventListener("load",e),t.remove()}}}const ke="talkdesk-chat-widget",B="loading-element",Ae="iframe-element",Te=()=>{const{appProps:n}=w.getAllConfig();return"./v2/widget/latest/index.html?touchpointId=".concat(n==null?void 0:n.touchpointId)},Ne=()=>"https://talkdeskchatsdk.svc.talkdeskstg.com/v2/widget/latest/preview.html";function Re(n,t,e=!1){const r=Se(ke),i=Pe(()=>{r.remove(B)});r.append(B,Oe()),r.hide(),e&&r.element.setAttribute("data-preview","");const o=()=>{r.isMounted()||(n.appendChild(r.element),i.element.src=e?Ne():Te(),r.append(Ae,i),t&&i.element.contentWindow&&t(i.element.contentWindow))};return{initInBackground:()=>{o()},resize:({height:p})=>{p&&(r.element.style.height=typeof p=="string"?p:"".concat(p,"px"))},open:()=>{o(),r.show()},close:()=>{r.hide()},destroy:()=>{r.destroy()},update:({enableResponsiveLayout:p=!1}={})=>{p?r.element.setAttribute("data-responsive-layout","true"):r.element.removeAttribute("data-responsive-layout")}}}function Ie(n){const t=document.getElementById(n);if(!t)throw new Error('The element not exist, element id = "#'.concat(n,'"'));const e=[];let r=null,i=!1,o=null,a=null;const d=Le({root:t,isPreview:!0}),c=Me(d.element,()=>{},!0),s=Re(d.element,u=>{r=new ge({name:"SDK",sender:u,topic:x.Topic,debug:!1}),r.register(x.Methods.GetAllConfig,()=>w.getAllConfig()),r.register(x.Methods.PreviewReady,()=>{i=!0,r==null||r.trigger(x.Methods.UpdatePreviewConfig,o)})},!0);return{init:(u={})=>{w.setAppConfig(u),e.push(be(d.element)),a||(a=Ce(d.element)),s.open(),c.open()},destroy:()=>{c.destroy(),s.destroy(),d.destroy(),e.forEach(u=>u()),e.length=0,o=null,w.clearAll(),a==null||a(),a=null},updateConfig:u=>{var f,v;w.setTouchpoint({active:!0,config:ne(u==null?void 0:u.widgetSettings),account_id:""}),w.setParticipantName(u.userName||"");const y=xe(d.element,(v=(f=w.getAllConfig())==null?void 0:f.appConfig)==null?void 0:v.styles,u);c.update({themes:y}),i?r==null||r.trigger(x.Methods.UpdatePreviewConfig,u):o=u}}}function je(n){return Ie(n)}export{je as default};
//# sourceMappingURL=entryPreview-CHV2aRJl.js.map
