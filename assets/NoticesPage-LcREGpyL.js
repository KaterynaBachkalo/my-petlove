import{e as L,m as _,j as e,I as p,L as W,r,n as H,N as z,u as B,o as J,p as X,q as Y,f as I,t as Z,v as Q,w as ee,x as se,y as te}from"./index-CMsq0RDT.js";import{a as K,F as ae,P as ne}from"./Pagination-DhTRdnnO.js";import{u as ce,C as oe}from"./index.esm-XKP1B_gv.js";import{c as ie,a as F,o as le}from"./index.esm-BiYeHIWb.js";const re=({data:s,addToFavorite:c,deleteFavorite:a})=>{const{title:o,imgURL:i,popularity:n,name:t,birthday:d,sex:x,species:j,category:l,comment:u,_id:f}=s,g=L(_).favorites;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"notices-card-top",children:[e.jsxs("div",{className:"img-wrap card-info-modal",children:[e.jsx("img",{src:i,alt:o,className:"card-info-modal-img"}),e.jsx("p",{className:"card-info-modal-category",children:l.charAt(0).toUpperCase()+l.slice(1).toLowerCase()})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"notices-title card-info-modal",children:o}),e.jsxs("div",{className:"notices-icon-wrap card-info-modal",children:[e.jsx(p,{className:"icon-star",name:"star"}),e.jsx("p",{className:"notices-popularity",children:n})]})]}),e.jsxs("div",{className:"notices-text-wrapper card-info-modal",children:[e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Name"}),e.jsx("p",{children:t})]}),e.jsxs("div",{className:"notices-text-wrap card-info-modal",children:[e.jsx("p",{className:"notices-title-text",children:"Birthday"}),e.jsx("p",{children:K(d)})]}),e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Sex"}),e.jsx("p",{children:x})]}),e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Species"}),e.jsx("p",{children:j})]})]}),e.jsx("p",{className:"notices-text card-info-modal",children:u})]}),e.jsxs("div",{className:"card-info-modal-wrap",children:[f&&g.includes(f)?e.jsxs("div",{className:"notices-button card-info-modal",onClick:a,children:[e.jsx("button",{type:"button",className:"card-info-modal-add-to",children:"Delete"}),e.jsx(p,{className:"icon-heart card-info-modal",name:"icon-heart-circle"})]}):e.jsxs("div",{className:"notices-button card-info-modal",onClick:c,children:[e.jsx("button",{type:"button",className:"card-info-modal-add-to",children:"Add to"}),e.jsx(p,{className:"icon-heart card-info-modal",name:"heart"})]}),e.jsx(W,{to:"",className:"card-info-modal-contact",children:"Contact"})]})]})},de=(s,c,a)=>{r.useEffect(()=>{const o=n=>{n.code==="Escape"&&s(!1)},i=n=>{c.current&&!c.current.contains(n.target)&&s(!1)};return window.addEventListener("keydown",o),document.addEventListener("mousedown",i),document.body.classList.add("body-scroll-lock"),()=>{window.removeEventListener("keydown",o),document.removeEventListener("mousedown",i),document.body.classList.remove("body-scroll-lock")}},[s,c,a])},A=document.querySelector("#root-modal"),O=({onClose:s,children:c})=>{const a=r.useRef(null);return de(s,a),A&&H.createPortal(e.jsx("div",{className:"modal-backdrop",children:e.jsx("div",{className:"modal-container",children:e.jsxs("div",{className:"modal",ref:a,onClick:o=>o.stopPropagation(),children:[e.jsx("button",{className:"modal-btnClose",onClick:()=>s(!1),children:e.jsx(p,{className:"modal-icon",name:"close",width:18,height:18})}),e.jsx("div",{children:c})]})})}),A)},me=({data:s})=>{const{title:c,imgURL:a}=s;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"notices-card-top",children:[e.jsx("div",{className:"img-wrap card-info-modal",children:e.jsx("img",{src:a,alt:c,className:"card-info-modal-img"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"unauth-info-modal-title",children:"Attention"}),e.jsx("p",{className:"unauth-info-modal-text",children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."})]})]}),e.jsx("div",{className:"card-info-modal-wrap",children:e.jsxs("ul",{className:"header-auth-list",children:[e.jsx("li",{className:"header-link login",children:e.jsx(z,{to:"/login",children:e.jsx("p",{className:"menu-login",children:"Log in"})})}),e.jsx("li",{className:"header-link register",children:e.jsx(z,{to:"/register",children:e.jsx("p",{className:"menu-register",children:"Registration"})})})]})})]})},xe=({data:s})=>{const{title:c,imgURL:a,popularity:o,name:i,birthday:n,sex:t,species:d,category:x,comment:j,_id:l}=s,[u,f]=r.useState(!1),[v,g]=r.useState(!1),N=L(_),S=N.favorites,y=B(),k=()=>{f(!0),document.body.classList.add("body-scroll-lock")},C=()=>{f(!1),g(!1),document.body.classList.remove("body-scroll-lock")},w=()=>{N.email&&l?y(J(l)):(g(!0),document.body.classList.add("body-scroll-lock"))},b=()=>{N.email&&l?y(X(l)):(g(!0),document.body.classList.add("body-scroll-lock"))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"notices-card",children:[e.jsxs("div",{className:"notices-card-top",children:[e.jsx("img",{src:a,alt:c,className:"notices-img"}),e.jsxs("div",{className:"notices-title-wrap",children:[e.jsx("h3",{className:"notices-title",children:c}),e.jsxs("div",{className:"notices-icon-wrap",children:[e.jsx(p,{className:"icon-star",name:"star"}),e.jsx("p",{className:"notices-popularity",children:o})]})]}),e.jsxs("div",{className:"notices-text-wrapper",children:[e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Name"}),e.jsx("p",{children:i})]}),e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Birthday"}),e.jsx("p",{children:K(n)})]}),e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Sex"}),e.jsx("p",{children:t})]}),e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Species"}),e.jsx("p",{children:d})]}),e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Category"}),e.jsx("p",{children:x})]})]}),e.jsx("p",{className:"notices-text",children:j})]}),e.jsxs("div",{className:"notices-button-wrap",children:[e.jsx("button",{type:"button",className:"notices-button",onClick:k,children:"Read more"}),l&&S.includes(l)?e.jsx("div",{className:"notices-add-favorite",onClick:b,children:e.jsx(p,{className:"icon-heart",name:"icon-heart-circle"})}):e.jsx("div",{className:"notices-add-favorite",onClick:w,children:e.jsx(p,{className:"icon-heart",name:"heart"})})]})]}),u&&e.jsx(O,{onClose:C,children:e.jsx(re,{data:s,addToFavorite:w,deleteFavorite:b},l)}),v&&e.jsx(O,{onClose:C,children:e.jsx(me,{data:s},l)})]})},ue=(s,c,a)=>{r.useEffect(()=>{const o=n=>{n.code==="Escape"&&s(!1)},i=n=>{c.current&&!c.current.contains(n.target)&&(a!=null&&a.current)&&!(a!=null&&a.current.contains(n.target))&&s(!1)};return window.addEventListener("keydown",o),document.addEventListener("mousedown",i),()=>{window.removeEventListener("keydown",o),document.removeEventListener("mousedown",i)}},[s,c,a])},M=Y.forwardRef(({onSelect:s,onClose:c,data:a},o)=>{const i=d=>{s(d)},n=()=>{s("")},t=r.useRef(null);return ue(c,t,o),e.jsx("div",{className:"menu-modal",children:e.jsx("div",{className:"menu-modal-container",children:e.jsxs("ul",{className:"menu-categories-list",ref:t,children:[e.jsx("li",{className:"menu-categories-item",onClick:n,children:"Show all"}),a&&a.map(d=>e.jsx("li",{className:"menu-categories-item",onClick:()=>i(d),children:d},d))]})})})}),he=["sell","free","lost","found"],pe=["unknown","female","male","multiple"],je=["dog","cat","monkey","bird","snake","turtle","lizard","frog","fish","ants","bees","butterfly","spider","scorpion"],U=({placeholder:s,setSearchQuery:c})=>{const a=ie({category:F(),sex:F(),species:F()}).required(),{handleSubmit:o,control:i,setValue:n}=ce({resolver:le(a)}),t=B(),d=r.useRef(null),x=r.useRef(null),j=r.useRef(null),l=r.useRef(null),[u,f]=I(),[v,g]=r.useState(u.get("category")??""),[N,S]=r.useState(u.get("sex")??""),[y,k]=r.useState(u.get("species")??""),[C,w]=r.useState(!1),[b,P]=r.useState(!1),[D,E]=r.useState(!1),G=m=>{c(h=>({...h,...m})),q(m),t(Z(1))},V=()=>{s==="Category"?w(!C):s==="By gender"?P(!b):E(!D)},R=m=>{const h={};s==="Category"?(g(m),h.category=m||void 0):s==="By gender"?(S(m),h.sex=m||void 0):(k(m),h.species=m||void 0),w(!1),P(!1),E(!1),q(h),o(G)()},q=m=>{const h=new URLSearchParams(u);Object.entries(m).forEach(([T,$])=>{$?h.set(T,$):h.delete(T)}),f(h)};return r.useEffect(()=>{g(u.get("category")??""),S(u.get("sex")??""),k(u.get("species")??"")},[u]),r.useEffect(()=>{n("category",v||""),n("sex",N||""),n("species",y||"")},[v,N,y,n]),e.jsx("form",{onSubmit:o(G),ref:d,className:"form",children:e.jsxs("div",{className:`find-form-wrap ${s==="Category"||s==="By gender"?"category":s==="By type"?"type":""}`,children:[e.jsx(oe,{name:s==="Category"?"category":s==="By gender"?"sex":"species",control:i,render:({field:m})=>e.jsx("input",{...m,className:"input find-input",placeholder:s,value:s==="Category"?v:s==="By gender"?N:y})}),e.jsx("button",{type:"button",className:"find-form-button",onClick:V,ref:s==="Category"?x:s==="By gender"?j:l,children:e.jsx("div",{className:"find-form-icon",children:e.jsx(p,{name:"chevron-down",className:"icon-search"})})}),C&&e.jsx(M,{onSelect:R,onClose:()=>w(!1),ref:x,data:he}),b&&e.jsx(M,{onSelect:R,onClose:()=>P(!1),ref:j,data:pe}),D&&e.jsx(M,{onSelect:R,onClose:()=>E(!1),ref:l,data:je})]})})},ge=({setSearchQuery:s,text:c,isActive:a,onClick:o})=>{const i=()=>{s(n=>({...n,sort:a?"":c})),o()};return e.jsx("div",{className:"button-wrap",children:e.jsxs("button",{type:"submit",className:`sort-button ${a?"cross":""}`,onClick:i,children:[c,a&&e.jsx(p,{className:"icon-cross",name:"close"})]})})},fe=({setSearchQuery:s})=>{const[c,a]=I(),o=c.get("sort"),i=n=>{const t=o===n?"":n;s(x=>({...x,sort:t}));const d=new URLSearchParams(c);t?d.set("sort",t):d.delete("sort"),a(d)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"notices-form-wrap",children:[e.jsxs("div",{className:"notices-form-top",children:[e.jsx(ae,{setSearchQuery:s,placeholder:"Search"}),e.jsx(U,{setSearchQuery:s,placeholder:"Category"}),e.jsx(U,{setSearchQuery:s,placeholder:"By gender"}),e.jsx(U,{setSearchQuery:s,placeholder:"By type"})]}),e.jsx("div",{className:"notices-stroke"}),e.jsx("div",{className:"sort-button-wrap",children:["Popular","Unpopular","Cheap","Expensive"].map(n=>e.jsx(ge,{setSearchQuery:s,text:n,isActive:o===n.toLowerCase(),onClick:()=>i(n.toLowerCase())},n))})]})})},Ce=()=>{const s=L(Q),c=6,[a,o]=I();r.useEffect(()=>{a.has("page")||o({page:"1"})},[a,o]);const i=Number(a.get("page"))||1,n=L(ee),[t,d]=r.useState({title:a.get("title")||null,category:a.get("category")||null,sex:a.get("sex")||null,species:a.get("species")||null,sort:a.get("sort")||null}),x=B();r.useEffect(()=>{const l={page:i,limit:c,title:t!=null&&t.title?t.title:null,category:t!=null&&t.category?t.category:null,sex:t!=null&&t.sex?t.sex:null,species:t!=null&&t.species?t.species:null,sort:t!=null&&t.sort?t==null?void 0:t.sort:null};x(se()),x(te(l))},[i,x,t]);const j=l=>{o({page:String(l),...t.title&&{title:String(t.title)},...t.category&&{category:String(t.category)},...t.sex&&{sex:String(t.sex)},...t.species&&{species:String(t.species)}})};return e.jsxs("div",{className:"notices-container",children:[e.jsxs("div",{className:"notices-main-wrap",children:[e.jsx("h2",{className:"notices-main-title",children:"Find your favorite pet"}),e.jsx(fe,{setSearchQuery:d})]}),e.jsx("div",{className:"news-cards notices-cards",children:s&&s.length>0?s.map(l=>e.jsx(xe,{data:l},l._id)):e.jsx("p",{children:"There are news yet"})}),n&&e.jsx(ne,{totalItems:n,currentPage:i,onPageChange:j})]})};export{Ce as default};
