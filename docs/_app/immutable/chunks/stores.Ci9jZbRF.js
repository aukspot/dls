import{o as H,p as x}from"./index.DfsuB0UP.js";import{r as C}from"./scheduler.rpD0R_so.js";import{r as _,w as t}from"./index.fKHkkzmM.js";function z(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function L(s,c){H(s,1,1,()=>{c.delete(s.key)})}function A(s,c){s.f(),L(s,c)}function N(s,c,D,P,G,m,d,T,y,V,r,b){let l=s.length,o=m.length,i=l;const g={};for(;i--;)g[s[i].key]=i;const h=[],u=new Map,p=new Map,M=[];for(i=o;i--;){const e=b(G,m,i),n=D(e);let a=d.get(n);a?M.push(()=>a.p(e,c)):(a=V(n,e),a.c()),u.set(n,h[i]=a),n in g&&p.set(n,Math.abs(i-g[n]))}const v=new Set,S=new Set;function w(e){x(e,1),e.m(T,r),d.set(e.key,e),r=e.first,o--}for(;l&&o;){const e=h[o-1],n=s[l-1],a=e.key,f=n.key;e===n?(r=e.first,l--,o--):u.has(f)?!d.has(a)||v.has(a)?w(e):S.has(f)?l--:p.get(a)>p.get(f)?(S.add(a),w(e)):(v.add(f),l--):(y(n,d),l--)}for(;l--;){const e=s[l];u.has(e.key)||y(e,d)}for(;o;)w(h[o-1]);return C(M),h}let Q=t([]),U=t([]),q=t([]),B=t([]),E=t({}),F=t([]),I=t(""),J=t({}),K=t([]),O=t(!1),R=t([]),X=t(""),Y=t(""),Z=t({}),$=_(["Geography/History","Math/Logic","Movies/TV","Music","Prices","Sports","Trivia","Video Games","Words","Miscellaneous"]),ee=_({"Geography/History":"hsl(0, 90%, 50%, 45%)","Math/Logic":"hsl(20, 90%, 50%, 45%)","Movies/TV":"hsl(40, 90%, 50%, 45%)",Music:"hsl(60, 90%, 50%, 45%)",Prices:"hsl(100, 90%, 50%, 45%)",Sports:"hsl(150, 90%, 50%, 45%)",Trivia:"hsl(200, 90%, 50%, 45%)","Video Games":"hsl(300, 90%, 50%, 45%)",Words:"hsl(340, 90%, 50%, 45%)",Miscellaneous:"hsl(0, 0%, 49%, 45%)"});export{ee as a,$ as b,F as c,Q as d,z as e,R as f,q as g,Z as h,O as i,B as j,E as k,Y as l,A as m,U as n,L as o,X as p,K as r,J as s,I as t,N as u};
