import{s as C,n as $,c as L}from"../chunks/scheduler.BzRGDREP.js";import{S as M,i as T,e as h,p as x,s as H,a as d,b as g,q,h as m,d as y,g as j,j as b,k as z,l as n,r as S}from"../chunks/index.Uye3WLNH.js";import{s as D}from"../chunks/entry.BIhdL5s7.js";const I=()=>{const s=D;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return I().page.subscribe(s)}};function V(s){let e,a,r=s[0].status+"",i,v,l,u=s[0].error.message+"",p,_,c,f='Would you like to go <a href="/">home</a>?';return{c(){e=h("div"),a=h("h1"),i=x(r),v=H(),l=h("h2"),p=x(u),_=H(),c=h("p"),c.innerHTML=f,this.h()},l(o){e=d(o,"DIV",{class:!0});var t=g(e);a=d(t,"H1",{class:!0});var k=g(a);i=q(k,r),k.forEach(m),v=y(t),l=d(t,"H2",{class:!0});var E=g(l);p=q(E,u),E.forEach(m),_=y(t),c=d(t,"P",{"data-svelte-h":!0}),j(c)!=="svelte-1xrzvyq"&&(c.innerHTML=f),t.forEach(m),this.h()},h(){b(a,"class","svelte-1ck0k69"),b(l,"class","svelte-1ck0k69"),b(e,"class","svelte-1ck0k69")},m(o,t){z(o,e,t),n(e,a),n(a,i),n(e,v),n(e,l),n(l,p),n(e,_),n(e,c)},p(o,[t]){t&1&&r!==(r=o[0].status+"")&&S(i,r),t&1&&u!==(u=o[0].error.message+"")&&S(p,u)},i:$,o:$,d(o){o&&m(e)}}}function W(s,e,a){let r;return L(s,P,i=>a(0,r=i)),[r]}let F=class extends M{constructor(e){super(),T(this,e,W,V,C,{})}};export{F as component};
