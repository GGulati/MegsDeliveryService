var Hf=Object.defineProperty;var Gf=(n,t,e)=>t in n?Hf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var at=(n,t,e)=>Gf(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const ld=[{id:"jobs",name:"Job Board",x:-5,z:-3},{id:"brooms",name:"Broom Workshop",x:5,z:-3},{id:"decor",name:"Decor Corner",x:-5,z:3},{id:"cat",name:"Pumpkin",x:4,z:3}],ml=[{id:"rug",name:"Woven Rug",cost:30,description:"A soft landing for tired feet."},{id:"plant",name:"Moonleaf Plant",cost:40,description:"A little green for Meg's room."},{id:"shelf",name:"Parcel Shelf",cost:50,description:"A home for souvenirs and parcels."},{id:"lamp",name:"Warm Lamp",cost:60,description:"A cozy glow after a long shift."},{id:"cushion",name:"Window Cushion",cost:70,description:"The perfect reading nook."},{id:"cat-tree",name:"Cat Tree",cost:80,description:"Pumpkin's new favorite perch."}],gl=[{id:"speed",name:"Swift Bristles",description:"Raises top speed by 10% per level."},{id:"handling",name:"Responsive Handle",description:"Raises turn rate by 20% per level."},{id:"braking",name:"Cloud Brake",description:"Raises hover braking by 20% per level."}],rc=7.5,oc=5.5,Vf=2.4,Wf=3.5,Vr=(n,t,e)=>Math.max(t,Math.min(e,n));function ac(n){n.mode="home",n.run=null,n.paused=!1,n.pauseReason="",n.homePosition={x:0,z:3},n.homeFacing=0,n.homePanel="none",n.message="Back at Meg's room.",n.revision++}function ud(n){n.mode!=="home"||n.homePanel==="none"||(n.homePanel="none",n.revision++)}function xl(n){if(n.mode==="home")return ld.find(t=>Math.hypot(n.homePosition.x-t.x,n.homePosition.z-t.z)<=Vf)}function Xf(n){if(n.mode!=="home"||n.paused)return;const t=xl(n);t&&(n.homePanel=t.id,n.message=t.id==="cat"?"Pumpkin purrs.":`${t.name} opened.`,n.revision++)}function qf(n,t,e){if(n.mode!=="home"||n.paused||n.homePanel!=="none"||!Number.isFinite(e)||e<=0)return;const i=Vr(t.turn,-1,1),s=-Vr(t.climb,-1,1),r=Math.hypot(i,s);if(r>0){const o=Wf*e/Math.max(1,r);n.homePosition.x=Vr(n.homePosition.x+i*o,-rc,rc),n.homePosition.z=Vr(n.homePosition.z+s*o,-oc,oc),n.homeFacing=Math.atan2(i,s)}n.revision++}function Yf(n,t){if(n.paused||n.mode!=="home"||n.homePanel!=="brooms"||!Kf(t))return!1;const e=n.profile.upgrades[t];if(e>=2)return!1;const i=e===0?60:120;return n.profile.coins<i?!1:(n.profile.coins-=i,n.profile.upgrades[t]=e+1,n.message=`${gl.find(s=>s.id===t).name} upgraded.`,n.revision++,!0)}function Zf(n,t){if(n.paused||n.mode!=="home"||n.homePanel!=="decor")return!1;const e=ml.find(i=>i.id===t);return!e||n.profile.furniture.includes(t)||n.profile.coins<e.cost?!1:(n.profile.coins-=e.cost,n.profile.furniture.push(t),n.message=`${e.name} added to the room.`,n.revision++,!0)}function $f(n){return ml.every(t=>n.furniture.includes(t.id))&&gl.every(t=>n.upgrades[t.id]>=2)}function Kf(n){return gl.some(t=>t.id===n)}const hr=230,ge=[-40,-195,40,-155],cs=[[20,-25],[30,-18],[40,-5],[46,12],[50,30],[54,50],[56,70],[60,90],[63,105],[66,120],[70,140],[76,160],[82,180],[88,200],[95,220],[45,220],[40,200],[34,180],[26,160],[16,140],[6,120],[-2,100],[-8,82],[-14,65],[-18,45],[-20,25],[-16,5],[-6,-12],[6,-22]];function ln(n,t){let e=!1;for(let i=0,s=cs.length-1;i<cs.length;s=i++){const r=cs[i][0],o=cs[i][1],a=cs[s][0],c=cs[s][1];o>t!=c>t&&n<(a-r)*(t-o)/(c-o)+r&&(e=!e)}return e}const Jf=24,Qf=8,fu=[[-11,50],[-6,70],[1,90],[49,60],[50,80],[50,120]],jf=[[-11,58],[-6,78],[1,82],[50,68],[50,88],[50,128]],qi=[[-86.5,-191.5,-60,-163.5],[-60,-191.5,-33.5,-163.5]],Pe=[{id:"home",name:"Bakery Attic",subtitle:"Home — borrowed attic",position:{x:-25,y:30,z:-48},color:"#f9cf68"},{id:"clocktower",name:"Clocktower Spire",subtitle:"Old town landmark",position:{x:-50,y:40,z:-48},color:"#f4e5b8"},{id:"cobblers",name:"Cobbler's Corner",subtitle:"Old town shop",position:{x:-88,y:33,z:-88},color:"#e88869"},{id:"tinkers",name:"Tinker's Attic",subtitle:"Old town rooftop",position:{x:-40,y:27,z:-88},color:"#63c7dc"},{id:"bellfounders",name:"Bellfounder's Yard",subtitle:"Old town workshop",position:{x:0,y:27,z:-88},color:"#ad91d1"},{id:"market",name:"Sunset Market",subtitle:"Old town market",position:{x:40,y:28,z:-88},color:"#e88869"},{id:"harbor-cafe",name:"Harbor Cafe",subtitle:"Merchant row cafe",position:{x:5,y:23,z:-48},color:"#63c7dc"},{id:"chandlery",name:"Chandlery Loft",subtitle:"Merchant row shop",position:{x:30,y:23,z:-48},color:"#79b9a0"},{id:"dockmaster",name:"Dockmaster's Office",subtitle:"Harbor docks",position:{x:-80,y:18,z:150},color:"#e88869"},{id:"tavern",name:"Net & Anchor Tavern",subtitle:"Harbor waterfront",position:{x:102,y:20,z:125},color:"#db92a7"},{id:"ferry",name:"Ferry Landing",subtitle:"Harbor pier",position:{x:-55,y:12,z:98},color:"#63c7dc"},{id:"marina",name:"Marina Works",subtitle:"Dockside roof",position:{x:102,y:12,z:70},color:"#79b9a0"},{id:"ropemakers",name:"Ropemaker's Wharf",subtitle:"Harbor wharf",position:{x:102,y:14,z:20},color:"#ad91d1"},{id:"garden-gate",name:"Garden Gate Cottage",subtitle:"Bungalow lanes",position:{x:-115,y:46,z:-178},color:"#79b9a0"},{id:"willow-lane",name:"Willow Lane Bungalow",subtitle:"Bungalow lanes",position:{x:50,y:30,z:-178},color:"#f9cf68"},{id:"cliffside",name:"Cliffside Books",subtitle:"Bungalow lanes",position:{x:68,y:29,z:-178},color:"#db92a7"},{id:"hearthside",name:"Hearthside Cottage",subtitle:"Bungalow lanes",position:{x:-115,y:29,z:-150},color:"#e88869"},{id:"hilltop-manor",name:"Hilltop Manor",subtitle:"Mansion hill",position:{x:-70,y:36,z:-178},color:"#f4e5b8"},{id:"rosewood",name:"Rosewood Villa",subtitle:"Mansion hill",position:{x:-50,y:36,z:-178},color:"#db92a7"},{id:"observatory",name:"Hill Observatory",subtitle:"Observatory rise",position:{x:130,y:53,z:-55},color:"#ad91d1"},{id:"starwatch",name:"Starwatch Dome",subtitle:"Observatory rise",position:{x:140,y:35,z:-90},color:"#63c7dc"},{id:"beacon",name:"Beacon House",subtitle:"Observatory rise",position:{x:122,y:59,z:-63},color:"#f4e5b8"},{id:"lighthouse",name:"Lighthouse Keeper's Cottage",subtitle:"Headland",position:{x:130,y:15,z:140},color:"#f9cf68"}],un=[{min:{x:-37,y:10,z:-60},max:{x:-13,y:28,z:-36},district:"merchant-row"},{min:{x:-94,y:.12,z:136},max:{x:-66,y:16.12,z:164},district:"harbor"},{min:{x:-103,y:10,z:-102},max:{x:-73,y:31,z:-74},district:"old-town"},{min:{x:120,y:0,z:130},max:{x:140,y:13,z:150},district:"lighthouse-headland"},{min:{x:87,y:0,z:110},max:{x:117,y:18,z:140},district:"harbor"},{min:{x:115,y:20,z:-70},max:{x:145,y:51,z:-40},district:"observatory-rise"},{min:{x:-130,y:20,z:-192.5},max:{x:-100,y:44,z:-162.5},district:"bungalow-lanes"},{min:{x:-65,y:0,z:88},max:{x:-45,y:10,z:108},district:"harbor"},{min:{x:-65,y:0,z:38},max:{x:-45,y:12,z:58},district:"harbor"},{min:{x:94,y:0,z:61},max:{x:110,y:10,z:79},district:"harbor"},{min:{x:92,y:0,z:10},max:{x:112,y:12,z:30},district:"harbor"},{min:{x:-50,y:10,z:-98.5},max:{x:-30,y:25,z:-78.5},district:"old-town"},{min:{x:-10,y:10,z:-98.5},max:{x:10,y:25,z:-78.5},district:"old-town"},{min:{x:30,y:10,z:-98.5},max:{x:50,y:26,z:-78.5},district:"old-town"},{min:{x:-50,y:9.19,z:-130.5},max:{x:-30,y:25.19,z:-113.5},district:"old-town"},{min:{x:22.5,y:10,z:-55},max:{x:37.5,y:21,z:-41},district:"merchant-row"},{min:{x:-2.5,y:10,z:-55.5},max:{x:12.5,y:21,z:-40.5},district:"merchant-row"},{min:{x:-80,y:20,z:-187.5},max:{x:-60,y:34,z:-167.5},district:"mansion-hill"},{min:{x:-57.5,y:20,z:-187.5},max:{x:-42.5,y:34,z:-167.5},district:"mansion-hill"},{min:{x:42.5,y:20,z:-185},max:{x:57.5,y:28,z:-170},district:"bungalow-lanes"},{min:{x:60.5,y:20,z:-185},max:{x:75.5,y:27,z:-170},district:"bungalow-lanes"},{min:{x:-122.5,y:19.28,z:-157},max:{x:-107.5,y:27.28,z:-143},district:"bungalow-lanes"},{min:{x:133.5,y:19.26,z:-97.5},max:{x:146.5,y:33.26,z:-82.5},district:"observatory-rise"},{min:{x:-55,y:10,z:-53},max:{x:-45,y:38,z:-43},district:"old-town"},{min:{x:117.5,y:48.5,z:-67.5},max:{x:126.5,y:57,z:-58.5},district:"observatory-rise"},{min:{x:125,y:-.22,z:153},max:{x:135,y:28.78,z:163}}],Wr={harbor:{bodies:[4873579,7043714,6048314,12099704],roofs:[3820117,3095365]},"old-town":{bodies:[13935988,15258808,13219990],roofs:[11951167,4877148]},"merchant-row":{bodies:[11065544,16049320,15247544,15784120],roofs:[9132602,7031338]},"mansion-hill":{bodies:[15790312,10139802],roofs:[3817290]},"bungalow-lanes":{bodies:[8034923,9136970,11033674],roofs:[6048314,4865845]},"observatory-rise":{bodies:[9079442],roofs:[6064762,2767452]},"lighthouse-headland":{bodies:[15266024],roofs:[13948116]}},pu=un.length-1,mu=un.length-3,gu=un.length-2,tp=[{min:{x:15,y:0,z:168},max:{x:100,y:100,z:172}}];function xu(n,t,e,i,s,r,o,a){const c=[],l=o/2;for(let u=0;u<a;u++){const d=u/a,h=(u+1)/a,f=n+(i-n)*d,g=n+(i-n)*h,_=t+(s-t)*d,m=t+(s-t)*h,p=e+(r-e)*d,M=e+(r-e)*h;c.push({min:{x:Math.min(f,g)-l,y:Math.min(p,M)-.5,z:Math.min(_,m)-l},max:{x:Math.max(f,g)+l,y:Math.max(p,M)+.5,z:Math.max(_,m)+l}})}return c}const ep=[{min:{x:-15,y:5.4,z:100-4.4},max:{x:73,y:6.8,z:100+4.4}},...xu(-25,70,0,-15,100,6,8.8,6),...xu(73,100,6,85,85,0,8.8,4)];function np(n){let t=n>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const ip=.5*(Math.sqrt(3)-1),Ks=(3-Math.sqrt(3))/6;class hd{constructor(t){at(this,"perm");const e=np(t),i=new Uint8Array(256);for(let s=0;s<256;s++)i[s]=s;for(let s=255;s>0;s--){const r=Math.floor(e()*(s+1));[i[s],i[r]]=[i[r],i[s]]}this.perm=new Uint8Array(512);for(let s=0;s<512;s++)this.perm[s]=i[s&255]}noise(t,e){const i=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];let s=0,r=0,o=0;const a=(t+e)*ip,c=Math.floor(t+a),l=Math.floor(e+a),u=(c+l)*Ks,d=t-(c-u),h=e-(l-u);let f,g;d>h?(f=1,g=0):(f=0,g=1);const _=d-f+Ks,m=h-g+Ks,p=d-1+2*Ks,M=h-1+2*Ks,y=c&255,v=l&255;let T=.5-d*d-h*h;if(T>=0){T*=T;const x=i[this.perm[y+this.perm[v]]&7];s=T*T*(x[0]*d+x[1]*h)}let A=.5-_*_-m*m;if(A>=0){A*=A;const x=i[this.perm[y+f+this.perm[v+g]]&7];r=A*A*(x[0]*_+x[1]*m)}let w=.5-p*p-M*M;if(w>=0){w*=w;const x=i[this.perm[y+1+this.perm[v+1]]&7];o=w*w*(x[0]*p+x[1]*M)}return 70*(s+r+o)}}const dd=1337,sp=new hd(dd),cc=new hd(dd+1);function fd(n,t,e=5){let i=0,s=.5,r=1;for(let o=0;o<e;o++)i+=s*sp.noise(n*r,t*r),s*=.5,r*=2;return i}function rp(n,t,e,i){const s=cc.noise(n*e+5.2,t*e+1.3),r=cc.noise(n*e+1.7,t*e+9.1);return[n+s*i,t+r*i]}function Fn(n,t,e){const i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)}const _l=[{name:"waterfront",y:0,rects:[[-95,-15,5,175],[50,-35,150,175]]},{name:"midtown",y:10,rects:[[-115,-135,75,-15]]},{name:"upper",y:20,rects:[[-135,-215,135,-135],[55,-135,155,-35]]}];function Gi(n,t){const e=175+cc.noise(n*.01+3.7,8.2)*35,i=Fn(e-15,e+45,t);let s=0;ln(n,t)?s=t<e+25?1:0:(ln(n+6,t)||ln(n-6,t)||ln(n,t+6)||ln(n,t-6))&&t<e+20&&(s=.45);const[r,o]=rp(n,t,.015,18),a=(fd(r*.02,o*.02)*.5+.5)*8,c=Math.hypot(n,t),l=Fn(145,175,c),u=a*l*(1-s);let d=0,h=0;for(const p of _l)for(const[M,y,v,T]of p.rects){const A=Fn(M-20,M+20,n)*(1-Fn(v-20,v+20,n)),w=Fn(y-20,y+20,t)*(1-Fn(T-20,T+20,t)),x=A*w;x>h&&(h=x,d=p.y)}const f=s<.5&&i<.5?1:0,g=d*h+u*(1-h),_=u*(1-f)+g*f,m=Math.min(s*-3.5,i*-12);return{h:_+m,bayT:s,oceanT:i,tierCover:h}}function Ee(n,t){return Gi(n,t).h}const op=[.918,.851,.659],ap=[.498,.682,.431],_u=[.541,.498,.447],cp=[.72,.68,.52];function Xr(n,t,e){return[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e]}function vu(n,t){const{h:e,bayT:i,oceanT:s,tierCover:r}=Gi(n,t);if(e<.2||e>4.5&&r<.5||i>0||s>.05)return!1;const o=1.5,a=(Gi(n+o,t).h-Gi(n-o,t).h)/(2*o),c=(Gi(n,t+o).h-Gi(n,t-o).h)/(2*o);return!(Math.hypot(a,c)>.5)}function lp(n){const t=new Float32Array(n*n),e=new Float32Array(n*n),i=new Float32Array(n*n),s=new Float32Array(n*n),r=440/(n-1);for(let a=0;a<n;a++)for(let c=0;c<n;c++){const l=(c/(n-1)-.5)*440,u=(.5-a/(n-1))*440,d=Gi(l,u),h=a*n+c;t[h]=d.h,e[h]=d.bayT,i[h]=d.oceanT,s[h]=d.tierCover}const o=new Uint8ClampedArray(n*n*4);for(let a=0;a<n;a++)for(let c=0;c<n;c++){const l=a*n+c,u=(c/(n-1)-.5)*440,d=(.5-a/(n-1))*440,h=Math.max(1,Math.round(1.5/r)),f=t[a*n+Math.max(c-h,0)],g=t[a*n+Math.min(c+h,n-1)],_=t[Math.max(a-h,0)*n+c],m=t[Math.min(a+h,n-1)*n+c],p=Math.hypot((g-f)/(2*h*r),(m-_)/(2*h*r)),[M,y,v]=up(t[l],e[l],i[l],p,u,d,s[l]),T=l*4;o[T]=M,o[T+1]=y,o[T+2]=v,o[T+3]=255}return o}function up(n,t,e,i,s,r,o){const a=Math.max(t,Fn(.02,.25,e));let c=Xr(ap,_u,Fn(3,5.5,n)*(1-o));c=Xr(c,op,a*Fn(-1.5,-.3,n));const l=Fn(-.8,-1.6,n);c=Xr(c,cp,l);const u=Fn(.45,.75,i);u>0&&(c=Xr(c,_u,u));const d=1+fd(s*.08+11.3,r*.08+7.9,3)*.07;return[Math.round(c[0]*d*255),Math.round(c[1]*d*255),Math.round(c[2]*d*255)]}const zt=(n,t,e,i,s)=>({id:n,x:t,z:e,y:i,noIntersect:s}),vl=[zt("ww1",-75,10),zt("ww2",-75,70),zt("ww3",-75,130),zt("ww1b",-35,10),zt("ww2b",-35,70),zt("ww3b",-35,130),zt("we1",85,-10),zt("we2",85,50),zt("we3",85,85),zt("we1b",120,-10),zt("we2b",120,50),zt("bl-w",-15,100,6),zt("bl-e",73,100,6),zt("sw1",-75,-8),zt("sw2",-95,-25),zt("sw3",-65,-42),zt("sw4",-90,-58),zt("se1",85,-28),zt("se2",105,-45),zt("se3",75,-60),zt("se4",95,-75),zt("m1",-60,-72),zt("m2",-20,-72),zt("m3",20,-72),zt("m4",60,-72),zt("m5",-60,-105),zt("m6",-20,-105),zt("m7",20,-105),zt("m8",60,-105),zt("uc1",20,-120),zt("uc2",-5,-135),zt("uc3",15,-150),zt("uc2sb1",25,-137,void 0,!0),zt("uc2sb2",-5,-147,void 0,!0),zt("u1",-90,-160),zt("u2",-30,-160),zt("u3",30,-160),zt("u4",90,-160),zt("u5",90,-195),zt("u6",30,-195),zt("u7",-30,-195),zt("u8",-90,-195),zt("ob1",95,-100),zt("ob2",110,-70),zt("mn1",-100,-25),zt("mn2",-68,-25),zt("mn3",-20,-25),zt("mn4",20,-25),zt("mn5",60,-25),zt("ms1",-100,-120),zt("ms2",-60,-120),zt("ms3",-20,-120),zt("ms5",60,-120),zt("ue1",100,-160),zt("ue2",100,-195),zt("ui5",130,-160),zt("ob3",125,-100),zt("wx1",-25,10),zt("wx2",-25,70),zt("wx3",-15,130),zt("ex1",65,-10),zt("ex2",65,50),zt("ex3",65,110,0)],Tt=(n,t,e="street",i)=>({a:n,b:t,kind:e,deckY:i}),Ye=[Tt("ww1","ww2"),Tt("ww2","ww3"),Tt("ww1b","ww2b"),Tt("ww2b","ww3b"),Tt("ww1","ww1b"),Tt("ww2","ww2b"),Tt("ww3","ww3b"),Tt("we1","we2"),Tt("we2","we3"),Tt("we1b","we2b"),Tt("we1","we1b"),Tt("we2","we2b"),Tt("wx2","bl-w"),Tt("bl-w","bl-e","bridge",6),Tt("bl-e","we3"),Tt("ww1","sw1","switchback"),Tt("sw1","sw2","switchback"),Tt("sw2","sw3","switchback"),Tt("sw3","sw4","switchback"),Tt("sw4","m1","switchback"),Tt("we1","se1","switchback"),Tt("se2","se3","switchback"),Tt("se3","se4","switchback"),Tt("se4","m4","switchback"),Tt("m1","m2"),Tt("m2","m3"),Tt("m3","m4"),Tt("m5","m6"),Tt("m6","m7"),Tt("m7","m8"),Tt("m1","m5"),Tt("m2","m6"),Tt("m3","m7"),Tt("m4","m8"),Tt("m3","uc1","switchback"),Tt("uc1","uc2","switchback"),Tt("uc2","uc2sb1","switchback"),Tt("uc2sb1","uc2sb2","switchback"),Tt("uc2sb2","uc3","switchback"),Tt("uc3","u3","switchback"),Tt("se4","ob1"),Tt("ob1","ob2"),Tt("mn1","mn2"),Tt("mn2","mn3"),Tt("mn3","mn4"),Tt("mn4","mn5"),Tt("mn5","se1"),Tt("mn5","m4"),Tt("ms1","ms2"),Tt("ms3","uc1"),Tt("uc1","ms5"),Tt("ms2","m5"),Tt("uc1","m7"),Tt("u1","u2"),Tt("u2","u3"),Tt("u3","u4"),Tt("u4","u5"),Tt("u5","u6"),Tt("u6","u7"),Tt("u7","u8"),Tt("u8","u1"),Tt("u4","ue1"),Tt("ue1","ue2"),Tt("ue2","u5"),Tt("u4","ui5"),Tt("ob1","ob3"),Tt("wx1","wx2"),Tt("wx2","wx3"),Tt("ww1b","wx1"),Tt("ww2b","wx2"),Tt("ww3b","wx3"),Tt("ex1","ex2"),Tt("ex2","ex3"),Tt("we1","ex1"),Tt("we2","ex2")];Ye.filter(n=>n.kind==="bridge").map(n=>[n.a,n.b]);function me(n){const t=vl.find(e=>e.id===n);if(!t)throw new Error(`unknown road node ${n}`);return t}function Ge(n){return{x:n.x,y:n.y??Ee(n.x,n.z),z:n.z}}function hp(){const n=new Map;for(const t of vl)n.set(t.id,[]);for(const t of Ye)n.get(t.a).push(t.b),n.get(t.b).push(t.a);return n}const dp=1836670420,fp=110,_r=32,pp=.07;function fn(n){let t=n>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function mp(n){const t=fn(n),e=[];for(let i=0;i<fp;i++){const s=t()*pp,r=t()*_r,o=t()*_r;e.push({x:r,y:o,alpha:s})}return e}const gp=20260927,Mu=5;function zo(n,t,e,i){const s=n+e/2,r=t+i/2,o=[Ee(n,t),Ee(n+e,t),Ee(n,t+i),Ee(n+e,t+i),Ee(s,r)],a=Math.min(...o);return a<lc?null:{minH:a,maxH:Math.max(...o)}}const yu={harbor:{w:[9,16],d:[8,14],floors:[1,2],bayWindow:!1,palettes:[0]},"old-town":{w:[8,14],d:[8,12],floors:[2,4],bayWindow:!0,palettes:[0]},"merchant-row":{w:[8,14],d:[8,12],floors:[2,3],bayWindow:!0,palettes:[0]},"bungalow-lanes":{w:[8,12],d:[8,12],floors:[1,1],bayWindow:!1,palettes:[1,2,3,4]}},lc=-.4,xp=2.8,_p=.7,ti=xp+_p,qr=2,ls=275,Su=3.4,bu=4.4;function _i(n,t,e,i,s,r,o,a){return n<o&&e>s&&t<a&&i>r}function dr(n,t,e,i,s,r,o,a){const c=e-n,l=i-t,u=o-s,d=a-r,h=c*d-l*u;if(Math.abs(h)<1e-9)return!1;const f=((s-n)*d-(r-t)*u)/h,g=((s-n)*l-(r-t)*c)/h;return f>=0&&f<=1&&g>=0&&g<=1}function wu(n,t,e,i,s,r,o,a){return n>=s&&n<=o&&t>=r&&t<=a||e>=s&&e<=o&&i>=r&&i<=a?!0:dr(n,t,e,i,s,r,o,r)||dr(n,t,e,i,o,r,o,a)||dr(n,t,e,i,o,a,s,a)||dr(n,t,e,i,s,a,s,r)}function da(n,t,e,i,s,r){const o=s-e,a=r-i,c=o*o+a*a,l=c>0?Math.max(0,Math.min(1,((n-e)*o+(t-i)*a)/c)):0,u=e+o*l-n,d=i+a*l-t;return u*u+d*d}function vp(n,t,e,i,s,r,o,a){const c=[[s,r,o,r],[o,r,o,a],[o,a,s,a],[s,a,s,r]];if(n>=s&&n<=o&&t>=r&&t<=a||e>=s&&e<=o&&i>=r&&i<=a)return 0;for(const[u,d,h,f]of c)if(dr(n,t,e,i,u,d,h,f))return 0;let l=1/0;for(const[u,d]of[[s,r],[o,r],[o,a],[s,a]])l=Math.min(l,da(u,d,n,t,e,i));for(const[u,d,h,f]of c)l=Math.min(l,da(n,t,u,d,h,f)),l=Math.min(l,da(e,i,u,d,h,f));return Math.sqrt(l)}function Eu(n,t){for(const e of _l)for(const[i,s,r,o]of e.rects)if(n>=i&&n<r&&t>=s&&t<o)return e}function Tu(n,t,e,i,s,r,o){const a=Math.max(i,Math.min(n,r)),c=Math.max(s,Math.min(t,o)),l=n-a,u=t-c;return l*l+u*u<e*e}function Bo(){const n=fn(gp),t=[],e=un.map(u=>({x0:u.min.x-qr,z0:u.min.z-qr,x1:u.max.x+qr,z1:u.max.z+qr})),i=un[3],s=(i.min.x+i.max.x)/2,r=(i.min.z+i.max.z)/2,o=26,a=Ye.filter(u=>u.kind!=="bridge").map(u=>{const d=me(u.a),h=me(u.b);return{x0:d.x,z0:d.z,x1:h.x,z1:h.z}});let c=0;for(const u of Ye){if(u.kind==="bridge")continue;const d=me(u.a),h=me(u.b),f=h.x-d.x,g=h.z-d.z,_=Math.hypot(f,g);if(_<10)continue;const m=f/_,p=g/_,M=-p,y=m;let v=5;for(;v<_-5&&t.length<ls;){const T=d.x+m*v,A=d.z+p*v,w=Eu(T,A);if(!w){v+=6;continue}const x=w.name==="waterfront"?"harbor":w.name==="midtown"?"midtown-mix":"bungalow-lanes",b=x==="midtown-mix"?c%2===0?"old-town":"merchant-row":x,E=yu[b],C=E.w[0]+n()*(E.w[1]-E.w[0]),I=E.d[0]+n()*(E.d[1]-E.d[0]),U=E.floors[0]+Math.floor(n()*(E.floors[1]-E.floors[0]+1)),O=E.palettes[Math.floor(n()*E.palettes.length)],L=n()<.5?1:-1,F=(C*Math.abs(m)+I*Math.abs(p))/2,N=(C*Math.abs(M)+I*Math.abs(y))/2;for(const k of[L,-L]){if(t.length>=ls)break;let V=!1;for(const q of[.5,2.5,4.5,6.5,8.5]){if(V||t.length>=ls)break;const W=ti+N+q,ut=T+M*k*W,Nt=A+y*k*W,wt=ut-C/2,Mt=Nt-I/2;if(!Eu(ut,Nt)||Ee(ut,Nt)<lc||ln(wt,Mt)||ln(wt+C,Mt)||ln(wt,Mt+I)||ln(wt+C,Mt+I))continue;const K=zo(wt,Mt,C,I);if(!K||K.maxH-K.minH>Mu||_i(wt,Mt,wt+C,Mt+I,ge[0],ge[1],ge[2],ge[3])||qi.some(pt=>_i(wt,Mt,wt+C,Mt+I,pt[0],pt[1],pt[2],pt[3]))||Tu(s,r,o,wt,Mt,wt+C,Mt+I)||e.some(pt=>_i(wt,Mt,wt+C,Mt+I,pt.x0,pt.z0,pt.x1,pt.z1))||t.some(pt=>_i(wt,Mt,wt+C,Mt+I,pt.x,pt.z,pt.x+pt.w,pt.z+pt.d)))continue;const lt=wt-ti,nt=Mt-ti,Et=wt+C+ti,Ft=Mt+I+ti;a.some(pt=>wu(pt.x0,pt.z0,pt.x1,pt.z1,lt,nt,Et,Ft))||(x==="midtown-mix"&&c++,t.push({x:wt,z:Mt,w:C,d:I,h:Math.max(U*Su,bu),floors:U,district:b,bayWindow:E.bayWindow,palette:O}),V=!0)}}v+=2*F+2}}const l=4;for(const u of _l)for(const[d,h,f,g]of u.rects){const _=u.name==="waterfront"?"harbor":u.name==="midtown"?"midtown-mix":"bungalow-lanes";for(let m=d+l/2;m<f&&t.length<ls;m+=l)for(let p=h+l/2;p<g&&t.length<ls;p+=l)for(let M=0;M<9&&t.length<ls;M++){const y=(n()-.5)*l*.9,v=(n()-.5)*l*.9,T=_==="midtown-mix"?c%2===0?"old-town":"merchant-row":_,A=yu[T],w=A.w[0]+n()*(A.w[1]-A.w[0]),x=A.d[0]+n()*(A.d[1]-A.d[0]),b=A.floors[0]+Math.floor(n()*(A.floors[1]-A.floors[0]+1)),E=A.palettes[Math.floor(n()*A.palettes.length)],C=m+y,I=p+v,U=C-w/2,O=I-x/2;let L=!1;for(const W of a)if(vp(W.x0,W.z0,W.x1,W.z1,U,O,U+w,O+x)<=15){L=!0;break}if(!L||Ee(C,I)<lc||ln(U,O)||ln(U+w,O)||ln(U,O+x)||ln(U+w,O+x))continue;const F=zo(U,O,w,x);if(!F||F.maxH-F.minH>Mu||_i(U,O,U+w,O+x,ge[0],ge[1],ge[2],ge[3])||qi.some(W=>_i(U,O,U+w,O+x,W[0],W[1],W[2],W[3]))||Tu(s,r,o,U,O,U+w,O+x)||e.some(W=>_i(U,O,U+w,O+x,W.x0,W.z0,W.x1,W.z1))||t.some(W=>_i(U,O,U+w,O+x,W.x,W.z,W.x+W.w,W.z+W.d)))continue;const N=U-ti,k=O-ti,V=U+w+ti,q=O+x+ti;a.some(W=>wu(W.x0,W.z0,W.x1,W.z1,N,k,V,q))||(_==="midtown-mix"&&c++,t.push({x:U,z:O,w,d:x,h:Math.max(b*Su,bu),floors:b,district:T,bayWindow:A.bayWindow,palette:E}))}}return t}function pd(n){return n.map(t=>{const e=zo(t.x,t.z,t.w,t.d),i=e?e.maxH:Ee(t.x+t.w/2,t.z+t.d/2);return{min:{x:t.x,y:i,z:t.z},max:{x:t.x+t.w,y:i+t.h,z:t.z+t.d},district:t.district}})}const Ke=1,Mp=3,yp=100,Sp=18,bp=2.2,wp=7,Ep=12,Tp=pd(Bo()),md=[...un,...Tp,...tp,...ep],Ap=5,Rp=.5,oi=360,Cp=3.5,gd=.9,xd=.45,Pp=3.5,Ip=1.5,Lp=3,Dp=.8,Au=.2,Np=3,Up=8,Fp=2,_d=6;function Op(n,t){return Math.max(_d,Ap+Rp*n)*(1+t*.2)}const Ru=2,zp=20,Bp=.05,vd=.5,Md=3.6,Xn=(n,t,e)=>Math.max(t,Math.min(e,n)),uc=n=>{const t=Xn(n,0,1);return t*t*(3-2*t)},Cu=45;function kp(n,t){const e=Math.hypot(n.x,n.z),i=hr-Ke-Cu;if(e<=i)return;const s=uc((e-i)/Cu),r=n.x/e,o=n.z/e,a=t.x*r+t.z*o;if(a<=0)return;const c=a*(1-s);t.x+=r*(c-a),t.z+=o*(c-a)}const Hp=n=>Math.hypot(n.x,n.y,n.z);function Ml(n=Pe[0].position){return{position:{...n},yaw:0,pitch:0,speed:9,throttle:9,hover:!1,velocity:{x:0,y:0,z:-9},brakeHold:!1}}function yl(){return{mode:"title",player:Ml(),profile:{coins:0,upgrades:{speed:0,handling:0,braking:0},furniture:[],tutorialDone:!1,runs:0,deliveries:0},run:null,paused:!1,pauseReason:"",message:"",tutorialStage:0,drop:null,descent:null,haloFade:0,homePosition:{x:0,z:3},homeFacing:0,homePanel:"none",summary:null,revision:0,seed:Math.floor(Math.random()*2147483647),coarsePointer:!1}}function Gp(n){n.mode="tutorial",n.paused=!1,n.pauseReason="",n.player=Ml(),n.tutorialStage=0,n.drop=null,n.descent=null,n.haloFade=0,n.message="Steer toward the glowing Harbor Cafe pad.",n.revision++}function Vp(n){n.paused||n.mode!=="tutorial"&&n.mode!=="flight"||(n.player.hover=!n.player.hover,n.revision++)}function yd(n,t,e=""){n.paused=t,n.pauseReason=t?e:"",n.revision++}function Ar(n){const t=n.player;if(!(t.speed>=Cp))return Pe.find(e=>{const i=t.position.x-e.position.x,s=t.position.z-e.position.z;return Math.hypot(i,s)<=Md&&t.position.y>=e.position.y})}function Sd(n){var e;if(n.paused)return;if(n.mode==="home"){Xf(n);return}if(n.drop||n.descent||n.haloFade>0)return;if(n.mode==="tutorial"){if(((e=Ar(n))==null?void 0:e.id)!=="harbor-cafe")return;hc(n,Pe.find(i=>i.id==="harbor-cafe"));return}if(n.mode!=="flight"||!n.run)return;if(n.run.elapsed>=oi){Rr(n,!1);return}const t=Ar(n);t&&hc(n,t)}function Wp(n,t){n.player.brakeHold=!1,n.haloFade=0,n.drop={stopId:t.id,t:0,parcel:t.id!=="home"},bd(n),n.message=t.id==="home"?"Banking your earnings…":"Parcel away!",n.revision++}function bd(n){n.player.speed=0,n.player.hover=!0,n.player.velocity={x:0,y:0,z:0}}function Xp(n,t){var s;if(n.player.hover=!1,n.player.throttle=0,n.mode==="tutorial"){n.profile.tutorialDone=!0,n.message="Practice complete",n.mode="title",n.tutorialStage=3,n.revision++;return}const e=n.run;if(!e||e.elapsed>=oi){Rr(n,!1);return}const i=Pe.find(r=>r.id===t);if(i){if(i.id==="home"){const r=e.earnings,o=e.deliveries;Rr(n,!0),n.summary=null,ac(n),n.message=`Shift complete — banked ${r} coins after ${o} ${o===1?"delivery":"deliveries"}.`;return}((s=e.job)==null?void 0:s.to)===i.id&&(e.earnings+=e.job.payout,e.deliveries++,n.profile.deliveries++,e.job=null,e.lastStop=i.id,e.recentStops=[...e.recentStops,i.id].slice(-3),e.offers=Ed(e.seed,e.deliveries,i.id,e.recentStops),e.returning=!1,n.mode="offers",n.message="Delivered! Choose the next parcel or return home.",n.revision++)}}function qp(n,t=Date.now()){if(n.paused||n.run||n.mode!=="title"&&n.mode!=="summary"&&n.mode!=="home")return;const e=Number.isFinite(t)?Math.floor(t):Date.now();n.player=Ml(),n.run={seed:e,elapsed:0,earnings:0,deliveries:0,job:null,offers:Ed(e,0,"home",[]),returning:!1,lastStop:"home",recentStops:[]},n.summary=null,n.homePanel="none",n.drop=null,n.descent=null,n.haloFade=0,n.mode="offers",n.message="Choose your first delivery of the day.",n.revision++}function Yp(n,t){if(n.paused||n.mode!=="offers"||!n.run||!Number.isInteger(t))return;const e=n.run.offers[t];e&&(n.run.job=e,n.run.offers=[],n.run.returning=!1,n.mode="flight",n.message=`Delivery: ${Kp(e.to)}.`,n.revision++)}function Zp(n){n.paused||n.mode!=="offers"||!n.run||n.run.deliveries===0||(n.run.job=null,n.run.offers=[],n.run.returning=!0,n.mode="flight",n.message="Return to Meg's Rooftop to bank your earnings.",n.revision++)}function Rr(n,t){const e=n.run;if(!e)return;n.drop=null,n.descent=null,n.haloFade=0;const i=t?e.earnings:0;n.summary={success:t,earnings:i,deliveries:e.deliveries},t&&(n.profile.coins+=i),n.profile.runs++,n.run=null,n.mode="summary",n.player.speed=0,n.player.throttle=0,n.player.hover=!0,n.player.velocity={x:0,y:0,z:0},n.message=t?"Shift complete. Earnings banked!":"Rescue called. Unbanked earnings were lost.",n.revision++}function wd(n){if(n.mode==="tutorial")return Pe.find(t=>t.id==="harbor-cafe");if(n.run)return Pe.find(t=>{var e;return t.id===(n.run.returning?"home":(e=n.run.job)==null?void 0:e.to)})}function $p(n,t,e){return(Math.atan2(t.x-n.x,-(t.z-n.z))-e)*180/Math.PI}function Kp(n){var t;return((t=Pe.find(e=>e.id===n))==null?void 0:t.name)??n}function na(n){if(!(n.drop||n.descent)&&!(n.mode!=="tutorial"&&n.mode!=="flight"))return wd(n)}function Js(n){let t=n|0;return t=Math.imul(t^t>>>16,73244475),t=Math.imul(t^t>>>16,73244475),(t^t>>>16)>>>0}function Jp(n){let t=0;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),1540483477),t^=t>>>13;return t>>>0}function Ed(n,t,e,i){let s=Js(n^Js(t)^Jp(e));const r=Pe.find(M=>M.id===e),o=new Set(["home",e,...i]),a=Pe.filter(M=>!o.has(M.id)).map(M=>({stop:M,distance:Math.hypot(M.position.x-r.position.x,M.position.z-r.position.z)})),c=a.filter(M=>M.distance<130),l=a.filter(M=>M.distance>=130&&M.distance<=260),u=a.filter(M=>M.distance>260),d=[{name:"Short hop",items:c},{name:"Medium run",items:l},{name:"Long haul",items:u}].filter(M=>M.items.length>0);s=Js(s+1);const h=s%d.length;let f=h;if(d.length>1){let M=0;for(;f===h;)M++,s=Js(s+2+M),f=s%d.length}const g=(M,y)=>(s=Js(s+y),M[s%M.length]),_=g(d[h].items,10);if(a.length===1){const M=v=>v<130?20:v<=260?35:50,y=_.distance<130?"Short hop":_.distance<=260?"Medium run":"Long haul";return[{from:e,to:_.stop.id,payout:M(_.distance),label:y,parcel:"Delivery parcel"}]}let m=g(d[f].items,20);if(m.stop.id===_.stop.id){const M=d[f].items.filter(y=>y.stop.id!==_.stop.id);if(M.length>0)m=g(M,30);else{const y=d.filter((v,T)=>T!==f&&v.items.length>0);y.length>0&&(m=g(y[0].items,30))}}const p=M=>M<130?20:M<=260?35:50;return[_,m].sort((M,y)=>M.distance-y.distance).map(({stop:M,distance:y})=>{const v=y<130?"Short hop":y<=260?"Medium run":"Long haul";return{from:e,to:M.id,payout:p(y),label:v,parcel:"Delivery parcel"}})}function Qp(n,t){let e;for(const i of md){const s={x:i.min.x-Ke,y:i.min.y-Ke,z:i.min.z-Ke},r={x:i.max.x+Ke,y:i.max.y+Ke,z:i.max.z+Ke};let o=-1e-9,a=1,c={x:0,y:0,z:0};for(const l of["x","y","z"]){const u=n[l],d=t[l];if(Math.abs(d)<1e-9){if(u<s[l]||u>r[l]){o=2;break}continue}const h=(s[l]-u)/d,f=(r[l]-u)/d,g=Math.min(h,f),_=Math.max(h,f);if(g>o&&(o=g,c={x:0,y:0,z:0},c[l]=h<f?-1:1),a=Math.min(a,_),o>a)break}o>=0&&o<=1&&o<=a&&(!e||o<e.t)&&(e={t:o,normal:c})}return e}function Td(n,t){var e;return n.mode==="tutorial"?t.id==="harbor-cafe":n.mode!=="flight"||!n.run?!1:t.id==="home"?n.run.returning&&!n.run.job:((e=n.run.job)==null?void 0:e.to)===t.id}function jp(n){if(n.drop||n.descent||n.haloFade>0||n.mode!=="tutorial"&&n.mode!=="flight"||Math.abs(n.player.speed)>vd)return;const t=na(n),e=t?Ar(n):void 0;!e||e.id!==t.id||!Td(n,e)||(n.haloFade=xd)}function tm(n){const t=na(n),e=t?Ar(n):void 0;!e||e.id!==t.id||!Td(n,e)||Math.abs(n.player.speed)>vd||hc(n,e)}function hc(n,t){const e=n.player.position.x-t.position.x,i=n.player.position.z-t.position.z,s=Math.hypot(e,i),r=Math.atan2(i,e),o=Math.atan2(-Math.sin(r),-Math.cos(r)),a=Math.abs(Math.atan2(Math.sin(o-n.player.yaw),Math.cos(o-n.player.yaw)));n.descent={stopId:t.id,startY:n.player.position.y,angle:r,radius0:s,orbitR:Math.max(s,Lp),dir:a<=Math.PI/2?1:-1,t:0},n.player.brakeHold=!1,bd(n),n.message="Descending…",n.revision++}function em(n,t,e){if(n.mode==="home"){qf(n,t,e);return}if(n.paused||n.mode!=="tutorial"&&n.mode!=="flight"&&n.mode!=="offers"||!Number.isFinite(e)||e<=0)return;if(n.drop){if(n.mode!=="flight"&&n.mode!=="tutorial")n.drop=null;else{if(n.drop.t+=Math.max(0,e),n.drop.t>=gd){const x=n.drop.stopId;n.drop=null,Xp(n,x)}n.revision++}return}const i=Math.max(0,e);if(n.haloFade>0&&(n.haloFade=Math.max(0,n.haloFade-i),n.haloFade===0&&tm(n),n.revision++,n.haloFade>0||n.drop||n.descent))return;if(n.descent){const x=Pe.find(b=>b.id===n.descent.stopId);if(n.mode!=="flight"&&n.mode!=="tutorial"||!x)n.descent=null,n.player.hover=!1;else{const b=x.position.y+Pp;if(n.player.position.y-b<=.05)n.descent=null,Wp(n,x);else{const E=n.descent,C=n.player.position.x,I=n.player.position.z,U=Math.min(Up,Math.max(Fp,(n.player.position.y-b)*1.5));n.player.position.y=Math.max(b,n.player.position.y-U*i),E.t+=i,E.angle+=E.dir*Ip*i;const O=E.radius0+(E.orbitR-E.radius0)*uc(E.t/Dp),L=Math.max(0,(n.player.position.y-b)/Math.max(.001,E.startY-b)),F=L>=Au?1:uc(L/Au),N=O*F,k=x.position.x+Math.cos(E.angle)*N,V=x.position.z+Math.sin(E.angle)*N,q=k-C,W=V-I;if(Math.hypot(q,W)>.75*i){const ut=Math.atan2(q,-W),Nt=Math.atan2(Math.sin(ut-n.player.yaw),Math.cos(ut-n.player.yaw)),wt=Np*i;n.player.yaw+=Math.max(-wt,Math.min(wt,Nt))}n.player.position.x=k,n.player.position.z=V,n.revision++}}return}if(n.run&&(n.mode==="flight"||n.mode==="offers")){if(n.run.elapsed>=oi-1e-9){n.run.elapsed=oi,Rr(n,!1);return}const x=n.run.elapsed;if(n.run.elapsed=Math.min(oi,x+i),n.run.elapsed>=oi-1e-9){n.run.elapsed=oi,Rr(n,!1);return}if(nm(n,x),n.mode==="offers"){n.revision++;return}}const s=n.player,r=Xn(t.turn,-1,1),o=Xn(t.climb,-1,1),a=Sp*(1+n.profile.upgrades.speed*.1),c=bp*(1+n.profile.upgrades.handling*.2),l=Op(s.speed,n.profile.upgrades.braking);s.yaw+=r*c*i,s.pitch+=(o*.38-s.pitch)*Math.min(1,7*i),t.cutThrottle&&(s.throttle=0),s.throttle=Xn(s.throttle+Xn(t.throttle,-1,1)*wp*i,0,a);let u,d=1/0;const h=s.hover?void 0:na(n);if(h){const x=h.position.x-s.position.x,b=h.position.z-s.position.z;d=Math.hypot(x,b),d<Ru?(u=0,s.brakeHold=!0):s.brakeHold&&d<zp?u=0:d>1e-6&&(s.velocity.x*x+s.velocity.z*b)/d>.5&&(u=Math.sqrt(2*_d*d)),u===void 0&&(s.brakeHold=!1)}else s.brakeHold=!1;const f=s.throttle>Bp?s.throttle:s.speed,g=s.hover?0:u===void 0?s.throttle:Math.min(u,f);s.speed=Xn(s.speed+Xn(g-s.speed,-l*i,Ep*i),0,a),Math.abs(s.speed)<.01&&(s.speed=0),s.brakeHold&&s.speed===0&&(s.brakeHold=!1,d>=Ru&&(s.throttle=0));const _={x:Math.sin(s.yaw),z:-Math.cos(s.yaw)},m=s.hover?0:o*Math.max(s.speed,3)*.7,p={x:_.x*s.speed*i,y:m*i,z:_.z*s.speed*i};kp(s.position,p);const M=s.position.x,y=s.position.y,v=s.position.z;let T={...p};for(let x=0;x<3;x++){const b=Qp(s.position,T);if(!b){s.position.x+=T.x,s.position.y+=T.y,s.position.z+=T.z;break}if(!(b.normal.x||b.normal.y||b.normal.z))break;const E=Math.max(0,b.t-1e-4);s.position.x+=T.x*E,s.position.y+=T.y*E,s.position.z+=T.z*E;const C=1-E;if(T={x:b.normal.x?0:T.x*C,y:b.normal.y?0:T.y*C,z:b.normal.z?0:T.z*C},!T.x&&!T.y&&!T.z)break}for(let x=0;x<4;x++){let b=!1;for(const E of md){const C=E.min.x-Ke,I=E.max.x+Ke,U=E.min.y-Ke,O=E.max.y+Ke,L=E.min.z-Ke,F=E.max.z+Ke,N=s.position;if(N.x<=C||N.x>=I||N.y<=U||N.y>=O||N.z<=L||N.z>=F)continue;const k=N.x-C,V=I-N.x,q=N.y-U,W=O-N.y,ut=N.z-L,Nt=F-N.z,wt=Math.min(k,V,q,W,ut,Nt),Mt=.02;wt===k?N.x=C-Mt:wt===V?N.x=I+Mt:wt===q?N.y=U-Mt:wt===W?N.y=O+Mt:wt===ut?N.z=L-Mt:N.z=F+Mt,b=!0}if(!b)break}s.position.x=Xn(s.position.x,-hr+Ke,hr-Ke);const A=Math.max(Ee(s.position.x,s.position.z),0)+Mp;s.position.y=Xn(s.position.y,A,yp),s.position.z=Xn(s.position.z,-hr+Ke,hr-Ke),s.velocity={x:(s.position.x-M)/i,y:(s.position.y-y)/i,z:(s.position.z-v)/i};const w=Hp({x:s.position.x-M,y:s.position.y-y,z:s.position.z-v});n.mode==="tutorial"&&n.tutorialStage===0&&w>.1?(n.tutorialStage=1,n.message=n.coarsePointer?"Release the stick to slow down and hover.":"Press Space to slow down and hover."):n.mode==="tutorial"&&n.tutorialStage===1&&Math.abs(s.speed)<.5&&(n.tutorialStage=2,n.message="Nice and steady. Drift over the glowing Harbor Cafe pad — the parcel drops itself."),jp(n),n.revision++}function nm(n,t){const e=oi-n.run.elapsed,i=oi-t;i>30&&e<=30?n.message="30 seconds left — return home before nightfall!":i>60&&e<=60?n.message="One minute left — Meg needs to head home.":i>120&&e<=120&&(n.message="Two minutes left — finish up before nightfall.")}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sl="185",im=0,Pu=1,sm=2,Po=1,rm=2,fr=3,Ii=0,on=1,He=2,hi=0,Fs=1,dc=2,Iu=3,Lu=4,om=5,Vi=100,am=101,cm=102,lm=103,um=104,hm=200,dm=201,fm=202,pm=203,fc=204,pc=205,mm=206,gm=207,xm=208,_m=209,vm=210,Mm=211,ym=212,Sm=213,bm=214,mc=0,gc=1,xc=2,Hs=3,_c=4,vc=5,Mc=6,yc=7,Ad=0,wm=1,Em=2,$n=0,Rd=1,Cd=2,Pd=3,bl=4,Id=5,Ld=6,Dd=7,Nd=300,Ki=301,Gs=302,fa=303,pa=304,ia=306,Cr=1e3,ci=1001,Sc=1002,Ze=1003,Tm=1004,Yr=1005,rn=1006,ma=1007,Ri=1008,yn=1009,Ud=1010,Fd=1011,Pr=1012,wl=1013,Qn=1014,zn=1015,fi=1016,El=1017,Tl=1018,Ir=1020,Od=35902,zd=35899,Bd=1021,kd=1022,Bn=1023,pi=1026,Yi=1027,Al=1028,Rl=1029,Ji=1030,Cl=1031,Pl=1033,Io=33776,Lo=33777,Do=33778,No=33779,bc=35840,wc=35841,Ec=35842,Tc=35843,Ac=36196,Rc=37492,Cc=37496,Pc=37488,Ic=37489,ko=37490,Lc=37491,Dc=37808,Nc=37809,Uc=37810,Fc=37811,Oc=37812,zc=37813,Bc=37814,kc=37815,Hc=37816,Gc=37817,Vc=37818,Wc=37819,Xc=37820,qc=37821,Yc=36492,Zc=36494,$c=36495,Kc=36283,Jc=36284,Ho=36285,Qc=36286,Am=3200,jc=0,Rm=1,Ai="",Qe="srgb",Go="srgb-linear",Vo="linear",xe="srgb",us=7680,Du=519,Cm=512,Pm=513,Im=514,Il=515,Lm=516,Dm=517,Ll=518,Nm=519,tl=35044,Nu="300 es",Zn=2e3,Lr=2001;function Um(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Wo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Fm(){const n=Wo("canvas");return n.style.display="block",n}const Uu={};function Xo(...n){const t="THREE."+n.shift();console.log(t,...n)}function Hd(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function jt(...n){n=Hd(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ue(...n){n=Hd(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Os(...n){const t=n.join(" ");t in Uu||(Uu[t]=!0,jt(...n))}function Om(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const zm={[mc]:gc,[xc]:Mc,[_c]:yc,[Hs]:vc,[gc]:mc,[Mc]:xc,[yc]:_c,[vc]:Hs};class ss{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fu=1234567;const vr=Math.PI/180,Dr=180/Math.PI;function Kn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function le(n,t,e){return Math.max(t,Math.min(e,n))}function Dl(n,t){return(n%t+t)%t}function Bm(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function km(n,t,e){return n!==t?(e-n)/(t-n):0}function Mr(n,t,e){return(1-e)*n+e*t}function Hm(n,t,e,i){return Mr(n,t,1-Math.exp(-e*i))}function Gm(n,t=1){return t-Math.abs(Dl(n,t*2)-t)}function Vm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Wm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Xm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function qm(n,t){return n+Math.random()*(t-n)}function Ym(n){return n*(.5-Math.random())}function Zm(n){n!==void 0&&(Fu=n);let t=Fu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $m(n){return n*vr}function Km(n){return n*Dr}function Jm(n){return(n&n-1)===0&&n!==0}function Qm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function jm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function t0(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),u=o((t+i)/2),d=r((t-i)/2),h=o((t-i)/2),f=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function On(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _e(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const $e={DEG2RAD:vr,RAD2DEG:Dr,generateUUID:Kn,clamp:le,euclideanModulo:Dl,mapLinear:Bm,inverseLerp:km,lerp:Mr,damp:Hm,pingpong:Gm,smoothstep:Vm,smootherstep:Wm,randInt:Xm,randFloat:qm,randFloatSpread:Ym,seededRandom:Zm,degToRad:$m,radToDeg:Km,isPowerOfTwo:Jm,ceilPowerOfTwo:Qm,floorPowerOfTwo:jm,setQuaternionFromProperEuler:t0,normalize:_e,denormalize:On},jl=class jl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jl.prototype.isVector2=!0;let ft=jl;class Ys{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(d!==_||c!==h||l!==f||u!==g){let m=c*h+l*f+u*g+d*_;m<0&&(h=-h,f=-f,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const M=Math.acos(m),y=Math.sin(M);p=Math.sin(p*M)/y,a=Math.sin(a*M)/y,c=c*p+h*a,l=l*p+f*a,u=u*p+g*a,d=d*p+_*a}else{c=c*p+h*a,l=l*p+f*a,u=u*p+g*a,d=d*p+_*a;const M=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=M,l*=M,u*=M,d*=M}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-a*f,t[e+2]=l*g+u*f+a*h-c*d,t[e+3]=u*g-a*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(r/2),h=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const tu=class tu{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ou.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ou.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+c*l+o*d-a*u,this.y=i+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ga.copy(this).projectOnVector(t),this.sub(ga)}reflect(t){return this.sub(ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};tu.prototype.isVector3=!0;let D=tu;const ga=new D,Ou=new Ys,eu=class eu{constructor(t,e,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],M=s[1],y=s[4],v=s[7],T=s[2],A=s[5],w=s[8];return r[0]=o*_+a*M+c*T,r[3]=o*m+a*y+c*A,r[6]=o*p+a*v+c*w,r[1]=l*_+u*M+d*T,r[4]=l*m+u*y+d*A,r[7]=l*p+u*v+d*w,r[2]=h*_+f*M+g*T,r[5]=h*m+f*y+g*A,r[8]=h*p+f*v+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*r,f=l*r-o*c,g=e*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*l-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=h*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(i*c-l*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xa.makeScale(t,e)),this}rotate(t){return Os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xa.makeRotation(-t)),this}translate(t,e){return Os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};eu.prototype.isMatrix3=!0;let ne=eu;const xa=new ne,zu=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bu=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function e0(){const n={enabled:!0,workingColorSpace:Go,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xe&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xe&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ai?Vo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Go]:{primaries:t,whitePoint:i,transfer:Vo,toXYZ:zu,fromXYZ:Bu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:t,whitePoint:i,transfer:xe,toXYZ:zu,fromXYZ:Bu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}}),n}const he=e0();function di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let hs;class n0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{hs===void 0&&(hs=Wo("canvas")),hs.width=t.width,hs.height=t.height;const s=hs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=hs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Wo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(di(e[i]/255)*255):e[i]=di(e[i]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let i0=0;class Nl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_a(s[o].image)):r.push(_a(s[o]))}else r=_a(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function _a(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?n0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}let s0=0;const va=new D;class je extends ss{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,i=ci,s=ci,r=rn,o=Ri,a=Bn,c=yn,l=je.DEFAULT_ANISOTROPY,u=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=Kn(),this.name="",this.source=new Nl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(va).x}get height(){return this.source.getSize(va).y}get depth(){return this.source.getSize(va).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cr:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case Sc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cr:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case Sc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Nd;je.DEFAULT_ANISOTROPY=1;const nu=class nu{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,v=(f+1)/2,T=(p+1)/2,A=(u+h)/4,w=(d+_)/4,x=(g+m)/4;return y>v&&y>T?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=A/i,r=w/i):v>T?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=A/s,r=x/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=w/r,s=x/r),this.set(i,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(h-u)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nu.prototype.isVector4=!0;let Le=nu;class r0 extends ss{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new je(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Nl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends r0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Gd extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class o0 extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ea=class ea{constructor(t,e,i,s,r,o,a,c,l,u,d,h,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,d,h,f,g,_,m)}set(t,e,i,s,r,o,a,c,l,u,d,h,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ea().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/ds.setFromMatrixColumn(t,0).length(),r=1/ds.setFromMatrixColumn(t,1).length(),o=1/ds.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=o*u,f=o*d,g=a*u,_=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-_*l,e[9]=-a*c,e[2]=_-h*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,g=l*u,_=l*d;e[0]=h+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=_+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,g=l*u,_=l*d;e[0]=h-_*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,f=o*d,g=a*u,_=a*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+_,e[1]=c*d,e[5]=_*l+h,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-h*d,e[8]=g*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-_*d}else if(t.order==="XZY"){const h=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+_,e[5]=o*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(a0,t,c0)}lookAt(t,e,i){const s=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),vi.crossVectors(i,gn),vi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),vi.crossVectors(i,gn)),vi.normalize(),Zr.crossVectors(gn,vi),s[0]=vi.x,s[4]=Zr.x,s[8]=gn.x,s[1]=vi.y,s[5]=Zr.y,s[9]=gn.y,s[2]=vi.z,s[6]=Zr.z,s[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],M=i[3],y=i[7],v=i[11],T=i[15],A=s[0],w=s[4],x=s[8],b=s[12],E=s[1],C=s[5],I=s[9],U=s[13],O=s[2],L=s[6],F=s[10],N=s[14],k=s[3],V=s[7],q=s[11],W=s[15];return r[0]=o*A+a*E+c*O+l*k,r[4]=o*w+a*C+c*L+l*V,r[8]=o*x+a*I+c*F+l*q,r[12]=o*b+a*U+c*N+l*W,r[1]=u*A+d*E+h*O+f*k,r[5]=u*w+d*C+h*L+f*V,r[9]=u*x+d*I+h*F+f*q,r[13]=u*b+d*U+h*N+f*W,r[2]=g*A+_*E+m*O+p*k,r[6]=g*w+_*C+m*L+p*V,r[10]=g*x+_*I+m*F+p*q,r[14]=g*b+_*U+m*N+p*W,r[3]=M*A+y*E+v*O+T*k,r[7]=M*w+y*C+v*L+T*V,r[11]=M*x+y*I+v*F+T*q,r[15]=M*b+y*U+v*N+T*W,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15],M=c*f-l*h,y=a*f-l*d,v=a*h-c*d,T=o*f-l*u,A=o*h-c*u,w=o*d-a*u;return e*(_*M-m*y+p*v)-i*(g*M-m*T+p*A)+s*(g*y-_*T+p*w)-r*(g*v-_*A+m*w)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=e*a-i*o,y=e*c-s*o,v=e*l-r*o,T=i*c-s*a,A=i*l-r*a,w=s*l-r*c,x=u*_-d*g,b=u*m-h*g,E=u*p-f*g,C=d*m-h*_,I=d*p-f*_,U=h*p-f*m,O=M*U-y*I+v*C+T*E-A*b+w*x;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/O;return t[0]=(a*U-c*I+l*C)*L,t[1]=(s*I-i*U-r*C)*L,t[2]=(_*w-m*A+p*T)*L,t[3]=(h*A-d*w-f*T)*L,t[4]=(c*E-o*U-l*b)*L,t[5]=(e*U-s*E+r*b)*L,t[6]=(m*v-g*w-p*y)*L,t[7]=(u*w-h*v+f*y)*L,t[8]=(o*I-a*E+l*x)*L,t[9]=(i*E-e*I-r*x)*L,t[10]=(g*A-_*v+p*M)*L,t[11]=(d*v-u*A-f*M)*L,t[12]=(a*b-o*C-c*x)*L,t[13]=(e*C-i*b+s*x)*L,t[14]=(_*y-g*T-m*M)*L,t[15]=(u*T-d*y+h*M)*L,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,h=r*l,f=r*u,g=r*d,_=o*u,m=o*d,p=a*d,M=c*l,y=c*u,v=c*d,T=i.x,A=i.y,w=i.z;return s[0]=(1-(_+p))*T,s[1]=(f+v)*T,s[2]=(g-y)*T,s[3]=0,s[4]=(f-v)*A,s[5]=(1-(h+p))*A,s[6]=(m+M)*A,s[7]=0,s[8]=(g+y)*w,s[9]=(m-M)*w,s[10]=(1-(h+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=ds.set(s[0],s[1],s[2]).length();const a=ds.set(s[4],s[5],s[6]).length(),c=ds.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Pn.copy(this);const l=1/o,u=1/a,d=1/c;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=d,Pn.elements[9]*=d,Pn.elements[10]*=d,e.setFromRotationMatrix(Pn),i.x=o,i.y=a,i.z=c,this}makePerspective(t,e,i,s,r,o,a=Zn,c=!1){const l=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===Zn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Lr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Zn,c=!1){const l=this.elements,u=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),f=-(i+s)/(i-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===Zn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Lr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};ea.prototype.isMatrix4=!0;let Se=ea;const ds=new D,Pn=new Se,a0=new D(0,0,0),c0=new D(1,1,1),vi=new D,Zr=new D,gn=new D,ku=new Se,Hu=new Ys;class Qi{constructor(t=0,e=0,i=0,s=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ku.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ku,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hu.setFromEuler(this),this.setFromQuaternion(Hu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class Ul{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let l0=0;const Gu=new D,fs=new Ys,ei=new Se,$r=new D,Qs=new D,u0=new D,h0=new Ys,Vu=new D(1,0,0),Wu=new D(0,1,0),Xu=new D(0,0,1),qu={type:"added"},d0={type:"removed"},ps={type:"childadded",child:null},Ma={type:"childremoved",child:null};class ze extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ze.DEFAULT_UP.clone();const t=new D,e=new Qi,i=new Ys,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new ne}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(Vu,t)}rotateY(t){return this.rotateOnAxis(Wu,t)}rotateZ(t){return this.rotateOnAxis(Xu,t)}translateOnAxis(t,e){return Gu.copy(t).applyQuaternion(this.quaternion),this.position.add(Gu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vu,t)}translateY(t){return this.translateOnAxis(Wu,t)}translateZ(t){return this.translateOnAxis(Xu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?$r.copy(t):$r.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Qs,$r,this.up):ei.lookAt($r,Qs,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(ei),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qu),ps.child=t,this.dispatchEvent(ps),ps.child=null):ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(d0),Ma.child=t,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qu),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,u0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,h0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ze.DEFAULT_UP=new D(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class oe extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f0={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(f0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new oe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function Sa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ee{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=he.workingColorSpace){if(t=Dl(t,1),e=le(e,0,1),i=le(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Sa(o,r,t+1/3),this.g=Sa(o,r,t),this.b=Sa(o,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=Qe){function i(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const i=Vd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return he.workingToColorSpace(nn.copy(this),t),Math.round(le(nn.r*255,0,255))*65536+Math.round(le(nn.g*255,0,255))*256+Math.round(le(nn.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(nn.copy(this),e);const i=nn.r,s=nn.g,r=nn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=Qe){he.workingToColorSpace(nn.copy(this),t);const e=nn.r,i=nn.g,s=nn.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Mi),this.setHSL(Mi.h+t,Mi.s+e,Mi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(Kr);const i=Mr(Mi.h,Kr.h,e),s=Mr(Mi.s,Kr.s,e),r=Mr(Mi.l,Kr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new ee;ee.NAMES=Vd;class qo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ee(t),this.density=e}clone(){return new qo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class p0 extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const In=new D,ni=new D,ba=new D,ii=new D,ms=new D,gs=new D,Yu=new D,wa=new D,Ea=new D,Ta=new D,Aa=new Le,Ra=new Le,Ca=new Le;class Cn{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),In.subVectors(t,e),s.cross(In);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){In.subVectors(s,e),ni.subVectors(i,e),ba.subVectors(t,e);const o=In.dot(In),a=In.dot(ni),c=In.dot(ba),l=ni.dot(ni),u=ni.dot(ba),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ii.x),c.addScaledVector(o,ii.y),c.addScaledVector(a,ii.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Aa.setScalar(0),Ra.setScalar(0),Ca.setScalar(0),Aa.fromBufferAttribute(t,e),Ra.fromBufferAttribute(t,i),Ca.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Aa,r.x),o.addScaledVector(Ra,r.y),o.addScaledVector(Ca,r.z),o}static isFrontFacing(t,e,i,s){return In.subVectors(i,e),ni.subVectors(t,e),In.cross(ni).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),In.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Cn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;ms.subVectors(s,i),gs.subVectors(r,i),wa.subVectors(t,i);const c=ms.dot(wa),l=gs.dot(wa);if(c<=0&&l<=0)return e.copy(i);Ea.subVectors(t,s);const u=ms.dot(Ea),d=gs.dot(Ea);if(u>=0&&d<=u)return e.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(ms,o);Ta.subVectors(t,r);const f=ms.dot(Ta),g=gs.dot(Ta);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(gs,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Yu.subVectors(r,s),a=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(Yu,a);const p=1/(m+_+h);return o=_*p,a=h*p,e.copy(i).addScaledVector(ms,o).addScaledVector(gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class rs{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jr.copy(i.boundingBox)),Jr.applyMatrix4(t.matrixWorld),this.union(Jr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),Qr.subVectors(this.max,js),xs.subVectors(t.a,js),_s.subVectors(t.b,js),vs.subVectors(t.c,js),yi.subVectors(_s,xs),Si.subVectors(vs,_s),Di.subVectors(xs,vs);let e=[0,-yi.z,yi.y,0,-Si.z,Si.y,0,-Di.z,Di.y,yi.z,0,-yi.x,Si.z,0,-Si.x,Di.z,0,-Di.x,-yi.y,yi.x,0,-Si.y,Si.x,0,-Di.y,Di.x,0];return!Pa(e,xs,_s,vs,Qr)||(e=[1,0,0,0,1,0,0,0,1],!Pa(e,xs,_s,vs,Qr))?!1:(jr.crossVectors(yi,Si),e=[jr.x,jr.y,jr.z],Pa(e,xs,_s,vs,Qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const si=[new D,new D,new D,new D,new D,new D,new D,new D],Ln=new D,Jr=new rs,xs=new D,_s=new D,vs=new D,yi=new D,Si=new D,Di=new D,js=new D,Qr=new D,jr=new D,Ni=new D;function Pa(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ni.fromArray(n,r);const a=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),c=t.dot(Ni),l=e.dot(Ni),u=i.dot(Ni);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Be=new D,to=new ft;let m0=0;class pn extends ss{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:m0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=tl,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)to.fromBufferAttribute(this,e),to.applyMatrix3(t),this.setXY(e,to.x,to.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=On(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=On(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=On(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=On(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=On(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tl&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Wd extends pn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Xd extends pn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Qt extends pn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const g0=new rs,tr=new D,Ia=new D;class zr{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):g0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);const e=tr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(tr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(Ia)),this.expandByPoint(tr.copy(t.center).sub(Ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let x0=0;const wn=new Se,La=new ze,Ms=new D,xn=new rs,er=new rs,qe=new D;class Me extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Um(t)?Xd:Wd)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ne().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,i){return wn.makeTranslation(t,e,i),this.applyMatrix4(wn),this}scale(t,e,i){return wn.makeScale(t,e,i),this.applyMatrix4(wn),this}lookAt(t){return La.lookAt(t),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];er.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(xn.min,er.min),xn.expandByPoint(qe),qe.addVectors(xn.max,er.max),xn.expandByPoint(qe)):(xn.expandByPoint(er.min),xn.expandByPoint(er.max))}xn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)qe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(qe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)qe.fromBufferAttribute(a,l),c&&(Ms.fromBufferAttribute(t,l),qe.add(Ms)),s=Math.max(s,i.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new pn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let x=0;x<i.count;x++)a[x]=new D,c[x]=new D;const l=new D,u=new D,d=new D,h=new ft,f=new ft,g=new ft,_=new D,m=new D;function p(x,b,E){l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,E),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,E),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),a[x].add(_),a[b].add(_),a[E].add(_),c[x].add(m),c[b].add(m),c[E].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,b=M.length;x<b;++x){const E=M[x],C=E.start,I=E.count;for(let U=C,O=C+I;U<O;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const y=new D,v=new D,T=new D,A=new D;function w(x){T.fromBufferAttribute(s,x),A.copy(T);const b=a[x];y.copy(b),y.sub(T.multiplyScalar(T.dot(b))).normalize(),v.crossVectors(A,b);const C=v.dot(c[x])<0?-1:1;o.setXYZW(x,y.x,y.y,y.z,C)}for(let x=0,b=M.length;x<b;++x){const E=M[x],C=E.start,I=E.count;for(let U=C,O=C+I;U<O;U+=3)w(t.getX(U+0)),w(t.getX(U+1)),w(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,u=new D,d=new D;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new pn(h,u,d)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=tl,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new D;class Yo{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=On(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=On(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=On(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=On(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=On(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Xo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new pn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Yo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Xo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let v0=0;class Zs extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Fs,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=pc,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fc&&(i.blendSrc=this.blendSrc),this.blendDst!==pc&&(i.blendDst=this.blendDst),this.blendEquation!==Vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Du&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ee().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ft().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Fl extends Zs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ys;const nr=new D,Ss=new D,bs=new D,ws=new ft,ir=new ft,qd=new Se,eo=new D,sr=new D,no=new D,Zu=new ft,Da=new ft,$u=new ft;class el extends ze{constructor(t=new Fl){if(super(),this.isSprite=!0,this.type="Sprite",ys===void 0){ys=new Me;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new _0(e,5);ys.setIndex([0,1,2,0,2,3]),ys.setAttribute("position",new Yo(i,3,0,!1)),ys.setAttribute("uv",new Yo(i,2,3,!1))}this.geometry=ys,this.material=t,this.center=new ft(.5,.5),this.count=1}raycast(t,e){t.camera===null&&ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ss.setFromMatrixScale(this.matrixWorld),qd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ss.multiplyScalar(-bs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;io(eo.set(-.5,-.5,0),bs,o,Ss,s,r),io(sr.set(.5,-.5,0),bs,o,Ss,s,r),io(no.set(.5,.5,0),bs,o,Ss,s,r),Zu.set(0,0),Da.set(1,0),$u.set(1,1);let a=t.ray.intersectTriangle(eo,sr,no,!1,nr);if(a===null&&(io(sr.set(-.5,.5,0),bs,o,Ss,s,r),Da.set(0,1),a=t.ray.intersectTriangle(eo,no,sr,!1,nr),a===null))return;const c=t.ray.origin.distanceTo(nr);c<t.near||c>t.far||e.push({distance:c,point:nr.clone(),uv:Cn.getInterpolation(nr,eo,sr,no,Zu,Da,$u,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function io(n,t,e,i,s,r){ws.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(ir.x=r*ws.x-s*ws.y,ir.y=s*ws.x+r*ws.y):ir.copy(ws),n.copy(t),n.x+=ir.x,n.y+=ir.y,n.applyMatrix4(qd)}const ri=new D,Na=new D,so=new D,bi=new D,Ua=new D,ro=new D,Fa=new D;class Yd{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Na.copy(t).add(e).multiplyScalar(.5),so.copy(e).sub(t).normalize(),bi.copy(this.origin).sub(Na);const r=t.distanceTo(e)*.5,o=-this.direction.dot(so),a=bi.dot(this.direction),c=-bi.dot(so),l=bi.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Na).addScaledVector(so,h),f}intersectSphere(t,e){ri.subVectors(t.center,this.origin);const i=ri.dot(this.direction),s=ri.dot(ri)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,i,s,r){Ua.subVectors(e,t),ro.subVectors(i,t),Fa.crossVectors(Ua,ro);let o=this.direction.dot(Fa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,t);const c=a*this.direction.dot(ro.crossVectors(bi,ro));if(c<0)return null;const l=a*this.direction.dot(Ua.cross(bi));if(l<0||c+l>o)return null;const u=-a*bi.dot(Fa);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class An extends Zs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=Ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ku=new Se,Ui=new Yd,oo=new zr,Ju=new D,ao=new D,co=new D,lo=new D,Oa=new D,uo=new D,Qu=new D,ho=new D;class J extends ze{constructor(t=new Me,e=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){uo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(Oa.fromBufferAttribute(d,t),o?uo.addScaledVector(Oa,u):uo.addScaledVector(Oa.sub(e),u))}e.add(uo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(r),Ui.copy(t.ray).recast(t.near),!(oo.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(oo,Ju)===null||Ui.origin.distanceToSquared(Ju)>(t.far-t.near)**2))&&(Ku.copy(r).invert(),Ui.copy(t.ray).applyMatrix4(Ku),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,T=y;v<T;v+=3){const A=a.getX(v),w=a.getX(v+1),x=a.getX(v+2);s=fo(this,p,t,i,l,u,d,A,w,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=fo(this,o,t,i,l,u,d,M,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,T=y;v<T;v+=3){const A=v,w=v+1,x=v+2;s=fo(this,p,t,i,l,u,d,A,w,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,y=m+1,v=m+2;s=fo(this,o,t,i,l,u,d,M,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function M0(n,t,e,i,s,r,o,a){let c;if(t.side===on?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Ii,a),c===null)return null;ho.copy(a),ho.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ho);return l<e.near||l>e.far?null:{distance:l,point:ho.clone(),object:n}}function fo(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,ao),n.getVertexPosition(c,co),n.getVertexPosition(l,lo);const u=M0(n,t,e,i,ao,co,lo,Qu);if(u){const d=new D;Cn.getBarycoord(Qu,ao,co,lo,d),s&&(u.uv=Cn.getInterpolatedAttribute(s,a,c,l,d,new ft)),r&&(u.uv1=Cn.getInterpolatedAttribute(r,a,c,l,d,new ft)),o&&(u.normal=Cn.getInterpolatedAttribute(o,a,c,l,d,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new D,materialIndex:0};Cn.getNormal(ao,co,lo,h.normal),u.face=h,u.barycoord=d}return u}class Zd extends je{constructor(t=null,e=1,i=1,s,r,o,a,c,l=Ze,u=Ze,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ju extends pn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Es=new Se,th=new Se,po=[],eh=new rs,y0=new Se,rr=new J,or=new zr;class _n extends J{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ju(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,y0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new rs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Es),eh.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(eh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Es),or.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(or)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),or.copy(this.boundingSphere),or.applyMatrix4(i),t.ray.intersectsSphere(or)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Es),th.multiplyMatrices(i,Es),rr.matrixWorld=th,rr.raycast(t,po);for(let o=0,a=po.length;o<a;o++){const c=po[o];c.instanceId=r,c.object=this,e.push(c)}po.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ju(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Zd(new Float32Array(s*this.count),s,this.count,Al,zn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const za=new D,S0=new D,b0=new ne;class Hi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=za.subVectors(i,e).cross(S0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(za),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||b0.getNormalMatrix(t),s=this.coplanarPoint(za).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new zr,w0=new ft(.5,.5),mo=new D;class Ol{constructor(t=new Hi,e=new Hi,i=new Hi,s=new Hi,r=new Hi,o=new Hi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Zn,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],M=r[12],y=r[13],v=r[14],T=r[15];if(s[0].setComponents(l-o,f-u,p-g,T-M).normalize(),s[1].setComponents(l+o,f+u,p+g,T+M).normalize(),s[2].setComponents(l+a,f+d,p+_,T+y).normalize(),s[3].setComponents(l-a,f-d,p-_,T-y).normalize(),i)s[4].setComponents(c,h,m,v).normalize(),s[5].setComponents(l-c,f-h,p-m,T-v).normalize();else if(s[4].setComponents(l-c,f-h,p-m,T-v).normalize(),e===Zn)s[5].setComponents(l+c,f+h,p+m,T+v).normalize();else if(e===Lr)s[5].setComponents(c,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){Fi.center.set(0,0,0);const e=w0.distanceTo(t.center);return Fi.radius=.7071067811865476+e,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(mo.x=s.normal.x>0?t.max.x:t.min.x,mo.y=s.normal.y>0?t.max.y:t.min.y,mo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(mo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $d extends je{constructor(t=[],e=Ki,i,s,r,o,a,c,l,u){super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ji extends je{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vs extends je{constructor(t,e,i=Qn,s,r,o,a=Ze,c=Ze,l,u=pi,d=1){if(u!==pi&&u!==Yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Nl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class E0 extends Vs{constructor(t,e=Qn,i=Ki,s,r,o=Ze,a=Ze,c,l=pi){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Kd extends je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class te extends Me{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2));function g(_,m,p,M,y,v,T,A,w,x,b){const E=v/w,C=T/x,I=v/2,U=T/2,O=A/2,L=w+1,F=x+1;let N=0,k=0;const V=new D;for(let q=0;q<F;q++){const W=q*C-U;for(let ut=0;ut<L;ut++){const Nt=ut*E-I;V[_]=Nt*M,V[m]=W*y,V[p]=O,l.push(V.x,V.y,V.z),V[_]=0,V[m]=0,V[p]=A>0?1:-1,u.push(V.x,V.y,V.z),d.push(ut/w),d.push(1-q/x),N+=1}}for(let q=0;q<x;q++)for(let W=0;W<w;W++){const ut=h+W+L*q,Nt=h+W+L*(q+1),wt=h+(W+1)+L*(q+1),Mt=h+(W+1)+L*q;c.push(ut,Nt,Mt),c.push(Nt,wt,Mt),k+=6}a.addGroup(f,k,b),f+=k,h+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Zo extends Me{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],u=e/2,d=Math.PI/2*t,h=e,f=2*d+h,g=i*2+r,_=s+1,m=new D,p=new D;for(let M=0;M<=g;M++){let y=0,v=0,T=0,A=0;if(M<=i){const b=M/i,E=b*Math.PI/2;v=-u-t*Math.cos(E),T=t*Math.sin(E),A=-t*Math.cos(E),y=b*d}else if(M<=i+r){const b=(M-i)/r;v=-u+b*e,T=t,A=0,y=d+b*h}else{const b=(M-i-r)/i,E=b*Math.PI/2;v=u+t*Math.sin(E),T=t*Math.cos(E),A=t*Math.sin(E),y=d+h+b*d}const w=Math.max(0,Math.min(1,y/f));let x=0;M===0?x=.5/s:M===g&&(x=-.5/s);for(let b=0;b<=s;b++){const E=b/s,C=E*Math.PI*2,I=Math.sin(C),U=Math.cos(C);p.x=-T*U,p.y=v,p.z=T*I,a.push(p.x,p.y,p.z),m.set(-T*U,A,T*I),m.normalize(),c.push(m.x,m.y,m.z),l.push(E+x,w)}if(M>0){const b=(M-1)*_;for(let E=0;E<s;E++){const C=b+E,I=b+E+1,U=M*_+E,O=M*_+E+1;o.push(C,I,U),o.push(I,O,U)}}}this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class zl extends Me{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new D,u=new ft;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const f=i+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(a,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class pe extends Me{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const _=[],m=i/2;let p=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(f,2));function M(){const v=new D,T=new D;let A=0;const w=(e-t)/i;for(let x=0;x<=r;x++){const b=[],E=x/r,C=E*(e-t)+t;for(let I=0;I<=s;I++){const U=I/s,O=U*c+a,L=Math.sin(O),F=Math.cos(O);T.x=C*L,T.y=-E*i+m,T.z=C*F,d.push(T.x,T.y,T.z),v.set(L,w,F).normalize(),h.push(v.x,v.y,v.z),f.push(U,1-E),b.push(g++)}_.push(b)}for(let x=0;x<s;x++)for(let b=0;b<r;b++){const E=_[b][x],C=_[b+1][x],I=_[b+1][x+1],U=_[b][x+1];(t>0||b!==0)&&(u.push(E,C,U),A+=3),(e>0||b!==r-1)&&(u.push(C,I,U),A+=3)}l.addGroup(p,A,0),p+=A}function y(v){const T=g,A=new ft,w=new D;let x=0;const b=v===!0?t:e,E=v===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,m*E,0),h.push(0,E,0),f.push(.5,.5),g++;const C=g;for(let I=0;I<=s;I++){const O=I/s*c+a,L=Math.cos(O),F=Math.sin(O);w.x=b*F,w.y=m*E,w.z=b*L,d.push(w.x,w.y,w.z),h.push(0,E,0),A.x=L*.5+.5,A.y=F*.5*E+.5,f.push(A.x,A.y),g++}for(let I=0;I<s;I++){const U=T+I,O=C+I;v===!0?u.push(O,O+1,U):u.push(O+1,O,U),x+=3}l.addGroup(p,x,v===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class sn extends pe{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new sn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bl extends Me{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const y=new D,v=new D,T=new D;for(let A=0;A<e.length;A+=3)f(e[A+0],y),f(e[A+1],v),f(e[A+2],T),c(y,v,T,M)}function c(M,y,v,T){const A=T+1,w=[];for(let x=0;x<=A;x++){w[x]=[];const b=M.clone().lerp(v,x/A),E=y.clone().lerp(v,x/A),C=A-x;for(let I=0;I<=C;I++)I===0&&x===A?w[x][I]=b:w[x][I]=b.clone().lerp(E,I/C)}for(let x=0;x<A;x++)for(let b=0;b<2*(A-x)-1;b++){const E=Math.floor(b/2);b%2===0?(h(w[x][E+1]),h(w[x+1][E]),h(w[x][E])):(h(w[x][E+1]),h(w[x+1][E+1]),h(w[x+1][E]))}}function l(M){const y=new D;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(M),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function u(){const M=new D;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const v=m(M)/2/Math.PI+.5,T=p(M)/Math.PI+.5;o.push(v,1-T)}g(),d()}function d(){for(let M=0;M<o.length;M+=6){const y=o[M+0],v=o[M+2],T=o[M+4],A=Math.max(y,v,T),w=Math.min(y,v,T);A>.9&&w<.1&&(y<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),T<.2&&(o[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function f(M,y){const v=M*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const M=new D,y=new D,v=new D,T=new D,A=new ft,w=new ft,x=new ft;for(let b=0,E=0;b<r.length;b+=9,E+=6){M.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),A.set(o[E+0],o[E+1]),w.set(o[E+2],o[E+3]),x.set(o[E+4],o[E+5]),T.copy(M).add(y).add(v).divideScalar(3);const C=m(T);_(A,E+0,M,C),_(w,E+2,y,C),_(x,E+4,v,C)}}function _(M,y,v,T){T<0&&M.x===1&&(o[y]=M.x-1),v.x===0&&v.z===0&&(o[y]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bl(t.vertices,t.indices,t.radius,t.detail)}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ft:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new D,s=[],r=[],o=[],a=new D,c=new Se;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(le(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(le(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class kl extends jn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ft){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class T0 extends kl{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Hl(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const nh=new D,ih=new D,Ba=new Hl,ka=new Hl,Ha=new Hl;class sa extends jn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new D){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(ih.subVectors(s[0],s[1]).add(s[0]),l=ih);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(nh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=nh),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ba.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,_,m),ka.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,_,m),Ha.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Ba.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),ka.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Ha.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return i.set(Ba.calc(c),ka.calc(c),Ha.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function sh(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function A0(n,t){const e=1-n;return e*e*t}function R0(n,t){return 2*(1-n)*n*t}function C0(n,t){return n*n*t}function yr(n,t,e,i){return A0(n,t)+R0(n,e)+C0(n,i)}function P0(n,t){const e=1-n;return e*e*e*t}function I0(n,t){const e=1-n;return 3*e*e*n*t}function L0(n,t){return 3*(1-n)*n*n*t}function D0(n,t){return n*n*n*t}function Sr(n,t,e,i,s){return P0(n,t)+I0(n,e)+L0(n,i)+D0(n,s)}class Jd extends jn{constructor(t=new ft,e=new ft,i=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ft){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Sr(t,s.x,r.x,o.x,a.x),Sr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class N0 extends jn{constructor(t=new D,e=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new D){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Sr(t,s.x,r.x,o.x,a.x),Sr(t,s.y,r.y,o.y,a.y),Sr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qd extends jn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jd extends jn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tf extends jn{constructor(t=new ft,e=new ft,i=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ft){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(yr(t,s.x,r.x,o.x),yr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ef extends jn{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(yr(t,s.x,r.x,o.x),yr(t,s.y,r.y,o.y),yr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nf extends jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(sh(a,c.x,l.x,u.x,d.x),sh(a,c.y,l.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ft().fromArray(s))}return this}}var $o=Object.freeze({__proto__:null,ArcCurve:T0,CatmullRomCurve3:sa,CubicBezierCurve:Jd,CubicBezierCurve3:N0,EllipseCurve:kl,LineCurve:Qd,LineCurve3:jd,QuadraticBezierCurve:tf,QuadraticBezierCurve3:ef,SplineCurve:nf});class U0 extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $o[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new $o[s.type]().fromJSON(s))}return this}}class nl extends U0{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Qd(this.currentPoint.clone(),new ft(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new tf(this.currentPoint.clone(),new ft(t,e),new ft(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Jd(this.currentPoint.clone(),new ft(t,e),new ft(i,s),new ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new nf(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){const l=new kl(t,e,i,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class il extends nl{constructor(t){super(t),this.uuid=Kn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new nl().fromJSON(s))}return this}}function F0(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=sf(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=H0(n,t,r,e)),n.length>80*e){a=n[0],c=n[1];let u=a,d=c;for(let h=e;h<s;h+=e){const f=n[h],g=n[h+1];f<a&&(a=f),g<c&&(c=g),f>u&&(u=f),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return Nr(r,o,e,a,c,l,0),o}function sf(n,t,e,i,s){let r;if(s===Q0(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=rh(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=rh(o/i|0,n[o],n[o+1],r);return r&&Ws(r,r.next)&&(Fr(r),r=r.next),r}function ts(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ws(e,e.next)||De(e.prev,e,e.next)===0)){if(Fr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Nr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&q0(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?z0(n,i,s,r):O0(n)){t.push(c.i,n.i,l.i),Fr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=B0(ts(n),t),Nr(n,t,e,i,s,r,2)):o===2&&k0(n,t,e,i,s,r):Nr(ts(n),t,e,i,s,r,1);break}}}function O0(n){const t=n.prev,e=n,i=n.next;if(De(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,u=Math.min(s,r,o),d=Math.min(a,c,l),h=Math.max(s,r,o),f=Math.max(a,c,l);let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&pr(s,a,r,c,o,l,g.x,g.y)&&De(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function z0(n,t,e,i){const s=n.prev,r=n,o=n.next;if(De(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,c,l),g=Math.min(u,d,h),_=Math.max(a,c,l),m=Math.max(u,d,h),p=sl(f,g,t,e,i),M=sl(_,m,t,e,i);let y=n.prevZ,v=n.nextZ;for(;y&&y.z>=p&&v&&v.z<=M;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&pr(a,u,c,d,l,h,y.x,y.y)&&De(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&pr(a,u,c,d,l,h,v.x,v.y)&&De(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&pr(a,u,c,d,l,h,y.x,y.y)&&De(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&pr(a,u,c,d,l,h,v.x,v.y)&&De(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function B0(n,t){let e=n;do{const i=e.prev,s=e.next.next;!Ws(i,s)&&of(i,e,e.next,s)&&Ur(i,s)&&Ur(s,i)&&(t.push(i.i,e.i,s.i),Fr(e),Fr(e.next),e=n=s),e=e.next}while(e!==n);return ts(e)}function k0(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$0(o,a)){let c=af(o,a);o=ts(o,o.next),c=ts(c,c.next),Nr(o,t,e,i,s,r,0),Nr(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function H0(n,t,e,i){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=sf(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Z0(l))}s.sort(G0);for(let r=0;r<s.length;r++)e=V0(s[r],e);return e}function G0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function V0(n,t){const e=W0(n,t);if(!e)return t;const i=af(e,n);return ts(i,i.next),ts(e,e.next)}function W0(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,o;if(Ws(n,e))return e;do{if(Ws(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;e=o;do{if(i>=e.x&&e.x>=c&&i!==e.x&&rf(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){const d=Math.abs(s-e.y)/(i-e.x);Ur(e,n)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&X0(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function X0(n,t){return De(n.prev,n,t.prev)<0&&De(t.next,n,n.next)<0}function q0(n,t,e,i){let s=n;do s.z===0&&(s.z=sl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Y0(s)}function Y0(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function sl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Z0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function rf(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function pr(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&rf(n,t,e,i,s,r,o,a)}function $0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!K0(n,t)&&(Ur(n,t)&&Ur(t,n)&&J0(n,t)&&(De(n.prev,n,t.prev)||De(n,t.prev,t))||Ws(n,t)&&De(n.prev,n,n.next)>0&&De(t.prev,t,t.next)>0)}function De(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ws(n,t){return n.x===t.x&&n.y===t.y}function of(n,t,e,i){const s=xo(De(n,t,e)),r=xo(De(n,t,i)),o=xo(De(e,i,n)),a=xo(De(e,i,t));return!!(s!==r&&o!==a||s===0&&go(n,e,t)||r===0&&go(n,i,t)||o===0&&go(e,n,i)||a===0&&go(e,t,i))}function go(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function xo(n){return n>0?1:n<0?-1:0}function K0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&of(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ur(n,t){return De(n.prev,n,n.next)<0?De(n,t,n.next)>=0&&De(n,n.prev,t)>=0:De(n,t,n.prev)<0||De(n,n.next,t)<0}function J0(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function af(n,t){const e=rl(n.i,n.x,n.y),i=rl(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function rh(n,t,e,i){const s=rl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Fr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function rl(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Q0(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class j0{static triangulate(t,e,i=2){return F0(t,e,i)}}class Ls{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Ls.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];oh(t),ah(i,t);let o=t.length;e.forEach(oh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,ah(i,e[c]);const a=j0.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function oh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function ah(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Ko extends Me{constructor(t=new il([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:tg;let y,v=!1,T,A,w,x;if(p){y=p.getSpacedPoints(u),v=!0,h=!1;const it=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(u,it),A=new D,w=new D,x=new D}h||(m=0,f=0,g=0,_=0);const b=a.extractPoints(l);let E=b.shape;const C=b.holes;if(!Ls.isClockWise(E)){E=E.reverse();for(let it=0,rt=C.length;it<rt;it++){const st=C[it];Ls.isClockWise(st)&&(C[it]=st.reverse())}}function U(it){const st=10000000000000001e-36;let xt=it[0];for(let gt=1;gt<=it.length;gt++){const Xt=gt%it.length,ht=it[Xt],Ut=ht.x-xt.x,Bt=ht.y-xt.y,z=Ut*Ut+Bt*Bt,Zt=Math.max(Math.abs(ht.x),Math.abs(ht.y),Math.abs(xt.x),Math.abs(xt.y)),Kt=st*Zt*Zt;if(z<=Kt){it.splice(Xt,1),gt--;continue}xt=ht}}U(E),C.forEach(U);const O=C.length,L=E;for(let it=0;it<O;it++){const rt=C[it];E=E.concat(rt)}function F(it,rt,st){return rt||ue("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(rt,st)}const N=E.length;function k(it,rt,st){let xt,gt,Xt;const ht=it.x-rt.x,Ut=it.y-rt.y,Bt=st.x-it.x,z=st.y-it.y,Zt=ht*ht+Ut*Ut,Kt=ht*z-Ut*Bt;if(Math.abs(Kt)>Number.EPSILON){const P=Math.sqrt(Zt),S=Math.sqrt(Bt*Bt+z*z),G=rt.x-Ut/P,X=rt.y+ht/P,Q=st.x-z/S,dt=st.y+Bt/S,mt=((Q-G)*z-(dt-X)*Bt)/(ht*z-Ut*Bt);xt=G+ht*mt-it.x,gt=X+Ut*mt-it.y;const j=xt*xt+gt*gt;if(j<=2)return new ft(xt,gt);Xt=Math.sqrt(j/2)}else{let P=!1;ht>Number.EPSILON?Bt>Number.EPSILON&&(P=!0):ht<-Number.EPSILON?Bt<-Number.EPSILON&&(P=!0):Math.sign(Ut)===Math.sign(z)&&(P=!0),P?(xt=-Ut,gt=ht,Xt=Math.sqrt(Zt)):(xt=ht,gt=Ut,Xt=Math.sqrt(Zt/2))}return new ft(xt/Xt,gt/Xt)}const V=[];for(let it=0,rt=L.length,st=rt-1,xt=it+1;it<rt;it++,st++,xt++)st===rt&&(st=0),xt===rt&&(xt=0),V[it]=k(L[it],L[st],L[xt]);const q=[];let W,ut=V.concat();for(let it=0,rt=O;it<rt;it++){const st=C[it];W=[];for(let xt=0,gt=st.length,Xt=gt-1,ht=xt+1;xt<gt;xt++,Xt++,ht++)Xt===gt&&(Xt=0),ht===gt&&(ht=0),W[xt]=k(st[xt],st[Xt],st[ht]);q.push(W),ut=ut.concat(W)}let Nt;if(m===0)Nt=Ls.triangulateShape(L,C);else{const it=[],rt=[];for(let st=0;st<m;st++){const xt=st/m,gt=f*Math.cos(xt*Math.PI/2),Xt=g*Math.sin(xt*Math.PI/2)+_;for(let ht=0,Ut=L.length;ht<Ut;ht++){const Bt=F(L[ht],V[ht],Xt);Et(Bt.x,Bt.y,-gt),xt===0&&it.push(Bt)}for(let ht=0,Ut=O;ht<Ut;ht++){const Bt=C[ht];W=q[ht];const z=[];for(let Zt=0,Kt=Bt.length;Zt<Kt;Zt++){const P=F(Bt[Zt],W[Zt],Xt);Et(P.x,P.y,-gt),xt===0&&z.push(P)}xt===0&&rt.push(z)}}Nt=Ls.triangulateShape(it,rt)}const wt=Nt.length,Mt=g+_;for(let it=0;it<N;it++){const rt=h?F(E[it],ut[it],Mt):E[it];v?(w.copy(T.normals[0]).multiplyScalar(rt.x),A.copy(T.binormals[0]).multiplyScalar(rt.y),x.copy(y[0]).add(w).add(A),Et(x.x,x.y,x.z)):Et(rt.x,rt.y,0)}for(let it=1;it<=u;it++)for(let rt=0;rt<N;rt++){const st=h?F(E[rt],ut[rt],Mt):E[rt];v?(w.copy(T.normals[it]).multiplyScalar(st.x),A.copy(T.binormals[it]).multiplyScalar(st.y),x.copy(y[it]).add(w).add(A),Et(x.x,x.y,x.z)):Et(st.x,st.y,d/u*it)}for(let it=m-1;it>=0;it--){const rt=it/m,st=f*Math.cos(rt*Math.PI/2),xt=g*Math.sin(rt*Math.PI/2)+_;for(let gt=0,Xt=L.length;gt<Xt;gt++){const ht=F(L[gt],V[gt],xt);Et(ht.x,ht.y,d+st)}for(let gt=0,Xt=C.length;gt<Xt;gt++){const ht=C[gt];W=q[gt];for(let Ut=0,Bt=ht.length;Ut<Bt;Ut++){const z=F(ht[Ut],W[Ut],xt);v?Et(z.x,z.y+y[u-1].y,y[u-1].x+st):Et(z.x,z.y,d+st)}}}K(),lt();function K(){const it=s.length/3;if(h){let rt=0,st=N*rt;for(let xt=0;xt<wt;xt++){const gt=Nt[xt];Ft(gt[2]+st,gt[1]+st,gt[0]+st)}rt=u+m*2,st=N*rt;for(let xt=0;xt<wt;xt++){const gt=Nt[xt];Ft(gt[0]+st,gt[1]+st,gt[2]+st)}}else{for(let rt=0;rt<wt;rt++){const st=Nt[rt];Ft(st[2],st[1],st[0])}for(let rt=0;rt<wt;rt++){const st=Nt[rt];Ft(st[0]+N*u,st[1]+N*u,st[2]+N*u)}}i.addGroup(it,s.length/3-it,0)}function lt(){const it=s.length/3;let rt=0;nt(L,rt),rt+=L.length;for(let st=0,xt=C.length;st<xt;st++){const gt=C[st];nt(gt,rt),rt+=gt.length}i.addGroup(it,s.length/3-it,1)}function nt(it,rt){let st=it.length;for(;--st>=0;){const xt=st;let gt=st-1;gt<0&&(gt=it.length-1);for(let Xt=0,ht=u+m*2;Xt<ht;Xt++){const Ut=N*Xt,Bt=N*(Xt+1),z=rt+xt+Ut,Zt=rt+gt+Ut,Kt=rt+gt+Bt,P=rt+xt+Bt;pt(z,Zt,Kt,P)}}}function Et(it,rt,st){c.push(it),c.push(rt),c.push(st)}function Ft(it,rt,st){ae(it),ae(rt),ae(st);const xt=s.length/3,gt=M.generateTopUV(i,s,xt-3,xt-2,xt-1);Wt(gt[0]),Wt(gt[1]),Wt(gt[2])}function pt(it,rt,st,xt){ae(it),ae(rt),ae(xt),ae(rt),ae(st),ae(xt);const gt=s.length/3,Xt=M.generateSideWallUV(i,s,gt-6,gt-3,gt-2,gt-1);Wt(Xt[0]),Wt(Xt[1]),Wt(Xt[3]),Wt(Xt[1]),Wt(Xt[2]),Wt(Xt[3])}function ae(it){s.push(c[it*3+0]),s.push(c[it*3+1]),s.push(c[it*3+2])}function Wt(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return eg(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new $o[s.type]().fromJSON(s)),new Ko(i,t.options)}}const tg={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],u=t[s*3+1];return[new ft(r,o),new ft(a,c),new ft(l,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],d=t[i*3+2],h=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ft(o,1-c),new ft(l,1-d),new ft(h,1-g),new ft(_,1-p)]:[new ft(a,1-c),new ft(u,1-d),new ft(f,1-g),new ft(m,1-p)]}};function eg(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class br extends Bl{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new br(t.radius,t.detail)}}class vn extends Me{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=t/a,h=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*h-o;for(let y=0;y<l;y++){const v=y*d-r;g.push(v,-M,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const y=M+l*p,v=M+l*(p+1),T=M+1+l*(p+1),A=M+1+l*p;f.push(y,v,A),f.push(v,T,A)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.width,t.height,t.widthSegments,t.heightSegments)}}class de extends Me{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new D,h=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const M=[],y=p/i,v=o+y*a,T=t*Math.cos(v),A=Math.sqrt(t*t-T*T);let w=0;p===0&&o===0?w=.5/e:p===i&&c===Math.PI&&(w=-.5/e);for(let x=0;x<=e;x++){const b=x/e,E=s+b*r;d.x=-A*Math.cos(E),d.y=T,d.z=A*Math.sin(E),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(b+w,1-y),M.push(l++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){const y=u[p][M+1],v=u[p][M],T=u[p+1][M],A=u[p+1][M+1];(p!==0||o>0)&&f.push(y,v,A),(p!==i-1||c<Math.PI)&&f.push(v,T,A)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new de(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Un extends Me{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],d=[],h=new D,f=new D,g=new D;for(let _=0;_<=i;_++){const m=o+_/i*a;for(let p=0;p<=s;p++){const M=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(M),f.y=(t+e*Math.cos(m))*Math.sin(M),f.z=e*Math.sin(m),l.push(f.x,f.y,f.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/s),d.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=s;m++){const p=(s+1)*_+m-1,M=(s+1)*(_-1)+m-1,y=(s+1)*(_-1)+m,v=(s+1)*_+m;c.push(p,M,v),c.push(M,y,v)}this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ra extends Me{constructor(t=new ef(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,c=new D,l=new ft;let u=new D;const d=[],h=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(f,2));function _(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),M(),p()}function m(y){u=t.getPointAt(y/e,u);const v=o.normals[y],T=o.binormals[y];for(let A=0;A<=s;A++){const w=A/s*Math.PI*2,x=Math.sin(w),b=-Math.cos(w);c.x=b*v.x+x*T.x,c.y=b*v.y+x*T.y,c.z=b*v.z+x*T.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,d.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let v=1;v<=s;v++){const T=(s+1)*(y-1)+(v-1),A=(s+1)*y+(v-1),w=(s+1)*y+v,x=(s+1)*(y-1)+v;g.push(T,A,x),g.push(A,w,x)}}function M(){for(let y=0;y<=e;y++)for(let v=0;v<=s;v++)l.x=y/e,l.y=v/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ra(new $o[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Xs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(ch(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(ch(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function cn(n){const t={};for(let e=0;e<n.length;e++){const i=Xs(n[e]);for(const s in i)t[s]=i[s]}return t}function ch(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ng(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function cf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const ig={clone:Xs,merge:cn};var sg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends Zs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sg,this.fragmentShader=rg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=ng(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ee().setHex(s.value);break;case"v2":this.uniforms[i].value=new ft().fromArray(s.value);break;case"v3":this.uniforms[i].value=new D().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Le().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ne().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Se().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class og extends Sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class es extends Zs{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ee(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jc,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class ag extends Zs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Am,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cg extends Zs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Gl extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class lg extends Gl{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ga=new Se,lh=new D,uh=new D;class lf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ol,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;lh.setFromMatrixPosition(t.matrixWorld),e.position.copy(lh),uh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uh),e.updateMatrixWorld(),Ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Lr||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ga)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const _o=new D,vo=new Ys,Vn=new D;class uf extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(_o,vo,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,vo,Vn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(_o,vo,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,vo,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wi=new D,hh=new ft,dh=new ft;class Mn extends uf{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Dr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dr*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wi.x,wi.y).multiplyScalar(-t/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-t/wi.z)}getViewSize(t,e){return this.getViewBounds(t,hh,dh),e.subVectors(dh,hh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ug extends lf{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0}}class hg extends Gl{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ug}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Vl extends uf{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class dg extends lf{constructor(){super(new Vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fg extends Gl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new dg}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Ts=-90,As=1;class pg extends ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn(Ts,As,t,e);s.layers=this.layers,this.add(s);const r=new Mn(Ts,As,t,e);r.layers=this.layers,this.add(r);const o=new Mn(Ts,As,t,e);o.layers=this.layers,this.add(o);const a=new Mn(Ts,As,t,e);a.layers=this.layers,this.add(a);const c=new Mn(Ts,As,t,e);c.layers=this.layers,this.add(c);const l=new Mn(Ts,As,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Lr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class mg extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const fh=new Se;class gg{constructor(t,e,i=0,s=1/0){this.ray=new Yd(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ul,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ue("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return fh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fh),this}intersectObject(t,e=!0,i=[]){return ol(t,this,i,e),i.sort(ph),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)ol(t[s],this,i,e);return i.sort(ph),i}}function ph(n,t){return n.distance-t.distance}function ol(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)ol(r[o],t,e,!0)}}const iu=class iu{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};iu.prototype.isMatrix2=!0;let mh=iu;function gh(n,t,e,i){const s=xg(i);switch(e){case Bd:return n*t;case Al:return n*t/s.components*s.byteLength;case Rl:return n*t/s.components*s.byteLength;case Ji:return n*t*2/s.components*s.byteLength;case Cl:return n*t*2/s.components*s.byteLength;case kd:return n*t*3/s.components*s.byteLength;case Bn:return n*t*4/s.components*s.byteLength;case Pl:return n*t*4/s.components*s.byteLength;case Io:case Lo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Do:case No:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wc:case Tc:return Math.max(n,16)*Math.max(t,8)/4;case bc:case Ec:return Math.max(n,8)*Math.max(t,8)/2;case Ac:case Rc:case Pc:case Ic:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Cc:case ko:case Lc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Nc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Uc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case zc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Bc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case kc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Wc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Xc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case qc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Yc:case Zc:case $c:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Kc:case Jc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ho:case Qc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xg(n){switch(n){case yn:case Ud:return{byteLength:1,components:1};case Pr:case Fd:case fi:return{byteLength:2,components:1};case El:case Tl:return{byteLength:2,components:4};case Qn:case wl:case zn:return{byteLength:4,components:1};case Od:case zd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sl}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function _g(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mg=`#ifdef USE_ALPHAHASH
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
#endif`,yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eg=`#ifdef USE_AOMAP
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
#endif`,Tg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ag=`#ifdef USE_BATCHING
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
#endif`,Rg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ig=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lg=`#ifdef USE_IRIDESCENCE
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
#endif`,Dg=`#ifdef USE_BUMPMAP
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
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Gg=`#define PI 3.141592653589793
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
} // validated`,Vg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wg=`vec3 transformedNormal = objectNormal;
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
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$g="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jg=`#ifdef USE_ENVMAP
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
#endif`,Qg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
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
#endif`,tx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ox=`#ifdef USE_GRADIENTMAP
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
}`,ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ux=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,hx=`#ifdef USE_ENVMAP
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
#endif`,dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gx=`PhysicalMaterial material;
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
#endif`,xx=`uniform sampler2D dfgLUT;
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
}`,_x=`
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
#endif`,vx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Sx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ax=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cx=`#if defined( USE_POINTS_UV )
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
#endif`,Px=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ux=`#ifdef USE_MORPHTARGETS
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
#endif`,Fx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gx=`#ifdef USE_NORMALMAP
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
#endif`,Vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,s_=`float getShadowMask() {
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
}`,r_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o_=`#ifdef USE_SKINNING
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
#endif`,a_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c_=`#ifdef USE_SKINNING
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
#endif`,l_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,f_=`#ifdef USE_TRANSMISSION
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
#endif`,p_=`#ifdef USE_TRANSMISSION
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
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,__=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const v_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M_=`uniform sampler2D t2D;
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
}`,y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,b_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`#include <common>
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
}`,T_=`#if DEPTH_PACKING == 3200
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
}`,A_=`#define DISTANCE
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
}`,R_=`#define DISTANCE
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
}`,C_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I_=`uniform float scale;
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
}`,L_=`uniform vec3 diffuse;
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
}`,D_=`#include <common>
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
}`,N_=`uniform vec3 diffuse;
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
}`,U_=`#define LAMBERT
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
}`,F_=`#define LAMBERT
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
}`,O_=`#define MATCAP
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
}`,z_=`#define MATCAP
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
}`,B_=`#define NORMAL
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
}`,k_=`#define NORMAL
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
}`,H_=`#define PHONG
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
}`,G_=`#define PHONG
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
}`,V_=`#define STANDARD
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
}`,W_=`#define STANDARD
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
}`,X_=`#define TOON
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
}`,q_=`#define TOON
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
}`,Y_=`uniform float size;
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
}`,Z_=`uniform vec3 diffuse;
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
}`,$_=`#include <common>
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
}`,K_=`uniform vec3 color;
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
}`,J_=`uniform float rotation;
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
}`,Q_=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:vg,alphahash_pars_fragment:Mg,alphamap_fragment:yg,alphamap_pars_fragment:Sg,alphatest_fragment:bg,alphatest_pars_fragment:wg,aomap_fragment:Eg,aomap_pars_fragment:Tg,batching_pars_vertex:Ag,batching_vertex:Rg,begin_vertex:Cg,beginnormal_vertex:Pg,bsdfs:Ig,iridescence_fragment:Lg,bumpmap_pars_fragment:Dg,clipping_planes_fragment:Ng,clipping_planes_pars_fragment:Ug,clipping_planes_pars_vertex:Fg,clipping_planes_vertex:Og,color_fragment:zg,color_pars_fragment:Bg,color_pars_vertex:kg,color_vertex:Hg,common:Gg,cube_uv_reflection_fragment:Vg,defaultnormal_vertex:Wg,displacementmap_pars_vertex:Xg,displacementmap_vertex:qg,emissivemap_fragment:Yg,emissivemap_pars_fragment:Zg,colorspace_fragment:$g,colorspace_pars_fragment:Kg,envmap_fragment:Jg,envmap_common_pars_fragment:Qg,envmap_pars_fragment:jg,envmap_pars_vertex:tx,envmap_physical_pars_fragment:hx,envmap_vertex:ex,fog_vertex:nx,fog_pars_vertex:ix,fog_fragment:sx,fog_pars_fragment:rx,gradientmap_pars_fragment:ox,lightmap_pars_fragment:ax,lights_lambert_fragment:cx,lights_lambert_pars_fragment:lx,lights_pars_begin:ux,lights_toon_fragment:dx,lights_toon_pars_fragment:fx,lights_phong_fragment:px,lights_phong_pars_fragment:mx,lights_physical_fragment:gx,lights_physical_pars_fragment:xx,lights_fragment_begin:_x,lights_fragment_maps:vx,lights_fragment_end:Mx,lightprobes_pars_fragment:yx,logdepthbuf_fragment:Sx,logdepthbuf_pars_fragment:bx,logdepthbuf_pars_vertex:wx,logdepthbuf_vertex:Ex,map_fragment:Tx,map_pars_fragment:Ax,map_particle_fragment:Rx,map_particle_pars_fragment:Cx,metalnessmap_fragment:Px,metalnessmap_pars_fragment:Ix,morphinstance_vertex:Lx,morphcolor_vertex:Dx,morphnormal_vertex:Nx,morphtarget_pars_vertex:Ux,morphtarget_vertex:Fx,normal_fragment_begin:Ox,normal_fragment_maps:zx,normal_pars_fragment:Bx,normal_pars_vertex:kx,normal_vertex:Hx,normalmap_pars_fragment:Gx,clearcoat_normal_fragment_begin:Vx,clearcoat_normal_fragment_maps:Wx,clearcoat_pars_fragment:Xx,iridescence_pars_fragment:qx,opaque_fragment:Yx,packing:Zx,premultiplied_alpha_fragment:$x,project_vertex:Kx,dithering_fragment:Jx,dithering_pars_fragment:Qx,roughnessmap_fragment:jx,roughnessmap_pars_fragment:t_,shadowmap_pars_fragment:e_,shadowmap_pars_vertex:n_,shadowmap_vertex:i_,shadowmask_pars_fragment:s_,skinbase_vertex:r_,skinning_pars_vertex:o_,skinning_vertex:a_,skinnormal_vertex:c_,specularmap_fragment:l_,specularmap_pars_fragment:u_,tonemapping_fragment:h_,tonemapping_pars_fragment:d_,transmission_fragment:f_,transmission_pars_fragment:p_,uv_pars_fragment:m_,uv_pars_vertex:g_,uv_vertex:x_,worldpos_vertex:__,background_vert:v_,background_frag:M_,backgroundCube_vert:y_,backgroundCube_frag:S_,cube_vert:b_,cube_frag:w_,depth_vert:E_,depth_frag:T_,distance_vert:A_,distance_frag:R_,equirect_vert:C_,equirect_frag:P_,linedashed_vert:I_,linedashed_frag:L_,meshbasic_vert:D_,meshbasic_frag:N_,meshlambert_vert:U_,meshlambert_frag:F_,meshmatcap_vert:O_,meshmatcap_frag:z_,meshnormal_vert:B_,meshnormal_frag:k_,meshphong_vert:H_,meshphong_frag:G_,meshphysical_vert:V_,meshphysical_frag:W_,meshtoon_vert:X_,meshtoon_frag:q_,points_vert:Y_,points_frag:Z_,shadow_vert:$_,shadow_frag:K_,sprite_vert:J_,sprite_frag:Q_},At={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},qn={basic:{uniforms:cn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:cn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:cn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:cn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:cn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new ee(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:cn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:cn([At.points,At.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:cn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:cn([At.common,At.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:cn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:cn([At.sprite,At.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:cn([At.common,At.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:cn([At.lights,At.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};qn.physical={uniforms:cn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const Mo={r:0,b:0,g:0},j_=new Se,df=new ne;df.set(-1,0,0,0,1,0,0,0,1);function tv(n,t,e,i,s,r){const o=new ee(0);let a=s===!0?0:1,c,l,u=null,d=0,h=null;function f(M){let y=M.isScene===!0?M.background:null;if(y&&y.isTexture){const v=M.backgroundBlurriness>0;y=t.get(y,v)}return y}function g(M){let y=!1;const v=f(M);v===null?m(o,a):v&&v.isColor&&(m(v,1),y=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(M,y){const v=f(y);v&&(v.isCubeTexture||v.mapping===ia)?(l===void 0&&(l=new J(new te(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Xs(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(j_.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(df),l.material.toneMapped=he.getTransfer(v.colorSpace)!==xe,(u!==v||d!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new J(new vn(2,2),new Sn({name:"BackgroundMaterial",uniforms:Xs(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=he.getTransfer(v.colorSpace)!==xe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,y){M.getRGB(Mo,cf(n)),e.buffers.color.setClear(Mo.r,Mo.g,Mo.b,y,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,y=1){o.set(M),a=y,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:_,dispose:p}}function ev(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(C,I,U,O,L){let F=!1;const N=d(C,O,U,I);r!==N&&(r=N,l(r.object)),F=f(C,O,U,L),F&&g(C,O,U,L),L!==null&&t.update(L,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,v(C,I,U,O),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function u(C){return n.deleteVertexArray(C)}function d(C,I,U,O){const L=O.wireframe===!0;let F=i[I.id];F===void 0&&(F={},i[I.id]=F);const N=C.isInstancedMesh===!0?C.id:0;let k=F[N];k===void 0&&(k={},F[N]=k);let V=k[U.id];V===void 0&&(V={},k[U.id]=V);let q=V[L];return q===void 0&&(q=h(c()),V[L]=q),q}function h(C){const I=[],U=[],O=[];for(let L=0;L<e;L++)I[L]=0,U[L]=0,O[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:O,object:C,attributes:{},index:null}}function f(C,I,U,O){const L=r.attributes,F=I.attributes;let N=0;const k=U.getAttributes();for(const V in k)if(k[V].location>=0){const W=L[V];let ut=F[V];if(ut===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(ut=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(ut=C.instanceColor)),W===void 0||W.attribute!==ut||ut&&W.data!==ut.data)return!0;N++}return r.attributesNum!==N||r.index!==O}function g(C,I,U,O){const L={},F=I.attributes;let N=0;const k=U.getAttributes();for(const V in k)if(k[V].location>=0){let W=F[V];W===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(W=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(W=C.instanceColor));const ut={};ut.attribute=W,W&&W.data&&(ut.data=W.data),L[V]=ut,N++}r.attributes=L,r.attributesNum=N,r.index=O}function _(){const C=r.newAttributes;for(let I=0,U=C.length;I<U;I++)C[I]=0}function m(C){p(C,0)}function p(C,I){const U=r.newAttributes,O=r.enabledAttributes,L=r.attributeDivisors;U[C]=1,O[C]===0&&(n.enableVertexAttribArray(C),O[C]=1),L[C]!==I&&(n.vertexAttribDivisor(C,I),L[C]=I)}function M(){const C=r.newAttributes,I=r.enabledAttributes;for(let U=0,O=I.length;U<O;U++)I[U]!==C[U]&&(n.disableVertexAttribArray(U),I[U]=0)}function y(C,I,U,O,L,F,N){N===!0?n.vertexAttribIPointer(C,I,U,L,F):n.vertexAttribPointer(C,I,U,O,L,F)}function v(C,I,U,O){_();const L=O.attributes,F=U.getAttributes(),N=I.defaultAttributeValues;for(const k in F){const V=F[k];if(V.location>=0){let q=L[k];if(q===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(q=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(q=C.instanceColor)),q!==void 0){const W=q.normalized,ut=q.itemSize,Nt=t.get(q);if(Nt===void 0)continue;const wt=Nt.buffer,Mt=Nt.type,K=Nt.bytesPerElement,lt=Mt===n.INT||Mt===n.UNSIGNED_INT||q.gpuType===wl;if(q.isInterleavedBufferAttribute){const nt=q.data,Et=nt.stride,Ft=q.offset;if(nt.isInstancedInterleavedBuffer){for(let pt=0;pt<V.locationSize;pt++)p(V.location+pt,nt.meshPerAttribute);C.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let pt=0;pt<V.locationSize;pt++)m(V.location+pt);n.bindBuffer(n.ARRAY_BUFFER,wt);for(let pt=0;pt<V.locationSize;pt++)y(V.location+pt,ut/V.locationSize,Mt,W,Et*K,(Ft+ut/V.locationSize*pt)*K,lt)}else{if(q.isInstancedBufferAttribute){for(let nt=0;nt<V.locationSize;nt++)p(V.location+nt,q.meshPerAttribute);C.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let nt=0;nt<V.locationSize;nt++)m(V.location+nt);n.bindBuffer(n.ARRAY_BUFFER,wt);for(let nt=0;nt<V.locationSize;nt++)y(V.location+nt,ut/V.locationSize,Mt,W,ut*K,ut/V.locationSize*nt*K,lt)}}else if(N!==void 0){const W=N[k];if(W!==void 0)switch(W.length){case 2:n.vertexAttrib2fv(V.location,W);break;case 3:n.vertexAttrib3fv(V.location,W);break;case 4:n.vertexAttrib4fv(V.location,W);break;default:n.vertexAttrib1fv(V.location,W)}}}}M()}function T(){b();for(const C in i){const I=i[C];for(const U in I){const O=I[U];for(const L in O){const F=O[L];for(const N in F)u(F[N].object),delete F[N];delete O[L]}}delete i[C]}}function A(C){if(i[C.id]===void 0)return;const I=i[C.id];for(const U in I){const O=I[U];for(const L in O){const F=O[L];for(const N in F)u(F[N].object),delete F[N];delete O[L]}}delete i[C.id]}function w(C){for(const I in i){const U=i[I];for(const O in U){const L=U[O];if(L[C.id]===void 0)continue;const F=L[C.id];for(const N in F)u(F[N].object),delete F[N];delete L[C.id]}}}function x(C){for(const I in i){const U=i[I],O=C.isInstancedMesh===!0?C.id:0,L=U[O];if(L!==void 0){for(const F in L){const N=L[F];for(const k in N)u(N[k].object),delete N[k];delete L[F]}delete U[O],Object.keys(U).length===0&&delete i[I]}}}function b(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function nv(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),e.update(l,i,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function iv(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Bn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const x=w===fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==yn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==zn&&!x)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(jt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:v,maxSamples:T,samples:A}}function sv(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Hi,a=new ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const M=r?0:i,y=M*4;let v=p.clippingState||null;c.value=v,v=u(g,h,y,f);for(let T=0;T!==y;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)o.copy(d[y]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}const Ci=4,xh=[.125,.215,.35,.446,.526,.582],Wi=20,rv=256,ar=new Vl,_h=new ee;let Va=null,Wa=0,Xa=0,qa=!1;const ov=new D;class vh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=ov}=r;Va=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Va,Wa,Xa),this._renderer.xr.enabled=qa,t.scissorTest=!1,Rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===Gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Va=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:fi,format:Bn,colorSpace:Go,depthBuffer:!1},s=Mh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mh(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=av(r)),this._blurMaterial=lv(r,t,e),this._ggxMaterial=cv(r,t,e)}return s}_compileMaterial(t){const e=new J(new Me,t);this._renderer.compile(e,ar)}_sceneToCubeUV(t,e,i,s,r){const c=new Mn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(_h),d.toneMapping=$n,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new J(new te,new An({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(_h),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[y],r.y,r.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[y]));const T=this._cubeSize;Rs(s,v*T,y>2?T:0,T,T),d.setRenderTarget(s),p&&d.render(_,c),d.render(t,c)}d.toneMapping=f,d.autoClear=h,t.background=M}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ki||t.mapping===Gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Rs(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,ar)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=0+l*1.25,f=d*h,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-Ci?i-g+Ci:0),p=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,Rs(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(a,ar),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,Rs(t,m,p,3*_,2*_),s.setRenderTarget(t),s.render(a,ar)}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ue("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=l;const h=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Wi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Wi;m>Wi&&jt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);const p=[];let M=0;for(let w=0;w<Wi;++w){const x=w/_,b=Math.exp(-x*x/2);p.push(b),w===0?M+=b:w<m&&(M+=2*b)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const v=this._sizeLods[s],T=3*v*(s>y-Ci?s-y+Ci:0),A=4*(this._cubeSize-v);Rs(e,T,A,3*v,2*v),c.setRenderTarget(e),c.render(d,ar)}}function av(n){const t=[],e=[],i=[];let s=n;const r=n-Ci+1+xh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Ci?c=xh[o-n+Ci-1]:o===0&&(c=0),e.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let A=0;A<f;A++){const w=A%3*2/3-1,x=A>2?0:-1,b=[w,x,0,w+2/3,x,0,w+2/3,x+1,0,w,x,0,w+2/3,x+1,0,w,x+1,0];M.set(b,_*g*A),y.set(h,m*g*A);const E=[A,A,A,A,A,A];v.set(E,p*g*A)}const T=new Me;T.setAttribute("position",new pn(M,_)),T.setAttribute("uv",new pn(y,m)),T.setAttribute("faceIndex",new pn(v,p)),i.push(new J(T,null)),s>Ci&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Mh(n,t,e){const i=new Jn(n,t,e);return i.texture.mapping=ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function cv(n,t,e){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oa(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function lv(n,t,e){const i=new Float32Array(Wi),s=new D(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:oa(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function yh(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oa(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Sh(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function oa(){return`

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
	`}class ff extends Jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new $d(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new te(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:Xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:hi});r.uniforms.tEquirect.value=e;const o=new J(s,r),a=e.minFilter;return e.minFilter===Ri&&(e.minFilter=rn),new pg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}function uv(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===fa||f===pa)if(t.has(h)){const g=t.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new ff(g.height);return _.fromEquirectangularTexture(n,h),t.set(h,_),h.addEventListener("dispose",l),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,g=f===fa||f===pa,_=f===Ki||f===Gs;if(g||_){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new vh(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return g&&M&&M.height>0||_&&M&&c(M)?(i===null&&(i=new vh(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===fa?h.mapping=Ki:f===pa&&(h.mapping=Gs),h}function c(h){let f=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function l(h){const f=h.target;f.removeEventListener("dispose",l);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function hv(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Os("WebGLRenderer: "+i+" extension not supported."),s}}}function dv(n,t,e,i){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)t.update(h[f],n.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const M=f.array;_=f.version;for(let y=0,v=M.length;y<v;y+=3){const T=M[y+0],A=M[y+1],w=M[y+2];h.push(T,A,A,w,w,T)}}else{const M=g.array;_=g.version;for(let y=0,v=M.length/3-1;y<v;y+=3){const T=y+0,A=y+1,w=y+2;h.push(T,A,A,w,w,T)}}const m=new(g.count>=65535?Xd:Wd)(h,1);m.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function fv(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,h){n.drawElements(i,h,r,d*o),e.update(h,i,1)}function l(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*o,f),e.update(h,i,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let _=0;for(let m=0;m<f;m++)_+=h[m];e.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function pv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:ue("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function mv(n,t,e){const i=new WeakMap,s=new Le;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let E=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var f=E;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let T=a.attributes.position.count*v,A=1;T>t.maxTextureSize&&(A=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const w=new Float32Array(T*A*4*d),x=new Gd(w,T,A,d);x.type=zn,x.needsUpdate=!0;const b=v*4;for(let C=0;C<d;C++){const I=p[C],U=M[C],O=y[C],L=T*A*4*C;for(let F=0;F<I.count;F++){const N=F*b;g===!0&&(s.fromBufferAttribute(I,F),w[L+N+0]=s.x,w[L+N+1]=s.y,w[L+N+2]=s.z,w[L+N+3]=0),_===!0&&(s.fromBufferAttribute(U,F),w[L+N+4]=s.x,w[L+N+5]=s.y,w[L+N+6]=s.z,w[L+N+7]=0),m===!0&&(s.fromBufferAttribute(O,F),w[L+N+8]=s.x,w[L+N+9]=s.y,w[L+N+10]=s.z,w[L+N+11]=O.itemSize===4?s.w:1)}}h={count:d,texture:x,size:new ft(T,A)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function gv(n,t,e,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,d=l.geometry,h=t.get(l,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const xv={[Rd]:"LINEAR_TONE_MAPPING",[Cd]:"REINHARD_TONE_MAPPING",[Pd]:"CINEON_TONE_MAPPING",[bl]:"ACES_FILMIC_TONE_MAPPING",[Ld]:"AGX_TONE_MAPPING",[Dd]:"NEUTRAL_TONE_MAPPING",[Id]:"CUSTOM_TONE_MAPPING"};function _v(n,t,e,i,s,r){const o=new Jn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new Vs(t,e):void 0}),a=new Jn(t,e,{type:fi,depthBuffer:!1,stencilBuffer:!1}),c=new Me;c.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const l=new og({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new J(c,l),d=new Vl(-1,1,1,-1,0,1);let h=null,f=null,g=!1,_,m=null,p=[],M=!1;this.setSize=function(y,v){o.setSize(y,v),a.setSize(y,v);for(let T=0;T<p.length;T++){const A=p[T];A.setSize&&A.setSize(y,v)}},this.setEffects=function(y){p=y,M=p.length>0&&p[0].isRenderPass===!0;const v=o.width,T=o.height;for(let A=0;A<p.length;A++){const w=p[A];w.setSize&&w.setSize(v,T)}},this.begin=function(y,v){if(g||y.toneMapping===$n&&p.length===0)return!1;if(m=v,v!==null){const T=v.width,A=v.height;(o.width!==T||o.height!==A)&&this.setSize(T,A)}return M===!1&&y.setRenderTarget(o),_=y.toneMapping,y.toneMapping=$n,!0},this.hasRenderPass=function(){return M},this.end=function(y,v){y.toneMapping=_,g=!0;let T=o,A=a;for(let w=0;w<p.length;w++){const x=p[w];if(x.enabled!==!1&&(x.render(y,A,T,v),x.needsSwap!==!1)){const b=T;T=A,A=b}}if(h!==y.outputColorSpace||f!==y.toneMapping){h=y.outputColorSpace,f=y.toneMapping,l.defines={},he.getTransfer(h)===xe&&(l.defines.SRGB_TRANSFER="");const w=xv[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(m),y.render(u,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}const pf=new je,al=new Vs(1,1),mf=new Gd,gf=new o0,xf=new $d,bh=[],wh=[],Eh=new Float32Array(16),Th=new Float32Array(9),Ah=new Float32Array(4);function $s(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=bh[s];if(r===void 0&&(r=new Float32Array(s),bh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function We(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Xe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function aa(n,t){let e=wh[t];e===void 0&&(e=new Int32Array(t),wh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function vv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Mv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;n.uniform2fv(this.addr,t),Xe(e,t)}}function yv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;n.uniform3fv(this.addr,t),Xe(e,t)}}function Sv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;n.uniform4fv(this.addr,t),Xe(e,t)}}function bv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(We(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,i))return;Ah.set(i),n.uniformMatrix2fv(this.addr,!1,Ah),Xe(e,i)}}function wv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(We(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,i))return;Th.set(i),n.uniformMatrix3fv(this.addr,!1,Th),Xe(e,i)}}function Ev(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(We(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,i))return;Eh.set(i),n.uniformMatrix4fv(this.addr,!1,Eh),Xe(e,i)}}function Tv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Av(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;n.uniform2iv(this.addr,t),Xe(e,t)}}function Rv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;n.uniform3iv(this.addr,t),Xe(e,t)}}function Cv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;n.uniform4iv(this.addr,t),Xe(e,t)}}function Pv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Iv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;n.uniform2uiv(this.addr,t),Xe(e,t)}}function Lv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;n.uniform3uiv(this.addr,t),Xe(e,t)}}function Dv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;n.uniform4uiv(this.addr,t),Xe(e,t)}}function Nv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(al.compareFunction=e.isReversedDepthBuffer()?Ll:Il,r=al):r=pf,e.setTexture2D(t||r,s)}function Uv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||gf,s)}function Fv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||xf,s)}function Ov(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||mf,s)}function zv(n){switch(n){case 5126:return vv;case 35664:return Mv;case 35665:return yv;case 35666:return Sv;case 35674:return bv;case 35675:return wv;case 35676:return Ev;case 5124:case 35670:return Tv;case 35667:case 35671:return Av;case 35668:case 35672:return Rv;case 35669:case 35673:return Cv;case 5125:return Pv;case 36294:return Iv;case 36295:return Lv;case 36296:return Dv;case 35678:case 36198:case 36298:case 36306:case 35682:return Nv;case 35679:case 36299:case 36307:return Uv;case 35680:case 36300:case 36308:case 36293:return Fv;case 36289:case 36303:case 36311:case 36292:return Ov}}function Bv(n,t){n.uniform1fv(this.addr,t)}function kv(n,t){const e=$s(t,this.size,2);n.uniform2fv(this.addr,e)}function Hv(n,t){const e=$s(t,this.size,3);n.uniform3fv(this.addr,e)}function Gv(n,t){const e=$s(t,this.size,4);n.uniform4fv(this.addr,e)}function Vv(n,t){const e=$s(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Wv(n,t){const e=$s(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Xv(n,t){const e=$s(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function qv(n,t){n.uniform1iv(this.addr,t)}function Yv(n,t){n.uniform2iv(this.addr,t)}function Zv(n,t){n.uniform3iv(this.addr,t)}function $v(n,t){n.uniform4iv(this.addr,t)}function Kv(n,t){n.uniform1uiv(this.addr,t)}function Jv(n,t){n.uniform2uiv(this.addr,t)}function Qv(n,t){n.uniform3uiv(this.addr,t)}function jv(n,t){n.uniform4uiv(this.addr,t)}function tM(n,t,e){const i=this.cache,s=t.length,r=aa(e,s);We(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=al:o=pf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function eM(n,t,e){const i=this.cache,s=t.length,r=aa(e,s);We(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||gf,r[o])}function nM(n,t,e){const i=this.cache,s=t.length,r=aa(e,s);We(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||xf,r[o])}function iM(n,t,e){const i=this.cache,s=t.length,r=aa(e,s);We(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||mf,r[o])}function sM(n){switch(n){case 5126:return Bv;case 35664:return kv;case 35665:return Hv;case 35666:return Gv;case 35674:return Vv;case 35675:return Wv;case 35676:return Xv;case 5124:case 35670:return qv;case 35667:case 35671:return Yv;case 35668:case 35672:return Zv;case 35669:case 35673:return $v;case 5125:return Kv;case 36294:return Jv;case 36295:return Qv;case 36296:return jv;case 35678:case 36198:case 36298:case 36306:case 35682:return tM;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return nM;case 36289:case 36303:case 36311:case 36292:return iM}}class rM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=zv(e.type)}}class oM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sM(e.type)}}class aM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Ya=/(\w+)(\])?(\[|\.)?/g;function Rh(n,t){n.seq.push(t),n.map[t.id]=t}function cM(n,t,e){const i=n.name,s=i.length;for(Ya.lastIndex=0;;){const r=Ya.exec(i),o=Ya.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Rh(e,l===void 0?new rM(a,n,t):new oM(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new aM(a),Rh(e,d)),e=d}}}class Uo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);cM(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Ch(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const lM=37297;let uM=0;function hM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Ph=new ne;function dM(n){he._getMatrix(Ph,he.workingColorSpace,n);const t=`mat3( ${Ph.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(n)){case Vo:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ih(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+hM(n.getShaderSource(t),a)}else return r}function fM(n,t){const e=dM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const pM={[Rd]:"Linear",[Cd]:"Reinhard",[Pd]:"Cineon",[bl]:"ACESFilmic",[Ld]:"AgX",[Dd]:"Neutral",[Id]:"Custom"};function mM(n,t){const e=pM[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const yo=new D;function gM(){he.getLuminanceCoefficients(yo);const n=yo.x.toFixed(4),t=yo.y.toFixed(4),e=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function _M(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function vM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function mr(n){return n!==""}function Lh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const MM=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(n){return n.replace(MM,SM)}const yM=new Map;function SM(n,t){let e=re[t];if(e===void 0){const i=yM.get(t);if(i!==void 0)e=re[i],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return cl(e)}const bM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(n){return n.replace(bM,wM)}function wM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const EM={[Po]:"SHADOWMAP_TYPE_PCF",[fr]:"SHADOWMAP_TYPE_VSM"};function TM(n){return EM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const AM={[Ki]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[ia]:"ENVMAP_TYPE_CUBE_UV"};function RM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":AM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const CM={[Gs]:"ENVMAP_MODE_REFRACTION"};function PM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":CM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const IM={[Ad]:"ENVMAP_BLENDING_MULTIPLY",[wm]:"ENVMAP_BLENDING_MIX",[Em]:"ENVMAP_BLENDING_ADD"};function LM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":IM[n.combine]||"ENVMAP_BLENDING_NONE"}function DM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function NM(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=TM(e),l=RM(e),u=PM(e),d=LM(e),h=DM(e),f=xM(e),g=_M(r),_=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(mr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(mr).join(`
`),p.length>0&&(p+=`
`)):(m=[Uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),p=[Uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?re.tonemapping_pars_fragment:"",e.toneMapping!==$n?mM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,fM("linearToOutputTexel",e.outputColorSpace),gM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mr).join(`
`)),o=cl(o),o=Lh(o,e),o=Dh(o,e),a=cl(a),a=Lh(a,e),a=Dh(a,e),o=Nh(o),a=Nh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+m+o,v=M+p+a,T=Ch(s,s.VERTEX_SHADER,y),A=Ch(s,s.FRAGMENT_SHADER,v);s.attachShader(_,T),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(C){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(_)||"",U=s.getShaderInfoLog(T)||"",O=s.getShaderInfoLog(A)||"",L=I.trim(),F=U.trim(),N=O.trim();let k=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,T,A);else{const q=Ih(s,T,"vertex"),W=Ih(s,A,"fragment");ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+q+`
`+W)}else L!==""?jt("WebGLProgram: Program Info Log:",L):(F===""||N==="")&&(V=!1);V&&(C.diagnostics={runnable:k,programLog:L,vertexShader:{log:F,prefix:m},fragmentShader:{log:N,prefix:p}})}s.deleteShader(T),s.deleteShader(A),x=new Uo(s,_),b=vM(s,_)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,lM)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=uM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}let UM=0;class FM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new OM(t),e.set(t,i)),i}}class OM{constructor(t){this.id=UM++,this.code=t,this.usedTimes=0}}function zM(n){return n===Ji||n===ko||n===Ho}function BM(n,t,e,i,s,r){const o=new Ul,a=new FM,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,b,E,C,I,U){const O=C.fog,L=I.geometry,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=t.get(x.envMap||F,N),V=k&&k.mapping===ia?k.image.height:null,q=f[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&jt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const W=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ut=W!==void 0?W.length:0;let Nt=0;L.morphAttributes.position!==void 0&&(Nt=1),L.morphAttributes.normal!==void 0&&(Nt=2),L.morphAttributes.color!==void 0&&(Nt=3);let wt,Mt,K,lt;if(q){const kt=qn[q];wt=kt.vertexShader,Mt=kt.fragmentShader}else{wt=x.vertexShader,Mt=x.fragmentShader;const kt=a.getVertexShaderStage(x),Ne=a.getFragmentShaderStage(x);a.update(x,kt,Ne),K=kt.id,lt=Ne.id}const nt=n.getRenderTarget(),Et=n.state.buffers.depth.getReversed(),Ft=I.isInstancedMesh===!0,pt=I.isBatchedMesh===!0,ae=!!x.map,Wt=!!x.matcap,it=!!k,rt=!!x.aoMap,st=!!x.lightMap,xt=!!x.bumpMap&&x.wireframe===!1,gt=!!x.normalMap,Xt=!!x.displacementMap,ht=!!x.emissiveMap,Ut=!!x.metalnessMap,Bt=!!x.roughnessMap,z=x.anisotropy>0,Zt=x.clearcoat>0,Kt=x.dispersion>0,P=x.iridescence>0,S=x.sheen>0,G=x.transmission>0,X=z&&!!x.anisotropyMap,Q=Zt&&!!x.clearcoatMap,dt=Zt&&!!x.clearcoatNormalMap,mt=Zt&&!!x.clearcoatRoughnessMap,j=P&&!!x.iridescenceMap,tt=P&&!!x.iridescenceThicknessMap,_t=S&&!!x.sheenColorMap,Ot=S&&!!x.sheenRoughnessMap,yt=!!x.specularMap,St=!!x.specularColorMap,$t=!!x.specularIntensityMap,Jt=G&&!!x.transmissionMap,ie=G&&!!x.thicknessMap,B=!!x.gradientMap,vt=!!x.alphaMap,et=x.alphaTest>0,bt=!!x.alphaHash,Pt=!!x.extensions;let ot=$n;x.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ot=n.toneMapping);const Gt={shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:wt,fragmentShader:Mt,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:lt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:pt,batchingColor:pt&&I._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&I.instanceColor!==null,instancingMorph:Ft&&I.morphTexture!==null,outputColorSpace:nt===null?n.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ae,matcap:Wt,envMap:it,envMapMode:it&&k.mapping,envMapCubeUVHeight:V,aoMap:rt,lightMap:st,bumpMap:xt,normalMap:gt,displacementMap:Xt,emissiveMap:ht,normalMapObjectSpace:gt&&x.normalMapType===Rm,normalMapTangentSpace:gt&&x.normalMapType===jc,packedNormalMap:gt&&x.normalMapType===jc&&zM(x.normalMap.format),metalnessMap:Ut,roughnessMap:Bt,anisotropy:z,anisotropyMap:X,clearcoat:Zt,clearcoatMap:Q,clearcoatNormalMap:dt,clearcoatRoughnessMap:mt,dispersion:Kt,iridescence:P,iridescenceMap:j,iridescenceThicknessMap:tt,sheen:S,sheenColorMap:_t,sheenRoughnessMap:Ot,specularMap:yt,specularColorMap:St,specularIntensityMap:$t,transmission:G,transmissionMap:Jt,thicknessMap:ie,gradientMap:B,opaque:x.transparent===!1&&x.blending===Fs&&x.alphaToCoverage===!1,alphaMap:vt,alphaTest:et,alphaHash:bt,combine:x.combine,mapUv:ae&&g(x.map.channel),aoMapUv:rt&&g(x.aoMap.channel),lightMapUv:st&&g(x.lightMap.channel),bumpMapUv:xt&&g(x.bumpMap.channel),normalMapUv:gt&&g(x.normalMap.channel),displacementMapUv:Xt&&g(x.displacementMap.channel),emissiveMapUv:ht&&g(x.emissiveMap.channel),metalnessMapUv:Ut&&g(x.metalnessMap.channel),roughnessMapUv:Bt&&g(x.roughnessMap.channel),anisotropyMapUv:X&&g(x.anisotropyMap.channel),clearcoatMapUv:Q&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:dt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&g(x.sheenRoughnessMap.channel),specularMapUv:yt&&g(x.specularMap.channel),specularColorMapUv:St&&g(x.specularColorMap.channel),specularIntensityMapUv:$t&&g(x.specularIntensityMap.channel),transmissionMapUv:Jt&&g(x.transmissionMap.channel),thicknessMapUv:ie&&g(x.thicknessMap.channel),alphaMapUv:vt&&g(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(gt||z),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(ae||vt),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&gt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Et,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Nt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&E.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,decodeVideoTexture:ae&&x.map.isVideoTexture===!0&&he.getTransfer(x.map.colorSpace)===xe,decodeVideoTextureEmissive:ht&&x.emissiveMap.isVideoTexture===!0&&he.getTransfer(x.emissiveMap.colorSpace)===xe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===He,flipSided:x.side===on,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Pt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&x.extensions.multiDraw===!0||pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Gt.vertexUv1s=c.has(1),Gt.vertexUv2s=c.has(2),Gt.vertexUv3s=c.has(3),c.clear(),Gt}function m(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const E in x.defines)b.push(E),b.push(x.defines[E]);return x.isRawShaderMaterial===!1&&(p(b,x),M(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){const b=f[x.type];let E;if(b){const C=qn[b];E=ig.clone(C.uniforms)}else E=x.uniforms;return E}function v(x,b){let E=u.get(b);return E!==void 0?++E.usedTimes:(E=new NM(n,b,x,s),l.push(E),u.set(b,E)),E}function T(x){if(--x.usedTimes===0){const b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function A(x){a.remove(x)}function w(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:y,acquireProgram:v,releaseProgram:T,releaseShaderCache:A,programs:l,dispose:w}}function kM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function HM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Fh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Oh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,_,m,p){let M=n[t];return M===void 0?(M={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},n[t]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=g,M.materialVariant=o(h),M.groupOrder=_,M.renderOrder=h.renderOrder,M.z=m,M.group=p),t++,M}function c(h,f,g,_,m,p){const M=a(h,f,g,_,m,p);g.transmission>0?i.push(M):g.transparent===!0?s.push(M):e.push(M)}function l(h,f,g,_,m,p){const M=a(h,f,g,_,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function u(h,f,g){e.length>1&&e.sort(h||HM),i.length>1&&i.sort(f||Fh),s.length>1&&s.sort(f||Fh),g&&(e.reverse(),i.reverse(),s.reverse())}function d(){for(let h=t,f=n.length;h<f;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function GM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Oh,n.set(i,[o])):s>=r.length?(o=new Oh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function VM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new ee};break;case"SpotLight":e={position:new D,direction:new D,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function WM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let XM=0;function qM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function YM(n){const t=new VM,e=WM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);const s=new D,r=new Se,o=new Se;function a(l){let u=0,d=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,y=0,v=0,T=0,A=0,w=0;l.sort(qM);for(let b=0,E=l.length;b<E;b++){const C=l[b],I=C.color,U=C.intensity,O=C.distance;let L=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ji?L=C.shadow.map.texture:L=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=I.r*U,d+=I.g*U,h+=I.b*U;else if(C.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(C.sh.coefficients[F],U);w++}else if(C.isDirectionalLight){const F=t.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const N=C.shadow,k=e.get(C);k.shadowIntensity=N.intensity,k.shadowBias=N.bias,k.shadowNormalBias=N.normalBias,k.shadowRadius=N.radius,k.shadowMapSize=N.mapSize,i.directionalShadow[f]=k,i.directionalShadowMap[f]=L,i.directionalShadowMatrix[f]=C.shadow.matrix,M++}i.directional[f]=F,f++}else if(C.isSpotLight){const F=t.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(I).multiplyScalar(U),F.distance=O,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,i.spot[_]=F;const N=C.shadow;if(C.map&&(i.spotLightMap[T]=C.map,T++,N.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[_]=N.matrix,C.castShadow){const k=e.get(C);k.shadowIntensity=N.intensity,k.shadowBias=N.bias,k.shadowNormalBias=N.normalBias,k.shadowRadius=N.radius,k.shadowMapSize=N.mapSize,i.spotShadow[_]=k,i.spotShadowMap[_]=L,v++}_++}else if(C.isRectAreaLight){const F=t.get(C);F.color.copy(I).multiplyScalar(U),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=F,m++}else if(C.isPointLight){const F=t.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){const N=C.shadow,k=e.get(C);k.shadowIntensity=N.intensity,k.shadowBias=N.bias,k.shadowNormalBias=N.normalBias,k.shadowRadius=N.radius,k.shadowMapSize=N.mapSize,k.shadowCameraNear=N.camera.near,k.shadowCameraFar=N.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=L,i.pointShadowMatrix[g]=C.shadow.matrix,y++}i.point[g]=F,g++}else if(C.isHemisphereLight){const F=t.get(C);F.skyColor.copy(C.color).multiplyScalar(U),F.groundColor.copy(C.groundColor).multiplyScalar(U),i.hemi[p]=F,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=At.LTC_FLOAT_1,i.rectAreaLTC2=At.LTC_FLOAT_2):(i.rectAreaLTC1=At.LTC_HALF_1,i.rectAreaLTC2=At.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==M||x.numPointShadows!==y||x.numSpotShadows!==v||x.numSpotMaps!==T||x.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,x.directionalLength=f,x.pointLength=g,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=M,x.numPointShadows=y,x.numSpotShadows=v,x.numSpotMaps=T,x.numLightProbes=w,i.version=XM++)}function c(l,u){let d=0,h=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const y=l[p];if(y.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(y.isSpotLight){const v=i.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function zh(n){const t=new YM(n),e=[],i=[],s=[];function r(h){d.camera=h,e.length=0,i.length=0,s.length=0}function o(h){e.push(h)}function a(h){i.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function ZM(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new zh(n),t.set(s,[a])):r>=o.length?(a=new zh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const $M=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KM=`uniform sampler2D shadow_pass;
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
}`,JM=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],QM=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Bh=new Se,cr=new D,Za=new D;function jM(n,t,e){let i=new Ol;const s=new ft,r=new ft,o=new Le,a=new ag,c=new cg,l={},u=e.maxTextureSize,d={[Ii]:on,[on]:Ii,[He]:He},h=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:$M,fragmentShader:KM}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new J(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Po;let p=this.type;this.render=function(A,w,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===rm&&(jt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Po);const b=n.getRenderTarget(),E=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),I=n.state;I.setBlending(hi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=p!==this.type;U&&w.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(L=>L.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,L=A.length;O<L;O++){const F=A[O],N=F.shadow;if(N===void 0){jt("WebGLShadowMap:",F,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const k=N.getFrameExtents();s.multiply(k),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/k.x),s.x=r.x*k.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/k.y),s.y=r.y*k.y,N.mapSize.y=r.y));const V=n.state.buffers.depth.getReversed();if(N.camera._reversedDepth=V,N.map===null||U===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===fr){if(F.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Jn(s.x,s.y,{format:Ji,type:fi,minFilter:rn,magFilter:rn,generateMipmaps:!1}),N.map.texture.name=F.name+".shadowMap",N.map.depthTexture=new Vs(s.x,s.y,zn),N.map.depthTexture.name=F.name+".shadowMapDepth",N.map.depthTexture.format=pi,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ze,N.map.depthTexture.magFilter=Ze}else F.isPointLight?(N.map=new ff(s.x),N.map.depthTexture=new E0(s.x,Qn)):(N.map=new Jn(s.x,s.y),N.map.depthTexture=new Vs(s.x,s.y,Qn)),N.map.depthTexture.name=F.name+".shadowMap",N.map.depthTexture.format=pi,this.type===Po?(N.map.depthTexture.compareFunction=V?Ll:Il,N.map.depthTexture.minFilter=rn,N.map.depthTexture.magFilter=rn):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ze,N.map.depthTexture.magFilter=Ze);N.camera.updateProjectionMatrix()}const q=N.map.isWebGLCubeRenderTarget?6:1;for(let W=0;W<q;W++){if(N.map.isWebGLCubeRenderTarget)n.setRenderTarget(N.map,W),n.clear();else{W===0&&(n.setRenderTarget(N.map),n.clear());const ut=N.getViewport(W);o.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),I.viewport(o)}if(F.isPointLight){const ut=N.camera,Nt=N.matrix,wt=F.distance||ut.far;wt!==ut.far&&(ut.far=wt,ut.updateProjectionMatrix()),cr.setFromMatrixPosition(F.matrixWorld),ut.position.copy(cr),Za.copy(ut.position),Za.add(JM[W]),ut.up.copy(QM[W]),ut.lookAt(Za),ut.updateMatrixWorld(),Nt.makeTranslation(-cr.x,-cr.y,-cr.z),Bh.multiplyMatrices(ut.projectionMatrix,ut.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Bh,ut.coordinateSystem,ut.reversedDepth)}else N.updateMatrices(F);i=N.getFrustum(),v(w,x,N.camera,F,this.type)}N.isPointLightShadow!==!0&&this.type===fr&&M(N,x),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,E,C)};function M(A,w){const x=t.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Jn(s.x,s.y,{format:Ji,type:fi})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,x,h,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,x,f,_,null)}function y(A,w,x,b){let E=null;const C=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)E=C;else if(E=x.isPointLight===!0?c:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const I=E.uuid,U=w.uuid;let O=l[I];O===void 0&&(O={},l[I]=O);let L=O[U];L===void 0&&(L=E.clone(),O[U]=L,w.addEventListener("dispose",T)),E=L}if(E.visible=w.visible,E.wireframe=w.wireframe,b===fr?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:d[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,x.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const I=n.properties.get(E);I.light=x}return E}function v(A,w,x,b,E){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===fr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);const U=t.update(A),O=A.material;if(Array.isArray(O)){const L=U.groups;for(let F=0,N=L.length;F<N;F++){const k=L[F],V=O[k.materialIndex];if(V&&V.visible){const q=y(A,V,b,E);A.onBeforeShadow(n,A,w,x,U,q,k),n.renderBufferDirect(x,null,U,q,A,k),A.onAfterShadow(n,A,w,x,U,q,k)}}}else if(O.visible){const L=y(A,O,b,E);A.onBeforeShadow(n,A,w,x,U,L,null),n.renderBufferDirect(x,null,U,L,A,null),A.onAfterShadow(n,A,w,x,U,L,null)}}const I=A.children;for(let U=0,O=I.length;U<O;U++)v(I[U],w,x,b,E)}function T(A){A.target.removeEventListener("dispose",T);for(const x in l){const b=l[x],E=A.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}function ty(n,t){function e(){let B=!1;const vt=new Le;let et=null;const bt=new Le(0,0,0,0);return{setMask:function(Pt){et!==Pt&&!B&&(n.colorMask(Pt,Pt,Pt,Pt),et=Pt)},setLocked:function(Pt){B=Pt},setClear:function(Pt,ot,Gt,kt,Ne){Ne===!0&&(Pt*=kt,ot*=kt,Gt*=kt),vt.set(Pt,ot,Gt,kt),bt.equals(vt)===!1&&(n.clearColor(Pt,ot,Gt,kt),bt.copy(vt))},reset:function(){B=!1,et=null,bt.set(-1,0,0,0)}}}function i(){let B=!1,vt=!1,et=null,bt=null,Pt=null;return{setReversed:function(ot){if(vt!==ot){const Gt=t.get("EXT_clip_control");ot?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),vt=ot;const kt=Pt;Pt=null,this.setClear(kt)}},getReversed:function(){return vt},setTest:function(ot){ot?nt(n.DEPTH_TEST):Et(n.DEPTH_TEST)},setMask:function(ot){et!==ot&&!B&&(n.depthMask(ot),et=ot)},setFunc:function(ot){if(vt&&(ot=zm[ot]),bt!==ot){switch(ot){case mc:n.depthFunc(n.NEVER);break;case gc:n.depthFunc(n.ALWAYS);break;case xc:n.depthFunc(n.LESS);break;case Hs:n.depthFunc(n.LEQUAL);break;case _c:n.depthFunc(n.EQUAL);break;case vc:n.depthFunc(n.GEQUAL);break;case Mc:n.depthFunc(n.GREATER);break;case yc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}bt=ot}},setLocked:function(ot){B=ot},setClear:function(ot){Pt!==ot&&(Pt=ot,vt&&(ot=1-ot),n.clearDepth(ot))},reset:function(){B=!1,et=null,bt=null,Pt=null,vt=!1}}}function s(){let B=!1,vt=null,et=null,bt=null,Pt=null,ot=null,Gt=null,kt=null,Ne=null;return{setTest:function(Ae){B||(Ae?nt(n.STENCIL_TEST):Et(n.STENCIL_TEST))},setMask:function(Ae){vt!==Ae&&!B&&(n.stencilMask(Ae),vt=Ae)},setFunc:function(Ae,kn,Hn){(et!==Ae||bt!==kn||Pt!==Hn)&&(n.stencilFunc(Ae,kn,Hn),et=Ae,bt=kn,Pt=Hn)},setOp:function(Ae,kn,Hn){(ot!==Ae||Gt!==kn||kt!==Hn)&&(n.stencilOp(Ae,kn,Hn),ot=Ae,Gt=kn,kt=Hn)},setLocked:function(Ae){B=Ae},setClear:function(Ae){Ne!==Ae&&(n.clearStencil(Ae),Ne=Ae)},reset:function(){B=!1,vt=null,et=null,bt=null,Pt=null,ot=null,Gt=null,kt=null,Ne=null}}}const r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,M=null,y=null,v=null,T=null,A=null,w=null,x=new ee(0,0,0),b=0,E=!1,C=null,I=null,U=null,O=null,L=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,k=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(V)[1]),N=k>=1):V.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),N=k>=2);let q=null,W={};const ut=n.getParameter(n.SCISSOR_BOX),Nt=n.getParameter(n.VIEWPORT),wt=new Le().fromArray(ut),Mt=new Le().fromArray(Nt);function K(B,vt,et,bt){const Pt=new Uint8Array(4),ot=n.createTexture();n.bindTexture(B,ot),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Gt=0;Gt<et;Gt++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,bt,0,n.RGBA,n.UNSIGNED_BYTE,Pt):n.texImage2D(vt+Gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pt);return ot}const lt={};lt[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),lt[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),lt[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(n.DEPTH_TEST),o.setFunc(Hs),xt(!1),gt(Pu),nt(n.CULL_FACE),rt(hi);function nt(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Et(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function Ft(B,vt){return h[B]!==vt?(n.bindFramebuffer(B,vt),h[B]=vt,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=vt),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function pt(B,vt){let et=g,bt=!1;if(B){et=f.get(vt),et===void 0&&(et=[],f.set(vt,et));const Pt=B.textures;if(et.length!==Pt.length||et[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,Gt=Pt.length;ot<Gt;ot++)et[ot]=n.COLOR_ATTACHMENT0+ot;et.length=Pt.length,bt=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,bt=!0);bt&&n.drawBuffers(et)}function ae(B){return _!==B?(n.useProgram(B),_=B,!0):!1}const Wt={[Vi]:n.FUNC_ADD,[am]:n.FUNC_SUBTRACT,[cm]:n.FUNC_REVERSE_SUBTRACT};Wt[lm]=n.MIN,Wt[um]=n.MAX;const it={[hm]:n.ZERO,[dm]:n.ONE,[fm]:n.SRC_COLOR,[fc]:n.SRC_ALPHA,[vm]:n.SRC_ALPHA_SATURATE,[xm]:n.DST_COLOR,[mm]:n.DST_ALPHA,[pm]:n.ONE_MINUS_SRC_COLOR,[pc]:n.ONE_MINUS_SRC_ALPHA,[_m]:n.ONE_MINUS_DST_COLOR,[gm]:n.ONE_MINUS_DST_ALPHA,[Mm]:n.CONSTANT_COLOR,[ym]:n.ONE_MINUS_CONSTANT_COLOR,[Sm]:n.CONSTANT_ALPHA,[bm]:n.ONE_MINUS_CONSTANT_ALPHA};function rt(B,vt,et,bt,Pt,ot,Gt,kt,Ne,Ae){if(B===hi){m===!0&&(Et(n.BLEND),m=!1);return}if(m===!1&&(nt(n.BLEND),m=!0),B!==om){if(B!==p||Ae!==E){if((M!==Vi||T!==Vi)&&(n.blendEquation(n.FUNC_ADD),M=Vi,T=Vi),Ae)switch(B){case Fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dc:n.blendFunc(n.ONE,n.ONE);break;case Iu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ue("WebGLState: Invalid blending: ",B);break}else switch(B){case Fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Iu:ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lu:ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ue("WebGLState: Invalid blending: ",B);break}y=null,v=null,A=null,w=null,x.set(0,0,0),b=0,p=B,E=Ae}return}Pt=Pt||vt,ot=ot||et,Gt=Gt||bt,(vt!==M||Pt!==T)&&(n.blendEquationSeparate(Wt[vt],Wt[Pt]),M=vt,T=Pt),(et!==y||bt!==v||ot!==A||Gt!==w)&&(n.blendFuncSeparate(it[et],it[bt],it[ot],it[Gt]),y=et,v=bt,A=ot,w=Gt),(kt.equals(x)===!1||Ne!==b)&&(n.blendColor(kt.r,kt.g,kt.b,Ne),x.copy(kt),b=Ne),p=B,E=!1}function st(B,vt){B.side===He?Et(n.CULL_FACE):nt(n.CULL_FACE);let et=B.side===on;vt&&(et=!et),xt(et),B.blending===Fs&&B.transparent===!1?rt(hi):rt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const bt=B.stencilWrite;a.setTest(bt),bt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ht(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?nt(n.SAMPLE_ALPHA_TO_COVERAGE):Et(n.SAMPLE_ALPHA_TO_COVERAGE)}function xt(B){C!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),C=B)}function gt(B){B!==im?(nt(n.CULL_FACE),B!==I&&(B===Pu?n.cullFace(n.BACK):B===sm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Et(n.CULL_FACE),I=B}function Xt(B){B!==U&&(N&&n.lineWidth(B),U=B)}function ht(B,vt,et){B?(nt(n.POLYGON_OFFSET_FILL),(O!==vt||L!==et)&&(O=vt,L=et,o.getReversed()&&(vt=-vt),n.polygonOffset(vt,et))):Et(n.POLYGON_OFFSET_FILL)}function Ut(B){B?nt(n.SCISSOR_TEST):Et(n.SCISSOR_TEST)}function Bt(B){B===void 0&&(B=n.TEXTURE0+F-1),q!==B&&(n.activeTexture(B),q=B)}function z(B,vt,et){et===void 0&&(q===null?et=n.TEXTURE0+F-1:et=q);let bt=W[et];bt===void 0&&(bt={type:void 0,texture:void 0},W[et]=bt),(bt.type!==B||bt.texture!==vt)&&(q!==et&&(n.activeTexture(et),q=et),n.bindTexture(B,vt||lt[B]),bt.type=B,bt.texture=vt)}function Zt(){const B=W[q];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Kt(){try{n.compressedTexImage2D(...arguments)}catch(B){ue("WebGLState:",B)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(B){ue("WebGLState:",B)}}function S(){try{n.texSubImage2D(...arguments)}catch(B){ue("WebGLState:",B)}}function G(){try{n.texSubImage3D(...arguments)}catch(B){ue("WebGLState:",B)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(B){ue("WebGLState:",B)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(B){ue("WebGLState:",B)}}function dt(){try{n.texStorage2D(...arguments)}catch(B){ue("WebGLState:",B)}}function mt(){try{n.texStorage3D(...arguments)}catch(B){ue("WebGLState:",B)}}function j(){try{n.texImage2D(...arguments)}catch(B){ue("WebGLState:",B)}}function tt(){try{n.texImage3D(...arguments)}catch(B){ue("WebGLState:",B)}}function _t(B){return d[B]!==void 0?d[B]:n.getParameter(B)}function Ot(B,vt){d[B]!==vt&&(n.pixelStorei(B,vt),d[B]=vt)}function yt(B){wt.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),wt.copy(B))}function St(B){Mt.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Mt.copy(B))}function $t(B,vt){let et=l.get(vt);et===void 0&&(et=new WeakMap,l.set(vt,et));let bt=et.get(B);bt===void 0&&(bt=n.getUniformBlockIndex(vt,B.name),et.set(B,bt))}function Jt(B,vt){const bt=l.get(vt).get(B);c.get(vt)!==bt&&(n.uniformBlockBinding(vt,bt,B.__bindingPointIndex),c.set(vt,bt))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},q=null,W={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,M=null,y=null,v=null,T=null,A=null,w=null,x=new ee(0,0,0),b=0,E=!1,C=null,I=null,U=null,O=null,L=null,wt.set(0,0,n.canvas.width,n.canvas.height),Mt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:Et,bindFramebuffer:Ft,drawBuffers:pt,useProgram:ae,setBlending:rt,setMaterial:st,setFlipSided:xt,setCullFace:gt,setLineWidth:Xt,setPolygonOffset:ht,setScissorTest:Ut,activeTexture:Bt,bindTexture:z,unbindTexture:Zt,compressedTexImage2D:Kt,compressedTexImage3D:P,texImage2D:j,texImage3D:tt,pixelStorei:Ot,getParameter:_t,updateUBOMapping:$t,uniformBlockBinding:Jt,texStorage2D:dt,texStorage3D:mt,texSubImage2D:S,texSubImage3D:G,compressedTexSubImage2D:X,compressedTexSubImage3D:Q,scissor:yt,viewport:St,reset:ie}}function ey(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ft,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,S){return g?new OffscreenCanvas(P,S):Wo("canvas")}function m(P,S,G){let X=1;const Q=Kt(P);if((Q.width>G||Q.height>G)&&(X=G/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const dt=Math.floor(X*Q.width),mt=Math.floor(X*Q.height);h===void 0&&(h=_(dt,mt));const j=S?_(dt,mt):h;return j.width=dt,j.height=mt,j.getContext("2d").drawImage(P,0,0,dt,mt),jt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+dt+"x"+mt+")."),j}else return"data"in P&&jt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function p(P){return P.generateMipmaps}function M(P){n.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(P,S,G,X,Q,dt=!1){if(P!==null){if(n[P]!==void 0)return n[P];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let mt;X&&(mt=t.get("EXT_texture_norm16"),mt||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=S;if(S===n.RED&&(G===n.FLOAT&&(j=n.R32F),G===n.HALF_FLOAT&&(j=n.R16F),G===n.UNSIGNED_BYTE&&(j=n.R8),G===n.UNSIGNED_SHORT&&mt&&(j=mt.R16_EXT),G===n.SHORT&&mt&&(j=mt.R16_SNORM_EXT)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.R8UI),G===n.UNSIGNED_SHORT&&(j=n.R16UI),G===n.UNSIGNED_INT&&(j=n.R32UI),G===n.BYTE&&(j=n.R8I),G===n.SHORT&&(j=n.R16I),G===n.INT&&(j=n.R32I)),S===n.RG&&(G===n.FLOAT&&(j=n.RG32F),G===n.HALF_FLOAT&&(j=n.RG16F),G===n.UNSIGNED_BYTE&&(j=n.RG8),G===n.UNSIGNED_SHORT&&mt&&(j=mt.RG16_EXT),G===n.SHORT&&mt&&(j=mt.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RG8UI),G===n.UNSIGNED_SHORT&&(j=n.RG16UI),G===n.UNSIGNED_INT&&(j=n.RG32UI),G===n.BYTE&&(j=n.RG8I),G===n.SHORT&&(j=n.RG16I),G===n.INT&&(j=n.RG32I)),S===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RGB8UI),G===n.UNSIGNED_SHORT&&(j=n.RGB16UI),G===n.UNSIGNED_INT&&(j=n.RGB32UI),G===n.BYTE&&(j=n.RGB8I),G===n.SHORT&&(j=n.RGB16I),G===n.INT&&(j=n.RGB32I)),S===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),G===n.UNSIGNED_INT&&(j=n.RGBA32UI),G===n.BYTE&&(j=n.RGBA8I),G===n.SHORT&&(j=n.RGBA16I),G===n.INT&&(j=n.RGBA32I)),S===n.RGB&&(G===n.UNSIGNED_SHORT&&mt&&(j=mt.RGB16_EXT),G===n.SHORT&&mt&&(j=mt.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),S===n.RGBA){const tt=dt?Vo:he.getTransfer(Q);G===n.FLOAT&&(j=n.RGBA32F),G===n.HALF_FLOAT&&(j=n.RGBA16F),G===n.UNSIGNED_BYTE&&(j=tt===xe?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&mt&&(j=mt.RGBA16_EXT),G===n.SHORT&&mt&&(j=mt.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function T(P,S){let G;return P?S===null||S===Qn||S===Ir?G=n.DEPTH24_STENCIL8:S===zn?G=n.DEPTH32F_STENCIL8:S===Pr&&(G=n.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Qn||S===Ir?G=n.DEPTH_COMPONENT24:S===zn?G=n.DEPTH_COMPONENT32F:S===Pr&&(G=n.DEPTH_COMPONENT16),G}function A(P,S){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ze&&P.minFilter!==rn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function w(P){const S=P.target;S.removeEventListener("dispose",w),b(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&d.delete(S)}function x(P){const S=P.target;S.removeEventListener("dispose",x),C(S)}function b(P){const S=i.get(P);if(S.__webglInit===void 0)return;const G=P.source,X=f.get(G);if(X){const Q=X[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(P),Object.keys(X).length===0&&f.delete(G)}i.remove(P)}function E(P){const S=i.get(P);n.deleteTexture(S.__webglTexture);const G=P.source,X=f.get(G);delete X[S.__cacheKey],o.memory.textures--}function C(P){const S=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(S.__webglFramebuffer[X]))for(let Q=0;Q<S.__webglFramebuffer[X].length;Q++)n.deleteFramebuffer(S.__webglFramebuffer[X][Q]);else n.deleteFramebuffer(S.__webglFramebuffer[X]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[X])}else{if(Array.isArray(S.__webglFramebuffer))for(let X=0;X<S.__webglFramebuffer.length;X++)n.deleteFramebuffer(S.__webglFramebuffer[X]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let X=0;X<S.__webglColorRenderbuffer.length;X++)S.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=P.textures;for(let X=0,Q=G.length;X<Q;X++){const dt=i.get(G[X]);dt.__webglTexture&&(n.deleteTexture(dt.__webglTexture),o.memory.textures--),i.remove(G[X])}i.remove(P)}let I=0;function U(){I=0}function O(){return I}function L(P){I=P}function F(){const P=I;return P>=s.maxTextures&&jt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),I+=1,P}function N(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function k(P,S){const G=i.get(P);if(P.isVideoTexture&&z(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const X=P.image;if(X===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(G,P,S);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function V(P,S){const G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){Et(G,P,S);return}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function q(P,S){const G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){Et(G,P,S);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function W(P,S){const G=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&G.__version!==P.version){Ft(G,P,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}const ut={[Cr]:n.REPEAT,[ci]:n.CLAMP_TO_EDGE,[Sc]:n.MIRRORED_REPEAT},Nt={[Ze]:n.NEAREST,[Tm]:n.NEAREST_MIPMAP_NEAREST,[Yr]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[ma]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},wt={[Cm]:n.NEVER,[Nm]:n.ALWAYS,[Pm]:n.LESS,[Il]:n.LEQUAL,[Im]:n.EQUAL,[Ll]:n.GEQUAL,[Lm]:n.GREATER,[Dm]:n.NOTEQUAL};function Mt(P,S){if(S.type===zn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===rn||S.magFilter===ma||S.magFilter===Yr||S.magFilter===Ri||S.minFilter===rn||S.minFilter===ma||S.minFilter===Yr||S.minFilter===Ri)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ut[S.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ut[S.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ut[S.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Nt[S.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Nt[S.minFilter]),S.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,wt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ze||S.minFilter!==Yr&&S.minFilter!==Ri||S.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function K(P,S){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",w));const X=S.source;let Q=f.get(X);Q===void 0&&(Q={},f.set(X,Q));const dt=N(S);if(dt!==P.__cacheKey){Q[dt]===void 0&&(Q[dt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[dt].usedTimes++;const mt=Q[P.__cacheKey];mt!==void 0&&(Q[P.__cacheKey].usedTimes--,mt.usedTimes===0&&E(S)),P.__cacheKey=dt,P.__webglTexture=Q[dt].texture}return G}function lt(P,S,G){return Math.floor(Math.floor(P/G)/S)}function nt(P,S,G,X){const dt=P.updateRanges;if(dt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,G,X,S.data);else{dt.sort((Ot,yt)=>Ot.start-yt.start);let mt=0;for(let Ot=1;Ot<dt.length;Ot++){const yt=dt[mt],St=dt[Ot],$t=yt.start+yt.count,Jt=lt(St.start,S.width,4),ie=lt(yt.start,S.width,4);St.start<=$t+1&&Jt===ie&&lt(St.start+St.count-1,S.width,4)===Jt?yt.count=Math.max(yt.count,St.start+St.count-yt.start):(++mt,dt[mt]=St)}dt.length=mt+1;const j=e.getParameter(n.UNPACK_ROW_LENGTH),tt=e.getParameter(n.UNPACK_SKIP_PIXELS),_t=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let Ot=0,yt=dt.length;Ot<yt;Ot++){const St=dt[Ot],$t=Math.floor(St.start/4),Jt=Math.ceil(St.count/4),ie=$t%S.width,B=Math.floor($t/S.width),vt=Jt,et=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ie),e.pixelStorei(n.UNPACK_SKIP_ROWS,B),e.texSubImage2D(n.TEXTURE_2D,0,ie,B,vt,et,G,X,S.data)}P.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,j),e.pixelStorei(n.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(n.UNPACK_SKIP_ROWS,_t)}}function Et(P,S,G){let X=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=n.TEXTURE_3D);const Q=K(P,S),dt=S.source;e.bindTexture(X,P.__webglTexture,n.TEXTURE0+G);const mt=i.get(dt);if(dt.version!==mt.__version||Q===!0){if(e.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const et=he.getPrimaries(he.workingColorSpace),bt=S.colorSpace===Ai?null:he.getPrimaries(S.colorSpace),Pt=S.colorSpace===Ai||et===bt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let tt=m(S.image,!1,s.maxTextureSize);tt=Zt(S,tt);const _t=r.convert(S.format,S.colorSpace),Ot=r.convert(S.type);let yt=v(S.internalFormat,_t,Ot,S.normalized,S.colorSpace,S.isVideoTexture);Mt(X,S);let St;const $t=S.mipmaps,Jt=S.isVideoTexture!==!0,ie=mt.__version===void 0||Q===!0,B=dt.dataReady,vt=A(S,tt);if(S.isDepthTexture)yt=T(S.format===Yi,S.type),ie&&(Jt?e.texStorage2D(n.TEXTURE_2D,1,yt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,yt,tt.width,tt.height,0,_t,Ot,null));else if(S.isDataTexture)if($t.length>0){Jt&&ie&&e.texStorage2D(n.TEXTURE_2D,vt,yt,$t[0].width,$t[0].height);for(let et=0,bt=$t.length;et<bt;et++)St=$t[et],Jt?B&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,St.width,St.height,_t,Ot,St.data):e.texImage2D(n.TEXTURE_2D,et,yt,St.width,St.height,0,_t,Ot,St.data);S.generateMipmaps=!1}else Jt?(ie&&e.texStorage2D(n.TEXTURE_2D,vt,yt,tt.width,tt.height),B&&nt(S,tt,_t,Ot)):e.texImage2D(n.TEXTURE_2D,0,yt,tt.width,tt.height,0,_t,Ot,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Jt&&ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,yt,$t[0].width,$t[0].height,tt.depth);for(let et=0,bt=$t.length;et<bt;et++)if(St=$t[et],S.format!==Bn)if(_t!==null)if(Jt){if(B)if(S.layerUpdates.size>0){const Pt=gh(St.width,St.height,S.format,S.type);for(const ot of S.layerUpdates){const Gt=St.data.subarray(ot*Pt/St.data.BYTES_PER_ELEMENT,(ot+1)*Pt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,ot,St.width,St.height,1,_t,Gt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,St.width,St.height,tt.depth,_t,St.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,yt,St.width,St.height,tt.depth,0,St.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?B&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,St.width,St.height,tt.depth,_t,Ot,St.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,yt,St.width,St.height,tt.depth,0,_t,Ot,St.data)}else{Jt&&ie&&e.texStorage2D(n.TEXTURE_2D,vt,yt,$t[0].width,$t[0].height);for(let et=0,bt=$t.length;et<bt;et++)St=$t[et],S.format!==Bn?_t!==null?Jt?B&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,St.width,St.height,_t,St.data):e.compressedTexImage2D(n.TEXTURE_2D,et,yt,St.width,St.height,0,St.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?B&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,St.width,St.height,_t,Ot,St.data):e.texImage2D(n.TEXTURE_2D,et,yt,St.width,St.height,0,_t,Ot,St.data)}else if(S.isDataArrayTexture)if(Jt){if(ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,yt,tt.width,tt.height,tt.depth),B)if(S.layerUpdates.size>0){const et=gh(tt.width,tt.height,S.format,S.type);for(const bt of S.layerUpdates){const Pt=tt.data.subarray(bt*et/tt.data.BYTES_PER_ELEMENT,(bt+1)*et/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,bt,tt.width,tt.height,1,_t,Ot,Pt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,_t,Ot,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,yt,tt.width,tt.height,tt.depth,0,_t,Ot,tt.data);else if(S.isData3DTexture)Jt?(ie&&e.texStorage3D(n.TEXTURE_3D,vt,yt,tt.width,tt.height,tt.depth),B&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,_t,Ot,tt.data)):e.texImage3D(n.TEXTURE_3D,0,yt,tt.width,tt.height,tt.depth,0,_t,Ot,tt.data);else if(S.isFramebufferTexture){if(ie)if(Jt)e.texStorage2D(n.TEXTURE_2D,vt,yt,tt.width,tt.height);else{let et=tt.width,bt=tt.height;for(let Pt=0;Pt<vt;Pt++)e.texImage2D(n.TEXTURE_2D,Pt,yt,et,bt,0,_t,Ot,null),et>>=1,bt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){const et=n.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),tt.parentNode!==et){et.appendChild(tt),d.add(S),et.onpaint=bt=>{const Pt=bt.changedElements;for(const ot of d)Pt.includes(ot.image)&&(ot.needsUpdate=!0)},et.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,tt);else{const Pt=n.RGBA,ot=n.RGBA,Gt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Pt,ot,Gt,tt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if($t.length>0){if(Jt&&ie){const et=Kt($t[0]);e.texStorage2D(n.TEXTURE_2D,vt,yt,et.width,et.height)}for(let et=0,bt=$t.length;et<bt;et++)St=$t[et],Jt?B&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,_t,Ot,St):e.texImage2D(n.TEXTURE_2D,et,yt,_t,Ot,St);S.generateMipmaps=!1}else if(Jt){if(ie){const et=Kt(tt);e.texStorage2D(n.TEXTURE_2D,vt,yt,et.width,et.height)}B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,Ot,tt)}else e.texImage2D(n.TEXTURE_2D,0,yt,_t,Ot,tt);p(S)&&M(X),mt.__version=dt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Ft(P,S,G){if(S.image.length!==6)return;const X=K(P,S),Q=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);const dt=i.get(Q);if(Q.version!==dt.__version||X===!0){e.activeTexture(n.TEXTURE0+G);const mt=he.getPrimaries(he.workingColorSpace),j=S.colorSpace===Ai?null:he.getPrimaries(S.colorSpace),tt=S.colorSpace===Ai||mt===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const _t=S.isCompressedTexture||S.image[0].isCompressedTexture,Ot=S.image[0]&&S.image[0].isDataTexture,yt=[];for(let ot=0;ot<6;ot++)!_t&&!Ot?yt[ot]=m(S.image[ot],!0,s.maxCubemapSize):yt[ot]=Ot?S.image[ot].image:S.image[ot],yt[ot]=Zt(S,yt[ot]);const St=yt[0],$t=r.convert(S.format,S.colorSpace),Jt=r.convert(S.type),ie=v(S.internalFormat,$t,Jt,S.normalized,S.colorSpace),B=S.isVideoTexture!==!0,vt=dt.__version===void 0||X===!0,et=Q.dataReady;let bt=A(S,St);Mt(n.TEXTURE_CUBE_MAP,S);let Pt;if(_t){B&&vt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,ie,St.width,St.height);for(let ot=0;ot<6;ot++){Pt=yt[ot].mipmaps;for(let Gt=0;Gt<Pt.length;Gt++){const kt=Pt[Gt];S.format!==Bn?$t!==null?B?et&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Gt,0,0,kt.width,kt.height,$t,kt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Gt,ie,kt.width,kt.height,0,kt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Gt,0,0,kt.width,kt.height,$t,Jt,kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Gt,ie,kt.width,kt.height,0,$t,Jt,kt.data)}}}else{if(Pt=S.mipmaps,B&&vt){Pt.length>0&&bt++;const ot=Kt(yt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,ie,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(Ot){B?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,yt[ot].width,yt[ot].height,$t,Jt,yt[ot].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ie,yt[ot].width,yt[ot].height,0,$t,Jt,yt[ot].data);for(let Gt=0;Gt<Pt.length;Gt++){const Ne=Pt[Gt].image[ot].image;B?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Gt+1,0,0,Ne.width,Ne.height,$t,Jt,Ne.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Gt+1,ie,Ne.width,Ne.height,0,$t,Jt,Ne.data)}}else{B?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,$t,Jt,yt[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ie,$t,Jt,yt[ot]);for(let Gt=0;Gt<Pt.length;Gt++){const kt=Pt[Gt];B?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Gt+1,0,0,$t,Jt,kt.image[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Gt+1,ie,$t,Jt,kt.image[ot])}}}p(S)&&M(n.TEXTURE_CUBE_MAP),dt.__version=Q.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function pt(P,S,G,X,Q,dt){const mt=r.convert(G.format,G.colorSpace),j=r.convert(G.type),tt=v(G.internalFormat,mt,j,G.normalized,G.colorSpace),_t=i.get(S),Ot=i.get(G);if(Ot.__renderTarget=S,!_t.__hasExternalTextures){const yt=Math.max(1,S.width>>dt),St=Math.max(1,S.height>>dt);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,dt,tt,yt,St,S.depth,0,mt,j,null):e.texImage2D(Q,dt,tt,yt,St,0,mt,j,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),Bt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,Q,Ot.__webglTexture,0,Ut(S)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,Q,Ot.__webglTexture,dt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(P,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),S.depthBuffer){const X=S.depthTexture,Q=X&&X.isDepthTexture?X.type:null,dt=T(S.stencilBuffer,Q),mt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Bt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ut(S),dt,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut(S),dt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,dt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,P)}else{const X=S.textures;for(let Q=0;Q<X.length;Q++){const dt=X[Q],mt=r.convert(dt.format,dt.colorSpace),j=r.convert(dt.type),tt=v(dt.internalFormat,mt,j,dt.normalized,dt.colorSpace);Bt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ut(S),tt,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut(S),tt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,tt,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Wt(P,S,G){const X=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(S.depthTexture);if(Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,S.depthTexture.addEventListener("dispose",w)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Mt(n.TEXTURE_CUBE_MAP,S.depthTexture);const _t=r.convert(S.depthTexture.format),Ot=r.convert(S.depthTexture.type);let yt;S.depthTexture.format===pi?yt=n.DEPTH_COMPONENT24:S.depthTexture.format===Yi&&(yt=n.DEPTH24_STENCIL8);for(let St=0;St<6;St++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,yt,S.width,S.height,0,_t,Ot,null)}}else k(S.depthTexture,0);const dt=Q.__webglTexture,mt=Ut(S),j=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,tt=S.depthTexture.format===Yi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===pi)Bt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,j,dt,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,tt,j,dt,0);else if(S.depthTexture.format===Yi)Bt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,j,dt,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,tt,j,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(P){const S=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const X=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),X){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=X}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let X=0;X<6;X++)Wt(S.__webglFramebuffer[X],P,X);else{const X=P.texture.mipmaps;X&&X.length>0?Wt(S.__webglFramebuffer[0],P,0):Wt(S.__webglFramebuffer,P,0)}else if(G){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]===void 0)S.__webglDepthbuffer[X]=n.createRenderbuffer(),ae(S.__webglDepthbuffer[X],P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=S.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,dt)}}else{const X=P.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),ae(S.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,dt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(P,S,G){const X=i.get(P);S!==void 0&&pt(X.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&it(P)}function st(P){const S=P.texture,G=i.get(P),X=i.get(S);P.addEventListener("dispose",x);const Q=P.textures,dt=P.isWebGLCubeRenderTarget===!0,mt=Q.length>1;if(mt||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=S.version,o.memory.textures++),dt){G.__webglFramebuffer=[];for(let j=0;j<6;j++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[j]=[];for(let tt=0;tt<S.mipmaps.length;tt++)G.__webglFramebuffer[j][tt]=n.createFramebuffer()}else G.__webglFramebuffer[j]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let j=0;j<S.mipmaps.length;j++)G.__webglFramebuffer[j]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(mt)for(let j=0,tt=Q.length;j<tt;j++){const _t=i.get(Q[j]);_t.__webglTexture===void 0&&(_t.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Bt(P)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let j=0;j<Q.length;j++){const tt=Q[j];G.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[j]);const _t=r.convert(tt.format,tt.colorSpace),Ot=r.convert(tt.type),yt=v(tt.internalFormat,_t,Ot,tt.normalized,tt.colorSpace,P.isXRRenderTarget===!0),St=Ut(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,St,yt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,G.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(dt){e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Mt(n.TEXTURE_CUBE_MAP,S);for(let j=0;j<6;j++)if(S.mipmaps&&S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)pt(G.__webglFramebuffer[j][tt],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,tt);else pt(G.__webglFramebuffer[j],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(S)&&M(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let j=0,tt=Q.length;j<tt;j++){const _t=Q[j],Ot=i.get(_t);let yt=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(yt=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(yt,Ot.__webglTexture),Mt(yt,_t),pt(G.__webglFramebuffer,P,_t,n.COLOR_ATTACHMENT0+j,yt,0),p(_t)&&M(yt)}e.unbindTexture()}else{let j=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(j=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,X.__webglTexture),Mt(j,S),S.mipmaps&&S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)pt(G.__webglFramebuffer[tt],P,S,n.COLOR_ATTACHMENT0,j,tt);else pt(G.__webglFramebuffer,P,S,n.COLOR_ATTACHMENT0,j,0);p(S)&&M(j),e.unbindTexture()}P.depthBuffer&&it(P)}function xt(P){const S=P.textures;for(let G=0,X=S.length;G<X;G++){const Q=S[G];if(p(Q)){const dt=y(P),mt=i.get(Q).__webglTexture;e.bindTexture(dt,mt),M(dt),e.unbindTexture()}}}const gt=[],Xt=[];function ht(P){if(P.samples>0){if(Bt(P)===!1){const S=P.textures,G=P.width,X=P.height;let Q=n.COLOR_BUFFER_BIT;const dt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(P),j=S.length>1;if(j)for(let _t=0;_t<S.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);const tt=P.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let _t=0;_t<S.length;_t++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[_t]);const Ot=i.get(S[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ot,0)}n.blitFramebuffer(0,0,G,X,0,0,G,X,Q,n.NEAREST),c===!0&&(gt.length=0,Xt.length=0,gt.push(n.COLOR_ATTACHMENT0+_t),P.depthBuffer&&P.resolveDepthBuffer===!1&&(gt.push(dt),Xt.push(dt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Xt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let _t=0;_t<S.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,mt.__webglColorRenderbuffer[_t]);const Ot=i.get(S[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,Ot,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const S=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Ut(P){return Math.min(s.maxSamples,P.samples)}function Bt(P){const S=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function z(P){const S=o.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function Zt(P,S){const G=P.colorSpace,X=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Go&&G!==Ai&&(he.getTransfer(G)===xe?(X!==Bn||Q!==yn)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ue("WebGLTextures: Unsupported texture color space:",G)),S}function Kt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.getTextureUnits=O,this.setTextureUnits=L,this.setTexture2D=k,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=rt,this.setupRenderTarget=st,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ny(n,t){function e(i,s=Ai){let r;const o=he.getTransfer(s);if(i===yn)return n.UNSIGNED_BYTE;if(i===El)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Od)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ud)return n.BYTE;if(i===Fd)return n.SHORT;if(i===Pr)return n.UNSIGNED_SHORT;if(i===wl)return n.INT;if(i===Qn)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===fi)return n.HALF_FLOAT;if(i===Bd)return n.ALPHA;if(i===kd)return n.RGB;if(i===Bn)return n.RGBA;if(i===pi)return n.DEPTH_COMPONENT;if(i===Yi)return n.DEPTH_STENCIL;if(i===Al)return n.RED;if(i===Rl)return n.RED_INTEGER;if(i===Ji)return n.RG;if(i===Cl)return n.RG_INTEGER;if(i===Pl)return n.RGBA_INTEGER;if(i===Io||i===Lo||i===Do||i===No)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Do)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===No)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bc||i===wc||i===Ec||i===Tc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ac||i===Rc||i===Cc||i===Pc||i===Ic||i===ko||i===Lc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ac||i===Rc)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Cc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Pc)return r.COMPRESSED_R11_EAC;if(i===Ic)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ko)return r.COMPRESSED_RG11_EAC;if(i===Lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Dc||i===Nc||i===Uc||i===Fc||i===Oc||i===zc||i===Bc||i===kc||i===Hc||i===Gc||i===Vc||i===Wc||i===Xc||i===qc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Uc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Oc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yc||i===Zc||i===$c)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Yc)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kc||i===Jc||i===Ho||i===Qc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Kc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Jc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ho)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ir?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const iy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sy=`
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

}`;class ry{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Kd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Sn({vertexShader:iy,fragmentShader:sy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new J(new vn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oy extends ss{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new ry,p={},M=e.getContextAttributes();let y=null,v=null;const T=[],A=[],w=new ft;let x=null;const b=new Mn;b.viewport=new Le;const E=new Mn;E.viewport=new Le;const C=[b,E],I=new mg;let U=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let lt=T[K];return lt===void 0&&(lt=new ya,T[K]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(K){let lt=T[K];return lt===void 0&&(lt=new ya,T[K]=lt),lt.getGripSpace()},this.getHand=function(K){let lt=T[K];return lt===void 0&&(lt=new ya,T[K]=lt),lt.getHandSpace()};function L(K){const lt=A.indexOf(K.inputSource);if(lt===-1)return;const nt=T[lt];nt!==void 0&&(nt.update(K.inputSource,K.frame,l||o),nt.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",N);for(let K=0;K<T.length;K++){const lt=A[K];lt!==null&&(A[K]=null,T[K].disconnect(lt))}U=null,O=null,m.reset();for(const K in p)delete p[K];t.setRenderTarget(y),f=null,h=null,d=null,s=null,v=null,Mt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",F),s.addEventListener("inputsourceschange",N),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,Et=null,Ft=null;M.depth&&(Ft=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=M.stencil?Yi:pi,Et=M.stencil?Ir:Qn);const pt={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(pt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new Jn(h.textureWidth,h.textureHeight,{format:Bn,type:yn,depthTexture:new Vs(h.textureWidth,h.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const nt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Jn(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Mt.setContext(s),Mt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N(K){for(let lt=0;lt<K.removed.length;lt++){const nt=K.removed[lt],Et=A.indexOf(nt);Et>=0&&(A[Et]=null,T[Et].disconnect(nt))}for(let lt=0;lt<K.added.length;lt++){const nt=K.added[lt];let Et=A.indexOf(nt);if(Et===-1){for(let pt=0;pt<T.length;pt++)if(pt>=A.length){A.push(nt),Et=pt;break}else if(A[pt]===null){A[pt]=nt,Et=pt;break}if(Et===-1)break}const Ft=T[Et];Ft&&Ft.connect(nt)}}const k=new D,V=new D;function q(K,lt,nt){k.setFromMatrixPosition(lt.matrixWorld),V.setFromMatrixPosition(nt.matrixWorld);const Et=k.distanceTo(V),Ft=lt.projectionMatrix.elements,pt=nt.projectionMatrix.elements,ae=Ft[14]/(Ft[10]-1),Wt=Ft[14]/(Ft[10]+1),it=(Ft[9]+1)/Ft[5],rt=(Ft[9]-1)/Ft[5],st=(Ft[8]-1)/Ft[0],xt=(pt[8]+1)/pt[0],gt=ae*st,Xt=ae*xt,ht=Et/(-st+xt),Ut=ht*-st;if(lt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ut),K.translateZ(ht),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ft[10]===-1)K.projectionMatrix.copy(lt.projectionMatrix),K.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Bt=ae+ht,z=Wt+ht,Zt=gt-Ut,Kt=Xt+(Et-Ut),P=it*Wt/z*Bt,S=rt*Wt/z*Bt;K.projectionMatrix.makePerspective(Zt,Kt,P,S,Bt,z),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function W(K,lt){lt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(lt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let lt=K.near,nt=K.far;m.texture!==null&&(m.depthNear>0&&(lt=m.depthNear),m.depthFar>0&&(nt=m.depthFar)),I.near=E.near=b.near=lt,I.far=E.far=b.far=nt,(U!==I.near||O!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),U=I.near,O=I.far),I.layers.mask=K.layers.mask|6,b.layers.mask=I.layers.mask&-5,E.layers.mask=I.layers.mask&-3;const Et=K.parent,Ft=I.cameras;W(I,Et);for(let pt=0;pt<Ft.length;pt++)W(Ft[pt],Et);Ft.length===2?q(I,b,E):I.projectionMatrix.copy(b.projectionMatrix),ut(K,I,Et)};function ut(K,lt,nt){nt===null?K.matrix.copy(lt.matrixWorld):(K.matrix.copy(nt.matrixWorld),K.matrix.invert(),K.matrix.multiply(lt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(lt.projectionMatrix),K.projectionMatrixInverse.copy(lt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Dr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(K){c=K,h!==null&&(h.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(K){return p[K]};let Nt=null;function wt(K,lt){if(u=lt.getViewerPose(l||o),g=lt,u!==null){const nt=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Et=!1;nt.length!==I.cameras.length&&(I.cameras.length=0,Et=!0);for(let Wt=0;Wt<nt.length;Wt++){const it=nt[Wt];let rt=null;if(f!==null)rt=f.getViewport(it);else{const xt=d.getViewSubImage(h,it);rt=xt.viewport,Wt===0&&(t.setRenderTargetTextures(v,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(v))}let st=C[Wt];st===void 0&&(st=new Mn,st.layers.enable(Wt),st.viewport=new Le,C[Wt]=st),st.matrix.fromArray(it.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(it.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(rt.x,rt.y,rt.width,rt.height),Wt===0&&(I.matrix.copy(st.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Et===!0&&I.cameras.push(st)}const Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const Wt=d.getDepthInformation(nt[0]);Wt&&Wt.isValid&&Wt.texture&&m.init(Wt,s.renderState)}if(Ft&&Ft.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let Wt=0;Wt<nt.length;Wt++){const it=nt[Wt].camera;if(it){let rt=p[it];rt||(rt=new Kd,p[it]=rt);const st=d.getCameraImage(it);rt.sourceTexture=st}}}}for(let nt=0;nt<T.length;nt++){const Et=A[nt],Ft=T[nt];Et!==null&&Ft!==void 0&&Ft.update(Et,lt,l||o)}Nt&&Nt(K,lt),lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:lt}),g=null}const Mt=new hf;Mt.setAnimationLoop(wt),this.setAnimationLoop=function(K){Nt=K},this.dispose=function(){}}}const ay=new Se,_f=new ne;_f.set(-1,0,0,0,1,0,0,0,1);function cy(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,cf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,y,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),y=M.envMap,v=M.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(ay.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(_f),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ly(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,T){const A=T.program;i.uniformBlockBinding(v,A)}function l(v,T){let A=s[v.id];A===void 0&&(m(v),A=u(v),s[v.id]=A,v.addEventListener("dispose",M));const w=T.program;i.updateUBOMapping(v,w);const x=t.render.frame;r[v.id]!==x&&(h(v),r[v.id]=x)}function u(v){const T=d();v.__bindingPointIndex=T;const A=n.createBuffer(),w=v.__size,x=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,w,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,A),A}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const T=s[v.id],A=v.uniforms,w=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let x=0,b=A.length;x<b;x++){const E=A[x];if(Array.isArray(E))for(let C=0,I=E.length;C<I;C++)f(E[C],x,C,w);else f(E,x,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,T,A,w){if(_(v,T,A,w)===!0){const x=v.__offset,b=v.value;if(Array.isArray(b)){let E=0;for(let C=0;C<b.length;C++){const I=b[C],U=p(I);g(I,v.__data,E),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(E+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,v.__data)}}function g(v,T,A){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,A)}function _(v,T,A,w){const x=v.value,b=T+"_"+A;if(w[b]===void 0)return typeof x=="number"||typeof x=="boolean"?w[b]=x:ArrayBuffer.isView(x)?w[b]=x.slice():w[b]=x.clone(),!0;{const E=w[b];if(typeof x=="number"||typeof x=="boolean"){if(E!==x)return w[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(E.equals(x)===!1)return E.copy(x),!0}}return!1}function m(v){const T=v.uniforms;let A=0;const w=16;for(let b=0,E=T.length;b<E;b++){const C=Array.isArray(T[b])?T[b]:[T[b]];for(let I=0,U=C.length;I<U;I++){const O=C[I],L=Array.isArray(O.value)?O.value:[O.value];for(let F=0,N=L.length;F<N;F++){const k=L[F],V=p(k),q=A%w,W=q%V.boundary,ut=q+W;A+=W,ut!==0&&w-ut<V.storage&&(A+=w-ut),O.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=A,A+=V.storage}}}const x=A%w;return x>0&&(A+=w-x),v.__size=A,v.__cache={},this}function p(v){const T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",v),T}function M(v){const T=v.target;T.removeEventListener("dispose",M);const A=o.indexOf(T.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function y(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:y}}const uy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wn=null;function hy(){return Wn===null&&(Wn=new Zd(uy,16,16,Ji,fi),Wn.name="DFG_LUT",Wn.minFilter=rn,Wn.magFilter=rn,Wn.wrapS=ci,Wn.wrapT=ci,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}class dy{constructor(t={}){const{canvas:e=Fm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=yn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=f,m=new Set([Pl,Cl,Rl]),p=new Set([yn,Qn,Pr,Ir,El,Tl]),M=new Uint32Array(4),y=new Int32Array(4),v=new D;let T=null,A=null;const w=[],x=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let C=!1,I=null,U=null,O=null,L=null;this._outputColorSpace=Qe;let F=0,N=0,k=null,V=-1,q=null;const W=new Le,ut=new Le;let Nt=null;const wt=new ee(0);let Mt=0,K=e.width,lt=e.height,nt=1,Et=null,Ft=null;const pt=new Le(0,0,K,lt),ae=new Le(0,0,K,lt);let Wt=!1;const it=new Ol;let rt=!1,st=!1;const xt=new Se,gt=new D,Xt=new Le,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function Bt(){return k===null?nt:1}let z=i;function Zt(R,H){return e.getContext(R,H)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sl}`),e.addEventListener("webglcontextlost",Ne,!1),e.addEventListener("webglcontextrestored",Ae,!1),e.addEventListener("webglcontextcreationerror",kn,!1),z===null){const H="webgl2";if(z=Zt(H,R),z===null)throw Zt(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw ue("WebGLRenderer: "+R.message),R}let Kt,P,S,G,X,Q,dt,mt,j,tt,_t,Ot,yt,St,$t,Jt,ie,B,vt,et,bt,Pt,ot;function Gt(){Kt=new hv(z),Kt.init(),bt=new ny(z,Kt),P=new iv(z,Kt,t,bt),S=new ty(z,Kt),P.reversedDepthBuffer&&h&&S.buffers.depth.setReversed(!0),U=z.createFramebuffer(),O=z.createFramebuffer(),L=z.createFramebuffer(),G=new pv(z),X=new kM,Q=new ey(z,Kt,S,X,P,bt,G),dt=new uv(E),mt=new _g(z),Pt=new ev(z,mt),j=new dv(z,mt,G,Pt),tt=new gv(z,j,mt,Pt,G),B=new mv(z,P,Q),$t=new sv(X),_t=new BM(E,dt,Kt,P,Pt,$t),Ot=new cy(E,X),yt=new GM,St=new ZM(Kt),ie=new tv(E,dt,S,tt,g,c),Jt=new jM(E,tt,P),ot=new ly(z,G,P,S),vt=new nv(z,Kt,G),et=new fv(z,Kt,G),G.programs=_t.programs,E.capabilities=P,E.extensions=Kt,E.properties=X,E.renderLists=yt,E.shadowMap=Jt,E.state=S,E.info=G}Gt(),_!==yn&&(b=new _v(_,e.width,e.height,a,s,r));const kt=new oy(E,z);this.xr=kt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=Kt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Kt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(R){R!==void 0&&(nt=R,this.setSize(K,lt,!1))},this.getSize=function(R){return R.set(K,lt)},this.setSize=function(R,H,$=!0){if(kt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}K=R,lt=H,e.width=Math.floor(R*nt),e.height=Math.floor(H*nt),$===!0&&(e.style.width=R+"px",e.style.height=H+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(K*nt,lt*nt).floor()},this.setDrawingBufferSize=function(R,H,$){K=R,lt=H,nt=$,e.width=Math.floor(R*$),e.height=Math.floor(H*$),this.setViewport(0,0,R,H)},this.setEffects=function(R){if(_===yn){ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let H=0;H<R.length;H++)if(R[H].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(W)},this.getViewport=function(R){return R.copy(pt)},this.setViewport=function(R,H,$,Y){R.isVector4?pt.set(R.x,R.y,R.z,R.w):pt.set(R,H,$,Y),S.viewport(W.copy(pt).multiplyScalar(nt).round())},this.getScissor=function(R){return R.copy(ae)},this.setScissor=function(R,H,$,Y){R.isVector4?ae.set(R.x,R.y,R.z,R.w):ae.set(R,H,$,Y),S.scissor(ut.copy(ae).multiplyScalar(nt).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(R){S.setScissorTest(Wt=R)},this.setOpaqueSort=function(R){Et=R},this.setTransparentSort=function(R){Ft=R},this.getClearColor=function(R){return R.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,$=!0){let Y=0;if(R){let Z=!1;if(k!==null){const Ct=k.texture.format;Z=m.has(Ct)}if(Z){const Ct=k.texture.type,Dt=p.has(Ct),Rt=ie.getClearColor(),Ht=ie.getClearAlpha(),Vt=Rt.r,se=Rt.g,ce=Rt.b;Dt?(M[0]=Vt,M[1]=se,M[2]=ce,M[3]=Ht,z.clearBufferuiv(z.COLOR,0,M)):(y[0]=Vt,y[1]=se,y[2]=ce,y[3]=Ht,z.clearBufferiv(z.COLOR,0,y))}else Y|=z.COLOR_BUFFER_BIT}H&&(Y|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),I=R},this.dispose=function(){e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",kn,!1),ie.dispose(),yt.dispose(),St.dispose(),X.dispose(),dt.dispose(),tt.dispose(),Pt.dispose(),ot.dispose(),_t.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",ru),kt.removeEventListener("sessionend",ou),Li.stop()};function Ne(R){R.preventDefault(),Xo("WebGLRenderer: Context Lost."),C=!0}function Ae(){Xo("WebGLRenderer: Context Restored."),C=!1;const R=G.autoReset,H=Jt.enabled,$=Jt.autoUpdate,Y=Jt.needsUpdate,Z=Jt.type;Gt(),G.autoReset=R,Jt.enabled=H,Jt.autoUpdate=$,Jt.needsUpdate=Y,Jt.type=Z}function kn(R){ue("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Hn(R){const H=R.target;H.removeEventListener("dispose",Hn),Nf(H)}function Nf(R){Uf(R),X.remove(R)}function Uf(R){const H=X.get(R).programs;H!==void 0&&(H.forEach(function($){_t.releaseProgram($)}),R.isShaderMaterial&&_t.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,$,Y,Z,Ct){H===null&&(H=ht);const Dt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Rt=zf(R,H,$,Y,Z);S.setMaterial(Y,Dt);let Ht=$.index,Vt=1;if(Y.wireframe===!0){if(Ht=j.getWireframeAttribute($),Ht===void 0)return;Vt=2}const se=$.drawRange,ce=$.attributes.position;let qt=se.start*Vt,ve=(se.start+se.count)*Vt;Ct!==null&&(qt=Math.max(qt,Ct.start*Vt),ve=Math.min(ve,(Ct.start+Ct.count)*Vt)),Ht!==null?(qt=Math.max(qt,0),ve=Math.min(ve,Ht.count)):ce!=null&&(qt=Math.max(qt,0),ve=Math.min(ve,ce.count));const Fe=ve-qt;if(Fe<0||Fe===1/0)return;Pt.setup(Z,Y,Rt,$,Ht);let Ue,be=vt;if(Ht!==null&&(Ue=mt.get(Ht),be=et,be.setIndex(Ue)),Z.isMesh)Y.wireframe===!0?(S.setLineWidth(Y.wireframeLinewidth*Bt()),be.setMode(z.LINES)):be.setMode(z.TRIANGLES);else if(Z.isLine){let tn=Y.linewidth;tn===void 0&&(tn=1),S.setLineWidth(tn*Bt()),Z.isLineSegments?be.setMode(z.LINES):Z.isLineLoop?be.setMode(z.LINE_LOOP):be.setMode(z.LINE_STRIP)}else Z.isPoints?be.setMode(z.POINTS):Z.isSprite&&be.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))be.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const tn=Z._multiDrawStarts,Lt=Z._multiDrawCounts,mn=Z._multiDrawCount,fe=Ht?mt.get(Ht).bytesPerElement:1,bn=X.get(Y).currentProgram.getUniforms();for(let Gn=0;Gn<mn;Gn++)bn.setValue(z,"_gl_DrawID",Gn),be.render(tn[Gn]/fe,Lt[Gn])}else if(Z.isInstancedMesh)be.renderInstances(qt,Fe,Z.count);else if($.isInstancedBufferGeometry){const tn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Lt=Math.min($.instanceCount,tn);be.renderInstances(qt,Fe,Lt)}else be.render(qt,Fe)};function su(R,H,$){R.transparent===!0&&R.side===He&&R.forceSinglePass===!1?(R.side=on,R.needsUpdate=!0,Gr(R,H,$),R.side=Ii,R.needsUpdate=!0,Gr(R,H,$),R.side=He):Gr(R,H,$)}this.compile=function(R,H,$=null){$===null&&($=R),A=St.get($),A.init(H),x.push(A),$.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(A.pushLight(Z),Z.castShadow&&A.pushShadow(Z))}),R!==$&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(A.pushLight(Z),Z.castShadow&&A.pushShadow(Z))}),A.setupLights();const Y=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ct=Z.material;if(Ct)if(Array.isArray(Ct))for(let Dt=0;Dt<Ct.length;Dt++){const Rt=Ct[Dt];su(Rt,$,Z),Y.add(Rt)}else su(Ct,$,Z),Y.add(Ct)}),A=x.pop(),Y},this.compileAsync=function(R,H,$=null){const Y=this.compile(R,H,$);return new Promise(Z=>{function Ct(){if(Y.forEach(function(Dt){X.get(Dt).currentProgram.isReady()&&Y.delete(Dt)}),Y.size===0){Z(R);return}setTimeout(Ct,10)}Kt.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let ua=null;function Ff(R){ua&&ua(R)}function ru(){Li.stop()}function ou(){Li.start()}const Li=new hf;Li.setAnimationLoop(Ff),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(R){ua=R,kt.setAnimationLoop(R),R===null?Li.stop():Li.start()},kt.addEventListener("sessionstart",ru),kt.addEventListener("sessionend",ou),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;I!==null&&I.renderStart(R,H);const $=kt.enabled===!0&&kt.isPresenting===!0,Y=b!==null&&(k===null||$)&&b.begin(E,k);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(H),H=kt.getCamera()),R.isScene===!0&&R.onBeforeRender(E,R,H,k),A=St.get(R,x.length),A.init(H),A.state.textureUnits=Q.getTextureUnits(),x.push(A),xt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),it.setFromProjectionMatrix(xt,Zn,H.reversedDepth),st=this.localClippingEnabled,rt=$t.init(this.clippingPlanes,st),T=yt.get(R,w.length),T.init(),w.push(T),kt.enabled===!0&&kt.isPresenting===!0){const Dt=E.xr.getDepthSensingMesh();Dt!==null&&ha(Dt,H,-1/0,E.sortObjects)}ha(R,H,0,E.sortObjects),T.finish(),E.sortObjects===!0&&T.sort(Et,Ft,H.reversedDepth),Ut=kt.enabled===!1||kt.isPresenting===!1||kt.hasDepthSensing()===!1,Ut&&ie.addToRenderList(T,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&$t.beginShadows();const Z=A.state.shadowsArray;if(Jt.render(Z,R,H),rt===!0&&$t.endShadows(),(Y&&b.hasRenderPass())===!1){const Dt=T.opaque,Rt=T.transmissive;if(A.setupLights(),H.isArrayCamera){const Ht=H.cameras;if(Rt.length>0)for(let Vt=0,se=Ht.length;Vt<se;Vt++){const ce=Ht[Vt];cu(Dt,Rt,R,ce)}Ut&&ie.render(R);for(let Vt=0,se=Ht.length;Vt<se;Vt++){const ce=Ht[Vt];au(T,R,ce,ce.viewport)}}else Rt.length>0&&cu(Dt,Rt,R,H),Ut&&ie.render(R),au(T,R,H)}k!==null&&N===0&&(Q.updateMultisampleRenderTarget(k),Q.updateRenderTargetMipmap(k)),Y&&b.end(E),R.isScene===!0&&R.onAfterRender(E,R,H),Pt.resetDefaultState(),V=-1,q=null,x.pop(),x.length>0?(A=x[x.length-1],Q.setTextureUnits(A.state.textureUnits),rt===!0&&$t.setGlobalState(E.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?T=w[w.length-1]:T=null,I!==null&&I.renderEnd()};function ha(R,H,$,Y){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLightProbeGrid)A.pushLightProbeGrid(R);else if(R.isLight)A.pushLight(R),R.castShadow&&A.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||it.intersectsSprite(R)){Y&&Xt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(xt);const Dt=tt.update(R),Rt=R.material;Rt.visible&&T.push(R,Dt,Rt,$,Xt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||it.intersectsObject(R))){const Dt=tt.update(R),Rt=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Xt.copy(R.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Xt.copy(Dt.boundingSphere.center)),Xt.applyMatrix4(R.matrixWorld).applyMatrix4(xt)),Array.isArray(Rt)){const Ht=Dt.groups;for(let Vt=0,se=Ht.length;Vt<se;Vt++){const ce=Ht[Vt],qt=Rt[ce.materialIndex];qt&&qt.visible&&T.push(R,Dt,qt,$,Xt.z,ce)}}else Rt.visible&&T.push(R,Dt,Rt,$,Xt.z,null)}}const Ct=R.children;for(let Dt=0,Rt=Ct.length;Dt<Rt;Dt++)ha(Ct[Dt],H,$,Y)}function au(R,H,$,Y){const{opaque:Z,transmissive:Ct,transparent:Dt}=R;A.setupLightsView($),rt===!0&&$t.setGlobalState(E.clippingPlanes,$),Y&&S.viewport(W.copy(Y)),Z.length>0&&Hr(Z,H,$),Ct.length>0&&Hr(Ct,H,$),Dt.length>0&&Hr(Dt,H,$),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function cu(R,H,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[Y.id]===void 0){const qt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[Y.id]=new Jn(1,1,{generateMipmaps:!0,type:qt?fi:yn,minFilter:Ri,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace})}const Ct=A.state.transmissionRenderTarget[Y.id],Dt=Y.viewport||W;Ct.setSize(Dt.z*E.transmissionResolutionScale,Dt.w*E.transmissionResolutionScale);const Rt=E.getRenderTarget(),Ht=E.getActiveCubeFace(),Vt=E.getActiveMipmapLevel();E.setRenderTarget(Ct),E.getClearColor(wt),Mt=E.getClearAlpha(),Mt<1&&E.setClearColor(16777215,.5),E.clear(),Ut&&ie.render($);const se=E.toneMapping;E.toneMapping=$n;const ce=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),A.setupLightsView(Y),rt===!0&&$t.setGlobalState(E.clippingPlanes,Y),Hr(R,$,Y),Q.updateMultisampleRenderTarget(Ct),Q.updateRenderTargetMipmap(Ct),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let ve=0,Fe=H.length;ve<Fe;ve++){const Ue=H[ve],{object:be,geometry:tn,material:Lt,group:mn}=Ue;if(Lt.side===He&&be.layers.test(Y.layers)){const fe=Lt.side;Lt.side=on,Lt.needsUpdate=!0,lu(be,$,Y,tn,Lt,mn),Lt.side=fe,Lt.needsUpdate=!0,qt=!0}}qt===!0&&(Q.updateMultisampleRenderTarget(Ct),Q.updateRenderTargetMipmap(Ct))}E.setRenderTarget(Rt,Ht,Vt),E.setClearColor(wt,Mt),ce!==void 0&&(Y.viewport=ce),E.toneMapping=se}function Hr(R,H,$){const Y=H.isScene===!0?H.overrideMaterial:null;for(let Z=0,Ct=R.length;Z<Ct;Z++){const Dt=R[Z],{object:Rt,geometry:Ht,group:Vt}=Dt;let se=Dt.material;se.allowOverride===!0&&Y!==null&&(se=Y),Rt.layers.test($.layers)&&lu(Rt,H,$,Ht,se,Vt)}}function lu(R,H,$,Y,Z,Ct){R.onBeforeRender(E,H,$,Y,Z,Ct),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(E,H,$,Y,R,Ct),Z.transparent===!0&&Z.side===He&&Z.forceSinglePass===!1?(Z.side=on,Z.needsUpdate=!0,E.renderBufferDirect($,H,Y,Z,R,Ct),Z.side=Ii,Z.needsUpdate=!0,E.renderBufferDirect($,H,Y,Z,R,Ct),Z.side=He):E.renderBufferDirect($,H,Y,Z,R,Ct),R.onAfterRender(E,H,$,Y,Z,Ct)}function Gr(R,H,$){H.isScene!==!0&&(H=ht);const Y=X.get(R),Z=A.state.lights,Ct=A.state.shadowsArray,Dt=Z.state.version,Rt=_t.getParameters(R,Z.state,Ct,H,$,A.state.lightProbeGridArray),Ht=_t.getProgramCacheKey(Rt);let Vt=Y.programs;Y.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?H.environment:null,Y.fog=H.fog;const se=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;Y.envMap=dt.get(R.envMap||Y.environment,se),Y.envMapRotation=Y.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,Vt===void 0&&(R.addEventListener("dispose",Hn),Vt=new Map,Y.programs=Vt);let ce=Vt.get(Ht);if(ce!==void 0){if(Y.currentProgram===ce&&Y.lightsStateVersion===Dt)return hu(R,Rt),ce}else Rt.uniforms=_t.getUniforms(R),I!==null&&R.isNodeMaterial&&I.build(R,$,Rt),R.onBeforeCompile(Rt,E),ce=_t.acquireProgram(Rt,Ht),Vt.set(Ht,ce),Y.uniforms=Rt.uniforms;const qt=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qt.clippingPlanes=$t.uniform),hu(R,Rt),Y.needsLights=kf(R),Y.lightsStateVersion=Dt,Y.needsLights&&(qt.ambientLightColor.value=Z.state.ambient,qt.lightProbe.value=Z.state.probe,qt.directionalLights.value=Z.state.directional,qt.directionalLightShadows.value=Z.state.directionalShadow,qt.spotLights.value=Z.state.spot,qt.spotLightShadows.value=Z.state.spotShadow,qt.rectAreaLights.value=Z.state.rectArea,qt.ltc_1.value=Z.state.rectAreaLTC1,qt.ltc_2.value=Z.state.rectAreaLTC2,qt.pointLights.value=Z.state.point,qt.pointLightShadows.value=Z.state.pointShadow,qt.hemisphereLights.value=Z.state.hemi,qt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qt.spotLightMatrix.value=Z.state.spotLightMatrix,qt.spotLightMap.value=Z.state.spotLightMap,qt.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=A.state.lightProbeGridArray.length>0,Y.currentProgram=ce,Y.uniformsList=null,ce}function uu(R){if(R.uniformsList===null){const H=R.currentProgram.getUniforms();R.uniformsList=Uo.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function hu(R,H){const $=X.get(R);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function Of(R,H){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;v.setFromMatrixPosition(H.matrixWorld);for(let $=0,Y=R.length;$<Y;$++){const Z=R[$];if(Z.texture!==null&&Z.boundingBox.containsPoint(v))return Z}return null}function zf(R,H,$,Y,Z){H.isScene!==!0&&(H=ht),Q.resetTextureUnits();const Ct=H.fog,Dt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?H.environment:null,Rt=k===null?E.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:he.workingColorSpace,Ht=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Vt=dt.get(Y.envMap||Dt,Ht),se=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ce=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),qt=!!$.morphAttributes.position,ve=!!$.morphAttributes.normal,Fe=!!$.morphAttributes.color;let Ue=$n;Y.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ue=E.toneMapping);const be=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,tn=be!==void 0?be.length:0,Lt=X.get(Y),mn=A.state.lights;if(rt===!0&&(st===!0||R!==q)){const Re=R===q&&Y.id===V;$t.setState(Y,R,Re)}let fe=!1;Y.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==mn.state.version||Lt.outputColorSpace!==Rt||Z.isBatchedMesh&&Lt.batching===!1||!Z.isBatchedMesh&&Lt.batching===!0||Z.isBatchedMesh&&Lt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Lt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Lt.instancing===!1||!Z.isInstancedMesh&&Lt.instancing===!0||Z.isSkinnedMesh&&Lt.skinning===!1||!Z.isSkinnedMesh&&Lt.skinning===!0||Z.isInstancedMesh&&Lt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Lt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Lt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Lt.instancingMorph===!1&&Z.morphTexture!==null||Lt.envMap!==Vt||Y.fog===!0&&Lt.fog!==Ct||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==$t.numPlanes||Lt.numIntersection!==$t.numIntersection)||Lt.vertexAlphas!==se||Lt.vertexTangents!==ce||Lt.morphTargets!==qt||Lt.morphNormals!==ve||Lt.morphColors!==Fe||Lt.toneMapping!==Ue||Lt.morphTargetsCount!==tn||!!Lt.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(fe=!0):(fe=!0,Lt.__version=Y.version);let bn=Lt.currentProgram;fe===!0&&(bn=Gr(Y,H,Z),I&&Y.isNodeMaterial&&I.onUpdateProgram(Y,bn,Lt));let Gn=!1,mi=!1,os=!1;const we=bn.getUniforms(),Oe=Lt.uniforms;if(S.useProgram(bn.program)&&(Gn=!0,mi=!0,os=!0),Y.id!==V&&(V=Y.id,mi=!0),Lt.needsLights){const Re=Of(A.state.lightProbeGridArray,Z);Lt.lightProbeGrid!==Re&&(Lt.lightProbeGrid=Re,mi=!0)}if(Gn||q!==R){S.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),we.setValue(z,"projectionMatrix",R.projectionMatrix),we.setValue(z,"viewMatrix",R.matrixWorldInverse);const xi=we.map.cameraPosition;xi!==void 0&&xi.setValue(z,gt.setFromMatrixPosition(R.matrixWorld)),P.logarithmicDepthBuffer&&we.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&we.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),q!==R&&(q=R,mi=!0,os=!0)}if(Lt.needsLights&&(mn.state.directionalShadowMap.length>0&&we.setValue(z,"directionalShadowMap",mn.state.directionalShadowMap,Q),mn.state.spotShadowMap.length>0&&we.setValue(z,"spotShadowMap",mn.state.spotShadowMap,Q),mn.state.pointShadowMap.length>0&&we.setValue(z,"pointShadowMap",mn.state.pointShadowMap,Q)),Z.isSkinnedMesh){we.setOptional(z,Z,"bindMatrix"),we.setOptional(z,Z,"bindMatrixInverse");const Re=Z.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),we.setValue(z,"boneTexture",Re.boneTexture,Q))}Z.isBatchedMesh&&(we.setOptional(z,Z,"batchingTexture"),we.setValue(z,"batchingTexture",Z._matricesTexture,Q),we.setOptional(z,Z,"batchingIdTexture"),we.setValue(z,"batchingIdTexture",Z._indirectTexture,Q),we.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&we.setValue(z,"batchingColorTexture",Z._colorsTexture,Q));const gi=$.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&B.update(Z,$,bn),(mi||Lt.receiveShadow!==Z.receiveShadow)&&(Lt.receiveShadow=Z.receiveShadow,we.setValue(z,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&H.environment!==null&&(Oe.envMapIntensity.value=H.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=hy()),mi){if(we.setValue(z,"toneMappingExposure",E.toneMappingExposure),Lt.needsLights&&Bf(Oe,os),Ct&&Y.fog===!0&&Ot.refreshFogUniforms(Oe,Ct),Ot.refreshMaterialUniforms(Oe,Y,nt,lt,A.state.transmissionRenderTarget[R.id]),Lt.needsLights&&Lt.lightProbeGrid){const Re=Lt.lightProbeGrid;Oe.probesSH.value=Re.texture,Oe.probesMin.value.copy(Re.boundingBox.min),Oe.probesMax.value.copy(Re.boundingBox.max),Oe.probesResolution.value.copy(Re.resolution)}Uo.upload(z,uu(Lt),Oe,Q)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Uo.upload(z,uu(Lt),Oe,Q),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&we.setValue(z,"center",Z.center),we.setValue(z,"modelViewMatrix",Z.modelViewMatrix),we.setValue(z,"normalMatrix",Z.normalMatrix),we.setValue(z,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){const Re=Y.uniformsGroups;for(let xi=0,as=Re.length;xi<as;xi++){const du=Re[xi];ot.update(du,bn),ot.bind(du,bn)}}return bn}function Bf(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function kf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(R,H,$){const Y=X.get(R);Y.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),X.get(R.texture).__webglTexture=H,X.get(R.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:$,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){const $=X.get(R);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,$=0){k=R,F=H,N=$;let Y=null,Z=!1,Ct=!1;if(R){const Rt=X.get(R);if(Rt.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(z.FRAMEBUFFER,Rt.__webglFramebuffer),W.copy(R.viewport),ut.copy(R.scissor),Nt=R.scissorTest,S.viewport(W),S.scissor(ut),S.setScissorTest(Nt),V=-1;return}else if(Rt.__webglFramebuffer===void 0)Q.setupRenderTarget(R);else if(Rt.__hasExternalTextures)Q.rebindTextures(R,X.get(R.texture).__webglTexture,X.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const se=R.depthTexture;if(Rt.__boundDepthTexture!==se){if(se!==null&&X.has(se)&&(R.width!==se.image.width||R.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(R)}}const Ht=R.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Ct=!0);const Vt=X.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Vt[H])?Y=Vt[H][$]:Y=Vt[H],Z=!0):R.samples>0&&Q.useMultisampledRTT(R)===!1?Y=X.get(R).__webglMultisampledFramebuffer:Array.isArray(Vt)?Y=Vt[$]:Y=Vt,W.copy(R.viewport),ut.copy(R.scissor),Nt=R.scissorTest}else W.copy(pt).multiplyScalar(nt).floor(),ut.copy(ae).multiplyScalar(nt).floor(),Nt=Wt;if($!==0&&(Y=U),S.bindFramebuffer(z.FRAMEBUFFER,Y)&&S.drawBuffers(R,Y),S.viewport(W),S.scissor(ut),S.setScissorTest(Nt),Z){const Rt=X.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,Rt.__webglTexture,$)}else if(Ct){const Rt=H;for(let Ht=0;Ht<R.textures.length;Ht++){const Vt=X.get(R.textures[Ht]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ht,Vt.__webglTexture,$,Rt)}}else if(R!==null&&$!==0){const Rt=X.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Rt.__webglTexture,$)}V=-1},this.readRenderTargetPixels=function(R,H,$,Y,Z,Ct,Dt,Rt=0){if(!(R&&R.isWebGLRenderTarget)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=X.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ht=Ht[Dt]),Ht){S.bindFramebuffer(z.FRAMEBUFFER,Ht);try{const Vt=R.textures[Rt],se=Vt.format,ce=Vt.type;if(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Rt),!P.textureFormatReadable(se)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(ce)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-Y&&$>=0&&$<=R.height-Z&&z.readPixels(H,$,Y,Z,bt.convert(se),bt.convert(ce),Ct)}finally{const Vt=k!==null?X.get(k).__webglFramebuffer:null;S.bindFramebuffer(z.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(R,H,$,Y,Z,Ct,Dt,Rt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=X.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ht=Ht[Dt]),Ht)if(H>=0&&H<=R.width-Y&&$>=0&&$<=R.height-Z){S.bindFramebuffer(z.FRAMEBUFFER,Ht);const Vt=R.textures[Rt],se=Vt.format,ce=Vt.type;if(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Rt),!P.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,qt),z.bufferData(z.PIXEL_PACK_BUFFER,Ct.byteLength,z.STREAM_READ),z.readPixels(H,$,Y,Z,bt.convert(se),bt.convert(ce),0);const ve=k!==null?X.get(k).__webglFramebuffer:null;S.bindFramebuffer(z.FRAMEBUFFER,ve);const Fe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Om(z,Fe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,qt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ct),z.deleteBuffer(qt),z.deleteSync(Fe),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,$=0){const Y=Math.pow(2,-$),Z=Math.floor(R.image.width*Y),Ct=Math.floor(R.image.height*Y),Dt=H!==null?H.x:0,Rt=H!==null?H.y:0;Q.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,Dt,Rt,Z,Ct),S.unbindTexture()},this.copyTextureToTexture=function(R,H,$=null,Y=null,Z=0,Ct=0){let Dt,Rt,Ht,Vt,se,ce,qt,ve,Fe;const Ue=R.isCompressedTexture?R.mipmaps[Ct]:R.image;if($!==null)Dt=$.max.x-$.min.x,Rt=$.max.y-$.min.y,Ht=$.isBox3?$.max.z-$.min.z:1,Vt=$.min.x,se=$.min.y,ce=$.isBox3?$.min.z:0;else{const Oe=Math.pow(2,-Z);Dt=Math.floor(Ue.width*Oe),Rt=Math.floor(Ue.height*Oe),R.isDataArrayTexture?Ht=Ue.depth:R.isData3DTexture?Ht=Math.floor(Ue.depth*Oe):Ht=1,Vt=0,se=0,ce=0}Y!==null?(qt=Y.x,ve=Y.y,Fe=Y.z):(qt=0,ve=0,Fe=0);const be=bt.convert(H.format),tn=bt.convert(H.type);let Lt;H.isData3DTexture?(Q.setTexture3D(H,0),Lt=z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Q.setTexture2DArray(H,0),Lt=z.TEXTURE_2D_ARRAY):(Q.setTexture2D(H,0),Lt=z.TEXTURE_2D),S.activeTexture(z.TEXTURE0),S.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),S.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),S.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);const mn=S.getParameter(z.UNPACK_ROW_LENGTH),fe=S.getParameter(z.UNPACK_IMAGE_HEIGHT),bn=S.getParameter(z.UNPACK_SKIP_PIXELS),Gn=S.getParameter(z.UNPACK_SKIP_ROWS),mi=S.getParameter(z.UNPACK_SKIP_IMAGES);S.pixelStorei(z.UNPACK_ROW_LENGTH,Ue.width),S.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ue.height),S.pixelStorei(z.UNPACK_SKIP_PIXELS,Vt),S.pixelStorei(z.UNPACK_SKIP_ROWS,se),S.pixelStorei(z.UNPACK_SKIP_IMAGES,ce);const os=R.isDataArrayTexture||R.isData3DTexture,we=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){const Oe=X.get(R),gi=X.get(H),Re=X.get(Oe.__renderTarget),xi=X.get(gi.__renderTarget);S.bindFramebuffer(z.READ_FRAMEBUFFER,Re.__webglFramebuffer),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let as=0;as<Ht;as++)os&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,X.get(R).__webglTexture,Z,ce+as),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,X.get(H).__webglTexture,Ct,Fe+as)),z.blitFramebuffer(Vt,se,Dt,Rt,qt,ve,Dt,Rt,z.DEPTH_BUFFER_BIT,z.NEAREST);S.bindFramebuffer(z.READ_FRAMEBUFFER,null),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||X.has(R)){const Oe=X.get(R),gi=X.get(H);S.bindFramebuffer(z.READ_FRAMEBUFFER,O),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,L);for(let Re=0;Re<Ht;Re++)os?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Oe.__webglTexture,Z,ce+Re):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Oe.__webglTexture,Z),we?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,gi.__webglTexture,Ct,Fe+Re):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,gi.__webglTexture,Ct),Z!==0?z.blitFramebuffer(Vt,se,Dt,Rt,qt,ve,Dt,Rt,z.COLOR_BUFFER_BIT,z.NEAREST):we?z.copyTexSubImage3D(Lt,Ct,qt,ve,Fe+Re,Vt,se,Dt,Rt):z.copyTexSubImage2D(Lt,Ct,qt,ve,Vt,se,Dt,Rt);S.bindFramebuffer(z.READ_FRAMEBUFFER,null),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else we?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Lt,Ct,qt,ve,Fe,Dt,Rt,Ht,be,tn,Ue.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(Lt,Ct,qt,ve,Fe,Dt,Rt,Ht,be,Ue.data):z.texSubImage3D(Lt,Ct,qt,ve,Fe,Dt,Rt,Ht,be,tn,Ue):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ct,qt,ve,Dt,Rt,be,tn,Ue.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ct,qt,ve,Ue.width,Ue.height,be,Ue.data):z.texSubImage2D(z.TEXTURE_2D,Ct,qt,ve,Dt,Rt,be,tn,Ue);S.pixelStorei(z.UNPACK_ROW_LENGTH,mn),S.pixelStorei(z.UNPACK_IMAGE_HEIGHT,fe),S.pixelStorei(z.UNPACK_SKIP_PIXELS,bn),S.pixelStorei(z.UNPACK_SKIP_ROWS,Gn),S.pixelStorei(z.UNPACK_SKIP_IMAGES,mi),Ct===0&&H.generateMipmaps&&z.generateMipmap(Lt),S.unbindTexture()},this.initRenderTarget=function(R){X.get(R).__webglFramebuffer===void 0&&Q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Q.setTextureCube(R,0):R.isData3DTexture?Q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Q.setTexture2DArray(R,0):Q.setTexture2D(R,0),S.unbindTexture()},this.resetState=function(){F=0,N=0,k=null,S.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}function fy(n){const t=document.createElement("canvas");t.width=n,t.height=n;const e=t.getContext("2d"),i=e.createImageData(n,n),s=8,r=[];for(let a=0;a<s*s;a++)r.push(Math.random());const o=(a,c)=>r[c%s*s+a%s];for(let a=0;a<n;a++)for(let c=0;c<n;c++){const l=c/n*s,u=a/n*s,d=Math.floor(l),h=Math.floor(u),f=l-d,g=u-h,_=f*f*(3-2*f),m=g*g*(3-2*g),p=o(d,h)*(1-_)*(1-m)+o(d+1,h)*_*(1-m)+o(d,h+1)*(1-_)*m+o(d+1,h+1)*_*m,M=(a*n+c)*4,y=Math.floor(p*255);i.data[M]=y,i.data[M+1]=y,i.data[M+2]=y,i.data[M+3]=255}return e.putImageData(i,0,0),t}const kh=-.02,py=4,Hh=440,my=`
attribute float aDepth;
varying float vDepth; // depth in meters
varying vec3 vWorldPos;
varying vec2 vNoiseUv1;
varying vec2 vNoiseUv2;
uniform float uTime;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  vDepth = aDepth;
  // Roystan mobile trick: pan noise UVs in the vertex shader (free).
  vec2 baseUv = wp.xz * 0.02;
  vNoiseUv1 = baseUv + vec2(uTime * 0.008, uTime * 0.005);
  vNoiseUv2 = baseUv * 2.3 - vec2(uTime * 0.006, -uTime * 0.004);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,gy=`
precision highp float;
varying float vDepth; // depth in meters
varying vec3 vWorldPos;
varying vec2 vNoiseUv1;
varying vec2 vNoiseUv2;
uniform float uTime;
uniform vec3 uShallow;   // tropical turquoise
uniform vec3 uMid;       // blue
uniform vec3 uDeep;      // navy
uniform vec3 uFoamColor; // near-white
uniform sampler2D uNoise;
uniform vec3 uCamPos;

void main() {
  // Hard discard where terrain is above water (matches pre-PR#36 behavior).
  // This avoids z-fighting/coplanar alpha-blend artifacts at the shoreline.
  if (vDepth < 0.02) discard;
  float d = clamp(vDepth / ${py}.0, 0.0, 1.0);
  // Depth gradient: turquoise -> blue -> navy, all smoothstep.
  vec3 col = mix(uShallow, uMid, smoothstep(0.0, 0.45, d));
  col = mix(col, uDeep, smoothstep(0.35, 1.0, d));

  // Foam: two noise samples, opposing scrolls (UVs pre-panned in vertex).
  float n1 = texture2D(uNoise, vNoiseUv1).r;
  float n2 = texture2D(uNoise, vNoiseUv2).r;
  float foamNoise = max(n1, n2);

  // Generous Wind Waker foam: wide band, depth-gated cutoff.
  float foamDist = 0.22; // foam band width in depth01 units
  float cutoff = (1.0 - smoothstep(0.0, foamDist, d)) * 0.55;
  float w = fwidth(foamNoise) * 1.5 + 1e-4;
  float foam = smoothstep(cutoff - w, cutoff + w, foamNoise);

  // Contact cap: thin breathing ring at the waterline.
  float capWidth = 0.03;
  float breathe = 0.75 + 0.25 * sin(uTime * 1.2);
  float cap = (1.0 - smoothstep(0.0, capWidth * breathe, d));
  foam = max(foam, cap);

  // Whitecaps in open water: sparse noise peaks where depth is high.
  float cap2 = smoothstep(0.75, 0.95, n1 * n2 * 2.0) * smoothstep(0.3, 0.7, d);
  float dist = distance(uCamPos, vWorldPos);
  float detailFade = 1.0 - smoothstep(40.0, 120.0, dist);
  cap2 *= detailFade;

  // Foam is matte: kill sun glint under foam (done below via foam mask).
  vec3 foamCol = uFoamColor * (0.92 + 0.08 * foamNoise);

  // Broad sun glint (not a tight lobe), faded with distance.
  vec3 nrm = vec3(0.0, 1.0, 0.0); // flat water normal; perturb slightly
  float pert = (n1 - 0.5) * 0.35 * detailFade;
  nrm = normalize(vec3(pert, 1.0, pert * 0.7));
  vec3 sunDir = normalize(vec3(0.4, 0.8, 0.3));
  float glint = pow(max(dot(nrm, sunDir), 0.0), 24.0) * 0.35 * detailFade;
  glint *= (1.0 - foam); // no glint under foam

  vec3 finalCol = mix(col, foamCol, clamp(foam + cap2, 0.0, 1.0));
  finalCol += vec3(1.0, 0.98, 0.9) * glint;

  gl_FragColor = vec4(finalCol, 1.0);
}
`;function xy(n){return new Sn({vertexShader:my,fragmentShader:gy,uniforms:{uTime:{value:0},uShallow:{value:new ee(5235649)},uMid:{value:new ee(2793432)},uDeep:{value:new ee(997998)},uFoamColor:{value:new ee(16055295)},uNoise:{value:n},uCamPos:{value:new D}}})}function _y(){const n=fy(256),t=new ji(n);t.wrapS=t.wrapT=Cr,t.generateMipmaps=!0,t.minFilter=Ri;const e=xy(t),i=new vn(Hh,Hh,200,200);i.rotateX(-Math.PI/2);const s=i.attributes.position,r=new Float32Array(s.count);for(let a=0;a<s.count;a++){const c=s.getX(a),l=s.getZ(a);r[a]=kh-Ee(c,l)}i.setAttribute("aDepth",new pn(r,1));const o=new J(i,e);return o.position.y=kh,o.renderOrder=1,o.userData.material=e,o.userData.noiseTex=t,o}function vy(n,t,e){const i=n.userData.material;!i||!i.uniforms||!i.uniforms.uTime||(i.uniforms.uTime.value=t,i.uniforms.uCamPos.value.copy(e))}const Je=1e-9;function $a(n){let t=0;for(let e=0;e<n.length;e++){const[i,s]=n[e],[r,o]=n[(e+1)%n.length];t+=i*o-r*s}return Math.abs(t)/2}function Gh(n,t){const[e,i]=n;let s=!1;for(let r=0,o=t.length-1;r<t.length;o=r++){const[a,c]=t[r],[l,u]=t[o];c>i!=u>i&&e<(l-a)*(i-c)/(u-c)+a&&(s=!s)}return s}function My(n,t,e,i){const s=(l,u,d)=>(u[0]-l[0])*(d[1]-l[1])-(u[1]-l[1])*(d[0]-l[0]),r=s(e,i,n),o=s(e,i,t),a=s(n,t,e),c=s(n,t,i);return(r>Je&&o<-Je||r<-Je&&o>Je)&&(a>Je&&c<-Je||a<-Je&&c>Je)}function yy(n,t){for(const e of n)if(Gh(e,t))return!0;for(const e of t)if(Gh(e,n))return!0;for(let e=0;e<n.length;e++)for(let i=0;i<t.length;i++)if(My(n[e],n[(e+1)%n.length],t[i],t[(i+1)%t.length]))return!0;return!1}function Sy(n,t){const e=h=>{let f=0,g=0;for(const[_,m]of h)f+=_,g+=m;return[f/h.length,g/h.length]},[i,s]=e(n),[r,o]=e(t),a=(i+r)/2,c=(s+o)/2,l=(h,f)=>{const g=Math.cos(f),_=Math.sin(f);let m=0;for(let p=0;p<h.length;p++){const[M,y]=h[p],[v,T]=h[(p+1)%h.length],A=v-M,w=T-y,x=g*w-_*A;if(Math.abs(x)<Je)continue;const b=((M-a)*w-(y-c)*A)/x,E=((M-a)*_-(y-c)*g)/x;b>Je&&E>-Je&&E<1+Je&&(m=Math.max(m,b)),-b>Je&&-E>-Je&&-E<1+Je&&(m=Math.max(m,-b))}return m},u=72,d=[];for(let h=0;h<u;h++){const f=h/u*Math.PI*2,g=Math.max(l(n,f),l(t,f));d.push([a+Math.cos(f)*g,c+Math.sin(f)*g])}return d}function by(n,t){let e=n;for(let i=0;i<t.length;i++){const[s,r]=t[i],[o,a]=t[(i+1)%t.length],c=e;if(e=[],c.length===0)break;const l=h=>(o-s)*(h[1]-r)-(a-r)*(h[0]-s)>=-Je,u=(h,f)=>{const g=f[0]-h[0],_=f[1]-h[1],m=(o-s)*_-(a-r)*g;if(Math.abs(m)<Je)return h;const p=((o-s)*(h[1]-r)-(a-r)*(h[0]-s))/m;return[h[0]+g*p,h[1]+_*p]};let d=c[c.length-1];for(const h of c)l(h)?(l(d)||e.push(u(d,h)),e.push(h)):l(d)&&e.push(u(d,h)),d=h}return e}function So(n,t){if(!yy(n,t))return!1;const e=by(n,t),i=$a(e),s=Math.min($a(n),$a(t));return i>s*.01}function wy(n,t,e,i,s){let r=0;for(let o=0;o<s.length;o++){const[a,c]=s[o],[l,u]=s[(o+1)%s.length],d=l-a,h=u-c,f=e*h-i*d;if(Math.abs(f)<1e-9)continue;const g=((a-n)*h-(c-t)*d)/f,_=((a-n)*i-(c-t)*e)/f;g>1e-6&&_>=-1e-6&&_<=1+1e-6&&(r=Math.max(r,g)),-g>1e-6&&-_>=-1e-6&&-_<=1+1e-6&&(r=Math.max(r,-g))}return r}const Ey=8.8,Ty=4.4,gr=2.4,xr=3.2,Ds=4.4;function Wl(n){return n.kind==="switchback"?Ty:Ey}const Vh=new Map;function ns(n){let t=Vh.get(n);if(!t){const e=Ge(me(n.a)),i=Ge(me(n.b)),s=new D((e.x+i.x)/2,(e.y+i.y)/2+.15,(e.z+i.z)/2);t=new sa([new D(e.x,e.y+.18,e.z),s,new D(i.x,i.y+.18,i.z)]),Vh.set(n,t)}return t}const Ei=new D,lr=new D;function Jo(n,t){const e=ns(n),i=Wl(n)/2;e.getPointAt(t,Ei),e.getTangentAt(t,lr);const s=Math.hypot(lr.x,lr.z)||1,r=-lr.z/s,o=lr.x/s;return Math.max(Ei.y,Ee(Ei.x,Ei.z),Ee(Ei.x+r*i,Ei.z+o*i),Ee(Ei.x-r*i,Ei.z-o*i))+.15}const Dn=64,Ay=Math.tan(18*Math.PI/180),Wh=new Map;function vf(n,t){let e=Wh.get(n);if(!e){const a=ns(n).getLength()/Dn,c=Ay*a,l=new Float32Array(Dn+1);l[0]=Jo(n,0);for(let u=1;u<=Dn;u++)l[u]=Math.max(Jo(n,u/Dn),l[u-1]-c);e=new Float32Array(Dn+1),e[Dn]=l[Dn];for(let u=Dn-1;u>=0;u--)e[u]=Math.max(l[u],e[u+1]-c);Wh.set(n,e)}const i=Math.max(0,Math.min(Dn,t*Dn)),s=Math.min(Dn-1,Math.floor(i)),r=i-s;return e[s]*(1-r)+e[s+1]*r}let Cs=null;function Ry(){if(Cs)return Cs;Cs=new Map;for(const n of Ye){if(n.kind==="bridge")continue;const t=[[n.a,0],[n.b,1]];for(const[e,i]of t){const s=vf(n,i);Cs.set(e,Math.max(Cs.get(e)??-1/0,s))}}return Cs}function Xl(n,t){const e=Ry(),i=e.get(n.a)??Jo(n,0),s=e.get(n.b)??Jo(n,1);return Math.max(vf(n,t),i+(s-i)*t)}const Cy=.8,Mf=new Set(["bl-w","bl-e"]);function Py(n){const t=Ge(me(n)),e=[];for(const i of Ye){if(i.kind==="bridge"&&!Mf.has(n)||i.a!==n&&i.b!==n)continue;const s=Ge(me(i.a===n?i.b:i.a)),r=s.x-t.x,o=s.z-t.z,a=Math.hypot(r,o)||1;e.push({e:i,dx:r/a,dz:o/a,hw:Wl(i)/2,len:a,ox:s.x,oz:s.z})}return e}function Ka(n,t,e,i){const s=Ge(me(t)),r=n.ox-s.x,o=n.oz-s.z,a=r*r+o*o||1,c=Math.min(1,Math.max(0,((e-s.x)*r+(i-s.z)*o)/a));return Xl(n.e,n.e.a===t?c:1-c)}function Iy(n){let t=6;for(let i=0;i<n.length;i++)for(let s=i+1;s<n.length;s++){const r=n[i],o=n[s],a=Math.min(1,Math.max(-1,r.dx*o.dx+r.dz*o.dz)),c=Math.acos(a),l=Math.min(Math.PI,Math.max(Math.PI/15,c));t=Math.max(t,(r.hw+o.hw)/Math.sin(l))}let e=1/0;for(const i of n)e=Math.min(e,i.len);return Math.min(t,e*.9,14)}let En=null;function Ly(n,t,e,i,s){const r=(i.z-s.z)*(e.x-s.x)+(s.x-i.x)*(e.z-s.z);if(Math.abs(r)<1e-12)return null;const o=((i.z-s.z)*(n-s.x)+(s.x-i.x)*(t-s.z))/r,a=((s.z-e.z)*(n-s.x)+(e.x-s.x)*(t-s.z))/r,c=1-o-a;return o<-1e-9||a<-1e-9||c<-1e-9?null:o*e.h+a*i.h+c*s.h}function ql(n,t,e,i){for(const[o,a,c]of t){const l=Ly(e,i,o,a,c);if(l!==null)return l}let s=n[0],r=1/0;for(const o of n){const a=(o.x-e)*(o.x-e)+(o.z-i)*(o.z-i);a<r&&(r=a,s=o)}return s.h}function Xh(n,t,e){return ql(n.ring,n.tris,t,e)}function Yl(){if(En)return En;const n=new Set;for(const r of Ye)r.kind!=="bridge"&&(n.add(r.a),n.add(r.b));for(const r of Mf)n.add(r);const t=new Map;for(const r of n){if(me(r).noIntersect)continue;const o=Py(r);if(o.length<2)continue;if(o.length===2){const d=Math.min(1,Math.max(-1,o[0].dx*o[1].dx+o[0].dz*o[1].dz)),h=Math.acos(d);if(h<Math.PI/12||h>Math.PI-Math.PI/12)continue}const a=Iy(o),c=Ge(me(r));let l=1/0,u=-1/0;for(const d of o){const h=Ka(d,r,c.x,c.z);l=Math.min(l,h),u=Math.max(u,h)}u-l>Cy||t.set(r,{dirs:o,stubLen:a})}const e=new Map;for(const[r,{stubLen:o}]of t)e.set(r,o);for(let r=0;r<10;r++){let o=!1;for(const a of Ye){if(a.kind==="bridge")continue;const c=e.get(a.a),l=e.get(a.b);if(c===void 0||l===void 0)continue;const u=Ge(me(a.a)),d=Ge(me(a.b)),h=Math.hypot(d.x-u.x,d.z-u.z)||1,f=Math.max(h-1,h*.5);if(c+l>f){const g=f/(c+l);e.set(a.a,c*g),e.set(a.b,l*g),o=!0}}if(!o)break}En=[];for(const[r,{dirs:o}]of t){const a=e.get(r),c=w=>a,l=Ge(me(r)),u=72,d=[];for(let w=0;w<u;w++)d.push(w/u*Math.PI*2);for(const w of o){const x=Math.atan2(w.dz,w.dx),b=Math.atan2(w.hw,c(w.e)),E=C=>(C%(Math.PI*2)+Math.PI*2)%(Math.PI*2);d.push(E(x),E(x+b),E(x-b))}d.sort((w,x)=>w-x);const h=[];for(const w of d)(h.length===0||Math.abs(w-h[h.length-1])>1e-9)&&h.push(w);const f=new Float64Array(h.length),g=new Int32Array(h.length);for(let w=0;w<h.length;w++){const x=h[w],b=Math.cos(x),E=Math.sin(x);let C=0,I=-1,U=1/0;for(let O=0;O<o.length;O++){const L=o[O],F=c(L.e),N=b*L.dx+E*L.dz,k=Math.abs(b*-L.dz+E*L.dx);let V;N>1e-6?V=Math.min(L.hw/Math.max(k,1e-6),F/N):V=Math.min(L.hw,F);const q=Math.acos(Math.max(-1,Math.min(1,N)));if(q<1e-7){C=V,I=O,U=q;break}(V>C+1e-9||Math.abs(V-C)<=1e-9&&q<U)&&(C=V,I=O,U=q)}f[w]=Math.max(C,.5),g[w]=I}const _=Math.max(...o.map(w=>Ka(w,r,l.x,l.z))),m=[];for(let w=0;w<h.length;w++){const x=h[w],b=l.x+Math.cos(x)*f[w],E=l.z+Math.sin(x)*f[w],C=g[w],I=(C>=0?Ka(o[C],r,b,E):_)+.02;m.push({x:b,z:E,h:I})}const p={x:l.x,z:l.z,h:_+.02},M=[];for(let w=0;w<h.length;w++)M.push([p,m[w],m[(w+1)%h.length]]);let y=-1/0;for(const w of m)y=Math.max(y,w.h);y=Math.max(y,p.h);const v=w=>(w%(Math.PI*2)+Math.PI*2)%(Math.PI*2),T=(w,x)=>{const b=v(Math.atan2(x,w));for(let E=0;E<h.length;E++)if(Math.abs(h[E]-b)<1e-9)return f[E];return a},A=o.map(w=>{const x=T(w.dx,w.dz),b=v(Math.atan2(w.dz,w.dx));let E=_+.02;for(let C=0;C<h.length;C++)if(Math.abs(h[C]-b)<1e-9){E=m[C].h;break}return{edge:w.e,dx:w.dx,dz:w.dz,hw:w.hw,clip:x,stub:a,clipHeight:E}});En.push({nodeId:r,ring:m,tris:M,legs:A,height:y})}const i=r=>{let o=1/0,a=-1/0;for(const c of r.ring)o=Math.min(o,c.h),a=Math.max(a,c.h);return[o,a]},s=(r,o)=>{const[a,c]=i(r),[l,u]=i(o);if(c<l-1||u<a-1)return!1;for(const d of o.ring)if(ul(r,d.x,d.z))return!0;for(const d of r.ring)if(ul(o,d.x,d.z))return!0;return!1};for(let r=0;r<10;r++){let o=!1;for(let a=0;a<En.length&&!o;a++)for(let c=a+1;c<En.length&&!o;c++){const l=En[a],u=En[c];if(!s(l,u))continue;const d=l.ring.map(L=>[L.x,L.z]),h=u.ring.map(L=>[L.x,L.z]),f=Sy(d,h),g=[...l.ring,...u.ring],_=(L,F)=>{let N=g[0],k=1/0;for(const V of g){const q=(V.x-L)*(V.x-L)+(V.z-F)*(V.z-F);q<k&&(k=q,N=V)}return N.h},m=f.map(([L,F])=>({x:L,z:F,h:_(L,F)})),p=Math.max(...m.map(L=>L.h)),M=L=>{let F=0,N=0;for(const k of L)F+=k.x,N+=k.z;return[F/L.length,N/L.length]},[y,v]=M(l.ring),[T,A]=M(u.ring),w=(y+T)/2,x=(v+A)/2,b={x:w,z:x,h:_(w,x)},E=[];for(let L=0;L<m.length;L++)E.push([b,m[L],m[(L+1)%m.length]]);const C=new Set,I=[],U=[...l.mergedIds??[l.nodeId],...u.mergedIds??[u.nodeId]];for(const L of[...l.legs,...u.legs]){if(C.has(L.edge))continue;C.add(L.edge);const F=U.find(W=>L.edge.a===W||L.edge.b===W)??U[0],N=Ge(me(F)),k=wy(N.x,N.z,L.dx,L.dz,f),V=k>0?k:L.clip,q=ql(m,E,N.x+L.dx*V,N.z+L.dz*V);I.push({...L,clip:V,clipHeight:q})}const O={nodeId:`${l.nodeId}+${u.nodeId}`,ring:m,tris:E,legs:I,height:p,mergedIds:U};En[a]=O,En.splice(c,1),o=!0}if(!o)break}wr=new Map;for(const r of En){const o=r.mergedIds??[r.nodeId];for(const a of r.legs){let c=wr.get(a.edge);c||(c={a:null,b:null},wr.set(a.edge,c));const l={dist:a.clip,height:a.clipHeight};o.includes(a.edge.a)?c.a=l:o.includes(a.edge.b)?c.b=l:a.edge.a===r.nodeId?c.a=l:c.b=l}}return En}let wr=null;function Qo(n){return wr||Yl(),wr.get(n)??{a:null,b:null}}function qh(n,t,e){const i=ns(n),s=Ge(me(t==="a"?n.a:n.b));let r=0,o=1;for(let c=0;c<40;c++){const l=(r+o)/2,u=i.getPointAt(t==="a"?l:1-l);Math.hypot(u.x-s.x,u.z-s.z)<e?r=l:o=l}const a=(r+o)/2;return t==="a"?a:1-a}const Dy=3;function Yh(n){const t=Math.max(0,Math.min(1,n));return t*t*(3-2*t)}const Zh=new Map;function Ny(n){let t=Zh.get(n);return t===void 0&&(t=ns(n).getLength(),Zh.set(n,t)),t}function ll(n,t){const e=Xl(n,t),{a:i,b:s}=Qo(n);if(!i&&!s)return e;const r=Ny(n),o=t*r,a=r-(i?i.dist:0)-(s?s.dist:0),c=Math.max(1e-6,Math.min(Dy,a/2));if(i&&o<i.dist+c){const l=Yh((o-i.dist)/c);return i.height*(1-l)+e*l}if(s&&o>r-s.dist-c){const l=Yh((r-s.dist-o)/c);return s.height*(1-l)+e*l}return e}const bo=1.5;function Ja(n,t,e,i){const s=ll(n,t);let r=1/0,o=0,a=null,c=!1;for(const d of Yl()){if(!d.legs.some(f=>f.edge===n))continue;const h=Oy(d,e,i);if(h>0){c=!0;const f=ql(d.ring,d.tris,e,i);a=a===null?f:Math.max(a,f)}Math.abs(h)<Math.abs(r)&&(r=h,o=Uy(d,e,i))}if(!c&&r<-bo)return s;if(c&&r>bo)return a;if(r===1/0)return s;const l=zy(-bo,bo,r);return s+((c?a:o)-s)*l}function Uy(n,t,e){const i=n.ring;let s=1/0,r=i[0].h;for(let o=0,a=i.length-1;o<i.length;a=o++){const c=i[a].x,l=i[a].z,u=i[o].x,d=i[o].z,h=u-c,f=d-l,g=h*h+f*f||1,_=Math.max(0,Math.min(1,((t-c)*h+(e-l)*f)/g)),m=c+h*_,p=l+f*_,M=(t-m)*(t-m)+(e-p)*(e-p);M<s&&(s=M,r=i[a].h+(i[o].h-i[a].h)*_)}return r}function Qa(n,t,e){const i=t[0]-n[0],s=t[1]-n[1],r=Math.hypot(i,s)||1,o=-s/r*e/2,a=i/r*e/2;return[[n[0]+o,n[1]+a],[n[0]-o,n[1]-a],[t[0]-o,t[1]-a],[t[0]+o,t[1]+a]]}function Fy(n){const t=Ge(me(n.nodeId)),e=[],i=[],s=(u,d,h,f)=>[t.x+u*h-d*f,t.z+d*h+u*f];for(const u of n.legs){const{dx:d,dz:h,hw:f,stub:g}=u,_=Math.min(gr,f-.3);if(_>.5){const y=Math.max(g-1.3,.5);e.push([s(d,h,y-.225,-_),s(d,h,y-.225,_),s(d,h,y+.225,_),s(d,h,y+.225,-_)])}const m=f>3?5:3,p=2*f-1,M=Math.max(g-3,1);for(let y=0;y<m;y++){const v=-p/2+p*(y+.5)/m;e.push([s(d,h,M-1,v-.28),s(d,h,M-1,v+.28),s(d,h,M+1,v+.28),s(d,h,M+1,v-.28)])}}const r=[...n.legs].sort((u,d)=>Math.atan2(u.dz,u.dx)-Math.atan2(d.dz,d.dx));for(let u=0;u<r.length;u++){const d=r[u],h=r[(u+1)%r.length];if(d.hw<Ds-.01||h.hw<Ds-.01)continue;const f=Math.atan2(d.dz,d.dx);let _=Math.atan2(h.dz,h.dx)-f;if(_<=0&&(_+=Math.PI*2),_>Math.PI)continue;const m=(xr+Ds)/2,p=-d.dz,M=d.dx,y=h.dz,v=-h.dx,T=[t.x+d.dx*(d.stub-.7)+p*m,t.z+d.dz*(d.stub-.7)+M*m],A=[t.x+h.dx*(h.stub-.7)+y*m,t.z+h.dz*(h.stub-.7)+v*m],w=1;if(_>Math.PI-Math.PI/12){i.push(Qa(T,A,w));continue}if(_<Math.PI/6)continue;const x=Ds,b=h.dx*d.dz-d.dx*h.dz;if(Math.abs(b)<1e-6)continue;const E=x*(-(y-p)*h.dz+h.dx*(v-M))/b,C=t.x+d.dx*E+p*x,I=t.z+d.dz*E+M*x,U=f+_/2,O=Math.hypot(C-t.x,I-t.z),L=Math.min(O-.4,.85*Math.min(d.stub,h.stub));if(L<1.2)continue;const F=[t.x+Math.cos(U)*L,t.z+Math.sin(U)*L];i.push(Qa(T,F,w),Qa(F,A,w))}let a=(u=>{const d=[];for(const h of u){let f=!1;for(const g of d)if(So(h,g)){f=!0;break}f||d.push(h)}return d})(e),c=!1;for(let u=0;u<a.length&&!c;u++)for(let d=u+1;d<a.length&&!c;d++)So(a[u],a[d])&&(c=!0);c&&(a=[]);const l=[];for(const u of i){let d=!1;for(const h of a)if(So(u,h)){d=!0;break}if(!d){for(const h of l)if(So(u,h)){d=!0;break}}d||l.push(u)}return{white:a,walk:[]}}function ul(n,t,e){const i=n.ring;let s=!1;for(let r=0,o=i.length-1;r<i.length;o=r++){const a=i[r].x,c=i[r].z,l=i[o].x,u=i[o].z;c>e!=u>e&&t<(l-a)*(e-c)/(u-c)+a&&(s=!s)}return s}function Oy(n,t,e){const i=n.ring;let s=1/0;for(let o=0,a=i.length-1;o<i.length;a=o++){const c=i[a].x,l=i[a].z,u=i[o].x,d=i[o].z,h=u-c,f=d-l,g=h*h+f*f||1,_=Math.max(0,Math.min(1,((t-c)*h+(e-l)*f)/g)),m=c+h*_,p=l+f*_,M=t-m,y=e-p,v=M*M+y*y;v<s&&(s=v)}const r=Math.sqrt(s);return ul(n,t,e)?r:-r}function zy(n,t,e){const i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)}const By=12596780,ja=7,$h=1,ur=3.2,Kh=12;function ky(){return new es({color:By})}function Hy(n){var w,x;const t=Ye.find(b=>b.kind==="bridge");if(!t)return;const e=Ge(me(t.a)),i=Ge(me(t.b)),s=Xl(t,.5)-.1,r=new D(i.x-e.x,0,i.z-e.z),o=r.length();if(o<1)return;r.normalize();const a=new D(-r.z,0,r.x),c=(b,E,C)=>new D(e.x+(i.x-e.x)*b+a.x*E,C,e.z+(i.z-e.z)*b+a.z*E),l=b=>b==="x"?Math.atan2(-r.z,r.x):Math.atan2(a.x,a.z),u=ky(),d=new es({color:16767370}),h=Qo(t),f=((w=h.a)==null?void 0:w.dist)??0,g=((x=h.b)==null?void 0:x.dist)??0,_=Math.max(o-f-g,1),m=e.x+r.x*(f+_/2),p=e.z+r.z*(f+_/2),M=new J(new te(_,$h,ja),u);M.position.set(m,s-$h/2,p),M.rotation.y=l("x"),n.add(M);const y=new es({color:3815994}),v=new J(new te(_,.1,ja-1),y);v.position.set(m,s+.05,p),v.rotation.y=l("x"),n.add(v);for(const b of[1/3,2/3]){for(const E of[-ur,ur]){const C=new J(new te(1.5,20,1.5),u),I=c(b,E,s+2);C.position.copy(I),C.rotation.y=l("x"),n.add(C)}for(const E of[s+4,s+10]){const C=new J(new te(1,1,ur*2+1.5),u);C.position.copy(c(b,0,E)),C.rotation.y=l("z"),n.add(C)}}const T=[];for(const b of[-ur,ur]){const E=new sa([c(0,b,s+.2),c(.15,b,s+5),c(.3333333333333333,b,s+Kh),c(.5,b,s+2.5),c(.6666666666666666,b,s+Kh),c(.85,b,s+5),c(1,b,s+.2)]);T.push(E),n.add(new J(new ra(E,64,.25,8,!1),u))}for(const b of T){const E=b.getPoints(400);for(let C=f+3;C<o-g-3;C+=6){const I=C/o,U=e.x+(i.x-e.x)*I;let O=E[0],L=1/0;for(const k of E){const V=Math.abs(k.x-U);V<L&&(L=V,O=k)}const F=O.y-s;if(F<.5)continue;const N=new J(new pe(.08,.08,F,6),u);N.position.set(U,s+F/2,O.z),n.add(N)}}let A=1;for(let b=f+6;b<o-g-3;b+=12){const E=b/o,C=c(E,A*(ja/2-.7),s),I=new J(new pe(.12,.16,4.2,8),u);I.position.set(C.x,s+2.1,C.z),n.add(I);const U=new J(new de(.32,10,8),d);U.position.set(C.x,s+4.2,C.z),n.add(U),A*=-1}}const[Zl,yf,$l,Sf]=ge,hl=(Zl+$l)/2,Or=(yf+Sf)/2,tc=(()=>{const n=[];let t=0;for(const e of[Or-10,Or+10])for(let i=Zl+2.5;i<=$l-2.5;i+=5){const s=.9+t*37%10/50;n.push({x:i,z:e,s}),t++}return n})(),Gy=[{x0:Zl,z0:Or-1.5,x1:$l,z1:Or+1.5},{x0:hl-1.5,z0:yf,x1:hl+1.5,z1:Sf}],Vy={x:hl,z:Or,w:14,d:9,h:5},Wy=1e6,Oi=3.4;function bf(){return{winLit:[],winUnlit:[],sills:[],doors:[],flowerBoxes:[],petals:[],leaves:[],awnings:[[],[],[]],bays:[]}}function Xy(n,t){n.winLit.push(...t.winLit),n.winUnlit.push(...t.winUnlit),n.sills.push(...t.sills),n.doors.push(...t.doors),n.flowerBoxes.push(...t.flowerBoxes),n.petals.push(...t.petals),n.leaves.push(...t.leaves),t.awnings.forEach((e,i)=>n.awnings[i].push(...e)),n.bays.push(...t.bays)}const qy={north:0,south:1,east:2,west:3};function Yy(n){const{sx:t,sy:e,sz:i,minY:s,cx:r,cz:o,district:a,seedBase:c,colorIdx:l,bayWindow:u}=n,d=bf(),h=(v,T,A,w,x,b,E,C=0)=>({x:v,y:T,z:A,rotX:C,rotY:w,sx:x,sy:b,sz:E}),f=Math.min(4.2,e*.28),g=e-f,_=Math.max(1,Math.round(g/Oi)),m=Math.min(2.6,t*.18),p=Math.min(2.4,Oi*.55),M=Math.min(3,Oi*.82),y=v=>{const T=v==="north"||v==="south"?t:i,A=T>29?[-.27,.27]:[-.2,.2],w=v==="north"?Math.PI:v==="south"?0:v==="west"?-Math.PI/2:Math.PI/2,x=v==="north"||v==="south",b=v==="north"?-1:v==="south"?1:v==="west"?-1:1,E=(L,F,N)=>x?[r+L,F,o+b*(i*.5+N)]:[r+b*(t*.5+N),F,o+L],C=(L,F)=>{A.forEach((N,k)=>{const V=fn(c*1e3+qy[v]*100+L*10+k),q=m*(.88+V()*.24),W=p*(.88+V()*.24),ut=s+g-W*.5-.35,Nt=Math.min(F,ut),[wt,Mt,K]=E(T*N,Nt,.055);(V()<.35?d.winLit:d.winUnlit).push(h(wt,Mt,K,w,q,W,1));const[lt,nt,Et]=E(T*N,Nt-W*.5-.08,.1);if(d.sills.push(h(lt,nt,Et,x?0:Math.PI/2,q+.38,.18,.16)),V()<.3){const[Ft,pt,ae]=E(T*N,Nt-W*.5-.35,.28);d.flowerBoxes.push(h(Ft,pt,ae,x?0:Math.PI/2,q*.8,.35,.4));for(let Wt=0;Wt<3;Wt++){const[it,rt,st]=E(T*N+(Wt-1)*q*.22,Nt-W*.5-.12,.28);(Wt%2?d.petals:d.leaves).push(h(it,rt,st,0,.14,.14,.14))}}})},[I,U,O]=E(0,s+M*.5,.06);d.doors.push(h(I,U,O,w,Math.min(2.4,T*.13),M,1)),C(0,s+Oi*.58);for(let L=1;L<_;L++)C(L,s+Oi*L+Oi*.58)};if(y("north"),y("south"),y("east"),y("west"),a==="merchant-row"){const v=Math.min(t*.7,10),T=2.2;d.awnings[l%3].push(h(r,s+M+.55,o+i*.5+T*.5-.15,0,v,T,1,-Math.PI/2))}if(u){const v=Math.min(3.2,t*.4),T=Oi*.95,A=.8;d.bays.push(h(r,s+T*.5,o+i*.5+A*.5-.05,0,v,T,A))}return d}function ct(n){return new es({color:n,map:Zy(),gradientMap:$y()})}let zi,Ps;function Zy(){if(zi)return zi;const n=document.createElement("canvas");n.width=n.height=_r;const t=n.getContext("2d");t.fillStyle="rgba(255,255,255,.9)",t.fillRect(0,0,_r,_r);for(const e of mp(dp))t.fillStyle=`rgba(85,55,45,${e.alpha})`,t.fillRect(e.x,e.y,1,1);return zi=new ji(n),zi.colorSpace=Qe,zi.wrapS=zi.wrapT=Cr,zi}function $y(){if(Ps)return Ps;const n=document.createElement("canvas");n.width=1,n.height=3;const t=n.getContext("2d");return t.fillStyle="#202020",t.fillRect(0,0,1,1),t.fillStyle="#9a9a9a",t.fillRect(0,1,1,1),t.fillStyle="#fff",t.fillRect(0,2,1,1),Ps=new ji(n),Ps.minFilter=Ps.magFilter=Ze,Ps}function Ky(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Me;let l=0;for(let u=0;u<n.length;++u){const d=n[u];let h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0;const d=[];for(let h=0;h<n.length;++h){const f=n[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=n[h].attributes.position.count}c.setIndex(d)}for(const u in r){const d=Jh(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][h]);const g=Jh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function Jh(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){const u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new pn(o,e,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const d=c/e;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<e;g++){const _=u.getComponent(h,g);a.setComponent(h+d,g,_)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}let ec=null;function Jy(){if(ec)return ec;const n=[];for(const i of Pe)n.push({name:i.name,x:i.position.x,z:i.position.z});for(const i of Bo())n.push({name:"house",x:i.x+i.w/2,z:i.z+i.d/2});const t=new Set,e=[];for(const i of n){let s="",r=1/0;for(const o of vl){const a=o.x-i.x,c=o.z-i.z,l=a*a+c*c;l<r&&(r=l,s=o.id)}s&&r<3600&&!t.has(s)&&(t.add(s),e.push({...i,nodeId:s}))}return ec=e,e}let nc={withBridge:null,noBridge:null};function Qy(n=!1){const t=n?"withBridge":"noBridge";if(nc[t])return nc[t];const e=new Map,i=(s,r,o)=>{e.has(s)||e.set(s,[]);const a=Ge(me(s)),c=Ge(me(r));e.get(s).push({to:r,edge:o,w:Math.hypot(a.x-c.x,a.z-c.z)})};for(const s of Ye)s.kind==="bridge"&&!n||(i(s.a,s.b,s),i(s.b,s.a,s));return nc[t]=e,e}function jy(n,t,e=!1){if(n===t)return[];const i=Qy(e),s=new Map([[n,0]]),r=new Map,o=new Set;for(;;){let l=null,u=1/0;for(const[d,h]of s)!o.has(d)&&h<u&&(u=h,l=d);if(l===null)return null;if(l===t)break;o.add(l);for(const d of i.get(l)??[]){const h=u+d.w;h<(s.get(d.to)??1/0)&&(s.set(d.to,h),r.set(d.to,{edge:d.edge,from:l}))}}const a=[];let c=t;for(;c!==n;){const l=r.get(c);if(!l)return null;a.unshift(l.edge),c=l.from}return a}const Qh=16,t1=44;let Ns=null;function wf(){if(Ns)return Ns;const n=new Zo(.07,.4,4,8);return n.translate(0,-.25,0),Ns={carBody:new te(1.9,.9,4.2),carCabin:new te(1.7,.65,2),wheel:new pe(.35,.35,.3,10),pedBody:new Zo(.22,.9,4,10),pedHead:new de(.2,12,10),pedArm:n},Ns}let Us=null;function Ef(){if(Us)return Us;const n=t=>ct(t);return Us={glass:n(1714746),tire:n(2236962),carRed:n(13904426),carBlue:n(3829413),carGray:n(9145227),carBlack:n(2763306),carGreen:n(4881497),carBrown:n(9132587),carCream:n(15261904),carPink:n(16731558),carYellow:n(16767306),carPurple:n(10309119),carTeal:n(5111688),skin1:n(16762531),skin2:n(15245418),skin3:n(13007434),skin4:n(9067066),cloth1:n(3829413),cloth2:n(13904426),cloth3:n(4885355),cloth4:n(9132587),cloth5:n(8010362),cloth6:n(15261904),pants:n(2767434)},Us}let wo=null;function jh(){if(wo)return wo;const n=t=>{const e=document.createElement("canvas");e.width=256,e.height=128;const i=e.getContext("2d");i.fillStyle="white",i.strokeStyle="#333",i.lineWidth=6;const s=24,r=10,o=10,a=236,c=80;i.beginPath(),typeof i.roundRect=="function"?i.roundRect(r,o,a,c,s):(i.moveTo(r+s,o),i.arcTo(r+a,o,r+a,o+c,s),i.arcTo(r+a,o+c,r,o+c,s),i.arcTo(r,o+c,r,o,s),i.arcTo(r,o,r+a,o,s),i.closePath()),i.fill(),i.stroke(),i.beginPath(),i.moveTo(110,88),i.lineTo(128,118),i.lineTo(146,88),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#222",i.font="bold 44px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(t,128,52);const l=new ji(e);return l.colorSpace=Qe,l};return wo={"Hello!":n("Hello!"),"Hi!":n("Hi!"),"Ahhh!":n("Ahhh!")},wo}function e1(n,t){const e=new oe,i=fn(t),s=wf(),r=Ef();let o,a=4.2,c=.9;switch(n){case"beetle":o=[r.carPink,r.carYellow,r.carPurple,r.carTeal][Math.floor(i()*4)],a=3.6,c=1;break;case"sports":o=r.carRed,a=4,c=.65;break;case"truck":o=[r.carGreen,r.carBrown,r.carBlue][Math.floor(i()*3)],a=4.8,c=1.1;break;case"van":o=[r.carCream,r.carBlue,r.carYellow][Math.floor(i()*3)],a=4.6,c=1.4;break;default:o=[r.carBlue,r.carGray,r.carBlack,r.carRed,r.carGreen][Math.floor(i()*5)]}const l=[],u=new te(1.9,c,a);u.translate(0,.55+c/2,0),l.push(u);const d=[[-.85,a*.32],[.85,a*.32],[-.85,-a*.32],[.85,-a*.32]];for(const[_,m]of d){const p=s.wheel.clone();p.rotateZ(Math.PI/2),p.translate(_,.35,m),l.push(p)}const h=Ky(l);l.forEach(_=>_.dispose());const f=new J(h,o);f.castShadow=!0,e.add(f);const g=new J(s.carCabin,r.glass);if(g.position.set(0,.55+c+.3,n==="truck"?a*.25:0),g.scale.z=a/4.2,g.castShadow=!0,e.add(g),n==="beetle"){const _=new zl(.3,12),m=new An({color:16777215});for(const p of[1,-1]){const M=new J(_,m);M.position.set(p*.97,1.1,0),M.rotation.y=p*Math.PI/2,e.add(M)}}return e}function n1(n){const t=new oe,e=fn(n),i=wf(),s=Ef(),r=[s.skin1,s.skin2,s.skin3,s.skin4][Math.floor(e()*4)],o=[s.cloth1,s.cloth2,s.cloth3,s.cloth4,s.cloth5,s.cloth6][Math.floor(e()*6)],a=new J(i.pedBody,o);a.position.y=.85,a.castShadow=!0,t.add(a);const c=new J(i.pedHead,r);c.position.y=1.55,c.castShadow=!0,t.add(c);const l=new J(i.pedArm,o);l.position.set(.32,1.25,0),l.rotation.z=-.15,t.add(l);const u=new J(i.pedArm,o);return u.position.set(-.32,1.25,0),u.rotation.z=.15,t.add(u),{group:t,armR:l}}function Bi(n,t){for(const e of un)if(n>e.min.x-1&&n<e.max.x+1&&t>e.min.z-1&&t<e.max.z+1)return!1;return!(qi.some(e=>n>e[0]&&n<e[2]&&t>e[1]&&t<e[3])||ln(n,t))}const Nn=class Nn{constructor(t,e=Math.floor(Math.random()*2147483647)){at(this,"cars",[]);at(this,"peds",[]);at(this,"graph",hp());at(this,"group",new oe);at(this,"rng");at(this,"seed");at(this,"tmpP",new D);at(this,"tmpT",new D);at(this,"tmpV",new D);this.scene=t,this.seed=e,this.rng=fn(e),t.add(this.group),this.spawnCars(),this.spawnPeds()}orientToTangent(t,e){t.rotation.order="YXZ",t.rotation.y=Math.atan2(e.x,e.z),t.rotation.x=-Math.asin($e.clamp(e.y,-1,1))}makeCurve(t){return ns(t)}spawnCars(){const t=fn((this.seed^2654435769)>>>0),e=Ye.filter(o=>{if(o.kind==="bridge"||o.kind==="switchback")return!1;const a=me(o.a),c=me(o.b);return Math.abs(a.x)<120&&Math.abs(c.x)<120&&Math.abs(a.z)<120&&Math.abs(c.z)<120}),i=e.length>0?e:Ye.filter(o=>o.kind!=="bridge"),s=["beetle","sports"],r=["sedan","sedan","sedan","sedan","sedan","sedan","truck","truck","truck","van","van","van","sedan","sedan"];for(let o=s.length;o<Qh;o++)s.push(r[(o-s.length)%r.length]);for(let o=s.length-1;o>0;o--){const a=Math.floor(t()*(o+1));[s[o],s[a]]=[s[a],s[o]]}for(let o=0;o<Qh;o++){const a=i[Math.floor(t()*i.length)],c=this.makeCurve(a),l=s[o],u=e1(l,1e3+o);this.group.add(u);const d=l==="sports"?12:8+t()*4;this.cars.push({edge:a,t:t(),dir:t()<.5?1:-1,speed:d,baseSpeed:d,cruiseSpeed:d,variant:l,group:u,curve:c,edgeLen:c.getLength(),offX:0,offZ:0,turnSlowT:0,destNode:null,route:[],dwellT:0,dwellNode:null})}}spawnPeds(){const t=fn((this.seed^2246822507)>>>0),e=jh(),i=Ye.filter(s=>{if(s.kind==="bridge"||s.kind==="switchback")return!1;const r=me(s.a),o=me(s.b);return Math.abs(r.x)<130&&Math.abs(o.x)<130&&Math.abs(r.z)<130&&Math.abs(o.z)<130});for(let s=0;s<t1;s++){const r=s>=30;let o=null,a=0,c=0;if(r){let y=0;for(;y++<50&&(a=ge[0]+t()*(ge[2]-ge[0]),c=ge[1]+t()*(ge[3]-ge[1]),!Bi(a,c)););y>=50&&(a=(ge[0]+ge[2])/2,c=(ge[1]+ge[3])/2)}else o=i[Math.floor(t()*i.length)];const{group:l,armR:u}=n1(2e3+s),d=o?this.makeCurve(o):new sa([new D(a,0,c),new D(a+1,0,c)]);let h=0,f=1,g=0,_=0;if(!r&&o){h=t(),d.getPointAt(h,this.tmpP),d.getTangentAt(h,this.tmpT),f=t()<.5?1:-1;const y=v=>{const T=-this.tmpT.z*4*v,A=this.tmpT.x*4*v,w=this.tmpP.x+T,x=this.tmpP.z+A;return!ln(w,x)&&Bi(w,x)};if(!y(f)){const v=f===1?-1:1;y(v)&&(f=v)}g=-this.tmpT.z*4*f,_=this.tmpT.x*4*f,a=this.tmpP.x+g,c=this.tmpP.z+_}const m=!r&&o?Ja(o,h,a,c):Ee(a,c);l.position.set(a,m,c),this.group.add(l);const p=new el(new Fl({map:e["Hello!"],transparent:!0,opacity:0,depthTest:!1}));p.scale.set(1.5,.75,1),p.position.set(a,m+2.2,c),p.visible=!1,this.group.add(p);const M=1.2+t()*.6;this.peds.push({edge:o,t:h,dir:t()<.5?1:-1,side:f,offX:g,offZ:_,speed:M,baseSpeed:M,inPark:r,parkTarget:new D(a,0,c),pos:new D(a,m,c),vel:new D,group:l,armR:u,bubble:p,greetCd:0,startleCd:0,bubbleT:0,hopT:0,waveT:0,stuckT:0,lastPos:new D(a,m,c),curve:d,edgeLen:d.getLength(),destNode:null,route:[],dwellT:0,dwellNode:null}),r&&this.pickParkTarget(this.peds[this.peds.length-1],t)}}pickParkTarget(t,e){let i=0;for(;i++<30;){const s=ge[0]+e()*(ge[2]-ge[0]),r=ge[1]+e()*(ge[3]-ge[1]);if(Bi(s,r)){t.parkTarget.set(s,0,r);return}}t.parkTarget.copy(t.pos)}update(t,e,i,s,r){for(const o of this.cars)this.updateCar(o,t);for(const o of this.peds)this.updatePed(o,t,e,i,s,r)}nextEdge(t,e,i=!1){const s=Ye.filter(o=>(i||o.kind!=="bridge")&&(o.a===e||o.b===e)&&!(o.a===t.a&&o.b===t.b)),r=s.length>0?s[Math.floor(this.rng()*s.length)]:t;return r.a===e?{edge:r,dir:1,t:0}:{edge:r,dir:-1,t:1}}assignTrip(t,e){const i=Jy(),s="variant"in t;for(let r=0;r<8;r++){const o=i[this.rng()*i.length|0];if(o.nodeId===e)continue;const a=jy(e,o.nodeId,s);if(a&&a.length>0){t.destNode=o.nodeId,t.route=a;return}}t.destNode=null,t.route=[]}mountEdge(t,e,i,s,r){t.edge=e,s!==void 0?(t.dir=s,t.t=r):e.a===i?(t.dir=1,t.t=0):(t.dir=-1,t.t=1),t.curve=this.makeCurve(e),t.edgeLen=t.curve.getLength(),t.turnSlowT!==void 0&&(t.turnSlowT=0)}arriveNode(t,e){if(t.route.length>0){const r=t.route[0];if(r.a===e||r.b===e)return t.route.shift(),this.mountEdge(t,r,e),"route";t.route=[],t.destNode=null}if(t.destNode!==null&&e===t.destNode)return t.dwellT=2+this.rng()*3,t.dwellNode=e,t.t=$e.clamp(t.t,0,1),"dwell";const i="variant"in t;if(t.destNode===null&&this.assignTrip(t,e),t.route.length>0){const r=t.route.shift();return this.mountEdge(t,r,e),"route"}const s=this.nextEdge(t.edge,e,i);return this.mountEdge(t,s.edge,e,s.dir,s.t),"wander"}beginNextLeg(t){const e=t.dwellNode??(t.dir===1?t.edge.b:t.edge.a);if(t.dwellNode=null,this.assignTrip(t,e),t.route.length>0){const i=t.route.shift();this.mountEdge(t,i,e)}else{const i="variant"in t,s=this.nextEdge(t.edge,e,i);this.mountEdge(t,s.edge,e,s.dir,s.t)}}carFollowSpeed(t){let s=t.baseSpeed;for(const r of this.cars){if(r===t||r.dwellT>0||r.edge!==t.edge||r.dir!==t.dir)continue;const o=(r.t-t.t)*t.dir*t.edgeLen;if(!(o<=0||o>7)){if(o<3.5)return 0;s=Math.min(s,r.speed*(o/7))}}return s}carDistToNode(t,e){if(t.dir===1){if(t.edge.b===e)return(1-t.t)*t.edgeLen;if(t.edge.a===e)return t.t*t.edgeLen}else{if(t.edge.a===e)return t.t*t.edgeLen;if(t.edge.b===e)return(1-t.t)*t.edgeLen}return 1/0}carIntersectionSpeed(t){const e=Nn.YIELD_ZONE,i=Nn.YIELD_STOP,s=Nn.YIELD_SLOW,r=t.dir===1?t.edge.b:t.edge.a,o=(t.dir===1?1-t.t:t.t)*t.edgeLen;if(o>s)return t.baseSpeed;const a=this.cars.indexOf(t);for(const c of this.cars){if(c===t||c.dwellT>0)continue;const l=this.carDistToNode(c,r);if(l>e)continue;const u=c.dir===1&&c.edge.a===r||c.dir===-1&&c.edge.b===r;let d=!1;if(u||l<o-.5?d=!0:Math.abs(l-o)<=.5&&(d=this.cars.indexOf(c)<a),d)return o<=i?0:t.baseSpeed*Math.max(0,(o-i)/(s-i))}return t.baseSpeed}carPedYieldSpeed(t){const e=Nn.YIELD_ZONE,i=Nn.YIELD_STOP,s=Nn.YIELD_SLOW,r=(t.dir===1?1-t.t:t.t)*t.edgeLen;return(t.dir===1?t.t:1-t.t)*t.edgeLen<=e&&this.pedInCarPath(t,8)?0:r>s||!this.pedInCarPath(t,r+8)?t.baseSpeed:r<=i?0:t.baseSpeed*Math.max(0,(r-i)/(s-i))}pedInCarPath(t,e){const i=$e.clamp(t.t,0,1);t.curve.getPointAt(i,this.tmpP),t.curve.getTangentAt(i,this.tmpT),t.dir===-1&&this.tmpT.negate();const s=this.tmpT.x,r=this.tmpT.z,o=this.tmpP.x+t.offX+s*2.4,a=this.tmpP.z+t.offZ+r*2.4,c=-r,l=s;for(const u of this.peds){if(u.inPark||u.dwellT>0)continue;const d=u.pos.x-o,h=u.pos.z-a,f=d*s+h*r;if(f<0||f>e)continue;const g=d*c+h*l,_=Math.abs(g);if(_<2)return!0;if(_<4.5){const m=-(u.vel.x*c+u.vel.z*l)*Math.sign(g);if(m>.1){const p=f/Math.max(t.speed,.5);if(_-m*p<2.2)return!0}}}return!1}pedInNodeZone(t,e){const i=me(t),s=e*e;for(const r of this.peds){if(r.inPark||r.dwellT>0)continue;const o=r.pos.x-i.x,a=r.pos.z-i.z;if(o*o+a*a<=s)return!0}return!1}pedFollowSpeed(t){let s=t.baseSpeed;for(const r of this.peds){if(r===t||r.inPark||r.dwellT>0||r.edge!==t.edge||r.dir!==t.dir||r.side!==t.side)continue;const o=(r.t-t.t)*t.dir*t.edgeLen;if(!(o<=0||o>2.5)){if(o<1.2)return 0;s=Math.min(s,r.speed*(o/2.5))}}return s}updateCar(t,e){if(t.dwellT>0){t.dwellT-=e,t.dwellT<=0&&(this.beginNextLeg(t),t.baseSpeed=t.cruiseSpeed*(t.edge.kind==="switchback"?.6:1),t.speed=t.baseSpeed);return}t.speed=this.carFollowSpeed(t),t.speed=Math.min(t.speed,this.carIntersectionSpeed(t)),t.speed=Math.min(t.speed,this.carPedYieldSpeed(t)),t.turnSlowT>0&&(t.turnSlowT-=e,t.speed=Math.min(t.speed,t.baseSpeed*.5));const i=$e.clamp(t.t,0,1);t.curve.getTangentAt(i,this.tmpT),t.dir===-1&&this.tmpT.negate();const s=-this.tmpT.z*1.4,r=this.tmpT.x*1.4,o=s-t.offX,a=r-t.offZ,c=Math.hypot(o,a),l=t.speed*e,u=Math.min(c,l);let d,h,f=0,g=0;if(u>1e-9){f=o/c,g=a/c;const T=(o*this.tmpT.x+a*this.tmpT.z)/c,A=Math.max(0,1-T*T);h=u,d=-h*T+Math.sqrt(Math.max(0,l*l-h*h*A)),d=Math.min(Math.max(0,d),l)}else h=0,d=l;const _=t.t;t.t+=t.dir*d/t.edgeLen;let m=!1;if(t.dir===1&&_<1&&t.t>=1||t.dir===-1&&_>0&&t.t<=0){const T=t.dir===1?t.edge.b:t.edge.a,A=$e.clamp(t.t,0,1);t.curve.getTangentAt(A,this.tmpT),t.dir===-1&&this.tmpT.negate();const w=this.tmpT.x,x=this.tmpT.z;this.arriveNode(t,T);const b=$e.clamp(t.t,0,1);t.curve.getTangentAt(b,this.tmpT),t.dir===-1&&this.tmpT.negate(),w*this.tmpT.x+x*this.tmpT.z<.819&&(t.turnSlowT=1.5),t.baseSpeed=t.cruiseSpeed*(t.edge.kind==="switchback"?.6:1),t.speed=t.baseSpeed,m=!0}const p=$e.clamp(t.t,0,1);t.curve.getPointAt(p,this.tmpP),t.curve.getTangentAt(p,this.tmpT),t.dir===-1&&this.tmpT.negate(),!m&&h>0&&(t.offX+=f*h,t.offZ+=g*h);const M=this.tmpP.x+t.offX,y=this.tmpP.z+t.offZ,v=Ja(t.edge,p,M,y);t.group.position.set(M,v,y),this.orientToTangent(t.group,this.tmpT)}updatePed(t,e,i,s,r,o){t.inPark?this.updateParkPed(t,e):this.updateSidewalkPed(t,e);const a=i.x-t.pos.x,c=i.z-t.pos.z,l=Math.hypot(a,c),u=i.y-t.pos.y,d=jh();if(l<6&&u<10&&u>-2&&(s>15||r<-8)?o>t.startleCd&&(t.startleCd=o+12,t.bubble.material.map=d["Ahhh!"],t.bubble.material.needsUpdate=!0,t.bubbleT=2,t.bubble.visible=!0,t.hopT=.4,t.waveT=0):l<12&&u>0&&u<8&&s<10&&o>t.greetCd&&(t.greetCd=o+8,t.bubble.material.map=d["Hello!"],t.bubble.material.needsUpdate=!0,t.bubbleT=2,t.bubble.visible=!0,t.waveT=2),t.bubbleT>0){t.bubbleT-=e;const h=t.bubble.material;h.opacity=Math.min(1,t.bubbleT/.3,(2-t.bubbleT)/.3),t.bubble.position.set(t.pos.x,t.pos.y+2.2,t.pos.z),t.bubbleT<=0&&(t.bubble.visible=!1)}if(t.hopT>0){t.hopT-=e;const h=1-t.hopT/.4;t.group.position.y=t.pos.y+Math.sin(h*Math.PI)*.3}t.waveT>0?(t.waveT-=e,t.armR.rotation.z=-2.2+Math.sin(o*12)*.3):t.armR.rotation.z=-.15}updateSidewalkPed(t,e){if(t.dwellT>0){t.dwellT-=e,t.dwellT<=0&&this.beginNextLeg(t);return}t.speed=this.pedFollowSpeed(t);const i=$e.clamp(t.t,0,1);t.curve.getTangentAt(i,this.tmpT),t.dir===-1&&this.tmpT.negate();const s=-this.tmpT.z,r=this.tmpT.x,o=s*t.side*4,a=r*t.side*4,c=o-t.offX,l=a-t.offZ,u=Math.hypot(c,l),d=t.speed*e;let h=Math.min(u,d),f=0,g=0,_=0,m=0;if(h>1e-9){t.curve.getPointAt(i,this.tmpP);const E=c/u,C=l/u,I=this.tmpP.x+t.offX+E*h,U=this.tmpP.z+t.offZ+C*h;Bi(I,U)?(f=E,g=C,_=this.tmpP.x,m=this.tmpP.z):h=0}let p,M;if(h>1e-9){const E=(c*this.tmpT.x+l*this.tmpT.z)/u,C=Math.max(0,1-E*E);M=h,p=-M*E+Math.sqrt(Math.max(0,d*d-M*M*C)),p=Math.min(Math.max(0,p),d)}else M=0,p=d;const y=t.t;t.t+=t.dir*p/t.edgeLen;let v=!1;if(t.dir===1&&y<1&&t.t>=1||t.dir===-1&&y>0&&t.t<=0){const E=t.dir===1?t.edge.b:t.edge.a,C=$e.clamp(t.t,0,1);t.curve.getTangentAt(C,this.tmpT),t.dir===-1&&this.tmpT.negate();const I=this.tmpT.x,U=this.tmpT.z;this.arriveNode(t,E);const O=$e.clamp(t.t,0,1);if(t.curve.getTangentAt(O,this.tmpT),t.dir===-1&&this.tmpT.negate(),I*this.tmpT.x+U*this.tmpT.z>.819&&this.rng()<.15){t.curve.getPointAt(O,this.tmpP);const F=t.side*-1,N=this.tmpP.x+-this.tmpT.z*F*4,k=this.tmpP.z+this.tmpT.x*F*4;Bi(N,k)&&(t.side=F)}v=!0}if(!v&&M>0){const E=_+t.offX+f*M,C=m+t.offZ+g*M;Bi(E,C)&&(t.offX+=f*M,t.offZ+=g*M)}const T=$e.clamp(t.t,0,1);t.curve.getPointAt(T,this.tmpP),t.curve.getTangentAt(T,this.tmpT),t.dir===-1&&this.tmpT.negate();const A=this.tmpP.x+t.offX,w=this.tmpP.z+t.offZ,b=Ja(t.edge,T,A,w)-t.pos.y;if(t.pos.set(A,t.pos.y+$e.clamp(b,-4*e,4*e),w),t.group.position.copy(t.pos),this.orientToTangent(t.group,this.tmpT),t.group.position.y+=Math.abs(Math.sin(performance.now()*.008+A))*.05,t.pos.distanceToSquared(t.lastPos)<.01){if(t.stuckT+=e,t.stuckT>5){if(!Number.isFinite(t.t)||t.t<0||t.t>1){const E=Number.isFinite(t.t)?t.t<.5?t.edge.a:t.edge.b:t.dir===1?t.edge.b:t.edge.a;this.arriveNode(t,E)}t.stuckT=0}}else t.stuckT=0;e>0&&(t.vel.copy(t.pos).sub(t.lastPos).divideScalar(e),t.vel.lengthSq()>9&&t.vel.set(0,0,0)),t.lastPos.copy(t.pos)}updateParkPed(t,e){if(this.tmpV.subVectors(t.parkTarget,t.pos),this.tmpV.y=0,this.tmpV.length()<1)this.pickParkTarget(t,this.rng);else{this.tmpV.normalize();const s=t.pos.x+this.tmpV.x*t.speed*e,r=t.pos.z+this.tmpV.z*t.speed*e;Bi(s,r)?t.pos.set(s,Ee(s,r),r):this.pickParkTarget(t,this.rng),t.group.position.copy(t.pos),t.group.rotation.y=Math.atan2(this.tmpV.x,this.tmpV.z),t.group.position.y+=Math.abs(Math.sin(performance.now()*.008+s))*.05}}dispose(){this.group.traverse(t=>{if(t instanceof J){const e=t.geometry;Ns&&!Object.values(Ns).includes(e)&&e.dispose();const i=t.material;Us&&!Object.values(Us).includes(i)&&i.dispose()}else t instanceof el&&t.material.dispose()}),this.scene.remove(this.group),this.cars=[],this.peds=[]}};at(Nn,"YIELD_ZONE",9),at(Nn,"YIELD_STOP",7),at(Nn,"YIELD_SLOW",16);let dl=Nn;const i1=n=>-n,Bs={x:13,y:12,z:18},jo=2,td=(n,t)=>Math.max(-t,Math.min(t,n));function s1(n,t){const e=td(n,rc),i=td(t,oc);return{look:[e,jo,i],cam:[e+Bs.x,jo+Bs.y,i+Bs.z]}}function r1(n,t,e,i,s){if(e||s)return t;if(i<=0)return n;const r=1-Math.exp(-i*5);return[n[0]+(t[0]-n[0])*r,n[1]+(t[1]-n[1])*r]}function o1(n,t,e){if(e<=0)return n;const i=Math.atan2(Math.sin(t-n),Math.cos(t-n)),s=i*(1-Math.exp(-e*1.25)),r=i-s;return n+s+Math.sign(r)*Math.max(0,Math.abs(r)-1.35)}const Ce=n=>new es({color:n}),Xi=Ce(9262134),hn=Ce(5189671),Eo=Ce(16773071),ed=Ce(16112046),a1=Ce(1670008),To=Ce(13200951),c1=Ce(14657867),l1=Ce(4948573);function ke(n,t,e,i=Xi){const s=new J(new te(n,t,e),i);return s.castShadow=s.receiveShadow=!0,s}function Tn(n,t,e=Xi,i=10){const s=new J(new pe(n,n,t,i),e);return s.castShadow=s.receiveShadow=!0,s}function Yt(n,t,e,i,s){return t.position.set(e,i,s),n.add(t),t}class u1{constructor(){at(this,"group",new oe);at(this,"meg",new oe);at(this,"pip",new oe);at(this,"tail",new oe);at(this,"clock",0);at(this,"disposed",!1);at(this,"furniture",new Map);at(this,"facing",0);at(this,"lastHome",!1);this.group.name="Meg attic room",this.makeRoom(),this.makeBasics(),this.makeStations(),this.makeMeg(),this.makePumpkin(),this.makeFurniture(),this.group.visible=!1}update(t,e,i){if(this.disposed)return;const s=t,r=s.mode==="home";if(this.group.visible=r,!r){this.lastHome=!1;return}const o=Math.min(.05,Math.max(0,e||.016));this.clock+=o;const a=s.homePosition||{x:0,z:0},c=new D($e.clamp(a.x,-7.5,7.5),0,$e.clamp(a.z,-5.5,5.5));this.lastHome?this.meg.position.lerp(c,1-Math.exp(-o*14)):this.meg.position.copy(c),this.lastHome=!0;const l=s.homeFacing;typeof l=="number"?this.facing=l:c.distanceToSquared(this.meg.position)>.001&&(this.facing=Math.atan2(c.x-this.meg.position.x,c.z-this.meg.position.z)),this.meg.rotation.y=this.facing;const u=c.distanceTo(this.meg.position)>.035;this.meg.children.filter(f=>f.name==="limb").forEach((f,g)=>f.rotation.x=i?0:Math.sin(this.clock*11+g*Math.PI)*(u?.55:.08)),this.meg.position.y=i?0:u?Math.abs(Math.sin(this.clock*11))*.045:Math.sin(this.clock*2)*.018;const d=this.meg.position.clone().add(new D(-Math.sin(this.facing)*1.25,0,-Math.cos(this.facing)*1.25));d.x=$e.clamp(d.x,-7.3,7.3),d.z=$e.clamp(d.z,-5.3,5.3),this.pip.position.lerp(d,1-Math.exp(-o*4)),this.pip.lookAt(this.meg.position.x,0,this.meg.position.z);const h=this.meg.position.distanceToSquared(new D(4,0,3))<2.7;this.pip.position.y=!i&&h?Math.sin(this.clock*6)*.075:0,this.tail.rotation.z=i?.12:Math.sin(this.clock*(h?5:2))*.34,this.furniture.forEach((f,g)=>f.visible=s.profile.furniture.includes(g))}dispose(){if(this.disposed)return;this.disposed=!0;const t=new Set,e=new Set,i=new Set;this.group.traverse(s=>{const r=s;r.geometry&&t.add(r.geometry),(r.material?Array.isArray(r.material)?r.material:[r.material]:[]).forEach(a=>{e.add(a),Object.values(a).forEach(c=>{c instanceof je&&i.add(c)})})}),t.forEach(s=>s.dispose()),e.forEach(s=>s.dispose()),i.forEach(s=>s.dispose()),this.group.clear()}makeRoom(){const t=ke(18,.25,14,Xi);Yt(this.group,t,0,-.13,0);for(let s=-6;s<=6;s+=1){const r=ke(17.8,.012,.035,hn);Yt(this.group,r,0,.01,s+.5)}const e=ke(18,8,.22,ed);Yt(this.group,e,0,4,-7);const i=ke(.22,8,14,ed);Yt(this.group,i,4,4,0),i.position.x=-9;for(const[s,r,o,a]of[[-8.65,0,.34,14],[0,-6.65,18,.34],[0,-3.9,18,.25]])Yt(this.group,ke(o,.28,a,hn),s,7.55,r);for(const s of[-8.4,-4.4,0,4.4,8.4]){const r=ke(.32,7.6,.35,hn);r.rotation.z=s/34,Yt(this.group,r,s,3.8,-6.75)}this.makeWindow()}makeWindow(){const t=new oe;Yt(this.group,t,2.3,4.7,-6.78);const e=new J(new vn(3.2,2.45),new An({color:16764813}));e.position.z=.02,t.add(e);for(const[s,r,o,a]of[[0,0,3.45,.17],[0,0,.16,2.6],[-1.65,0,.16,2.6],[1.65,0,.16,2.6],[0,1.22,3.45,.16]])Yt(t,ke(o,a,.12,hn),s,r,.08);for(const s of[-2,2]){const r=new J(new pe(.45,.56,2.65,8),Ce(8559016));r.scale.z=.28,Yt(t,r,s,0,.22)}const i=ke(4.5,.18,.55,Xi);Yt(t,i,0,-1.38,.32)}makeBasics(){const t=new oe;Yt(this.group,t,5.8,0,4.65),Yt(t,ke(4.2,.35,2.6,hn),0,.55,0),Yt(t,ke(4,.32,2.35,Ce(10249076)),0,.9,0),Yt(t,ke(4.25,2.25,.22,hn),0,1.5,1.16),Yt(t,ke(1.55,.26,.8,Eo),-.9,1.2,-.55),[[-1.8,-1],[1.8,-1],[-1.8,1],[1.8,1]].forEach(([s,r])=>Yt(t,Tn(.12,.65,hn),s,.25,r));const e=new oe;Yt(this.group,e,-5,0,-3),Yt(e,ke(3.3,.22,1.55,Xi),0,1.75,0),[-1.35,1.35].forEach(s=>[-.58,.58].forEach(r=>Yt(e,Tn(.11,1.7,hn),s,.85,r))),Yt(e,ke(.9,.72,1.15,hn),-1.05,1.25,0),Yt(e,ke(.62,.12,.88,Ce(15982509)),.55,1.93,.03);const i=new oe;Yt(this.group,i,-4.2,0,-1.45),Yt(i,Tn(.48,.16,Ce(7314849)),0,1,0),Yt(i,Tn(.13,1,hn),0,.5,0)}makeStations(){const t=new oe;Yt(this.group,t,5,0,-3),Yt(t,ke(2.2,.16,.46,hn),0,2.55,0),[-.75,0,.75].forEach(s=>{const r=Tn(.06,2.35,Xi);r.rotation.z=-.16+s*.1,Yt(t,r,s,1.25,0),Yt(t,new J(new sn(.29,.52,7),To),s-.14,.28,0)});const e=new oe;Yt(this.group,e,-5,0,3),Yt(e,Tn(.48,1.15,hn),0,.58,0),Yt(e,ke(1.25,.14,.9,Ce(6065798)),0,1.2,0),e.rotation.y=-.25;const i=new J(new pe(1.15,1.3,.16,16),Ce(14262655));Yt(this.group,i,4,.08,3),ld.forEach(s=>this.group.add(this.label(s.id==="jobs"?"POST":s.id==="decor"?"HOME":s.id.toUpperCase(),s.x,3.3,s.z)))}makeMeg(){const t=this.meg;t.name="Meg",this.group.add(t),Yt(t,new J(new de(.34,12,10),Ce(16761758)),0,1.52,0);const e=new J(new de(.38,12,10,0,Math.PI*2,0,Math.PI*.55),Ce(9323307));Yt(t,e,0,1.7,.01);const i=new oe;Yt(t,i,0,1.94,0),Yt(i,new J(new pe(.48,.48,.12,12),Ce(4534349)),0,0,0);const s=new J(new sn(.3,.82,12),Ce(4534349));s.rotation.z=-.18,Yt(i,s,.06,.39,0),Yt(t,new J(new sn(.48,1.05,12),a1),0,.84,0);for(const[r,o]of[[-.22,.08],[.22,.08]]){const a=Tn(.09,.55,hn);a.name="limb",Yt(t,a,r,.3,o);const c=Tn(.075,.58,Ce(16761758));c.name="limb",c.rotation.z=r*1.8,Yt(t,c,r*1.5,1.06,0)}}makePumpkin(){const t=this.pip;t.name="Pumpkin",this.group.add(t),Yt(t,new J(new de(.43,12,9),Eo),0,.48,0),Yt(t,new J(new de(.34,12,9),Eo),0,.76,.28);for(const r of[-.2,.2]){const o=new J(new sn(.16,.36,4),To);Yt(t,o,r,1.12,.26);const a=new J(new de(.045,8,6),Ce(2893616));Yt(t,a,r*.72,.8,.59)}const e=ke(.18,.42,.08,To);e.rotation.z=Math.PI/2,Yt(t,e,0,.86,.58);const i=new oe;this.tail=i,Yt(t,i,0,.51,-.38);const s=new J(new Un(.34,.07,6,12,Math.PI*1.4),To);s.rotation.x=Math.PI/2,Yt(i,s,0,.36,-.22)}makeFurniture(){const t=(e,i,s,r)=>{const o=r();o.position.set(i,0,s),o.visible=!1,this.group.add(o),this.furniture.set(e,o)};t("rug",0,-.2,()=>{const e=new J(new pe(2.1,2.1,.05,20),Ce(7508365));return e.position.y=.035,e}),t("plant",-7,4.6,()=>{const e=new oe;Yt(e,Tn(.38,.7,Ce(13273941)),0,.35,0);for(let i=0;i<6;i++){const s=new J(new de(.35,8,6),l1);Yt(e,s,Math.sin(i)*.28,1+Math.abs(Math.cos(i))*.25,Math.cos(i)*.28)}return e}),t("shelf",-7.7,-2.2,()=>{const e=new oe;Yt(e,ke(.55,3.1,2.2,hn),0,1.55,0);for(let i=.6;i<3;i+=.75)Yt(e,ke(.7,.1,2.1,Xi),0,i,0);return e}),t("lamp",1.8,-4.8,()=>{const e=new oe;Yt(e,Tn(.1,2.2,c1),0,1.1,0);const i=new J(new sn(.52,.48,12,1,!0),Eo);return Yt(e,i,0,2.1,0),e}),t("cushion",1.4,3.5,()=>{const e=new J(new de(.6,12,7),Ce(13858182));return e.scale.y=.32,e.position.y=.18,e}),t("cat-tree",7,2.5,()=>{const e=new oe;return Yt(e,Tn(.17,2.5,Ce(13610617)),0,1.25,0),Yt(e,Tn(.72,.16,Ce(13605991)),0,2.45,0),e})}label(t,e,i,s){const r=document.createElement("canvas");r.width=256,r.height=92;const o=r.getContext("2d");o.fillStyle="#3f2b35",o.roundRect(4,4,248,84,18),o.fill(),o.strokeStyle="#f7d688",o.lineWidth=5,o.roundRect(4,4,248,84,18),o.stroke(),o.fillStyle="#fff3cf",o.font="bold 36px sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(t,128,48);const a=new el(new Fl({map:new ji(r),transparent:!0}));return a.position.set(e,i,s),a.scale.set(1.7,.62,1),a}}function h1(n,t,e){const i=n.mode==="flight"||n.mode==="tutorial",s=Math.hypot(n.player.velocity.x,n.player.velocity.y,n.player.velocity.z),r=i&&!n.paused&&!e;return{bob:r&&n.player.hover&&s<.3?Math.sin(t*1.5)*.035:0,speed:r?Math.min(1,Math.max(0,(s-5)/16.6)):0}}class d1{constructor(t){at(this,"element",document.createElement("div"));this.element.className="flight-effects",this.element.setAttribute("aria-hidden","true");for(let e=0;e<14;e++){const i=document.createElement("i"),s=e*Math.PI*2/14;i.style.left=`${50+Math.cos(s)*43}%`,i.style.top=`${50+Math.sin(s)*43}%`,i.style.setProperty("--angle",`${s}rad`),i.style.animationDelay=`${-e*.17}s`,this.element.append(i)}t.insertAdjacentElement("afterend",this.element)}update(t,e){this.element.hidden=t<=0,this.element.style.setProperty("--speed",t.toFixed(3)),this.element.classList.toggle("low-quality",e)}dispose(){this.element.remove()}}const f1=360,nd=420,p1=1140;function Tf(n){return Math.max(0,Math.min(1,n/f1))}function m1(n){return nd+Tf(n)*(p1-nd)}const Ao=[{t:0,zenith:[.45,.62,.86],horizon:[1,.72,.55],sun:[1,.82,.62],sunElevation:.1,sunAzimuth:Math.PI/2,fog:[.98,.8,.68],hemiSky:[.85,.72,.8],hemiGround:[.78,.55,.5],tint:[1.05,.95,.88],sunIntensity:2,duskFactor:.25},{t:.25,zenith:[.36,.6,.9],horizon:[.78,.88,.95],sun:[1,.94,.82],sunElevation:.65,sunAzimuth:Math.PI/2+.6,fog:[.78,.86,.92],hemiSky:[.82,.9,1],hemiGround:[.72,.58,.52],tint:[1,1,1],sunIntensity:2.5,duskFactor:0},{t:.5,zenith:[.3,.56,.92],horizon:[.72,.85,.95],sun:[1,.98,.92],sunElevation:1.15,sunAzimuth:Math.PI,fog:[.72,.84,.92],hemiSky:[.85,.92,1],hemiGround:[.7,.58,.52],tint:[1,1,1],sunIntensity:2.6,duskFactor:0},{t:.75,zenith:[.36,.58,.88],horizon:[.85,.82,.78],sun:[1,.9,.72],sunElevation:.55,sunAzimuth:Math.PI+.7,fog:[.85,.8,.75],hemiSky:[.85,.82,.92],hemiGround:[.75,.58,.5],tint:[1.03,.98,.92],sunIntensity:2.4,duskFactor:0},{t:.92,zenith:[.42,.52,.78],horizon:[1,.62,.38],sun:[1,.7,.42],sunElevation:.16,sunAzimuth:Math.PI*1.5-.25,fog:[1,.72,.52],hemiSky:[.9,.68,.62],hemiGround:[.7,.5,.45],tint:[1.08,.92,.8],sunIntensity:2.1,duskFactor:.45},{t:1,zenith:[.22,.28,.52],horizon:[.95,.48,.35],sun:[1,.55,.32],sunElevation:.02,sunAzimuth:Math.PI*1.5,fog:[.85,.55,.45],hemiSky:[.55,.45,.62],hemiGround:[.45,.35,.38],tint:[1.05,.85,.75],sunIntensity:1.6,duskFactor:1}];function Zi(n,t,e){return n+(t-n)*e}function ki(n,t,e){return[Zi(n[0],t[0],e),Zi(n[1],t[1],e),Zi(n[2],t[2],e)]}function Af(n){const t=Math.max(0,Math.min(1,n));let e=0;for(;e<Ao.length-2&&Ao[e+1].t<t;)e++;const i=Ao[e],s=Ao[e+1],r=(t-i.t)/(s.t-i.t);return{t,zenith:ki(i.zenith,s.zenith,r),horizon:ki(i.horizon,s.horizon,r),sun:ki(i.sun,s.sun,r),sunElevation:Zi(i.sunElevation,s.sunElevation,r),sunAzimuth:Zi(i.sunAzimuth,s.sunAzimuth,r),fog:ki(i.fog,s.fog,r),hemiSky:ki(i.hemiSky,s.hemiSky,r),hemiGround:ki(i.hemiGround,s.hemiGround,r),tint:ki(i.tint,s.tint,r),sunIntensity:Zi(i.sunIntensity,s.sunIntensity,r),duskFactor:Zi(i.duskFactor,s.duskFactor,r)}}function Rf(n,t){return[Math.sin(t)*Math.cos(n),Math.sin(n),Math.cos(t)*Math.cos(n)]}function g1(n){const t=n/60%12;return{minute:n%60/60*Math.PI*2,hour:t/12*Math.PI*2}}const x1=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
  }
`,_1=`
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
`;function ic([n,t,e]){return new ee(n,t,e)}class v1{constructor(t=900){at(this,"mesh");at(this,"mat");at(this,"clock",0);this.mat=new Sn({vertexShader:x1,fragmentShader:_1,uniforms:{uZenith:{value:new ee},uHorizon:{value:new ee},uSunColor:{value:new ee},uSunDir:{value:new D(0,1,0)},uDuskFactor:{value:0},uTime:{value:0}},side:on,depthWrite:!1,fog:!1}),this.mesh=new J(new de(t,32,16),this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-10}setElapsed(t,e){const i=Math.max(0,Math.min(1,t/360)),s=Af(i);this.clock+=e;const r=this.mat.uniforms;r.uZenith.value.copy(ic(s.zenith)),r.uHorizon.value.copy(ic(s.horizon)),r.uSunColor.value.copy(ic(s.sun));const[o,a,c]=Rf(s.sunElevation,s.sunAzimuth);r.uSunDir.value.set(o,a,c),r.uDuskFactor.value=s.duskFactor,r.uTime.value=this.clock}dispose(){this.mesh.geometry.dispose(),this.mat.dispose()}}const M1=[15907014,11063528,15915176,13154528];function id(n){const t=new J(new te(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z));return t.position.set((n.min.x+n.max.x)/2,(n.min.y+n.max.y)/2,(n.min.z+n.max.z)/2),t}class y1{constructor(t){at(this,"scene",new p0);at(this,"camera",new Mn(62,1,.5,600));at(this,"renderer");at(this,"effects");at(this,"hero",new oe);at(this,"dropParcel",new oe);at(this,"glowColumn",new oe);at(this,"glowMats",[]);at(this,"lastGlowStopId");at(this,"targetRing",new oe);at(this,"clouds",new oe);at(this,"birds",new oe);at(this,"boats",[]);at(this,"clock",0);at(this,"camPos",new D(0,27,145));at(this,"camLook",new D(0,18,90));at(this,"homeLook",new D(0,jo,0));at(this,"ray",new gg);at(this,"blockers",[]);at(this,"outlines",[]);at(this,"life",null);at(this,"beamGroup",null);at(this,"beamLight",null);at(this,"lighthouseLit",!0);at(this,"sun");at(this,"hemi");at(this,"skyDome",null);at(this,"clockHands",[]);at(this,"lampMat",null);at(this,"beamMat",null);at(this,"disposed",!1);at(this,"lastMode");at(this,"lastWidth",-1);at(this,"lastHeight",-1);at(this,"lastPixelRatio",-1);at(this,"followYaw",0);at(this,"world");at(this,"water",null);at(this,"room",new u1);at(this,"outdoorFog",new qo(12180704,.0035));at(this,"birdFlock",[]);this.renderer=new dy({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.effects=new d1(t),this.renderer.outputColorSpace=Qe,this.renderer.toneMapping=bl,this.renderer.toneMappingExposure=1.12,this.renderer.setClearColor(11459048),this.scene.fog=new qo(12180704,.0035),this.camera.position.copy(this.camPos);const e=new lg(14283263,13074296,2.35);this.hemi=e,this.scene.add(e),this.sun=new fg(16765344,2.5),this.sun.position.set(-80,115,48),this.scene.add(this.sun),this.skyDome=new v1,this.scene.add(this.skyDome.mesh),this.world=this.makeWorld(),this.scene.add(this.world,this.hero,this.dropParcel,this.glowColumn,this.targetRing,this.clouds,this.birds,this.room.group),this.makeHero(),this.makeDropParcel(),this.makeGlowColumn(),this.makeSkyLife(),this.resize()}resize(){this.lastWidth=-1}setSeed(t){var e;(e=this.life)==null||e.dispose(),this.life=new dl(this.world,t)}render(t,e,i){var b;if(this.disposed)return;const s=t.paused?0:Math.min(.05,Math.max(0,e));this.clock+=s,this.water&&!i.reducedMotion&&vy(this.water,this.clock,this.camera.position);const r=h1(t,this.clock,i.reducedMotion);this.effects.update(r.speed,i.lowQuality);const o=this.renderer.domElement,a=Math.max(1,o.clientWidth||o.width),c=Math.max(1,o.clientHeight||o.height),l=i.lowQuality?1e6:2e6,u=Math.min(devicePixelRatio||1,Math.sqrt(l/(a*c)));(a!==this.lastWidth||c!==this.lastHeight||u!==this.lastPixelRatio)&&(this.renderer.setPixelRatio(u),this.renderer.setSize(a,c,!1),this.camera.aspect=a/c,this.camera.updateProjectionMatrix(),this.lastWidth=a,this.lastHeight=c,this.lastPixelRatio=u),this.renderer.shadowMap.enabled=!i.lowQuality,this.outlines.forEach(E=>{E.visible=!i.lowQuality});const d=t.mode==="home";if([this.world,this.hero,this.dropParcel,this.glowColumn,this.targetRing,this.clouds,this.birds].forEach(E=>E.visible=!d),this.room.update(t,s,i.reducedMotion),d){this.scene.fog=null,this.renderer.setClearColor(14010030),this.camera.fov=48,this.camera.updateProjectionMatrix();const E=t.homePosition||{x:0,z:0},C=s1(E.x,E.z),I=r1([this.homeLook.x,this.homeLook.z],[C.look[0],C.look[2]],this.lastMode!=="home",s,i.reducedMotion);this.homeLook.set(I[0],jo,I[1]),this.camera.position.set(this.homeLook.x+Bs.x,this.homeLook.y+Bs.y,this.homeLook.z+Bs.z),this.camera.up.set(0,1,0),this.camera.lookAt(this.homeLook),this.lastMode=t.mode,this.renderer.render(this.scene,this.camera);return}this.camera.fov!==62&&(this.camera.fov=62,this.camera.updateProjectionMatrix()),this.scene.fog=this.outdoorFog,this.renderer.setClearColor(11459048);const h=t.player.position,f=new D(h.x,h.y,h.z),g=this.lastMode===void 0||this.lastMode!==t.mode;this.hero.position.copy(f),this.hero.rotation.order="YXZ",this.hero.rotation.y=i1(t.player.yaw),this.hero.rotation.x=t.player.pitch*.4,this.hero.rotation.z=0,this.hero.scale.setScalar(t.mode==="title"||t.mode==="summary"?.86:.28),this.hero.position.y+=r.bob,this.animateSky(i.reducedMotion,s),!d&&s>0&&((b=this.life)==null||b.update(s,f,t.player.speed,t.player.velocity.y,this.clock)),this.updateBeacon(this.destination(t),i.reducedMotion||t.paused?0:s),this.updateGlowColumn(t,i.reducedMotion),this.updateDropParcel(t,i.reducedMotion?0:s,i.reducedMotion),this.updateCamera(t,f,s,i.reducedMotion,g),this.lastMode=t.mode;const _=t.run?t.run.elapsed:0,m=Tf(_),p=Af(m),M=m1(_),y=g1(M);for(const E of this.clockHands)E.hour.rotation.z=-y.hour,E.minute.rotation.z=-y.minute;this.skyDome&&this.skyDome.setElapsed(_,s);const[v,T,A]=Rf(p.sunElevation,p.sunAzimuth);this.sun.position.set(v*160,Math.max(8,T*160),A*160),this.sun.color.setRGB(...p.sun),this.sun.intensity=p.sunIntensity,this.hemi.color.setRGB(...p.hemiSky),this.hemi.groundColor.setRGB(...p.hemiGround);const w=this.scene.fog;w&&w.color.setRGB(...p.fog),this.renderer.setClearColor(new ee(...p.horizon));const x=p.duskFactor;this.lampMat&&(this.lampMat.emissive.setRGB(1*x,.75*x,.4*x),this.lampMat.emissiveIntensity=1.6*x),this.beamLight&&(this.beamLight.intensity=3+x*5),this.beamMat&&(this.beamMat.opacity=.28+x*.25),this.renderer.render(this.scene,this.camera)}dispose(){this.effects.dispose(),this.disposed=!0,this.scene.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose();const i=e.material;(Array.isArray(i)?i:[i]).forEach(s=>s==null?void 0:s.dispose())}),this.renderer.dispose()}makeWorld(){const t=new oe,e=_y();this.water=e,t.add(e);const i=new vn(440,440,200,200);i.rotateX(-Math.PI/2);const s=i.attributes.position;for(let w=0;w<s.count;w++)s.setY(w,Ee(s.getX(w),s.getZ(w)));i.computeVertexNormals();const r=1024,o=document.createElement("canvas");o.width=r,o.height=r;const a=o.getContext("2d"),c=a.createImageData(r,r);c.data.set(lp(r)),a.putImageData(c,0,0);const l=new ji(o);l.colorSpace=Qe,l.anisotropy=4;const u=ct(16777215);u.map=l;const d=new J(i,u);t.add(d);const h=ct(16777215);h.vertexColors=!0,h.side=He;const f=ct(9072461);f.side=He;const g=new Map,_=w=>{const x=w.toFixed(1);let b=g.get(x);return b||(w>5?b=[[-Ds,12103840],[-xr,12103840],[-xr,11033418],[-gr,11033418],[-gr,4408138],[gr,4408138],[gr,11033418],[xr,11033418],[xr,12103840],[Ds,12103840]]:b=[[-w/2,4408138],[w/2,4408138]],g.set(x,b)),b},m=(w,x,b,E,C)=>{const I=new oe,U=24,O=b/2,L=_(b),F=L.length,N=[],k=[],V=[],q=[],W=[],ut=[],Nt=[],wt=new ee;for(let Et=0;Et<=U;Et++){const Ft=E+Et/U*(C-E),pt=x.getPointAt(Ft),ae=x.getTangentAt(Ft),Wt=-ae.z,it=ae.x,rt=Math.hypot(Wt,it)||1,st=Wt/rt,xt=it/rt,gt=ll(w,Ft);for(const[Zt,Kt]of L)N.push(pt.x+st*Zt,gt,pt.z+xt*Zt),k.push(0,1,0),wt.setHex(Kt),V.push(wt.r,wt.g,wt.b);if(Et<U)for(let Zt=0;Zt<F-1;Zt++){const Kt=Et*F+Zt,P=Kt+F;q.push(Kt,P,Kt+1,Kt+1,P,P+1)}const Xt=pt.x+st*O,ht=pt.z+xt*O,Ut=pt.x-st*O,Bt=pt.z-xt*O,z=[[Xt,ht,st,xt],[Ut,Bt,-st,-xt]];for(const[Zt,Kt,P,S]of z){const G=Ee(Zt,Kt),X=G<gt-.35?Math.max(G-.1,gt-4):gt;W.push(Zt,gt,Kt,Zt,X,Kt),ut.push(P,0,S,P,0,S)}if(Et<U){const Zt=Et*4;Nt.push(Zt,Zt+4,Zt+1,Zt+1,Zt+4,Zt+5),Nt.push(Zt+2,Zt+3,Zt+6,Zt+3,Zt+7,Zt+6)}}const Mt=new Me;Mt.setAttribute("position",new Qt(N,3)),Mt.setAttribute("normal",new Qt(k,3)),Mt.setAttribute("color",new Qt(V,3)),Mt.setIndex(q);const K=new J(Mt,h);K.receiveShadow=!0,I.add(K);const lt=new Me;lt.setAttribute("position",new Qt(W,3)),lt.setAttribute("normal",new Qt(ut,3)),lt.setIndex(Nt);const nt=new J(lt,f);return nt.receiveShadow=!0,I.add(nt),I},p=(w,x,b)=>{const E=new ee(4408138),C=[],I=[],U=[],O=[],L=[],F=[],N=(q,W,ut,Nt,wt,Mt,K,lt)=>{const nt=q.length/3,Et=[wt,Mt,K,lt];for(let Ft=0;Ft<4;Ft++)q.push(Et[Ft][0],Nt[Ft],Et[Ft][1]),W.push(0,1,0);ut.push(nt,nt+1,nt+2,nt,nt+2,nt+3)};for(const q of Yl()){const W=Ge(me(q.nodeId)),ut=Xh(q,W.x,W.z),Nt=[W.x,ut,W.z],wt=[0,1,0],Mt=[E.r,E.g,E.b],K=[];for(const ht of q.ring)Nt.push(ht.x,ht.h,ht.z),wt.push(0,1,0),Mt.push(E.r,E.g,E.b);for(let ht=0;ht<q.ring.length;ht++)K.push(0,1+ht,1+(ht+1)%q.ring.length);const lt=new Me;lt.setAttribute("position",new Qt(Nt,3)),lt.setAttribute("normal",new Qt(wt,3)),lt.setAttribute("color",new Qt(Mt,3)),lt.setIndex(K);const nt=new J(lt,x);nt.receiveShadow=!0,w.add(nt);const Et=[],Ft=[],pt=[],ae=q.ring.length,Wt=q.legs.map(ht=>({la:Math.atan2(ht.dz,ht.dx),ca:Math.atan2(ht.hw,ht.clip)})),it=(ht,Ut)=>{const Bt=(ht-Ut)%(Math.PI*2);return Math.abs((Bt+Math.PI*3)%(Math.PI*2)-Math.PI)};for(let ht=0;ht<ae;ht++){const Ut=q.ring[ht],Bt=q.ring[(ht+1)%ae],z=(Ut.x+Bt.x)/2-W.x,Zt=(Ut.z+Bt.z)/2-W.z,Kt=Math.atan2(Zt,z);if(Wt.some(yt=>it(Kt,yt.la)<=yt.ca+1e-6))continue;const P=Bt.x-Ut.x,S=Bt.z-Ut.z,G=Math.hypot(P,S)||1,X=S/G,Q=-P/G,dt=Math.min(Ee(Ut.x,Ut.z),Ee(Bt.x,Bt.z)),mt=Ut.h-.02,j=Bt.h-.02,tt=Math.min(mt,j),_t=dt<tt-.3?Math.max(dt-.1,tt-3):tt,Ot=Et.length/3;Et.push(Ut.x,mt,Ut.z,Ut.x,_t,Ut.z,Bt.x,j,Bt.z,Bt.x,_t,Bt.z),Ft.push(X,0,Q,X,0,Q,X,0,Q,X,0,Q),pt.push(Ot,Ot+2,Ot+1,Ot+1,Ot+2,Ot+3)}const rt=new Me;rt.setAttribute("position",new Qt(Et,3)),rt.setAttribute("normal",new Qt(Ft,3)),rt.setIndex(pt);const st=new J(rt,b);st.receiveShadow=!0,w.add(st);const{white:xt,walk:gt}=Fy(q),Xt=(ht,Ut)=>ht.map(([Bt,z])=>Xh(q,Bt,z)+Ut);for(const ht of xt)N(C,I,U,Xt(ht,.08),ht[0],ht[1],ht[2],ht[3]);for(const ht of gt)N(O,L,F,Xt(ht,.085),ht[0],ht[1],ht[2],ht[3])}const k=ct(16118246);if(k.side=He,k.depthWrite=!1,k.polygonOffset=!0,k.polygonOffsetFactor=-2,k.polygonOffsetUnits=-2,U.length){const q=new Me;q.setAttribute("position",new Qt(C,3)),q.setAttribute("normal",new Qt(I,3)),q.setIndex(U);const W=new J(q,k);W.receiveShadow=!1,W.renderOrder=1,w.add(W)}const V=ct(12103840);if(V.side=He,V.depthWrite=!1,V.polygonOffset=!0,V.polygonOffsetFactor=-2,V.polygonOffsetUnits=-2,F.length){const q=new Me;q.setAttribute("position",new Qt(O,3)),q.setAttribute("normal",new Qt(L,3)),q.setIndex(F);const W=new J(q,V);W.receiveShadow=!1,W.renderOrder=1,w.add(W)}};for(const w of Ye){if(w.kind==="bridge")continue;const x=ns(w),b=Wl(w),E=Qo(w),C=E.a?qh(w,"a",E.a.dist):0,I=E.b?qh(w,"b",E.b.dist):1;t.add(m(w,x,b,C,I))}const M=ct(16774872);M.side=He,M.depthWrite=!1,M.polygonOffset=!0,M.polygonOffsetFactor=-2,M.polygonOffsetUnits=-2;const y=[],v=[],T=[];for(const w of Ye){if(w.kind==="bridge")continue;const x=ns(w),b=x.getLength(),E=Qo(w),C=E.a?E.a.dist:0,I=E.b?E.b.dist:0;for(let U=C+1;U<b-I-3;U+=4){const O=x.getPointAt(U/b),L=x.getPointAt(Math.min(1,(U+2)/b)),F=new D().addVectors(O,L).multiplyScalar(.5),N=Math.atan2(L.x-O.x,L.z-O.z),k=Math.cos(N),V=Math.sin(N),q=.12,W=1,ut=ll(w,(U+1)/b)+.02,Nt=[[-q,-W],[q,-W],[q,W],[-q,W]],wt=y.length/3;for(const[Mt,K]of Nt){const lt=F.x+Mt*k+K*V,nt=F.z+(-Mt*V+K*k);y.push(lt,ut,nt),v.push(0,1,0)}T.push(wt,wt+1,wt+2,wt,wt+2,wt+3)}}if(T.length>0){const w=new Me;w.setAttribute("position",new Qt(y,3)),w.setAttribute("normal",new Qt(v,3)),w.setIndex(T);const x=new J(w,M);x.renderOrder=1,t.add(x)}p(t,h,f),Hy(t);const A=ct(10117447);return fu.forEach(([w,x])=>{const b=new J(new te(Jf,.7,Qf),A);b.position.set(w,.8,x),t.add(b)}),this.makeBuildings(t),this.makeGreenery(t),this.makeLighthouse(t),this.makeClockTower(t),this.makeObservatoryDome(t),this.makeBakeryDormer(t),this.makeMansionTerraces(t),this.makeBoats(t),this.makeLaundryLines(t),this.makeDockDressing(t),this.makeStreetLamps(t),this.makePark(t),t}makePark(t){const[e,i,s,r]=ge,o=(e+s)/2,a=(i+r)/2,c=Ee(o,a),l=new J(new vn(s-e,r-i),ct(8367708));l.rotation.x=-Math.PI/2,l.position.set(o,c+.1,a),t.add(l);const u=new ze,d=new _n(new pe(.35,.55,4,7),ct(7621174),tc.length),h=new _n(new br(2.6,1),ct(5085035),tc.length);tc.forEach((v,T)=>{const A=Ee(v.x,v.z);u.rotation.set(0,T*2.39996,0),u.scale.setScalar(v.s),u.position.set(v.x,A+2*v.s,v.z),u.updateMatrix(),d.setMatrixAt(T,u.matrix),u.position.set(v.x,A+5.5*v.s,v.z),u.updateMatrix(),h.setMatrixAt(T,u.matrix)}),d.instanceMatrix.needsUpdate=!0,h.instanceMatrix.needsUpdate=!0,t.add(d,h);const f=ct(15260864);for(const v of Gy){const T=new J(new te(v.x1-v.x0,.2,v.z1-v.z0),f);T.position.set((v.x0+v.x1)/2,c+.15,(v.z0+v.z1)/2),t.add(T)}const g=Vy,_=new es({color:13625572,transparent:!0,opacity:.5}),m=new J(new te(g.w,g.h,g.d),_);m.position.set(g.x,c+g.h/2,g.z),t.add(m);const p=g.d/2,M=new J(new de(p,16,10,0,Math.PI*2,0,Math.PI/2),_);M.position.set(g.x,c+g.h,g.z),t.add(M);const y=ct(8030858);for(let v=0;v<6;v++){const T=new J(new Un(p,.15,6,12,Math.PI),y);T.position.set(g.x,c+g.h,g.z),T.rotation.y=v/6*Math.PI,t.add(T)}}makeLaundryLines(t){const e=ct(4865845),i=[ct(16747434),ct(8370408),ct(16777215),ct(16767306),ct(10147455)],s=[[-25,9,-50,-20,9,-32],[5,11,-50,15,11,-45],[-20,8,-22,15,8,-28]],r=fn(42);s.forEach(([o,a,c,l,u,d])=>{const h=new D(o,a,c),f=new D(l,u,d),g=h.distanceTo(f),_=12;let m=h.clone();for(let M=1;M<=_;M++){const y=M/_,v=h.clone().lerp(f,y);v.y-=Math.sin(y*Math.PI)*.8;const T=m.distanceTo(v),A=new J(new pe(.03,.03,T,4),e);A.position.copy(m).lerp(v,.5),A.lookAt(v),A.rotateX(Math.PI/2),t.add(A),m=v}const p=Math.floor(g/3);for(let M=0;M<p;M++){const y=(M+.7)/(p+.4),v=h.clone().lerp(f,y);v.y-=Math.sin(y*Math.PI)*.8;const T=.9+r()*.5,A=1.1+r()*.5,w=new J(new vn(T,A),i[Math.floor(r()*i.length)]);w.position.set(v.x,v.y-A/2,v.z),w.rotation.y=Math.atan2(f.x-h.x,f.z-h.z)+Math.PI/2,w.material.side=He,t.add(w)}})}makeDockDressing(t){const e=ct(11040318),i=ct(8016432),s=ct(13218953),r=fu,o=fn(7);r.forEach(([a,c])=>{const l=2+Math.floor(o()*3);for(let d=0;d<l;d++){const h=1.1+o()*.5,f=new J(new te(h,h,h),e);f.position.set(a-10+o()*20,1.15+h/2+(d===2?1.4:0),c-3+o()*6),f.rotation.y=o()*.6,f.castShadow=!0,t.add(f)}for(let d=0;d<2;d++){const h=new J(new pe(.65,.65,1.5,10),i);h.position.set(a-8+o()*16,1.9,c-2.5+o()*5),h.castShadow=!0,t.add(h)}const u=new J(new Un(.55,.18,8,16),s);u.position.set(a-6+o()*12,1.25,c-2+o()*4),u.rotation.x=Math.PI/2,t.add(u)})}makeStreetLamps(t){const e=ct(3816002),i=ct(16767370);this.lampMat=i,[[-70,30],[-62,42],[-78,48],[-92,12],[-92,20],[-47,24],[-47,32],[-10,-40],[10,-40],[-10,-55],[10,-55]].forEach(([r,o])=>{const c=new J(new pe(.12,.16,4.2,8),e);c.position.set(r,0+2.1,o),c.castShadow=!0,t.add(c);const l=new J(new sn(.45,.35,8),e);l.position.set(r,0+4.55,o),t.add(l);const u=new J(new de(.32,10,8),i);u.position.set(r,0+4.2,o),t.add(u)})}makeBoats(t){const e=ct(9132604),i=ct(5996454),s=ct(7031343),r=ct(16117985),o=new il;o.moveTo(0,4.2),o.quadraticCurveTo(1.7,2.5,1.6,0),o.quadraticCurveTo(1.5,-2.5,1,-3.4),o.quadraticCurveTo(0,-3.8,-1,-3.4),o.quadraticCurveTo(-1.5,-2.5,-1.6,0),o.quadraticCurveTo(-1.7,2.5,0,4.2);const a=new Ko(o,{depth:1.1,bevelEnabled:!1});a.rotateX(-Math.PI/2);const c=new il;c.moveTo(0,4.5),c.quadraticCurveTo(1.95,2.6,1.85,0),c.quadraticCurveTo(1.75,-2.6,1.15,-3.65),c.quadraticCurveTo(0,-4.1,-1.15,-3.65),c.quadraticCurveTo(-1.75,-2.6,-1.85,0),c.quadraticCurveTo(-1.95,2.6,0,4.5);const l=new nl;l.moveTo(0,3.9),l.quadraticCurveTo(1.45,2.4,1.35,0),l.quadraticCurveTo(1.25,-2.4,.85,-3.15),l.quadraticCurveTo(0,-3.5,-.85,-3.15),l.quadraticCurveTo(-1.25,-2.4,-1.35,0),l.quadraticCurveTo(-1.45,2.4,0,3.9),c.holes.push(l);const u=new Ko(c,{depth:.28,bevelEnabled:!1});u.rotateX(-Math.PI/2);const d=[.08,-.06,.1,-.08,.06,-.1];jf.map(([f,g],_)=>[f,g,d[_]]).forEach(([f,g,_],m)=>{const p=new oe,M=m%2?i:e,y=new J(a,M);y.position.y=1.1,p.add(y);const v=new J(u,s);v.position.y=1.1,p.add(v);const T=new J(new pe(.12,.16,5.5,6),s);T.position.y=3.8,p.add(T);const A=new J(new te(.3,3.6,1.7),r);A.position.set(0,3.3,-1.2),p.add(A),p.position.set(f,.1,g),p.rotation.y=_,p.userData.phase=m*1.3,p.userData.baseY=.1,t.add(p),this.boats.push(p)})}makeBuildings(t){const e=bf(),i=ct(16768938),s=ct(3501961),r=ct(16767370),o=ct(7358008),a=ct(5085035),c=ct(16747434),l=(_,m,p,M,y,v,T,A,w,x,b,E)=>{const C=Math.min(4.2,m*.28),I=new J(new te(_,m-C,p),ct(b));I.position.set(y,M+(m-C)*.5,v),I.castShadow=!0,I.receiveShadow=!0,t.add(I);const U=_*.5,O=p*.5,L=m*.5-C,F=new D(y,M+m*.5,v),N=new Me;N.setAttribute("position",new Qt([-U,L,-O,U,L,-O,0,m*.5,0,U,L,-O,U,L,O,0,m*.5,0,U,L,O,-U,L,O,0,m*.5,0,-U,L,O,-U,L,-O,0,m*.5,0],3)),N.setIndex([0,2,1,3,5,4,6,8,7,9,11,10]),N.computeVertexNormals();const k=new J(N,ct(E));k.position.copy(F),k.castShadow=!0,t.add(k),Xy(e,Yy({sx:_,sy:m,sz:p,minY:M,cx:y,cz:v,district:T,seedBase:A,colorIdx:w,bayWindow:x}))};un.forEach((_,m)=>{const p=_.max.x-_.min.x,M=_.max.y-_.min.y,y=_.max.z-_.min.z,v=new D((_.min.x+_.max.x)/2,(_.min.y+_.max.y)/2,(_.min.z+_.max.z)/2),T=id(_);if(this.blockers.push(T),m===pu||m===mu||m===gu)return;const A=_.district&&Wr[_.district]||Wr["old-town"];l(p,M,y,_.min.y,v.x,v.z,_.district??"old-town",m,m,!1,A.bodies[m%A.bodies.length],A.roofs[m%A.roofs.length]),_.district==="bungalow-lanes"&&this.makePicketFence(t,_,m),_.district==="mansion-hill"&&this.makeWalledGarden(t,_,m)});const u=Bo(),d=pd(u),h=ct(9076594),f=ct(12101770),g=Ye.filter(_=>_.kind!=="bridge").map(_=>{const m=Ge(me(_.a)),p=Ge(me(_.b));return{x0:m.x,z0:m.z,x1:p.x,z1:p.z}});u.forEach((_,m)=>{const p=zo(_.x,_.z,_.w,_.d),M=p?p.maxH:Ee(_.x+_.w/2,_.z+_.d/2),y=p?p.minH:M,v=M,T=Wr[_.district]||Wr["old-town"],A=_.palette===0?T.bodies[m%T.bodies.length]:M1[_.palette-1];if(M-y>.3){const I=new J(new te(_.w,M-y,_.d),h);I.position.set(_.x+_.w/2,y+(M-y)/2,_.z+_.d/2),I.castShadow=!0,I.receiveShadow=!0,t.add(I)}l(_.w,_.h,_.d,v,_.x+_.w/2,_.z+_.d/2,_.district,Wy+m,m,_.bayWindow,A,T.roofs[m%T.roofs.length]),this.blockers.push(id(d[m]));const w=_.x+_.w/2,x=_.z+_.d/2;let b=0,E=0,C=1/0;for(const I of g){const U=I.x1-I.x0,O=I.z1-I.z0,L=U*U+O*O;let F=L>0?((w-I.x0)*U+(x-I.z0)*O)/L:0;F=Math.max(0,Math.min(1,F));const N=I.x0+F*U,k=I.z0+F*O,V=Math.hypot(w-N,x-k);V<C&&(C=V,b=N,E=k)}if(C<1/0&&C>.5){const I=b-w,U=E-x,O=Math.hypot(I,U),L=I/O,F=U/O,N=(_.w*Math.abs(L)+_.d*Math.abs(F))/2,k=w+L*N,V=x+F*N,q=b-L*2.8,W=E-F*2.8,ut=Math.hypot(q-k,W-V);if(ut>1.5){const Nt=(k+q)/2,wt=(V+W)/2,Mt=(Ee(k,V)+Ee(q,W))/2+.1,K=new J(new te(3,.18,ut),f);K.position.set(Nt,Mt,wt),K.rotation.y=Math.atan2(q-k,W-V),K.receiveShadow=!0,t.add(K)}}}),this.buildFacadeInstances(t,e,{trimMat:i,glassMat:s,litMat:r,doorMat:o,leafMat:a,petalMat:c})}buildFacadeInstances(t,e,i){const s=new vn(1,1),r=new te(1,1,1),o=new de(1,6,5),a=new ze,c=(h,f)=>{f.forEach((g,_)=>{a.position.set(g.x,g.y,g.z),a.rotation.set(g.rotX,g.rotY,0),a.scale.set(g.sx,g.sy,g.sz),a.updateMatrix(),h.setMatrixAt(_,a.matrix)}),h.instanceMatrix.needsUpdate=!0,h.frustumCulled=!1,t.add(h)};if(e.winLit.length){const h=new _n(s,i.litMat,e.winLit.length);c(h,e.winLit)}if(e.winUnlit.length){const h=new _n(s,i.glassMat,e.winUnlit.length);c(h,e.winUnlit)}if(e.doors.length){const h=new _n(s,i.doorMat,e.doors.length);c(h,e.doors)}if(e.sills.length){const h=new _n(r,i.trimMat,e.sills.length);c(h,e.sills)}if(e.bays.length){const h=new _n(r,i.trimMat,e.bays.length);c(h,e.bays)}if(e.flowerBoxes.length){const h=new _n(r,i.doorMat,e.flowerBoxes.length);c(h,e.flowerBoxes)}if(e.petals.length){const h=new _n(o,i.petalMat,e.petals.length);c(h,e.petals)}if(e.leaves.length){const h=new _n(o,i.leafMat,e.leaves.length);c(h,e.leaves)}const l=new vn(1,1,1,1),u=l.attributes.position;for(let h=0;h<u.count;h++)u.getY(h)<0&&u.setZ(h,-.7);l.computeVertexNormals();const d=[["#e86a6a","#f5f0e1"],["#5b7fa6","#f5f0e1"],["#6aa86a","#f5f0e1"]];e.awnings.forEach((h,f)=>{if(!h.length)return;const[g,_]=d[f%d.length],m=document.createElement("canvas");m.width=128,m.height=16;const p=m.getContext("2d");for(let v=0;v<8;v++)p.fillStyle=v%2?g:_,p.fillRect(v*16,0,16,16);const M=new ji(m);M.colorSpace=Qe;const y=new _n(l,new es({map:M,side:He}),h.length);c(y,h)})}makePicketFence(t,e,i){const s=(e.min.x+e.max.x)/2,r=(e.min.z+e.max.z)/2,o=e.max.x-e.min.x,a=e.max.z-e.min.z,c=e.min.y,l=ct(16117985),u=ct(7031343),d=[ct(16747434),ct(16767306),ct(16777215),ct(15231594)],h=4,f=s-o/2-h,g=s+o/2+h,_=r+a/2+h,m=[[f,_,s-1.2,_],[s+1.2,_,g,_],[f,r-a/2,f,_],[g,r-a/2,g,_]],p=[],M=new ze;m.forEach(([x,b,E,C])=>{const I=Math.hypot(E-x,C-b),U=Math.max(2,Math.floor(I/.38)),O=Math.atan2(E-x,C-b);for(let k=0;k<=U;k++){const V=k/U;M.position.set(x+(E-x)*V,c+.55,b+(C-b)*V),M.rotation.set(0,O,0),M.updateMatrix(),p.push(M.matrix.clone())}const L=I,F=new J(new te(.08,.12,L),l);F.position.set((x+E)/2,c+.75,(b+C)/2),F.rotation.y=O,t.add(F);const N=F.clone();N.position.y=c+.35,t.add(N)});const y=new te(.14,1.1,.07),v=new _n(y,l,p.length);p.forEach((x,b)=>v.setMatrixAt(b,x)),v.instanceMatrix.needsUpdate=!0,t.add(v);const T=new sn(.1,.18,4),A=new _n(T,l,p.length);p.forEach((x,b)=>{const E=new D().setFromMatrixPosition(x);M.position.set(E.x,E.y+.64,E.z),M.rotation.set(0,Math.PI/4,0),M.updateMatrix(),A.setMatrixAt(b,M.matrix)}),A.instanceMatrix.needsUpdate=!0,t.add(A);const w=fn(i*77+5);[-1,1].forEach(x=>{const b=s+x*3.2,E=r+a/2+2.2,C=new J(new te(3.4,.35,1.8),u);C.position.set(b,c+.18,E),t.add(C);for(let I=0;I<7;I++){const U=new J(new de(.22,7,6),d[Math.floor(w()*d.length)]);U.position.set(b+(w()-.5)*2.8,c+.55,E+(w()-.5)*1.2),t.add(U);const O=new J(new de(.18,6,5),ct(5085035));O.position.set(b+(w()-.5)*2.8,c+.42,E+(w()-.5)*1.2),t.add(O)}})}makeWalledGarden(t,e,i){const s=qi.find(F=>e.min.x>=F[0]-1&&e.max.x<=F[2]+1&&e.min.z>=F[1]-1&&e.max.z<=F[3]+1);if(!s)return;const[r,o,a,c]=s,l=e.min.y,u=ct(12103840),d=ct(14209216),h=ct(4033119),f=ct(7031343),g=[ct(16747434),ct(16767306),ct(16777215)],_=qi.some(F=>F!==s&&Math.abs(F[2]-r)<.01),m=qi.some(F=>F!==s&&Math.abs(F[0]-a)<.01),p=[[(r+a)/2,o,a-r,.5]],M=[[(r+a)/2,o+1.5,a-r-3,.8]],y=e.max.z-o,v=(o+e.max.z)/2;_||(p.push([r,v,.5,y]),M.push([r+1.5,v,.8,y-3])),m?M.push([a,v,.8,y-2]):(p.push([a,v,.5,y]),M.push([a-1.5,v,.8,y-3]));const T=[],A=o+3,w=e.max.z-2;if(w-A>=5){const F=[];!_&&e.min.x-r>=5&&F.push([r+2.5,e.min.x-2.5]),!m&&a-e.max.x>=5&&F.push([e.max.x+2.5,a-2.5]);for(const[N,k]of F){const V=(N+k)/2,q=Math.max(1,Math.floor((w-A)/8));for(let W=0;W<q;W++){const ut=A+(W+.5)*((w-A)/q);T.push([V,ut])}}}const x=.9;p.forEach(([F,N,k,V])=>{const q=new J(new te(k,x,V),u);q.position.set(F,l+x/2,N),q.castShadow=!0,t.add(q);const W=new J(new te(k+.15,.12,V+.15),d);W.position.set(F,l+x+.06,N),t.add(W)});const b=1;M.forEach(([F,N,k,V])=>{const q=new J(new te(k,b,V),h);q.position.set(F,l+b/2,N),q.castShadow=!0,t.add(q)});const E=fn(i*131+11);T.forEach(([F,N])=>{const k=new J(new te(3.2,.4,2.4),f);k.position.set(F,l+.2,N),t.add(k);for(let V=0;V<8;V++){const q=new J(new de(.24,7,6),g[Math.floor(E()*g.length)]);q.position.set(F+(E()-.5)*2.6,l+.6,N+(E()-.5)*1.8),t.add(q)}});const C=[],I=o+5,U=e.min.z-4;if(U-I>6){const F=Math.max(2,Math.floor((a-r-10)/11));for(let N=0;N<F;N++){const k=r+7+(N+.5)*((a-r-14)/F)+(E()-.5)*3,V=(I+U)/2+(E()-.5)*2;C.push([k,V])}}!_&&e.min.x-r>9&&C.push([(r+e.min.x)/2,(I+U)/2]),!m&&a-e.max.x>9&&C.push([(e.max.x+a)/2,(I+U)/2]);const O=ct(7621174),L=ct(5085035);for(const[F,N]of C){const k=new J(new pe(.4,.65,3.2,7),O);k.position.set(F,l+1.6,N),k.castShadow=!0,t.add(k);const V=new J(new br(3,1),L);V.position.set(F,l+5,N),V.castShadow=!0,t.add(V)}}makeGreenery(t){const e=ct(7621174),i=ct(5085035),s=ct(4033119),r=ct(16747434),o=fn(1337),a=Bo(),c=Ye.map(f=>{const g=me(f.a),_=me(f.b);return{x0:g.x,z0:g.z,x1:_.x,z1:_.z}}),l=(f,g)=>{for(const _ of c){const m=_.x1-_.x0,p=_.z1-_.z0,M=m*m+p*p;let y=M>0?((f-_.x0)*m+(g-_.z0)*p)/M:0;if(y=Math.max(0,Math.min(1,y)),Math.hypot(f-(_.x0+y*m),g-(_.z0+y*p))<4.5)return!1}for(const _ of a)if(f>_.x-2&&f<_.x+_.w+2&&g>_.z-2&&g<_.z+_.d+2)return!1;for(const _ of un)if(f>_.min.x-2&&f<_.max.x+2&&g>_.min.z-2&&g<_.max.z+2)return!1;return!qi.some(_=>f>_[0]&&f<_[2]&&g>_[1]&&g<_[3])},u=(f,g)=>{const _=new oe,m=3+o()*2.5,p=new J(new pe(.35,.55,m,7),e);p.position.y=m/2,_.add(p);const M=o()<.5?i:s,y=new J(new br(2.2+o()*1.2,1),M);if(y.position.y=m+1.5,_.add(y),_.position.set(f,Ee(f,g),g),_.rotation.y=o()*Math.PI*2,t.add(_),o()<.3){const v=new J(new de(.28,7,6),r);v.position.set(f+.8,Ee(f,g)+.5,g+.6),t.add(v)}};let d=0,h=0;for(;d<260&&h<6e3;){h++;const f=(o()-.5)*400,g=60+o()*160;vu(f,g)&&l(f,g)&&(Pe.some(_=>Math.hypot(f-_.position.x,g-_.position.z)<24)||Math.hypot(f,g)<145||(u(f,g),d++))}for(d=0,h=0;d<60&&h<3e3;){h++;const f=(o()-.5)*400,g=(o()-.5)*400;vu(f,g)&&l(f,g)&&(Pe.some(_=>Math.hypot(f-_.position.x,g-_.position.z)<24)||f>ge[0]&&f<ge[2]&&g>ge[1]&&g<ge[3]||Math.hypot(f,g)<100&&o()<.7||g>60&&Math.hypot(f,g)>=145||(u(f,g),d++))}}makeLighthouse(t){const e=un[3],i=un[pu],s=(e.min.x+e.max.x)/2,r=(e.min.z+e.max.z)/2,o=new J(new pe(20,24,9,18),ct(9076594));o.position.set(s,e.min.y+2.5,r),o.castShadow=!0,t.add(o);const a=(i.min.x+i.max.x)/2,c=(i.min.z+i.max.z)/2,l=i.min.y,u=new J(new pe(3.6,5.2,26,16),ct(16773332));u.position.set(a,16+l,c),u.castShadow=!0,t.add(u);const d=p=>5.2-(p-3)*(1.6/26);for(const p of[8,14,20,26]){const M=new J(new pe(d(p+1.1)+.15,d(p-1.1)+.15,2.2,16),ct(13786193));M.position.set(a,p+l,c),t.add(M)}const h=new J(new pe(4.6,4.6,1.2,16),ct(4089472));h.position.set(a,29.6+l,c),t.add(h);const f=new J(new pe(2.6,2.6,3.4,12),new An({color:16771501}));f.position.set(a,31.8+l,c),t.add(f);const g=new J(new sn(3.4,2.6,12),ct(13194062));g.position.set(a,34.8+l,c),t.add(g);const _=new oe;_.position.set(a,31.8+l,c);const m=new An({color:16768910,transparent:!0,opacity:.28,depthWrite:!1,side:He});this.beamMat=m,[0,Math.PI].forEach(p=>{const M=new J(new sn(3.2,26,12,1,!0),m);M.rotation.z=Math.PI/2,M.rotation.y=p,M.position.set(Math.cos(p)*13,0,-Math.sin(p)*13),_.add(M)}),t.add(_),this.beamGroup=_,this.beamLight=new hg(16768146,60,90),this.beamLight.position.set(a,32+l,c),t.add(this.beamLight),this.setLighthouseLit(!0)}setLighthouseLit(t){this.lighthouseLit=t,this.beamGroup&&(this.beamGroup.visible=t),this.beamLight&&(this.beamLight.intensity=t?60:0)}makeClockTower(t){const e=un[mu],i=(e.min.x+e.max.x)/2,s=(e.min.z+e.max.z)/2,r=e.min.y,o=ct(13935988),a=ct(11951167),c=ct(16768938),l=new J(new te(8,20,8),o);l.position.set(i,r+10,s),l.castShadow=!0,t.add(l);const u=new J(new te(8.6,3,8.6),o);u.position.set(i,r+21.5,s),u.castShadow=!0,t.add(u);const d=ct(2763317),h=[[0,-4.32,Math.PI],[0,4.32,0],[-4.32,0,-Math.PI/2],[4.32,0,Math.PI/2]];for(const[m,p,M]of h){const y=new oe;y.position.set(i+m,r+17,s+p),y.rotation.y=M,t.add(y);const v=new J(new pe(2.2,2.2,.3,24),new An({color:16314584}));v.rotation.x=Math.PI/2,y.add(v);const T=new An({color:2763317});for(let U=0;U<12;U++){const O=new J(new te(.09,U%3===0?.34:.2,.02),T),L=U/12*Math.PI*2;O.position.set(Math.sin(L)*1.9,Math.cos(L)*1.9,.16),O.rotation.z=-L,y.add(O)}const A=new An({color:2763317}),w=new oe;w.position.set(0,0,.3);const x=new J(new te(.18,1.1,.06),A);x.position.y=.45,w.add(x),y.add(w);const b=new oe;b.position.set(0,0,.36);const E=new J(new te(.13,1.65,.06),A);E.position.y=.62,b.add(E),y.add(b);const C=new J(new pe(.14,.14,.1,12),A);C.rotation.x=Math.PI/2,C.position.z=.38,y.add(C),this.clockHands.push({hour:w,minute:b});const I=new J(new vn(2.4,2),d);I.position.set(i+m*1.01,r+21.5,s+p*1.01),I.rotation.y=M,t.add(I)}const f=new sn(6.2,5,4),g=new J(f,a);g.position.set(i,r+25.5,s),g.rotation.y=Math.PI/4,g.castShadow=!0,t.add(g);const _=new J(new de(.5,10,8),c);_.position.set(i,r+28.2,s),t.add(_);for(const[m,p]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const M=new J(new te(.7,20,.7),c);M.position.set(i+m*3.8,r+10,s+p*3.8),t.add(M)}}makeObservatoryDome(t){const e=un[gu],i=(e.min.x+e.max.x)/2,s=(e.min.z+e.max.z)/2,r=e.min.y,o=ct(9079442),a=ct(6064762),c=new J(new pe(4.5,4.8,3,18),o);c.position.set(i,r+1.5,s),c.castShadow=!0,t.add(c);const l=new J(new de(4.5,20,12,0,Math.PI*2,0,Math.PI/2),a);l.position.set(i,r+3,s),l.castShadow=!0,t.add(l);const u=new J(new te(1.2,3.5,.4),ct(1710629));u.position.set(i,r+4.85,s+4.1),u.rotation.x=-.25,t.add(u);const d=new J(new de(.4,8,6),ct(9071162));d.position.set(i,r+7.7,s),t.add(d)}makeBakeryDormer(t){const e=un[0],i=(e.min.x+e.max.x)/2,s=(e.min.z+e.max.z)/2,r=i,o=s-8,a=e.max.x-e.min.x,c=e.max.y-e.min.y,l=e.max.z-e.min.z,u=Math.min(4.2,c*.28),d=Math.max(0,Math.min(1-Math.abs(r-i)/(a/2),1-Math.abs(o-s)/(l/2))),h=e.max.y-u+d*u,f=ct(16049320),g=ct(9132602),_=new J(new te(4.5,2.6,3),f);_.position.set(r,h+1.3,o),_.castShadow=!0,t.add(_);const m=new J(new vn(2.6,1.6),new An({color:16767114}));m.position.set(r,h+1.3,o+1.52),t.add(m);const p=new J(new te(3,2,.15),g);p.position.set(r,h+1.3,o+1.45),t.add(p),m.position.z=o+1.54;const M=new Me;M.setAttribute("position",new Qt([-2.45,0,-1.7,2.45,0,-1.7,0,.2,0,2.45,0,-1.7,2.45,0,1.7,0,.2,0,2.45,0,1.7,-2.45,0,1.7,0,.2,0,-2.45,0,1.7,-2.45,0,-1.7,0,.2,0],3)),M.setIndex([0,2,1,3,5,4,6,8,7,9,11,10]),M.computeVertexNormals();const y=new J(M,g);y.position.set(r,h+2.6,o),y.castShadow=!0,t.add(y)}makeMansionTerraces(t){const e=ct(10132114),i=ct(6989930),s=(r,o,a,c,l,u)=>{const d=c-a,h=new J(new te(o-r,d,u-l),e);h.position.set((r+o)/2,a+d/2,(l+u)/2),h.castShadow=!0,h.receiveShadow=!0,t.add(h);const f=new J(new te(o-r-.6,.25,u-l-.6),i);f.position.set((r+o)/2,c+.12,(l+u)/2),f.receiveShadow=!0,t.add(f)};for(const r of[17,18]){const o=un[r],a=o.min.y;s(o.min.x,o.max.x,a,a+1.5,o.max.z,o.max.z+4.5),s(o.min.x+4,o.max.x-4,a,a+3,o.max.z+2.25,o.max.z+4.5)}}makeHero(){const t=new An({color:3746621,side:on}),e=(c,l,u,d)=>{const h=new J(c,l);h.position.set(u.x,u.y,u.z),d&&h.scale.set(d.x,d.y,d.z),this.hero.add(h);const f=new J(c,t);return f.scale.setScalar(1.045),h.add(f),this.outlines.push(f),h},i=e(new pe(.16,.21,8.6,10),ct(8736825),{x:0,y:.15,z:.35});i.rotation.x=Math.PI/2;const s=e(new Un(.62,.105,7,14,Math.PI*1.25),ct(7946799),{x:0,y:.58,z:-4.05});s.rotation.z=Math.PI*.18,[3,3.3].forEach(c=>e(new Un(.34,.1,6,12),ct(5583662),{x:0,y:.15,z:c}));for(let c=0;c<21;c++){const l=(c-10)/10,u=new jd(new D(l*.25,.15,3),new D(l*1.5,-.05+Math.cos(c)*.16,5.8-Math.abs(l)*.35));e(new ra(u,1,.11,5,!1),ct(c%2?13869914:15780216),{x:0,y:0,z:0})}e(new sn(1.75,4.3,9),ct(1535606),{x:0,y:4,z:-.25}),e(new de(1.15,14,10),ct(16762531),{x:0,y:6.5,z:-.35}),e(new sn(2.05,4.6,11),ct(2443608),{x:0,y:9,z:-.35}),e(new Un(1.55,.28,7,16),ct(2443608),{x:0,y:7.25,z:-.35},{x:1,y:1,z:1}).rotation.x=Math.PI/2,[-1,1].forEach(c=>{const l=e(new pe(.34,.48,2.2,7),ct(2443608),{x:c*.72,y:2.35,z:.05});l.rotation.z=c*.36;const u=e(new pe(.28,.35,1.75,7),ct(2443608),{x:c*1.12,y:1.15,z:-.08});u.rotation.z=-c*.62,e(new de(.46,8,7),ct(5716276),{x:c*1.48,y:.52,z:-.47},{x:1,y:.65,z:1.45})}),[-.75,-.38,.38,.75].forEach((c,l)=>e(new de(.45,8,7),ct(10308914),{x:c,y:6.75-l%2*.42,z:-1.15})),[-.4,.4].forEach(c=>e(new de(.14,8,7),ct(2504770),{x:c,y:6.65,z:-1.43}));const r=ct(15914671);e(new de(1.02,12,9),r,{x:0,y:2,z:1.48}),e(new de(.78,12,9),r,{x:0,y:2.78,z:2.08}),[-.48,.48].forEach(c=>e(new sn(.38,.78,3),ct(14721900),{x:c,y:3.55,z:2.2})),[-.26,.26].forEach(c=>e(new de(.12,7,6),ct(2572625),{x:c,y:2.88,z:2.88})),[-.42,.42].forEach(c=>e(new de(.19,7,6),r,{x:c,y:1.27,z:2.12},{x:1,y:.7,z:1.15}));const o=e(new Un(.79,.075,6,12),ct(12929874),{x:0,y:2.45,z:2.06});o.rotation.x=Math.PI/2;const a=e(new Un(1,.17,7,12,Math.PI*.8),ct(15914671),{x:0,y:2,z:.95});a.rotation.x=Math.PI/2}makeSkyLife(){const t=ct(16776171);for(let e=0;e<12;e++){const i=new oe;for(let s=0;s<4;s++){const r=new J(new de(3+s%2*1.5,10,7),t);r.position.set(s*3,Math.sin(s)*.8,0),i.add(r)}i.position.set(-190+e*47%380,38+e%4*16,-155+e*71%320),this.clouds.add(i)}this.makeBirds()}makeBirds(){const t=ct(16119280),e=ct(14277081),i=ct(15242044),s=fn(1234);for(let r=0;r<12;r++){const o=new oe,a=new J(new de(.45,10,8),t);a.scale.set(.7,.6,1.6),o.add(a);const c=new J(new de(.26,10,8),t);c.position.set(0,.22,.75),o.add(c);const l=new J(new sn(.09,.35,8),i);l.position.set(0,.18,1.05),l.rotation.x=Math.PI/2,o.add(l);const u=new J(new te(.5,.07,.6),e);u.position.set(0,.05,-.85),o.add(u);const d=g=>{const _=new oe;_.position.set(g*.28,.12,.1);const m=new J(new te(1.5,.07,.65),e);m.position.x=g*.85;const p=new J(new te(.7,.06,.45),e);return p.position.x=g*1.85,_.add(m,p),o.add(_),_},h=d(-1),f=d(1);o.position.set(-30+s()*80,28+s()*12,45+s()*55),this.birds.add(o),this.birdFlock.push({group:o,left:h,right:f,vel:new D((s()-.5)*8,0,(s()-.5)*8),phase:s()*Math.PI*2})}}updateBirds(t){const e=this.birdFlock.length;if(!e||t<=0)return;const i=14,s=9,r=4.5,o=26,a=new D,c=new D;for(let l=0;l<e;l++){const u=this.birdFlock[l],d=new D,h=new D,f=new D;let g=0;for(let A=0;A<e;A++){if(l===A)continue;const w=this.birdFlock[A],x=u.group.position.distanceTo(w.group.position);x<i&&x>.001&&(g++,c.copy(u.group.position).sub(w.group.position).divideScalar(x*x),d.add(c),h.add(w.vel),f.add(w.group.position))}a.set(0,0,0),g>0&&(d.divideScalar(g).normalize().multiplyScalar(s).sub(u.vel),d.clampLength(0,o),h.divideScalar(g).normalize().multiplyScalar(s).sub(u.vel),h.clampLength(0,o),f.divideScalar(g).sub(u.group.position).normalize().multiplyScalar(s).sub(u.vel),f.clampLength(0,o),a.addScaledVector(d,1.6).addScaledVector(h,1).addScaledVector(f,.9));const _=33-u.group.position.y;a.y+=$e.clamp(_*2.2,-o*.6,o*.6),a.x+=Math.sin(this.clock*.9+u.phase)*4+Math.sin(this.clock*.23+u.phase*2.1)*3,a.z+=Math.cos(this.clock*.7+u.phase*1.3)*4+Math.cos(this.clock*.31+u.phase*.7)*3,u.vel.addScaledVector(a,t);const m=u.vel.length();m>s?u.vel.multiplyScalar(s/m):m<r&&m>.001&&u.vel.multiplyScalar(r/m),u.group.position.addScaledVector(u.vel,t);const p=u.group.position.clone().add(u.vel);u.group.lookAt(p);const M=(this.clock*.35+u.phase*.15)%1;let y,v;M<.58?(y=.75,v=0):(y=.06,v=.18);const T=v+Math.sin(this.clock*11+u.phase)*y;u.left.rotation.z=T,u.right.rotation.z=-T}}animateSky(t,e){t||(this.clouds.children.forEach((i,s)=>{i.position.x+=.012*(1+s%3),i.position.x>205&&(i.position.x=-205)}),this.updateBirds(e),this.beamGroup&&this.lighthouseLit&&(this.beamGroup.rotation.y+=.015),this.boats.forEach(i=>{const s=i.userData.baseY??.35;i.position.y=s+Math.sin(this.clock*1.2+i.userData.phase)*.18,i.rotation.z=Math.sin(this.clock*.9+i.userData.phase)*.03}))}destination(t){var i,s,r;if(t.mode==="tutorial")return Pe.find(o=>o.id==="harbor-cafe")||Pe[1];const e=(i=t.run)!=null&&i.returning?"home":(r=(s=t.run)==null?void 0:s.job)==null?void 0:r.to;return Pe.find(o=>o.id===e)||Pe.find(o=>o.id==="home")||Pe[0]}updateBeacon(t,e){if(t&&(this.targetRing.position.set(t.position.x,Math.max(3,t.position.y+.6),t.position.z),this.targetRing.rotation.y+=e*.8,!this.targetRing.children.length)){const i=new J(new Un(4.5,.25,8,28),ct(16770203));i.rotation.x=Math.PI/2,this.targetRing.add(i);const s=new J(new pe(.08,.26,8,8,1,!0),new An({color:16771234,transparent:!0,opacity:.16,depthWrite:!1,side:He}));s.position.y=4,this.targetRing.add(s)}}makeGlowColumn(){const e=[{rTop:Md,rBottom:2.4,opacity:.2},{rTop:1.7,rBottom:1.1,opacity:.32}];for(const i of e){const s=new pe(i.rTop,i.rBottom,90,24,1,!0),r=new Sn({transparent:!0,depthWrite:!1,blending:dc,side:He,uniforms:{uHeight:{value:90},uOpacity:{value:i.opacity},uPulse:{value:1}},vertexShader:`varying float vH; uniform float uHeight;
void main(){ vH = position.y / uHeight + .5; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,fragmentShader:`varying float vH; uniform float uOpacity; uniform float uPulse;
void main(){ float a = pow(clamp(1. - vH, 0., 1.), 1.7) * uOpacity * uPulse;
  gl_FragColor = vec4(1., .62, .22, a); }`}),o=new J(s,r);o.position.y=90/2,this.glowColumn.add(o),this.glowMats.push(r)}this.glowColumn.visible=!1}updateGlowColumn(t,e){const i=na(t),s=!!i;if(this.glowColumn.visible=s,!s||!i){this.lastGlowStopId=void 0;return}this.lastGlowStopId!==i.id&&(this.lastGlowStopId=i.id,this.glowColumn.position.set(i.position.x,i.position.y,i.position.z));const r=t.haloFade>0?Math.max(0,Math.min(1,t.haloFade/xd)):1,o=(e?1:.86+.14*Math.sin(this.clock*2.4))*r;for(const a of this.glowMats)a.uniforms.uPulse.value=o}makeDropParcel(){const t=new J(new te(1.5,1.1,1.5),ct(13208927)),e=ct(12929874),i=new J(new te(1.56,1.16,.34),e),s=new J(new te(.34,1.16,1.56),e),r=new J(new de(.3,8,6),e);r.position.y=.68,r.scale.set(1.4,.7,1.4),this.dropParcel.add(t,i,s,r),this.dropParcel.visible=!1}updateDropParcel(t,e,i){const s=t.drop,r=s?Pe.find(h=>h.id===s.stopId):void 0,o=!!s&&!!r&&s.parcel;if(this.dropParcel.visible=o,!o||!s||!r)return;const a=i?1:Math.min(1,s.t/gd),c=a*a,l=t.player.position,u=r.position.y+.7,d=Math.max(l.y-1.4,u);this.dropParcel.position.set(l.x+(r.position.x-l.x)*c,d+(u-d)*c,l.z+(r.position.z-l.z)*c),i||(this.dropParcel.rotation.y+=e*4)}updateCamera(t,e,i,s,r){let o,a;if(t.mode==="title"||t.mode==="summary"){const c=s?0:this.clock*.035;o=new D(-92+Math.sin(c)*8,48,146+Math.cos(c)*7),a=new D(18,13,65)}else{this.followYaw=r?t.player.yaw:o1(this.followYaw,t.player.yaw,i);const c=this.followYaw,l=new D(-Math.sin(c)*26,12,Math.cos(c)*26);o=e.clone().add(l),a=e.clone().add(new D(Math.sin(c)*5,2,-Math.cos(c)*5));const u=e.clone().add(new D(0,2,0)),d=o.clone().sub(u),h=d.length();this.blockers.forEach(g=>g.updateWorldMatrix(!0,!1)),this.ray.set(u,d.normalize());const f=this.ray.intersectObjects(this.blockers,!1)[0];f&&f.distance<h&&o.copy(u).add(d.setLength(Math.max(7,f.distance-1)))}this.camPos.copy(o),this.camLook.copy(a),this.camera.position.copy(this.camPos),this.camera.up.set(0,1,0),this.camera.lookAt(this.camLook)}}const S1=()=>({lastKey:null,dismissedKey:null});function b1(n,t,e){return`${n}|${t}|${e}`}function w1(n,t,e,i,s,r){const o=b1(t,e,s),a=o===n.lastKey?n:{lastKey:o,dismissedKey:null};return{hidden:!(t.includes("tutorial")||i!==""||t==="flight"&&(r??1/0)<=120)||a.dismissedKey===o,next:a}}function E1(n){return{...n,dismissedKey:n.lastKey}}const Ti=n=>`<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${{star:'<path d="m12 2 2.8 6.5L22 9l-5.4 4.7 1.6 7.1-6.2-3.7-6.2 3.7 1.6-7.1L2 9l7.2-.5Z"/>',envelope:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',pause:'<path d="M7 4h3v16H7zm7 0h3v16h-3z"/>',sound:'<path d="M4 10h4l5-4v12l-5-4H4zM16 9c1 .8 1 5.2 0 6m2-9c3 2.6 3 9.4 0 12"/>',fullscreen:'<path d="M4 9V5h4m8 0h4v4M20 15v4h-4M8 19H4v-4"/>',home:'<path d="m3 11 9-8 9 8v9h-6v-6H9v6H3z"/>'}[n]}</svg>`,Is=n=>`${Math.max(0,Math.round(n))} coins`;class T1{constructor(t,e){at(this,"el",{});at(this,"previousRevision",-1);at(this,"offersKey","");at(this,"tip",S1());t.classList.add("meg-ui"),t.innerHTML=`
<header class="gamebar"><div class="gamebar-brand">MEG’S <span>Delivery Service</span></div><div class="gamebar-actions"><button class="icon-button" id="audio-btn" aria-label="Mute audio">${Ti("sound")}</button><button class="icon-button" id="pause-btn" aria-label="Pause flight">${Ti("pause")}</button></div></header><main class="screen-layer">
<section class="title-card panel" id="title-card"><div class="eyebrow">${Ti("star")} A LITTLE WITCH. A BIG SKY.</div><h1>MEG’S<br><em>Delivery</em> Service</h1><p class="premise">Take on a parcel, then return home <b>before nightfall</b> to bank your earnings.</p><p class="key-hint desktop-hint">Steer with <kbd>WASD</kbd> / arrows · rise with <kbd>W</kbd> · hover with <kbd>Space</kbd></p><p class="key-hint touch-hint">Touch anywhere to fly · release the stick to slow down</p><button id="start-btn" class="primary-button">Learn to fly <span>→</span></button><div class="title-controls"><button id="quality-btn">Quality: <b>High</b></button><button id="motion-btn">Motion: <b>Full</b></button><button id="fullscreen-btn">${Ti("fullscreen")} Fullscreen</button></div><footer>MADE OF LITTLE ADVENTURES <span class="desktop-hint">⌨</span><span class="touch-hint">touch to fly</span> <span class="build-sha">build a34fd54</span></footer></section>
<section class="offers-card panel menu-card" id="offers-card"><div class="eyebrow">${Ti("envelope")} TODAY’S POST</div><h2>Choose a delivery</h2><p>Nightfall is already on its way. Pick one parcel and make it home with your earnings.</p><div class="offer-balances"><span>Satchel <b id="offer-earnings">0 coins</b></span><span>Banked <b id="offer-banked">0 coins</b></span></div><div id="offer-list" class="offer-list"></div><button id="return-home-btn" class="secondary-button">Return home</button></section>
<section class="summary-card panel menu-card" id="summary-card"><div class="eyebrow">${Ti("star")} DAY’S END</div><h2 id="summary-heading">A lovely landing.</h2><p id="summary-copy"></p><div class="summary-stats"><div><span>Deliveries</span><b id="summary-deliveries">0</b></div><div><span>Earnings saved</span><b id="summary-earnings">0 coins</b></div></div><button id="next-day-btn" class="primary-button">Another day <span>→</span></button></section>
<section class="flight-hud" id="flight-hud"><div class="destination-card panel"><div class="eyebrow">${Ti("envelope")} <span id="target-label">Next delivery</span></div><strong id="target-name">The village</strong><div class="target-direction"><span class="compass-arrow" id="target-arrow"></span><span id="target-distance">— m away</span><svg class="hourglass" id="hourglass" viewBox="0 0 40 48" aria-hidden="true"><defs><clipPath id="top-bulb"><polygon points="9,6 31,6 20,24"/></clipPath><clipPath id="bottom-bulb"><polygon points="9,42 31,42 20,24"/></clipPath></defs><path d="M9 6 H31 L20 24 L31 42 H9 L20 24 Z" fill="#fffdf5" fill-opacity="0.35" stroke="#55402e" stroke-width="2.5" stroke-linejoin="round"/><rect id="sand-top" x="9" y="6" width="22" height="18" fill="#e8b64c" clip-path="url(#top-bulb)"/><rect id="sand-bottom" x="9" y="42" width="22" height="0" fill="#e8b64c" clip-path="url(#bottom-bulb)"/><line class="sand-stream" x1="20" y1="24" x2="20" y2="30" stroke="#e8b64c" stroke-width="1.6" stroke-linecap="round"/><circle class="grain" cx="20" cy="22" r="1.3" fill="#e8b64c"/><circle class="grain grain-2" cx="20" cy="22" r="1" fill="#e8b64c"/><circle class="grain grain-3" cx="20" cy="22" r="1.1" fill="#e8b64c"/><line x1="6" y1="6" x2="34" y2="6" stroke="#55402e" stroke-width="3.5" stroke-linecap="round"/><line x1="6" y1="42" x2="34" y2="42" stroke="#55402e" stroke-width="3.5" stroke-linecap="round"/></svg></div></div><div class="tutorial-bubble" id="tutorial-bubble"><button class="bubble-close" id="bubble-close" aria-label="Dismiss tip">×</button><b>Pumpkin says:</b> <span id="tutorial-text"></span></div><div class="flight-readout panel"><span><b id="speed-value">0</b> m/s</span><span class="satchel-readout">Satchel <b id="flight-earnings">0</b></span></div></section>
<section class="pause-card panel menu-card" id="pause-card"><div class="eyebrow">${Ti("star")} TAKING A BREATHER</div><h2>The sky will wait.</h2><p id="pause-reason"></p><p class="key-hint desktop-hint">When you return: <kbd>WASD</kbd> or arrows to steer · <kbd>Q</kbd>/<kbd>E</kbd> for speed</p><p class="key-hint touch-hint">When you return: touch anywhere to fly · release the stick to slow down</p><button id="resume-btn" class="primary-button">Continue flying <span>→</span></button><button id="unstuck-btn" class="secondary-button">Unstuck me</button><div class="title-controls"><button id="pause-quality-btn">Quality</button><button id="pause-motion-btn">Motion</button></div></section></main>`;const i=r=>t.querySelector(`#${r}`);["title-card","offers-card","summary-card","flight-hud","pause-card","hourglass","sand-top","sand-bottom","pause-reason","target-name","target-distance","target-arrow","target-label","tutorial-bubble","tutorial-text","bubble-close","speed-value","flight-earnings","audio-btn","pause-btn","resume-btn","unstuck-btn","quality-btn","motion-btn","pause-quality-btn","pause-motion-btn","offer-list","return-home-btn","offer-earnings","offer-banked","summary-heading","summary-copy","summary-deliveries","summary-earnings","next-day-btn","start-btn"].forEach(r=>this.el[r]=i(r));const s=(r,o)=>i(r).onclick=a=>{o(),a.currentTarget.blur()};s("start-btn",e.start),s("pause-btn",e.pause),s("resume-btn",e.resume),s("unstuck-btn",e.unstuck),s("audio-btn",e.mute),i("bubble-close").onclick=r=>{this.tip=E1(this.tip),this.el["tutorial-bubble"].hidden=!0,r.currentTarget.blur()},s("return-home-btn",()=>{var r;return(r=e.returnHome)==null?void 0:r.call(e)}),s("next-day-btn",()=>{var r;return(r=e.nextDay)==null?void 0:r.call(e)}),[i("quality-btn"),i("pause-quality-btn")].forEach(r=>r.onclick=e.quality),[i("motion-btn"),i("pause-motion-btn")].forEach(r=>r.onclick=e.motion),i("fullscreen-btn").onclick=e.fullscreen,i("offer-list").onclick=r=>{var a;const o=r.target.closest("[data-job]");o&&((a=e.chooseJob)==null||a.call(e,+o.dataset.job),o.blur())}}render(t,e){var u,d,h;const i=["offers","summary"].includes(t.mode),s=t.mode==="title",r=!s&&t.paused;if(this.el["title-card"].hidden=!s,this.el["offers-card"].hidden=t.mode!=="offers"||r,this.el["summary-card"].hidden=t.mode!=="summary"||r,this.el["flight-hud"].hidden=s||i||r,this.el["pause-card"].hidden=!r,e.timeRemaining!==void 0){const f=Math.max(0,Math.min(1,e.timeRemaining/360));this.el["sand-top"].setAttribute("height",(18*f).toFixed(1));const g=18*(1-f);this.el["sand-bottom"].setAttribute("height",g.toFixed(1)),this.el["sand-bottom"].setAttribute("y",(42-g).toFixed(1))}this.el.hourglass.classList.toggle("pulse",e.timeRemaining!==void 0&&e.timeRemaining<=60),this.el.hourglass.classList.toggle("empty",e.timeRemaining!==void 0&&e.timeRemaining<=0),this.el["start-btn"].innerHTML=`${t.profile.tutorialDone?"Start a delivery day":"Learn to fly"} <span>→</span>`,this.el["target-name"].textContent=e.targetName,this.el["target-distance"].textContent=e.targetDistance>0?`${Math.round(e.targetDistance)} m away`:"Right here",this.el["target-label"].textContent=(u=t.run)!=null&&u.returning?"Return home":"Next delivery",this.el["target-arrow"].style.transform=`rotate(${e.targetBearing??0}deg)`,this.el["speed-value"].textContent=String(Math.round(e.speed)),this.el["audio-btn"].classList.toggle("is-muted",e.muted),this.el["audio-btn"].setAttribute("aria-label",e.muted?"Unmute audio":"Mute audio"),this.el["quality-btn"].innerHTML=`Quality: <b>${e.lowQuality?"Low":"High"}</b>`,this.el["motion-btn"].innerHTML=`Motion: <b>${e.reducedMotion?"Low":"Full"}</b>`,this.el["tutorial-text"].textContent=e.status||t.message||"Let’s take the scenic route!";const o=e.status||t.message||"",a=w1(this.tip,t.mode,t.tutorialStage,e.status,o,e.timeRemaining);this.tip=a.next,this.el["tutorial-bubble"].hidden=a.hidden,this.el["flight-earnings"].textContent=Is(((d=t.run)==null?void 0:d.earnings)??0),this.el["offer-earnings"].textContent=Is(((h=t.run)==null?void 0:h.earnings)??0),this.el["offer-banked"].textContent=Is(t.profile.coins),this.renderOffers(t);const c=t.summary,l=(c==null?void 0:c.success)??!1;this.el["summary-heading"].textContent=l?"A lovely landing.":"Rescued from nightfall.",this.el["summary-copy"].textContent=l?`You banked ${Is((c==null?void 0:c.earnings)??0)} after ${(c==null?void 0:c.deliveries)??0} deliveries.`:"The unbanked satchel was lost, but tomorrow brings another chance.",this.el["summary-deliveries"].textContent=String((c==null?void 0:c.deliveries)??0),this.el["summary-earnings"].textContent=Is((c==null?void 0:c.earnings)??0),this.el["next-day-btn"].innerHTML=`${l?"Another day":"Back home"} <span>→</span>`,this.previousRevision!==t.revision&&(this.el["pause-reason"].textContent=t.pauseReason||"Rest your wings whenever you need.",this.previousRevision=t.revision)}renderOffers(t){var s,r;if(t.mode!=="offers")return;this.el["return-home-btn"].hidden=(((s=t.run)==null?void 0:s.deliveries)??0)===0;const e=(((r=t.run)==null?void 0:r.offers)??[]).slice(0,2),i=e.map(o=>`${o.to}:${o.parcel}:${o.payout}`).join("|");i!==this.offersKey&&(this.offersKey=i,this.el["offer-list"].innerHTML=e.map((o,a)=>{const c=Pe.find(u=>u.id===o.to),l=c?Math.hypot(c.position.x-t.player.position.x,c.position.z-t.player.position.z):0;return`<button class="offer-button" data-job="${a}"><span><b>${(c==null?void 0:c.name)??o.to}</b><small>${l<115?"Short":"Long"} route · ${o.parcel} · ${Math.round(l)} m</small></span><strong>${Is(o.payout)} <i>→</i></strong></button>`}).join(""))}}class A1{constructor(t,e,i=()=>!0){at(this,"keys",new Set);at(this,"stick",{x:0,y:0});at(this,"stickPointer",null);at(this,"cutPending",!1);at(this,"keydown");at(this,"keyup");at(this,"canvas");at(this,"joystick");at(this,"stickEnabled");this.canvas=t,this.stickEnabled=i,this.keydown=s=>{if(this.inControl(s.target))return;const r=s.key.toLowerCase();["arrowleft","arrowright","arrowup","arrowdown","w","a","s","d","q","e"," ","enter","escape","p","f"].includes(r)&&s.preventDefault(),!s.repeat&&r===" "&&e.hover(),!s.repeat&&r==="enter"&&e.interact(),!s.repeat&&(r==="escape"||r==="p")&&e.pause(),!s.repeat&&r==="f"&&e.fullscreen(),this.keys.add(r)},this.keyup=s=>this.keys.delete(s.key.toLowerCase()),window.addEventListener("keydown",this.keydown),window.addEventListener("keyup",this.keyup),t.addEventListener("blur",()=>this.clear()),this.joystick=document.querySelector("#joystick")||void 0,this.joystick&&(this.joystick.hidden=!0),this.bindTouch()}sample(){const t=(a,c)=>Number(this.keys.has(a)||this.keys.has(c)),e=t("arrowright","d")-t("arrowleft","a")+this.stick.x,i=t("arrowup","w")-t("arrowdown","s")-this.stick.y,s=this.stickPointer!==null,r=t("e","e")-t("q","q")+(s?1:0),o=this.cutPending;return this.cutPending=!1,{turn:Math.max(-1,Math.min(1,e)),climb:Math.max(-1,Math.min(1,i)),throttle:Math.max(-1,Math.min(1,r)),cutThrottle:o}}clear(){this.keys.clear(),this.stickPointer=null,this.stick.x=this.stick.y=0,this.cutPending=!1,this.joystick&&(this.joystick.style.removeProperty("--stick-x"),this.joystick.style.removeProperty("--stick-y"),this.joystick.classList.remove("is-dragging"),this.joystick.hidden=!0)}dispose(){window.removeEventListener("keydown",this.keydown),window.removeEventListener("keyup",this.keyup),this.clear()}inControl(t){return t instanceof Element&&!!t.closest('input, button, select, textarea, [contenteditable="true"]')}bindTouch(){if(!this.joystick)return;const t=this.joystick,e=o=>{const a=t.getBoundingClientRect(),c=a.width*.34,l=o.clientX-(a.left+a.width/2),u=o.clientY-(a.top+a.height/2),d=Math.max(c,Math.hypot(l,u));this.stick.x=l/d,this.stick.y=u/d,t.style.setProperty("--stick-x",`${this.stick.x*c}px`),t.style.setProperty("--stick-y",`${this.stick.y*c}px`)},i=o=>{if(o.pointerType==="mouse"||this.stickPointer!==null||!this.stickEnabled())return;this.stickPointer=o.pointerId;try{this.canvas.setPointerCapture(o.pointerId)}catch{}const a=t.offsetWidth/2||56;t.style.left=`${o.clientX-a}px`,t.style.top=`${o.clientY-a}px`,t.hidden=!1,t.classList.add("is-dragging"),e(o)},s=o=>{o.pointerId===this.stickPointer&&e(o)},r=o=>{o.pointerId===this.stickPointer&&(this.stickPointer=null,this.stick.x=this.stick.y=0,t.style.removeProperty("--stick-x"),t.style.removeProperty("--stick-y"),t.classList.remove("is-dragging"),t.hidden=!0,this.cutPending=!0)};this.canvas.addEventListener("pointerdown",i),this.canvas.addEventListener("pointermove",s),this.canvas.addEventListener("pointerup",r),this.canvas.addEventListener("pointercancel",r),this.canvas.addEventListener("lostpointercapture",r)}}class R1{constructor(t,e){at(this,"root");at(this,"key","");this.actions=e,this.root=document.createElement("section"),this.root.className="home-interface",t.append(this.root),this.root.addEventListener("click",i=>{const s=i.target.closest("button");s&&(s.dataset.action==="interact"?e.interact():s.dataset.action==="close"?e.close():s.dataset.action==="start"?e.start():s.dataset.upgrade?e.upgrade(s.dataset.upgrade):s.dataset.furnish&&e.furnish(s.dataset.furnish),s.blur())})}render(t){if(this.root.hidden=t.mode!=="home"||t.paused,this.root.hidden)return;const e=xl(t),i=JSON.stringify([t.homePanel,e==null?void 0:e.id,t.profile.coins,t.profile.upgrades,t.profile.furniture,t.message]);if(i===this.key)return;this.key=i;const s=t.profile,r=`<div class="eyebrow">MEG'S ROOM</div><h2>Welcome home, Meg.</h2><p class="home-wallet">${s.coins} coins saved · ${s.furniture.length}/6 cozy touches</p>`,o=`<button class="context-button" data-action="interact" ${e?"":"disabled"}>${e?`Visit ${e.name}`:"Explore your room"} <kbd>Enter</kbd></button>`;if(t.homePanel==="none"){const c=`<aside class="room-guide panel">${r}<p>Walk to the Job Board, Broom Workshop, or Decor Corner.</p>${o}</aside>`;this.root.innerHTML=`${c}${$f(s)?'<div class="completion-ribbon">✦ Every little corner feels like home. Keep flying, little witch.</div>':""}`;return}let a="";t.homePanel==="jobs"&&(a='<div class="eyebrow">A NEW DELIVERY DAY</div><h2>The town is waiting.</h2><p>Choose your first delivery — pick the route that suits you. You have eight minutes to make deliveries and return home. Anything still in your satchel at nightfall will be lost.</p><button class="primary-button" data-action="start">See today’s deliveries →</button>'),t.homePanel==="brooms"&&(a=`<div class="eyebrow">THE BROOM STAND · ${s.coins} COINS</div><h2>A little more magic.</h2><div class="shop-list">${["speed","handling","braking"].map(c=>{const l=s.upgrades[c],u=l===0?60:120,d={speed:"Fly 10% faster per level",handling:"Turn 20% more responsively per level",braking:"Slow down 20% faster per level"}[c];return`<button data-upgrade="${c}" ${l===2||s.coins<u?"disabled":""}><span><b>${c[0].toUpperCase()+c.slice(1)}</b><small>${d} · ${l}/2</small></span><strong>${l===2?"Mastered":`${u} coins`}</strong></button>`}).join("")}</div>`),t.homePanel==="decor"&&(a=`<div class="eyebrow">THE HOME CATALOGUE · ${s.coins} COINS</div><h2>Make yourself at home.</h2><div class="shop-list">${ml.map(c=>`<button data-furnish="${c.id}" ${s.furniture.includes(c.id)||s.coins<c.cost?"disabled":""}><span><b>${c.name}</b><small>${c.description}</small></span><strong>${s.furniture.includes(c.id)?"At home":`${c.cost} coins`}</strong></button>`).join("")}</div>`),t.homePanel==="cat"&&(a='<div class="eyebrow">PUMPKIN’S CORNER</div><h2>A very good copilot.</h2><p>Pumpkin leans into your hand and purrs. The best part of any delivery day is coming home together.</p><div class="purr">♡ purr… purr… ♡</div>'),this.root.innerHTML=`<section class="menu-card panel room-menu">${a}<button class="secondary-button" data-action="close">Back to your room</button></section>`}}function Cf(n,t,e){return t?!1:n==="flight"||n==="tutorial"?!0:n==="home"&&e==="none"}function Pf(n){return n.haloFade>0||n.descent!=null||n.drop!=null}class C1{constructor(t){at(this,"root");this.root=document.createElement("div"),this.root.className="touch-controls",this.root.id="touch-controls",this.root.innerHTML='<div id="joystick" class="joystick" hidden><i></i></div>',t.append(this.root)}render(t){this.root.hidden=Pf(t)||!Cf(t.mode,t.paused,t.homePanel)}}const Ro="megs-delivery-save-v1",Co="megs-delivery-save-lock-v1",P1=3e4,I1=["title","tutorial","flight","offers","home","summary"],L1=["none","jobs","brooms","decor","cat"],fl=new Set(Pe.map(n=>n.id)),sd=new Set(["rug","plant","shelf","lamp","cushion","cat-tree"]),D1=new Set([20,35,50]),N1=1e5,Yn=n=>typeof n=="object"&&n!==null&&!Array.isArray(n),dn=(n,t=-1/0,e=1/0)=>typeof n=="number"&&Number.isFinite(n)&&n>=t&&n<=e,Rn=(n,t=0,e=Number.MAX_SAFE_INTEGER)=>Number.isInteger(n)&&dn(n,t,e),$i=(n,t=160)=>typeof n=="string"&&n.length<=t,rd=(n,t=500)=>Yn(n)&&dn(n.x,-t,t)&&dn(n.y,-t,t)&&dn(n.z,-t,t);function od(n){return!Yn(n)||!$i(n.from,64)||!$i(n.to,64)||!fl.has(n.from)||!fl.has(n.to)||n.from===n.to||!D1.has(n.payout)||!$i(n.label,80)||!$i(n.parcel,100)?null:{from:n.from,to:n.to,payout:n.payout,label:n.label,parcel:n.parcel}}function U1(n){return!Yn(n)||!Rn(n.coins)||!Yn(n.upgrades)||!Rn(n.upgrades.speed,0,2)||!Rn(n.upgrades.handling,0,2)||!Rn(n.upgrades.braking,0,2)||!Array.isArray(n.furniture)||n.furniture.length>sd.size||!n.furniture.every(t=>typeof t=="string"&&sd.has(t))||new Set(n.furniture).size!==n.furniture.length||typeof n.tutorialDone!="boolean"||!Rn(n.runs)||!Rn(n.deliveries)?null:{coins:n.coins,upgrades:{speed:n.upgrades.speed,handling:n.upgrades.handling,braking:n.upgrades.braking},furniture:[...n.furniture],tutorialDone:n.tutorialDone,runs:n.runs,deliveries:n.deliveries}}function F1(n){if(n===null)return null;if(!Yn(n)||!Rn(n.seed,-Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)||!dn(n.elapsed,0,360)||!dn(n.earnings,0)||!Rn(n.deliveries)||typeof n.returning!="boolean"||!$i(n.lastStop,64)||!fl.has(n.lastStop)||!Array.isArray(n.offers)||n.offers.length>2)return;const t=n.job===null?null:od(n.job),e=n.offers.map(od);if(n.job!==null&&!t||e.some(s=>!s)||new Set(e.map(s=>s.to)).size!==e.length)return;const i=Array.isArray(n.recentStops)?n.recentStops:[];return{seed:n.seed,elapsed:n.elapsed,earnings:n.earnings,deliveries:n.deliveries,job:t,offers:e,returning:n.returning,lastStop:n.lastStop,recentStops:i}}function ad(n){if(typeof n!="string"||n.length>N1)return null;let t;try{t=JSON.parse(n)}catch{return null}if(!Yn(t)||t.version!==1||!Yn(t.state))return null;const e=t.state;if(!I1.includes(e.mode)||!Yn(e.player)||!rd(e.player.position)||!dn(e.player.yaw)||!dn(e.player.pitch,-Math.PI/2,Math.PI/2)||!dn(e.player.speed,0,30)||!dn(e.player.throttle,0,30)||typeof e.player.hover!="boolean"||!rd(e.player.velocity,50))return null;const i=U1(e.profile),s=F1(e.run),r=e.homeFacing===void 0?0:e.homeFacing,o=e.homePanel===void 0?"none":e.homePanel;if(!i||s===void 0||typeof e.paused!="boolean"||!$i(e.pauseReason)||!$i(e.message,500)||!Rn(e.tutorialStage,0,10)||!Yn(e.homePosition)||!dn(e.homePosition.x)||!dn(e.homePosition.z)||!dn(r,-10,10)||!L1.includes(o)||!Rn(e.revision))return null;let a=null;if(e.summary!==null){if(!Yn(e.summary)||typeof e.summary.success!="boolean"||!dn(e.summary.earnings,0)||!Rn(e.summary.deliveries))return null;a={success:e.summary.success,earnings:e.summary.earnings,deliveries:e.summary.deliveries}}const c=e.mode;if((c==="title"||c==="tutorial"||c==="home"||c==="summary")&&s!==null||c==="flight"&&(!s||!s.job&&!s.returning)||c==="offers"&&(!s||s.job!==null||s.returning||s.offers.length!==2)||c==="summary"&&!a||c!=="summary"&&a||c==="home"&&(Math.abs(e.homePosition.x)>8||Math.abs(e.homePosition.z)>6))return null;const l={position:{...e.player.position},yaw:e.player.yaw,pitch:e.player.pitch,speed:e.player.speed,throttle:e.player.throttle,hover:!1,velocity:{...e.player.velocity},brakeHold:e.player.brakeHold===!0},u={mode:c,player:l,profile:i,run:s,paused:e.paused,pauseReason:e.pauseReason,message:e.message,tutorialStage:e.tutorialStage,homePosition:{x:e.homePosition.x,z:e.homePosition.z},homeFacing:r,homePanel:o,summary:a,revision:e.revision,seed:Rn(e.seed,0,2147483647)?e.seed:Math.floor(Math.random()*2147483647)};return u.drop=null,u.descent=null,u.haloFade=0,(u.mode==="tutorial"||u.mode==="flight"||u.mode==="offers")&&(u.paused=!0,u.pauseReason="Welcome back"),(u.mode==="title"||u.mode==="home")&&(u.paused=!1,u.pauseReason=""),u}function O1(n){return JSON.stringify({version:1,state:n})}function z1(n){var t;try{const e=JSON.parse(n),i=(t=e==null?void 0:e.state)==null?void 0:t.seed;return!(typeof i=="number"&&Number.isInteger(i)&&i>=0&&i<=2147483647)}catch{return!1}}class B1{constructor(){at(this,"releaseLock");at(this,"generation",0);at(this,"writable",!1);at(this,"status","");at(this,"memory");at(this,"tabId",`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`)}get message(){return this.status}get canSave(){return this.writable}writeLock(t){try{t.setItem(Co,JSON.stringify({tabId:this.tabId,timestamp:Date.now()}))}catch{}}async acquire(){var s;this.release(),++this.generation;const t=this.storage();if(!t)return this.session("Saved games are unavailable in this browser.");try{const r=t.getItem(Co);if(r!==null)try{const o=JSON.parse(r),a=typeof o.timestamp=="number"?Date.now()-o.timestamp:1/0;if(typeof o.tabId=="string"&&o.tabId!==this.tabId&&a<P1)return{kind:"readonly",message:"Saved game is open in another tab. Retry after closing it."}}catch{}this.writeLock(t),this.releaseLock=()=>{this.releaseLock=void 0;try{const o=t.getItem(Co);o!==null&&JSON.parse(o).tabId===this.tabId&&t.removeItem(Co)}catch{}this.writable=!1}}catch{return this.session("Saved games are unavailable in this browser.")}let e;try{e=t.getItem(Ro)}catch{return(s=this.releaseLock)==null||s.call(this),this.session("Saved games are unavailable in this browser.")}const i=e===null?void 0:ad(e)??void 0;return e!==null&&!i?(this.status="Saved game could not be read. It was left untouched.",{kind:"invalid",message:this.status}):(this.writable=!0,this.memory=i,this.status="Saved game ready.",{kind:"ready",state:i,message:this.status,seedMigrated:e!==null&&z1(e)})}save(t){if(!this.writable)return!1;const e=this.storage();if(!e)return this.writable=!1,this.status="Saving is unavailable in this browser.",!1;try{return e.setItem(Ro,O1(t)),this.writeLock(e),this.memory=t,this.status="Saved.",!0}catch{return this.memory=t,this.writable=!1,this.status="Could not save; progress remains in this tab.",!1}}release(){var t;this.generation++,(t=this.releaseLock)==null||t.call(this),this.writable=!1}continueSession(){this.release(),this.memory=void 0,this.status="Continuing with a fresh session."}discardUnreadable(){try{const t=this.storage(),e=t==null?void 0:t.getItem(Ro);e!=null&&!ad(e)&&(t==null||t.removeItem(Ro))}catch{}this.writable=!0,this.memory=void 0,this.status="Discarded the unreadable save."}storage(){try{return typeof localStorage>"u"?void 0:localStorage}catch{return}}session(t,e){return this.writable=!1,this.memory=e,this.status=t,{kind:"session",state:e,message:t}}}class k1{constructor(){at(this,"context");at(this,"master");at(this,"ambience");at(this,"ambienceSources",[]);at(this,"tones",new Set);at(this,"muted",!0);at(this,"disposed",!1);at(this,"snapshot");at(this,"nextNote",0);at(this,"lastActive",!1);at(this,"operationPending",!1)}setMuted(t){this.disposed||(this.muted=t,!(!t&&!this.ensureContext())&&this.reconcile())}update(t,e){const i=this.snapshot,s=this.takeSnapshot(t);this.snapshot=s,this.lastActive=!(e||t.paused||typeof document<"u"&&document.hidden),!(this.muted||this.disposed||!this.context)&&(this.reconcile(),!(!this.canPlay()||this.context.state!=="running")&&(this.playMelody(),i&&(s.deliveries>i.deliveries&&this.deliveryCue(),s.coins<i.coins&&(s.upgrades!==i.upgrades||s.furniture!==i.furniture)&&this.purchaseCue(),i.homePanel!=="cat"&&s.homePanel==="cat"&&this.purrCue())))}dispose(){if(!this.disposed){this.disposed=!0,this.lastActive=!1,this.clearAmbience();for(const t of this.tones){try{t.stop()}catch{}t.disconnect()}this.tones.clear(),this.context&&this.context.state!=="closed"&&this.context.close().catch(()=>{}),this.context=void 0,this.master=void 0}}debugState(){var t;return{context:((t=this.context)==null?void 0:t.state)??"unavailable",muted:this.muted}}ensureContext(){if(this.context)return this.context;const t=typeof window>"u"?void 0:window.AudioContext||window.webkitAudioContext;if(t)try{const e=new t,i=e.createGain();return i.gain.value=1e-4,i.connect(e.destination),this.context=e,this.master=i,e}catch{return}}canPlay(){return!this.disposed&&!this.muted&&this.lastActive}reconcile(){const t=this.context;if(!t||t.state==="closed")return;const e=this.canPlay();if(e&&t.state==="running"){this.startAmbience();return}if(!e&&this.master){const s=t.currentTime;this.master.gain.cancelScheduledValues(s),this.master.gain.setTargetAtTime(1e-4,s,.025)}if(this.operationPending||(e?t.state!=="suspended":t.state!=="running"))return;this.operationPending=!0,(e?t.resume.bind(t):t.suspend.bind(t))().catch(()=>{}).then(()=>{this.operationPending=!1,this.canPlay()&&t.state==="running"&&this.startAmbience(),this.reconcile()})}startAmbience(){const t=this.context,e=this.master;if(!t||!e||t.state!=="running"||!this.canPlay())return;const i=t.currentTime;if(e.gain.cancelScheduledValues(i),e.gain.setTargetAtTime(.14,i,.08),this.ambience)return;const s=t.createGain(),r=t.createOscillator(),o=t.createOscillator(),a=t.createGain();s.gain.value=.035,s.connect(e),r.type="sine",r.frequency.value=82,o.type="sine",o.frequency.value=.09,a.gain.value=11,o.connect(a).connect(r.frequency),r.connect(s),r.start(),o.start(),this.ambience=s,this.ambienceSources=[r,o]}clearAmbience(){var t;for(const e of this.ambienceSources){try{e.stop()}catch{}e.disconnect()}this.ambienceSources=[],(t=this.ambience)==null||t.disconnect(),this.ambience=void 0}playMelody(){const t=this.context;if(!t||t.currentTime<this.nextNote)return;const e=[261.63,329.63,392,523.25,440,329.63];this.tone(e[Math.floor(t.currentTime*1.7%e.length)],.11,.045,"sine"),this.nextNote=t.currentTime+1.45}deliveryCue(){this.tone(659.25,.08,.09,"triangle"),this.tone(783.99,.19,.07,"triangle",.09)}purchaseCue(){this.tone(523.25,.06,.08,"sine"),this.tone(783.99,.16,.075,"sine",.07)}purrCue(){this.tone(110,.48,.055,"sine"),this.tone(164.81,.42,.035,"sine",.08)}tone(t,e,i,s,r=0){const o=this.context,a=this.master;if(!o||!a||o.state!=="running"||!this.canPlay())return;const c=o.currentTime+r,l=o.createOscillator(),u=o.createGain();l.type=s,l.frequency.value=t,u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(i,c+.018),u.gain.exponentialRampToValueAtTime(1e-4,c+e),l.connect(u).connect(a),this.tones.add(l),l.onended=()=>{this.tones.delete(l),l.disconnect(),u.disconnect()},l.start(c),l.stop(c+e+.03)}takeSnapshot(t){var e;return{deliveries:Math.max(t.profile.deliveries,((e=t.run)==null?void 0:e.deliveries)??0),coins:t.profile.coins,upgrades:`${t.profile.upgrades.speed}:${t.profile.upgrades.handling}:${t.profile.upgrades.braking}`,furniture:t.profile.furniture.join("|"),homePanel:t.homePanel}}}const ca=document.querySelector("#game"),Br=document.querySelector("#app"),H1=new URLSearchParams(location.search),Kl=H1.get("test")==="1";let It=yl(),Fo=!0,ta=matchMedia("(pointer: coarse)").matches;const Jl=matchMedia("(pointer: coarse)").matches;It.coarsePointer=Jl;let Er=matchMedia("(prefers-reduced-motion: reduce)").matches,is,Te,li=0,Oo=0,qs=!1;const Pi=new B1,la=new k1;let Ie=!1,ui="loading",ks="Opening your little world…",Tr=null,cd;function G1(n,t=8e3){Tr=n,clearTimeout(cd),cd=setTimeout(()=>{Tr=null,ye(0)},t)}let sc=0;function kr(n="Take a little breather."){yd(It,!0,n),Te==null||Te.clear(),li=0,Ve(),ye(0)}function pl(){!Ie||document.hidden||qs||(yd(It,!1),Te==null||Te.clear(),li=0,Oo=performance.now(),Ve())}function If(){var n,t,e;document.fullscreenElement?(n=document.exitFullscreen)==null||n.call(document):(e=(t=document.documentElement).requestFullscreen)==null||e.call(t).catch(()=>{})}const V1=new T1(Br,{start(){var n;Ie&&(It.profile.tutorialDone?ac(It):Gp(It),Te==null||Te.clear(),(n=document.activeElement)==null||n.blur(),Ve(),ye(0))},pause:()=>kr(),resume:pl,unstuck(){if(!Ie)return;const n=It.player.position;let t=Pe[0],e=1/0;for(const i of Pe){const s=(i.position.x-n.x)**2+(i.position.z-n.z)**2;s<e&&(e=s,t=i)}It.player.position={x:t.position.x,y:t.position.y+5,z:t.position.z},It.player.velocity={x:0,y:0,z:0},It.player.speed=0,It.player.throttle=0,pl(),Te==null||Te.clear(),Ve(),ye(0)},mute(){Fo=!Fo,la.setMuted(Fo),ye(0)},quality(){ta=!ta,ye(0)},motion(){Er=!Er,ye(0)},fullscreen:If,chooseJob(n){Ie&&(Yp(It,n),Te.clear(),Ve(),ye(0))},returnHome(){Ie&&(Zp(It),Te.clear(),Ve(),ye(0))},nextDay(){Ie&&(ac(It),Te.clear(),Ve(),ye(0))}}),W1=new R1(Br,{interact(){Ie&&(Sd(It),Te.clear(),Ve(),ye(0))},close(){Ie&&(ud(It),Te.clear(),Ve(),ye(0))},start(){Ie&&(qp(It,Kl?42:void 0),Te.clear(),Ve(),ye(0))},upgrade(n){Ie&&(Yf(It,n),Ve(),ye(0))},furnish(n){Ie&&(Zf(It,n),Ve(),ye(0))}}),X1=new C1(Br),ai=document.createElement("aside");ai.className="save-status";ai.setAttribute("aria-live","polite");Br.append(ai);ai.addEventListener("click",n=>{const t=n.target.closest("button");(t==null?void 0:t.dataset.save)==="retry"&&Ql()});try{is=new y1(ca)}catch{throw Br.innerHTML='<main class="compatibility"><h1>A little more sky, please.</h1><p>Meg needs a browser with WebGL 2 and hardware acceleration. Try a current browser with graphics acceleration enabled.</p></main>',new Error("WebGL 2 is unavailable.")}Te=new A1(ca,{hover:()=>{Ie&&(Vp(It),Ve(),ye(0))},interact:()=>{!Ie||It.mode!=="home"||(Sd(It),Ve(),ye(0))},pause:()=>{Ie&&(It.mode==="home"&&It.homePanel!=="none"?(ud(It),Ve(),ye(0)):It.paused?pl():kr())},fullscreen:If},()=>Jl&&!Pf(It)&&Cf(It.mode,It.paused,It.homePanel));function Ve(){!Ie||!Pi.canSave||Pi.save(It)||(ui="session",ks=Pi.message)}async function Ql(){Ie=!1,ui="loading",ks="Opening your little world…",ye(0);const n=await Pi.acquire();if(n.kind==="invalid"){Pi.discardUnreadable(),It=yl(),It.coarsePointer=Jl,is.setSeed(It.seed),Ie=!0,ui="ready",ks="",Ve(),G1("Your saved game could not be read, so it was discarded and a new game was started."),Te==null||Te.clear(),li=0,ye(0);return}ui=n.kind,ks=n.message,n.state&&(It=n.state),is.setSeed(It.seed),n.kind==="ready"&&n.seedMigrated&&Pi.canSave&&Pi.save(It),Ie=n.kind==="ready"||n.kind==="session",Te==null||Te.clear(),li=0,ye(0)}function ye(n){if(la.update(It,!Ie||qs),document.body.classList.toggle("reduced-motion",Er),!is||qs)return;is.render(It,n,{reducedMotion:Er,lowQuality:ta});const t=wd(It)??Pe[0];V1.render(It,{muted:Fo,lowQuality:ta,reducedMotion:Er,targetName:t.name,targetDistance:Math.hypot(t.position.x-It.player.position.x,t.position.z-It.player.position.z),targetBearing:$p(It.player.position,t.position,It.player.yaw),speed:It.player.speed,status:"",timeRemaining:It.run?Math.max(0,360-It.run.elapsed):void 0}),W1.render(It),X1.render(It),Ie||(document.querySelector(".home-interface").hidden=!0),It.mode==="home"&&(document.querySelector("#flight-hud").hidden=!0),document.querySelector("#start-btn").disabled=!Ie,It.profile.tutorialDone&&(document.querySelector("#start-btn").innerHTML="Come on in <span>→</span>"),document.querySelector("#next-day-btn").innerHTML="Back to your room <span>→</span>",ai.hidden=ui==="ready"&&Tr===null;const e=ui+ks+(Tr??"");ai.dataset.key!==e&&(ai.dataset.key=e,ai.textContent=ui==="ready"?Tr??"":ks,ui==="readonly"&&ai.insertAdjacentHTML("beforeend",'<br><button data-save="retry">Retry</button>'))}function Lf(n){if(!Ie||It.paused||document.hidden||qs){li=0,ye(0);return}const t=It.mode;for(li+=Math.max(0,n)/1e3;li+1e-10>=1/60;)em(It,Te.sample(),1/60),li-=1/60;sc+=n,(sc>=5e3||t!==It.mode)&&(Ve(),sc=0),ye(Math.min(n/1e3,.1))}function Df(n){const t=Oo?Math.min(n-Oo,100):0;Oo=n,Kl||Lf(t),requestAnimationFrame(Df)}window.addEventListener("resize",()=>{is.resize(),ye(0)});document.addEventListener("visibilitychange",()=>{document.hidden&&kr("Welcome back. Ready to fly?")});window.addEventListener("blur",()=>{Te.clear(),It.mode!=="title"&&kr()});ca.addEventListener("webglcontextlost",n=>{n.preventDefault(),kr("The sky is taking a moment."),qs=!0});ca.addEventListener("webglcontextrestored",()=>{qs=!1,ye(0)});window.addEventListener("pagehide",()=>{Ve(),Ie=!1,la.update(It,!0),Pi.release()});window.addEventListener("pageshow",n=>{n.persisted&&Ql()});Object.assign(window,{advanceTime:n=>Lf(n),render_game_to_text:()=>{var n,t;return JSON.stringify({coordinates:"x right/east, y up, z south; yaw 0 faces -z",mode:It.mode,paused:It.paused,player:It.player,tutorialStage:It.tutorialStage,message:It.message,run:It.run,profile:It.profile,stops:Pe,nearby:((n=Ar(It))==null?void 0:n.id)??null,homePosition:It.homePosition,homePanel:It.homePanel,station:(t=xl(It))==null?void 0:t.id,saveKind:ui})}});Kl&&Object.assign(window,{__game:{get state(){return It},get ready(){return Ie},reset(){It=yl(),li=0,ye(0)},draw:()=>ye(0),audio:()=>la.debugState(),persist:Ve,renderer:()=>is}});ye(0);requestAnimationFrame(Df);Ql();
