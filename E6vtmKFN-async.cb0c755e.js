(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["E6vtmKFN"],{E6vtmKFN:function(t,e,l){"use strict";l.d(e,"__esModule",{value:!0}),l.d(e,"default",{enumerable:!0,get:function(){return s;}});var n=l("8Z0rk4BW");l("t9Odhl21");var o=l("WyIMPUJp"),i=l("qdGieaVz"),s=()=>{let[t,e]=(0,o.useState)([]),[l,s]=(0,o.useState)([]),r=()=>{let t=[],l=[];for(let e=0;e<20;e++){let n={key:e.toString(),title:`content${e+1}`,description:`description of content${e+1}`,chosen:e%2==0};n.chosen&&t.push(n.key),l.push(n);}e(l),s(t);};return(0,o.useEffect)(()=>{r();},[]),(0,n.jsx)(i.Transfer,{dataSource:t,showSearch:!0,listStyle:{width:250,height:300},operations:["to right","to left"],targetKeys:l,onChange:t=>{s(t);},render:t=>`${t.title}-${t.description}`,footer:(t,e)=>(null==e?void 0:e.direction)==="left"?(0,n.jsx)(i.Button,{size:"small",style:{float:"left",margin:5},onClick:r,children:"Left button reload"}):(0,n.jsx)(i.Button,{size:"small",style:{float:"right",margin:5},onClick:r,children:"Right button reload"})});};}}]);
//# sourceMappingURL=E6vtmKFN-async.cb0c755e.js.map