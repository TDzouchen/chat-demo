!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o,a,s=[],c=!0,l=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(t){l=!0,i=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw i}}return s}}(t,e)||d(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,c(r.key),r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return(e=c(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,n||"default");if("object"!=t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==t(n)?n:n+""}function l(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||d(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){if(t){if("string"==typeof t)return u(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}
/*!
* Talkdesk Confidential
*
* Copyright (C) Talkdesk Inc. 2024
*
* The source code for this program is not published or otherwise divested
* of its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office. Unauthorized copying of this file, via any medium
* is strictly prohibited.
*/System.register(["./index-legacy-CRbn4rV3.js"],(function(r,o){"use strict";var c,d;return{setters:[function(t){c=t.g,d=t.r}],execute:function(){function o(t){var e=l(t).map((function(t,e){return(n=t.charCodeAt(0))>=65&&n<=90?0===e?t.toLowerCase():"-"+t.toLowerCase():t;var n})).join("");return"--".concat(e)}function u(t,e){var n;if(n="string"==typeof t?t.indexOf("#")>-1?document.querySelector(t):document.getElementById(t):t)return function(t,e){var n=Object.keys(e);return n.length?n.reduce((function(n,r){return r.indexOf("-")>-1||r.indexOf("_")>-1?n:(t.style.setProperty(o(r),e[r]),a(a({},n),{},s({},o(r),e[r])))}),{}):{}}(n,e)}function h(t,e){return e.querySelector("#".concat(t))}function g(t,e){try{return JSON.stringify(t)}catch(n){return""}}r("default",(function(t){return function(t){var e=document.getElementById(t);if(!e)throw new Error('The element not exist, element id = "#'.concat(t,'"'));var n=[],r=null,i=!1,o=null,s=null,c=function(t){var e=t.root,n=t.isPreview,r=void 0!==n&&n,i=document.createElement("div");i.className=Y,i.setAttribute("data-".concat(Y),""),r&&i.setAttribute("data-preview","");return e.appendChild(i),{element:i,destroy:function(){(function(t,e){if(!t||!e)return!1;if(t.contains)return t.contains(e);if(t.childNodes)return-1!==Array.prototype.indexOf.call(t.childNodes,e);return!1})(e,i)&&e.removeChild(i),i.remove()}}}({root:e,isPreview:!0}),l=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=function(){var t=document.createElement("div");t.className="tdw-widget-trigger-animate",t.innerHTML=U;var e=function(){t.remove()};return{destroy:e,get element(){return t}}}(),i=document.createElement("button");i.id=X,i.className="tdw-widget-trigger",i.ariaLabel="Open chat widget",n&&i.setAttribute("data-preview","");var o=null,a=null,s=function(){var t;null===(t=a)||void 0===t||t.destroy(),a=null},c=function(){a||(a=new f(i,{onClick:function(){}}))},l=function(){document.getElementById(X)||(t.appendChild(i),i.appendChild(r.element),i.onclick=function(){})},d=function(){l(),i.style.display=""},u=function(){s(),i.removeChild(r.element),r.destroy(),i.remove()};return{open:d,close:function(){i.style.display="none"},update:function(t){var e=t.enablePointMoveTriggerButton,n=t.themes,r=void 0===n?{}:n;e&&c(),i.setAttribute("data-has-chat-icon",null!=r&&r["--chat-icon"]?"yes":"no")},destroy:u,setBadge:function(t){t>0?(o||((o=document.createElement("span")).className="tdw-widget-trigger-badge ".concat(t>9?"tdw-widget-trigger-badge-more":""),o.ariaLabel="new message indicator",i.appendChild(o)),o.textContent=t>99?"99+":t.toString()):o&&(o.remove(),o=null)}}}(c.element,(function(){}),!0),d=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=function(t){var e=document.createElement("div");e.id=t,e.className="tdw-widget";var n=new Map,r=function(){e.remove(),n.forEach((function(t){return t.destroy()})),n.clear()},i=function(t,r){n.set(t,r),e.appendChild(r.element)},o=function(){e.setAttribute("aria-hidden","false")},a=function(){e.setAttribute("aria-hidden","true")};return{element:e,append:i,remove:function(t){var e=n.get(t);e&&(e.destroy(),n.delete(t))},show:o,hide:a,isMounted:function(){return!!document.getElementById(t)},destroy:r}}(F),i=function(t){var e=document.createElement("iframe");e.title="Chat Widget",e.allowFullscreen=!0,e.style.display="none";var n=function(){e.style.display="block",t()};e.addEventListener("load",n);var r=function(){e.removeEventListener("load",n),e.remove()};return{element:e,destroy:r}}((function(){r.remove(G)}));r.append(G,function(){var t=document.createElement("div");t.className="tdw-widget-loading",t.id="tdw-widget-loading",t.ariaLabel="Loading",t.innerHTML=['<div class="tdw-widget-content">','<span class="tdw-loader"></span>',"</div>"].join("");var e=function(){t.remove()};return{element:t,destroy:e}}()),r.hide(),n&&r.element.setAttribute("data-preview","");var o=function(){r.isMounted()||(t.appendChild(r.element),i.element.src=n?K():J(),r.append(q,i),e&&i.element.contentWindow&&e(i.element.contentWindow))},a=function(){o()},s=function(){o(),r.show()},c=function(){r.destroy()},l=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).enableResponsiveLayout;void 0!==t&&t?r.element.setAttribute("data-responsive-layout","true"):r.element.removeAttribute("data-responsive-layout")};return{initInBackground:a,resize:function(t){var e=t.height;e&&(r.element.style.height="string"==typeof e?e:"".concat(e,"px"))},open:s,close:function(){r.hide()},destroy:c,update:l}}(c.element,(function(t){(r=new I({name:"SDK",sender:t,topic:v.Topic,debug:!1})).register(v.Methods.GetAllConfig,(function(){return R.getAllConfig()})),r.register(v.Methods.PreviewReady,(function(){var t;i=!0,null===(t=r)||void 0===t||t.trigger(v.Methods.UpdatePreviewConfig,o)}))}),!0),p=function(){var t,e,r,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};R.setAppConfig(i),n.push(function(t){var e=[];return e.push(function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.head,r=h(e,n);if(r)return r.innerHTML=t,function(){var t=h(e,n);t&&n.removeChild(t)};var i=function(t){var e=document.createElement("style");return e.id=t,e}(e);return i.innerHTML=t,n.appendChild(i),function(){var t=h(e,n);t&&n.removeChild(t)}}(D,W,t)),function(){e.forEach((function(t){return t()})),e.length=0}}(c.element)),s||(t=c.element,r=function(){e()},(e=function(){u(t,{chatScreenWidth:window.innerWidth+"px",chatScreenHeight:window.innerHeight+"px"})})(),window.addEventListener("resize",r),s=function(){window.removeEventListener("resize",r)}),d.open(),l.open()};return{init:p,destroy:function(){var t;l.destroy(),d.destroy(),c.destroy(),n.forEach((function(t){return t()})),n.length=0,o=null,R.clearAll(),null===(t=s)||void 0===t||t(),s=null},updateConfig:function(t){var e;R.setTouchpoint({active:!0,config:g(null==t?void 0:t.widgetSettings),account_id:""}),R.setParticipantName(t.userName||"");var n,s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return H(a(a({},function(t){var e,n,r,i,o,a=null==t?void 0:t.config,s=a?function(t,e){try{return JSON.parse(t)}catch(n){return e}}(a,{}):null==t?void 0:t.widgetSettings,c={};if(null!=s&&null!==(e=s.appearance)&&void 0!==e&&null!==(e=e.theme)&&void 0!==e&&e.brandColor){var l,d;c.chatThemeColor=null==s||null===(l=s.appearance)||void 0===l?void 0:l.theme.brandColor,c.chatHoverThemeColor=null==s||null===(d=s.appearance)||void 0===d?void 0:d.theme.brandColor}if(null!=s&&null!==(n=s.appearance)&&void 0!==n&&null!==(n=n.launcher)&&void 0!==n&&n.color){var u,h;c.chatLauncherColor=null==s||null===(u=s.appearance)||void 0===u||null===(u=u.launcher)||void 0===u?void 0:u.color,c.chatHoverLauncherColor=null==s||null===(h=s.appearance)||void 0===h||null===(h=h.launcher)||void 0===h?void 0:h.color}null!=s&&null!==(r=s.appearance)&&void 0!==r&&null!==(r=r.launcher)&&void 0!==r&&r.iconUrl&&(c.chatIcon=null==s||null===(o=s.appearance)||void 0===o||null===(o=o.launcher)||void 0===o?void 0:o.iconUrl);null!=s&&null!==(i=s.appearance)&&void 0!==i&&null!==(i=i.launcher)&&void 0!==i&&i.shadow&&(c.chatLauncherShadow=s.appearance.launcher.shadow);return c}(e)),t))}(e,n),i=Object.keys(r);if(i.length)return u(t,r)}(c.element,null===(e=R.getAllConfig())||void 0===e||null===(e=e.appConfig)||void 0===e?void 0:e.styles,t);(l.update({themes:s}),i)?null===(n=r)||void 0===n||n.trigger(v.Methods.UpdatePreviewConfig,t):o=t}}}(t)}));var p,f=function(){return i((function t(e){var r=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,t),s(this,"_moving",!1),s(this,"_moved",!1),s(this,"_initialXY",[0,0]),s(this,"_startXY",[0,0]),s(this,"_boundaryValue",5),s(this,"_rb",null),s(this,"_isPC",!0),this.current=e,this.options=i,this.onMoveStart=this.onMoveStart.bind(this),this.onMoving=this.onMoving.bind(this),this.onMoveEnd=this.onMoveEnd.bind(this),this.removeDocumentListeners=this.removeDocumentListeners.bind(this),this.current.addEventListener("mousedown",this.onMoveStart),this.current.addEventListener("touchstart",this.onMoveStart),this._rb=new ResizeObserver((function(){r.reset()})),this._rb.observe(document.body)}),[{key:"getEventInfo",value:function(t){return t.touches?(this._isPC=!1,{clientXY:[t.touches[0].clientX,t.touches[0].clientY]}):(this._isPC=!0,{clientXY:[t.clientX,t.clientY]})}},{key:"onMoveStart",value:function(t){t.stopPropagation(),t.preventDefault(),this._initialXY=[this.current.offsetLeft,this.current.offsetTop],this._startXY=this.getEventInfo(t).clientXY,this._moved=!1,this.addDocumentListeners()}},{key:"onMoving",value:function(t){var n,r;t.stopPropagation(),t.preventDefault();var i=e(this.getEventInfo(t).clientXY,2),o=i[0],a=i[1],s=o-this._startXY[0],c=a-this._startXY[1];Math.abs(s)<this._boundaryValue&&Math.abs(c)<this._boundaryValue||(this._moved||(this._moved=!0),this._moving=!0,this.current.style.left=Math.min(Math.max(0,this._initialXY[0]+s),window.innerWidth-this.current.offsetWidth)+"px",this.current.style.top=Math.min(Math.max(0,this._initialXY[1]+c),window.innerHeight-this.current.offsetHeight)+"px",null===(n=this.options)||void 0===n||null===(r=n.onChange)||void 0===r||r.call(n,"moving"))}},{key:"onMoveEnd",value:function(t){var e,n,r,i;(t.stopPropagation(),t.preventDefault(),this._moving)&&(null===(e=this.options)||void 0===e||null===(n=e.onChange)||void 0===n||n.call(e,"moveEnded"));this._moved||(null===(r=this.options)||void 0===r||null===(i=r.onClick)||void 0===i||i.call(r));this._moved=!1,this.removeDocumentListeners()}},{key:"addDocumentListeners",value:function(){document.addEventListener("mousemove",this.onMoving,{passive:!1}),document.addEventListener("mouseup",this.onMoveEnd,{passive:!1}),this.current.addEventListener("touchmove",this.onMoving,{passive:!1}),this.current.addEventListener("touchend",this.onMoveEnd,{passive:!1})}},{key:"removeDocumentListeners",value:function(){document.removeEventListener("mousemove",this.onMoving),document.removeEventListener("mouseup",this.onMoveEnd),this.current.removeEventListener("touchmove",this.onMoveEnd),this.current.removeEventListener("touchend",this.onMoveEnd)}},{key:"reset",value:function(){this._isPC&&(this.current.style.top="",this.current.style.left="")}},{key:"destroy",value:function(){var t;this.current.removeEventListener("mousedown",this.onMoveStart),this.current.removeEventListener("touchstart",this.onMoveStart),this.removeDocumentListeners(),null===(t=this._rb)||void 0===t||t.disconnect(),this._rb=null}}])}(),v={Topic:"WidgetCommunication",Methods:{Maximize:"Maximize",Minimize:"Minimize",GetAllConfig:"GetAllConfig",GetCredentials:"GetCredentials",GetTdAccessToken:"GetTdAccessToken",SetBadge:"SetBadge",FrameOpened:"FrameOpened",DownloadTranscript:"DownloadTranscript",UpdatePreviewConfig:"UpdatePreviewConfig",PreviewReady:"PreviewReady",ConversationStart:"ConversationStart",FrameReady:"FrameReady",FrameResize:"FrameResize",UpdateAppConfigs:"UpdateAppConfigs",UpdateContext:"UpdateContext"}},m={exports:{}},y="object"===("undefined"==typeof Reflect?"undefined":t(Reflect))?Reflect:null,w=y&&"function"==typeof y.apply?y.apply:function(t,e,n){return Function.prototype.apply.call(t,e,n)};p=y&&"function"==typeof y.ownKeys?y.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var b=Number.isNaN||function(t){return t!=t};function x(){x.init.call(this)}m.exports=x,m.exports.once=function(t,e){return new Promise((function(n,r){function i(n){t.removeListener(e,o),r(n)}function o(){"function"==typeof t.removeListener&&t.removeListener("error",i),n([].slice.call(arguments))}j(t,e,o,{once:!0}),"error"!==e&&function(t,e,n){"function"==typeof t.on&&j(t,"error",e,n)}(t,i,{once:!0})}))},x.EventEmitter=x,x.prototype._events=void 0,x.prototype._eventsCount=0,x.prototype._maxListeners=void 0;var C=10;function L(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+t(e))}function _(t){return void 0===t._maxListeners?x.defaultMaxListeners:t._maxListeners}function E(t,e,n,r){var i,o,a,s;if(L(n),void 0===(o=t._events)?(o=t._events=Object.create(null),t._eventsCount=0):(void 0!==o.newListener&&(t.emit("newListener",e,n.listener?n.listener:n),o=t._events),a=o[e]),void 0===a)a=o[e]=n,++t._eventsCount;else if("function"==typeof a?a=o[e]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),(i=_(t))>0&&a.length>i&&!a.warned){a.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=t,c.type=e,c.count=a.length,s=c,console&&console.warn&&console.warn(s)}return t}function k(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function M(t,e,n){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},i=k.bind(r);return i.listener=n,r.wrapFn=i,i}function O(t,e,n){var r=t._events;if(void 0===r)return[];var i=r[e];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}(i):S(i,i.length)}function P(t){var e=this._events;if(void 0!==e){var n=e[t];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function S(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r];return n}function j(e,n,r,i){if("function"==typeof e.on)i.once?e.once(n,r):e.on(n,r);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+t(e));e.addEventListener(n,(function t(o){i.once&&e.removeEventListener(n,t),r(o)}))}}Object.defineProperty(x,"defaultMaxListeners",{enumerable:!0,get:function(){return C},set:function(t){if("number"!=typeof t||t<0||b(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");C=t}}),x.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},x.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||b(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},x.prototype.getMaxListeners=function(){return _(this)},x.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n]);var r="error"===t,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var o;if(e.length>0&&(o=e[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var s=i[t];if(void 0===s)return!1;if("function"==typeof s)w(s,this,e);else{var c=s.length,l=S(s,c);for(n=0;n<c;++n)w(l[n],this,e)}return!0},x.prototype.addListener=function(t,e){return E(this,t,e,!1)},x.prototype.on=x.prototype.addListener,x.prototype.prependListener=function(t,e){return E(this,t,e,!0)},x.prototype.once=function(t,e){return L(e),this.on(t,M(this,t,e)),this},x.prototype.prependOnceListener=function(t,e){return L(e),this.prependListener(t,M(this,t,e)),this},x.prototype.removeListener=function(t,e){var n,r,i,o,a;if(L(e),void 0===(r=this._events))return this;if(void 0===(n=r[t]))return this;if(n===e||n.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete r[t],r.removeListener&&this.emit("removeListener",t,n.listener||e));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===e||n[o].listener===e){a=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(n,i),1===n.length&&(r[t]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",t,a||e)}return this},x.prototype.off=x.prototype.removeListener,x.prototype.removeAllListeners=function(t){var e,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[t]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=n[t]))this.removeListener(t,e);else if(void 0!==e)for(r=e.length-1;r>=0;r--)this.removeListener(t,e[r]);return this},x.prototype.listeners=function(t){return O(this,t,!0)},x.prototype.rawListeners=function(t){return O(this,t,!1)},x.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):P.call(t,e)},x.prototype.listenerCount=P,x.prototype.eventNames=function(){return this._eventsCount>0?p(this._events):[]};var A=m.exports,T=c(A),z=function(){return z=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},z.apply(this,arguments)};function B(t,e,n,r){return new(n||(n=Promise))((function(e,i){function o(t){try{s(r.next(t))}catch(e){i(e)}}function a(t){try{s(r.throw(t))}catch(e){i(e)}}function s(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(t){t(r)}))).then(o,a)}s((r=r.apply(t,[])).next())}))}function N(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(c){s=[6,c],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}"function"==typeof SuppressedError&&SuppressedError;var I=function(){function t(t){this.options=t,this._traceId=0,this._methods=new Map,this._emitter=new T,this._handlerOnMessageByBound=this.handlerOnMessage.bind(this),this.createService(),this.getListener().addEventListener("message",this._handlerOnMessageByBound,!1)}return t.jsonParseData=function(t,e){try{return JSON.parse(t)}catch(n){return e}},t.jsonStringifyData=function(t){try{return JSON.stringify(t)}catch(e){return""}},t.runHandler=function(t){return B(this,0,void 0,(function(){var e;return N(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,t()];case 1:return[2,{data:n.sent(),error:null}];case 2:return[2,{error:"string"==typeof(e=n.sent())?e:e.message}];case 3:return[2]}}))}))},t.prototype.destroy=function(){this._emitter.removeAllListeners(),this._methods.clear(),this.getListener().removeEventListener("message",this._handlerOnMessageByBound,!1)},t.prototype.register=function(t,e){this._methods.set(t,e),this.log("Register ".concat(t),this._methods)},t.prototype.unregister=function(t){this._methods.delete(t),this.log("Unregister ".concat(t),this._methods)},t.prototype.trigger=function(e){for(var n=this,r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];return new Promise((function(i){var o=n.createId();n.sendMessage({id:o,method:e,payload:r,type:"request"}),n.log("Trigger ".concat(e," | ").concat(o),r),n._emitter.once("response_".concat(o),(function(r){i(r.payload),n.log("Receive ".concat(e," | ").concat(o),t.jsonStringifyData(r))}))}))},t.prototype.createId=function(){return"".concat(this.options.name,"_").concat(this._traceId++)},t.prototype.createService=function(){var e=this;this._emitter.on(this.options.topic,(function(n){return B(e,0,void 0,(function(){var e,r,i,o,a;return N(this,(function(s){switch(s.label){case 0:return e=n.id,r=n.payload,i=n.method,(o=this._methods.get(i))?[4,t.runHandler((function(){return o.apply(void 0,r)}))]:[3,2];case 1:return a=s.sent(),this.sendMessage({id:e,method:i,payload:a,type:"response"}),[3,3];case 2:this.sendMessage({id:e,method:i,payload:{error:"No found method in service"},type:"response"}),s.label=3;case 3:return[2]}}))}))}))},t.prototype.sendMessage=function(e){var n=this.options,r=n.sender,i=n.origin,o=n.topic,a=t.jsonStringifyData(z(z({},e),{topic:o}));if(!r.postMessage)throw new Error("The sender no found postMessage method please check the sender option");a&&r.postMessage(a,i||"*")},t.prototype.handlerOnMessage=function(e){var n=e.data;if(n){var r=t.jsonParseData(n,null);if(r&&r.topic===this.options.topic){var i=r.id,o=r.type;"request"===o&&this._emitter.emit(this.options.topic,r),"response"===o&&this._emitter.emit("response_".concat(i),r)}}},t.prototype.getListener=function(){return this.options.listener||window},t.prototype.log=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=this.options,i=r.debug,o=r.name;if(i){var a=(new Date).toISOString(),s="[RPC] [".concat(a,"] [").concat(o,"] ").concat(t);console.groupCollapsed(s),(null==e?void 0:e.length)&&console.info.apply(console,e),console.groupEnd()}},Object.defineProperty(t.prototype,"methods",{get:function(){return this._methods},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"emitter",{get:function(){return this._emitter},enumerable:!1,configurable:!0}),t}(),R=new(function(){return i((function t(){n(this,t),s(this,"appConfig",{}),s(this,"touchpoint",null),s(this,"appProps",null),s(this,"context",{}),s(this,"participantName","")}),[{key:"setAppConfig",value:function(t){var e,n=(null==t?void 0:t.styles)||{};return this.appConfig=a(a(a({},this.appConfig),t),{},{styles:Object.keys(n).length?a(a({},null===(e=this.appConfig)||void 0===e?void 0:e.styles),n):{}}),this.appConfig}},{key:"setTouchpoint",value:function(t){this.touchpoint=t}},{key:"setParticipantName",value:function(t){this.participantName=t}},{key:"setAppProps",value:function(t){this.appProps=t}},{key:"getAllConfig",value:function(){return{appConfig:this.appConfig,touchpoint:this.touchpoint,context:this.context,appProps:this.appProps,participantName:this.participantName,injectorWindowHref:window.location.href,injectorWindowHostname:window.location.hostname}}},{key:"setContextParam",value:function(t){this.context=t}},{key:"clearAll",value:function(){this.appConfig={},this.touchpoint=null,this.context={},this.participantName=""}}])}()),D='@keyframes loading{0%,5%{transform:translate(40px) scale(1);background:#e9e9e9}10%{transform:translate(40px) scale(1);background:var(--chat-theme-color, #1f1f1f)}40%{transform:translate(20px) scale(1.5);background:var(--chat-theme-color, #1f1f1f)}90%,95%{transform:translate(0) scale(1);background:var(--chat-theme-color, #1f1f1f)}to{transform:translate(0) scale(1);background:#e9e9e9}}@keyframes move-x{0%,10%{transform:translate(0)}90%,to{transform:translate(20px)}}@keyframes dot1-animate{0%{transform:matrix(1,0,0,1,285.389,355.211)}25%{transform:matrix(.9957,0,0,.9957,286.3071,355.4352)}50%{transform:matrix(.7195,0,0,.7195,331.1569,366.3884)}to{transform:matrix(.6882,0,0,.6882,350.5277,371.1191) scale(0)}}@keyframes dot2-animate{0%{transform:matrix(1,0,0,1,354.999,355.211)}25%{transform:matrix(.9957,0,0,.9957,354.999,355.4352)}50%{transform:matrix(.7195,0,0,.7195,354.999,366.3883)}to{transform:matrix(.6882,0,0,.6882,354.999,371.119) scale(0)}}@keyframes dot3-animate{0%{transform:matrix(1,0,0,1,424.611,355.211)}25%{transform:matrix(.9957,0,0,.9957,423.6929,355.4352)}50%{transform:matrix(.7195 0,0,.7195,378.8418,366.3884)}to{transform:matrix(.6882,0,0,.6882,359.474,371.1191) scale(0)}}@keyframes wave-animate{0%{transform:scale(0)}to{transform:scale(1)}}.tdw-widget-wrapper{--chat-z-index: 99999;position:fixed;z-index:var(--chat-z-index)}.tdw-widget-wrapper[data-preview]{position:sticky;display:flex;flex-direction:column;gap:24px;align-items:self-end}.tdw-widget{position:fixed;right:20px;bottom:var(--chat-position-bottom, 20px);z-index:var(--chat-z-index);width:var(--chat-container-width, 360px);min-width:360px;height:var(--chat-container-height, 680px);max-height:calc(var(--chat-screen-height) - var(--chat-position-bottom, 20px) - 20px);border:none;border-radius:20px;box-shadow:0 32px 20px rgba(0,0,0,.02),0 16px 16px rgba(0,0,0,.04),0 4px 8px rgba(0,0,0,.06),0 -4px 24px rgba(0,0,0,.08);overflow:hidden;transform-origin:right bottom;transition:height .2s,visibility 1s,opacity 83ms ease-out,transform .4s cubic-bezier(.25,.8,.25,1);will-change:width,height,visibility,opacity,transform}.tdw-widget[aria-hidden=true]{opacity:0;visibility:hidden;pointer-events:none;transform:scale(0)}.tdw-widget[aria-hidden=false]{opacity:1;visibility:visible;pointer-events:auto;transform:scale(1)}.tdw-widget[data-preview]{position:unset}.tdw-widget iframe{width:100%;height:100%;border:none;border-radius:inherit}@media only screen and (max-width: 600px),(max-height: 620px){.tdw-widget[data-responsive-layout=true]{top:0;right:0;bottom:0;left:0;overflow:hidden;width:var(--chat-screen-width, 100%);min-width:var(--chat-screen-width, 100%);max-width:var(--chat-screen-width, 100%);height:var(--chat-screen-height, 100%);min-height:var(--chat-screen-height, 100%);max-height:var(--chat-screen-height, 100%);border-radius:0}}.tdw-widget-trigger{--box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 8%), 0 16px 16px 0 rgba(0, 0, 0, 4%), 0 32px 20px 0 rgba(0, 0, 0, 2%);position:fixed;right:var(--trigger-button-position-right, 10px);bottom:var(--trigger-button-position-bottom, 20px);z-index:var(--chat-z-index);display:flex;justify-content:center;align-items:center;width:var(--trigger-button-width, 64px);height:var(--trigger-button-height, 64px);border:none;border-radius:50%;cursor:pointer;background-image:var(--chat-icon);background-size:56%;background-repeat:no-repeat;background-position:center;transition:background-color .1s ease-in-out;box-shadow:var(--chat-launcher-shadow, var(--box-shadow));background-color:var(--chat-launcher-color, #1f1f1f)}.tdw-widget-trigger:hover{background-color:var(--chat-hover-launcher-color, #383838)}.tdw-widget-trigger[data-has-chat-icon=yes] .tdw-widget-trigger-animate{display:none}.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg g[data-target=wave]{display:block;transform-origin:center 52%;animation:wave-animate 2s infinite;animation-direction:alternate;animation-delay:0s,1s}.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg g[data-target=dot1]{animation:dot1-animate 2s infinite;animation-direction:alternate;animation-delay:0s,4s}.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg g[data-target=dot2]{animation:dot2-animate 2s infinite;animation-direction:alternate;animation-delay:0s,4s}.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg g[data-target=dot3]{animation:dot3-animate 2s infinite;animation-direction:alternate;animation-delay:0s,4s}.tdw-widget-trigger[data-preview]{position:relative;right:unset;bottom:unset}.tdw-widget-trigger[data-has-chat-icon=no] .tdw-widget-trigger-animate svg>g>g:nth-child(2)>g>path,.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg>g>g:nth-child(2)>g>path{fill:#fff}.tdw-widget-trigger-animate{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;border-radius:50%;background-color:var(--chat-hover-launcher-color, #383838)}.tdw-widget-trigger-animate svg{position:relative;width:100%;height:100%;transform:translateZ(0);content-visibility:visible}.tdw-widget-trigger-animate svg g[data-target]{animation:none}.tdw-widget-trigger-animate svg g[data-target=wave]{display:none}.tdw-widget-trigger-animate svg g[data-target=circle]>g>g>path,.tdw-widget-trigger-animate svg g[data-target=dot1]>g>path,.tdw-widget-trigger-animate svg g[data-target=dot2]>g>path,.tdw-widget-trigger-animate svg g[data-target=dot3]>g>path,.tdw-widget-trigger-animate svg g[data-target=wave]>g>g>path{fill:var(--chat-launcher-color, #383838)}.tdw-widget-trigger-animate:hover svg g[data-target=circle]>g>g>path,.tdw-widget-trigger-animate:hover svg g[data-target=dot1]>g>path,.tdw-widget-trigger-animate:hover svg g[data-target=dot2]>g>path,.tdw-widget-trigger-animate:hover svg g[data-target=dot3]>g>path,.tdw-widget-trigger-animate:hover svg g[data-target=wave]>g>g>path{fill:var(--chat-hover-launcher-color, #383838)}.tdw-widget-trigger-badge{position:absolute;top:0;right:0;width:20px;height:20px;line-height:20px;text-align:center;color:#fff;background-color:#f5222d;font-size:10px;border-radius:50%;box-sizing:border-box;transition:right,width,border-radius .25s ease}.tdw-widget-trigger-badge-more{right:-4px;width:31px;border-radius:48px}.tdw-widget-loading{display:flex;flex-direction:column;width:100%;height:100%}.tdw-widget-header{height:64px;background-color:var(--chat-header-background-color, #f8f8f8);border-top-left-radius:8px;border-top-right-radius:8px}.tdw-widget-content{display:flex;flex-direction:column;justify-content:center;align-items:center;height:calc(100% - 56px);padding:16px;box-sizing:border-box}.tdw-loader{position:relative;width:100px;height:10px}.tdw-loader:before,.tdw-loader:after{content:"";position:absolute;top:0;left:0;width:10px;height:10px;margin-left:25%;border-radius:50%;box-shadow:20px 0 #e9e9e9;background:#e9e9e9;animation:move-x 1s linear infinite}.tdw-loader:after{box-shadow:none;transform:translate(40px) scale(1);z-index:2;animation:loading 1s linear infinite}',H=function(t){var e={chatIcon:t.chatIcon?"url(".concat(t.chatIcon,")"):void 0,chatThemeColor:t.chatThemeColor,chatHoverThemeColor:t.chatHoverThemeColor,triggerButtonWidth:t.triggerButtonWidth,triggerButtonHeight:t.triggerButtonHeight,triggerButtonPositionBottom:t.triggerButtonPositionBottom,triggerButtonPositionRight:t.triggerButtonPositionRight,chatPositionBottom:t.chatPositionBottom,chatContainerHeight:t.chatContainerHeight,chatContainerWidth:t.chatContainerWidth,chatLauncherColor:t.chatLauncherColor,chatHoverLauncherColor:t.chatHoverLauncherColor,chatLauncherShadow:t.chatLauncherShadow};return d(e,{removeEmptyString:!0})},W="talkdesk-chat-widget-style";var Y="tdw-widget-wrapper";var U='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 710 710" width="710" height="710" preserveAspectRatio="xMidYMid meet"><g clip-path="url(#__lottie_element_51)" data-target="circle"><g transform="matrix(1,0,0,1,355,355)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(31,31,31)" fill-opacity="1" d=" M0,-355.0159912109375 C196.07000732421875,-355.0159912109375 355.0159912109375,-196.07000732421875 355.0159912109375,0 C355.0159912109375,196.07000732421875 196.07000732421875,355.0159912109375 0,355.0159912109375 C-196.07000732421875,355.0159912109375 -355.0159912109375,196.07000732421875 -355.0159912109375,0 C-355.0159912109375,-196.07000732421875 -196.07000732421875,-355.0159912109375 0,-355.0159912109375z"></path></g></g><g transform="matrix(1,0,0,1,354.9989929199219,384.5849914550781)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-67.62200164794922,-135.24400329589844 C-67.62200164794922,-135.24400329589844 67.62200164794922,-135.24400329589844 67.62200164794922,-135.24400329589844 C123.64199829101562,-135.24400329589844 169.05499267578125,-89.83100128173828 169.05499267578125,-33.81100082397461 C169.05499267578125,22.20800018310547 123.64199829101562,67.62200164794922 67.62200164794922,67.62200164794922 C67.62200164794922,67.62200164794922 50.71699905395508,67.62200164794922 50.71699905395508,67.62200164794922 C50.71699905395508,67.62200164794922 -50.71699905395508,135.24400329589844 -50.71699905395508,135.24400329589844 C-50.71699905395508,135.24400329589844 -50.71699905395508,67.62200164794922 -50.71699905395508,67.62200164794922 C-50.71699905395508,67.62200164794922 -67.62200164794922,67.62200164794922 -67.62200164794922,67.62200164794922 C-123.64199829101562,67.62200164794922 -169.05499267578125,22.20800018310547 -169.05499267578125,-33.81100082397461 C-169.05499267578125,-89.83100128173828 -123.64199829101562,-135.24400329589844 -67.62200164794922,-135.24400329589844z"></path></g></g><g data-target="dot3" transform="matrix(1,0,0,1,424.6109924316406,355.21099853515625)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(30,30,30)" fill-opacity="1" d=" M0,-19.58300018310547 C-10.984000205993652,-19.58300018310547 -19.88800048828125,-10.815999984741211 -19.88800048828125,0 C-19.88800048828125,10.8149995803833 -10.984000205993652,19.58300018310547 0,19.58300018310547 C10.984000205993652,19.58300018310547 19.88800048828125,10.8149995803833 19.88800048828125,0 C19.88800048828125,-10.815999984741211 10.984000205993652,-19.58300018310547 0,-19.58300018310547z"></path></g></g><g data-target="dot1" transform="matrix(1,0,0,1,285.3890075683594,355.21099853515625)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(30,30,30)" fill-opacity="1" d=" M0,-19.58300018310547 C-10.984000205993652,-19.58300018310547 -19.888999938964844,-10.815999984741211 -19.888999938964844,0 C-19.888999938964844,10.8149995803833 -10.984000205993652,19.58300018310547 0,19.58300018310547 C10.984000205993652,19.58300018310547 19.888999938964844,10.8149995803833 19.888999938964844,0 C19.888999938964844,-10.815999984741211 10.984000205993652,-19.58300018310547 0,-19.58300018310547z"></path></g></g><g data-target="dot2" transform="matrix(1,0,0,1,354.9989929199219,355.21099853515625)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(30,30,30)" fill-opacity="1" d=" M-0.0010000000474974513,-19.58300018310547 C-10.984999656677246,-19.58300018310547 -19.888999938964844,-10.815999984741211 -19.888999938964844,0 C-19.888999938964844,10.8149995803833 -10.984999656677246,19.58300018310547 -0.0010000000474974513,19.58300018310547 C10.984000205993652,19.58300018310547 19.888999938964844,10.8149995803833 19.888999938964844,0 C19.888999938964844,-10.815999984741211 10.984000205993652,-19.58300018310547 -0.0010000000474974513,-19.58300018310547z"></path></g></g><g data-target="wave"><g transform="matrix(0.9995219707489014,-0.03091629408299923,0.03091629408299923,0.9995219707489014,356.4827575683594,355.05108642578125)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(31,31,31)" fill-opacity="1" d=" M73.96199798583984,-17.92799949645996 C73.96199798583984,-17.92799949645996 49.125999450683594,-29.759000778198242 49.125999450683594,-29.759000778198242 C40.44200134277344,-9.998000144958496 21.340900421142578,2.770447254180908 0.46700000762939453,2.7699999809265137 C-21.07493782043457,2.769519567489624 -40.41497039794922,-10.566868782043457 -48.804969787597656,-31.209869384765625 C-48.804969787597656,-31.209869384765625 -60.26470184326172,-26.16266632080078 -60.26519775390625,-26.1624755859375 C-60.265830993652344,-26.162199020385742 -73.96195220947266,-20.127910614013672 -73.96195220947266,-20.127910614013672 C-61.29095458984375,11.061088562011719 -32.06700134277344,31.209999084472656 0.46700000762939453,31.209999084472656 C31.999000549316406,31.209999084472656 60.83599853515625,11.920999526977539 73.96199798583984,-17.92799949645996z"></path></g></g></g></g></svg>';var X="talkdesk-chat-widget-trigger";var F="talkdesk-chat-widget",G="loading-element",q="iframe-element",J=function(){var t=R.getAllConfig().appProps;return"./v2/widget/latest/index.html?touchpointId=".concat(null==t?void 0:t.touchpointId)},K=function(){return"https://talkdeskchatsdk.svc.talkdeskstg.com".concat("/v2/widget/latest/preview.html")}}}}))}();
//# sourceMappingURL=entryPreview-legacy-BG3jrkM2.js.map
