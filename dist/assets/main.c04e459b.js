import"./style.7f2dd081.js";function c(t,e,o="",s={},a=""){const r=document.createElement(e);r.textContent=o,Object.entries(s).forEach(([i,p])=>{r.setAttribute(i,p)}),r.className=a,t.appendChild(r)}function g(t){const{id:e,name:o,portrait:s,city:a,country:r,tagline:i,price:p}=t,h=`assets/images/${s}`;function d(){const n=document.createElement("article");c(n,"img","",{src:h,id:e}),c(n,"h2",o),c(n,"div",`${a}, ${r}`),c(n,"p",i),c(n,"span",`${p}\u20AC/jour`);const l=n.firstElementChild,u=()=>window.open("photographer.html","_blank");return l.addEventListener("click",u),n}return{data:t,getUserCardDOM:d}}async function m(){const e=await(await fetch("assets/photographers.json")).json(),{photographers:o}=e;return o}function f(t){const e=document.querySelector(".photographer_section");t.forEach(o=>{const a=g(o).getUserCardDOM();e.appendChild(a)})}async function y(){const t=await m();f(t)}y();
