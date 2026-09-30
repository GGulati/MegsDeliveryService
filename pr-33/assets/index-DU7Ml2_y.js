var Bf=Object.defineProperty;var kf=(n,t,e)=>t in n?Bf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var lt=(n,t,e)=>kf(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const ad=[{id:"jobs",name:"Job Board",x:-5,z:-3},{id:"brooms",name:"Broom Workshop",x:5,z:-3},{id:"decor",name:"Decor Corner",x:-5,z:3},{id:"cat",name:"Pumpkin",x:4,z:3}],dl=[{id:"rug",name:"Woven Rug",cost:30,description:"A soft landing for tired feet."},{id:"plant",name:"Moonleaf Plant",cost:40,description:"A little green for Meg's room."},{id:"shelf",name:"Parcel Shelf",cost:50,description:"A home for souvenirs and parcels."},{id:"lamp",name:"Warm Lamp",cost:60,description:"A cozy glow after a long shift."},{id:"cushion",name:"Window Cushion",cost:70,description:"The perfect reading nook."},{id:"cat-tree",name:"Cat Tree",cost:80,description:"Pumpkin's new favorite perch."}],fl=[{id:"speed",name:"Swift Bristles",description:"Raises top speed by 10% per level."},{id:"handling",name:"Responsive Handle",description:"Raises turn rate by 20% per level."},{id:"braking",name:"Cloud Brake",description:"Raises hover braking by 20% per level."}],ic=7.5,sc=5.5,Hf=2.4,Gf=3.5,kr=(n,t,e)=>Math.max(t,Math.min(e,n));function rc(n){n.mode="home",n.run=null,n.paused=!1,n.pauseReason="",n.homePosition={x:0,z:3},n.homeFacing=0,n.homePanel="none",n.message="Back at Meg's room.",n.revision++}function cd(n){n.mode!=="home"||n.homePanel==="none"||(n.homePanel="none",n.revision++)}function pl(n){if(n.mode==="home")return ad.find(t=>Math.hypot(n.homePosition.x-t.x,n.homePosition.z-t.z)<=Hf)}function Vf(n){if(n.mode!=="home"||n.paused)return;const t=pl(n);t&&(n.homePanel=t.id,n.message=t.id==="cat"?"Pumpkin purrs.":`${t.name} opened.`,n.revision++)}function Wf(n,t,e){if(n.mode!=="home"||n.paused||n.homePanel!=="none"||!Number.isFinite(e)||e<=0)return;const i=kr(t.turn,-1,1),s=-kr(t.climb,-1,1),r=Math.hypot(i,s);if(r>0){const o=Gf*e/Math.max(1,r);n.homePosition.x=kr(n.homePosition.x+i*o,-ic,ic),n.homePosition.z=kr(n.homePosition.z+s*o,-sc,sc),n.homeFacing=Math.atan2(i,s)}n.revision++}function Xf(n,t){if(n.paused||n.mode!=="home"||n.homePanel!=="brooms"||!Zf(t))return!1;const e=n.profile.upgrades[t];if(e>=2)return!1;const i=e===0?60:120;return n.profile.coins<i?!1:(n.profile.coins-=i,n.profile.upgrades[t]=e+1,n.message=`${fl.find(s=>s.id===t).name} upgraded.`,n.revision++,!0)}function qf(n,t){if(n.paused||n.mode!=="home"||n.homePanel!=="decor")return!1;const e=dl.find(i=>i.id===t);return!e||n.profile.furniture.includes(t)||n.profile.coins<e.cost?!1:(n.profile.coins-=e.cost,n.profile.furniture.push(t),n.message=`${e.name} added to the room.`,n.revision++,!0)}function Yf(n){return dl.every(t=>n.furniture.includes(t.id))&&fl.every(t=>n.upgrades[t.id]>=2)}function Zf(n){return fl.some(t=>t.id===n)}const cr=230,me=[-40,-195,40,-155],is=[[20,-25],[30,-18],[40,-5],[46,12],[50,30],[54,50],[56,70],[60,90],[63,105],[66,120],[70,140],[76,160],[82,180],[88,200],[95,220],[45,220],[40,200],[34,180],[26,160],[16,140],[6,120],[-2,100],[-8,82],[-14,65],[-18,45],[-20,25],[-16,5],[-6,-12],[6,-22]];function cn(n,t){let e=!1;for(let i=0,s=is.length-1;i<is.length;s=i++){const r=is[i][0],o=is[i][1],a=is[s][0],c=is[s][1];o>t!=c>t&&n<(a-r)*(t-o)/(c-o)+r&&(e=!e)}return e}const $f=24,Kf=8,uu=[[-11,50],[-6,70],[1,90],[49,60],[50,80],[50,120]],Jf=[[-11,58],[-6,78],[1,82],[50,68],[50,88],[50,128]],Gi=[[-86.5,-191.5,-60,-163.5],[-60,-191.5,-33.5,-163.5]],Pe=[{id:"home",name:"Bakery Attic",subtitle:"Home — borrowed attic",position:{x:-25,y:30,z:-48},color:"#f9cf68"},{id:"harbor-cafe",name:"Harbor Cafe",subtitle:"Tutorial delivery",position:{x:-80,y:18.12,z:150},color:"#63c7dc"},{id:"market",name:"Sunset Market",subtitle:"Fresh parcels",position:{x:-88,y:33,z:-88},color:"#e88869"},{id:"lighthouse",name:"The Lighthouse",subtitle:"Beacon House",position:{x:130,y:15,z:140},color:"#f4e5b8"},{id:"marina",name:"Marina Works",subtitle:"Dockside roof",position:{x:102,y:20,z:125},color:"#79b9a0"},{id:"observatory",name:"Hill Observatory",subtitle:"East hill pad",position:{x:130,y:53,z:-55},color:"#ad91d1"},{id:"cliffside",name:"Cliffside Books",subtitle:"West avenue",position:{x:-115,y:46,z:-177.5},color:"#db92a7"}],ln=[{min:{x:-37,y:10,z:-60},max:{x:-13,y:28,z:-36},district:"merchant-row"},{min:{x:-94,y:.12,z:136},max:{x:-66,y:16.12,z:164},district:"harbor"},{min:{x:-103,y:10,z:-102},max:{x:-73,y:31,z:-74},district:"old-town"},{min:{x:120,y:0,z:130},max:{x:140,y:13,z:150},district:"lighthouse-headland"},{min:{x:87,y:0,z:110},max:{x:117,y:18,z:140},district:"harbor"},{min:{x:115,y:20,z:-70},max:{x:145,y:51,z:-40},district:"observatory-rise"},{min:{x:-130,y:20,z:-192.5},max:{x:-100,y:44,z:-162.5},district:"bungalow-lanes"},{min:{x:-65,y:0,z:88},max:{x:-45,y:10,z:108},district:"harbor"},{min:{x:-65,y:0,z:38},max:{x:-45,y:12,z:58},district:"harbor"},{min:{x:94,y:0,z:61},max:{x:110,y:10,z:79},district:"harbor"},{min:{x:92,y:0,z:10},max:{x:112,y:12,z:30},district:"harbor"},{min:{x:-50,y:10,z:-98.5},max:{x:-30,y:25,z:-78.5},district:"old-town"},{min:{x:-10,y:10,z:-98.5},max:{x:10,y:25,z:-78.5},district:"old-town"},{min:{x:30,y:10,z:-98.5},max:{x:50,y:26,z:-78.5},district:"old-town"},{min:{x:-50,y:9.19,z:-130.5},max:{x:-30,y:25.19,z:-113.5},district:"old-town"},{min:{x:22.5,y:10,z:-55},max:{x:37.5,y:21,z:-41},district:"merchant-row"},{min:{x:-2.5,y:10,z:-55.5},max:{x:12.5,y:21,z:-40.5},district:"merchant-row"},{min:{x:-80,y:20,z:-187.5},max:{x:-60,y:34,z:-167.5},district:"mansion-hill"},{min:{x:-57.5,y:20,z:-187.5},max:{x:-42.5,y:34,z:-167.5},district:"mansion-hill"},{min:{x:42.5,y:20,z:-185},max:{x:57.5,y:28,z:-170},district:"bungalow-lanes"},{min:{x:60.5,y:20,z:-185},max:{x:75.5,y:27,z:-170},district:"bungalow-lanes"},{min:{x:-122.5,y:19.28,z:-157},max:{x:-107.5,y:27.28,z:-143},district:"bungalow-lanes"},{min:{x:133.5,y:19.26,z:-97.5},max:{x:146.5,y:33.26,z:-82.5},district:"observatory-rise"},{min:{x:-55,y:10,z:-53},max:{x:-45,y:38,z:-43},district:"old-town"},{min:{x:117.5,y:48.5,z:-67.5},max:{x:126.5,y:57,z:-58.5},district:"observatory-rise"},{min:{x:125,y:-.22,z:153},max:{x:135,y:28.78,z:163}}],Hr={harbor:{bodies:[4873579,7043714,6048314,12099704],roofs:[3820117,3095365]},"old-town":{bodies:[13935988,15258808,13219990],roofs:[11951167,4877148]},"merchant-row":{bodies:[11065544,16049320,15247544,15784120],roofs:[9132602,7031338]},"mansion-hill":{bodies:[15790312,10139802],roofs:[3817290]},"bungalow-lanes":{bodies:[8034923,9136970,11033674],roofs:[6048314,4865845]},"observatory-rise":{bodies:[9079442],roofs:[6064762,2767452]},"lighthouse-headland":{bodies:[15266024],roofs:[13948116]}},hu=ln.length-1,du=ln.length-3,fu=ln.length-2,Qf=[{min:{x:15,y:0,z:168},max:{x:100,y:100,z:172}}];function pu(n,t,e,i,s,r,o,a){const c=[],l=o/2;for(let u=0;u<a;u++){const d=u/a,h=(u+1)/a,f=n+(i-n)*d,g=n+(i-n)*h,_=t+(s-t)*d,m=t+(s-t)*h,p=e+(r-e)*d,S=e+(r-e)*h;c.push({min:{x:Math.min(f,g)-l,y:Math.min(p,S)-.5,z:Math.min(_,m)-l},max:{x:Math.max(f,g)+l,y:Math.max(p,S)+.5,z:Math.max(_,m)+l}})}return c}const jf=[{min:{x:-15,y:5.4,z:100-4.4},max:{x:73,y:6.8,z:100+4.4}},...pu(-25,70,0,-15,100,6,8.8,6),...pu(73,100,6,85,85,0,8.8,4)];function tp(n){let t=n>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const ep=.5*(Math.sqrt(3)-1),Ys=(3-Math.sqrt(3))/6;class ld{constructor(t){lt(this,"perm");const e=tp(t),i=new Uint8Array(256);for(let s=0;s<256;s++)i[s]=s;for(let s=255;s>0;s--){const r=Math.floor(e()*(s+1));[i[s],i[r]]=[i[r],i[s]]}this.perm=new Uint8Array(512);for(let s=0;s<512;s++)this.perm[s]=i[s&255]}noise(t,e){const i=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];let s=0,r=0,o=0;const a=(t+e)*ep,c=Math.floor(t+a),l=Math.floor(e+a),u=(c+l)*Ys,d=t-(c-u),h=e-(l-u);let f,g;d>h?(f=1,g=0):(f=0,g=1);const _=d-f+Ys,m=h-g+Ys,p=d-1+2*Ys,S=h-1+2*Ys,b=c&255,v=l&255;let A=.5-d*d-h*h;if(A>=0){A*=A;const x=i[this.perm[b+this.perm[v]]&7];s=A*A*(x[0]*d+x[1]*h)}let E=.5-_*_-m*m;if(E>=0){E*=E;const x=i[this.perm[b+f+this.perm[v+g]]&7];r=E*E*(x[0]*_+x[1]*m)}let w=.5-p*p-S*S;if(w>=0){w*=w;const x=i[this.perm[b+1+this.perm[v+1]]&7];o=w*w*(x[0]*p+x[1]*S)}return 70*(s+r+o)}}const ud=1337,np=new ld(ud),oc=new ld(ud+1);function hd(n,t,e=5){let i=0,s=.5,r=1;for(let o=0;o<e;o++)i+=s*np.noise(n*r,t*r),s*=.5,r*=2;return i}function ip(n,t,e,i){const s=oc.noise(n*e+5.2,t*e+1.3),r=oc.noise(n*e+1.7,t*e+9.1);return[n+s*i,t+r*i]}function Nn(n,t,e){const i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)}const ml=[{name:"waterfront",y:0,rects:[[-95,-15,5,175],[50,-35,150,175]]},{name:"midtown",y:10,rects:[[-115,-135,75,-15]]},{name:"upper",y:20,rects:[[-135,-215,135,-135],[55,-135,155,-35]]}];function zi(n,t){const e=175+oc.noise(n*.01+3.7,8.2)*35,i=Nn(e-15,e+45,t);let s=0;cn(n,t)?s=t<e+25?1:0:(cn(n+6,t)||cn(n-6,t)||cn(n,t+6)||cn(n,t-6))&&t<e+20&&(s=.45);const[r,o]=ip(n,t,.015,18),a=(hd(r*.02,o*.02)*.5+.5)*8,c=Math.hypot(n,t),l=Nn(145,175,c),u=a*l*(1-s);let d=0,h=0;for(const p of ml)for(const[S,b,v,A]of p.rects){const E=Nn(S-20,S+20,n)*(1-Nn(v-20,v+20,n)),w=Nn(b-20,b+20,t)*(1-Nn(A-20,A+20,t)),x=E*w;x>h&&(h=x,d=p.y)}const f=s<.5&&i<.5?1:0,g=d*h+u*(1-h),_=u*(1-f)+g*f,m=Math.min(s*-3.5,i*-12);return{h:_+m,bayT:s,oceanT:i,tierCover:h}}function Ee(n,t){return zi(n,t).h}const sp=[.918,.851,.659],rp=[.498,.682,.431],mu=[.541,.498,.447],op=[.72,.68,.52];function Gr(n,t,e){return[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e]}function gu(n,t){const{h:e,bayT:i,oceanT:s,tierCover:r}=zi(n,t);if(e<.2||e>4.5&&r<.5||i>0||s>.05)return!1;const o=1.5,a=(zi(n+o,t).h-zi(n-o,t).h)/(2*o),c=(zi(n,t+o).h-zi(n,t-o).h)/(2*o);return!(Math.hypot(a,c)>.5)}function ap(n){const t=new Float32Array(n*n),e=new Float32Array(n*n),i=new Float32Array(n*n),s=new Float32Array(n*n),r=440/(n-1);for(let a=0;a<n;a++)for(let c=0;c<n;c++){const l=(c/(n-1)-.5)*440,u=(.5-a/(n-1))*440,d=zi(l,u),h=a*n+c;t[h]=d.h,e[h]=d.bayT,i[h]=d.oceanT,s[h]=d.tierCover}const o=new Uint8ClampedArray(n*n*4);for(let a=0;a<n;a++)for(let c=0;c<n;c++){const l=a*n+c,u=(c/(n-1)-.5)*440,d=(.5-a/(n-1))*440,h=Math.max(1,Math.round(1.5/r)),f=t[a*n+Math.max(c-h,0)],g=t[a*n+Math.min(c+h,n-1)],_=t[Math.max(a-h,0)*n+c],m=t[Math.min(a+h,n-1)*n+c],p=Math.hypot((g-f)/(2*h*r),(m-_)/(2*h*r)),[S,b,v]=cp(t[l],e[l],i[l],p,u,d,s[l]),A=l*4;o[A]=S,o[A+1]=b,o[A+2]=v,o[A+3]=255}return o}function cp(n,t,e,i,s,r,o){const a=Math.max(t,Nn(.02,.25,e));let c=Gr(rp,mu,Nn(3,5.5,n)*(1-o));c=Gr(c,sp,a*Nn(-1.5,-.3,n));const l=Nn(-.8,-1.6,n);c=Gr(c,op,l);const u=Nn(.45,.75,i);u>0&&(c=Gr(c,mu,u));const d=1+hd(s*.08+11.3,r*.08+7.9,3)*.07;return[Math.round(c[0]*d*255),Math.round(c[1]*d*255),Math.round(c[2]*d*255)]}const zt=(n,t,e,i,s)=>({id:n,x:t,z:e,y:i,noIntersect:s}),gl=[zt("ww1",-75,10),zt("ww2",-75,70),zt("ww3",-75,130),zt("ww1b",-35,10),zt("ww2b",-35,70),zt("ww3b",-35,130),zt("we1",85,-10),zt("we2",85,50),zt("we3",85,85),zt("we1b",120,-10),zt("we2b",120,50),zt("bl-w",-15,100,6),zt("bl-e",73,100,6),zt("sw1",-75,-8),zt("sw2",-95,-25),zt("sw3",-65,-42),zt("sw4",-90,-58),zt("se1",85,-28),zt("se2",105,-45),zt("se3",75,-60),zt("se4",95,-75),zt("m1",-60,-72),zt("m2",-20,-72),zt("m3",20,-72),zt("m4",60,-72),zt("m5",-60,-105),zt("m6",-20,-105),zt("m7",20,-105),zt("m8",60,-105),zt("uc1",20,-120),zt("uc2",-5,-135),zt("uc3",15,-150),zt("uc2sb1",25,-137,void 0,!0),zt("uc2sb2",-5,-147,void 0,!0),zt("u1",-90,-160),zt("u2",-30,-160),zt("u3",30,-160),zt("u4",90,-160),zt("u5",90,-195),zt("u6",30,-195),zt("u7",-30,-195),zt("u8",-90,-195),zt("ob1",95,-100),zt("ob2",110,-70),zt("mn1",-100,-25),zt("mn2",-68,-25),zt("mn3",-20,-25),zt("mn4",20,-25),zt("mn5",60,-25),zt("ms1",-100,-120),zt("ms2",-60,-120),zt("ms3",-20,-120),zt("ms5",60,-120),zt("ue1",100,-160),zt("ue2",100,-195),zt("ui5",130,-160),zt("ob3",125,-100),zt("wx1",-25,10),zt("wx2",-25,70),zt("wx3",-15,130),zt("ex1",65,-10),zt("ex2",65,50),zt("ex3",65,110,0)],Tt=(n,t,e="street",i)=>({a:n,b:t,kind:e,deckY:i}),Ye=[Tt("ww1","ww2"),Tt("ww2","ww3"),Tt("ww1b","ww2b"),Tt("ww2b","ww3b"),Tt("ww1","ww1b"),Tt("ww2","ww2b"),Tt("ww3","ww3b"),Tt("we1","we2"),Tt("we2","we3"),Tt("we1b","we2b"),Tt("we1","we1b"),Tt("we2","we2b"),Tt("wx2","bl-w"),Tt("bl-w","bl-e","bridge",6),Tt("bl-e","we3"),Tt("ww1","sw1","switchback"),Tt("sw1","sw2","switchback"),Tt("sw2","sw3","switchback"),Tt("sw3","sw4","switchback"),Tt("sw4","m1","switchback"),Tt("we1","se1","switchback"),Tt("se2","se3","switchback"),Tt("se3","se4","switchback"),Tt("se4","m4","switchback"),Tt("m1","m2"),Tt("m2","m3"),Tt("m3","m4"),Tt("m5","m6"),Tt("m6","m7"),Tt("m7","m8"),Tt("m1","m5"),Tt("m2","m6"),Tt("m3","m7"),Tt("m4","m8"),Tt("m3","uc1","switchback"),Tt("uc1","uc2","switchback"),Tt("uc2","uc2sb1","switchback"),Tt("uc2sb1","uc2sb2","switchback"),Tt("uc2sb2","uc3","switchback"),Tt("uc3","u3","switchback"),Tt("se4","ob1"),Tt("ob1","ob2"),Tt("mn1","mn2"),Tt("mn2","mn3"),Tt("mn3","mn4"),Tt("mn4","mn5"),Tt("mn5","se1"),Tt("mn5","m4"),Tt("ms1","ms2"),Tt("ms3","uc1"),Tt("uc1","ms5"),Tt("ms2","m5"),Tt("uc1","m7"),Tt("u1","u2"),Tt("u2","u3"),Tt("u3","u4"),Tt("u4","u5"),Tt("u5","u6"),Tt("u6","u7"),Tt("u7","u8"),Tt("u8","u1"),Tt("u4","ue1"),Tt("ue1","ue2"),Tt("ue2","u5"),Tt("u4","ui5"),Tt("ob1","ob3"),Tt("wx1","wx2"),Tt("wx2","wx3"),Tt("ww1b","wx1"),Tt("ww2b","wx2"),Tt("ww3b","wx3"),Tt("ex1","ex2"),Tt("ex2","ex3"),Tt("we1","ex1"),Tt("we2","ex2")];Ye.filter(n=>n.kind==="bridge").map(n=>[n.a,n.b]);function ge(n){const t=gl.find(e=>e.id===n);if(!t)throw new Error(`unknown road node ${n}`);return t}function Ge(n){return{x:n.x,y:n.y??Ee(n.x,n.z),z:n.z}}function lp(){const n=new Map;for(const t of gl)n.set(t.id,[]);for(const t of Ye)n.get(t.a).push(t.b),n.get(t.b).push(t.a);return n}const up=1836670420,hp=110,mr=32,dp=.07;function vn(n){let t=n>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function fp(n){const t=vn(n),e=[];for(let i=0;i<hp;i++){const s=t()*dp,r=t()*mr,o=t()*mr;e.push({x:r,y:o,alpha:s})}return e}const pp=20260927,xu=5;function Fo(n,t,e,i){const s=n+e/2,r=t+i/2,o=[Ee(n,t),Ee(n+e,t),Ee(n,t+i),Ee(n+e,t+i),Ee(s,r)],a=Math.min(...o);return a<ac?null:{minH:a,maxH:Math.max(...o)}}const _u={harbor:{w:[9,16],d:[8,14],floors:[1,2],bayWindow:!1,palettes:[0]},"old-town":{w:[8,14],d:[8,12],floors:[2,4],bayWindow:!0,palettes:[0]},"merchant-row":{w:[8,14],d:[8,12],floors:[2,3],bayWindow:!0,palettes:[0]},"bungalow-lanes":{w:[8,12],d:[8,12],floors:[1,1],bayWindow:!1,palettes:[1,2,3,4]}},ac=-.4,mp=2.8,gp=.7,jn=mp+gp,Vr=2,ss=275,vu=3.4,Mu=4.4;function xi(n,t,e,i,s,r,o,a){return n<o&&e>s&&t<a&&i>r}function lr(n,t,e,i,s,r,o,a){const c=e-n,l=i-t,u=o-s,d=a-r,h=c*d-l*u;if(Math.abs(h)<1e-9)return!1;const f=((s-n)*d-(r-t)*u)/h,g=((s-n)*l-(r-t)*c)/h;return f>=0&&f<=1&&g>=0&&g<=1}function yu(n,t,e,i,s,r,o,a){return n>=s&&n<=o&&t>=r&&t<=a||e>=s&&e<=o&&i>=r&&i<=a?!0:lr(n,t,e,i,s,r,o,r)||lr(n,t,e,i,o,r,o,a)||lr(n,t,e,i,o,a,s,a)||lr(n,t,e,i,s,a,s,r)}function ha(n,t,e,i,s,r){const o=s-e,a=r-i,c=o*o+a*a,l=c>0?Math.max(0,Math.min(1,((n-e)*o+(t-i)*a)/c)):0,u=e+o*l-n,d=i+a*l-t;return u*u+d*d}function xp(n,t,e,i,s,r,o,a){const c=[[s,r,o,r],[o,r,o,a],[o,a,s,a],[s,a,s,r]];if(n>=s&&n<=o&&t>=r&&t<=a||e>=s&&e<=o&&i>=r&&i<=a)return 0;for(const[u,d,h,f]of c)if(lr(n,t,e,i,u,d,h,f))return 0;let l=1/0;for(const[u,d]of[[s,r],[o,r],[o,a],[s,a]])l=Math.min(l,ha(u,d,n,t,e,i));for(const[u,d,h,f]of c)l=Math.min(l,ha(n,t,u,d,h,f)),l=Math.min(l,ha(e,i,u,d,h,f));return Math.sqrt(l)}function Su(n,t){for(const e of ml)for(const[i,s,r,o]of e.rects)if(n>=i&&n<r&&t>=s&&t<o)return e}function bu(n,t,e,i,s,r,o){const a=Math.max(i,Math.min(n,r)),c=Math.max(s,Math.min(t,o)),l=n-a,u=t-c;return l*l+u*u<e*e}function Oo(){const n=vn(pp),t=[],e=ln.map(u=>({x0:u.min.x-Vr,z0:u.min.z-Vr,x1:u.max.x+Vr,z1:u.max.z+Vr})),i=ln[3],s=(i.min.x+i.max.x)/2,r=(i.min.z+i.max.z)/2,o=26,a=Ye.filter(u=>u.kind!=="bridge").map(u=>{const d=ge(u.a),h=ge(u.b);return{x0:d.x,z0:d.z,x1:h.x,z1:h.z}});let c=0;for(const u of Ye){if(u.kind==="bridge")continue;const d=ge(u.a),h=ge(u.b),f=h.x-d.x,g=h.z-d.z,_=Math.hypot(f,g);if(_<10)continue;const m=f/_,p=g/_,S=-p,b=m;let v=5;for(;v<_-5&&t.length<ss;){const A=d.x+m*v,E=d.z+p*v,w=Su(A,E);if(!w){v+=6;continue}const x=w.name==="waterfront"?"harbor":w.name==="midtown"?"midtown-mix":"bungalow-lanes",y=x==="midtown-mix"?c%2===0?"old-town":"merchant-row":x,T=_u[y],C=T.w[0]+n()*(T.w[1]-T.w[0]),I=T.d[0]+n()*(T.d[1]-T.d[0]),U=T.floors[0]+Math.floor(n()*(T.floors[1]-T.floors[0]+1)),z=T.palettes[Math.floor(n()*T.palettes.length)],L=n()<.5?1:-1,F=(C*Math.abs(m)+I*Math.abs(p))/2,N=(C*Math.abs(S)+I*Math.abs(b))/2;for(const k of[L,-L]){if(t.length>=ss)break;let V=!1;for(const q of[.5,2.5,4.5,6.5,8.5]){if(V||t.length>=ss)break;const W=jn+N+q,ut=A+S*k*W,Nt=E+b*k*W,wt=ut-C/2,Mt=Nt-I/2;if(!Su(ut,Nt)||Ee(ut,Nt)<ac||cn(wt,Mt)||cn(wt+C,Mt)||cn(wt,Mt+I)||cn(wt+C,Mt+I))continue;const K=Fo(wt,Mt,C,I);if(!K||K.maxH-K.minH>xu||xi(wt,Mt,wt+C,Mt+I,me[0],me[1],me[2],me[3])||Gi.some(pt=>xi(wt,Mt,wt+C,Mt+I,pt[0],pt[1],pt[2],pt[3]))||bu(s,r,o,wt,Mt,wt+C,Mt+I)||e.some(pt=>xi(wt,Mt,wt+C,Mt+I,pt.x0,pt.z0,pt.x1,pt.z1))||t.some(pt=>xi(wt,Mt,wt+C,Mt+I,pt.x,pt.z,pt.x+pt.w,pt.z+pt.d)))continue;const ct=wt-jn,nt=Mt-jn,Et=wt+C+jn,Ft=Mt+I+jn;a.some(pt=>yu(pt.x0,pt.z0,pt.x1,pt.z1,ct,nt,Et,Ft))||(x==="midtown-mix"&&c++,t.push({x:wt,z:Mt,w:C,d:I,h:Math.max(U*vu,Mu),floors:U,district:y,bayWindow:T.bayWindow,palette:z}),V=!0)}}v+=2*F+2}}const l=4;for(const u of ml)for(const[d,h,f,g]of u.rects){const _=u.name==="waterfront"?"harbor":u.name==="midtown"?"midtown-mix":"bungalow-lanes";for(let m=d+l/2;m<f&&t.length<ss;m+=l)for(let p=h+l/2;p<g&&t.length<ss;p+=l)for(let S=0;S<9&&t.length<ss;S++){const b=(n()-.5)*l*.9,v=(n()-.5)*l*.9,A=_==="midtown-mix"?c%2===0?"old-town":"merchant-row":_,E=_u[A],w=E.w[0]+n()*(E.w[1]-E.w[0]),x=E.d[0]+n()*(E.d[1]-E.d[0]),y=E.floors[0]+Math.floor(n()*(E.floors[1]-E.floors[0]+1)),T=E.palettes[Math.floor(n()*E.palettes.length)],C=m+b,I=p+v,U=C-w/2,z=I-x/2;let L=!1;for(const W of a)if(xp(W.x0,W.z0,W.x1,W.z1,U,z,U+w,z+x)<=15){L=!0;break}if(!L||Ee(C,I)<ac||cn(U,z)||cn(U+w,z)||cn(U,z+x)||cn(U+w,z+x))continue;const F=Fo(U,z,w,x);if(!F||F.maxH-F.minH>xu||xi(U,z,U+w,z+x,me[0],me[1],me[2],me[3])||Gi.some(W=>xi(U,z,U+w,z+x,W[0],W[1],W[2],W[3]))||bu(s,r,o,U,z,U+w,z+x)||e.some(W=>xi(U,z,U+w,z+x,W.x0,W.z0,W.x1,W.z1))||t.some(W=>xi(U,z,U+w,z+x,W.x,W.z,W.x+W.w,W.z+W.d)))continue;const N=U-jn,k=z-jn,V=U+w+jn,q=z+x+jn;a.some(W=>yu(W.x0,W.z0,W.x1,W.z1,N,k,V,q))||(_==="midtown-mix"&&c++,t.push({x:U,z,w,d:x,h:Math.max(y*vu,Mu),floors:y,district:A,bayWindow:E.bayWindow,palette:T}))}}return t}function dd(n){return n.map(t=>{const e=Fo(t.x,t.z,t.w,t.d),i=e?e.maxH:Ee(t.x+t.w/2,t.z+t.d/2);return{min:{x:t.x,y:i,z:t.z},max:{x:t.x+t.w,y:i+t.h,z:t.z+t.d},district:t.district}})}const $e=1,_p=3,vp=100,Mp=18,yp=2.2,Sp=7,bp=12,wp=dd(Oo()),fd=[...ln,...wp,...Qf,...jf],Ep=5,Tp=.5,ri=360,Ap=3.5,pd=.9,md=.45,Rp=3.5,Cp=1.5,Pp=3,Ip=.8,wu=.2,Lp=3,Dp=8,Np=2,gd=6;function Up(n,t){return Math.max(gd,Ep+Tp*n)*(1+t*.2)}const Eu=2,Fp=20,Op=.05,xd=.5,_d=3.6,Wn=(n,t,e)=>Math.max(t,Math.min(e,n)),cc=n=>{const t=Wn(n,0,1);return t*t*(3-2*t)},Tu=45;function zp(n,t){const e=Math.hypot(n.x,n.z),i=cr-$e-Tu;if(e<=i)return;const s=cc((e-i)/Tu),r=n.x/e,o=n.z/e,a=t.x*r+t.z*o;if(a<=0)return;const c=a*(1-s);t.x+=r*(c-a),t.z+=o*(c-a)}const Bp=n=>Math.hypot(n.x,n.y,n.z);function xl(n=Pe[0].position){return{position:{...n},yaw:0,pitch:0,speed:9,throttle:9,hover:!1,velocity:{x:0,y:0,z:-9},brakeHold:!1}}function _l(){return{mode:"title",player:xl(),profile:{coins:0,upgrades:{speed:0,handling:0,braking:0},furniture:[],tutorialDone:!1,runs:0,deliveries:0},run:null,paused:!1,pauseReason:"",message:"",tutorialStage:0,drop:null,descent:null,haloFade:0,homePosition:{x:0,z:3},homeFacing:0,homePanel:"none",summary:null,revision:0,coarsePointer:!1}}function kp(n){n.mode="tutorial",n.paused=!1,n.pauseReason="",n.player=xl(),n.tutorialStage=0,n.drop=null,n.descent=null,n.haloFade=0,n.message="Steer toward the glowing Harbor Cafe pad.",n.revision++}function Hp(n){n.paused||n.mode!=="tutorial"&&n.mode!=="flight"||(n.player.hover=!n.player.hover,n.revision++)}function vd(n,t,e=""){n.paused=t,n.pauseReason=t?e:"",n.revision++}function wr(n){const t=n.player;if(!(t.speed>=Ap))return Pe.find(e=>{const i=t.position.x-e.position.x,s=t.position.z-e.position.z;return Math.hypot(i,s)<=_d&&t.position.y>=e.position.y})}function Md(n){var e;if(n.paused)return;if(n.mode==="home"){Vf(n);return}if(n.drop||n.descent||n.haloFade>0)return;if(n.mode==="tutorial"){if(((e=wr(n))==null?void 0:e.id)!=="harbor-cafe")return;lc(n,Pe.find(i=>i.id==="harbor-cafe"));return}if(n.mode!=="flight"||!n.run)return;if(n.run.elapsed>=ri){Er(n,!1);return}const t=wr(n);t&&lc(n,t)}function Gp(n,t){n.player.brakeHold=!1,n.haloFade=0,n.drop={stopId:t.id,t:0,parcel:t.id!=="home"},yd(n),n.message=t.id==="home"?"Banking your earnings…":"Parcel away!",n.revision++}function yd(n){n.player.speed=0,n.player.hover=!0,n.player.velocity={x:0,y:0,z:0}}function Vp(n,t){var s;if(n.player.hover=!1,n.player.throttle=0,n.mode==="tutorial"){n.profile.tutorialDone=!0,n.message="Practice complete",n.mode="title",n.tutorialStage=3,n.revision++;return}const e=n.run;if(!e||e.elapsed>=ri){Er(n,!1);return}const i=Pe.find(r=>r.id===t);if(i){if(i.id==="home"){const r=e.earnings,o=e.deliveries;Er(n,!0),n.summary=null,rc(n),n.message=`Shift complete — banked ${r} coins after ${o} ${o===1?"delivery":"deliveries"}.`;return}((s=e.job)==null?void 0:s.to)===i.id&&(e.earnings+=e.job.payout,e.deliveries++,n.profile.deliveries++,e.job=null,e.lastStop=i.id,e.offers=bd(e.seed,e.deliveries,i.id),e.returning=!1,n.mode="offers",n.message="Delivered! Choose the next parcel or return home.",n.revision++)}}function Wp(n,t=Date.now()){if(n.paused||n.run||n.mode!=="title"&&n.mode!=="summary"&&n.mode!=="home")return;const e=Number.isFinite(t)?Math.floor(t):Date.now();n.player=xl(),n.run={seed:e,elapsed:0,earnings:0,deliveries:0,job:null,offers:bd(e,0,"home"),returning:!1,lastStop:"home"},n.summary=null,n.homePanel="none",n.drop=null,n.descent=null,n.haloFade=0,n.mode="offers",n.message="Choose your first delivery of the day.",n.revision++}function Xp(n,t){if(n.paused||n.mode!=="offers"||!n.run||!Number.isInteger(t))return;const e=n.run.offers[t];e&&(n.run.job=e,n.run.offers=[],n.run.returning=!1,n.mode="flight",n.message=`Delivery: ${Zp(e.to)}.`,n.revision++)}function qp(n){n.paused||n.mode!=="offers"||!n.run||n.run.deliveries===0||(n.run.job=null,n.run.offers=[],n.run.returning=!0,n.mode="flight",n.message="Return to Meg's Rooftop to bank your earnings.",n.revision++)}function Er(n,t){const e=n.run;if(!e)return;n.drop=null,n.descent=null,n.haloFade=0;const i=t?e.earnings:0;n.summary={success:t,earnings:i,deliveries:e.deliveries},t&&(n.profile.coins+=i),n.profile.runs++,n.run=null,n.mode="summary",n.player.speed=0,n.player.throttle=0,n.player.hover=!0,n.player.velocity={x:0,y:0,z:0},n.message=t?"Shift complete. Earnings banked!":"Rescue called. Unbanked earnings were lost.",n.revision++}function Sd(n){if(n.mode==="tutorial")return Pe.find(t=>t.id==="harbor-cafe");if(n.run)return Pe.find(t=>{var e;return t.id===(n.run.returning?"home":(e=n.run.job)==null?void 0:e.to)})}function Yp(n,t,e){return(Math.atan2(t.x-n.x,-(t.z-n.z))-e)*180/Math.PI}function Zp(n){var t;return((t=Pe.find(e=>e.id===n))==null?void 0:t.name)??n}function ea(n){if(!(n.drop||n.descent)&&!(n.mode!=="tutorial"&&n.mode!=="flight"))return Sd(n)}function Zs(n){let t=n|0;return t=Math.imul(t^t>>>16,73244475),t=Math.imul(t^t>>>16,73244475),(t^t>>>16)>>>0}function bd(n,t,e){let i=Zs(n^Zs(t)^Zs(e.length));const s=Pe.find(l=>l.id===e),r=Pe.filter(l=>l.id!=="home"&&l.id!==e).map(l=>({stop:l,distance:Math.hypot(l.position.x-s.position.x,l.position.z-s.position.z)})).sort((l,u)=>l.distance-u.distance);i=Zs(i+1);const o=r[i%Math.min(3,r.length)],a=r.slice(-Math.min(3,r.length));i=Zs(i+2);const c=a[i%a.length];return[o,c].sort((l,u)=>l.distance-u.distance).map(({stop:l,distance:u},d)=>{const h=u<100?20:u<180?35:50;return{from:e,to:l.id,payout:h,label:d===0?"Short hop":"Long haul",parcel:"Delivery parcel"}})}function $p(n,t){let e;for(const i of fd){const s={x:i.min.x-$e,y:i.min.y-$e,z:i.min.z-$e},r={x:i.max.x+$e,y:i.max.y+$e,z:i.max.z+$e};let o=-1e-9,a=1,c={x:0,y:0,z:0};for(const l of["x","y","z"]){const u=n[l],d=t[l];if(Math.abs(d)<1e-9){if(u<s[l]||u>r[l]){o=2;break}continue}const h=(s[l]-u)/d,f=(r[l]-u)/d,g=Math.min(h,f),_=Math.max(h,f);if(g>o&&(o=g,c={x:0,y:0,z:0},c[l]=h<f?-1:1),a=Math.min(a,_),o>a)break}o>=0&&o<=1&&o<=a&&(!e||o<e.t)&&(e={t:o,normal:c})}return e}function wd(n,t){var e;return n.mode==="tutorial"?t.id==="harbor-cafe":n.mode!=="flight"||!n.run?!1:t.id==="home"?n.run.returning&&!n.run.job:((e=n.run.job)==null?void 0:e.to)===t.id}function Kp(n){if(n.drop||n.descent||n.haloFade>0||n.mode!=="tutorial"&&n.mode!=="flight"||Math.abs(n.player.speed)>xd)return;const t=ea(n),e=t?wr(n):void 0;!e||e.id!==t.id||!wd(n,e)||(n.haloFade=md)}function Jp(n){const t=ea(n),e=t?wr(n):void 0;!e||e.id!==t.id||!wd(n,e)||Math.abs(n.player.speed)>xd||lc(n,e)}function lc(n,t){const e=n.player.position.x-t.position.x,i=n.player.position.z-t.position.z,s=Math.hypot(e,i),r=Math.atan2(i,e),o=Math.atan2(-Math.sin(r),-Math.cos(r)),a=Math.abs(Math.atan2(Math.sin(o-n.player.yaw),Math.cos(o-n.player.yaw)));n.descent={stopId:t.id,startY:n.player.position.y,angle:r,radius0:s,orbitR:Math.max(s,Pp),dir:a<=Math.PI/2?1:-1,t:0},n.player.brakeHold=!1,yd(n),n.message="Descending…",n.revision++}function Qp(n,t,e){if(n.mode==="home"){Wf(n,t,e);return}if(n.paused||n.mode!=="tutorial"&&n.mode!=="flight"&&n.mode!=="offers"||!Number.isFinite(e)||e<=0)return;if(n.drop){if(n.mode!=="flight"&&n.mode!=="tutorial")n.drop=null;else{if(n.drop.t+=Math.max(0,e),n.drop.t>=pd){const x=n.drop.stopId;n.drop=null,Vp(n,x)}n.revision++}return}const i=Math.max(0,e);if(n.haloFade>0&&(n.haloFade=Math.max(0,n.haloFade-i),n.haloFade===0&&Jp(n),n.revision++,n.haloFade>0||n.drop||n.descent))return;if(n.descent){const x=Pe.find(y=>y.id===n.descent.stopId);if(n.mode!=="flight"&&n.mode!=="tutorial"||!x)n.descent=null,n.player.hover=!1;else{const y=x.position.y+Rp;if(n.player.position.y-y<=.05)n.descent=null,Gp(n,x);else{const T=n.descent,C=n.player.position.x,I=n.player.position.z,U=Math.min(Dp,Math.max(Np,(n.player.position.y-y)*1.5));n.player.position.y=Math.max(y,n.player.position.y-U*i),T.t+=i,T.angle+=T.dir*Cp*i;const z=T.radius0+(T.orbitR-T.radius0)*cc(T.t/Ip),L=Math.max(0,(n.player.position.y-y)/Math.max(.001,T.startY-y)),F=L>=wu?1:cc(L/wu),N=z*F,k=x.position.x+Math.cos(T.angle)*N,V=x.position.z+Math.sin(T.angle)*N,q=k-C,W=V-I;if(Math.hypot(q,W)>.75*i){const ut=Math.atan2(q,-W),Nt=Math.atan2(Math.sin(ut-n.player.yaw),Math.cos(ut-n.player.yaw)),wt=Lp*i;n.player.yaw+=Math.max(-wt,Math.min(wt,Nt))}n.player.position.x=k,n.player.position.z=V,n.revision++}}return}if(n.run&&(n.mode==="flight"||n.mode==="offers")){if(n.run.elapsed>=ri-1e-9){n.run.elapsed=ri,Er(n,!1);return}const x=n.run.elapsed;if(n.run.elapsed=Math.min(ri,x+i),n.run.elapsed>=ri-1e-9){n.run.elapsed=ri,Er(n,!1);return}if(jp(n,x),n.mode==="offers"){n.revision++;return}}const s=n.player,r=Wn(t.turn,-1,1),o=Wn(t.climb,-1,1),a=Mp*(1+n.profile.upgrades.speed*.1),c=yp*(1+n.profile.upgrades.handling*.2),l=Up(s.speed,n.profile.upgrades.braking);s.yaw+=r*c*i,s.pitch+=(o*.38-s.pitch)*Math.min(1,7*i),t.cutThrottle&&(s.throttle=0),s.throttle=Wn(s.throttle+Wn(t.throttle,-1,1)*Sp*i,0,a);let u,d=1/0;const h=s.hover?void 0:ea(n);if(h){const x=h.position.x-s.position.x,y=h.position.z-s.position.z;d=Math.hypot(x,y),d<Eu?(u=0,s.brakeHold=!0):s.brakeHold&&d<Fp?u=0:d>1e-6&&(s.velocity.x*x+s.velocity.z*y)/d>.5&&(u=Math.sqrt(2*gd*d)),u===void 0&&(s.brakeHold=!1)}else s.brakeHold=!1;const f=s.throttle>Op?s.throttle:s.speed,g=s.hover?0:u===void 0?s.throttle:Math.min(u,f);s.speed=Wn(s.speed+Wn(g-s.speed,-l*i,bp*i),0,a),Math.abs(s.speed)<.01&&(s.speed=0),s.brakeHold&&s.speed===0&&(s.brakeHold=!1,d>=Eu&&(s.throttle=0));const _={x:Math.sin(s.yaw),z:-Math.cos(s.yaw)},m=s.hover?0:o*Math.max(s.speed,3)*.7,p={x:_.x*s.speed*i,y:m*i,z:_.z*s.speed*i};zp(s.position,p);const S=s.position.x,b=s.position.y,v=s.position.z;let A={...p};for(let x=0;x<3;x++){const y=$p(s.position,A);if(!y){s.position.x+=A.x,s.position.y+=A.y,s.position.z+=A.z;break}if(!(y.normal.x||y.normal.y||y.normal.z))break;const T=Math.max(0,y.t-1e-4);s.position.x+=A.x*T,s.position.y+=A.y*T,s.position.z+=A.z*T;const C=1-T;if(A={x:y.normal.x?0:A.x*C,y:y.normal.y?0:A.y*C,z:y.normal.z?0:A.z*C},!A.x&&!A.y&&!A.z)break}for(let x=0;x<4;x++){let y=!1;for(const T of fd){const C=T.min.x-$e,I=T.max.x+$e,U=T.min.y-$e,z=T.max.y+$e,L=T.min.z-$e,F=T.max.z+$e,N=s.position;if(N.x<=C||N.x>=I||N.y<=U||N.y>=z||N.z<=L||N.z>=F)continue;const k=N.x-C,V=I-N.x,q=N.y-U,W=z-N.y,ut=N.z-L,Nt=F-N.z,wt=Math.min(k,V,q,W,ut,Nt),Mt=.02;wt===k?N.x=C-Mt:wt===V?N.x=I+Mt:wt===q?N.y=U-Mt:wt===W?N.y=z+Mt:wt===ut?N.z=L-Mt:N.z=F+Mt,y=!0}if(!y)break}s.position.x=Wn(s.position.x,-cr+$e,cr-$e);const E=Math.max(Ee(s.position.x,s.position.z),0)+_p;s.position.y=Wn(s.position.y,E,vp),s.position.z=Wn(s.position.z,-cr+$e,cr-$e),s.velocity={x:(s.position.x-S)/i,y:(s.position.y-b)/i,z:(s.position.z-v)/i};const w=Bp({x:s.position.x-S,y:s.position.y-b,z:s.position.z-v});n.mode==="tutorial"&&n.tutorialStage===0&&w>.1?(n.tutorialStage=1,n.message=n.coarsePointer?"Release the stick to slow down and hover.":"Press Space to slow down and hover."):n.mode==="tutorial"&&n.tutorialStage===1&&Math.abs(s.speed)<.5&&(n.tutorialStage=2,n.message="Nice and steady. Drift over the glowing Harbor Cafe pad — the parcel drops itself."),Kp(n),n.revision++}function jp(n,t){const e=ri-n.run.elapsed,i=ri-t;i>30&&e<=30?n.message="30 seconds left — return home before nightfall!":i>60&&e<=60?n.message="One minute left — Meg needs to head home.":i>120&&e<=120&&(n.message="Two minutes left — finish up before nightfall.")}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vl="185",tm=0,Au=1,em=2,Ro=1,nm=2,ur=3,Ri=0,rn=1,He=2,ui=0,Is=1,uc=2,Ru=3,Cu=4,im=5,Bi=100,sm=101,rm=102,om=103,am=104,cm=200,lm=201,um=202,hm=203,hc=204,dc=205,dm=206,fm=207,pm=208,mm=209,gm=210,xm=211,_m=212,vm=213,Mm=214,fc=0,pc=1,mc=2,Os=3,gc=4,xc=5,_c=6,vc=7,Ed=0,ym=1,Sm=2,Zn=0,Td=1,Ad=2,Rd=3,Ml=4,Cd=5,Pd=6,Id=7,Ld=300,Yi=301,zs=302,da=303,fa=304,na=306,zo=1e3,ai=1001,Mc=1002,Ze=1003,bm=1004,Wr=1005,sn=1006,pa=1007,Vi=1008,yn=1009,Dd=1010,Nd=1011,Tr=1012,yl=1013,Jn=1014,On=1015,di=1016,Sl=1017,bl=1018,Ar=1020,Ud=35902,Fd=35899,Od=1021,zd=1022,zn=1023,fi=1026,Wi=1027,wl=1028,El=1029,Zi=1030,Tl=1031,Al=1033,Co=33776,Po=33777,Io=33778,Lo=33779,yc=35840,Sc=35841,bc=35842,wc=35843,Ec=36196,Tc=37492,Ac=37496,Rc=37488,Cc=37489,Bo=37490,Pc=37491,Ic=37808,Lc=37809,Dc=37810,Nc=37811,Uc=37812,Fc=37813,Oc=37814,zc=37815,Bc=37816,kc=37817,Hc=37818,Gc=37819,Vc=37820,Wc=37821,Xc=36492,qc=36494,Yc=36495,Zc=36283,$c=36284,ko=36285,Kc=36286,wm=3200,Jc=0,Em=1,Ti="",Je="srgb",Ho="srgb-linear",Go="linear",xe="srgb",rs=7680,Pu=519,Tm=512,Am=513,Rm=514,Rl=515,Cm=516,Pm=517,Cl=518,Im=519,Qc=35044,Iu="300 es",Yn=2e3,Rr=2001;function Lm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Vo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Dm(){const n=Vo("canvas");return n.style.display="block",n}const Lu={};function Wo(...n){const t="THREE."+n.shift();console.log(t,...n)}function Bd(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function jt(...n){n=Bd(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ue(...n){n=Bd(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ls(...n){const t=n.join(" ");t in Lu||(Lu[t]=!0,jt(...n))}function Nm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Um={[fc]:pc,[mc]:_c,[gc]:vc,[Os]:xc,[pc]:fc,[_c]:mc,[vc]:gc,[xc]:Os};class ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Du=1234567;const gr=Math.PI/180,Cr=180/Math.PI;function $n(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function le(n,t,e){return Math.max(t,Math.min(e,n))}function Pl(n,t){return(n%t+t)%t}function Fm(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Om(n,t,e){return n!==t?(e-n)/(t-n):0}function xr(n,t,e){return(1-e)*n+e*t}function zm(n,t,e,i){return xr(n,t,1-Math.exp(-e*i))}function Bm(n,t=1){return t-Math.abs(Pl(n,t*2)-t)}function km(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Hm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Gm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Vm(n,t){return n+Math.random()*(t-n)}function Wm(n){return n*(.5-Math.random())}function Xm(n){n!==void 0&&(Du=n);let t=Du+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qm(n){return n*gr}function Ym(n){return n*Cr}function Zm(n){return(n&n-1)===0&&n!==0}function $m(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Km(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Jm(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),u=o((t+i)/2),d=r((t-i)/2),h=o((t-i)/2),f=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _e(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const hn={DEG2RAD:gr,RAD2DEG:Cr,generateUUID:$n,clamp:le,euclideanModulo:Pl,mapLinear:Fm,inverseLerp:Om,lerp:xr,damp:zm,pingpong:Bm,smoothstep:km,smootherstep:Hm,randInt:Gm,randFloat:Vm,randFloatSpread:Wm,seededRandom:Xm,degToRad:qm,radToDeg:Ym,isPowerOfTwo:Zm,ceilPowerOfTwo:$m,floorPowerOfTwo:Km,setQuaternionFromProperEuler:Jm,normalize:_e,denormalize:Fn},Kl=class Kl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Kl.prototype.isVector2=!0;let ft=Kl;class Ws{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(d!==_||c!==h||l!==f||u!==g){let m=c*h+l*f+u*g+d*_;m<0&&(h=-h,f=-f,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const S=Math.acos(m),b=Math.sin(S);p=Math.sin(p*S)/b,a=Math.sin(a*S)/b,c=c*p+h*a,l=l*p+f*a,u=u*p+g*a,d=d*p+_*a}else{c=c*p+h*a,l=l*p+f*a,u=u*p+g*a,d=d*p+_*a;const S=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=S,l*=S,u*=S,d*=S}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-a*f,t[e+2]=l*g+u*f+a*h-c*d,t[e+3]=u*g-a*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(r/2),h=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Jl=class Jl{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+c*l+o*d-a*u,this.y=i+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ma.copy(this).projectOnVector(t),this.sub(ma)}reflect(t){return this.sub(ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jl.prototype.isVector3=!0;let D=Jl;const ma=new D,Nu=new Ws,Ql=class Ql{constructor(t,e,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],S=s[1],b=s[4],v=s[7],A=s[2],E=s[5],w=s[8];return r[0]=o*_+a*S+c*A,r[3]=o*m+a*b+c*E,r[6]=o*p+a*v+c*w,r[1]=l*_+u*S+d*A,r[4]=l*m+u*b+d*E,r[7]=l*p+u*v+d*w,r[2]=h*_+f*S+g*A,r[5]=h*m+f*b+g*E,r[8]=h*p+f*v+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*r,f=l*r-o*c,g=e*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*l-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=h*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(i*c-l*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ga.makeScale(t,e)),this}rotate(t){return Ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ga.makeRotation(-t)),this}translate(t,e){return Ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ga.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ql.prototype.isMatrix3=!0;let ee=Ql;const ga=new ee,Uu=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fu=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qm(){const n={enabled:!0,workingColorSpace:Ho,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xe&&(s.r=hi(s.r),s.g=hi(s.g),s.b=hi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xe&&(s.r=Ds(s.r),s.g=Ds(s.g),s.b=Ds(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ti?Go:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ho]:{primaries:t,whitePoint:i,transfer:Go,toXYZ:Uu,fromXYZ:Fu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:i,transfer:xe,toXYZ:Uu,fromXYZ:Fu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),n}const he=Qm();function hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ds(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let os;class jm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{os===void 0&&(os=Vo("canvas")),os.width=t.width,os.height=t.height;const s=os.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=os}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Vo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(hi(e[i]/255)*255):e[i]=hi(e[i]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let t0=0;class Il{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=$n(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xa(s[o].image)):r.push(xa(s[o]))}else r=xa(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function xa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}let e0=0;const _a=new D;class Qe extends ji{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,i=ai,s=ai,r=sn,o=Vi,a=zn,c=yn,l=Qe.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=$n(),this.name="",this.source=new Il(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_a).x}get height(){return this.source.getSize(_a).y}get depth(){return this.source.getSize(_a).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ld)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zo:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case Mc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zo:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case Mc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Ld;Qe.DEFAULT_ANISOTROPY=1;const jl=class jl{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,v=(f+1)/2,A=(p+1)/2,E=(u+h)/4,w=(d+_)/4,x=(g+m)/4;return b>v&&b>A?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=E/i,r=w/i):v>A?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=E/s,r=x/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=w/r,s=x/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-_)/S,this.z=(h-u)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jl.prototype.isVector4=!0;let Le=jl;class n0 extends ji{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new Qe(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Il(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends n0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class kd extends Qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class i0 extends Qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ta=class ta{constructor(t,e,i,s,r,o,a,c,l,u,d,h,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,d,h,f,g,_,m)}set(t,e,i,s,r,o,a,c,l,u,d,h,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ta().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/as.setFromMatrixColumn(t,0).length(),r=1/as.setFromMatrixColumn(t,1).length(),o=1/as.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=o*u,f=o*d,g=a*u,_=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-_*l,e[9]=-a*c,e[2]=_-h*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,g=l*u,_=l*d;e[0]=h+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=_+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,g=l*u,_=l*d;e[0]=h-_*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,f=o*d,g=a*u,_=a*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+_,e[1]=c*d,e[5]=_*l+h,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-h*d,e[8]=g*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-_*d}else if(t.order==="XZY"){const h=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+_,e[5]=o*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(s0,t,r0)}lookAt(t,e,i){const s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),_i.crossVectors(i,mn),_i.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),_i.crossVectors(i,mn)),_i.normalize(),Xr.crossVectors(mn,_i),s[0]=_i.x,s[4]=Xr.x,s[8]=mn.x,s[1]=_i.y,s[5]=Xr.y,s[9]=mn.y,s[2]=_i.z,s[6]=Xr.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],S=i[3],b=i[7],v=i[11],A=i[15],E=s[0],w=s[4],x=s[8],y=s[12],T=s[1],C=s[5],I=s[9],U=s[13],z=s[2],L=s[6],F=s[10],N=s[14],k=s[3],V=s[7],q=s[11],W=s[15];return r[0]=o*E+a*T+c*z+l*k,r[4]=o*w+a*C+c*L+l*V,r[8]=o*x+a*I+c*F+l*q,r[12]=o*y+a*U+c*N+l*W,r[1]=u*E+d*T+h*z+f*k,r[5]=u*w+d*C+h*L+f*V,r[9]=u*x+d*I+h*F+f*q,r[13]=u*y+d*U+h*N+f*W,r[2]=g*E+_*T+m*z+p*k,r[6]=g*w+_*C+m*L+p*V,r[10]=g*x+_*I+m*F+p*q,r[14]=g*y+_*U+m*N+p*W,r[3]=S*E+b*T+v*z+A*k,r[7]=S*w+b*C+v*L+A*V,r[11]=S*x+b*I+v*F+A*q,r[15]=S*y+b*U+v*N+A*W,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15],S=c*f-l*h,b=a*f-l*d,v=a*h-c*d,A=o*f-l*u,E=o*h-c*u,w=o*d-a*u;return e*(_*S-m*b+p*v)-i*(g*S-m*A+p*E)+s*(g*b-_*A+p*w)-r*(g*v-_*E+m*w)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=e*a-i*o,b=e*c-s*o,v=e*l-r*o,A=i*c-s*a,E=i*l-r*a,w=s*l-r*c,x=u*_-d*g,y=u*m-h*g,T=u*p-f*g,C=d*m-h*_,I=d*p-f*_,U=h*p-f*m,z=S*U-b*I+v*C+A*T-E*y+w*x;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/z;return t[0]=(a*U-c*I+l*C)*L,t[1]=(s*I-i*U-r*C)*L,t[2]=(_*w-m*E+p*A)*L,t[3]=(h*E-d*w-f*A)*L,t[4]=(c*T-o*U-l*y)*L,t[5]=(e*U-s*T+r*y)*L,t[6]=(m*v-g*w-p*b)*L,t[7]=(u*w-h*v+f*b)*L,t[8]=(o*I-a*T+l*x)*L,t[9]=(i*T-e*I-r*x)*L,t[10]=(g*E-_*v+p*S)*L,t[11]=(d*v-u*E-f*S)*L,t[12]=(a*y-o*C-c*x)*L,t[13]=(e*C-i*y+s*x)*L,t[14]=(_*b-g*A-m*S)*L,t[15]=(u*A-d*b+h*S)*L,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,h=r*l,f=r*u,g=r*d,_=o*u,m=o*d,p=a*d,S=c*l,b=c*u,v=c*d,A=i.x,E=i.y,w=i.z;return s[0]=(1-(_+p))*A,s[1]=(f+v)*A,s[2]=(g-b)*A,s[3]=0,s[4]=(f-v)*E,s[5]=(1-(h+p))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(g+b)*w,s[9]=(m-S)*w,s[10]=(1-(h+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=as.set(s[0],s[1],s[2]).length();const a=as.set(s[4],s[5],s[6]).length(),c=as.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Cn.copy(this);const l=1/o,u=1/a,d=1/c;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,e.setFromRotationMatrix(Cn),i.x=o,i.y=a,i.z=c,this}makePerspective(t,e,i,s,r,o,a=Yn,c=!1){const l=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===Yn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Rr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Yn,c=!1){const l=this.elements,u=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),f=-(i+s)/(i-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===Yn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Rr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};ta.prototype.isMatrix4=!0;let Se=ta;const as=new D,Cn=new Se,s0=new D(0,0,0),r0=new D(1,1,1),_i=new D,Xr=new D,mn=new D,Ou=new Se,zu=new Ws;class $i{constructor(t=0,e=0,i=0,s=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ou.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ou,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zu.setFromEuler(this),this.setFromQuaternion(zu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class Ll{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let o0=0;const Bu=new D,cs=new Ws,ti=new Se,qr=new D,$s=new D,a0=new D,c0=new Ws,ku=new D(1,0,0),Hu=new D(0,1,0),Gu=new D(0,0,1),Vu={type:"added"},l0={type:"removed"},ls={type:"childadded",child:null},va={type:"childremoved",child:null};class ze extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ze.DEFAULT_UP.clone();const t=new D,e=new $i,i=new Ws,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new ee}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(ku,t)}rotateY(t){return this.rotateOnAxis(Hu,t)}rotateZ(t){return this.rotateOnAxis(Gu,t)}translateOnAxis(t,e){return Bu.copy(t).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ku,t)}translateY(t){return this.translateOnAxis(Hu,t)}translateZ(t){return this.translateOnAxis(Gu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?qr.copy(t):qr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt($s,qr,this.up):ti.lookAt(qr,$s,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),cs.setFromRotationMatrix(ti),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vu),ls.child=t,this.dispatchEvent(ls),ls.child=null):ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(l0),va.child=t,this.dispatchEvent(va),va.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vu),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,a0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,c0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ze.DEFAULT_UP=new D(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class oe extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u0={type:"move"};class Ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(u0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new oe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function ya(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ne{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=he.workingColorSpace){if(t=Pl(t,1),e=le(e,0,1),i=le(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ya(o,r,t+1/3),this.g=ya(o,r,t),this.b=ya(o,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=Je){function i(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const i=Hd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return he.workingToColorSpace(en.copy(this),t),Math.round(le(en.r*255,0,255))*65536+Math.round(le(en.g*255,0,255))*256+Math.round(le(en.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(en.copy(this),e);const i=en.r,s=en.g,r=en.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=Je){he.workingToColorSpace(en.copy(this),t);const e=en.r,i=en.g,s=en.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(Yr);const i=xr(vi.h,Yr.h,e),s=xr(vi.s,Yr.s,e),r=xr(vi.l,Yr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new ne;ne.NAMES=Hd;class Xo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ne(t),this.density=e}clone(){return new Xo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class h0 extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Pn=new D,ei=new D,Sa=new D,ni=new D,us=new D,hs=new D,Wu=new D,ba=new D,wa=new D,Ea=new D,Ta=new Le,Aa=new Le,Ra=new Le;class Rn{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Pn.subVectors(t,e),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Pn.subVectors(s,e),ei.subVectors(i,e),Sa.subVectors(t,e);const o=Pn.dot(Pn),a=Pn.dot(ei),c=Pn.dot(Sa),l=ei.dot(ei),u=ei.dot(Sa),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ni.x),c.addScaledVector(o,ni.y),c.addScaledVector(a,ni.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Ta.setScalar(0),Aa.setScalar(0),Ra.setScalar(0),Ta.fromBufferAttribute(t,e),Aa.fromBufferAttribute(t,i),Ra.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ta,r.x),o.addScaledVector(Aa,r.y),o.addScaledVector(Ra,r.z),o}static isFrontFacing(t,e,i,s){return Pn.subVectors(i,e),ei.subVectors(t,e),Pn.cross(ei).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Pn.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Rn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;us.subVectors(s,i),hs.subVectors(r,i),ba.subVectors(t,i);const c=us.dot(ba),l=hs.dot(ba);if(c<=0&&l<=0)return e.copy(i);wa.subVectors(t,s);const u=us.dot(wa),d=hs.dot(wa);if(u>=0&&d<=u)return e.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(us,o);Ea.subVectors(t,r);const f=us.dot(Ea),g=hs.dot(Ea);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(hs,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Wu.subVectors(r,s),a=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(Wu,a);const p=1/(m+_+h);return o=_*p,a=h*p,e.copy(i).addScaledVector(us,o).addScaledVector(hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ts{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zr.copy(i.boundingBox)),Zr.applyMatrix4(t.matrixWorld),this.union(Zr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ks),$r.subVectors(this.max,Ks),ds.subVectors(t.a,Ks),fs.subVectors(t.b,Ks),ps.subVectors(t.c,Ks),Mi.subVectors(fs,ds),yi.subVectors(ps,fs),Pi.subVectors(ds,ps);let e=[0,-Mi.z,Mi.y,0,-yi.z,yi.y,0,-Pi.z,Pi.y,Mi.z,0,-Mi.x,yi.z,0,-yi.x,Pi.z,0,-Pi.x,-Mi.y,Mi.x,0,-yi.y,yi.x,0,-Pi.y,Pi.x,0];return!Ca(e,ds,fs,ps,$r)||(e=[1,0,0,0,1,0,0,0,1],!Ca(e,ds,fs,ps,$r))?!1:(Kr.crossVectors(Mi,yi),e=[Kr.x,Kr.y,Kr.z],Ca(e,ds,fs,ps,$r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ii=[new D,new D,new D,new D,new D,new D,new D,new D],In=new D,Zr=new ts,ds=new D,fs=new D,ps=new D,Mi=new D,yi=new D,Pi=new D,Ks=new D,$r=new D,Kr=new D,Ii=new D;function Ca(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ii.fromArray(n,r);const a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),c=t.dot(Ii),l=e.dot(Ii),u=i.dot(Ii);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Be=new D,Jr=new ft;let d0=0;class fn extends ji{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:d0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Qc,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Jr.fromBufferAttribute(this,e),Jr.applyMatrix3(t),this.setXY(e,Jr.x,Jr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Fn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qc&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Gd extends fn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Vd extends fn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Qt extends fn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const f0=new ts,Js=new D,Pa=new D;class Ur{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):f0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);const e=Js.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Js,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(Pa)),this.expandByPoint(Js.copy(t.center).sub(Pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let p0=0;const wn=new Se,Ia=new ze,ms=new D,gn=new ts,Qs=new ts,qe=new D;class Me extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lm(t)?Vd:Gd)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ee().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,i){return wn.makeTranslation(t,e,i),this.applyMatrix4(wn),this}scale(t,e,i){return wn.makeScale(t,e,i),this.applyMatrix4(wn),this}lookAt(t){return Ia.lookAt(t),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(gn.min,Qs.min),gn.expandByPoint(qe),qe.addVectors(gn.max,Qs.max),gn.expandByPoint(qe)):(gn.expandByPoint(Qs.min),gn.expandByPoint(Qs.max))}gn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)qe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(qe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)qe.fromBufferAttribute(a,l),c&&(ms.fromBufferAttribute(t,l),qe.add(ms)),s=Math.max(s,i.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new fn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let x=0;x<i.count;x++)a[x]=new D,c[x]=new D;const l=new D,u=new D,d=new D,h=new ft,f=new ft,g=new ft,_=new D,m=new D;function p(x,y,T){l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,y),d.fromBufferAttribute(i,T),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,T),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),a[x].add(_),a[y].add(_),a[T].add(_),c[x].add(m),c[y].add(m),c[T].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let x=0,y=S.length;x<y;++x){const T=S[x],C=T.start,I=T.count;for(let U=C,z=C+I;U<z;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const b=new D,v=new D,A=new D,E=new D;function w(x){A.fromBufferAttribute(s,x),E.copy(A);const y=a[x];b.copy(y),b.sub(A.multiplyScalar(A.dot(y))).normalize(),v.crossVectors(E,y);const C=v.dot(c[x])<0?-1:1;o.setXYZW(x,b.x,b.y,b.z,C)}for(let x=0,y=S.length;x<y;++x){const T=S[x],C=T.start,I=T.count;for(let U=C,z=C+I;U<z;U+=3)w(t.getX(U+0)),w(t.getX(U+1)),w(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,u=new D,d=new D;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new fn(h,u,d)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class m0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Qc,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new D;class qo{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Fn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Fn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Wo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new fn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new qo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Wo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let g0=0;class Xs extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=Is,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=dc,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(i.blending=this.blending),this.side!==Ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hc&&(i.blendSrc=this.blendSrc),this.blendDst!==dc&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ne().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ft().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Dl extends Xs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let gs;const js=new D,xs=new D,_s=new D,vs=new ft,tr=new ft,Wd=new Se,Qr=new D,er=new D,jr=new D,Xu=new ft,La=new ft,qu=new ft;class jc extends ze{constructor(t=new Dl){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new Me;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new m0(e,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new qo(i,3,0,!1)),gs.setAttribute("uv",new qo(i,2,3,!1))}this.geometry=gs,this.material=t,this.center=new ft(.5,.5),this.count=1}raycast(t,e){t.camera===null&&ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),Wd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-_s.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;to(Qr.set(-.5,-.5,0),_s,o,xs,s,r),to(er.set(.5,-.5,0),_s,o,xs,s,r),to(jr.set(.5,.5,0),_s,o,xs,s,r),Xu.set(0,0),La.set(1,0),qu.set(1,1);let a=t.ray.intersectTriangle(Qr,er,jr,!1,js);if(a===null&&(to(er.set(-.5,.5,0),_s,o,xs,s,r),La.set(0,1),a=t.ray.intersectTriangle(Qr,jr,er,!1,js),a===null))return;const c=t.ray.origin.distanceTo(js);c<t.near||c>t.far||e.push({distance:c,point:js.clone(),uv:Rn.getInterpolation(js,Qr,er,jr,Xu,La,qu,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function to(n,t,e,i,s,r){vs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(tr.x=r*vs.x-s*vs.y,tr.y=s*vs.x+r*vs.y):tr.copy(vs),n.copy(t),n.x+=tr.x,n.y+=tr.y,n.applyMatrix4(Wd)}const si=new D,Da=new D,eo=new D,Si=new D,Na=new D,no=new D,Ua=new D;class Xd{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Da.copy(t).add(e).multiplyScalar(.5),eo.copy(e).sub(t).normalize(),Si.copy(this.origin).sub(Da);const r=t.distanceTo(e)*.5,o=-this.direction.dot(eo),a=Si.dot(this.direction),c=-Si.dot(eo),l=Si.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Da).addScaledVector(eo,h),f}intersectSphere(t,e){si.subVectors(t.center,this.origin);const i=si.dot(this.direction),s=si.dot(si)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,i,s,r){Na.subVectors(e,t),no.subVectors(i,t),Ua.crossVectors(Na,no);let o=this.direction.dot(Ua),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,t);const c=a*this.direction.dot(no.crossVectors(Si,no));if(c<0)return null;const l=a*this.direction.dot(Na.cross(Si));if(l<0||c+l>o)return null;const u=-a*Si.dot(Ua);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class An extends Xs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=Ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Yu=new Se,Li=new Xd,io=new Ur,Zu=new D,so=new D,ro=new D,oo=new D,Fa=new D,ao=new D,$u=new D,co=new D;class J extends ze{constructor(t=new Me,e=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ao.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(Fa.fromBufferAttribute(d,t),o?ao.addScaledVector(Fa,u):ao.addScaledVector(Fa.sub(e),u))}e.add(ao)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(io.containsPoint(Li.origin)===!1&&(Li.intersectSphere(io,Zu)===null||Li.origin.distanceToSquared(Zu)>(t.far-t.near)**2))&&(Yu.copy(r).invert(),Li.copy(t.ray).applyMatrix4(Yu),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,A=b;v<A;v+=3){const E=a.getX(v),w=a.getX(v+1),x=a.getX(v+2);s=lo(this,p,t,i,l,u,d,E,w,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);s=lo(this,o,t,i,l,u,d,S,b,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,A=b;v<A;v+=3){const E=v,w=v+1,x=v+2;s=lo(this,p,t,i,l,u,d,E,w,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=m,b=m+1,v=m+2;s=lo(this,o,t,i,l,u,d,S,b,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function x0(n,t,e,i,s,r,o,a){let c;if(t.side===rn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Ri,a),c===null)return null;co.copy(a),co.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(co);return l<e.near||l>e.far?null:{distance:l,point:co.clone(),object:n}}function lo(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,so),n.getVertexPosition(c,ro),n.getVertexPosition(l,oo);const u=x0(n,t,e,i,so,ro,oo,$u);if(u){const d=new D;Rn.getBarycoord($u,so,ro,oo,d),s&&(u.uv=Rn.getInterpolatedAttribute(s,a,c,l,d,new ft)),r&&(u.uv1=Rn.getInterpolatedAttribute(r,a,c,l,d,new ft)),o&&(u.normal=Rn.getInterpolatedAttribute(o,a,c,l,d,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new D,materialIndex:0};Rn.getNormal(so,ro,oo,h.normal),u.face=h,u.barycoord=d}return u}class qd extends Qe{constructor(t=null,e=1,i=1,s,r,o,a,c,l=Ze,u=Ze,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ku extends fn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ms=new Se,Ju=new Se,uo=[],Qu=new ts,_0=new Se,nr=new J,ir=new Ur;class xn extends J{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ku(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,_0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ts),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ms),Qu.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(Qu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ur),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ms),ir.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(i),t.ray.intersectsSphere(ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ms),Ju.multiplyMatrices(i,Ms),nr.matrixWorld=Ju,nr.raycast(t,uo);for(let o=0,a=uo.length;o<a;o++){const c=uo[o];c.instanceId=r,c.object=this,e.push(c)}uo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ku(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new qd(new Float32Array(s*this.count),s,this.count,wl,On));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Oa=new D,v0=new D,M0=new ee;class Oi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Oa.subVectors(i,e).cross(v0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(Oa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||M0.getNormalMatrix(t),s=this.coplanarPoint(Oa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Ur,y0=new ft(.5,.5),ho=new D;class Nl{constructor(t=new Oi,e=new Oi,i=new Oi,s=new Oi,r=new Oi,o=new Oi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Yn,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],S=r[12],b=r[13],v=r[14],A=r[15];if(s[0].setComponents(l-o,f-u,p-g,A-S).normalize(),s[1].setComponents(l+o,f+u,p+g,A+S).normalize(),s[2].setComponents(l+a,f+d,p+_,A+b).normalize(),s[3].setComponents(l-a,f-d,p-_,A-b).normalize(),i)s[4].setComponents(c,h,m,v).normalize(),s[5].setComponents(l-c,f-h,p-m,A-v).normalize();else if(s[4].setComponents(l-c,f-h,p-m,A-v).normalize(),e===Yn)s[5].setComponents(l+c,f+h,p+m,A+v).normalize();else if(e===Rr)s[5].setComponents(c,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){Di.center.set(0,0,0);const e=y0.distanceTo(t.center);return Di.radius=.7071067811865476+e,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ho.x=s.normal.x>0?t.max.x:t.min.x,ho.y=s.normal.y>0?t.max.y:t.min.y,ho.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yd extends Qe{constructor(t=[],e=Yi,i,s,r,o,a,c,l,u){super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Bs extends Qe{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ks extends Qe{constructor(t,e,i=Jn,s,r,o,a=Ze,c=Ze,l,u=fi,d=1){if(u!==fi&&u!==Wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Il(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class S0 extends ks{constructor(t,e=Jn,i=Yi,s,r,o=Ze,a=Ze,c,l=fi){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Zd extends Qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class te extends Me{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2));function g(_,m,p,S,b,v,A,E,w,x,y){const T=v/w,C=A/x,I=v/2,U=A/2,z=E/2,L=w+1,F=x+1;let N=0,k=0;const V=new D;for(let q=0;q<F;q++){const W=q*C-U;for(let ut=0;ut<L;ut++){const Nt=ut*T-I;V[_]=Nt*S,V[m]=W*b,V[p]=z,l.push(V.x,V.y,V.z),V[_]=0,V[m]=0,V[p]=E>0?1:-1,u.push(V.x,V.y,V.z),d.push(ut/w),d.push(1-q/x),N+=1}}for(let q=0;q<x;q++)for(let W=0;W<w;W++){const ut=h+W+L*q,Nt=h+W+L*(q+1),wt=h+(W+1)+L*(q+1),Mt=h+(W+1)+L*q;c.push(ut,Nt,Mt),c.push(Nt,wt,Mt),k+=6}a.addGroup(f,k,y),f+=k,h+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Yo extends Me{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],u=e/2,d=Math.PI/2*t,h=e,f=2*d+h,g=i*2+r,_=s+1,m=new D,p=new D;for(let S=0;S<=g;S++){let b=0,v=0,A=0,E=0;if(S<=i){const y=S/i,T=y*Math.PI/2;v=-u-t*Math.cos(T),A=t*Math.sin(T),E=-t*Math.cos(T),b=y*d}else if(S<=i+r){const y=(S-i)/r;v=-u+y*e,A=t,E=0,b=d+y*h}else{const y=(S-i-r)/i,T=y*Math.PI/2;v=u+t*Math.sin(T),A=t*Math.cos(T),E=t*Math.sin(T),b=d+h+y*d}const w=Math.max(0,Math.min(1,b/f));let x=0;S===0?x=.5/s:S===g&&(x=-.5/s);for(let y=0;y<=s;y++){const T=y/s,C=T*Math.PI*2,I=Math.sin(C),U=Math.cos(C);p.x=-A*U,p.y=v,p.z=A*I,a.push(p.x,p.y,p.z),m.set(-A*U,E,A*I),m.normalize(),c.push(m.x,m.y,m.z),l.push(T+x,w)}if(S>0){const y=(S-1)*_;for(let T=0;T<s;T++){const C=y+T,I=y+T+1,U=S*_+T,z=S*_+T+1;o.push(C,I,U),o.push(I,z,U)}}}this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Ul extends Me{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new D,u=new ft;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const f=i+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(a,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ul(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class pe extends Me{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const _=[],m=i/2;let p=0;S(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(f,2));function S(){const v=new D,A=new D;let E=0;const w=(e-t)/i;for(let x=0;x<=r;x++){const y=[],T=x/r,C=T*(e-t)+t;for(let I=0;I<=s;I++){const U=I/s,z=U*c+a,L=Math.sin(z),F=Math.cos(z);A.x=C*L,A.y=-T*i+m,A.z=C*F,d.push(A.x,A.y,A.z),v.set(L,w,F).normalize(),h.push(v.x,v.y,v.z),f.push(U,1-T),y.push(g++)}_.push(y)}for(let x=0;x<s;x++)for(let y=0;y<r;y++){const T=_[y][x],C=_[y+1][x],I=_[y+1][x+1],U=_[y][x+1];(t>0||y!==0)&&(u.push(T,C,U),E+=3),(e>0||y!==r-1)&&(u.push(C,I,U),E+=3)}l.addGroup(p,E,0),p+=E}function b(v){const A=g,E=new ft,w=new D;let x=0;const y=v===!0?t:e,T=v===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,m*T,0),h.push(0,T,0),f.push(.5,.5),g++;const C=g;for(let I=0;I<=s;I++){const z=I/s*c+a,L=Math.cos(z),F=Math.sin(z);w.x=y*F,w.y=m*T,w.z=y*L,d.push(w.x,w.y,w.z),h.push(0,T,0),E.x=L*.5+.5,E.y=F*.5*T+.5,f.push(E.x,E.y),g++}for(let I=0;I<s;I++){const U=A+I,z=C+I;v===!0?u.push(z,z+1,U):u.push(z+1,z,U),x+=3}l.addGroup(p,x,v===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class nn extends pe{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new nn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fl extends Me{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const b=new D,v=new D,A=new D;for(let E=0;E<e.length;E+=3)f(e[E+0],b),f(e[E+1],v),f(e[E+2],A),c(b,v,A,S)}function c(S,b,v,A){const E=A+1,w=[];for(let x=0;x<=E;x++){w[x]=[];const y=S.clone().lerp(v,x/E),T=b.clone().lerp(v,x/E),C=E-x;for(let I=0;I<=C;I++)I===0&&x===E?w[x][I]=y:w[x][I]=y.clone().lerp(T,I/C)}for(let x=0;x<E;x++)for(let y=0;y<2*(E-x)-1;y++){const T=Math.floor(y/2);y%2===0?(h(w[x][T+1]),h(w[x+1][T]),h(w[x][T])):(h(w[x][T+1]),h(w[x+1][T+1]),h(w[x+1][T]))}}function l(S){const b=new D;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(S),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function u(){const S=new D;for(let b=0;b<r.length;b+=3){S.x=r[b+0],S.y=r[b+1],S.z=r[b+2];const v=m(S)/2/Math.PI+.5,A=p(S)/Math.PI+.5;o.push(v,1-A)}g(),d()}function d(){for(let S=0;S<o.length;S+=6){const b=o[S+0],v=o[S+2],A=o[S+4],E=Math.max(b,v,A),w=Math.min(b,v,A);E>.9&&w<.1&&(b<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),A<.2&&(o[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function f(S,b){const v=S*3;b.x=t[v+0],b.y=t[v+1],b.z=t[v+2]}function g(){const S=new D,b=new D,v=new D,A=new D,E=new ft,w=new ft,x=new ft;for(let y=0,T=0;y<r.length;y+=9,T+=6){S.set(r[y+0],r[y+1],r[y+2]),b.set(r[y+3],r[y+4],r[y+5]),v.set(r[y+6],r[y+7],r[y+8]),E.set(o[T+0],o[T+1]),w.set(o[T+2],o[T+3]),x.set(o[T+4],o[T+5]),A.copy(S).add(b).add(v).divideScalar(3);const C=m(A);_(E,T+0,S,C),_(w,T+2,b,C),_(x,T+4,v,C)}}function _(S,b,v,A){A<0&&S.x===1&&(o[b]=S.x-1),v.x===0&&v.z===0&&(o[b]=A/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fl(t.vertices,t.indices,t.radius,t.detail)}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ft:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new D,s=[],r=[],o=[],a=new D,c=new Se;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(le(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(le(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ol extends Qn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ft){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class b0 extends Ol{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function zl(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const ju=new D,th=new D,za=new zl,Ba=new zl,ka=new zl;class ia extends Qn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new D){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(th.subVectors(s[0],s[1]).add(s[0]),l=th);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ju.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ju),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),za.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,_,m),Ba.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,_,m),ka.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(za.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Ba.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),ka.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return i.set(za.calc(c),Ba.calc(c),ka.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function eh(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function w0(n,t){const e=1-n;return e*e*t}function E0(n,t){return 2*(1-n)*n*t}function T0(n,t){return n*n*t}function _r(n,t,e,i){return w0(n,t)+E0(n,e)+T0(n,i)}function A0(n,t){const e=1-n;return e*e*e*t}function R0(n,t){const e=1-n;return 3*e*e*n*t}function C0(n,t){return 3*(1-n)*n*n*t}function P0(n,t){return n*n*n*t}function vr(n,t,e,i,s){return A0(n,t)+R0(n,e)+C0(n,i)+P0(n,s)}class $d extends Qn{constructor(t=new ft,e=new ft,i=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ft){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(vr(t,s.x,r.x,o.x,a.x),vr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class I0 extends Qn{constructor(t=new D,e=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new D){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(vr(t,s.x,r.x,o.x,a.x),vr(t,s.y,r.y,o.y,a.y),vr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Kd extends Qn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jd extends Qn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qd extends Qn{constructor(t=new ft,e=new ft,i=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ft){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(_r(t,s.x,r.x,o.x),_r(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jd extends Qn{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(_r(t,s.x,r.x,o.x),_r(t,s.y,r.y,o.y),_r(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tf extends Qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(eh(a,c.x,l.x,u.x,d.x),eh(a,c.y,l.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ft().fromArray(s))}return this}}var Zo=Object.freeze({__proto__:null,ArcCurve:b0,CatmullRomCurve3:ia,CubicBezierCurve:$d,CubicBezierCurve3:I0,EllipseCurve:Ol,LineCurve:Kd,LineCurve3:Jd,QuadraticBezierCurve:Qd,QuadraticBezierCurve3:jd,SplineCurve:tf});class L0 extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zo[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Zo[s.type]().fromJSON(s))}return this}}class tl extends L0{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Kd(this.currentPoint.clone(),new ft(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Qd(this.currentPoint.clone(),new ft(t,e),new ft(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new $d(this.currentPoint.clone(),new ft(t,e),new ft(i,s),new ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new tf(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){const l=new Ol(t,e,i,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class el extends tl{constructor(t){super(t),this.uuid=$n(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new tl().fromJSON(s))}return this}}function D0(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=ef(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=z0(n,t,r,e)),n.length>80*e){a=n[0],c=n[1];let u=a,d=c;for(let h=e;h<s;h+=e){const f=n[h],g=n[h+1];f<a&&(a=f),g<c&&(c=g),f>u&&(u=f),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return Pr(r,o,e,a,c,l,0),o}function ef(n,t,e,i,s){let r;if(s===$0(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=nh(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=nh(o/i|0,n[o],n[o+1],r);return r&&Hs(r,r.next)&&(Lr(r),r=r.next),r}function Ki(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Hs(e,e.next)||De(e.prev,e,e.next)===0)){if(Lr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Pr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&V0(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?U0(n,i,s,r):N0(n)){t.push(c.i,n.i,l.i),Lr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=F0(Ki(n),t),Pr(n,t,e,i,s,r,2)):o===2&&O0(n,t,e,i,s,r):Pr(Ki(n),t,e,i,s,r,1);break}}}function N0(n){const t=n.prev,e=n,i=n.next;if(De(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,u=Math.min(s,r,o),d=Math.min(a,c,l),h=Math.max(s,r,o),f=Math.max(a,c,l);let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&hr(s,a,r,c,o,l,g.x,g.y)&&De(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function U0(n,t,e,i){const s=n.prev,r=n,o=n.next;if(De(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,c,l),g=Math.min(u,d,h),_=Math.max(a,c,l),m=Math.max(u,d,h),p=nl(f,g,t,e,i),S=nl(_,m,t,e,i);let b=n.prevZ,v=n.nextZ;for(;b&&b.z>=p&&v&&v.z<=S;){if(b.x>=f&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&hr(a,u,c,d,l,h,b.x,b.y)&&De(b.prev,b,b.next)>=0||(b=b.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&hr(a,u,c,d,l,h,v.x,v.y)&&De(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&hr(a,u,c,d,l,h,b.x,b.y)&&De(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;v&&v.z<=S;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&hr(a,u,c,d,l,h,v.x,v.y)&&De(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function F0(n,t){let e=n;do{const i=e.prev,s=e.next.next;!Hs(i,s)&&sf(i,e,e.next,s)&&Ir(i,s)&&Ir(s,i)&&(t.push(i.i,e.i,s.i),Lr(e),Lr(e.next),e=n=s),e=e.next}while(e!==n);return Ki(e)}function O0(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&q0(o,a)){let c=rf(o,a);o=Ki(o,o.next),c=Ki(c,c.next),Pr(o,t,e,i,s,r,0),Pr(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function z0(n,t,e,i){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=ef(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(X0(l))}s.sort(B0);for(let r=0;r<s.length;r++)e=k0(s[r],e);return e}function B0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function k0(n,t){const e=H0(n,t);if(!e)return t;const i=rf(e,n);return Ki(i,i.next),Ki(e,e.next)}function H0(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,o;if(Hs(n,e))return e;do{if(Hs(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;e=o;do{if(i>=e.x&&e.x>=c&&i!==e.x&&nf(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){const d=Math.abs(s-e.y)/(i-e.x);Ir(e,n)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&G0(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function G0(n,t){return De(n.prev,n,t.prev)<0&&De(t.next,n,n.next)<0}function V0(n,t,e,i){let s=n;do s.z===0&&(s.z=nl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,W0(s)}function W0(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function nl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function X0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function nf(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function hr(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&nf(n,t,e,i,s,r,o,a)}function q0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Y0(n,t)&&(Ir(n,t)&&Ir(t,n)&&Z0(n,t)&&(De(n.prev,n,t.prev)||De(n,t.prev,t))||Hs(n,t)&&De(n.prev,n,n.next)>0&&De(t.prev,t,t.next)>0)}function De(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Hs(n,t){return n.x===t.x&&n.y===t.y}function sf(n,t,e,i){const s=po(De(n,t,e)),r=po(De(n,t,i)),o=po(De(e,i,n)),a=po(De(e,i,t));return!!(s!==r&&o!==a||s===0&&fo(n,e,t)||r===0&&fo(n,i,t)||o===0&&fo(e,n,i)||a===0&&fo(e,t,i))}function fo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function po(n){return n>0?1:n<0?-1:0}function Y0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&sf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ir(n,t){return De(n.prev,n,n.next)<0?De(n,t,n.next)>=0&&De(n,n.prev,t)>=0:De(n,t,n.prev)<0||De(n,n.next,t)<0}function Z0(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function rf(n,t){const e=il(n.i,n.x,n.y),i=il(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function nh(n,t,e,i){const s=il(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Lr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function il(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $0(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class K0{static triangulate(t,e,i=2){return D0(t,e,i)}}class As{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return As.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];ih(t),sh(i,t);let o=t.length;e.forEach(ih);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,sh(i,e[c]);const a=K0.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function ih(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function sh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class $o extends Me{constructor(t=new el([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:J0;let b,v=!1,A,E,w,x;if(p){b=p.getSpacedPoints(u),v=!0,h=!1;const it=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(u,it),E=new D,w=new D,x=new D}h||(m=0,f=0,g=0,_=0);const y=a.extractPoints(l);let T=y.shape;const C=y.holes;if(!As.isClockWise(T)){T=T.reverse();for(let it=0,rt=C.length;it<rt;it++){const st=C[it];As.isClockWise(st)&&(C[it]=st.reverse())}}function U(it){const st=10000000000000001e-36;let xt=it[0];for(let gt=1;gt<=it.length;gt++){const Xt=gt%it.length,ht=it[Xt],Ut=ht.x-xt.x,Bt=ht.y-xt.y,O=Ut*Ut+Bt*Bt,Zt=Math.max(Math.abs(ht.x),Math.abs(ht.y),Math.abs(xt.x),Math.abs(xt.y)),Kt=st*Zt*Zt;if(O<=Kt){it.splice(Xt,1),gt--;continue}xt=ht}}U(T),C.forEach(U);const z=C.length,L=T;for(let it=0;it<z;it++){const rt=C[it];T=T.concat(rt)}function F(it,rt,st){return rt||ue("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(rt,st)}const N=T.length;function k(it,rt,st){let xt,gt,Xt;const ht=it.x-rt.x,Ut=it.y-rt.y,Bt=st.x-it.x,O=st.y-it.y,Zt=ht*ht+Ut*Ut,Kt=ht*O-Ut*Bt;if(Math.abs(Kt)>Number.EPSILON){const P=Math.sqrt(Zt),M=Math.sqrt(Bt*Bt+O*O),G=rt.x-Ut/P,X=rt.y+ht/P,Q=st.x-O/M,dt=st.y+Bt/M,mt=((Q-G)*O-(dt-X)*Bt)/(ht*O-Ut*Bt);xt=G+ht*mt-it.x,gt=X+Ut*mt-it.y;const j=xt*xt+gt*gt;if(j<=2)return new ft(xt,gt);Xt=Math.sqrt(j/2)}else{let P=!1;ht>Number.EPSILON?Bt>Number.EPSILON&&(P=!0):ht<-Number.EPSILON?Bt<-Number.EPSILON&&(P=!0):Math.sign(Ut)===Math.sign(O)&&(P=!0),P?(xt=-Ut,gt=ht,Xt=Math.sqrt(Zt)):(xt=ht,gt=Ut,Xt=Math.sqrt(Zt/2))}return new ft(xt/Xt,gt/Xt)}const V=[];for(let it=0,rt=L.length,st=rt-1,xt=it+1;it<rt;it++,st++,xt++)st===rt&&(st=0),xt===rt&&(xt=0),V[it]=k(L[it],L[st],L[xt]);const q=[];let W,ut=V.concat();for(let it=0,rt=z;it<rt;it++){const st=C[it];W=[];for(let xt=0,gt=st.length,Xt=gt-1,ht=xt+1;xt<gt;xt++,Xt++,ht++)Xt===gt&&(Xt=0),ht===gt&&(ht=0),W[xt]=k(st[xt],st[Xt],st[ht]);q.push(W),ut=ut.concat(W)}let Nt;if(m===0)Nt=As.triangulateShape(L,C);else{const it=[],rt=[];for(let st=0;st<m;st++){const xt=st/m,gt=f*Math.cos(xt*Math.PI/2),Xt=g*Math.sin(xt*Math.PI/2)+_;for(let ht=0,Ut=L.length;ht<Ut;ht++){const Bt=F(L[ht],V[ht],Xt);Et(Bt.x,Bt.y,-gt),xt===0&&it.push(Bt)}for(let ht=0,Ut=z;ht<Ut;ht++){const Bt=C[ht];W=q[ht];const O=[];for(let Zt=0,Kt=Bt.length;Zt<Kt;Zt++){const P=F(Bt[Zt],W[Zt],Xt);Et(P.x,P.y,-gt),xt===0&&O.push(P)}xt===0&&rt.push(O)}}Nt=As.triangulateShape(it,rt)}const wt=Nt.length,Mt=g+_;for(let it=0;it<N;it++){const rt=h?F(T[it],ut[it],Mt):T[it];v?(w.copy(A.normals[0]).multiplyScalar(rt.x),E.copy(A.binormals[0]).multiplyScalar(rt.y),x.copy(b[0]).add(w).add(E),Et(x.x,x.y,x.z)):Et(rt.x,rt.y,0)}for(let it=1;it<=u;it++)for(let rt=0;rt<N;rt++){const st=h?F(T[rt],ut[rt],Mt):T[rt];v?(w.copy(A.normals[it]).multiplyScalar(st.x),E.copy(A.binormals[it]).multiplyScalar(st.y),x.copy(b[it]).add(w).add(E),Et(x.x,x.y,x.z)):Et(st.x,st.y,d/u*it)}for(let it=m-1;it>=0;it--){const rt=it/m,st=f*Math.cos(rt*Math.PI/2),xt=g*Math.sin(rt*Math.PI/2)+_;for(let gt=0,Xt=L.length;gt<Xt;gt++){const ht=F(L[gt],V[gt],xt);Et(ht.x,ht.y,d+st)}for(let gt=0,Xt=C.length;gt<Xt;gt++){const ht=C[gt];W=q[gt];for(let Ut=0,Bt=ht.length;Ut<Bt;Ut++){const O=F(ht[Ut],W[Ut],xt);v?Et(O.x,O.y+b[u-1].y,b[u-1].x+st):Et(O.x,O.y,d+st)}}}K(),ct();function K(){const it=s.length/3;if(h){let rt=0,st=N*rt;for(let xt=0;xt<wt;xt++){const gt=Nt[xt];Ft(gt[2]+st,gt[1]+st,gt[0]+st)}rt=u+m*2,st=N*rt;for(let xt=0;xt<wt;xt++){const gt=Nt[xt];Ft(gt[0]+st,gt[1]+st,gt[2]+st)}}else{for(let rt=0;rt<wt;rt++){const st=Nt[rt];Ft(st[2],st[1],st[0])}for(let rt=0;rt<wt;rt++){const st=Nt[rt];Ft(st[0]+N*u,st[1]+N*u,st[2]+N*u)}}i.addGroup(it,s.length/3-it,0)}function ct(){const it=s.length/3;let rt=0;nt(L,rt),rt+=L.length;for(let st=0,xt=C.length;st<xt;st++){const gt=C[st];nt(gt,rt),rt+=gt.length}i.addGroup(it,s.length/3-it,1)}function nt(it,rt){let st=it.length;for(;--st>=0;){const xt=st;let gt=st-1;gt<0&&(gt=it.length-1);for(let Xt=0,ht=u+m*2;Xt<ht;Xt++){const Ut=N*Xt,Bt=N*(Xt+1),O=rt+xt+Ut,Zt=rt+gt+Ut,Kt=rt+gt+Bt,P=rt+xt+Bt;pt(O,Zt,Kt,P)}}}function Et(it,rt,st){c.push(it),c.push(rt),c.push(st)}function Ft(it,rt,st){ae(it),ae(rt),ae(st);const xt=s.length/3,gt=S.generateTopUV(i,s,xt-3,xt-2,xt-1);Wt(gt[0]),Wt(gt[1]),Wt(gt[2])}function pt(it,rt,st,xt){ae(it),ae(rt),ae(xt),ae(rt),ae(st),ae(xt);const gt=s.length/3,Xt=S.generateSideWallUV(i,s,gt-6,gt-3,gt-2,gt-1);Wt(Xt[0]),Wt(Xt[1]),Wt(Xt[3]),Wt(Xt[1]),Wt(Xt[2]),Wt(Xt[3])}function ae(it){s.push(c[it*3+0]),s.push(c[it*3+1]),s.push(c[it*3+2])}function Wt(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Q0(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Zo[s.type]().fromJSON(s)),new $o(i,t.options)}}const J0={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],u=t[s*3+1];return[new ft(r,o),new ft(a,c),new ft(l,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],d=t[i*3+2],h=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ft(o,1-c),new ft(l,1-d),new ft(h,1-g),new ft(_,1-p)]:[new ft(a,1-c),new ft(u,1-d),new ft(f,1-g),new ft(m,1-p)]}};function Q0(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Mr extends Fl{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Mr(t.radius,t.detail)}}class _n extends Me{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=t/a,h=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*h-o;for(let b=0;b<l;b++){const v=b*d-r;g.push(v,-S,0),_.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const b=S+l*p,v=S+l*(p+1),A=S+1+l*(p+1),E=S+1+l*p;f.push(b,v,E),f.push(v,A,E)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.width,t.height,t.widthSegments,t.heightSegments)}}class de extends Me{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new D,h=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const S=[],b=p/i,v=o+b*a,A=t*Math.cos(v),E=Math.sqrt(t*t-A*A);let w=0;p===0&&o===0?w=.5/e:p===i&&c===Math.PI&&(w=-.5/e);for(let x=0;x<=e;x++){const y=x/e,T=s+y*r;d.x=-E*Math.cos(T),d.y=A,d.z=E*Math.sin(T),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(y+w,1-b),S.push(l++)}u.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){const b=u[p][S+1],v=u[p][S],A=u[p+1][S],E=u[p+1][S+1];(p!==0||o>0)&&f.push(b,v,E),(p!==i-1||c<Math.PI)&&f.push(v,A,E)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new de(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Dn extends Me{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],d=[],h=new D,f=new D,g=new D;for(let _=0;_<=i;_++){const m=o+_/i*a;for(let p=0;p<=s;p++){const S=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(S),f.y=(t+e*Math.cos(m))*Math.sin(S),f.z=e*Math.sin(m),l.push(f.x,f.y,f.z),h.x=t*Math.cos(S),h.y=t*Math.sin(S),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/s),d.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=s;m++){const p=(s+1)*_+m-1,S=(s+1)*(_-1)+m-1,b=(s+1)*(_-1)+m,v=(s+1)*_+m;c.push(p,S,v),c.push(S,b,v)}this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class sa extends Me{constructor(t=new jd(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,c=new D,l=new ft;let u=new D;const d=[],h=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(f,2));function _(){for(let b=0;b<e;b++)m(b);m(r===!1?e:0),S(),p()}function m(b){u=t.getPointAt(b/e,u);const v=o.normals[b],A=o.binormals[b];for(let E=0;E<=s;E++){const w=E/s*Math.PI*2,x=Math.sin(w),y=-Math.cos(w);c.x=y*v.x+x*A.x,c.y=y*v.y+x*A.y,c.z=y*v.z+x*A.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,d.push(a.x,a.y,a.z)}}function p(){for(let b=1;b<=e;b++)for(let v=1;v<=s;v++){const A=(s+1)*(b-1)+(v-1),E=(s+1)*b+(v-1),w=(s+1)*b+v,x=(s+1)*(b-1)+v;g.push(A,E,x),g.push(E,w,x)}}function S(){for(let b=0;b<=e;b++)for(let v=0;v<=s;v++)l.x=b/e,l.y=v/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new sa(new Zo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Gs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(rh(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(rh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function an(n){const t={};for(let e=0;e<n.length;e++){const i=Gs(n[e]);for(const s in i)t[s]=i[s]}return t}function rh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function j0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function of(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const tg={clone:Gs,merge:an};var eg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends Xs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eg,this.fragmentShader=ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=j0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ne().setHex(s.value);break;case"v2":this.uniforms[i].value=new ft().fromArray(s.value);break;case"v3":this.uniforms[i].value=new D().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Le().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ee().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Se().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class ig extends Sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ji extends Xs{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ne(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jc,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class sg extends Xs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rg extends Xs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Bl extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class og extends Bl{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ha=new Se,oh=new D,ah=new D;class af{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nl,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;oh.setFromMatrixPosition(t.matrixWorld),e.position.copy(oh),ah.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ah),e.updateMatrixWorld(),Ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Rr||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const mo=new D,go=new Ws,Gn=new D;class cf extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(mo,go,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mo,go,Gn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(mo,go,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mo,go,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const bi=new D,ch=new ft,lh=new ft;class Mn extends cf{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,e){return this.getViewBounds(t,ch,lh),e.subVectors(lh,ch)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ag extends af{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0}}class cg extends Bl{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ag}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class kl extends cf{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class lg extends af{constructor(){super(new kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ug extends Bl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new lg}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const ys=-90,Ss=1;class hg extends ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn(ys,Ss,t,e);s.layers=this.layers,this.add(s);const r=new Mn(ys,Ss,t,e);r.layers=this.layers,this.add(r);const o=new Mn(ys,Ss,t,e);o.layers=this.layers,this.add(o);const a=new Mn(ys,Ss,t,e);a.layers=this.layers,this.add(a);const c=new Mn(ys,Ss,t,e);c.layers=this.layers,this.add(c);const l=new Mn(ys,Ss,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Rr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class dg extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const uh=new Se;class fg{constructor(t,e,i=0,s=1/0){this.ray=new Xd(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ll,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ue("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return uh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uh),this}intersectObject(t,e=!0,i=[]){return sl(t,this,i,e),i.sort(hh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)sl(t[s],this,i,e);return i.sort(hh),i}}function hh(n,t){return n.distance-t.distance}function sl(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)sl(r[o],t,e,!0)}}const tu=class tu{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};tu.prototype.isMatrix2=!0;let dh=tu;function fh(n,t,e,i){const s=pg(i);switch(e){case Od:return n*t;case wl:return n*t/s.components*s.byteLength;case El:return n*t/s.components*s.byteLength;case Zi:return n*t*2/s.components*s.byteLength;case Tl:return n*t*2/s.components*s.byteLength;case zd:return n*t*3/s.components*s.byteLength;case zn:return n*t*4/s.components*s.byteLength;case Al:return n*t*4/s.components*s.byteLength;case Co:case Po:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Io:case Lo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Sc:case wc:return Math.max(n,16)*Math.max(t,8)/4;case yc:case bc:return Math.max(n,8)*Math.max(t,8)/2;case Ec:case Tc:case Rc:case Cc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ac:case Bo:case Pc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Lc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Fc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case zc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case kc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Gc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Vc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Wc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Xc:case qc:case Yc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Zc:case $c:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ko:case Kc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pg(n){switch(n){case yn:case Dd:return{byteLength:1,components:1};case Tr:case Nd:case di:return{byteLength:2,components:1};case Sl:case bl:return{byteLength:2,components:4};case Jn:case yl:case On:return{byteLength:4,components:1};case Ud:case Fd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vl}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function mg(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var gg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xg=`#ifdef USE_ALPHAHASH
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
#endif`,_g=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sg=`#ifdef USE_AOMAP
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
#endif`,bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wg=`#ifdef USE_BATCHING
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
#endif`,Eg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ag=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cg=`#ifdef USE_IRIDESCENCE
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
#endif`,Pg=`#ifdef USE_BUMPMAP
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
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Bg=`#define PI 3.141592653589793
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
} // validated`,kg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hg=`vec3 transformedNormal = objectNormal;
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
#endif`,Gg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zg=`#ifdef USE_ENVMAP
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
#endif`,$g=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
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
#endif`,Jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
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
#endif`,jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ex=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ix=`#ifdef USE_GRADIENTMAP
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
}`,sx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ax=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cx=`#ifdef USE_ENVMAP
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
#endif`,lx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fx=`PhysicalMaterial material;
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
#endif`,px=`uniform sampler2D dfgLUT;
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
}`,mx=`
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
#endif`,gx=`#if defined( RE_IndirectDiffuse )
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
#endif`,xx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_x=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ex=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tx=`#if defined( USE_POINTS_UV )
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
#endif`,Ax=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Px=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ix=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lx=`#ifdef USE_MORPHTARGETS
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
#endif`,Dx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ux=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bx=`#ifdef USE_NORMALMAP
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
#endif`,kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$x=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,e_=`float getShadowMask() {
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
}`,n_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i_=`#ifdef USE_SKINNING
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
#endif`,s_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r_=`#ifdef USE_SKINNING
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
#endif`,o_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u_=`#ifdef USE_TRANSMISSION
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
#endif`,h_=`#ifdef USE_TRANSMISSION
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
#endif`,d_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x_=`uniform sampler2D t2D;
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
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`#include <common>
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
}`,b_=`#if DEPTH_PACKING == 3200
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
}`,w_=`#define DISTANCE
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
}`,E_=`#define DISTANCE
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
}`,T_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R_=`uniform float scale;
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
}`,C_=`uniform vec3 diffuse;
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
}`,P_=`#include <common>
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
}`,I_=`uniform vec3 diffuse;
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
}`,L_=`#define LAMBERT
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
}`,D_=`#define LAMBERT
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
}`,N_=`#define MATCAP
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
}`,U_=`#define MATCAP
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
}`,F_=`#define NORMAL
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
}`,O_=`#define NORMAL
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
}`,z_=`#define PHONG
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
}`,B_=`#define PHONG
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
}`,k_=`#define STANDARD
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
}`,H_=`#define STANDARD
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
}`,G_=`#define TOON
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
}`,V_=`#define TOON
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
}`,W_=`uniform float size;
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
}`,X_=`uniform vec3 diffuse;
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
}`,q_=`#include <common>
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
}`,Y_=`uniform vec3 color;
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
}`,Z_=`uniform float rotation;
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
}`,$_=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:gg,alphahash_pars_fragment:xg,alphamap_fragment:_g,alphamap_pars_fragment:vg,alphatest_fragment:Mg,alphatest_pars_fragment:yg,aomap_fragment:Sg,aomap_pars_fragment:bg,batching_pars_vertex:wg,batching_vertex:Eg,begin_vertex:Tg,beginnormal_vertex:Ag,bsdfs:Rg,iridescence_fragment:Cg,bumpmap_pars_fragment:Pg,clipping_planes_fragment:Ig,clipping_planes_pars_fragment:Lg,clipping_planes_pars_vertex:Dg,clipping_planes_vertex:Ng,color_fragment:Ug,color_pars_fragment:Fg,color_pars_vertex:Og,color_vertex:zg,common:Bg,cube_uv_reflection_fragment:kg,defaultnormal_vertex:Hg,displacementmap_pars_vertex:Gg,displacementmap_vertex:Vg,emissivemap_fragment:Wg,emissivemap_pars_fragment:Xg,colorspace_fragment:qg,colorspace_pars_fragment:Yg,envmap_fragment:Zg,envmap_common_pars_fragment:$g,envmap_pars_fragment:Kg,envmap_pars_vertex:Jg,envmap_physical_pars_fragment:cx,envmap_vertex:Qg,fog_vertex:jg,fog_pars_vertex:tx,fog_fragment:ex,fog_pars_fragment:nx,gradientmap_pars_fragment:ix,lightmap_pars_fragment:sx,lights_lambert_fragment:rx,lights_lambert_pars_fragment:ox,lights_pars_begin:ax,lights_toon_fragment:lx,lights_toon_pars_fragment:ux,lights_phong_fragment:hx,lights_phong_pars_fragment:dx,lights_physical_fragment:fx,lights_physical_pars_fragment:px,lights_fragment_begin:mx,lights_fragment_maps:gx,lights_fragment_end:xx,lightprobes_pars_fragment:_x,logdepthbuf_fragment:vx,logdepthbuf_pars_fragment:Mx,logdepthbuf_pars_vertex:yx,logdepthbuf_vertex:Sx,map_fragment:bx,map_pars_fragment:wx,map_particle_fragment:Ex,map_particle_pars_fragment:Tx,metalnessmap_fragment:Ax,metalnessmap_pars_fragment:Rx,morphinstance_vertex:Cx,morphcolor_vertex:Px,morphnormal_vertex:Ix,morphtarget_pars_vertex:Lx,morphtarget_vertex:Dx,normal_fragment_begin:Nx,normal_fragment_maps:Ux,normal_pars_fragment:Fx,normal_pars_vertex:Ox,normal_vertex:zx,normalmap_pars_fragment:Bx,clearcoat_normal_fragment_begin:kx,clearcoat_normal_fragment_maps:Hx,clearcoat_pars_fragment:Gx,iridescence_pars_fragment:Vx,opaque_fragment:Wx,packing:Xx,premultiplied_alpha_fragment:qx,project_vertex:Yx,dithering_fragment:Zx,dithering_pars_fragment:$x,roughnessmap_fragment:Kx,roughnessmap_pars_fragment:Jx,shadowmap_pars_fragment:Qx,shadowmap_pars_vertex:jx,shadowmap_vertex:t_,shadowmask_pars_fragment:e_,skinbase_vertex:n_,skinning_pars_vertex:i_,skinning_vertex:s_,skinnormal_vertex:r_,specularmap_fragment:o_,specularmap_pars_fragment:a_,tonemapping_fragment:c_,tonemapping_pars_fragment:l_,transmission_fragment:u_,transmission_pars_fragment:h_,uv_pars_fragment:d_,uv_pars_vertex:f_,uv_vertex:p_,worldpos_vertex:m_,background_vert:g_,background_frag:x_,backgroundCube_vert:__,backgroundCube_frag:v_,cube_vert:M_,cube_frag:y_,depth_vert:S_,depth_frag:b_,distance_vert:w_,distance_frag:E_,equirect_vert:T_,equirect_frag:A_,linedashed_vert:R_,linedashed_frag:C_,meshbasic_vert:P_,meshbasic_frag:I_,meshlambert_vert:L_,meshlambert_frag:D_,meshmatcap_vert:N_,meshmatcap_frag:U_,meshnormal_vert:F_,meshnormal_frag:O_,meshphong_vert:z_,meshphong_frag:B_,meshphysical_vert:k_,meshphysical_frag:H_,meshtoon_vert:G_,meshtoon_frag:V_,points_vert:W_,points_frag:X_,shadow_vert:q_,shadow_frag:Y_,sprite_vert:Z_,sprite_frag:$_},At={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Xn={basic:{uniforms:an([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:an([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new ne(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:an([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:an([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:an([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new ne(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:an([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:an([At.points,At.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:an([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:an([At.common,At.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:an([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:an([At.sprite,At.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:an([At.common,At.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:an([At.lights,At.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Xn.physical={uniforms:an([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const xo={r:0,b:0,g:0},K_=new Se,uf=new ee;uf.set(-1,0,0,0,1,0,0,0,1);function J_(n,t,e,i,s,r){const o=new ne(0);let a=s===!0?0:1,c,l,u=null,d=0,h=null;function f(S){let b=S.isScene===!0?S.background:null;if(b&&b.isTexture){const v=S.backgroundBlurriness>0;b=t.get(b,v)}return b}function g(S){let b=!1;const v=f(S);v===null?m(o,a):v&&v.isColor&&(m(v,1),b=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(S,b){const v=f(b);v&&(v.isCubeTexture||v.mapping===na)?(l===void 0&&(l=new J(new te(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Gs(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(K_.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(uf),l.material.toneMapped=he.getTransfer(v.colorSpace)!==xe,(u!==v||d!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new J(new _n(2,2),new Sn({name:"BackgroundMaterial",uniforms:Gs(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=he.getTransfer(v.colorSpace)!==xe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,b){S.getRGB(xo,of(n)),e.buffers.color.setClear(xo.r,xo.g,xo.b,b,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,b=1){o.set(S),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:g,addToRenderList:_,dispose:p}}function Q_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(C,I,U,z,L){let F=!1;const N=d(C,z,U,I);r!==N&&(r=N,l(r.object)),F=f(C,z,U,L),F&&g(C,z,U,L),L!==null&&t.update(L,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,v(C,I,U,z),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function u(C){return n.deleteVertexArray(C)}function d(C,I,U,z){const L=z.wireframe===!0;let F=i[I.id];F===void 0&&(F={},i[I.id]=F);const N=C.isInstancedMesh===!0?C.id:0;let k=F[N];k===void 0&&(k={},F[N]=k);let V=k[U.id];V===void 0&&(V={},k[U.id]=V);let q=V[L];return q===void 0&&(q=h(c()),V[L]=q),q}function h(C){const I=[],U=[],z=[];for(let L=0;L<e;L++)I[L]=0,U[L]=0,z[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:z,object:C,attributes:{},index:null}}function f(C,I,U,z){const L=r.attributes,F=I.attributes;let N=0;const k=U.getAttributes();for(const V in k)if(k[V].location>=0){const W=L[V];let ut=F[V];if(ut===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(ut=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(ut=C.instanceColor)),W===void 0||W.attribute!==ut||ut&&W.data!==ut.data)return!0;N++}return r.attributesNum!==N||r.index!==z}function g(C,I,U,z){const L={},F=I.attributes;let N=0;const k=U.getAttributes();for(const V in k)if(k[V].location>=0){let W=F[V];W===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(W=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(W=C.instanceColor));const ut={};ut.attribute=W,W&&W.data&&(ut.data=W.data),L[V]=ut,N++}r.attributes=L,r.attributesNum=N,r.index=z}function _(){const C=r.newAttributes;for(let I=0,U=C.length;I<U;I++)C[I]=0}function m(C){p(C,0)}function p(C,I){const U=r.newAttributes,z=r.enabledAttributes,L=r.attributeDivisors;U[C]=1,z[C]===0&&(n.enableVertexAttribArray(C),z[C]=1),L[C]!==I&&(n.vertexAttribDivisor(C,I),L[C]=I)}function S(){const C=r.newAttributes,I=r.enabledAttributes;for(let U=0,z=I.length;U<z;U++)I[U]!==C[U]&&(n.disableVertexAttribArray(U),I[U]=0)}function b(C,I,U,z,L,F,N){N===!0?n.vertexAttribIPointer(C,I,U,L,F):n.vertexAttribPointer(C,I,U,z,L,F)}function v(C,I,U,z){_();const L=z.attributes,F=U.getAttributes(),N=I.defaultAttributeValues;for(const k in F){const V=F[k];if(V.location>=0){let q=L[k];if(q===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(q=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(q=C.instanceColor)),q!==void 0){const W=q.normalized,ut=q.itemSize,Nt=t.get(q);if(Nt===void 0)continue;const wt=Nt.buffer,Mt=Nt.type,K=Nt.bytesPerElement,ct=Mt===n.INT||Mt===n.UNSIGNED_INT||q.gpuType===yl;if(q.isInterleavedBufferAttribute){const nt=q.data,Et=nt.stride,Ft=q.offset;if(nt.isInstancedInterleavedBuffer){for(let pt=0;pt<V.locationSize;pt++)p(V.location+pt,nt.meshPerAttribute);C.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let pt=0;pt<V.locationSize;pt++)m(V.location+pt);n.bindBuffer(n.ARRAY_BUFFER,wt);for(let pt=0;pt<V.locationSize;pt++)b(V.location+pt,ut/V.locationSize,Mt,W,Et*K,(Ft+ut/V.locationSize*pt)*K,ct)}else{if(q.isInstancedBufferAttribute){for(let nt=0;nt<V.locationSize;nt++)p(V.location+nt,q.meshPerAttribute);C.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let nt=0;nt<V.locationSize;nt++)m(V.location+nt);n.bindBuffer(n.ARRAY_BUFFER,wt);for(let nt=0;nt<V.locationSize;nt++)b(V.location+nt,ut/V.locationSize,Mt,W,ut*K,ut/V.locationSize*nt*K,ct)}}else if(N!==void 0){const W=N[k];if(W!==void 0)switch(W.length){case 2:n.vertexAttrib2fv(V.location,W);break;case 3:n.vertexAttrib3fv(V.location,W);break;case 4:n.vertexAttrib4fv(V.location,W);break;default:n.vertexAttrib1fv(V.location,W)}}}}S()}function A(){y();for(const C in i){const I=i[C];for(const U in I){const z=I[U];for(const L in z){const F=z[L];for(const N in F)u(F[N].object),delete F[N];delete z[L]}}delete i[C]}}function E(C){if(i[C.id]===void 0)return;const I=i[C.id];for(const U in I){const z=I[U];for(const L in z){const F=z[L];for(const N in F)u(F[N].object),delete F[N];delete z[L]}}delete i[C.id]}function w(C){for(const I in i){const U=i[I];for(const z in U){const L=U[z];if(L[C.id]===void 0)continue;const F=L[C.id];for(const N in F)u(F[N].object),delete F[N];delete L[C.id]}}}function x(C){for(const I in i){const U=i[I],z=C.isInstancedMesh===!0?C.id:0,L=U[z];if(L!==void 0){for(const F in L){const N=L[F];for(const k in N)u(N[k].object),delete N[k];delete L[F]}delete U[z],Object.keys(U).length===0&&delete i[I]}}}function y(){T(),o=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:y,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function j_(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),e.update(l,i,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function tv(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==zn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const x=w===di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==yn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==On&&!x)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(jt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:v,maxSamples:A,samples:E}}function ev(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Oi,a=new ee,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const S=r?0:i,b=S*4;let v=p.clippingState||null;c.value=v,v=u(g,h,b,f);for(let A=0;A!==b;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,v=f;b!==_;++b,v+=4)o.copy(d[b]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}const Ai=4,ph=[.125,.215,.35,.446,.526,.582],ki=20,nv=256,sr=new kl,mh=new ne;let Ga=null,Va=0,Wa=0,Xa=!1;const iv=new D;class gh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=iv}=r;Ga=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ga,Va,Wa),this._renderer.xr.enabled=Xa,t.scissorTest=!1,bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ga=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:di,format:zn,colorSpace:Ho,depthBuffer:!1},s=xh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sv(r)),this._blurMaterial=ov(r,t,e),this._ggxMaterial=rv(r,t,e)}return s}_compileMaterial(t){const e=new J(new Me,t);this._renderer.compile(e,sr)}_sceneToCubeUV(t,e,i,s,r){const c=new Mn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(mh),d.toneMapping=Zn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new J(new te,new An({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(mh),p=!0);for(let b=0;b<6;b++){const v=b%3;v===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[b],r.y,r.z)):v===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[b]));const A=this._cubeSize;bs(s,v*A,b>2?A:0,A,A),d.setRenderTarget(s),p&&d.render(_,c),d.render(t,c)}d.toneMapping=f,d.autoClear=h,t.background=S}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Yi||t.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;bs(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,sr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=0+l*1.25,f=d*h,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-Ai?i-g+Ai:0),p=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,bs(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(a,sr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,bs(t,m,p,3*_,2*_),s.setRenderTarget(t),s.render(a,sr)}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ue("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=l;const h=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ki-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ki;m>ki&&jt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const p=[];let S=0;for(let w=0;w<ki;++w){const x=w/_,y=Math.exp(-x*x/2);p.push(y),w===0?S+=y:w<m&&(S+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/S;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;const v=this._sizeLods[s],A=3*v*(s>b-Ai?s-b+Ai:0),E=4*(this._cubeSize-v);bs(e,A,E,3*v,2*v),c.setRenderTarget(e),c.render(d,sr)}}function sv(n){const t=[],e=[],i=[];let s=n;const r=n-Ai+1+ph.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Ai?c=ph[o-n+Ai-1]:o===0&&(c=0),e.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),b=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let E=0;E<f;E++){const w=E%3*2/3-1,x=E>2?0:-1,y=[w,x,0,w+2/3,x,0,w+2/3,x+1,0,w,x,0,w+2/3,x+1,0,w,x+1,0];S.set(y,_*g*E),b.set(h,m*g*E);const T=[E,E,E,E,E,E];v.set(T,p*g*E)}const A=new Me;A.setAttribute("position",new fn(S,_)),A.setAttribute("uv",new fn(b,m)),A.setAttribute("faceIndex",new fn(v,p)),i.push(new J(A,null)),s>Ai&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function xh(n,t,e){const i=new Kn(n,t,e);return i.texture.mapping=na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function rv(n,t,e){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ra(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function ov(n,t,e){const i=new Float32Array(ki),s=new D(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ra(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function _h(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ra(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function vh(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function ra(){return`

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
	`}class hf extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Yd(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new te(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:ui});r.uniforms.tEquirect.value=e;const o=new J(s,r),a=e.minFilter;return e.minFilter===Vi&&(e.minFilter=sn),new hg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}function av(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===da||f===fa)if(t.has(h)){const g=t.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new hf(g.height);return _.fromEquirectangularTexture(n,h),t.set(h,_),h.addEventListener("dispose",l),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,g=f===da||f===fa,_=f===Yi||f===zs;if(g||_){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new gh(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const S=h.image;return g&&S&&S.height>0||_&&S&&c(S)?(i===null&&(i=new gh(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===da?h.mapping=Yi:f===fa&&(h.mapping=zs),h}function c(h){let f=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function l(h){const f=h.target;f.removeEventListener("dispose",l);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function cv(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ls("WebGLRenderer: "+i+" extension not supported."),s}}}function lv(n,t,e,i){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)t.update(h[f],n.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const S=f.array;_=f.version;for(let b=0,v=S.length;b<v;b+=3){const A=S[b+0],E=S[b+1],w=S[b+2];h.push(A,E,E,w,w,A)}}else{const S=g.array;_=g.version;for(let b=0,v=S.length/3-1;b<v;b+=3){const A=b+0,E=b+1,w=b+2;h.push(A,E,E,w,w,A)}}const m=new(g.count>=65535?Vd:Gd)(h,1);m.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function uv(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,h){n.drawElements(i,h,r,d*o),e.update(h,i,1)}function l(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*o,f),e.update(h,i,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let _=0;for(let m=0;m<f;m++)_+=h[m];e.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function hv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:ue("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function dv(n,t,e){const i=new WeakMap,s=new Le;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let T=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var f=T;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let A=a.attributes.position.count*v,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const w=new Float32Array(A*E*4*d),x=new kd(w,A,E,d);x.type=On,x.needsUpdate=!0;const y=v*4;for(let C=0;C<d;C++){const I=p[C],U=S[C],z=b[C],L=A*E*4*C;for(let F=0;F<I.count;F++){const N=F*y;g===!0&&(s.fromBufferAttribute(I,F),w[L+N+0]=s.x,w[L+N+1]=s.y,w[L+N+2]=s.z,w[L+N+3]=0),_===!0&&(s.fromBufferAttribute(U,F),w[L+N+4]=s.x,w[L+N+5]=s.y,w[L+N+6]=s.z,w[L+N+7]=0),m===!0&&(s.fromBufferAttribute(z,F),w[L+N+8]=s.x,w[L+N+9]=s.y,w[L+N+10]=s.z,w[L+N+11]=z.itemSize===4?s.w:1)}}h={count:d,texture:x,size:new ft(A,E)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function fv(n,t,e,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,d=l.geometry,h=t.get(l,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const pv={[Td]:"LINEAR_TONE_MAPPING",[Ad]:"REINHARD_TONE_MAPPING",[Rd]:"CINEON_TONE_MAPPING",[Ml]:"ACES_FILMIC_TONE_MAPPING",[Pd]:"AGX_TONE_MAPPING",[Id]:"NEUTRAL_TONE_MAPPING",[Cd]:"CUSTOM_TONE_MAPPING"};function mv(n,t,e,i,s,r){const o=new Kn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new ks(t,e):void 0}),a=new Kn(t,e,{type:di,depthBuffer:!1,stencilBuffer:!1}),c=new Me;c.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const l=new ig({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new J(c,l),d=new kl(-1,1,1,-1,0,1);let h=null,f=null,g=!1,_,m=null,p=[],S=!1;this.setSize=function(b,v){o.setSize(b,v),a.setSize(b,v);for(let A=0;A<p.length;A++){const E=p[A];E.setSize&&E.setSize(b,v)}},this.setEffects=function(b){p=b,S=p.length>0&&p[0].isRenderPass===!0;const v=o.width,A=o.height;for(let E=0;E<p.length;E++){const w=p[E];w.setSize&&w.setSize(v,A)}},this.begin=function(b,v){if(g||b.toneMapping===Zn&&p.length===0)return!1;if(m=v,v!==null){const A=v.width,E=v.height;(o.width!==A||o.height!==E)&&this.setSize(A,E)}return S===!1&&b.setRenderTarget(o),_=b.toneMapping,b.toneMapping=Zn,!0},this.hasRenderPass=function(){return S},this.end=function(b,v){b.toneMapping=_,g=!0;let A=o,E=a;for(let w=0;w<p.length;w++){const x=p[w];if(x.enabled!==!1&&(x.render(b,E,A,v),x.needsSwap!==!1)){const y=A;A=E,E=y}}if(h!==b.outputColorSpace||f!==b.toneMapping){h=b.outputColorSpace,f=b.toneMapping,l.defines={},he.getTransfer(h)===xe&&(l.defines.SRGB_TRANSFER="");const w=pv[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=A.texture,b.setRenderTarget(m),b.render(u,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}const df=new Qe,rl=new ks(1,1),ff=new kd,pf=new i0,mf=new Yd,Mh=[],yh=[],Sh=new Float32Array(16),bh=new Float32Array(9),wh=new Float32Array(4);function qs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Mh[s];if(r===void 0&&(r=new Float32Array(s),Mh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function We(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Xe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function oa(n,t){let e=yh[t];e===void 0&&(e=new Int32Array(t),yh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function gv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function xv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;n.uniform2fv(this.addr,t),Xe(e,t)}}function _v(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;n.uniform3fv(this.addr,t),Xe(e,t)}}function vv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;n.uniform4fv(this.addr,t),Xe(e,t)}}function Mv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(We(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,i))return;wh.set(i),n.uniformMatrix2fv(this.addr,!1,wh),Xe(e,i)}}function yv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(We(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,i))return;bh.set(i),n.uniformMatrix3fv(this.addr,!1,bh),Xe(e,i)}}function Sv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(We(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,i))return;Sh.set(i),n.uniformMatrix4fv(this.addr,!1,Sh),Xe(e,i)}}function bv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function wv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;n.uniform2iv(this.addr,t),Xe(e,t)}}function Ev(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;n.uniform3iv(this.addr,t),Xe(e,t)}}function Tv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;n.uniform4iv(this.addr,t),Xe(e,t)}}function Av(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Rv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;n.uniform2uiv(this.addr,t),Xe(e,t)}}function Cv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;n.uniform3uiv(this.addr,t),Xe(e,t)}}function Pv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;n.uniform4uiv(this.addr,t),Xe(e,t)}}function Iv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(rl.compareFunction=e.isReversedDepthBuffer()?Cl:Rl,r=rl):r=df,e.setTexture2D(t||r,s)}function Lv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||pf,s)}function Dv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||mf,s)}function Nv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||ff,s)}function Uv(n){switch(n){case 5126:return gv;case 35664:return xv;case 35665:return _v;case 35666:return vv;case 35674:return Mv;case 35675:return yv;case 35676:return Sv;case 5124:case 35670:return bv;case 35667:case 35671:return wv;case 35668:case 35672:return Ev;case 35669:case 35673:return Tv;case 5125:return Av;case 36294:return Rv;case 36295:return Cv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Iv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Nv}}function Fv(n,t){n.uniform1fv(this.addr,t)}function Ov(n,t){const e=qs(t,this.size,2);n.uniform2fv(this.addr,e)}function zv(n,t){const e=qs(t,this.size,3);n.uniform3fv(this.addr,e)}function Bv(n,t){const e=qs(t,this.size,4);n.uniform4fv(this.addr,e)}function kv(n,t){const e=qs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Hv(n,t){const e=qs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Gv(n,t){const e=qs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Vv(n,t){n.uniform1iv(this.addr,t)}function Wv(n,t){n.uniform2iv(this.addr,t)}function Xv(n,t){n.uniform3iv(this.addr,t)}function qv(n,t){n.uniform4iv(this.addr,t)}function Yv(n,t){n.uniform1uiv(this.addr,t)}function Zv(n,t){n.uniform2uiv(this.addr,t)}function $v(n,t){n.uniform3uiv(this.addr,t)}function Kv(n,t){n.uniform4uiv(this.addr,t)}function Jv(n,t,e){const i=this.cache,s=t.length,r=oa(e,s);We(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=rl:o=df;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Qv(n,t,e){const i=this.cache,s=t.length,r=oa(e,s);We(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||pf,r[o])}function jv(n,t,e){const i=this.cache,s=t.length,r=oa(e,s);We(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||mf,r[o])}function tM(n,t,e){const i=this.cache,s=t.length,r=oa(e,s);We(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ff,r[o])}function eM(n){switch(n){case 5126:return Fv;case 35664:return Ov;case 35665:return zv;case 35666:return Bv;case 35674:return kv;case 35675:return Hv;case 35676:return Gv;case 5124:case 35670:return Vv;case 35667:case 35671:return Wv;case 35668:case 35672:return Xv;case 35669:case 35673:return qv;case 5125:return Yv;case 36294:return Zv;case 36295:return $v;case 36296:return Kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return jv;case 36289:case 36303:case 36311:case 36292:return tM}}class nM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Uv(e.type)}}class iM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=eM(e.type)}}class sM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const qa=/(\w+)(\])?(\[|\.)?/g;function Eh(n,t){n.seq.push(t),n.map[t.id]=t}function rM(n,t,e){const i=n.name,s=i.length;for(qa.lastIndex=0;;){const r=qa.exec(i),o=qa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Eh(e,l===void 0?new nM(a,n,t):new iM(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new sM(a),Eh(e,d)),e=d}}}class Do{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);rM(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Th(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const oM=37297;let aM=0;function cM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Ah=new ee;function lM(n){he._getMatrix(Ah,he.workingColorSpace,n);const t=`mat3( ${Ah.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(n)){case Go:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Rh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+cM(n.getShaderSource(t),a)}else return r}function uM(n,t){const e=lM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const hM={[Td]:"Linear",[Ad]:"Reinhard",[Rd]:"Cineon",[Ml]:"ACESFilmic",[Pd]:"AgX",[Id]:"Neutral",[Cd]:"Custom"};function dM(n,t){const e=hM[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const _o=new D;function fM(){he.getLuminanceCoefficients(_o);const n=_o.x.toFixed(4),t=_o.y.toFixed(4),e=_o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function mM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function gM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function dr(n){return n!==""}function Ch(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ph(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(n){return n.replace(xM,vM)}const _M=new Map;function vM(n,t){let e=re[t];if(e===void 0){const i=_M.get(t);if(i!==void 0)e=re[i],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ol(e)}const MM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ih(n){return n.replace(MM,yM)}function yM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const SM={[Ro]:"SHADOWMAP_TYPE_PCF",[ur]:"SHADOWMAP_TYPE_VSM"};function bM(n){return SM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wM={[Yi]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE",[na]:"ENVMAP_TYPE_CUBE_UV"};function EM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":wM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const TM={[zs]:"ENVMAP_MODE_REFRACTION"};function AM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":TM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const RM={[Ed]:"ENVMAP_BLENDING_MULTIPLY",[ym]:"ENVMAP_BLENDING_MIX",[Sm]:"ENVMAP_BLENDING_ADD"};function CM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":RM[n.combine]||"ENVMAP_BLENDING_NONE"}function PM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function IM(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=bM(e),l=EM(e),u=AM(e),d=CM(e),h=PM(e),f=pM(e),g=mM(r),_=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(dr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(dr).join(`
`),p.length>0&&(p+=`
`)):(m=[Lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),p=[Lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?re.tonemapping_pars_fragment:"",e.toneMapping!==Zn?dM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,uM("linearToOutputTexel",e.outputColorSpace),fM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(dr).join(`
`)),o=ol(o),o=Ch(o,e),o=Ph(o,e),a=ol(a),a=Ch(a,e),a=Ph(a,e),o=Ih(o),a=Ih(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=S+m+o,v=S+p+a,A=Th(s,s.VERTEX_SHADER,b),E=Th(s,s.FRAGMENT_SHADER,v);s.attachShader(_,A),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(C){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(_)||"",U=s.getShaderInfoLog(A)||"",z=s.getShaderInfoLog(E)||"",L=I.trim(),F=U.trim(),N=z.trim();let k=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,A,E);else{const q=Rh(s,A,"vertex"),W=Rh(s,E,"fragment");ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+q+`
`+W)}else L!==""?jt("WebGLProgram: Program Info Log:",L):(F===""||N==="")&&(V=!1);V&&(C.diagnostics={runnable:k,programLog:L,vertexShader:{log:F,prefix:m},fragmentShader:{log:N,prefix:p}})}s.deleteShader(A),s.deleteShader(E),x=new Do(s,_),y=gM(s,_)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(_,oM)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=aM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}let LM=0;class DM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new NM(t),e.set(t,i)),i}}class NM{constructor(t){this.id=LM++,this.code=t,this.usedTimes=0}}function UM(n){return n===Zi||n===Bo||n===ko}function FM(n,t,e,i,s,r){const o=new Ll,a=new DM,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,y,T,C,I,U){const z=C.fog,L=I.geometry,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=t.get(x.envMap||F,N),V=k&&k.mapping===na?k.image.height:null,q=f[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&jt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const W=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ut=W!==void 0?W.length:0;let Nt=0;L.morphAttributes.position!==void 0&&(Nt=1),L.morphAttributes.normal!==void 0&&(Nt=2),L.morphAttributes.color!==void 0&&(Nt=3);let wt,Mt,K,ct;if(q){const kt=Xn[q];wt=kt.vertexShader,Mt=kt.fragmentShader}else{wt=x.vertexShader,Mt=x.fragmentShader;const kt=a.getVertexShaderStage(x),Ne=a.getFragmentShaderStage(x);a.update(x,kt,Ne),K=kt.id,ct=Ne.id}const nt=n.getRenderTarget(),Et=n.state.buffers.depth.getReversed(),Ft=I.isInstancedMesh===!0,pt=I.isBatchedMesh===!0,ae=!!x.map,Wt=!!x.matcap,it=!!k,rt=!!x.aoMap,st=!!x.lightMap,xt=!!x.bumpMap&&x.wireframe===!1,gt=!!x.normalMap,Xt=!!x.displacementMap,ht=!!x.emissiveMap,Ut=!!x.metalnessMap,Bt=!!x.roughnessMap,O=x.anisotropy>0,Zt=x.clearcoat>0,Kt=x.dispersion>0,P=x.iridescence>0,M=x.sheen>0,G=x.transmission>0,X=O&&!!x.anisotropyMap,Q=Zt&&!!x.clearcoatMap,dt=Zt&&!!x.clearcoatNormalMap,mt=Zt&&!!x.clearcoatRoughnessMap,j=P&&!!x.iridescenceMap,tt=P&&!!x.iridescenceThicknessMap,_t=M&&!!x.sheenColorMap,Ot=M&&!!x.sheenRoughnessMap,yt=!!x.specularMap,St=!!x.specularColorMap,$t=!!x.specularIntensityMap,Jt=G&&!!x.transmissionMap,ie=G&&!!x.thicknessMap,B=!!x.gradientMap,vt=!!x.alphaMap,et=x.alphaTest>0,bt=!!x.alphaHash,Pt=!!x.extensions;let ot=Zn;x.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ot=n.toneMapping);const Gt={shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:wt,fragmentShader:Mt,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:ct,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:pt,batchingColor:pt&&I._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&I.instanceColor!==null,instancingMorph:Ft&&I.morphTexture!==null,outputColorSpace:nt===null?n.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ae,matcap:Wt,envMap:it,envMapMode:it&&k.mapping,envMapCubeUVHeight:V,aoMap:rt,lightMap:st,bumpMap:xt,normalMap:gt,displacementMap:Xt,emissiveMap:ht,normalMapObjectSpace:gt&&x.normalMapType===Em,normalMapTangentSpace:gt&&x.normalMapType===Jc,packedNormalMap:gt&&x.normalMapType===Jc&&UM(x.normalMap.format),metalnessMap:Ut,roughnessMap:Bt,anisotropy:O,anisotropyMap:X,clearcoat:Zt,clearcoatMap:Q,clearcoatNormalMap:dt,clearcoatRoughnessMap:mt,dispersion:Kt,iridescence:P,iridescenceMap:j,iridescenceThicknessMap:tt,sheen:M,sheenColorMap:_t,sheenRoughnessMap:Ot,specularMap:yt,specularColorMap:St,specularIntensityMap:$t,transmission:G,transmissionMap:Jt,thicknessMap:ie,gradientMap:B,opaque:x.transparent===!1&&x.blending===Is&&x.alphaToCoverage===!1,alphaMap:vt,alphaTest:et,alphaHash:bt,combine:x.combine,mapUv:ae&&g(x.map.channel),aoMapUv:rt&&g(x.aoMap.channel),lightMapUv:st&&g(x.lightMap.channel),bumpMapUv:xt&&g(x.bumpMap.channel),normalMapUv:gt&&g(x.normalMap.channel),displacementMapUv:Xt&&g(x.displacementMap.channel),emissiveMapUv:ht&&g(x.emissiveMap.channel),metalnessMapUv:Ut&&g(x.metalnessMap.channel),roughnessMapUv:Bt&&g(x.roughnessMap.channel),anisotropyMapUv:X&&g(x.anisotropyMap.channel),clearcoatMapUv:Q&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:dt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&g(x.sheenRoughnessMap.channel),specularMapUv:yt&&g(x.specularMap.channel),specularColorMapUv:St&&g(x.specularColorMap.channel),specularIntensityMapUv:$t&&g(x.specularIntensityMap.channel),transmissionMapUv:Jt&&g(x.transmissionMap.channel),thicknessMapUv:ie&&g(x.thicknessMap.channel),alphaMapUv:vt&&g(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(gt||O),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(ae||vt),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&gt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Et,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Nt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,decodeVideoTexture:ae&&x.map.isVideoTexture===!0&&he.getTransfer(x.map.colorSpace)===xe,decodeVideoTextureEmissive:ht&&x.emissiveMap.isVideoTexture===!0&&he.getTransfer(x.emissiveMap.colorSpace)===xe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===He,flipSided:x.side===rn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Pt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&x.extensions.multiDraw===!0||pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Gt.vertexUv1s=c.has(1),Gt.vertexUv2s=c.has(2),Gt.vertexUv3s=c.has(3),c.clear(),Gt}function m(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const T in x.defines)y.push(T),y.push(x.defines[T]);return x.isRawShaderMaterial===!1&&(p(y,x),S(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function p(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function S(x,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function b(x){const y=f[x.type];let T;if(y){const C=Xn[y];T=tg.clone(C.uniforms)}else T=x.uniforms;return T}function v(x,y){let T=u.get(y);return T!==void 0?++T.usedTimes:(T=new IM(n,y,x,s),l.push(T),u.set(y,T)),T}function A(x){if(--x.usedTimes===0){const y=l.indexOf(x);l[y]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function w(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:b,acquireProgram:v,releaseProgram:A,releaseShaderCache:E,programs:l,dispose:w}}function OM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function zM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Dh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Nh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,_,m,p){let S=n[t];return S===void 0?(S={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},n[t]=S):(S.id=h.id,S.object=h,S.geometry=f,S.material=g,S.materialVariant=o(h),S.groupOrder=_,S.renderOrder=h.renderOrder,S.z=m,S.group=p),t++,S}function c(h,f,g,_,m,p){const S=a(h,f,g,_,m,p);g.transmission>0?i.push(S):g.transparent===!0?s.push(S):e.push(S)}function l(h,f,g,_,m,p){const S=a(h,f,g,_,m,p);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function u(h,f,g){e.length>1&&e.sort(h||zM),i.length>1&&i.sort(f||Dh),s.length>1&&s.sort(f||Dh),g&&(e.reverse(),i.reverse(),s.reverse())}function d(){for(let h=t,f=n.length;h<f;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function BM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Nh,n.set(i,[o])):s>=r.length?(o=new Nh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function kM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new ne};break;case"SpotLight":e={position:new D,direction:new D,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function HM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let GM=0;function VM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function WM(n){const t=new kM,e=HM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);const s=new D,r=new Se,o=new Se;function a(l){let u=0,d=0,h=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,b=0,v=0,A=0,E=0,w=0;l.sort(VM);for(let y=0,T=l.length;y<T;y++){const C=l[y],I=C.color,U=C.intensity,z=C.distance;let L=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Zi?L=C.shadow.map.texture:L=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=I.r*U,d+=I.g*U,h+=I.b*U;else if(C.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(C.sh.coefficients[F],U);w++}else if(C.isDirectionalLight){const F=t.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const N=C.shadow,k=e.get(C);k.shadowIntensity=N.intensity,k.shadowBias=N.bias,k.shadowNormalBias=N.normalBias,k.shadowRadius=N.radius,k.shadowMapSize=N.mapSize,i.directionalShadow[f]=k,i.directionalShadowMap[f]=L,i.directionalShadowMatrix[f]=C.shadow.matrix,S++}i.directional[f]=F,f++}else if(C.isSpotLight){const F=t.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(I).multiplyScalar(U),F.distance=z,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,i.spot[_]=F;const N=C.shadow;if(C.map&&(i.spotLightMap[A]=C.map,A++,N.updateMatrices(C),C.castShadow&&E++),i.spotLightMatrix[_]=N.matrix,C.castShadow){const k=e.get(C);k.shadowIntensity=N.intensity,k.shadowBias=N.bias,k.shadowNormalBias=N.normalBias,k.shadowRadius=N.radius,k.shadowMapSize=N.mapSize,i.spotShadow[_]=k,i.spotShadowMap[_]=L,v++}_++}else if(C.isRectAreaLight){const F=t.get(C);F.color.copy(I).multiplyScalar(U),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=F,m++}else if(C.isPointLight){const F=t.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){const N=C.shadow,k=e.get(C);k.shadowIntensity=N.intensity,k.shadowBias=N.bias,k.shadowNormalBias=N.normalBias,k.shadowRadius=N.radius,k.shadowMapSize=N.mapSize,k.shadowCameraNear=N.camera.near,k.shadowCameraFar=N.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=L,i.pointShadowMatrix[g]=C.shadow.matrix,b++}i.point[g]=F,g++}else if(C.isHemisphereLight){const F=t.get(C);F.skyColor.copy(C.color).multiplyScalar(U),F.groundColor.copy(C.groundColor).multiplyScalar(U),i.hemi[p]=F,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=At.LTC_FLOAT_1,i.rectAreaLTC2=At.LTC_FLOAT_2):(i.rectAreaLTC1=At.LTC_HALF_1,i.rectAreaLTC2=At.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==S||x.numPointShadows!==b||x.numSpotShadows!==v||x.numSpotMaps!==A||x.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=v+A-E,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,x.directionalLength=f,x.pointLength=g,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=S,x.numPointShadows=b,x.numSpotShadows=v,x.numSpotMaps=A,x.numLightProbes=w,i.version=GM++)}function c(l,u){let d=0,h=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const b=l[p];if(b.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(b.isSpotLight){const v=i.spot[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function Uh(n){const t=new WM(n),e=[],i=[],s=[];function r(h){d.camera=h,e.length=0,i.length=0,s.length=0}function o(h){e.push(h)}function a(h){i.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function XM(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Uh(n),t.set(s,[a])):r>=o.length?(a=new Uh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const qM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YM=`uniform sampler2D shadow_pass;
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
}`,ZM=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],$M=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Fh=new Se,rr=new D,Ya=new D;function KM(n,t,e){let i=new Nl;const s=new ft,r=new ft,o=new Le,a=new sg,c=new rg,l={},u=e.maxTextureSize,d={[Ri]:rn,[rn]:Ri,[He]:He},h=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:qM,fragmentShader:YM}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new J(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ro;let p=this.type;this.render=function(E,w,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===nm&&(jt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ro);const y=n.getRenderTarget(),T=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),I=n.state;I.setBlending(ui),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=p!==this.type;U&&w.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(L=>L.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,L=E.length;z<L;z++){const F=E[z],N=F.shadow;if(N===void 0){jt("WebGLShadowMap:",F,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const k=N.getFrameExtents();s.multiply(k),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/k.x),s.x=r.x*k.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/k.y),s.y=r.y*k.y,N.mapSize.y=r.y));const V=n.state.buffers.depth.getReversed();if(N.camera._reversedDepth=V,N.map===null||U===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===ur){if(F.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Kn(s.x,s.y,{format:Zi,type:di,minFilter:sn,magFilter:sn,generateMipmaps:!1}),N.map.texture.name=F.name+".shadowMap",N.map.depthTexture=new ks(s.x,s.y,On),N.map.depthTexture.name=F.name+".shadowMapDepth",N.map.depthTexture.format=fi,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ze,N.map.depthTexture.magFilter=Ze}else F.isPointLight?(N.map=new hf(s.x),N.map.depthTexture=new S0(s.x,Jn)):(N.map=new Kn(s.x,s.y),N.map.depthTexture=new ks(s.x,s.y,Jn)),N.map.depthTexture.name=F.name+".shadowMap",N.map.depthTexture.format=fi,this.type===Ro?(N.map.depthTexture.compareFunction=V?Cl:Rl,N.map.depthTexture.minFilter=sn,N.map.depthTexture.magFilter=sn):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ze,N.map.depthTexture.magFilter=Ze);N.camera.updateProjectionMatrix()}const q=N.map.isWebGLCubeRenderTarget?6:1;for(let W=0;W<q;W++){if(N.map.isWebGLCubeRenderTarget)n.setRenderTarget(N.map,W),n.clear();else{W===0&&(n.setRenderTarget(N.map),n.clear());const ut=N.getViewport(W);o.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),I.viewport(o)}if(F.isPointLight){const ut=N.camera,Nt=N.matrix,wt=F.distance||ut.far;wt!==ut.far&&(ut.far=wt,ut.updateProjectionMatrix()),rr.setFromMatrixPosition(F.matrixWorld),ut.position.copy(rr),Ya.copy(ut.position),Ya.add(ZM[W]),ut.up.copy($M[W]),ut.lookAt(Ya),ut.updateMatrixWorld(),Nt.makeTranslation(-rr.x,-rr.y,-rr.z),Fh.multiplyMatrices(ut.projectionMatrix,ut.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Fh,ut.coordinateSystem,ut.reversedDepth)}else N.updateMatrices(F);i=N.getFrustum(),v(w,x,N.camera,F,this.type)}N.isPointLightShadow!==!0&&this.type===ur&&S(N,x),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,T,C)};function S(E,w){const x=t.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Kn(s.x,s.y,{format:Zi,type:di})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,x,h,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,x,f,_,null)}function b(E,w,x,y){let T=null;const C=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)T=C;else if(T=x.isPointLight===!0?c:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const I=T.uuid,U=w.uuid;let z=l[I];z===void 0&&(z={},l[I]=z);let L=z[U];L===void 0&&(L=T.clone(),z[U]=L,w.addEventListener("dispose",A)),T=L}if(T.visible=w.visible,T.wireframe=w.wireframe,y===ur?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:d[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,x.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const I=n.properties.get(T);I.light=x}return T}function v(E,w,x,y,T){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===ur)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const U=t.update(E),z=E.material;if(Array.isArray(z)){const L=U.groups;for(let F=0,N=L.length;F<N;F++){const k=L[F],V=z[k.materialIndex];if(V&&V.visible){const q=b(E,V,y,T);E.onBeforeShadow(n,E,w,x,U,q,k),n.renderBufferDirect(x,null,U,q,E,k),E.onAfterShadow(n,E,w,x,U,q,k)}}}else if(z.visible){const L=b(E,z,y,T);E.onBeforeShadow(n,E,w,x,U,L,null),n.renderBufferDirect(x,null,U,L,E,null),E.onAfterShadow(n,E,w,x,U,L,null)}}const I=E.children;for(let U=0,z=I.length;U<z;U++)v(I[U],w,x,y,T)}function A(E){E.target.removeEventListener("dispose",A);for(const x in l){const y=l[x],T=E.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function JM(n,t){function e(){let B=!1;const vt=new Le;let et=null;const bt=new Le(0,0,0,0);return{setMask:function(Pt){et!==Pt&&!B&&(n.colorMask(Pt,Pt,Pt,Pt),et=Pt)},setLocked:function(Pt){B=Pt},setClear:function(Pt,ot,Gt,kt,Ne){Ne===!0&&(Pt*=kt,ot*=kt,Gt*=kt),vt.set(Pt,ot,Gt,kt),bt.equals(vt)===!1&&(n.clearColor(Pt,ot,Gt,kt),bt.copy(vt))},reset:function(){B=!1,et=null,bt.set(-1,0,0,0)}}}function i(){let B=!1,vt=!1,et=null,bt=null,Pt=null;return{setReversed:function(ot){if(vt!==ot){const Gt=t.get("EXT_clip_control");ot?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),vt=ot;const kt=Pt;Pt=null,this.setClear(kt)}},getReversed:function(){return vt},setTest:function(ot){ot?nt(n.DEPTH_TEST):Et(n.DEPTH_TEST)},setMask:function(ot){et!==ot&&!B&&(n.depthMask(ot),et=ot)},setFunc:function(ot){if(vt&&(ot=Um[ot]),bt!==ot){switch(ot){case fc:n.depthFunc(n.NEVER);break;case pc:n.depthFunc(n.ALWAYS);break;case mc:n.depthFunc(n.LESS);break;case Os:n.depthFunc(n.LEQUAL);break;case gc:n.depthFunc(n.EQUAL);break;case xc:n.depthFunc(n.GEQUAL);break;case _c:n.depthFunc(n.GREATER);break;case vc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}bt=ot}},setLocked:function(ot){B=ot},setClear:function(ot){Pt!==ot&&(Pt=ot,vt&&(ot=1-ot),n.clearDepth(ot))},reset:function(){B=!1,et=null,bt=null,Pt=null,vt=!1}}}function s(){let B=!1,vt=null,et=null,bt=null,Pt=null,ot=null,Gt=null,kt=null,Ne=null;return{setTest:function(Ae){B||(Ae?nt(n.STENCIL_TEST):Et(n.STENCIL_TEST))},setMask:function(Ae){vt!==Ae&&!B&&(n.stencilMask(Ae),vt=Ae)},setFunc:function(Ae,Bn,kn){(et!==Ae||bt!==Bn||Pt!==kn)&&(n.stencilFunc(Ae,Bn,kn),et=Ae,bt=Bn,Pt=kn)},setOp:function(Ae,Bn,kn){(ot!==Ae||Gt!==Bn||kt!==kn)&&(n.stencilOp(Ae,Bn,kn),ot=Ae,Gt=Bn,kt=kn)},setLocked:function(Ae){B=Ae},setClear:function(Ae){Ne!==Ae&&(n.clearStencil(Ae),Ne=Ae)},reset:function(){B=!1,vt=null,et=null,bt=null,Pt=null,ot=null,Gt=null,kt=null,Ne=null}}}const r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,S=null,b=null,v=null,A=null,E=null,w=null,x=new ne(0,0,0),y=0,T=!1,C=null,I=null,U=null,z=null,L=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,k=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(V)[1]),N=k>=1):V.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),N=k>=2);let q=null,W={};const ut=n.getParameter(n.SCISSOR_BOX),Nt=n.getParameter(n.VIEWPORT),wt=new Le().fromArray(ut),Mt=new Le().fromArray(Nt);function K(B,vt,et,bt){const Pt=new Uint8Array(4),ot=n.createTexture();n.bindTexture(B,ot),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Gt=0;Gt<et;Gt++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,bt,0,n.RGBA,n.UNSIGNED_BYTE,Pt):n.texImage2D(vt+Gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pt);return ot}const ct={};ct[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),ct[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ct[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(n.DEPTH_TEST),o.setFunc(Os),xt(!1),gt(Au),nt(n.CULL_FACE),rt(ui);function nt(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Et(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function Ft(B,vt){return h[B]!==vt?(n.bindFramebuffer(B,vt),h[B]=vt,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=vt),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function pt(B,vt){let et=g,bt=!1;if(B){et=f.get(vt),et===void 0&&(et=[],f.set(vt,et));const Pt=B.textures;if(et.length!==Pt.length||et[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,Gt=Pt.length;ot<Gt;ot++)et[ot]=n.COLOR_ATTACHMENT0+ot;et.length=Pt.length,bt=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,bt=!0);bt&&n.drawBuffers(et)}function ae(B){return _!==B?(n.useProgram(B),_=B,!0):!1}const Wt={[Bi]:n.FUNC_ADD,[sm]:n.FUNC_SUBTRACT,[rm]:n.FUNC_REVERSE_SUBTRACT};Wt[om]=n.MIN,Wt[am]=n.MAX;const it={[cm]:n.ZERO,[lm]:n.ONE,[um]:n.SRC_COLOR,[hc]:n.SRC_ALPHA,[gm]:n.SRC_ALPHA_SATURATE,[pm]:n.DST_COLOR,[dm]:n.DST_ALPHA,[hm]:n.ONE_MINUS_SRC_COLOR,[dc]:n.ONE_MINUS_SRC_ALPHA,[mm]:n.ONE_MINUS_DST_COLOR,[fm]:n.ONE_MINUS_DST_ALPHA,[xm]:n.CONSTANT_COLOR,[_m]:n.ONE_MINUS_CONSTANT_COLOR,[vm]:n.CONSTANT_ALPHA,[Mm]:n.ONE_MINUS_CONSTANT_ALPHA};function rt(B,vt,et,bt,Pt,ot,Gt,kt,Ne,Ae){if(B===ui){m===!0&&(Et(n.BLEND),m=!1);return}if(m===!1&&(nt(n.BLEND),m=!0),B!==im){if(B!==p||Ae!==T){if((S!==Bi||A!==Bi)&&(n.blendEquation(n.FUNC_ADD),S=Bi,A=Bi),Ae)switch(B){case Is:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uc:n.blendFunc(n.ONE,n.ONE);break;case Ru:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ue("WebGLState: Invalid blending: ",B);break}else switch(B){case Is:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ru:ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cu:ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ue("WebGLState: Invalid blending: ",B);break}b=null,v=null,E=null,w=null,x.set(0,0,0),y=0,p=B,T=Ae}return}Pt=Pt||vt,ot=ot||et,Gt=Gt||bt,(vt!==S||Pt!==A)&&(n.blendEquationSeparate(Wt[vt],Wt[Pt]),S=vt,A=Pt),(et!==b||bt!==v||ot!==E||Gt!==w)&&(n.blendFuncSeparate(it[et],it[bt],it[ot],it[Gt]),b=et,v=bt,E=ot,w=Gt),(kt.equals(x)===!1||Ne!==y)&&(n.blendColor(kt.r,kt.g,kt.b,Ne),x.copy(kt),y=Ne),p=B,T=!1}function st(B,vt){B.side===He?Et(n.CULL_FACE):nt(n.CULL_FACE);let et=B.side===rn;vt&&(et=!et),xt(et),B.blending===Is&&B.transparent===!1?rt(ui):rt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const bt=B.stencilWrite;a.setTest(bt),bt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ht(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?nt(n.SAMPLE_ALPHA_TO_COVERAGE):Et(n.SAMPLE_ALPHA_TO_COVERAGE)}function xt(B){C!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),C=B)}function gt(B){B!==tm?(nt(n.CULL_FACE),B!==I&&(B===Au?n.cullFace(n.BACK):B===em?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Et(n.CULL_FACE),I=B}function Xt(B){B!==U&&(N&&n.lineWidth(B),U=B)}function ht(B,vt,et){B?(nt(n.POLYGON_OFFSET_FILL),(z!==vt||L!==et)&&(z=vt,L=et,o.getReversed()&&(vt=-vt),n.polygonOffset(vt,et))):Et(n.POLYGON_OFFSET_FILL)}function Ut(B){B?nt(n.SCISSOR_TEST):Et(n.SCISSOR_TEST)}function Bt(B){B===void 0&&(B=n.TEXTURE0+F-1),q!==B&&(n.activeTexture(B),q=B)}function O(B,vt,et){et===void 0&&(q===null?et=n.TEXTURE0+F-1:et=q);let bt=W[et];bt===void 0&&(bt={type:void 0,texture:void 0},W[et]=bt),(bt.type!==B||bt.texture!==vt)&&(q!==et&&(n.activeTexture(et),q=et),n.bindTexture(B,vt||ct[B]),bt.type=B,bt.texture=vt)}function Zt(){const B=W[q];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Kt(){try{n.compressedTexImage2D(...arguments)}catch(B){ue("WebGLState:",B)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(B){ue("WebGLState:",B)}}function M(){try{n.texSubImage2D(...arguments)}catch(B){ue("WebGLState:",B)}}function G(){try{n.texSubImage3D(...arguments)}catch(B){ue("WebGLState:",B)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(B){ue("WebGLState:",B)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(B){ue("WebGLState:",B)}}function dt(){try{n.texStorage2D(...arguments)}catch(B){ue("WebGLState:",B)}}function mt(){try{n.texStorage3D(...arguments)}catch(B){ue("WebGLState:",B)}}function j(){try{n.texImage2D(...arguments)}catch(B){ue("WebGLState:",B)}}function tt(){try{n.texImage3D(...arguments)}catch(B){ue("WebGLState:",B)}}function _t(B){return d[B]!==void 0?d[B]:n.getParameter(B)}function Ot(B,vt){d[B]!==vt&&(n.pixelStorei(B,vt),d[B]=vt)}function yt(B){wt.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),wt.copy(B))}function St(B){Mt.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Mt.copy(B))}function $t(B,vt){let et=l.get(vt);et===void 0&&(et=new WeakMap,l.set(vt,et));let bt=et.get(B);bt===void 0&&(bt=n.getUniformBlockIndex(vt,B.name),et.set(B,bt))}function Jt(B,vt){const bt=l.get(vt).get(B);c.get(vt)!==bt&&(n.uniformBlockBinding(vt,bt,B.__bindingPointIndex),c.set(vt,bt))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},q=null,W={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,S=null,b=null,v=null,A=null,E=null,w=null,x=new ne(0,0,0),y=0,T=!1,C=null,I=null,U=null,z=null,L=null,wt.set(0,0,n.canvas.width,n.canvas.height),Mt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:Et,bindFramebuffer:Ft,drawBuffers:pt,useProgram:ae,setBlending:rt,setMaterial:st,setFlipSided:xt,setCullFace:gt,setLineWidth:Xt,setPolygonOffset:ht,setScissorTest:Ut,activeTexture:Bt,bindTexture:O,unbindTexture:Zt,compressedTexImage2D:Kt,compressedTexImage3D:P,texImage2D:j,texImage3D:tt,pixelStorei:Ot,getParameter:_t,updateUBOMapping:$t,uniformBlockBinding:Jt,texStorage2D:dt,texStorage3D:mt,texSubImage2D:M,texSubImage3D:G,compressedTexSubImage2D:X,compressedTexSubImage3D:Q,scissor:yt,viewport:St,reset:ie}}function QM(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ft,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,M){return g?new OffscreenCanvas(P,M):Vo("canvas")}function m(P,M,G){let X=1;const Q=Kt(P);if((Q.width>G||Q.height>G)&&(X=G/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const dt=Math.floor(X*Q.width),mt=Math.floor(X*Q.height);h===void 0&&(h=_(dt,mt));const j=M?_(dt,mt):h;return j.width=dt,j.height=mt,j.getContext("2d").drawImage(P,0,0,dt,mt),jt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+dt+"x"+mt+")."),j}else return"data"in P&&jt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function p(P){return P.generateMipmaps}function S(P){n.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(P,M,G,X,Q,dt=!1){if(P!==null){if(n[P]!==void 0)return n[P];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let mt;X&&(mt=t.get("EXT_texture_norm16"),mt||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=M;if(M===n.RED&&(G===n.FLOAT&&(j=n.R32F),G===n.HALF_FLOAT&&(j=n.R16F),G===n.UNSIGNED_BYTE&&(j=n.R8),G===n.UNSIGNED_SHORT&&mt&&(j=mt.R16_EXT),G===n.SHORT&&mt&&(j=mt.R16_SNORM_EXT)),M===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.R8UI),G===n.UNSIGNED_SHORT&&(j=n.R16UI),G===n.UNSIGNED_INT&&(j=n.R32UI),G===n.BYTE&&(j=n.R8I),G===n.SHORT&&(j=n.R16I),G===n.INT&&(j=n.R32I)),M===n.RG&&(G===n.FLOAT&&(j=n.RG32F),G===n.HALF_FLOAT&&(j=n.RG16F),G===n.UNSIGNED_BYTE&&(j=n.RG8),G===n.UNSIGNED_SHORT&&mt&&(j=mt.RG16_EXT),G===n.SHORT&&mt&&(j=mt.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RG8UI),G===n.UNSIGNED_SHORT&&(j=n.RG16UI),G===n.UNSIGNED_INT&&(j=n.RG32UI),G===n.BYTE&&(j=n.RG8I),G===n.SHORT&&(j=n.RG16I),G===n.INT&&(j=n.RG32I)),M===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RGB8UI),G===n.UNSIGNED_SHORT&&(j=n.RGB16UI),G===n.UNSIGNED_INT&&(j=n.RGB32UI),G===n.BYTE&&(j=n.RGB8I),G===n.SHORT&&(j=n.RGB16I),G===n.INT&&(j=n.RGB32I)),M===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),G===n.UNSIGNED_INT&&(j=n.RGBA32UI),G===n.BYTE&&(j=n.RGBA8I),G===n.SHORT&&(j=n.RGBA16I),G===n.INT&&(j=n.RGBA32I)),M===n.RGB&&(G===n.UNSIGNED_SHORT&&mt&&(j=mt.RGB16_EXT),G===n.SHORT&&mt&&(j=mt.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),M===n.RGBA){const tt=dt?Go:he.getTransfer(Q);G===n.FLOAT&&(j=n.RGBA32F),G===n.HALF_FLOAT&&(j=n.RGBA16F),G===n.UNSIGNED_BYTE&&(j=tt===xe?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&mt&&(j=mt.RGBA16_EXT),G===n.SHORT&&mt&&(j=mt.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function A(P,M){let G;return P?M===null||M===Jn||M===Ar?G=n.DEPTH24_STENCIL8:M===On?G=n.DEPTH32F_STENCIL8:M===Tr&&(G=n.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Jn||M===Ar?G=n.DEPTH_COMPONENT24:M===On?G=n.DEPTH_COMPONENT32F:M===Tr&&(G=n.DEPTH_COMPONENT16),G}function E(P,M){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ze&&P.minFilter!==sn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function w(P){const M=P.target;M.removeEventListener("dispose",w),y(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&d.delete(M)}function x(P){const M=P.target;M.removeEventListener("dispose",x),C(M)}function y(P){const M=i.get(P);if(M.__webglInit===void 0)return;const G=P.source,X=f.get(G);if(X){const Q=X[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(P),Object.keys(X).length===0&&f.delete(G)}i.remove(P)}function T(P){const M=i.get(P);n.deleteTexture(M.__webglTexture);const G=P.source,X=f.get(G);delete X[M.__cacheKey],o.memory.textures--}function C(P){const M=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(M.__webglFramebuffer[X]))for(let Q=0;Q<M.__webglFramebuffer[X].length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[X][Q]);else n.deleteFramebuffer(M.__webglFramebuffer[X]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[X])}else{if(Array.isArray(M.__webglFramebuffer))for(let X=0;X<M.__webglFramebuffer.length;X++)n.deleteFramebuffer(M.__webglFramebuffer[X]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let X=0;X<M.__webglColorRenderbuffer.length;X++)M.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=P.textures;for(let X=0,Q=G.length;X<Q;X++){const dt=i.get(G[X]);dt.__webglTexture&&(n.deleteTexture(dt.__webglTexture),o.memory.textures--),i.remove(G[X])}i.remove(P)}let I=0;function U(){I=0}function z(){return I}function L(P){I=P}function F(){const P=I;return P>=s.maxTextures&&jt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),I+=1,P}function N(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function k(P,M){const G=i.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const X=P.image;if(X===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(G,P,M);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+M)}function V(P,M){const G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){Et(G,P,M);return}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+M)}function q(P,M){const G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){Et(G,P,M);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+M)}function W(P,M){const G=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&G.__version!==P.version){Ft(G,P,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+M)}const ut={[zo]:n.REPEAT,[ai]:n.CLAMP_TO_EDGE,[Mc]:n.MIRRORED_REPEAT},Nt={[Ze]:n.NEAREST,[bm]:n.NEAREST_MIPMAP_NEAREST,[Wr]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[pa]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},wt={[Tm]:n.NEVER,[Im]:n.ALWAYS,[Am]:n.LESS,[Rl]:n.LEQUAL,[Rm]:n.EQUAL,[Cl]:n.GEQUAL,[Cm]:n.GREATER,[Pm]:n.NOTEQUAL};function Mt(P,M){if(M.type===On&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===sn||M.magFilter===pa||M.magFilter===Wr||M.magFilter===Vi||M.minFilter===sn||M.minFilter===pa||M.minFilter===Wr||M.minFilter===Vi)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ut[M.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ut[M.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ut[M.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Nt[M.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Nt[M.minFilter]),M.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,wt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ze||M.minFilter!==Wr&&M.minFilter!==Vi||M.type===On&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function K(P,M){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",w));const X=M.source;let Q=f.get(X);Q===void 0&&(Q={},f.set(X,Q));const dt=N(M);if(dt!==P.__cacheKey){Q[dt]===void 0&&(Q[dt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[dt].usedTimes++;const mt=Q[P.__cacheKey];mt!==void 0&&(Q[P.__cacheKey].usedTimes--,mt.usedTimes===0&&T(M)),P.__cacheKey=dt,P.__webglTexture=Q[dt].texture}return G}function ct(P,M,G){return Math.floor(Math.floor(P/G)/M)}function nt(P,M,G,X){const dt=P.updateRanges;if(dt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,G,X,M.data);else{dt.sort((Ot,yt)=>Ot.start-yt.start);let mt=0;for(let Ot=1;Ot<dt.length;Ot++){const yt=dt[mt],St=dt[Ot],$t=yt.start+yt.count,Jt=ct(St.start,M.width,4),ie=ct(yt.start,M.width,4);St.start<=$t+1&&Jt===ie&&ct(St.start+St.count-1,M.width,4)===Jt?yt.count=Math.max(yt.count,St.start+St.count-yt.start):(++mt,dt[mt]=St)}dt.length=mt+1;const j=e.getParameter(n.UNPACK_ROW_LENGTH),tt=e.getParameter(n.UNPACK_SKIP_PIXELS),_t=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let Ot=0,yt=dt.length;Ot<yt;Ot++){const St=dt[Ot],$t=Math.floor(St.start/4),Jt=Math.ceil(St.count/4),ie=$t%M.width,B=Math.floor($t/M.width),vt=Jt,et=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ie),e.pixelStorei(n.UNPACK_SKIP_ROWS,B),e.texSubImage2D(n.TEXTURE_2D,0,ie,B,vt,et,G,X,M.data)}P.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,j),e.pixelStorei(n.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(n.UNPACK_SKIP_ROWS,_t)}}function Et(P,M,G){let X=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=n.TEXTURE_3D);const Q=K(P,M),dt=M.source;e.bindTexture(X,P.__webglTexture,n.TEXTURE0+G);const mt=i.get(dt);if(dt.version!==mt.__version||Q===!0){if(e.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const et=he.getPrimaries(he.workingColorSpace),bt=M.colorSpace===Ti?null:he.getPrimaries(M.colorSpace),Pt=M.colorSpace===Ti||et===bt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let tt=m(M.image,!1,s.maxTextureSize);tt=Zt(M,tt);const _t=r.convert(M.format,M.colorSpace),Ot=r.convert(M.type);let yt=v(M.internalFormat,_t,Ot,M.normalized,M.colorSpace,M.isVideoTexture);Mt(X,M);let St;const $t=M.mipmaps,Jt=M.isVideoTexture!==!0,ie=mt.__version===void 0||Q===!0,B=dt.dataReady,vt=E(M,tt);if(M.isDepthTexture)yt=A(M.format===Wi,M.type),ie&&(Jt?e.texStorage2D(n.TEXTURE_2D,1,yt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,yt,tt.width,tt.height,0,_t,Ot,null));else if(M.isDataTexture)if($t.length>0){Jt&&ie&&e.texStorage2D(n.TEXTURE_2D,vt,yt,$t[0].width,$t[0].height);for(let et=0,bt=$t.length;et<bt;et++)St=$t[et],Jt?B&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,St.width,St.height,_t,Ot,St.data):e.texImage2D(n.TEXTURE_2D,et,yt,St.width,St.height,0,_t,Ot,St.data);M.generateMipmaps=!1}else Jt?(ie&&e.texStorage2D(n.TEXTURE_2D,vt,yt,tt.width,tt.height),B&&nt(M,tt,_t,Ot)):e.texImage2D(n.TEXTURE_2D,0,yt,tt.width,tt.height,0,_t,Ot,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Jt&&ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,yt,$t[0].width,$t[0].height,tt.depth);for(let et=0,bt=$t.length;et<bt;et++)if(St=$t[et],M.format!==zn)if(_t!==null)if(Jt){if(B)if(M.layerUpdates.size>0){const Pt=fh(St.width,St.height,M.format,M.type);for(const ot of M.layerUpdates){const Gt=St.data.subarray(ot*Pt/St.data.BYTES_PER_ELEMENT,(ot+1)*Pt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,ot,St.width,St.height,1,_t,Gt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,St.width,St.height,tt.depth,_t,St.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,yt,St.width,St.height,tt.depth,0,St.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?B&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,St.width,St.height,tt.depth,_t,Ot,St.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,yt,St.width,St.height,tt.depth,0,_t,Ot,St.data)}else{Jt&&ie&&e.texStorage2D(n.TEXTURE_2D,vt,yt,$t[0].width,$t[0].height);for(let et=0,bt=$t.length;et<bt;et++)St=$t[et],M.format!==zn?_t!==null?Jt?B&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,St.width,St.height,_t,St.data):e.compressedTexImage2D(n.TEXTURE_2D,et,yt,St.width,St.height,0,St.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?B&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,St.width,St.height,_t,Ot,St.data):e.texImage2D(n.TEXTURE_2D,et,yt,St.width,St.height,0,_t,Ot,St.data)}else if(M.isDataArrayTexture)if(Jt){if(ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,yt,tt.width,tt.height,tt.depth),B)if(M.layerUpdates.size>0){const et=fh(tt.width,tt.height,M.format,M.type);for(const bt of M.layerUpdates){const Pt=tt.data.subarray(bt*et/tt.data.BYTES_PER_ELEMENT,(bt+1)*et/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,bt,tt.width,tt.height,1,_t,Ot,Pt)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,_t,Ot,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,yt,tt.width,tt.height,tt.depth,0,_t,Ot,tt.data);else if(M.isData3DTexture)Jt?(ie&&e.texStorage3D(n.TEXTURE_3D,vt,yt,tt.width,tt.height,tt.depth),B&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,_t,Ot,tt.data)):e.texImage3D(n.TEXTURE_3D,0,yt,tt.width,tt.height,tt.depth,0,_t,Ot,tt.data);else if(M.isFramebufferTexture){if(ie)if(Jt)e.texStorage2D(n.TEXTURE_2D,vt,yt,tt.width,tt.height);else{let et=tt.width,bt=tt.height;for(let Pt=0;Pt<vt;Pt++)e.texImage2D(n.TEXTURE_2D,Pt,yt,et,bt,0,_t,Ot,null),et>>=1,bt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const et=n.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),tt.parentNode!==et){et.appendChild(tt),d.add(M),et.onpaint=bt=>{const Pt=bt.changedElements;for(const ot of d)Pt.includes(ot.image)&&(ot.needsUpdate=!0)},et.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,tt);else{const Pt=n.RGBA,ot=n.RGBA,Gt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Pt,ot,Gt,tt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if($t.length>0){if(Jt&&ie){const et=Kt($t[0]);e.texStorage2D(n.TEXTURE_2D,vt,yt,et.width,et.height)}for(let et=0,bt=$t.length;et<bt;et++)St=$t[et],Jt?B&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,_t,Ot,St):e.texImage2D(n.TEXTURE_2D,et,yt,_t,Ot,St);M.generateMipmaps=!1}else if(Jt){if(ie){const et=Kt(tt);e.texStorage2D(n.TEXTURE_2D,vt,yt,et.width,et.height)}B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,Ot,tt)}else e.texImage2D(n.TEXTURE_2D,0,yt,_t,Ot,tt);p(M)&&S(X),mt.__version=dt.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Ft(P,M,G){if(M.image.length!==6)return;const X=K(P,M),Q=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);const dt=i.get(Q);if(Q.version!==dt.__version||X===!0){e.activeTexture(n.TEXTURE0+G);const mt=he.getPrimaries(he.workingColorSpace),j=M.colorSpace===Ti?null:he.getPrimaries(M.colorSpace),tt=M.colorSpace===Ti||mt===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const _t=M.isCompressedTexture||M.image[0].isCompressedTexture,Ot=M.image[0]&&M.image[0].isDataTexture,yt=[];for(let ot=0;ot<6;ot++)!_t&&!Ot?yt[ot]=m(M.image[ot],!0,s.maxCubemapSize):yt[ot]=Ot?M.image[ot].image:M.image[ot],yt[ot]=Zt(M,yt[ot]);const St=yt[0],$t=r.convert(M.format,M.colorSpace),Jt=r.convert(M.type),ie=v(M.internalFormat,$t,Jt,M.normalized,M.colorSpace),B=M.isVideoTexture!==!0,vt=dt.__version===void 0||X===!0,et=Q.dataReady;let bt=E(M,St);Mt(n.TEXTURE_CUBE_MAP,M);let Pt;if(_t){B&&vt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,ie,St.width,St.height);for(let ot=0;ot<6;ot++){Pt=yt[ot].mipmaps;for(let Gt=0;Gt<Pt.length;Gt++){const kt=Pt[Gt];M.format!==zn?$t!==null?B?et&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Gt,0,0,kt.width,kt.height,$t,kt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Gt,ie,kt.width,kt.height,0,kt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Gt,0,0,kt.width,kt.height,$t,Jt,kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Gt,ie,kt.width,kt.height,0,$t,Jt,kt.data)}}}else{if(Pt=M.mipmaps,B&&vt){Pt.length>0&&bt++;const ot=Kt(yt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,ie,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(Ot){B?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,yt[ot].width,yt[ot].height,$t,Jt,yt[ot].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ie,yt[ot].width,yt[ot].height,0,$t,Jt,yt[ot].data);for(let Gt=0;Gt<Pt.length;Gt++){const Ne=Pt[Gt].image[ot].image;B?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Gt+1,0,0,Ne.width,Ne.height,$t,Jt,Ne.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Gt+1,ie,Ne.width,Ne.height,0,$t,Jt,Ne.data)}}else{B?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,$t,Jt,yt[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ie,$t,Jt,yt[ot]);for(let Gt=0;Gt<Pt.length;Gt++){const kt=Pt[Gt];B?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Gt+1,0,0,$t,Jt,kt.image[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Gt+1,ie,$t,Jt,kt.image[ot])}}}p(M)&&S(n.TEXTURE_CUBE_MAP),dt.__version=Q.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function pt(P,M,G,X,Q,dt){const mt=r.convert(G.format,G.colorSpace),j=r.convert(G.type),tt=v(G.internalFormat,mt,j,G.normalized,G.colorSpace),_t=i.get(M),Ot=i.get(G);if(Ot.__renderTarget=M,!_t.__hasExternalTextures){const yt=Math.max(1,M.width>>dt),St=Math.max(1,M.height>>dt);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,dt,tt,yt,St,M.depth,0,mt,j,null):e.texImage2D(Q,dt,tt,yt,St,0,mt,j,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),Bt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,Q,Ot.__webglTexture,0,Ut(M)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,Q,Ot.__webglTexture,dt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(P,M,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),M.depthBuffer){const X=M.depthTexture,Q=X&&X.isDepthTexture?X.type:null,dt=A(M.stencilBuffer,Q),mt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Bt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ut(M),dt,M.width,M.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut(M),dt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,dt,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,P)}else{const X=M.textures;for(let Q=0;Q<X.length;Q++){const dt=X[Q],mt=r.convert(dt.format,dt.colorSpace),j=r.convert(dt.type),tt=v(dt.internalFormat,mt,j,dt.normalized,dt.colorSpace);Bt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ut(M),tt,M.width,M.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut(M),tt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,tt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Wt(P,M,G){const X=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(M.depthTexture);if(Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,M.depthTexture.addEventListener("dispose",w)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Mt(n.TEXTURE_CUBE_MAP,M.depthTexture);const _t=r.convert(M.depthTexture.format),Ot=r.convert(M.depthTexture.type);let yt;M.depthTexture.format===fi?yt=n.DEPTH_COMPONENT24:M.depthTexture.format===Wi&&(yt=n.DEPTH24_STENCIL8);for(let St=0;St<6;St++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,yt,M.width,M.height,0,_t,Ot,null)}}else k(M.depthTexture,0);const dt=Q.__webglTexture,mt=Ut(M),j=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,tt=M.depthTexture.format===Wi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===fi)Bt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,j,dt,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,tt,j,dt,0);else if(M.depthTexture.format===Wi)Bt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,j,dt,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,tt,j,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(P){const M=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const X=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),X){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=X}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let X=0;X<6;X++)Wt(M.__webglFramebuffer[X],P,X);else{const X=P.texture.mipmaps;X&&X.length>0?Wt(M.__webglFramebuffer[0],P,0):Wt(M.__webglFramebuffer,P,0)}else if(G){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]===void 0)M.__webglDepthbuffer[X]=n.createRenderbuffer(),ae(M.__webglDepthbuffer[X],P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=M.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,dt)}}else{const X=P.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ae(M.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,dt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(P,M,G){const X=i.get(P);M!==void 0&&pt(X.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&it(P)}function st(P){const M=P.texture,G=i.get(P),X=i.get(M);P.addEventListener("dispose",x);const Q=P.textures,dt=P.isWebGLCubeRenderTarget===!0,mt=Q.length>1;if(mt||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=M.version,o.memory.textures++),dt){G.__webglFramebuffer=[];for(let j=0;j<6;j++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[j]=[];for(let tt=0;tt<M.mipmaps.length;tt++)G.__webglFramebuffer[j][tt]=n.createFramebuffer()}else G.__webglFramebuffer[j]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let j=0;j<M.mipmaps.length;j++)G.__webglFramebuffer[j]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(mt)for(let j=0,tt=Q.length;j<tt;j++){const _t=i.get(Q[j]);_t.__webglTexture===void 0&&(_t.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Bt(P)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let j=0;j<Q.length;j++){const tt=Q[j];G.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[j]);const _t=r.convert(tt.format,tt.colorSpace),Ot=r.convert(tt.type),yt=v(tt.internalFormat,_t,Ot,tt.normalized,tt.colorSpace,P.isXRRenderTarget===!0),St=Ut(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,St,yt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,G.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(dt){e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Mt(n.TEXTURE_CUBE_MAP,M);for(let j=0;j<6;j++)if(M.mipmaps&&M.mipmaps.length>0)for(let tt=0;tt<M.mipmaps.length;tt++)pt(G.__webglFramebuffer[j][tt],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,tt);else pt(G.__webglFramebuffer[j],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(M)&&S(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let j=0,tt=Q.length;j<tt;j++){const _t=Q[j],Ot=i.get(_t);let yt=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(yt=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(yt,Ot.__webglTexture),Mt(yt,_t),pt(G.__webglFramebuffer,P,_t,n.COLOR_ATTACHMENT0+j,yt,0),p(_t)&&S(yt)}e.unbindTexture()}else{let j=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(j=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,X.__webglTexture),Mt(j,M),M.mipmaps&&M.mipmaps.length>0)for(let tt=0;tt<M.mipmaps.length;tt++)pt(G.__webglFramebuffer[tt],P,M,n.COLOR_ATTACHMENT0,j,tt);else pt(G.__webglFramebuffer,P,M,n.COLOR_ATTACHMENT0,j,0);p(M)&&S(j),e.unbindTexture()}P.depthBuffer&&it(P)}function xt(P){const M=P.textures;for(let G=0,X=M.length;G<X;G++){const Q=M[G];if(p(Q)){const dt=b(P),mt=i.get(Q).__webglTexture;e.bindTexture(dt,mt),S(dt),e.unbindTexture()}}}const gt=[],Xt=[];function ht(P){if(P.samples>0){if(Bt(P)===!1){const M=P.textures,G=P.width,X=P.height;let Q=n.COLOR_BUFFER_BIT;const dt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(P),j=M.length>1;if(j)for(let _t=0;_t<M.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);const tt=P.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let _t=0;_t<M.length;_t++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[_t]);const Ot=i.get(M[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ot,0)}n.blitFramebuffer(0,0,G,X,0,0,G,X,Q,n.NEAREST),c===!0&&(gt.length=0,Xt.length=0,gt.push(n.COLOR_ATTACHMENT0+_t),P.depthBuffer&&P.resolveDepthBuffer===!1&&(gt.push(dt),Xt.push(dt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Xt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let _t=0;_t<M.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,mt.__webglColorRenderbuffer[_t]);const Ot=i.get(M[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,Ot,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const M=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Ut(P){return Math.min(s.maxSamples,P.samples)}function Bt(P){const M=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function O(P){const M=o.render.frame;u.get(P)!==M&&(u.set(P,M),P.update())}function Zt(P,M){const G=P.colorSpace,X=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Ho&&G!==Ti&&(he.getTransfer(G)===xe?(X!==zn||Q!==yn)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ue("WebGLTextures: Unsupported texture color space:",G)),M}function Kt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.getTextureUnits=z,this.setTextureUnits=L,this.setTexture2D=k,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=rt,this.setupRenderTarget=st,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function jM(n,t){function e(i,s=Ti){let r;const o=he.getTransfer(s);if(i===yn)return n.UNSIGNED_BYTE;if(i===Sl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ud)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Fd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Dd)return n.BYTE;if(i===Nd)return n.SHORT;if(i===Tr)return n.UNSIGNED_SHORT;if(i===yl)return n.INT;if(i===Jn)return n.UNSIGNED_INT;if(i===On)return n.FLOAT;if(i===di)return n.HALF_FLOAT;if(i===Od)return n.ALPHA;if(i===zd)return n.RGB;if(i===zn)return n.RGBA;if(i===fi)return n.DEPTH_COMPONENT;if(i===Wi)return n.DEPTH_STENCIL;if(i===wl)return n.RED;if(i===El)return n.RED_INTEGER;if(i===Zi)return n.RG;if(i===Tl)return n.RG_INTEGER;if(i===Al)return n.RGBA_INTEGER;if(i===Co||i===Po||i===Io||i===Lo)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yc||i===Sc||i===bc||i===wc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===yc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ec||i===Tc||i===Ac||i===Rc||i===Cc||i===Bo||i===Pc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ec||i===Tc)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ac)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Rc)return r.COMPRESSED_R11_EAC;if(i===Cc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Bo)return r.COMPRESSED_RG11_EAC;if(i===Pc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ic||i===Lc||i===Dc||i===Nc||i===Uc||i===Fc||i===Oc||i===zc||i===Bc||i===kc||i===Hc||i===Gc||i===Vc||i===Wc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ic)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Uc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xc||i===qc||i===Yc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Xc)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zc||i===$c||i===ko||i===Kc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Zc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===$c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const ty=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ey=`
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

}`;class ny{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Zd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Sn({vertexShader:ty,fragmentShader:ey,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new J(new _n(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iy extends ji{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new ny,p={},S=e.getContextAttributes();let b=null,v=null;const A=[],E=[],w=new ft;let x=null;const y=new Mn;y.viewport=new Le;const T=new Mn;T.viewport=new Le;const C=[y,T],I=new dg;let U=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ct=A[K];return ct===void 0&&(ct=new Ma,A[K]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(K){let ct=A[K];return ct===void 0&&(ct=new Ma,A[K]=ct),ct.getGripSpace()},this.getHand=function(K){let ct=A[K];return ct===void 0&&(ct=new Ma,A[K]=ct),ct.getHandSpace()};function L(K){const ct=E.indexOf(K.inputSource);if(ct===-1)return;const nt=A[ct];nt!==void 0&&(nt.update(K.inputSource,K.frame,l||o),nt.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",N);for(let K=0;K<A.length;K++){const ct=E[K];ct!==null&&(E[K]=null,A[K].disconnect(ct))}U=null,z=null,m.reset();for(const K in p)delete p[K];t.setRenderTarget(b),f=null,h=null,d=null,s=null,v=null,Mt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",F),s.addEventListener("inputsourceschange",N),S.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,Et=null,Ft=null;S.depth&&(Ft=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=S.stencil?Wi:fi,Et=S.stencil?Ar:Jn);const pt={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(pt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new Kn(h.textureWidth,h.textureHeight,{format:zn,type:yn,depthTexture:new ks(h.textureWidth,h.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const nt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Kn(f.framebufferWidth,f.framebufferHeight,{format:zn,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Mt.setContext(s),Mt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N(K){for(let ct=0;ct<K.removed.length;ct++){const nt=K.removed[ct],Et=E.indexOf(nt);Et>=0&&(E[Et]=null,A[Et].disconnect(nt))}for(let ct=0;ct<K.added.length;ct++){const nt=K.added[ct];let Et=E.indexOf(nt);if(Et===-1){for(let pt=0;pt<A.length;pt++)if(pt>=E.length){E.push(nt),Et=pt;break}else if(E[pt]===null){E[pt]=nt,Et=pt;break}if(Et===-1)break}const Ft=A[Et];Ft&&Ft.connect(nt)}}const k=new D,V=new D;function q(K,ct,nt){k.setFromMatrixPosition(ct.matrixWorld),V.setFromMatrixPosition(nt.matrixWorld);const Et=k.distanceTo(V),Ft=ct.projectionMatrix.elements,pt=nt.projectionMatrix.elements,ae=Ft[14]/(Ft[10]-1),Wt=Ft[14]/(Ft[10]+1),it=(Ft[9]+1)/Ft[5],rt=(Ft[9]-1)/Ft[5],st=(Ft[8]-1)/Ft[0],xt=(pt[8]+1)/pt[0],gt=ae*st,Xt=ae*xt,ht=Et/(-st+xt),Ut=ht*-st;if(ct.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ut),K.translateZ(ht),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ft[10]===-1)K.projectionMatrix.copy(ct.projectionMatrix),K.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Bt=ae+ht,O=Wt+ht,Zt=gt-Ut,Kt=Xt+(Et-Ut),P=it*Wt/O*Bt,M=rt*Wt/O*Bt;K.projectionMatrix.makePerspective(Zt,Kt,P,M,Bt,O),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function W(K,ct){ct===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ct.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ct=K.near,nt=K.far;m.texture!==null&&(m.depthNear>0&&(ct=m.depthNear),m.depthFar>0&&(nt=m.depthFar)),I.near=T.near=y.near=ct,I.far=T.far=y.far=nt,(U!==I.near||z!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),U=I.near,z=I.far),I.layers.mask=K.layers.mask|6,y.layers.mask=I.layers.mask&-5,T.layers.mask=I.layers.mask&-3;const Et=K.parent,Ft=I.cameras;W(I,Et);for(let pt=0;pt<Ft.length;pt++)W(Ft[pt],Et);Ft.length===2?q(I,y,T):I.projectionMatrix.copy(y.projectionMatrix),ut(K,I,Et)};function ut(K,ct,nt){nt===null?K.matrix.copy(ct.matrixWorld):(K.matrix.copy(nt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ct.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ct.projectionMatrix),K.projectionMatrixInverse.copy(ct.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Cr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(K){c=K,h!==null&&(h.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(K){return p[K]};let Nt=null;function wt(K,ct){if(u=ct.getViewerPose(l||o),g=ct,u!==null){const nt=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Et=!1;nt.length!==I.cameras.length&&(I.cameras.length=0,Et=!0);for(let Wt=0;Wt<nt.length;Wt++){const it=nt[Wt];let rt=null;if(f!==null)rt=f.getViewport(it);else{const xt=d.getViewSubImage(h,it);rt=xt.viewport,Wt===0&&(t.setRenderTargetTextures(v,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(v))}let st=C[Wt];st===void 0&&(st=new Mn,st.layers.enable(Wt),st.viewport=new Le,C[Wt]=st),st.matrix.fromArray(it.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(it.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(rt.x,rt.y,rt.width,rt.height),Wt===0&&(I.matrix.copy(st.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Et===!0&&I.cameras.push(st)}const Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const Wt=d.getDepthInformation(nt[0]);Wt&&Wt.isValid&&Wt.texture&&m.init(Wt,s.renderState)}if(Ft&&Ft.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let Wt=0;Wt<nt.length;Wt++){const it=nt[Wt].camera;if(it){let rt=p[it];rt||(rt=new Zd,p[it]=rt);const st=d.getCameraImage(it);rt.sourceTexture=st}}}}for(let nt=0;nt<A.length;nt++){const Et=E[nt],Ft=A[nt];Et!==null&&Ft!==void 0&&Ft.update(Et,ct,l||o)}Nt&&Nt(K,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),g=null}const Mt=new lf;Mt.setAnimationLoop(wt),this.setAnimationLoop=function(K){Nt=K},this.dispose=function(){}}}const sy=new Se,gf=new ee;gf.set(-1,0,0,0,1,0,0,0,1);function ry(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,of(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,b,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),b=S.envMap,v=S.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(sy.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(gf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function oy(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,A){const E=A.program;i.uniformBlockBinding(v,E)}function l(v,A){let E=s[v.id];E===void 0&&(m(v),E=u(v),s[v.id]=E,v.addEventListener("dispose",S));const w=A.program;i.updateUBOMapping(v,w);const x=t.render.frame;r[v.id]!==x&&(h(v),r[v.id]=x)}function u(v){const A=d();v.__bindingPointIndex=A;const E=n.createBuffer(),w=v.__size,x=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,w,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,E),E}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const A=s[v.id],E=v.uniforms,w=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let x=0,y=E.length;x<y;x++){const T=E[x];if(Array.isArray(T))for(let C=0,I=T.length;C<I;C++)f(T[C],x,C,w);else f(T,x,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,A,E,w){if(_(v,A,E,w)===!0){const x=v.__offset,y=v.value;if(Array.isArray(y)){let T=0;for(let C=0;C<y.length;C++){const I=y[C],U=p(I);g(I,v.__data,T),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(T+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(y,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,v.__data)}}function g(v,A,E){typeof v=="number"||typeof v=="boolean"?A[0]=v:v.isMatrix3?(A[0]=v.elements[0],A[1]=v.elements[1],A[2]=v.elements[2],A[3]=0,A[4]=v.elements[3],A[5]=v.elements[4],A[6]=v.elements[5],A[7]=0,A[8]=v.elements[6],A[9]=v.elements[7],A[10]=v.elements[8],A[11]=0):ArrayBuffer.isView(v)?A.set(new v.constructor(v.buffer,v.byteOffset,A.length)):v.toArray(A,E)}function _(v,A,E,w){const x=v.value,y=A+"_"+E;if(w[y]===void 0)return typeof x=="number"||typeof x=="boolean"?w[y]=x:ArrayBuffer.isView(x)?w[y]=x.slice():w[y]=x.clone(),!0;{const T=w[y];if(typeof x=="number"||typeof x=="boolean"){if(T!==x)return w[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(T.equals(x)===!1)return T.copy(x),!0}}return!1}function m(v){const A=v.uniforms;let E=0;const w=16;for(let y=0,T=A.length;y<T;y++){const C=Array.isArray(A[y])?A[y]:[A[y]];for(let I=0,U=C.length;I<U;I++){const z=C[I],L=Array.isArray(z.value)?z.value:[z.value];for(let F=0,N=L.length;F<N;F++){const k=L[F],V=p(k),q=E%w,W=q%V.boundary,ut=q+W;E+=W,ut!==0&&w-ut<V.storage&&(E+=w-ut),z.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=V.storage}}}const x=E%w;return x>0&&(E+=w-x),v.__size=E,v.__cache={},this}function p(v){const A={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(A.boundary=4,A.storage=4):v.isVector2?(A.boundary=8,A.storage=8):v.isVector3||v.isColor?(A.boundary=16,A.storage=12):v.isVector4?(A.boundary=16,A.storage=16):v.isMatrix3?(A.boundary=48,A.storage=48):v.isMatrix4?(A.boundary=64,A.storage=64):v.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(A.boundary=16,A.storage=v.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",v),A}function S(v){const A=v.target;A.removeEventListener("dispose",S);const E=o.indexOf(A.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function b(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:b}}const ay=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vn=null;function cy(){return Vn===null&&(Vn=new qd(ay,16,16,Zi,di),Vn.name="DFG_LUT",Vn.minFilter=sn,Vn.magFilter=sn,Vn.wrapS=ai,Vn.wrapT=ai,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}class ly{constructor(t={}){const{canvas:e=Dm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=yn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=f,m=new Set([Al,Tl,El]),p=new Set([yn,Jn,Tr,Ar,Sl,bl]),S=new Uint32Array(4),b=new Int32Array(4),v=new D;let A=null,E=null;const w=[],x=[];let y=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let C=!1,I=null,U=null,z=null,L=null;this._outputColorSpace=Je;let F=0,N=0,k=null,V=-1,q=null;const W=new Le,ut=new Le;let Nt=null;const wt=new ne(0);let Mt=0,K=e.width,ct=e.height,nt=1,Et=null,Ft=null;const pt=new Le(0,0,K,ct),ae=new Le(0,0,K,ct);let Wt=!1;const it=new Nl;let rt=!1,st=!1;const xt=new Se,gt=new D,Xt=new Le,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function Bt(){return k===null?nt:1}let O=i;function Zt(R,H){return e.getContext(R,H)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vl}`),e.addEventListener("webglcontextlost",Ne,!1),e.addEventListener("webglcontextrestored",Ae,!1),e.addEventListener("webglcontextcreationerror",Bn,!1),O===null){const H="webgl2";if(O=Zt(H,R),O===null)throw Zt(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw ue("WebGLRenderer: "+R.message),R}let Kt,P,M,G,X,Q,dt,mt,j,tt,_t,Ot,yt,St,$t,Jt,ie,B,vt,et,bt,Pt,ot;function Gt(){Kt=new cv(O),Kt.init(),bt=new jM(O,Kt),P=new tv(O,Kt,t,bt),M=new JM(O,Kt),P.reversedDepthBuffer&&h&&M.buffers.depth.setReversed(!0),U=O.createFramebuffer(),z=O.createFramebuffer(),L=O.createFramebuffer(),G=new hv(O),X=new OM,Q=new QM(O,Kt,M,X,P,bt,G),dt=new av(T),mt=new mg(O),Pt=new Q_(O,mt),j=new lv(O,mt,G,Pt),tt=new fv(O,j,mt,Pt,G),B=new dv(O,P,Q),$t=new ev(X),_t=new FM(T,dt,Kt,P,Pt,$t),Ot=new ry(T,X),yt=new BM,St=new XM(Kt),ie=new J_(T,dt,M,tt,g,c),Jt=new KM(T,tt,P),ot=new oy(O,G,P,M),vt=new j_(O,Kt,G),et=new uv(O,Kt,G),G.programs=_t.programs,T.capabilities=P,T.extensions=Kt,T.properties=X,T.renderLists=yt,T.shadowMap=Jt,T.state=M,T.info=G}Gt(),_!==yn&&(y=new mv(_,e.width,e.height,a,s,r));const kt=new iy(T,O);this.xr=kt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=Kt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Kt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(R){R!==void 0&&(nt=R,this.setSize(K,ct,!1))},this.getSize=function(R){return R.set(K,ct)},this.setSize=function(R,H,$=!0){if(kt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}K=R,ct=H,e.width=Math.floor(R*nt),e.height=Math.floor(H*nt),$===!0&&(e.style.width=R+"px",e.style.height=H+"px"),y!==null&&y.setSize(e.width,e.height),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(K*nt,ct*nt).floor()},this.setDrawingBufferSize=function(R,H,$){K=R,ct=H,nt=$,e.width=Math.floor(R*$),e.height=Math.floor(H*$),this.setViewport(0,0,R,H)},this.setEffects=function(R){if(_===yn){ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let H=0;H<R.length;H++)if(R[H].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(W)},this.getViewport=function(R){return R.copy(pt)},this.setViewport=function(R,H,$,Y){R.isVector4?pt.set(R.x,R.y,R.z,R.w):pt.set(R,H,$,Y),M.viewport(W.copy(pt).multiplyScalar(nt).round())},this.getScissor=function(R){return R.copy(ae)},this.setScissor=function(R,H,$,Y){R.isVector4?ae.set(R.x,R.y,R.z,R.w):ae.set(R,H,$,Y),M.scissor(ut.copy(ae).multiplyScalar(nt).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(R){M.setScissorTest(Wt=R)},this.setOpaqueSort=function(R){Et=R},this.setTransparentSort=function(R){Ft=R},this.getClearColor=function(R){return R.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,$=!0){let Y=0;if(R){let Z=!1;if(k!==null){const Ct=k.texture.format;Z=m.has(Ct)}if(Z){const Ct=k.texture.type,Dt=p.has(Ct),Rt=ie.getClearColor(),Ht=ie.getClearAlpha(),Vt=Rt.r,se=Rt.g,ce=Rt.b;Dt?(S[0]=Vt,S[1]=se,S[2]=ce,S[3]=Ht,O.clearBufferuiv(O.COLOR,0,S)):(b[0]=Vt,b[1]=se,b[2]=ce,b[3]=Ht,O.clearBufferiv(O.COLOR,0,b))}else Y|=O.COLOR_BUFFER_BIT}H&&(Y|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),I=R},this.dispose=function(){e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",Bn,!1),ie.dispose(),yt.dispose(),St.dispose(),X.dispose(),dt.dispose(),tt.dispose(),Pt.dispose(),ot.dispose(),_t.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",nu),kt.removeEventListener("sessionend",iu),Ci.stop()};function Ne(R){R.preventDefault(),Wo("WebGLRenderer: Context Lost."),C=!0}function Ae(){Wo("WebGLRenderer: Context Restored."),C=!1;const R=G.autoReset,H=Jt.enabled,$=Jt.autoUpdate,Y=Jt.needsUpdate,Z=Jt.type;Gt(),G.autoReset=R,Jt.enabled=H,Jt.autoUpdate=$,Jt.needsUpdate=Y,Jt.type=Z}function Bn(R){ue("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function kn(R){const H=R.target;H.removeEventListener("dispose",kn),Lf(H)}function Lf(R){Df(R),X.remove(R)}function Df(R){const H=X.get(R).programs;H!==void 0&&(H.forEach(function($){_t.releaseProgram($)}),R.isShaderMaterial&&_t.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,$,Y,Z,Ct){H===null&&(H=ht);const Dt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Rt=Ff(R,H,$,Y,Z);M.setMaterial(Y,Dt);let Ht=$.index,Vt=1;if(Y.wireframe===!0){if(Ht=j.getWireframeAttribute($),Ht===void 0)return;Vt=2}const se=$.drawRange,ce=$.attributes.position;let qt=se.start*Vt,ve=(se.start+se.count)*Vt;Ct!==null&&(qt=Math.max(qt,Ct.start*Vt),ve=Math.min(ve,(Ct.start+Ct.count)*Vt)),Ht!==null?(qt=Math.max(qt,0),ve=Math.min(ve,Ht.count)):ce!=null&&(qt=Math.max(qt,0),ve=Math.min(ve,ce.count));const Fe=ve-qt;if(Fe<0||Fe===1/0)return;Pt.setup(Z,Y,Rt,$,Ht);let Ue,be=vt;if(Ht!==null&&(Ue=mt.get(Ht),be=et,be.setIndex(Ue)),Z.isMesh)Y.wireframe===!0?(M.setLineWidth(Y.wireframeLinewidth*Bt()),be.setMode(O.LINES)):be.setMode(O.TRIANGLES);else if(Z.isLine){let je=Y.linewidth;je===void 0&&(je=1),M.setLineWidth(je*Bt()),Z.isLineSegments?be.setMode(O.LINES):Z.isLineLoop?be.setMode(O.LINE_LOOP):be.setMode(O.LINE_STRIP)}else Z.isPoints?be.setMode(O.POINTS):Z.isSprite&&be.setMode(O.TRIANGLES);if(Z.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))be.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const je=Z._multiDrawStarts,Lt=Z._multiDrawCounts,pn=Z._multiDrawCount,fe=Ht?mt.get(Ht).bytesPerElement:1,bn=X.get(Y).currentProgram.getUniforms();for(let Hn=0;Hn<pn;Hn++)bn.setValue(O,"_gl_DrawID",Hn),be.render(je[Hn]/fe,Lt[Hn])}else if(Z.isInstancedMesh)be.renderInstances(qt,Fe,Z.count);else if($.isInstancedBufferGeometry){const je=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Lt=Math.min($.instanceCount,je);be.renderInstances(qt,Fe,Lt)}else be.render(qt,Fe)};function eu(R,H,$){R.transparent===!0&&R.side===He&&R.forceSinglePass===!1?(R.side=rn,R.needsUpdate=!0,Br(R,H,$),R.side=Ri,R.needsUpdate=!0,Br(R,H,$),R.side=He):Br(R,H,$)}this.compile=function(R,H,$=null){$===null&&($=R),E=St.get($),E.init(H),x.push(E),$.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(E.pushLight(Z),Z.castShadow&&E.pushShadow(Z))}),R!==$&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(E.pushLight(Z),Z.castShadow&&E.pushShadow(Z))}),E.setupLights();const Y=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ct=Z.material;if(Ct)if(Array.isArray(Ct))for(let Dt=0;Dt<Ct.length;Dt++){const Rt=Ct[Dt];eu(Rt,$,Z),Y.add(Rt)}else eu(Ct,$,Z),Y.add(Ct)}),E=x.pop(),Y},this.compileAsync=function(R,H,$=null){const Y=this.compile(R,H,$);return new Promise(Z=>{function Ct(){if(Y.forEach(function(Dt){X.get(Dt).currentProgram.isReady()&&Y.delete(Dt)}),Y.size===0){Z(R);return}setTimeout(Ct,10)}Kt.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let la=null;function Nf(R){la&&la(R)}function nu(){Ci.stop()}function iu(){Ci.start()}const Ci=new lf;Ci.setAnimationLoop(Nf),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(R){la=R,kt.setAnimationLoop(R),R===null?Ci.stop():Ci.start()},kt.addEventListener("sessionstart",nu),kt.addEventListener("sessionend",iu),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;I!==null&&I.renderStart(R,H);const $=kt.enabled===!0&&kt.isPresenting===!0,Y=y!==null&&(k===null||$)&&y.begin(T,k);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(H),H=kt.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,H,k),E=St.get(R,x.length),E.init(H),E.state.textureUnits=Q.getTextureUnits(),x.push(E),xt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),it.setFromProjectionMatrix(xt,Yn,H.reversedDepth),st=this.localClippingEnabled,rt=$t.init(this.clippingPlanes,st),A=yt.get(R,w.length),A.init(),w.push(A),kt.enabled===!0&&kt.isPresenting===!0){const Dt=T.xr.getDepthSensingMesh();Dt!==null&&ua(Dt,H,-1/0,T.sortObjects)}ua(R,H,0,T.sortObjects),A.finish(),T.sortObjects===!0&&A.sort(Et,Ft,H.reversedDepth),Ut=kt.enabled===!1||kt.isPresenting===!1||kt.hasDepthSensing()===!1,Ut&&ie.addToRenderList(A,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&$t.beginShadows();const Z=E.state.shadowsArray;if(Jt.render(Z,R,H),rt===!0&&$t.endShadows(),(Y&&y.hasRenderPass())===!1){const Dt=A.opaque,Rt=A.transmissive;if(E.setupLights(),H.isArrayCamera){const Ht=H.cameras;if(Rt.length>0)for(let Vt=0,se=Ht.length;Vt<se;Vt++){const ce=Ht[Vt];ru(Dt,Rt,R,ce)}Ut&&ie.render(R);for(let Vt=0,se=Ht.length;Vt<se;Vt++){const ce=Ht[Vt];su(A,R,ce,ce.viewport)}}else Rt.length>0&&ru(Dt,Rt,R,H),Ut&&ie.render(R),su(A,R,H)}k!==null&&N===0&&(Q.updateMultisampleRenderTarget(k),Q.updateRenderTargetMipmap(k)),Y&&y.end(T),R.isScene===!0&&R.onAfterRender(T,R,H),Pt.resetDefaultState(),V=-1,q=null,x.pop(),x.length>0?(E=x[x.length-1],Q.setTextureUnits(E.state.textureUnits),rt===!0&&$t.setGlobalState(T.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?A=w[w.length-1]:A=null,I!==null&&I.renderEnd()};function ua(R,H,$,Y){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLightProbeGrid)E.pushLightProbeGrid(R);else if(R.isLight)E.pushLight(R),R.castShadow&&E.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||it.intersectsSprite(R)){Y&&Xt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(xt);const Dt=tt.update(R),Rt=R.material;Rt.visible&&A.push(R,Dt,Rt,$,Xt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||it.intersectsObject(R))){const Dt=tt.update(R),Rt=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Xt.copy(R.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Xt.copy(Dt.boundingSphere.center)),Xt.applyMatrix4(R.matrixWorld).applyMatrix4(xt)),Array.isArray(Rt)){const Ht=Dt.groups;for(let Vt=0,se=Ht.length;Vt<se;Vt++){const ce=Ht[Vt],qt=Rt[ce.materialIndex];qt&&qt.visible&&A.push(R,Dt,qt,$,Xt.z,ce)}}else Rt.visible&&A.push(R,Dt,Rt,$,Xt.z,null)}}const Ct=R.children;for(let Dt=0,Rt=Ct.length;Dt<Rt;Dt++)ua(Ct[Dt],H,$,Y)}function su(R,H,$,Y){const{opaque:Z,transmissive:Ct,transparent:Dt}=R;E.setupLightsView($),rt===!0&&$t.setGlobalState(T.clippingPlanes,$),Y&&M.viewport(W.copy(Y)),Z.length>0&&zr(Z,H,$),Ct.length>0&&zr(Ct,H,$),Dt.length>0&&zr(Dt,H,$),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function ru(R,H,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Y.id]===void 0){const qt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Y.id]=new Kn(1,1,{generateMipmaps:!0,type:qt?di:yn,minFilter:Vi,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace})}const Ct=E.state.transmissionRenderTarget[Y.id],Dt=Y.viewport||W;Ct.setSize(Dt.z*T.transmissionResolutionScale,Dt.w*T.transmissionResolutionScale);const Rt=T.getRenderTarget(),Ht=T.getActiveCubeFace(),Vt=T.getActiveMipmapLevel();T.setRenderTarget(Ct),T.getClearColor(wt),Mt=T.getClearAlpha(),Mt<1&&T.setClearColor(16777215,.5),T.clear(),Ut&&ie.render($);const se=T.toneMapping;T.toneMapping=Zn;const ce=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),E.setupLightsView(Y),rt===!0&&$t.setGlobalState(T.clippingPlanes,Y),zr(R,$,Y),Q.updateMultisampleRenderTarget(Ct),Q.updateRenderTargetMipmap(Ct),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let ve=0,Fe=H.length;ve<Fe;ve++){const Ue=H[ve],{object:be,geometry:je,material:Lt,group:pn}=Ue;if(Lt.side===He&&be.layers.test(Y.layers)){const fe=Lt.side;Lt.side=rn,Lt.needsUpdate=!0,ou(be,$,Y,je,Lt,pn),Lt.side=fe,Lt.needsUpdate=!0,qt=!0}}qt===!0&&(Q.updateMultisampleRenderTarget(Ct),Q.updateRenderTargetMipmap(Ct))}T.setRenderTarget(Rt,Ht,Vt),T.setClearColor(wt,Mt),ce!==void 0&&(Y.viewport=ce),T.toneMapping=se}function zr(R,H,$){const Y=H.isScene===!0?H.overrideMaterial:null;for(let Z=0,Ct=R.length;Z<Ct;Z++){const Dt=R[Z],{object:Rt,geometry:Ht,group:Vt}=Dt;let se=Dt.material;se.allowOverride===!0&&Y!==null&&(se=Y),Rt.layers.test($.layers)&&ou(Rt,H,$,Ht,se,Vt)}}function ou(R,H,$,Y,Z,Ct){R.onBeforeRender(T,H,$,Y,Z,Ct),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(T,H,$,Y,R,Ct),Z.transparent===!0&&Z.side===He&&Z.forceSinglePass===!1?(Z.side=rn,Z.needsUpdate=!0,T.renderBufferDirect($,H,Y,Z,R,Ct),Z.side=Ri,Z.needsUpdate=!0,T.renderBufferDirect($,H,Y,Z,R,Ct),Z.side=He):T.renderBufferDirect($,H,Y,Z,R,Ct),R.onAfterRender(T,H,$,Y,Z,Ct)}function Br(R,H,$){H.isScene!==!0&&(H=ht);const Y=X.get(R),Z=E.state.lights,Ct=E.state.shadowsArray,Dt=Z.state.version,Rt=_t.getParameters(R,Z.state,Ct,H,$,E.state.lightProbeGridArray),Ht=_t.getProgramCacheKey(Rt);let Vt=Y.programs;Y.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?H.environment:null,Y.fog=H.fog;const se=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;Y.envMap=dt.get(R.envMap||Y.environment,se),Y.envMapRotation=Y.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,Vt===void 0&&(R.addEventListener("dispose",kn),Vt=new Map,Y.programs=Vt);let ce=Vt.get(Ht);if(ce!==void 0){if(Y.currentProgram===ce&&Y.lightsStateVersion===Dt)return cu(R,Rt),ce}else Rt.uniforms=_t.getUniforms(R),I!==null&&R.isNodeMaterial&&I.build(R,$,Rt),R.onBeforeCompile(Rt,T),ce=_t.acquireProgram(Rt,Ht),Vt.set(Ht,ce),Y.uniforms=Rt.uniforms;const qt=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qt.clippingPlanes=$t.uniform),cu(R,Rt),Y.needsLights=zf(R),Y.lightsStateVersion=Dt,Y.needsLights&&(qt.ambientLightColor.value=Z.state.ambient,qt.lightProbe.value=Z.state.probe,qt.directionalLights.value=Z.state.directional,qt.directionalLightShadows.value=Z.state.directionalShadow,qt.spotLights.value=Z.state.spot,qt.spotLightShadows.value=Z.state.spotShadow,qt.rectAreaLights.value=Z.state.rectArea,qt.ltc_1.value=Z.state.rectAreaLTC1,qt.ltc_2.value=Z.state.rectAreaLTC2,qt.pointLights.value=Z.state.point,qt.pointLightShadows.value=Z.state.pointShadow,qt.hemisphereLights.value=Z.state.hemi,qt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qt.spotLightMatrix.value=Z.state.spotLightMatrix,qt.spotLightMap.value=Z.state.spotLightMap,qt.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=E.state.lightProbeGridArray.length>0,Y.currentProgram=ce,Y.uniformsList=null,ce}function au(R){if(R.uniformsList===null){const H=R.currentProgram.getUniforms();R.uniformsList=Do.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function cu(R,H){const $=X.get(R);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function Uf(R,H){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;v.setFromMatrixPosition(H.matrixWorld);for(let $=0,Y=R.length;$<Y;$++){const Z=R[$];if(Z.texture!==null&&Z.boundingBox.containsPoint(v))return Z}return null}function Ff(R,H,$,Y,Z){H.isScene!==!0&&(H=ht),Q.resetTextureUnits();const Ct=H.fog,Dt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?H.environment:null,Rt=k===null?T.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:he.workingColorSpace,Ht=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Vt=dt.get(Y.envMap||Dt,Ht),se=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ce=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),qt=!!$.morphAttributes.position,ve=!!$.morphAttributes.normal,Fe=!!$.morphAttributes.color;let Ue=Zn;Y.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ue=T.toneMapping);const be=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,je=be!==void 0?be.length:0,Lt=X.get(Y),pn=E.state.lights;if(rt===!0&&(st===!0||R!==q)){const Re=R===q&&Y.id===V;$t.setState(Y,R,Re)}let fe=!1;Y.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==pn.state.version||Lt.outputColorSpace!==Rt||Z.isBatchedMesh&&Lt.batching===!1||!Z.isBatchedMesh&&Lt.batching===!0||Z.isBatchedMesh&&Lt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Lt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Lt.instancing===!1||!Z.isInstancedMesh&&Lt.instancing===!0||Z.isSkinnedMesh&&Lt.skinning===!1||!Z.isSkinnedMesh&&Lt.skinning===!0||Z.isInstancedMesh&&Lt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Lt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Lt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Lt.instancingMorph===!1&&Z.morphTexture!==null||Lt.envMap!==Vt||Y.fog===!0&&Lt.fog!==Ct||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==$t.numPlanes||Lt.numIntersection!==$t.numIntersection)||Lt.vertexAlphas!==se||Lt.vertexTangents!==ce||Lt.morphTargets!==qt||Lt.morphNormals!==ve||Lt.morphColors!==Fe||Lt.toneMapping!==Ue||Lt.morphTargetsCount!==je||!!Lt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(fe=!0):(fe=!0,Lt.__version=Y.version);let bn=Lt.currentProgram;fe===!0&&(bn=Br(Y,H,Z),I&&Y.isNodeMaterial&&I.onUpdateProgram(Y,bn,Lt));let Hn=!1,pi=!1,es=!1;const we=bn.getUniforms(),Oe=Lt.uniforms;if(M.useProgram(bn.program)&&(Hn=!0,pi=!0,es=!0),Y.id!==V&&(V=Y.id,pi=!0),Lt.needsLights){const Re=Uf(E.state.lightProbeGridArray,Z);Lt.lightProbeGrid!==Re&&(Lt.lightProbeGrid=Re,pi=!0)}if(Hn||q!==R){M.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),we.setValue(O,"projectionMatrix",R.projectionMatrix),we.setValue(O,"viewMatrix",R.matrixWorldInverse);const gi=we.map.cameraPosition;gi!==void 0&&gi.setValue(O,gt.setFromMatrixPosition(R.matrixWorld)),P.logarithmicDepthBuffer&&we.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&we.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),q!==R&&(q=R,pi=!0,es=!0)}if(Lt.needsLights&&(pn.state.directionalShadowMap.length>0&&we.setValue(O,"directionalShadowMap",pn.state.directionalShadowMap,Q),pn.state.spotShadowMap.length>0&&we.setValue(O,"spotShadowMap",pn.state.spotShadowMap,Q),pn.state.pointShadowMap.length>0&&we.setValue(O,"pointShadowMap",pn.state.pointShadowMap,Q)),Z.isSkinnedMesh){we.setOptional(O,Z,"bindMatrix"),we.setOptional(O,Z,"bindMatrixInverse");const Re=Z.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),we.setValue(O,"boneTexture",Re.boneTexture,Q))}Z.isBatchedMesh&&(we.setOptional(O,Z,"batchingTexture"),we.setValue(O,"batchingTexture",Z._matricesTexture,Q),we.setOptional(O,Z,"batchingIdTexture"),we.setValue(O,"batchingIdTexture",Z._indirectTexture,Q),we.setOptional(O,Z,"batchingColorTexture"),Z._colorsTexture!==null&&we.setValue(O,"batchingColorTexture",Z._colorsTexture,Q));const mi=$.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&B.update(Z,$,bn),(pi||Lt.receiveShadow!==Z.receiveShadow)&&(Lt.receiveShadow=Z.receiveShadow,we.setValue(O,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&H.environment!==null&&(Oe.envMapIntensity.value=H.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=cy()),pi){if(we.setValue(O,"toneMappingExposure",T.toneMappingExposure),Lt.needsLights&&Of(Oe,es),Ct&&Y.fog===!0&&Ot.refreshFogUniforms(Oe,Ct),Ot.refreshMaterialUniforms(Oe,Y,nt,ct,E.state.transmissionRenderTarget[R.id]),Lt.needsLights&&Lt.lightProbeGrid){const Re=Lt.lightProbeGrid;Oe.probesSH.value=Re.texture,Oe.probesMin.value.copy(Re.boundingBox.min),Oe.probesMax.value.copy(Re.boundingBox.max),Oe.probesResolution.value.copy(Re.resolution)}Do.upload(O,au(Lt),Oe,Q)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Do.upload(O,au(Lt),Oe,Q),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&we.setValue(O,"center",Z.center),we.setValue(O,"modelViewMatrix",Z.modelViewMatrix),we.setValue(O,"normalMatrix",Z.normalMatrix),we.setValue(O,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){const Re=Y.uniformsGroups;for(let gi=0,ns=Re.length;gi<ns;gi++){const lu=Re[gi];ot.update(lu,bn),ot.bind(lu,bn)}}return bn}function Of(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function zf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(R,H,$){const Y=X.get(R);Y.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),X.get(R.texture).__webglTexture=H,X.get(R.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:$,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){const $=X.get(R);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,$=0){k=R,F=H,N=$;let Y=null,Z=!1,Ct=!1;if(R){const Rt=X.get(R);if(Rt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(O.FRAMEBUFFER,Rt.__webglFramebuffer),W.copy(R.viewport),ut.copy(R.scissor),Nt=R.scissorTest,M.viewport(W),M.scissor(ut),M.setScissorTest(Nt),V=-1;return}else if(Rt.__webglFramebuffer===void 0)Q.setupRenderTarget(R);else if(Rt.__hasExternalTextures)Q.rebindTextures(R,X.get(R.texture).__webglTexture,X.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const se=R.depthTexture;if(Rt.__boundDepthTexture!==se){if(se!==null&&X.has(se)&&(R.width!==se.image.width||R.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(R)}}const Ht=R.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Ct=!0);const Vt=X.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Vt[H])?Y=Vt[H][$]:Y=Vt[H],Z=!0):R.samples>0&&Q.useMultisampledRTT(R)===!1?Y=X.get(R).__webglMultisampledFramebuffer:Array.isArray(Vt)?Y=Vt[$]:Y=Vt,W.copy(R.viewport),ut.copy(R.scissor),Nt=R.scissorTest}else W.copy(pt).multiplyScalar(nt).floor(),ut.copy(ae).multiplyScalar(nt).floor(),Nt=Wt;if($!==0&&(Y=U),M.bindFramebuffer(O.FRAMEBUFFER,Y)&&M.drawBuffers(R,Y),M.viewport(W),M.scissor(ut),M.setScissorTest(Nt),Z){const Rt=X.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+H,Rt.__webglTexture,$)}else if(Ct){const Rt=H;for(let Ht=0;Ht<R.textures.length;Ht++){const Vt=X.get(R.textures[Ht]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ht,Vt.__webglTexture,$,Rt)}}else if(R!==null&&$!==0){const Rt=X.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Rt.__webglTexture,$)}V=-1},this.readRenderTargetPixels=function(R,H,$,Y,Z,Ct,Dt,Rt=0){if(!(R&&R.isWebGLRenderTarget)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=X.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ht=Ht[Dt]),Ht){M.bindFramebuffer(O.FRAMEBUFFER,Ht);try{const Vt=R.textures[Rt],se=Vt.format,ce=Vt.type;if(R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Rt),!P.textureFormatReadable(se)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(ce)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-Y&&$>=0&&$<=R.height-Z&&O.readPixels(H,$,Y,Z,bt.convert(se),bt.convert(ce),Ct)}finally{const Vt=k!==null?X.get(k).__webglFramebuffer:null;M.bindFramebuffer(O.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(R,H,$,Y,Z,Ct,Dt,Rt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=X.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ht=Ht[Dt]),Ht)if(H>=0&&H<=R.width-Y&&$>=0&&$<=R.height-Z){M.bindFramebuffer(O.FRAMEBUFFER,Ht);const Vt=R.textures[Rt],se=Vt.format,ce=Vt.type;if(R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Rt),!P.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,qt),O.bufferData(O.PIXEL_PACK_BUFFER,Ct.byteLength,O.STREAM_READ),O.readPixels(H,$,Y,Z,bt.convert(se),bt.convert(ce),0);const ve=k!==null?X.get(k).__webglFramebuffer:null;M.bindFramebuffer(O.FRAMEBUFFER,ve);const Fe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Nm(O,Fe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,qt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ct),O.deleteBuffer(qt),O.deleteSync(Fe),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,$=0){const Y=Math.pow(2,-$),Z=Math.floor(R.image.width*Y),Ct=Math.floor(R.image.height*Y),Dt=H!==null?H.x:0,Rt=H!==null?H.y:0;Q.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,Dt,Rt,Z,Ct),M.unbindTexture()},this.copyTextureToTexture=function(R,H,$=null,Y=null,Z=0,Ct=0){let Dt,Rt,Ht,Vt,se,ce,qt,ve,Fe;const Ue=R.isCompressedTexture?R.mipmaps[Ct]:R.image;if($!==null)Dt=$.max.x-$.min.x,Rt=$.max.y-$.min.y,Ht=$.isBox3?$.max.z-$.min.z:1,Vt=$.min.x,se=$.min.y,ce=$.isBox3?$.min.z:0;else{const Oe=Math.pow(2,-Z);Dt=Math.floor(Ue.width*Oe),Rt=Math.floor(Ue.height*Oe),R.isDataArrayTexture?Ht=Ue.depth:R.isData3DTexture?Ht=Math.floor(Ue.depth*Oe):Ht=1,Vt=0,se=0,ce=0}Y!==null?(qt=Y.x,ve=Y.y,Fe=Y.z):(qt=0,ve=0,Fe=0);const be=bt.convert(H.format),je=bt.convert(H.type);let Lt;H.isData3DTexture?(Q.setTexture3D(H,0),Lt=O.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Q.setTexture2DArray(H,0),Lt=O.TEXTURE_2D_ARRAY):(Q.setTexture2D(H,0),Lt=O.TEXTURE_2D),M.activeTexture(O.TEXTURE0),M.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),M.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),M.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);const pn=M.getParameter(O.UNPACK_ROW_LENGTH),fe=M.getParameter(O.UNPACK_IMAGE_HEIGHT),bn=M.getParameter(O.UNPACK_SKIP_PIXELS),Hn=M.getParameter(O.UNPACK_SKIP_ROWS),pi=M.getParameter(O.UNPACK_SKIP_IMAGES);M.pixelStorei(O.UNPACK_ROW_LENGTH,Ue.width),M.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ue.height),M.pixelStorei(O.UNPACK_SKIP_PIXELS,Vt),M.pixelStorei(O.UNPACK_SKIP_ROWS,se),M.pixelStorei(O.UNPACK_SKIP_IMAGES,ce);const es=R.isDataArrayTexture||R.isData3DTexture,we=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){const Oe=X.get(R),mi=X.get(H),Re=X.get(Oe.__renderTarget),gi=X.get(mi.__renderTarget);M.bindFramebuffer(O.READ_FRAMEBUFFER,Re.__webglFramebuffer),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let ns=0;ns<Ht;ns++)es&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(R).__webglTexture,Z,ce+ns),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(H).__webglTexture,Ct,Fe+ns)),O.blitFramebuffer(Vt,se,Dt,Rt,qt,ve,Dt,Rt,O.DEPTH_BUFFER_BIT,O.NEAREST);M.bindFramebuffer(O.READ_FRAMEBUFFER,null),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||X.has(R)){const Oe=X.get(R),mi=X.get(H);M.bindFramebuffer(O.READ_FRAMEBUFFER,z),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,L);for(let Re=0;Re<Ht;Re++)es?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.__webglTexture,Z,ce+Re):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Oe.__webglTexture,Z),we?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,mi.__webglTexture,Ct,Fe+Re):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,mi.__webglTexture,Ct),Z!==0?O.blitFramebuffer(Vt,se,Dt,Rt,qt,ve,Dt,Rt,O.COLOR_BUFFER_BIT,O.NEAREST):we?O.copyTexSubImage3D(Lt,Ct,qt,ve,Fe+Re,Vt,se,Dt,Rt):O.copyTexSubImage2D(Lt,Ct,qt,ve,Vt,se,Dt,Rt);M.bindFramebuffer(O.READ_FRAMEBUFFER,null),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else we?R.isDataTexture||R.isData3DTexture?O.texSubImage3D(Lt,Ct,qt,ve,Fe,Dt,Rt,Ht,be,je,Ue.data):H.isCompressedArrayTexture?O.compressedTexSubImage3D(Lt,Ct,qt,ve,Fe,Dt,Rt,Ht,be,Ue.data):O.texSubImage3D(Lt,Ct,qt,ve,Fe,Dt,Rt,Ht,be,je,Ue):R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Ct,qt,ve,Dt,Rt,be,je,Ue.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Ct,qt,ve,Ue.width,Ue.height,be,Ue.data):O.texSubImage2D(O.TEXTURE_2D,Ct,qt,ve,Dt,Rt,be,je,Ue);M.pixelStorei(O.UNPACK_ROW_LENGTH,pn),M.pixelStorei(O.UNPACK_IMAGE_HEIGHT,fe),M.pixelStorei(O.UNPACK_SKIP_PIXELS,bn),M.pixelStorei(O.UNPACK_SKIP_ROWS,Hn),M.pixelStorei(O.UNPACK_SKIP_IMAGES,pi),Ct===0&&H.generateMipmaps&&O.generateMipmap(Lt),M.unbindTexture()},this.initRenderTarget=function(R){X.get(R).__webglFramebuffer===void 0&&Q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Q.setTextureCube(R,0):R.isData3DTexture?Q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Q.setTexture2DArray(R,0):Q.setTexture2D(R,0),M.unbindTexture()},this.resetState=function(){F=0,N=0,k=null,M.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}const Oh=200,zh=440,uy=`
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
`,hy=`
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
`;function dy(){const n=new _n(zh,zh,Oh,Oh);n.rotateX(-Math.PI/2);const t=n.attributes.position,e=new Float32Array(t.count);for(let r=0;r<t.count;r++)e[r]=-Ee(t.getX(r),t.getZ(r));n.setAttribute("aDepth",new fn(e,1));const i=new Sn({uniforms:{uTime:{value:0}},vertexShader:uy,fragmentShader:hy}),s=new J(n,i);return s.position.y=0,s.frustumCulled=!1,{mesh:s,update(r){i.uniforms.uTime.value=r}}}const Ke=1e-9;function Za(n){let t=0;for(let e=0;e<n.length;e++){const[i,s]=n[e],[r,o]=n[(e+1)%n.length];t+=i*o-r*s}return Math.abs(t)/2}function Bh(n,t){const[e,i]=n;let s=!1;for(let r=0,o=t.length-1;r<t.length;o=r++){const[a,c]=t[r],[l,u]=t[o];c>i!=u>i&&e<(l-a)*(i-c)/(u-c)+a&&(s=!s)}return s}function fy(n,t,e,i){const s=(l,u,d)=>(u[0]-l[0])*(d[1]-l[1])-(u[1]-l[1])*(d[0]-l[0]),r=s(e,i,n),o=s(e,i,t),a=s(n,t,e),c=s(n,t,i);return(r>Ke&&o<-Ke||r<-Ke&&o>Ke)&&(a>Ke&&c<-Ke||a<-Ke&&c>Ke)}function py(n,t){for(const e of n)if(Bh(e,t))return!0;for(const e of t)if(Bh(e,n))return!0;for(let e=0;e<n.length;e++)for(let i=0;i<t.length;i++)if(fy(n[e],n[(e+1)%n.length],t[i],t[(i+1)%t.length]))return!0;return!1}function my(n,t){const e=h=>{let f=0,g=0;for(const[_,m]of h)f+=_,g+=m;return[f/h.length,g/h.length]},[i,s]=e(n),[r,o]=e(t),a=(i+r)/2,c=(s+o)/2,l=(h,f)=>{const g=Math.cos(f),_=Math.sin(f);let m=0;for(let p=0;p<h.length;p++){const[S,b]=h[p],[v,A]=h[(p+1)%h.length],E=v-S,w=A-b,x=g*w-_*E;if(Math.abs(x)<Ke)continue;const y=((S-a)*w-(b-c)*E)/x,T=((S-a)*_-(b-c)*g)/x;y>Ke&&T>-Ke&&T<1+Ke&&(m=Math.max(m,y)),-y>Ke&&-T>-Ke&&-T<1+Ke&&(m=Math.max(m,-y))}return m},u=72,d=[];for(let h=0;h<u;h++){const f=h/u*Math.PI*2,g=Math.max(l(n,f),l(t,f));d.push([a+Math.cos(f)*g,c+Math.sin(f)*g])}return d}function gy(n,t){let e=n;for(let i=0;i<t.length;i++){const[s,r]=t[i],[o,a]=t[(i+1)%t.length],c=e;if(e=[],c.length===0)break;const l=h=>(o-s)*(h[1]-r)-(a-r)*(h[0]-s)>=-Ke,u=(h,f)=>{const g=f[0]-h[0],_=f[1]-h[1],m=(o-s)*_-(a-r)*g;if(Math.abs(m)<Ke)return h;const p=((o-s)*(h[1]-r)-(a-r)*(h[0]-s))/m;return[h[0]+g*p,h[1]+_*p]};let d=c[c.length-1];for(const h of c)l(h)?(l(d)||e.push(u(d,h)),e.push(h)):l(d)&&e.push(u(d,h)),d=h}return e}function vo(n,t){if(!py(n,t))return!1;const e=gy(n,t),i=Za(e),s=Math.min(Za(n),Za(t));return i>s*.01}function xy(n,t,e,i,s){let r=0;for(let o=0;o<s.length;o++){const[a,c]=s[o],[l,u]=s[(o+1)%s.length],d=l-a,h=u-c,f=e*h-i*d;if(Math.abs(f)<1e-9)continue;const g=((a-n)*h-(c-t)*d)/f,_=((a-n)*i-(c-t)*e)/f;g>1e-6&&_>=-1e-6&&_<=1+1e-6&&(r=Math.max(r,g)),-g>1e-6&&-_>=-1e-6&&-_<=1+1e-6&&(r=Math.max(r,-g))}return r}const _y=8.8,vy=4.4,fr=2.4,pr=3.2,Rs=4.4;function Hl(n){return n.kind==="switchback"?vy:_y}const kh=new Map;function Qi(n){let t=kh.get(n);if(!t){const e=Ge(ge(n.a)),i=Ge(ge(n.b)),s=new D((e.x+i.x)/2,(e.y+i.y)/2+.15,(e.z+i.z)/2);t=new ia([new D(e.x,e.y+.18,e.z),s,new D(i.x,i.y+.18,i.z)]),kh.set(n,t)}return t}const wi=new D,or=new D;function Ko(n,t){const e=Qi(n),i=Hl(n)/2;e.getPointAt(t,wi),e.getTangentAt(t,or);const s=Math.hypot(or.x,or.z)||1,r=-or.z/s,o=or.x/s;return Math.max(wi.y,Ee(wi.x,wi.z),Ee(wi.x+r*i,wi.z+o*i),Ee(wi.x-r*i,wi.z-o*i))+.15}const Ln=64,My=Math.tan(18*Math.PI/180),Hh=new Map;function xf(n,t){let e=Hh.get(n);if(!e){const a=Qi(n).getLength()/Ln,c=My*a,l=new Float32Array(Ln+1);l[0]=Ko(n,0);for(let u=1;u<=Ln;u++)l[u]=Math.max(Ko(n,u/Ln),l[u-1]-c);e=new Float32Array(Ln+1),e[Ln]=l[Ln];for(let u=Ln-1;u>=0;u--)e[u]=Math.max(l[u],e[u+1]-c);Hh.set(n,e)}const i=Math.max(0,Math.min(Ln,t*Ln)),s=Math.min(Ln-1,Math.floor(i)),r=i-s;return e[s]*(1-r)+e[s+1]*r}let ws=null;function yy(){if(ws)return ws;ws=new Map;for(const n of Ye){if(n.kind==="bridge")continue;const t=[[n.a,0],[n.b,1]];for(const[e,i]of t){const s=xf(n,i);ws.set(e,Math.max(ws.get(e)??-1/0,s))}}return ws}function Gl(n,t){const e=yy(),i=e.get(n.a)??Ko(n,0),s=e.get(n.b)??Ko(n,1);return Math.max(xf(n,t),i+(s-i)*t)}const Sy=.8,_f=new Set(["bl-w","bl-e"]);function by(n){const t=Ge(ge(n)),e=[];for(const i of Ye){if(i.kind==="bridge"&&!_f.has(n)||i.a!==n&&i.b!==n)continue;const s=Ge(ge(i.a===n?i.b:i.a)),r=s.x-t.x,o=s.z-t.z,a=Math.hypot(r,o)||1;e.push({e:i,dx:r/a,dz:o/a,hw:Hl(i)/2,len:a,ox:s.x,oz:s.z})}return e}function $a(n,t,e,i){const s=Ge(ge(t)),r=n.ox-s.x,o=n.oz-s.z,a=r*r+o*o||1,c=Math.min(1,Math.max(0,((e-s.x)*r+(i-s.z)*o)/a));return Gl(n.e,n.e.a===t?c:1-c)}function wy(n){let t=6;for(let i=0;i<n.length;i++)for(let s=i+1;s<n.length;s++){const r=n[i],o=n[s],a=Math.min(1,Math.max(-1,r.dx*o.dx+r.dz*o.dz)),c=Math.acos(a),l=Math.min(Math.PI,Math.max(Math.PI/15,c));t=Math.max(t,(r.hw+o.hw)/Math.sin(l))}let e=1/0;for(const i of n)e=Math.min(e,i.len);return Math.min(t,e*.9,14)}let En=null;function Ey(n,t,e,i,s){const r=(i.z-s.z)*(e.x-s.x)+(s.x-i.x)*(e.z-s.z);if(Math.abs(r)<1e-12)return null;const o=((i.z-s.z)*(n-s.x)+(s.x-i.x)*(t-s.z))/r,a=((s.z-e.z)*(n-s.x)+(e.x-s.x)*(t-s.z))/r,c=1-o-a;return o<-1e-9||a<-1e-9||c<-1e-9?null:o*e.h+a*i.h+c*s.h}function Vl(n,t,e,i){for(const[o,a,c]of t){const l=Ey(e,i,o,a,c);if(l!==null)return l}let s=n[0],r=1/0;for(const o of n){const a=(o.x-e)*(o.x-e)+(o.z-i)*(o.z-i);a<r&&(r=a,s=o)}return s.h}function Gh(n,t,e){return Vl(n.ring,n.tris,t,e)}function Wl(){if(En)return En;const n=new Set;for(const r of Ye)r.kind!=="bridge"&&(n.add(r.a),n.add(r.b));for(const r of _f)n.add(r);const t=new Map;for(const r of n){if(ge(r).noIntersect)continue;const o=by(r);if(o.length<2)continue;if(o.length===2){const d=Math.min(1,Math.max(-1,o[0].dx*o[1].dx+o[0].dz*o[1].dz)),h=Math.acos(d);if(h<Math.PI/12||h>Math.PI-Math.PI/12)continue}const a=wy(o),c=Ge(ge(r));let l=1/0,u=-1/0;for(const d of o){const h=$a(d,r,c.x,c.z);l=Math.min(l,h),u=Math.max(u,h)}u-l>Sy||t.set(r,{dirs:o,stubLen:a})}const e=new Map;for(const[r,{stubLen:o}]of t)e.set(r,o);for(let r=0;r<10;r++){let o=!1;for(const a of Ye){if(a.kind==="bridge")continue;const c=e.get(a.a),l=e.get(a.b);if(c===void 0||l===void 0)continue;const u=Ge(ge(a.a)),d=Ge(ge(a.b)),h=Math.hypot(d.x-u.x,d.z-u.z)||1,f=Math.max(h-1,h*.5);if(c+l>f){const g=f/(c+l);e.set(a.a,c*g),e.set(a.b,l*g),o=!0}}if(!o)break}En=[];for(const[r,{dirs:o}]of t){const a=e.get(r),c=w=>a,l=Ge(ge(r)),u=72,d=[];for(let w=0;w<u;w++)d.push(w/u*Math.PI*2);for(const w of o){const x=Math.atan2(w.dz,w.dx),y=Math.atan2(w.hw,c(w.e)),T=C=>(C%(Math.PI*2)+Math.PI*2)%(Math.PI*2);d.push(T(x),T(x+y),T(x-y))}d.sort((w,x)=>w-x);const h=[];for(const w of d)(h.length===0||Math.abs(w-h[h.length-1])>1e-9)&&h.push(w);const f=new Float64Array(h.length),g=new Int32Array(h.length);for(let w=0;w<h.length;w++){const x=h[w],y=Math.cos(x),T=Math.sin(x);let C=0,I=-1,U=1/0;for(let z=0;z<o.length;z++){const L=o[z],F=c(L.e),N=y*L.dx+T*L.dz,k=Math.abs(y*-L.dz+T*L.dx);let V;N>1e-6?V=Math.min(L.hw/Math.max(k,1e-6),F/N):V=Math.min(L.hw,F);const q=Math.acos(Math.max(-1,Math.min(1,N)));if(q<1e-7){C=V,I=z,U=q;break}(V>C+1e-9||Math.abs(V-C)<=1e-9&&q<U)&&(C=V,I=z,U=q)}f[w]=Math.max(C,.5),g[w]=I}const _=Math.max(...o.map(w=>$a(w,r,l.x,l.z))),m=[];for(let w=0;w<h.length;w++){const x=h[w],y=l.x+Math.cos(x)*f[w],T=l.z+Math.sin(x)*f[w],C=g[w],I=(C>=0?$a(o[C],r,y,T):_)+.02;m.push({x:y,z:T,h:I})}const p={x:l.x,z:l.z,h:_+.02},S=[];for(let w=0;w<h.length;w++)S.push([p,m[w],m[(w+1)%h.length]]);let b=-1/0;for(const w of m)b=Math.max(b,w.h);b=Math.max(b,p.h);const v=w=>(w%(Math.PI*2)+Math.PI*2)%(Math.PI*2),A=(w,x)=>{const y=v(Math.atan2(x,w));for(let T=0;T<h.length;T++)if(Math.abs(h[T]-y)<1e-9)return f[T];return a},E=o.map(w=>{const x=A(w.dx,w.dz),y=v(Math.atan2(w.dz,w.dx));let T=_+.02;for(let C=0;C<h.length;C++)if(Math.abs(h[C]-y)<1e-9){T=m[C].h;break}return{edge:w.e,dx:w.dx,dz:w.dz,hw:w.hw,clip:x,stub:a,clipHeight:T}});En.push({nodeId:r,ring:m,tris:S,legs:E,height:b})}const i=r=>{let o=1/0,a=-1/0;for(const c of r.ring)o=Math.min(o,c.h),a=Math.max(a,c.h);return[o,a]},s=(r,o)=>{const[a,c]=i(r),[l,u]=i(o);if(c<l-1||u<a-1)return!1;for(const d of o.ring)if(cl(r,d.x,d.z))return!0;for(const d of r.ring)if(cl(o,d.x,d.z))return!0;return!1};for(let r=0;r<10;r++){let o=!1;for(let a=0;a<En.length&&!o;a++)for(let c=a+1;c<En.length&&!o;c++){const l=En[a],u=En[c];if(!s(l,u))continue;const d=l.ring.map(L=>[L.x,L.z]),h=u.ring.map(L=>[L.x,L.z]),f=my(d,h),g=[...l.ring,...u.ring],_=(L,F)=>{let N=g[0],k=1/0;for(const V of g){const q=(V.x-L)*(V.x-L)+(V.z-F)*(V.z-F);q<k&&(k=q,N=V)}return N.h},m=f.map(([L,F])=>({x:L,z:F,h:_(L,F)})),p=Math.max(...m.map(L=>L.h)),S=L=>{let F=0,N=0;for(const k of L)F+=k.x,N+=k.z;return[F/L.length,N/L.length]},[b,v]=S(l.ring),[A,E]=S(u.ring),w=(b+A)/2,x=(v+E)/2,y={x:w,z:x,h:_(w,x)},T=[];for(let L=0;L<m.length;L++)T.push([y,m[L],m[(L+1)%m.length]]);const C=new Set,I=[],U=[...l.mergedIds??[l.nodeId],...u.mergedIds??[u.nodeId]];for(const L of[...l.legs,...u.legs]){if(C.has(L.edge))continue;C.add(L.edge);const F=U.find(W=>L.edge.a===W||L.edge.b===W)??U[0],N=Ge(ge(F)),k=xy(N.x,N.z,L.dx,L.dz,f),V=k>0?k:L.clip,q=Vl(m,T,N.x+L.dx*V,N.z+L.dz*V);I.push({...L,clip:V,clipHeight:q})}const z={nodeId:`${l.nodeId}+${u.nodeId}`,ring:m,tris:T,legs:I,height:p,mergedIds:U};En[a]=z,En.splice(c,1),o=!0}if(!o)break}yr=new Map;for(const r of En){const o=r.mergedIds??[r.nodeId];for(const a of r.legs){let c=yr.get(a.edge);c||(c={a:null,b:null},yr.set(a.edge,c));const l={dist:a.clip,height:a.clipHeight};o.includes(a.edge.a)?c.a=l:o.includes(a.edge.b)?c.b=l:a.edge.a===r.nodeId?c.a=l:c.b=l}}return En}let yr=null;function Jo(n){return yr||Wl(),yr.get(n)??{a:null,b:null}}function Vh(n,t,e){const i=Qi(n),s=Ge(ge(t==="a"?n.a:n.b));let r=0,o=1;for(let c=0;c<40;c++){const l=(r+o)/2,u=i.getPointAt(t==="a"?l:1-l);Math.hypot(u.x-s.x,u.z-s.z)<e?r=l:o=l}const a=(r+o)/2;return t==="a"?a:1-a}const Ty=3;function Wh(n){const t=Math.max(0,Math.min(1,n));return t*t*(3-2*t)}const Xh=new Map;function Ay(n){let t=Xh.get(n);return t===void 0&&(t=Qi(n).getLength(),Xh.set(n,t)),t}function al(n,t){const e=Gl(n,t),{a:i,b:s}=Jo(n);if(!i&&!s)return e;const r=Ay(n),o=t*r,a=r-(i?i.dist:0)-(s?s.dist:0),c=Math.max(1e-6,Math.min(Ty,a/2));if(i&&o<i.dist+c){const l=Wh((o-i.dist)/c);return i.height*(1-l)+e*l}if(s&&o>r-s.dist-c){const l=Wh((r-s.dist-o)/c);return s.height*(1-l)+e*l}return e}const Mo=1.5;function qh(n,t,e,i){const s=al(n,t);let r=1/0,o=0,a=null,c=!1;for(const d of Wl()){if(!d.legs.some(f=>f.edge===n))continue;const h=Py(d,e,i);if(h>0){c=!0;const f=Vl(d.ring,d.tris,e,i);a=a===null?f:Math.max(a,f)}Math.abs(h)<Math.abs(r)&&(r=h,o=Ry(d,e,i))}if(!c&&r<-Mo)return s;if(c&&r>Mo)return a;const l=Iy(-Mo,Mo,r);return s+((c?a:o)-s)*l}function Ry(n,t,e){const i=n.ring;let s=1/0,r=i[0].h;for(let o=0,a=i.length-1;o<i.length;a=o++){const c=i[a].x,l=i[a].z,u=i[o].x,d=i[o].z,h=u-c,f=d-l,g=h*h+f*f||1,_=Math.max(0,Math.min(1,((t-c)*h+(e-l)*f)/g)),m=c+h*_,p=l+f*_,S=(t-m)*(t-m)+(e-p)*(e-p);S<s&&(s=S,r=i[a].h+(i[o].h-i[a].h)*_)}return r}function Ka(n,t,e){const i=t[0]-n[0],s=t[1]-n[1],r=Math.hypot(i,s)||1,o=-s/r*e/2,a=i/r*e/2;return[[n[0]+o,n[1]+a],[n[0]-o,n[1]-a],[t[0]-o,t[1]-a],[t[0]+o,t[1]+a]]}function Cy(n){const t=Ge(ge(n.nodeId)),e=[],i=[],s=(u,d,h,f)=>[t.x+u*h-d*f,t.z+d*h+u*f];for(const u of n.legs){const{dx:d,dz:h,hw:f,stub:g}=u,_=Math.min(fr,f-.3);if(_>.5){const b=Math.max(g-1.3,.5);e.push([s(d,h,b-.225,-_),s(d,h,b-.225,_),s(d,h,b+.225,_),s(d,h,b+.225,-_)])}const m=f>3?5:3,p=2*f-1,S=Math.max(g-3,1);for(let b=0;b<m;b++){const v=-p/2+p*(b+.5)/m;e.push([s(d,h,S-1,v-.28),s(d,h,S-1,v+.28),s(d,h,S+1,v+.28),s(d,h,S+1,v-.28)])}}const r=[...n.legs].sort((u,d)=>Math.atan2(u.dz,u.dx)-Math.atan2(d.dz,d.dx));for(let u=0;u<r.length;u++){const d=r[u],h=r[(u+1)%r.length];if(d.hw<Rs-.01||h.hw<Rs-.01)continue;const f=Math.atan2(d.dz,d.dx);let _=Math.atan2(h.dz,h.dx)-f;if(_<=0&&(_+=Math.PI*2),_>Math.PI)continue;const m=(pr+Rs)/2,p=-d.dz,S=d.dx,b=h.dz,v=-h.dx,A=[t.x+d.dx*(d.stub-.7)+p*m,t.z+d.dz*(d.stub-.7)+S*m],E=[t.x+h.dx*(h.stub-.7)+b*m,t.z+h.dz*(h.stub-.7)+v*m],w=1;if(_>Math.PI-Math.PI/12){i.push(Ka(A,E,w));continue}if(_<Math.PI/6)continue;const x=Rs,y=h.dx*d.dz-d.dx*h.dz;if(Math.abs(y)<1e-6)continue;const T=x*(-(b-p)*h.dz+h.dx*(v-S))/y,C=t.x+d.dx*T+p*x,I=t.z+d.dz*T+S*x,U=f+_/2,z=Math.hypot(C-t.x,I-t.z),L=Math.min(z-.4,.85*Math.min(d.stub,h.stub));if(L<1.2)continue;const F=[t.x+Math.cos(U)*L,t.z+Math.sin(U)*L];i.push(Ka(A,F,w),Ka(F,E,w))}let a=(u=>{const d=[];for(const h of u){let f=!1;for(const g of d)if(vo(h,g)){f=!0;break}f||d.push(h)}return d})(e),c=!1;for(let u=0;u<a.length&&!c;u++)for(let d=u+1;d<a.length&&!c;d++)vo(a[u],a[d])&&(c=!0);c&&(a=[]);const l=[];for(const u of i){let d=!1;for(const h of a)if(vo(u,h)){d=!0;break}if(!d){for(const h of l)if(vo(u,h)){d=!0;break}}d||l.push(u)}return{white:a,walk:[]}}function cl(n,t,e){const i=n.ring;let s=!1;for(let r=0,o=i.length-1;r<i.length;o=r++){const a=i[r].x,c=i[r].z,l=i[o].x,u=i[o].z;c>e!=u>e&&t<(l-a)*(e-c)/(u-c)+a&&(s=!s)}return s}function Py(n,t,e){const i=n.ring;let s=1/0;for(let o=0,a=i.length-1;o<i.length;a=o++){const c=i[a].x,l=i[a].z,u=i[o].x,d=i[o].z,h=u-c,f=d-l,g=h*h+f*f||1,_=Math.max(0,Math.min(1,((t-c)*h+(e-l)*f)/g)),m=c+h*_,p=l+f*_,S=t-m,b=e-p,v=S*S+b*b;v<s&&(s=v)}const r=Math.sqrt(s);return cl(n,t,e)?r:-r}function Iy(n,t,e){const i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)}const Ly=12596780,Ja=7,Yh=1,ar=3.2,Zh=12;function Dy(){return new Ji({color:Ly})}function Ny(n){var w,x;const t=Ye.find(y=>y.kind==="bridge");if(!t)return;const e=Ge(ge(t.a)),i=Ge(ge(t.b)),s=Gl(t,.5)-.1,r=new D(i.x-e.x,0,i.z-e.z),o=r.length();if(o<1)return;r.normalize();const a=new D(-r.z,0,r.x),c=(y,T,C)=>new D(e.x+(i.x-e.x)*y+a.x*T,C,e.z+(i.z-e.z)*y+a.z*T),l=y=>y==="x"?Math.atan2(-r.z,r.x):Math.atan2(a.x,a.z),u=Dy(),d=new Ji({color:16767370}),h=Jo(t),f=((w=h.a)==null?void 0:w.dist)??0,g=((x=h.b)==null?void 0:x.dist)??0,_=Math.max(o-f-g,1),m=e.x+r.x*(f+_/2),p=e.z+r.z*(f+_/2),S=new J(new te(_,Yh,Ja),u);S.position.set(m,s-Yh/2,p),S.rotation.y=l("x"),n.add(S);const b=new Ji({color:3815994}),v=new J(new te(_,.1,Ja-1),b);v.position.set(m,s+.05,p),v.rotation.y=l("x"),n.add(v);for(const y of[1/3,2/3]){for(const T of[-ar,ar]){const C=new J(new te(1.5,20,1.5),u),I=c(y,T,s+2);C.position.copy(I),C.rotation.y=l("x"),n.add(C)}for(const T of[s+4,s+10]){const C=new J(new te(1,1,ar*2+1.5),u);C.position.copy(c(y,0,T)),C.rotation.y=l("z"),n.add(C)}}const A=[];for(const y of[-ar,ar]){const T=new ia([c(0,y,s+.2),c(.15,y,s+5),c(.3333333333333333,y,s+Zh),c(.5,y,s+2.5),c(.6666666666666666,y,s+Zh),c(.85,y,s+5),c(1,y,s+.2)]);A.push(T),n.add(new J(new sa(T,64,.25,8,!1),u))}for(const y of A){const T=y.getPoints(400);for(let C=f+3;C<o-g-3;C+=6){const I=C/o,U=e.x+(i.x-e.x)*I;let z=T[0],L=1/0;for(const k of T){const V=Math.abs(k.x-U);V<L&&(L=V,z=k)}const F=z.y-s;if(F<.5)continue;const N=new J(new pe(.08,.08,F,6),u);N.position.set(U,s+F/2,z.z),n.add(N)}}let E=1;for(let y=f+6;y<o-g-3;y+=12){const T=y/o,C=c(T,E*(Ja/2-.7),s),I=new J(new pe(.12,.16,4.2,8),u);I.position.set(C.x,s+2.1,C.z),n.add(I);const U=new J(new de(.32,10,8),d);U.position.set(C.x,s+4.2,C.z),n.add(U),E*=-1}}const[Xl,vf,ql,Mf]=me,ll=(Xl+ql)/2,Dr=(vf+Mf)/2,Qa=(()=>{const n=[];let t=0;for(const e of[Dr-10,Dr+10])for(let i=Xl+2.5;i<=ql-2.5;i+=5){const s=.9+t*37%10/50;n.push({x:i,z:e,s}),t++}return n})(),Uy=[{x0:Xl,z0:Dr-1.5,x1:ql,z1:Dr+1.5},{x0:ll-1.5,z0:vf,x1:ll+1.5,z1:Mf}],Fy={x:ll,z:Dr,w:14,d:9,h:5},Oy=1e6,Ni=3.4;function yf(){return{winLit:[],winUnlit:[],sills:[],doors:[],flowerBoxes:[],petals:[],leaves:[],awnings:[[],[],[]],bays:[]}}function zy(n,t){n.winLit.push(...t.winLit),n.winUnlit.push(...t.winUnlit),n.sills.push(...t.sills),n.doors.push(...t.doors),n.flowerBoxes.push(...t.flowerBoxes),n.petals.push(...t.petals),n.leaves.push(...t.leaves),t.awnings.forEach((e,i)=>n.awnings[i].push(...e)),n.bays.push(...t.bays)}const By={north:0,south:1,east:2,west:3};function ky(n){const{sx:t,sy:e,sz:i,minY:s,cx:r,cz:o,district:a,seedBase:c,colorIdx:l,bayWindow:u}=n,d=yf(),h=(v,A,E,w,x,y,T,C=0)=>({x:v,y:A,z:E,rotX:C,rotY:w,sx:x,sy:y,sz:T}),f=Math.min(4.2,e*.28),g=e-f,_=Math.max(1,Math.round(g/Ni)),m=Math.min(2.6,t*.18),p=Math.min(2.4,Ni*.55),S=Math.min(3,Ni*.82),b=v=>{const A=v==="north"||v==="south"?t:i,E=A>29?[-.27,.27]:[-.2,.2],w=v==="north"?Math.PI:v==="south"?0:v==="west"?-Math.PI/2:Math.PI/2,x=v==="north"||v==="south",y=v==="north"?-1:v==="south"?1:v==="west"?-1:1,T=(L,F,N)=>x?[r+L,F,o+y*(i*.5+N)]:[r+y*(t*.5+N),F,o+L],C=(L,F)=>{E.forEach((N,k)=>{const V=vn(c*1e3+By[v]*100+L*10+k),q=m*(.88+V()*.24),W=p*(.88+V()*.24),ut=s+g-W*.5-.35,Nt=Math.min(F,ut),[wt,Mt,K]=T(A*N,Nt,.055);(V()<.35?d.winLit:d.winUnlit).push(h(wt,Mt,K,w,q,W,1));const[ct,nt,Et]=T(A*N,Nt-W*.5-.08,.1);if(d.sills.push(h(ct,nt,Et,x?0:Math.PI/2,q+.38,.18,.16)),V()<.3){const[Ft,pt,ae]=T(A*N,Nt-W*.5-.35,.28);d.flowerBoxes.push(h(Ft,pt,ae,x?0:Math.PI/2,q*.8,.35,.4));for(let Wt=0;Wt<3;Wt++){const[it,rt,st]=T(A*N+(Wt-1)*q*.22,Nt-W*.5-.12,.28);(Wt%2?d.petals:d.leaves).push(h(it,rt,st,0,.14,.14,.14))}}})},[I,U,z]=T(0,s+S*.5,.06);d.doors.push(h(I,U,z,w,Math.min(2.4,A*.13),S,1)),C(0,s+Ni*.58);for(let L=1;L<_;L++)C(L,s+Ni*L+Ni*.58)};if(b("north"),b("south"),b("east"),b("west"),a==="merchant-row"){const v=Math.min(t*.7,10),A=2.2;d.awnings[l%3].push(h(r,s+S+.55,o+i*.5+A*.5-.15,0,v,A,1,-Math.PI/2))}if(u){const v=Math.min(3.2,t*.4),A=Ni*.95,E=.8;d.bays.push(h(r,s+A*.5,o+i*.5+E*.5-.05,0,v,A,E))}return d}function at(n){return new Ji({color:n,map:Hy(),gradientMap:Gy()})}let Ui,Es;function Hy(){if(Ui)return Ui;const n=document.createElement("canvas");n.width=n.height=mr;const t=n.getContext("2d");t.fillStyle="rgba(255,255,255,.9)",t.fillRect(0,0,mr,mr);for(const e of fp(up))t.fillStyle=`rgba(85,55,45,${e.alpha})`,t.fillRect(e.x,e.y,1,1);return Ui=new Bs(n),Ui.colorSpace=Je,Ui.wrapS=Ui.wrapT=zo,Ui}function Gy(){if(Es)return Es;const n=document.createElement("canvas");n.width=1,n.height=3;const t=n.getContext("2d");return t.fillStyle="#202020",t.fillRect(0,0,1,1),t.fillStyle="#9a9a9a",t.fillRect(0,1,1,1),t.fillStyle="#fff",t.fillRect(0,2,1,1),Es=new Bs(n),Es.minFilter=Es.magFilter=Ze,Es}function Vy(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Me;let l=0;for(let u=0;u<n.length;++u){const d=n[u];let h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0;const d=[];for(let h=0;h<n.length;++h){const f=n[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=n[h].attributes.position.count}c.setIndex(d)}for(const u in r){const d=$h(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][h]);const g=$h(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function $h(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){const u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new fn(o,e,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const d=c/e;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<e;g++){const _=u.getComponent(h,g);a.setComponent(h+d,g,_)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}let ja=null;function Wy(){if(ja)return ja;const n=[];for(const i of Pe)n.push({name:i.name,x:i.position.x,z:i.position.z});for(const i of Oo())n.push({name:"house",x:i.x+i.w/2,z:i.z+i.d/2});const t=new Set,e=[];for(const i of n){let s="",r=1/0;for(const o of gl){const a=o.x-i.x,c=o.z-i.z,l=a*a+c*c;l<r&&(r=l,s=o.id)}s&&r<3600&&!t.has(s)&&(t.add(s),e.push({...i,nodeId:s}))}return ja=e,e}let tc={withBridge:null,noBridge:null};function Xy(n=!1){const t=n?"withBridge":"noBridge";if(tc[t])return tc[t];const e=new Map,i=(s,r,o)=>{e.has(s)||e.set(s,[]);const a=Ge(ge(s)),c=Ge(ge(r));e.get(s).push({to:r,edge:o,w:Math.hypot(a.x-c.x,a.z-c.z)})};for(const s of Ye)s.kind==="bridge"&&!n||(i(s.a,s.b,s),i(s.b,s.a,s));return tc[t]=e,e}function qy(n,t,e=!1){if(n===t)return[];const i=Xy(e),s=new Map([[n,0]]),r=new Map,o=new Set;for(;;){let l=null,u=1/0;for(const[d,h]of s)!o.has(d)&&h<u&&(u=h,l=d);if(l===null)return null;if(l===t)break;o.add(l);for(const d of i.get(l)??[]){const h=u+d.w;h<(s.get(d.to)??1/0)&&(s.set(d.to,h),r.set(d.to,{edge:d.edge,from:l}))}}const a=[];let c=t;for(;c!==n;){const l=r.get(c);if(!l)return null;a.unshift(l.edge),c=l.from}return a}const Kh=16,Yy=44;let Cs=null;function Sf(){if(Cs)return Cs;const n=new Yo(.07,.4,4,8);return n.translate(0,-.25,0),Cs={carBody:new te(1.9,.9,4.2),carCabin:new te(1.7,.65,2),wheel:new pe(.35,.35,.3,10),pedBody:new Yo(.22,.9,4,10),pedHead:new de(.2,12,10),pedArm:n},Cs}let Ps=null;function bf(){if(Ps)return Ps;const n=t=>at(t);return Ps={glass:n(1714746),tire:n(2236962),carRed:n(13904426),carBlue:n(3829413),carGray:n(9145227),carBlack:n(2763306),carGreen:n(4881497),carBrown:n(9132587),carCream:n(15261904),carPink:n(16731558),carYellow:n(16767306),carPurple:n(10309119),carTeal:n(5111688),skin1:n(16762531),skin2:n(15245418),skin3:n(13007434),skin4:n(9067066),cloth1:n(3829413),cloth2:n(13904426),cloth3:n(4885355),cloth4:n(9132587),cloth5:n(8010362),cloth6:n(15261904),pants:n(2767434)},Ps}let yo=null;function Jh(){if(yo)return yo;const n=t=>{const e=document.createElement("canvas");e.width=256,e.height=128;const i=e.getContext("2d");i.fillStyle="white",i.strokeStyle="#333",i.lineWidth=6;const s=24,r=10,o=10,a=236,c=80;i.beginPath(),typeof i.roundRect=="function"?i.roundRect(r,o,a,c,s):(i.moveTo(r+s,o),i.arcTo(r+a,o,r+a,o+c,s),i.arcTo(r+a,o+c,r,o+c,s),i.arcTo(r,o+c,r,o,s),i.arcTo(r,o,r+a,o,s),i.closePath()),i.fill(),i.stroke(),i.beginPath(),i.moveTo(110,88),i.lineTo(128,118),i.lineTo(146,88),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#222",i.font="bold 44px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(t,128,52);const l=new Bs(e);return l.colorSpace=Je,l};return yo={"Hello!":n("Hello!"),"Hi!":n("Hi!"),"Ahhh!":n("Ahhh!")},yo}function Zy(n,t){const e=new oe,i=vn(t),s=Sf(),r=bf();let o,a=4.2,c=.9;switch(n){case"beetle":o=[r.carPink,r.carYellow,r.carPurple,r.carTeal][Math.floor(i()*4)],a=3.6,c=1;break;case"sports":o=r.carRed,a=4,c=.65;break;case"truck":o=[r.carGreen,r.carBrown,r.carBlue][Math.floor(i()*3)],a=4.8,c=1.1;break;case"van":o=[r.carCream,r.carBlue,r.carYellow][Math.floor(i()*3)],a=4.6,c=1.4;break;default:o=[r.carBlue,r.carGray,r.carBlack,r.carRed,r.carGreen][Math.floor(i()*5)]}const l=[],u=new te(1.9,c,a);u.translate(0,.55+c/2,0),l.push(u);const d=[[-.85,a*.32],[.85,a*.32],[-.85,-a*.32],[.85,-a*.32]];for(const[_,m]of d){const p=s.wheel.clone();p.rotateZ(Math.PI/2),p.translate(_,.35,m),l.push(p)}const h=Vy(l);l.forEach(_=>_.dispose());const f=new J(h,o);f.castShadow=!0,e.add(f);const g=new J(s.carCabin,r.glass);if(g.position.set(0,.55+c+.3,n==="truck"?a*.25:0),g.scale.z=a/4.2,g.castShadow=!0,e.add(g),n==="beetle"){const _=new Ul(.3,12),m=new An({color:16777215});for(const p of[1,-1]){const S=new J(_,m);S.position.set(p*.97,1.1,0),S.rotation.y=p*Math.PI/2,e.add(S)}}return e}function $y(n){const t=new oe,e=vn(n),i=Sf(),s=bf(),r=[s.skin1,s.skin2,s.skin3,s.skin4][Math.floor(e()*4)],o=[s.cloth1,s.cloth2,s.cloth3,s.cloth4,s.cloth5,s.cloth6][Math.floor(e()*6)],a=new J(i.pedBody,o);a.position.y=.85,a.castShadow=!0,t.add(a);const c=new J(i.pedHead,r);c.position.y=1.55,c.castShadow=!0,t.add(c);const l=new J(i.pedArm,o);l.position.set(.32,1.25,0),l.rotation.z=-.15,t.add(l);const u=new J(i.pedArm,o);return u.position.set(-.32,1.25,0),u.rotation.z=.15,t.add(u),{group:t,armR:l}}function So(n,t){for(const e of ln)if(n>e.min.x-1&&n<e.max.x+1&&t>e.min.z-1&&t<e.max.z+1)return!1;return!(Gi.some(e=>n>e[0]&&n<e[2]&&t>e[1]&&t<e[3])||cn(n,t))}class Ky{constructor(t){lt(this,"cars",[]);lt(this,"peds",[]);lt(this,"graph",lp());lt(this,"group",new oe);lt(this,"tmpP",new D);lt(this,"tmpT",new D);lt(this,"tmpV",new D);this.scene=t,t.add(this.group),this.spawnCars(),this.spawnPeds()}orientToTangent(t,e){t.rotation.order="YXZ",t.rotation.y=Math.atan2(e.x,e.z),t.rotation.x=-Math.asin(hn.clamp(e.y,-1,1))}makeCurve(t){return Qi(t)}spawnCars(){const t=vn(20260927),e=Ye.filter(o=>{if(o.kind==="bridge"||o.kind==="switchback")return!1;const a=ge(o.a),c=ge(o.b);return Math.abs(a.x)<120&&Math.abs(c.x)<120&&Math.abs(a.z)<120&&Math.abs(c.z)<120}),i=e.length>0?e:Ye.filter(o=>o.kind!=="bridge"),s=["beetle","sports"],r=["sedan","sedan","sedan","sedan","sedan","sedan","truck","truck","truck","van","van","van","sedan","sedan"];for(let o=s.length;o<Kh;o++)s.push(r[(o-s.length)%r.length]);for(let o=s.length-1;o>0;o--){const a=Math.floor(t()*(o+1));[s[o],s[a]]=[s[a],s[o]]}for(let o=0;o<Kh;o++){const a=i[Math.floor(t()*i.length)],c=this.makeCurve(a),l=s[o],u=Zy(l,1e3+o);this.group.add(u);const d=l==="sports"?12:8+t()*4;this.cars.push({edge:a,t:t(),dir:t()<.5?1:-1,speed:d,baseSpeed:d,variant:l,group:u,curve:c,edgeLen:c.getLength(),offX:0,offZ:0,destNode:null,route:[],dwellT:0,dwellNode:null})}}spawnPeds(){const t=vn(20260928),e=Jh(),i=Ye.filter(s=>{if(s.kind==="bridge"||s.kind==="switchback")return!1;const r=ge(s.a),o=ge(s.b);return Math.abs(r.x)<130&&Math.abs(o.x)<130&&Math.abs(r.z)<130&&Math.abs(o.z)<130});for(let s=0;s<Yy;s++){const r=s>=30;let o=null,a=0,c=0;if(r){let b=0;for(;b++<50&&(a=me[0]+t()*(me[2]-me[0]),c=me[1]+t()*(me[3]-me[1]),!So(a,c)););b>=50&&(a=(me[0]+me[2])/2,c=(me[1]+me[3])/2)}else o=i[Math.floor(t()*i.length)];const{group:l,armR:u}=$y(2e3+s),d=o?this.makeCurve(o):new ia([new D(a,0,c),new D(a+1,0,c)]);let h=0,f=1,g=0,_=0;if(!r&&o){h=t(),d.getPointAt(h,this.tmpP),d.getTangentAt(h,this.tmpT),f=t()<.5?1:-1;const b=v=>{const A=-this.tmpT.z*4*v,E=this.tmpT.x*4*v,w=this.tmpP.x+A,x=this.tmpP.z+E;return!cn(w,x)&&So(w,x)};if(!b(f)){const v=f===1?-1:1;b(v)&&(f=v)}g=-this.tmpT.z*4*f,_=this.tmpT.x*4*f,a=this.tmpP.x+g,c=this.tmpP.z+_}const m=Ee(a,c);l.position.set(a,m,c),this.group.add(l);const p=new jc(new Dl({map:e["Hello!"],transparent:!0,opacity:0,depthTest:!1}));p.scale.set(1.5,.75,1),p.position.set(a,m+2.2,c),p.visible=!1,this.group.add(p);const S=1.2+t()*.6;this.peds.push({edge:o,t:h,dir:t()<.5?1:-1,side:f,sideOff:f*4,offX:g,offZ:_,speed:S,baseSpeed:S,inPark:r,parkTarget:new D(a,0,c),pos:new D(a,m,c),group:l,armR:u,bubble:p,greetCd:0,startleCd:0,bubbleT:0,hopT:0,waveT:0,stuckT:0,lastPos:new D(a,m,c),curve:d,edgeLen:d.getLength(),destNode:null,route:[],dwellT:0,dwellNode:null}),r&&this.pickParkTarget(this.peds[this.peds.length-1],t)}}pickParkTarget(t,e){let i=0;for(;i++<30;){const s=me[0]+e()*(me[2]-me[0]),r=me[1]+e()*(me[3]-me[1]);if(So(s,r)){t.parkTarget.set(s,0,r);return}}t.parkTarget.copy(t.pos)}update(t,e,i,s,r){for(const o of this.cars)this.updateCar(o,t);for(const o of this.peds)this.updatePed(o,t,e,i,s,r)}nextEdge(t,e,i=!1){const s=Ye.filter(o=>(i||o.kind!=="bridge")&&(o.a===e||o.b===e)&&!(o.a===t.a&&o.b===t.b)),r=s.length>0?s[Math.floor(Math.random()*s.length)]:t;return r.a===e?{edge:r,dir:1,t:0}:{edge:r,dir:-1,t:1}}assignTrip(t,e){const i=Wy(),s="variant"in t;for(let r=0;r<8;r++){const o=i[Math.random()*i.length|0];if(o.nodeId===e)continue;const a=qy(e,o.nodeId,s);if(a&&a.length>0){t.destNode=o.nodeId,t.route=a;return}}t.destNode=null,t.route=[]}mountEdge(t,e,i,s,r){t.edge=e,s!==void 0?(t.dir=s,t.t=r):e.a===i?(t.dir=1,t.t=0):(t.dir=-1,t.t=1),t.curve=this.makeCurve(e),t.edgeLen=t.curve.getLength()}arriveNode(t,e){if(t.route.length>0){const r=t.route[0];if(r.a===e||r.b===e)return t.route.shift(),this.mountEdge(t,r,e),"route";t.route=[],t.destNode=null}if(t.destNode!==null&&e===t.destNode)return t.dwellT=2+Math.random()*3,t.dwellNode=e,t.t=hn.clamp(t.t,0,1),"dwell";const i="variant"in t,s=this.nextEdge(t.edge,e,i);return this.mountEdge(t,s.edge,e,s.dir,s.t),t.destNode===null&&this.assignTrip(t,e),"wander"}beginNextLeg(t){const e=t.dwellNode??(t.dir===1?t.edge.b:t.edge.a);if(t.dwellNode=null,this.assignTrip(t,e),t.route.length>0){const i=t.route.shift();this.mountEdge(t,i,e)}else{const i="variant"in t,s=this.nextEdge(t.edge,e,i);this.mountEdge(t,s.edge,e,s.dir,s.t)}}carFollowSpeed(t){let s=t.baseSpeed;for(const r of this.cars){if(r===t||r.dwellT>0||r.edge!==t.edge||r.dir!==t.dir)continue;const o=(r.t-t.t)*t.dir*t.edgeLen;if(!(o<=0||o>7)){if(o<3.5)return 0;s=Math.min(s,r.speed*(o/7))}}return s}carDistToNode(t,e){if(t.dir===1){if(t.edge.b===e)return(1-t.t)*t.edgeLen;if(t.edge.a===e)return t.t*t.edgeLen}else{if(t.edge.a===e)return t.t*t.edgeLen;if(t.edge.b===e)return(1-t.t)*t.edgeLen}return 1/0}carIntersectionSpeed(t){const s=t.dir===1?t.edge.b:t.edge.a,r=(t.dir===1?1-t.t:t.t)*t.edgeLen;if(r>9)return t.baseSpeed;const o=this.cars.indexOf(t);for(const a of this.cars){if(a===t||a.dwellT>0)continue;const c=this.carDistToNode(a,s);if(c>9)continue;const l=a.dir===1&&a.edge.a===s||a.dir===-1&&a.edge.b===s;let u=!1;if(l||c<r-.5?u=!0:Math.abs(c-r)<=.5&&(u=this.cars.indexOf(a)<o),u)return r<=2.5?0:t.baseSpeed*Math.max(0,(r-2.5)/(9-2.5))}return t.baseSpeed}pedFollowSpeed(t){let s=t.baseSpeed;for(const r of this.peds){if(r===t||r.inPark||r.dwellT>0||r.edge!==t.edge||r.dir!==t.dir||r.side!==t.side)continue;const o=(r.t-t.t)*t.dir*t.edgeLen;if(!(o<=0||o>2.5)){if(o<1.2)return 0;s=Math.min(s,r.speed*(o/2.5))}}return s}updateCar(t,e){if(t.dwellT>0){t.dwellT-=e,t.dwellT<=0&&(this.beginNextLeg(t),t.baseSpeed=(t.variant==="sports"?12:10)*(t.edge.kind==="switchback"?.6:1),t.speed=t.baseSpeed);return}t.speed=this.carFollowSpeed(t),t.speed=Math.min(t.speed,this.carIntersectionSpeed(t));const i=t.t;if(t.t+=t.dir*t.speed*e/t.edgeLen,t.dir===1&&i<1&&t.t>=1||t.dir===-1&&i>0&&t.t<=0){const u=t.dir===1?t.edge.b:t.edge.a;this.arriveNode(t,u),t.baseSpeed=(t.variant==="sports"?12:10)*(t.edge.kind==="switchback"?.6:1),t.speed=t.baseSpeed}const s=hn.clamp(t.t,0,1);t.curve.getPointAt(s,this.tmpP),t.curve.getTangentAt(s,this.tmpT),t.dir===-1&&this.tmpT.negate();const r=-this.tmpT.z*1.4,o=this.tmpT.x*1.4;t.offX+=hn.clamp(r-t.offX,-4*e,4*e),t.offZ+=hn.clamp(o-t.offZ,-4*e,4*e);const a=this.tmpP.x+t.offX,c=this.tmpP.z+t.offZ,l=qh(t.edge,s,a,c);t.group.position.set(a,l,c),this.orientToTangent(t.group,this.tmpT)}updatePed(t,e,i,s,r,o){t.inPark?this.updateParkPed(t,e):this.updateSidewalkPed(t,e);const a=i.x-t.pos.x,c=i.z-t.pos.z,l=Math.hypot(a,c),u=i.y-t.pos.y,d=Jh();if(l<6&&u<10&&u>-2&&(s>15||r<-8)?o>t.startleCd&&(t.startleCd=o+12,t.bubble.material.map=d["Ahhh!"],t.bubble.material.needsUpdate=!0,t.bubbleT=2,t.bubble.visible=!0,t.hopT=.4,t.waveT=0):l<12&&u>0&&u<8&&s<10&&o>t.greetCd&&(t.greetCd=o+8,t.bubble.material.map=d["Hello!"],t.bubble.material.needsUpdate=!0,t.bubbleT=2,t.bubble.visible=!0,t.waveT=2),t.bubbleT>0){t.bubbleT-=e;const h=t.bubble.material;h.opacity=Math.min(1,t.bubbleT/.3,(2-t.bubbleT)/.3),t.bubble.position.set(t.pos.x,t.pos.y+2.2,t.pos.z),t.bubbleT<=0&&(t.bubble.visible=!1)}if(t.hopT>0){t.hopT-=e;const h=1-t.hopT/.4;t.group.position.y=t.pos.y+Math.sin(h*Math.PI)*.3}t.waveT>0?(t.waveT-=e,t.armR.rotation.z=-2.2+Math.sin(o*12)*.3):t.armR.rotation.z=-.15}updateSidewalkPed(t,e){if(t.dwellT>0){t.dwellT-=e,t.dwellT<=0&&this.beginNextLeg(t);return}t.speed=this.pedFollowSpeed(t);const i=t.t;if(t.t+=t.dir*t.speed*e/t.edgeLen,t.dir===1&&i<1&&t.t>=1||t.dir===-1&&i>0&&t.t<=0){const d=t.dir===1?t.edge.b:t.edge.a;this.arriveNode(t,d),Math.random()<.15&&(t.side*=-1)}const s=hn.clamp(t.t,0,1);t.curve.getPointAt(s,this.tmpP),t.curve.getTangentAt(s,this.tmpT),t.dir===-1&&this.tmpT.negate();const o=t.side*4-t.sideOff;t.sideOff+=hn.clamp(o,-3*e,3*e);const a=-this.tmpT.z*t.sideOff,c=this.tmpT.x*t.sideOff;t.offX+=hn.clamp(a-t.offX,-4*e,4*e),t.offZ+=hn.clamp(c-t.offZ,-4*e,4*e);const l=this.tmpP.x+t.offX,u=this.tmpP.z+t.offZ;if(t.pos.set(l,qh(t.edge,s,l,u),u),t.group.position.copy(t.pos),this.orientToTangent(t.group,this.tmpT),t.group.position.y+=Math.abs(Math.sin(performance.now()*.008+l))*.05,t.pos.distanceToSquared(t.lastPos)<.01){if(t.stuckT+=e,t.stuckT>5){const d=t.dir===1?t.edge.b:t.edge.a;(!Number.isFinite(t.t)||t.t<=0||t.t>=1)&&this.arriveNode(t,d),t.stuckT=0}}else t.stuckT=0;t.lastPos.copy(t.pos)}updateParkPed(t,e){if(this.tmpV.subVectors(t.parkTarget,t.pos),this.tmpV.y=0,this.tmpV.length()<1)this.pickParkTarget(t,Math.random);else{this.tmpV.normalize();const s=t.pos.x+this.tmpV.x*t.speed*e,r=t.pos.z+this.tmpV.z*t.speed*e;So(s,r)?t.pos.set(s,Ee(s,r),r):this.pickParkTarget(t,Math.random),t.group.position.copy(t.pos),t.group.rotation.y=Math.atan2(this.tmpV.x,this.tmpV.z),t.group.position.y+=Math.abs(Math.sin(performance.now()*.008+s))*.05}}dispose(){this.group.traverse(t=>{if(t instanceof J){const e=t.geometry;Cs&&!Object.values(Cs).includes(e)&&e.dispose();const i=t.material;Ps&&!Object.values(Ps).includes(i)&&i.dispose()}else t instanceof jc&&t.material.dispose()}),this.scene.remove(this.group),this.cars=[],this.peds=[]}}const Jy=n=>-n,Ns={x:13,y:12,z:18},Qo=2,Qh=(n,t)=>Math.max(-t,Math.min(t,n));function Qy(n,t){const e=Qh(n,ic),i=Qh(t,sc);return{look:[e,Qo,i],cam:[e+Ns.x,Qo+Ns.y,i+Ns.z]}}function jy(n,t,e,i,s){if(e||s)return t;if(i<=0)return n;const r=1-Math.exp(-i*5);return[n[0]+(t[0]-n[0])*r,n[1]+(t[1]-n[1])*r]}function t1(n,t,e){if(e<=0)return n;const i=Math.atan2(Math.sin(t-n),Math.cos(t-n)),s=i*(1-Math.exp(-e*1.25)),r=i-s;return n+s+Math.sign(r)*Math.max(0,Math.abs(r)-1.35)}const Ce=n=>new Ji({color:n}),Hi=Ce(9262134),un=Ce(5189671),bo=Ce(16773071),jh=Ce(16112046),e1=Ce(1670008),wo=Ce(13200951),n1=Ce(14657867),i1=Ce(4948573);function ke(n,t,e,i=Hi){const s=new J(new te(n,t,e),i);return s.castShadow=s.receiveShadow=!0,s}function Tn(n,t,e=Hi,i=10){const s=new J(new pe(n,n,t,i),e);return s.castShadow=s.receiveShadow=!0,s}function Yt(n,t,e,i,s){return t.position.set(e,i,s),n.add(t),t}class s1{constructor(){lt(this,"group",new oe);lt(this,"meg",new oe);lt(this,"pip",new oe);lt(this,"tail",new oe);lt(this,"clock",0);lt(this,"disposed",!1);lt(this,"furniture",new Map);lt(this,"facing",0);lt(this,"lastHome",!1);this.group.name="Meg attic room",this.makeRoom(),this.makeBasics(),this.makeStations(),this.makeMeg(),this.makePumpkin(),this.makeFurniture(),this.group.visible=!1}update(t,e,i){if(this.disposed)return;const s=t,r=s.mode==="home";if(this.group.visible=r,!r){this.lastHome=!1;return}const o=Math.min(.05,Math.max(0,e||.016));this.clock+=o;const a=s.homePosition||{x:0,z:0},c=new D(hn.clamp(a.x,-7.5,7.5),0,hn.clamp(a.z,-5.5,5.5));this.lastHome?this.meg.position.lerp(c,1-Math.exp(-o*14)):this.meg.position.copy(c),this.lastHome=!0;const l=s.homeFacing;typeof l=="number"?this.facing=l:c.distanceToSquared(this.meg.position)>.001&&(this.facing=Math.atan2(c.x-this.meg.position.x,c.z-this.meg.position.z)),this.meg.rotation.y=this.facing;const u=c.distanceTo(this.meg.position)>.035;this.meg.children.filter(f=>f.name==="limb").forEach((f,g)=>f.rotation.x=i?0:Math.sin(this.clock*11+g*Math.PI)*(u?.55:.08)),this.meg.position.y=i?0:u?Math.abs(Math.sin(this.clock*11))*.045:Math.sin(this.clock*2)*.018;const d=this.meg.position.clone().add(new D(-Math.sin(this.facing)*1.25,0,-Math.cos(this.facing)*1.25));d.x=hn.clamp(d.x,-7.3,7.3),d.z=hn.clamp(d.z,-5.3,5.3),this.pip.position.lerp(d,1-Math.exp(-o*4)),this.pip.lookAt(this.meg.position.x,0,this.meg.position.z);const h=this.meg.position.distanceToSquared(new D(4,0,3))<2.7;this.pip.position.y=!i&&h?Math.sin(this.clock*6)*.075:0,this.tail.rotation.z=i?.12:Math.sin(this.clock*(h?5:2))*.34,this.furniture.forEach((f,g)=>f.visible=s.profile.furniture.includes(g))}dispose(){if(this.disposed)return;this.disposed=!0;const t=new Set,e=new Set,i=new Set;this.group.traverse(s=>{const r=s;r.geometry&&t.add(r.geometry),(r.material?Array.isArray(r.material)?r.material:[r.material]:[]).forEach(a=>{e.add(a),Object.values(a).forEach(c=>{c instanceof Qe&&i.add(c)})})}),t.forEach(s=>s.dispose()),e.forEach(s=>s.dispose()),i.forEach(s=>s.dispose()),this.group.clear()}makeRoom(){const t=ke(18,.25,14,Hi);Yt(this.group,t,0,-.13,0);for(let s=-6;s<=6;s+=1){const r=ke(17.8,.012,.035,un);Yt(this.group,r,0,.01,s+.5)}const e=ke(18,8,.22,jh);Yt(this.group,e,0,4,-7);const i=ke(.22,8,14,jh);Yt(this.group,i,4,4,0),i.position.x=-9;for(const[s,r,o,a]of[[-8.65,0,.34,14],[0,-6.65,18,.34],[0,-3.9,18,.25]])Yt(this.group,ke(o,.28,a,un),s,7.55,r);for(const s of[-8.4,-4.4,0,4.4,8.4]){const r=ke(.32,7.6,.35,un);r.rotation.z=s/34,Yt(this.group,r,s,3.8,-6.75)}this.makeWindow()}makeWindow(){const t=new oe;Yt(this.group,t,2.3,4.7,-6.78);const e=new J(new _n(3.2,2.45),new An({color:16764813}));e.position.z=.02,t.add(e);for(const[s,r,o,a]of[[0,0,3.45,.17],[0,0,.16,2.6],[-1.65,0,.16,2.6],[1.65,0,.16,2.6],[0,1.22,3.45,.16]])Yt(t,ke(o,a,.12,un),s,r,.08);for(const s of[-2,2]){const r=new J(new pe(.45,.56,2.65,8),Ce(8559016));r.scale.z=.28,Yt(t,r,s,0,.22)}const i=ke(4.5,.18,.55,Hi);Yt(t,i,0,-1.38,.32)}makeBasics(){const t=new oe;Yt(this.group,t,5.8,0,4.65),Yt(t,ke(4.2,.35,2.6,un),0,.55,0),Yt(t,ke(4,.32,2.35,Ce(10249076)),0,.9,0),Yt(t,ke(4.25,2.25,.22,un),0,1.5,1.16),Yt(t,ke(1.55,.26,.8,bo),-.9,1.2,-.55),[[-1.8,-1],[1.8,-1],[-1.8,1],[1.8,1]].forEach(([s,r])=>Yt(t,Tn(.12,.65,un),s,.25,r));const e=new oe;Yt(this.group,e,-5,0,-3),Yt(e,ke(3.3,.22,1.55,Hi),0,1.75,0),[-1.35,1.35].forEach(s=>[-.58,.58].forEach(r=>Yt(e,Tn(.11,1.7,un),s,.85,r))),Yt(e,ke(.9,.72,1.15,un),-1.05,1.25,0),Yt(e,ke(.62,.12,.88,Ce(15982509)),.55,1.93,.03);const i=new oe;Yt(this.group,i,-4.2,0,-1.45),Yt(i,Tn(.48,.16,Ce(7314849)),0,1,0),Yt(i,Tn(.13,1,un),0,.5,0)}makeStations(){const t=new oe;Yt(this.group,t,5,0,-3),Yt(t,ke(2.2,.16,.46,un),0,2.55,0),[-.75,0,.75].forEach(s=>{const r=Tn(.06,2.35,Hi);r.rotation.z=-.16+s*.1,Yt(t,r,s,1.25,0),Yt(t,new J(new nn(.29,.52,7),wo),s-.14,.28,0)});const e=new oe;Yt(this.group,e,-5,0,3),Yt(e,Tn(.48,1.15,un),0,.58,0),Yt(e,ke(1.25,.14,.9,Ce(6065798)),0,1.2,0),e.rotation.y=-.25;const i=new J(new pe(1.15,1.3,.16,16),Ce(14262655));Yt(this.group,i,4,.08,3),ad.forEach(s=>this.group.add(this.label(s.id==="jobs"?"POST":s.id==="decor"?"HOME":s.id.toUpperCase(),s.x,3.3,s.z)))}makeMeg(){const t=this.meg;t.name="Meg",this.group.add(t),Yt(t,new J(new de(.34,12,10),Ce(16761758)),0,1.52,0);const e=new J(new de(.38,12,10,0,Math.PI*2,0,Math.PI*.55),Ce(9323307));Yt(t,e,0,1.7,.01);const i=new oe;Yt(t,i,0,1.94,0),Yt(i,new J(new pe(.48,.48,.12,12),Ce(4534349)),0,0,0);const s=new J(new nn(.3,.82,12),Ce(4534349));s.rotation.z=-.18,Yt(i,s,.06,.39,0),Yt(t,new J(new nn(.48,1.05,12),e1),0,.84,0);for(const[r,o]of[[-.22,.08],[.22,.08]]){const a=Tn(.09,.55,un);a.name="limb",Yt(t,a,r,.3,o);const c=Tn(.075,.58,Ce(16761758));c.name="limb",c.rotation.z=r*1.8,Yt(t,c,r*1.5,1.06,0)}}makePumpkin(){const t=this.pip;t.name="Pumpkin",this.group.add(t),Yt(t,new J(new de(.43,12,9),bo),0,.48,0),Yt(t,new J(new de(.34,12,9),bo),0,.76,.28);for(const r of[-.2,.2]){const o=new J(new nn(.16,.36,4),wo);Yt(t,o,r,1.12,.26);const a=new J(new de(.045,8,6),Ce(2893616));Yt(t,a,r*.72,.8,.59)}const e=ke(.18,.42,.08,wo);e.rotation.z=Math.PI/2,Yt(t,e,0,.86,.58);const i=new oe;this.tail=i,Yt(t,i,0,.51,-.38);const s=new J(new Dn(.34,.07,6,12,Math.PI*1.4),wo);s.rotation.x=Math.PI/2,Yt(i,s,0,.36,-.22)}makeFurniture(){const t=(e,i,s,r)=>{const o=r();o.position.set(i,0,s),o.visible=!1,this.group.add(o),this.furniture.set(e,o)};t("rug",0,-.2,()=>{const e=new J(new pe(2.1,2.1,.05,20),Ce(7508365));return e.position.y=.035,e}),t("plant",-7,4.6,()=>{const e=new oe;Yt(e,Tn(.38,.7,Ce(13273941)),0,.35,0);for(let i=0;i<6;i++){const s=new J(new de(.35,8,6),i1);Yt(e,s,Math.sin(i)*.28,1+Math.abs(Math.cos(i))*.25,Math.cos(i)*.28)}return e}),t("shelf",-7.7,-2.2,()=>{const e=new oe;Yt(e,ke(.55,3.1,2.2,un),0,1.55,0);for(let i=.6;i<3;i+=.75)Yt(e,ke(.7,.1,2.1,Hi),0,i,0);return e}),t("lamp",1.8,-4.8,()=>{const e=new oe;Yt(e,Tn(.1,2.2,n1),0,1.1,0);const i=new J(new nn(.52,.48,12,1,!0),bo);return Yt(e,i,0,2.1,0),e}),t("cushion",1.4,3.5,()=>{const e=new J(new de(.6,12,7),Ce(13858182));return e.scale.y=.32,e.position.y=.18,e}),t("cat-tree",7,2.5,()=>{const e=new oe;return Yt(e,Tn(.17,2.5,Ce(13610617)),0,1.25,0),Yt(e,Tn(.72,.16,Ce(13605991)),0,2.45,0),e})}label(t,e,i,s){const r=document.createElement("canvas");r.width=256,r.height=92;const o=r.getContext("2d");o.fillStyle="#3f2b35",o.roundRect(4,4,248,84,18),o.fill(),o.strokeStyle="#f7d688",o.lineWidth=5,o.roundRect(4,4,248,84,18),o.stroke(),o.fillStyle="#fff3cf",o.font="bold 36px sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(t,128,48);const a=new jc(new Dl({map:new Bs(r),transparent:!0}));return a.position.set(e,i,s),a.scale.set(1.7,.62,1),a}}function r1(n,t,e){const i=n.mode==="flight"||n.mode==="tutorial",s=Math.hypot(n.player.velocity.x,n.player.velocity.y,n.player.velocity.z),r=i&&!n.paused&&!e;return{bob:r&&n.player.hover&&s<.3?Math.sin(t*1.5)*.035:0,speed:r?Math.min(1,Math.max(0,(s-5)/16.6)):0}}class o1{constructor(t){lt(this,"element",document.createElement("div"));this.element.className="flight-effects",this.element.setAttribute("aria-hidden","true");for(let e=0;e<14;e++){const i=document.createElement("i"),s=e*Math.PI*2/14;i.style.left=`${50+Math.cos(s)*43}%`,i.style.top=`${50+Math.sin(s)*43}%`,i.style.setProperty("--angle",`${s}rad`),i.style.animationDelay=`${-e*.17}s`,this.element.append(i)}t.insertAdjacentElement("afterend",this.element)}update(t,e){this.element.hidden=t<=0,this.element.style.setProperty("--speed",t.toFixed(3)),this.element.classList.toggle("low-quality",e)}dispose(){this.element.remove()}}const a1=360,td=420,c1=1140;function wf(n){return Math.max(0,Math.min(1,n/a1))}function l1(n){return td+wf(n)*(c1-td)}const Eo=[{t:0,zenith:[.45,.62,.86],horizon:[1,.72,.55],sun:[1,.82,.62],sunElevation:.1,sunAzimuth:Math.PI/2,fog:[.98,.8,.68],hemiSky:[.85,.72,.8],hemiGround:[.78,.55,.5],tint:[1.05,.95,.88],sunIntensity:2,duskFactor:.25},{t:.25,zenith:[.36,.6,.9],horizon:[.78,.88,.95],sun:[1,.94,.82],sunElevation:.65,sunAzimuth:Math.PI/2+.6,fog:[.78,.86,.92],hemiSky:[.82,.9,1],hemiGround:[.72,.58,.52],tint:[1,1,1],sunIntensity:2.5,duskFactor:0},{t:.5,zenith:[.3,.56,.92],horizon:[.72,.85,.95],sun:[1,.98,.92],sunElevation:1.15,sunAzimuth:Math.PI,fog:[.72,.84,.92],hemiSky:[.85,.92,1],hemiGround:[.7,.58,.52],tint:[1,1,1],sunIntensity:2.6,duskFactor:0},{t:.75,zenith:[.36,.58,.88],horizon:[.85,.82,.78],sun:[1,.9,.72],sunElevation:.55,sunAzimuth:Math.PI+.7,fog:[.85,.8,.75],hemiSky:[.85,.82,.92],hemiGround:[.75,.58,.5],tint:[1.03,.98,.92],sunIntensity:2.4,duskFactor:0},{t:.92,zenith:[.42,.52,.78],horizon:[1,.62,.38],sun:[1,.7,.42],sunElevation:.16,sunAzimuth:Math.PI*1.5-.25,fog:[1,.72,.52],hemiSky:[.9,.68,.62],hemiGround:[.7,.5,.45],tint:[1.08,.92,.8],sunIntensity:2.1,duskFactor:.45},{t:1,zenith:[.22,.28,.52],horizon:[.95,.48,.35],sun:[1,.55,.32],sunElevation:.02,sunAzimuth:Math.PI*1.5,fog:[.85,.55,.45],hemiSky:[.55,.45,.62],hemiGround:[.45,.35,.38],tint:[1.05,.85,.75],sunIntensity:1.6,duskFactor:1}];function Xi(n,t,e){return n+(t-n)*e}function Fi(n,t,e){return[Xi(n[0],t[0],e),Xi(n[1],t[1],e),Xi(n[2],t[2],e)]}function Ef(n){const t=Math.max(0,Math.min(1,n));let e=0;for(;e<Eo.length-2&&Eo[e+1].t<t;)e++;const i=Eo[e],s=Eo[e+1],r=(t-i.t)/(s.t-i.t);return{t,zenith:Fi(i.zenith,s.zenith,r),horizon:Fi(i.horizon,s.horizon,r),sun:Fi(i.sun,s.sun,r),sunElevation:Xi(i.sunElevation,s.sunElevation,r),sunAzimuth:Xi(i.sunAzimuth,s.sunAzimuth,r),fog:Fi(i.fog,s.fog,r),hemiSky:Fi(i.hemiSky,s.hemiSky,r),hemiGround:Fi(i.hemiGround,s.hemiGround,r),tint:Fi(i.tint,s.tint,r),sunIntensity:Xi(i.sunIntensity,s.sunIntensity,r),duskFactor:Xi(i.duskFactor,s.duskFactor,r)}}function Tf(n,t){return[Math.sin(t)*Math.cos(n),Math.sin(n),Math.cos(t)*Math.cos(n)]}function u1(n){const t=n/60%12;return{minute:n%60/60*Math.PI*2,hour:t/12*Math.PI*2}}const h1=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
  }
`,d1=`
  varying vec3 vDir;
  uniform vec3 uZenith;
  uniform vec3 uHorizon;
  uniform vec3 uSunColor;
  uniform vec3 uSunDir;
  uniform float uDuskFactor;   // 0 day → 1 dusk (stars, haze boost)
  uniform float uTime;         // seconds, for subtle shimmer

  // Hash-based star field (no texture).
  float hash(vec3 p) {
    p = fract(p * 0.3183099 + 0.1);
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }

  void main() {
    vec3 d = normalize(vDir);
    float h = clamp(d.y, -1.0, 1.0);

    // 1. Vertical gradient: horizon → zenith.
    float g = pow(clamp(h * 1.4 + 0.12, 0.0, 1.0), 0.75);
    vec3 col = mix(uHorizon, uZenith, g);

    // Below-horizon: fade to a deep tone so the dome edge never shows.
    col = mix(vec3(0.16, 0.18, 0.24), col, smoothstep(-0.08, 0.02, h));

    // 2. Sun disc + warm glow.
    float sunDot = dot(d, normalize(uSunDir));
    float disc = smoothstep(0.9993, 0.9997, sunDot);
    float glow = pow(clamp(sunDot, 0.0, 1.0), 24.0) * 0.55;
    float wideGlow = pow(clamp(sunDot, 0.0, 1.0), 6.0) * 0.22;
    col += uSunColor * (disc * 1.2 + glow + wideGlow);

    // 3. Horizon haze band — strongest near the sun azimuth at golden hour.
    float haze = (1.0 - abs(h)) * clamp(sunDot * 0.5 + 0.5, 0.0, 1.0);
    col += uSunColor * pow(haze, 3.0) * (0.25 + uDuskFactor * 0.45);

    // 4. Stars fade in as dusk deepens (upper sky only).
    if (uDuskFactor > 0.01 && h > 0.05) {
      vec3 cell = floor(d * 220.0);
      float s = hash(cell);
      float star = step(0.9985, s) * uDuskFactor * smoothstep(0.05, 0.5, h);
      // Subtle twinkle.
      star *= 0.75 + 0.25 * sin(uTime * 2.0 + s * 40.0);
      col += vec3(0.9, 0.93, 1.0) * star;
    }

    gl_FragColor = vec4(col, 1.0);
  }
`;function ec([n,t,e]){return new ne(n,t,e)}class f1{constructor(t=900){lt(this,"mesh");lt(this,"mat");lt(this,"clock",0);this.mat=new Sn({vertexShader:h1,fragmentShader:d1,uniforms:{uZenith:{value:new ne},uHorizon:{value:new ne},uSunColor:{value:new ne},uSunDir:{value:new D(0,1,0)},uDuskFactor:{value:0},uTime:{value:0}},side:rn,depthWrite:!1,fog:!1}),this.mesh=new J(new de(t,32,16),this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-10}setElapsed(t,e){const i=Math.max(0,Math.min(1,t/360)),s=Ef(i);this.clock+=e;const r=this.mat.uniforms;r.uZenith.value.copy(ec(s.zenith)),r.uHorizon.value.copy(ec(s.horizon)),r.uSunColor.value.copy(ec(s.sun));const[o,a,c]=Tf(s.sunElevation,s.sunAzimuth);r.uSunDir.value.set(o,a,c),r.uDuskFactor.value=s.duskFactor,r.uTime.value=this.clock}dispose(){this.mesh.geometry.dispose(),this.mat.dispose()}}const p1=[15907014,11063528,15915176,13154528];function ed(n){const t=new J(new te(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z));return t.position.set((n.min.x+n.max.x)/2,(n.min.y+n.max.y)/2,(n.min.z+n.max.z)/2),t}class m1{constructor(t){lt(this,"scene",new h0);lt(this,"camera",new Mn(62,1,.5,600));lt(this,"renderer");lt(this,"effects");lt(this,"hero",new oe);lt(this,"dropParcel",new oe);lt(this,"glowColumn",new oe);lt(this,"glowMats",[]);lt(this,"lastGlowStopId");lt(this,"targetRing",new oe);lt(this,"clouds",new oe);lt(this,"birds",new oe);lt(this,"boats",[]);lt(this,"clock",0);lt(this,"camPos",new D(0,27,145));lt(this,"camLook",new D(0,18,90));lt(this,"homeLook",new D(0,Qo,0));lt(this,"ray",new fg);lt(this,"blockers",[]);lt(this,"outlines",[]);lt(this,"life");lt(this,"beamGroup",null);lt(this,"beamLight",null);lt(this,"lighthouseLit",!0);lt(this,"sun");lt(this,"hemi");lt(this,"skyDome",null);lt(this,"clockHands",[]);lt(this,"lampMat",null);lt(this,"beamMat",null);lt(this,"disposed",!1);lt(this,"lastMode");lt(this,"lastWidth",-1);lt(this,"lastHeight",-1);lt(this,"lastPixelRatio",-1);lt(this,"followYaw",0);lt(this,"world");lt(this,"water",null);lt(this,"room",new s1);lt(this,"outdoorFog",new Xo(12180704,.0035));lt(this,"birdFlock",[]);this.renderer=new ly({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.effects=new o1(t),this.renderer.outputColorSpace=Je,this.renderer.toneMapping=Ml,this.renderer.toneMappingExposure=1.12,this.renderer.setClearColor(11459048),this.scene.fog=new Xo(12180704,.0035),this.camera.position.copy(this.camPos);const e=new og(14283263,13074296,2.35);this.hemi=e,this.scene.add(e),this.sun=new ug(16765344,2.5),this.sun.position.set(-80,115,48),this.scene.add(this.sun),this.skyDome=new f1,this.scene.add(this.skyDome.mesh),this.world=this.makeWorld(),this.life=new Ky(this.world),this.scene.add(this.world,this.hero,this.dropParcel,this.glowColumn,this.targetRing,this.clouds,this.birds,this.room.group),this.makeHero(),this.makeDropParcel(),this.makeGlowColumn(),this.makeSkyLife(),this.resize()}resize(){this.lastWidth=-1}render(t,e,i){if(this.disposed)return;const s=t.paused?0:Math.min(.05,Math.max(0,e));this.clock+=s,this.water&&!i.reducedMotion&&this.water.update(this.clock);const r=r1(t,this.clock,i.reducedMotion);this.effects.update(r.speed,i.lowQuality);const o=this.renderer.domElement,a=Math.max(1,o.clientWidth||o.width),c=Math.max(1,o.clientHeight||o.height),l=i.lowQuality?1e6:2e6,u=Math.min(devicePixelRatio||1,Math.sqrt(l/(a*c)));(a!==this.lastWidth||c!==this.lastHeight||u!==this.lastPixelRatio)&&(this.renderer.setPixelRatio(u),this.renderer.setSize(a,c,!1),this.camera.aspect=a/c,this.camera.updateProjectionMatrix(),this.lastWidth=a,this.lastHeight=c,this.lastPixelRatio=u),this.renderer.shadowMap.enabled=!i.lowQuality,this.outlines.forEach(y=>{y.visible=!i.lowQuality});const d=t.mode==="home";if([this.world,this.hero,this.dropParcel,this.glowColumn,this.targetRing,this.clouds,this.birds].forEach(y=>y.visible=!d),this.room.update(t,s,i.reducedMotion),d){this.scene.fog=null,this.renderer.setClearColor(14010030),this.camera.fov=48,this.camera.updateProjectionMatrix();const y=t.homePosition||{x:0,z:0},T=Qy(y.x,y.z),C=jy([this.homeLook.x,this.homeLook.z],[T.look[0],T.look[2]],this.lastMode!=="home",s,i.reducedMotion);this.homeLook.set(C[0],Qo,C[1]),this.camera.position.set(this.homeLook.x+Ns.x,this.homeLook.y+Ns.y,this.homeLook.z+Ns.z),this.camera.up.set(0,1,0),this.camera.lookAt(this.homeLook),this.lastMode=t.mode,this.renderer.render(this.scene,this.camera);return}this.camera.fov!==62&&(this.camera.fov=62,this.camera.updateProjectionMatrix()),this.scene.fog=this.outdoorFog,this.renderer.setClearColor(11459048);const h=t.player.position,f=new D(h.x,h.y,h.z),g=this.lastMode===void 0||this.lastMode!==t.mode;this.hero.position.copy(f),this.hero.rotation.order="YXZ",this.hero.rotation.y=Jy(t.player.yaw),this.hero.rotation.x=t.player.pitch*.4,this.hero.rotation.z=0,this.hero.scale.setScalar(t.mode==="title"||t.mode==="summary"?.86:.28),this.hero.position.y+=r.bob,this.animateSky(i.reducedMotion,s),!d&&s>0&&this.life.update(s,f,t.player.speed,t.player.velocity.y,this.clock),this.updateBeacon(this.destination(t),i.reducedMotion||t.paused?0:s),this.updateGlowColumn(t,i.reducedMotion),this.updateDropParcel(t,i.reducedMotion?0:s,i.reducedMotion),this.updateCamera(t,f,s,i.reducedMotion,g),this.lastMode=t.mode;const _=t.run?t.run.elapsed:0,m=wf(_),p=Ef(m),S=l1(_),b=u1(S);for(const y of this.clockHands)y.hour.rotation.z=-b.hour,y.minute.rotation.z=-b.minute;this.skyDome&&this.skyDome.setElapsed(_,s);const[v,A,E]=Tf(p.sunElevation,p.sunAzimuth);this.sun.position.set(v*160,Math.max(8,A*160),E*160),this.sun.color.setRGB(...p.sun),this.sun.intensity=p.sunIntensity,this.hemi.color.setRGB(...p.hemiSky),this.hemi.groundColor.setRGB(...p.hemiGround);const w=this.scene.fog;w&&w.color.setRGB(...p.fog),this.renderer.setClearColor(new ne(...p.horizon));const x=p.duskFactor;this.lampMat&&(this.lampMat.emissive.setRGB(1*x,.75*x,.4*x),this.lampMat.emissiveIntensity=1.6*x),this.beamLight&&(this.beamLight.intensity=3+x*5),this.beamMat&&(this.beamMat.opacity=.28+x*.25),this.renderer.render(this.scene,this.camera)}dispose(){this.effects.dispose(),this.disposed=!0,this.scene.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose();const i=e.material;(Array.isArray(i)?i:[i]).forEach(s=>s==null?void 0:s.dispose())}),this.renderer.dispose()}makeWorld(){const t=new oe,e=dy();this.water=e,t.add(e.mesh);const i=new _n(440,440,200,200);i.rotateX(-Math.PI/2);const s=i.attributes.position;for(let w=0;w<s.count;w++)s.setY(w,Ee(s.getX(w),s.getZ(w)));i.computeVertexNormals();const r=1024,o=document.createElement("canvas");o.width=r,o.height=r;const a=o.getContext("2d"),c=a.createImageData(r,r);c.data.set(ap(r)),a.putImageData(c,0,0);const l=new Bs(o);l.colorSpace=Je,l.anisotropy=4;const u=at(16777215);u.map=l;const d=new J(i,u);t.add(d);const h=at(16777215);h.vertexColors=!0,h.side=He;const f=at(9072461);f.side=He;const g=new Map,_=w=>{const x=w.toFixed(1);let y=g.get(x);return y||(w>5?y=[[-Rs,12103840],[-pr,12103840],[-pr,11033418],[-fr,11033418],[-fr,4408138],[fr,4408138],[fr,11033418],[pr,11033418],[pr,12103840],[Rs,12103840]]:y=[[-w/2,4408138],[w/2,4408138]],g.set(x,y)),y},m=(w,x,y,T,C)=>{const I=new oe,U=24,z=y/2,L=_(y),F=L.length,N=[],k=[],V=[],q=[],W=[],ut=[],Nt=[],wt=new ne;for(let Et=0;Et<=U;Et++){const Ft=T+Et/U*(C-T),pt=x.getPointAt(Ft),ae=x.getTangentAt(Ft),Wt=-ae.z,it=ae.x,rt=Math.hypot(Wt,it)||1,st=Wt/rt,xt=it/rt,gt=al(w,Ft);for(const[Zt,Kt]of L)N.push(pt.x+st*Zt,gt,pt.z+xt*Zt),k.push(0,1,0),wt.setHex(Kt),V.push(wt.r,wt.g,wt.b);if(Et<U)for(let Zt=0;Zt<F-1;Zt++){const Kt=Et*F+Zt,P=Kt+F;q.push(Kt,P,Kt+1,Kt+1,P,P+1)}const Xt=pt.x+st*z,ht=pt.z+xt*z,Ut=pt.x-st*z,Bt=pt.z-xt*z,O=[[Xt,ht,st,xt],[Ut,Bt,-st,-xt]];for(const[Zt,Kt,P,M]of O){const G=Ee(Zt,Kt),X=G<gt-.35?Math.max(G-.1,gt-4):gt;W.push(Zt,gt,Kt,Zt,X,Kt),ut.push(P,0,M,P,0,M)}if(Et<U){const Zt=Et*4;Nt.push(Zt,Zt+4,Zt+1,Zt+1,Zt+4,Zt+5),Nt.push(Zt+2,Zt+3,Zt+6,Zt+3,Zt+7,Zt+6)}}const Mt=new Me;Mt.setAttribute("position",new Qt(N,3)),Mt.setAttribute("normal",new Qt(k,3)),Mt.setAttribute("color",new Qt(V,3)),Mt.setIndex(q);const K=new J(Mt,h);K.receiveShadow=!0,I.add(K);const ct=new Me;ct.setAttribute("position",new Qt(W,3)),ct.setAttribute("normal",new Qt(ut,3)),ct.setIndex(Nt);const nt=new J(ct,f);return nt.receiveShadow=!0,I.add(nt),I},p=(w,x,y)=>{const T=new ne(4408138),C=[],I=[],U=[],z=[],L=[],F=[],N=(q,W,ut,Nt,wt,Mt,K,ct)=>{const nt=q.length/3,Et=[wt,Mt,K,ct];for(let Ft=0;Ft<4;Ft++)q.push(Et[Ft][0],Nt[Ft],Et[Ft][1]),W.push(0,1,0);ut.push(nt,nt+1,nt+2,nt,nt+2,nt+3)};for(const q of Wl()){const W=Ge(ge(q.nodeId)),ut=Gh(q,W.x,W.z),Nt=[W.x,ut,W.z],wt=[0,1,0],Mt=[T.r,T.g,T.b],K=[];for(const ht of q.ring)Nt.push(ht.x,ht.h,ht.z),wt.push(0,1,0),Mt.push(T.r,T.g,T.b);for(let ht=0;ht<q.ring.length;ht++)K.push(0,1+ht,1+(ht+1)%q.ring.length);const ct=new Me;ct.setAttribute("position",new Qt(Nt,3)),ct.setAttribute("normal",new Qt(wt,3)),ct.setAttribute("color",new Qt(Mt,3)),ct.setIndex(K);const nt=new J(ct,x);nt.receiveShadow=!0,w.add(nt);const Et=[],Ft=[],pt=[],ae=q.ring.length,Wt=q.legs.map(ht=>({la:Math.atan2(ht.dz,ht.dx),ca:Math.atan2(ht.hw,ht.clip)})),it=(ht,Ut)=>{const Bt=(ht-Ut)%(Math.PI*2);return Math.abs((Bt+Math.PI*3)%(Math.PI*2)-Math.PI)};for(let ht=0;ht<ae;ht++){const Ut=q.ring[ht],Bt=q.ring[(ht+1)%ae],O=(Ut.x+Bt.x)/2-W.x,Zt=(Ut.z+Bt.z)/2-W.z,Kt=Math.atan2(Zt,O);if(Wt.some(yt=>it(Kt,yt.la)<=yt.ca+1e-6))continue;const P=Bt.x-Ut.x,M=Bt.z-Ut.z,G=Math.hypot(P,M)||1,X=M/G,Q=-P/G,dt=Math.min(Ee(Ut.x,Ut.z),Ee(Bt.x,Bt.z)),mt=Ut.h-.02,j=Bt.h-.02,tt=Math.min(mt,j),_t=dt<tt-.3?Math.max(dt-.1,tt-3):tt,Ot=Et.length/3;Et.push(Ut.x,mt,Ut.z,Ut.x,_t,Ut.z,Bt.x,j,Bt.z,Bt.x,_t,Bt.z),Ft.push(X,0,Q,X,0,Q,X,0,Q,X,0,Q),pt.push(Ot,Ot+2,Ot+1,Ot+1,Ot+2,Ot+3)}const rt=new Me;rt.setAttribute("position",new Qt(Et,3)),rt.setAttribute("normal",new Qt(Ft,3)),rt.setIndex(pt);const st=new J(rt,y);st.receiveShadow=!0,w.add(st);const{white:xt,walk:gt}=Cy(q),Xt=(ht,Ut)=>ht.map(([Bt,O])=>Gh(q,Bt,O)+Ut);for(const ht of xt)N(C,I,U,Xt(ht,.08),ht[0],ht[1],ht[2],ht[3]);for(const ht of gt)N(z,L,F,Xt(ht,.085),ht[0],ht[1],ht[2],ht[3])}const k=at(16118246);if(k.side=He,k.depthWrite=!1,k.polygonOffset=!0,k.polygonOffsetFactor=-2,k.polygonOffsetUnits=-2,U.length){const q=new Me;q.setAttribute("position",new Qt(C,3)),q.setAttribute("normal",new Qt(I,3)),q.setIndex(U);const W=new J(q,k);W.receiveShadow=!1,W.renderOrder=1,w.add(W)}const V=at(12103840);if(V.side=He,V.depthWrite=!1,V.polygonOffset=!0,V.polygonOffsetFactor=-2,V.polygonOffsetUnits=-2,F.length){const q=new Me;q.setAttribute("position",new Qt(z,3)),q.setAttribute("normal",new Qt(L,3)),q.setIndex(F);const W=new J(q,V);W.receiveShadow=!1,W.renderOrder=1,w.add(W)}};for(const w of Ye){if(w.kind==="bridge")continue;const x=Qi(w),y=Hl(w),T=Jo(w),C=T.a?Vh(w,"a",T.a.dist):0,I=T.b?Vh(w,"b",T.b.dist):1;t.add(m(w,x,y,C,I))}const S=at(16774872);S.side=He,S.depthWrite=!1,S.polygonOffset=!0,S.polygonOffsetFactor=-2,S.polygonOffsetUnits=-2;const b=[],v=[],A=[];for(const w of Ye){if(w.kind==="bridge")continue;const x=Qi(w),y=x.getLength(),T=Jo(w),C=T.a?T.a.dist:0,I=T.b?T.b.dist:0;for(let U=C+1;U<y-I-3;U+=4){const z=x.getPointAt(U/y),L=x.getPointAt(Math.min(1,(U+2)/y)),F=new D().addVectors(z,L).multiplyScalar(.5),N=Math.atan2(L.x-z.x,L.z-z.z),k=Math.cos(N),V=Math.sin(N),q=.12,W=1,ut=al(w,(U+1)/y)+.02,Nt=[[-q,-W],[q,-W],[q,W],[-q,W]],wt=b.length/3;for(const[Mt,K]of Nt){const ct=F.x+Mt*k+K*V,nt=F.z+(-Mt*V+K*k);b.push(ct,ut,nt),v.push(0,1,0)}A.push(wt,wt+1,wt+2,wt,wt+2,wt+3)}}if(A.length>0){const w=new Me;w.setAttribute("position",new Qt(b,3)),w.setAttribute("normal",new Qt(v,3)),w.setIndex(A);const x=new J(w,S);x.renderOrder=1,t.add(x)}p(t,h,f),Ny(t);const E=at(10117447);return uu.forEach(([w,x])=>{const y=new J(new te($f,.7,Kf),E);y.position.set(w,.8,x),t.add(y)}),this.makeBuildings(t),this.makeGreenery(t),this.makeLighthouse(t),this.makeClockTower(t),this.makeObservatoryDome(t),this.makeBakeryDormer(t),this.makeMansionTerraces(t),this.makeBoats(t),this.makeLaundryLines(t),this.makeDockDressing(t),this.makeStreetLamps(t),this.makePark(t),t}makePark(t){const[e,i,s,r]=me,o=(e+s)/2,a=(i+r)/2,c=Ee(o,a),l=new J(new _n(s-e,r-i),at(8367708));l.rotation.x=-Math.PI/2,l.position.set(o,c+.1,a),t.add(l);const u=new ze,d=new xn(new pe(.35,.55,4,7),at(7621174),Qa.length),h=new xn(new Mr(2.6,1),at(5085035),Qa.length);Qa.forEach((v,A)=>{const E=Ee(v.x,v.z);u.rotation.set(0,A*2.39996,0),u.scale.setScalar(v.s),u.position.set(v.x,E+2*v.s,v.z),u.updateMatrix(),d.setMatrixAt(A,u.matrix),u.position.set(v.x,E+5.5*v.s,v.z),u.updateMatrix(),h.setMatrixAt(A,u.matrix)}),d.instanceMatrix.needsUpdate=!0,h.instanceMatrix.needsUpdate=!0,t.add(d,h);const f=at(15260864);for(const v of Uy){const A=new J(new te(v.x1-v.x0,.2,v.z1-v.z0),f);A.position.set((v.x0+v.x1)/2,c+.15,(v.z0+v.z1)/2),t.add(A)}const g=Fy,_=new Ji({color:13625572,transparent:!0,opacity:.5}),m=new J(new te(g.w,g.h,g.d),_);m.position.set(g.x,c+g.h/2,g.z),t.add(m);const p=g.d/2,S=new J(new de(p,16,10,0,Math.PI*2,0,Math.PI/2),_);S.position.set(g.x,c+g.h,g.z),t.add(S);const b=at(8030858);for(let v=0;v<6;v++){const A=new J(new Dn(p,.15,6,12,Math.PI),b);A.position.set(g.x,c+g.h,g.z),A.rotation.y=v/6*Math.PI,t.add(A)}}makeLaundryLines(t){const e=at(4865845),i=[at(16747434),at(8370408),at(16777215),at(16767306),at(10147455)],s=[[-25,9,-50,-20,9,-32],[5,11,-50,15,11,-45],[-20,8,-22,15,8,-28]],r=vn(42);s.forEach(([o,a,c,l,u,d])=>{const h=new D(o,a,c),f=new D(l,u,d),g=h.distanceTo(f),_=12;let m=h.clone();for(let S=1;S<=_;S++){const b=S/_,v=h.clone().lerp(f,b);v.y-=Math.sin(b*Math.PI)*.8;const A=m.distanceTo(v),E=new J(new pe(.03,.03,A,4),e);E.position.copy(m).lerp(v,.5),E.lookAt(v),E.rotateX(Math.PI/2),t.add(E),m=v}const p=Math.floor(g/3);for(let S=0;S<p;S++){const b=(S+.7)/(p+.4),v=h.clone().lerp(f,b);v.y-=Math.sin(b*Math.PI)*.8;const A=.9+r()*.5,E=1.1+r()*.5,w=new J(new _n(A,E),i[Math.floor(r()*i.length)]);w.position.set(v.x,v.y-E/2,v.z),w.rotation.y=Math.atan2(f.x-h.x,f.z-h.z)+Math.PI/2,w.material.side=He,t.add(w)}})}makeDockDressing(t){const e=at(11040318),i=at(8016432),s=at(13218953),r=uu,o=vn(7);r.forEach(([a,c])=>{const l=2+Math.floor(o()*3);for(let d=0;d<l;d++){const h=1.1+o()*.5,f=new J(new te(h,h,h),e);f.position.set(a-10+o()*20,1.15+h/2+(d===2?1.4:0),c-3+o()*6),f.rotation.y=o()*.6,f.castShadow=!0,t.add(f)}for(let d=0;d<2;d++){const h=new J(new pe(.65,.65,1.5,10),i);h.position.set(a-8+o()*16,1.9,c-2.5+o()*5),h.castShadow=!0,t.add(h)}const u=new J(new Dn(.55,.18,8,16),s);u.position.set(a-6+o()*12,1.25,c-2+o()*4),u.rotation.x=Math.PI/2,t.add(u)})}makeStreetLamps(t){const e=at(3816002),i=at(16767370);this.lampMat=i,[[-70,30],[-62,42],[-78,48],[-92,12],[-92,20],[-47,24],[-47,32],[-10,-40],[10,-40],[-10,-55],[10,-55]].forEach(([r,o])=>{const c=new J(new pe(.12,.16,4.2,8),e);c.position.set(r,0+2.1,o),c.castShadow=!0,t.add(c);const l=new J(new nn(.45,.35,8),e);l.position.set(r,0+4.55,o),t.add(l);const u=new J(new de(.32,10,8),i);u.position.set(r,0+4.2,o),t.add(u)})}makeBoats(t){const e=at(9132604),i=at(5996454),s=at(7031343),r=at(16117985),o=new el;o.moveTo(0,4.2),o.quadraticCurveTo(1.7,2.5,1.6,0),o.quadraticCurveTo(1.5,-2.5,1,-3.4),o.quadraticCurveTo(0,-3.8,-1,-3.4),o.quadraticCurveTo(-1.5,-2.5,-1.6,0),o.quadraticCurveTo(-1.7,2.5,0,4.2);const a=new $o(o,{depth:1.1,bevelEnabled:!1});a.rotateX(-Math.PI/2);const c=new el;c.moveTo(0,4.5),c.quadraticCurveTo(1.95,2.6,1.85,0),c.quadraticCurveTo(1.75,-2.6,1.15,-3.65),c.quadraticCurveTo(0,-4.1,-1.15,-3.65),c.quadraticCurveTo(-1.75,-2.6,-1.85,0),c.quadraticCurveTo(-1.95,2.6,0,4.5);const l=new tl;l.moveTo(0,3.9),l.quadraticCurveTo(1.45,2.4,1.35,0),l.quadraticCurveTo(1.25,-2.4,.85,-3.15),l.quadraticCurveTo(0,-3.5,-.85,-3.15),l.quadraticCurveTo(-1.25,-2.4,-1.35,0),l.quadraticCurveTo(-1.45,2.4,0,3.9),c.holes.push(l);const u=new $o(c,{depth:.28,bevelEnabled:!1});u.rotateX(-Math.PI/2);const d=[.08,-.06,.1,-.08,.06,-.1];Jf.map(([f,g],_)=>[f,g,d[_]]).forEach(([f,g,_],m)=>{const p=new oe,S=m%2?i:e,b=new J(a,S);b.position.y=1.1,p.add(b);const v=new J(u,s);v.position.y=1.1,p.add(v);const A=new J(new pe(.12,.16,5.5,6),s);A.position.y=3.8,p.add(A);const E=new J(new te(.3,3.6,1.7),r);E.position.set(0,3.3,-1.2),p.add(E),p.position.set(f,.1,g),p.rotation.y=_,p.userData.phase=m*1.3,p.userData.baseY=.1,t.add(p),this.boats.push(p)})}makeBuildings(t){const e=yf(),i=at(16768938),s=at(3501961),r=at(16767370),o=at(7358008),a=at(5085035),c=at(16747434),l=(_,m,p,S,b,v,A,E,w,x,y,T)=>{const C=Math.min(4.2,m*.28),I=new J(new te(_,m-C,p),at(y));I.position.set(b,S+(m-C)*.5,v),I.castShadow=!0,I.receiveShadow=!0,t.add(I);const U=_*.5,z=p*.5,L=m*.5-C,F=new D(b,S+m*.5,v),N=new Me;N.setAttribute("position",new Qt([-U,L,-z,U,L,-z,0,m*.5,0,U,L,-z,U,L,z,0,m*.5,0,U,L,z,-U,L,z,0,m*.5,0,-U,L,z,-U,L,-z,0,m*.5,0],3)),N.setIndex([0,2,1,3,5,4,6,8,7,9,11,10]),N.computeVertexNormals();const k=new J(N,at(T));k.position.copy(F),k.castShadow=!0,t.add(k),zy(e,ky({sx:_,sy:m,sz:p,minY:S,cx:b,cz:v,district:A,seedBase:E,colorIdx:w,bayWindow:x}))};ln.forEach((_,m)=>{const p=_.max.x-_.min.x,S=_.max.y-_.min.y,b=_.max.z-_.min.z,v=new D((_.min.x+_.max.x)/2,(_.min.y+_.max.y)/2,(_.min.z+_.max.z)/2),A=ed(_);if(this.blockers.push(A),m===hu||m===du||m===fu)return;const E=_.district&&Hr[_.district]||Hr["old-town"];l(p,S,b,_.min.y,v.x,v.z,_.district??"old-town",m,m,!1,E.bodies[m%E.bodies.length],E.roofs[m%E.roofs.length]),_.district==="bungalow-lanes"&&this.makePicketFence(t,_,m),_.district==="mansion-hill"&&this.makeWalledGarden(t,_,m)});const u=Oo(),d=dd(u),h=at(9076594),f=at(12101770),g=Ye.filter(_=>_.kind!=="bridge").map(_=>{const m=Ge(ge(_.a)),p=Ge(ge(_.b));return{x0:m.x,z0:m.z,x1:p.x,z1:p.z}});u.forEach((_,m)=>{const p=Fo(_.x,_.z,_.w,_.d),S=p?p.maxH:Ee(_.x+_.w/2,_.z+_.d/2),b=p?p.minH:S,v=S,A=Hr[_.district]||Hr["old-town"],E=_.palette===0?A.bodies[m%A.bodies.length]:p1[_.palette-1];if(S-b>.3){const I=new J(new te(_.w,S-b,_.d),h);I.position.set(_.x+_.w/2,b+(S-b)/2,_.z+_.d/2),I.castShadow=!0,I.receiveShadow=!0,t.add(I)}l(_.w,_.h,_.d,v,_.x+_.w/2,_.z+_.d/2,_.district,Oy+m,m,_.bayWindow,E,A.roofs[m%A.roofs.length]),this.blockers.push(ed(d[m]));const w=_.x+_.w/2,x=_.z+_.d/2;let y=0,T=0,C=1/0;for(const I of g){const U=I.x1-I.x0,z=I.z1-I.z0,L=U*U+z*z;let F=L>0?((w-I.x0)*U+(x-I.z0)*z)/L:0;F=Math.max(0,Math.min(1,F));const N=I.x0+F*U,k=I.z0+F*z,V=Math.hypot(w-N,x-k);V<C&&(C=V,y=N,T=k)}if(C<1/0&&C>.5){const I=y-w,U=T-x,z=Math.hypot(I,U),L=I/z,F=U/z,N=(_.w*Math.abs(L)+_.d*Math.abs(F))/2,k=w+L*N,V=x+F*N,q=y-L*2.8,W=T-F*2.8,ut=Math.hypot(q-k,W-V);if(ut>1.5){const Nt=(k+q)/2,wt=(V+W)/2,Mt=(Ee(k,V)+Ee(q,W))/2+.1,K=new J(new te(3,.18,ut),f);K.position.set(Nt,Mt,wt),K.rotation.y=Math.atan2(q-k,W-V),K.receiveShadow=!0,t.add(K)}}}),this.buildFacadeInstances(t,e,{trimMat:i,glassMat:s,litMat:r,doorMat:o,leafMat:a,petalMat:c})}buildFacadeInstances(t,e,i){const s=new _n(1,1),r=new te(1,1,1),o=new de(1,6,5),a=new ze,c=(h,f)=>{f.forEach((g,_)=>{a.position.set(g.x,g.y,g.z),a.rotation.set(g.rotX,g.rotY,0),a.scale.set(g.sx,g.sy,g.sz),a.updateMatrix(),h.setMatrixAt(_,a.matrix)}),h.instanceMatrix.needsUpdate=!0,h.frustumCulled=!1,t.add(h)};if(e.winLit.length){const h=new xn(s,i.litMat,e.winLit.length);c(h,e.winLit)}if(e.winUnlit.length){const h=new xn(s,i.glassMat,e.winUnlit.length);c(h,e.winUnlit)}if(e.doors.length){const h=new xn(s,i.doorMat,e.doors.length);c(h,e.doors)}if(e.sills.length){const h=new xn(r,i.trimMat,e.sills.length);c(h,e.sills)}if(e.bays.length){const h=new xn(r,i.trimMat,e.bays.length);c(h,e.bays)}if(e.flowerBoxes.length){const h=new xn(r,i.doorMat,e.flowerBoxes.length);c(h,e.flowerBoxes)}if(e.petals.length){const h=new xn(o,i.petalMat,e.petals.length);c(h,e.petals)}if(e.leaves.length){const h=new xn(o,i.leafMat,e.leaves.length);c(h,e.leaves)}const l=new _n(1,1,1,1),u=l.attributes.position;for(let h=0;h<u.count;h++)u.getY(h)<0&&u.setZ(h,-.7);l.computeVertexNormals();const d=[["#e86a6a","#f5f0e1"],["#5b7fa6","#f5f0e1"],["#6aa86a","#f5f0e1"]];e.awnings.forEach((h,f)=>{if(!h.length)return;const[g,_]=d[f%d.length],m=document.createElement("canvas");m.width=128,m.height=16;const p=m.getContext("2d");for(let v=0;v<8;v++)p.fillStyle=v%2?g:_,p.fillRect(v*16,0,16,16);const S=new Bs(m);S.colorSpace=Je;const b=new xn(l,new Ji({map:S,side:He}),h.length);c(b,h)})}makePicketFence(t,e,i){const s=(e.min.x+e.max.x)/2,r=(e.min.z+e.max.z)/2,o=e.max.x-e.min.x,a=e.max.z-e.min.z,c=e.min.y,l=at(16117985),u=at(7031343),d=[at(16747434),at(16767306),at(16777215),at(15231594)],h=4,f=s-o/2-h,g=s+o/2+h,_=r+a/2+h,m=[[f,_,s-1.2,_],[s+1.2,_,g,_],[f,r-a/2,f,_],[g,r-a/2,g,_]],p=[],S=new ze;m.forEach(([x,y,T,C])=>{const I=Math.hypot(T-x,C-y),U=Math.max(2,Math.floor(I/.38)),z=Math.atan2(T-x,C-y);for(let k=0;k<=U;k++){const V=k/U;S.position.set(x+(T-x)*V,c+.55,y+(C-y)*V),S.rotation.set(0,z,0),S.updateMatrix(),p.push(S.matrix.clone())}const L=I,F=new J(new te(.08,.12,L),l);F.position.set((x+T)/2,c+.75,(y+C)/2),F.rotation.y=z,t.add(F);const N=F.clone();N.position.y=c+.35,t.add(N)});const b=new te(.14,1.1,.07),v=new xn(b,l,p.length);p.forEach((x,y)=>v.setMatrixAt(y,x)),v.instanceMatrix.needsUpdate=!0,t.add(v);const A=new nn(.1,.18,4),E=new xn(A,l,p.length);p.forEach((x,y)=>{const T=new D().setFromMatrixPosition(x);S.position.set(T.x,T.y+.64,T.z),S.rotation.set(0,Math.PI/4,0),S.updateMatrix(),E.setMatrixAt(y,S.matrix)}),E.instanceMatrix.needsUpdate=!0,t.add(E);const w=vn(i*77+5);[-1,1].forEach(x=>{const y=s+x*3.2,T=r+a/2+2.2,C=new J(new te(3.4,.35,1.8),u);C.position.set(y,c+.18,T),t.add(C);for(let I=0;I<7;I++){const U=new J(new de(.22,7,6),d[Math.floor(w()*d.length)]);U.position.set(y+(w()-.5)*2.8,c+.55,T+(w()-.5)*1.2),t.add(U);const z=new J(new de(.18,6,5),at(5085035));z.position.set(y+(w()-.5)*2.8,c+.42,T+(w()-.5)*1.2),t.add(z)}})}makeWalledGarden(t,e,i){const s=Gi.find(F=>e.min.x>=F[0]-1&&e.max.x<=F[2]+1&&e.min.z>=F[1]-1&&e.max.z<=F[3]+1);if(!s)return;const[r,o,a,c]=s,l=e.min.y,u=at(12103840),d=at(14209216),h=at(4033119),f=at(7031343),g=[at(16747434),at(16767306),at(16777215)],_=Gi.some(F=>F!==s&&Math.abs(F[2]-r)<.01),m=Gi.some(F=>F!==s&&Math.abs(F[0]-a)<.01),p=[[(r+a)/2,o,a-r,.5]],S=[[(r+a)/2,o+1.5,a-r-3,.8]],b=e.max.z-o,v=(o+e.max.z)/2;_||(p.push([r,v,.5,b]),S.push([r+1.5,v,.8,b-3])),m?S.push([a,v,.8,b-2]):(p.push([a,v,.5,b]),S.push([a-1.5,v,.8,b-3]));const A=[],E=o+3,w=e.max.z-2;if(w-E>=5){const F=[];!_&&e.min.x-r>=5&&F.push([r+2.5,e.min.x-2.5]),!m&&a-e.max.x>=5&&F.push([e.max.x+2.5,a-2.5]);for(const[N,k]of F){const V=(N+k)/2,q=Math.max(1,Math.floor((w-E)/8));for(let W=0;W<q;W++){const ut=E+(W+.5)*((w-E)/q);A.push([V,ut])}}}const x=.9;p.forEach(([F,N,k,V])=>{const q=new J(new te(k,x,V),u);q.position.set(F,l+x/2,N),q.castShadow=!0,t.add(q);const W=new J(new te(k+.15,.12,V+.15),d);W.position.set(F,l+x+.06,N),t.add(W)});const y=1;S.forEach(([F,N,k,V])=>{const q=new J(new te(k,y,V),h);q.position.set(F,l+y/2,N),q.castShadow=!0,t.add(q)});const T=vn(i*131+11);A.forEach(([F,N])=>{const k=new J(new te(3.2,.4,2.4),f);k.position.set(F,l+.2,N),t.add(k);for(let V=0;V<8;V++){const q=new J(new de(.24,7,6),g[Math.floor(T()*g.length)]);q.position.set(F+(T()-.5)*2.6,l+.6,N+(T()-.5)*1.8),t.add(q)}});const C=[],I=o+5,U=e.min.z-4;if(U-I>6){const F=Math.max(2,Math.floor((a-r-10)/11));for(let N=0;N<F;N++){const k=r+7+(N+.5)*((a-r-14)/F)+(T()-.5)*3,V=(I+U)/2+(T()-.5)*2;C.push([k,V])}}!_&&e.min.x-r>9&&C.push([(r+e.min.x)/2,(I+U)/2]),!m&&a-e.max.x>9&&C.push([(e.max.x+a)/2,(I+U)/2]);const z=at(7621174),L=at(5085035);for(const[F,N]of C){const k=new J(new pe(.4,.65,3.2,7),z);k.position.set(F,l+1.6,N),k.castShadow=!0,t.add(k);const V=new J(new Mr(3,1),L);V.position.set(F,l+5,N),V.castShadow=!0,t.add(V)}}makeGreenery(t){const e=at(7621174),i=at(5085035),s=at(4033119),r=at(16747434),o=vn(1337),a=Oo(),c=Ye.map(f=>{const g=ge(f.a),_=ge(f.b);return{x0:g.x,z0:g.z,x1:_.x,z1:_.z}}),l=(f,g)=>{for(const _ of c){const m=_.x1-_.x0,p=_.z1-_.z0,S=m*m+p*p;let b=S>0?((f-_.x0)*m+(g-_.z0)*p)/S:0;if(b=Math.max(0,Math.min(1,b)),Math.hypot(f-(_.x0+b*m),g-(_.z0+b*p))<4.5)return!1}for(const _ of a)if(f>_.x-2&&f<_.x+_.w+2&&g>_.z-2&&g<_.z+_.d+2)return!1;for(const _ of ln)if(f>_.min.x-2&&f<_.max.x+2&&g>_.min.z-2&&g<_.max.z+2)return!1;return!Gi.some(_=>f>_[0]&&f<_[2]&&g>_[1]&&g<_[3])},u=(f,g)=>{const _=new oe,m=3+o()*2.5,p=new J(new pe(.35,.55,m,7),e);p.position.y=m/2,_.add(p);const S=o()<.5?i:s,b=new J(new Mr(2.2+o()*1.2,1),S);if(b.position.y=m+1.5,_.add(b),_.position.set(f,Ee(f,g),g),_.rotation.y=o()*Math.PI*2,t.add(_),o()<.3){const v=new J(new de(.28,7,6),r);v.position.set(f+.8,Ee(f,g)+.5,g+.6),t.add(v)}};let d=0,h=0;for(;d<260&&h<6e3;){h++;const f=(o()-.5)*400,g=60+o()*160;gu(f,g)&&l(f,g)&&(Pe.some(_=>Math.hypot(f-_.position.x,g-_.position.z)<24)||Math.hypot(f,g)<145||(u(f,g),d++))}for(d=0,h=0;d<60&&h<3e3;){h++;const f=(o()-.5)*400,g=(o()-.5)*400;gu(f,g)&&l(f,g)&&(Pe.some(_=>Math.hypot(f-_.position.x,g-_.position.z)<24)||f>me[0]&&f<me[2]&&g>me[1]&&g<me[3]||Math.hypot(f,g)<100&&o()<.7||g>60&&Math.hypot(f,g)>=145||(u(f,g),d++))}}makeLighthouse(t){const e=ln[3],i=ln[hu],s=(e.min.x+e.max.x)/2,r=(e.min.z+e.max.z)/2,o=new J(new pe(20,24,9,18),at(9076594));o.position.set(s,e.min.y+2.5,r),o.castShadow=!0,t.add(o);const a=(i.min.x+i.max.x)/2,c=(i.min.z+i.max.z)/2,l=i.min.y,u=new J(new pe(3.6,5.2,26,16),at(16773332));u.position.set(a,16+l,c),u.castShadow=!0,t.add(u);const d=p=>5.2-(p-3)*(1.6/26);for(const p of[8,14,20,26]){const S=new J(new pe(d(p+1.1)+.15,d(p-1.1)+.15,2.2,16),at(13786193));S.position.set(a,p+l,c),t.add(S)}const h=new J(new pe(4.6,4.6,1.2,16),at(4089472));h.position.set(a,29.6+l,c),t.add(h);const f=new J(new pe(2.6,2.6,3.4,12),new An({color:16771501}));f.position.set(a,31.8+l,c),t.add(f);const g=new J(new nn(3.4,2.6,12),at(13194062));g.position.set(a,34.8+l,c),t.add(g);const _=new oe;_.position.set(a,31.8+l,c);const m=new An({color:16768910,transparent:!0,opacity:.28,depthWrite:!1,side:He});this.beamMat=m,[0,Math.PI].forEach(p=>{const S=new J(new nn(3.2,26,12,1,!0),m);S.rotation.z=Math.PI/2,S.rotation.y=p,S.position.set(Math.cos(p)*13,0,-Math.sin(p)*13),_.add(S)}),t.add(_),this.beamGroup=_,this.beamLight=new cg(16768146,60,90),this.beamLight.position.set(a,32+l,c),t.add(this.beamLight),this.setLighthouseLit(!0)}setLighthouseLit(t){this.lighthouseLit=t,this.beamGroup&&(this.beamGroup.visible=t),this.beamLight&&(this.beamLight.intensity=t?60:0)}makeClockTower(t){const e=ln[du],i=(e.min.x+e.max.x)/2,s=(e.min.z+e.max.z)/2,r=e.min.y,o=at(13935988),a=at(11951167),c=at(16768938),l=new J(new te(8,20,8),o);l.position.set(i,r+10,s),l.castShadow=!0,t.add(l);const u=new J(new te(8.6,3,8.6),o);u.position.set(i,r+21.5,s),u.castShadow=!0,t.add(u);const d=at(2763317),h=[[0,-4.32,Math.PI],[0,4.32,0],[-4.32,0,-Math.PI/2],[4.32,0,Math.PI/2]];for(const[m,p,S]of h){const b=new oe;b.position.set(i+m,r+17,s+p),b.rotation.y=S,t.add(b);const v=new J(new pe(2.2,2.2,.3,24),new An({color:16314584}));v.rotation.x=Math.PI/2,b.add(v);const A=new An({color:2763317});for(let U=0;U<12;U++){const z=new J(new te(.09,U%3===0?.34:.2,.02),A),L=U/12*Math.PI*2;z.position.set(Math.sin(L)*1.9,Math.cos(L)*1.9,.16),z.rotation.z=-L,b.add(z)}const E=new An({color:2763317}),w=new oe;w.position.set(0,0,.3);const x=new J(new te(.18,1.1,.06),E);x.position.y=.45,w.add(x),b.add(w);const y=new oe;y.position.set(0,0,.36);const T=new J(new te(.13,1.65,.06),E);T.position.y=.62,y.add(T),b.add(y);const C=new J(new pe(.14,.14,.1,12),E);C.rotation.x=Math.PI/2,C.position.z=.38,b.add(C),this.clockHands.push({hour:w,minute:y});const I=new J(new _n(2.4,2),d);I.position.set(i+m*1.01,r+21.5,s+p*1.01),I.rotation.y=S,t.add(I)}const f=new nn(6.2,5,4),g=new J(f,a);g.position.set(i,r+25.5,s),g.rotation.y=Math.PI/4,g.castShadow=!0,t.add(g);const _=new J(new de(.5,10,8),c);_.position.set(i,r+28.2,s),t.add(_);for(const[m,p]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const S=new J(new te(.7,20,.7),c);S.position.set(i+m*3.8,r+10,s+p*3.8),t.add(S)}}makeObservatoryDome(t){const e=ln[fu],i=(e.min.x+e.max.x)/2,s=(e.min.z+e.max.z)/2,r=e.min.y,o=at(9079442),a=at(6064762),c=new J(new pe(4.5,4.8,3,18),o);c.position.set(i,r+1.5,s),c.castShadow=!0,t.add(c);const l=new J(new de(4.5,20,12,0,Math.PI*2,0,Math.PI/2),a);l.position.set(i,r+3,s),l.castShadow=!0,t.add(l);const u=new J(new te(1.2,3.5,.4),at(1710629));u.position.set(i,r+4.85,s+4.1),u.rotation.x=-.25,t.add(u);const d=new J(new de(.4,8,6),at(9071162));d.position.set(i,r+7.7,s),t.add(d)}makeBakeryDormer(t){const e=ln[0],i=(e.min.x+e.max.x)/2,s=(e.min.z+e.max.z)/2,r=i,o=s-8,a=e.max.x-e.min.x,c=e.max.y-e.min.y,l=e.max.z-e.min.z,u=Math.min(4.2,c*.28),d=Math.max(0,Math.min(1-Math.abs(r-i)/(a/2),1-Math.abs(o-s)/(l/2))),h=e.max.y-u+d*u,f=at(16049320),g=at(9132602),_=new J(new te(4.5,2.6,3),f);_.position.set(r,h+1.3,o),_.castShadow=!0,t.add(_);const m=new J(new _n(2.6,1.6),new An({color:16767114}));m.position.set(r,h+1.3,o+1.52),t.add(m);const p=new J(new te(3,2,.15),g);p.position.set(r,h+1.3,o+1.45),t.add(p),m.position.z=o+1.54;const S=new Me;S.setAttribute("position",new Qt([-2.45,0,-1.7,2.45,0,-1.7,0,.2,0,2.45,0,-1.7,2.45,0,1.7,0,.2,0,2.45,0,1.7,-2.45,0,1.7,0,.2,0,-2.45,0,1.7,-2.45,0,-1.7,0,.2,0],3)),S.setIndex([0,2,1,3,5,4,6,8,7,9,11,10]),S.computeVertexNormals();const b=new J(S,g);b.position.set(r,h+2.6,o),b.castShadow=!0,t.add(b)}makeMansionTerraces(t){const e=at(10132114),i=at(6989930),s=(r,o,a,c,l,u)=>{const d=c-a,h=new J(new te(o-r,d,u-l),e);h.position.set((r+o)/2,a+d/2,(l+u)/2),h.castShadow=!0,h.receiveShadow=!0,t.add(h);const f=new J(new te(o-r-.6,.25,u-l-.6),i);f.position.set((r+o)/2,c+.12,(l+u)/2),f.receiveShadow=!0,t.add(f)};for(const r of[17,18]){const o=ln[r],a=o.min.y;s(o.min.x,o.max.x,a,a+1.5,o.max.z,o.max.z+4.5),s(o.min.x+4,o.max.x-4,a,a+3,o.max.z+2.25,o.max.z+4.5)}}makeHero(){const t=new An({color:3746621,side:rn}),e=(c,l,u,d)=>{const h=new J(c,l);h.position.set(u.x,u.y,u.z),d&&h.scale.set(d.x,d.y,d.z),this.hero.add(h);const f=new J(c,t);return f.scale.setScalar(1.045),h.add(f),this.outlines.push(f),h},i=e(new pe(.16,.21,8.6,10),at(8736825),{x:0,y:.15,z:.35});i.rotation.x=Math.PI/2;const s=e(new Dn(.62,.105,7,14,Math.PI*1.25),at(7946799),{x:0,y:.58,z:-4.05});s.rotation.z=Math.PI*.18,[3,3.3].forEach(c=>e(new Dn(.34,.1,6,12),at(5583662),{x:0,y:.15,z:c}));for(let c=0;c<21;c++){const l=(c-10)/10,u=new Jd(new D(l*.25,.15,3),new D(l*1.5,-.05+Math.cos(c)*.16,5.8-Math.abs(l)*.35));e(new sa(u,1,.11,5,!1),at(c%2?13869914:15780216),{x:0,y:0,z:0})}e(new nn(1.75,4.3,9),at(1535606),{x:0,y:4,z:-.25}),e(new de(1.15,14,10),at(16762531),{x:0,y:6.5,z:-.35}),e(new nn(2.05,4.6,11),at(2443608),{x:0,y:9,z:-.35}),e(new Dn(1.55,.28,7,16),at(2443608),{x:0,y:7.25,z:-.35},{x:1,y:1,z:1}).rotation.x=Math.PI/2,[-1,1].forEach(c=>{const l=e(new pe(.34,.48,2.2,7),at(2443608),{x:c*.72,y:2.35,z:.05});l.rotation.z=c*.36;const u=e(new pe(.28,.35,1.75,7),at(2443608),{x:c*1.12,y:1.15,z:-.08});u.rotation.z=-c*.62,e(new de(.46,8,7),at(5716276),{x:c*1.48,y:.52,z:-.47},{x:1,y:.65,z:1.45})}),[-.75,-.38,.38,.75].forEach((c,l)=>e(new de(.45,8,7),at(10308914),{x:c,y:6.75-l%2*.42,z:-1.15})),[-.4,.4].forEach(c=>e(new de(.14,8,7),at(2504770),{x:c,y:6.65,z:-1.43}));const r=at(15914671);e(new de(1.02,12,9),r,{x:0,y:2,z:1.48}),e(new de(.78,12,9),r,{x:0,y:2.78,z:2.08}),[-.48,.48].forEach(c=>e(new nn(.38,.78,3),at(14721900),{x:c,y:3.55,z:2.2})),[-.26,.26].forEach(c=>e(new de(.12,7,6),at(2572625),{x:c,y:2.88,z:2.88})),[-.42,.42].forEach(c=>e(new de(.19,7,6),r,{x:c,y:1.27,z:2.12},{x:1,y:.7,z:1.15}));const o=e(new Dn(.79,.075,6,12),at(12929874),{x:0,y:2.45,z:2.06});o.rotation.x=Math.PI/2;const a=e(new Dn(1,.17,7,12,Math.PI*.8),at(15914671),{x:0,y:2,z:.95});a.rotation.x=Math.PI/2}makeSkyLife(){const t=at(16776171);for(let e=0;e<12;e++){const i=new oe;for(let s=0;s<4;s++){const r=new J(new de(3+s%2*1.5,10,7),t);r.position.set(s*3,Math.sin(s)*.8,0),i.add(r)}i.position.set(-190+e*47%380,38+e%4*16,-155+e*71%320),this.clouds.add(i)}this.makeBirds()}makeBirds(){const t=at(16119280),e=at(14277081),i=at(15242044),s=vn(1234);for(let r=0;r<12;r++){const o=new oe,a=new J(new de(.45,10,8),t);a.scale.set(.7,.6,1.6),o.add(a);const c=new J(new de(.26,10,8),t);c.position.set(0,.22,.75),o.add(c);const l=new J(new nn(.09,.35,8),i);l.position.set(0,.18,1.05),l.rotation.x=Math.PI/2,o.add(l);const u=new J(new te(.5,.07,.6),e);u.position.set(0,.05,-.85),o.add(u);const d=g=>{const _=new oe;_.position.set(g*.28,.12,.1);const m=new J(new te(1.5,.07,.65),e);m.position.x=g*.85;const p=new J(new te(.7,.06,.45),e);return p.position.x=g*1.85,_.add(m,p),o.add(_),_},h=d(-1),f=d(1);o.position.set(-30+s()*80,28+s()*12,45+s()*55),this.birds.add(o),this.birdFlock.push({group:o,left:h,right:f,vel:new D((s()-.5)*8,0,(s()-.5)*8),phase:s()*Math.PI*2})}}updateBirds(t){const e=this.birdFlock.length;if(!e||t<=0)return;const i=14,s=9,r=4.5,o=26,a=new D,c=new D;for(let l=0;l<e;l++){const u=this.birdFlock[l],d=new D,h=new D,f=new D;let g=0;for(let E=0;E<e;E++){if(l===E)continue;const w=this.birdFlock[E],x=u.group.position.distanceTo(w.group.position);x<i&&x>.001&&(g++,c.copy(u.group.position).sub(w.group.position).divideScalar(x*x),d.add(c),h.add(w.vel),f.add(w.group.position))}a.set(0,0,0),g>0&&(d.divideScalar(g).normalize().multiplyScalar(s).sub(u.vel),d.clampLength(0,o),h.divideScalar(g).normalize().multiplyScalar(s).sub(u.vel),h.clampLength(0,o),f.divideScalar(g).sub(u.group.position).normalize().multiplyScalar(s).sub(u.vel),f.clampLength(0,o),a.addScaledVector(d,1.6).addScaledVector(h,1).addScaledVector(f,.9));const _=33-u.group.position.y;a.y+=hn.clamp(_*2.2,-o*.6,o*.6),a.x+=Math.sin(this.clock*.9+u.phase)*4+Math.sin(this.clock*.23+u.phase*2.1)*3,a.z+=Math.cos(this.clock*.7+u.phase*1.3)*4+Math.cos(this.clock*.31+u.phase*.7)*3,u.vel.addScaledVector(a,t);const m=u.vel.length();m>s?u.vel.multiplyScalar(s/m):m<r&&m>.001&&u.vel.multiplyScalar(r/m),u.group.position.addScaledVector(u.vel,t);const p=u.group.position.clone().add(u.vel);u.group.lookAt(p);const S=(this.clock*.35+u.phase*.15)%1;let b,v;S<.58?(b=.75,v=0):(b=.06,v=.18);const A=v+Math.sin(this.clock*11+u.phase)*b;u.left.rotation.z=A,u.right.rotation.z=-A}}animateSky(t,e){t||(this.clouds.children.forEach((i,s)=>{i.position.x+=.012*(1+s%3),i.position.x>205&&(i.position.x=-205)}),this.updateBirds(e),this.beamGroup&&this.lighthouseLit&&(this.beamGroup.rotation.y+=.015),this.boats.forEach(i=>{const s=i.userData.baseY??.35;i.position.y=s+Math.sin(this.clock*1.2+i.userData.phase)*.18,i.rotation.z=Math.sin(this.clock*.9+i.userData.phase)*.03}))}destination(t){var i,s,r;if(t.mode==="tutorial")return Pe.find(o=>o.id==="harbor-cafe")||Pe[1];const e=(i=t.run)!=null&&i.returning?"home":(r=(s=t.run)==null?void 0:s.job)==null?void 0:r.to;return Pe.find(o=>o.id===e)||Pe.find(o=>o.id==="home")||Pe[0]}updateBeacon(t,e){if(t&&(this.targetRing.position.set(t.position.x,Math.max(3,t.position.y+.6),t.position.z),this.targetRing.rotation.y+=e*.8,!this.targetRing.children.length)){const i=new J(new Dn(4.5,.25,8,28),at(16770203));i.rotation.x=Math.PI/2,this.targetRing.add(i);const s=new J(new pe(.08,.26,8,8,1,!0),new An({color:16771234,transparent:!0,opacity:.16,depthWrite:!1,side:He}));s.position.y=4,this.targetRing.add(s)}}makeGlowColumn(){const e=[{rTop:_d,rBottom:2.4,opacity:.2},{rTop:1.7,rBottom:1.1,opacity:.32}];for(const i of e){const s=new pe(i.rTop,i.rBottom,90,24,1,!0),r=new Sn({transparent:!0,depthWrite:!1,blending:uc,side:He,uniforms:{uHeight:{value:90},uOpacity:{value:i.opacity},uPulse:{value:1}},vertexShader:`varying float vH; uniform float uHeight;
void main(){ vH = position.y / uHeight + .5; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,fragmentShader:`varying float vH; uniform float uOpacity; uniform float uPulse;
void main(){ float a = pow(clamp(1. - vH, 0., 1.), 1.7) * uOpacity * uPulse;
  gl_FragColor = vec4(1., .62, .22, a); }`}),o=new J(s,r);o.position.y=90/2,this.glowColumn.add(o),this.glowMats.push(r)}this.glowColumn.visible=!1}updateGlowColumn(t,e){const i=ea(t),s=!!i;if(this.glowColumn.visible=s,!s||!i){this.lastGlowStopId=void 0;return}this.lastGlowStopId!==i.id&&(this.lastGlowStopId=i.id,this.glowColumn.position.set(i.position.x,i.position.y,i.position.z));const r=t.haloFade>0?Math.max(0,Math.min(1,t.haloFade/md)):1,o=(e?1:.86+.14*Math.sin(this.clock*2.4))*r;for(const a of this.glowMats)a.uniforms.uPulse.value=o}makeDropParcel(){const t=new J(new te(1.5,1.1,1.5),at(13208927)),e=at(12929874),i=new J(new te(1.56,1.16,.34),e),s=new J(new te(.34,1.16,1.56),e),r=new J(new de(.3,8,6),e);r.position.y=.68,r.scale.set(1.4,.7,1.4),this.dropParcel.add(t,i,s,r),this.dropParcel.visible=!1}updateDropParcel(t,e,i){const s=t.drop,r=s?Pe.find(h=>h.id===s.stopId):void 0,o=!!s&&!!r&&s.parcel;if(this.dropParcel.visible=o,!o||!s||!r)return;const a=i?1:Math.min(1,s.t/pd),c=a*a,l=t.player.position,u=r.position.y+.7,d=Math.max(l.y-1.4,u);this.dropParcel.position.set(l.x+(r.position.x-l.x)*c,d+(u-d)*c,l.z+(r.position.z-l.z)*c),i||(this.dropParcel.rotation.y+=e*4)}updateCamera(t,e,i,s,r){let o,a;if(t.mode==="title"||t.mode==="summary"){const c=s?0:this.clock*.035;o=new D(-92+Math.sin(c)*8,48,146+Math.cos(c)*7),a=new D(18,13,65)}else{this.followYaw=r?t.player.yaw:t1(this.followYaw,t.player.yaw,i);const c=this.followYaw,l=new D(-Math.sin(c)*26,12,Math.cos(c)*26);o=e.clone().add(l),a=e.clone().add(new D(Math.sin(c)*5,2,-Math.cos(c)*5));const u=e.clone().add(new D(0,2,0)),d=o.clone().sub(u),h=d.length();this.blockers.forEach(g=>g.updateWorldMatrix(!0,!1)),this.ray.set(u,d.normalize());const f=this.ray.intersectObjects(this.blockers,!1)[0];f&&f.distance<h&&o.copy(u).add(d.setLength(Math.max(7,f.distance-1)))}this.camPos.copy(o),this.camLook.copy(a),this.camera.position.copy(this.camPos),this.camera.up.set(0,1,0),this.camera.lookAt(this.camLook)}}const g1=()=>({lastKey:null,dismissedKey:null});function x1(n,t,e){return`${n}|${t}|${e}`}function _1(n,t,e,i,s,r){const o=x1(t,e,s),a=o===n.lastKey?n:{lastKey:o,dismissedKey:null};return{hidden:!(t.includes("tutorial")||i!==""||t==="flight"&&(r??1/0)<=120)||a.dismissedKey===o,next:a}}function v1(n){return{...n,dismissedKey:n.lastKey}}const Ei=n=>`<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${{star:'<path d="m12 2 2.8 6.5L22 9l-5.4 4.7 1.6 7.1-6.2-3.7-6.2 3.7 1.6-7.1L2 9l7.2-.5Z"/>',envelope:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',pause:'<path d="M7 4h3v16H7zm7 0h3v16h-3z"/>',sound:'<path d="M4 10h4l5-4v12l-5-4H4zM16 9c1 .8 1 5.2 0 6m2-9c3 2.6 3 9.4 0 12"/>',fullscreen:'<path d="M4 9V5h4m8 0h4v4M20 15v4h-4M8 19H4v-4"/>',home:'<path d="m3 11 9-8 9 8v9h-6v-6H9v6H3z"/>'}[n]}</svg>`,Ts=n=>`${Math.max(0,Math.round(n))} coins`;class M1{constructor(t,e){lt(this,"el",{});lt(this,"previousRevision",-1);lt(this,"offersKey","");lt(this,"tip",g1());t.classList.add("meg-ui"),t.innerHTML=`
<header class="gamebar"><div class="gamebar-brand">MEG’S <span>Delivery Service</span></div><div class="gamebar-actions"><button class="icon-button" id="audio-btn" aria-label="Mute audio">${Ei("sound")}</button><button class="icon-button" id="pause-btn" aria-label="Pause flight">${Ei("pause")}</button></div></header><main class="screen-layer">
<section class="title-card panel" id="title-card"><div class="eyebrow">${Ei("star")} A LITTLE WITCH. A BIG SKY.</div><h1>MEG’S<br><em>Delivery</em> Service</h1><p class="premise">Take on a parcel, then return home <b>before nightfall</b> to bank your earnings.</p><p class="key-hint desktop-hint">Steer with <kbd>WASD</kbd> / arrows · rise with <kbd>W</kbd> · hover with <kbd>Space</kbd></p><p class="key-hint touch-hint">Touch anywhere to fly · release the stick to slow down</p><button id="start-btn" class="primary-button">Learn to fly <span>→</span></button><div class="title-controls"><button id="quality-btn">Quality: <b>High</b></button><button id="motion-btn">Motion: <b>Full</b></button><button id="fullscreen-btn">${Ei("fullscreen")} Fullscreen</button></div><footer>MADE OF LITTLE ADVENTURES <span class="desktop-hint">⌨</span><span class="touch-hint">touch to fly</span> <span class="build-sha">build 89edd36</span></footer></section>
<section class="offers-card panel menu-card" id="offers-card"><div class="eyebrow">${Ei("envelope")} TODAY’S POST</div><h2>Choose a delivery</h2><p>Nightfall is already on its way. Pick one parcel and make it home with your earnings.</p><div class="offer-balances"><span>Satchel <b id="offer-earnings">0 coins</b></span><span>Banked <b id="offer-banked">0 coins</b></span></div><div id="offer-list" class="offer-list"></div><button id="return-home-btn" class="secondary-button">Return home</button></section>
<section class="summary-card panel menu-card" id="summary-card"><div class="eyebrow">${Ei("star")} DAY’S END</div><h2 id="summary-heading">A lovely landing.</h2><p id="summary-copy"></p><div class="summary-stats"><div><span>Deliveries</span><b id="summary-deliveries">0</b></div><div><span>Earnings saved</span><b id="summary-earnings">0 coins</b></div></div><button id="next-day-btn" class="primary-button">Another day <span>→</span></button></section>
<section class="flight-hud" id="flight-hud"><div class="destination-card panel"><div class="eyebrow">${Ei("envelope")} <span id="target-label">Next delivery</span></div><strong id="target-name">The village</strong><div class="target-direction"><span class="compass-arrow" id="target-arrow"></span><span id="target-distance">— m away</span><svg class="hourglass" id="hourglass" viewBox="0 0 40 48" aria-hidden="true"><defs><clipPath id="top-bulb"><polygon points="9,6 31,6 20,24"/></clipPath><clipPath id="bottom-bulb"><polygon points="9,42 31,42 20,24"/></clipPath></defs><path d="M9 6 H31 L20 24 L31 42 H9 L20 24 Z" fill="#fffdf5" fill-opacity="0.35" stroke="#55402e" stroke-width="2.5" stroke-linejoin="round"/><rect id="sand-top" x="9" y="6" width="22" height="18" fill="#e8b64c" clip-path="url(#top-bulb)"/><rect id="sand-bottom" x="9" y="42" width="22" height="0" fill="#e8b64c" clip-path="url(#bottom-bulb)"/><line class="sand-stream" x1="20" y1="24" x2="20" y2="30" stroke="#e8b64c" stroke-width="1.6" stroke-linecap="round"/><circle class="grain" cx="20" cy="22" r="1.3" fill="#e8b64c"/><circle class="grain grain-2" cx="20" cy="22" r="1" fill="#e8b64c"/><circle class="grain grain-3" cx="20" cy="22" r="1.1" fill="#e8b64c"/><line x1="6" y1="6" x2="34" y2="6" stroke="#55402e" stroke-width="3.5" stroke-linecap="round"/><line x1="6" y1="42" x2="34" y2="42" stroke="#55402e" stroke-width="3.5" stroke-linecap="round"/></svg></div></div><div class="tutorial-bubble" id="tutorial-bubble"><button class="bubble-close" id="bubble-close" aria-label="Dismiss tip">×</button><b>Pumpkin says:</b> <span id="tutorial-text"></span></div><div class="flight-readout panel"><span><b id="speed-value">0</b> m/s</span><span class="satchel-readout">Satchel <b id="flight-earnings">0</b></span></div></section>
<section class="pause-card panel menu-card" id="pause-card"><div class="eyebrow">${Ei("star")} TAKING A BREATHER</div><h2>The sky will wait.</h2><p id="pause-reason"></p><p class="key-hint desktop-hint">When you return: <kbd>WASD</kbd> or arrows to steer · <kbd>Q</kbd>/<kbd>E</kbd> for speed</p><p class="key-hint touch-hint">When you return: touch anywhere to fly · release the stick to slow down</p><button id="resume-btn" class="primary-button">Continue flying <span>→</span></button><button id="unstuck-btn" class="secondary-button">Unstuck me</button><div class="title-controls"><button id="pause-quality-btn">Quality</button><button id="pause-motion-btn">Motion</button></div></section></main>`;const i=r=>t.querySelector(`#${r}`);["title-card","offers-card","summary-card","flight-hud","pause-card","hourglass","sand-top","sand-bottom","pause-reason","target-name","target-distance","target-arrow","target-label","tutorial-bubble","tutorial-text","bubble-close","speed-value","flight-earnings","audio-btn","pause-btn","resume-btn","unstuck-btn","quality-btn","motion-btn","pause-quality-btn","pause-motion-btn","offer-list","return-home-btn","offer-earnings","offer-banked","summary-heading","summary-copy","summary-deliveries","summary-earnings","next-day-btn","start-btn"].forEach(r=>this.el[r]=i(r));const s=(r,o)=>i(r).onclick=a=>{o(),a.currentTarget.blur()};s("start-btn",e.start),s("pause-btn",e.pause),s("resume-btn",e.resume),s("unstuck-btn",e.unstuck),s("audio-btn",e.mute),i("bubble-close").onclick=r=>{this.tip=v1(this.tip),this.el["tutorial-bubble"].hidden=!0,r.currentTarget.blur()},s("return-home-btn",()=>{var r;return(r=e.returnHome)==null?void 0:r.call(e)}),s("next-day-btn",()=>{var r;return(r=e.nextDay)==null?void 0:r.call(e)}),[i("quality-btn"),i("pause-quality-btn")].forEach(r=>r.onclick=e.quality),[i("motion-btn"),i("pause-motion-btn")].forEach(r=>r.onclick=e.motion),i("fullscreen-btn").onclick=e.fullscreen,i("offer-list").onclick=r=>{var a;const o=r.target.closest("[data-job]");o&&((a=e.chooseJob)==null||a.call(e,+o.dataset.job),o.blur())}}render(t,e){var u,d,h;const i=["offers","summary"].includes(t.mode),s=t.mode==="title",r=!s&&t.paused;if(this.el["title-card"].hidden=!s,this.el["offers-card"].hidden=t.mode!=="offers"||r,this.el["summary-card"].hidden=t.mode!=="summary"||r,this.el["flight-hud"].hidden=s||i||r,this.el["pause-card"].hidden=!r,e.timeRemaining!==void 0){const f=Math.max(0,Math.min(1,e.timeRemaining/360));this.el["sand-top"].setAttribute("height",(18*f).toFixed(1));const g=18*(1-f);this.el["sand-bottom"].setAttribute("height",g.toFixed(1)),this.el["sand-bottom"].setAttribute("y",(42-g).toFixed(1))}this.el.hourglass.classList.toggle("pulse",e.timeRemaining!==void 0&&e.timeRemaining<=60),this.el.hourglass.classList.toggle("empty",e.timeRemaining!==void 0&&e.timeRemaining<=0),this.el["start-btn"].innerHTML=`${t.profile.tutorialDone?"Start a delivery day":"Learn to fly"} <span>→</span>`,this.el["target-name"].textContent=e.targetName,this.el["target-distance"].textContent=e.targetDistance>0?`${Math.round(e.targetDistance)} m away`:"Right here",this.el["target-label"].textContent=(u=t.run)!=null&&u.returning?"Return home":"Next delivery",this.el["target-arrow"].style.transform=`rotate(${e.targetBearing??0}deg)`,this.el["speed-value"].textContent=String(Math.round(e.speed)),this.el["audio-btn"].classList.toggle("is-muted",e.muted),this.el["audio-btn"].setAttribute("aria-label",e.muted?"Unmute audio":"Mute audio"),this.el["quality-btn"].innerHTML=`Quality: <b>${e.lowQuality?"Low":"High"}</b>`,this.el["motion-btn"].innerHTML=`Motion: <b>${e.reducedMotion?"Low":"Full"}</b>`,this.el["tutorial-text"].textContent=e.status||t.message||"Let’s take the scenic route!";const o=e.status||t.message||"",a=_1(this.tip,t.mode,t.tutorialStage,e.status,o,e.timeRemaining);this.tip=a.next,this.el["tutorial-bubble"].hidden=a.hidden,this.el["flight-earnings"].textContent=Ts(((d=t.run)==null?void 0:d.earnings)??0),this.el["offer-earnings"].textContent=Ts(((h=t.run)==null?void 0:h.earnings)??0),this.el["offer-banked"].textContent=Ts(t.profile.coins),this.renderOffers(t);const c=t.summary,l=(c==null?void 0:c.success)??!1;this.el["summary-heading"].textContent=l?"A lovely landing.":"Rescued from nightfall.",this.el["summary-copy"].textContent=l?`You banked ${Ts((c==null?void 0:c.earnings)??0)} after ${(c==null?void 0:c.deliveries)??0} deliveries.`:"The unbanked satchel was lost, but tomorrow brings another chance.",this.el["summary-deliveries"].textContent=String((c==null?void 0:c.deliveries)??0),this.el["summary-earnings"].textContent=Ts((c==null?void 0:c.earnings)??0),this.el["next-day-btn"].innerHTML=`${l?"Another day":"Back home"} <span>→</span>`,this.previousRevision!==t.revision&&(this.el["pause-reason"].textContent=t.pauseReason||"Rest your wings whenever you need.",this.previousRevision=t.revision)}renderOffers(t){var s,r;if(t.mode!=="offers")return;this.el["return-home-btn"].hidden=(((s=t.run)==null?void 0:s.deliveries)??0)===0;const e=(((r=t.run)==null?void 0:r.offers)??[]).slice(0,2),i=e.map(o=>`${o.to}:${o.parcel}:${o.payout}`).join("|");i!==this.offersKey&&(this.offersKey=i,this.el["offer-list"].innerHTML=e.map((o,a)=>{const c=Pe.find(u=>u.id===o.to),l=c?Math.hypot(c.position.x-t.player.position.x,c.position.z-t.player.position.z):0;return`<button class="offer-button" data-job="${a}"><span><b>${(c==null?void 0:c.name)??o.to}</b><small>${l<115?"Short":"Long"} route · ${o.parcel} · ${Math.round(l)} m</small></span><strong>${Ts(o.payout)} <i>→</i></strong></button>`}).join(""))}}class y1{constructor(t,e,i=()=>!0){lt(this,"keys",new Set);lt(this,"stick",{x:0,y:0});lt(this,"stickPointer",null);lt(this,"cutPending",!1);lt(this,"keydown");lt(this,"keyup");lt(this,"canvas");lt(this,"joystick");lt(this,"stickEnabled");this.canvas=t,this.stickEnabled=i,this.keydown=s=>{if(this.inControl(s.target))return;const r=s.key.toLowerCase();["arrowleft","arrowright","arrowup","arrowdown","w","a","s","d","q","e"," ","enter","escape","p","f"].includes(r)&&s.preventDefault(),!s.repeat&&r===" "&&e.hover(),!s.repeat&&r==="enter"&&e.interact(),!s.repeat&&(r==="escape"||r==="p")&&e.pause(),!s.repeat&&r==="f"&&e.fullscreen(),this.keys.add(r)},this.keyup=s=>this.keys.delete(s.key.toLowerCase()),window.addEventListener("keydown",this.keydown),window.addEventListener("keyup",this.keyup),t.addEventListener("blur",()=>this.clear()),this.joystick=document.querySelector("#joystick")||void 0,this.joystick&&(this.joystick.hidden=!0),this.bindTouch()}sample(){const t=(a,c)=>Number(this.keys.has(a)||this.keys.has(c)),e=t("arrowright","d")-t("arrowleft","a")+this.stick.x,i=t("arrowup","w")-t("arrowdown","s")-this.stick.y,s=this.stickPointer!==null,r=t("e","e")-t("q","q")+(s?1:0),o=this.cutPending;return this.cutPending=!1,{turn:Math.max(-1,Math.min(1,e)),climb:Math.max(-1,Math.min(1,i)),throttle:Math.max(-1,Math.min(1,r)),cutThrottle:o}}clear(){this.keys.clear(),this.stickPointer=null,this.stick.x=this.stick.y=0,this.cutPending=!1,this.joystick&&(this.joystick.style.removeProperty("--stick-x"),this.joystick.style.removeProperty("--stick-y"),this.joystick.classList.remove("is-dragging"),this.joystick.hidden=!0)}dispose(){window.removeEventListener("keydown",this.keydown),window.removeEventListener("keyup",this.keyup),this.clear()}inControl(t){return t instanceof Element&&!!t.closest('input, button, select, textarea, [contenteditable="true"]')}bindTouch(){if(!this.joystick)return;const t=this.joystick,e=o=>{const a=t.getBoundingClientRect(),c=a.width*.34,l=o.clientX-(a.left+a.width/2),u=o.clientY-(a.top+a.height/2),d=Math.max(c,Math.hypot(l,u));this.stick.x=l/d,this.stick.y=u/d,t.style.setProperty("--stick-x",`${this.stick.x*c}px`),t.style.setProperty("--stick-y",`${this.stick.y*c}px`)},i=o=>{if(o.pointerType==="mouse"||this.stickPointer!==null||!this.stickEnabled())return;this.stickPointer=o.pointerId;try{this.canvas.setPointerCapture(o.pointerId)}catch{}const a=t.offsetWidth/2||56;t.style.left=`${o.clientX-a}px`,t.style.top=`${o.clientY-a}px`,t.hidden=!1,t.classList.add("is-dragging"),e(o)},s=o=>{o.pointerId===this.stickPointer&&e(o)},r=o=>{o.pointerId===this.stickPointer&&(this.stickPointer=null,this.stick.x=this.stick.y=0,t.style.removeProperty("--stick-x"),t.style.removeProperty("--stick-y"),t.classList.remove("is-dragging"),t.hidden=!0,this.cutPending=!0)};this.canvas.addEventListener("pointerdown",i),this.canvas.addEventListener("pointermove",s),this.canvas.addEventListener("pointerup",r),this.canvas.addEventListener("pointercancel",r),this.canvas.addEventListener("lostpointercapture",r)}}class S1{constructor(t,e){lt(this,"root");lt(this,"key","");this.actions=e,this.root=document.createElement("section"),this.root.className="home-interface",t.append(this.root),this.root.addEventListener("click",i=>{const s=i.target.closest("button");s&&(s.dataset.action==="interact"?e.interact():s.dataset.action==="close"?e.close():s.dataset.action==="start"?e.start():s.dataset.upgrade?e.upgrade(s.dataset.upgrade):s.dataset.furnish&&e.furnish(s.dataset.furnish),s.blur())})}render(t){if(this.root.hidden=t.mode!=="home"||t.paused,this.root.hidden)return;const e=pl(t),i=JSON.stringify([t.homePanel,e==null?void 0:e.id,t.profile.coins,t.profile.upgrades,t.profile.furniture,t.message]);if(i===this.key)return;this.key=i;const s=t.profile,r=`<div class="eyebrow">MEG'S ROOM</div><h2>Welcome home, Meg.</h2><p class="home-wallet">${s.coins} coins saved · ${s.furniture.length}/6 cozy touches</p>`,o=`<button class="context-button" data-action="interact" ${e?"":"disabled"}>${e?`Visit ${e.name}`:"Explore your room"} <kbd>Enter</kbd></button>`;if(t.homePanel==="none"){const c=`<aside class="room-guide panel">${r}<p>Walk to the Job Board, Broom Workshop, or Decor Corner.</p>${o}</aside>`;this.root.innerHTML=`${c}${Yf(s)?'<div class="completion-ribbon">✦ Every little corner feels like home. Keep flying, little witch.</div>':""}`;return}let a="";t.homePanel==="jobs"&&(a='<div class="eyebrow">A NEW DELIVERY DAY</div><h2>The town is waiting.</h2><p>Choose your first delivery — pick the route that suits you. You have eight minutes to make deliveries and return home. Anything still in your satchel at nightfall will be lost.</p><button class="primary-button" data-action="start">See today’s deliveries →</button>'),t.homePanel==="brooms"&&(a=`<div class="eyebrow">THE BROOM STAND · ${s.coins} COINS</div><h2>A little more magic.</h2><div class="shop-list">${["speed","handling","braking"].map(c=>{const l=s.upgrades[c],u=l===0?60:120,d={speed:"Fly 10% faster per level",handling:"Turn 20% more responsively per level",braking:"Slow down 20% faster per level"}[c];return`<button data-upgrade="${c}" ${l===2||s.coins<u?"disabled":""}><span><b>${c[0].toUpperCase()+c.slice(1)}</b><small>${d} · ${l}/2</small></span><strong>${l===2?"Mastered":`${u} coins`}</strong></button>`}).join("")}</div>`),t.homePanel==="decor"&&(a=`<div class="eyebrow">THE HOME CATALOGUE · ${s.coins} COINS</div><h2>Make yourself at home.</h2><div class="shop-list">${dl.map(c=>`<button data-furnish="${c.id}" ${s.furniture.includes(c.id)||s.coins<c.cost?"disabled":""}><span><b>${c.name}</b><small>${c.description}</small></span><strong>${s.furniture.includes(c.id)?"At home":`${c.cost} coins`}</strong></button>`).join("")}</div>`),t.homePanel==="cat"&&(a='<div class="eyebrow">PUMPKIN’S CORNER</div><h2>A very good copilot.</h2><p>Pumpkin leans into your hand and purrs. The best part of any delivery day is coming home together.</p><div class="purr">♡ purr… purr… ♡</div>'),this.root.innerHTML=`<section class="menu-card panel room-menu">${a}<button class="secondary-button" data-action="close">Back to your room</button></section>`}}function Af(n,t,e){return t?!1:n==="flight"||n==="tutorial"?!0:n==="home"&&e==="none"}function Rf(n){return n.haloFade>0||n.descent!=null||n.drop!=null}class b1{constructor(t){lt(this,"root");this.root=document.createElement("div"),this.root.className="touch-controls",this.root.id="touch-controls",this.root.innerHTML='<div id="joystick" class="joystick" hidden><i></i></div>',t.append(this.root)}render(t){this.root.hidden=Rf(t)||!Af(t.mode,t.paused,t.homePanel)}}const To="megs-delivery-save-v1",Ao="megs-delivery-save-lock-v1",w1=3e4,E1=["title","tutorial","flight","offers","home","summary"],T1=["none","jobs","brooms","decor","cat"],ul=new Set(Pe.map(n=>n.id)),nd=new Set(["rug","plant","shelf","lamp","cushion","cat-tree"]),A1=new Set([20,35,50]),R1=1e5,qn=n=>typeof n=="object"&&n!==null&&!Array.isArray(n),dn=(n,t=-1/0,e=1/0)=>typeof n=="number"&&Number.isFinite(n)&&n>=t&&n<=e,Un=(n,t=0,e=Number.MAX_SAFE_INTEGER)=>Number.isInteger(n)&&dn(n,t,e),qi=(n,t=160)=>typeof n=="string"&&n.length<=t,id=(n,t=500)=>qn(n)&&dn(n.x,-t,t)&&dn(n.y,-t,t)&&dn(n.z,-t,t);function sd(n){return!qn(n)||!qi(n.from,64)||!qi(n.to,64)||!ul.has(n.from)||!ul.has(n.to)||n.from===n.to||!A1.has(n.payout)||!qi(n.label,80)||!qi(n.parcel,100)?null:{from:n.from,to:n.to,payout:n.payout,label:n.label,parcel:n.parcel}}function C1(n){return!qn(n)||!Un(n.coins)||!qn(n.upgrades)||!Un(n.upgrades.speed,0,2)||!Un(n.upgrades.handling,0,2)||!Un(n.upgrades.braking,0,2)||!Array.isArray(n.furniture)||n.furniture.length>nd.size||!n.furniture.every(t=>typeof t=="string"&&nd.has(t))||new Set(n.furniture).size!==n.furniture.length||typeof n.tutorialDone!="boolean"||!Un(n.runs)||!Un(n.deliveries)?null:{coins:n.coins,upgrades:{speed:n.upgrades.speed,handling:n.upgrades.handling,braking:n.upgrades.braking},furniture:[...n.furniture],tutorialDone:n.tutorialDone,runs:n.runs,deliveries:n.deliveries}}function P1(n){if(n===null)return null;if(!qn(n)||!Un(n.seed,-Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)||!dn(n.elapsed,0,360)||!dn(n.earnings,0)||!Un(n.deliveries)||typeof n.returning!="boolean"||!qi(n.lastStop,64)||!ul.has(n.lastStop)||!Array.isArray(n.offers)||n.offers.length>2)return;const t=n.job===null?null:sd(n.job),e=n.offers.map(sd);if(!(n.job!==null&&!t||e.some(i=>!i)||new Set(e.map(i=>i.to)).size!==e.length))return{seed:n.seed,elapsed:n.elapsed,earnings:n.earnings,deliveries:n.deliveries,job:t,offers:e,returning:n.returning,lastStop:n.lastStop}}function rd(n){if(typeof n!="string"||n.length>R1)return null;let t;try{t=JSON.parse(n)}catch{return null}if(!qn(t)||t.version!==1||!qn(t.state))return null;const e=t.state;if(!E1.includes(e.mode)||!qn(e.player)||!id(e.player.position)||!dn(e.player.yaw)||!dn(e.player.pitch,-Math.PI/2,Math.PI/2)||!dn(e.player.speed,0,30)||!dn(e.player.throttle,0,30)||typeof e.player.hover!="boolean"||!id(e.player.velocity,50))return null;const i=C1(e.profile),s=P1(e.run),r=e.homeFacing===void 0?0:e.homeFacing,o=e.homePanel===void 0?"none":e.homePanel;if(!i||s===void 0||typeof e.paused!="boolean"||!qi(e.pauseReason)||!qi(e.message,500)||!Un(e.tutorialStage,0,10)||!qn(e.homePosition)||!dn(e.homePosition.x)||!dn(e.homePosition.z)||!dn(r,-10,10)||!T1.includes(o)||!Un(e.revision))return null;let a=null;if(e.summary!==null){if(!qn(e.summary)||typeof e.summary.success!="boolean"||!dn(e.summary.earnings,0)||!Un(e.summary.deliveries))return null;a={success:e.summary.success,earnings:e.summary.earnings,deliveries:e.summary.deliveries}}const c=e.mode;if((c==="title"||c==="tutorial"||c==="home"||c==="summary")&&s!==null||c==="flight"&&(!s||!s.job&&!s.returning)||c==="offers"&&(!s||s.job!==null||s.returning||s.offers.length!==2)||c==="summary"&&!a||c!=="summary"&&a||c==="home"&&(Math.abs(e.homePosition.x)>8||Math.abs(e.homePosition.z)>6))return null;const l={position:{...e.player.position},yaw:e.player.yaw,pitch:e.player.pitch,speed:e.player.speed,throttle:e.player.throttle,hover:!1,velocity:{...e.player.velocity},brakeHold:e.player.brakeHold===!0},u={mode:c,player:l,profile:i,run:s,paused:e.paused,pauseReason:e.pauseReason,message:e.message,tutorialStage:e.tutorialStage,homePosition:{x:e.homePosition.x,z:e.homePosition.z},homeFacing:r,homePanel:o,summary:a,revision:e.revision};return u.drop=null,u.descent=null,u.haloFade=0,(u.mode==="tutorial"||u.mode==="flight"||u.mode==="offers")&&(u.paused=!0,u.pauseReason="Welcome back"),(u.mode==="title"||u.mode==="home")&&(u.paused=!1,u.pauseReason=""),u}function I1(n){return JSON.stringify({version:1,state:n})}class L1{constructor(){lt(this,"releaseLock");lt(this,"generation",0);lt(this,"writable",!1);lt(this,"status","");lt(this,"memory");lt(this,"tabId",`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`)}get message(){return this.status}get canSave(){return this.writable}writeLock(t){try{t.setItem(Ao,JSON.stringify({tabId:this.tabId,timestamp:Date.now()}))}catch{}}async acquire(){var s;this.release(),++this.generation;const t=this.storage();if(!t)return this.session("Saved games are unavailable in this browser.");try{const r=t.getItem(Ao);if(r!==null)try{const o=JSON.parse(r),a=typeof o.timestamp=="number"?Date.now()-o.timestamp:1/0;if(typeof o.tabId=="string"&&o.tabId!==this.tabId&&a<w1)return{kind:"readonly",message:"Saved game is open in another tab. Retry after closing it."}}catch{}this.writeLock(t),this.releaseLock=()=>{this.releaseLock=void 0;try{const o=t.getItem(Ao);o!==null&&JSON.parse(o).tabId===this.tabId&&t.removeItem(Ao)}catch{}this.writable=!1}}catch{return this.session("Saved games are unavailable in this browser.")}let e;try{e=t.getItem(To)}catch{return(s=this.releaseLock)==null||s.call(this),this.session("Saved games are unavailable in this browser.")}const i=e===null?void 0:rd(e)??void 0;return e!==null&&!i?(this.status="Saved game could not be read. It was left untouched.",{kind:"invalid",message:this.status}):(this.writable=!0,this.memory=i,this.status="Saved game ready.",{kind:"ready",state:i,message:this.status})}save(t){if(!this.writable)return!1;const e=this.storage();if(!e)return this.writable=!1,this.status="Saving is unavailable in this browser.",!1;try{return e.setItem(To,I1(t)),this.writeLock(e),this.memory=t,this.status="Saved.",!0}catch{return this.memory=t,this.writable=!1,this.status="Could not save; progress remains in this tab.",!1}}release(){var t;this.generation++,(t=this.releaseLock)==null||t.call(this),this.writable=!1}continueSession(){this.release(),this.memory=void 0,this.status="Continuing with a fresh session."}discardUnreadable(){try{const t=this.storage(),e=t==null?void 0:t.getItem(To);e!=null&&!rd(e)&&(t==null||t.removeItem(To))}catch{}this.writable=!0,this.memory=void 0,this.status="Discarded the unreadable save."}storage(){try{return typeof localStorage>"u"?void 0:localStorage}catch{return}}session(t,e){return this.writable=!1,this.memory=e,this.status=t,{kind:"session",state:e,message:t}}}class D1{constructor(){lt(this,"context");lt(this,"master");lt(this,"ambience");lt(this,"ambienceSources",[]);lt(this,"tones",new Set);lt(this,"muted",!0);lt(this,"disposed",!1);lt(this,"snapshot");lt(this,"nextNote",0);lt(this,"lastActive",!1);lt(this,"operationPending",!1)}setMuted(t){this.disposed||(this.muted=t,!(!t&&!this.ensureContext())&&this.reconcile())}update(t,e){const i=this.snapshot,s=this.takeSnapshot(t);this.snapshot=s,this.lastActive=!(e||t.paused||typeof document<"u"&&document.hidden),!(this.muted||this.disposed||!this.context)&&(this.reconcile(),!(!this.canPlay()||this.context.state!=="running")&&(this.playMelody(),i&&(s.deliveries>i.deliveries&&this.deliveryCue(),s.coins<i.coins&&(s.upgrades!==i.upgrades||s.furniture!==i.furniture)&&this.purchaseCue(),i.homePanel!=="cat"&&s.homePanel==="cat"&&this.purrCue())))}dispose(){if(!this.disposed){this.disposed=!0,this.lastActive=!1,this.clearAmbience();for(const t of this.tones){try{t.stop()}catch{}t.disconnect()}this.tones.clear(),this.context&&this.context.state!=="closed"&&this.context.close().catch(()=>{}),this.context=void 0,this.master=void 0}}debugState(){var t;return{context:((t=this.context)==null?void 0:t.state)??"unavailable",muted:this.muted}}ensureContext(){if(this.context)return this.context;const t=typeof window>"u"?void 0:window.AudioContext||window.webkitAudioContext;if(t)try{const e=new t,i=e.createGain();return i.gain.value=1e-4,i.connect(e.destination),this.context=e,this.master=i,e}catch{return}}canPlay(){return!this.disposed&&!this.muted&&this.lastActive}reconcile(){const t=this.context;if(!t||t.state==="closed")return;const e=this.canPlay();if(e&&t.state==="running"){this.startAmbience();return}if(!e&&this.master){const s=t.currentTime;this.master.gain.cancelScheduledValues(s),this.master.gain.setTargetAtTime(1e-4,s,.025)}if(this.operationPending||(e?t.state!=="suspended":t.state!=="running"))return;this.operationPending=!0,(e?t.resume.bind(t):t.suspend.bind(t))().catch(()=>{}).then(()=>{this.operationPending=!1,this.canPlay()&&t.state==="running"&&this.startAmbience(),this.reconcile()})}startAmbience(){const t=this.context,e=this.master;if(!t||!e||t.state!=="running"||!this.canPlay())return;const i=t.currentTime;if(e.gain.cancelScheduledValues(i),e.gain.setTargetAtTime(.14,i,.08),this.ambience)return;const s=t.createGain(),r=t.createOscillator(),o=t.createOscillator(),a=t.createGain();s.gain.value=.035,s.connect(e),r.type="sine",r.frequency.value=82,o.type="sine",o.frequency.value=.09,a.gain.value=11,o.connect(a).connect(r.frequency),r.connect(s),r.start(),o.start(),this.ambience=s,this.ambienceSources=[r,o]}clearAmbience(){var t;for(const e of this.ambienceSources){try{e.stop()}catch{}e.disconnect()}this.ambienceSources=[],(t=this.ambience)==null||t.disconnect(),this.ambience=void 0}playMelody(){const t=this.context;if(!t||t.currentTime<this.nextNote)return;const e=[261.63,329.63,392,523.25,440,329.63];this.tone(e[Math.floor(t.currentTime*1.7%e.length)],.11,.045,"sine"),this.nextNote=t.currentTime+1.45}deliveryCue(){this.tone(659.25,.08,.09,"triangle"),this.tone(783.99,.19,.07,"triangle",.09)}purchaseCue(){this.tone(523.25,.06,.08,"sine"),this.tone(783.99,.16,.075,"sine",.07)}purrCue(){this.tone(110,.48,.055,"sine"),this.tone(164.81,.42,.035,"sine",.08)}tone(t,e,i,s,r=0){const o=this.context,a=this.master;if(!o||!a||o.state!=="running"||!this.canPlay())return;const c=o.currentTime+r,l=o.createOscillator(),u=o.createGain();l.type=s,l.frequency.value=t,u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(i,c+.018),u.gain.exponentialRampToValueAtTime(1e-4,c+e),l.connect(u).connect(a),this.tones.add(l),l.onended=()=>{this.tones.delete(l),l.disconnect(),u.disconnect()},l.start(c),l.stop(c+e+.03)}takeSnapshot(t){var e;return{deliveries:Math.max(t.profile.deliveries,((e=t.run)==null?void 0:e.deliveries)??0),coins:t.profile.coins,upgrades:`${t.profile.upgrades.speed}:${t.profile.upgrades.handling}:${t.profile.upgrades.braking}`,furniture:t.profile.furniture.join("|"),homePanel:t.homePanel}}}const aa=document.querySelector("#game"),Fr=document.querySelector("#app"),N1=new URLSearchParams(location.search),Yl=N1.get("test")==="1";let It=_l(),No=!0,jo=matchMedia("(pointer: coarse)").matches;const Zl=matchMedia("(pointer: coarse)").matches;It.coarsePointer=Zl;let Sr=matchMedia("(prefers-reduced-motion: reduce)").matches,Nr,Te,ci=0,Uo=0,Vs=!1;const Us=new L1,ca=new D1;let Ie=!1,li="loading",Fs="Opening your little world…",br=null,od;function U1(n,t=8e3){br=n,clearTimeout(od),od=setTimeout(()=>{br=null,ye(0)},t)}let nc=0;function Or(n="Take a little breather."){vd(It,!0,n),Te==null||Te.clear(),ci=0,Ve(),ye(0)}function hl(){!Ie||document.hidden||Vs||(vd(It,!1),Te==null||Te.clear(),ci=0,Uo=performance.now(),Ve())}function Cf(){var n,t,e;document.fullscreenElement?(n=document.exitFullscreen)==null||n.call(document):(e=(t=document.documentElement).requestFullscreen)==null||e.call(t).catch(()=>{})}const F1=new M1(Fr,{start(){var n;Ie&&(It.profile.tutorialDone?rc(It):kp(It),Te==null||Te.clear(),(n=document.activeElement)==null||n.blur(),Ve(),ye(0))},pause:()=>Or(),resume:hl,unstuck(){if(!Ie)return;const n=It.player.position;let t=Pe[0],e=1/0;for(const i of Pe){const s=(i.position.x-n.x)**2+(i.position.z-n.z)**2;s<e&&(e=s,t=i)}It.player.position={x:t.position.x,y:t.position.y+5,z:t.position.z},It.player.velocity={x:0,y:0,z:0},It.player.speed=0,It.player.throttle=0,hl(),Te==null||Te.clear(),Ve(),ye(0)},mute(){No=!No,ca.setMuted(No),ye(0)},quality(){jo=!jo,ye(0)},motion(){Sr=!Sr,ye(0)},fullscreen:Cf,chooseJob(n){Ie&&(Xp(It,n),Te.clear(),Ve(),ye(0))},returnHome(){Ie&&(qp(It),Te.clear(),Ve(),ye(0))},nextDay(){Ie&&(rc(It),Te.clear(),Ve(),ye(0))}}),O1=new S1(Fr,{interact(){Ie&&(Md(It),Te.clear(),Ve(),ye(0))},close(){Ie&&(cd(It),Te.clear(),Ve(),ye(0))},start(){Ie&&(Wp(It,Yl?42:void 0),Te.clear(),Ve(),ye(0))},upgrade(n){Ie&&(Xf(It,n),Ve(),ye(0))},furnish(n){Ie&&(qf(It,n),Ve(),ye(0))}}),z1=new b1(Fr),oi=document.createElement("aside");oi.className="save-status";oi.setAttribute("aria-live","polite");Fr.append(oi);oi.addEventListener("click",n=>{const t=n.target.closest("button");(t==null?void 0:t.dataset.save)==="retry"&&$l()});try{Nr=new m1(aa)}catch{throw Fr.innerHTML='<main class="compatibility"><h1>A little more sky, please.</h1><p>Meg needs a browser with WebGL 2 and hardware acceleration. Try a current browser with graphics acceleration enabled.</p></main>',new Error("WebGL 2 is unavailable.")}Te=new y1(aa,{hover:()=>{Ie&&(Hp(It),Ve(),ye(0))},interact:()=>{!Ie||It.mode!=="home"||(Md(It),Ve(),ye(0))},pause:()=>{Ie&&(It.mode==="home"&&It.homePanel!=="none"?(cd(It),Ve(),ye(0)):It.paused?hl():Or())},fullscreen:Cf},()=>Zl&&!Rf(It)&&Af(It.mode,It.paused,It.homePanel));function Ve(){!Ie||!Us.canSave||Us.save(It)||(li="session",Fs=Us.message)}async function $l(){Ie=!1,li="loading",Fs="Opening your little world…",ye(0);const n=await Us.acquire();if(n.kind==="invalid"){Us.discardUnreadable(),It=_l(),It.coarsePointer=Zl,Ie=!0,li="ready",Fs="",Ve(),U1("Your saved game could not be read, so it was discarded and a new game was started."),Te==null||Te.clear(),ci=0,ye(0);return}li=n.kind,Fs=n.message,n.state&&(It=n.state),Ie=n.kind==="ready"||n.kind==="session",Te==null||Te.clear(),ci=0,ye(0)}function ye(n){if(ca.update(It,!Ie||Vs),document.body.classList.toggle("reduced-motion",Sr),!Nr||Vs)return;Nr.render(It,n,{reducedMotion:Sr,lowQuality:jo});const t=Sd(It)??Pe[0];F1.render(It,{muted:No,lowQuality:jo,reducedMotion:Sr,targetName:t.name,targetDistance:Math.hypot(t.position.x-It.player.position.x,t.position.z-It.player.position.z),targetBearing:Yp(It.player.position,t.position,It.player.yaw),speed:It.player.speed,status:"",timeRemaining:It.run?Math.max(0,360-It.run.elapsed):void 0}),O1.render(It),z1.render(It),Ie||(document.querySelector(".home-interface").hidden=!0),It.mode==="home"&&(document.querySelector("#flight-hud").hidden=!0),document.querySelector("#start-btn").disabled=!Ie,It.profile.tutorialDone&&(document.querySelector("#start-btn").innerHTML="Come on in <span>→</span>"),document.querySelector("#next-day-btn").innerHTML="Back to your room <span>→</span>",oi.hidden=li==="ready"&&br===null;const e=li+Fs+(br??"");oi.dataset.key!==e&&(oi.dataset.key=e,oi.textContent=li==="ready"?br??"":Fs,li==="readonly"&&oi.insertAdjacentHTML("beforeend",'<br><button data-save="retry">Retry</button>'))}function Pf(n){if(!Ie||It.paused||document.hidden||Vs){ci=0,ye(0);return}const t=It.mode;for(ci+=Math.max(0,n)/1e3;ci+1e-10>=1/60;)Qp(It,Te.sample(),1/60),ci-=1/60;nc+=n,(nc>=5e3||t!==It.mode)&&(Ve(),nc=0),ye(Math.min(n/1e3,.1))}function If(n){const t=Uo?Math.min(n-Uo,100):0;Uo=n,Yl||Pf(t),requestAnimationFrame(If)}window.addEventListener("resize",()=>{Nr.resize(),ye(0)});document.addEventListener("visibilitychange",()=>{document.hidden&&Or("Welcome back. Ready to fly?")});window.addEventListener("blur",()=>{Te.clear(),It.mode!=="title"&&Or()});aa.addEventListener("webglcontextlost",n=>{n.preventDefault(),Or("The sky is taking a moment."),Vs=!0});aa.addEventListener("webglcontextrestored",()=>{Vs=!1,ye(0)});window.addEventListener("pagehide",()=>{Ve(),Ie=!1,ca.update(It,!0),Us.release()});window.addEventListener("pageshow",n=>{n.persisted&&$l()});Object.assign(window,{advanceTime:n=>Pf(n),render_game_to_text:()=>{var n,t;return JSON.stringify({coordinates:"x right/east, y up, z south; yaw 0 faces -z",mode:It.mode,paused:It.paused,player:It.player,tutorialStage:It.tutorialStage,message:It.message,run:It.run,profile:It.profile,stops:Pe,nearby:((n=wr(It))==null?void 0:n.id)??null,homePosition:It.homePosition,homePanel:It.homePanel,station:(t=pl(It))==null?void 0:t.id,saveKind:li})}});Yl&&Object.assign(window,{__game:{get state(){return It},get ready(){return Ie},reset(){It=_l(),ci=0,ye(0)},draw:()=>ye(0),audio:()=>ca.debugState(),persist:Ve,renderer:()=>Nr}});ye(0);requestAnimationFrame(If);$l();
