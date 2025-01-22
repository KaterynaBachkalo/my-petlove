import{j as e,I as S,r as i,m as K,u as U,f as L,n as O,e as T,o as V,p as A,q as H,t as J}from"./index-CkgXPsW5.js";import{a as W,F as X,P as Y}from"./Pagination-CD8wkdXh.js";import{u as Z,C as _}from"./index.esm-DHHqYVzy.js";import{c as Q,a as R,o as ee}from"./index.esm-BqbGtGbx.js";const se=({title:t,imgURL:o,popularity:n,name:c,birthday:r,sex:a,species:s,category:l,comment:x})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"notices-card",children:[e.jsxs("div",{className:"notices-card-top",children:[e.jsx("img",{src:o,alt:t,className:"notices-img"}),e.jsxs("div",{className:"notices-title-wrap",children:[e.jsx("h3",{className:"notices-title",children:t}),e.jsxs("div",{className:"notices-icon-wrap",children:[e.jsx(S,{className:"icon-star",name:"star"}),e.jsx("p",{className:"notices-popularity",children:n})]})]}),e.jsxs("div",{className:"notices-text-wrapper",children:[e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Name"}),e.jsx("p",{children:c})]}),e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Birthday"}),e.jsx("p",{children:W(r)})]}),e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Sex"}),e.jsx("p",{children:a})]}),e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Species"}),e.jsx("p",{children:s})]}),e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Category"}),e.jsx("p",{children:l})]})]}),e.jsx("p",{className:"notices-text",children:x})]}),e.jsxs("div",{className:"notices-button-wrap",children:[e.jsx("button",{type:"button",className:"notices-button",children:"Read more"}),e.jsx("div",{className:"notices-add-favorite",children:e.jsx(S,{className:"icon-heart",name:"heart"})})]})]})}),te=(t,o,n)=>{i.useEffect(()=>{const c=a=>{a.code==="Escape"&&t(!1)},r=a=>{o.current&&!o.current.contains(a.target)&&(n!=null&&n.current)&&!(n!=null&&n.current.contains(a.target))&&t(!1)};return window.addEventListener("keydown",c),document.addEventListener("mousedown",r),()=>{window.removeEventListener("keydown",c),document.removeEventListener("mousedown",r)}},[t,o,n])},F=K.forwardRef(({onSelect:t,onClose:o,data:n},c)=>{const r=l=>{t(l)},a=()=>{t("")},s=i.useRef(null);return te(o,s,c),e.jsx("div",{className:"menu-modal",children:e.jsx("div",{className:"menu-modal-container",children:e.jsxs("ul",{className:"menu-categories-list",ref:s,children:[e.jsx("li",{className:"menu-categories-item",onClick:a,children:"Show all"}),n&&n.map(l=>e.jsx("li",{className:"menu-categories-item",onClick:()=>r(l),children:l},l))]})})})}),ne=["sell","free","lost","found"],ae=["unknown","female","male","multiple"],ce=["dog","cat","monkey","bird","snake","turtle","lizard","frog","fish","ants","bees","butterfly","spider","scorpion"],B=({placeholder:t,setSearchQuery:o})=>{const n=Q({category:R(),sex:R(),species:R()}).required(),{handleSubmit:c,control:r,setValue:a}=Z({resolver:ee(n)}),s=U(),l=i.useRef(null),x=i.useRef(null),f=i.useRef(null),p=i.useRef(null),[m,y]=L(),[g,N]=i.useState(m.get("category")??""),[j,w]=i.useState(m.get("sex")??""),[h,v]=i.useState(m.get("species")??""),[C,P]=i.useState(!1),[M,b]=i.useState(!1),[D,k]=i.useState(!1),G=d=>{o(u=>({...u,...d})),I(d),s(O(1))},z=()=>{t==="Category"?P(!C):t==="By gender"?b(!M):k(!D)},E=d=>{const u={};t==="Category"?(N(d),u.category=d||void 0):t==="By gender"?(w(d),u.sex=d||void 0):(v(d),u.species=d||void 0),P(!1),b(!1),k(!1),I(u),c(G)()},I=d=>{const u=new URLSearchParams(m);Object.entries(d).forEach(([$,q])=>{q?u.set($,q):u.delete($)}),y(u)};return i.useEffect(()=>{N(m.get("category")??""),w(m.get("sex")??""),v(m.get("species")??"")},[m]),i.useEffect(()=>{a("category",g||""),a("sex",j||""),a("species",h||"")},[g,j,h,a]),e.jsx("form",{onSubmit:c(G),ref:l,children:e.jsxs("div",{className:`find-form-wrap ${t==="Category"||t==="By gender"?"category":t==="By type"?"type":""}`,children:[e.jsx(_,{name:t==="Category"?"category":t==="By gender"?"sex":"species",control:r,render:({field:d})=>e.jsx("input",{...d,className:"input find-input",placeholder:t,value:t==="Category"?g:t==="By gender"?j:h})}),e.jsx("button",{type:"button",className:"find-form-button",onClick:z,ref:t==="Category"?x:t==="By gender"?f:p,children:e.jsx("div",{className:"find-form-icon",children:e.jsx(S,{name:"chevron-down",className:"icon-search"})})}),C&&e.jsx(F,{onSelect:E,onClose:()=>P(!1),ref:x,data:ne}),M&&e.jsx(F,{onSelect:E,onClose:()=>b(!1),ref:f,data:ae}),D&&e.jsx(F,{onSelect:E,onClose:()=>k(!1),ref:p,data:ce})]})})},oe=({setSearchQuery:t,text:o,isActive:n,onClick:c})=>{const r=()=>{t(a=>({...a,sort:n?"":o})),c()};return e.jsx("div",{className:"button-wrap",children:e.jsxs("button",{type:"submit",className:`sort-button ${n?"cross":""}`,onClick:r,children:[o,n&&e.jsx(S,{className:"icon-cross",name:"close"})]})})},ie=({setSearchQuery:t})=>{const[o,n]=L(),c=o.get("sort"),r=a=>{const s=c===a?"":a;t(x=>({...x,sort:s}));const l=new URLSearchParams(o);s?l.set("sort",s):l.delete("sort"),n(l)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"notices-form-wrap",children:[e.jsxs("div",{className:"notices-form-top",children:[e.jsx(X,{setSearchQuery:t,placeholder:"Search"}),e.jsx(B,{setSearchQuery:t,placeholder:"Category"}),e.jsx(B,{setSearchQuery:t,placeholder:"By gender"}),e.jsx(B,{setSearchQuery:t,placeholder:"By type"})]}),e.jsx("div",{className:"notices-stroke"}),e.jsx("div",{className:"sort-button-wrap",children:["Popular","Unpopular","Cheap","Expensive"].map(a=>e.jsx(oe,{setSearchQuery:t,text:a,isActive:c===a.toLowerCase(),onClick:()=>r(a.toLowerCase())},a))})]})})},xe=()=>{const t=T(V),o=6,[n,c]=L();i.useEffect(()=>{n.has("page")||c({page:"1"})},[n,c]);const r=Number(n.get("page"))||1,a=T(A),[s,l]=i.useState({title:n.get("title")||null,category:n.get("category")||null,sex:n.get("sex")||null,species:n.get("species")||null,sort:n.get("sort")||null}),x=U();i.useEffect(()=>{const p={page:r,limit:o,title:s!=null&&s.title?s.title:null,category:s!=null&&s.category?s.category:null,sex:s!=null&&s.sex?s.sex:null,species:s!=null&&s.species?s.species:null,sort:s!=null&&s.sort?s==null?void 0:s.sort:null};x(H()),x(J(p))},[r,x,s]);const f=p=>{c({page:String(p),...s.title&&{title:String(s.title)},...s.category&&{category:String(s.category)},...s.sex&&{sex:String(s.sex)},...s.species&&{species:String(s.species)}})};return e.jsxs("div",{className:"notices-container",children:[e.jsxs("div",{className:"notices-main-wrap",children:[e.jsx("h2",{className:"notices-main-title",children:"Find your favorite pet"}),e.jsx(ie,{setSearchQuery:l})]}),e.jsx("div",{className:"news-cards notices-cards",children:t&&t.length>0?t.map(({name:p,title:m,imgURL:y,species:g,birthday:N,sex:j,category:w,comment:h,popularity:v,price:C})=>e.jsx(se,{name:p,title:m,imgURL:y,species:g,birthday:N,sex:j,category:w,comment:h,popularity:v,price:C},m)):e.jsx("p",{children:"There are news yet"})}),a&&e.jsx(Y,{totalItems:a,currentPage:r,onPageChange:f})]})};export{xe as default};
