import{f as c,j as t}from"./main-vendor-DXirhFg8.js";import{a3 as l,a4 as i}from"./overlayscrollbars-xOREQhpB.js";import"./reporter-vendor-CC1waedv.js";/*!
* Talkdesk Confidential
*
* Copyright (C) Talkdesk Inc. 2024
*
* The source code for this program is not published or otherwise divested
* of its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office. Unauthorized copying of this file, via any medium
* is strictly prohibited.
*/function p(s){const{children:r}=s,e=document.getElementById(l);return e?c.createPortal(r,e):null}const u="_reply_h9b0t_11",x="_replies_h9b0t_29",o={reply:u,replies:x},m=({replies:s,onClick:r})=>t.jsx("div",{className:o.replies,children:s.map((e,n)=>t.jsx("button",{className:o.reply,"data-qa":"quick_action",onClick:()=>r(e),children:e.text},n))});function f(s){const{replies:r,isLastMessage:e,onButtonClick:n,...a}=s;return t.jsxs(t.Fragment,{children:[t.jsx(i,{...a}),e&&t.jsx(p,{children:t.jsx(m,{replies:r,onClick:n})})]})}export{f as default};
//# sourceMappingURL=QuickReplyMessage-DBgNhUo0.js.map
