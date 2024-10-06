import{n as L,k as Xe,s as W,r as ve,c as se,h as ge,A as Fe,i as He}from"../chunks/scheduler.CQ9qRthI.js";import{G as Re,I as qe,J as We,K as Ze,S as Z,i as G,h as A,g as b,l as z,j as k,a as y,m as $e,d as h,b as d,e as Y,f as g,A as ce,s as K,c as J,v as S,t as R,w as X,k as q,D as le,x as N,n as ne,p as V,o as B,y as O,E as re,C as ae,F as Ce,q as Ge}from"../chunks/index.CsNcSv-F.js";import{p as fe,e as oe,u as pe,o as be,n as Ke,b as Je,a as Qe,d as et,g as tt,h as lt,s as nt}from"../chunks/stores.tHijDCIG.js";import{F as Oe,c as Ie}from"../chunks/categoryIcons.SyOjHA6m.js";import"../chunks/paths.B8OGWdA_.js";const st=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function rt(r,e,t,l){if(!e)return L;const n=r.getBoundingClientRect();if(e.left===n.left&&e.right===n.right&&e.top===n.top&&e.bottom===n.bottom)return L;const{delay:s=0,duration:a=300,easing:o=Xe,start:i=Re()+s,end:c=i+a,tick:f=L,css:p}=t(r,{from:e,to:n},l);let m=!0,u=!1,v;function T(){p&&(v=We(r,0,1,a,s,o,p)),s||(u=!0)}function $(){p&&Ze(r,v),m=!1}return qe(_=>{if(!u&&_>=i&&(u=!0),u&&_>=c&&(f(1,0),$()),!m)return!1;if(u){const D=_-i,j=0+1*o(D/a);f(j,1-j)}return!0}),T(),f(0,1),$}function at(r){const e=getComputedStyle(r);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:l}=e,n=r.getBoundingClientRect();r.style.position="absolute",r.style.width=t,r.style.height=l,ot(r,n)}}function ot(r,e){const t=r.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const l=getComputedStyle(r),n=l.transform==="none"?"":l.transform;r.style.transform=`${n} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}function it(r){const e=r-1;return e*e*e+1}const ct=!0,Il=Object.freeze(Object.defineProperty({__proto__:null,prerender:ct},Symbol.toStringTag,{value:"Module"})),{document:ft}=st;function ut(r){let e,t,l,n="Back to top",s,a;return{c(){e=A(),t=b("div"),l=b("button"),l.textContent=n,this.h()},l(o){e=z(o),t=k(o,"DIV",{class:!0});var i=y(t);l=k(i,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),$e(l)!=="svelte-1uhjlnn"&&(l.textContent=n),i.forEach(h),this.h()},h(){d(l,"id","backToTop"),d(l,"class","btn !py-2 !px-4 text-sm md:text-base svelte-jr6w1a"),d(t,"class","flex justify-center mt-4 mb-2")},m(o,i){Y(o,e,i),Y(o,t,i),g(t,l),s||(a=[ce(ft,"scroll",ht),ce(l,"click",dt)],s=!0)},p:L,i:L,o:L,d(o){o&&(h(e),h(t)),s=!1,ve(a)}}}function dt(){window.scrollTo({top:0,left:0,behavior:"smooth"})}function ht(r){const e=document.getElementById("backToTop"),t=document.documentElement;let l=t.scrollHeight-t.clientHeight;window.scrollY>600&&t.scrollTop/l>.6?e.classList.add("showBtn"):e.classList.remove("showBtn")}class mt extends Z{constructor(e){super(),G(this,e,null,ut,W,{})}}function gt(r){let e,t,l,n,s,a;return{c(){e=K("svg"),t=K("g"),l=K("path"),n=K("defs"),s=K("clipPath"),a=K("path"),this.h()},l(o){e=J(o,"svg",{width:!0,viewBox:!0,class:!0});var i=y(e);t=J(i,"g",{});var c=y(t);l=J(c,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),y(l).forEach(h),c.forEach(h),n=J(i,"defs",{});var f=y(n);s=J(f,"clipPath",{id:!0});var p=y(s);a=J(p,"path",{d:!0}),y(a).forEach(h),p.forEach(h),f.forEach(h),i.forEach(h),this.h()},h(){d(l,"stroke-linecap","round"),d(l,"stroke-linejoin","round"),d(l,"stroke-width","2.5"),d(l,"d","m7 7 10 10M7 17 17 7"),d(a,"d","M0 0h24v24H0z"),d(s,"id","a"),d(e,"width","28"),d(e,"viewBox","0 0 24 24"),d(e,"class","svelte-x43ij4")},m(o,i){Y(o,e,i),g(e,t),g(t,l),g(e,n),g(n,s),g(s,a)},p:L,i:L,o:L,d(o){o&&h(e)}}}class pt extends Z{constructor(e){super(),G(this,e,null,gt,W,{})}}function _t(r){let e,t,l,n,s,a=r[2].name+"",o,i,c,f,p,m,u=r[2].description+"",v,T,$,_=r[2].url+"",D,j,M,C,w;return l=new Oe({props:{dle:r[2]}}),f=new pt({}),{c(){e=b("div"),t=b("div"),S(l.$$.fragment),n=A(),s=b("div"),o=R(a),i=A(),c=b("button"),S(f.$$.fragment),p=A(),m=b("div"),v=R(u),T=A(),$=b("a"),D=R(_),this.h()},l(E){e=k(E,"DIV",{class:!0,style:!0});var I=y(e);t=k(I,"DIV",{class:!0});var x=y(t);X(l.$$.fragment,x),n=z(x),s=k(x,"DIV",{class:!0});var U=y(s);o=q(U,a),U.forEach(h),i=z(x),c=k(x,"BUTTON",{});var H=y(c);X(f.$$.fragment,H),H.forEach(h),x.forEach(h),p=z(I),m=k(I,"DIV",{class:!0});var Q=y(m);v=q(Q,u),Q.forEach(h),T=z(I),$=k(I,"A",{href:!0,target:!0,class:!0});var ie=y($);D=q(ie,_),ie.forEach(h),I.forEach(h),this.h()},h(){d(s,"class","text-center text-xl font-bold"),d(t,"class","flex justify-around items-start gap-2"),d(m,"class","text-center text-base text-colorTextSoft"),d($,"href",j=r[2].url),d($,"target","_blank"),d($,"class","svelte-1f9a514"),d(e,"class","dlePopUp svelte-1f9a514"),le(e,"left",r[0]+"px"),le(e,"top",r[1]+"px"),le(e,"width",de+"px")},m(E,I){Y(E,e,I),g(e,t),N(l,t,null),g(t,n),g(t,s),g(s,o),g(t,i),g(t,c),N(f,c,null),g(e,p),g(e,m),g(m,v),g(e,T),g(e,$),g($,D),M=!0,C||(w=ce(c,"click",r[3]),C=!0)},p(E,[I]){const x={};I&4&&(x.dle=E[2]),l.$set(x),(!M||I&4)&&a!==(a=E[2].name+"")&&ne(o,a),(!M||I&4)&&u!==(u=E[2].description+"")&&ne(v,u),(!M||I&4)&&_!==(_=E[2].url+"")&&ne(D,_),(!M||I&4&&j!==(j=E[2].url))&&d($,"href",j),(!M||I&1)&&le(e,"left",E[0]+"px"),(!M||I&2)&&le(e,"top",E[1]+"px")},i(E){M||(V(l.$$.fragment,E),V(f.$$.fragment,E),M=!0)},o(E){B(l.$$.fragment,E),B(f.$$.fragment,E),M=!1},d(E){E&&h(e),O(l),O(f),C=!1,w()}}}let de=310;function vt(r,e,t){let l;se(r,fe,f=>t(5,l=f));let{dle:n,pageX:s,pageY:a,clientY:o}=e,i=30+2*8+2*12+Math.floor(Math.ceil(28*n.name.length)/10)+Math.floor(Math.ceil(24*n.description.length)/26)+Math.floor(Math.ceil(24*n.url.length)/26);s<de/2&&(s=de/2+5),s+de/2>document.documentElement.clientWidth&&(s=document.documentElement.clientWidth-de/2-5),o<i&&(a+=i-o);function c(){ge(fe,l="",l)}return r.$$set=f=>{"dle"in f&&t(2,n=f.dle),"pageX"in f&&t(0,s=f.pageX),"pageY"in f&&t(1,a=f.pageY),"clientY"in f&&t(4,o=f.clientY)},[s,a,n,c,o]}class $t extends Z{constructor(e){super(),G(this,e,vt,_t,W,{dle:2,pageX:0,pageY:1,clientY:4})}}function bt(r){let e,t,l,n;return{c(){e=K("svg"),t=K("g"),l=K("path"),n=K("path"),this.h()},l(s){e=J(s,"svg",{fill:!0,viewBox:!0,height:!0,class:!0});var a=y(e);t=J(a,"g",{});var o=y(t);l=J(o,"path",{fill:!0,d:!0}),y(l).forEach(h),n=J(o,"path",{d:!0}),y(n).forEach(h),o.forEach(h),a.forEach(h),this.h()},h(){d(l,"fill","none"),d(l,"d","M0 0h48v48H0z"),d(n,"d","M44 14H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2ZM17.3 29h-2.5l-3-5-.7-1.3V29H8.7V19h2.5l3 5 .6 1.3h.1s-.1-1.2-.1-1.6V19h2.5Zm9.1 0h-7.7V19h7.6v2h-5.1v1.8h4.4v2h-4.4v2.1h5.2Zm10.9 0h-2.5l-1-4.8c-.2-.8-.4-1.9-.4-1.9s-.2 1.1-.3 1.9L32 29h-2.4l-2.8-10h2.5l1 4.2a20.1 20.1 0 0 1 .5 2.5l.5-2.4 1-4.3h2.3l.9 4.3.5 2.4.5-2.5 1-4.2H40Z"),d(e,"fill","currentColor"),d(e,"viewBox","0 12 48 24"),d(e,"height","18"),d(e,"class","svelte-1viggjg")},m(s,a){Y(s,e,a),g(e,t),g(t,l),g(t,n)},p:L,i:L,o:L,d(s){s&&h(e)}}}class xe extends Z{constructor(e){super(),G(this,e,null,bt,W,{})}}function kt(r){const e=t=>{r&&!r.contains(t.target)&&!t.defaultPrevented&&r.dispatchEvent(new CustomEvent("click_outside",r))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function yt(r){let e,t,l="Latest updates",n,s,a,o;return s=new xe({}),{c(){e=b("p"),t=b("strong"),t.textContent=l,n=R(`: Fixed link to Colorfle. Added 19 new dles,
  look for the `),S(s.$$.fragment),a=R(" tag to find them!"),this.h()},l(i){e=k(i,"P",{class:!0});var c=y(e);t=k(c,"STRONG",{"data-svelte-h":!0}),$e(t)!=="svelte-1rv8j3x"&&(t.textContent=l),n=q(c,`: Fixed link to Colorfle. Added 19 new dles,
  look for the `),X(s.$$.fragment,c),a=q(c," tag to find them!"),c.forEach(h),this.h()},h(){d(e,"class","p-3 text-center text-sm md:p-2 md:text-base")},m(i,c){Y(i,e,c),g(e,t),g(e,n),N(s,e,null),g(e,a),o=!0},p:L,i(i){o||(V(s.$$.fragment,i),o=!0)},o(i){B(s.$$.fragment,i),o=!1},d(i){i&&h(e),O(s)}}}class Ue extends Z{constructor(e){super(),G(this,e,null,yt,W,{})}}function Ve(r,e,t){const l=r.slice();return l[14]=e[t],l[16]=t,l}function Be(r,e,t){const l=r.slice();return l[17]=e[t],l[19]=t,l}function Me(r){let e,t;return e=new xe({}),{c(){S(e.$$.fragment)},l(l){X(e.$$.fragment,l)},m(l,n){N(e,l,n),t=!0},i(l){t||(V(e.$$.fragment,l),t=!0)},o(l){B(e.$$.fragment,l),t=!1},d(l){O(e,l)}}}function je(r){let e,t,l,n,s;return t=new $t({props:{dle:r[17],pageX:r[0],pageY:r[1],clientY:r[2]}}),{c(){e=b("div"),S(t.$$.fragment)},l(a){e=k(a,"DIV",{});var o=y(e);X(t.$$.fragment,o),o.forEach(h)},m(a,o){Y(a,e,o),N(t,e,null),l=!0,n||(s=[Fe(kt.call(null,e)),ce(e,"click_outside",r[10])],n=!0)},p(a,o){const i={};o&80&&(i.dle=a[17]),o&1&&(i.pageX=a[0]),o&2&&(i.pageY=a[1]),o&4&&(i.clientY=a[2]),t.$set(i)},i(a){l||(V(t.$$.fragment,a),l=!0)},o(a){B(t.$$.fragment,a),l=!1},d(a){a&&h(e),O(t),n=!1,ve(s)}}}function Ae(r,e){let t,l,n,s=e[17].name+"",a,o,i=e[7](e[17]),c,f,p,m,u;function v(..._){return e[12](e[17],..._)}let T=i&&Me(),$=e[3]===e[17].name&&je(e);return{key:r,first:null,c(){t=b("li"),l=b("div"),n=b("button"),a=R(s),o=A(),T&&T.c(),c=A(),$&&$.c(),f=A(),this.h()},l(_){t=k(_,"LI",{class:!0});var D=y(t);l=k(D,"DIV",{class:!0});var j=y(l);n=k(j,"BUTTON",{class:!0});var M=y(n);a=q(M,s),o=z(M),M.forEach(h),T&&T.l(j),j.forEach(h),c=z(D),$&&$.l(D),f=z(D),D.forEach(h),this.h()},h(){d(n,"class","dleName svelte-1721uy0"),d(l,"class","dleTop svelte-1721uy0"),d(t,"class","dleContainer svelte-1721uy0"),this.first=t},m(_,D){Y(_,t,D),g(t,l),g(l,n),g(n,a),g(n,o),T&&T.m(l,null),g(t,c),$&&$.m(t,null),g(t,f),p=!0,m||(u=ce(n,"click",v),m=!0)},p(_,D){e=_,(!p||D&80)&&s!==(s=e[17].name+"")&&ne(a,s),D&80&&(i=e[7](e[17])),i?T?D&80&&V(T,1):(T=Me(),T.c(),V(T,1),T.m(l,null)):T&&(re(),B(T,1,1,()=>{T=null}),ae()),e[3]===e[17].name?$?($.p(e,D),D&88&&V($,1)):($=je(e),$.c(),V($,1),$.m(t,f)):$&&(re(),B($,1,1,()=>{$=null}),ae())},i(_){p||(V(T),V($),p=!0)},o(_){B(T),B($),p=!1},d(_){_&&h(t),T&&T.d(),$&&$.d(),m=!1,u()}}}function ze(r,e){let t,l,n,s,a,o,i=e[14]+"",c,f,p,m,u=[],v=new Map,T,$;var _=Ie[e[14]];function D(C,w){return{}}_&&(a=Ce(_,D()));let j=oe(e[6][e[14]]);const M=C=>C[19];for(let C=0;C<j.length;C+=1){let w=Be(e,j,C),E=M(w);v.set(E,u[C]=Ae(E,w))}return{key:r,first:null,c(){t=b("div"),l=b("div"),n=b("div"),s=b("div"),a&&S(a.$$.fragment),o=A(),c=R(i),f=A(),p=b("div"),m=b("ol");for(let C=0;C<u.length;C+=1)u[C].c();T=A(),this.h()},l(C){t=k(C,"DIV",{class:!0});var w=y(t);l=k(w,"DIV",{class:!0,style:!0});var E=y(l);n=k(E,"DIV",{class:!0});var I=y(n);s=k(I,"DIV",{class:!0});var x=y(s);a&&X(a.$$.fragment,x),x.forEach(h),o=z(I),c=q(I,i),I.forEach(h),E.forEach(h),f=z(w),p=k(w,"DIV",{});var U=y(p);m=k(U,"OL",{class:!0});var H=y(m);for(let Q=0;Q<u.length;Q+=1)u[Q].l(H);H.forEach(h),U.forEach(h),T=z(w),w.forEach(h),this.h()},h(){d(s,"class","flex-shrink-0"),d(n,"class","label svelte-1721uy0"),d(l,"class","labelContainer svelte-1721uy0"),le(l,"background-color",e[5][e[14]]),d(m,"class","dleList"),d(t,"class","card svelte-1721uy0"),this.first=t},m(C,w){Y(C,t,w),g(t,l),g(l,n),g(n,s),a&&N(a,s,null),g(n,o),g(n,c),g(t,f),g(t,p),g(p,m);for(let E=0;E<u.length;E+=1)u[E]&&u[E].m(m,null);g(t,T),$=!0},p(C,w){if(e=C,w&16&&_!==(_=Ie[e[14]])){if(a){re();const E=a;B(E.$$.fragment,1,0,()=>{O(E,1)}),ae()}_?(a=Ce(_,D()),S(a.$$.fragment),V(a.$$.fragment,1),N(a,s,null)):a=null}(!$||w&16)&&i!==(i=e[14]+"")&&ne(c,i),(!$||w&48)&&le(l,"background-color",e[5][e[14]]),w&1247&&(j=oe(e[6][e[14]]),re(),u=pe(u,w,M,1,e,j,v,m,be,Ae,null,Be),ae())},i(C){if(!$){a&&V(a.$$.fragment,C);for(let w=0;w<j.length;w+=1)V(u[w]);$=!0}},o(C){a&&B(a.$$.fragment,C);for(let w=0;w<u.length;w+=1)B(u[w]);$=!1},d(C){C&&h(t),a&&O(a);for(let w=0;w<u.length;w+=1)u[w].d()}}}function wt(r){let e,t,l,n,s=[],a=new Map,o,i,c;t=new Ue({});let f=oe(r[4]);const p=m=>m[16];for(let m=0;m<f.length;m+=1){let u=Ve(r,f,m),v=p(u);a.set(v,s[m]=ze(v,u))}return{c(){e=A(),S(t.$$.fragment),l=A(),n=b("div");for(let m=0;m<s.length;m+=1)s[m].c();this.h()},l(m){e=z(m),X(t.$$.fragment,m),l=z(m),n=k(m,"DIV",{class:!0});var u=y(n);for(let v=0;v<s.length;v+=1)s[v].l(u);u.forEach(h),this.h()},h(){d(n,"class","dlesContainer svelte-1721uy0")},m(m,u){Y(m,e,u),N(t,m,u),Y(m,l,u),Y(m,n,u);for(let v=0;v<s.length;v+=1)s[v]&&s[v].m(n,null);o=!0,i||(c=[ce(window,"resize",r[8]),ce(document,"keyup",r[11])],i=!0)},p(m,[u]){u&1279&&(f=oe(m[4]),re(),s=pe(s,u,p,1,m,f,a,n,be,ze,null,Ve),ae())},i(m){if(!o){V(t.$$.fragment,m);for(let u=0;u<f.length;u+=1)V(s[u]);o=!0}},o(m){B(t.$$.fragment,m);for(let u=0;u<s.length;u+=1)B(s[u]);o=!1},d(m){m&&(h(e),h(l),h(n)),O(t,m);for(let u=0;u<s.length;u+=1)s[u].d();i=!1,ve(c)}}}function Et(r,e,t){let l,n,s,a,o;se(r,fe,_=>t(3,l=_)),se(r,Ke,_=>t(13,n=_)),se(r,Je,_=>t(4,s=_)),se(r,Qe,_=>t(5,a=_)),se(r,et,_=>t(6,o=_));let i=0,c=0,f=0;function p(_){return n.filter(D=>D.url===_.url).length===1}function m(){ge(fe,l="",l)}function u(_){_.key=="Escape"&&m()}function v(){m()}return[i,c,f,l,s,a,o,p,m,u,v,_=>u(_),(_,D)=>{l===_.name?ge(fe,l="",l):ge(fe,l=_.name,l),t(0,i=D.pageX),t(1,c=D.pageY),t(2,f=D.clientY)}]}class Tt extends Z{constructor(e){super(),G(this,e,Et,wt,W,{})}}function Dt(r,{from:e,to:t},l={}){const n=getComputedStyle(r),s=n.transform==="none"?"":n.transform,[a,o]=n.transformOrigin.split(" ").map(parseFloat),i=e.left+e.width*a/t.width-(t.left+a),c=e.top+e.height*o/t.height-(t.top+o),{delay:f=0,duration:p=u=>Math.sqrt(u)*120,easing:m=it}=l;return{delay:f,duration:He(p)?p(Math.sqrt(i*i+c*c)):p,easing:m,css:(u,v)=>{const T=v*i,$=v*c,_=u+v*e.width/t.width,D=u+v*e.height/t.height;return`transform: ${s} translate(${T}px, ${$}px) scale(${_}, ${D});`}}}const Ct="#dfa99f",It="#dfab9f",Vt="#dfae9f",Bt="#dfae9f",Mt="#dfc59f",jt="#cfdf9f",At="#cddf9f",zt="#c4df9f",Yt="#b3df9f",Pt="#b0df9f",Lt="#9fdfca",St="#9fdfd1",Nt="#9fdfd1",Ot="#9fdfd9",xt="#9fdfdc",Ut="#9fdfdf",Xt="#9fd4df",Ft="#9fbddf",Ht="#9fb8df",Rt="#9fb6df",qt="#a39fdf",Wt="#aa9fdf",Zt="#b19fdf",Gt="#b29fdf",Kt="#bd9fdf",Jt="#c29fdf",Qt="#c49fdf",el="#ce9fdf",tl="#d19fdf",ll="#da9fdf",nl="#df9fd2",sl="#df9fd2",Ye={archive:Ct,audio:It,baseball:Vt,basketball:Bt,colors:Mt,"fast-paced":"#d5df9f",flags:jt,football:At,geography:zt,history:Yt,hockey:Pt,logic:Lt,maps:St,math:Nt,movies:Ot,music:xt,nba:Ut,numbers:Xt,pictures:Ft,prices:Ht,puzzmo:Rt,roguelike:qt,science:Wt,soccer:Zt,sports:Gt,time:Kt,trivia:Jt,tv:Qt,unlimited:el,usa:tl,"video games":"#da9fdf",visual:ll,wordle:nl,words:sl};function rl(r){let e,t;return{c(){e=b("button"),t=R(r[0]),this.h()},l(l){e=k(l,"BUTTON",{class:!0,style:!0});var n=y(e);t=q(n,r[0]),n.forEach(h),this.h()},h(){d(e,"class","filterTag unselectable svelte-1rn8qnj"),le(e,"background-color",Ye[r[0]])},m(l,n){Y(l,e,n),g(e,t)},p(l,[n]){n&1&&ne(t,l[0]),n&1&&le(e,"background-color",Ye[l[0]])},i:L,o:L,d(l){l&&h(e)}}}function al(r,e,t){let{name:l}=e;return r.$$set=n=>{"name"in n&&t(0,l=n.name)},[l]}class ol extends Z{constructor(e){super(),G(this,e,al,rl,W,{name:0})}}function Pe(r,e,t){const l=r.slice();return l[1]=e[t],l[3]=t,l}function Le(r,e){let t,l,n,s,a=L,o;return l=new ol({props:{name:e[1]}}),{key:r,first:null,c(){t=b("div"),S(l.$$.fragment),n=A(),this.h()},l(i){t=k(i,"DIV",{});var c=y(t);X(l.$$.fragment,c),n=z(c),c.forEach(h),this.h()},h(){this.first=t},m(i,c){Y(i,t,c),N(l,t,null),g(t,n),o=!0},p(i,c){e=i;const f={};c&1&&(f.name=e[1]),l.$set(f)},r(){s=t.getBoundingClientRect()},f(){at(t),a()},a(){a(),a=rt(t,s,Dt,{})},i(i){o||(V(l.$$.fragment,i),o=!0)},o(i){B(l.$$.fragment,i),o=!1},d(i){i&&h(t),O(l)}}}function il(r){let e,t=[],l=new Map,n,s=oe(r[0]);const a=o=>o[3];for(let o=0;o<s.length;o+=1){let i=Pe(r,s,o),c=a(i);l.set(c,t[o]=Le(c,i))}return{c(){e=b("div");for(let o=0;o<t.length;o+=1)t[o].c();this.h()},l(o){e=k(o,"DIV",{class:!0});var i=y(e);for(let c=0;c<t.length;c+=1)t[c].l(i);i.forEach(h),this.h()},h(){d(e,"class","group svelte-v2fvv4")},m(o,i){Y(o,e,i);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);n=!0},p(o,[i]){if(i&1){s=oe(o[0]),re();for(let c=0;c<t.length;c+=1)t[c].r();t=pe(t,i,a,1,o,s,l,e,tt,Le,null,Pe);for(let c=0;c<t.length;c+=1)t[c].a();ae()}},i(o){if(!n){for(let i=0;i<s.length;i+=1)V(t[i]);n=!0}},o(o){for(let i=0;i<t.length;i+=1)B(t[i]);n=!1},d(o){o&&h(e);for(let i=0;i<t.length;i+=1)t[i].d()}}}function cl(r,e,t){let{tags:l}=e;return r.$$set=n=>{"tags"in n&&t(0,l=n.tags)},[l]}class fl extends Z{constructor(e){super(),G(this,e,cl,il,W,{tags:0})}}function ul(r){let e,t,l,n,s,a,o,i,c,f,p=r[1].name+"",m,u,v,T,$=r[1].description+"",_,D,j,M,C,w,E,I,x,U,H,Q="Play",ie,ee;return M=new fl({props:{tags:r[1].tags}}),I=new Oe({props:{dle:r[1]}}),{c(){e=b("div"),t=b("div"),l=b("div"),n=b("div"),s=b("span"),a=R(r[0]),o=R("."),i=A(),c=b("span"),f=b("a"),m=R(p),v=A(),T=b("div"),_=R($),D=A(),j=b("div"),S(M.$$.fragment),C=A(),w=b("div"),E=b("span"),S(I.$$.fragment),x=A(),U=b("a"),H=b("button"),H.textContent=Q,this.h()},l(P){e=k(P,"DIV",{class:!0});var F=y(e);t=k(F,"DIV",{class:!0});var te=y(t);l=k(te,"DIV",{class:!0});var ue=y(l);n=k(ue,"DIV",{class:!0});var he=y(n);s=k(he,"SPAN",{class:!0});var _e=y(s);a=q(_e,r[0]),o=q(_e,"."),_e.forEach(h),i=z(he),c=k(he,"SPAN",{class:!0});var ke=y(c);f=k(ke,"A",{href:!0,class:!0});var ye=y(f);m=q(ye,p),ye.forEach(h),ke.forEach(h),he.forEach(h),ue.forEach(h),v=z(te),T=k(te,"DIV",{class:!0});var we=y(T);_=q(we,$),we.forEach(h),D=z(te),j=k(te,"DIV",{class:!0});var Ee=y(j);X(M.$$.fragment,Ee),Ee.forEach(h),te.forEach(h),C=z(F),w=k(F,"DIV",{class:!0});var me=y(w);E=k(me,"SPAN",{class:!0});var Te=y(E);X(I.$$.fragment,Te),Te.forEach(h),x=z(me),U=k(me,"A",{class:!0,href:!0,target:!0,rel:!0});var De=y(U);H=k(De,"BUTTON",{class:!0,"data-svelte-h":!0}),$e(H)!=="svelte-1n1krum"&&(H.textContent=Q),De.forEach(h),me.forEach(h),F.forEach(h),this.h()},h(){d(s,"class","unselectable"),d(f,"href",u=r[1].url),d(f,"class","svelte-1j9d4zc"),d(c,"class","cardName svelte-1j9d4zc"),d(n,"class","cardLabel svelte-1j9d4zc"),d(l,"class","cardTop svelte-1j9d4zc"),d(T,"class","cardDescription svelte-1j9d4zc"),d(j,"class","mt-2"),d(t,"class","cardRows svelte-1j9d4zc"),d(E,"class","flex items-baseline"),d(H,"class","btn unselectable svelte-1j9d4zc"),d(U,"class","flex justify-center"),d(U,"href",ie=r[1].url),d(U,"target","_blank"),d(U,"rel","noopener"),d(w,"class","playButton svelte-1j9d4zc"),d(e,"class","card svelte-1j9d4zc")},m(P,F){Y(P,e,F),g(e,t),g(t,l),g(l,n),g(n,s),g(s,a),g(s,o),g(n,i),g(n,c),g(c,f),g(f,m),g(t,v),g(t,T),g(T,_),g(t,D),g(t,j),N(M,j,null),g(e,C),g(e,w),g(w,E),N(I,E,null),g(w,x),g(w,U),g(U,H),ee=!0},p(P,[F]){(!ee||F&1)&&ne(a,P[0]),(!ee||F&2)&&p!==(p=P[1].name+"")&&ne(m,p),(!ee||F&2&&u!==(u=P[1].url))&&d(f,"href",u),(!ee||F&2)&&$!==($=P[1].description+"")&&ne(_,$);const te={};F&2&&(te.tags=P[1].tags),M.$set(te);const ue={};F&2&&(ue.dle=P[1]),I.$set(ue),(!ee||F&2&&ie!==(ie=P[1].url))&&d(U,"href",ie)},i(P){ee||(V(M.$$.fragment,P),V(I.$$.fragment,P),ee=!0)},o(P){B(M.$$.fragment,P),B(I.$$.fragment,P),ee=!1},d(P){P&&h(e),O(M),O(I)}}}function dl(r,e,t){let{i:l}=e,{dle:n}=e;return r.$$set=s=>{"i"in s&&t(0,l=s.i),"dle"in s&&t(1,n=s.dle)},[l,n]}class hl extends Z{constructor(e){super(),G(this,e,dl,ul,W,{i:0,dle:1})}}function Se(r,e,t){const l=r.slice();return l[1]=e[t],l[3]=t,l}function Ne(r,e){let t,l,n,s;return l=new hl({props:{dle:e[1],i:e[3]+1}}),{key:r,first:null,c(){t=b("li"),S(l.$$.fragment),n=A(),this.h()},l(a){t=k(a,"LI",{class:!0});var o=y(t);X(l.$$.fragment,o),n=z(o),o.forEach(h),this.h()},h(){d(t,"class","svelte-t6xppm"),this.first=t},m(a,o){Y(a,t,o),N(l,t,null),g(t,n),s=!0},p(a,o){e=a;const i={};o&1&&(i.dle=e[1]),o&1&&(i.i=e[3]+1),l.$set(i)},i(a){s||(V(l.$$.fragment,a),s=!0)},o(a){B(l.$$.fragment,a),s=!1},d(a){a&&h(t),O(l)}}}function ml(r){let e,t,l,n=[],s=new Map,a;e=new Ue({});let o=oe(r[0]);const i=c=>c[3];for(let c=0;c<o.length;c+=1){let f=Se(r,o,c),p=i(f);s.set(p,n[c]=Ne(p,f))}return{c(){S(e.$$.fragment),t=A(),l=b("ol");for(let c=0;c<n.length;c+=1)n[c].c();this.h()},l(c){X(e.$$.fragment,c),t=z(c),l=k(c,"OL",{class:!0});var f=y(l);for(let p=0;p<n.length;p+=1)n[p].l(f);f.forEach(h),this.h()},h(){d(l,"class","mt-4 px-1 gap-2 grid grid-cols-1 lg:grid-cols-2")},m(c,f){N(e,c,f),Y(c,t,f),Y(c,l,f);for(let p=0;p<n.length;p+=1)n[p]&&n[p].m(l,null);a=!0},p(c,[f]){f&1&&(o=oe(c[0]),re(),n=pe(n,f,i,1,c,o,s,l,be,Ne,null,Se),ae())},i(c){if(!a){V(e.$$.fragment,c);for(let f=0;f<o.length;f+=1)V(n[f]);a=!0}},o(c){B(e.$$.fragment,c);for(let f=0;f<n.length;f+=1)B(n[f]);a=!1},d(c){c&&(h(t),h(l)),O(e,c);for(let f=0;f<n.length;f+=1)n[f].d()}}}function gl(r,e,t){let l;return se(r,lt,n=>t(0,l=n)),[l]}class pl extends Z{constructor(e){super(),G(this,e,gl,ml,W,{})}}function _l(r){let e,t;return e=new Tt({}),{c(){S(e.$$.fragment)},l(l){X(e.$$.fragment,l)},m(l,n){N(e,l,n),t=!0},i(l){t||(V(e.$$.fragment,l),t=!0)},o(l){B(e.$$.fragment,l),t=!1},d(l){O(e,l)}}}function vl(r){let e,t;return e=new pl({}),{c(){S(e.$$.fragment)},l(l){X(e.$$.fragment,l)},m(l,n){N(e,l,n),t=!0},i(l){t||(V(e.$$.fragment,l),t=!0)},o(l){B(e.$$.fragment,l),t=!1},d(l){O(e,l)}}}function $l(r){let e,t,l,n,s,a;const o=[vl,_l],i=[];function c(f,p){return f[0].view=="Detailed View"?0:f[0].view=="Category View"?1:-1}return~(e=c(r))&&(t=i[e]=o[e](r)),s=new mt({}),{c(){t&&t.c(),l=A(),n=A(),S(s.$$.fragment)},l(f){t&&t.l(f),l=z(f),n=z(f),X(s.$$.fragment,f)},m(f,p){~e&&i[e].m(f,p),Y(f,l,p),Y(f,n,p),N(s,f,p),a=!0},p(f,[p]){let m=e;e=c(f),e!==m&&(t&&(re(),B(i[m],1,1,()=>{i[m]=null}),ae()),~e?(t=i[e],t||(t=i[e]=o[e](f),t.c()),V(t,1),t.m(l.parentNode,l)):t=null)},i(f){a||(V(t),V(s.$$.fragment,f),a=!0)},o(f){B(t),B(s.$$.fragment,f),a=!1},d(f){f&&(h(l),h(n)),~e&&i[e].d(f),O(s,f)}}}function bl(r,e,t){let l;return se(r,nt,n=>t(0,l=n)),[l]}class kl extends Z{constructor(e){super(),G(this,e,bl,$l,W,{})}}function yl(r){let e,t,l,n,s,a,o,i,c,f,p,m;return p=new kl({}),{c(){e=b("meta"),t=b("meta"),l=b("meta"),n=b("meta"),s=b("meta"),a=b("meta"),o=b("meta"),i=b("meta"),c=b("meta"),f=A(),S(p.$$.fragment),this.h()},l(u){const v=Ge("svelte-1bzw8ih",document.head);e=k(v,"META",{name:!0,content:!0}),t=k(v,"META",{name:!0,content:!0}),l=k(v,"META",{name:!0,content:!0}),n=k(v,"META",{property:!0,content:!0}),s=k(v,"META",{property:!0,content:!0}),a=k(v,"META",{property:!0,content:!0}),o=k(v,"META",{property:!0,content:!0}),i=k(v,"META",{property:!0,content:!0}),c=k(v,"META",{property:!0,content:!0}),v.forEach(h),f=z(u),X(p.$$.fragment,u),this.h()},h(){document.title="The Dles - a curated collection of daily games.",d(e,"name","description"),d(e,"content","A curated collection of free daily games. Contains 200+ games, like Wordle, Connections, Bandle, and many more."),d(t,"name","keywords"),d(t,"content","list, collection, links, games, daily, dles, wordle, timeguessr, bandle, connections, gamedle, like wordle"),d(l,"name","author"),d(l,"content","aukspot"),d(n,"property","og:title"),d(n,"content","The DLES"),d(s,"property","og:site_name"),d(s,"content","The DLES"),d(a,"property","og:url"),d(a,"content","https://dles.aukspot.com"),d(o,"property","og:type"),d(o,"content","website"),d(i,"property","og:locale"),d(i,"content","en_US"),d(c,"property","og:description"),d(c,"content","A curated collection of dles, or free daily games. Contains 200+ games - like Wordle, Connections, Bandle, and many more.")},m(u,v){g(document.head,e),g(document.head,t),g(document.head,l),g(document.head,n),g(document.head,s),g(document.head,a),g(document.head,o),g(document.head,i),g(document.head,c),Y(u,f,v),N(p,u,v),m=!0},p:L,i(u){m||(V(p.$$.fragment,u),m=!0)},o(u){B(p.$$.fragment,u),m=!1},d(u){u&&h(f),h(e),h(t),h(l),h(n),h(s),h(a),h(o),h(i),h(c),O(p,u)}}}class Vl extends Z{constructor(e){super(),G(this,e,null,yl,W,{})}}export{Vl as component,Il as universal};
