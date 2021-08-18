import{r as t,c as e,o,a,b as n,F as r,d as s,e as c,f as i,g as l,C as u,i as d,S as p,h as m,p as g,j as h,t as b,w as v,k as f,l as w}from"./vendor.25bc970e.js";const E=t({user:{},account:{}});const A={name:"App",setup:()=>({appState:e((()=>E))})},k=n("footer",null,[n("div",{class:"bg-dark text-light text-center p-4"}," Made with 💖 by CodeWorks ")],-1);A.render=function(t,e,c,i,l,u){const d=s("Navbar"),p=s("router-view");return o(),a(r,null,[n("header",null,[n(d)]),n("main",null,[n(p)]),k],64)};const T=window.location.origin.includes("localhost"),_=T?"http://localhost:3000":"";let C;const y={},O=function(t,e){if(!e||0===e.length)return t();if(void 0===C){const t=document.createElement("link").relList;C=t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(e.map((t=>{if(t in y)return;y[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const a=document.createElement("link");return a.rel=e?"stylesheet":C,e||(a.as="script",a.crossOrigin=""),a.href=t,document.head.appendChild(a),e?new Promise(((t,e)=>{a.addEventListener("load",t),a.addEventListener("error",e)})):void 0}))).then((()=>t()))};function x(t){return()=>function(t){switch(t){case"./pages/AboutPage.vue":return O((()=>import("./AboutPage.839368e6.js")),["/assets/AboutPage.839368e6.js","/assets/vendor.25bc970e.js"]);case"./pages/AccountPage.vue":return O((()=>import("./AccountPage.d3b4312a.js")),["/assets/AccountPage.d3b4312a.js","/assets/AccountPage.f3fa63f7.css","/assets/vendor.25bc970e.js"]);case"./pages/HomePage.vue":return O((()=>import("./HomePage.30fe14f1.js")),["/assets/HomePage.30fe14f1.js","/assets/HomePage.f6eb7c25.css","/assets/vendor.25bc970e.js"]);default:return Promise.reject(new Error("Unknown variable dynamic import: "+t))}}(`./pages/${t}.vue`)}const P=[{path:"/",name:"Home",component:x("HomePage")},{path:"/about",name:"About",component:x("AboutPage")},{path:"/account",name:"Account",component:x("AccountPage"),beforeEnter:l}],R=c({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:i(),routes:P});function S(t,e){if(T)console[t](`[${t}] :: ${(new Date).toLocaleTimeString()} :: `,...e);else{switch(t){case"log":case"assert":return}console[t](`[${t}] :: ${(new Date).toLocaleTimeString()} :: `,...e)}}const L={log(){S("log",arguments)},error(){S("error",arguments)},warn(){S("warn",arguments)},assert(){S("assert",arguments)},trace(){S("trace",arguments)}},D=u.create({baseURL:_,timeout:8e3});const H=new class{async getAccount(){try{const t=await D.get("/account");E.account=t.data}catch(t){L.error("HAVE YOU STARTED YOUR SERVER YET???",t)}}};let I=!1,N=[];const U="connected",j="authenticate",$="authenticated",B="error";const V=new class extends class{constructor(t=_){this.socket=d(t||_),this.on(U,this.onConnected).on($,this.onAuthenticated).on(B,this.onError)}on(t,e){return this.socket.on(t,e.bind(this)),this}onConnected(t){L.log("[SOCKET_CONNECTION]",t),I=!0}onAuthenticated(t){L.log("[SOCKET_AUTHENTICATED]",t);const e=[...N];N=[],e.forEach((t=>{this.emit(t.action,t.payload)}))}authenticate(t){this.socket.emit(j,t)}onError(t){L.error("[SOCKET_ERROR]",t)}emit(t,e){if(!I)return L.log("[ENQUEING_ACTION]",{action:t,payload:e}),N.push({action:t,payload:e});this.socket.emit(t,e)}}{constructor(){super(),this.on("error",this.onError)}onError(t){L.error("[SOCKET_ERROR]",t),class{static async confirm(t="Are you sure?",e="You won't be able to revert this!",o="warning",a="Yes, delete it!"){try{return!!(await p.fire({title:t,text:e,icon:o,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:a})).isConfirmed}catch(n){return!1}}static toast(t="Warning!",e="warning",o="top-end",a=3e3,n=!0){p.fire({title:t,icon:e,position:o,timer:a,timerProgressBar:n,toast:!0,showConfirmButton:!1})}}.toast(t.message,"error")}},Y=m({domain:"codeworksclassroom.auth0.com",clientId:"pOXw2OGv1LsYi7LEBmDF04RLkXQvldml",audience:"https://codeworksclassroom.com",useRefreshTokens:!0,onRedirectCallback:t=>{R.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}});async function W(t){if(!Y.isAuthenticated)return t;const e=1e3*Y.identity.exp,o=e<Date.now(),a=e<Date.now()+432e5;return o?await Y.loginWithPopup():a&&(await Y.getTokenSilently(),D.defaults.headers.authorization=Y.bearer,V.authenticate(Y.bearer)),t}Y.on(Y.AUTH_EVENTS.AUTHENTICATED,(async function(){D.defaults.headers.authorization=Y.bearer,D.interceptors.request.use(W),E.user=Y.user,await H.getAccount(),V.authenticate(Y.bearer)}));const K={setup:()=>({state:t({dropOpen:!1}),user:e((()=>E.user)),async login(){Y.loginWithPopup()},async logout(){Y.logout({returnTo:window.location.origin})}})},z=v("data-v-1fe0b358");g("data-v-1fe0b358");const q={class:"navbar navbar-expand-lg navbar-dark bg-dark"},F=n("div",{class:"d-flex flex-column align-items-center"},[n("img",{alt:"logo",src:"/assets/cw-logo.71baeadb.png",height:"45"})],-1),G=n("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[n("span",{class:"navbar-toggler-icon"})],-1),M={class:"collapse navbar-collapse",id:"navbarText"},Q={class:"navbar-nav mr-auto"},X={class:"nav-item"},J=f(" Home "),Z={class:"nav-item"},tt=f(" About "),et={class:"navbar-text"},ot={key:1,class:"dropdown"},at={class:"mx-3"},nt=n("div",{class:"list-group-item list-group-item-action hoverable"}," Account ",-1);h();const rt=z(((t,e,r,c,i,l)=>{const u=s("router-link");return o(),a("nav",q,[n(u,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:z((()=>[F])),_:1}),G,n("div",M,[n("ul",Q,[n("li",X,[n(u,{to:{name:"Home"},class:"nav-link"},{default:z((()=>[J])),_:1})]),n("li",Z,[n(u,{to:{name:"About"},class:"nav-link"},{default:z((()=>[tt])),_:1})])]),n("span",et,[c.user.isAuthenticated?(o(),a("div",ot,[n("div",{class:"dropdown-toggle",onClick:e[2]||(e[2]=t=>c.state.dropOpen=!c.state.dropOpen)},[n("img",{src:c.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,["src"]),n("span",at,b(c.user.name),1)]),n("div",{class:["dropdown-menu p-0 list-group w-100",{show:c.state.dropOpen}],onClick:e[4]||(e[4]=t=>c.state.dropOpen=!1)},[n(u,{to:{name:"Account"}},{default:z((()=>[nt])),_:1}),n("div",{class:"list-group-item list-group-item-action hoverable",onClick:e[3]||(e[3]=(...t)=>c.logout&&c.logout(...t))}," logout ")],2)])):(o(),a("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:e[1]||(e[1]=(...t)=>c.login&&c.login(...t))}," Login "))])])])}));K.render=rt,K.__scopeId="data-v-1fe0b358";var st=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});const ct=w(A);!function(t){const e={"./components/Navbar.vue":st};Object.entries(e).forEach((([e,o])=>{const a=o.name||e.substr(e.lastIndexOf("/")+1).replace(/\.\w+$/,"");t.component(a,o.default)}))}(ct),ct.use(R).mount("#app");export{E as A};
