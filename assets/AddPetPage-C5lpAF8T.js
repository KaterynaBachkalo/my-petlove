import{r as o,j as e,I as v,u as S,L as I,K as R,B as w}from"./index-CQ_bX9yX.js";import{U as F}from"./UploadFotoForm-Dj9MANMp.js";import{u as L}from"./index.esm-BtDWs8yX.js";import{c as $,a as f,o as U}from"./index.esm-DRedFEuL.js";import{P as C}from"./Picture-D2MzxT-d.js";const D=({handleCheckGender:n,selectedGender:t,errorMessage:l,setErrorMessage:i})=>(o.useEffect(()=>{i("")},[t,i]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"addPet-icon-wrap",children:[e.jsx("div",{className:`addPet-icon woman ${t==="woman"?"active":""}`,onClick:()=>n("woman"),children:e.jsx(v,{name:"icon-female",className:`icon-woman ${t==="woman"?"active":""}`})}),e.jsx("div",{className:`addPet-icon man ${t==="man"?"active":""}`,onClick:()=>n("man"),children:e.jsx(v,{name:"icon-male",className:`icon-man ${t==="man"?"active":""}`})}),e.jsx("div",{className:`addPet-icon man-woman ${t==="man-woman"?"active":""}`,onClick:()=>n("man-woman"),children:e.jsx(v,{name:"icon-male-female",className:`icon-man-woman ${t==="man-woman"?"active":""}`})})]}),e.jsx("p",{className:"form-errors",children:l})]})),O=({petData:n,resetPetData:t,setErrorMessage:l})=>{var p,x,g,h;const i=S(),c=$({title:f().default(""),name:f().default(""),birthday:f().length(10).default(""),species:f().default("")}).required(),{register:r,handleSubmit:s,reset:j,formState:{errors:a}}=L({resolver:U(c)}),u=async d=>{if(!n.sex){l("Please select your pet's gender");return}const N={title:d.title,name:d.name,birthday:d.birthday,species:d.species,sex:n.sex,imgURL:n.imgURL};try{if(await i(R(N)),Object.keys(a).length!==0)return w.error("Something went wrong...");w.success("Your data is successfully updated"),j(),t()}catch{w.error("Something went wrong, please try again.")}};return e.jsxs("form",{onSubmit:s(u),children:[e.jsxs("div",{className:"wrap-input",children:[e.jsxs("div",{children:[e.jsx("input",{...r("title"),className:"input",placeholder:"Title"}),e.jsx("p",{className:"form-errors",children:(p=a.title)==null?void 0:p.message})]}),e.jsxs("div",{children:[e.jsx("input",{...r("name"),className:"input",placeholder:"Pet's Name"}),e.jsx("p",{className:"form-errors",children:(x=a.name)==null?void 0:x.message})]}),e.jsxs("div",{className:"add-mypet-input-wrap",children:[e.jsxs("div",{children:[e.jsx("input",{...r("birthday"),className:"input"}),e.jsx("p",{className:"form-errors",children:(g=a.birthday)==null?void 0:g.message})]}),e.jsxs("div",{children:[e.jsx("input",{...r("species"),className:"input"}),e.jsx("p",{className:"form-errors",children:(h=a.species)==null?void 0:h.message})]})]})]}),e.jsxs("div",{className:"my-pet-button-wrapper",children:[e.jsx(I,{to:"/profile",className:"form-button back",children:"Back"}),e.jsx("button",{type:"submit",className:"form-button submit",children:"Submit"})]})]})},q="/my-petlove/assets/image@1x-_fS8GYIq.png",B="/my-petlove/assets/image@2x-Ccy85Vjj.png",E="/my-petlove/assets/image@1x-Dazjq9GK.png",M="/my-petlove/assets/image@2x-BpOfkYDk.png",T="/my-petlove/assets/image@1x-DmknmZvO.png",Y="/my-petlove/assets/image@2x-C8aySFPT.png",_=()=>{const n=S(),[t,l]=o.useState(""),i=o.useRef(null),[c,r]=o.useState(null),[s,j]=o.useState(null),[a,u]=o.useState(null),[p,x]=o.useState(null),g=m=>{if(m instanceof File)u(null),r(null),j(m);else{const b=m.target.files;if(b&&b.length>0){const P=b[0];y(),r(P);const k=URL.createObjectURL(P);u(k)}}};o.useEffect(()=>(c&&(r(c),i.current&&(i.current.value="")),()=>{a&&URL.revokeObjectURL(a)}),[c,n,a]);const h=m=>{x(m)},d={sex:p,imgURL:c||s},N=()=>{u(null),r(null),y(),x(null)},y=()=>{j(null);const m=document.querySelector(".selected-file-input");m&&(m.value="")};return e.jsxs("section",{className:"add-pet-section",children:[e.jsx(C,{mob1x:q,mob2x:B,tab1x:T,tab2x:Y,desk1x:E,desk2x:M,alt:"dog",className:"addPet-img"}),e.jsxs("div",{className:"addPet-background",children:[e.jsxs("h2",{className:"addPet-title",children:["Add my pet/ ",e.jsx("span",{children:"Personal details"})]}),e.jsx(D,{handleCheckGender:h,selectedGender:p,errorMessage:t,setErrorMessage:l}),e.jsx("div",{className:"pet-avatar",children:a&&!(s!=null&&s.name)?e.jsx("img",{src:a,alt:(c==null?void 0:c.name)??"Pet avatar",className:"icon-pet-avatar"}):!a&&(s!=null&&s.name)?e.jsx("img",{src:s==null?void 0:s.name,alt:(s==null?void 0:s.name)??"Pet avatar",className:"icon-pet-avatar"}):e.jsx(v,{name:"icon-paw",className:"icon-pet-avatar"})}),e.jsx("div",{className:"img-wrap card-info-modal profile",children:e.jsx(F,{onChange:g,ref:i,isModal:!0})}),e.jsx(O,{petData:d,resetPetData:N,setErrorMessage:l})]})]})};export{_ as default};
