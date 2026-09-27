var Mf=Object.defineProperty;var yf=(n,t,e)=>t in n?Mf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var ft=(n,t,e)=>yf(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Xh=[{id:"jobs",name:"Job Board",x:-5,z:-3},{id:"brooms",name:"Broom Workshop",x:5,z:-3},{id:"decor",name:"Decor Corner",x:-5,z:3},{id:"cat",name:"Pumpkin",x:4,z:3}],nl=[{id:"rug",name:"Woven Rug",cost:30,description:"A soft landing for tired feet."},{id:"plant",name:"Moonleaf Plant",cost:40,description:"A little green for Meg's room."},{id:"shelf",name:"Parcel Shelf",cost:50,description:"A home for souvenirs and parcels."},{id:"lamp",name:"Warm Lamp",cost:60,description:"A cozy glow after a long shift."},{id:"cushion",name:"Window Cushion",cost:70,description:"The perfect reading nook."},{id:"cat-tree",name:"Cat Tree",cost:80,description:"Pumpkin's new favorite perch."}],il=[{id:"speed",name:"Swift Bristles",description:"Raises top speed by 10% per level."},{id:"handling",name:"Responsive Handle",description:"Raises turn rate by 20% per level."},{id:"braking",name:"Cloud Brake",description:"Raises hover braking by 20% per level."}],qa=7.5,Ya=5.5,Sf=2.4,bf=3.5,zr=(n,t,e)=>Math.max(t,Math.min(e,n));function Za(n){n.mode="home",n.run=null,n.paused=!1,n.pauseReason="",n.homePosition={x:0,z:3},n.homeFacing=0,n.homePanel="none",n.message="Back at Meg's room.",n.revision++}function qh(n){n.mode!=="home"||n.homePanel==="none"||(n.homePanel="none",n.revision++)}function sl(n){if(n.mode==="home")return Xh.find(t=>Math.hypot(n.homePosition.x-t.x,n.homePosition.z-t.z)<=Sf)}function wf(n){if(n.mode!=="home"||n.paused)return;const t=sl(n);t&&(n.homePanel=t.id,n.message=t.id==="cat"?"Pumpkin purrs.":`${t.name} opened.`,n.revision++)}function Ef(n,t,e){if(n.mode!=="home"||n.paused||n.homePanel!=="none"||!Number.isFinite(e)||e<=0)return;const i=zr(t.turn,-1,1),s=-zr(t.climb,-1,1),r=Math.hypot(i,s);if(r>0){const o=bf*e/Math.max(1,r);n.homePosition.x=zr(n.homePosition.x+i*o,-qa,qa),n.homePosition.z=zr(n.homePosition.z+s*o,-Ya,Ya),n.homeFacing=Math.atan2(i,s)}n.revision++}function Tf(n,t){if(n.paused||n.mode!=="home"||n.homePanel!=="brooms"||!Cf(t))return!1;const e=n.profile.upgrades[t];if(e>=2)return!1;const i=e===0?60:120;return n.profile.coins<i?!1:(n.profile.coins-=i,n.profile.upgrades[t]=e+1,n.message=`${il.find(s=>s.id===t).name} upgraded.`,n.revision++,!0)}function Af(n,t){if(n.paused||n.mode!=="home"||n.homePanel!=="decor")return!1;const e=nl.find(i=>i.id===t);return!e||n.profile.furniture.includes(t)||n.profile.coins<e.cost?!1:(n.profile.coins-=e.cost,n.profile.furniture.push(t),n.message=`${e.name} added to the room.`,n.revision++,!0)}function Rf(n){return nl.every(t=>n.furniture.includes(t.id))&&il.every(t=>n.upgrades[t.id]>=2)}function Cf(n){return il.some(t=>t.id===n)}const or=230,me=[-40,-195,40,-155],ji=[[20,-25],[30,-18],[40,-5],[46,12],[50,30],[54,50],[56,70],[60,90],[63,105],[66,120],[70,140],[76,160],[82,180],[88,200],[95,220],[45,220],[40,200],[34,180],[26,160],[16,140],[6,120],[-2,100],[-8,82],[-14,65],[-18,45],[-20,25],[-16,5],[-6,-12],[6,-22]];function un(n,t){let e=!1;for(let i=0,s=ji.length-1;i<ji.length;s=i++){const r=ji[i][0],o=ji[i][1],a=ji[s][0],c=ji[s][1];o>t!=c>t&&n<(a-r)*(t-o)/(c-o)+r&&(e=!e)}return e}const Pf=24,Lf=8,Ql=[[-11,50],[-6,70],[1,90],[49,60],[50,80],[50,120]],If=[[-11,58],[-6,78],[1,82],[50,68],[50,88],[50,128]],ki=[[-86.5,-191.5,-60,-163.5],[-60,-191.5,-33.5,-163.5]],Pe=[{id:"home",name:"Bakery Attic",subtitle:"Home — borrowed attic",position:{x:-25,y:30,z:-48},color:"#f9cf68"},{id:"harbor-cafe",name:"Harbor Cafe",subtitle:"Tutorial delivery",position:{x:-80,y:18.12,z:150},color:"#63c7dc"},{id:"market",name:"Sunset Market",subtitle:"Fresh parcels",position:{x:-88,y:33,z:-88},color:"#e88869"},{id:"lighthouse",name:"The Lighthouse",subtitle:"Beacon House",position:{x:130,y:15,z:140},color:"#f4e5b8"},{id:"marina",name:"Marina Works",subtitle:"Dockside roof",position:{x:102,y:20,z:125},color:"#79b9a0"},{id:"observatory",name:"Hill Observatory",subtitle:"East hill pad",position:{x:130,y:53,z:-55},color:"#ad91d1"},{id:"cliffside",name:"Cliffside Books",subtitle:"West avenue",position:{x:-115,y:46,z:-177.5},color:"#db92a7"}],on=[{min:{x:-37,y:10,z:-60},max:{x:-13,y:28,z:-36},district:"merchant-row"},{min:{x:-94,y:.12,z:136},max:{x:-66,y:16.12,z:164},district:"harbor"},{min:{x:-103,y:10,z:-102},max:{x:-73,y:31,z:-74},district:"old-town"},{min:{x:120,y:0,z:130},max:{x:140,y:13,z:150},district:"lighthouse-headland"},{min:{x:87,y:0,z:110},max:{x:117,y:18,z:140},district:"harbor"},{min:{x:115,y:20,z:-70},max:{x:145,y:51,z:-40},district:"observatory-rise"},{min:{x:-130,y:20,z:-192.5},max:{x:-100,y:44,z:-162.5},district:"bungalow-lanes"},{min:{x:-65,y:0,z:88},max:{x:-45,y:10,z:108},district:"harbor"},{min:{x:-65,y:0,z:38},max:{x:-45,y:12,z:58},district:"harbor"},{min:{x:94,y:0,z:61},max:{x:110,y:10,z:79},district:"harbor"},{min:{x:92,y:0,z:10},max:{x:112,y:12,z:30},district:"harbor"},{min:{x:-50,y:10,z:-98.5},max:{x:-30,y:25,z:-78.5},district:"old-town"},{min:{x:-10,y:10,z:-98.5},max:{x:10,y:25,z:-78.5},district:"old-town"},{min:{x:30,y:10,z:-98.5},max:{x:50,y:26,z:-78.5},district:"old-town"},{min:{x:-50,y:9.19,z:-130.5},max:{x:-30,y:25.19,z:-113.5},district:"old-town"},{min:{x:22.5,y:10,z:-55},max:{x:37.5,y:21,z:-41},district:"merchant-row"},{min:{x:-2.5,y:10,z:-55.5},max:{x:12.5,y:21,z:-40.5},district:"merchant-row"},{min:{x:-80,y:20,z:-187.5},max:{x:-60,y:34,z:-167.5},district:"mansion-hill"},{min:{x:-57.5,y:20,z:-187.5},max:{x:-42.5,y:34,z:-167.5},district:"mansion-hill"},{min:{x:42.5,y:20,z:-185},max:{x:57.5,y:28,z:-170},district:"bungalow-lanes"},{min:{x:60.5,y:20,z:-185},max:{x:75.5,y:27,z:-170},district:"bungalow-lanes"},{min:{x:-122.5,y:19.28,z:-157},max:{x:-107.5,y:27.28,z:-143},district:"bungalow-lanes"},{min:{x:133.5,y:19.26,z:-97.5},max:{x:146.5,y:33.26,z:-82.5},district:"observatory-rise"},{min:{x:-55,y:10,z:-53},max:{x:-45,y:38,z:-43},district:"old-town"},{min:{x:117.5,y:48.5,z:-67.5},max:{x:126.5,y:57,z:-58.5},district:"observatory-rise"},{min:{x:125,y:-.22,z:153},max:{x:135,y:28.78,z:163}}],Br={harbor:{bodies:[4873579,7043714,6048314,12099704],roofs:[3820117,3095365]},"old-town":{bodies:[13935988,15258808,13219990],roofs:[11951167,4877148]},"merchant-row":{bodies:[11065544,16049320,15247544,15784120],roofs:[9132602,7031338]},"mansion-hill":{bodies:[15790312,10139802],roofs:[3817290]},"bungalow-lanes":{bodies:[8034923,9136970,11033674],roofs:[6048314,4865845]},"observatory-rise":{bodies:[9079442],roofs:[6064762,2767452]},"lighthouse-headland":{bodies:[15266024],roofs:[13948116]}},jl=on.length-1,tu=on.length-3,eu=on.length-2,Df=[{min:{x:15,y:0,z:168},max:{x:100,y:100,z:172}}];function Nf(n){let t=n>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Uf=.5*(Math.sqrt(3)-1),Ws=(3-Math.sqrt(3))/6;class Yh{constructor(t){ft(this,"perm");const e=Nf(t),i=new Uint8Array(256);for(let s=0;s<256;s++)i[s]=s;for(let s=255;s>0;s--){const r=Math.floor(e()*(s+1));[i[s],i[r]]=[i[r],i[s]]}this.perm=new Uint8Array(512);for(let s=0;s<512;s++)this.perm[s]=i[s&255]}noise(t,e){const i=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];let s=0,r=0,o=0;const a=(t+e)*Uf,c=Math.floor(t+a),l=Math.floor(e+a),u=(c+l)*Ws,d=t-(c-u),h=e-(l-u);let f,g;d>h?(f=1,g=0):(f=0,g=1);const _=d-f+Ws,m=h-g+Ws,p=d-1+2*Ws,b=h-1+2*Ws,S=c&255,v=l&255;let y=.5-d*d-h*h;if(y>=0){y*=y;const x=i[this.perm[S+this.perm[v]]&7];s=y*y*(x[0]*d+x[1]*h)}let w=.5-_*_-m*m;if(w>=0){w*=w;const x=i[this.perm[S+f+this.perm[v+g]]&7];r=w*w*(x[0]*_+x[1]*m)}let A=.5-p*p-b*b;if(A>=0){A*=A;const x=i[this.perm[S+1+this.perm[v+1]]&7];o=A*A*(x[0]*p+x[1]*b)}return 70*(s+r+o)}}const Zh=1337,Ff=new Yh(Zh),$a=new Yh(Zh+1);function $h(n,t,e=5){let i=0,s=.5,r=1;for(let o=0;o<e;o++)i+=s*Ff.noise(n*r,t*r),s*=.5,r*=2;return i}function Of(n,t,e,i){const s=$a.noise(n*e+5.2,t*e+1.3),r=$a.noise(n*e+1.7,t*e+9.1);return[n+s*i,t+r*i]}function In(n,t,e){const i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)}const rl=[{name:"waterfront",y:0,rects:[[-95,-15,5,175],[50,-35,150,175]]},{name:"midtown",y:10,rects:[[-115,-135,75,-15]]},{name:"upper",y:20,rects:[[-135,-215,135,-135],[55,-135,155,-35]]}];function Fi(n,t){const e=175+$a.noise(n*.01+3.7,8.2)*35,i=In(e-15,e+45,t);let s=0;un(n,t)?s=t<e+25?1:0:(un(n+6,t)||un(n-6,t)||un(n,t+6)||un(n,t-6))&&t<e+20&&(s=.45);const[r,o]=Of(n,t,.015,18),a=($h(r*.02,o*.02)*.5+.5)*8,c=Math.hypot(n,t),l=In(145,175,c),u=a*l*(1-s);let d=0,h=0;for(const p of rl)for(const[b,S,v,y]of p.rects){const w=In(b-20,b+20,n)*(1-In(v-20,v+20,n)),A=In(S-20,S+20,t)*(1-In(y-20,y+20,t)),x=w*A;x>h&&(h=x,d=p.y)}const f=s<.5&&i<.5?1:0,g=d*h+u*(1-h),_=u*(1-f)+g*f,m=Math.min(s*-3.5,i*-12);return{h:_+m,bayT:s,oceanT:i,tierCover:h}}function we(n,t){return Fi(n,t).h}const zf=[.918,.851,.659],Bf=[.498,.682,.431],nu=[.541,.498,.447],kf=[.72,.68,.52];function kr(n,t,e){return[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e]}function iu(n,t){const{h:e,bayT:i,oceanT:s,tierCover:r}=Fi(n,t);if(e<.2||e>4.5&&r<.5||i>0||s>.05)return!1;const o=1.5,a=(Fi(n+o,t).h-Fi(n-o,t).h)/(2*o),c=(Fi(n,t+o).h-Fi(n,t-o).h)/(2*o);return!(Math.hypot(a,c)>.5)}function Hf(n){const t=new Float32Array(n*n),e=new Float32Array(n*n),i=new Float32Array(n*n),s=new Float32Array(n*n),r=440/(n-1);for(let a=0;a<n;a++)for(let c=0;c<n;c++){const l=(c/(n-1)-.5)*440,u=(.5-a/(n-1))*440,d=Fi(l,u),h=a*n+c;t[h]=d.h,e[h]=d.bayT,i[h]=d.oceanT,s[h]=d.tierCover}const o=new Uint8ClampedArray(n*n*4);for(let a=0;a<n;a++)for(let c=0;c<n;c++){const l=a*n+c,u=(c/(n-1)-.5)*440,d=(.5-a/(n-1))*440,h=Math.max(1,Math.round(1.5/r)),f=t[a*n+Math.max(c-h,0)],g=t[a*n+Math.min(c+h,n-1)],_=t[Math.max(a-h,0)*n+c],m=t[Math.min(a+h,n-1)*n+c],p=Math.hypot((g-f)/(2*h*r),(m-_)/(2*h*r)),[b,S,v]=Gf(t[l],e[l],i[l],p,u,d,s[l]),y=l*4;o[y]=b,o[y+1]=S,o[y+2]=v,o[y+3]=255}return o}function Gf(n,t,e,i,s,r,o){const a=Math.max(t,In(.02,.25,e));let c=kr(Bf,nu,In(3,5.5,n)*(1-o));c=kr(c,zf,a*In(-1.5,-.3,n));const l=In(-.8,-1.6,n);c=kr(c,kf,l);const u=In(.45,.75,i);u>0&&(c=kr(c,nu,u));const d=1+$h(s*.08+11.3,r*.08+7.9,3)*.07;return[Math.round(c[0]*d*255),Math.round(c[1]*d*255),Math.round(c[2]*d*255)]}const Ut=(n,t,e,i,s)=>({id:n,x:t,z:e,y:i,noIntersect:s}),ol=[Ut("ww1",-75,10),Ut("ww2",-75,70),Ut("ww3",-75,130),Ut("ww1b",-35,10),Ut("ww2b",-35,70),Ut("ww3b",-35,130),Ut("we1",85,-10),Ut("we2",85,50),Ut("we3",85,110),Ut("we1b",120,-10),Ut("we2b",120,50),Ut("bl-w",-8,100,6),Ut("bl-e",68,100,6),Ut("sw1",-75,-8),Ut("sw2",-95,-25),Ut("sw3",-65,-42),Ut("sw4",-90,-58),Ut("se1",85,-28),Ut("se2",105,-45),Ut("se3",75,-60),Ut("se4",95,-75),Ut("m1",-60,-72),Ut("m2",-20,-72),Ut("m3",20,-72),Ut("m4",60,-72),Ut("m5",-60,-105),Ut("m6",-20,-105),Ut("m7",20,-105),Ut("m8",60,-105),Ut("uc1",20,-120),Ut("uc2",-5,-135),Ut("uc3",15,-150),Ut("uc2sb1",25,-137,void 0,!0),Ut("uc2sb2",-5,-147,void 0,!0),Ut("u1",-90,-160),Ut("u2",-30,-160),Ut("u3",30,-160),Ut("u4",90,-160),Ut("u5",90,-195),Ut("u6",30,-195),Ut("u7",-30,-195),Ut("u8",-90,-195),Ut("ob1",95,-100),Ut("ob2",110,-70),Ut("mn1",-100,-25),Ut("mn2",-68,-25),Ut("mn3",-20,-25),Ut("mn4",20,-25),Ut("mn5",60,-25),Ut("ms1",-100,-120),Ut("ms2",-60,-120),Ut("ms3",-20,-120),Ut("ms5",60,-120),Ut("ue1",100,-160),Ut("ue2",100,-195),Ut("ui5",130,-160),Ut("ob3",125,-100),Ut("wx1",-15,10),Ut("wx2",-15,70),Ut("wx3",-15,130),Ut("ex1",65,-10),Ut("ex2",65,50),Ut("ex3",65,110)],bt=(n,t,e="street",i)=>({a:n,b:t,kind:e,deckY:i}),qe=[bt("ww1","ww2"),bt("ww2","ww3"),bt("ww1b","ww2b"),bt("ww2b","ww3b"),bt("ww1","ww1b"),bt("ww2","ww2b"),bt("ww3","ww3b"),bt("we1","we2"),bt("we2","we3"),bt("we1b","we2b"),bt("we1","we1b"),bt("we2","we2b"),bt("wx3","bl-w"),bt("bl-w","bl-e","bridge",6),bt("bl-e","we3"),bt("ww1","sw1","switchback"),bt("sw1","sw2","switchback"),bt("sw2","sw3","switchback"),bt("sw3","sw4","switchback"),bt("sw4","m1","switchback"),bt("we1","se1","switchback"),bt("se2","se3","switchback"),bt("se3","se4","switchback"),bt("se4","m4","switchback"),bt("m1","m2"),bt("m2","m3"),bt("m3","m4"),bt("m5","m6"),bt("m6","m7"),bt("m7","m8"),bt("m1","m5"),bt("m2","m6"),bt("m3","m7"),bt("m4","m8"),bt("m3","uc1","switchback"),bt("uc1","uc2","switchback"),bt("uc2","uc2sb1","switchback"),bt("uc2sb1","uc2sb2","switchback"),bt("uc2sb2","uc3","switchback"),bt("uc3","u3","switchback"),bt("se4","ob1"),bt("ob1","ob2"),bt("mn1","mn2"),bt("mn2","mn3"),bt("mn3","mn4"),bt("mn4","mn5"),bt("mn5","se1"),bt("mn5","m4"),bt("ms1","ms2"),bt("ms3","uc1"),bt("uc1","ms5"),bt("ms2","m5"),bt("uc1","m7"),bt("u1","u2"),bt("u2","u3"),bt("u3","u4"),bt("u4","u5"),bt("u5","u6"),bt("u6","u7"),bt("u7","u8"),bt("u8","u1"),bt("u4","ue1"),bt("ue1","ue2"),bt("ue2","u5"),bt("u4","ui5"),bt("ob1","ob3"),bt("wx1","wx2"),bt("wx2","wx3"),bt("ww1b","wx1"),bt("ww2b","wx2"),bt("ww3b","wx3"),bt("ex1","ex2"),bt("ex2","ex3"),bt("we1","ex1"),bt("we2","ex2"),bt("we3","ex3")];qe.filter(n=>n.kind==="bridge").map(n=>[n.a,n.b]);function ve(n){const t=ol.find(e=>e.id===n);if(!t)throw new Error(`unknown road node ${n}`);return t}function Ye(n){return{x:n.x,y:n.y??we(n.x,n.z),z:n.z}}function Vf(){const n=new Map;for(const t of ol)n.set(t.id,[]);for(const t of qe)n.get(t.a).push(t.b),n.get(t.b).push(t.a);return n}const Wf=1836670420,Xf=110,fr=32,qf=.07;function _n(n){let t=n>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Yf(n){const t=_n(n),e=[];for(let i=0;i<Xf;i++){const s=t()*qf,r=t()*fr,o=t()*fr;e.push({x:r,y:o,alpha:s})}return e}const Zf=20260927,su=5;function Ro(n,t,e,i){const s=n+e/2,r=t+i/2,o=[we(n,t),we(n+e,t),we(n,t+i),we(n+e,t+i),we(s,r)],a=Math.min(...o);return a<Ka?null:{minH:a,maxH:Math.max(...o)}}const ru={harbor:{w:[9,16],d:[8,14],floors:[1,2],bayWindow:!1,palettes:[0]},"old-town":{w:[8,14],d:[8,12],floors:[2,4],bayWindow:!0,palettes:[0]},"merchant-row":{w:[8,14],d:[8,12],floors:[2,3],bayWindow:!0,palettes:[0]},"bungalow-lanes":{w:[8,12],d:[8,12],floors:[1,1],bayWindow:!1,palettes:[1,2,3,4]}},Ka=-.4,$f=2.8,Kf=.7,Qn=$f+Kf,Hr=2,ts=275,ou=3.4;function gi(n,t,e,i,s,r,o,a){return n<o&&e>s&&t<a&&i>r}function ar(n,t,e,i,s,r,o,a){const c=e-n,l=i-t,u=o-s,d=a-r,h=c*d-l*u;if(Math.abs(h)<1e-9)return!1;const f=((s-n)*d-(r-t)*u)/h,g=((s-n)*l-(r-t)*c)/h;return f>=0&&f<=1&&g>=0&&g<=1}function au(n,t,e,i,s,r,o,a){return n>=s&&n<=o&&t>=r&&t<=a||e>=s&&e<=o&&i>=r&&i<=a?!0:ar(n,t,e,i,s,r,o,r)||ar(n,t,e,i,o,r,o,a)||ar(n,t,e,i,o,a,s,a)||ar(n,t,e,i,s,a,s,r)}function na(n,t,e,i,s,r){const o=s-e,a=r-i,c=o*o+a*a,l=c>0?Math.max(0,Math.min(1,((n-e)*o+(t-i)*a)/c)):0,u=e+o*l-n,d=i+a*l-t;return u*u+d*d}function Jf(n,t,e,i,s,r,o,a){const c=[[s,r,o,r],[o,r,o,a],[o,a,s,a],[s,a,s,r]];if(n>=s&&n<=o&&t>=r&&t<=a||e>=s&&e<=o&&i>=r&&i<=a)return 0;for(const[u,d,h,f]of c)if(ar(n,t,e,i,u,d,h,f))return 0;let l=1/0;for(const[u,d]of[[s,r],[o,r],[o,a],[s,a]])l=Math.min(l,na(u,d,n,t,e,i));for(const[u,d,h,f]of c)l=Math.min(l,na(n,t,u,d,h,f)),l=Math.min(l,na(e,i,u,d,h,f));return Math.sqrt(l)}function cu(n,t){for(const e of rl)for(const[i,s,r,o]of e.rects)if(n>=i&&n<r&&t>=s&&t<o)return e}function lu(n,t,e,i,s,r,o){const a=Math.max(i,Math.min(n,r)),c=Math.max(s,Math.min(t,o)),l=n-a,u=t-c;return l*l+u*u<e*e}function Co(){const n=_n(Zf),t=[],e=on.map(u=>({x0:u.min.x-Hr,z0:u.min.z-Hr,x1:u.max.x+Hr,z1:u.max.z+Hr})),i=on[3],s=(i.min.x+i.max.x)/2,r=(i.min.z+i.max.z)/2,o=26,a=qe.filter(u=>u.kind!=="bridge").map(u=>{const d=ve(u.a),h=ve(u.b);return{x0:d.x,z0:d.z,x1:h.x,z1:h.z}});let c=0;for(const u of qe){if(u.kind==="bridge")continue;const d=ve(u.a),h=ve(u.b),f=h.x-d.x,g=h.z-d.z,_=Math.hypot(f,g);if(_<10)continue;const m=f/_,p=g/_,b=-p,S=m;let v=5;for(;v<_-5&&t.length<ts;){const y=d.x+m*v,w=d.z+p*v,A=cu(y,w);if(!A){v+=6;continue}const x=A.name==="waterfront"?"harbor":A.name==="midtown"?"midtown-mix":"bungalow-lanes",E=x==="midtown-mix"?c%2===0?"old-town":"merchant-row":x,R=ru[E],C=R.w[0]+n()*(R.w[1]-R.w[0]),L=R.d[0]+n()*(R.d[1]-R.d[0]),O=R.floors[0]+Math.floor(n()*(R.floors[1]-R.floors[0]+1)),z=R.palettes[Math.floor(n()*R.palettes.length)],N=n()<.5?1:-1,U=(C*Math.abs(m)+L*Math.abs(p))/2,D=(C*Math.abs(b)+L*Math.abs(S))/2;for(const G of[N,-N]){if(t.length>=ts)break;let q=!1;for(const tt of[.5,2.5,4.5,6.5,8.5]){if(q||t.length>=ts)break;const Y=Qn+D+tt,ct=y+b*G*Y,Lt=w+S*G*Y,Rt=ct-C/2,vt=Lt-L/2;if(!cu(ct,Lt)||we(ct,Lt)<Ka||un(Rt,vt)||un(Rt+C,vt)||un(Rt,vt+L)||un(Rt+C,vt+L))continue;const $=Ro(Rt,vt,C,L);if(!$||$.maxH-$.minH>su||gi(Rt,vt,Rt+C,vt+L,me[0],me[1],me[2],me[3])||ki.some(pt=>gi(Rt,vt,Rt+C,vt+L,pt[0],pt[1],pt[2],pt[3]))||lu(s,r,o,Rt,vt,Rt+C,vt+L)||e.some(pt=>gi(Rt,vt,Rt+C,vt+L,pt.x0,pt.z0,pt.x1,pt.z1))||t.some(pt=>gi(Rt,vt,Rt+C,vt+L,pt.x,pt.z,pt.x+pt.w,pt.z+pt.d)))continue;const lt=Rt-Qn,ot=vt-Qn,Nt=Rt+C+Qn,Vt=vt+L+Qn;a.some(pt=>au(pt.x0,pt.z0,pt.x1,pt.z1,lt,ot,Nt,Vt))||(x==="midtown-mix"&&c++,t.push({x:Rt,z:vt,w:C,d:L,h:O*ou,floors:O,district:E,bayWindow:R.bayWindow,palette:z}),q=!0)}}v+=2*U+2}}const l=4;for(const u of rl)for(const[d,h,f,g]of u.rects){const _=u.name==="waterfront"?"harbor":u.name==="midtown"?"midtown-mix":"bungalow-lanes";for(let m=d+l/2;m<f&&t.length<ts;m+=l)for(let p=h+l/2;p<g&&t.length<ts;p+=l)for(let b=0;b<9&&t.length<ts;b++){const S=(n()-.5)*l*.9,v=(n()-.5)*l*.9,y=_==="midtown-mix"?c%2===0?"old-town":"merchant-row":_,w=ru[y],A=w.w[0]+n()*(w.w[1]-w.w[0]),x=w.d[0]+n()*(w.d[1]-w.d[0]),E=w.floors[0]+Math.floor(n()*(w.floors[1]-w.floors[0]+1)),R=w.palettes[Math.floor(n()*w.palettes.length)],C=m+S,L=p+v,O=C-A/2,z=L-x/2;let N=!1;for(const Y of a)if(Jf(Y.x0,Y.z0,Y.x1,Y.z1,O,z,O+A,z+x)<=15){N=!0;break}if(!N||we(C,L)<Ka||un(O,z)||un(O+A,z)||un(O,z+x)||un(O+A,z+x))continue;const U=Ro(O,z,A,x);if(!U||U.maxH-U.minH>su||gi(O,z,O+A,z+x,me[0],me[1],me[2],me[3])||ki.some(Y=>gi(O,z,O+A,z+x,Y[0],Y[1],Y[2],Y[3]))||lu(s,r,o,O,z,O+A,z+x)||e.some(Y=>gi(O,z,O+A,z+x,Y.x0,Y.z0,Y.x1,Y.z1))||t.some(Y=>gi(O,z,O+A,z+x,Y.x,Y.z,Y.x+Y.w,Y.z+Y.d)))continue;const D=O-Qn,G=z-Qn,q=O+A+Qn,tt=z+x+Qn;a.some(Y=>au(Y.x0,Y.z0,Y.x1,Y.z1,D,G,q,tt))||(_==="midtown-mix"&&c++,t.push({x:O,z,w:A,d:x,h:E*ou,floors:E,district:y,bayWindow:w.bayWindow,palette:R}))}}return t}function Kh(n){return n.map(t=>{const e=Ro(t.x,t.z,t.w,t.d),i=e?e.maxH:we(t.x+t.w/2,t.z+t.d/2);return{min:{x:t.x,y:i,z:t.z},max:{x:t.x+t.w,y:i+t.h,z:t.z+t.d},district:t.district}})}const $e=1,Qf=3,jf=100,tp=18,ep=2.2,np=7,ip=12,sp=Kh(Co()),Jh=[...on,...sp,...Df],rp=5,op=.5,si=480,ap=3.5,Qh=.9,jh=.45,cp=3.5,lp=1.5,up=3,hp=.8,uu=.2,dp=3,fp=8,pp=2,td=6;function mp(n,t){return Math.max(td,rp+op*n)*(1+t*.2)}const hu=2,gp=20,xp=.05,ed=.5,nd=3.6,Vn=(n,t,e)=>Math.max(t,Math.min(e,n)),Ja=n=>{const t=Vn(n,0,1);return t*t*(3-2*t)},du=45;function _p(n,t){const e=Math.hypot(n.x,n.z),i=or-$e-du;if(e<=i)return;const s=Ja((e-i)/du),r=n.x/e,o=n.z/e,a=t.x*r+t.z*o;if(a<=0)return;const c=a*(1-s);t.x+=r*(c-a),t.z+=o*(c-a)}const vp=n=>Math.hypot(n.x,n.y,n.z);function al(n=Pe[0].position){return{position:{...n},yaw:0,pitch:0,speed:9,throttle:9,hover:!1,velocity:{x:0,y:0,z:-9},brakeHold:!1}}function cl(){return{mode:"title",player:al(),profile:{coins:0,upgrades:{speed:0,handling:0,braking:0},furniture:[],tutorialDone:!1,runs:0,deliveries:0},run:null,paused:!1,pauseReason:"",message:"",tutorialStage:0,drop:null,descent:null,haloFade:0,homePosition:{x:0,z:3},homeFacing:0,homePanel:"none",summary:null,revision:0,coarsePointer:!1}}function Mp(n){n.mode="tutorial",n.paused=!1,n.pauseReason="",n.player=al(),n.tutorialStage=0,n.drop=null,n.descent=null,n.haloFade=0,n.message="Steer toward the glowing Harbor Cafe pad.",n.revision++}function yp(n){n.paused||n.mode!=="tutorial"&&n.mode!=="flight"||(n.player.hover=!n.player.hover,n.revision++)}function id(n,t,e=""){n.paused=t,n.pauseReason=t?e:"",n.revision++}function Sr(n){const t=n.player;if(!(t.speed>=ap))return Pe.find(e=>{const i=t.position.x-e.position.x,s=t.position.z-e.position.z;return Math.hypot(i,s)<=nd&&t.position.y>=e.position.y})}function sd(n){var e;if(n.paused)return;if(n.mode==="home"){wf(n);return}if(n.drop||n.descent||n.haloFade>0)return;if(n.mode==="tutorial"){if(((e=Sr(n))==null?void 0:e.id)!=="harbor-cafe")return;Qa(n,Pe.find(i=>i.id==="harbor-cafe"));return}if(n.mode!=="flight"||!n.run)return;if(n.run.elapsed>=si){br(n,!1);return}const t=Sr(n);t&&Qa(n,t)}function Sp(n,t){n.player.brakeHold=!1,n.haloFade=0,n.drop={stopId:t.id,t:0,parcel:t.id!=="home"},rd(n),n.message=t.id==="home"?"Banking your earnings…":"Parcel away!",n.revision++}function rd(n){n.player.speed=0,n.player.hover=!0,n.player.velocity={x:0,y:0,z:0}}function bp(n,t){var s;if(n.player.hover=!1,n.player.throttle=0,n.mode==="tutorial"){n.profile.tutorialDone=!0,n.message="Practice complete",n.mode="title",n.tutorialStage=3,n.revision++;return}const e=n.run;if(!e||e.elapsed>=si){br(n,!1);return}const i=Pe.find(r=>r.id===t);if(i){if(i.id==="home"){const r=e.earnings,o=e.deliveries;br(n,!0),n.summary=null,Za(n),n.message=`Shift complete — banked ${r} coins after ${o} ${o===1?"delivery":"deliveries"}.`;return}((s=e.job)==null?void 0:s.to)===i.id&&(e.earnings+=e.job.payout,e.deliveries++,n.profile.deliveries++,e.job=null,e.lastStop=i.id,e.offers=ad(e.seed,e.deliveries,i.id),e.returning=!1,n.mode="offers",n.message="Delivered! Choose the next parcel or return home.",n.revision++)}}function wp(n,t=Date.now()){if(n.paused||n.run||n.mode!=="title"&&n.mode!=="summary"&&n.mode!=="home")return;const e=Number.isFinite(t)?Math.floor(t):Date.now();n.player=al(),n.run={seed:e,elapsed:0,earnings:0,deliveries:0,job:null,offers:ad(e,0,"home"),returning:!1,lastStop:"home"},n.summary=null,n.homePanel="none",n.drop=null,n.descent=null,n.haloFade=0,n.mode="offers",n.message="Choose your first delivery of the day.",n.revision++}function Ep(n,t){if(n.paused||n.mode!=="offers"||!n.run||!Number.isInteger(t))return;const e=n.run.offers[t];e&&(n.run.job=e,n.run.offers=[],n.run.returning=!1,n.mode="flight",n.message=`Delivery: ${Rp(e.to)}.`,n.revision++)}function Tp(n){n.paused||n.mode!=="offers"||!n.run||n.run.deliveries===0||(n.run.job=null,n.run.offers=[],n.run.returning=!0,n.mode="flight",n.message="Return to Meg's Rooftop to bank your earnings.",n.revision++)}function br(n,t){const e=n.run;if(!e)return;n.drop=null,n.descent=null,n.haloFade=0;const i=t?e.earnings:0;n.summary={success:t,earnings:i,deliveries:e.deliveries},t&&(n.profile.coins+=i),n.profile.runs++,n.run=null,n.mode="summary",n.player.speed=0,n.player.throttle=0,n.player.hover=!0,n.player.velocity={x:0,y:0,z:0},n.message=t?"Shift complete. Earnings banked!":"Rescue called. Unbanked earnings were lost.",n.revision++}function od(n){if(n.mode==="tutorial")return Pe.find(t=>t.id==="harbor-cafe");if(n.run)return Pe.find(t=>{var e;return t.id===(n.run.returning?"home":(e=n.run.job)==null?void 0:e.to)})}function Ap(n,t,e){return(Math.atan2(t.x-n.x,-(t.z-n.z))-e)*180/Math.PI}function Rp(n){var t;return((t=Pe.find(e=>e.id===n))==null?void 0:t.name)??n}function qo(n){if(!(n.drop||n.descent)&&!(n.mode!=="tutorial"&&n.mode!=="flight"))return od(n)}function Xs(n){let t=n|0;return t=Math.imul(t^t>>>16,73244475),t=Math.imul(t^t>>>16,73244475),(t^t>>>16)>>>0}function ad(n,t,e){let i=Xs(n^Xs(t)^Xs(e.length));const s=Pe.find(l=>l.id===e),r=Pe.filter(l=>l.id!=="home"&&l.id!==e).map(l=>({stop:l,distance:Math.hypot(l.position.x-s.position.x,l.position.z-s.position.z)})).sort((l,u)=>l.distance-u.distance);i=Xs(i+1);const o=r[i%Math.min(3,r.length)],a=r.slice(-Math.min(3,r.length));i=Xs(i+2);const c=a[i%a.length];return[o,c].sort((l,u)=>l.distance-u.distance).map(({stop:l,distance:u},d)=>{const h=u<100?20:u<180?35:50;return{from:e,to:l.id,payout:h,label:d===0?"Short hop":"Long haul",parcel:"Delivery parcel"}})}function Cp(n,t){let e;for(const i of Jh){const s={x:i.min.x-$e,y:i.min.y-$e,z:i.min.z-$e},r={x:i.max.x+$e,y:i.max.y+$e,z:i.max.z+$e};let o=-1e-9,a=1,c={x:0,y:0,z:0};for(const l of["x","y","z"]){const u=n[l],d=t[l];if(Math.abs(d)<1e-9){if(u<s[l]||u>r[l]){o=2;break}continue}const h=(s[l]-u)/d,f=(r[l]-u)/d,g=Math.min(h,f),_=Math.max(h,f);if(g>o&&(o=g,c={x:0,y:0,z:0},c[l]=h<f?-1:1),a=Math.min(a,_),o>a)break}o>=0&&o<=1&&o<=a&&(!e||o<e.t)&&(e={t:o,normal:c})}return e}function cd(n,t){var e;return n.mode==="tutorial"?t.id==="harbor-cafe":n.mode!=="flight"||!n.run?!1:t.id==="home"?n.run.returning&&!n.run.job:((e=n.run.job)==null?void 0:e.to)===t.id}function Pp(n){if(n.drop||n.descent||n.haloFade>0||n.mode!=="tutorial"&&n.mode!=="flight"||Math.abs(n.player.speed)>ed)return;const t=qo(n),e=t?Sr(n):void 0;!e||e.id!==t.id||!cd(n,e)||(n.haloFade=jh)}function Lp(n){const t=qo(n),e=t?Sr(n):void 0;!e||e.id!==t.id||!cd(n,e)||Math.abs(n.player.speed)>ed||Qa(n,e)}function Qa(n,t){const e=n.player.position.x-t.position.x,i=n.player.position.z-t.position.z,s=Math.hypot(e,i),r=Math.atan2(i,e),o=Math.atan2(-Math.sin(r),-Math.cos(r)),a=Math.abs(Math.atan2(Math.sin(o-n.player.yaw),Math.cos(o-n.player.yaw)));n.descent={stopId:t.id,startY:n.player.position.y,angle:r,radius0:s,orbitR:Math.max(s,up),dir:a<=Math.PI/2?1:-1,t:0},n.player.brakeHold=!1,rd(n),n.message="Descending…",n.revision++}function Ip(n,t,e){if(n.mode==="home"){Ef(n,t,e);return}if(n.paused||n.mode!=="tutorial"&&n.mode!=="flight"&&n.mode!=="offers"||!Number.isFinite(e)||e<=0)return;if(n.drop){if(n.mode!=="flight"&&n.mode!=="tutorial")n.drop=null;else{if(n.drop.t+=Math.max(0,e),n.drop.t>=Qh){const x=n.drop.stopId;n.drop=null,bp(n,x)}n.revision++}return}const i=Math.max(0,e);if(n.haloFade>0&&(n.haloFade=Math.max(0,n.haloFade-i),n.haloFade===0&&Lp(n),n.revision++,n.haloFade>0||n.drop||n.descent))return;if(n.descent){const x=Pe.find(E=>E.id===n.descent.stopId);if(n.mode!=="flight"&&n.mode!=="tutorial"||!x)n.descent=null,n.player.hover=!1;else{const E=x.position.y+cp;if(n.player.position.y-E<=.05)n.descent=null,Sp(n,x);else{const R=n.descent,C=n.player.position.x,L=n.player.position.z,O=Math.min(fp,Math.max(pp,(n.player.position.y-E)*1.5));n.player.position.y=Math.max(E,n.player.position.y-O*i),R.t+=i,R.angle+=R.dir*lp*i;const z=R.radius0+(R.orbitR-R.radius0)*Ja(R.t/hp),N=Math.max(0,(n.player.position.y-E)/Math.max(.001,R.startY-E)),U=N>=uu?1:Ja(N/uu),D=z*U,G=x.position.x+Math.cos(R.angle)*D,q=x.position.z+Math.sin(R.angle)*D,tt=G-C,Y=q-L;if(Math.hypot(tt,Y)>.75*i){const ct=Math.atan2(tt,-Y),Lt=Math.atan2(Math.sin(ct-n.player.yaw),Math.cos(ct-n.player.yaw)),Rt=dp*i;n.player.yaw+=Math.max(-Rt,Math.min(Rt,Lt))}n.player.position.x=G,n.player.position.z=q,n.revision++}}return}if(n.run&&(n.mode==="flight"||n.mode==="offers")){if(n.run.elapsed>=si-1e-9){n.run.elapsed=si,br(n,!1);return}const x=n.run.elapsed;if(n.run.elapsed=Math.min(si,x+i),n.run.elapsed>=si-1e-9){n.run.elapsed=si,br(n,!1);return}if(Dp(n,x),n.mode==="offers"){n.revision++;return}}const s=n.player,r=Vn(t.turn,-1,1),o=Vn(t.climb,-1,1),a=tp*(1+n.profile.upgrades.speed*.1),c=ep*(1+n.profile.upgrades.handling*.2),l=mp(s.speed,n.profile.upgrades.braking);s.yaw+=r*c*i,s.pitch+=(o*.38-s.pitch)*Math.min(1,7*i),t.cutThrottle&&(s.throttle=0),s.throttle=Vn(s.throttle+Vn(t.throttle,-1,1)*np*i,0,a);let u,d=1/0;const h=s.hover?void 0:qo(n);if(h){const x=h.position.x-s.position.x,E=h.position.z-s.position.z;d=Math.hypot(x,E),d<hu?(u=0,s.brakeHold=!0):s.brakeHold&&d<gp?u=0:d>1e-6&&(s.velocity.x*x+s.velocity.z*E)/d>.5&&(u=Math.sqrt(2*td*d)),u===void 0&&(s.brakeHold=!1)}else s.brakeHold=!1;const f=s.throttle>xp?s.throttle:s.speed,g=s.hover?0:u===void 0?s.throttle:Math.min(u,f);s.speed=Vn(s.speed+Vn(g-s.speed,-l*i,ip*i),0,a),Math.abs(s.speed)<.01&&(s.speed=0),s.brakeHold&&s.speed===0&&(s.brakeHold=!1,d>=hu&&(s.throttle=0));const _={x:Math.sin(s.yaw),z:-Math.cos(s.yaw)},m=s.hover?0:o*Math.max(s.speed,3)*.7,p={x:_.x*s.speed*i,y:m*i,z:_.z*s.speed*i};_p(s.position,p);const b=s.position.x,S=s.position.y,v=s.position.z;let y={...p};for(let x=0;x<3;x++){const E=Cp(s.position,y);if(!E){s.position.x+=y.x,s.position.y+=y.y,s.position.z+=y.z;break}if(!(E.normal.x||E.normal.y||E.normal.z))break;const R=Math.max(0,E.t-1e-4);s.position.x+=y.x*R,s.position.y+=y.y*R,s.position.z+=y.z*R;const C=1-R;if(y={x:E.normal.x?0:y.x*C,y:E.normal.y?0:y.y*C,z:E.normal.z?0:y.z*C},!y.x&&!y.y&&!y.z)break}for(let x=0;x<4;x++){let E=!1;for(const R of Jh){const C=R.min.x-$e,L=R.max.x+$e,O=R.min.y-$e,z=R.max.y+$e,N=R.min.z-$e,U=R.max.z+$e,D=s.position;if(D.x<=C||D.x>=L||D.y<=O||D.y>=z||D.z<=N||D.z>=U)continue;const G=D.x-C,q=L-D.x,tt=D.y-O,Y=z-D.y,ct=D.z-N,Lt=U-D.z,Rt=Math.min(G,q,tt,Y,ct,Lt),vt=.02;Rt===G?D.x=C-vt:Rt===q?D.x=L+vt:Rt===tt?D.y=O-vt:Rt===Y?D.y=z+vt:Rt===ct?D.z=N-vt:D.z=U+vt,E=!0}if(!E)break}s.position.x=Vn(s.position.x,-or+$e,or-$e);const w=Math.max(we(s.position.x,s.position.z),0)+Qf;s.position.y=Vn(s.position.y,w,jf),s.position.z=Vn(s.position.z,-or+$e,or-$e),s.velocity={x:(s.position.x-b)/i,y:(s.position.y-S)/i,z:(s.position.z-v)/i};const A=vp({x:s.position.x-b,y:s.position.y-S,z:s.position.z-v});n.mode==="tutorial"&&n.tutorialStage===0&&A>.1?(n.tutorialStage=1,n.message=n.coarsePointer?"Release the stick to slow down and hover.":"Press Space to slow down and hover."):n.mode==="tutorial"&&n.tutorialStage===1&&Math.abs(s.speed)<.5&&(n.tutorialStage=2,n.message="Nice and steady. Drift over the glowing Harbor Cafe pad — the parcel drops itself."),Pp(n),n.revision++}function Dp(n,t){const e=si-n.run.elapsed,i=si-t;i>30&&e<=30?n.message="30 seconds left — return home before nightfall!":i>60&&e<=60?n.message="One minute left — Meg needs to head home.":i>120&&e<=120&&(n.message="Two minutes left — finish up before nightfall.")}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ll="185",Np=0,fu=1,Up=2,Mo=1,Fp=2,cr=3,Ai=0,an=1,He=2,li=0,As=1,ja=2,pu=3,mu=4,Op=5,Oi=100,zp=101,Bp=102,kp=103,Hp=104,Gp=200,Vp=201,Wp=202,Xp=203,tc=204,ec=205,qp=206,Yp=207,Zp=208,$p=209,Kp=210,Jp=211,Qp=212,jp=213,tm=214,nc=0,ic=1,sc=2,Ds=3,rc=4,oc=5,ac=6,cc=7,ld=0,em=1,nm=2,Yn=0,ud=1,hd=2,dd=3,ul=4,fd=5,pd=6,md=7,gd=300,Wi=301,Ns=302,ia=303,sa=304,Yo=306,Po=1e3,oi=1001,lc=1002,Ze=1003,im=1004,Gr=1005,nn=1006,ra=1007,Hi=1008,Mn=1009,xd=1010,_d=1011,wr=1012,hl=1013,Kn=1014,Un=1015,hi=1016,dl=1017,fl=1018,Er=1020,vd=35902,Md=35899,yd=1021,Sd=1022,Fn=1023,di=1026,Gi=1027,pl=1028,ml=1029,Xi=1030,gl=1031,xl=1033,yo=33776,So=33777,bo=33778,wo=33779,uc=35840,hc=35841,dc=35842,fc=35843,pc=36196,mc=37492,gc=37496,xc=37488,_c=37489,Lo=37490,vc=37491,Mc=37808,yc=37809,Sc=37810,bc=37811,wc=37812,Ec=37813,Tc=37814,Ac=37815,Rc=37816,Cc=37817,Pc=37818,Lc=37819,Ic=37820,Dc=37821,Nc=36492,Uc=36494,Fc=36495,Oc=36283,zc=36284,Io=36285,Bc=36286,sm=3200,kc=0,rm=1,Ei="",Ke="srgb",Do="srgb-linear",No="linear",ge="srgb",es=7680,gu=519,om=512,am=513,cm=514,_l=515,lm=516,um=517,vl=518,hm=519,Hc=35044,xu="300 es",qn=2e3,Tr=2001;function dm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Uo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function fm(){const n=Uo("canvas");return n.style.display="block",n}const _u={};function Fo(...n){const t="THREE."+n.shift();console.log(t,...n)}function bd(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Kt(...n){n=bd(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ue(...n){n=bd(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Rs(...n){const t=n.join(" ");t in _u||(_u[t]=!0,Kt(...n))}function pm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const mm={[nc]:ic,[sc]:ac,[rc]:cc,[Ds]:oc,[ic]:nc,[ac]:sc,[cc]:rc,[oc]:Ds};class $i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vu=1234567;const pr=Math.PI/180,Ar=180/Math.PI;function Zn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]).toLowerCase()}function oe(n,t,e){return Math.max(t,Math.min(e,n))}function Ml(n,t){return(n%t+t)%t}function gm(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function xm(n,t,e){return n!==t?(e-n)/(t-n):0}function mr(n,t,e){return(1-e)*n+e*t}function _m(n,t,e,i){return mr(n,t,1-Math.exp(-e*i))}function vm(n,t=1){return t-Math.abs(Ml(n,t*2)-t)}function Mm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function ym(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Sm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function bm(n,t){return n+Math.random()*(t-n)}function wm(n){return n*(.5-Math.random())}function Em(n){n!==void 0&&(vu=n);let t=vu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tm(n){return n*pr}function Am(n){return n*Ar}function Rm(n){return(n&n-1)===0&&n!==0}function Cm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Pm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Lm(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),u=o((t+i)/2),d=r((t-i)/2),h=o((t-i)/2),f=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:Kt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Nn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ln={DEG2RAD:pr,RAD2DEG:Ar,generateUUID:Zn,clamp:oe,euclideanModulo:Ml,mapLinear:gm,inverseLerp:xm,lerp:mr,damp:_m,pingpong:vm,smoothstep:Mm,smootherstep:ym,randInt:Sm,randFloat:bm,randFloatSpread:wm,seededRandom:Em,degToRad:Tm,radToDeg:Am,isPowerOfTwo:Rm,ceilPowerOfTwo:Cm,floorPowerOfTwo:Pm,setQuaternionFromProperEuler:Lm,normalize:xe,denormalize:Nn},zl=class zl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zl.prototype.isVector2=!0;let ht=zl;class Hs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(d!==_||c!==h||l!==f||u!==g){let m=c*h+l*f+u*g+d*_;m<0&&(h=-h,f=-f,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const b=Math.acos(m),S=Math.sin(b);p=Math.sin(p*b)/S,a=Math.sin(a*b)/S,c=c*p+h*a,l=l*p+f*a,u=u*p+g*a,d=d*p+_*a}else{c=c*p+h*a,l=l*p+f*a,u=u*p+g*a,d=d*p+_*a;const b=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=b,l*=b,u*=b,d*=b}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-a*f,t[e+2]=l*g+u*f+a*h-c*d,t[e+3]=u*g-a*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(r/2),h=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bl=class Bl{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+c*l+o*d-a*u,this.y=i+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return oa.copy(this).projectOnVector(t),this.sub(oa)}reflect(t){return this.sub(oa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bl.prototype.isVector3=!0;let I=Bl;const oa=new I,Mu=new Hs,kl=class kl{constructor(t,e,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],b=s[1],S=s[4],v=s[7],y=s[2],w=s[5],A=s[8];return r[0]=o*_+a*b+c*y,r[3]=o*m+a*S+c*w,r[6]=o*p+a*v+c*A,r[1]=l*_+u*b+d*y,r[4]=l*m+u*S+d*w,r[7]=l*p+u*v+d*A,r[2]=h*_+f*b+g*y,r[5]=h*m+f*S+g*w,r[8]=h*p+f*v+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*r,f=l*r-o*c,g=e*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*l-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=h*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(i*c-l*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(aa.makeScale(t,e)),this}rotate(t){return Rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(aa.makeRotation(-t)),this}translate(t,e){return Rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};kl.prototype.isMatrix3=!0;let te=kl;const aa=new te,yu=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Su=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Im(){const n={enabled:!0,workingColorSpace:Do,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ge&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ei?No:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Do]:{primaries:t,whitePoint:i,transfer:No,toXYZ:yu,fromXYZ:Su,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:i,transfer:ge,toXYZ:yu,fromXYZ:Su,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),n}const he=Im();function ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Cs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ns;class Dm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ns===void 0&&(ns=Uo("canvas")),ns.width=t.width,ns.height=t.height;const s=ns.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ns}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Uo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ui(e[i]/255)*255):e[i]=ui(e[i]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Nm=0;class yl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Zn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ca(s[o].image)):r.push(ca(s[o]))}else r=ca(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function ca(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}let Um=0;const la=new I;class Je extends $i{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,i=oi,s=oi,r=nn,o=Hi,a=Fn,c=Mn,l=Je.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=Zn(),this.name="",this.source=new yl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(la).x}get height(){return this.source.getSize(la).y}get depth(){return this.source.getSize(la).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Po:t.x=t.x-Math.floor(t.x);break;case oi:t.x=t.x<0?0:1;break;case lc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Po:t.y=t.y-Math.floor(t.y);break;case oi:t.y=t.y<0?0:1;break;case lc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=gd;Je.DEFAULT_ANISOTROPY=1;const Hl=class Hl{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,v=(f+1)/2,y=(p+1)/2,w=(u+h)/4,A=(d+_)/4,x=(g+m)/4;return S>v&&S>y?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=w/i,r=A/i):v>y?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=w/s,r=x/s):y<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),i=A/r,s=x/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-_)/b,this.z=(h-u)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hl.prototype.isVector4=!0;let Ie=Hl;class Fm extends $i{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new Je(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new yl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends Fm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class wd extends Je{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Om extends Je{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xo=class Xo{constructor(t,e,i,s,r,o,a,c,l,u,d,h,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,d,h,f,g,_,m)}set(t,e,i,s,r,o,a,c,l,u,d,h,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xo().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/is.setFromMatrixColumn(t,0).length(),r=1/is.setFromMatrixColumn(t,1).length(),o=1/is.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=o*u,f=o*d,g=a*u,_=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-_*l,e[9]=-a*c,e[2]=_-h*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,g=l*u,_=l*d;e[0]=h+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=_+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,g=l*u,_=l*d;e[0]=h-_*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,f=o*d,g=a*u,_=a*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+_,e[1]=c*d,e[5]=_*l+h,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-h*d,e[8]=g*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-_*d}else if(t.order==="XZY"){const h=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+_,e[5]=o*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zm,t,Bm)}lookAt(t,e,i){const s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),xi.crossVectors(i,mn),xi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),xi.crossVectors(i,mn)),xi.normalize(),Vr.crossVectors(mn,xi),s[0]=xi.x,s[4]=Vr.x,s[8]=mn.x,s[1]=xi.y,s[5]=Vr.y,s[9]=mn.y,s[2]=xi.z,s[6]=Vr.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],b=i[3],S=i[7],v=i[11],y=i[15],w=s[0],A=s[4],x=s[8],E=s[12],R=s[1],C=s[5],L=s[9],O=s[13],z=s[2],N=s[6],U=s[10],D=s[14],G=s[3],q=s[7],tt=s[11],Y=s[15];return r[0]=o*w+a*R+c*z+l*G,r[4]=o*A+a*C+c*N+l*q,r[8]=o*x+a*L+c*U+l*tt,r[12]=o*E+a*O+c*D+l*Y,r[1]=u*w+d*R+h*z+f*G,r[5]=u*A+d*C+h*N+f*q,r[9]=u*x+d*L+h*U+f*tt,r[13]=u*E+d*O+h*D+f*Y,r[2]=g*w+_*R+m*z+p*G,r[6]=g*A+_*C+m*N+p*q,r[10]=g*x+_*L+m*U+p*tt,r[14]=g*E+_*O+m*D+p*Y,r[3]=b*w+S*R+v*z+y*G,r[7]=b*A+S*C+v*N+y*q,r[11]=b*x+S*L+v*U+y*tt,r[15]=b*E+S*O+v*D+y*Y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15],b=c*f-l*h,S=a*f-l*d,v=a*h-c*d,y=o*f-l*u,w=o*h-c*u,A=o*d-a*u;return e*(_*b-m*S+p*v)-i*(g*b-m*y+p*w)+s*(g*S-_*y+p*A)-r*(g*v-_*w+m*A)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=e*a-i*o,S=e*c-s*o,v=e*l-r*o,y=i*c-s*a,w=i*l-r*a,A=s*l-r*c,x=u*_-d*g,E=u*m-h*g,R=u*p-f*g,C=d*m-h*_,L=d*p-f*_,O=h*p-f*m,z=b*O-S*L+v*C+y*R-w*E+A*x;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/z;return t[0]=(a*O-c*L+l*C)*N,t[1]=(s*L-i*O-r*C)*N,t[2]=(_*A-m*w+p*y)*N,t[3]=(h*w-d*A-f*y)*N,t[4]=(c*R-o*O-l*E)*N,t[5]=(e*O-s*R+r*E)*N,t[6]=(m*v-g*A-p*S)*N,t[7]=(u*A-h*v+f*S)*N,t[8]=(o*L-a*R+l*x)*N,t[9]=(i*R-e*L-r*x)*N,t[10]=(g*w-_*v+p*b)*N,t[11]=(d*v-u*w-f*b)*N,t[12]=(a*E-o*C-c*x)*N,t[13]=(e*C-i*E+s*x)*N,t[14]=(_*S-g*y-m*b)*N,t[15]=(u*y-d*S+h*b)*N,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,h=r*l,f=r*u,g=r*d,_=o*u,m=o*d,p=a*d,b=c*l,S=c*u,v=c*d,y=i.x,w=i.y,A=i.z;return s[0]=(1-(_+p))*y,s[1]=(f+v)*y,s[2]=(g-S)*y,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(h+p))*w,s[6]=(m+b)*w,s[7]=0,s[8]=(g+S)*A,s[9]=(m-b)*A,s[10]=(1-(h+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=is.set(s[0],s[1],s[2]).length();const a=is.set(s[4],s[5],s[6]).length(),c=is.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Tn.copy(this);const l=1/o,u=1/a,d=1/c;return Tn.elements[0]*=l,Tn.elements[1]*=l,Tn.elements[2]*=l,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,e.setFromRotationMatrix(Tn),i.x=o,i.y=a,i.z=c,this}makePerspective(t,e,i,s,r,o,a=qn,c=!1){const l=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===qn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Tr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=qn,c=!1){const l=this.elements,u=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),f=-(i+s)/(i-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===qn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Tr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Xo.prototype.isMatrix4=!0;let ye=Xo;const is=new I,Tn=new ye,zm=new I(0,0,0),Bm=new I(1,1,1),xi=new I,Vr=new I,mn=new I,bu=new ye,wu=new Hs;class qi{constructor(t=0,e=0,i=0,s=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return bu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wu.setFromEuler(this),this.setFromQuaternion(wu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class Sl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let km=0;const Eu=new I,ss=new Hs,jn=new ye,Wr=new I,qs=new I,Hm=new I,Gm=new Hs,Tu=new I(1,0,0),Au=new I(0,1,0),Ru=new I(0,0,1),Cu={type:"added"},Vm={type:"removed"},rs={type:"childadded",child:null},ua={type:"childremoved",child:null};class ze extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ze.DEFAULT_UP.clone();const t=new I,e=new qi,i=new Hs,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new te}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(Tu,t)}rotateY(t){return this.rotateOnAxis(Au,t)}rotateZ(t){return this.rotateOnAxis(Ru,t)}translateOnAxis(t,e){return Eu.copy(t).applyQuaternion(this.quaternion),this.position.add(Eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tu,t)}translateY(t){return this.translateOnAxis(Au,t)}translateZ(t){return this.translateOnAxis(Ru,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Wr.copy(t):Wr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(qs,Wr,this.up):jn.lookAt(Wr,qs,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(jn),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cu),rs.child=t,this.dispatchEvent(rs),rs.child=null):ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vm),ua.child=t,this.dispatchEvent(ua),ua.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cu),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,Hm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,Gm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ze.DEFAULT_UP=new I(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ce extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wm={type:"move"};class ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ce;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function da(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ae{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=he.workingColorSpace){if(t=Ml(t,1),e=oe(e,0,1),i=oe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=da(o,r,t+1/3),this.g=da(o,r,t),this.b=da(o,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=Ke){function i(r){r!==void 0&&parseFloat(r)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const i=Ed[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return he.workingToColorSpace(tn.copy(this),t),Math.round(oe(tn.r*255,0,255))*65536+Math.round(oe(tn.g*255,0,255))*256+Math.round(oe(tn.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(tn.copy(this),e);const i=tn.r,s=tn.g,r=tn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=Ke){he.workingToColorSpace(tn.copy(this),t);const e=tn.r,i=tn.g,s=tn.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(Xr);const i=mr(_i.h,Xr.h,e),s=mr(_i.s,Xr.s,e),r=mr(_i.l,Xr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new ae;ae.NAMES=Ed;class Oo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ae(t),this.density=e}clone(){return new Oo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Xm extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const An=new I,ti=new I,fa=new I,ei=new I,os=new I,as=new I,Pu=new I,pa=new I,ma=new I,ga=new I,xa=new Ie,_a=new Ie,va=new Ie;class wn{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),An.subVectors(t,e),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){An.subVectors(s,e),ti.subVectors(i,e),fa.subVectors(t,e);const o=An.dot(An),a=An.dot(ti),c=An.dot(fa),l=ti.dot(ti),u=ti.dot(fa),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ei.x),c.addScaledVector(o,ei.y),c.addScaledVector(a,ei.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return xa.setScalar(0),_a.setScalar(0),va.setScalar(0),xa.fromBufferAttribute(t,e),_a.fromBufferAttribute(t,i),va.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(xa,r.x),o.addScaledVector(_a,r.y),o.addScaledVector(va,r.z),o}static isFrontFacing(t,e,i,s){return An.subVectors(i,e),ti.subVectors(t,e),An.cross(ti).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),An.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return wn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;os.subVectors(s,i),as.subVectors(r,i),pa.subVectors(t,i);const c=os.dot(pa),l=as.dot(pa);if(c<=0&&l<=0)return e.copy(i);ma.subVectors(t,s);const u=os.dot(ma),d=as.dot(ma);if(u>=0&&d<=u)return e.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(os,o);ga.subVectors(t,r);const f=os.dot(ga),g=as.dot(ga);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(as,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Pu.subVectors(r,s),a=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(Pu,a);const p=1/(m+_+h);return o=_*p,a=h*p,e.copy(i).addScaledVector(os,o).addScaledVector(as,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ki{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qr.copy(i.boundingBox)),qr.applyMatrix4(t.matrixWorld),this.union(qr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),Yr.subVectors(this.max,Ys),cs.subVectors(t.a,Ys),ls.subVectors(t.b,Ys),us.subVectors(t.c,Ys),vi.subVectors(ls,cs),Mi.subVectors(us,ls),Ci.subVectors(cs,us);let e=[0,-vi.z,vi.y,0,-Mi.z,Mi.y,0,-Ci.z,Ci.y,vi.z,0,-vi.x,Mi.z,0,-Mi.x,Ci.z,0,-Ci.x,-vi.y,vi.x,0,-Mi.y,Mi.x,0,-Ci.y,Ci.x,0];return!Ma(e,cs,ls,us,Yr)||(e=[1,0,0,0,1,0,0,0,1],!Ma(e,cs,ls,us,Yr))?!1:(Zr.crossVectors(vi,Mi),e=[Zr.x,Zr.y,Zr.z],Ma(e,cs,ls,us,Yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ni=[new I,new I,new I,new I,new I,new I,new I,new I],Rn=new I,qr=new Ki,cs=new I,ls=new I,us=new I,vi=new I,Mi=new I,Ci=new I,Ys=new I,Yr=new I,Zr=new I,Pi=new I;function Ma(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Pi.fromArray(n,r);const a=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),c=t.dot(Pi),l=e.dot(Pi),u=i.dot(Pi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Be=new I,$r=new ht;let qm=0;class fn extends $i{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Hc,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Nn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=xe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hc&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Td extends fn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ad extends fn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Jt extends fn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Ym=new Ki,Zs=new I,ya=new I;class Dr{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ym.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);const e=Zs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Zs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ya.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(ya)),this.expandByPoint(Zs.copy(t.center).sub(ya))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Zm=0;const Sn=new ye,Sa=new ze,hs=new I,gn=new Ki,$s=new Ki,Xe=new I;class Te extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dm(t)?Ad:Td)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new te().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,i){return Sn.makeTranslation(t,e,i),this.applyMatrix4(Sn),this}scale(t,e,i){return Sn.makeScale(t,e,i),this.applyMatrix4(Sn),this}lookAt(t){return Sa.lookAt(t),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(gn.min,$s.min),gn.expandByPoint(Xe),Xe.addVectors(gn.max,$s.max),gn.expandByPoint(Xe)):(gn.expandByPoint($s.min),gn.expandByPoint($s.max))}gn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Xe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Xe.fromBufferAttribute(a,l),c&&(hs.fromBufferAttribute(t,l),Xe.add(hs)),s=Math.max(s,i.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new fn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let x=0;x<i.count;x++)a[x]=new I,c[x]=new I;const l=new I,u=new I,d=new I,h=new ht,f=new ht,g=new ht,_=new I,m=new I;function p(x,E,R){l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,R),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,R),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),a[x].add(_),a[E].add(_),a[R].add(_),c[x].add(m),c[E].add(m),c[R].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let x=0,E=b.length;x<E;++x){const R=b[x],C=R.start,L=R.count;for(let O=C,z=C+L;O<z;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const S=new I,v=new I,y=new I,w=new I;function A(x){y.fromBufferAttribute(s,x),w.copy(y);const E=a[x];S.copy(E),S.sub(y.multiplyScalar(y.dot(E))).normalize(),v.crossVectors(w,E);const C=v.dot(c[x])<0?-1:1;o.setXYZW(x,S.x,S.y,S.z,C)}for(let x=0,E=b.length;x<E;++x){const R=b[x],C=R.start,L=R.count;for(let O=C,z=C+L;O<z;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,u=new I,d=new I;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new fn(h,u,d)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Te,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $m{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Hc,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new I;class zo{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Nn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Nn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Fo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new fn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new zo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Fo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Km=0;class Gs extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=As,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tc,this.blendDst=ec,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(i.blending=this.blending),this.side!==Ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tc&&(i.blendSrc=this.blendSrc),this.blendDst!==ec&&(i.blendDst=this.blendDst),this.blendEquation!==Oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ae().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ht().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class bl extends Gs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ds;const Ks=new I,fs=new I,ps=new I,ms=new ht,Js=new ht,Rd=new ye,Kr=new I,Qs=new I,Jr=new I,Lu=new ht,ba=new ht,Iu=new ht;class Gc extends ze{constructor(t=new bl){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new Te;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new $m(e,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new zo(i,3,0,!1)),ds.setAttribute("uv",new zo(i,2,3,!1))}this.geometry=ds,this.material=t,this.center=new ht(.5,.5),this.count=1}raycast(t,e){t.camera===null&&ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),Rd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ps.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Qr(Kr.set(-.5,-.5,0),ps,o,fs,s,r),Qr(Qs.set(.5,-.5,0),ps,o,fs,s,r),Qr(Jr.set(.5,.5,0),ps,o,fs,s,r),Lu.set(0,0),ba.set(1,0),Iu.set(1,1);let a=t.ray.intersectTriangle(Kr,Qs,Jr,!1,Ks);if(a===null&&(Qr(Qs.set(-.5,.5,0),ps,o,fs,s,r),ba.set(0,1),a=t.ray.intersectTriangle(Kr,Jr,Qs,!1,Ks),a===null))return;const c=t.ray.origin.distanceTo(Ks);c<t.near||c>t.far||e.push({distance:c,point:Ks.clone(),uv:wn.getInterpolation(Ks,Kr,Qs,Jr,Lu,ba,Iu,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Qr(n,t,e,i,s,r){ms.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Js.x=r*ms.x-s*ms.y,Js.y=s*ms.x+r*ms.y):Js.copy(ms),n.copy(t),n.x+=Js.x,n.y+=Js.y,n.applyMatrix4(Rd)}const ii=new I,wa=new I,jr=new I,yi=new I,Ea=new I,to=new I,Ta=new I;class Cd{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){wa.copy(t).add(e).multiplyScalar(.5),jr.copy(e).sub(t).normalize(),yi.copy(this.origin).sub(wa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(jr),a=yi.dot(this.direction),c=-yi.dot(jr),l=yi.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(wa).addScaledVector(jr,h),f}intersectSphere(t,e){ii.subVectors(t.center,this.origin);const i=ii.dot(this.direction),s=ii.dot(ii)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,i,s,r){Ea.subVectors(e,t),to.subVectors(i,t),Ta.crossVectors(Ea,to);let o=this.direction.dot(Ta),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,t);const c=a*this.direction.dot(to.crossVectors(yi,to));if(c<0)return null;const l=a*this.direction.dot(Ea.cross(yi));if(l<0||c+l>o)return null;const u=-a*yi.dot(Ta);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ln extends Gs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Du=new ye,Li=new Cd,eo=new Dr,Nu=new I,no=new I,io=new I,so=new I,Aa=new I,ro=new I,Uu=new I,oo=new I;class J extends ze{constructor(t=new Te,e=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ro.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(Aa.fromBufferAttribute(d,t),o?ro.addScaledVector(Aa,u):ro.addScaledVector(Aa.sub(e),u))}e.add(ro)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(eo.containsPoint(Li.origin)===!1&&(Li.intersectSphere(eo,Nu)===null||Li.origin.distanceToSquared(Nu)>(t.far-t.near)**2))&&(Du.copy(r).invert(),Li.copy(t.ray).applyMatrix4(Du),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,y=S;v<y;v+=3){const w=a.getX(v),A=a.getX(v+1),x=a.getX(v+2);s=ao(this,p,t,i,l,u,d,w,A,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);s=ao(this,o,t,i,l,u,d,b,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,y=S;v<y;v+=3){const w=v,A=v+1,x=v+2;s=ao(this,p,t,i,l,u,d,w,A,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=m,S=m+1,v=m+2;s=ao(this,o,t,i,l,u,d,b,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Jm(n,t,e,i,s,r,o,a){let c;if(t.side===an?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Ai,a),c===null)return null;oo.copy(a),oo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(oo);return l<e.near||l>e.far?null:{distance:l,point:oo.clone(),object:n}}function ao(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,no),n.getVertexPosition(c,io),n.getVertexPosition(l,so);const u=Jm(n,t,e,i,no,io,so,Uu);if(u){const d=new I;wn.getBarycoord(Uu,no,io,so,d),s&&(u.uv=wn.getInterpolatedAttribute(s,a,c,l,d,new ht)),r&&(u.uv1=wn.getInterpolatedAttribute(r,a,c,l,d,new ht)),o&&(u.normal=wn.getInterpolatedAttribute(o,a,c,l,d,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new I,materialIndex:0};wn.getNormal(no,io,so,h.normal),u.face=h,u.barycoord=d}return u}class Pd extends Je{constructor(t=null,e=1,i=1,s,r,o,a,c,l=Ze,u=Ze,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fu extends fn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const gs=new ye,Ou=new ye,co=[],zu=new Ki,Qm=new ye,js=new J,tr=new Dr;class xn extends J{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Qm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ki),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,gs),zu.copy(t.boundingBox).applyMatrix4(gs),this.boundingBox.union(zu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,gs),tr.copy(t.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(i),t.ray.intersectsSphere(tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gs),Ou.multiplyMatrices(i,gs),js.matrixWorld=Ou,js.raycast(t,co);for(let o=0,a=co.length;o<a;o++){const c=co[o];c.instanceId=r,c.object=this,e.push(c)}co.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Fu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Pd(new Float32Array(s*this.count),s,this.count,pl,Un));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ra=new I,jm=new I,t0=new te;class Ui{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ra.subVectors(i,e).cross(jm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(Ra),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||t0.getNormalMatrix(t),s=this.coplanarPoint(Ra).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new Dr,e0=new ht(.5,.5),lo=new I;class wl{constructor(t=new Ui,e=new Ui,i=new Ui,s=new Ui,r=new Ui,o=new Ui){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=qn,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],b=r[12],S=r[13],v=r[14],y=r[15];if(s[0].setComponents(l-o,f-u,p-g,y-b).normalize(),s[1].setComponents(l+o,f+u,p+g,y+b).normalize(),s[2].setComponents(l+a,f+d,p+_,y+S).normalize(),s[3].setComponents(l-a,f-d,p-_,y-S).normalize(),i)s[4].setComponents(c,h,m,v).normalize(),s[5].setComponents(l-c,f-h,p-m,y-v).normalize();else if(s[4].setComponents(l-c,f-h,p-m,y-v).normalize(),e===qn)s[5].setComponents(l+c,f+h,p+m,y+v).normalize();else if(e===Tr)s[5].setComponents(c,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){Ii.center.set(0,0,0);const e=e0.distanceTo(t.center);return Ii.radius=.7071067811865476+e,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(lo.x=s.normal.x>0?t.max.x:t.min.x,lo.y=s.normal.y>0?t.max.y:t.min.y,lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(lo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ld extends Je{constructor(t=[],e=Wi,i,s,r,o,a,c,l,u){super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Us extends Je{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fs extends Je{constructor(t,e,i=Kn,s,r,o,a=Ze,c=Ze,l,u=di,d=1){if(u!==di&&u!==Gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class n0 extends Fs{constructor(t,e=Kn,i=Wi,s,r,o=Ze,a=Ze,c,l=di){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Id extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Qt extends Te{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(d,2));function g(_,m,p,b,S,v,y,w,A,x,E){const R=v/A,C=y/x,L=v/2,O=y/2,z=w/2,N=A+1,U=x+1;let D=0,G=0;const q=new I;for(let tt=0;tt<U;tt++){const Y=tt*C-O;for(let ct=0;ct<N;ct++){const Lt=ct*R-L;q[_]=Lt*b,q[m]=Y*S,q[p]=z,l.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[p]=w>0?1:-1,u.push(q.x,q.y,q.z),d.push(ct/A),d.push(1-tt/x),D+=1}}for(let tt=0;tt<x;tt++)for(let Y=0;Y<A;Y++){const ct=h+Y+N*tt,Lt=h+Y+N*(tt+1),Rt=h+(Y+1)+N*(tt+1),vt=h+(Y+1)+N*tt;c.push(ct,Lt,vt),c.push(Lt,Rt,vt),G+=6}a.addGroup(f,G,E),f+=G,h+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Bo extends Te{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],u=e/2,d=Math.PI/2*t,h=e,f=2*d+h,g=i*2+r,_=s+1,m=new I,p=new I;for(let b=0;b<=g;b++){let S=0,v=0,y=0,w=0;if(b<=i){const E=b/i,R=E*Math.PI/2;v=-u-t*Math.cos(R),y=t*Math.sin(R),w=-t*Math.cos(R),S=E*d}else if(b<=i+r){const E=(b-i)/r;v=-u+E*e,y=t,w=0,S=d+E*h}else{const E=(b-i-r)/i,R=E*Math.PI/2;v=u+t*Math.sin(R),y=t*Math.cos(R),w=t*Math.sin(R),S=d+h+E*d}const A=Math.max(0,Math.min(1,S/f));let x=0;b===0?x=.5/s:b===g&&(x=-.5/s);for(let E=0;E<=s;E++){const R=E/s,C=R*Math.PI*2,L=Math.sin(C),O=Math.cos(C);p.x=-y*O,p.y=v,p.z=y*L,a.push(p.x,p.y,p.z),m.set(-y*O,w,y*L),m.normalize(),c.push(m.x,m.y,m.z),l.push(R+x,A)}if(b>0){const E=(b-1)*_;for(let R=0;R<s;R++){const C=E+R,L=E+R+1,O=b*_+R,z=b*_+R+1;o.push(C,L,O),o.push(L,z,O)}}}this.setIndex(o),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class El extends Te{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new I,u=new ht;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const f=i+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new El(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class pe extends Te{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const _=[],m=i/2;let p=0;b(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(f,2));function b(){const v=new I,y=new I;let w=0;const A=(e-t)/i;for(let x=0;x<=r;x++){const E=[],R=x/r,C=R*(e-t)+t;for(let L=0;L<=s;L++){const O=L/s,z=O*c+a,N=Math.sin(z),U=Math.cos(z);y.x=C*N,y.y=-R*i+m,y.z=C*U,d.push(y.x,y.y,y.z),v.set(N,A,U).normalize(),h.push(v.x,v.y,v.z),f.push(O,1-R),E.push(g++)}_.push(E)}for(let x=0;x<s;x++)for(let E=0;E<r;E++){const R=_[E][x],C=_[E+1][x],L=_[E+1][x+1],O=_[E][x+1];(t>0||E!==0)&&(u.push(R,C,O),w+=3),(e>0||E!==r-1)&&(u.push(C,L,O),w+=3)}l.addGroup(p,w,0),p+=w}function S(v){const y=g,w=new ht,A=new I;let x=0;const E=v===!0?t:e,R=v===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*R,0),h.push(0,R,0),f.push(.5,.5),g++;const C=g;for(let L=0;L<=s;L++){const z=L/s*c+a,N=Math.cos(z),U=Math.sin(z);A.x=E*U,A.y=m*R,A.z=E*N,d.push(A.x,A.y,A.z),h.push(0,R,0),w.x=N*.5+.5,w.y=U*.5*R+.5,f.push(w.x,w.y),g++}for(let L=0;L<s;L++){const O=y+L,z=C+L;v===!0?u.push(z,z+1,O):u.push(z+1,z,O),x+=3}l.addGroup(p,x,v===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class en extends pe{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new en(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Tl extends Te{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const S=new I,v=new I,y=new I;for(let w=0;w<e.length;w+=3)f(e[w+0],S),f(e[w+1],v),f(e[w+2],y),c(S,v,y,b)}function c(b,S,v,y){const w=y+1,A=[];for(let x=0;x<=w;x++){A[x]=[];const E=b.clone().lerp(v,x/w),R=S.clone().lerp(v,x/w),C=w-x;for(let L=0;L<=C;L++)L===0&&x===w?A[x][L]=E:A[x][L]=E.clone().lerp(R,L/C)}for(let x=0;x<w;x++)for(let E=0;E<2*(w-x)-1;E++){const R=Math.floor(E/2);E%2===0?(h(A[x][R+1]),h(A[x+1][R]),h(A[x][R])):(h(A[x][R+1]),h(A[x+1][R+1]),h(A[x+1][R]))}}function l(b){const S=new I;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(b),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function u(){const b=new I;for(let S=0;S<r.length;S+=3){b.x=r[S+0],b.y=r[S+1],b.z=r[S+2];const v=m(b)/2/Math.PI+.5,y=p(b)/Math.PI+.5;o.push(v,1-y)}g(),d()}function d(){for(let b=0;b<o.length;b+=6){const S=o[b+0],v=o[b+2],y=o[b+4],w=Math.max(S,v,y),A=Math.min(S,v,y);w>.9&&A<.1&&(S<.2&&(o[b+0]+=1),v<.2&&(o[b+2]+=1),y<.2&&(o[b+4]+=1))}}function h(b){r.push(b.x,b.y,b.z)}function f(b,S){const v=b*3;S.x=t[v+0],S.y=t[v+1],S.z=t[v+2]}function g(){const b=new I,S=new I,v=new I,y=new I,w=new ht,A=new ht,x=new ht;for(let E=0,R=0;E<r.length;E+=9,R+=6){b.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),w.set(o[R+0],o[R+1]),A.set(o[R+2],o[R+3]),x.set(o[R+4],o[R+5]),y.copy(b).add(S).add(v).divideScalar(3);const C=m(y);_(w,R+0,b,C),_(A,R+2,S,C),_(x,R+4,v,C)}}function _(b,S,v,y){y<0&&b.x===1&&(o[S]=b.x-1),v.x===0&&v.z===0&&(o[S]=y/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tl(t.vertices,t.indices,t.radius,t.detail)}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ht:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new I,s=[],r=[],o=[],a=new I,c=new ye;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(oe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(oe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Al extends Jn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ht){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class i0 extends Al{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Rl(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Bu=new I,ku=new I,Ca=new Rl,Pa=new Rl,La=new Rl;class Zo extends Jn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new I){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(ku.subVectors(s[0],s[1]).add(s[0]),l=ku);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Bu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Bu),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ca.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,_,m),Pa.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,_,m),La.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Ca.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Pa.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),La.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return i.set(Ca.calc(c),Pa.calc(c),La.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Hu(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function s0(n,t){const e=1-n;return e*e*t}function r0(n,t){return 2*(1-n)*n*t}function o0(n,t){return n*n*t}function gr(n,t,e,i){return s0(n,t)+r0(n,e)+o0(n,i)}function a0(n,t){const e=1-n;return e*e*e*t}function c0(n,t){const e=1-n;return 3*e*e*n*t}function l0(n,t){return 3*(1-n)*n*n*t}function u0(n,t){return n*n*n*t}function xr(n,t,e,i,s){return a0(n,t)+c0(n,e)+l0(n,i)+u0(n,s)}class Dd extends Jn{constructor(t=new ht,e=new ht,i=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ht){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(xr(t,s.x,r.x,o.x,a.x),xr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class h0 extends Jn{constructor(t=new I,e=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new I){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(xr(t,s.x,r.x,o.x,a.x),xr(t,s.y,r.y,o.y,a.y),xr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Nd extends Jn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ud extends Jn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fd extends Jn{constructor(t=new ht,e=new ht,i=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ht){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(gr(t,s.x,r.x,o.x),gr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Od extends Jn{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(gr(t,s.x,r.x,o.x),gr(t,s.y,r.y,o.y),gr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zd extends Jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Hu(a,c.x,l.x,u.x,d.x),Hu(a,c.y,l.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ht().fromArray(s))}return this}}var ko=Object.freeze({__proto__:null,ArcCurve:i0,CatmullRomCurve3:Zo,CubicBezierCurve:Dd,CubicBezierCurve3:h0,EllipseCurve:Al,LineCurve:Nd,LineCurve3:Ud,QuadraticBezierCurve:Fd,QuadraticBezierCurve3:Od,SplineCurve:zd});class d0 extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ko[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new ko[s.type]().fromJSON(s))}return this}}class Vc extends d0{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Nd(this.currentPoint.clone(),new ht(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Fd(this.currentPoint.clone(),new ht(t,e),new ht(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Dd(this.currentPoint.clone(),new ht(t,e),new ht(i,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new zd(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){const l=new Al(t,e,i,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Wc extends Vc{constructor(t){super(t),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Vc().fromJSON(s))}return this}}function f0(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Bd(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=_0(n,t,r,e)),n.length>80*e){a=n[0],c=n[1];let u=a,d=c;for(let h=e;h<s;h+=e){const f=n[h],g=n[h+1];f<a&&(a=f),g<c&&(c=g),f>u&&(u=f),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return Rr(r,o,e,a,c,l,0),o}function Bd(n,t,e,i,s){let r;if(s===C0(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Gu(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Gu(o/i|0,n[o],n[o+1],r);return r&&Os(r,r.next)&&(Pr(r),r=r.next),r}function Yi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Os(e,e.next)||De(e.prev,e,e.next)===0)){if(Pr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Rr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&b0(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?m0(n,i,s,r):p0(n)){t.push(c.i,n.i,l.i),Pr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=g0(Yi(n),t),Rr(n,t,e,i,s,r,2)):o===2&&x0(n,t,e,i,s,r):Rr(Yi(n),t,e,i,s,r,1);break}}}function p0(n){const t=n.prev,e=n,i=n.next;if(De(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,u=Math.min(s,r,o),d=Math.min(a,c,l),h=Math.max(s,r,o),f=Math.max(a,c,l);let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&lr(s,a,r,c,o,l,g.x,g.y)&&De(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function m0(n,t,e,i){const s=n.prev,r=n,o=n.next;if(De(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,c,l),g=Math.min(u,d,h),_=Math.max(a,c,l),m=Math.max(u,d,h),p=Xc(f,g,t,e,i),b=Xc(_,m,t,e,i);let S=n.prevZ,v=n.nextZ;for(;S&&S.z>=p&&v&&v.z<=b;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&lr(a,u,c,d,l,h,S.x,S.y)&&De(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&lr(a,u,c,d,l,h,v.x,v.y)&&De(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&lr(a,u,c,d,l,h,S.x,S.y)&&De(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=b;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&lr(a,u,c,d,l,h,v.x,v.y)&&De(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function g0(n,t){let e=n;do{const i=e.prev,s=e.next.next;!Os(i,s)&&Hd(i,e,e.next,s)&&Cr(i,s)&&Cr(s,i)&&(t.push(i.i,e.i,s.i),Pr(e),Pr(e.next),e=n=s),e=e.next}while(e!==n);return Yi(e)}function x0(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&T0(o,a)){let c=Gd(o,a);o=Yi(o,o.next),c=Yi(c,c.next),Rr(o,t,e,i,s,r,0),Rr(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function _0(n,t,e,i){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=Bd(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(E0(l))}s.sort(v0);for(let r=0;r<s.length;r++)e=M0(s[r],e);return e}function v0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function M0(n,t){const e=y0(n,t);if(!e)return t;const i=Gd(e,n);return Yi(i,i.next),Yi(e,e.next)}function y0(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,o;if(Os(n,e))return e;do{if(Os(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;e=o;do{if(i>=e.x&&e.x>=c&&i!==e.x&&kd(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){const d=Math.abs(s-e.y)/(i-e.x);Cr(e,n)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&S0(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function S0(n,t){return De(n.prev,n,t.prev)<0&&De(t.next,n,n.next)<0}function b0(n,t,e,i){let s=n;do s.z===0&&(s.z=Xc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,w0(s)}function w0(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function Xc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function E0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function kd(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function lr(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&kd(n,t,e,i,s,r,o,a)}function T0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!A0(n,t)&&(Cr(n,t)&&Cr(t,n)&&R0(n,t)&&(De(n.prev,n,t.prev)||De(n,t.prev,t))||Os(n,t)&&De(n.prev,n,n.next)>0&&De(t.prev,t,t.next)>0)}function De(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Os(n,t){return n.x===t.x&&n.y===t.y}function Hd(n,t,e,i){const s=ho(De(n,t,e)),r=ho(De(n,t,i)),o=ho(De(e,i,n)),a=ho(De(e,i,t));return!!(s!==r&&o!==a||s===0&&uo(n,e,t)||r===0&&uo(n,i,t)||o===0&&uo(e,n,i)||a===0&&uo(e,t,i))}function uo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ho(n){return n>0?1:n<0?-1:0}function A0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Hd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Cr(n,t){return De(n.prev,n,n.next)<0?De(n,t,n.next)>=0&&De(n,n.prev,t)>=0:De(n,t,n.prev)<0||De(n,n.next,t)<0}function R0(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Gd(n,t){const e=qc(n.i,n.x,n.y),i=qc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Gu(n,t,e,i){const s=qc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Pr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function qc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function C0(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class P0{static triangulate(t,e,i=2){return f0(t,e,i)}}class bs{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return bs.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Vu(t),Wu(i,t);let o=t.length;e.forEach(Vu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Wu(i,e[c]);const a=P0.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Vu(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Wu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Ho extends Te{constructor(t=new Wc([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:L0;let S,v=!1,y,w,A,x;if(p){S=p.getSpacedPoints(u),v=!0,h=!1;const it=p.isCatmullRomCurve3?p.closed:!1;y=p.computeFrenetFrames(u,it),w=new I,A=new I,x=new I}h||(m=0,f=0,g=0,_=0);const E=a.extractPoints(l);let R=E.shape;const C=E.holes;if(!bs.isClockWise(R)){R=R.reverse();for(let it=0,Q=C.length;it<Q;it++){const st=C[it];bs.isClockWise(st)&&(C[it]=st.reverse())}}function O(it){const st=10000000000000001e-36;let ut=it[0];for(let xt=1;xt<=it.length;xt++){const Xt=xt%it.length,mt=it[Xt],Ft=mt.x-ut.x,Yt=mt.y-ut.y,F=Ft*Ft+Yt*Yt,le=Math.max(Math.abs(mt.x),Math.abs(mt.y),Math.abs(ut.x),Math.abs(ut.y)),jt=st*le*le;if(F<=jt){it.splice(Xt,1),xt--;continue}ut=mt}}O(R),C.forEach(O);const z=C.length,N=R;for(let it=0;it<z;it++){const Q=C[it];R=R.concat(Q)}function U(it,Q,st){return Q||ue("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(Q,st)}const D=R.length;function G(it,Q,st){let ut,xt,Xt;const mt=it.x-Q.x,Ft=it.y-Q.y,Yt=st.x-it.x,F=st.y-it.y,le=mt*mt+Ft*Ft,jt=mt*F-Ft*Yt;if(Math.abs(jt)>Number.EPSILON){const P=Math.sqrt(le),M=Math.sqrt(Yt*Yt+F*F),H=Q.x-Ft/P,V=Q.y+mt/P,K=st.x-F/M,dt=st.y+Yt/M,gt=((K-H)*F-(dt-V)*Yt)/(mt*F-Ft*Yt);ut=H+mt*gt-it.x,xt=V+Ft*gt-it.y;const j=ut*ut+xt*xt;if(j<=2)return new ht(ut,xt);Xt=Math.sqrt(j/2)}else{let P=!1;mt>Number.EPSILON?Yt>Number.EPSILON&&(P=!0):mt<-Number.EPSILON?Yt<-Number.EPSILON&&(P=!0):Math.sign(Ft)===Math.sign(F)&&(P=!0),P?(ut=-Ft,xt=mt,Xt=Math.sqrt(le)):(ut=mt,xt=Ft,Xt=Math.sqrt(le/2))}return new ht(ut/Xt,xt/Xt)}const q=[];for(let it=0,Q=N.length,st=Q-1,ut=it+1;it<Q;it++,st++,ut++)st===Q&&(st=0),ut===Q&&(ut=0),q[it]=G(N[it],N[st],N[ut]);const tt=[];let Y,ct=q.concat();for(let it=0,Q=z;it<Q;it++){const st=C[it];Y=[];for(let ut=0,xt=st.length,Xt=xt-1,mt=ut+1;ut<xt;ut++,Xt++,mt++)Xt===xt&&(Xt=0),mt===xt&&(mt=0),Y[ut]=G(st[ut],st[Xt],st[mt]);tt.push(Y),ct=ct.concat(Y)}let Lt;if(m===0)Lt=bs.triangulateShape(N,C);else{const it=[],Q=[];for(let st=0;st<m;st++){const ut=st/m,xt=f*Math.cos(ut*Math.PI/2),Xt=g*Math.sin(ut*Math.PI/2)+_;for(let mt=0,Ft=N.length;mt<Ft;mt++){const Yt=U(N[mt],q[mt],Xt);Nt(Yt.x,Yt.y,-xt),ut===0&&it.push(Yt)}for(let mt=0,Ft=z;mt<Ft;mt++){const Yt=C[mt];Y=tt[mt];const F=[];for(let le=0,jt=Yt.length;le<jt;le++){const P=U(Yt[le],Y[le],Xt);Nt(P.x,P.y,-xt),ut===0&&F.push(P)}ut===0&&Q.push(F)}}Lt=bs.triangulateShape(it,Q)}const Rt=Lt.length,vt=g+_;for(let it=0;it<D;it++){const Q=h?U(R[it],ct[it],vt):R[it];v?(A.copy(y.normals[0]).multiplyScalar(Q.x),w.copy(y.binormals[0]).multiplyScalar(Q.y),x.copy(S[0]).add(A).add(w),Nt(x.x,x.y,x.z)):Nt(Q.x,Q.y,0)}for(let it=1;it<=u;it++)for(let Q=0;Q<D;Q++){const st=h?U(R[Q],ct[Q],vt):R[Q];v?(A.copy(y.normals[it]).multiplyScalar(st.x),w.copy(y.binormals[it]).multiplyScalar(st.y),x.copy(S[it]).add(A).add(w),Nt(x.x,x.y,x.z)):Nt(st.x,st.y,d/u*it)}for(let it=m-1;it>=0;it--){const Q=it/m,st=f*Math.cos(Q*Math.PI/2),ut=g*Math.sin(Q*Math.PI/2)+_;for(let xt=0,Xt=N.length;xt<Xt;xt++){const mt=U(N[xt],q[xt],ut);Nt(mt.x,mt.y,d+st)}for(let xt=0,Xt=C.length;xt<Xt;xt++){const mt=C[xt];Y=tt[xt];for(let Ft=0,Yt=mt.length;Ft<Yt;Ft++){const F=U(mt[Ft],Y[Ft],ut);v?Nt(F.x,F.y+S[u-1].y,S[u-1].x+st):Nt(F.x,F.y,d+st)}}}$(),lt();function $(){const it=s.length/3;if(h){let Q=0,st=D*Q;for(let ut=0;ut<Rt;ut++){const xt=Lt[ut];Vt(xt[2]+st,xt[1]+st,xt[0]+st)}Q=u+m*2,st=D*Q;for(let ut=0;ut<Rt;ut++){const xt=Lt[ut];Vt(xt[0]+st,xt[1]+st,xt[2]+st)}}else{for(let Q=0;Q<Rt;Q++){const st=Lt[Q];Vt(st[2],st[1],st[0])}for(let Q=0;Q<Rt;Q++){const st=Lt[Q];Vt(st[0]+D*u,st[1]+D*u,st[2]+D*u)}}i.addGroup(it,s.length/3-it,0)}function lt(){const it=s.length/3;let Q=0;ot(N,Q),Q+=N.length;for(let st=0,ut=C.length;st<ut;st++){const xt=C[st];ot(xt,Q),Q+=xt.length}i.addGroup(it,s.length/3-it,1)}function ot(it,Q){let st=it.length;for(;--st>=0;){const ut=st;let xt=st-1;xt<0&&(xt=it.length-1);for(let Xt=0,mt=u+m*2;Xt<mt;Xt++){const Ft=D*Xt,Yt=D*(Xt+1),F=Q+ut+Ft,le=Q+xt+Ft,jt=Q+xt+Yt,P=Q+ut+Yt;pt(F,le,jt,P)}}}function Nt(it,Q,st){c.push(it),c.push(Q),c.push(st)}function Vt(it,Q,st){ee(it),ee(Q),ee(st);const ut=s.length/3,xt=b.generateTopUV(i,s,ut-3,ut-2,ut-1);Bt(xt[0]),Bt(xt[1]),Bt(xt[2])}function pt(it,Q,st,ut){ee(it),ee(Q),ee(ut),ee(Q),ee(st),ee(ut);const xt=s.length/3,Xt=b.generateSideWallUV(i,s,xt-6,xt-3,xt-2,xt-1);Bt(Xt[0]),Bt(Xt[1]),Bt(Xt[3]),Bt(Xt[1]),Bt(Xt[2]),Bt(Xt[3])}function ee(it){s.push(c[it*3+0]),s.push(c[it*3+1]),s.push(c[it*3+2])}function Bt(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return I0(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ko[s.type]().fromJSON(s)),new Ho(i,t.options)}}const L0={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],u=t[s*3+1];return[new ht(r,o),new ht(a,c),new ht(l,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],d=t[i*3+2],h=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ht(o,1-c),new ht(l,1-d),new ht(h,1-g),new ht(_,1-p)]:[new ht(a,1-c),new ht(u,1-d),new ht(f,1-g),new ht(m,1-p)]}};function I0(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class _r extends Tl{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _r(t.radius,t.detail)}}class hn extends Te{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=t/a,h=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const b=p*h-o;for(let S=0;S<l;S++){const v=S*d-r;g.push(v,-b,0),_.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){const S=b+l*p,v=b+l*(p+1),y=b+1+l*(p+1),w=b+1+l*p;f.push(S,v,w),f.push(v,y,w)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.width,t.height,t.widthSegments,t.heightSegments)}}class fe extends Te{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new I,h=new I,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const b=[],S=p/i,v=o+S*a,y=t*Math.cos(v),w=Math.sqrt(t*t-y*y);let A=0;p===0&&o===0?A=.5/e:p===i&&c===Math.PI&&(A=-.5/e);for(let x=0;x<=e;x++){const E=x/e,R=s+E*r;d.x=-w*Math.cos(R),d.y=y,d.z=w*Math.sin(R),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(E+A,1-S),b.push(l++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){const S=u[p][b+1],v=u[p][b],y=u[p+1][b],w=u[p+1][b+1];(p!==0||o>0)&&f.push(S,v,w),(p!==i-1||c<Math.PI)&&f.push(v,y,w)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pn extends Te{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],d=[],h=new I,f=new I,g=new I;for(let _=0;_<=i;_++){const m=o+_/i*a;for(let p=0;p<=s;p++){const b=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(b),f.y=(t+e*Math.cos(m))*Math.sin(b),f.z=e*Math.sin(m),l.push(f.x,f.y,f.z),h.x=t*Math.cos(b),h.y=t*Math.sin(b),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/s),d.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=s;m++){const p=(s+1)*_+m-1,b=(s+1)*(_-1)+m-1,S=(s+1)*(_-1)+m,v=(s+1)*_+m;c.push(p,b,v),c.push(b,S,v)}this.setIndex(c),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class $o extends Te{constructor(t=new Od(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,c=new I,l=new ht;let u=new I;const d=[],h=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(f,2));function _(){for(let S=0;S<e;S++)m(S);m(r===!1?e:0),b(),p()}function m(S){u=t.getPointAt(S/e,u);const v=o.normals[S],y=o.binormals[S];for(let w=0;w<=s;w++){const A=w/s*Math.PI*2,x=Math.sin(A),E=-Math.cos(A);c.x=E*v.x+x*y.x,c.y=E*v.y+x*y.y,c.z=E*v.z+x*y.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,d.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=e;S++)for(let v=1;v<=s;v++){const y=(s+1)*(S-1)+(v-1),w=(s+1)*S+(v-1),A=(s+1)*S+v,x=(s+1)*(S-1)+v;g.push(y,w,x),g.push(w,A,x)}}function b(){for(let S=0;S<=e;S++)for(let v=0;v<=s;v++)l.x=S/e,l.y=v/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new $o(new ko[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function zs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(Xu(s))s.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Xu(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function rn(n){const t={};for(let e=0;e<n.length;e++){const i=zs(n[e]);for(const s in i)t[s]=i[s]}return t}function Xu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function D0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Vd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const N0={clone:zs,merge:rn};var U0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends Gs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U0,this.fragmentShader=F0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zs(t.uniforms),this.uniformsGroups=D0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ae().setHex(s.value);break;case"v2":this.uniforms[i].value=new ht().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ie().fromArray(s.value);break;case"m3":this.uniforms[i].value=new te().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ye().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class O0 extends En{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bs extends Gs{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ae(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class z0 extends Gs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class B0 extends Gs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Cl extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class k0 extends Cl{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ia=new ye,qu=new I,Yu=new I;class Wd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wl,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;qu.setFromMatrixPosition(t.matrixWorld),e.position.copy(qu),Yu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yu),e.updateMatrixWorld(),Ia.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ia,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Tr||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ia)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const fo=new I,po=new Hs,kn=new I;class Xd extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(fo,po,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fo,po,kn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(fo,po,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fo,po,kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Si=new I,Zu=new ht,$u=new ht;class vn extends Xd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,Zu,$u),e.subVectors($u,Zu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(pr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class H0 extends Wd{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0}}class G0 extends Cl{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new H0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Pl extends Xd{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class V0 extends Wd{constructor(){super(new Pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class W0 extends Cl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new V0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const xs=-90,_s=1;class X0 extends ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(xs,_s,t,e);s.layers=this.layers,this.add(s);const r=new vn(xs,_s,t,e);r.layers=this.layers,this.add(r);const o=new vn(xs,_s,t,e);o.layers=this.layers,this.add(o);const a=new vn(xs,_s,t,e);a.layers=this.layers,this.add(a);const c=new vn(xs,_s,t,e);c.layers=this.layers,this.add(c);const l=new vn(xs,_s,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Tr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class q0 extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Ku=new ye;class Y0{constructor(t,e,i=0,s=1/0){this.ray=new Cd(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Sl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ue("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ku.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ku),this}intersectObject(t,e=!0,i=[]){return Yc(t,this,i,e),i.sort(Ju),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Yc(t[s],this,i,e);return i.sort(Ju),i}}function Ju(n,t){return n.distance-t.distance}function Yc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Yc(r[o],t,e,!0)}}const Gl=class Gl{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Gl.prototype.isMatrix2=!0;let Qu=Gl;function ju(n,t,e,i){const s=Z0(i);switch(e){case yd:return n*t;case pl:return n*t/s.components*s.byteLength;case ml:return n*t/s.components*s.byteLength;case Xi:return n*t*2/s.components*s.byteLength;case gl:return n*t*2/s.components*s.byteLength;case Sd:return n*t*3/s.components*s.byteLength;case Fn:return n*t*4/s.components*s.byteLength;case xl:return n*t*4/s.components*s.byteLength;case yo:case So:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case bo:case wo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hc:case fc:return Math.max(n,16)*Math.max(t,8)/4;case uc:case dc:return Math.max(n,8)*Math.max(t,8)/2;case pc:case mc:case xc:case _c:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case gc:case Lo:case vc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case yc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case bc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case wc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Pc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Lc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ic:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Dc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Nc:case Uc:case Fc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Oc:case zc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Io:case Bc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Z0(n){switch(n){case Mn:case xd:return{byteLength:1,components:1};case wr:case _d:case hi:return{byteLength:2,components:1};case dl:case fl:return{byteLength:2,components:4};case Kn:case hl:case Un:return{byteLength:4,components:1};case vd:case Md:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ll}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ll);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function $0(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var K0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ng=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,rg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,og=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ag=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ug=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,vg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Sg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ag=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Cg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Pg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ig=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ug=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Og=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Gg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$g=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,jg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ix=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ox=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ax=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ux=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_x=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ex=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ax=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Dx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ux=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ox=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$x=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,i_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,s_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,r_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,h_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,m_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,x_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,__=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,y_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,E_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,se={alphahash_fragment:K0,alphahash_pars_fragment:J0,alphamap_fragment:Q0,alphamap_pars_fragment:j0,alphatest_fragment:tg,alphatest_pars_fragment:eg,aomap_fragment:ng,aomap_pars_fragment:ig,batching_pars_vertex:sg,batching_vertex:rg,begin_vertex:og,beginnormal_vertex:ag,bsdfs:cg,iridescence_fragment:lg,bumpmap_pars_fragment:ug,clipping_planes_fragment:hg,clipping_planes_pars_fragment:dg,clipping_planes_pars_vertex:fg,clipping_planes_vertex:pg,color_fragment:mg,color_pars_fragment:gg,color_pars_vertex:xg,color_vertex:_g,common:vg,cube_uv_reflection_fragment:Mg,defaultnormal_vertex:yg,displacementmap_pars_vertex:Sg,displacementmap_vertex:bg,emissivemap_fragment:wg,emissivemap_pars_fragment:Eg,colorspace_fragment:Tg,colorspace_pars_fragment:Ag,envmap_fragment:Rg,envmap_common_pars_fragment:Cg,envmap_pars_fragment:Pg,envmap_pars_vertex:Lg,envmap_physical_pars_fragment:Gg,envmap_vertex:Ig,fog_vertex:Dg,fog_pars_vertex:Ng,fog_fragment:Ug,fog_pars_fragment:Fg,gradientmap_pars_fragment:Og,lightmap_pars_fragment:zg,lights_lambert_fragment:Bg,lights_lambert_pars_fragment:kg,lights_pars_begin:Hg,lights_toon_fragment:Vg,lights_toon_pars_fragment:Wg,lights_phong_fragment:Xg,lights_phong_pars_fragment:qg,lights_physical_fragment:Yg,lights_physical_pars_fragment:Zg,lights_fragment_begin:$g,lights_fragment_maps:Kg,lights_fragment_end:Jg,lightprobes_pars_fragment:Qg,logdepthbuf_fragment:jg,logdepthbuf_pars_fragment:tx,logdepthbuf_pars_vertex:ex,logdepthbuf_vertex:nx,map_fragment:ix,map_pars_fragment:sx,map_particle_fragment:rx,map_particle_pars_fragment:ox,metalnessmap_fragment:ax,metalnessmap_pars_fragment:cx,morphinstance_vertex:lx,morphcolor_vertex:ux,morphnormal_vertex:hx,morphtarget_pars_vertex:dx,morphtarget_vertex:fx,normal_fragment_begin:px,normal_fragment_maps:mx,normal_pars_fragment:gx,normal_pars_vertex:xx,normal_vertex:_x,normalmap_pars_fragment:vx,clearcoat_normal_fragment_begin:Mx,clearcoat_normal_fragment_maps:yx,clearcoat_pars_fragment:Sx,iridescence_pars_fragment:bx,opaque_fragment:wx,packing:Ex,premultiplied_alpha_fragment:Tx,project_vertex:Ax,dithering_fragment:Rx,dithering_pars_fragment:Cx,roughnessmap_fragment:Px,roughnessmap_pars_fragment:Lx,shadowmap_pars_fragment:Ix,shadowmap_pars_vertex:Dx,shadowmap_vertex:Nx,shadowmask_pars_fragment:Ux,skinbase_vertex:Fx,skinning_pars_vertex:Ox,skinning_vertex:zx,skinnormal_vertex:Bx,specularmap_fragment:kx,specularmap_pars_fragment:Hx,tonemapping_fragment:Gx,tonemapping_pars_fragment:Vx,transmission_fragment:Wx,transmission_pars_fragment:Xx,uv_pars_fragment:qx,uv_pars_vertex:Yx,uv_vertex:Zx,worldpos_vertex:$x,background_vert:Kx,background_frag:Jx,backgroundCube_vert:Qx,backgroundCube_frag:jx,cube_vert:t_,cube_frag:e_,depth_vert:n_,depth_frag:i_,distance_vert:s_,distance_frag:r_,equirect_vert:o_,equirect_frag:a_,linedashed_vert:c_,linedashed_frag:l_,meshbasic_vert:u_,meshbasic_frag:h_,meshlambert_vert:d_,meshlambert_frag:f_,meshmatcap_vert:p_,meshmatcap_frag:m_,meshnormal_vert:g_,meshnormal_frag:x_,meshphong_vert:__,meshphong_frag:v_,meshphysical_vert:M_,meshphysical_frag:y_,meshtoon_vert:S_,meshtoon_frag:b_,points_vert:w_,points_frag:E_,shadow_vert:T_,shadow_frag:A_,sprite_vert:R_,sprite_frag:C_},Et={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Wn={basic:{uniforms:rn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:rn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new ae(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:rn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:rn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:rn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new ae(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:rn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:rn([Et.points,Et.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:rn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:rn([Et.common,Et.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:rn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:rn([Et.sprite,Et.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:rn([Et.common,Et.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:rn([Et.lights,Et.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Wn.physical={uniforms:rn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const mo={r:0,b:0,g:0},P_=new ye,Yd=new te;Yd.set(-1,0,0,0,1,0,0,0,1);function L_(n,t,e,i,s,r){const o=new ae(0);let a=s===!0?0:1,c,l,u=null,d=0,h=null;function f(b){let S=b.isScene===!0?b.background:null;if(S&&S.isTexture){const v=b.backgroundBlurriness>0;S=t.get(S,v)}return S}function g(b){let S=!1;const v=f(b);v===null?m(o,a):v&&v.isColor&&(m(v,1),S=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(b,S){const v=f(S);v&&(v.isCubeTexture||v.mapping===Yo)?(l===void 0&&(l=new J(new Qt(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:zs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(P_.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Yd),l.material.toneMapped=he.getTransfer(v.colorSpace)!==ge,(u!==v||d!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new J(new hn(2,2),new En({name:"BackgroundMaterial",uniforms:zs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=he.getTransfer(v.colorSpace)!==ge,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,S){b.getRGB(mo,Vd(n)),e.buffers.color.setClear(mo.r,mo.g,mo.b,S,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:g,addToRenderList:_,dispose:p}}function I_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(C,L,O,z,N){let U=!1;const D=d(C,z,O,L);r!==D&&(r=D,l(r.object)),U=f(C,z,O,N),U&&g(C,z,O,N),N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,v(C,L,O,z),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function u(C){return n.deleteVertexArray(C)}function d(C,L,O,z){const N=z.wireframe===!0;let U=i[L.id];U===void 0&&(U={},i[L.id]=U);const D=C.isInstancedMesh===!0?C.id:0;let G=U[D];G===void 0&&(G={},U[D]=G);let q=G[O.id];q===void 0&&(q={},G[O.id]=q);let tt=q[N];return tt===void 0&&(tt=h(c()),q[N]=tt),tt}function h(C){const L=[],O=[],z=[];for(let N=0;N<e;N++)L[N]=0,O[N]=0,z[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:z,object:C,attributes:{},index:null}}function f(C,L,O,z){const N=r.attributes,U=L.attributes;let D=0;const G=O.getAttributes();for(const q in G)if(G[q].location>=0){const Y=N[q];let ct=U[q];if(ct===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(ct=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(ct=C.instanceColor)),Y===void 0||Y.attribute!==ct||ct&&Y.data!==ct.data)return!0;D++}return r.attributesNum!==D||r.index!==z}function g(C,L,O,z){const N={},U=L.attributes;let D=0;const G=O.getAttributes();for(const q in G)if(G[q].location>=0){let Y=U[q];Y===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(Y=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(Y=C.instanceColor));const ct={};ct.attribute=Y,Y&&Y.data&&(ct.data=Y.data),N[q]=ct,D++}r.attributes=N,r.attributesNum=D,r.index=z}function _(){const C=r.newAttributes;for(let L=0,O=C.length;L<O;L++)C[L]=0}function m(C){p(C,0)}function p(C,L){const O=r.newAttributes,z=r.enabledAttributes,N=r.attributeDivisors;O[C]=1,z[C]===0&&(n.enableVertexAttribArray(C),z[C]=1),N[C]!==L&&(n.vertexAttribDivisor(C,L),N[C]=L)}function b(){const C=r.newAttributes,L=r.enabledAttributes;for(let O=0,z=L.length;O<z;O++)L[O]!==C[O]&&(n.disableVertexAttribArray(O),L[O]=0)}function S(C,L,O,z,N,U,D){D===!0?n.vertexAttribIPointer(C,L,O,N,U):n.vertexAttribPointer(C,L,O,z,N,U)}function v(C,L,O,z){_();const N=z.attributes,U=O.getAttributes(),D=L.defaultAttributeValues;for(const G in U){const q=U[G];if(q.location>=0){let tt=N[G];if(tt===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(tt=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(tt=C.instanceColor)),tt!==void 0){const Y=tt.normalized,ct=tt.itemSize,Lt=t.get(tt);if(Lt===void 0)continue;const Rt=Lt.buffer,vt=Lt.type,$=Lt.bytesPerElement,lt=vt===n.INT||vt===n.UNSIGNED_INT||tt.gpuType===hl;if(tt.isInterleavedBufferAttribute){const ot=tt.data,Nt=ot.stride,Vt=tt.offset;if(ot.isInstancedInterleavedBuffer){for(let pt=0;pt<q.locationSize;pt++)p(q.location+pt,ot.meshPerAttribute);C.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let pt=0;pt<q.locationSize;pt++)m(q.location+pt);n.bindBuffer(n.ARRAY_BUFFER,Rt);for(let pt=0;pt<q.locationSize;pt++)S(q.location+pt,ct/q.locationSize,vt,Y,Nt*$,(Vt+ct/q.locationSize*pt)*$,lt)}else{if(tt.isInstancedBufferAttribute){for(let ot=0;ot<q.locationSize;ot++)p(q.location+ot,tt.meshPerAttribute);C.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ot=0;ot<q.locationSize;ot++)m(q.location+ot);n.bindBuffer(n.ARRAY_BUFFER,Rt);for(let ot=0;ot<q.locationSize;ot++)S(q.location+ot,ct/q.locationSize,vt,Y,ct*$,ct/q.locationSize*ot*$,lt)}}else if(D!==void 0){const Y=D[G];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(q.location,Y);break;case 3:n.vertexAttrib3fv(q.location,Y);break;case 4:n.vertexAttrib4fv(q.location,Y);break;default:n.vertexAttrib1fv(q.location,Y)}}}}b()}function y(){E();for(const C in i){const L=i[C];for(const O in L){const z=L[O];for(const N in z){const U=z[N];for(const D in U)u(U[D].object),delete U[D];delete z[N]}}delete i[C]}}function w(C){if(i[C.id]===void 0)return;const L=i[C.id];for(const O in L){const z=L[O];for(const N in z){const U=z[N];for(const D in U)u(U[D].object),delete U[D];delete z[N]}}delete i[C.id]}function A(C){for(const L in i){const O=i[L];for(const z in O){const N=O[z];if(N[C.id]===void 0)continue;const U=N[C.id];for(const D in U)u(U[D].object),delete U[D];delete N[C.id]}}}function x(C){for(const L in i){const O=i[L],z=C.isInstancedMesh===!0?C.id:0,N=O[z];if(N!==void 0){for(const U in N){const D=N[U];for(const G in D)u(D[G].object),delete D[G];delete N[U]}delete O[z],Object.keys(O).length===0&&delete i[L]}}}function E(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:R,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function D_(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),e.update(l,i,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function N_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Fn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const x=A===hi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Mn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Un&&!x)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Kt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:v,maxSamples:y,samples:w}}function U_(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Ui,a=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const b=r?0:i,S=b*4;let v=p.clippingState||null;c.value=v,v=u(g,h,S,f);for(let y=0;y!==S;++y)v[y]=e[y];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=f;S!==_;++S,v+=4)o.copy(d[S]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}const Ti=4,th=[.125,.215,.35,.446,.526,.582],zi=20,F_=256,er=new Pl,eh=new ae;let Da=null,Na=0,Ua=0,Fa=!1;const O_=new I;class nh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=O_}=r;Da=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Da,Na,Ua),this._renderer.xr.enabled=Fa,t.scissorTest=!1,vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Da=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:hi,format:Fn,colorSpace:Do,depthBuffer:!1},s=ih(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ih(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=z_(r)),this._blurMaterial=k_(r,t,e),this._ggxMaterial=B_(r,t,e)}return s}_compileMaterial(t){const e=new J(new Te,t);this._renderer.compile(e,er)}_sceneToCubeUV(t,e,i,s,r){const c=new vn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(eh),d.toneMapping=Yn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new J(new Qt,new Ln({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,p=!0):(m.color.copy(eh),p=!0);for(let S=0;S<6;S++){const v=S%3;v===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[S],r.y,r.z)):v===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[S]));const y=this._cubeSize;vs(s,v*y,S>2?y:0,y,y),d.setRenderTarget(s),p&&d.render(_,c),d.render(t,c)}d.toneMapping=f,d.autoClear=h,t.background=b}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Wi||t.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;vs(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,er)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=0+l*1.25,f=d*h,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-Ti?i-g+Ti:0),p=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,vs(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(a,er),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,vs(t,m,p,3*_,2*_),s.setRenderTarget(t),s.render(a,er)}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ue("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=l;const h=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):zi;m>zi&&Kt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const p=[];let b=0;for(let A=0;A<zi;++A){const x=A/_,E=Math.exp(-x*x/2);p.push(E),A===0?b+=E:A<m&&(b+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-i;const v=this._sizeLods[s],y=3*v*(s>S-Ti?s-S+Ti:0),w=4*(this._cubeSize-v);vs(e,y,w,3*v,2*v),c.setRenderTarget(e),c.render(d,er)}}function z_(n){const t=[],e=[],i=[];let s=n;const r=n-Ti+1+th.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Ti?c=th[o-n+Ti-1]:o===0&&(c=0),e.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),S=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,x=w>2?0:-1,E=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];b.set(E,_*g*w),S.set(h,m*g*w);const R=[w,w,w,w,w,w];v.set(R,p*g*w)}const y=new Te;y.setAttribute("position",new fn(b,_)),y.setAttribute("uv",new fn(S,m)),y.setAttribute("faceIndex",new fn(v,p)),i.push(new J(y,null)),s>Ti&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function ih(n,t,e){const i=new $n(n,t,e);return i.texture.mapping=Yo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function B_(n,t,e){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:F_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ko(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function k_(n,t,e){const i=new Float32Array(zi),s=new I(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function sh(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function rh(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Ko(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Zd extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ld(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Qt(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:li});r.uniforms.tEquirect.value=e;const o=new J(s,r),a=e.minFilter;return e.minFilter===Hi&&(e.minFilter=nn),new X0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}function H_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===ia||f===sa)if(t.has(h)){const g=t.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new Zd(g.height);return _.fromEquirectangularTexture(n,h),t.set(h,_),h.addEventListener("dispose",l),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,g=f===ia||f===sa,_=f===Wi||f===Ns;if(g||_){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new nh(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const b=h.image;return g&&b&&b.height>0||_&&b&&c(b)?(i===null&&(i=new nh(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===ia?h.mapping=Wi:f===sa&&(h.mapping=Ns),h}function c(h){let f=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function l(h){const f=h.target;f.removeEventListener("dispose",l);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function G_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Rs("WebGLRenderer: "+i+" extension not supported."),s}}}function V_(n,t,e,i){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)t.update(h[f],n.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const b=f.array;_=f.version;for(let S=0,v=b.length;S<v;S+=3){const y=b[S+0],w=b[S+1],A=b[S+2];h.push(y,w,w,A,A,y)}}else{const b=g.array;_=g.version;for(let S=0,v=b.length/3-1;S<v;S+=3){const y=S+0,w=S+1,A=S+2;h.push(y,w,w,A,A,y)}}const m=new(g.count>=65535?Ad:Td)(h,1);m.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function W_(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,h){n.drawElements(i,h,r,d*o),e.update(h,i,1)}function l(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*o,f),e.update(h,i,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let _=0;for(let m=0;m<f;m++)_+=h[m];e.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function X_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:ue("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function q_(n,t,e){const i=new WeakMap,s=new Ie;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let R=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",R)};var f=R;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let y=a.attributes.position.count*v,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const A=new Float32Array(y*w*4*d),x=new wd(A,y,w,d);x.type=Un,x.needsUpdate=!0;const E=v*4;for(let C=0;C<d;C++){const L=p[C],O=b[C],z=S[C],N=y*w*4*C;for(let U=0;U<L.count;U++){const D=U*E;g===!0&&(s.fromBufferAttribute(L,U),A[N+D+0]=s.x,A[N+D+1]=s.y,A[N+D+2]=s.z,A[N+D+3]=0),_===!0&&(s.fromBufferAttribute(O,U),A[N+D+4]=s.x,A[N+D+5]=s.y,A[N+D+6]=s.z,A[N+D+7]=0),m===!0&&(s.fromBufferAttribute(z,U),A[N+D+8]=s.x,A[N+D+9]=s.y,A[N+D+10]=s.z,A[N+D+11]=z.itemSize===4?s.w:1)}}h={count:d,texture:x,size:new ht(y,w)},i.set(a,h),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Y_(n,t,e,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,d=l.geometry,h=t.get(l,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const Z_={[ud]:"LINEAR_TONE_MAPPING",[hd]:"REINHARD_TONE_MAPPING",[dd]:"CINEON_TONE_MAPPING",[ul]:"ACES_FILMIC_TONE_MAPPING",[pd]:"AGX_TONE_MAPPING",[md]:"NEUTRAL_TONE_MAPPING",[fd]:"CUSTOM_TONE_MAPPING"};function $_(n,t,e,i,s,r){const o=new $n(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new Fs(t,e):void 0}),a=new $n(t,e,{type:hi,depthBuffer:!1,stencilBuffer:!1}),c=new Te;c.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Jt([0,2,0,0,2,0],2));const l=new O0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new J(c,l),d=new Pl(-1,1,1,-1,0,1);let h=null,f=null,g=!1,_,m=null,p=[],b=!1;this.setSize=function(S,v){o.setSize(S,v),a.setSize(S,v);for(let y=0;y<p.length;y++){const w=p[y];w.setSize&&w.setSize(S,v)}},this.setEffects=function(S){p=S,b=p.length>0&&p[0].isRenderPass===!0;const v=o.width,y=o.height;for(let w=0;w<p.length;w++){const A=p[w];A.setSize&&A.setSize(v,y)}},this.begin=function(S,v){if(g||S.toneMapping===Yn&&p.length===0)return!1;if(m=v,v!==null){const y=v.width,w=v.height;(o.width!==y||o.height!==w)&&this.setSize(y,w)}return b===!1&&S.setRenderTarget(o),_=S.toneMapping,S.toneMapping=Yn,!0},this.hasRenderPass=function(){return b},this.end=function(S,v){S.toneMapping=_,g=!0;let y=o,w=a;for(let A=0;A<p.length;A++){const x=p[A];if(x.enabled!==!1&&(x.render(S,w,y,v),x.needsSwap!==!1)){const E=y;y=w,w=E}}if(h!==S.outputColorSpace||f!==S.toneMapping){h=S.outputColorSpace,f=S.toneMapping,l.defines={},he.getTransfer(h)===ge&&(l.defines.SRGB_TRANSFER="");const A=Z_[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,S.setRenderTarget(m),S.render(u,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}const $d=new Je,Zc=new Fs(1,1),Kd=new wd,Jd=new Om,Qd=new Ld,oh=[],ah=[],ch=new Float32Array(16),lh=new Float32Array(9),uh=new Float32Array(4);function Vs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=oh[s];if(r===void 0&&(r=new Float32Array(s),oh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ve(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function We(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Jo(n,t){let e=ah[t];e===void 0&&(e=new Int32Array(t),ah[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function K_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function J_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2fv(this.addr,t),We(e,t)}}function Q_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;n.uniform3fv(this.addr,t),We(e,t)}}function j_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4fv(this.addr,t),We(e,t)}}function tv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,i))return;uh.set(i),n.uniformMatrix2fv(this.addr,!1,uh),We(e,i)}}function ev(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,i))return;lh.set(i),n.uniformMatrix3fv(this.addr,!1,lh),We(e,i)}}function nv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,i))return;ch.set(i),n.uniformMatrix4fv(this.addr,!1,ch),We(e,i)}}function iv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function sv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2iv(this.addr,t),We(e,t)}}function rv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;n.uniform3iv(this.addr,t),We(e,t)}}function ov(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4iv(this.addr,t),We(e,t)}}function av(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function cv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2uiv(this.addr,t),We(e,t)}}function lv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;n.uniform3uiv(this.addr,t),We(e,t)}}function uv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4uiv(this.addr,t),We(e,t)}}function hv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Zc.compareFunction=e.isReversedDepthBuffer()?vl:_l,r=Zc):r=$d,e.setTexture2D(t||r,s)}function dv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Jd,s)}function fv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Qd,s)}function pv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Kd,s)}function mv(n){switch(n){case 5126:return K_;case 35664:return J_;case 35665:return Q_;case 35666:return j_;case 35674:return tv;case 35675:return ev;case 35676:return nv;case 5124:case 35670:return iv;case 35667:case 35671:return sv;case 35668:case 35672:return rv;case 35669:case 35673:return ov;case 5125:return av;case 36294:return cv;case 36295:return lv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return dv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return pv}}function gv(n,t){n.uniform1fv(this.addr,t)}function xv(n,t){const e=Vs(t,this.size,2);n.uniform2fv(this.addr,e)}function _v(n,t){const e=Vs(t,this.size,3);n.uniform3fv(this.addr,e)}function vv(n,t){const e=Vs(t,this.size,4);n.uniform4fv(this.addr,e)}function Mv(n,t){const e=Vs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function yv(n,t){const e=Vs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Sv(n,t){const e=Vs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function bv(n,t){n.uniform1iv(this.addr,t)}function wv(n,t){n.uniform2iv(this.addr,t)}function Ev(n,t){n.uniform3iv(this.addr,t)}function Tv(n,t){n.uniform4iv(this.addr,t)}function Av(n,t){n.uniform1uiv(this.addr,t)}function Rv(n,t){n.uniform2uiv(this.addr,t)}function Cv(n,t){n.uniform3uiv(this.addr,t)}function Pv(n,t){n.uniform4uiv(this.addr,t)}function Lv(n,t,e){const i=this.cache,s=t.length,r=Jo(e,s);Ve(i,r)||(n.uniform1iv(this.addr,r),We(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Zc:o=$d;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Iv(n,t,e){const i=this.cache,s=t.length,r=Jo(e,s);Ve(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Jd,r[o])}function Dv(n,t,e){const i=this.cache,s=t.length,r=Jo(e,s);Ve(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Qd,r[o])}function Nv(n,t,e){const i=this.cache,s=t.length,r=Jo(e,s);Ve(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Kd,r[o])}function Uv(n){switch(n){case 5126:return gv;case 35664:return xv;case 35665:return _v;case 35666:return vv;case 35674:return Mv;case 35675:return yv;case 35676:return Sv;case 5124:case 35670:return bv;case 35667:case 35671:return wv;case 35668:case 35672:return Ev;case 35669:case 35673:return Tv;case 5125:return Av;case 36294:return Rv;case 36295:return Cv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Iv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Nv}}class Fv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=mv(e.type)}}class Ov{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Uv(e.type)}}class zv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function hh(n,t){n.seq.push(t),n.map[t.id]=t}function Bv(n,t,e){const i=n.name,s=i.length;for(Oa.lastIndex=0;;){const r=Oa.exec(i),o=Oa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){hh(e,l===void 0?new Fv(a,n,t):new Ov(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new zv(a),hh(e,d)),e=d}}}class Eo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Bv(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function dh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const kv=37297;let Hv=0;function Gv(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const fh=new te;function Vv(n){he._getMatrix(fh,he.workingColorSpace,n);const t=`mat3( ${fh.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(n)){case No:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ph(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Gv(n.getShaderSource(t),a)}else return r}function Wv(n,t){const e=Vv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Xv={[ud]:"Linear",[hd]:"Reinhard",[dd]:"Cineon",[ul]:"ACESFilmic",[pd]:"AgX",[md]:"Neutral",[fd]:"Custom"};function qv(n,t){const e=Xv[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const go=new I;function Yv(){he.getLuminanceCoefficients(go);const n=go.x.toFixed(4),t=go.y.toFixed(4),e=go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function $v(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Kv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ur(n){return n!==""}function mh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function $c(n){return n.replace(Jv,jv)}const Qv=new Map;function jv(n,t){let e=se[t];if(e===void 0){const i=Qv.get(t);if(i!==void 0)e=se[i],Kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return $c(e)}const tM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xh(n){return n.replace(tM,eM)}function eM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _h(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const nM={[Mo]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function iM(n){return nM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sM={[Wi]:"ENVMAP_TYPE_CUBE",[Ns]:"ENVMAP_TYPE_CUBE",[Yo]:"ENVMAP_TYPE_CUBE_UV"};function rM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":sM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const oM={[Ns]:"ENVMAP_MODE_REFRACTION"};function aM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":oM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cM={[ld]:"ENVMAP_BLENDING_MULTIPLY",[em]:"ENVMAP_BLENDING_MIX",[nm]:"ENVMAP_BLENDING_ADD"};function lM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":cM[n.combine]||"ENVMAP_BLENDING_NONE"}function uM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function hM(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=iM(e),l=rM(e),u=aM(e),d=lM(e),h=uM(e),f=Zv(e),g=$v(r),_=s.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ur).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ur).join(`
`),p.length>0&&(p+=`
`)):(m=[_h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),p=[_h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?se.tonemapping_pars_fragment:"",e.toneMapping!==Yn?qv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,Wv("linearToOutputTexel",e.outputColorSpace),Yv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ur).join(`
`)),o=$c(o),o=mh(o,e),o=gh(o,e),a=$c(a),a=mh(a,e),a=gh(a,e),o=xh(o),a=xh(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=b+m+o,v=b+p+a,y=dh(s,s.VERTEX_SHADER,S),w=dh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,y),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(n.debug.checkShaderErrors){const L=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(y)||"",z=s.getShaderInfoLog(w)||"",N=L.trim(),U=O.trim(),D=z.trim();let G=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,y,w);else{const tt=ph(s,y,"vertex"),Y=ph(s,w,"fragment");ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+tt+`
`+Y)}else N!==""?Kt("WebGLProgram: Program Info Log:",N):(U===""||D==="")&&(q=!1);q&&(C.diagnostics={runnable:G,programLog:N,vertexShader:{log:U,prefix:m},fragmentShader:{log:D,prefix:p}})}s.deleteShader(y),s.deleteShader(w),x=new Eo(s,_),E=Kv(s,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,kv)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=w,this}let dM=0;class fM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new pM(t),e.set(t,i)),i}}class pM{constructor(t){this.id=dM++,this.code=t,this.usedTimes=0}}function mM(n){return n===Xi||n===Lo||n===Io}function gM(n,t,e,i,s,r){const o=new Sl,a=new fM,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,E,R,C,L,O){const z=C.fog,N=L.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,D=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=t.get(x.envMap||U,D),q=G&&G.mapping===Yo?G.image.height:null,tt=f[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Kt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const Y=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ct=Y!==void 0?Y.length:0;let Lt=0;N.morphAttributes.position!==void 0&&(Lt=1),N.morphAttributes.normal!==void 0&&(Lt=2),N.morphAttributes.color!==void 0&&(Lt=3);let Rt,vt,$,lt;if(tt){const Ot=Wn[tt];Rt=Ot.vertexShader,vt=Ot.fragmentShader}else{Rt=x.vertexShader,vt=x.fragmentShader;const Ot=a.getVertexShaderStage(x),Ne=a.getFragmentShaderStage(x);a.update(x,Ot,Ne),$=Ot.id,lt=Ne.id}const ot=n.getRenderTarget(),Nt=n.state.buffers.depth.getReversed(),Vt=L.isInstancedMesh===!0,pt=L.isBatchedMesh===!0,ee=!!x.map,Bt=!!x.matcap,it=!!G,Q=!!x.aoMap,st=!!x.lightMap,ut=!!x.bumpMap&&x.wireframe===!1,xt=!!x.normalMap,Xt=!!x.displacementMap,mt=!!x.emissiveMap,Ft=!!x.metalnessMap,Yt=!!x.roughnessMap,F=x.anisotropy>0,le=x.clearcoat>0,jt=x.dispersion>0,P=x.iridescence>0,M=x.sheen>0,H=x.transmission>0,V=F&&!!x.anisotropyMap,K=le&&!!x.clearcoatMap,dt=le&&!!x.clearcoatNormalMap,gt=le&&!!x.clearcoatRoughnessMap,j=P&&!!x.iridescenceMap,nt=P&&!!x.iridescenceThicknessMap,Mt=M&&!!x.sheenColorMap,Ht=M&&!!x.sheenRoughnessMap,wt=!!x.specularMap,yt=!!x.specularColorMap,Zt=!!x.specularIntensityMap,$t=H&&!!x.transmissionMap,ne=H&&!!x.thicknessMap,B=!!x.gradientMap,_t=!!x.alphaMap,et=x.alphaTest>0,St=!!x.alphaHash,Ct=!!x.extensions;let rt=Yn;x.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(rt=n.toneMapping);const kt={shaderID:tt,shaderType:x.type,shaderName:x.name,vertexShader:Rt,fragmentShader:vt,defines:x.defines,customVertexShaderID:$,customFragmentShaderID:lt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:pt,batchingColor:pt&&L._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&L.instanceColor!==null,instancingMorph:Vt&&L.morphTexture!==null,outputColorSpace:ot===null?n.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ee,matcap:Bt,envMap:it,envMapMode:it&&G.mapping,envMapCubeUVHeight:q,aoMap:Q,lightMap:st,bumpMap:ut,normalMap:xt,displacementMap:Xt,emissiveMap:mt,normalMapObjectSpace:xt&&x.normalMapType===rm,normalMapTangentSpace:xt&&x.normalMapType===kc,packedNormalMap:xt&&x.normalMapType===kc&&mM(x.normalMap.format),metalnessMap:Ft,roughnessMap:Yt,anisotropy:F,anisotropyMap:V,clearcoat:le,clearcoatMap:K,clearcoatNormalMap:dt,clearcoatRoughnessMap:gt,dispersion:jt,iridescence:P,iridescenceMap:j,iridescenceThicknessMap:nt,sheen:M,sheenColorMap:Mt,sheenRoughnessMap:Ht,specularMap:wt,specularColorMap:yt,specularIntensityMap:Zt,transmission:H,transmissionMap:$t,thicknessMap:ne,gradientMap:B,opaque:x.transparent===!1&&x.blending===As&&x.alphaToCoverage===!1,alphaMap:_t,alphaTest:et,alphaHash:St,combine:x.combine,mapUv:ee&&g(x.map.channel),aoMapUv:Q&&g(x.aoMap.channel),lightMapUv:st&&g(x.lightMap.channel),bumpMapUv:ut&&g(x.bumpMap.channel),normalMapUv:xt&&g(x.normalMap.channel),displacementMapUv:Xt&&g(x.displacementMap.channel),emissiveMapUv:mt&&g(x.emissiveMap.channel),metalnessMapUv:Ft&&g(x.metalnessMap.channel),roughnessMapUv:Yt&&g(x.roughnessMap.channel),anisotropyMapUv:V&&g(x.anisotropyMap.channel),clearcoatMapUv:K&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:dt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&g(x.sheenRoughnessMap.channel),specularMapUv:wt&&g(x.specularMap.channel),specularColorMapUv:yt&&g(x.specularColorMap.channel),specularIntensityMapUv:Zt&&g(x.specularIntensityMap.channel),transmissionMapUv:$t&&g(x.transmissionMap.channel),thicknessMapUv:ne&&g(x.thicknessMap.channel),alphaMapUv:_t&&g(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(xt||F),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(ee||_t),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&xt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Nt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Lt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,decodeVideoTexture:ee&&x.map.isVideoTexture===!0&&he.getTransfer(x.map.colorSpace)===ge,decodeVideoTextureEmissive:mt&&x.emissiveMap.isVideoTexture===!0&&he.getTransfer(x.emissiveMap.colorSpace)===ge,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===He,flipSided:x.side===an,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ct&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&x.extensions.multiDraw===!0||pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function m(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)E.push(R),E.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(E,x),b(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function b(x,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function S(x){const E=f[x.type];let R;if(E){const C=Wn[E];R=N0.clone(C.uniforms)}else R=x.uniforms;return R}function v(x,E){let R=u.get(E);return R!==void 0?++R.usedTimes:(R=new hM(n,E,x,s),l.push(R),u.set(E,R)),R}function y(x){if(--x.usedTimes===0){const E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:v,releaseProgram:y,releaseShaderCache:w,programs:l,dispose:A}}function xM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function _M(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function vh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Mh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,_,m,p){let b=n[t];return b===void 0?(b={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},n[t]=b):(b.id=h.id,b.object=h,b.geometry=f,b.material=g,b.materialVariant=o(h),b.groupOrder=_,b.renderOrder=h.renderOrder,b.z=m,b.group=p),t++,b}function c(h,f,g,_,m,p){const b=a(h,f,g,_,m,p);g.transmission>0?i.push(b):g.transparent===!0?s.push(b):e.push(b)}function l(h,f,g,_,m,p){const b=a(h,f,g,_,m,p);g.transmission>0?i.unshift(b):g.transparent===!0?s.unshift(b):e.unshift(b)}function u(h,f,g){e.length>1&&e.sort(h||_M),i.length>1&&i.sort(f||vh),s.length>1&&s.sort(f||vh),g&&(e.reverse(),i.reverse(),s.reverse())}function d(){for(let h=t,f=n.length;h<f;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function vM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Mh,n.set(i,[o])):s>=r.length?(o=new Mh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function MM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new ae};break;case"SpotLight":e={position:new I,direction:new I,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function yM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let SM=0;function bM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function wM(n){const t=new MM,e=yM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);const s=new I,r=new ye,o=new ye;function a(l){let u=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,S=0,v=0,y=0,w=0,A=0;l.sort(bM);for(let E=0,R=l.length;E<R;E++){const C=l[E],L=C.color,O=C.intensity,z=C.distance;let N=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Xi?N=C.shadow.map.texture:N=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=L.r*O,d+=L.g*O,h+=L.b*O;else if(C.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(C.sh.coefficients[U],O);A++}else if(C.isDirectionalLight){const U=t.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const D=C.shadow,G=e.get(C);G.shadowIntensity=D.intensity,G.shadowBias=D.bias,G.shadowNormalBias=D.normalBias,G.shadowRadius=D.radius,G.shadowMapSize=D.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=N,i.directionalShadowMatrix[f]=C.shadow.matrix,b++}i.directional[f]=U,f++}else if(C.isSpotLight){const U=t.get(C);U.position.setFromMatrixPosition(C.matrixWorld),U.color.copy(L).multiplyScalar(O),U.distance=z,U.coneCos=Math.cos(C.angle),U.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),U.decay=C.decay,i.spot[_]=U;const D=C.shadow;if(C.map&&(i.spotLightMap[y]=C.map,y++,D.updateMatrices(C),C.castShadow&&w++),i.spotLightMatrix[_]=D.matrix,C.castShadow){const G=e.get(C);G.shadowIntensity=D.intensity,G.shadowBias=D.bias,G.shadowNormalBias=D.normalBias,G.shadowRadius=D.radius,G.shadowMapSize=D.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=N,v++}_++}else if(C.isRectAreaLight){const U=t.get(C);U.color.copy(L).multiplyScalar(O),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=U,m++}else if(C.isPointLight){const U=t.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),U.distance=C.distance,U.decay=C.decay,C.castShadow){const D=C.shadow,G=e.get(C);G.shadowIntensity=D.intensity,G.shadowBias=D.bias,G.shadowNormalBias=D.normalBias,G.shadowRadius=D.radius,G.shadowMapSize=D.mapSize,G.shadowCameraNear=D.camera.near,G.shadowCameraFar=D.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=C.shadow.matrix,S++}i.point[g]=U,g++}else if(C.isHemisphereLight){const U=t.get(C);U.skyColor.copy(C.color).multiplyScalar(O),U.groundColor.copy(C.groundColor).multiplyScalar(O),i.hemi[p]=U,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Et.LTC_FLOAT_1,i.rectAreaLTC2=Et.LTC_FLOAT_2):(i.rectAreaLTC1=Et.LTC_HALF_1,i.rectAreaLTC2=Et.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==b||x.numPointShadows!==S||x.numSpotShadows!==v||x.numSpotMaps!==y||x.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=v+y-w,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,x.directionalLength=f,x.pointLength=g,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=b,x.numPointShadows=S,x.numSpotShadows=v,x.numSpotMaps=y,x.numLightProbes=A,i.version=SM++)}function c(l,u){let d=0,h=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){const S=l[p];if(S.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(S.isSpotLight){const v=i.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function yh(n){const t=new wM(n),e=[],i=[],s=[];function r(h){d.camera=h,e.length=0,i.length=0,s.length=0}function o(h){e.push(h)}function a(h){i.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function EM(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new yh(n),t.set(s,[a])):r>=o.length?(a=new yh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const TM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,RM=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],CM=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Sh=new ye,nr=new I,za=new I;function PM(n,t,e){let i=new wl;const s=new ht,r=new ht,o=new Ie,a=new z0,c=new B0,l={},u=e.maxTextureSize,d={[Ai]:an,[an]:Ai,[He]:He},h=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:TM,fragmentShader:AM}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Te;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new J(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mo;let p=this.type;this.render=function(w,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Fp&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Mo);const E=n.getRenderTarget(),R=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),L=n.state;L.setBlending(li),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const O=p!==this.type;O&&A.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(N=>N.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,N=w.length;z<N;z++){const U=w[z],D=U.shadow;if(D===void 0){Kt("WebGLShadowMap:",U,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);const G=D.getFrameExtents();s.multiply(G),r.copy(D.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/G.x),s.x=r.x*G.x,D.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/G.y),s.y=r.y*G.y,D.mapSize.y=r.y));const q=n.state.buffers.depth.getReversed();if(D.camera._reversedDepth=q,D.map===null||O===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===cr){if(U.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new $n(s.x,s.y,{format:Xi,type:hi,minFilter:nn,magFilter:nn,generateMipmaps:!1}),D.map.texture.name=U.name+".shadowMap",D.map.depthTexture=new Fs(s.x,s.y,Un),D.map.depthTexture.name=U.name+".shadowMapDepth",D.map.depthTexture.format=di,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Ze,D.map.depthTexture.magFilter=Ze}else U.isPointLight?(D.map=new Zd(s.x),D.map.depthTexture=new n0(s.x,Kn)):(D.map=new $n(s.x,s.y),D.map.depthTexture=new Fs(s.x,s.y,Kn)),D.map.depthTexture.name=U.name+".shadowMap",D.map.depthTexture.format=di,this.type===Mo?(D.map.depthTexture.compareFunction=q?vl:_l,D.map.depthTexture.minFilter=nn,D.map.depthTexture.magFilter=nn):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Ze,D.map.depthTexture.magFilter=Ze);D.camera.updateProjectionMatrix()}const tt=D.map.isWebGLCubeRenderTarget?6:1;for(let Y=0;Y<tt;Y++){if(D.map.isWebGLCubeRenderTarget)n.setRenderTarget(D.map,Y),n.clear();else{Y===0&&(n.setRenderTarget(D.map),n.clear());const ct=D.getViewport(Y);o.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),L.viewport(o)}if(U.isPointLight){const ct=D.camera,Lt=D.matrix,Rt=U.distance||ct.far;Rt!==ct.far&&(ct.far=Rt,ct.updateProjectionMatrix()),nr.setFromMatrixPosition(U.matrixWorld),ct.position.copy(nr),za.copy(ct.position),za.add(RM[Y]),ct.up.copy(CM[Y]),ct.lookAt(za),ct.updateMatrixWorld(),Lt.makeTranslation(-nr.x,-nr.y,-nr.z),Sh.multiplyMatrices(ct.projectionMatrix,ct.matrixWorldInverse),D._frustum.setFromProjectionMatrix(Sh,ct.coordinateSystem,ct.reversedDepth)}else D.updateMatrices(U);i=D.getFrustum(),v(A,x,D.camera,U,this.type)}D.isPointLightShadow!==!0&&this.type===cr&&b(D,x),D.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,R,C)};function b(w,A){const x=t.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new $n(s.x,s.y,{format:Xi,type:hi})),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,x,h,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,x,f,_,null)}function S(w,A,x,E){let R=null;const C=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)R=C;else if(R=x.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const L=R.uuid,O=A.uuid;let z=l[L];z===void 0&&(z={},l[L]=z);let N=z[O];N===void 0&&(N=R.clone(),z[O]=N,A.addEventListener("dispose",y)),R=N}if(R.visible=A.visible,R.wireframe=A.wireframe,E===cr?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const L=n.properties.get(R);L.light=x}return R}function v(w,A,x,E,R){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===cr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const O=t.update(w),z=w.material;if(Array.isArray(z)){const N=O.groups;for(let U=0,D=N.length;U<D;U++){const G=N[U],q=z[G.materialIndex];if(q&&q.visible){const tt=S(w,q,E,R);w.onBeforeShadow(n,w,A,x,O,tt,G),n.renderBufferDirect(x,null,O,tt,w,G),w.onAfterShadow(n,w,A,x,O,tt,G)}}}else if(z.visible){const N=S(w,z,E,R);w.onBeforeShadow(n,w,A,x,O,N,null),n.renderBufferDirect(x,null,O,N,w,null),w.onAfterShadow(n,w,A,x,O,N,null)}}const L=w.children;for(let O=0,z=L.length;O<z;O++)v(L[O],A,x,E,R)}function y(w){w.target.removeEventListener("dispose",y);for(const x in l){const E=l[x],R=w.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function LM(n,t){function e(){let B=!1;const _t=new Ie;let et=null;const St=new Ie(0,0,0,0);return{setMask:function(Ct){et!==Ct&&!B&&(n.colorMask(Ct,Ct,Ct,Ct),et=Ct)},setLocked:function(Ct){B=Ct},setClear:function(Ct,rt,kt,Ot,Ne){Ne===!0&&(Ct*=Ot,rt*=Ot,kt*=Ot),_t.set(Ct,rt,kt,Ot),St.equals(_t)===!1&&(n.clearColor(Ct,rt,kt,Ot),St.copy(_t))},reset:function(){B=!1,et=null,St.set(-1,0,0,0)}}}function i(){let B=!1,_t=!1,et=null,St=null,Ct=null;return{setReversed:function(rt){if(_t!==rt){const kt=t.get("EXT_clip_control");rt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),_t=rt;const Ot=Ct;Ct=null,this.setClear(Ot)}},getReversed:function(){return _t},setTest:function(rt){rt?ot(n.DEPTH_TEST):Nt(n.DEPTH_TEST)},setMask:function(rt){et!==rt&&!B&&(n.depthMask(rt),et=rt)},setFunc:function(rt){if(_t&&(rt=mm[rt]),St!==rt){switch(rt){case nc:n.depthFunc(n.NEVER);break;case ic:n.depthFunc(n.ALWAYS);break;case sc:n.depthFunc(n.LESS);break;case Ds:n.depthFunc(n.LEQUAL);break;case rc:n.depthFunc(n.EQUAL);break;case oc:n.depthFunc(n.GEQUAL);break;case ac:n.depthFunc(n.GREATER);break;case cc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}St=rt}},setLocked:function(rt){B=rt},setClear:function(rt){Ct!==rt&&(Ct=rt,_t&&(rt=1-rt),n.clearDepth(rt))},reset:function(){B=!1,et=null,St=null,Ct=null,_t=!1}}}function s(){let B=!1,_t=null,et=null,St=null,Ct=null,rt=null,kt=null,Ot=null,Ne=null;return{setTest:function(Ae){B||(Ae?ot(n.STENCIL_TEST):Nt(n.STENCIL_TEST))},setMask:function(Ae){_t!==Ae&&!B&&(n.stencilMask(Ae),_t=Ae)},setFunc:function(Ae,On,zn){(et!==Ae||St!==On||Ct!==zn)&&(n.stencilFunc(Ae,On,zn),et=Ae,St=On,Ct=zn)},setOp:function(Ae,On,zn){(rt!==Ae||kt!==On||Ot!==zn)&&(n.stencilOp(Ae,On,zn),rt=Ae,kt=On,Ot=zn)},setLocked:function(Ae){B=Ae},setClear:function(Ae){Ne!==Ae&&(n.clearStencil(Ae),Ne=Ae)},reset:function(){B=!1,_t=null,et=null,St=null,Ct=null,rt=null,kt=null,Ot=null,Ne=null}}}const r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,b=null,S=null,v=null,y=null,w=null,A=null,x=new ae(0,0,0),E=0,R=!1,C=null,L=null,O=null,z=null,N=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,G=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(q)[1]),D=G>=1):q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),D=G>=2);let tt=null,Y={};const ct=n.getParameter(n.SCISSOR_BOX),Lt=n.getParameter(n.VIEWPORT),Rt=new Ie().fromArray(ct),vt=new Ie().fromArray(Lt);function $(B,_t,et,St){const Ct=new Uint8Array(4),rt=n.createTexture();n.bindTexture(B,rt),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let kt=0;kt<et;kt++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(_t,0,n.RGBA,1,1,St,0,n.RGBA,n.UNSIGNED_BYTE,Ct):n.texImage2D(_t+kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ct);return rt}const lt={};lt[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),lt[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),lt[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(n.DEPTH_TEST),o.setFunc(Ds),ut(!1),xt(fu),ot(n.CULL_FACE),Q(li);function ot(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Nt(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function Vt(B,_t){return h[B]!==_t?(n.bindFramebuffer(B,_t),h[B]=_t,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=_t),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=_t),!0):!1}function pt(B,_t){let et=g,St=!1;if(B){et=f.get(_t),et===void 0&&(et=[],f.set(_t,et));const Ct=B.textures;if(et.length!==Ct.length||et[0]!==n.COLOR_ATTACHMENT0){for(let rt=0,kt=Ct.length;rt<kt;rt++)et[rt]=n.COLOR_ATTACHMENT0+rt;et.length=Ct.length,St=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,St=!0);St&&n.drawBuffers(et)}function ee(B){return _!==B?(n.useProgram(B),_=B,!0):!1}const Bt={[Oi]:n.FUNC_ADD,[zp]:n.FUNC_SUBTRACT,[Bp]:n.FUNC_REVERSE_SUBTRACT};Bt[kp]=n.MIN,Bt[Hp]=n.MAX;const it={[Gp]:n.ZERO,[Vp]:n.ONE,[Wp]:n.SRC_COLOR,[tc]:n.SRC_ALPHA,[Kp]:n.SRC_ALPHA_SATURATE,[Zp]:n.DST_COLOR,[qp]:n.DST_ALPHA,[Xp]:n.ONE_MINUS_SRC_COLOR,[ec]:n.ONE_MINUS_SRC_ALPHA,[$p]:n.ONE_MINUS_DST_COLOR,[Yp]:n.ONE_MINUS_DST_ALPHA,[Jp]:n.CONSTANT_COLOR,[Qp]:n.ONE_MINUS_CONSTANT_COLOR,[jp]:n.CONSTANT_ALPHA,[tm]:n.ONE_MINUS_CONSTANT_ALPHA};function Q(B,_t,et,St,Ct,rt,kt,Ot,Ne,Ae){if(B===li){m===!0&&(Nt(n.BLEND),m=!1);return}if(m===!1&&(ot(n.BLEND),m=!0),B!==Op){if(B!==p||Ae!==R){if((b!==Oi||y!==Oi)&&(n.blendEquation(n.FUNC_ADD),b=Oi,y=Oi),Ae)switch(B){case As:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ja:n.blendFunc(n.ONE,n.ONE);break;case pu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ue("WebGLState: Invalid blending: ",B);break}else switch(B){case As:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ja:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case pu:ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mu:ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ue("WebGLState: Invalid blending: ",B);break}S=null,v=null,w=null,A=null,x.set(0,0,0),E=0,p=B,R=Ae}return}Ct=Ct||_t,rt=rt||et,kt=kt||St,(_t!==b||Ct!==y)&&(n.blendEquationSeparate(Bt[_t],Bt[Ct]),b=_t,y=Ct),(et!==S||St!==v||rt!==w||kt!==A)&&(n.blendFuncSeparate(it[et],it[St],it[rt],it[kt]),S=et,v=St,w=rt,A=kt),(Ot.equals(x)===!1||Ne!==E)&&(n.blendColor(Ot.r,Ot.g,Ot.b,Ne),x.copy(Ot),E=Ne),p=B,R=!1}function st(B,_t){B.side===He?Nt(n.CULL_FACE):ot(n.CULL_FACE);let et=B.side===an;_t&&(et=!et),ut(et),B.blending===As&&B.transparent===!1?Q(li):Q(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const St=B.stencilWrite;a.setTest(St),St&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),mt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ot(n.SAMPLE_ALPHA_TO_COVERAGE):Nt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ut(B){C!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),C=B)}function xt(B){B!==Np?(ot(n.CULL_FACE),B!==L&&(B===fu?n.cullFace(n.BACK):B===Up?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Nt(n.CULL_FACE),L=B}function Xt(B){B!==O&&(D&&n.lineWidth(B),O=B)}function mt(B,_t,et){B?(ot(n.POLYGON_OFFSET_FILL),(z!==_t||N!==et)&&(z=_t,N=et,o.getReversed()&&(_t=-_t),n.polygonOffset(_t,et))):Nt(n.POLYGON_OFFSET_FILL)}function Ft(B){B?ot(n.SCISSOR_TEST):Nt(n.SCISSOR_TEST)}function Yt(B){B===void 0&&(B=n.TEXTURE0+U-1),tt!==B&&(n.activeTexture(B),tt=B)}function F(B,_t,et){et===void 0&&(tt===null?et=n.TEXTURE0+U-1:et=tt);let St=Y[et];St===void 0&&(St={type:void 0,texture:void 0},Y[et]=St),(St.type!==B||St.texture!==_t)&&(tt!==et&&(n.activeTexture(et),tt=et),n.bindTexture(B,_t||lt[B]),St.type=B,St.texture=_t)}function le(){const B=Y[tt];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function jt(){try{n.compressedTexImage2D(...arguments)}catch(B){ue("WebGLState:",B)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(B){ue("WebGLState:",B)}}function M(){try{n.texSubImage2D(...arguments)}catch(B){ue("WebGLState:",B)}}function H(){try{n.texSubImage3D(...arguments)}catch(B){ue("WebGLState:",B)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(B){ue("WebGLState:",B)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(B){ue("WebGLState:",B)}}function dt(){try{n.texStorage2D(...arguments)}catch(B){ue("WebGLState:",B)}}function gt(){try{n.texStorage3D(...arguments)}catch(B){ue("WebGLState:",B)}}function j(){try{n.texImage2D(...arguments)}catch(B){ue("WebGLState:",B)}}function nt(){try{n.texImage3D(...arguments)}catch(B){ue("WebGLState:",B)}}function Mt(B){return d[B]!==void 0?d[B]:n.getParameter(B)}function Ht(B,_t){d[B]!==_t&&(n.pixelStorei(B,_t),d[B]=_t)}function wt(B){Rt.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Rt.copy(B))}function yt(B){vt.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),vt.copy(B))}function Zt(B,_t){let et=l.get(_t);et===void 0&&(et=new WeakMap,l.set(_t,et));let St=et.get(B);St===void 0&&(St=n.getUniformBlockIndex(_t,B.name),et.set(B,St))}function $t(B,_t){const St=l.get(_t).get(B);c.get(_t)!==St&&(n.uniformBlockBinding(_t,St,B.__bindingPointIndex),c.set(_t,St))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},tt=null,Y={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,b=null,S=null,v=null,y=null,w=null,A=null,x=new ae(0,0,0),E=0,R=!1,C=null,L=null,O=null,z=null,N=null,Rt.set(0,0,n.canvas.width,n.canvas.height),vt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:Nt,bindFramebuffer:Vt,drawBuffers:pt,useProgram:ee,setBlending:Q,setMaterial:st,setFlipSided:ut,setCullFace:xt,setLineWidth:Xt,setPolygonOffset:mt,setScissorTest:Ft,activeTexture:Yt,bindTexture:F,unbindTexture:le,compressedTexImage2D:jt,compressedTexImage3D:P,texImage2D:j,texImage3D:nt,pixelStorei:Ht,getParameter:Mt,updateUBOMapping:Zt,uniformBlockBinding:$t,texStorage2D:dt,texStorage3D:gt,texSubImage2D:M,texSubImage3D:H,compressedTexSubImage2D:V,compressedTexSubImage3D:K,scissor:wt,viewport:yt,reset:ne}}function IM(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,M){return g?new OffscreenCanvas(P,M):Uo("canvas")}function m(P,M,H){let V=1;const K=jt(P);if((K.width>H||K.height>H)&&(V=H/Math.max(K.width,K.height)),V<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const dt=Math.floor(V*K.width),gt=Math.floor(V*K.height);h===void 0&&(h=_(dt,gt));const j=M?_(dt,gt):h;return j.width=dt,j.height=gt,j.getContext("2d").drawImage(P,0,0,dt,gt),Kt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+dt+"x"+gt+")."),j}else return"data"in P&&Kt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),P;return P}function p(P){return P.generateMipmaps}function b(P){n.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(P,M,H,V,K,dt=!1){if(P!==null){if(n[P]!==void 0)return n[P];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let gt;V&&(gt=t.get("EXT_texture_norm16"),gt||Kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=M;if(M===n.RED&&(H===n.FLOAT&&(j=n.R32F),H===n.HALF_FLOAT&&(j=n.R16F),H===n.UNSIGNED_BYTE&&(j=n.R8),H===n.UNSIGNED_SHORT&&gt&&(j=gt.R16_EXT),H===n.SHORT&&gt&&(j=gt.R16_SNORM_EXT)),M===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.R8UI),H===n.UNSIGNED_SHORT&&(j=n.R16UI),H===n.UNSIGNED_INT&&(j=n.R32UI),H===n.BYTE&&(j=n.R8I),H===n.SHORT&&(j=n.R16I),H===n.INT&&(j=n.R32I)),M===n.RG&&(H===n.FLOAT&&(j=n.RG32F),H===n.HALF_FLOAT&&(j=n.RG16F),H===n.UNSIGNED_BYTE&&(j=n.RG8),H===n.UNSIGNED_SHORT&&gt&&(j=gt.RG16_EXT),H===n.SHORT&&gt&&(j=gt.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.RG8UI),H===n.UNSIGNED_SHORT&&(j=n.RG16UI),H===n.UNSIGNED_INT&&(j=n.RG32UI),H===n.BYTE&&(j=n.RG8I),H===n.SHORT&&(j=n.RG16I),H===n.INT&&(j=n.RG32I)),M===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.RGB8UI),H===n.UNSIGNED_SHORT&&(j=n.RGB16UI),H===n.UNSIGNED_INT&&(j=n.RGB32UI),H===n.BYTE&&(j=n.RGB8I),H===n.SHORT&&(j=n.RGB16I),H===n.INT&&(j=n.RGB32I)),M===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),H===n.UNSIGNED_INT&&(j=n.RGBA32UI),H===n.BYTE&&(j=n.RGBA8I),H===n.SHORT&&(j=n.RGBA16I),H===n.INT&&(j=n.RGBA32I)),M===n.RGB&&(H===n.UNSIGNED_SHORT&&gt&&(j=gt.RGB16_EXT),H===n.SHORT&&gt&&(j=gt.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),M===n.RGBA){const nt=dt?No:he.getTransfer(K);H===n.FLOAT&&(j=n.RGBA32F),H===n.HALF_FLOAT&&(j=n.RGBA16F),H===n.UNSIGNED_BYTE&&(j=nt===ge?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&gt&&(j=gt.RGBA16_EXT),H===n.SHORT&&gt&&(j=gt.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(P,M){let H;return P?M===null||M===Kn||M===Er?H=n.DEPTH24_STENCIL8:M===Un?H=n.DEPTH32F_STENCIL8:M===wr&&(H=n.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Kn||M===Er?H=n.DEPTH_COMPONENT24:M===Un?H=n.DEPTH_COMPONENT32F:M===wr&&(H=n.DEPTH_COMPONENT16),H}function w(P,M){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ze&&P.minFilter!==nn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function A(P){const M=P.target;M.removeEventListener("dispose",A),E(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&d.delete(M)}function x(P){const M=P.target;M.removeEventListener("dispose",x),C(M)}function E(P){const M=i.get(P);if(M.__webglInit===void 0)return;const H=P.source,V=f.get(H);if(V){const K=V[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&R(P),Object.keys(V).length===0&&f.delete(H)}i.remove(P)}function R(P){const M=i.get(P);n.deleteTexture(M.__webglTexture);const H=P.source,V=f.get(H);delete V[M.__cacheKey],o.memory.textures--}function C(P){const M=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(M.__webglFramebuffer[V]))for(let K=0;K<M.__webglFramebuffer[V].length;K++)n.deleteFramebuffer(M.__webglFramebuffer[V][K]);else n.deleteFramebuffer(M.__webglFramebuffer[V]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[V])}else{if(Array.isArray(M.__webglFramebuffer))for(let V=0;V<M.__webglFramebuffer.length;V++)n.deleteFramebuffer(M.__webglFramebuffer[V]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let V=0;V<M.__webglColorRenderbuffer.length;V++)M.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[V]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=P.textures;for(let V=0,K=H.length;V<K;V++){const dt=i.get(H[V]);dt.__webglTexture&&(n.deleteTexture(dt.__webglTexture),o.memory.textures--),i.remove(H[V])}i.remove(P)}let L=0;function O(){L=0}function z(){return L}function N(P){L=P}function U(){const P=L;return P>=s.maxTextures&&Kt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),L+=1,P}function D(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function G(P,M){const H=i.get(P);if(P.isVideoTexture&&F(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){const V=P.image;if(V===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{Nt(H,P,M);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+M)}function q(P,M){const H=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){Nt(H,P,M);return}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+M)}function tt(P,M){const H=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){Nt(H,P,M);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+M)}function Y(P,M){const H=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&H.__version!==P.version){Vt(H,P,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+M)}const ct={[Po]:n.REPEAT,[oi]:n.CLAMP_TO_EDGE,[lc]:n.MIRRORED_REPEAT},Lt={[Ze]:n.NEAREST,[im]:n.NEAREST_MIPMAP_NEAREST,[Gr]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[ra]:n.LINEAR_MIPMAP_NEAREST,[Hi]:n.LINEAR_MIPMAP_LINEAR},Rt={[om]:n.NEVER,[hm]:n.ALWAYS,[am]:n.LESS,[_l]:n.LEQUAL,[cm]:n.EQUAL,[vl]:n.GEQUAL,[lm]:n.GREATER,[um]:n.NOTEQUAL};function vt(P,M){if(M.type===Un&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===nn||M.magFilter===ra||M.magFilter===Gr||M.magFilter===Hi||M.minFilter===nn||M.minFilter===ra||M.minFilter===Gr||M.minFilter===Hi)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ct[M.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ct[M.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ct[M.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Lt[M.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Lt[M.minFilter]),M.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Rt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ze||M.minFilter!==Gr&&M.minFilter!==Hi||M.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function $(P,M){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",A));const V=M.source;let K=f.get(V);K===void 0&&(K={},f.set(V,K));const dt=D(M);if(dt!==P.__cacheKey){K[dt]===void 0&&(K[dt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),K[dt].usedTimes++;const gt=K[P.__cacheKey];gt!==void 0&&(K[P.__cacheKey].usedTimes--,gt.usedTimes===0&&R(M)),P.__cacheKey=dt,P.__webglTexture=K[dt].texture}return H}function lt(P,M,H){return Math.floor(Math.floor(P/H)/M)}function ot(P,M,H,V){const dt=P.updateRanges;if(dt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,H,V,M.data);else{dt.sort((Ht,wt)=>Ht.start-wt.start);let gt=0;for(let Ht=1;Ht<dt.length;Ht++){const wt=dt[gt],yt=dt[Ht],Zt=wt.start+wt.count,$t=lt(yt.start,M.width,4),ne=lt(wt.start,M.width,4);yt.start<=Zt+1&&$t===ne&&lt(yt.start+yt.count-1,M.width,4)===$t?wt.count=Math.max(wt.count,yt.start+yt.count-wt.start):(++gt,dt[gt]=yt)}dt.length=gt+1;const j=e.getParameter(n.UNPACK_ROW_LENGTH),nt=e.getParameter(n.UNPACK_SKIP_PIXELS),Mt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let Ht=0,wt=dt.length;Ht<wt;Ht++){const yt=dt[Ht],Zt=Math.floor(yt.start/4),$t=Math.ceil(yt.count/4),ne=Zt%M.width,B=Math.floor(Zt/M.width),_t=$t,et=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ne),e.pixelStorei(n.UNPACK_SKIP_ROWS,B),e.texSubImage2D(n.TEXTURE_2D,0,ne,B,_t,et,H,V,M.data)}P.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,j),e.pixelStorei(n.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Mt)}}function Nt(P,M,H){let V=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(V=n.TEXTURE_3D);const K=$(P,M),dt=M.source;e.bindTexture(V,P.__webglTexture,n.TEXTURE0+H);const gt=i.get(dt);if(dt.version!==gt.__version||K===!0){if(e.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const et=he.getPrimaries(he.workingColorSpace),St=M.colorSpace===Ei?null:he.getPrimaries(M.colorSpace),Ct=M.colorSpace===Ei||et===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct)}e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let nt=m(M.image,!1,s.maxTextureSize);nt=le(M,nt);const Mt=r.convert(M.format,M.colorSpace),Ht=r.convert(M.type);let wt=v(M.internalFormat,Mt,Ht,M.normalized,M.colorSpace,M.isVideoTexture);vt(V,M);let yt;const Zt=M.mipmaps,$t=M.isVideoTexture!==!0,ne=gt.__version===void 0||K===!0,B=dt.dataReady,_t=w(M,nt);if(M.isDepthTexture)wt=y(M.format===Gi,M.type),ne&&($t?e.texStorage2D(n.TEXTURE_2D,1,wt,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,wt,nt.width,nt.height,0,Mt,Ht,null));else if(M.isDataTexture)if(Zt.length>0){$t&&ne&&e.texStorage2D(n.TEXTURE_2D,_t,wt,Zt[0].width,Zt[0].height);for(let et=0,St=Zt.length;et<St;et++)yt=Zt[et],$t?B&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,yt.width,yt.height,Mt,Ht,yt.data):e.texImage2D(n.TEXTURE_2D,et,wt,yt.width,yt.height,0,Mt,Ht,yt.data);M.generateMipmaps=!1}else $t?(ne&&e.texStorage2D(n.TEXTURE_2D,_t,wt,nt.width,nt.height),B&&ot(M,nt,Mt,Ht)):e.texImage2D(n.TEXTURE_2D,0,wt,nt.width,nt.height,0,Mt,Ht,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$t&&ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,wt,Zt[0].width,Zt[0].height,nt.depth);for(let et=0,St=Zt.length;et<St;et++)if(yt=Zt[et],M.format!==Fn)if(Mt!==null)if($t){if(B)if(M.layerUpdates.size>0){const Ct=ju(yt.width,yt.height,M.format,M.type);for(const rt of M.layerUpdates){const kt=yt.data.subarray(rt*Ct/yt.data.BYTES_PER_ELEMENT,(rt+1)*Ct/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,rt,yt.width,yt.height,1,Mt,kt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,yt.width,yt.height,nt.depth,Mt,yt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,wt,yt.width,yt.height,nt.depth,0,yt.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?B&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,yt.width,yt.height,nt.depth,Mt,Ht,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,wt,yt.width,yt.height,nt.depth,0,Mt,Ht,yt.data)}else{$t&&ne&&e.texStorage2D(n.TEXTURE_2D,_t,wt,Zt[0].width,Zt[0].height);for(let et=0,St=Zt.length;et<St;et++)yt=Zt[et],M.format!==Fn?Mt!==null?$t?B&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,yt.width,yt.height,Mt,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,et,wt,yt.width,yt.height,0,yt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?B&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,yt.width,yt.height,Mt,Ht,yt.data):e.texImage2D(n.TEXTURE_2D,et,wt,yt.width,yt.height,0,Mt,Ht,yt.data)}else if(M.isDataArrayTexture)if($t){if(ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,wt,nt.width,nt.height,nt.depth),B)if(M.layerUpdates.size>0){const et=ju(nt.width,nt.height,M.format,M.type);for(const St of M.layerUpdates){const Ct=nt.data.subarray(St*et/nt.data.BYTES_PER_ELEMENT,(St+1)*et/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,St,nt.width,nt.height,1,Mt,Ht,Ct)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,Mt,Ht,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,wt,nt.width,nt.height,nt.depth,0,Mt,Ht,nt.data);else if(M.isData3DTexture)$t?(ne&&e.texStorage3D(n.TEXTURE_3D,_t,wt,nt.width,nt.height,nt.depth),B&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,Mt,Ht,nt.data)):e.texImage3D(n.TEXTURE_3D,0,wt,nt.width,nt.height,nt.depth,0,Mt,Ht,nt.data);else if(M.isFramebufferTexture){if(ne)if($t)e.texStorage2D(n.TEXTURE_2D,_t,wt,nt.width,nt.height);else{let et=nt.width,St=nt.height;for(let Ct=0;Ct<_t;Ct++)e.texImage2D(n.TEXTURE_2D,Ct,wt,et,St,0,Mt,Ht,null),et>>=1,St>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const et=n.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),nt.parentNode!==et){et.appendChild(nt),d.add(M),et.onpaint=St=>{const Ct=St.changedElements;for(const rt of d)Ct.includes(rt.image)&&(rt.needsUpdate=!0)},et.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,nt);else{const Ct=n.RGBA,rt=n.RGBA,kt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ct,rt,kt,nt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Zt.length>0){if($t&&ne){const et=jt(Zt[0]);e.texStorage2D(n.TEXTURE_2D,_t,wt,et.width,et.height)}for(let et=0,St=Zt.length;et<St;et++)yt=Zt[et],$t?B&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,Mt,Ht,yt):e.texImage2D(n.TEXTURE_2D,et,wt,Mt,Ht,yt);M.generateMipmaps=!1}else if($t){if(ne){const et=jt(nt);e.texStorage2D(n.TEXTURE_2D,_t,wt,et.width,et.height)}B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,Ht,nt)}else e.texImage2D(n.TEXTURE_2D,0,wt,Mt,Ht,nt);p(M)&&b(V),gt.__version=dt.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Vt(P,M,H){if(M.image.length!==6)return;const V=$(P,M),K=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+H);const dt=i.get(K);if(K.version!==dt.__version||V===!0){e.activeTexture(n.TEXTURE0+H);const gt=he.getPrimaries(he.workingColorSpace),j=M.colorSpace===Ei?null:he.getPrimaries(M.colorSpace),nt=M.colorSpace===Ei||gt===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);const Mt=M.isCompressedTexture||M.image[0].isCompressedTexture,Ht=M.image[0]&&M.image[0].isDataTexture,wt=[];for(let rt=0;rt<6;rt++)!Mt&&!Ht?wt[rt]=m(M.image[rt],!0,s.maxCubemapSize):wt[rt]=Ht?M.image[rt].image:M.image[rt],wt[rt]=le(M,wt[rt]);const yt=wt[0],Zt=r.convert(M.format,M.colorSpace),$t=r.convert(M.type),ne=v(M.internalFormat,Zt,$t,M.normalized,M.colorSpace),B=M.isVideoTexture!==!0,_t=dt.__version===void 0||V===!0,et=K.dataReady;let St=w(M,yt);vt(n.TEXTURE_CUBE_MAP,M);let Ct;if(Mt){B&&_t&&e.texStorage2D(n.TEXTURE_CUBE_MAP,St,ne,yt.width,yt.height);for(let rt=0;rt<6;rt++){Ct=wt[rt].mipmaps;for(let kt=0;kt<Ct.length;kt++){const Ot=Ct[kt];M.format!==Fn?Zt!==null?B?et&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,kt,0,0,Ot.width,Ot.height,Zt,Ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,kt,ne,Ot.width,Ot.height,0,Ot.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,kt,0,0,Ot.width,Ot.height,Zt,$t,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,kt,ne,Ot.width,Ot.height,0,Zt,$t,Ot.data)}}}else{if(Ct=M.mipmaps,B&&_t){Ct.length>0&&St++;const rt=jt(wt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,St,ne,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Ht){B?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,wt[rt].width,wt[rt].height,Zt,$t,wt[rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,ne,wt[rt].width,wt[rt].height,0,Zt,$t,wt[rt].data);for(let kt=0;kt<Ct.length;kt++){const Ne=Ct[kt].image[rt].image;B?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,kt+1,0,0,Ne.width,Ne.height,Zt,$t,Ne.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,kt+1,ne,Ne.width,Ne.height,0,Zt,$t,Ne.data)}}else{B?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Zt,$t,wt[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,ne,Zt,$t,wt[rt]);for(let kt=0;kt<Ct.length;kt++){const Ot=Ct[kt];B?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,kt+1,0,0,Zt,$t,Ot.image[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,kt+1,ne,Zt,$t,Ot.image[rt])}}}p(M)&&b(n.TEXTURE_CUBE_MAP),dt.__version=K.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function pt(P,M,H,V,K,dt){const gt=r.convert(H.format,H.colorSpace),j=r.convert(H.type),nt=v(H.internalFormat,gt,j,H.normalized,H.colorSpace),Mt=i.get(M),Ht=i.get(H);if(Ht.__renderTarget=M,!Mt.__hasExternalTextures){const wt=Math.max(1,M.width>>dt),yt=Math.max(1,M.height>>dt);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,dt,nt,wt,yt,M.depth,0,gt,j,null):e.texImage2D(K,dt,nt,wt,yt,0,gt,j,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),Yt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,K,Ht.__webglTexture,0,Ft(M)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,K,Ht.__webglTexture,dt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(P,M,H){if(n.bindRenderbuffer(n.RENDERBUFFER,P),M.depthBuffer){const V=M.depthTexture,K=V&&V.isDepthTexture?V.type:null,dt=y(M.stencilBuffer,K),gt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Yt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ft(M),dt,M.width,M.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft(M),dt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,dt,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,gt,n.RENDERBUFFER,P)}else{const V=M.textures;for(let K=0;K<V.length;K++){const dt=V[K],gt=r.convert(dt.format,dt.colorSpace),j=r.convert(dt.type),nt=v(dt.internalFormat,gt,j,dt.normalized,dt.colorSpace);Yt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ft(M),nt,M.width,M.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft(M),nt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,nt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Bt(P,M,H){const V=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(M.depthTexture);if(K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V){if(K.__webglInit===void 0&&(K.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),vt(n.TEXTURE_CUBE_MAP,M.depthTexture);const Mt=r.convert(M.depthTexture.format),Ht=r.convert(M.depthTexture.type);let wt;M.depthTexture.format===di?wt=n.DEPTH_COMPONENT24:M.depthTexture.format===Gi&&(wt=n.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,wt,M.width,M.height,0,Mt,Ht,null)}}else G(M.depthTexture,0);const dt=K.__webglTexture,gt=Ft(M),j=V?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,nt=M.depthTexture.format===Gi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===di)Yt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,nt,j,dt,0,gt):n.framebufferTexture2D(n.FRAMEBUFFER,nt,j,dt,0);else if(M.depthTexture.format===Gi)Yt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,nt,j,dt,0,gt):n.framebufferTexture2D(n.FRAMEBUFFER,nt,j,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(P){const M=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const V=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),V){const K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,V.removeEventListener("dispose",K)};V.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=V}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let V=0;V<6;V++)Bt(M.__webglFramebuffer[V],P,V);else{const V=P.texture.mipmaps;V&&V.length>0?Bt(M.__webglFramebuffer[0],P,0):Bt(M.__webglFramebuffer,P,0)}else if(H){M.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[V]),M.__webglDepthbuffer[V]===void 0)M.__webglDepthbuffer[V]=n.createRenderbuffer(),ee(M.__webglDepthbuffer[V],P,!1);else{const K=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=M.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,dt)}}else{const V=P.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ee(M.__webglDepthbuffer,P,!1);else{const K=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,dt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Q(P,M,H){const V=i.get(P);M!==void 0&&pt(V.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&it(P)}function st(P){const M=P.texture,H=i.get(P),V=i.get(M);P.addEventListener("dispose",x);const K=P.textures,dt=P.isWebGLCubeRenderTarget===!0,gt=K.length>1;if(gt||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=M.version,o.memory.textures++),dt){H.__webglFramebuffer=[];for(let j=0;j<6;j++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[j]=[];for(let nt=0;nt<M.mipmaps.length;nt++)H.__webglFramebuffer[j][nt]=n.createFramebuffer()}else H.__webglFramebuffer[j]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let j=0;j<M.mipmaps.length;j++)H.__webglFramebuffer[j]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(gt)for(let j=0,nt=K.length;j<nt;j++){const Mt=i.get(K[j]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Yt(P)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let j=0;j<K.length;j++){const nt=K[j];H.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[j]);const Mt=r.convert(nt.format,nt.colorSpace),Ht=r.convert(nt.type),wt=v(nt.internalFormat,Mt,Ht,nt.normalized,nt.colorSpace,P.isXRRenderTarget===!0),yt=Ft(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,yt,wt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,H.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),ee(H.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(dt){e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),vt(n.TEXTURE_CUBE_MAP,M);for(let j=0;j<6;j++)if(M.mipmaps&&M.mipmaps.length>0)for(let nt=0;nt<M.mipmaps.length;nt++)pt(H.__webglFramebuffer[j][nt],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,nt);else pt(H.__webglFramebuffer[j],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(M)&&b(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let j=0,nt=K.length;j<nt;j++){const Mt=K[j],Ht=i.get(Mt);let wt=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(wt=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(wt,Ht.__webglTexture),vt(wt,Mt),pt(H.__webglFramebuffer,P,Mt,n.COLOR_ATTACHMENT0+j,wt,0),p(Mt)&&b(wt)}e.unbindTexture()}else{let j=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(j=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,V.__webglTexture),vt(j,M),M.mipmaps&&M.mipmaps.length>0)for(let nt=0;nt<M.mipmaps.length;nt++)pt(H.__webglFramebuffer[nt],P,M,n.COLOR_ATTACHMENT0,j,nt);else pt(H.__webglFramebuffer,P,M,n.COLOR_ATTACHMENT0,j,0);p(M)&&b(j),e.unbindTexture()}P.depthBuffer&&it(P)}function ut(P){const M=P.textures;for(let H=0,V=M.length;H<V;H++){const K=M[H];if(p(K)){const dt=S(P),gt=i.get(K).__webglTexture;e.bindTexture(dt,gt),b(dt),e.unbindTexture()}}}const xt=[],Xt=[];function mt(P){if(P.samples>0){if(Yt(P)===!1){const M=P.textures,H=P.width,V=P.height;let K=n.COLOR_BUFFER_BIT;const dt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=i.get(P),j=M.length>1;if(j)for(let Mt=0;Mt<M.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);const nt=P.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Mt=0;Mt<M.length;Mt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gt.__webglColorRenderbuffer[Mt]);const Ht=i.get(M[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ht,0)}n.blitFramebuffer(0,0,H,V,0,0,H,V,K,n.NEAREST),c===!0&&(xt.length=0,Xt.length=0,xt.push(n.COLOR_ATTACHMENT0+Mt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(xt.push(dt),Xt.push(dt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Xt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let Mt=0;Mt<M.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,gt.__webglColorRenderbuffer[Mt]);const Ht=i.get(M[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,Ht,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const M=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Ft(P){return Math.min(s.maxSamples,P.samples)}function Yt(P){const M=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function F(P){const M=o.render.frame;u.get(P)!==M&&(u.set(P,M),P.update())}function le(P,M){const H=P.colorSpace,V=P.format,K=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==Do&&H!==Ei&&(he.getTransfer(H)===ge?(V!==Fn||K!==Mn)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ue("WebGLTextures: Unsupported texture color space:",H)),M}function jt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.getTextureUnits=z,this.setTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=q,this.setTexture3D=tt,this.setTextureCube=Y,this.rebindTextures=Q,this.setupRenderTarget=st,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function DM(n,t){function e(i,s=Ei){let r;const o=he.getTransfer(s);if(i===Mn)return n.UNSIGNED_BYTE;if(i===dl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===fl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Md)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===xd)return n.BYTE;if(i===_d)return n.SHORT;if(i===wr)return n.UNSIGNED_SHORT;if(i===hl)return n.INT;if(i===Kn)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===hi)return n.HALF_FLOAT;if(i===yd)return n.ALPHA;if(i===Sd)return n.RGB;if(i===Fn)return n.RGBA;if(i===di)return n.DEPTH_COMPONENT;if(i===Gi)return n.DEPTH_STENCIL;if(i===pl)return n.RED;if(i===ml)return n.RED_INTEGER;if(i===Xi)return n.RG;if(i===gl)return n.RG_INTEGER;if(i===xl)return n.RGBA_INTEGER;if(i===yo||i===So||i===bo||i===wo)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===So)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===uc||i===hc||i===dc||i===fc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pc||i===mc||i===gc||i===xc||i===_c||i===Lo||i===vc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===pc||i===mc)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===gc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===xc)return r.COMPRESSED_R11_EAC;if(i===_c)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Lo)return r.COMPRESSED_RG11_EAC;if(i===vc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Mc||i===yc||i===Sc||i===bc||i===wc||i===Ec||i===Tc||i===Ac||i===Rc||i===Cc||i===Pc||i===Lc||i===Ic||i===Dc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Mc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ec)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ac)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ic)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nc||i===Uc||i===Fc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Nc)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Oc||i===zc||i===Io||i===Bc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Oc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const NM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class FM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Id(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new En({vertexShader:NM,fragmentShader:UM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new J(new hn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OM extends $i{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new FM,p={},b=e.getContextAttributes();let S=null,v=null;const y=[],w=[],A=new ht;let x=null;const E=new vn;E.viewport=new Ie;const R=new vn;R.viewport=new Ie;const C=[E,R],L=new q0;let O=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let lt=y[$];return lt===void 0&&(lt=new ha,y[$]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function($){let lt=y[$];return lt===void 0&&(lt=new ha,y[$]=lt),lt.getGripSpace()},this.getHand=function($){let lt=y[$];return lt===void 0&&(lt=new ha,y[$]=lt),lt.getHandSpace()};function N($){const lt=w.indexOf($.inputSource);if(lt===-1)return;const ot=y[lt];ot!==void 0&&(ot.update($.inputSource,$.frame,l||o),ot.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",D);for(let $=0;$<y.length;$++){const lt=w[$];lt!==null&&(w[$]=null,y[$].disconnect(lt))}O=null,z=null,m.reset();for(const $ in p)delete p[$];t.setRenderTarget(S),f=null,h=null,d=null,s=null,v=null,vt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",U),s.addEventListener("inputsourceschange",D),b.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,Nt=null,Vt=null;b.depth&&(Vt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=b.stencil?Gi:di,Nt=b.stencil?Er:Kn);const pt={colorFormat:e.RGBA8,depthFormat:Vt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(pt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new $n(h.textureWidth,h.textureHeight,{format:Fn,type:Mn,depthTexture:new Fs(h.textureWidth,h.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ot={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new $n(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),vt.setContext(s),vt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function D($){for(let lt=0;lt<$.removed.length;lt++){const ot=$.removed[lt],Nt=w.indexOf(ot);Nt>=0&&(w[Nt]=null,y[Nt].disconnect(ot))}for(let lt=0;lt<$.added.length;lt++){const ot=$.added[lt];let Nt=w.indexOf(ot);if(Nt===-1){for(let pt=0;pt<y.length;pt++)if(pt>=w.length){w.push(ot),Nt=pt;break}else if(w[pt]===null){w[pt]=ot,Nt=pt;break}if(Nt===-1)break}const Vt=y[Nt];Vt&&Vt.connect(ot)}}const G=new I,q=new I;function tt($,lt,ot){G.setFromMatrixPosition(lt.matrixWorld),q.setFromMatrixPosition(ot.matrixWorld);const Nt=G.distanceTo(q),Vt=lt.projectionMatrix.elements,pt=ot.projectionMatrix.elements,ee=Vt[14]/(Vt[10]-1),Bt=Vt[14]/(Vt[10]+1),it=(Vt[9]+1)/Vt[5],Q=(Vt[9]-1)/Vt[5],st=(Vt[8]-1)/Vt[0],ut=(pt[8]+1)/pt[0],xt=ee*st,Xt=ee*ut,mt=Nt/(-st+ut),Ft=mt*-st;if(lt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ft),$.translateZ(mt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Vt[10]===-1)$.projectionMatrix.copy(lt.projectionMatrix),$.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Yt=ee+mt,F=Bt+mt,le=xt-Ft,jt=Xt+(Nt-Ft),P=it*Bt/F*Yt,M=Q*Bt/F*Yt;$.projectionMatrix.makePerspective(le,jt,P,M,Yt,F),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Y($,lt){lt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(lt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let lt=$.near,ot=$.far;m.texture!==null&&(m.depthNear>0&&(lt=m.depthNear),m.depthFar>0&&(ot=m.depthFar)),L.near=R.near=E.near=lt,L.far=R.far=E.far=ot,(O!==L.near||z!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),O=L.near,z=L.far),L.layers.mask=$.layers.mask|6,E.layers.mask=L.layers.mask&-5,R.layers.mask=L.layers.mask&-3;const Nt=$.parent,Vt=L.cameras;Y(L,Nt);for(let pt=0;pt<Vt.length;pt++)Y(Vt[pt],Nt);Vt.length===2?tt(L,E,R):L.projectionMatrix.copy(E.projectionMatrix),ct($,L,Nt)};function ct($,lt,ot){ot===null?$.matrix.copy(lt.matrixWorld):($.matrix.copy(ot.matrixWorld),$.matrix.invert(),$.matrix.multiply(lt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(lt.projectionMatrix),$.projectionMatrixInverse.copy(lt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ar*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function($){return p[$]};let Lt=null;function Rt($,lt){if(u=lt.getViewerPose(l||o),g=lt,u!==null){const ot=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Nt=!1;ot.length!==L.cameras.length&&(L.cameras.length=0,Nt=!0);for(let Bt=0;Bt<ot.length;Bt++){const it=ot[Bt];let Q=null;if(f!==null)Q=f.getViewport(it);else{const ut=d.getViewSubImage(h,it);Q=ut.viewport,Bt===0&&(t.setRenderTargetTextures(v,ut.colorTexture,ut.depthStencilTexture),t.setRenderTarget(v))}let st=C[Bt];st===void 0&&(st=new vn,st.layers.enable(Bt),st.viewport=new Ie,C[Bt]=st),st.matrix.fromArray(it.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(it.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Q.x,Q.y,Q.width,Q.height),Bt===0&&(L.matrix.copy(st.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Nt===!0&&L.cameras.push(st)}const Vt=s.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const Bt=d.getDepthInformation(ot[0]);Bt&&Bt.isValid&&Bt.texture&&m.init(Bt,s.renderState)}if(Vt&&Vt.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let Bt=0;Bt<ot.length;Bt++){const it=ot[Bt].camera;if(it){let Q=p[it];Q||(Q=new Id,p[it]=Q);const st=d.getCameraImage(it);Q.sourceTexture=st}}}}for(let ot=0;ot<y.length;ot++){const Nt=w[ot],Vt=y[ot];Nt!==null&&Vt!==void 0&&Vt.update(Nt,lt,l||o)}Lt&&Lt($,lt),lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:lt}),g=null}const vt=new qd;vt.setAnimationLoop(Rt),this.setAnimationLoop=function($){Lt=$},this.dispose=function(){}}}const zM=new ye,jd=new te;jd.set(-1,0,0,0,1,0,0,0,1);function BM(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Vd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,S,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),S=b.envMap,v=b.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(zM.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(jd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function kM(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const w=y.program;i.uniformBlockBinding(v,w)}function l(v,y){let w=s[v.id];w===void 0&&(m(v),w=u(v),s[v.id]=w,v.addEventListener("dispose",b));const A=y.program;i.updateUBOMapping(v,A);const x=t.render.frame;r[v.id]!==x&&(h(v),r[v.id]=x)}function u(v){const y=d();v.__bindingPointIndex=y;const w=n.createBuffer(),A=v.__size,x=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,A,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,w),w}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=s[v.id],w=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let x=0,E=w.length;x<E;x++){const R=w[x];if(Array.isArray(R))for(let C=0,L=R.length;C<L;C++)f(R[C],x,C,A);else f(R,x,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,y,w,A){if(_(v,y,w,A)===!0){const x=v.__offset,E=v.value;if(Array.isArray(E)){let R=0;for(let C=0;C<E.length;C++){const L=E[C],O=p(L);g(L,v.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,v.__data)}}function g(v,y,w){typeof v=="number"||typeof v=="boolean"?y[0]=v:v.isMatrix3?(y[0]=v.elements[0],y[1]=v.elements[1],y[2]=v.elements[2],y[3]=0,y[4]=v.elements[3],y[5]=v.elements[4],y[6]=v.elements[5],y[7]=0,y[8]=v.elements[6],y[9]=v.elements[7],y[10]=v.elements[8],y[11]=0):ArrayBuffer.isView(v)?y.set(new v.constructor(v.buffer,v.byteOffset,y.length)):v.toArray(y,w)}function _(v,y,w,A){const x=v.value,E=y+"_"+w;if(A[E]===void 0)return typeof x=="number"||typeof x=="boolean"?A[E]=x:ArrayBuffer.isView(x)?A[E]=x.slice():A[E]=x.clone(),!0;{const R=A[E];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(v){const y=v.uniforms;let w=0;const A=16;for(let E=0,R=y.length;E<R;E++){const C=Array.isArray(y[E])?y[E]:[y[E]];for(let L=0,O=C.length;L<O;L++){const z=C[L],N=Array.isArray(z.value)?z.value:[z.value];for(let U=0,D=N.length;U<D;U++){const G=N[U],q=p(G),tt=w%A,Y=tt%q.boundary,ct=tt+Y;w+=Y,ct!==0&&A-ct<q.storage&&(w+=A-ct),z.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=w,w+=q.storage}}}const x=w%A;return x>0&&(w+=A-x),v.__size=w,v.__cache={},this}function p(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Kt("WebGLRenderer: Unsupported uniform value type.",v),y}function b(v){const y=v.target;y.removeEventListener("dispose",b);const w=o.indexOf(y.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function S(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:S}}const HM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hn=null;function GM(){return Hn===null&&(Hn=new Pd(HM,16,16,Xi,hi),Hn.name="DFG_LUT",Hn.minFilter=nn,Hn.magFilter=nn,Hn.wrapS=oi,Hn.wrapT=oi,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}class VM{constructor(t={}){const{canvas:e=fm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Mn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=f,m=new Set([xl,gl,ml]),p=new Set([Mn,Kn,wr,Er,dl,fl]),b=new Uint32Array(4),S=new Int32Array(4),v=new I;let y=null,w=null;const A=[],x=[];let E=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let C=!1,L=null,O=null,z=null,N=null;this._outputColorSpace=Ke;let U=0,D=0,G=null,q=-1,tt=null;const Y=new Ie,ct=new Ie;let Lt=null;const Rt=new ae(0);let vt=0,$=e.width,lt=e.height,ot=1,Nt=null,Vt=null;const pt=new Ie(0,0,$,lt),ee=new Ie(0,0,$,lt);let Bt=!1;const it=new wl;let Q=!1,st=!1;const ut=new ye,xt=new I,Xt=new Ie,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function Yt(){return G===null?ot:1}let F=i;function le(T,k){return e.getContext(T,k)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ll}`),e.addEventListener("webglcontextlost",Ne,!1),e.addEventListener("webglcontextrestored",Ae,!1),e.addEventListener("webglcontextcreationerror",On,!1),F===null){const k="webgl2";if(F=le(k,T),F===null)throw le(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw ue("WebGLRenderer: "+T.message),T}let jt,P,M,H,V,K,dt,gt,j,nt,Mt,Ht,wt,yt,Zt,$t,ne,B,_t,et,St,Ct,rt;function kt(){jt=new G_(F),jt.init(),St=new DM(F,jt),P=new N_(F,jt,t,St),M=new LM(F,jt),P.reversedDepthBuffer&&h&&M.buffers.depth.setReversed(!0),O=F.createFramebuffer(),z=F.createFramebuffer(),N=F.createFramebuffer(),H=new X_(F),V=new xM,K=new IM(F,jt,M,V,P,St,H),dt=new H_(R),gt=new $0(F),Ct=new I_(F,gt),j=new V_(F,gt,H,Ct),nt=new Y_(F,j,gt,Ct,H),B=new q_(F,P,K),Zt=new U_(V),Mt=new gM(R,dt,jt,P,Ct,Zt),Ht=new BM(R,V),wt=new vM,yt=new EM(jt),ne=new L_(R,dt,M,nt,g,c),$t=new PM(R,nt,P),rt=new kM(F,H,P,M),_t=new D_(F,jt,H),et=new W_(F,jt,H),H.programs=Mt.programs,R.capabilities=P,R.extensions=jt,R.properties=V,R.renderLists=wt,R.shadowMap=$t,R.state=M,R.info=H}kt(),_!==Mn&&(E=new $_(_,e.width,e.height,a,s,r));const Ot=new OM(R,F);this.xr=Ot,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=jt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=jt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(T){T!==void 0&&(ot=T,this.setSize($,lt,!1))},this.getSize=function(T){return T.set($,lt)},this.setSize=function(T,k,Z=!0){if(Ot.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,lt=k,e.width=Math.floor(T*ot),e.height=Math.floor(k*ot),Z===!0&&(e.style.width=T+"px",e.style.height=k+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set($*ot,lt*ot).floor()},this.setDrawingBufferSize=function(T,k,Z){$=T,lt=k,ot=Z,e.width=Math.floor(T*Z),e.height=Math.floor(k*Z),this.setViewport(0,0,T,k)},this.setEffects=function(T){if(_===Mn){ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let k=0;k<T.length;k++)if(T[k].isOutputPass===!0){Kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Y)},this.getViewport=function(T){return T.copy(pt)},this.setViewport=function(T,k,Z,W){T.isVector4?pt.set(T.x,T.y,T.z,T.w):pt.set(T,k,Z,W),M.viewport(Y.copy(pt).multiplyScalar(ot).round())},this.getScissor=function(T){return T.copy(ee)},this.setScissor=function(T,k,Z,W){T.isVector4?ee.set(T.x,T.y,T.z,T.w):ee.set(T,k,Z,W),M.scissor(ct.copy(ee).multiplyScalar(ot).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(T){M.setScissorTest(Bt=T)},this.setOpaqueSort=function(T){Nt=T},this.setTransparentSort=function(T){Vt=T},this.getClearColor=function(T){return T.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,Z=!0){let W=0;if(T){let X=!1;if(G!==null){const At=G.texture.format;X=m.has(At)}if(X){const At=G.texture.type,Dt=p.has(At),Tt=ne.getClearColor(),zt=ne.getClearAlpha(),Gt=Tt.r,ie=Tt.g,re=Tt.b;Dt?(b[0]=Gt,b[1]=ie,b[2]=re,b[3]=zt,F.clearBufferuiv(F.COLOR,0,b)):(S[0]=Gt,S[1]=ie,S[2]=re,S[3]=zt,F.clearBufferiv(F.COLOR,0,S))}else W|=F.COLOR_BUFFER_BIT}k&&(W|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),L=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",On,!1),ne.dispose(),wt.dispose(),yt.dispose(),V.dispose(),dt.dispose(),nt.dispose(),Ct.dispose(),rt.dispose(),Mt.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",Wl),Ot.removeEventListener("sessionend",Xl),Ri.stop()};function Ne(T){T.preventDefault(),Fo("WebGLRenderer: Context Lost."),C=!0}function Ae(){Fo("WebGLRenderer: Context Restored."),C=!1;const T=H.autoReset,k=$t.enabled,Z=$t.autoUpdate,W=$t.needsUpdate,X=$t.type;kt(),H.autoReset=T,$t.enabled=k,$t.autoUpdate=Z,$t.needsUpdate=W,$t.type=X}function On(T){ue("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function zn(T){const k=T.target;k.removeEventListener("dispose",zn),ff(k)}function ff(T){pf(T),V.remove(T)}function pf(T){const k=V.get(T).programs;k!==void 0&&(k.forEach(function(Z){Mt.releaseProgram(Z)}),T.isShaderMaterial&&Mt.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,Z,W,X,At){k===null&&(k=mt);const Dt=X.isMesh&&X.matrixWorld.determinantAffine()<0,Tt=xf(T,k,Z,W,X);M.setMaterial(W,Dt);let zt=Z.index,Gt=1;if(W.wireframe===!0){if(zt=j.getWireframeAttribute(Z),zt===void 0)return;Gt=2}const ie=Z.drawRange,re=Z.attributes.position;let Wt=ie.start*Gt,Me=(ie.start+ie.count)*Gt;At!==null&&(Wt=Math.max(Wt,At.start*Gt),Me=Math.min(Me,(At.start+At.count)*Gt)),zt!==null?(Wt=Math.max(Wt,0),Me=Math.min(Me,zt.count)):re!=null&&(Wt=Math.max(Wt,0),Me=Math.min(Me,re.count));const Fe=Me-Wt;if(Fe<0||Fe===1/0)return;Ct.setup(X,W,Tt,Z,zt);let Ue,Se=_t;if(zt!==null&&(Ue=gt.get(zt),Se=et,Se.setIndex(Ue)),X.isMesh)W.wireframe===!0?(M.setLineWidth(W.wireframeLinewidth*Yt()),Se.setMode(F.LINES)):Se.setMode(F.TRIANGLES);else if(X.isLine){let Qe=W.linewidth;Qe===void 0&&(Qe=1),M.setLineWidth(Qe*Yt()),X.isLineSegments?Se.setMode(F.LINES):X.isLineLoop?Se.setMode(F.LINE_LOOP):Se.setMode(F.LINE_STRIP)}else X.isPoints?Se.setMode(F.POINTS):X.isSprite&&Se.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))Se.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Qe=X._multiDrawStarts,It=X._multiDrawCounts,pn=X._multiDrawCount,de=zt?gt.get(zt).bytesPerElement:1,yn=V.get(W).currentProgram.getUniforms();for(let Bn=0;Bn<pn;Bn++)yn.setValue(F,"_gl_DrawID",Bn),Se.render(Qe[Bn]/de,It[Bn])}else if(X.isInstancedMesh)Se.renderInstances(Wt,Fe,X.count);else if(Z.isInstancedBufferGeometry){const Qe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,It=Math.min(Z.instanceCount,Qe);Se.renderInstances(Wt,Fe,It)}else Se.render(Wt,Fe)};function Vl(T,k,Z){T.transparent===!0&&T.side===He&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,Or(T,k,Z),T.side=Ai,T.needsUpdate=!0,Or(T,k,Z),T.side=He):Or(T,k,Z)}this.compile=function(T,k,Z=null){Z===null&&(Z=T),w=yt.get(Z),w.init(k),x.push(w),Z.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),T!==Z&&T.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights();const W=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const At=X.material;if(At)if(Array.isArray(At))for(let Dt=0;Dt<At.length;Dt++){const Tt=At[Dt];Vl(Tt,Z,X),W.add(Tt)}else Vl(At,Z,X),W.add(At)}),w=x.pop(),W},this.compileAsync=function(T,k,Z=null){const W=this.compile(T,k,Z);return new Promise(X=>{function At(){if(W.forEach(function(Dt){V.get(Dt).currentProgram.isReady()&&W.delete(Dt)}),W.size===0){X(T);return}setTimeout(At,10)}jt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let ta=null;function mf(T){ta&&ta(T)}function Wl(){Ri.stop()}function Xl(){Ri.start()}const Ri=new qd;Ri.setAnimationLoop(mf),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(T){ta=T,Ot.setAnimationLoop(T),T===null?Ri.stop():Ri.start()},Ot.addEventListener("sessionstart",Wl),Ot.addEventListener("sessionend",Xl),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;L!==null&&L.renderStart(T,k);const Z=Ot.enabled===!0&&Ot.isPresenting===!0,W=E!==null&&(G===null||Z)&&E.begin(R,G);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(k),k=Ot.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,k,G),w=yt.get(T,x.length),w.init(k),w.state.textureUnits=K.getTextureUnits(),x.push(w),ut.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),it.setFromProjectionMatrix(ut,qn,k.reversedDepth),st=this.localClippingEnabled,Q=Zt.init(this.clippingPlanes,st),y=wt.get(T,A.length),y.init(),A.push(y),Ot.enabled===!0&&Ot.isPresenting===!0){const Dt=R.xr.getDepthSensingMesh();Dt!==null&&ea(Dt,k,-1/0,R.sortObjects)}ea(T,k,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(Nt,Vt,k.reversedDepth),Ft=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,Ft&&ne.addToRenderList(y,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Q===!0&&Zt.beginShadows();const X=w.state.shadowsArray;if($t.render(X,T,k),Q===!0&&Zt.endShadows(),(W&&E.hasRenderPass())===!1){const Dt=y.opaque,Tt=y.transmissive;if(w.setupLights(),k.isArrayCamera){const zt=k.cameras;if(Tt.length>0)for(let Gt=0,ie=zt.length;Gt<ie;Gt++){const re=zt[Gt];Yl(Dt,Tt,T,re)}Ft&&ne.render(T);for(let Gt=0,ie=zt.length;Gt<ie;Gt++){const re=zt[Gt];ql(y,T,re,re.viewport)}}else Tt.length>0&&Yl(Dt,Tt,T,k),Ft&&ne.render(T),ql(y,T,k)}G!==null&&D===0&&(K.updateMultisampleRenderTarget(G),K.updateRenderTargetMipmap(G)),W&&E.end(R),T.isScene===!0&&T.onAfterRender(R,T,k),Ct.resetDefaultState(),q=-1,tt=null,x.pop(),x.length>0?(w=x[x.length-1],K.setTextureUnits(w.state.textureUnits),Q===!0&&Zt.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?y=A[A.length-1]:y=null,L!==null&&L.renderEnd()};function ea(T,k,Z,W){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||it.intersectsSprite(T)){W&&Xt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ut);const Dt=nt.update(T),Tt=T.material;Tt.visible&&y.push(T,Dt,Tt,Z,Xt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||it.intersectsObject(T))){const Dt=nt.update(T),Tt=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Xt.copy(T.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Xt.copy(Dt.boundingSphere.center)),Xt.applyMatrix4(T.matrixWorld).applyMatrix4(ut)),Array.isArray(Tt)){const zt=Dt.groups;for(let Gt=0,ie=zt.length;Gt<ie;Gt++){const re=zt[Gt],Wt=Tt[re.materialIndex];Wt&&Wt.visible&&y.push(T,Dt,Wt,Z,Xt.z,re)}}else Tt.visible&&y.push(T,Dt,Tt,Z,Xt.z,null)}}const At=T.children;for(let Dt=0,Tt=At.length;Dt<Tt;Dt++)ea(At[Dt],k,Z,W)}function ql(T,k,Z,W){const{opaque:X,transmissive:At,transparent:Dt}=T;w.setupLightsView(Z),Q===!0&&Zt.setGlobalState(R.clippingPlanes,Z),W&&M.viewport(Y.copy(W)),X.length>0&&Fr(X,k,Z),At.length>0&&Fr(At,k,Z),Dt.length>0&&Fr(Dt,k,Z),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Yl(T,k,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[W.id]===void 0){const Wt=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[W.id]=new $n(1,1,{generateMipmaps:!0,type:Wt?hi:Mn,minFilter:Hi,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace})}const At=w.state.transmissionRenderTarget[W.id],Dt=W.viewport||Y;At.setSize(Dt.z*R.transmissionResolutionScale,Dt.w*R.transmissionResolutionScale);const Tt=R.getRenderTarget(),zt=R.getActiveCubeFace(),Gt=R.getActiveMipmapLevel();R.setRenderTarget(At),R.getClearColor(Rt),vt=R.getClearAlpha(),vt<1&&R.setClearColor(16777215,.5),R.clear(),Ft&&ne.render(Z);const ie=R.toneMapping;R.toneMapping=Yn;const re=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),w.setupLightsView(W),Q===!0&&Zt.setGlobalState(R.clippingPlanes,W),Fr(T,Z,W),K.updateMultisampleRenderTarget(At),K.updateRenderTargetMipmap(At),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Me=0,Fe=k.length;Me<Fe;Me++){const Ue=k[Me],{object:Se,geometry:Qe,material:It,group:pn}=Ue;if(It.side===He&&Se.layers.test(W.layers)){const de=It.side;It.side=an,It.needsUpdate=!0,Zl(Se,Z,W,Qe,It,pn),It.side=de,It.needsUpdate=!0,Wt=!0}}Wt===!0&&(K.updateMultisampleRenderTarget(At),K.updateRenderTargetMipmap(At))}R.setRenderTarget(Tt,zt,Gt),R.setClearColor(Rt,vt),re!==void 0&&(W.viewport=re),R.toneMapping=ie}function Fr(T,k,Z){const W=k.isScene===!0?k.overrideMaterial:null;for(let X=0,At=T.length;X<At;X++){const Dt=T[X],{object:Tt,geometry:zt,group:Gt}=Dt;let ie=Dt.material;ie.allowOverride===!0&&W!==null&&(ie=W),Tt.layers.test(Z.layers)&&Zl(Tt,k,Z,zt,ie,Gt)}}function Zl(T,k,Z,W,X,At){T.onBeforeRender(R,k,Z,W,X,At),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(R,k,Z,W,T,At),X.transparent===!0&&X.side===He&&X.forceSinglePass===!1?(X.side=an,X.needsUpdate=!0,R.renderBufferDirect(Z,k,W,X,T,At),X.side=Ai,X.needsUpdate=!0,R.renderBufferDirect(Z,k,W,X,T,At),X.side=He):R.renderBufferDirect(Z,k,W,X,T,At),T.onAfterRender(R,k,Z,W,X,At)}function Or(T,k,Z){k.isScene!==!0&&(k=mt);const W=V.get(T),X=w.state.lights,At=w.state.shadowsArray,Dt=X.state.version,Tt=Mt.getParameters(T,X.state,At,k,Z,w.state.lightProbeGridArray),zt=Mt.getProgramCacheKey(Tt);let Gt=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,W.fog=k.fog;const ie=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=dt.get(T.envMap||W.environment,ie),W.envMapRotation=W.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Gt===void 0&&(T.addEventListener("dispose",zn),Gt=new Map,W.programs=Gt);let re=Gt.get(zt);if(re!==void 0){if(W.currentProgram===re&&W.lightsStateVersion===Dt)return Kl(T,Tt),re}else Tt.uniforms=Mt.getUniforms(T),L!==null&&T.isNodeMaterial&&L.build(T,Z,Tt),T.onBeforeCompile(Tt,R),re=Mt.acquireProgram(Tt,zt),Gt.set(zt,re),W.uniforms=Tt.uniforms;const Wt=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Wt.clippingPlanes=Zt.uniform),Kl(T,Tt),W.needsLights=vf(T),W.lightsStateVersion=Dt,W.needsLights&&(Wt.ambientLightColor.value=X.state.ambient,Wt.lightProbe.value=X.state.probe,Wt.directionalLights.value=X.state.directional,Wt.directionalLightShadows.value=X.state.directionalShadow,Wt.spotLights.value=X.state.spot,Wt.spotLightShadows.value=X.state.spotShadow,Wt.rectAreaLights.value=X.state.rectArea,Wt.ltc_1.value=X.state.rectAreaLTC1,Wt.ltc_2.value=X.state.rectAreaLTC2,Wt.pointLights.value=X.state.point,Wt.pointLightShadows.value=X.state.pointShadow,Wt.hemisphereLights.value=X.state.hemi,Wt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Wt.spotLightMatrix.value=X.state.spotLightMatrix,Wt.spotLightMap.value=X.state.spotLightMap,Wt.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=w.state.lightProbeGridArray.length>0,W.currentProgram=re,W.uniformsList=null,re}function $l(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=Eo.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function Kl(T,k){const Z=V.get(T);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.batchingColor=k.batchingColor,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function gf(T,k){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(k.matrixWorld);for(let Z=0,W=T.length;Z<W;Z++){const X=T[Z];if(X.texture!==null&&X.boundingBox.containsPoint(v))return X}return null}function xf(T,k,Z,W,X){k.isScene!==!0&&(k=mt),K.resetTextureUnits();const At=k.fog,Dt=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?k.environment:null,Tt=G===null?R.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:he.workingColorSpace,zt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Gt=dt.get(W.envMap||Dt,zt),ie=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,re=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Wt=!!Z.morphAttributes.position,Me=!!Z.morphAttributes.normal,Fe=!!Z.morphAttributes.color;let Ue=Yn;W.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ue=R.toneMapping);const Se=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Qe=Se!==void 0?Se.length:0,It=V.get(W),pn=w.state.lights;if(Q===!0&&(st===!0||T!==tt)){const Re=T===tt&&W.id===q;Zt.setState(W,T,Re)}let de=!1;W.version===It.__version?(It.needsLights&&It.lightsStateVersion!==pn.state.version||It.outputColorSpace!==Tt||X.isBatchedMesh&&It.batching===!1||!X.isBatchedMesh&&It.batching===!0||X.isBatchedMesh&&It.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&It.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&It.instancing===!1||!X.isInstancedMesh&&It.instancing===!0||X.isSkinnedMesh&&It.skinning===!1||!X.isSkinnedMesh&&It.skinning===!0||X.isInstancedMesh&&It.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&It.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&It.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&It.instancingMorph===!1&&X.morphTexture!==null||It.envMap!==Gt||W.fog===!0&&It.fog!==At||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==Zt.numPlanes||It.numIntersection!==Zt.numIntersection)||It.vertexAlphas!==ie||It.vertexTangents!==re||It.morphTargets!==Wt||It.morphNormals!==Me||It.morphColors!==Fe||It.toneMapping!==Ue||It.morphTargetsCount!==Qe||!!It.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(de=!0):(de=!0,It.__version=W.version);let yn=It.currentProgram;de===!0&&(yn=Or(W,k,X),L&&W.isNodeMaterial&&L.onUpdateProgram(W,yn,It));let Bn=!1,fi=!1,Ji=!1;const be=yn.getUniforms(),Oe=It.uniforms;if(M.useProgram(yn.program)&&(Bn=!0,fi=!0,Ji=!0),W.id!==q&&(q=W.id,fi=!0),It.needsLights){const Re=gf(w.state.lightProbeGridArray,X);It.lightProbeGrid!==Re&&(It.lightProbeGrid=Re,fi=!0)}if(Bn||tt!==T){M.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),be.setValue(F,"projectionMatrix",T.projectionMatrix),be.setValue(F,"viewMatrix",T.matrixWorldInverse);const mi=be.map.cameraPosition;mi!==void 0&&mi.setValue(F,xt.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&be.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&be.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),tt!==T&&(tt=T,fi=!0,Ji=!0)}if(It.needsLights&&(pn.state.directionalShadowMap.length>0&&be.setValue(F,"directionalShadowMap",pn.state.directionalShadowMap,K),pn.state.spotShadowMap.length>0&&be.setValue(F,"spotShadowMap",pn.state.spotShadowMap,K),pn.state.pointShadowMap.length>0&&be.setValue(F,"pointShadowMap",pn.state.pointShadowMap,K)),X.isSkinnedMesh){be.setOptional(F,X,"bindMatrix"),be.setOptional(F,X,"bindMatrixInverse");const Re=X.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),be.setValue(F,"boneTexture",Re.boneTexture,K))}X.isBatchedMesh&&(be.setOptional(F,X,"batchingTexture"),be.setValue(F,"batchingTexture",X._matricesTexture,K),be.setOptional(F,X,"batchingIdTexture"),be.setValue(F,"batchingIdTexture",X._indirectTexture,K),be.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&be.setValue(F,"batchingColorTexture",X._colorsTexture,K));const pi=Z.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&B.update(X,Z,yn),(fi||It.receiveShadow!==X.receiveShadow)&&(It.receiveShadow=X.receiveShadow,be.setValue(F,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&k.environment!==null&&(Oe.envMapIntensity.value=k.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=GM()),fi){if(be.setValue(F,"toneMappingExposure",R.toneMappingExposure),It.needsLights&&_f(Oe,Ji),At&&W.fog===!0&&Ht.refreshFogUniforms(Oe,At),Ht.refreshMaterialUniforms(Oe,W,ot,lt,w.state.transmissionRenderTarget[T.id]),It.needsLights&&It.lightProbeGrid){const Re=It.lightProbeGrid;Oe.probesSH.value=Re.texture,Oe.probesMin.value.copy(Re.boundingBox.min),Oe.probesMax.value.copy(Re.boundingBox.max),Oe.probesResolution.value.copy(Re.resolution)}Eo.upload(F,$l(It),Oe,K)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Eo.upload(F,$l(It),Oe,K),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&be.setValue(F,"center",X.center),be.setValue(F,"modelViewMatrix",X.modelViewMatrix),be.setValue(F,"normalMatrix",X.normalMatrix),be.setValue(F,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const Re=W.uniformsGroups;for(let mi=0,Qi=Re.length;mi<Qi;mi++){const Jl=Re[mi];rt.update(Jl,yn),rt.bind(Jl,yn)}}return yn}function _f(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function vf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(T,k,Z){const W=V.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),V.get(T.texture).__webglTexture=k,V.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){const Z=V.get(T);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,Z=0){G=T,U=k,D=Z;let W=null,X=!1,At=!1;if(T){const Tt=V.get(T);if(Tt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(F.FRAMEBUFFER,Tt.__webglFramebuffer),Y.copy(T.viewport),ct.copy(T.scissor),Lt=T.scissorTest,M.viewport(Y),M.scissor(ct),M.setScissorTest(Lt),q=-1;return}else if(Tt.__webglFramebuffer===void 0)K.setupRenderTarget(T);else if(Tt.__hasExternalTextures)K.rebindTextures(T,V.get(T.texture).__webglTexture,V.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ie=T.depthTexture;if(Tt.__boundDepthTexture!==ie){if(ie!==null&&V.has(ie)&&(T.width!==ie.image.width||T.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(T)}}const zt=T.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(At=!0);const Gt=V.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Gt[k])?W=Gt[k][Z]:W=Gt[k],X=!0):T.samples>0&&K.useMultisampledRTT(T)===!1?W=V.get(T).__webglMultisampledFramebuffer:Array.isArray(Gt)?W=Gt[Z]:W=Gt,Y.copy(T.viewport),ct.copy(T.scissor),Lt=T.scissorTest}else Y.copy(pt).multiplyScalar(ot).floor(),ct.copy(ee).multiplyScalar(ot).floor(),Lt=Bt;if(Z!==0&&(W=O),M.bindFramebuffer(F.FRAMEBUFFER,W)&&M.drawBuffers(T,W),M.viewport(Y),M.scissor(ct),M.setScissorTest(Lt),X){const Tt=V.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Tt.__webglTexture,Z)}else if(At){const Tt=k;for(let zt=0;zt<T.textures.length;zt++){const Gt=V.get(T.textures[zt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+zt,Gt.__webglTexture,Z,Tt)}}else if(T!==null&&Z!==0){const Tt=V.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Tt.__webglTexture,Z)}q=-1},this.readRenderTargetPixels=function(T,k,Z,W,X,At,Dt,Tt=0){if(!(T&&T.isWebGLRenderTarget)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=V.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(zt=zt[Dt]),zt){M.bindFramebuffer(F.FRAMEBUFFER,zt);try{const Gt=T.textures[Tt],ie=Gt.format,re=Gt.type;if(T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Tt),!P.textureFormatReadable(ie)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(re)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-W&&Z>=0&&Z<=T.height-X&&F.readPixels(k,Z,W,X,St.convert(ie),St.convert(re),At)}finally{const Gt=G!==null?V.get(G).__webglFramebuffer:null;M.bindFramebuffer(F.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(T,k,Z,W,X,At,Dt,Tt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=V.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(zt=zt[Dt]),zt)if(k>=0&&k<=T.width-W&&Z>=0&&Z<=T.height-X){M.bindFramebuffer(F.FRAMEBUFFER,zt);const Gt=T.textures[Tt],ie=Gt.format,re=Gt.type;if(T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Tt),!P.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Wt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Wt),F.bufferData(F.PIXEL_PACK_BUFFER,At.byteLength,F.STREAM_READ),F.readPixels(k,Z,W,X,St.convert(ie),St.convert(re),0);const Me=G!==null?V.get(G).__webglFramebuffer:null;M.bindFramebuffer(F.FRAMEBUFFER,Me);const Fe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await pm(F,Fe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Wt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,At),F.deleteBuffer(Wt),F.deleteSync(Fe),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,Z=0){const W=Math.pow(2,-Z),X=Math.floor(T.image.width*W),At=Math.floor(T.image.height*W),Dt=k!==null?k.x:0,Tt=k!==null?k.y:0;K.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,Dt,Tt,X,At),M.unbindTexture()},this.copyTextureToTexture=function(T,k,Z=null,W=null,X=0,At=0){let Dt,Tt,zt,Gt,ie,re,Wt,Me,Fe;const Ue=T.isCompressedTexture?T.mipmaps[At]:T.image;if(Z!==null)Dt=Z.max.x-Z.min.x,Tt=Z.max.y-Z.min.y,zt=Z.isBox3?Z.max.z-Z.min.z:1,Gt=Z.min.x,ie=Z.min.y,re=Z.isBox3?Z.min.z:0;else{const Oe=Math.pow(2,-X);Dt=Math.floor(Ue.width*Oe),Tt=Math.floor(Ue.height*Oe),T.isDataArrayTexture?zt=Ue.depth:T.isData3DTexture?zt=Math.floor(Ue.depth*Oe):zt=1,Gt=0,ie=0,re=0}W!==null?(Wt=W.x,Me=W.y,Fe=W.z):(Wt=0,Me=0,Fe=0);const Se=St.convert(k.format),Qe=St.convert(k.type);let It;k.isData3DTexture?(K.setTexture3D(k,0),It=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(K.setTexture2DArray(k,0),It=F.TEXTURE_2D_ARRAY):(K.setTexture2D(k,0),It=F.TEXTURE_2D),M.activeTexture(F.TEXTURE0),M.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),M.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),M.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const pn=M.getParameter(F.UNPACK_ROW_LENGTH),de=M.getParameter(F.UNPACK_IMAGE_HEIGHT),yn=M.getParameter(F.UNPACK_SKIP_PIXELS),Bn=M.getParameter(F.UNPACK_SKIP_ROWS),fi=M.getParameter(F.UNPACK_SKIP_IMAGES);M.pixelStorei(F.UNPACK_ROW_LENGTH,Ue.width),M.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ue.height),M.pixelStorei(F.UNPACK_SKIP_PIXELS,Gt),M.pixelStorei(F.UNPACK_SKIP_ROWS,ie),M.pixelStorei(F.UNPACK_SKIP_IMAGES,re);const Ji=T.isDataArrayTexture||T.isData3DTexture,be=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const Oe=V.get(T),pi=V.get(k),Re=V.get(Oe.__renderTarget),mi=V.get(pi.__renderTarget);M.bindFramebuffer(F.READ_FRAMEBUFFER,Re.__webglFramebuffer),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let Qi=0;Qi<zt;Qi++)Ji&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,V.get(T).__webglTexture,X,re+Qi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,V.get(k).__webglTexture,At,Fe+Qi)),F.blitFramebuffer(Gt,ie,Dt,Tt,Wt,Me,Dt,Tt,F.DEPTH_BUFFER_BIT,F.NEAREST);M.bindFramebuffer(F.READ_FRAMEBUFFER,null),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||V.has(T)){const Oe=V.get(T),pi=V.get(k);M.bindFramebuffer(F.READ_FRAMEBUFFER,z),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,N);for(let Re=0;Re<zt;Re++)Ji?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Oe.__webglTexture,X,re+Re):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Oe.__webglTexture,X),be?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,pi.__webglTexture,At,Fe+Re):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pi.__webglTexture,At),X!==0?F.blitFramebuffer(Gt,ie,Dt,Tt,Wt,Me,Dt,Tt,F.COLOR_BUFFER_BIT,F.NEAREST):be?F.copyTexSubImage3D(It,At,Wt,Me,Fe+Re,Gt,ie,Dt,Tt):F.copyTexSubImage2D(It,At,Wt,Me,Gt,ie,Dt,Tt);M.bindFramebuffer(F.READ_FRAMEBUFFER,null),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else be?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(It,At,Wt,Me,Fe,Dt,Tt,zt,Se,Qe,Ue.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(It,At,Wt,Me,Fe,Dt,Tt,zt,Se,Ue.data):F.texSubImage3D(It,At,Wt,Me,Fe,Dt,Tt,zt,Se,Qe,Ue):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,At,Wt,Me,Dt,Tt,Se,Qe,Ue.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,At,Wt,Me,Ue.width,Ue.height,Se,Ue.data):F.texSubImage2D(F.TEXTURE_2D,At,Wt,Me,Dt,Tt,Se,Qe,Ue);M.pixelStorei(F.UNPACK_ROW_LENGTH,pn),M.pixelStorei(F.UNPACK_IMAGE_HEIGHT,de),M.pixelStorei(F.UNPACK_SKIP_PIXELS,yn),M.pixelStorei(F.UNPACK_SKIP_ROWS,Bn),M.pixelStorei(F.UNPACK_SKIP_IMAGES,fi),At===0&&k.generateMipmaps&&F.generateMipmap(It),M.unbindTexture()},this.initRenderTarget=function(T){V.get(T).__webglFramebuffer===void 0&&K.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?K.setTextureCube(T,0):T.isData3DTexture?K.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?K.setTexture2DArray(T,0):K.setTexture2D(T,0),M.unbindTexture()},this.resetState=function(){U=0,D=0,G=null,M.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}const bh=200,wh=440,WM=`
  precision highp float;
  attribute float aDepth;
  varying float vDepth;
  varying vec2 vWorldXZ;
  void main() {
    vDepth = aDepth;
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldXZ = wp.xz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,XM=`
  precision highp float;
  uniform float uTime;
  varying float vDepth;
  varying vec2 vWorldXZ;

  void main() {
    float depth = vDepth; // smoothly interpolated from per-vertex CPU depth
    if (depth < 0.02) discard;

    // Depth ramp: pale turquoise shallows -> blue -> deep navy.
    vec3 shallow = vec3(0.55, 0.90, 0.85);
    vec3 mid     = vec3(0.25, 0.68, 0.78);
    vec3 deep    = vec3(0.10, 0.32, 0.55);
    vec3 col = depth < 2.5
      ? mix(shallow, mid, depth / 2.5)
      : mix(mid, deep, clamp((depth - 2.5) / 7.0, 0.0, 1.0));

    // Foam hugs the shoreline in smooth sine-driven bands.
    float foamBand = 1.0 - smoothstep(0.05, 0.5, depth);
    float w1 = sin(vWorldXZ.x * 0.55 + uTime * 0.9) * sin(vWorldXZ.y * 0.48 - uTime * 0.7);
    float w2 = sin((vWorldXZ.x + vWorldXZ.y) * 0.23 + uTime * 0.5);
    float foam = foamBand * smoothstep(0.15, 0.85, 0.5 + 0.32 * w1 + 0.18 * w2);
    col = mix(col, vec3(0.98, 0.99, 0.98), foam * 0.85);

    // Gentle stylized ripple light.
    float ripple = sin(vWorldXZ.x * 0.9 + uTime * 1.6) * sin(vWorldXZ.y * 0.8 - uTime * 1.1);
    col *= 1.0 + ripple * 0.035;

    gl_FragColor = vec4(col, 1.0);
  }
`;function qM(){const n=new hn(wh,wh,bh,bh);n.rotateX(-Math.PI/2);const t=n.attributes.position,e=new Float32Array(t.count);for(let r=0;r<t.count;r++)e[r]=-we(t.getX(r),t.getZ(r));n.setAttribute("aDepth",new fn(e,1));const i=new En({uniforms:{uTime:{value:0}},vertexShader:WM,fragmentShader:XM}),s=new J(n,i);return s.position.y=0,s.frustumCulled=!1,{mesh:s,update(r){i.uniforms.uTime.value=r}}}const YM=8.8,ZM=4.4,hr=2.4,dr=3.2,ws=4.4;function Ll(n){return n.kind==="switchback"?ZM:YM}const Eh=new Map;function Zi(n){let t=Eh.get(n);if(!t){const e=Ye(ve(n.a)),i=Ye(ve(n.b)),s=new I((e.x+i.x)/2,(e.y+i.y)/2+.15,(e.z+i.z)/2);t=new Zo([new I(e.x,e.y+.18,e.z),s,new I(i.x,i.y+.18,i.z)]),Eh.set(n,t)}return t}const bi=new I,ir=new I;function Go(n,t){const e=Zi(n),i=Ll(n)/2;e.getPointAt(t,bi),e.getTangentAt(t,ir);const s=Math.hypot(ir.x,ir.z)||1,r=-ir.z/s,o=ir.x/s;return Math.max(bi.y,we(bi.x,bi.z),we(bi.x+r*i,bi.z+o*i),we(bi.x-r*i,bi.z-o*i))+.15}const Cn=64,$M=Math.tan(18*Math.PI/180),Th=new Map;function tf(n,t){let e=Th.get(n);if(!e){const a=Zi(n).getLength()/Cn,c=$M*a,l=new Float32Array(Cn+1);l[0]=Go(n,0);for(let u=1;u<=Cn;u++)l[u]=Math.max(Go(n,u/Cn),l[u-1]-c);e=new Float32Array(Cn+1),e[Cn]=l[Cn];for(let u=Cn-1;u>=0;u--)e[u]=Math.max(l[u],e[u+1]-c);Th.set(n,e)}const i=Math.max(0,Math.min(Cn,t*Cn)),s=Math.min(Cn-1,Math.floor(i)),r=i-s;return e[s]*(1-r)+e[s+1]*r}let Ms=null;function KM(){if(Ms)return Ms;Ms=new Map;for(const n of qe){if(n.kind==="bridge")continue;const t=[[n.a,0],[n.b,1]];for(const[e,i]of t){const s=tf(n,i);Ms.set(e,Math.max(Ms.get(e)??-1/0,s))}}return Ms}function ef(n,t){const e=KM(),i=e.get(n.a)??Go(n,0),s=e.get(n.b)??Go(n,1);return Math.max(tf(n,t),i+(s-i)*t)}const JM=.8;function QM(n){const t=Ye(ve(n)),e=[];for(const i of qe){if(i.kind==="bridge"||i.a!==n&&i.b!==n)continue;const s=Ye(ve(i.a===n?i.b:i.a)),r=s.x-t.x,o=s.z-t.z,a=Math.hypot(r,o)||1;e.push({e:i,dx:r/a,dz:o/a,hw:Ll(i)/2,len:a,ox:s.x,oz:s.z})}return e}function Ah(n,t,e,i){const s=Ye(ve(t)),r=n.ox-s.x,o=n.oz-s.z,a=r*r+o*o||1,c=Math.min(1,Math.max(0,((e-s.x)*r+(i-s.z)*o)/a));return ef(n.e,n.e.a===t?c:1-c)}function jM(n){let t=6;for(let i=0;i<n.length;i++)for(let s=i+1;s<n.length;s++){const r=n[i],o=n[s],a=Math.min(1,Math.max(-1,r.dx*o.dx+r.dz*o.dz)),c=Math.acos(a),l=Math.min(Math.PI,Math.max(Math.PI/15,c));t=Math.max(t,(r.hw+o.hw)/Math.sin(l))}let e=1/0;for(const i of n)e=Math.min(e,i.len);return Math.min(t,e*.9,14)}let Gn=null;function Il(){if(Gn)return Gn;const n=new Set;for(const s of qe)s.kind!=="bridge"&&(n.add(s.a),n.add(s.b));const t=new Map;for(const s of n){if(ve(s).noIntersect)continue;const r=QM(s);if(r.length<2)continue;if(r.length===2){const u=Math.min(1,Math.max(-1,r[0].dx*r[1].dx+r[0].dz*r[1].dz)),d=Math.acos(u);if(d<Math.PI/12||d>Math.PI-Math.PI/12)continue}const o=jM(r),a=Ye(ve(s));let c=1/0,l=-1/0;for(const u of r)for(const d of[0,.5,1]){const h=Math.min(o,u.len*.9)*d,f=Ah(u,s,a.x+u.dx*h,a.z+u.dz*h);c=Math.min(c,f),l=Math.max(l,f)}l-c>JM||t.set(s,{dirs:r,stubLen:o})}const e=new Map;for(const[s,{stubLen:r}]of t)e.set(s,r);for(let s=0;s<10;s++){let r=!1;for(const o of qe){if(o.kind==="bridge")continue;const a=e.get(o.a),c=e.get(o.b);if(a===void 0||c===void 0)continue;const l=Ye(ve(o.a)),u=Ye(ve(o.b)),d=Math.hypot(u.x-l.x,u.z-l.z)||1,h=Math.max(d-1,d*.5);if(a+c>h){const f=h/(a+c);e.set(o.a,a*f),e.set(o.b,c*f),r=!0}}if(!r)break}Gn=[];for(const[s,{dirs:r}]of t){const o=e.get(s),a=y=>o,c=Ye(ve(s));let l=-1/0;const u=72,d=[];for(let y=0;y<u;y++)d.push(y/u*Math.PI*2);for(const y of r){const w=Math.atan2(y.dz,y.dx),A=Math.atan2(y.hw,a(y.e)),x=E=>(E%(Math.PI*2)+Math.PI*2)%(Math.PI*2);d.push(x(w),x(w+A),x(w-A))}d.sort((y,w)=>y-w);const h=[];for(const y of d)(h.length===0||Math.abs(y-h[h.length-1])>1e-9)&&h.push(y);const f=new Float64Array(h.length);for(let y=0;y<h.length;y++){const w=h[y],A=Math.cos(w),x=Math.sin(w);let E=0;for(const R of r){const C=a(R.e),L=A*R.dx+x*R.dz,O=Math.abs(A*-R.dz+x*R.dx);let z;L>1e-6?z=Math.min(R.hw/Math.max(O,1e-6),C/L):z=R.hw,z>E&&(E=z)}f[y]=Math.max(E,.5)}const g=[0,.25,.5,.75,1];for(let y=0;y<h.length;y++){const w=h[y];for(const A of g){const x=c.x+Math.cos(w)*f[y]*A,E=c.z+Math.sin(w)*f[y]*A;for(const R of r)l=Math.max(l,Ah(R,s,x,E))}}l+=.02;const _=[];for(let y=0;y<h.length;y++){const w=h[y];_.push({x:c.x+Math.cos(w)*f[y],z:c.z+Math.sin(w)*f[y],h:l})}const m={x:c.x,z:c.z,h:l},p=[];for(let y=0;y<h.length;y++)p.push([m,_[y],_[(y+1)%h.length]]);const b=y=>(y%(Math.PI*2)+Math.PI*2)%(Math.PI*2),S=(y,w)=>{const A=b(Math.atan2(w,y));for(let x=0;x<h.length;x++)if(Math.abs(h[x]-A)<1e-9)return f[x];return o},v=r.map(y=>({edge:y.e,dx:y.dx,dz:y.dz,hw:y.hw,clip:S(y.dx,y.dz),stub:o}));Gn.push({nodeId:s,ring:_,tris:p,legs:v,height:l})}const i=(s,r)=>{for(const o of r.ring)if(Qc(s,o.x,o.z))return!0;for(const o of s.ring)if(Qc(r,o.x,o.z))return!0;return!1};for(let s=0;s<10;s++){let r=!1;for(let o=0;o<Gn.length;o++)for(let a=o+1;a<Gn.length;a++){const c=Gn[o],l=Gn[a];if(i(c,l)&&Math.abs(c.height-l.height)<.05){const u=c.height===l.height?c.nodeId>l.nodeId?c:l:c.height>l.height?c:l;u.height=Math.max(c.height,l.height)+.05;for(const d of u.ring)d.h=u.height;for(const d of u.tris)for(const h of d)h.h=u.height;r=!0}}if(!r)break}vr=new Map;for(const s of Gn)for(const r of s.legs){let o=vr.get(r.edge);o||(o={a:null,b:null},vr.set(r.edge,o));const a={dist:r.clip,height:s.height};r.edge.a===s.nodeId?o.a=a:o.b=a}return Gn}let vr=null;function Kc(n){return vr||Il(),vr.get(n)??{a:null,b:null}}function Rh(n,t,e){const i=Zi(n),s=Ye(ve(t==="a"?n.a:n.b));let r=0,o=1;for(let c=0;c<40;c++){const l=(r+o)/2,u=i.getPointAt(t==="a"?l:1-l);Math.hypot(u.x-s.x,u.z-s.z)<e?r=l:o=l}const a=(r+o)/2;return t==="a"?a:1-a}const ty=3;function Ch(n){const t=Math.max(0,Math.min(1,n));return t*t*(3-2*t)}const Ph=new Map;function ey(n){let t=Ph.get(n);return t===void 0&&(t=Zi(n).getLength(),Ph.set(n,t)),t}function Jc(n,t){const e=ef(n,t),{a:i,b:s}=Kc(n);if(!i&&!s)return e;const r=ey(n),o=t*r,a=r-(i?i.dist:0)-(s?s.dist:0),c=Math.max(1e-6,Math.min(ty,a/2));if(i&&o<i.dist+c){const l=Ch((o-i.dist)/c);return i.height*(1-l)+e*l}if(s&&o>r-s.dist-c){const l=Ch((r-s.dist-o)/c);return s.height*(1-l)+e*l}return e}function ny(n,t){let e=null;for(const i of Il())Qc(i,n,t)&&(e=e===null?i.height:Math.max(e,i.height));return e}function Lh(n,t,e,i){return ny(e,i)??Jc(n,t)}function Ba(n,t,e){const i=t[0]-n[0],s=t[1]-n[1],r=Math.hypot(i,s)||1,o=-s/r*e/2,a=i/r*e/2;return[[n[0]+o,n[1]+a],[n[0]-o,n[1]-a],[t[0]-o,t[1]-a],[t[0]+o,t[1]+a]]}function iy(n){const t=Ye(ve(n.nodeId)),e=[],i=[],s=(o,a,c,l)=>[t.x+o*c-a*l,t.z+a*c+o*l];for(const o of n.legs){const{dx:a,dz:c,hw:l,stub:u}=o,d=Math.min(hr,l-.3);if(d>.5){const _=Math.max(u-1.3,.5);e.push([s(a,c,_-.225,-d),s(a,c,_-.225,d),s(a,c,_+.225,d),s(a,c,_+.225,-d)])}const h=l>3?5:3,f=2*l-1,g=Math.max(u-3,1);for(let _=0;_<h;_++){const m=-f/2+f*(_+.5)/h;e.push([s(a,c,g-1,m-.28),s(a,c,g-1,m+.28),s(a,c,g+1,m+.28),s(a,c,g+1,m-.28)])}}const r=[...n.legs].sort((o,a)=>Math.atan2(o.dz,o.dx)-Math.atan2(a.dz,a.dx));for(let o=0;o<r.length;o++){const a=r[o],c=r[(o+1)%r.length];if(a.hw<ws-.01||c.hw<ws-.01)continue;const l=Math.atan2(a.dz,a.dx);let d=Math.atan2(c.dz,c.dx)-l;if(d<=0&&(d+=Math.PI*2),d>Math.PI)continue;const h=(dr+ws)/2,f=-a.dz,g=a.dx,_=c.dz,m=-c.dx,p=[t.x+a.dx*(a.stub-.7)+f*h,t.z+a.dz*(a.stub-.7)+g*h],b=[t.x+c.dx*(c.stub-.7)+_*h,t.z+c.dz*(c.stub-.7)+m*h],S=1;if(d>Math.PI-Math.PI/12){i.push(Ba(p,b,S));continue}if(d<Math.PI/6)continue;const v=ws,y=c.dx*a.dz-a.dx*c.dz;if(Math.abs(y)<1e-6)continue;const w=v*(-(_-f)*c.dz+c.dx*(m-g))/y,A=t.x+a.dx*w+f*v,x=t.z+a.dz*w+g*v,E=l+d/2,R=Math.hypot(A-t.x,x-t.z),C=Math.min(R-.4,.85*Math.min(a.stub,c.stub));if(C<1.2)continue;const L=[t.x+Math.cos(E)*C,t.z+Math.sin(E)*C];i.push(Ba(p,L,S),Ba(L,b,S))}return{white:e,walk:i}}function Qc(n,t,e){const i=n.ring;let s=!1;for(let r=0,o=i.length-1;r<i.length;o=r++){const a=i[r].x,c=i[r].z,l=i[o].x,u=i[o].z;c>e!=u>e&&t<(l-a)*(e-c)/(u-c)+a&&(s=!s)}return s}const sy=12596780,Ih=7,Dh=1,sr=3.2,Nh=12;function ry(){return new Bs({color:sy})}function oy(n){const t=qe.find(_=>_.kind==="bridge");if(!t)return;const e=Ye(ve(t.a)),i=Ye(ve(t.b)),s=t.deckY??6,r=new I(i.x-e.x,0,i.z-e.z),o=r.length();if(o<1)return;r.normalize();const a=new I(-r.z,0,r.x),c=(_,m,p)=>new I(e.x+(i.x-e.x)*_+a.x*m,p,e.z+(i.z-e.z)*_+a.z*m),l=_=>_==="x"?Math.atan2(-r.z,r.x):Math.atan2(a.x,a.z),u=ry(),d=new Bs({color:16767370}),h=new J(new Qt(o,Dh,Ih),u);h.position.set((e.x+i.x)/2,s-Dh/2,(e.z+i.z)/2),h.rotation.y=l("x"),n.add(h);for(const _ of[1/3,2/3]){for(const m of[-sr,sr]){const p=new J(new Qt(1.5,20,1.5),u),b=c(_,m,s+2);p.position.copy(b),p.rotation.y=l("x"),n.add(p)}for(const m of[s+4,s+10]){const p=new J(new Qt(1,1,sr*2+1.5),u);p.position.copy(c(_,0,m)),p.rotation.y=l("z"),n.add(p)}}const f=[];for(const _ of[-sr,sr]){const m=new Zo([c(0,_,s+.2),c(.15,_,s+5),c(.3333333333333333,_,s+Nh),c(.5,_,s+2.5),c(.6666666666666666,_,s+Nh),c(.85,_,s+5),c(1,_,s+.2)]);f.push(m),n.add(new J(new $o(m,64,.25,8,!1),u))}for(const _ of f){const m=_.getPoints(400);for(let p=6;p<o-3;p+=6){const b=p/o,S=e.x+(i.x-e.x)*b;let v=m[0],y=1/0;for(const x of m){const E=Math.abs(x.x-S);E<y&&(y=E,v=x)}const w=v.y-s;if(w<.5)continue;const A=new J(new pe(.08,.08,w,6),u);A.position.set(S,s+w/2,v.z),n.add(A)}}let g=1;for(let _=6;_<o-3;_+=12){const m=_/o,p=c(m,g*(Ih/2-.7),s),b=new J(new pe(.12,.16,4.2,8),u);b.position.set(p.x,s+2.1,p.z),n.add(b);const S=new J(new fe(.32,10,8),d);S.position.set(p.x,s+4.2,p.z),n.add(S),g*=-1}}const[Dl,nf,Nl,sf]=me,jc=(Dl+Nl)/2,Lr=(nf+sf)/2,ka=(()=>{const n=[];let t=0;for(const e of[Lr-10,Lr+10])for(let i=Dl+2.5;i<=Nl-2.5;i+=5){const s=.9+t*37%10/50;n.push({x:i,z:e,s}),t++}return n})(),ay=[{x0:Dl,z0:Lr-1.5,x1:Nl,z1:Lr+1.5},{x0:jc-1.5,z0:nf,x1:jc+1.5,z1:sf}],cy={x:jc,z:Lr,w:14,d:9,h:5},ly=1e6,Di=3.4;function rf(){return{winLit:[],winUnlit:[],sills:[],doors:[],flowerBoxes:[],petals:[],leaves:[],awnings:[[],[],[]],bays:[]}}function uy(n,t){n.winLit.push(...t.winLit),n.winUnlit.push(...t.winUnlit),n.sills.push(...t.sills),n.doors.push(...t.doors),n.flowerBoxes.push(...t.flowerBoxes),n.petals.push(...t.petals),n.leaves.push(...t.leaves),t.awnings.forEach((e,i)=>n.awnings[i].push(...e)),n.bays.push(...t.bays)}const hy={north:0,south:1,east:2,west:3};function dy(n){const{sx:t,sy:e,sz:i,minY:s,cx:r,cz:o,district:a,seedBase:c,colorIdx:l,bayWindow:u}=n,d=rf(),h=(v,y,w,A,x,E,R,C=0)=>({x:v,y,z:w,rotX:C,rotY:A,sx:x,sy:E,sz:R}),f=Math.min(4.2,e*.28),g=e-f,_=Math.max(1,Math.round(g/Di)),m=Math.min(2.6,t*.18),p=Math.min(2.4,Di*.55),b=Math.min(3,Di*.82),S=v=>{const y=v==="north"||v==="south"?t:i,w=y>29?[-.27,.27]:[-.2,.2],A=v==="north"?Math.PI:v==="south"?0:v==="west"?-Math.PI/2:Math.PI/2,x=v==="north"||v==="south",E=v==="north"?-1:v==="south"?1:v==="west"?-1:1,R=(N,U,D)=>x?[r+N,U,o+E*(i*.5+D)]:[r+E*(t*.5+D),U,o+N],C=(N,U)=>{w.forEach((D,G)=>{const q=_n(c*1e3+hy[v]*100+N*10+G),tt=m*(.88+q()*.24),Y=p*(.88+q()*.24),ct=s+g-Y*.5-.35,Lt=Math.min(U,ct),[Rt,vt,$]=R(y*D,Lt,.055);(q()<.35?d.winLit:d.winUnlit).push(h(Rt,vt,$,A,tt,Y,1));const[lt,ot,Nt]=R(y*D,Lt-Y*.5-.08,.1);if(d.sills.push(h(lt,ot,Nt,x?0:Math.PI/2,tt+.38,.18,.16)),q()<.3){const[Vt,pt,ee]=R(y*D,Lt-Y*.5-.35,.28);d.flowerBoxes.push(h(Vt,pt,ee,x?0:Math.PI/2,tt*.8,.35,.4));for(let Bt=0;Bt<3;Bt++){const[it,Q,st]=R(y*D+(Bt-1)*tt*.22,Lt-Y*.5-.12,.28);(Bt%2?d.petals:d.leaves).push(h(it,Q,st,0,.14,.14,.14))}}})},[L,O,z]=R(0,s+b*.5,.06);d.doors.push(h(L,O,z,A,Math.min(2.4,y*.13),b,1)),C(0,s+Di*.58);for(let N=1;N<_;N++)C(N,s+Di*N+Di*.58)};if(S("north"),S("south"),S("east"),S("west"),a==="merchant-row"){const v=Math.min(t*.7,10),y=2.2;d.awnings[l%3].push(h(r,s+b+.55,o+i*.5+y*.5-.15,0,v,y,1,-Math.PI/2))}if(u){const v=Math.min(3.2,t*.4),y=Di*.95,w=.8;d.bays.push(h(r,s+y*.5,o+i*.5+w*.5-.05,0,v,y,w))}return d}function at(n){return new Bs({color:n,map:fy(),gradientMap:py()})}let Ni,ys;function fy(){if(Ni)return Ni;const n=document.createElement("canvas");n.width=n.height=fr;const t=n.getContext("2d");t.fillStyle="rgba(255,255,255,.9)",t.fillRect(0,0,fr,fr);for(const e of Yf(Wf))t.fillStyle=`rgba(85,55,45,${e.alpha})`,t.fillRect(e.x,e.y,1,1);return Ni=new Us(n),Ni.colorSpace=Ke,Ni.wrapS=Ni.wrapT=Po,Ni}function py(){if(ys)return ys;const n=document.createElement("canvas");n.width=1,n.height=3;const t=n.getContext("2d");return t.fillStyle="#202020",t.fillRect(0,0,1,1),t.fillStyle="#9a9a9a",t.fillRect(0,1,1,1),t.fillStyle="#fff",t.fillRect(0,2,1,1),ys=new Us(n),ys.minFilter=ys.magFilter=Ze,ys}function my(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Te;let l=0;for(let u=0;u<n.length;++u){const d=n[u];let h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0;const d=[];for(let h=0;h<n.length;++h){const f=n[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=n[h].attributes.position.count}c.setIndex(d)}for(const u in r){const d=Uh(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][h]);const g=Uh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function Uh(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){const u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new fn(o,e,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const d=c/e;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<e;g++){const _=u.getComponent(h,g);a.setComponent(h+d,g,_)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}let Ha=null;function gy(){if(Ha)return Ha;const n=[];for(const i of Pe)n.push({name:i.name,x:i.position.x,z:i.position.z});for(const i of Co())n.push({name:"house",x:i.x+i.w/2,z:i.z+i.d/2});const t=new Set,e=[];for(const i of n){let s="",r=1/0;for(const o of ol){const a=o.x-i.x,c=o.z-i.z,l=a*a+c*c;l<r&&(r=l,s=o.id)}s&&r<3600&&!t.has(s)&&(t.add(s),e.push({...i,nodeId:s}))}return Ha=e,e}let Ga=null;function xy(){if(Ga)return Ga;const n=new Map,t=(e,i,s)=>{n.has(e)||n.set(e,[]);const r=Ye(ve(e)),o=Ye(ve(i));n.get(e).push({to:i,edge:s,w:Math.hypot(r.x-o.x,r.z-o.z)})};for(const e of qe)e.kind!=="bridge"&&(t(e.a,e.b,e),t(e.b,e.a,e));return Ga=n,n}function _y(n,t){if(n===t)return[];const e=xy(),i=new Map([[n,0]]),s=new Map,r=new Set;for(;;){let c=null,l=1/0;for(const[u,d]of i)!r.has(u)&&d<l&&(l=d,c=u);if(c===null)return null;if(c===t)break;r.add(c);for(const u of e.get(c)??[]){const d=l+u.w;d<(i.get(u.to)??1/0)&&(i.set(u.to,d),s.set(u.to,{edge:u.edge,from:c}))}}const o=[];let a=t;for(;a!==n;){const c=s.get(a);if(!c)return null;o.unshift(c.edge),a=c.from}return o}const Fh=16,vy=44;let Es=null;function of(){if(Es)return Es;const n=new Bo(.07,.4,4,8);return n.translate(0,-.25,0),Es={carBody:new Qt(1.9,.9,4.2),carCabin:new Qt(1.7,.65,2),wheel:new pe(.35,.35,.3,10),pedBody:new Bo(.22,.9,4,10),pedHead:new fe(.2,12,10),pedArm:n},Es}let Ts=null;function af(){if(Ts)return Ts;const n=t=>at(t);return Ts={glass:n(1714746),tire:n(2236962),carRed:n(13904426),carBlue:n(3829413),carGray:n(9145227),carBlack:n(2763306),carGreen:n(4881497),carBrown:n(9132587),carCream:n(15261904),carPink:n(16731558),carYellow:n(16767306),carPurple:n(10309119),carTeal:n(5111688),skin1:n(16762531),skin2:n(15245418),skin3:n(13007434),skin4:n(9067066),cloth1:n(3829413),cloth2:n(13904426),cloth3:n(4885355),cloth4:n(9132587),cloth5:n(8010362),cloth6:n(15261904),pants:n(2767434)},Ts}let xo=null;function Oh(){if(xo)return xo;const n=t=>{const e=document.createElement("canvas");e.width=256,e.height=128;const i=e.getContext("2d");i.fillStyle="white",i.strokeStyle="#333",i.lineWidth=6;const s=24,r=10,o=10,a=236,c=80;i.beginPath(),typeof i.roundRect=="function"?i.roundRect(r,o,a,c,s):(i.moveTo(r+s,o),i.arcTo(r+a,o,r+a,o+c,s),i.arcTo(r+a,o+c,r,o+c,s),i.arcTo(r,o+c,r,o,s),i.arcTo(r,o,r+a,o,s),i.closePath()),i.fill(),i.stroke(),i.beginPath(),i.moveTo(110,88),i.lineTo(128,118),i.lineTo(146,88),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#222",i.font="bold 44px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(t,128,52);const l=new Us(e);return l.colorSpace=Ke,l};return xo={"Hello!":n("Hello!"),"Hi!":n("Hi!"),"Ahhh!":n("Ahhh!")},xo}function My(n,t){const e=new ce,i=_n(t),s=of(),r=af();let o,a=4.2,c=.9;switch(n){case"beetle":o=[r.carPink,r.carYellow,r.carPurple,r.carTeal][Math.floor(i()*4)],a=3.6,c=1;break;case"sports":o=r.carRed,a=4,c=.65;break;case"truck":o=[r.carGreen,r.carBrown,r.carBlue][Math.floor(i()*3)],a=4.8,c=1.1;break;case"van":o=[r.carCream,r.carBlue,r.carYellow][Math.floor(i()*3)],a=4.6,c=1.4;break;default:o=[r.carBlue,r.carGray,r.carBlack,r.carRed,r.carGreen][Math.floor(i()*5)]}const l=[],u=new Qt(1.9,c,a);u.translate(0,.55+c/2,0),l.push(u);const d=[[-.85,a*.32],[.85,a*.32],[-.85,-a*.32],[.85,-a*.32]];for(const[_,m]of d){const p=s.wheel.clone();p.rotateZ(Math.PI/2),p.translate(_,.35,m),l.push(p)}const h=my(l);l.forEach(_=>_.dispose());const f=new J(h,o);f.castShadow=!0,e.add(f);const g=new J(s.carCabin,r.glass);if(g.position.set(0,.55+c+.3,n==="truck"?a*.25:0),g.scale.z=a/4.2,g.castShadow=!0,e.add(g),n==="beetle"){const _=new El(.3,12),m=new Ln({color:16777215});for(const p of[1,-1]){const b=new J(_,m);b.position.set(p*.97,1.1,0),b.rotation.y=p*Math.PI/2,e.add(b)}}return e}function yy(n){const t=new ce,e=_n(n),i=of(),s=af(),r=[s.skin1,s.skin2,s.skin3,s.skin4][Math.floor(e()*4)],o=[s.cloth1,s.cloth2,s.cloth3,s.cloth4,s.cloth5,s.cloth6][Math.floor(e()*6)],a=new J(i.pedBody,o);a.position.y=.85,a.castShadow=!0,t.add(a);const c=new J(i.pedHead,r);c.position.y=1.55,c.castShadow=!0,t.add(c);const l=new J(i.pedArm,o);l.position.set(.32,1.25,0),l.rotation.z=-.15,t.add(l);const u=new J(i.pedArm,o);return u.position.set(-.32,1.25,0),u.rotation.z=.15,u.scale.y=-1,t.add(u),{group:t,armR:l}}function Va(n,t){for(const e of on)if(n>e.min.x-1&&n<e.max.x+1&&t>e.min.z-1&&t<e.max.z+1)return!1;return!(ki.some(e=>n>e[0]&&n<e[2]&&t>e[1]&&t<e[3])||un(n,t))}class Sy{constructor(t){ft(this,"cars",[]);ft(this,"peds",[]);ft(this,"graph",Vf());ft(this,"group",new ce);ft(this,"tmpP",new I);ft(this,"tmpT",new I);ft(this,"tmpV",new I);this.scene=t,t.add(this.group),this.spawnCars(),this.spawnPeds()}orientToTangent(t,e){t.rotation.order="YXZ",t.rotation.y=Math.atan2(e.x,e.z),t.rotation.x=-Math.asin(ln.clamp(e.y,-1,1))}makeCurve(t){return Zi(t)}spawnCars(){const t=_n(20260927),e=qe.filter(o=>{if(o.kind==="bridge"||o.kind==="switchback")return!1;const a=ve(o.a),c=ve(o.b);return Math.abs(a.x)<120&&Math.abs(c.x)<120&&Math.abs(a.z)<120&&Math.abs(c.z)<120}),i=e.length>0?e:qe.filter(o=>o.kind!=="bridge"),s=["beetle","sports"],r=["sedan","sedan","sedan","sedan","sedan","sedan","truck","truck","truck","van","van","van","sedan","sedan"];for(let o=s.length;o<Fh;o++)s.push(r[(o-s.length)%r.length]);for(let o=s.length-1;o>0;o--){const a=Math.floor(t()*(o+1));[s[o],s[a]]=[s[a],s[o]]}for(let o=0;o<Fh;o++){const a=i[Math.floor(t()*i.length)],c=this.makeCurve(a),l=s[o],u=My(l,1e3+o);this.group.add(u);const d=l==="sports"?12:8+t()*4;this.cars.push({edge:a,t:t(),dir:t()<.5?1:-1,speed:d,baseSpeed:d,variant:l,group:u,curve:c,edgeLen:c.getLength(),offX:0,offZ:0,destNode:null,route:[],dwellT:0,dwellNode:null})}}spawnPeds(){const t=_n(20260928),e=Oh(),i=qe.filter(s=>{if(s.kind==="bridge"||s.kind==="switchback")return!1;const r=ve(s.a),o=ve(s.b);return Math.abs(r.x)<130&&Math.abs(o.x)<130&&Math.abs(r.z)<130&&Math.abs(o.z)<130});for(let s=0;s<vy;s++){const r=s>=30;let o=null,a=0,c=0;if(r){let S=0;for(;S++<50&&(a=me[0]+t()*(me[2]-me[0]),c=me[1]+t()*(me[3]-me[1]),!Va(a,c)););S>=50&&(a=(me[0]+me[2])/2,c=(me[1]+me[3])/2)}else o=i[Math.floor(t()*i.length)];const{group:l,armR:u}=yy(2e3+s),d=o?this.makeCurve(o):new Zo([new I(a,0,c),new I(a+1,0,c)]);let h=0,f=1,g=0,_=0;!r&&o&&(h=t(),d.getPointAt(h,this.tmpP),d.getTangentAt(h,this.tmpT),f=t()<.5?1:-1,g=-this.tmpT.z*4*f,_=this.tmpT.x*4*f,a=this.tmpP.x+g,c=this.tmpP.z+_);const m=we(a,c);l.position.set(a,m,c),this.group.add(l);const p=new Gc(new bl({map:e["Hello!"],transparent:!0,opacity:0,depthTest:!1}));p.scale.set(1.5,.75,1),p.position.set(a,m+2.2,c),p.visible=!1,this.group.add(p);const b=1.2+t()*.6;this.peds.push({edge:o,t:h,dir:t()<.5?1:-1,side:f,sideOff:f*4,offX:g,offZ:_,speed:b,baseSpeed:b,inPark:r,parkTarget:new I(a,0,c),pos:new I(a,m,c),group:l,armR:u,bubble:p,greetCd:0,startleCd:0,bubbleT:0,hopT:0,waveT:0,stuckT:0,lastPos:new I(a,m,c),curve:d,edgeLen:d.getLength(),destNode:null,route:[],dwellT:0,dwellNode:null}),r&&this.pickParkTarget(this.peds[this.peds.length-1],t)}}pickParkTarget(t,e){let i=0;for(;i++<30;){const s=me[0]+e()*(me[2]-me[0]),r=me[1]+e()*(me[3]-me[1]);if(Va(s,r)){t.parkTarget.set(s,0,r);return}}t.parkTarget.copy(t.pos)}update(t,e,i,s,r){for(const o of this.cars)this.updateCar(o,t);for(const o of this.peds)this.updatePed(o,t,e,i,s,r)}nextEdge(t,e){const i=qe.filter(r=>r.kind!=="bridge"&&(r.a===e||r.b===e)&&!(r.a===t.a&&r.b===t.b)),s=i.length>0?i[Math.floor(Math.random()*i.length)]:t;return s.a===e?{edge:s,dir:1,t:0}:{edge:s,dir:-1,t:1}}assignTrip(t,e){const i=gy();for(let s=0;s<8;s++){const r=i[Math.random()*i.length|0];if(r.nodeId===e)continue;const o=_y(e,r.nodeId);if(o&&o.length>0){t.destNode=r.nodeId,t.route=o;return}}t.destNode=null,t.route=[]}mountEdge(t,e,i,s,r){t.edge=e,s!==void 0?(t.dir=s,t.t=r):e.a===i?(t.dir=1,t.t=0):(t.dir=-1,t.t=1),t.curve=this.makeCurve(e),t.edgeLen=t.curve.getLength()}arriveNode(t,e){if(t.route.length>0){const s=t.route[0];if(s.a===e||s.b===e)return t.route.shift(),this.mountEdge(t,s,e),"route";t.route=[],t.destNode=null}if(t.destNode!==null&&e===t.destNode)return t.dwellT=2+Math.random()*3,t.dwellNode=e,t.t=ln.clamp(t.t,0,1),"dwell";const i=this.nextEdge(t.edge,e);return this.mountEdge(t,i.edge,e,i.dir,i.t),t.destNode===null&&this.assignTrip(t,e),"wander"}beginNextLeg(t){const e=t.dwellNode??(t.dir===1?t.edge.b:t.edge.a);if(t.dwellNode=null,this.assignTrip(t,e),t.route.length>0){const i=t.route.shift();this.mountEdge(t,i,e)}else{const i=this.nextEdge(t.edge,e);this.mountEdge(t,i.edge,e,i.dir,i.t)}}carFollowSpeed(t){let s=t.baseSpeed;for(const r of this.cars){if(r===t||r.dwellT>0||r.edge!==t.edge||r.dir!==t.dir)continue;const o=(r.t-t.t)*t.dir*t.edgeLen;if(!(o<=0||o>7)){if(o<3.5)return 0;s=Math.min(s,r.speed*(o/7))}}return s}pedFollowSpeed(t){let s=t.baseSpeed;for(const r of this.peds){if(r===t||r.inPark||r.dwellT>0||r.edge!==t.edge||r.dir!==t.dir||r.side!==t.side)continue;const o=(r.t-t.t)*t.dir*t.edgeLen;if(!(o<=0||o>2.5)){if(o<1.2)return 0;s=Math.min(s,r.speed*(o/2.5))}}return s}updateCar(t,e){if(t.dwellT>0){t.dwellT-=e,t.dwellT<=0&&(this.beginNextLeg(t),t.baseSpeed=(t.variant==="sports"?12:10)*(t.edge.kind==="switchback"?.6:1),t.speed=t.baseSpeed);return}t.speed=this.carFollowSpeed(t);const i=t.t;if(t.t+=t.dir*t.speed*e/t.edgeLen,t.dir===1&&i<1&&t.t>=1||t.dir===-1&&i>0&&t.t<=0){const u=t.dir===1?t.edge.b:t.edge.a;this.arriveNode(t,u),t.baseSpeed=(t.variant==="sports"?12:10)*(t.edge.kind==="switchback"?.6:1),t.speed=t.baseSpeed}const s=ln.clamp(t.t,0,1);t.curve.getPointAt(s,this.tmpP),t.curve.getTangentAt(s,this.tmpT),t.dir===-1&&this.tmpT.negate();const r=-this.tmpT.z*1.4,o=this.tmpT.x*1.4;t.offX+=ln.clamp(r-t.offX,-4*e,4*e),t.offZ+=ln.clamp(o-t.offZ,-4*e,4*e);const a=this.tmpP.x+t.offX,c=this.tmpP.z+t.offZ,l=Lh(t.edge,s,a,c);t.group.position.set(a,l,c),this.orientToTangent(t.group,this.tmpT)}updatePed(t,e,i,s,r,o){t.inPark?this.updateParkPed(t,e):this.updateSidewalkPed(t,e);const a=i.x-t.pos.x,c=i.z-t.pos.z,l=Math.hypot(a,c),u=i.y-t.pos.y,d=Oh();if(l<6&&u<10&&u>-2&&(s>15||r<-8)?o>t.startleCd&&(t.startleCd=o+12,t.bubble.material.map=d["Ahhh!"],t.bubble.material.needsUpdate=!0,t.bubbleT=2,t.bubble.visible=!0,t.hopT=.4,t.waveT=0):l<12&&u>0&&u<8&&s<10&&o>t.greetCd&&(t.greetCd=o+8,t.bubble.material.map=d["Hello!"],t.bubble.material.needsUpdate=!0,t.bubbleT=2,t.bubble.visible=!0,t.waveT=2),t.bubbleT>0){t.bubbleT-=e;const h=t.bubble.material;h.opacity=Math.min(1,t.bubbleT/.3,(2-t.bubbleT)/.3),t.bubble.position.set(t.pos.x,t.pos.y+2.2,t.pos.z),t.bubbleT<=0&&(t.bubble.visible=!1)}if(t.hopT>0){t.hopT-=e;const h=1-t.hopT/.4;t.group.position.y=t.pos.y+Math.sin(h*Math.PI)*.3}t.waveT>0?(t.waveT-=e,t.armR.rotation.z=-2.2+Math.sin(o*12)*.3):t.armR.rotation.z=-.15}updateSidewalkPed(t,e){if(t.dwellT>0){t.dwellT-=e,t.dwellT<=0&&this.beginNextLeg(t);return}t.speed=this.pedFollowSpeed(t);const i=t.t;if(t.t+=t.dir*t.speed*e/t.edgeLen,t.dir===1&&i<1&&t.t>=1||t.dir===-1&&i>0&&t.t<=0){const d=t.dir===1?t.edge.b:t.edge.a;this.arriveNode(t,d),Math.random()<.15&&(t.side*=-1)}const s=ln.clamp(t.t,0,1);t.curve.getPointAt(s,this.tmpP),t.curve.getTangentAt(s,this.tmpT),t.dir===-1&&this.tmpT.negate();const o=t.side*4-t.sideOff;t.sideOff+=ln.clamp(o,-3*e,3*e);const a=-this.tmpT.z*t.sideOff,c=this.tmpT.x*t.sideOff;t.offX+=ln.clamp(a-t.offX,-4*e,4*e),t.offZ+=ln.clamp(c-t.offZ,-4*e,4*e);const l=this.tmpP.x+t.offX,u=this.tmpP.z+t.offZ;if(t.pos.set(l,Lh(t.edge,s,l,u),u),t.group.position.copy(t.pos),this.orientToTangent(t.group,this.tmpT),t.group.position.y+=Math.abs(Math.sin(performance.now()*.008+l))*.05,t.pos.distanceToSquared(t.lastPos)<.01){if(t.stuckT+=e,t.stuckT>5){const d=t.dir===1?t.edge.b:t.edge.a;(!Number.isFinite(t.t)||t.t<=0||t.t>=1)&&this.arriveNode(t,d),t.stuckT=0}}else t.stuckT=0;t.lastPos.copy(t.pos)}updateParkPed(t,e){if(this.tmpV.subVectors(t.parkTarget,t.pos),this.tmpV.y=0,this.tmpV.length()<1)this.pickParkTarget(t,Math.random);else{this.tmpV.normalize();const s=t.pos.x+this.tmpV.x*t.speed*e,r=t.pos.z+this.tmpV.z*t.speed*e;Va(s,r)?t.pos.set(s,we(s,r),r):this.pickParkTarget(t,Math.random),t.group.position.copy(t.pos),t.group.rotation.y=Math.atan2(this.tmpV.x,this.tmpV.z),t.group.position.y+=Math.abs(Math.sin(performance.now()*.008+s))*.05}}dispose(){this.group.traverse(t=>{if(t instanceof J){const e=t.geometry;Es&&!Object.values(Es).includes(e)&&e.dispose();const i=t.material;Ts&&!Object.values(Ts).includes(i)&&i.dispose()}else t instanceof Gc&&t.material.dispose()}),this.scene.remove(this.group),this.cars=[],this.peds=[]}}const by=n=>-n,Ps={x:13,y:12,z:18},Vo=2,zh=(n,t)=>Math.max(-t,Math.min(t,n));function wy(n,t){const e=zh(n,qa),i=zh(t,Ya);return{look:[e,Vo,i],cam:[e+Ps.x,Vo+Ps.y,i+Ps.z]}}function Ey(n,t,e,i,s){if(e||s)return t;if(i<=0)return n;const r=1-Math.exp(-i*5);return[n[0]+(t[0]-n[0])*r,n[1]+(t[1]-n[1])*r]}function Ty(n,t,e){if(e<=0)return n;const i=Math.atan2(Math.sin(t-n),Math.cos(t-n)),s=i*(1-Math.exp(-e*1.25)),r=i-s;return n+s+Math.sign(r)*Math.max(0,Math.abs(r)-1.35)}const Ce=n=>new Bs({color:n}),Bi=Ce(9262134),cn=Ce(5189671),_o=Ce(16773071),Bh=Ce(16112046),Ay=Ce(1670008),vo=Ce(13200951),Ry=Ce(14657867),Cy=Ce(4948573);function ke(n,t,e,i=Bi){const s=new J(new Qt(n,t,e),i);return s.castShadow=s.receiveShadow=!0,s}function bn(n,t,e=Bi,i=10){const s=new J(new pe(n,n,t,i),e);return s.castShadow=s.receiveShadow=!0,s}function qt(n,t,e,i,s){return t.position.set(e,i,s),n.add(t),t}class Py{constructor(){ft(this,"group",new ce);ft(this,"meg",new ce);ft(this,"pip",new ce);ft(this,"tail",new ce);ft(this,"clock",0);ft(this,"disposed",!1);ft(this,"furniture",new Map);ft(this,"facing",0);ft(this,"lastHome",!1);this.group.name="Meg attic room",this.makeRoom(),this.makeBasics(),this.makeStations(),this.makeMeg(),this.makePumpkin(),this.makeFurniture(),this.group.visible=!1}update(t,e,i){if(this.disposed)return;const s=t,r=s.mode==="home";if(this.group.visible=r,!r){this.lastHome=!1;return}const o=Math.min(.05,Math.max(0,e||.016));this.clock+=o;const a=s.homePosition||{x:0,z:0},c=new I(ln.clamp(a.x,-7.5,7.5),0,ln.clamp(a.z,-5.5,5.5));this.lastHome?this.meg.position.lerp(c,1-Math.exp(-o*14)):this.meg.position.copy(c),this.lastHome=!0;const l=s.homeFacing;typeof l=="number"?this.facing=l:c.distanceToSquared(this.meg.position)>.001&&(this.facing=Math.atan2(c.x-this.meg.position.x,c.z-this.meg.position.z)),this.meg.rotation.y=this.facing;const u=c.distanceTo(this.meg.position)>.035;this.meg.children.filter(f=>f.name==="limb").forEach((f,g)=>f.rotation.x=i?0:Math.sin(this.clock*11+g*Math.PI)*(u?.55:.08)),this.meg.position.y=i?0:u?Math.abs(Math.sin(this.clock*11))*.045:Math.sin(this.clock*2)*.018;const d=this.meg.position.clone().add(new I(-Math.sin(this.facing)*1.25,0,-Math.cos(this.facing)*1.25));d.x=ln.clamp(d.x,-7.3,7.3),d.z=ln.clamp(d.z,-5.3,5.3),this.pip.position.lerp(d,1-Math.exp(-o*4)),this.pip.lookAt(this.meg.position.x,0,this.meg.position.z);const h=this.meg.position.distanceToSquared(new I(4,0,3))<2.7;this.pip.position.y=!i&&h?Math.sin(this.clock*6)*.075:0,this.tail.rotation.z=i?.12:Math.sin(this.clock*(h?5:2))*.34,this.furniture.forEach((f,g)=>f.visible=s.profile.furniture.includes(g))}dispose(){if(this.disposed)return;this.disposed=!0;const t=new Set,e=new Set,i=new Set;this.group.traverse(s=>{const r=s;r.geometry&&t.add(r.geometry),(r.material?Array.isArray(r.material)?r.material:[r.material]:[]).forEach(a=>{e.add(a),Object.values(a).forEach(c=>{c instanceof Je&&i.add(c)})})}),t.forEach(s=>s.dispose()),e.forEach(s=>s.dispose()),i.forEach(s=>s.dispose()),this.group.clear()}makeRoom(){const t=ke(18,.25,14,Bi);qt(this.group,t,0,-.13,0);for(let s=-6;s<=6;s+=1){const r=ke(17.8,.012,.035,cn);qt(this.group,r,0,.01,s+.5)}const e=ke(18,8,.22,Bh);qt(this.group,e,0,4,-7);const i=ke(.22,8,14,Bh);qt(this.group,i,4,4,0),i.position.x=-9;for(const[s,r,o,a]of[[-8.65,0,.34,14],[0,-6.65,18,.34],[0,-3.9,18,.25]])qt(this.group,ke(o,.28,a,cn),s,7.55,r);for(const s of[-8.4,-4.4,0,4.4,8.4]){const r=ke(.32,7.6,.35,cn);r.rotation.z=s/34,qt(this.group,r,s,3.8,-6.75)}this.makeWindow()}makeWindow(){const t=new ce;qt(this.group,t,2.3,4.7,-6.78);const e=new J(new hn(3.2,2.45),new Ln({color:16764813}));e.position.z=.02,t.add(e);for(const[s,r,o,a]of[[0,0,3.45,.17],[0,0,.16,2.6],[-1.65,0,.16,2.6],[1.65,0,.16,2.6],[0,1.22,3.45,.16]])qt(t,ke(o,a,.12,cn),s,r,.08);for(const s of[-2,2]){const r=new J(new pe(.45,.56,2.65,8),Ce(8559016));r.scale.z=.28,qt(t,r,s,0,.22)}const i=ke(4.5,.18,.55,Bi);qt(t,i,0,-1.38,.32)}makeBasics(){const t=new ce;qt(this.group,t,5.8,0,4.65),qt(t,ke(4.2,.35,2.6,cn),0,.55,0),qt(t,ke(4,.32,2.35,Ce(10249076)),0,.9,0),qt(t,ke(4.25,2.25,.22,cn),0,1.5,1.16),qt(t,ke(1.55,.26,.8,_o),-.9,1.2,-.55),[[-1.8,-1],[1.8,-1],[-1.8,1],[1.8,1]].forEach(([s,r])=>qt(t,bn(.12,.65,cn),s,.25,r));const e=new ce;qt(this.group,e,-5,0,-3),qt(e,ke(3.3,.22,1.55,Bi),0,1.75,0),[-1.35,1.35].forEach(s=>[-.58,.58].forEach(r=>qt(e,bn(.11,1.7,cn),s,.85,r))),qt(e,ke(.9,.72,1.15,cn),-1.05,1.25,0),qt(e,ke(.62,.12,.88,Ce(15982509)),.55,1.93,.03);const i=new ce;qt(this.group,i,-4.2,0,-1.45),qt(i,bn(.48,.16,Ce(7314849)),0,1,0),qt(i,bn(.13,1,cn),0,.5,0)}makeStations(){const t=new ce;qt(this.group,t,5,0,-3),qt(t,ke(2.2,.16,.46,cn),0,2.55,0),[-.75,0,.75].forEach(s=>{const r=bn(.06,2.35,Bi);r.rotation.z=-.16+s*.1,qt(t,r,s,1.25,0),qt(t,new J(new en(.29,.52,7),vo),s-.14,.28,0)});const e=new ce;qt(this.group,e,-5,0,3),qt(e,bn(.48,1.15,cn),0,.58,0),qt(e,ke(1.25,.14,.9,Ce(6065798)),0,1.2,0),e.rotation.y=-.25;const i=new J(new pe(1.15,1.3,.16,16),Ce(14262655));qt(this.group,i,4,.08,3),Xh.forEach(s=>this.group.add(this.label(s.id==="jobs"?"POST":s.id==="decor"?"HOME":s.id.toUpperCase(),s.x,3.3,s.z)))}makeMeg(){const t=this.meg;t.name="Meg",this.group.add(t),qt(t,new J(new fe(.34,12,10),Ce(16761758)),0,1.52,0);const e=new J(new fe(.38,12,10,0,Math.PI*2,0,Math.PI*.55),Ce(9323307));qt(t,e,0,1.7,.01);const i=new ce;qt(t,i,0,1.94,0),qt(i,new J(new pe(.48,.48,.12,12),Ce(4534349)),0,0,0);const s=new J(new en(.3,.82,12),Ce(4534349));s.rotation.z=-.18,qt(i,s,.06,.39,0),qt(t,new J(new en(.48,1.05,12),Ay),0,.84,0);for(const[r,o]of[[-.22,.08],[.22,.08]]){const a=bn(.09,.55,cn);a.name="limb",qt(t,a,r,.3,o);const c=bn(.075,.58,Ce(16761758));c.name="limb",c.rotation.z=r*1.8,qt(t,c,r*1.5,1.06,0)}}makePumpkin(){const t=this.pip;t.name="Pumpkin",this.group.add(t),qt(t,new J(new fe(.43,12,9),_o),0,.48,0),qt(t,new J(new fe(.34,12,9),_o),0,.76,.28);for(const r of[-.2,.2]){const o=new J(new en(.16,.36,4),vo);qt(t,o,r,1.12,.26);const a=new J(new fe(.045,8,6),Ce(2893616));qt(t,a,r*.72,.8,.59)}const e=ke(.18,.42,.08,vo);e.rotation.z=Math.PI/2,qt(t,e,0,.86,.58);const i=new ce;this.tail=i,qt(t,i,0,.51,-.38);const s=new J(new Pn(.34,.07,6,12,Math.PI*1.4),vo);s.rotation.x=Math.PI/2,qt(i,s,0,.36,-.22)}makeFurniture(){const t=(e,i,s,r)=>{const o=r();o.position.set(i,0,s),o.visible=!1,this.group.add(o),this.furniture.set(e,o)};t("rug",0,-.2,()=>{const e=new J(new pe(2.1,2.1,.05,20),Ce(7508365));return e.position.y=.035,e}),t("plant",-7,4.6,()=>{const e=new ce;qt(e,bn(.38,.7,Ce(13273941)),0,.35,0);for(let i=0;i<6;i++){const s=new J(new fe(.35,8,6),Cy);qt(e,s,Math.sin(i)*.28,1+Math.abs(Math.cos(i))*.25,Math.cos(i)*.28)}return e}),t("shelf",-7.7,-2.2,()=>{const e=new ce;qt(e,ke(.55,3.1,2.2,cn),0,1.55,0);for(let i=.6;i<3;i+=.75)qt(e,ke(.7,.1,2.1,Bi),0,i,0);return e}),t("lamp",1.8,-4.8,()=>{const e=new ce;qt(e,bn(.1,2.2,Ry),0,1.1,0);const i=new J(new en(.52,.48,12,1,!0),_o);return qt(e,i,0,2.1,0),e}),t("cushion",1.4,3.5,()=>{const e=new J(new fe(.6,12,7),Ce(13858182));return e.scale.y=.32,e.position.y=.18,e}),t("cat-tree",7,2.5,()=>{const e=new ce;return qt(e,bn(.17,2.5,Ce(13610617)),0,1.25,0),qt(e,bn(.72,.16,Ce(13605991)),0,2.45,0),e})}label(t,e,i,s){const r=document.createElement("canvas");r.width=256,r.height=92;const o=r.getContext("2d");o.fillStyle="#3f2b35",o.roundRect(4,4,248,84,18),o.fill(),o.strokeStyle="#f7d688",o.lineWidth=5,o.roundRect(4,4,248,84,18),o.stroke(),o.fillStyle="#fff3cf",o.font="bold 36px sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(t,128,48);const a=new Gc(new bl({map:new Us(r),transparent:!0}));return a.position.set(e,i,s),a.scale.set(1.7,.62,1),a}}function Ly(n,t,e){const i=n.mode==="flight"||n.mode==="tutorial",s=Math.hypot(n.player.velocity.x,n.player.velocity.y,n.player.velocity.z),r=i&&!n.paused&&!e;return{bob:r&&n.player.hover&&s<.3?Math.sin(t*1.5)*.035:0,speed:r?Math.min(1,Math.max(0,(s-5)/16.6)):0}}class Iy{constructor(t){ft(this,"element",document.createElement("div"));this.element.className="flight-effects",this.element.setAttribute("aria-hidden","true");for(let e=0;e<14;e++){const i=document.createElement("i"),s=e*Math.PI*2/14;i.style.left=`${50+Math.cos(s)*43}%`,i.style.top=`${50+Math.sin(s)*43}%`,i.style.setProperty("--angle",`${s}rad`),i.style.animationDelay=`${-e*.17}s`,this.element.append(i)}t.insertAdjacentElement("afterend",this.element)}update(t,e){this.element.hidden=t<=0,this.element.style.setProperty("--speed",t.toFixed(3)),this.element.classList.toggle("low-quality",e)}dispose(){this.element.remove()}}const Dy=[15907014,11063528,15915176,13154528];function kh(n){const t=new J(new Qt(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z));return t.position.set((n.min.x+n.max.x)/2,(n.min.y+n.max.y)/2,(n.min.z+n.max.z)/2),t}class Ny{constructor(t){ft(this,"scene",new Xm);ft(this,"camera",new vn(62,1,.1,900));ft(this,"renderer");ft(this,"effects");ft(this,"hero",new ce);ft(this,"dropParcel",new ce);ft(this,"glowColumn",new ce);ft(this,"glowMats",[]);ft(this,"lastGlowStopId");ft(this,"targetRing",new ce);ft(this,"clouds",new ce);ft(this,"birds",new ce);ft(this,"boats",[]);ft(this,"clock",0);ft(this,"camPos",new I(0,27,145));ft(this,"camLook",new I(0,18,90));ft(this,"homeLook",new I(0,Vo,0));ft(this,"ray",new Y0);ft(this,"blockers",[]);ft(this,"outlines",[]);ft(this,"life");ft(this,"beamGroup",null);ft(this,"beamLight",null);ft(this,"lighthouseLit",!0);ft(this,"sun");ft(this,"disposed",!1);ft(this,"lastMode");ft(this,"lastWidth",-1);ft(this,"lastHeight",-1);ft(this,"lastPixelRatio",-1);ft(this,"followYaw",0);ft(this,"world");ft(this,"water",null);ft(this,"room",new Py);ft(this,"outdoorFog",new Oo(12180704,.0035));ft(this,"birdFlock",[]);this.renderer=new VM({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.effects=new Iy(t),this.renderer.outputColorSpace=Ke,this.renderer.toneMapping=ul,this.renderer.toneMappingExposure=1.12,this.renderer.setClearColor(11459048),this.scene.fog=new Oo(12180704,.0035),this.camera.position.copy(this.camPos);const e=new k0(14283263,13074296,2.35);this.scene.add(e),this.sun=new W0(16765344,2.5),this.sun.position.set(-80,115,48),this.scene.add(this.sun),this.world=this.makeWorld(),this.life=new Sy(this.world),this.scene.add(this.world,this.hero,this.dropParcel,this.glowColumn,this.targetRing,this.clouds,this.birds,this.room.group),this.makeHero(),this.makeDropParcel(),this.makeGlowColumn(),this.makeSkyLife(),this.resize()}resize(){this.lastWidth=-1}render(t,e,i){if(this.disposed)return;const s=t.paused?0:Math.min(.05,Math.max(0,e));this.clock+=s,this.water&&!i.reducedMotion&&this.water.update(this.clock);const r=Ly(t,this.clock,i.reducedMotion);this.effects.update(r.speed,i.lowQuality);const o=this.renderer.domElement,a=Math.max(1,o.clientWidth||o.width),c=Math.max(1,o.clientHeight||o.height),l=i.lowQuality?1e6:2e6,u=Math.min(devicePixelRatio||1,Math.sqrt(l/(a*c)));(a!==this.lastWidth||c!==this.lastHeight||u!==this.lastPixelRatio)&&(this.renderer.setPixelRatio(u),this.renderer.setSize(a,c,!1),this.camera.aspect=a/c,this.camera.updateProjectionMatrix(),this.lastWidth=a,this.lastHeight=c,this.lastPixelRatio=u),this.renderer.shadowMap.enabled=!i.lowQuality,this.outlines.forEach(m=>{m.visible=!i.lowQuality});const d=t.mode==="home";if([this.world,this.hero,this.dropParcel,this.glowColumn,this.targetRing,this.clouds,this.birds].forEach(m=>m.visible=!d),this.room.update(t,s,i.reducedMotion),d){this.scene.fog=null,this.renderer.setClearColor(14010030),this.camera.fov=48,this.camera.updateProjectionMatrix();const m=t.homePosition||{x:0,z:0},p=wy(m.x,m.z),b=Ey([this.homeLook.x,this.homeLook.z],[p.look[0],p.look[2]],this.lastMode!=="home",s,i.reducedMotion);this.homeLook.set(b[0],Vo,b[1]),this.camera.position.set(this.homeLook.x+Ps.x,this.homeLook.y+Ps.y,this.homeLook.z+Ps.z),this.camera.up.set(0,1,0),this.camera.lookAt(this.homeLook),this.lastMode=t.mode,this.renderer.render(this.scene,this.camera);return}this.camera.fov!==62&&(this.camera.fov=62,this.camera.updateProjectionMatrix()),this.scene.fog=this.outdoorFog,this.renderer.setClearColor(11459048);const h=t.player.position,f=new I(h.x,h.y,h.z),g=this.lastMode===void 0||this.lastMode!==t.mode;this.hero.position.copy(f),this.hero.rotation.order="YXZ",this.hero.rotation.y=by(t.player.yaw),this.hero.rotation.x=t.player.pitch*.4,this.hero.rotation.z=0,this.hero.scale.setScalar(t.mode==="title"||t.mode==="summary"?.86:.28),this.hero.position.y+=r.bob,this.animateSky(i.reducedMotion,s),!d&&s>0&&this.life.update(s,f,t.player.speed,t.player.velocity.y,this.clock),this.updateBeacon(this.destination(t),i.reducedMotion||t.paused?0:s),this.updateGlowColumn(t,i.reducedMotion),this.updateDropParcel(t,i.reducedMotion?0:s,i.reducedMotion),this.updateCamera(t,f,s,i.reducedMotion,g),this.lastMode=t.mode;const _=t.run?Math.min(1,t.run.elapsed/480):.1;this.sun.color.setHSL(.095-_*.08,.9,.78),this.sun.intensity=2.5-_*.45,this.scene.fog.color.setHSL(.55-_*.48,.42,.82-_*.12),this.renderer.render(this.scene,this.camera)}dispose(){this.effects.dispose(),this.disposed=!0,this.scene.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose();const i=e.material;(Array.isArray(i)?i:[i]).forEach(s=>s==null?void 0:s.dispose())}),this.renderer.dispose()}makeWorld(){const t=new ce,e=qM();this.water=e,t.add(e.mesh);const i=new hn(440,440,200,200);i.rotateX(-Math.PI/2);const s=i.attributes.position;for(let S=0;S<s.count;S++)s.setY(S,we(s.getX(S),s.getZ(S)));i.computeVertexNormals();const r=1024,o=document.createElement("canvas");o.width=r,o.height=r;const a=o.getContext("2d"),c=a.createImageData(r,r);c.data.set(Hf(r)),a.putImageData(c,0,0);const l=new Us(o);l.colorSpace=Ke,l.anisotropy=4;const u=at(16777215);u.map=l;const d=new J(i,u);t.add(d);const h=at(16777215);h.vertexColors=!0,h.side=He;const f=at(9072461);f.side=He;const g=new Map,_=S=>{const v=S.toFixed(1);let y=g.get(v);return y||(S>5?y=[[-ws,12103840],[-dr,12103840],[-dr,11033418],[-hr,11033418],[-hr,4408138],[hr,4408138],[hr,11033418],[dr,11033418],[dr,12103840],[ws,12103840]]:y=[[-S/2,4408138],[S/2,4408138]],g.set(v,y)),y},m=(S,v,y,w,A)=>{const x=new ce,E=24,R=y/2,C=_(y),L=C.length,O=[],z=[],N=[],U=[],D=[],G=[],q=[],tt=new ae;for(let vt=0;vt<=E;vt++){const $=w+vt/E*(A-w),lt=v.getPointAt($),ot=v.getTangentAt($),Nt=-ot.z,Vt=ot.x,pt=Math.hypot(Nt,Vt)||1,ee=Nt/pt,Bt=Vt/pt,it=Jc(S,$);for(const[mt,Ft]of C)O.push(lt.x+ee*mt,it,lt.z+Bt*mt),z.push(0,1,0),tt.setHex(Ft),N.push(tt.r,tt.g,tt.b);if(vt<E)for(let mt=0;mt<L-1;mt++){const Ft=vt*L+mt,Yt=Ft+L;U.push(Ft,Yt,Ft+1,Ft+1,Yt,Yt+1)}const Q=lt.x+ee*R,st=lt.z+Bt*R,ut=lt.x-ee*R,xt=lt.z-Bt*R,Xt=[[Q,st,ee,Bt],[ut,xt,-ee,-Bt]];for(const[mt,Ft,Yt,F]of Xt){const le=we(mt,Ft),jt=le<it-.35?Math.max(le-.1,it-4):it;D.push(mt,it,Ft,mt,jt,Ft),G.push(Yt,0,F,Yt,0,F)}if(vt<E){const mt=vt*4;q.push(mt,mt+4,mt+1,mt+1,mt+4,mt+5),q.push(mt+2,mt+3,mt+6,mt+3,mt+7,mt+6)}}const Y=new Te;Y.setAttribute("position",new Jt(O,3)),Y.setAttribute("normal",new Jt(z,3)),Y.setAttribute("color",new Jt(N,3)),Y.setIndex(U);const ct=new J(Y,h);ct.receiveShadow=!0,x.add(ct);const Lt=new Te;Lt.setAttribute("position",new Jt(D,3)),Lt.setAttribute("normal",new Jt(G,3)),Lt.setIndex(q);const Rt=new J(Lt,f);return Rt.receiveShadow=!0,x.add(Rt),x},p=(S,v,y)=>{const w=new ae(4408138),A=[],x=[],E=[],R=[],C=[],L=[],O=(U,D,G,q,tt,Y,ct,Lt)=>{const Rt=U.length/3;for(const[vt,$]of[tt,Y,ct,Lt])U.push(vt,q,$),D.push(0,1,0);G.push(Rt,Rt+1,Rt+2,Rt,Rt+2,Rt+3)};for(const U of Il()){const D=U.height,G=Ye(ve(U.nodeId)),q=[G.x,D,G.z],tt=[0,1,0],Y=[w.r,w.g,w.b],ct=[];for(const Q of U.ring)q.push(Q.x,D,Q.z),tt.push(0,1,0),Y.push(w.r,w.g,w.b);for(let Q=0;Q<U.ring.length;Q++)ct.push(0,1+Q,1+(Q+1)%U.ring.length);const Lt=new Te;Lt.setAttribute("position",new Jt(q,3)),Lt.setAttribute("normal",new Jt(tt,3)),Lt.setAttribute("color",new Jt(Y,3)),Lt.setIndex(ct);const Rt=new J(Lt,v);Rt.receiveShadow=!0,S.add(Rt);const vt=[],$=[],lt=[],ot=U.ring.length,Nt=U.legs.map(Q=>({la:Math.atan2(Q.dz,Q.dx),ca:Math.atan2(Q.hw,Q.clip)})),Vt=(Q,st)=>{const ut=(Q-st)%(Math.PI*2);return Math.abs((ut+Math.PI*3)%(Math.PI*2)-Math.PI)};for(let Q=0;Q<ot;Q++){const st=U.ring[Q],ut=U.ring[(Q+1)%ot],xt=(st.x+ut.x)/2-G.x,Xt=(st.z+ut.z)/2-G.z,mt=Math.atan2(Xt,xt);if(Nt.some(K=>Vt(mt,K.la)<=K.ca+1e-6))continue;const Ft=ut.x-st.x,Yt=ut.z-st.z,F=Math.hypot(Ft,Yt)||1,le=Yt/F,jt=-Ft/F,P=Math.min(we(st.x,st.z),we(ut.x,ut.z)),M=D-.02,H=P<M-.3?Math.max(P-.1,M-3):M,V=vt.length/3;vt.push(st.x,M,st.z,st.x,H,st.z,ut.x,M,ut.z,ut.x,H,ut.z),$.push(le,0,jt,le,0,jt,le,0,jt,le,0,jt),lt.push(V,V+2,V+1,V+1,V+2,V+3)}const pt=new Te;pt.setAttribute("position",new Jt(vt,3)),pt.setAttribute("normal",new Jt($,3)),pt.setIndex(lt);const ee=new J(pt,y);ee.receiveShadow=!0,S.add(ee);const{white:Bt,walk:it}=iy(U);for(const Q of Bt)O(A,x,E,D+.03,Q[0],Q[1],Q[2],Q[3]);for(const Q of it)O(R,C,L,D+.035,Q[0],Q[1],Q[2],Q[3])}const z=at(16118246);if(z.side=He,z.polygonOffset=!0,z.polygonOffsetFactor=-2,z.polygonOffsetUnits=-2,E.length){const U=new Te;U.setAttribute("position",new Jt(A,3)),U.setAttribute("normal",new Jt(x,3)),U.setIndex(E);const D=new J(U,z);D.receiveShadow=!0,S.add(D)}const N=at(12103840);if(N.side=He,N.polygonOffset=!0,N.polygonOffsetFactor=-2,N.polygonOffsetUnits=-2,L.length){const U=new Te;U.setAttribute("position",new Jt(R,3)),U.setAttribute("normal",new Jt(C,3)),U.setIndex(L);const D=new J(U,N);D.receiveShadow=!0,S.add(D)}};for(const S of qe){if(S.kind==="bridge")continue;const v=Zi(S),y=Ll(S),w=Kc(S),A=w.a?Rh(S,"a",Math.max(0,w.a.dist-.05)):0,x=w.b?Rh(S,"b",Math.max(0,w.b.dist-.05)):1;t.add(m(S,v,y,A,x))}for(const S of qe){if(S.kind==="bridge")continue;const v=Zi(S),y=at(16774872);y.side=He;const w=v.getLength(),A=Kc(S),x=A.a?A.a.dist:0,E=A.b?A.b.dist:0;for(let R=x+1;R<w-E-3;R+=4){const C=v.getPointAt(R/w),L=v.getPointAt(Math.min(1,(R+2)/w)),O=new I().addVectors(C,L).multiplyScalar(.5),z=new J(new hn(.24,2),y);z.rotation.x=-Math.PI/2,z.rotation.z=Math.atan2(L.x-C.x,L.z-C.z);const N=Jc(S,(R+1)/w)+.03;z.position.set(O.x,N,O.z),t.add(z)}}p(t,h,f),oy(t);const b=at(10117447);return Ql.forEach(([S,v])=>{const y=new J(new Qt(Pf,.7,Lf),b);y.position.set(S,.8,v),t.add(y)}),this.makeBuildings(t),this.makeGreenery(t),this.makeLighthouse(t),this.makeClockTower(t),this.makeObservatoryDome(t),this.makeBakeryDormer(t),this.makeMansionTerraces(t),this.makeBoats(t),this.makeLaundryLines(t),this.makeDockDressing(t),this.makeStreetLamps(t),this.makePark(t),t}makePark(t){const[e,i,s,r]=me,o=(e+s)/2,a=(i+r)/2,c=we(o,a),l=new J(new hn(s-e,r-i),at(8367708));l.rotation.x=-Math.PI/2,l.position.set(o,c+.1,a),t.add(l);const u=new ze,d=new xn(new pe(.35,.55,4,7),at(7621174),ka.length),h=new xn(new _r(2.6,1),at(5085035),ka.length);ka.forEach((v,y)=>{const w=we(v.x,v.z);u.rotation.set(0,y*2.39996,0),u.scale.setScalar(v.s),u.position.set(v.x,w+2*v.s,v.z),u.updateMatrix(),d.setMatrixAt(y,u.matrix),u.position.set(v.x,w+5.5*v.s,v.z),u.updateMatrix(),h.setMatrixAt(y,u.matrix)}),d.instanceMatrix.needsUpdate=!0,h.instanceMatrix.needsUpdate=!0,t.add(d,h);const f=at(15260864);for(const v of ay){const y=new J(new Qt(v.x1-v.x0,.2,v.z1-v.z0),f);y.position.set((v.x0+v.x1)/2,c+.15,(v.z0+v.z1)/2),t.add(y)}const g=cy,_=new Bs({color:13625572,transparent:!0,opacity:.5}),m=new J(new Qt(g.w,g.h,g.d),_);m.position.set(g.x,c+g.h/2,g.z),t.add(m);const p=g.d/2,b=new J(new fe(p,16,10,0,Math.PI*2,0,Math.PI/2),_);b.position.set(g.x,c+g.h,g.z),t.add(b);const S=at(8030858);for(let v=0;v<6;v++){const y=new J(new Pn(p,.15,6,12,Math.PI),S);y.position.set(g.x,c+g.h,g.z),y.rotation.y=v/6*Math.PI,t.add(y)}}makeLaundryLines(t){const e=at(4865845),i=[at(16747434),at(8370408),at(16777215),at(16767306),at(10147455)],s=[[-25,9,-50,-20,9,-32],[5,11,-50,15,11,-45],[-20,8,-22,15,8,-28]],r=_n(42);s.forEach(([o,a,c,l,u,d])=>{const h=new I(o,a,c),f=new I(l,u,d),g=h.distanceTo(f),_=12;let m=h.clone();for(let b=1;b<=_;b++){const S=b/_,v=h.clone().lerp(f,S);v.y-=Math.sin(S*Math.PI)*.8;const y=m.distanceTo(v),w=new J(new pe(.03,.03,y,4),e);w.position.copy(m).lerp(v,.5),w.lookAt(v),w.rotateX(Math.PI/2),t.add(w),m=v}const p=Math.floor(g/3);for(let b=0;b<p;b++){const S=(b+.7)/(p+.4),v=h.clone().lerp(f,S);v.y-=Math.sin(S*Math.PI)*.8;const y=.9+r()*.5,w=1.1+r()*.5,A=new J(new hn(y,w),i[Math.floor(r()*i.length)]);A.position.set(v.x,v.y-w/2,v.z),A.rotation.y=Math.atan2(f.x-h.x,f.z-h.z)+Math.PI/2,A.material.side=He,t.add(A)}})}makeDockDressing(t){const e=at(11040318),i=at(8016432),s=at(13218953),r=Ql,o=_n(7);r.forEach(([a,c])=>{const l=2+Math.floor(o()*3);for(let d=0;d<l;d++){const h=1.1+o()*.5,f=new J(new Qt(h,h,h),e);f.position.set(a-10+o()*20,1.15+h/2+(d===2?1.4:0),c-3+o()*6),f.rotation.y=o()*.6,f.castShadow=!0,t.add(f)}for(let d=0;d<2;d++){const h=new J(new pe(.65,.65,1.5,10),i);h.position.set(a-8+o()*16,1.9,c-2.5+o()*5),h.castShadow=!0,t.add(h)}const u=new J(new Pn(.55,.18,8,16),s);u.position.set(a-6+o()*12,1.25,c-2+o()*4),u.rotation.x=Math.PI/2,t.add(u)})}makeStreetLamps(t){const e=at(3816002),i=at(16767370);[[-70,30],[-62,42],[-78,48],[-92,12],[-92,20],[-47,24],[-47,32],[-10,-40],[10,-40],[-10,-55],[10,-55]].forEach(([r,o])=>{const c=new J(new pe(.12,.16,4.2,8),e);c.position.set(r,0+2.1,o),c.castShadow=!0,t.add(c);const l=new J(new en(.45,.35,8),e);l.position.set(r,0+4.55,o),t.add(l);const u=new J(new fe(.32,10,8),i);u.position.set(r,0+4.2,o),t.add(u)})}makeBoats(t){const e=at(9132604),i=at(5996454),s=at(7031343),r=at(16117985),o=new Wc;o.moveTo(0,4.2),o.quadraticCurveTo(1.7,2.5,1.6,0),o.quadraticCurveTo(1.5,-2.5,1,-3.4),o.quadraticCurveTo(0,-3.8,-1,-3.4),o.quadraticCurveTo(-1.5,-2.5,-1.6,0),o.quadraticCurveTo(-1.7,2.5,0,4.2);const a=new Ho(o,{depth:1.1,bevelEnabled:!1});a.rotateX(-Math.PI/2);const c=new Wc;c.moveTo(0,4.5),c.quadraticCurveTo(1.95,2.6,1.85,0),c.quadraticCurveTo(1.75,-2.6,1.15,-3.65),c.quadraticCurveTo(0,-4.1,-1.15,-3.65),c.quadraticCurveTo(-1.75,-2.6,-1.85,0),c.quadraticCurveTo(-1.95,2.6,0,4.5);const l=new Vc;l.moveTo(0,3.9),l.quadraticCurveTo(1.45,2.4,1.35,0),l.quadraticCurveTo(1.25,-2.4,.85,-3.15),l.quadraticCurveTo(0,-3.5,-.85,-3.15),l.quadraticCurveTo(-1.25,-2.4,-1.35,0),l.quadraticCurveTo(-1.45,2.4,0,3.9),c.holes.push(l);const u=new Ho(c,{depth:.28,bevelEnabled:!1});u.rotateX(-Math.PI/2);const d=[.08,-.06,.1,-.08,.06,-.1];If.map(([f,g],_)=>[f,g,d[_]]).forEach(([f,g,_],m)=>{const p=new ce,b=m%2?i:e,S=new J(a,b);S.position.y=1.1,p.add(S);const v=new J(u,s);v.position.y=1.1,p.add(v);const y=new J(new pe(.12,.16,5.5,6),s);y.position.y=3.8,p.add(y);const w=new J(new Qt(.3,3.6,1.7),r);w.position.set(0,3.3,-1.2),p.add(w),p.position.set(f,.1,g),p.rotation.y=_,p.userData.phase=m*1.3,p.userData.baseY=.1,t.add(p),this.boats.push(p)})}makeBuildings(t){const e=rf(),i=at(16768938),s=at(3501961),r=at(16767370),o=at(7358008),a=at(5085035),c=at(16747434),l=(_,m,p,b,S,v,y,w,A,x,E,R)=>{const C=Math.min(4.2,m*.28),L=new J(new Qt(_,m-C,p),at(E));L.position.set(S,b+(m-C)*.5,v),L.castShadow=!0,L.receiveShadow=!0,t.add(L);const O=_*.5,z=p*.5,N=m*.5-C,U=new I(S,b+m*.5,v),D=new Te;D.setAttribute("position",new Jt([-O,N,-z,O,N,-z,0,m*.5,0,O,N,-z,O,N,z,0,m*.5,0,O,N,z,-O,N,z,0,m*.5,0,-O,N,z,-O,N,-z,0,m*.5,0],3)),D.setIndex([0,2,1,3,5,4,6,8,7,9,11,10]),D.computeVertexNormals();const G=new J(D,at(R));G.position.copy(U),G.castShadow=!0,t.add(G),uy(e,dy({sx:_,sy:m,sz:p,minY:b,cx:S,cz:v,district:y,seedBase:w,colorIdx:A,bayWindow:x}))};on.forEach((_,m)=>{const p=_.max.x-_.min.x,b=_.max.y-_.min.y,S=_.max.z-_.min.z,v=new I((_.min.x+_.max.x)/2,(_.min.y+_.max.y)/2,(_.min.z+_.max.z)/2),y=kh(_);if(this.blockers.push(y),m===jl||m===tu||m===eu)return;const w=_.district&&Br[_.district]||Br["old-town"];l(p,b,S,_.min.y,v.x,v.z,_.district??"old-town",m,m,!1,w.bodies[m%w.bodies.length],w.roofs[m%w.roofs.length]),_.district==="bungalow-lanes"&&this.makePicketFence(t,_,m),_.district==="mansion-hill"&&this.makeWalledGarden(t,_,m)});const u=Co(),d=Kh(u),h=at(9076594),f=at(12101770),g=qe.filter(_=>_.kind!=="bridge").map(_=>{const m=Ye(ve(_.a)),p=Ye(ve(_.b));return{x0:m.x,z0:m.z,x1:p.x,z1:p.z}});u.forEach((_,m)=>{const p=Ro(_.x,_.z,_.w,_.d),b=p?p.maxH:we(_.x+_.w/2,_.z+_.d/2),S=p?p.minH:b,v=b,y=Br[_.district]||Br["old-town"],w=_.palette===0?y.bodies[m%y.bodies.length]:Dy[_.palette-1];if(b-S>.3){const L=new J(new Qt(_.w,b-S,_.d),h);L.position.set(_.x+_.w/2,S+(b-S)/2,_.z+_.d/2),L.castShadow=!0,L.receiveShadow=!0,t.add(L)}l(_.w,_.h,_.d,v,_.x+_.w/2,_.z+_.d/2,_.district,ly+m,m,_.bayWindow,w,y.roofs[m%y.roofs.length]),this.blockers.push(kh(d[m]));const A=_.x+_.w/2,x=_.z+_.d/2;let E=0,R=0,C=1/0;for(const L of g){const O=L.x1-L.x0,z=L.z1-L.z0,N=O*O+z*z;let U=N>0?((A-L.x0)*O+(x-L.z0)*z)/N:0;U=Math.max(0,Math.min(1,U));const D=L.x0+U*O,G=L.z0+U*z,q=Math.hypot(A-D,x-G);q<C&&(C=q,E=D,R=G)}if(C<1/0&&C>.5){const L=E-A,O=R-x,z=Math.hypot(L,O),N=L/z,U=O/z,D=(_.w*Math.abs(N)+_.d*Math.abs(U))/2,G=A+N*D,q=x+U*D,tt=E-N*2.8,Y=R-U*2.8,ct=Math.hypot(tt-G,Y-q);if(ct>1.5){const Lt=(G+tt)/2,Rt=(q+Y)/2,vt=(we(G,q)+we(tt,Y))/2+.1,$=new J(new Qt(3,.18,ct),f);$.position.set(Lt,vt,Rt),$.rotation.y=Math.atan2(tt-G,Y-q),$.receiveShadow=!0,t.add($)}}}),this.buildFacadeInstances(t,e,{trimMat:i,glassMat:s,litMat:r,doorMat:o,leafMat:a,petalMat:c})}buildFacadeInstances(t,e,i){const s=new hn(1,1),r=new Qt(1,1,1),o=new fe(1,6,5),a=new ze,c=(h,f)=>{f.forEach((g,_)=>{a.position.set(g.x,g.y,g.z),a.rotation.set(g.rotX,g.rotY,0),a.scale.set(g.sx,g.sy,g.sz),a.updateMatrix(),h.setMatrixAt(_,a.matrix)}),h.instanceMatrix.needsUpdate=!0,h.frustumCulled=!1,t.add(h)};if(e.winLit.length){const h=new xn(s,i.litMat,e.winLit.length);c(h,e.winLit)}if(e.winUnlit.length){const h=new xn(s,i.glassMat,e.winUnlit.length);c(h,e.winUnlit)}if(e.doors.length){const h=new xn(s,i.doorMat,e.doors.length);c(h,e.doors)}if(e.sills.length){const h=new xn(r,i.trimMat,e.sills.length);c(h,e.sills)}if(e.bays.length){const h=new xn(r,i.trimMat,e.bays.length);c(h,e.bays)}if(e.flowerBoxes.length){const h=new xn(r,i.doorMat,e.flowerBoxes.length);c(h,e.flowerBoxes)}if(e.petals.length){const h=new xn(o,i.petalMat,e.petals.length);c(h,e.petals)}if(e.leaves.length){const h=new xn(o,i.leafMat,e.leaves.length);c(h,e.leaves)}const l=new hn(1,1,1,1),u=l.attributes.position;for(let h=0;h<u.count;h++)u.getY(h)<0&&u.setZ(h,-.7);l.computeVertexNormals();const d=[["#e86a6a","#f5f0e1"],["#5b7fa6","#f5f0e1"],["#6aa86a","#f5f0e1"]];e.awnings.forEach((h,f)=>{if(!h.length)return;const[g,_]=d[f%d.length],m=document.createElement("canvas");m.width=128,m.height=16;const p=m.getContext("2d");for(let v=0;v<8;v++)p.fillStyle=v%2?g:_,p.fillRect(v*16,0,16,16);const b=new Us(m);b.colorSpace=Ke;const S=new xn(l,new Bs({map:b,side:He}),h.length);c(S,h)})}makePicketFence(t,e,i){const s=(e.min.x+e.max.x)/2,r=(e.min.z+e.max.z)/2,o=e.max.x-e.min.x,a=e.max.z-e.min.z,c=e.min.y,l=at(16117985),u=at(7031343),d=[at(16747434),at(16767306),at(16777215),at(15231594)],h=4,f=s-o/2-h,g=s+o/2+h,_=r+a/2+h,m=[[f,_,s-1.2,_],[s+1.2,_,g,_],[f,r-a/2,f,_],[g,r-a/2,g,_]],p=[],b=new ze;m.forEach(([x,E,R,C])=>{const L=Math.hypot(R-x,C-E),O=Math.max(2,Math.floor(L/.38)),z=Math.atan2(R-x,C-E);for(let G=0;G<=O;G++){const q=G/O;b.position.set(x+(R-x)*q,c+.55,E+(C-E)*q),b.rotation.set(0,z,0),b.updateMatrix(),p.push(b.matrix.clone())}const N=L,U=new J(new Qt(.08,.12,N),l);U.position.set((x+R)/2,c+.75,(E+C)/2),U.rotation.y=z,t.add(U);const D=U.clone();D.position.y=c+.35,t.add(D)});const S=new Qt(.14,1.1,.07),v=new xn(S,l,p.length);p.forEach((x,E)=>v.setMatrixAt(E,x)),v.instanceMatrix.needsUpdate=!0,t.add(v);const y=new en(.1,.18,4),w=new xn(y,l,p.length);p.forEach((x,E)=>{const R=new I().setFromMatrixPosition(x);b.position.set(R.x,R.y+.64,R.z),b.rotation.set(0,Math.PI/4,0),b.updateMatrix(),w.setMatrixAt(E,b.matrix)}),w.instanceMatrix.needsUpdate=!0,t.add(w);const A=_n(i*77+5);[-1,1].forEach(x=>{const E=s+x*3.2,R=r+a/2+2.2,C=new J(new Qt(3.4,.35,1.8),u);C.position.set(E,c+.18,R),t.add(C);for(let L=0;L<7;L++){const O=new J(new fe(.22,7,6),d[Math.floor(A()*d.length)]);O.position.set(E+(A()-.5)*2.8,c+.55,R+(A()-.5)*1.2),t.add(O);const z=new J(new fe(.18,6,5),at(5085035));z.position.set(E+(A()-.5)*2.8,c+.42,R+(A()-.5)*1.2),t.add(z)}})}makeWalledGarden(t,e,i){const s=ki.find(U=>e.min.x>=U[0]-1&&e.max.x<=U[2]+1&&e.min.z>=U[1]-1&&e.max.z<=U[3]+1);if(!s)return;const[r,o,a,c]=s,l=e.min.y,u=at(12103840),d=at(14209216),h=at(4033119),f=at(7031343),g=[at(16747434),at(16767306),at(16777215)],_=ki.some(U=>U!==s&&Math.abs(U[2]-r)<.01),m=ki.some(U=>U!==s&&Math.abs(U[0]-a)<.01),p=[[(r+a)/2,o,a-r,.5]],b=[[(r+a)/2,o+1.5,a-r-3,.8]],S=e.max.z-o,v=(o+e.max.z)/2;_||(p.push([r,v,.5,S]),b.push([r+1.5,v,.8,S-3])),m?b.push([a,v,.8,S-2]):(p.push([a,v,.5,S]),b.push([a-1.5,v,.8,S-3]));const y=[],w=o+3,A=e.max.z-2;if(A-w>=5){const U=[];!_&&e.min.x-r>=5&&U.push([r+2.5,e.min.x-2.5]),!m&&a-e.max.x>=5&&U.push([e.max.x+2.5,a-2.5]);for(const[D,G]of U){const q=(D+G)/2,tt=Math.max(1,Math.floor((A-w)/8));for(let Y=0;Y<tt;Y++){const ct=w+(Y+.5)*((A-w)/tt);y.push([q,ct])}}}const x=.9;p.forEach(([U,D,G,q])=>{const tt=new J(new Qt(G,x,q),u);tt.position.set(U,l+x/2,D),tt.castShadow=!0,t.add(tt);const Y=new J(new Qt(G+.15,.12,q+.15),d);Y.position.set(U,l+x+.06,D),t.add(Y)});const E=1;b.forEach(([U,D,G,q])=>{const tt=new J(new Qt(G,E,q),h);tt.position.set(U,l+E/2,D),tt.castShadow=!0,t.add(tt)});const R=_n(i*131+11);y.forEach(([U,D])=>{const G=new J(new Qt(3.2,.4,2.4),f);G.position.set(U,l+.2,D),t.add(G);for(let q=0;q<8;q++){const tt=new J(new fe(.24,7,6),g[Math.floor(R()*g.length)]);tt.position.set(U+(R()-.5)*2.6,l+.6,D+(R()-.5)*1.8),t.add(tt)}});const C=[],L=o+5,O=e.min.z-4;if(O-L>6){const U=Math.max(2,Math.floor((a-r-10)/11));for(let D=0;D<U;D++){const G=r+7+(D+.5)*((a-r-14)/U)+(R()-.5)*3,q=(L+O)/2+(R()-.5)*2;C.push([G,q])}}!_&&e.min.x-r>9&&C.push([(r+e.min.x)/2,(L+O)/2]),!m&&a-e.max.x>9&&C.push([(e.max.x+a)/2,(L+O)/2]);const z=at(7621174),N=at(5085035);for(const[U,D]of C){const G=new J(new pe(.4,.65,3.2,7),z);G.position.set(U,l+1.6,D),G.castShadow=!0,t.add(G);const q=new J(new _r(3,1),N);q.position.set(U,l+5,D),q.castShadow=!0,t.add(q)}}makeGreenery(t){const e=at(7621174),i=at(5085035),s=at(4033119),r=at(16747434),o=_n(1337),a=Co(),c=qe.map(f=>{const g=ve(f.a),_=ve(f.b);return{x0:g.x,z0:g.z,x1:_.x,z1:_.z}}),l=(f,g)=>{for(const _ of c){const m=_.x1-_.x0,p=_.z1-_.z0,b=m*m+p*p;let S=b>0?((f-_.x0)*m+(g-_.z0)*p)/b:0;if(S=Math.max(0,Math.min(1,S)),Math.hypot(f-(_.x0+S*m),g-(_.z0+S*p))<4.5)return!1}for(const _ of a)if(f>_.x-2&&f<_.x+_.w+2&&g>_.z-2&&g<_.z+_.d+2)return!1;for(const _ of on)if(f>_.min.x-2&&f<_.max.x+2&&g>_.min.z-2&&g<_.max.z+2)return!1;return!ki.some(_=>f>_[0]&&f<_[2]&&g>_[1]&&g<_[3])},u=(f,g)=>{const _=new ce,m=3+o()*2.5,p=new J(new pe(.35,.55,m,7),e);p.position.y=m/2,_.add(p);const b=o()<.5?i:s,S=new J(new _r(2.2+o()*1.2,1),b);if(S.position.y=m+1.5,_.add(S),_.position.set(f,we(f,g),g),_.rotation.y=o()*Math.PI*2,t.add(_),o()<.3){const v=new J(new fe(.28,7,6),r);v.position.set(f+.8,we(f,g)+.5,g+.6),t.add(v)}};let d=0,h=0;for(;d<260&&h<6e3;){h++;const f=(o()-.5)*400,g=60+o()*160;iu(f,g)&&l(f,g)&&(Pe.some(_=>Math.hypot(f-_.position.x,g-_.position.z)<24)||Math.hypot(f,g)<145||(u(f,g),d++))}for(d=0,h=0;d<60&&h<3e3;){h++;const f=(o()-.5)*400,g=(o()-.5)*400;iu(f,g)&&l(f,g)&&(Pe.some(_=>Math.hypot(f-_.position.x,g-_.position.z)<24)||f>me[0]&&f<me[2]&&g>me[1]&&g<me[3]||Math.hypot(f,g)<100&&o()<.7||g>60&&Math.hypot(f,g)>=145||(u(f,g),d++))}}makeLighthouse(t){const e=on[3],i=on[jl],s=(e.min.x+e.max.x)/2,r=(e.min.z+e.max.z)/2,o=new J(new pe(20,24,9,18),at(9076594));o.position.set(s,e.min.y+2.5,r),o.castShadow=!0,t.add(o);const a=(i.min.x+i.max.x)/2,c=(i.min.z+i.max.z)/2,l=i.min.y,u=new J(new pe(3.6,5.2,26,16),at(16773332));u.position.set(a,16+l,c),u.castShadow=!0,t.add(u);const d=p=>5.2-(p-3)*(1.6/26);for(const p of[8,14,20,26]){const b=new J(new pe(d(p+1.1)+.15,d(p-1.1)+.15,2.2,16),at(13786193));b.position.set(a,p+l,c),t.add(b)}const h=new J(new pe(4.6,4.6,1.2,16),at(4089472));h.position.set(a,29.6+l,c),t.add(h);const f=new J(new pe(2.6,2.6,3.4,12),new Ln({color:16771501}));f.position.set(a,31.8+l,c),t.add(f);const g=new J(new en(3.4,2.6,12),at(13194062));g.position.set(a,34.8+l,c),t.add(g);const _=new ce;_.position.set(a,31.8+l,c);const m=new Ln({color:16768910,transparent:!0,opacity:.28,depthWrite:!1,side:He});[0,Math.PI].forEach(p=>{const b=new J(new en(3.2,26,12,1,!0),m);b.rotation.z=Math.PI/2,b.rotation.y=p,b.position.set(Math.cos(p)*13,0,-Math.sin(p)*13),_.add(b)}),t.add(_),this.beamGroup=_,this.beamLight=new G0(16768146,60,90),this.beamLight.position.set(a,32+l,c),t.add(this.beamLight),this.setLighthouseLit(!0)}setLighthouseLit(t){this.lighthouseLit=t,this.beamGroup&&(this.beamGroup.visible=t),this.beamLight&&(this.beamLight.intensity=t?60:0)}makeClockTower(t){const e=on[tu],i=(e.min.x+e.max.x)/2,s=(e.min.z+e.max.z)/2,r=e.min.y,o=at(13935988),a=at(11951167),c=at(16768938),l=new J(new Qt(8,20,8),o);l.position.set(i,r+10,s),l.castShadow=!0,t.add(l);const u=new J(new Qt(8.6,3,8.6),o);u.position.set(i,r+21.5,s),u.castShadow=!0,t.add(u);const d=at(2763317),h=[[0,-4.32,Math.PI],[0,4.32,0],[-4.32,0,-Math.PI/2],[4.32,0,Math.PI/2]];for(const[m,p,b]of h){const S=new J(new pe(2.2,2.2,.3,24),new Ln({color:16314584}));S.rotation.x=Math.PI/2,S.rotation.z=b,S.position.set(i+m,r+17,s+p),t.add(S);const v=new Ln({color:2763317}),y=new J(new Qt(.18,1.1,.1),v);y.position.set(i+m*1.02,r+17.3,s+p*1.02),y.rotation.z=-.6,y.rotation.y=b,t.add(y);const w=new J(new Qt(.14,1.6,.1),v);w.position.set(i+m*1.02,r+17.2,s+p*1.02),w.rotation.z=.9,w.rotation.y=b,t.add(w);const A=new J(new hn(2.4,2),d);A.position.set(i+m*1.01,r+21.5,s+p*1.01),A.rotation.y=b,t.add(A)}const f=new en(6.2,5,4),g=new J(f,a);g.position.set(i,r+25.5,s),g.rotation.y=Math.PI/4,g.castShadow=!0,t.add(g);const _=new J(new fe(.5,10,8),c);_.position.set(i,r+28.2,s),t.add(_);for(const[m,p]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const b=new J(new Qt(.7,20,.7),c);b.position.set(i+m*3.8,r+10,s+p*3.8),t.add(b)}}makeObservatoryDome(t){const e=on[eu],i=(e.min.x+e.max.x)/2,s=(e.min.z+e.max.z)/2,r=e.min.y,o=at(9079442),a=at(6064762),c=new J(new pe(4.5,4.8,3,18),o);c.position.set(i,r+1.5,s),c.castShadow=!0,t.add(c);const l=new J(new fe(4.5,20,12,0,Math.PI*2,0,Math.PI/2),a);l.position.set(i,r+3,s),l.castShadow=!0,t.add(l);const u=new J(new Qt(1.2,3.5,.4),at(1710629));u.position.set(i,r+4.85,s+4.1),u.rotation.x=-.25,t.add(u);const d=new J(new fe(.4,8,6),at(9071162));d.position.set(i,r+7.7,s),t.add(d)}makeBakeryDormer(t){const e=on[0],i=(e.min.x+e.max.x)/2,s=(e.min.z+e.max.z)/2,r=i,o=s-8,a=e.max.x-e.min.x,c=e.max.y-e.min.y,l=e.max.z-e.min.z,u=Math.min(4.2,c*.28),d=Math.max(0,Math.min(1-Math.abs(r-i)/(a/2),1-Math.abs(o-s)/(l/2))),h=e.max.y-u+d*u,f=at(16049320),g=at(9132602),_=new J(new Qt(4.5,2.6,3),f);_.position.set(r,h+1.3,o),_.castShadow=!0,t.add(_);const m=new J(new hn(2.6,1.6),new Ln({color:16767114}));m.position.set(r,h+1.3,o+1.52),t.add(m);const p=new J(new Qt(3,2,.15),g);p.position.set(r,h+1.3,o+1.45),t.add(p),m.position.z=o+1.54;const b=new Te;b.setAttribute("position",new Jt([-2.45,0,-1.7,2.45,0,-1.7,0,.2,0,2.45,0,-1.7,2.45,0,1.7,0,.2,0,2.45,0,1.7,-2.45,0,1.7,0,.2,0,-2.45,0,1.7,-2.45,0,-1.7,0,.2,0],3)),b.setIndex([0,2,1,3,5,4,6,8,7,9,11,10]),b.computeVertexNormals();const S=new J(b,g);S.position.set(r,h+2.6,o),S.castShadow=!0,t.add(S)}makeMansionTerraces(t){const e=at(10132114),i=at(6989930),s=(r,o,a,c,l,u)=>{const d=c-a,h=new J(new Qt(o-r,d,u-l),e);h.position.set((r+o)/2,a+d/2,(l+u)/2),h.castShadow=!0,h.receiveShadow=!0,t.add(h);const f=new J(new Qt(o-r-.6,.25,u-l-.6),i);f.position.set((r+o)/2,c+.12,(l+u)/2),f.receiveShadow=!0,t.add(f)};for(const r of[17,18]){const o=on[r],a=o.min.y;s(o.min.x,o.max.x,a,a+1.5,o.max.z,o.max.z+4.5),s(o.min.x+4,o.max.x-4,a,a+3,o.max.z+2.25,o.max.z+4.5)}}makeHero(){const t=new Ln({color:3746621,side:an}),e=(c,l,u,d)=>{const h=new J(c,l);h.position.set(u.x,u.y,u.z),d&&h.scale.set(d.x,d.y,d.z),this.hero.add(h);const f=new J(c,t);return f.scale.setScalar(1.045),h.add(f),this.outlines.push(f),h},i=e(new pe(.16,.21,8.6,10),at(8736825),{x:0,y:.15,z:.35});i.rotation.x=Math.PI/2;const s=e(new Pn(.62,.105,7,14,Math.PI*1.25),at(7946799),{x:0,y:.58,z:-4.05});s.rotation.z=Math.PI*.18,[3,3.3].forEach(c=>e(new Pn(.34,.1,6,12),at(5583662),{x:0,y:.15,z:c}));for(let c=0;c<21;c++){const l=(c-10)/10,u=new Ud(new I(l*.25,.15,3),new I(l*1.5,-.05+Math.cos(c)*.16,5.8-Math.abs(l)*.35));e(new $o(u,1,.11,5,!1),at(c%2?13869914:15780216),{x:0,y:0,z:0})}e(new en(1.75,4.3,9),at(1535606),{x:0,y:4,z:-.25}),e(new fe(1.15,14,10),at(16762531),{x:0,y:6.5,z:-.35}),e(new en(2.05,4.6,11),at(2443608),{x:0,y:9,z:-.35}),e(new Pn(1.55,.28,7,16),at(2443608),{x:0,y:7.25,z:-.35},{x:1,y:1,z:1}).rotation.x=Math.PI/2,[-1,1].forEach(c=>{const l=e(new pe(.34,.48,2.2,7),at(2443608),{x:c*.72,y:2.35,z:.05});l.rotation.z=c*.36;const u=e(new pe(.28,.35,1.75,7),at(2443608),{x:c*1.12,y:1.15,z:-.08});u.rotation.z=-c*.62,e(new fe(.46,8,7),at(5716276),{x:c*1.48,y:.52,z:-.47},{x:1,y:.65,z:1.45})}),[-.75,-.38,.38,.75].forEach((c,l)=>e(new fe(.45,8,7),at(10308914),{x:c,y:6.75-l%2*.42,z:-1.15})),[-.4,.4].forEach(c=>e(new fe(.14,8,7),at(2504770),{x:c,y:6.65,z:-1.43}));const r=at(15914671);e(new fe(1.02,12,9),r,{x:0,y:2,z:1.48}),e(new fe(.78,12,9),r,{x:0,y:2.78,z:2.08}),[-.48,.48].forEach(c=>e(new en(.38,.78,3),at(14721900),{x:c,y:3.55,z:2.2})),[-.26,.26].forEach(c=>e(new fe(.12,7,6),at(2572625),{x:c,y:2.88,z:2.88})),[-.42,.42].forEach(c=>e(new fe(.19,7,6),r,{x:c,y:1.27,z:2.12},{x:1,y:.7,z:1.15}));const o=e(new Pn(.79,.075,6,12),at(12929874),{x:0,y:2.45,z:2.06});o.rotation.x=Math.PI/2;const a=e(new Pn(1,.17,7,12,Math.PI*.8),at(15914671),{x:0,y:2,z:.95});a.rotation.x=Math.PI/2}makeSkyLife(){const t=at(16776171);for(let e=0;e<12;e++){const i=new ce;for(let s=0;s<4;s++){const r=new J(new fe(3+s%2*1.5,10,7),t);r.position.set(s*3,Math.sin(s)*.8,0),i.add(r)}i.position.set(-190+e*47%380,38+e%4*16,-155+e*71%320),this.clouds.add(i)}this.makeBirds()}makeBirds(){const t=at(16119280),e=at(14277081),i=at(15242044),s=_n(1234);for(let r=0;r<12;r++){const o=new ce,a=new J(new fe(.45,10,8),t);a.scale.set(.7,.6,1.6),o.add(a);const c=new J(new fe(.26,10,8),t);c.position.set(0,.22,.75),o.add(c);const l=new J(new en(.09,.35,8),i);l.position.set(0,.18,1.05),l.rotation.x=Math.PI/2,o.add(l);const u=new J(new Qt(.5,.07,.6),e);u.position.set(0,.05,-.85),o.add(u);const d=g=>{const _=new ce;_.position.set(g*.28,.12,.1);const m=new J(new Qt(1.5,.07,.65),e);m.position.x=g*.85;const p=new J(new Qt(.7,.06,.45),e);return p.position.x=g*1.85,_.add(m,p),o.add(_),_},h=d(-1),f=d(1);o.position.set(-30+s()*80,28+s()*12,45+s()*55),this.birds.add(o),this.birdFlock.push({group:o,left:h,right:f,vel:new I((s()-.5)*8,0,(s()-.5)*8),phase:s()*Math.PI*2})}}updateBirds(t){const e=this.birdFlock.length;if(!e||t<=0)return;const i=14,s=9,r=4.5,o=26,a=new I,c=new I;for(let l=0;l<e;l++){const u=this.birdFlock[l],d=new I,h=new I,f=new I;let g=0;for(let w=0;w<e;w++){if(l===w)continue;const A=this.birdFlock[w],x=u.group.position.distanceTo(A.group.position);x<i&&x>.001&&(g++,c.copy(u.group.position).sub(A.group.position).divideScalar(x*x),d.add(c),h.add(A.vel),f.add(A.group.position))}a.set(0,0,0),g>0&&(d.divideScalar(g).normalize().multiplyScalar(s).sub(u.vel),d.clampLength(0,o),h.divideScalar(g).normalize().multiplyScalar(s).sub(u.vel),h.clampLength(0,o),f.divideScalar(g).sub(u.group.position).normalize().multiplyScalar(s).sub(u.vel),f.clampLength(0,o),a.addScaledVector(d,1.6).addScaledVector(h,1).addScaledVector(f,.9));const _=33-u.group.position.y;a.y+=ln.clamp(_*2.2,-o*.6,o*.6),a.x+=Math.sin(this.clock*.9+u.phase)*4+Math.sin(this.clock*.23+u.phase*2.1)*3,a.z+=Math.cos(this.clock*.7+u.phase*1.3)*4+Math.cos(this.clock*.31+u.phase*.7)*3,u.vel.addScaledVector(a,t);const m=u.vel.length();m>s?u.vel.multiplyScalar(s/m):m<r&&m>.001&&u.vel.multiplyScalar(r/m),u.group.position.addScaledVector(u.vel,t);const p=u.group.position.clone().add(u.vel);u.group.lookAt(p);const b=(this.clock*.35+u.phase*.15)%1;let S,v;b<.58?(S=.75,v=0):(S=.06,v=.18);const y=v+Math.sin(this.clock*11+u.phase)*S;u.left.rotation.z=y,u.right.rotation.z=-y}}animateSky(t,e){t||(this.clouds.children.forEach((i,s)=>{i.position.x+=.012*(1+s%3),i.position.x>205&&(i.position.x=-205)}),this.updateBirds(e),this.beamGroup&&this.lighthouseLit&&(this.beamGroup.rotation.y+=.015),this.boats.forEach(i=>{const s=i.userData.baseY??.35;i.position.y=s+Math.sin(this.clock*1.2+i.userData.phase)*.18,i.rotation.z=Math.sin(this.clock*.9+i.userData.phase)*.03}))}destination(t){var i,s,r;if(t.mode==="tutorial")return Pe.find(o=>o.id==="harbor-cafe")||Pe[1];const e=(i=t.run)!=null&&i.returning?"home":(r=(s=t.run)==null?void 0:s.job)==null?void 0:r.to;return Pe.find(o=>o.id===e)||Pe.find(o=>o.id==="home")||Pe[0]}updateBeacon(t,e){if(t&&(this.targetRing.position.set(t.position.x,Math.max(3,t.position.y+.6),t.position.z),this.targetRing.rotation.y+=e*.8,!this.targetRing.children.length)){const i=new J(new Pn(4.5,.25,8,28),at(16770203));i.rotation.x=Math.PI/2,this.targetRing.add(i);const s=new J(new pe(.08,.26,8,8,1,!0),new Ln({color:16771234,transparent:!0,opacity:.16,depthWrite:!1,side:He}));s.position.y=4,this.targetRing.add(s)}}makeGlowColumn(){const e=[{rTop:nd,rBottom:2.4,opacity:.2},{rTop:1.7,rBottom:1.1,opacity:.32}];for(const i of e){const s=new pe(i.rTop,i.rBottom,90,24,1,!0),r=new En({transparent:!0,depthWrite:!1,blending:ja,side:He,uniforms:{uHeight:{value:90},uOpacity:{value:i.opacity},uPulse:{value:1}},vertexShader:`varying float vH; uniform float uHeight;
void main(){ vH = position.y / uHeight + .5; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,fragmentShader:`varying float vH; uniform float uOpacity; uniform float uPulse;
void main(){ float a = pow(clamp(1. - vH, 0., 1.), 1.7) * uOpacity * uPulse;
  gl_FragColor = vec4(1., .62, .22, a); }`}),o=new J(s,r);o.position.y=90/2,this.glowColumn.add(o),this.glowMats.push(r)}this.glowColumn.visible=!1}updateGlowColumn(t,e){const i=qo(t),s=!!i;if(this.glowColumn.visible=s,!s||!i){this.lastGlowStopId=void 0;return}this.lastGlowStopId!==i.id&&(this.lastGlowStopId=i.id,this.glowColumn.position.set(i.position.x,i.position.y,i.position.z));const r=t.haloFade>0?Math.max(0,Math.min(1,t.haloFade/jh)):1,o=(e?1:.86+.14*Math.sin(this.clock*2.4))*r;for(const a of this.glowMats)a.uniforms.uPulse.value=o}makeDropParcel(){const t=new J(new Qt(1.5,1.1,1.5),at(13208927)),e=at(12929874),i=new J(new Qt(1.56,1.16,.34),e),s=new J(new Qt(.34,1.16,1.56),e),r=new J(new fe(.3,8,6),e);r.position.y=.68,r.scale.set(1.4,.7,1.4),this.dropParcel.add(t,i,s,r),this.dropParcel.visible=!1}updateDropParcel(t,e,i){const s=t.drop,r=s?Pe.find(h=>h.id===s.stopId):void 0,o=!!s&&!!r&&s.parcel;if(this.dropParcel.visible=o,!o||!s||!r)return;const a=i?1:Math.min(1,s.t/Qh),c=a*a,l=t.player.position,u=r.position.y+.7,d=Math.max(l.y-1.4,u);this.dropParcel.position.set(l.x+(r.position.x-l.x)*c,d+(u-d)*c,l.z+(r.position.z-l.z)*c),i||(this.dropParcel.rotation.y+=e*4)}updateCamera(t,e,i,s,r){let o,a;if(t.mode==="title"||t.mode==="summary"){const c=s?0:this.clock*.035;o=new I(-92+Math.sin(c)*8,48,146+Math.cos(c)*7),a=new I(18,13,65)}else{this.followYaw=r?t.player.yaw:Ty(this.followYaw,t.player.yaw,i);const c=this.followYaw,l=new I(-Math.sin(c)*26,12,Math.cos(c)*26);o=e.clone().add(l),a=e.clone().add(new I(Math.sin(c)*5,2,-Math.cos(c)*5));const u=e.clone().add(new I(0,2,0)),d=o.clone().sub(u),h=d.length();this.blockers.forEach(g=>g.updateWorldMatrix(!0,!1)),this.ray.set(u,d.normalize());const f=this.ray.intersectObjects(this.blockers,!1)[0];f&&f.distance<h&&o.copy(u).add(d.setLength(Math.max(7,f.distance-1)))}this.camPos.copy(o),this.camLook.copy(a),this.camera.position.copy(this.camPos),this.camera.up.set(0,1,0),this.camera.lookAt(this.camLook)}}const Uy=()=>({lastKey:null,dismissedKey:null});function Fy(n,t,e){return`${n}|${t}|${e}`}function Oy(n,t,e,i,s,r){const o=Fy(t,e,s),a=o===n.lastKey?n:{lastKey:o,dismissedKey:null};return{hidden:!(t.includes("tutorial")||i!==""||t==="flight"&&(r??1/0)<=120)||a.dismissedKey===o,next:a}}function zy(n){return{...n,dismissedKey:n.lastKey}}const wi=n=>`<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${{star:'<path d="m12 2 2.8 6.5L22 9l-5.4 4.7 1.6 7.1-6.2-3.7-6.2 3.7 1.6-7.1L2 9l7.2-.5Z"/>',envelope:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',pause:'<path d="M7 4h3v16H7zm7 0h3v16h-3z"/>',sound:'<path d="M4 10h4l5-4v12l-5-4H4zM16 9c1 .8 1 5.2 0 6m2-9c3 2.6 3 9.4 0 12"/>',fullscreen:'<path d="M4 9V5h4m8 0h4v4M20 15v4h-4M8 19H4v-4"/>',home:'<path d="m3 11 9-8 9 8v9h-6v-6H9v6H3z"/>'}[n]}</svg>`,Ss=n=>`${Math.max(0,Math.round(n))} coins`,By=n=>n===void 0||!Number.isFinite(n)?"--:--":`${Math.floor(Math.max(0,Math.ceil(n))/60).toString().padStart(2,"0")}:${(Math.max(0,Math.ceil(n))%60).toString().padStart(2,"0")}`;class ky{constructor(t,e){ft(this,"el",{});ft(this,"previousRevision",-1);ft(this,"offersKey","");ft(this,"tip",Uy());t.classList.add("meg-ui"),t.innerHTML=`
<header class="gamebar"><div class="gamebar-brand">MEG’S <span>Delivery Service</span></div><div class="sun-pill"><i></i>Nightfall in <b id="countdown">--:--</b></div><div class="gamebar-actions"><button class="icon-button" id="audio-btn" aria-label="Mute audio">${wi("sound")}</button><button class="icon-button" id="pause-btn" aria-label="Pause flight">${wi("pause")}</button></div></header><main class="screen-layer">
<section class="title-card panel" id="title-card"><div class="eyebrow">${wi("star")} A LITTLE WITCH. A BIG SKY.</div><h1>MEG’S<br><em>Delivery</em> Service</h1><p class="premise">Take on a parcel, then return home <b>before nightfall</b> to bank your earnings.</p><p class="key-hint desktop-hint">Steer with <kbd>WASD</kbd> / arrows · rise with <kbd>W</kbd> · hover with <kbd>Space</kbd></p><p class="key-hint touch-hint">Touch anywhere to fly · release the stick to slow down</p><button id="start-btn" class="primary-button">Learn to fly <span>→</span></button><div class="title-controls"><button id="quality-btn">Quality: <b>High</b></button><button id="motion-btn">Motion: <b>Full</b></button><button id="fullscreen-btn">${wi("fullscreen")} Fullscreen</button></div><footer>MADE OF LITTLE ADVENTURES <span class="desktop-hint">⌨</span><span class="touch-hint">touch to fly</span> <span class="build-sha">build 34eb25f</span></footer></section>
<section class="offers-card panel menu-card" id="offers-card"><div class="eyebrow">${wi("envelope")} TODAY’S POST</div><h2>Choose a delivery</h2><p>Nightfall is already on its way. Pick one parcel and make it home with your earnings.</p><div class="offer-balances"><span>Satchel <b id="offer-earnings">0 coins</b></span><span>Banked <b id="offer-banked">0 coins</b></span></div><div id="offer-list" class="offer-list"></div><button id="return-home-btn" class="secondary-button">Return home</button></section>
<section class="summary-card panel menu-card" id="summary-card"><div class="eyebrow">${wi("star")} DAY’S END</div><h2 id="summary-heading">A lovely landing.</h2><p id="summary-copy"></p><div class="summary-stats"><div><span>Deliveries</span><b id="summary-deliveries">0</b></div><div><span>Earnings saved</span><b id="summary-earnings">0 coins</b></div></div><button id="next-day-btn" class="primary-button">Another day <span>→</span></button></section>
<section class="flight-hud" id="flight-hud"><div class="destination-card panel"><div class="eyebrow">${wi("envelope")} <span id="target-label">Next delivery</span></div><strong id="target-name">The village</strong><div class="target-direction"><span class="compass-arrow" id="target-arrow"></span><span id="target-distance">— m away</span></div></div><div class="tutorial-bubble" id="tutorial-bubble"><button class="bubble-close" id="bubble-close" aria-label="Dismiss tip">×</button><b>Pumpkin says:</b> <span id="tutorial-text"></span></div><div class="flight-readout panel"><span><b id="speed-value">0</b> m/s</span><span class="satchel-readout">Satchel <b id="flight-earnings">0</b></span></div></section>
<section class="pause-card panel menu-card" id="pause-card"><div class="eyebrow">${wi("star")} TAKING A BREATHER</div><h2>The sky will wait.</h2><p id="pause-reason"></p><p class="key-hint desktop-hint">When you return: <kbd>WASD</kbd> or arrows to steer · <kbd>Q</kbd>/<kbd>E</kbd> for speed</p><p class="key-hint touch-hint">When you return: touch anywhere to fly · release the stick to slow down</p><button id="resume-btn" class="primary-button">Continue flying <span>→</span></button><button id="unstuck-btn" class="secondary-button">Unstuck me</button><div class="title-controls"><button id="pause-quality-btn">Quality</button><button id="pause-motion-btn">Motion</button></div></section></main>`;const i=r=>t.querySelector(`#${r}`);["title-card","offers-card","summary-card","flight-hud","pause-card","countdown","pause-reason","target-name","target-distance","target-arrow","target-label","tutorial-bubble","tutorial-text","bubble-close","speed-value","flight-earnings","audio-btn","pause-btn","resume-btn","unstuck-btn","quality-btn","motion-btn","pause-quality-btn","pause-motion-btn","offer-list","return-home-btn","offer-earnings","offer-banked","summary-heading","summary-copy","summary-deliveries","summary-earnings","next-day-btn","start-btn"].forEach(r=>this.el[r]=i(r));const s=(r,o)=>i(r).onclick=a=>{o(),a.currentTarget.blur()};s("start-btn",e.start),s("pause-btn",e.pause),s("resume-btn",e.resume),s("unstuck-btn",e.unstuck),s("audio-btn",e.mute),i("bubble-close").onclick=r=>{this.tip=zy(this.tip),this.el["tutorial-bubble"].hidden=!0,r.currentTarget.blur()},s("return-home-btn",()=>{var r;return(r=e.returnHome)==null?void 0:r.call(e)}),s("next-day-btn",()=>{var r;return(r=e.nextDay)==null?void 0:r.call(e)}),[i("quality-btn"),i("pause-quality-btn")].forEach(r=>r.onclick=e.quality),[i("motion-btn"),i("pause-motion-btn")].forEach(r=>r.onclick=e.motion),i("fullscreen-btn").onclick=e.fullscreen,i("offer-list").onclick=r=>{var a;const o=r.target.closest("[data-job]");o&&((a=e.chooseJob)==null||a.call(e,+o.dataset.job),o.blur())}}render(t,e){var u,d,h;const i=["offers","summary"].includes(t.mode),s=t.mode==="title",r=!s&&t.paused;this.el["title-card"].hidden=!s,this.el["offers-card"].hidden=t.mode!=="offers"||r,this.el["summary-card"].hidden=t.mode!=="summary"||r,this.el["flight-hud"].hidden=s||i||r,this.el["pause-card"].hidden=!r,this.el.countdown.textContent=By(e.timeRemaining),this.el.countdown.className=e.timeRemaining!==void 0&&e.timeRemaining<=30?"urgent":e.timeRemaining!==void 0&&e.timeRemaining<=60?"warning":"",this.el["start-btn"].innerHTML=`${t.profile.tutorialDone?"Start a delivery day":"Learn to fly"} <span>→</span>`,this.el["target-name"].textContent=e.targetName,this.el["target-distance"].textContent=e.targetDistance>0?`${Math.round(e.targetDistance)} m away`:"Right here",this.el["target-label"].textContent=(u=t.run)!=null&&u.returning?"Return home":"Next delivery",this.el["target-arrow"].style.transform=`rotate(${e.targetBearing??0}deg)`,this.el["speed-value"].textContent=String(Math.round(e.speed)),this.el["audio-btn"].classList.toggle("is-muted",e.muted),this.el["audio-btn"].setAttribute("aria-label",e.muted?"Unmute audio":"Mute audio"),this.el["quality-btn"].innerHTML=`Quality: <b>${e.lowQuality?"Low":"High"}</b>`,this.el["motion-btn"].innerHTML=`Motion: <b>${e.reducedMotion?"Low":"Full"}</b>`,this.el["tutorial-text"].textContent=e.status||t.message||"Let’s take the scenic route!";const o=e.status||t.message||"",a=Oy(this.tip,t.mode,t.tutorialStage,e.status,o,e.timeRemaining);this.tip=a.next,this.el["tutorial-bubble"].hidden=a.hidden,this.el["flight-earnings"].textContent=Ss(((d=t.run)==null?void 0:d.earnings)??0),this.el["offer-earnings"].textContent=Ss(((h=t.run)==null?void 0:h.earnings)??0),this.el["offer-banked"].textContent=Ss(t.profile.coins),this.renderOffers(t);const c=t.summary,l=(c==null?void 0:c.success)??!1;this.el["summary-heading"].textContent=l?"A lovely landing.":"Rescued from nightfall.",this.el["summary-copy"].textContent=l?`You banked ${Ss((c==null?void 0:c.earnings)??0)} after ${(c==null?void 0:c.deliveries)??0} deliveries.`:"The unbanked satchel was lost, but tomorrow brings another chance.",this.el["summary-deliveries"].textContent=String((c==null?void 0:c.deliveries)??0),this.el["summary-earnings"].textContent=Ss((c==null?void 0:c.earnings)??0),this.el["next-day-btn"].innerHTML=`${l?"Another day":"Back home"} <span>→</span>`,this.previousRevision!==t.revision&&(this.el["pause-reason"].textContent=t.pauseReason||"Rest your wings whenever you need.",this.previousRevision=t.revision)}renderOffers(t){var s,r;if(t.mode!=="offers")return;this.el["return-home-btn"].hidden=(((s=t.run)==null?void 0:s.deliveries)??0)===0;const e=(((r=t.run)==null?void 0:r.offers)??[]).slice(0,2),i=e.map(o=>`${o.to}:${o.parcel}:${o.payout}`).join("|");i!==this.offersKey&&(this.offersKey=i,this.el["offer-list"].innerHTML=e.map((o,a)=>{const c=Pe.find(u=>u.id===o.to),l=c?Math.hypot(c.position.x-t.player.position.x,c.position.z-t.player.position.z):0;return`<button class="offer-button" data-job="${a}"><span><b>${(c==null?void 0:c.name)??o.to}</b><small>${l<115?"Short":"Long"} route · ${o.parcel} · ${Math.round(l)} m</small></span><strong>${Ss(o.payout)} <i>→</i></strong></button>`}).join(""))}}class Hy{constructor(t,e,i=()=>!0){ft(this,"keys",new Set);ft(this,"stick",{x:0,y:0});ft(this,"stickPointer",null);ft(this,"cutPending",!1);ft(this,"keydown");ft(this,"keyup");ft(this,"canvas");ft(this,"joystick");ft(this,"stickEnabled");this.canvas=t,this.stickEnabled=i,this.keydown=s=>{if(this.inControl(s.target))return;const r=s.key.toLowerCase();["arrowleft","arrowright","arrowup","arrowdown","w","a","s","d","q","e"," ","enter","escape","p","f"].includes(r)&&s.preventDefault(),!s.repeat&&r===" "&&e.hover(),!s.repeat&&r==="enter"&&e.interact(),!s.repeat&&(r==="escape"||r==="p")&&e.pause(),!s.repeat&&r==="f"&&e.fullscreen(),this.keys.add(r)},this.keyup=s=>this.keys.delete(s.key.toLowerCase()),window.addEventListener("keydown",this.keydown),window.addEventListener("keyup",this.keyup),t.addEventListener("blur",()=>this.clear()),this.joystick=document.querySelector("#joystick")||void 0,this.joystick&&(this.joystick.hidden=!0),this.bindTouch()}sample(){const t=(a,c)=>Number(this.keys.has(a)||this.keys.has(c)),e=t("arrowright","d")-t("arrowleft","a")+this.stick.x,i=t("arrowup","w")-t("arrowdown","s")-this.stick.y,s=this.stickPointer!==null,r=t("e","e")-t("q","q")+(s?1:0),o=this.cutPending;return this.cutPending=!1,{turn:Math.max(-1,Math.min(1,e)),climb:Math.max(-1,Math.min(1,i)),throttle:Math.max(-1,Math.min(1,r)),cutThrottle:o}}clear(){this.keys.clear(),this.stickPointer=null,this.stick.x=this.stick.y=0,this.cutPending=!1,this.joystick&&(this.joystick.style.removeProperty("--stick-x"),this.joystick.style.removeProperty("--stick-y"),this.joystick.classList.remove("is-dragging"),this.joystick.hidden=!0)}dispose(){window.removeEventListener("keydown",this.keydown),window.removeEventListener("keyup",this.keyup),this.clear()}inControl(t){return t instanceof Element&&!!t.closest('input, button, select, textarea, [contenteditable="true"]')}bindTouch(){if(!this.joystick)return;const t=this.joystick,e=o=>{const a=t.getBoundingClientRect(),c=a.width*.34,l=o.clientX-(a.left+a.width/2),u=o.clientY-(a.top+a.height/2),d=Math.max(c,Math.hypot(l,u));this.stick.x=l/d,this.stick.y=u/d,t.style.setProperty("--stick-x",`${this.stick.x*c}px`),t.style.setProperty("--stick-y",`${this.stick.y*c}px`)},i=o=>{if(o.pointerType==="mouse"||this.stickPointer!==null||!this.stickEnabled())return;this.stickPointer=o.pointerId;try{this.canvas.setPointerCapture(o.pointerId)}catch{}const a=t.offsetWidth/2||56;t.style.left=`${o.clientX-a}px`,t.style.top=`${o.clientY-a}px`,t.hidden=!1,t.classList.add("is-dragging"),e(o)},s=o=>{o.pointerId===this.stickPointer&&e(o)},r=o=>{o.pointerId===this.stickPointer&&(this.stickPointer=null,this.stick.x=this.stick.y=0,t.style.removeProperty("--stick-x"),t.style.removeProperty("--stick-y"),t.classList.remove("is-dragging"),t.hidden=!0,this.cutPending=!0)};this.canvas.addEventListener("pointerdown",i),this.canvas.addEventListener("pointermove",s),this.canvas.addEventListener("pointerup",r),this.canvas.addEventListener("pointercancel",r),this.canvas.addEventListener("lostpointercapture",r)}}class Gy{constructor(t,e){ft(this,"root");ft(this,"key","");this.actions=e,this.root=document.createElement("section"),this.root.className="home-interface",t.append(this.root),this.root.addEventListener("click",i=>{const s=i.target.closest("button");s&&(s.dataset.action==="interact"?e.interact():s.dataset.action==="close"?e.close():s.dataset.action==="start"?e.start():s.dataset.upgrade?e.upgrade(s.dataset.upgrade):s.dataset.furnish&&e.furnish(s.dataset.furnish),s.blur())})}render(t){if(this.root.hidden=t.mode!=="home"||t.paused,this.root.hidden)return;const e=sl(t),i=JSON.stringify([t.homePanel,e==null?void 0:e.id,t.profile.coins,t.profile.upgrades,t.profile.furniture,t.message]);if(i===this.key)return;this.key=i;const s=t.profile,r=`<div class="eyebrow">MEG'S ROOM</div><h2>Welcome home, Meg.</h2><p class="home-wallet">${s.coins} coins saved · ${s.furniture.length}/6 cozy touches</p>`,o=`<button class="context-button" data-action="interact" ${e?"":"disabled"}>${e?`Visit ${e.name}`:"Explore your room"} <kbd>Enter</kbd></button>`;if(t.homePanel==="none"){const c=`<aside class="room-guide panel">${r}<p>Walk to the Job Board, Broom Workshop, or Decor Corner.</p>${o}</aside>`;this.root.innerHTML=`${c}${Rf(s)?'<div class="completion-ribbon">✦ Every little corner feels like home. Keep flying, little witch.</div>':""}`;return}let a="";t.homePanel==="jobs"&&(a='<div class="eyebrow">A NEW DELIVERY DAY</div><h2>The town is waiting.</h2><p>Choose your first delivery — pick the route that suits you. You have eight minutes to make deliveries and return home. Anything still in your satchel at nightfall will be lost.</p><button class="primary-button" data-action="start">See today’s deliveries →</button>'),t.homePanel==="brooms"&&(a=`<div class="eyebrow">THE BROOM STAND · ${s.coins} COINS</div><h2>A little more magic.</h2><div class="shop-list">${["speed","handling","braking"].map(c=>{const l=s.upgrades[c],u=l===0?60:120,d={speed:"Fly 10% faster per level",handling:"Turn 20% more responsively per level",braking:"Slow down 20% faster per level"}[c];return`<button data-upgrade="${c}" ${l===2||s.coins<u?"disabled":""}><span><b>${c[0].toUpperCase()+c.slice(1)}</b><small>${d} · ${l}/2</small></span><strong>${l===2?"Mastered":`${u} coins`}</strong></button>`}).join("")}</div>`),t.homePanel==="decor"&&(a=`<div class="eyebrow">THE HOME CATALOGUE · ${s.coins} COINS</div><h2>Make yourself at home.</h2><div class="shop-list">${nl.map(c=>`<button data-furnish="${c.id}" ${s.furniture.includes(c.id)||s.coins<c.cost?"disabled":""}><span><b>${c.name}</b><small>${c.description}</small></span><strong>${s.furniture.includes(c.id)?"At home":`${c.cost} coins`}</strong></button>`).join("")}</div>`),t.homePanel==="cat"&&(a='<div class="eyebrow">PUMPKIN’S CORNER</div><h2>A very good copilot.</h2><p>Pumpkin leans into your hand and purrs. The best part of any delivery day is coming home together.</p><div class="purr">♡ purr… purr… ♡</div>'),this.root.innerHTML=`<section class="menu-card panel room-menu">${a}<button class="secondary-button" data-action="close">Back to your room</button></section>`}}function cf(n,t,e){return t?!1:n==="flight"||n==="tutorial"?!0:n==="home"&&e==="none"}function lf(n){return n.haloFade>0||n.descent!=null||n.drop!=null}class Vy{constructor(t){ft(this,"root");this.root=document.createElement("div"),this.root.className="touch-controls",this.root.id="touch-controls",this.root.innerHTML='<div id="joystick" class="joystick" hidden><i></i></div>',t.append(this.root)}render(t){this.root.hidden=lf(t)||!cf(t.mode,t.paused,t.homePanel)}}const rr="megs-delivery-save-v1",Wy=["title","tutorial","flight","offers","home","summary"],Xy=["none","jobs","brooms","decor","cat"],tl=new Set(Pe.map(n=>n.id)),Hh=new Set(["rug","plant","shelf","lamp","cushion","cat-tree"]),qy=new Set([20,35,50]),Yy=1e5,Xn=n=>typeof n=="object"&&n!==null&&!Array.isArray(n),dn=(n,t=-1/0,e=1/0)=>typeof n=="number"&&Number.isFinite(n)&&n>=t&&n<=e,Dn=(n,t=0,e=Number.MAX_SAFE_INTEGER)=>Number.isInteger(n)&&dn(n,t,e),Vi=(n,t=160)=>typeof n=="string"&&n.length<=t,Gh=(n,t=500)=>Xn(n)&&dn(n.x,-t,t)&&dn(n.y,-t,t)&&dn(n.z,-t,t);function Vh(n){return!Xn(n)||!Vi(n.from,64)||!Vi(n.to,64)||!tl.has(n.from)||!tl.has(n.to)||n.from===n.to||!qy.has(n.payout)||!Vi(n.label,80)||!Vi(n.parcel,100)?null:{from:n.from,to:n.to,payout:n.payout,label:n.label,parcel:n.parcel}}function Zy(n){return!Xn(n)||!Dn(n.coins)||!Xn(n.upgrades)||!Dn(n.upgrades.speed,0,2)||!Dn(n.upgrades.handling,0,2)||!Dn(n.upgrades.braking,0,2)||!Array.isArray(n.furniture)||n.furniture.length>Hh.size||!n.furniture.every(t=>typeof t=="string"&&Hh.has(t))||new Set(n.furniture).size!==n.furniture.length||typeof n.tutorialDone!="boolean"||!Dn(n.runs)||!Dn(n.deliveries)?null:{coins:n.coins,upgrades:{speed:n.upgrades.speed,handling:n.upgrades.handling,braking:n.upgrades.braking},furniture:[...n.furniture],tutorialDone:n.tutorialDone,runs:n.runs,deliveries:n.deliveries}}function $y(n){if(n===null)return null;if(!Xn(n)||!Dn(n.seed,-Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)||!dn(n.elapsed,0,480)||!dn(n.earnings,0)||!Dn(n.deliveries)||typeof n.returning!="boolean"||!Vi(n.lastStop,64)||!tl.has(n.lastStop)||!Array.isArray(n.offers)||n.offers.length>2)return;const t=n.job===null?null:Vh(n.job),e=n.offers.map(Vh);if(!(n.job!==null&&!t||e.some(i=>!i)||new Set(e.map(i=>i.to)).size!==e.length))return{seed:n.seed,elapsed:n.elapsed,earnings:n.earnings,deliveries:n.deliveries,job:t,offers:e,returning:n.returning,lastStop:n.lastStop}}function Wa(n){if(typeof n!="string"||n.length>Yy)return null;let t;try{t=JSON.parse(n)}catch{return null}if(!Xn(t)||t.version!==1||!Xn(t.state))return null;const e=t.state;if(!Wy.includes(e.mode)||!Xn(e.player)||!Gh(e.player.position)||!dn(e.player.yaw)||!dn(e.player.pitch,-Math.PI/2,Math.PI/2)||!dn(e.player.speed,0,30)||!dn(e.player.throttle,0,30)||typeof e.player.hover!="boolean"||!Gh(e.player.velocity,50))return null;const i=Zy(e.profile),s=$y(e.run),r=e.homeFacing===void 0?0:e.homeFacing,o=e.homePanel===void 0?"none":e.homePanel;if(!i||s===void 0||typeof e.paused!="boolean"||!Vi(e.pauseReason)||!Vi(e.message,500)||!Dn(e.tutorialStage,0,10)||!Xn(e.homePosition)||!dn(e.homePosition.x)||!dn(e.homePosition.z)||!dn(r,-10,10)||!Xy.includes(o)||!Dn(e.revision))return null;let a=null;if(e.summary!==null){if(!Xn(e.summary)||typeof e.summary.success!="boolean"||!dn(e.summary.earnings,0)||!Dn(e.summary.deliveries))return null;a={success:e.summary.success,earnings:e.summary.earnings,deliveries:e.summary.deliveries}}const c=e.mode;if((c==="title"||c==="tutorial"||c==="home"||c==="summary")&&s!==null||c==="flight"&&(!s||!s.job&&!s.returning)||c==="offers"&&(!s||s.job!==null||s.returning||s.offers.length!==2)||c==="summary"&&!a||c!=="summary"&&a||c==="home"&&(Math.abs(e.homePosition.x)>8||Math.abs(e.homePosition.z)>6))return null;const l={position:{...e.player.position},yaw:e.player.yaw,pitch:e.player.pitch,speed:e.player.speed,throttle:e.player.throttle,hover:!1,velocity:{...e.player.velocity},brakeHold:e.player.brakeHold===!0},u={mode:c,player:l,profile:i,run:s,paused:e.paused,pauseReason:e.pauseReason,message:e.message,tutorialStage:e.tutorialStage,homePosition:{x:e.homePosition.x,z:e.homePosition.z},homeFacing:r,homePanel:o,summary:a,revision:e.revision};return u.drop=null,u.descent=null,u.haloFade=0,(u.mode==="tutorial"||u.mode==="flight"||u.mode==="offers")&&(u.paused=!0,u.pauseReason="Welcome back"),(u.mode==="title"||u.mode==="home")&&(u.paused=!1,u.pauseReason=""),u}function Ky(n){return JSON.stringify({version:1,state:n})}class Jy{constructor(){ft(this,"releaseLock");ft(this,"generation",0);ft(this,"writable",!1);ft(this,"status","");ft(this,"memory")}get message(){return this.status}get canSave(){return this.writable}async acquire(){this.release();const t=++this.generation,e=this.storage();if(!e)return this.session("Saved games are unavailable in this browser.");const i=typeof navigator>"u"?void 0:navigator.locks;if(!i)try{const s=e.getItem(rr),r=s===null?void 0:Wa(s);return s!==null&&!r?(this.status="Saved game could not be read. It was left untouched.",{kind:"invalid",message:this.status}):this.session("This browser cannot safely share saved games; playing in this tab only.",r??void 0)}catch{return this.session("Saved games are unavailable in this browser.")}return new Promise(s=>{i.request("megs-delivery-save",{ifAvailable:!0},r=>{var u;if(t!==this.generation||!r){s({kind:"readonly",message:"Saved game is open in another tab. Retry after closing it."});return}let o;const a=new Promise(d=>{o=d});this.releaseLock=()=>{this.releaseLock=void 0,this.writable=!1,o()};let c;try{c=e.getItem(rr)}catch{return(u=this.releaseLock)==null||u.call(this),s(this.session("Saved games are unavailable in this browser.")),a}const l=c===null?void 0:Wa(c)??void 0;return c!==null&&!l?(this.status="Saved game could not be read. It was left untouched.",s({kind:"invalid",message:this.status}),a):(this.writable=!0,this.memory=l,this.status="Saved game ready.",s({kind:"ready",state:l,message:this.status}),a)}).catch(()=>s(this.session("Saved games are unavailable in this browser.")))})}save(t){if(!this.writable)return!1;const e=this.storage();if(!e)return this.writable=!1,this.status="Saving is unavailable in this browser.",!1;try{return e.setItem(rr,Ky(t)),this.memory=t,this.status="Saved.",!0}catch{return this.memory=t,this.writable=!1,this.status="Could not save; progress remains in this tab.",!1}}release(){var t;this.generation++,(t=this.releaseLock)==null||t.call(this),this.writable=!1}continueSession(){this.release(),this.memory=void 0,this.status="Continuing with a fresh session."}discardUnreadable(){try{const t=this.storage(),e=t==null?void 0:t.getItem(rr);e!=null&&!Wa(e)&&(t==null||t.removeItem(rr))}catch{}this.writable=!0,this.memory=void 0,this.status="Discarded the unreadable save."}storage(){try{return typeof localStorage>"u"?void 0:localStorage}catch{return}}session(t,e){return this.writable=!1,this.memory=e,this.status=t,{kind:"session",state:e,message:t}}}class Qy{constructor(){ft(this,"context");ft(this,"master");ft(this,"ambience");ft(this,"ambienceSources",[]);ft(this,"tones",new Set);ft(this,"muted",!0);ft(this,"disposed",!1);ft(this,"snapshot");ft(this,"nextNote",0);ft(this,"lastActive",!1);ft(this,"operationPending",!1)}setMuted(t){this.disposed||(this.muted=t,!(!t&&!this.ensureContext())&&this.reconcile())}update(t,e){const i=this.snapshot,s=this.takeSnapshot(t);this.snapshot=s,this.lastActive=!(e||t.paused||typeof document<"u"&&document.hidden),!(this.muted||this.disposed||!this.context)&&(this.reconcile(),!(!this.canPlay()||this.context.state!=="running")&&(this.playMelody(),i&&(s.deliveries>i.deliveries&&this.deliveryCue(),s.coins<i.coins&&(s.upgrades!==i.upgrades||s.furniture!==i.furniture)&&this.purchaseCue(),i.homePanel!=="cat"&&s.homePanel==="cat"&&this.purrCue())))}dispose(){if(!this.disposed){this.disposed=!0,this.lastActive=!1,this.clearAmbience();for(const t of this.tones){try{t.stop()}catch{}t.disconnect()}this.tones.clear(),this.context&&this.context.state!=="closed"&&this.context.close().catch(()=>{}),this.context=void 0,this.master=void 0}}debugState(){var t;return{context:((t=this.context)==null?void 0:t.state)??"unavailable",muted:this.muted}}ensureContext(){if(this.context)return this.context;const t=typeof window>"u"?void 0:window.AudioContext||window.webkitAudioContext;if(t)try{const e=new t,i=e.createGain();return i.gain.value=1e-4,i.connect(e.destination),this.context=e,this.master=i,e}catch{return}}canPlay(){return!this.disposed&&!this.muted&&this.lastActive}reconcile(){const t=this.context;if(!t||t.state==="closed")return;const e=this.canPlay();if(e&&t.state==="running"){this.startAmbience();return}if(!e&&this.master){const s=t.currentTime;this.master.gain.cancelScheduledValues(s),this.master.gain.setTargetAtTime(1e-4,s,.025)}if(this.operationPending||(e?t.state!=="suspended":t.state!=="running"))return;this.operationPending=!0,(e?t.resume.bind(t):t.suspend.bind(t))().catch(()=>{}).then(()=>{this.operationPending=!1,this.canPlay()&&t.state==="running"&&this.startAmbience(),this.reconcile()})}startAmbience(){const t=this.context,e=this.master;if(!t||!e||t.state!=="running"||!this.canPlay())return;const i=t.currentTime;if(e.gain.cancelScheduledValues(i),e.gain.setTargetAtTime(.14,i,.08),this.ambience)return;const s=t.createGain(),r=t.createOscillator(),o=t.createOscillator(),a=t.createGain();s.gain.value=.035,s.connect(e),r.type="sine",r.frequency.value=82,o.type="sine",o.frequency.value=.09,a.gain.value=11,o.connect(a).connect(r.frequency),r.connect(s),r.start(),o.start(),this.ambience=s,this.ambienceSources=[r,o]}clearAmbience(){var t;for(const e of this.ambienceSources){try{e.stop()}catch{}e.disconnect()}this.ambienceSources=[],(t=this.ambience)==null||t.disconnect(),this.ambience=void 0}playMelody(){const t=this.context;if(!t||t.currentTime<this.nextNote)return;const e=[261.63,329.63,392,523.25,440,329.63];this.tone(e[Math.floor(t.currentTime*1.7%e.length)],.11,.045,"sine"),this.nextNote=t.currentTime+1.45}deliveryCue(){this.tone(659.25,.08,.09,"triangle"),this.tone(783.99,.19,.07,"triangle",.09)}purchaseCue(){this.tone(523.25,.06,.08,"sine"),this.tone(783.99,.16,.075,"sine",.07)}purrCue(){this.tone(110,.48,.055,"sine"),this.tone(164.81,.42,.035,"sine",.08)}tone(t,e,i,s,r=0){const o=this.context,a=this.master;if(!o||!a||o.state!=="running"||!this.canPlay())return;const c=o.currentTime+r,l=o.createOscillator(),u=o.createGain();l.type=s,l.frequency.value=t,u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(i,c+.018),u.gain.exponentialRampToValueAtTime(1e-4,c+e),l.connect(u).connect(a),this.tones.add(l),l.onended=()=>{this.tones.delete(l),l.disconnect(),u.disconnect()},l.start(c),l.stop(c+e+.03)}takeSnapshot(t){var e;return{deliveries:Math.max(t.profile.deliveries,((e=t.run)==null?void 0:e.deliveries)??0),coins:t.profile.coins,upgrades:`${t.profile.upgrades.speed}:${t.profile.upgrades.handling}:${t.profile.upgrades.braking}`,furniture:t.profile.furniture.join("|"),homePanel:t.homePanel}}}const Qo=document.querySelector("#game"),Nr=document.querySelector("#app"),jy=new URLSearchParams(location.search),Ul=jy.get("test")==="1";let Pt=cl(),To=!0,Wo=matchMedia("(pointer: coarse)").matches;const Fl=matchMedia("(pointer: coarse)").matches;Pt.coarsePointer=Fl;let Mr=matchMedia("(prefers-reduced-motion: reduce)").matches,Ir,Ee,ai=0,Ao=0,ks=!1;const Ls=new Jy,jo=new Qy;let Le=!1,ci="loading",Is="Opening your little world…",yr=null,Wh;function t1(n,t=8e3){yr=n,clearTimeout(Wh),Wh=setTimeout(()=>{yr=null,_e(0)},t)}let Xa=0;function Ur(n="Take a little breather."){id(Pt,!0,n),Ee==null||Ee.clear(),ai=0,Ge(),_e(0)}function el(){!Le||document.hidden||ks||(id(Pt,!1),Ee==null||Ee.clear(),ai=0,Ao=performance.now(),Ge(),_e(0))}function uf(){var n,t,e;document.fullscreenElement?(n=document.exitFullscreen)==null||n.call(document):(e=(t=document.documentElement).requestFullscreen)==null||e.call(t).catch(()=>{})}const e1=new ky(Nr,{start(){var n;Le&&(Pt.profile.tutorialDone?Za(Pt):Mp(Pt),Ee==null||Ee.clear(),(n=document.activeElement)==null||n.blur(),Ge(),_e(0))},pause:()=>Ur(),resume:el,unstuck(){if(!Le)return;const n=Pt.player.position;let t=Pe[0],e=1/0;for(const i of Pe){const s=(i.position.x-n.x)**2+(i.position.z-n.z)**2;s<e&&(e=s,t=i)}Pt.player.position={x:t.position.x,y:t.position.y+5,z:t.position.z},Pt.player.velocity={x:0,y:0,z:0},Pt.player.speed=0,Pt.player.throttle=0,el(),Ee==null||Ee.clear(),Ge(),_e(0)},mute(){To=!To,jo.setMuted(To),_e(0)},quality(){Wo=!Wo,_e(0)},motion(){Mr=!Mr,_e(0)},fullscreen:uf,chooseJob(n){Le&&(Ep(Pt,n),Ee.clear(),Ge(),_e(0))},returnHome(){Le&&(Tp(Pt),Ee.clear(),Ge(),_e(0))},nextDay(){Le&&(Za(Pt),Ee.clear(),Ge(),_e(0))}}),n1=new Gy(Nr,{interact(){Le&&(sd(Pt),Ee.clear(),Ge(),_e(0))},close(){Le&&(qh(Pt),Ee.clear(),Ge(),_e(0))},start(){Le&&(wp(Pt,Ul?42:void 0),Ee.clear(),Ge(),_e(0))},upgrade(n){Le&&(Tf(Pt,n),Ge(),_e(0))},furnish(n){Le&&(Af(Pt,n),Ge(),_e(0))}}),i1=new Vy(Nr),ri=document.createElement("aside");ri.className="save-status";ri.setAttribute("aria-live","polite");Nr.append(ri);ri.addEventListener("click",n=>{const t=n.target.closest("button");(t==null?void 0:t.dataset.save)==="retry"&&Ol()});try{Ir=new Ny(Qo)}catch{throw Nr.innerHTML='<main class="compatibility"><h1>A little more sky, please.</h1><p>Meg needs a browser with WebGL 2 and hardware acceleration. Try a current browser with graphics acceleration enabled.</p></main>',new Error("WebGL 2 is unavailable.")}Ee=new Hy(Qo,{hover:()=>{Le&&(yp(Pt),Ge(),_e(0))},interact:()=>{!Le||Pt.mode!=="home"||(sd(Pt),Ge(),_e(0))},pause:()=>{Le&&(Pt.mode==="home"&&Pt.homePanel!=="none"?(qh(Pt),Ge(),_e(0)):Pt.paused?el():Ur())},fullscreen:uf},()=>Fl&&!lf(Pt)&&cf(Pt.mode,Pt.paused,Pt.homePanel));function Ge(){!Le||!Ls.canSave||Ls.save(Pt)||(ci="session",Is=Ls.message)}async function Ol(){Le=!1,ci="loading",Is="Opening your little world…",_e(0);const n=await Ls.acquire();if(n.kind==="invalid"){Ls.discardUnreadable(),Pt=cl(),Pt.coarsePointer=Fl,Le=!0,ci="ready",Is="",Ge(),t1("Your saved game could not be read, so it was discarded and a new game was started."),Ee==null||Ee.clear(),ai=0,_e(0);return}ci=n.kind,Is=n.message,n.state&&(Pt=n.state),Le=n.kind==="ready"||n.kind==="session",Ee==null||Ee.clear(),ai=0,_e(0)}function _e(n){if(jo.update(Pt,!Le||ks),document.body.classList.toggle("reduced-motion",Mr),!Ir||ks)return;Ir.render(Pt,n,{reducedMotion:Mr,lowQuality:Wo});const t=od(Pt)??Pe[0];e1.render(Pt,{muted:To,lowQuality:Wo,reducedMotion:Mr,targetName:t.name,targetDistance:Math.hypot(t.position.x-Pt.player.position.x,t.position.z-Pt.player.position.z),targetBearing:Ap(Pt.player.position,t.position,Pt.player.yaw),speed:Pt.player.speed,status:"",timeRemaining:Pt.run?Math.max(0,480-Pt.run.elapsed):void 0}),n1.render(Pt),i1.render(Pt),Le||(document.querySelector(".home-interface").hidden=!0),Pt.mode==="home"&&(document.querySelector("#flight-hud").hidden=!0),document.querySelector("#start-btn").disabled=!Le,Pt.profile.tutorialDone&&(document.querySelector("#start-btn").innerHTML="Come on in <span>→</span>"),document.querySelector("#next-day-btn").innerHTML="Back to your room <span>→</span>",document.querySelector(".sun-pill").hidden=!Pt.run,ri.hidden=ci==="ready"&&yr===null;const e=ci+Is+(yr??"");ri.dataset.key!==e&&(ri.dataset.key=e,ri.textContent=ci==="ready"?yr??"":Is,ci==="readonly"&&ri.insertAdjacentHTML("beforeend",'<br><button data-save="retry">Retry</button>'))}function hf(n){if(!Le||Pt.paused||document.hidden||ks){ai=0,_e(0);return}const t=Pt.mode;for(ai+=Math.max(0,n)/1e3;ai+1e-10>=1/60;)Ip(Pt,Ee.sample(),1/60),ai-=1/60;Xa+=n,(Xa>=5e3||t!==Pt.mode)&&(Ge(),Xa=0),_e(Math.min(n/1e3,.1))}function df(n){const t=Ao?Math.min(n-Ao,100):0;Ao=n,Ul||hf(t),requestAnimationFrame(df)}window.addEventListener("resize",()=>{Ir.resize(),_e(0)});document.addEventListener("visibilitychange",()=>{document.hidden&&Ur("Welcome back. Ready to fly?")});window.addEventListener("blur",()=>{Ee.clear(),Pt.mode!=="title"&&Ur()});Qo.addEventListener("webglcontextlost",n=>{n.preventDefault(),Ur("The sky is taking a moment."),ks=!0});Qo.addEventListener("webglcontextrestored",()=>{ks=!1,_e(0)});window.addEventListener("pagehide",()=>{Ge(),Le=!1,jo.update(Pt,!0),Ls.release()});window.addEventListener("pageshow",n=>{n.persisted&&Ol()});Object.assign(window,{advanceTime:n=>hf(n),render_game_to_text:()=>{var n,t;return JSON.stringify({coordinates:"x right/east, y up, z south; yaw 0 faces -z",mode:Pt.mode,paused:Pt.paused,player:Pt.player,tutorialStage:Pt.tutorialStage,message:Pt.message,run:Pt.run,profile:Pt.profile,stops:Pe,nearby:((n=Sr(Pt))==null?void 0:n.id)??null,homePosition:Pt.homePosition,homePanel:Pt.homePanel,station:(t=sl(Pt))==null?void 0:t.id,saveKind:ci})}});Ul&&Object.assign(window,{__game:{get state(){return Pt},get ready(){return Le},reset(){Pt=cl(),ai=0,_e(0)},draw:()=>_e(0),audio:()=>jo.debugState(),persist:Ge,renderer:()=>Ir}});_e(0);requestAnimationFrame(df);Ol();
