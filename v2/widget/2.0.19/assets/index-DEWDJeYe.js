const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./browser-BWWtcJkb.js","./main-vendor-DXirhFg8.js"])))=>i.map(i=>d[i]);
var q=Object.defineProperty;var J=(e,t,s)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var j=(e,t,s)=>J(e,typeof t!="symbol"?t+"":t,s);import{l as K,_ as N,p as Q,n as X,u as k,P as Y,c as I,a as Z,b as tt,d as et,e as nt,f as st,g as L,s as ot,W as at,h as b,i as w,j as u,k as F,m as M,o as rt,q as H,R as ct,r as R,t as it,v as lt,w as P,x as ut,y as dt,z as _t,A as ft,B as z,C as gt,D as ht,U as pt,E as mt,F as Ct,I as xt,G as wt,H as y,J as bt,K as St,L as vt,M as jt,N as Et,O as Tt,Q as Bt}from"./overlayscrollbars-xOREQhpB.js";import{j as n,u as O,a as It,r as g,b as Lt,R as Rt}from"./main-vendor-DXirhFg8.js";import Nt from"./Arrow-6NOPDRoB.js";import"./reporter-vendor-CC1waedv.js";function pe(){import.meta.url,import("_").catch(()=>1),async function*(){}().next()}/*!
* Talkdesk Confidential
*
* Copyright (C) Talkdesk Inc. 2024
*
* The source code for this program is not published or otherwise divested
* of its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office. Unauthorized copying of this file, via any medium
* is strictly prohibited.
*/async function E(e,t,s){try{s.debug("Load ".concat(e," start")),await t(),s.debug("Load ".concat(e," success"))}catch(o){s.warn("Load ".concat(e," failed"),o)}}function yt(){const e=K.getSubLogger({name:"PreLoader"});E("locales",()=>N(()=>import("./index-ytKdWvHH.js"),[],import.meta.url),e),E("@twilio/conversations",()=>N(()=>import("./browser-BWWtcJkb.js").then(t=>t.b),__vite__mapDeps([0,1]),import.meta.url),e),E("TextMessage",()=>Q(),e)}function At(){yt()}const kt="_loading_zncni_106",Ft="_loader_zncni_113",Mt="_circle_zncni_1",A={loading:kt,loader:Ft,"move-x":"_move-x_zncni_1",circle:Mt,"slide-down":"_slide-down_zncni_1","slide-in":"_slide-in_zncni_1","slide-out":"_slide-out_zncni_1","fade-in":"_fade-in_zncni_1","fade-out":"_fade-out_zncni_1"},D=()=>n.jsx("div",{className:A.loading,children:n.jsx("span",{className:A.loader,"data-testid":"loading-screen"})});function Ht(e){return"text"in e}function Pt(e){const{value:t}=e,[s]=O();return Ht(t)?n.jsx(n.Fragment,{children:t.text}):n.jsx(n.Fragment,{children:s(t.key,t.options)})}class zt{constructor(t,s){j(this,"type");j(this,"content");this.type=t,this.content=s}}const Ot=It(e=>{const t=o=>{e(a=>({items:a.items.filter(c=>c.id!==o)}))},s=(o,a,c=5e3)=>{const r=X(),i={...new zt(o,a),id:r};return e(d=>({items:[i,...d.items]})),c>0&&setTimeout(()=>{t(r)},c),r};return{items:[],error(o,a=5e3){const c=s("error",o,a);return()=>{t(c)}},warning(o,a=5e3){const c=s("warning",o,a);return()=>{t(c)}},success(o,a=5e3){const c=s("success",o,a);return()=>{t(c)}},remove(o){t(o)},clear(){e({items:[]})}}}),Dt="_notifications_1osrc_106",$t="_notification_1osrc_106",Ut="_error_1osrc_131",Wt="_warning_1osrc_137",Gt="_success_1osrc_143",Vt="_circle_1osrc_1",qt="_loading_1osrc_1",T={notifications:Dt,notification:$t,"slide-down":"_slide-down_1osrc_1",error:Ut,warning:Wt,success:Gt,circle:Vt,loading:qt,"move-x":"_move-x_1osrc_1","slide-in":"_slide-in_1osrc_1","slide-out":"_slide-out_1osrc_1","fade-in":"_fade-in_1osrc_1","fade-out":"_fade-out_1osrc_1"},Jt=3,Kt=3e3,Qt=0;function Xt(){const{items:e,error:t,success:s,clear:o}=Ot(),{on:a,off:c}=k();return g.useLayoutEffect(()=>{let r=null;const i=()=>{r==null||r(),r=null,r=t({key:"noConnectionTip"},Qt)},d=()=>{r==null||r(),r=null,s({key:"connectedTip"},Kt)},l=()=>{o()};return a("disconnect",i),a("reconnect",d),a("leave_end",l),a("leave_error",l),()=>{c("disconnect",i),c("reconnect",d),c("leave_end",l),c("leave_error",l)}},[a,c,t,s,o]),n.jsx(Y,{children:n.jsx("div",{className:T.notifications,children:e.slice(0,Jt).map(r=>n.jsx("div",{className:I(T.notification,T[r.type]),children:n.jsx(Pt,{value:r.content})},r.id))})})}function Yt(){const e=g.useRef(null),t=g.useRef(!1),{showInitialScreen:s}=Z(),{chatContainerHeight:o}=tt(),{autoOpen:a}=et(),{maximize:c,frameResize:r}=nt(),i=st(),l=L()===u.InitialScreen,h=g.useCallback(async f=>t.current?!1:(t.current=!0,i||a?(await ot(f),await c(),!0):!1),[i,a,c]),_=g.useCallback(async()=>{var f;if(!o&&e.current){let p=((f=e.current)==null?void 0:f.scrollHeight)||0;if(p>0){p+=at;const x=p<b?p:b;return await r({height:x}),x}}return b},[o,r]),C=g.useCallback(()=>o?!1:r({height:b}),[o,r]);return g.useEffect(()=>{i&&w.preloadClient("openChatWidget")},[i]),g.useEffect(()=>{const f=s&&l;return h(f?200:-1),f&&_(),()=>{f&&C()}},[s,l,h,_,C]),{initialScreenContainerRef:e,updateChatFrameHeight:_}}const Zt="_scrollToBottomButton_1bvzr_14",te="_arrow_1bvzr_35",ee="_newMessages_1bvzr_38",B={scrollToBottomButton:Zt,arrow:te,newMessages:ee},ne=e=>{const{onClick:t,unreadMessageCount:s=0}=e,o=s>0,a=c=>{c.stopPropagation(),t==null||t()};return n.jsx("div",{className:B.scrollToBottomButton,children:n.jsxs("button",{onClick:a,"aria-label":"scroll-to-bottom",children:[n.jsx(Nt,{className:B.arrow}),o&&n.jsx("span",{"data-testid":"unread-dot",className:B.newMessages})]})})},se="_startChatButton_h3e07_19",oe="_withSeparator_h3e07_27",ae="_button_h3e07_32",re="_transparent_h3e07_56",S={startChatButton:se,withSeparator:oe,button:ae,transparent:re},ce=e=>{const t=F(_=>_.config.options.startChatButtonLabel),[s]=O(),o=L(),a=M(),{active:c}=rt(),{footerVisible:r,enableScroll:i}=H(),d=g.useRef(null),l=o===u.End&&!!a&&c;g.useEffect(()=>{var _;(_=d.current)==null||_.focus()},[]);const h=()=>{e.onClick()};return n.jsx("div",{className:I(S.startChatButton,{[S.withSeparator]:!r&&i}),children:n.jsxs("button",{ref:d,type:"button",className:I(S.button,{[S.transparent]:l}),onClick:h,children:[l&&n.jsx(ct,{}),n.jsx("p",{children:t||s("startChatButtonLabel")})]})})},ie="_conversation_mscrs_1",le={conversation:ie};function ue(e){const{goInitialPage:t}=e,{enableEmoji:s,enableAttachments:o,enableUserInput:a}=R(),c=L(),r=it(),i=M(),d=lt(),l=P(),h=ut(),_=dt(),{showScrollToBottom:C}=H(),f=_t(),{send:p,typing:x}=ft(),{is:m,emit:v}=z(),U=a&&m(u.Conversation),W=m([u.End,u.Error]),G=m(u.Conversation)&&C,V=()=>{v(mt.need_scroll_to_bottom)};return n.jsxs(gt.page,{className:le.conversation,children:[n.jsx(ht,{shouldLoadFeedback:d,feedbackLink:i,messages:r,page:c}),U&&n.jsx(pt,{enableEmoji:s,enableAttachments:o,send:p,connected:_,typing:x,enableRTL:h,showScreenLoading:l}),W&&n.jsx(ce,{onClick:t}),G&&n.jsx(ne,{onClick:V,unreadMessageCount:f})]})}function de(){const{go:e,is:t,isNot:s,getInitialPage:o,setFormData:a,enableScreenLoading:c}=z(),{emit:r}=Ct(),{showInitialScreen:i,welcomeMessage:d,controls:l,enableValidation:h,context:_}=R(),{initialScreenContainerRef:C,updateChatFrameHeight:f}=Yt(),p=(m,v=!1)=>{a(m),v&&(c(1e4,!0),w.init("submitInitialScreen")),s(u.Conversation)&&e(u.Conversation)},x=()=>{const m=o();e(m),w.clear(),r(wt.resetFrame),w.preloadClient("startNewChat")};return t(u.Loading)?n.jsx(D,{}):t(u.InitialScreen)?n.jsx(xt,{ref:C,active:i,welcomeMessage:d,controls:l,enableValidation:h,onSubmitInitialScreen:p,defaultValues:_,updateChatFrameHeight:f}):t([u.Conversation,u.End,u.Error])?n.jsx(ue,{goInitialPage:x}):n.jsx(n.Fragment,{})}const $=()=>{const{chatTitle:e,chatSubtitle:t,showCloseConversationButton:s,showDownloadTranscriptButton:o}=R(),a=P();return n.jsxs("div",{className:y.chat,children:[n.jsx(bt,{chatTitle:e,chatSubtitle:t,showCloseConversationButton:s,showDownloadTranscriptButton:o}),n.jsx(de,{}),n.jsx(Xt,{}),n.jsx("div",{"data-qa":"screen-loading",className:y.loadingWrapper,"aria-label":"loading conversation","aria-hidden":!a,children:n.jsx(D,{})})]})};$.whyDidYouRender=!0;function _e(){window.location.reload()}function fe(){return n.jsx(St,{fallback:n.jsx(vt,{onRetry:_e}),onError:jt,children:n.jsx(Et,{children:n.jsx($,{})})})}async function ge(){At(),k.getState().go("loading"),Tt.getState().init(),await Bt.getState().frameReady(),await F.getState().init(),w.init("pageLoaded");const e=document.getElementById("root");Lt.createRoot(e).render(n.jsx(Rt.StrictMode,{children:n.jsx(fe,{})}))}ge();export{pe as __vite_legacy_guard};
//# sourceMappingURL=index-DEWDJeYe.js.map
