import{r as i,o as a,h as l,g as t,F as d,i as p,j as v,k as y,l as m,m as k,p as x,q as g,s as h}from"./index-278be37e.js";import{_ as V}from"./helper.js";const w=s=>(x("data-v-2ff35622"),s=s(),g(),s),C={class:"box"},S={class:"content"},B={class:"messageBox"},D=w(()=>t("div",{class:"info add",style:{"--random":"5deg"}},[h(" 点击此处留下你宝贵的建议或者想要留下的话"),t("span",{style:{color:"red"}},"(本站不易请 不要打广告)")],-1)),I=["onClick"],E={__name:"index",setup(s){const r=i([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]);let o=i(!1);const f=e=>{o.value=!0};console.log(document.querySelector(".info")),window.addEventListener("keydown",e=>{e.key==="Escape"?n():e.key==="F12"||(e.key==="s"&&e.ctrlKey||e.key==="v"&&e.ctrlKey||e.key==="x"&&e.ctrlKey)&&(e.preventDefault(),e.returnValue=!1)});const n=()=>{o.value&&(o.value=!1)};return(e,c)=>(a(),l(d,null,[t("div",C,[t("div",S,[t("div",B,[D,(a(!0),l(d,null,p(r.value,(_,u)=>(a(),l("div",{class:"info",style:k({"--random":`${(u%2===1?1:-1)*5}deg`}),onClick:F=>f(),key:_},null,12,I))),128))])])]),v(o)?(a(),l("div",{key:0,class:"log",onClick:n},[t("div",{class:"panel",onClick:c[0]||(c[0]=y(()=>{},["stop"]))})])):m("",!0)],64))}},q=V(E,[["__scopeId","data-v-2ff35622"]]);export{q as default};