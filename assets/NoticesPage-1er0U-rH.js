import{e as L,m as O,j as e,I as g,L as V,N as z,r as l,u as B,M as A,n as W,o as H,p as J,f as I,q as X,t as Y,v as Z,w as Q,x as ee}from"./index-CQoEGn2e.js";import{a as _,F as se,P as te}from"./Pagination-CxHH0DFN.js";import{u as ae,C as ne}from"./index.esm-FrW_8Oox.js";import{c as ce,a as R,o as oe}from"./index.esm-EKkOh7Ar.js";const ie=({data:t,addToFavorite:c,deleteFavorite:a})=>{const{title:o,imgURL:r,popularity:n,name:s,birthday:d,sex:h,species:p,category:i,comment:m,_id:f}=t,j=L(O).favorites;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"notices-card-top",children:[e.jsxs("div",{className:"img-wrap card-info-modal",children:[e.jsx("img",{src:r,alt:o,className:"card-info-modal-img"}),e.jsx("p",{className:"card-info-modal-category",children:i.charAt(0).toUpperCase()+i.slice(1).toLowerCase()})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"notices-title card-info-modal",children:o}),e.jsxs("div",{className:"notices-icon-wrap card-info-modal",children:[e.jsx(g,{className:"icon-star",name:"star"}),e.jsx("p",{className:"notices-popularity",children:n})]})]}),e.jsxs("div",{className:"notices-text-wrapper card-info-modal",children:[e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Name"}),e.jsx("p",{children:s})]}),e.jsxs("div",{className:"notices-text-wrap card-info-modal",children:[e.jsx("p",{className:"notices-title-text",children:"Birthday"}),e.jsx("p",{children:_(d)})]}),e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Sex"}),e.jsx("p",{children:h})]}),e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Species"}),e.jsx("p",{children:p})]})]}),e.jsx("p",{className:"notices-text card-info-modal",children:m})]}),e.jsxs("div",{className:"card-info-modal-wrap",children:[f&&j.includes(f)?e.jsxs("div",{className:"notices-button card-info-modal",onClick:a,children:[e.jsx("button",{type:"button",className:"card-info-modal-add-to",children:"Delete"}),e.jsx(g,{className:"icon-heart card-info-modal",name:"icon-heart-circle"})]}):e.jsxs("div",{className:"notices-button card-info-modal",onClick:c,children:[e.jsx("button",{type:"button",className:"card-info-modal-add-to",children:"Add to"}),e.jsx(g,{className:"icon-heart card-info-modal",name:"heart"})]}),e.jsx(V,{to:"",className:"card-info-modal-contact",children:"Contact"})]})]})},le=({data:t})=>{const{title:c,imgURL:a}=t;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"notices-card-top",children:[e.jsx("div",{className:"img-wrap card-info-modal",children:e.jsx("img",{src:a,alt:c,className:"card-info-modal-img"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"unauth-info-modal-title",children:"Attention"}),e.jsx("p",{className:"unauth-info-modal-text",children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."})]})]}),e.jsx("div",{className:"card-info-modal-wrap",children:e.jsxs("ul",{className:"header-auth-list",children:[e.jsx("li",{className:"header-link login",children:e.jsx(z,{to:"/login",children:e.jsx("p",{className:"menu-login",children:"Log in"})})}),e.jsx("li",{className:"header-link register",children:e.jsx(z,{to:"/register",children:e.jsx("p",{className:"menu-register",children:"Registration"})})})]})})]})},re=({data:t})=>{const{title:c,imgURL:a,popularity:o,name:r,birthday:n,sex:s,species:d,category:h,comment:p,_id:i}=t,[m,f]=l.useState(!1),[v,j]=l.useState(!1),N=L(O),b=N.favorites,y=B(),k=()=>{f(!0),document.body.classList.add("body-scroll-lock")},P=()=>{f(!1),document.body.classList.remove("body-scroll-lock")},C=()=>{j(!1),m||document.body.classList.remove("body-scroll-lock")},S=()=>{N.email&&i?y(W(i)):j(!0)},w=()=>{N.email&&i?y(H(i)):j(!0)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"notices-card",children:[e.jsxs("div",{className:"notices-card-top",children:[e.jsx("img",{src:a,alt:c,className:"notices-img"}),e.jsxs("div",{className:"notices-title-wrap",children:[e.jsx("h3",{className:"notices-title",children:c}),e.jsxs("div",{className:"notices-icon-wrap",children:[e.jsx(g,{className:"icon-star",name:"star"}),e.jsx("p",{className:"notices-popularity",children:o})]})]}),e.jsxs("div",{className:"notices-text-wrapper",children:[e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Name"}),e.jsx("p",{children:r})]}),e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Birthday"}),e.jsx("p",{children:_(n)})]}),e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Sex"}),e.jsx("p",{children:s})]}),e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Species"}),e.jsx("p",{children:d})]}),e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Category"}),e.jsx("p",{children:h})]})]}),e.jsx("p",{className:"notices-text",children:p})]}),e.jsxs("div",{className:"notices-button-wrap",children:[e.jsx("button",{type:"button",className:"notices-button",onClick:k,children:"Read more"}),i&&b.includes(i)?e.jsx("div",{className:"notices-add-favorite",onClick:w,children:e.jsx(g,{className:"icon-heart",name:"icon-heart-circle"})}):e.jsx("div",{className:"notices-add-favorite",onClick:S,children:e.jsx(g,{className:"icon-heart",name:"heart"})})]})]}),m&&e.jsx(A,{onClose:P,children:e.jsx(ie,{data:t,addToFavorite:S,deleteFavorite:w},i)}),v&&e.jsx(A,{onClose:C,children:e.jsx(le,{data:t},i)})]})},de=(t,c,a)=>{l.useEffect(()=>{const o=n=>{n.code==="Escape"&&t(!1)},r=n=>{c.current&&!c.current.contains(n.target)&&(a!=null&&a.current)&&!(a!=null&&a.current.contains(n.target))&&t(!1)};return window.addEventListener("keydown",o),document.addEventListener("mousedown",r),()=>{window.removeEventListener("keydown",o),document.removeEventListener("mousedown",r)}},[t,c,a])},U=J.forwardRef(({onSelect:t,onClose:c,data:a},o)=>{const r=d=>{t(d)},n=()=>{t("")},s=l.useRef(null);return de(c,s,o),e.jsx("div",{className:"menu-modal",children:e.jsx("div",{className:"menu-modal-container",children:e.jsxs("ul",{className:"menu-categories-list",ref:s,children:[e.jsx("li",{className:"menu-categories-item",onClick:n,children:"Show all"}),a&&a.map(d=>e.jsx("li",{className:"menu-categories-item",onClick:()=>r(d),children:d},d))]})})})}),me=["sell","free","lost","found"],xe=["unknown","female","male","multiple"],he=["dog","cat","monkey","bird","snake","turtle","lizard","frog","fish","ants","bees","butterfly","spider","scorpion"],E=({placeholder:t,setSearchQuery:c})=>{const a=ce({category:R(),sex:R(),species:R()}).required(),{handleSubmit:o,control:r,setValue:n}=ae({resolver:oe(a)}),s=B(),d=l.useRef(null),h=l.useRef(null),p=l.useRef(null),i=l.useRef(null),[m,f]=I(),[v,j]=l.useState(m.get("category")??""),[N,b]=l.useState(m.get("sex")??""),[y,k]=l.useState(m.get("species")??""),[P,C]=l.useState(!1),[S,w]=l.useState(!1),[D,F]=l.useState(!1),G=x=>{c(u=>({...u,...x})),T(x),s(X(1))},K=()=>{t==="Category"?C(!P):t==="By gender"?w(!S):F(!D)},M=x=>{const u={};t==="Category"?(j(x),u.category=x||void 0):t==="By gender"?(b(x),u.sex=x||void 0):(k(x),u.species=x||void 0),C(!1),w(!1),F(!1),T(u),o(G)()},T=x=>{const u=new URLSearchParams(m);Object.entries(x).forEach(([$,q])=>{q?u.set($,q):u.delete($)}),f(u)};return l.useEffect(()=>{j(m.get("category")??""),b(m.get("sex")??""),k(m.get("species")??"")},[m]),l.useEffect(()=>{n("category",v||""),n("sex",N||""),n("species",y||"")},[v,N,y,n]),e.jsx("form",{onSubmit:o(G),ref:d,className:"form",children:e.jsxs("div",{className:`find-form-wrap ${t==="Category"||t==="By gender"?"category":t==="By type"?"type":""}`,children:[e.jsx(ne,{name:t==="Category"?"category":t==="By gender"?"sex":"species",control:r,render:({field:x})=>e.jsx("input",{...x,className:"input find-input",placeholder:t,value:t==="Category"?v:t==="By gender"?N:y})}),e.jsx("button",{type:"button",className:"find-form-button",onClick:K,ref:t==="Category"?h:t==="By gender"?p:i,children:e.jsx("div",{className:"find-form-icon",children:e.jsx(g,{name:"chevron-down",className:"icon-search"})})}),P&&e.jsx(U,{onSelect:M,onClose:()=>C(!1),ref:h,data:me}),S&&e.jsx(U,{onSelect:M,onClose:()=>w(!1),ref:p,data:xe}),D&&e.jsx(U,{onSelect:M,onClose:()=>F(!1),ref:i,data:he})]})})},ue=({setSearchQuery:t,text:c,isActive:a,onClick:o})=>{const r=()=>{t(n=>({...n,sort:a?"":c})),o()};return e.jsx("div",{className:"button-wrap",children:e.jsxs("button",{type:"submit",className:`sort-button ${a?"cross":""}`,onClick:r,children:[c,a&&e.jsx(g,{className:"icon-cross",name:"close"})]})})},pe=({setSearchQuery:t})=>{const[c,a]=I(),o=c.get("sort"),r=n=>{const s=o===n?"":n;t(h=>({...h,sort:s}));const d=new URLSearchParams(c);s?d.set("sort",s):d.delete("sort"),a(d)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"notices-form-wrap",children:[e.jsxs("div",{className:"notices-form-top",children:[e.jsx(se,{setSearchQuery:t,placeholder:"Search"}),e.jsx(E,{setSearchQuery:t,placeholder:"Category"}),e.jsx(E,{setSearchQuery:t,placeholder:"By gender"}),e.jsx(E,{setSearchQuery:t,placeholder:"By type"})]}),e.jsx("div",{className:"notices-stroke"}),e.jsx("div",{className:"sort-button-wrap",children:["Popular","Unpopular","Cheap","Expensive"].map(n=>e.jsx(ue,{setSearchQuery:t,text:n,isActive:o===n.toLowerCase(),onClick:()=>r(n.toLowerCase())},n))})]})})},ve=()=>{const t=L(Y),c=6,[a,o]=I();l.useEffect(()=>{a.has("page")||o({page:"1"})},[a,o]);const r=Number(a.get("page"))||1,n=L(Z),[s,d]=l.useState({title:a.get("title")||null,category:a.get("category")||null,sex:a.get("sex")||null,species:a.get("species")||null,sort:a.get("sort")||null}),h=B();l.useEffect(()=>{const i={page:r,limit:c,title:s!=null&&s.title?s.title:null,category:s!=null&&s.category?s.category:null,sex:s!=null&&s.sex?s.sex:null,species:s!=null&&s.species?s.species:null,sort:s!=null&&s.sort?s==null?void 0:s.sort:null};h(Q()),h(ee(i))},[r,h,s]);const p=i=>{o({page:String(i),...s.title&&{title:String(s.title)},...s.category&&{category:String(s.category)},...s.sex&&{sex:String(s.sex)},...s.species&&{species:String(s.species)}})};return e.jsxs("div",{className:"notices-container",children:[e.jsxs("div",{className:"notices-main-wrap",children:[e.jsx("h2",{className:"notices-main-title",children:"Find your favorite pet"}),e.jsx(pe,{setSearchQuery:d})]}),e.jsx("div",{className:"news-cards notices-cards",children:t&&t.length>0?t.map(i=>e.jsx(re,{data:i},i._id)):e.jsx("p",{children:"There are news yet"})}),n&&e.jsx(te,{totalItems:n,currentPage:r,onPageChange:p})]})};export{ve as default};
