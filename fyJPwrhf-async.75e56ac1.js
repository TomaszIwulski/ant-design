(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["fyJPwrhf"],{fyJPwrhf:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return o;}});var a=l("8Z0rk4BW");l("Gbz-Zpr0");var d=l("4i_r4BgY"),n=l("qdGieaVz");let i={action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture",beforeUpload:e=>new Promise(t=>{let l=new FileReader;l.readAsDataURL(e),l.onload=()=>{let e=document.createElement("img");e.src=l.result,e.onload=()=>{let l=document.createElement("canvas");l.width=e.naturalWidth,l.height=e.naturalHeight;let a=l.getContext("2d");a.drawImage(e,0,0),a.fillStyle="red",a.textBaseline="middle",a.font="33px Arial",a.fillText("Ant Design",20,20),l.toBlob(e=>t(e));};};})};var o=()=>(0,a.jsx)(n.Upload,{...i,children:(0,a.jsx)(n.Button,{icon:(0,a.jsx)(d.UploadOutlined,{}),children:"Upload"})});}}]);
//# sourceMappingURL=fyJPwrhf-async.75e56ac1.js.map