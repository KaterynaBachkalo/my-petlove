import{r as l,W as m,a as u,j as a}from"./index-CTbu2FOC.js";const p=(n,t,e)=>{l.useEffect(()=>{const c=s=>{s.code==="Escape"&&n(!1)},d=s=>{t.current&&!t.current.contains(s.target)&&(e!=null&&e.current)&&!(e!=null&&e.current.contains(s.target))&&n(!1)};return window.addEventListener("keydown",c),document.addEventListener("mousedown",d),()=>{window.removeEventListener("keydown",c),document.removeEventListener("mousedown",d)}},[n,t,e])},w=m.forwardRef(({onSelect:n,onClose:t,data:e},c)=>{const d=o=>{n(o)},s=()=>{n("")},i=l.useRef(null),r=u();return p(t,i,c),a.jsx("div",{className:`menu-modal ${r.pathname==="/add-pet"?"add":""}`,children:a.jsx("div",{className:"menu-modal-container",children:a.jsxs("ul",{className:"menu-categories-list",ref:i,children:[r.pathname!=="/add-pet"&&a.jsx("li",{className:"menu-categories-item",onClick:s,children:"Show all"}),e&&e.map(o=>a.jsx("li",{className:"menu-categories-item",onClick:()=>d(o),children:o},o))]})})})}),x=["dog","cat","monkey","bird","snake","turtle","lizard","frog","fish","ants","bees","butterfly","spider","scorpion"];export{w as M,x as t};
