const C=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};C();function E(o){const{name:r,portrait:n,city:s,country:e,tagline:t,price:c}=o,u=`assets/photographers/${n}`;function p(){const l=document.createElement("article");function i(d,f="",h={},g="",m=l){const a=document.createElement(d);a.textContent=f,Object.entries(h).forEach(([y,O])=>{a.setAttribute(y,O)}),a.className=g,m.appendChild(a)}return i("img","",{src:u}),i("h2",r),i("div",`${s}, ${e}`),i("p",t),i("span",`${c}\u20AC/jour`),l}return{data:o,getUserCardDOM:p}}async function M(){const r=await(await fetch("../../data/photographers.json")).json(),{photographers:n}=r;return n}async function b(o){const r=document.querySelector(".photographer_section");o.forEach(n=>{const e=E(n).getUserCardDOM();r.appendChild(e)})}async function L(){const o=await M();b(o)}L();
