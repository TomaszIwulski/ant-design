(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["ivwLjYWO"],{ivwLjYWO:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}});var r=t("8Z0rk4BW");t("hTrXVCsn");var s=t("qdGieaVz");let i=e=>{let n=[];switch(e.date()){case 8:n=[{type:"warning",content:"This is warning event."},{type:"success",content:"This is usual event."}];break;case 10:n=[{type:"warning",content:"This is warning event."},{type:"success",content:"This is usual event."},{type:"error",content:"This is error event."}];break;case 15:n=[{type:"warning",content:"This is warning event"},{type:"success",content:"This is very long usual event......"},{type:"error",content:"This is error event 1."},{type:"error",content:"This is error event 2."},{type:"error",content:"This is error event 3."},{type:"error",content:"This is error event 4."}];}return n||[];},o=e=>{if(8===e.month())return 1394;};var a=()=>{let e=e=>{let n=o(e);return n?(0,r.jsxs)("div",{className:"notes-month",children:[(0,r.jsx)("section",{children:n}),(0,r.jsx)("span",{children:"Backlog number"})]}):null;},n=e=>{let n=i(e);return(0,r.jsx)("ul",{className:"events",children:n.map(e=>(0,r.jsx)("li",{children:(0,r.jsx)(s.Badge,{status:e.type,text:e.content})},e.content))});};return(0,r.jsx)(s.Calendar,{cellRender:(t,r)=>"date"===r.type?n(t):"month"===r.type?e(t):r.originNode});};}}]);
//# sourceMappingURL=ivwLjYWO-async.c52995bd.js.map