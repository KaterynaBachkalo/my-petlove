import{j as e,I as f,u as y,L as k,J as S,B as b,r as l}from"./index-DoziOfyJ.js";import{U as I}from"./UploadFotoForm-D94Au-HM.js";import{u as F}from"./index.esm-CVND3_uw.js";import{c as D,a as v,o as R}from"./index.esm-T-8WkfIw.js";import{P as $}from"./Picture-CXNEpTNt.js";const L=({handleCheckGender:o,selectedGender:a})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"addPet-icon-wrap",children:[e.jsx("div",{className:`addPet-icon woman ${a==="woman"?"active":""}`,onClick:()=>o("woman"),children:e.jsx(f,{name:"icon-female",className:`icon-woman ${a==="woman"?"active":""}`})}),e.jsx("div",{className:`addPet-icon man ${a==="man"?"active":""}`,onClick:()=>o("man"),children:e.jsx(f,{name:"icon-male",className:`icon-man ${a==="man"?"active":""}`})}),e.jsx("div",{className:`addPet-icon man-woman ${a==="man-woman"?"active":""}`,onClick:()=>o("man-woman"),children:e.jsx(f,{name:"icon-male-female",className:`icon-man-woman ${a==="man-woman"?"active":""}`})})]})}),C=({petData:o,resetPetData:a})=>{var x,j,h,d;const t=y(),m=D({title:v().default(""),name:v().default(""),birthday:v().default(""),species:v().default("")}).required(),{register:s,handleSubmit:p,reset:i,formState:{errors:n}}=F({resolver:R(m)}),u=async r=>{const g={title:r.title,name:r.name,birthday:r.birthday,species:r.species,...o};try{if(await t(S(g)),Object.keys(n).length!==0)return b.error("Something went wrong...");b.success("Your data is successfully updated"),i(),a()}catch{b.error("Something went wrong, please try again.")}};return e.jsxs("form",{onSubmit:p(u),children:[e.jsxs("div",{className:"wrap-input",children:[e.jsxs("div",{children:[e.jsx("input",{...s("title"),className:"input",placeholder:"Title"}),e.jsx("p",{className:"form-errors",children:(x=n.title)==null?void 0:x.message})]}),e.jsxs("div",{children:[e.jsx("input",{...s("name"),className:"input",placeholder:"Pet's Name"}),e.jsx("p",{className:"form-errors",children:(j=n.name)==null?void 0:j.message})]}),e.jsxs("div",{className:"add-mypet-input-wrap",children:[e.jsxs("div",{children:[e.jsx("input",{...s("birthday"),className:"input"}),e.jsx("p",{className:"form-errors",children:(h=n.birthday)==null?void 0:h.message})]}),e.jsxs("div",{children:[e.jsx("input",{...s("species"),className:"input"}),e.jsx("p",{className:"form-errors",children:(d=n.species)==null?void 0:d.message})]})]})]}),e.jsxs("div",{className:"my-pet-button-wrapper",children:[e.jsx(k,{to:"/profile",className:"form-button back",children:"Back"}),e.jsx("button",{type:"submit",className:"form-button submit",children:"Submit"})]})]})},O="/my-petlove/assets/image@1x-_fS8GYIq.png",U="/my-petlove/assets/image@2x-Ccy85Vjj.png",q="/my-petlove/assets/image@1x-Dazjq9GK.png",B="/my-petlove/assets/image@2x-BpOfkYDk.png",T="/my-petlove/assets/image@1x-DmknmZvO.png",E="/my-petlove/assets/image@2x-C8aySFPT.png",K=()=>{const o=y(),a=l.useRef(null),[t,m]=l.useState(),[s,p]=l.useState(),[i,n]=l.useState(null),[u,x]=l.useState(null),j=c=>{if(c instanceof File)n(null),m(null),p(c);else{const N=c.target.files;if(N&&N.length>0){const w=N[0];g(),m(w);const P=URL.createObjectURL(w);n(P)}}};l.useEffect(()=>(t&&(m(t),a.current&&(a.current.value="")),()=>{i&&URL.revokeObjectURL(i)}),[t,o,i]);const h=c=>{x(c)},d={sex:u,imgURL:t||s},r=()=>{n(null),m(null),g(),d.sex=""},g=()=>{p(null);const c=document.querySelector(".selected-file-input");c&&(console.log(c.value),c.value="")};return e.jsxs("section",{className:"add-pet-section",children:[e.jsx($,{mob1x:O,mob2x:U,tab1x:T,tab2x:E,desk1x:q,desk2x:B,alt:"dog",className:"addPet-img"}),e.jsxs("div",{className:"addPet-background",children:[e.jsxs("h2",{className:"addPet-title",children:["Add my pet/ ",e.jsx("span",{children:"Personal details"})]}),e.jsx(L,{handleCheckGender:h,selectedGender:u}),e.jsx("div",{className:"pet-avatar",children:i&&!(s!=null&&s.name)?e.jsx("img",{src:i,alt:(t==null?void 0:t.name)??"Pet avatar",className:"icon-pet-avatar"}):!i&&(s!=null&&s.name)?e.jsx("img",{src:s==null?void 0:s.name,alt:(s==null?void 0:s.name)??"Pet avatar",className:"icon-pet-avatar"}):e.jsx(f,{name:"icon-paw",className:"icon-pet-avatar"})}),e.jsx("div",{className:"img-wrap card-info-modal profile",children:e.jsx(I,{onChange:j,ref:a,isModal:!0})}),e.jsx(C,{petData:d,resetPetData:r})]})]})};export{K as default};
