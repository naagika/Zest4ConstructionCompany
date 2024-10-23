import './polyfills.server.mjs';
import{$ as X1,A as D1,B as b,C as Q,D as I1,E as B1,F as f,G as w,H as C2,I as H1,N as R1,Q as j1,R as U1,T as A2,U as P2,V as q1,W as W1,X as W,Y as G1,Z as V1,_ as Y1,a as G2,b as w1,c as y1,ca as $1,d as S,e as k1,f as v1,g as w2,h as y2,i as k2,ia as K1,j as A1,k as P1,l as T1,m as V2,n as O1,o as _1,p as N,q as F,r as F1,s as M2,t as E1,u as y,v as q,w as t,x as r,y as C,z as v2}from"./chunk-JB6KXORU.mjs";import{a as m,b as x}from"./chunk-5XUXGTUW.mjs";var T2=class c{menuOpen=!1;activeSection="";toggleMenu(){this.menuOpen=!this.menuOpen}closeMenuOnClickOutside(s){let l=s.target,e=document.querySelector(".burger-menu"),a=document.querySelector(".nav");this.menuOpen&&l!==e&&!e?.contains(l)&&!a?.contains(l)&&(this.menuOpen=!1)}onScroll(s){let l=document.querySelectorAll("section"),e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;l.forEach(a=>{e>=a.offsetTop-60&&e<a.offsetTop+a.offsetHeight-60&&(this.activeSection=a.getAttribute("id"))})}isActive(s){return this.activeSection===s}static \u0275fac=function(l){return new(l||c)};static \u0275cmp=S({type:c,selectors:[["app-header"]],hostBindings:function(l,e){l&1&&b("click",function(n){return e.closeMenuOnClickOutside(n)},!1,_1)("scroll",function(n){return e.onScroll(n)},!1,O1)},standalone:!0,features:[w],decls:27,vars:12,consts:[[1,"navbar"],["href","#home",1,"navbar-brand"],["src","assets/logo.jpeg","alt","Zest 4 Construction Logo",1,"logo"],[1,"burger-menu",3,"click"],[1,"container"],[1,"nav"],["href","#"],[1,"fas","fa-home"],["href","#services"],[1,"fas","fa-tools"],["href","#about-projects"],[1,"fas","fa-hard-hat"],["href","#testimonials"],[1,"fas","fa-comments"],["href","#contacts"],[1,"fas","fa-phone"]],template:function(l,e){l&1&&(t(0,"nav",0)(1,"a",1),C(2,"img",2),r(),t(3,"div",3),b("click",function(){return e.toggleMenu()}),f(4," \u2630 "),r(),t(5,"div",4)(6,"ul",5)(7,"li")(8,"a",6),C(9,"i",7),f(10," Home"),r()(),t(11,"li")(12,"a",8),C(13,"i",9),f(14," Services"),r()(),t(15,"li")(16,"a",10),C(17,"i",11),f(18," Projects"),r()(),t(19,"li")(20,"a",12),C(21,"i",13),f(22," Testimonials"),r()(),t(23,"li")(24,"a",14),C(25,"i",15),f(26," Contact"),r()()()()()),l&2&&(N(6),q("open",e.menuOpen),N(2),q("active",e.isActive("home")),N(4),q("active",e.isActive("services")),N(4),q("active",e.isActive("about-projects")),N(4),q("active",e.isActive("testimonials")),N(4),q("active",e.isActive("contacts")))},dependencies:[W],styles:[".logo[_ngcontent-%COMP%]{width:120px;height:auto;display:block;margin-left:30px}.navbar[_ngcontent-%COMP%]{position:fixed;top:0;width:100%;max-width:1920px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;padding:20px 30px;background-color:#fff;box-shadow:0 4px 6px #0000001a;z-index:1000}.navbar-brand[_ngcontent-%COMP%]{font-size:24px;font-weight:700;color:#f60;text-decoration:none;margin-right:35px}.nav[_ngcontent-%COMP%]{list-style:none;display:flex;gap:50px;margin:0 400px 0 0;padding:0}.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#1a1919;font-weight:500;transition:color .3s;font-size:18px}.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#f60}.nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#f60;font-weight:700}.burger-menu[_ngcontent-%COMP%]{display:none;font-size:24px;cursor:pointer;align-self:center;position:absolute;right:30px}@media (max-width: 768px){.nav[_ngcontent-%COMP%]{display:none;flex-direction:column;background-color:#fff;position:absolute;top:60px;margin-right:20px;right:0;width:200px;box-shadow:0 4px 6px #0000001a;padding:20px;z-index:px}.nav.open[_ngcontent-%COMP%]{display:flex}.burger-menu[_ngcontent-%COMP%]{display:block;position:absolute;right:90px}.nav-item[_ngcontent-%COMP%]{padding:10px 0}.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:20px;font-weight:700}}"]})};var i2=class c{redirectToYelp(){window.open("https://www.yelp.com/biz/zest-4-construction-san-jose-5","_blank")}static \u0275fac=function(l){return new(l||c)};static \u0275cmp=S({type:c,selectors:[["app-testimonials"]],standalone:!0,features:[w],decls:47,vars:0,consts:[["id","testimonials",1,"testimonials"],[1,"reviiew-container"],[1,"testimonial-container"],[1,"testimonial-column"],["src","assets/chengYu.png","alt",""],["src","assets/annie.png","alt",""],["src","assets/roberto.png","alt",""],["src","assets/josephine.png","alt",""],["src","assets/thomas.png","alt",""],["src","assets/vonn.png","alt",""],[1,"testimonial-column","hidden-on-mobile"],["src","assets/rv.png","alt",""],["src","assets/Divya.png","alt",""],["src","assets/Ken.png","alt",""],["src","assets/Neha.png","alt",""],[1,"yelp-button",3,"click"]],template:function(l,e){l&1&&(t(0,"section",0)(1,"h2"),f(2,"What Our Clients Say"),r(),t(3,"div",1)(4,"div",2)(5,"div",3),C(6,"img",4),t(7,"p"),f(8,`"This team just completed an exterior door installation for my house. I'd like to give them a call as best handyman service..."`),r()(),t(9,"div",3),C(10,"img",5),t(11,"p"),f(12,'"Ali showed up exactly at our scheduled time to replace my garbage disposal and fix a hole in my wall..."'),r()(),t(13,"div",3),C(14,"img",6),t(15,"p"),f(16,`"It's been around three years since I reviewed Zest4, so I think it is time for me to provide an update on how ..."`),r()(),t(17,"div",3),C(18,"img",7),t(19,"p"),f(20,"I reached out to them on Yelp and got a response/quote from Naku within the hour. She told me that Ali was available the next day. I thought..."),r()(),t(21,"div",3),C(22,"img",8),t(23,"p"),f(24,"Oh wow. I am def going to call Ali (and Nasar) up for next jobs. They're awesome..."),r()(),t(25,"div",3),C(26,"img",9),t(27,"p"),f(28,"I have only looked for 3 things when finding a handyman, which is why I didn't have one until I reached out to Naku and his team..."),r()(),t(29,"div",10),C(30,"img",11),t(31,"p"),f(32,"Hired Zest 4 to remove my fireplace, extend the wall/niche, install a few power and low voltage outlets and install laminate flooring in the exposed area...."),r()(),t(33,"div",10),C(34,"img",12),t(35,"p"),f(36,"The Zest 4 team is really good. Great communication, on time and very organized and detail oriented...."),r()(),t(37,"div",10),C(38,"img",13),t(39,"p"),f(40,"It's been over 2 years since Zest 4 construction helped me with bathroom refresh. I hade Ali come out to replace my vanity and could not be more pleased with the results..."),r()(),t(41,"div",10),C(42,"img",14),t(43,"p"),f(44,"Ali and his team did a wonderful job upgrading both our bathroom and kitchen. They were knowledgeable, polite,..."),r()()(),t(45,"button",15),b("click",function(){return e.redirectToYelp()}),f(46,"GO TO YELP"),r()()())},styles:[".testimonials[_ngcontent-%COMP%]{text-align:center;padding:20px;scroll-margin-top:70px}.testimonial-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;max-width:1200px;margin:0 auto}.testimonial-column[_ngcontent-%COMP%]{width:100%;border-radius:10px;box-shadow:0 4px 8px #0000001a;padding:10px 10px 3px 5px;background:#fff;box-sizing:border-box;height:auto}.testimonial-column[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:60%;border-radius:0%;margin-bottom:3px}.yelp-button[_ngcontent-%COMP%]{margin-top:40px;padding:15px 20px;background-color:#f60;color:#fff;border:none;border-radius:5px;cursor:pointer;align-items:center}.hidden-on-mobile[_ngcontent-%COMP%]{display:block}@media (max-width: 768px){.testimonial-container[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.testimonial-column[_ngcontent-%COMP%]{width:100%;padding:15px}.hidden-on-mobile[_ngcontent-%COMP%]{display:none}}@media (max-width: 480px){.testimonial-container[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.testimonial-column[_ngcontent-%COMP%]{width:100%;padding:10px;font-size:12px}.yelp-button[_ngcontent-%COMP%]{width:70%;padding:10px}.hidden-on-mobile[_ngcontent-%COMP%]{display:none}}"]})};var Q1=()=>{},L1={},x3={},N3=null,b3={mark:Q1,measure:Q1};try{typeof window<"u"&&(L1=window),typeof document<"u"&&(x3=document),typeof MutationObserver<"u"&&(N3=MutationObserver),typeof performance<"u"&&(b3=performance)}catch{}var{userAgent:J1=""}=L1.navigator||{},Y=L1,g=x3,Z1=N3,O2=b3,S6=!!Y.document,j=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",S3=~J1.indexOf("MSIE")||~J1.indexOf("Trident/"),h="classic",w3="duotone",A="sharp",P="sharp-duotone",L4=[h,w3,A,P],p4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},c3={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},M4=["kit"],C4=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,d4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,u4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},g4={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},h4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},x4={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},N4={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},b4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},y3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},S4=["solid","regular","light","thin","duotone","brands"],k3=[1,2,3,4,5,6,7,8,9,10],w4=k3.concat([11,12,13,14,15,16,17,18,19,20]),d2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},y4=[...Object.keys(x4),...S4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",d2.GROUP,d2.SWAP_OPACITY,d2.PRIMARY,d2.SECONDARY].concat(k3.map(c=>"".concat(c,"x"))).concat(w4.map(c=>"w-".concat(c))),k4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},v4={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},A4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},l3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},H="___FONT_AWESOME___",J2=16,v3="fa",A3="svg-inline--fa",s2="data-fa-i2svg",Z2="data-fa-pseudo-element",P4="data-fa-pseudo-element-pending",p1="data-prefix",M1="data-icon",s3="fontawesome-i2svg",T4="async",O4=["HTML","HEAD","STYLE","SCRIPT"],P3=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),T3=[h,A,P];function b2(c){return new Proxy(c,{get(s,l){return l in s?s[l]:s[h]}})}var O3=m({},y3);O3[h]=m(m(m({},y3[h]),c3.kit),c3["kit-duotone"]);var c2=b2(O3),c1=m({},b4);c1[h]=m(m(m({},c1[h]),l3.kit),l3["kit-duotone"]);var x2=b2(c1),l1=m({},N4);l1[h]=m(m({},l1[h]),A4.kit);var l2=b2(l1),s1=m({},h4);s1[h]=m(m({},s1[h]),v4.kit);var _4=b2(s1),F4=C4,_3="fa-layers-text",E4=d4,D4=m({},p4),w6=b2(D4),I4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Y2=d2,f2=new Set;Object.keys(x2[h]).map(f2.add.bind(f2));Object.keys(x2[A]).map(f2.add.bind(f2));Object.keys(x2[P]).map(f2.add.bind(f2));var B4=[...M4,...y4],g2=Y.FontAwesomeConfig||{};function H4(c){var s=g.querySelector("script["+c+"]");if(s)return s.getAttribute(c)}function R4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}g&&typeof g.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(s=>{let[l,e]=s,a=R4(H4(l));a!=null&&(g2[e]=a)});var F3={styleDefault:"solid",familyDefault:"classic",cssPrefix:v3,replacementClass:A3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};g2.familyPrefix&&(g2.cssPrefix=g2.familyPrefix);var m2=m(m({},F3),g2);m2.autoReplaceSvg||(m2.observeMutations=!1);var p={};Object.keys(F3).forEach(c=>{Object.defineProperty(p,c,{enumerable:!0,set:function(s){m2[c]=s,h2.forEach(l=>l(p))},get:function(){return m2[c]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(c){m2.cssPrefix=c,h2.forEach(s=>s(p))},get:function(){return m2.cssPrefix}});Y.FontAwesomeConfig=p;var h2=[];function j4(c){return h2.push(c),()=>{h2.splice(h2.indexOf(c),1)}}var G=J2,E={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function U4(c){if(!c||!j)return;let s=g.createElement("style");s.setAttribute("type","text/css"),s.innerHTML=c;let l=g.head.childNodes,e=null;for(let a=l.length-1;a>-1;a--){let n=l[a],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=n)}return g.head.insertBefore(s,e),c}var q4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function N2(){let c=12,s="";for(;c-- >0;)s+=q4[Math.random()*62|0];return s}function z2(c){let s=[];for(let l=(c||[]).length>>>0;l--;)s[l]=c[l];return s}function C1(c){return c.classList?z2(c.classList):(c.getAttribute("class")||"").split(" ").filter(s=>s)}function E3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function W4(c){return Object.keys(c||{}).reduce((s,l)=>s+"".concat(l,'="').concat(E3(c[l]),'" '),"").trim()}function I2(c){return Object.keys(c||{}).reduce((s,l)=>s+"".concat(l,": ").concat(c[l].trim(),";"),"")}function d1(c){return c.size!==E.size||c.x!==E.x||c.y!==E.y||c.rotate!==E.rotate||c.flipX||c.flipY}function G4(c){let{transform:s,containerWidth:l,iconWidth:e}=c,a={transform:"translate(".concat(l/2," 256)")},n="translate(".concat(s.x*32,", ").concat(s.y*32,") "),o="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),i="rotate(".concat(s.rotate," 0 0)"),z={transform:"".concat(n," ").concat(o," ").concat(i)},L={transform:"translate(".concat(e/2*-1," -256)")};return{outer:a,inner:z,path:L}}function V4(c){let{transform:s,width:l=J2,height:e=J2,startCentered:a=!1}=c,n="";return a&&S3?n+="translate(".concat(s.x/G-l/2,"em, ").concat(s.y/G-e/2,"em) "):a?n+="translate(calc(-50% + ".concat(s.x/G,"em), calc(-50% + ").concat(s.y/G,"em)) "):n+="translate(".concat(s.x/G,"em, ").concat(s.y/G,"em) "),n+="scale(".concat(s.size/G*(s.flipX?-1:1),", ").concat(s.size/G*(s.flipY?-1:1),") "),n+="rotate(".concat(s.rotate,"deg) "),n}var Y4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function D3(){let c=v3,s=A3,l=p.cssPrefix,e=p.replacementClass,a=Y4;if(l!==c||e!==s){let n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),i=new RegExp("\\.".concat(s),"g");a=a.replace(n,".".concat(l,"-")).replace(o,"--".concat(l,"-")).replace(i,".".concat(e))}return a}var e3=!1;function X2(){p.autoAddCss&&!e3&&(U4(D3()),e3=!0)}var X4={mixout(){return{dom:{css:D3,insertCss:X2}}},hooks(){return{beforeDOMElementCreation(){X2()},beforeI2svg(){X2()}}}},R=Y||{};R[H]||(R[H]={});R[H].styles||(R[H].styles={});R[H].hooks||(R[H].hooks={});R[H].shims||(R[H].shims=[]);var D=R[H],I3=[],B3=function(){g.removeEventListener("DOMContentLoaded",B3),E2=1,I3.map(c=>c())},E2=!1;j&&(E2=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),E2||g.addEventListener("DOMContentLoaded",B3));function $4(c){j&&(E2?setTimeout(c,0):I3.push(c))}function S2(c){let{tag:s,attributes:l={},children:e=[]}=c;return typeof c=="string"?E3(c):"<".concat(s," ").concat(W4(l),">").concat(e.map(S2).join(""),"</").concat(s,">")}function a3(c,s,l){if(c&&c[s]&&c[s][l])return{prefix:s,iconName:l,icon:c[s][l]}}var K4=function(s,l){return function(e,a,n,o){return s.call(l,e,a,n,o)}},$2=function(s,l,e,a){var n=Object.keys(s),o=n.length,i=a!==void 0?K4(l,a):l,z,L,M;for(e===void 0?(z=1,M=s[n[0]]):(z=0,M=e);z<o;z++)L=n[z],M=i(M,s[L],L,s);return M};function Q4(c){let s=[],l=0,e=c.length;for(;l<e;){let a=c.charCodeAt(l++);if(a>=55296&&a<=56319&&l<e){let n=c.charCodeAt(l++);(n&64512)==56320?s.push(((a&1023)<<10)+(n&1023)+65536):(s.push(a),l--)}else s.push(a)}return s}function e1(c){let s=Q4(c);return s.length===1?s[0].toString(16):null}function J4(c,s){let l=c.length,e=c.charCodeAt(s),a;return e>=55296&&e<=56319&&l>s+1&&(a=c.charCodeAt(s+1),a>=56320&&a<=57343)?(e-55296)*1024+a-56320+65536:e}function n3(c){return Object.keys(c).reduce((s,l)=>{let e=c[l];return!!e.icon?s[e.iconName]=e.icon:s[l]=e,s},{})}function a1(c,s){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:e=!1}=l,a=n3(s);typeof D.hooks.addPack=="function"&&!e?D.hooks.addPack(c,n3(s)):D.styles[c]=m(m({},D.styles[c]||{}),a),c==="fas"&&a1("fa",s)}var{styles:Z,shims:Z4}=D,c0={[h]:Object.values(l2[h]),[A]:Object.values(l2[A]),[P]:Object.values(l2[P])},u1=null,H3={},R3={},j3={},U3={},q3={},l0={[h]:Object.keys(c2[h]),[A]:Object.keys(c2[A]),[P]:Object.keys(c2[P])};function s0(c){return~B4.indexOf(c)}function e0(c,s){let l=s.split("-"),e=l[0],a=l.slice(1).join("-");return e===c&&a!==""&&!s0(a)?a:null}var W3=()=>{let c=e=>$2(Z,(a,n,o)=>(a[o]=$2(n,e,{}),a),{});H3=c((e,a,n)=>(a[3]&&(e[a[3]]=n),a[2]&&a[2].filter(i=>typeof i=="number").forEach(i=>{e[i.toString(16)]=n}),e)),R3=c((e,a,n)=>(e[n]=n,a[2]&&a[2].filter(i=>typeof i=="string").forEach(i=>{e[i]=n}),e)),q3=c((e,a,n)=>{let o=a[2];return e[n]=n,o.forEach(i=>{e[i]=n}),e});let s="far"in Z||p.autoFetchSvg,l=$2(Z4,(e,a)=>{let n=a[0],o=a[1],i=a[2];return o==="far"&&!s&&(o="fas"),typeof n=="string"&&(e.names[n]={prefix:o,iconName:i}),typeof n=="number"&&(e.unicodes[n.toString(16)]={prefix:o,iconName:i}),e},{names:{},unicodes:{}});j3=l.names,U3=l.unicodes,u1=B2(p.styleDefault,{family:p.familyDefault})};j4(c=>{u1=B2(c.styleDefault,{family:p.familyDefault})});W3();function g1(c,s){return(H3[c]||{})[s]}function a0(c,s){return(R3[c]||{})[s]}function V(c,s){return(q3[c]||{})[s]}function G3(c){return j3[c]||{prefix:null,iconName:null}}function n0(c){let s=U3[c],l=g1("fas",c);return s||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function X(){return u1}var h1=()=>({prefix:null,iconName:null,rest:[]});function B2(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:l=h}=s,e=c2[l][c],a=x2[l][c]||x2[l][e],n=c in D.styles?c:null;return a||n||null}var o0={[h]:Object.keys(l2[h]),[A]:Object.keys(l2[A]),[P]:Object.keys(l2[P])};function H2(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:l=!1}=s,e={[h]:"".concat(p.cssPrefix,"-").concat(h),[A]:"".concat(p.cssPrefix,"-").concat(A),[P]:"".concat(p.cssPrefix,"-").concat(P)},a=null,n=h,o=L4.filter(z=>z!==w3);o.forEach(z=>{(c.includes(e[z])||c.some(L=>o0[z].includes(L)))&&(n=z)});let i=c.reduce((z,L)=>{let M=e0(p.cssPrefix,L);if(Z[L]?(L=c0[n].includes(L)?_4[n][L]:L,a=L,z.prefix=L):l0[n].indexOf(L)>-1?(a=L,z.prefix=B2(L,{family:n})):M?z.iconName=M:L!==p.replacementClass&&!o.some(u=>L===e[u])&&z.rest.push(L),!l&&z.prefix&&z.iconName){let u=a==="fa"?G3(z.iconName):{},d=V(z.prefix,z.iconName);u.prefix&&(a=null),z.iconName=u.iconName||d||z.iconName,z.prefix=u.prefix||z.prefix,z.prefix==="far"&&!Z.far&&Z.fas&&!p.autoFetchSvg&&(z.prefix="fas")}return z},h1());return(c.includes("fa-brands")||c.includes("fab"))&&(i.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(i.prefix="fad"),!i.prefix&&n===A&&(Z.fass||p.autoFetchSvg)&&(i.prefix="fass",i.iconName=V(i.prefix,i.iconName)||i.iconName),!i.prefix&&n===P&&(Z.fasds||p.autoFetchSvg)&&(i.prefix="fasds",i.iconName=V(i.prefix,i.iconName)||i.iconName),(i.prefix==="fa"||a==="fa")&&(i.prefix=X()||"fas"),i}var n1=class{constructor(){this.definitions={}}add(){for(var s=arguments.length,l=new Array(s),e=0;e<s;e++)l[e]=arguments[e];let a=l.reduce(this._pullDefinitions,{});Object.keys(a).forEach(n=>{this.definitions[n]=m(m({},this.definitions[n]||{}),a[n]),a1(n,a[n]);let o=l2[h][n];o&&a1(o,a[n]),W3()})}reset(){this.definitions={}}_pullDefinitions(s,l){let e=l.prefix&&l.iconName&&l.icon?{0:l}:l;return Object.keys(e).map(a=>{let{prefix:n,iconName:o,icon:i}=e[a],z=i[2];s[n]||(s[n]={}),z.length>0&&z.forEach(L=>{typeof L=="string"&&(s[n][L]=i)}),s[n][o]=i}),s}},o3=[],t2={},r2={},i0=Object.keys(r2);function t0(c,s){let{mixoutsTo:l}=s;return o3=c,t2={},Object.keys(r2).forEach(e=>{i0.indexOf(e)===-1&&delete r2[e]}),o3.forEach(e=>{let a=e.mixout?e.mixout():{};if(Object.keys(a).forEach(n=>{typeof a[n]=="function"&&(l[n]=a[n]),typeof a[n]=="object"&&Object.keys(a[n]).forEach(o=>{l[n]||(l[n]={}),l[n][o]=a[n][o]})}),e.hooks){let n=e.hooks();Object.keys(n).forEach(o=>{t2[o]||(t2[o]=[]),t2[o].push(n[o])})}e.provides&&e.provides(r2)}),l}function o1(c,s){for(var l=arguments.length,e=new Array(l>2?l-2:0),a=2;a<l;a++)e[a-2]=arguments[a];return(t2[c]||[]).forEach(o=>{s=o.apply(null,[s,...e])}),s}function e2(c){for(var s=arguments.length,l=new Array(s>1?s-1:0),e=1;e<s;e++)l[e-1]=arguments[e];(t2[c]||[]).forEach(n=>{n.apply(null,l)})}function $(){let c=arguments[0],s=Array.prototype.slice.call(arguments,1);return r2[c]?r2[c].apply(null,s):void 0}function i1(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:s}=c,l=c.prefix||X();if(s)return s=V(l,s)||s,a3(V3.definitions,l,s)||a3(D.styles,l,s)}var V3=new n1,r0=()=>{p.autoReplaceSvg=!1,p.observeMutations=!1,e2("noAuto")},f0={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(e2("beforeI2svg",c),$("pseudoElements2svg",c),$("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:s}=c;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,$4(()=>{z0({autoReplaceSvgRoot:s}),e2("watch",c)})}},m0={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:V(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let s=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],l=B2(c[0]);return{prefix:l,iconName:V(l,s)||s}}if(typeof c=="string"&&(c.indexOf("".concat(p.cssPrefix,"-"))>-1||c.match(F4))){let s=H2(c.split(" "),{skipLookups:!0});return{prefix:s.prefix||X(),iconName:V(s.prefix,s.iconName)||s.iconName}}if(typeof c=="string"){let s=X();return{prefix:s,iconName:V(s,c)||c}}}},T={noAuto:r0,config:p,dom:f0,parse:m0,library:V3,findIconDefinition:i1,toHtml:S2},z0=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:s=g}=c;(Object.keys(D.styles).length>0||p.autoFetchSvg)&&j&&p.autoReplaceSvg&&T.dom.i2svg({node:s})};function R2(c,s){return Object.defineProperty(c,"abstract",{get:s}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(l=>S2(l))}}),Object.defineProperty(c,"node",{get:function(){if(!j)return;let l=g.createElement("div");return l.innerHTML=c.html,l.children}}),c}function L0(c){let{children:s,main:l,mask:e,attributes:a,styles:n,transform:o}=c;if(d1(o)&&l.found&&!e.found){let{width:i,height:z}=l,L={x:i/z/2,y:.5};a.style=I2(x(m({},n),{"transform-origin":"".concat(L.x+o.x/16,"em ").concat(L.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:s}]}function p0(c){let{prefix:s,iconName:l,children:e,attributes:a,symbol:n}=c,o=n===!0?"".concat(s,"-").concat(p.cssPrefix,"-").concat(l):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:x(m({},a),{id:o}),children:e}]}]}function x1(c){let{icons:{main:s,mask:l},prefix:e,iconName:a,transform:n,symbol:o,title:i,maskId:z,titleId:L,extra:M,watchable:u=!1}=c,{width:d,height:k}=l.found?l:s,U=e==="fak",K=[p.replacementClass,a?"".concat(p.cssPrefix,"-").concat(a):""].filter(n2=>M.classes.indexOf(n2)===-1).filter(n2=>n2!==""||!!n2).concat(M.classes).join(" "),O={children:[],attributes:x(m({},M.attributes),{"data-prefix":e,"data-icon":a,class:K,role:M.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(k)})},B=U&&!~M.classes.indexOf("fa-fw")?{width:"".concat(d/k*16*.0625,"em")}:{};u&&(O.attributes[s2]=""),i&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(L||N2())},children:[i]}),delete O.attributes.title);let v=x(m({},O),{prefix:e,iconName:a,main:s,mask:l,maskId:z,transform:n,symbol:o,styles:m(m({},B),M.styles)}),{children:_,attributes:a2}=l.found&&s.found?$("generateAbstractMask",v)||{children:[],attributes:{}}:$("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=_,v.attributes=a2,o?p0(v):L0(v)}function i3(c){let{content:s,width:l,height:e,transform:a,title:n,extra:o,watchable:i=!1}=c,z=x(m(m({},o.attributes),n?{title:n}:{}),{class:o.classes.join(" ")});i&&(z[s2]="");let L=m({},o.styles);d1(a)&&(L.transform=V4({transform:a,startCentered:!0,width:l,height:e}),L["-webkit-transform"]=L.transform);let M=I2(L);M.length>0&&(z.style=M);let u=[];return u.push({tag:"span",attributes:z,children:[s]}),n&&u.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),u}function M0(c){let{content:s,title:l,extra:e}=c,a=x(m(m({},e.attributes),l?{title:l}:{}),{class:e.classes.join(" ")}),n=I2(e.styles);n.length>0&&(a.style=n);let o=[];return o.push({tag:"span",attributes:a,children:[s]}),l&&o.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),o}var{styles:K2}=D;function t1(c){let s=c[0],l=c[1],[e]=c.slice(4),a=null;return Array.isArray(e)?a={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(Y2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Y2.SECONDARY),fill:"currentColor",d:e[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Y2.PRIMARY),fill:"currentColor",d:e[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:e}},{found:!0,width:s,height:l,icon:a}}var C0={found:!1,width:512,height:512};function d0(c,s){!P3&&!p.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(s,'" is missing.'))}function r1(c,s){let l=s;return s==="fa"&&p.styleDefault!==null&&(s=X()),new Promise((e,a)=>{if(l==="fa"){let n=G3(c)||{};c=n.iconName||c,s=n.prefix||s}if(c&&s&&K2[s]&&K2[s][c]){let n=K2[s][c];return e(t1(n))}d0(c,s),e(x(m({},C0),{icon:p.showMissingIcons&&c?$("missingIconAbstract")||{}:{}}))})}var t3=()=>{},f1=p.measurePerformance&&O2&&O2.mark&&O2.measure?O2:{mark:t3,measure:t3},u2='FA "6.6.0"',u0=c=>(f1.mark("".concat(u2," ").concat(c," begins")),()=>Y3(c)),Y3=c=>{f1.mark("".concat(u2," ").concat(c," ends")),f1.measure("".concat(u2," ").concat(c),"".concat(u2," ").concat(c," begins"),"".concat(u2," ").concat(c," ends"))},N1={begin:u0,end:Y3},_2=()=>{};function r3(c){return typeof(c.getAttribute?c.getAttribute(s2):null)=="string"}function g0(c){let s=c.getAttribute?c.getAttribute(p1):null,l=c.getAttribute?c.getAttribute(M1):null;return s&&l}function h0(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(p.replacementClass)}function x0(){return p.autoReplaceSvg===!0?F2.replace:F2[p.autoReplaceSvg]||F2.replace}function N0(c){return g.createElementNS("http://www.w3.org/2000/svg",c)}function b0(c){return g.createElement(c)}function X3(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:l=c.tag==="svg"?N0:b0}=s;if(typeof c=="string")return g.createTextNode(c);let e=l(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){e.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){e.appendChild(X3(n,{ceFn:l}))}),e}function S0(c){let s=" ".concat(c.outerHTML," ");return s="".concat(s,"Font Awesome fontawesome.com "),s}var F2={replace:function(c){let s=c[0];if(s.parentNode)if(c[1].forEach(l=>{s.parentNode.insertBefore(X3(l),s)}),s.getAttribute(s2)===null&&p.keepOriginalSource){let l=g.createComment(S0(s));s.parentNode.replaceChild(l,s)}else s.remove()},nest:function(c){let s=c[0],l=c[1];if(~C1(s).indexOf(p.replacementClass))return F2.replace(c);let e=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete l[0].attributes.id,l[0].attributes.class){let n=l[0].attributes.class.split(" ").reduce((o,i)=>(i===p.replacementClass||i.match(e)?o.toSvg.push(i):o.toNode.push(i),o),{toNode:[],toSvg:[]});l[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?s.removeAttribute("class"):s.setAttribute("class",n.toNode.join(" "))}let a=l.map(n=>S2(n)).join(`
`);s.setAttribute(s2,""),s.innerHTML=a}};function f3(c){c()}function $3(c,s){let l=typeof s=="function"?s:_2;if(c.length===0)l();else{let e=f3;p.mutateApproach===T4&&(e=Y.requestAnimationFrame||f3),e(()=>{let a=x0(),n=N1.begin("mutate");c.map(a),n(),l()})}}var b1=!1;function K3(){b1=!0}function m1(){b1=!1}var D2=null;function m3(c){if(!Z1||!p.observeMutations)return;let{treeCallback:s=_2,nodeCallback:l=_2,pseudoElementsCallback:e=_2,observeMutationsRoot:a=g}=c;D2=new Z1(n=>{if(b1)return;let o=X();z2(n).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!r3(i.addedNodes[0])&&(p.searchPseudoElements&&e(i.target),s(i.target)),i.type==="attributes"&&i.target.parentNode&&p.searchPseudoElements&&e(i.target.parentNode),i.type==="attributes"&&r3(i.target)&&~I4.indexOf(i.attributeName))if(i.attributeName==="class"&&g0(i.target)){let{prefix:z,iconName:L}=H2(C1(i.target));i.target.setAttribute(p1,z||o),L&&i.target.setAttribute(M1,L)}else h0(i.target)&&l(i.target)})}),j&&D2.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function w0(){D2&&D2.disconnect()}function y0(c){let s=c.getAttribute("style"),l=[];return s&&(l=s.split(";").reduce((e,a)=>{let n=a.split(":"),o=n[0],i=n.slice(1);return o&&i.length>0&&(e[o]=i.join(":").trim()),e},{})),l}function k0(c){let s=c.getAttribute("data-prefix"),l=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",a=H2(C1(c));return a.prefix||(a.prefix=X()),s&&l&&(a.prefix=s,a.iconName=l),a.iconName&&a.prefix||(a.prefix&&e.length>0&&(a.iconName=a0(a.prefix,c.innerText)||g1(a.prefix,e1(c.innerText))),!a.iconName&&p.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=c.firstChild.data)),a}function v0(c){let s=z2(c.attributes).reduce((a,n)=>(a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a),{}),l=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return p.autoA11y&&(l?s["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(e||N2()):(s["aria-hidden"]="true",s.focusable="false")),s}function A0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:E,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function z3(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:l,prefix:e,rest:a}=k0(c),n=v0(c),o=o1("parseNodeAttributes",{},c),i=s.styleParser?y0(c):[];return m({iconName:l,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:e,transform:E,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:i,attributes:n}},o)}var{styles:P0}=D;function Q3(c){let s=p.autoReplaceSvg==="nest"?z3(c,{styleParser:!1}):z3(c);return~s.extra.classes.indexOf(_3)?$("generateLayersText",c,s):$("generateSvgReplacementMutation",c,s)}var I=new Set;T3.map(c=>{I.add("fa-".concat(c))});Object.keys(c2[h]).map(I.add.bind(I));Object.keys(c2[A]).map(I.add.bind(I));Object.keys(c2[P]).map(I.add.bind(I));I=[...I];function L3(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();let l=g.documentElement.classList,e=M=>l.add("".concat(s3,"-").concat(M)),a=M=>l.remove("".concat(s3,"-").concat(M)),n=p.autoFetchSvg?I:T3.map(M=>"fa-".concat(M)).concat(Object.keys(P0));n.includes("fa")||n.push("fa");let o=[".".concat(_3,":not([").concat(s2,"])")].concat(n.map(M=>".".concat(M,":not([").concat(s2,"])"))).join(", ");if(o.length===0)return Promise.resolve();let i=[];try{i=z2(c.querySelectorAll(o))}catch{}if(i.length>0)e("pending"),a("complete");else return Promise.resolve();let z=N1.begin("onTree"),L=i.reduce((M,u)=>{try{let d=Q3(u);d&&M.push(d)}catch(d){P3||d.name==="MissingIcon"&&console.error(d)}return M},[]);return new Promise((M,u)=>{Promise.all(L).then(d=>{$3(d,()=>{e("active"),e("complete"),a("pending"),typeof s=="function"&&s(),z(),M()})}).catch(d=>{z(),u(d)})})}function T0(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Q3(c).then(l=>{l&&$3([l],s)})}function O0(c){return function(s){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(s||{}).icon?s:i1(s||{}),{mask:a}=l;return a&&(a=(a||{}).icon?a:i1(a||{})),c(e,x(m({},l),{mask:a}))}}var _0=function(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:l=E,symbol:e=!1,mask:a=null,maskId:n=null,title:o=null,titleId:i=null,classes:z=[],attributes:L={},styles:M={}}=s;if(!c)return;let{prefix:u,iconName:d,icon:k}=c;return R2(m({type:"icon"},c),()=>(e2("beforeDOMElementCreation",{iconDefinition:c,params:s}),p.autoA11y&&(o?L["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(i||N2()):(L["aria-hidden"]="true",L.focusable="false")),x1({icons:{main:t1(k),mask:a?t1(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:u,iconName:d,transform:m(m({},E),l),symbol:e,title:o,maskId:n,titleId:i,extra:{attributes:L,styles:M,classes:z}})))},F0={mixout(){return{icon:O0(_0)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=L3,c.nodeCallback=T0,c}}},provides(c){c.i2svg=function(s){let{node:l=g,callback:e=()=>{}}=s;return L3(l,e)},c.generateSvgReplacementMutation=function(s,l){let{iconName:e,title:a,titleId:n,prefix:o,transform:i,symbol:z,mask:L,maskId:M,extra:u}=l;return new Promise((d,k)=>{Promise.all([r1(e,o),L.iconName?r1(L.iconName,L.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(U=>{let[K,O]=U;d([s,x1({icons:{main:K,mask:O},prefix:o,iconName:e,transform:i,symbol:z,maskId:M,title:a,titleId:n,extra:u,watchable:!0})])}).catch(k)})},c.generateAbstractIcon=function(s){let{children:l,attributes:e,main:a,transform:n,styles:o}=s,i=I2(o);i.length>0&&(e.style=i);let z;return d1(n)&&(z=$("generateAbstractTransformGrouping",{main:a,transform:n,containerWidth:a.width,iconWidth:a.width})),l.push(z||a.icon),{children:l,attributes:e}}}},E0={mixout(){return{layer(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:l=[]}=s;return R2({type:"layer"},()=>{e2("beforeDOMElementCreation",{assembler:c,params:s});let e=[];return c(a=>{Array.isArray(a)?a.map(n=>{e=e.concat(n.abstract)}):e=e.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers"),...l].join(" ")},children:e}]})}}}},D0={mixout(){return{counter(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:l=null,classes:e=[],attributes:a={},styles:n={}}=s;return R2({type:"counter",content:c},()=>(e2("beforeDOMElementCreation",{content:c,params:s}),M0({content:c.toString(),title:l,extra:{attributes:a,styles:n,classes:["".concat(p.cssPrefix,"-layers-counter"),...e]}})))}}}},I0={mixout(){return{text(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:l=E,title:e=null,classes:a=[],attributes:n={},styles:o={}}=s;return R2({type:"text",content:c},()=>(e2("beforeDOMElementCreation",{content:c,params:s}),i3({content:c,transform:m(m({},E),l),title:e,extra:{attributes:n,styles:o,classes:["".concat(p.cssPrefix,"-layers-text"),...a]}})))}}},provides(c){c.generateLayersText=function(s,l){let{title:e,transform:a,extra:n}=l,o=null,i=null;if(S3){let z=parseInt(getComputedStyle(s).fontSize,10),L=s.getBoundingClientRect();o=L.width/z,i=L.height/z}return p.autoA11y&&!e&&(n.attributes["aria-hidden"]="true"),Promise.resolve([s,i3({content:s.innerHTML,width:o,height:i,transform:a,title:e,extra:n,watchable:!0})])}}},B0=new RegExp('"',"ug"),p3=[1105920,1112319],M3=m(m(m({FontAwesome:{normal:"fas",400:"fas"}},g4),u4),k4),z1=Object.keys(M3).reduce((c,s)=>(c[s.toLowerCase()]=M3[s],c),{}),H0=Object.keys(z1).reduce((c,s)=>{let l=z1[s];return c[s]=l[900]||[...Object.entries(l)][0][1],c},{});function R0(c){let s=c.replace(B0,""),l=J4(s,0),e=l>=p3[0]&&l<=p3[1],a=s.length===2?s[0]===s[1]:!1;return{value:e1(a?s[0]:s),isSecondary:e||a}}function j0(c,s){let l=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(s),a=isNaN(e)?"normal":e;return(z1[l]||{})[a]||H0[l]}function C3(c,s){let l="".concat(P4).concat(s.replace(":","-"));return new Promise((e,a)=>{if(c.getAttribute(l)!==null)return e();let o=z2(c.children).filter(d=>d.getAttribute(Z2)===s)[0],i=Y.getComputedStyle(c,s),z=i.getPropertyValue("font-family"),L=z.match(E4),M=i.getPropertyValue("font-weight"),u=i.getPropertyValue("content");if(o&&!L)return c.removeChild(o),e();if(L&&u!=="none"&&u!==""){let d=i.getPropertyValue("content"),k=j0(z,M),{value:U,isSecondary:K}=R0(d),O=L[0].startsWith("FontAwesome"),B=g1(k,U),v=B;if(O){let _=n0(U);_.iconName&&_.prefix&&(B=_.iconName,k=_.prefix)}if(B&&!K&&(!o||o.getAttribute(p1)!==k||o.getAttribute(M1)!==v)){c.setAttribute(l,v),o&&c.removeChild(o);let _=A0(),{extra:a2}=_;a2.attributes[Z2]=s,r1(B,k).then(n2=>{let m4=x1(x(m({},_),{icons:{main:n2,mask:h1()},prefix:k,iconName:v,extra:a2,watchable:!0})),W2=g.createElementNS("http://www.w3.org/2000/svg","svg");s==="::before"?c.insertBefore(W2,c.firstChild):c.appendChild(W2),W2.outerHTML=m4.map(z4=>S2(z4)).join(`
`),c.removeAttribute(l),e()}).catch(a)}else e()}else e()})}function U0(c){return Promise.all([C3(c,"::before"),C3(c,"::after")])}function q0(c){return c.parentNode!==document.head&&!~O4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(Z2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function d3(c){if(j)return new Promise((s,l)=>{let e=z2(c.querySelectorAll("*")).filter(q0).map(U0),a=N1.begin("searchPseudoElements");K3(),Promise.all(e).then(()=>{a(),m1(),s()}).catch(()=>{a(),m1(),l()})})}var W0={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=d3,c}}},provides(c){c.pseudoElements2svg=function(s){let{node:l=g}=s;p.searchPseudoElements&&d3(l)}}},u3=!1,G0={mixout(){return{dom:{unwatch(){K3(),u3=!0}}}},hooks(){return{bootstrap(){m3(o1("mutationObserverCallbacks",{}))},noAuto(){w0()},watch(c){let{observeMutationsRoot:s}=c;u3?m1():m3(o1("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},g3=c=>{let s={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((l,e)=>{let a=e.toLowerCase().split("-"),n=a[0],o=a.slice(1).join("-");if(n&&o==="h")return l.flipX=!0,l;if(n&&o==="v")return l.flipY=!0,l;if(o=parseFloat(o),isNaN(o))return l;switch(n){case"grow":l.size=l.size+o;break;case"shrink":l.size=l.size-o;break;case"left":l.x=l.x-o;break;case"right":l.x=l.x+o;break;case"up":l.y=l.y-o;break;case"down":l.y=l.y+o;break;case"rotate":l.rotate=l.rotate+o;break}return l},s)},V0={mixout(){return{parse:{transform:c=>g3(c)}}},hooks(){return{parseNodeAttributes(c,s){let l=s.getAttribute("data-fa-transform");return l&&(c.transform=g3(l)),c}}},provides(c){c.generateAbstractTransformGrouping=function(s){let{main:l,transform:e,containerWidth:a,iconWidth:n}=s,o={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),z="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),L="rotate(".concat(e.rotate," 0 0)"),M={transform:"".concat(i," ").concat(z," ").concat(L)},u={transform:"translate(".concat(n/2*-1," -256)")},d={outer:o,inner:M,path:u};return{tag:"g",attributes:m({},d.outer),children:[{tag:"g",attributes:m({},d.inner),children:[{tag:l.icon.tag,children:l.icon.children,attributes:m(m({},l.icon.attributes),d.path)}]}]}}}},Q2={x:0,y:0,width:"100%",height:"100%"};function h3(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||s)&&(c.attributes.fill="black"),c}function Y0(c){return c.tag==="g"?c.children:[c]}var X0={hooks(){return{parseNodeAttributes(c,s){let l=s.getAttribute("data-fa-mask"),e=l?H2(l.split(" ").map(a=>a.trim())):h1();return e.prefix||(e.prefix=X()),c.mask=e,c.maskId=s.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(s){let{children:l,attributes:e,main:a,mask:n,maskId:o,transform:i}=s,{width:z,icon:L}=a,{width:M,icon:u}=n,d=G4({transform:i,containerWidth:M,iconWidth:z}),k={tag:"rect",attributes:x(m({},Q2),{fill:"white"})},U=L.children?{children:L.children.map(h3)}:{},K={tag:"g",attributes:m({},d.inner),children:[h3(m({tag:L.tag,attributes:m(m({},L.attributes),d.path)},U))]},O={tag:"g",attributes:m({},d.outer),children:[K]},B="mask-".concat(o||N2()),v="clip-".concat(o||N2()),_={tag:"mask",attributes:x(m({},Q2),{id:B,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,O]},a2={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:Y0(u)},_]};return l.push(a2,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(B,")")},Q2)}),{children:l,attributes:e}}}},$0={provides(c){let s=!1;Y.matchMedia&&(s=Y.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let l=[],e={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};l.push({tag:"path",attributes:x(m({},e),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=x(m({},a),{attributeName:"opacity"}),o={tag:"circle",attributes:x(m({},e),{cx:"256",cy:"364",r:"28"}),children:[]};return s||o.children.push({tag:"animate",attributes:x(m({},a),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:x(m({},n),{values:"1;0;1;1;0;1;"})}),l.push(o),l.push({tag:"path",attributes:x(m({},e),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:s?[]:[{tag:"animate",attributes:x(m({},n),{values:"1;0;0;0;0;1;"})}]}),s||l.push({tag:"path",attributes:x(m({},e),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:x(m({},n),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:l}}}},K0={hooks(){return{parseNodeAttributes(c,s){let l=s.getAttribute("data-fa-symbol"),e=l===null?!1:l===""?!0:l;return c.symbol=e,c}}}},Q0=[X4,F0,E0,D0,I0,W0,G0,V0,X0,$0,K0];t0(Q0,{mixoutsTo:T});var y6=T.noAuto,J3=T.config,k6=T.library,Z3=T.dom,c4=T.parse,v6=T.findIconDefinition,A6=T.toHtml,l4=T.icon,P6=T.layer,J0=T.text,Z0=T.counter;var c6=["*"],l6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},s6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},e6=c=>{let s={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(s).map(l=>s[l]?l:null).filter(l=>l)},S1=new WeakSet,s4="fa-auto-css";function a6(c,s){if(!s.autoAddCss||S1.has(c))return;if(c.getElementById(s4)!=null){s.autoAddCss=!1,S1.add(c);return}let l=c.createElement("style");l.setAttribute("type","text/css"),l.setAttribute("id",s4),l.innerHTML=Z3.css();let e=c.head.childNodes,a=null;for(let n=e.length-1;n>-1;n--){let o=e[n],i=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}c.head.insertBefore(l,a),s.autoAddCss=!1,S1.add(c)}var n6=c=>c.prefix!==void 0&&c.iconName!==void 0,o6=(c,s)=>n6(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:s,iconName:c},i6=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(l){J3.autoAddCss=l,this._autoAddCss=l}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275prov=G2({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),t6=(()=>{class c{constructor(){this.definitions={}}addIcons(...l){for(let e of l){e.prefix in this.definitions||(this.definitions[e.prefix]={}),this.definitions[e.prefix][e.iconName]=e;for(let a of e.icon[2])typeof a=="string"&&(this.definitions[e.prefix][a]=e)}}addIconPacks(...l){for(let e of l){let a=Object.keys(e).map(n=>e[n]);this.addIcons(...a)}}getIconDefinition(l,e){return l in this.definitions&&e in this.definitions[l]?this.definitions[l][e]:null}static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275prov=G2({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),r6=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(l){if("size"in l)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275dir=v1({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[w2]})}}return c})(),f6=(()=>{class c{constructor(l,e){this.renderer=l,this.elementRef=e}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(l){"size"in l&&(l.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${l.size.currentValue}`),l.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${l.size.previousValue}`))}static{this.\u0275fac=function(e){return new(e||c)(F(F1),F(A1))}}static{this.\u0275cmp=S({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[w2,w],ngContentSelectors:c6,decls:1,vars:0,template:function(e,a){e&1&&(I1(),B1(0))},encapsulation:2})}}return c})(),e4=(()=>{class c{constructor(l,e,a,n,o){this.sanitizer=l,this.config=e,this.iconLibrary=a,this.stackItem=n,this.document=y1(U1),o!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(l){if(this.icon==null&&this.config.fallbackIcon==null){s6();return}if(l){let e=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(e!=null){let a=this.buildParams();a6(this.document,this.config);let n=l4(e,a);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(l){let e=o6(l,this.config.defaultPrefix);if("icon"in e)return e;let a=this.iconLibrary.getIconDefinition(e.prefix,e.iconName);return a??(l6(e),null)}buildParams(){let l={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},e=typeof this.transform=="string"?c4.transform(this.transform):this.transform;return{title:this.title,transform:e,classes:e6(l),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}static{this.\u0275fac=function(e){return new(e||c)(F(Y1),F(i6),F(t6),F(r6,8),F(f6,8))}}static{this.\u0275cmp=S({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(e,a){e&2&&(D1("innerHTML",a.renderedIconHTML,T1),E1("title",a.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[w2,w],decls:0,vars:0,template:function(e,a){},encapsulation:2})}}return c})();var a4=(()=>{class c{static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275mod=k1({type:c})}static{this.\u0275inj=w1({})}}return c})();var n4={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]};var o4={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};var L6=(c,s,l)=>({"background-image":c,opacity:s,transition:l}),p6=c=>({active:c});function M6(c,s){if(c&1&&C(0,"div",6),c&2){let l=Q();y("ngStyle",H1(1,L6,"url("+l.slides[l.currentSlide].url+")",l.hidden?0:1,"opacity "+l.animationSpeed+"ms ease-in-out"))}}function C6(c,s){if(c&1){let l=v2();t(0,"div",9),b("click",function(){let a=y2(l).index,n=Q(2);return k2(n.jumpToSlide(a))}),r()}if(c&2){let l=s.index,e=Q(2);y("ngClass",C2(1,p6,l===e.currentSlide))}}function d6(c,s){if(c&1&&(t(0,"div",7),M2(1,C6,1,3,"div",8),r()),c&2){let l=Q();N(),y("ngForOf",l.slides)}}var j2=class c{slides=[];indicatorsVisible=!0;animationSpeed=500;currentSlide=0;hidden=!1;faArrowRight=n4;faArrowLeft=o4;next(){this.currentSlide=(this.currentSlide+1)%this.slides.length}previous(){this.currentSlide=(this.currentSlide-1+this.slides.length)%this.slides.length}jumpToSlide(s){this.currentSlide=s}static \u0275fac=function(l){return new(l||c)};static \u0275cmp=S({type:c,selectors:[["app-image-slider"]],inputs:{slides:"slides",indicatorsVisible:"indicatorsVisible",animationSpeed:"animationSpeed"},standalone:!0,features:[w],decls:7,vars:4,consts:[[1,"slides"],["class","slide",3,"ngStyle",4,"ngIf"],["id","indicators",4,"ngIf"],[1,"nextButton",3,"click"],[3,"icon"],[1,"previousButton",3,"click"],[1,"slide",3,"ngStyle"],["id","indicators"],["class","indicator",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"indicator",3,"click","ngClass"]],template:function(l,e){l&1&&(t(0,"div",0),M2(1,M6,1,5,"div",1)(2,d6,2,1,"div",2),t(3,"button",3),b("click",function(){return e.next()}),C(4,"fa-icon",4),r(),t(5,"button",5),b("click",function(){return e.previous()}),C(6,"fa-icon",4),r()()),l&2&&(N(),y("ngIf",e.slides&&e.slides.length>0),N(),y("ngIf",e.indicatorsVisible),N(2),y("icon",e.faArrowRight),N(2),y("icon",e.faArrowLeft))},dependencies:[W,A2,P2,q1,W1,a4,e4],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;width:100%;padding:0}[_nghost-%COMP%]   .slides[_ngcontent-%COMP%]{width:80%;max-width:600px;height:280px;border-radius:10px;overflow:hidden;position:relative;box-shadow:0 0 10px #0000004d}[_nghost-%COMP%]   .slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]{width:100%;height:100%;background-size:cover;background-position:center;background-repeat:no-repeat;position:relative}[_nghost-%COMP%]   .slides[_ngcontent-%COMP%]   :is(.nextButton[_ngcontent-%COMP%], .previousButton[_ngcontent-%COMP%]){position:absolute;top:50%;border:0px;background-color:transparent;font-size:30px;color:#fff;cursor:pointer;transform:translateY(-50%)}[_nghost-%COMP%]   .slides[_ngcontent-%COMP%]   .nextButton[_ngcontent-%COMP%]{right:20px}[_nghost-%COMP%]   .slides[_ngcontent-%COMP%]   .previousButton[_ngcontent-%COMP%]{left:20px}[_nghost-%COMP%]   .slides[_ngcontent-%COMP%]   #indicators[_ngcontent-%COMP%]{position:absolute;left:0;right:0;margin:auto;bottom:20px;width:200px;display:flex;justify-content:center}[_nghost-%COMP%]   .slides[_ngcontent-%COMP%]   #indicators[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:50%;background-color:#fff;display:inline-block;margin:0 5px;cursor:pointer;transition:background-color .5s ease-in-out}[_nghost-%COMP%]   .slides[_ngcontent-%COMP%]   #indicators[_ngcontent-%COMP%]   .indicator.active[_ngcontent-%COMP%]{background-color:#4f4f4f}"]})};var i4=c=>({show:c});function u6(c,s){if(c&1){let l=v2();t(0,"div",17)(1,"img",18),b("click",function(){let a=y2(l).index,n=Q();return k2(n.openImageModal(a))}),r()()}if(c&2){let l=s.$implicit;N(),y("src",l.url,V2)}}var L2=class c{isModalOpen=!1;isImageModalOpen=!1;currentImageIndex=0;selectedImage="";slides=[{url:"assets/7.jpg",title:"",description:""},{url:"assets/2.jpg",title:"",description:""},{url:"assets/3.jpg",title:"",description:""},{url:"assets/4.jpg",title:"",description:""},{url:"assets/5.jpg",title:"",description:""}];images=[{url:"assets/1.jpg"},{url:"assets/2.jpg"},{url:"assets/3.jpg"},{url:"assets/4.jpg"},{url:"assets/5.jpg"},{url:"assets/6.jpg"},{url:"assets/7.jpg"},{url:"assets/8.jpg"},{url:"assets/9.jpg"},{url:"assets/10.jpg"},{url:"assets/11.jpg"},{url:"assets/12.jpg"},{url:"assets/13.jpg"},{url:"assets/14.jpg"},{url:"assets/15.jpg"},{url:"assets/16.jpg"},{url:"assets/17.jpg"},{url:"assets/18.jpg"},{url:"assets/19.jpg"},{url:"assets/20.jpg"},{url:"assets/21.jpg"}];openModal(){this.isModalOpen=!0}closeModal(){this.isModalOpen=!1}openImageModal(s){this.currentImageIndex=s,this.selectedImage=this.images[this.currentImageIndex].url,this.isImageModalOpen=!0}closeImageModal(){this.isImageModalOpen=!1}nextImage(){this.currentImageIndex=(this.currentImageIndex+1)%this.images.length,this.selectedImage=this.images[this.currentImageIndex].url}prevImage(){this.currentImageIndex=(this.currentImageIndex-1+this.images.length)%this.images.length,this.selectedImage=this.images[this.currentImageIndex].url}static \u0275fac=function(l){return new(l||c)};static \u0275cmp=S({type:c,selectors:[["app-about-projects"]],standalone:!0,features:[w],decls:33,vars:11,consts:[["id","about-projects",1,"about-projects-container"],[1,"content-wrapper"],[1,"about-content"],[1,"about-description"],[1,"projects-slider"],[3,"slides","animationSpeed","indicatorsVisible"],[1,"show-more-button",3,"click"],[1,"modal",3,"ngClass"],[1,"modal-content"],[1,"close",3,"click"],[1,"gallery-images"],["class","gallery-item",4,"ngFor","ngForOf"],[1,"image-modal",3,"ngClass"],[1,"image-modal-content"],["alt","Selected Image",1,"modal-image",3,"src"],[1,"prev",3,"click"],[1,"next",3,"click"],[1,"gallery-item"],["alt","Project Image",3,"click","src"]],template:function(l,e){l&1&&(t(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2"),f(4,"About Our Company"),r(),t(5,"p"),f(6,"Dedicated to Excellence and Quality"),r(),t(7,"div",3)(8,"p"),f(9,"Welcome to our family-operated business! We specialize in turning your ideas into reality with our team of experienced professionals. With years of hands-on experience, we offer valuable suggestions and innovative solutions for your projects. Our commitment is to deliver high-quality and long-lasting results for every customer. Contact us today to schedule an appointment or to learn more about how we can help you achieve your goals."),r()()(),t(10,"div",4)(11,"h2"),f(12,"Our Projects"),r(),C(13,"app-image-slider",5),t(14,"button",6),b("click",function(){return e.openModal()}),f(15,"Show More"),r(),t(16,"div",7)(17,"div",8)(18,"span",9),b("click",function(){return e.closeModal()}),f(19,"\xD7"),r(),t(20,"h2"),f(21,"All Projects"),r(),t(22,"div",10),M2(23,u6,2,1,"div",11),r()()()(),t(24,"div",12)(25,"div",13)(26,"span",9),b("click",function(){return e.closeImageModal()}),f(27,"\xD7"),r(),C(28,"img",14),t(29,"button",15),b("click",function(){return e.prevImage()}),f(30,"\u276E"),r(),t(31,"button",16),b("click",function(){return e.nextImage()}),f(32,"\u276F"),r()()()()()),l&2&&(N(13),y("slides",e.slides)("animationSpeed",500)("indicatorsVisible",!0),N(3),y("ngClass",C2(7,i4,e.isModalOpen)),N(7),y("ngForOf",e.images),N(),y("ngClass",C2(9,i4,e.isImageModalOpen)),N(4),y("src",e.selectedImage,V2))},dependencies:[W,A2,P2,j2],styles:[".image-modal[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background:#000c;display:flex;align-items:center;justify-content:center;visibility:hidden;opacity:0;transition:opacity .3s,visibility .3s;z-index:1001}.image-modal.show[_ngcontent-%COMP%]{visibility:visible;opacity:1}.image-modal-content[_ngcontent-%COMP%]{position:relative;max-width:80%;max-height:80%}.modal-image[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:8px}.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);background-color:#00000080;color:#fff;border:none;font-size:24px;padding:10px;cursor:pointer}.prev[_ngcontent-%COMP%]{left:10px}.next[_ngcontent-%COMP%]{right:10px}.prev[_ngcontent-%COMP%]:hover, .next[_ngcontent-%COMP%]:hover{background-color:#000c}.image-modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{position:absolute;top:10px;right:20px;font-size:28px;color:#fff;cursor:pointer}.image-modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover{color:#ccc}.modal[_ngcontent-%COMP%]{display:none;position:fixed;z-index:1;left:0;top:0;margin-top:80px;width:100%;height:100%;overflow:auto;background-color:#000000b3}.modal.show[_ngcontent-%COMP%]{display:block}.modal-content[_ngcontent-%COMP%]{background-color:#fefefe;margin:10% auto;padding:20px;border:1px solid #888;width:80%;max-width:600px;border-radius:8px}.close[_ngcontent-%COMP%]{color:#aaa;float:right;font-size:28px;font-weight:700;cursor:pointer}.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus{color:#000;text-decoration:none;cursor:pointer}.gallery-images[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px}.gallery-item[_ngcontent-%COMP%]{flex:1 1 calc(33.333% - 10px);box-sizing:border-box}.gallery-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;border-radius:4px;box-shadow:0 2px 5px #0000004d}.show-more-button[_ngcontent-%COMP%]{background-color:ff6600}.about-projects[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:40px;max-width:1200px;margin:0 auto;padding:40px 20px;text-align:center}.about-content[_ngcontent-%COMP%]{width:45%;padding:20px;box-shadow:0 4px 8px #0000001a;border-radius:10px;background:#fff;text-align:center}.about-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .projects-slider[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#333;font-size:24px;margin-bottom:20px;text-align:center}.projects-slider[_ngcontent-%COMP%]{width:50%;height:365px;padding:20px;box-shadow:0 4px 8px #0000001a;border-radius:10px;background:#fff}.show-more-button[_ngcontent-%COMP%]{margin-top:55px;padding:15px 20px;background-color:#f60;color:#fff;border:none;border-radius:5px;cursor:pointer;align-items:center}.modal[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background:#000c;display:flex;align-items:center;justify-content:center;visibility:hidden;opacity:0;transition:opacity .3s,visibility .3s}.modal.show[_ngcontent-%COMP%]{visibility:visible;opacity:1}.modal-content[_ngcontent-%COMP%]{background:#fff;padding:20px;border-radius:10px;max-width:80%;text-align:center;position:relative}.close[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;font-size:24px;cursor:pointer}.gallery-images[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:15px;margin-top:20px}.gallery-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:5px}.about-projects-container[_ngcontent-%COMP%]{scroll-margin-top:70px;background:#fff;border-radius:0;box-shadow:0 4px 8px #0000001a;padding:40px;margin:20px auto;max-width:1900px;height:500px}.content-wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;gap:20px}.about-content[_ngcontent-%COMP%], .projects-slider[_ngcontent-%COMP%]{width:45%}.about-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .projects-slider[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;font-size:24px;margin-bottom:15px;max-width:90%}.about-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;line-height:1.6;max-width:90%}.projects-slider[_ngcontent-%COMP%]{text-align:center}@media (max-width: 1024px){.about-projects-container[_ngcontent-%COMP%]{padding:30px;max-width:100%;margin:20px auto;height:auto}.content-wrapper[_ngcontent-%COMP%]{flex-direction:column;align-items:center;gap:30px}.about-content[_ngcontent-%COMP%], .projects-slider[_ngcontent-%COMP%]{width:80%;margin-bottom:20px}.projects-slider[_ngcontent-%COMP%]{height:auto}.show-more-button[_ngcontent-%COMP%]{width:100%;margin-top:20px;padding:15px}}@media (max-width: 768px){.about-projects-container[_ngcontent-%COMP%]{padding:20px}.content-wrapper[_ngcontent-%COMP%]{gap:15px}.about-content[_ngcontent-%COMP%], .projects-slider[_ngcontent-%COMP%]{width:80%}.about-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .projects-slider[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;margin-bottom:15px}.show-more-button[_ngcontent-%COMP%]{padding:12px 15px;font-size:16px}.slideshow-container[_ngcontent-%COMP%]{max-width:90%;height:auto;margin:0 auto}.mySlides[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}}@media (max-width: 480px),(max-width: 390px){.gallery-images[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr);gap:10px}.about-projects-container[_ngcontent-%COMP%]{padding:10px;box-shadow:none}.about-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .projects-slider[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px}.about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .projects-slider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .about-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.show-more-button[_ngcontent-%COMP%]{width:70%;padding:10px}}@media (min-height: 1080px){.about-projects-container[_ngcontent-%COMP%]{height:auto;max-height:90vh;overflow-y:auto}}"]})};var p2=class c{constructor(s){this.platformId=s}ngAfterViewInit(){G1(this.platformId)&&this.loadGoogleMapsScript()}loadGoogleMapsScript(){if(document.getElementById("googleMaps"))this.initMap();else{let l=document.createElement("script");l.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCUkBHycO-c5NUd1M-bm5_A9NazPTBsJMA",l.id="googleMaps",l.onload=()=>this.initMap(),document.body.appendChild(l)}}initMap(){console.log("Initializing map...");let s={lat:37.3382,lng:-121.8863},l=new window.google.maps.Map(document.getElementById("map"),{zoom:10,center:s});[{lat:37.3382,lng:-121.8863,city:"San Jose"},{lat:37.5483,lng:-121.9886,city:"Fremont"},{lat:37.6688,lng:-122.0808,city:"Hayward"},{lat:37.4419,lng:-122.143,city:"Palo Alto"},{lat:37.4852,lng:-122.2364,city:"Redwood City"},{lat:37.563,lng:-122.3255,city:"San Mateo"},{lat:37.3861,lng:-122.0839,city:"Mountain View"},{lat:37.6624,lng:-121.8747,city:"Pleasanton"}].forEach(a=>{new window.google.maps.Marker({position:{lat:a.lat,lng:a.lng},map:l,title:a.city})}),console.log("Map initialized with markers.")}static \u0275fac=function(l){return new(l||c)(F(P1))};static \u0275cmp=S({type:c,selectors:[["app-contacts"]],standalone:!0,features:[w],decls:17,vars:0,consts:[["id","contacts",1,"contact-section"],[1,"contact-container"],[1,"contact-info"],[1,"contact-icons"],["href","mailto:zest4construction@gmail.com"],[1,"fas","fa-envelope"],["href","tel:+17078008109"],[1,"fas","fa-phone-alt"],["href","#"],[1,"fas","fa-globe"],["id","map",1,"map-container"]],template:function(l,e){l&1&&(t(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2"),f(4,"Contact us!"),r(),t(5,"p"),f(6,"+1 (707) 800-8109"),r(),t(7,"p"),f(8,"3947 Suncrest Ave, San Jose, CA 95132"),r(),t(9,"div",3)(10,"a",4),C(11,"i",5),r(),t(12,"a",6),C(13,"i",7),r(),t(14,"a",8),C(15,"i",9),r()()(),C(16,"div",10),r()())},styles:[".contact-container[_ngcontent-%COMP%]{max-width:1900px;width:100%;margin:20px auto 0;display:flex;justify-content:space-between;align-items:center;gap:20px;box-shadow:0 4px 8px #0000001a;background-color:#fff;padding:40px;height:550px}.contact-info[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;padding-right:20px;margin-left:60px}.contact-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#333;font-size:24px;margin:0 10px;transition:color .3s}.contact-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#f60}.map-container[_ngcontent-%COMP%]{flex:1.5;border-radius:10px;overflow:hidden;margin-right:120px;height:400px;box-shadow:0 4px 8px #0000001a}@media (max-width: 1920px){.contact-container[_ngcontent-%COMP%]{align-items:center;justify-content:center;max-width:1900px}.contact-info[_ngcontent-%COMP%]{margin-right:30px}.map-container[_ngcontent-%COMP%]{margin-right:300px!important;width:100%;margin-top:20px}}@media (max-width: 768px){.contact-container[_ngcontent-%COMP%]{flex-direction:column;align-items:center;justify-content:center;max-width:700px}.map-container[_ngcontent-%COMP%]{width:100%;margin-top:20px}}.map-container[_ngcontent-%COMP%]{width:100%;height:400px;margin-top:20px;margin-left:0}@media (max-width:480px){.contact-container[_ngcontent-%COMP%]{flex-direction:column;align-items:center;justify-content:center;max-width:425px}.map-container[_ngcontent-%COMP%]{width:100%;margin-top:20px;align-items:center}}@media (max-width: 390px){.contact-container[_ngcontent-%COMP%]{flex-direction:column;align-items:center;justify-content:center;max-width:330px}.map-container[_ngcontent-%COMP%]{width:100%;margin-top:20px;align-items:center}}.map-container[_ngcontent-%COMP%]{width:100%;height:400px;margin-top:20px;margin-right:0;align-items:center}.contact-container[_ngcontent-%COMP%]{padding:20px;text-align:center}"]})};var U2=class c{static \u0275fac=function(l){return new(l||c)};static \u0275cmp=S({type:c,selectors:[["app-footer"]],standalone:!0,features:[w],decls:18,vars:0,consts:[[1,"footer-nav"],[1,"footer-navigation"],["href","#services"],["href","#about-projects"],["href","#testimonials"],["href","#contact"]],template:function(l,e){l&1&&(t(0,"footer",0)(1,"nav",1)(2,"ul")(3,"li")(4,"a",2),f(5,"Services"),r()(),t(6,"li")(7,"a",3),f(8,"Projects"),r()(),t(9,"li")(10,"a",3),f(11,"About"),r()(),t(12,"li")(13,"a",4),f(14,"Testimonials"),r()(),t(15,"li")(16,"a",5),f(17,"Contact"),r()()()()())},styles:[".footer-nav[_ngcontent-%COMP%]{background-color:#000;padding:20px 0;text-align:center}.footer-navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;display:flex;justify-content:center;gap:40px;flex-wrap:wrap}.footer-navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0}.footer-navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-size:1rem;transition:color .3s}.footer-navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:orange}@media (max-width: 768px){.footer-navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{flex-direction:column;gap:20px}.footer-navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:.9rem}}"]})};var q2=class c{title="Ze Handyman";redirectToEstimate(){window.open("https://www.yelp.com/biz/zest-4-construction-san-jose-5","_blank")}static \u0275fac=function(l){return new(l||c)};static \u0275cmp=S({type:c,selectors:[["app-root"]],standalone:!0,features:[w],decls:72,vars:0,consts:[["id","home",1,"home"],[1,"cta-button",3,"click"],["id","services",1,"services"],[1,"service-list"],[1,"service-item"],[1,"fas","fa-tools","icon"],[1,"fas","fa-water","icon"],[1,"fas","fa-fan","icon"],[1,"fas","fa-cube","icon"]],template:function(l,e){l&1&&(C(0,"app-header"),t(1,"section",0)(2,"h1"),f(3,"Quality Service, Quality Results"),r(),t(4,"button",1),b("click",function(){return e.redirectToEstimate()}),f(5,"Get Free Estimate"),r()(),t(6,"section",2)(7,"h2"),f(8,"General Contractor Services"),r(),t(9,"div",3)(10,"div",4),C(11,"i",5),t(12,"h3"),f(13,"General Contractor Services"),r(),t(14,"ul")(15,"li"),f(16,"Home Remodeling"),r(),t(17,"li"),f(18,"Kitchen Remodeling"),r(),t(19,"li"),f(20,"Bathroom Remodeling"),r(),t(21,"li"),f(22,"Home Additions"),r(),t(23,"li"),f(24,"ADUs"),r()()(),t(25,"div",4),C(26,"i",6),t(27,"h3"),f(28,"Plumbing Services"),r(),t(29,"ul")(30,"li"),f(31,"Full house water repiping"),r(),t(32,"li"),f(33,"Water line repair"),r(),t(34,"li"),f(35,"Sewer line"),r(),t(36,"li"),f(37,"Kitchen sink installation"),r(),t(38,"li"),f(39,"Faucet installation"),r(),t(40,"li"),f(41,"Bathtub installation"),r()()(),t(42,"div",4),C(43,"i",7),t(44,"h3"),f(45,"Heating, Ventilation, and Air Conditioning"),r(),t(46,"ul")(47,"li"),f(48,"HVAC system maintenance"),r(),t(49,"li"),f(50,"HVAC installation or replacement"),r(),t(51,"li"),f(52,"HVAC system repair"),r()()(),t(53,"div",4),C(54,"i",8),t(55,"h3"),f(56,"Custom Kitchen Cabinets"),r(),t(57,"ul")(58,"li"),f(59,"Kitchen cabinet upgrades"),r(),t(60,"li"),f(61,"Custom cabinet design"),r(),t(62,"li"),f(63,"Refacing existing cabinets"),r(),t(64,"li"),f(65,"Installation of new cabinet doors"),r(),t(66,"li"),f(67,"Custom cabinet hardware"),r()()()()(),C(68,"app-about-projects")(69,"app-testimonials")(70,"app-contacts")(71,"app-footer"))},dependencies:[T2,p2,W,L2,i2,U2],styles:[".yelp-reviews[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:10px;margin-right:5px}@media (max-width: 768px){.slideshow-container[_ngcontent-%COMP%]{max-width:90%;height:auto;margin:0 auto}.mySlides[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}}@media (max-width: 480px),(max-width: 390px){.about-projects-container[_ngcontent-%COMP%]{padding:10px;box-shadow:none}.about-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .projects-slider[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px}.about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .projects-slider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .about-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.show-more-button[_ngcontent-%COMP%]{width:70%;padding:10px}.gallery-images[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (min-height: 1080px){.about-projects-container[_ngcontent-%COMP%]{height:auto;max-height:90vh;overflow-y:auto}}"]})};var t4=[{path:"about-projects",component:L2},{path:"testimonials",component:i2},{path:"contacts",component:p2},{path:"**",redirectTo:""}];var r4={providers:[R1({eventCoalescing:!0}),K1(t4),X1()]};var g6={providers:[$1()]},f4=j1(r4,g6);var h6=()=>V1(q2,f4),O8=h6;export{O8 as a};
