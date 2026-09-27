var nf=Object.defineProperty;var sf=(n,e,t)=>e in n?nf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var fe=(n,e,t)=>sf(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Rh=[{id:"jobs",name:"Job Board",x:-5,z:-3},{id:"brooms",name:"Broom Workshop",x:5,z:-3},{id:"decor",name:"Decor Corner",x:-5,z:3},{id:"cat",name:"Pumpkin",x:4,z:3}],qc=[{id:"rug",name:"Woven Rug",cost:30,description:"A soft landing for tired feet."},{id:"plant",name:"Moonleaf Plant",cost:40,description:"A little green for Meg's room."},{id:"shelf",name:"Parcel Shelf",cost:50,description:"A home for souvenirs and parcels."},{id:"lamp",name:"Warm Lamp",cost:60,description:"A cozy glow after a long shift."},{id:"cushion",name:"Window Cushion",cost:70,description:"The perfect reading nook."},{id:"cat-tree",name:"Cat Tree",cost:80,description:"Pumpkin's new favorite perch."}],Yc=[{id:"speed",name:"Swift Bristles",description:"Raises top speed by 10% per level."},{id:"handling",name:"Responsive Handle",description:"Raises turn rate by 20% per level."},{id:"braking",name:"Cloud Brake",description:"Raises hover braking by 20% per level."}],Oa=7.5,za=5.5,rf=2.4,of=3.5,Lr=(n,e,t)=>Math.max(e,Math.min(t,n));function Ba(n){n.mode="home",n.run=null,n.paused=!1,n.pauseReason="",n.homePosition={x:0,z:3},n.homeFacing=0,n.homePanel="none",n.message="Back at Meg's room.",n.revision++}function Ch(n){n.mode!=="home"||n.homePanel==="none"||(n.homePanel="none",n.revision++)}function Zc(n){if(n.mode==="home")return Rh.find(e=>Math.hypot(n.homePosition.x-e.x,n.homePosition.z-e.z)<=rf)}function af(n){if(n.mode!=="home"||n.paused)return;const e=Zc(n);e&&(n.homePanel=e.id,n.message=e.id==="cat"?"Pumpkin purrs.":`${e.name} opened.`,n.revision++)}function cf(n,e,t){if(n.mode!=="home"||n.paused||n.homePanel!=="none"||!Number.isFinite(t)||t<=0)return;const i=Lr(e.turn,-1,1),s=-Lr(e.climb,-1,1),r=Math.hypot(i,s);if(r>0){const o=of*t/Math.max(1,r);n.homePosition.x=Lr(n.homePosition.x+i*o,-Oa,Oa),n.homePosition.z=Lr(n.homePosition.z+s*o,-za,za),n.homeFacing=Math.atan2(i,s)}n.revision++}function lf(n,e){if(n.paused||n.mode!=="home"||n.homePanel!=="brooms"||!df(e))return!1;const t=n.profile.upgrades[e];if(t>=2)return!1;const i=t===0?60:120;return n.profile.coins<i?!1:(n.profile.coins-=i,n.profile.upgrades[e]=t+1,n.message=`${Yc.find(s=>s.id===e).name} upgraded.`,n.revision++,!0)}function uf(n,e){if(n.paused||n.mode!=="home"||n.homePanel!=="decor")return!1;const t=qc.find(i=>i.id===e);return!t||n.profile.furniture.includes(e)||n.profile.coins<t.cost?!1:(n.profile.coins-=t.cost,n.profile.furniture.push(e),n.message=`${t.name} added to the room.`,n.revision++,!0)}function hf(n){return qc.every(e=>n.furniture.includes(e.id))&&Yc.every(e=>n.upgrades[e.id]>=2)}function df(n){return Yc.some(e=>e.id===n)}const nr=230,pt=[-40,-195,40,-155],$i=[[20,-25],[30,-18],[40,-5],[46,12],[50,30],[54,50],[56,70],[60,90],[63,105],[66,120],[70,140],[76,160],[82,180],[88,200],[95,220],[45,220],[40,200],[34,180],[26,160],[16,140],[6,120],[-2,100],[-8,82],[-14,65],[-18,45],[-20,25],[-16,5],[-6,-12],[6,-22]];function an(n,e){let t=!1;for(let i=0,s=$i.length-1;i<$i.length;s=i++){const r=$i[i][0],o=$i[i][1],a=$i[s][0],c=$i[s][1];o>e!=c>e&&n<(a-r)*(e-o)/(c-o)+r&&(t=!t)}return t}const ff=24,pf=8,kl=[[-11,50],[-6,70],[1,90],[49,60],[50,80],[50,120]],mf=[[-11,58],[-6,78],[1,82],[50,68],[50,88],[50,128]],Oi=[[-86.5,-191.5,-60,-163.5],[-60,-191.5,-33.5,-163.5]],Rt=[{id:"home",name:"Bakery Attic",subtitle:"Home — borrowed attic",position:{x:-25,y:30,z:-48},color:"#f9cf68"},{id:"harbor-cafe",name:"Harbor Cafe",subtitle:"Tutorial delivery",position:{x:-80,y:18.12,z:150},color:"#63c7dc"},{id:"market",name:"Sunset Market",subtitle:"Fresh parcels",position:{x:-88,y:33,z:-88},color:"#e88869"},{id:"lighthouse",name:"The Lighthouse",subtitle:"Beacon House",position:{x:130,y:15,z:140},color:"#f4e5b8"},{id:"marina",name:"Marina Works",subtitle:"Dockside roof",position:{x:102,y:20,z:125},color:"#79b9a0"},{id:"observatory",name:"Hill Observatory",subtitle:"East hill pad",position:{x:130,y:53,z:-55},color:"#ad91d1"},{id:"cliffside",name:"Cliffside Books",subtitle:"West avenue",position:{x:-115,y:46,z:-177.5},color:"#db92a7"}],sn=[{min:{x:-37,y:10,z:-60},max:{x:-13,y:28,z:-36},district:"merchant-row"},{min:{x:-94,y:.12,z:136},max:{x:-66,y:16.12,z:164},district:"harbor"},{min:{x:-103,y:10,z:-102},max:{x:-73,y:31,z:-74},district:"old-town"},{min:{x:120,y:0,z:130},max:{x:140,y:13,z:150},district:"lighthouse-headland"},{min:{x:87,y:0,z:110},max:{x:117,y:18,z:140},district:"harbor"},{min:{x:115,y:20,z:-70},max:{x:145,y:51,z:-40},district:"observatory-rise"},{min:{x:-130,y:20,z:-192.5},max:{x:-100,y:44,z:-162.5},district:"bungalow-lanes"},{min:{x:-65,y:0,z:88},max:{x:-45,y:10,z:108},district:"harbor"},{min:{x:-65,y:0,z:38},max:{x:-45,y:12,z:58},district:"harbor"},{min:{x:94,y:0,z:61},max:{x:110,y:10,z:79},district:"harbor"},{min:{x:92,y:0,z:10},max:{x:112,y:12,z:30},district:"harbor"},{min:{x:-50,y:10,z:-98.5},max:{x:-30,y:25,z:-78.5},district:"old-town"},{min:{x:-10,y:10,z:-98.5},max:{x:10,y:25,z:-78.5},district:"old-town"},{min:{x:30,y:10,z:-98.5},max:{x:50,y:26,z:-78.5},district:"old-town"},{min:{x:-50,y:9.19,z:-130.5},max:{x:-30,y:25.19,z:-113.5},district:"old-town"},{min:{x:22.5,y:10,z:-55},max:{x:37.5,y:21,z:-41},district:"merchant-row"},{min:{x:-2.5,y:10,z:-55.5},max:{x:12.5,y:21,z:-40.5},district:"merchant-row"},{min:{x:-80,y:20,z:-187.5},max:{x:-60,y:34,z:-167.5},district:"mansion-hill"},{min:{x:-57.5,y:20,z:-187.5},max:{x:-42.5,y:34,z:-167.5},district:"mansion-hill"},{min:{x:42.5,y:20,z:-185},max:{x:57.5,y:28,z:-170},district:"bungalow-lanes"},{min:{x:60.5,y:20,z:-185},max:{x:75.5,y:27,z:-170},district:"bungalow-lanes"},{min:{x:-122.5,y:19.28,z:-157},max:{x:-107.5,y:27.28,z:-143},district:"bungalow-lanes"},{min:{x:133.5,y:19.26,z:-97.5},max:{x:146.5,y:33.26,z:-82.5},district:"observatory-rise"},{min:{x:-55,y:10,z:-53},max:{x:-45,y:38,z:-43},district:"old-town"},{min:{x:117.5,y:48.5,z:-67.5},max:{x:126.5,y:57,z:-58.5},district:"observatory-rise"},{min:{x:125,y:-.22,z:153},max:{x:135,y:28.78,z:163}}],Dr={harbor:{bodies:[4873579,7043714,6048314,12099704],roofs:[3820117,3095365]},"old-town":{bodies:[13935988,15258808,13219990],roofs:[11951167,4877148]},"merchant-row":{bodies:[11065544,16049320,15247544,15784120],roofs:[9132602,7031338]},"mansion-hill":{bodies:[15790312,10139802],roofs:[3817290]},"bungalow-lanes":{bodies:[8034923,9136970,11033674],roofs:[6048314,4865845]},"observatory-rise":{bodies:[9079442],roofs:[6064762,2767452]},"lighthouse-headland":{bodies:[15266024],roofs:[13948116]}},Hl=sn.length-1,Gl=sn.length-3,Vl=sn.length-2,gf=[{min:{x:15,y:0,z:168},max:{x:100,y:100,z:172}}];function xf(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const _f=.5*(Math.sqrt(3)-1),ks=(3-Math.sqrt(3))/6;class Ph{constructor(e){fe(this,"perm");const t=xf(e),i=new Uint8Array(256);for(let s=0;s<256;s++)i[s]=s;for(let s=255;s>0;s--){const r=Math.floor(t()*(s+1));[i[s],i[r]]=[i[r],i[s]]}this.perm=new Uint8Array(512);for(let s=0;s<512;s++)this.perm[s]=i[s&255]}noise(e,t){const i=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];let s=0,r=0,o=0;const a=(e+t)*_f,c=Math.floor(e+a),l=Math.floor(t+a),u=(c+l)*ks,d=e-(c-u),h=t-(l-u);let f,g;d>h?(f=1,g=0):(f=0,g=1);const _=d-f+ks,m=h-g+ks,p=d-1+2*ks,S=h-1+2*ks,y=c&255,v=l&255;let b=.5-d*d-h*h;if(b>=0){b*=b;const x=i[this.perm[y+this.perm[v]]&7];s=b*b*(x[0]*d+x[1]*h)}let w=.5-_*_-m*m;if(w>=0){w*=w;const x=i[this.perm[y+f+this.perm[v+g]]&7];r=w*w*(x[0]*_+x[1]*m)}let A=.5-p*p-S*S;if(A>=0){A*=A;const x=i[this.perm[y+1+this.perm[v+1]]&7];o=A*A*(x[0]*p+x[1]*S)}return 70*(s+r+o)}}const Lh=1337,vf=new Ph(Lh),ka=new Ph(Lh+1);function Dh(n,e,t=5){let i=0,s=.5,r=1;for(let o=0;o<t;o++)i+=s*vf.noise(n*r,e*r),s*=.5,r*=2;return i}function Mf(n,e,t,i){const s=ka.noise(n*t+5.2,e*t+1.3),r=ka.noise(n*t+1.7,e*t+9.1);return[n+s*i,e+r*i]}function Cn(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}const $c=[{name:"waterfront",y:0,rects:[[-95,-15,5,175],[50,-35,150,175]]},{name:"midtown",y:10,rects:[[-115,-135,75,-15]]},{name:"upper",y:20,rects:[[-135,-215,135,-135],[55,-135,155,-35]]}];function Ii(n,e){const t=175+ka.noise(n*.01+3.7,8.2)*35,i=Cn(t-15,t+45,e);let s=0;an(n,e)?s=e<t+25?1:0:(an(n+6,e)||an(n-6,e)||an(n,e+6)||an(n,e-6))&&e<t+20&&(s=.45);const[r,o]=Mf(n,e,.015,18),a=(Dh(r*.02,o*.02)*.5+.5)*8,c=Math.hypot(n,e),l=Cn(145,175,c),u=a*l*(1-s);let d=0,h=0;for(const p of $c)for(const[S,y,v,b]of p.rects){const w=Cn(S-20,S+20,n)*(1-Cn(v-20,v+20,n)),A=Cn(y-20,y+20,e)*(1-Cn(b-20,b+20,e)),x=w*A;x>h&&(h=x,d=p.y)}const f=s<.5&&i<.5?1:0,g=d*h+u*(1-h),_=u*(1-f)+g*f,m=Math.min(s*-3.5,i*-12);return{h:_+m,bayT:s,oceanT:i,tierCover:h}}function Tt(n,e){return Ii(n,e).h}const yf=[.918,.851,.659],Sf=[.498,.682,.431],Wl=[.541,.498,.447],bf=[.72,.68,.52];function Ir(n,e,t){return[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t]}function Xl(n,e){const{h:t,bayT:i,oceanT:s,tierCover:r}=Ii(n,e);if(t<.2||t>4.5&&r<.5||i>0||s>.05)return!1;const o=1.5,a=(Ii(n+o,e).h-Ii(n-o,e).h)/(2*o),c=(Ii(n,e+o).h-Ii(n,e-o).h)/(2*o);return!(Math.hypot(a,c)>.5)}function wf(n){const e=new Float32Array(n*n),t=new Float32Array(n*n),i=new Float32Array(n*n),s=new Float32Array(n*n),r=440/(n-1);for(let a=0;a<n;a++)for(let c=0;c<n;c++){const l=(c/(n-1)-.5)*440,u=(.5-a/(n-1))*440,d=Ii(l,u),h=a*n+c;e[h]=d.h,t[h]=d.bayT,i[h]=d.oceanT,s[h]=d.tierCover}const o=new Uint8ClampedArray(n*n*4);for(let a=0;a<n;a++)for(let c=0;c<n;c++){const l=a*n+c,u=(c/(n-1)-.5)*440,d=(.5-a/(n-1))*440,h=Math.max(1,Math.round(1.5/r)),f=e[a*n+Math.max(c-h,0)],g=e[a*n+Math.min(c+h,n-1)],_=e[Math.max(a-h,0)*n+c],m=e[Math.min(a+h,n-1)*n+c],p=Math.hypot((g-f)/(2*h*r),(m-_)/(2*h*r)),[S,y,v]=Ef(e[l],t[l],i[l],p,u,d,s[l]),b=l*4;o[b]=S,o[b+1]=y,o[b+2]=v,o[b+3]=255}return o}function Ef(n,e,t,i,s,r,o){const a=Math.max(e,Cn(.02,.25,t));let c=Ir(Sf,Wl,Cn(3,5.5,n)*(1-o));c=Ir(c,yf,a*Cn(-1.5,-.3,n));const l=Cn(-.8,-1.6,n);c=Ir(c,bf,l);const u=Cn(.45,.75,i);u>0&&(c=Ir(c,Wl,u));const d=1+Dh(s*.08+11.3,r*.08+7.9,3)*.07;return[Math.round(c[0]*d*255),Math.round(c[1]*d*255),Math.round(c[2]*d*255)]}const Oe=(n,e,t,i)=>({id:n,x:e,z:t,y:i}),Ih=[Oe("ww1",-75,10),Oe("ww2",-75,70),Oe("ww3",-75,130),Oe("ww1b",-35,10),Oe("ww2b",-35,70),Oe("ww3b",-35,130),Oe("we1",85,-10),Oe("we2",85,50),Oe("we3",85,110),Oe("we1b",120,-10),Oe("we2b",120,50),Oe("bl-w",-8,100,6),Oe("bl-e",68,100,6),Oe("sw1",-75,-8),Oe("sw2",-95,-25),Oe("sw3",-65,-42),Oe("sw4",-90,-58),Oe("se1",85,-28),Oe("se2",105,-45),Oe("se3",75,-60),Oe("se4",95,-75),Oe("m1",-60,-72),Oe("m2",-20,-72),Oe("m3",20,-72),Oe("m4",60,-72),Oe("m5",-60,-105),Oe("m6",-20,-105),Oe("m7",20,-105),Oe("m8",60,-105),Oe("uc1",20,-120),Oe("uc2",-5,-135),Oe("uc3",15,-150),Oe("u1",-90,-160),Oe("u2",-30,-160),Oe("u3",30,-160),Oe("u4",90,-160),Oe("u5",90,-195),Oe("u6",30,-195),Oe("u7",-30,-195),Oe("u8",-90,-195),Oe("ob1",95,-100),Oe("ob2",110,-70),Oe("mn1",-100,-25),Oe("mn2",-68,-25),Oe("mn3",-20,-25),Oe("mn4",20,-25),Oe("mn5",60,-25),Oe("ms1",-100,-120),Oe("ms2",-60,-120),Oe("ms3",-20,-120),Oe("ms5",60,-120),Oe("ue1",100,-160),Oe("ue2",100,-195),Oe("ui5",130,-160),Oe("ob3",125,-100),Oe("wx1",-15,10),Oe("wx2",-15,70),Oe("wx3",-15,130),Oe("ex1",65,-10),Oe("ex2",65,50),Oe("ex3",65,110)],Se=(n,e,t="street",i)=>({a:n,b:e,kind:t,deckY:i}),_n=[Se("ww1","ww2"),Se("ww2","ww3"),Se("ww1b","ww2b"),Se("ww2b","ww3b"),Se("ww1","ww1b"),Se("ww2","ww2b"),Se("ww3","ww3b"),Se("we1","we2"),Se("we2","we3"),Se("we1b","we2b"),Se("we1","we1b"),Se("we2","we2b"),Se("wx3","bl-w"),Se("bl-w","bl-e","bridge",6),Se("bl-e","we3"),Se("ww1","sw1","switchback"),Se("sw1","sw2","switchback"),Se("sw2","sw3","switchback"),Se("sw3","sw4","switchback"),Se("sw4","m1","switchback"),Se("we1","se1","switchback"),Se("se1","se2","switchback"),Se("se2","se3","switchback"),Se("se3","se4","switchback"),Se("se4","m4","switchback"),Se("m1","m2"),Se("m2","m3"),Se("m3","m4"),Se("m5","m6"),Se("m6","m7"),Se("m7","m8"),Se("m1","m5"),Se("m2","m6"),Se("m3","m7"),Se("m4","m8"),Se("m3","uc1","switchback"),Se("uc1","uc2","switchback"),Se("uc2","uc3","switchback"),Se("uc3","u3","switchback"),Se("se4","ob1"),Se("ob1","ob2"),Se("mn1","mn2"),Se("mn2","mn3"),Se("mn3","mn4"),Se("mn4","mn5"),Se("mn5","se1"),Se("mn5","m4"),Se("ms1","ms2"),Se("ms3","uc1"),Se("uc1","ms5"),Se("ms2","m5"),Se("uc1","m7"),Se("u1","u2"),Se("u2","u3"),Se("u3","u4"),Se("u4","u5"),Se("u5","u6"),Se("u6","u7"),Se("u7","u8"),Se("u8","u1"),Se("u4","ue1"),Se("ue1","ue2"),Se("ue2","u5"),Se("u4","ui5"),Se("ob1","ob3"),Se("wx1","wx2"),Se("wx2","wx3"),Se("ww1b","wx1"),Se("ww2b","wx2"),Se("ww3b","wx3"),Se("ex1","ex2"),Se("ex2","ex3"),Se("we1","ex1"),Se("we2","ex2"),Se("we3","ex3")];_n.filter(n=>n.kind==="bridge").map(n=>[n.a,n.b]);function jt(n){const e=Ih.find(t=>t.id===n);if(!e)throw new Error(`unknown road node ${n}`);return e}function Rs(n){return{x:n.x,y:n.y??Tt(n.x,n.z),z:n.z}}function Tf(){const n=new Map;for(const e of Ih)n.set(e.id,[]);for(const e of _n)n.get(e.a).push(e.b),n.get(e.b).push(e.a);return n}const Af=1836670420,Rf=110,ar=32,Cf=.07;function mn(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Pf(n){const e=mn(n),t=[];for(let i=0;i<Rf;i++){const s=e()*Cf,r=e()*ar,o=e()*ar;t.push({x:r,y:o,alpha:s})}return t}const Lf=20260927,ql=5;function wo(n,e,t,i){const s=n+t/2,r=e+i/2,o=[Tt(n,e),Tt(n+t,e),Tt(n,e+i),Tt(n+t,e+i),Tt(s,r)],a=Math.min(...o);return a<Ha?null:{minH:a,maxH:Math.max(...o)}}const Yl={harbor:{w:[9,16],d:[8,14],floors:[1,2],bayWindow:!1,palettes:[0]},"old-town":{w:[8,14],d:[8,12],floors:[2,4],bayWindow:!0,palettes:[0]},"merchant-row":{w:[8,14],d:[8,12],floors:[2,3],bayWindow:!0,palettes:[0]},"bungalow-lanes":{w:[8,12],d:[8,12],floors:[1,1],bayWindow:!1,palettes:[1,2,3,4]}},Ha=-.4,Df=2.8,If=.7,Zn=Df+If,Nr=2,Ki=275,Zl=3.4;function di(n,e,t,i,s,r,o,a){return n<o&&t>s&&e<a&&i>r}function ir(n,e,t,i,s,r,o,a){const c=t-n,l=i-e,u=o-s,d=a-r,h=c*d-l*u;if(Math.abs(h)<1e-9)return!1;const f=((s-n)*d-(r-e)*u)/h,g=((s-n)*l-(r-e)*c)/h;return f>=0&&f<=1&&g>=0&&g<=1}function $l(n,e,t,i,s,r,o,a){return n>=s&&n<=o&&e>=r&&e<=a||t>=s&&t<=o&&i>=r&&i<=a?!0:ir(n,e,t,i,s,r,o,r)||ir(n,e,t,i,o,r,o,a)||ir(n,e,t,i,o,a,s,a)||ir(n,e,t,i,s,a,s,r)}function Ko(n,e,t,i,s,r){const o=s-t,a=r-i,c=o*o+a*a,l=c>0?Math.max(0,Math.min(1,((n-t)*o+(e-i)*a)/c)):0,u=t+o*l-n,d=i+a*l-e;return u*u+d*d}function Nf(n,e,t,i,s,r,o,a){const c=[[s,r,o,r],[o,r,o,a],[o,a,s,a],[s,a,s,r]];if(n>=s&&n<=o&&e>=r&&e<=a||t>=s&&t<=o&&i>=r&&i<=a)return 0;for(const[u,d,h,f]of c)if(ir(n,e,t,i,u,d,h,f))return 0;let l=1/0;for(const[u,d]of[[s,r],[o,r],[o,a],[s,a]])l=Math.min(l,Ko(u,d,n,e,t,i));for(const[u,d,h,f]of c)l=Math.min(l,Ko(n,e,u,d,h,f)),l=Math.min(l,Ko(t,i,u,d,h,f));return Math.sqrt(l)}function Kl(n,e){for(const t of $c)for(const[i,s,r,o]of t.rects)if(n>=i&&n<r&&e>=s&&e<o)return t}function Jl(n,e,t,i,s,r,o){const a=Math.max(i,Math.min(n,r)),c=Math.max(s,Math.min(e,o)),l=n-a,u=e-c;return l*l+u*u<t*t}function Ga(){const n=mn(Lf),e=[],t=sn.map(u=>({x0:u.min.x-Nr,z0:u.min.z-Nr,x1:u.max.x+Nr,z1:u.max.z+Nr})),i=sn[3],s=(i.min.x+i.max.x)/2,r=(i.min.z+i.max.z)/2,o=26,a=_n.filter(u=>u.kind!=="bridge").map(u=>{const d=jt(u.a),h=jt(u.b);return{x0:d.x,z0:d.z,x1:h.x,z1:h.z}});let c=0;for(const u of _n){if(u.kind==="bridge")continue;const d=jt(u.a),h=jt(u.b),f=h.x-d.x,g=h.z-d.z,_=Math.hypot(f,g);if(_<10)continue;const m=f/_,p=g/_,S=-p,y=m;let v=5;for(;v<_-5&&e.length<Ki;){const b=d.x+m*v,w=d.z+p*v,A=Kl(b,w);if(!A){v+=6;continue}const x=A.name==="waterfront"?"harbor":A.name==="midtown"?"midtown-mix":"bungalow-lanes",E=x==="midtown-mix"?c%2===0?"old-town":"merchant-row":x,R=Yl[E],P=R.w[0]+n()*(R.w[1]-R.w[0]),D=R.d[0]+n()*(R.d[1]-R.d[0]),F=R.floors[0]+Math.floor(n()*(R.floors[1]-R.floors[0]+1)),B=R.palettes[Math.floor(n()*R.palettes.length)],N=n()<.5?1:-1,O=(P*Math.abs(m)+D*Math.abs(p))/2,I=(P*Math.abs(S)+D*Math.abs(y))/2;for(const G of[N,-N]){if(e.length>=Ki)break;let q=!1;for(const te of[.5,2.5,4.5,6.5,8.5]){if(q||e.length>=Ki)break;const Z=Zn+I+te,le=b+S*G*Z,Ne=w+y*G*Z,De=le-P/2,Ae=Ne-D/2;if(!Kl(le,Ne)||Tt(le,Ne)<Ha||an(De,Ae)||an(De+P,Ae)||an(De,Ae+D)||an(De+P,Ae+D))continue;const $=wo(De,Ae,P,D);if(!$||$.maxH-$.minH>ql||di(De,Ae,De+P,Ae+D,pt[0],pt[1],pt[2],pt[3])||Oi.some(pe=>di(De,Ae,De+P,Ae+D,pe[0],pe[1],pe[2],pe[3]))||Jl(s,r,o,De,Ae,De+P,Ae+D)||t.some(pe=>di(De,Ae,De+P,Ae+D,pe.x0,pe.z0,pe.x1,pe.z1))||e.some(pe=>di(De,Ae,De+P,Ae+D,pe.x,pe.z,pe.x+pe.w,pe.z+pe.d)))continue;const he=De-Zn,oe=Ae-Zn,Ie=De+P+Zn,ke=Ae+D+Zn;a.some(pe=>$l(pe.x0,pe.z0,pe.x1,pe.z1,he,oe,Ie,ke))||(x==="midtown-mix"&&c++,e.push({x:De,z:Ae,w:P,d:D,h:F*Zl,floors:F,district:E,bayWindow:R.bayWindow,palette:B}),q=!0)}}v+=2*O+2}}const l=4;for(const u of $c)for(const[d,h,f,g]of u.rects){const _=u.name==="waterfront"?"harbor":u.name==="midtown"?"midtown-mix":"bungalow-lanes";for(let m=d+l/2;m<f&&e.length<Ki;m+=l)for(let p=h+l/2;p<g&&e.length<Ki;p+=l)for(let S=0;S<9&&e.length<Ki;S++){const y=(n()-.5)*l*.9,v=(n()-.5)*l*.9,b=_==="midtown-mix"?c%2===0?"old-town":"merchant-row":_,w=Yl[b],A=w.w[0]+n()*(w.w[1]-w.w[0]),x=w.d[0]+n()*(w.d[1]-w.d[0]),E=w.floors[0]+Math.floor(n()*(w.floors[1]-w.floors[0]+1)),R=w.palettes[Math.floor(n()*w.palettes.length)],P=m+y,D=p+v,F=P-A/2,B=D-x/2;let N=!1;for(const Z of a)if(Nf(Z.x0,Z.z0,Z.x1,Z.z1,F,B,F+A,B+x)<=15){N=!0;break}if(!N||Tt(P,D)<Ha||an(F,B)||an(F+A,B)||an(F,B+x)||an(F+A,B+x))continue;const O=wo(F,B,A,x);if(!O||O.maxH-O.minH>ql||di(F,B,F+A,B+x,pt[0],pt[1],pt[2],pt[3])||Oi.some(Z=>di(F,B,F+A,B+x,Z[0],Z[1],Z[2],Z[3]))||Jl(s,r,o,F,B,F+A,B+x)||t.some(Z=>di(F,B,F+A,B+x,Z.x0,Z.z0,Z.x1,Z.z1))||e.some(Z=>di(F,B,F+A,B+x,Z.x,Z.z,Z.x+Z.w,Z.z+Z.d)))continue;const I=F-Zn,G=B-Zn,q=F+A+Zn,te=B+x+Zn;a.some(Z=>$l(Z.x0,Z.z0,Z.x1,Z.z1,I,G,q,te))||(_==="midtown-mix"&&c++,e.push({x:F,z:B,w:A,d:x,h:E*Zl,floors:E,district:b,bayWindow:w.bayWindow,palette:R}))}}return e}function Nh(n){return n.map(e=>{const t=wo(e.x,e.z,e.w,e.d),i=t?t.maxH:Tt(e.x+e.w/2,e.z+e.d/2);return{min:{x:e.x,y:i,z:e.z},max:{x:e.x+e.w,y:i+e.h,z:e.z+e.d},district:e.district}})}const qt=1,Uf=3,Ff=100,Of=18,zf=2.2,Bf=7,kf=12,Hf=Nh(Ga()),Uh=[...sn,...Hf,...gf],Gf=5,Vf=.5,ei=480,Wf=3.5,Fh=.9,Oh=.45,Xf=3.5,qf=1.5,Yf=3,Zf=.8,Ql=.2,$f=3,Kf=8,Jf=2,zh=6;function Qf(n,e){return Math.max(zh,Gf+Vf*n)*(1+e*.2)}const jl=2,jf=20,ep=.05,Bh=.5,kh=3.6,Bn=(n,e,t)=>Math.max(e,Math.min(t,n)),Va=n=>{const e=Bn(n,0,1);return e*e*(3-2*e)},eu=45;function tp(n,e){const t=Math.hypot(n.x,n.z),i=nr-qt-eu;if(t<=i)return;const s=Va((t-i)/eu),r=n.x/t,o=n.z/t,a=e.x*r+e.z*o;if(a<=0)return;const c=a*(1-s);e.x+=r*(c-a),e.z+=o*(c-a)}const np=n=>Math.hypot(n.x,n.y,n.z);function Kc(n=Rt[0].position){return{position:{...n},yaw:0,pitch:0,speed:9,throttle:9,hover:!1,velocity:{x:0,y:0,z:-9},brakeHold:!1}}function Jc(){return{mode:"title",player:Kc(),profile:{coins:0,upgrades:{speed:0,handling:0,braking:0},furniture:[],tutorialDone:!1,runs:0,deliveries:0},run:null,paused:!1,pauseReason:"",message:"",tutorialStage:0,drop:null,descent:null,haloFade:0,homePosition:{x:0,z:3},homeFacing:0,homePanel:"none",summary:null,revision:0,coarsePointer:!1}}function ip(n){n.mode="tutorial",n.paused=!1,n.pauseReason="",n.player=Kc(),n.tutorialStage=0,n.drop=null,n.descent=null,n.haloFade=0,n.message="Steer toward the glowing Harbor Cafe pad.",n.revision++}function sp(n){n.paused||n.mode!=="tutorial"&&n.mode!=="flight"||(n.player.hover=!n.player.hover,n.revision++)}function Hh(n,e,t=""){n.paused=e,n.pauseReason=e?t:"",n.revision++}function mr(n){const e=n.player;if(!(e.speed>=Wf))return Rt.find(t=>{const i=e.position.x-t.position.x,s=e.position.z-t.position.z;return Math.hypot(i,s)<=kh&&e.position.y>=t.position.y})}function Gh(n){var t;if(n.paused)return;if(n.mode==="home"){af(n);return}if(n.drop||n.descent||n.haloFade>0)return;if(n.mode==="tutorial"){if(((t=mr(n))==null?void 0:t.id)!=="harbor-cafe")return;Wa(n,Rt.find(i=>i.id==="harbor-cafe"));return}if(n.mode!=="flight"||!n.run)return;if(n.run.elapsed>=ei){gr(n,!1);return}const e=mr(n);e&&Wa(n,e)}function rp(n,e){n.player.brakeHold=!1,n.haloFade=0,n.drop={stopId:e.id,t:0,parcel:e.id!=="home"},Vh(n),n.message=e.id==="home"?"Banking your earnings…":"Parcel away!",n.revision++}function Vh(n){n.player.speed=0,n.player.hover=!0,n.player.velocity={x:0,y:0,z:0}}function op(n,e){var s;if(n.player.hover=!1,n.player.throttle=0,n.mode==="tutorial"){n.profile.tutorialDone=!0,n.message="Practice complete",n.mode="title",n.tutorialStage=3,n.revision++;return}const t=n.run;if(!t||t.elapsed>=ei){gr(n,!1);return}const i=Rt.find(r=>r.id===e);if(i){if(i.id==="home"){const r=t.earnings,o=t.deliveries;gr(n,!0),n.summary=null,Ba(n),n.message=`Shift complete — banked ${r} coins after ${o} ${o===1?"delivery":"deliveries"}.`;return}((s=t.job)==null?void 0:s.to)===i.id&&(t.earnings+=t.job.payout,t.deliveries++,n.profile.deliveries++,t.job=null,t.lastStop=i.id,t.offers=Xh(t.seed,t.deliveries,i.id),t.returning=!1,n.mode="offers",n.message="Delivered! Choose the next parcel or return home.",n.revision++)}}function ap(n,e=Date.now()){if(n.paused||n.run||n.mode!=="title"&&n.mode!=="summary"&&n.mode!=="home")return;const t=Number.isFinite(e)?Math.floor(e):Date.now();n.player=Kc(),n.run={seed:t,elapsed:0,earnings:0,deliveries:0,job:null,offers:Xh(t,0,"home"),returning:!1,lastStop:"home"},n.summary=null,n.homePanel="none",n.drop=null,n.descent=null,n.haloFade=0,n.mode="offers",n.message="Choose your first delivery of the day.",n.revision++}function cp(n,e){if(n.paused||n.mode!=="offers"||!n.run||!Number.isInteger(e))return;const t=n.run.offers[e];t&&(n.run.job=t,n.run.offers=[],n.run.returning=!1,n.mode="flight",n.message=`Delivery: ${hp(t.to)}.`,n.revision++)}function lp(n){n.paused||n.mode!=="offers"||!n.run||n.run.deliveries===0||(n.run.job=null,n.run.offers=[],n.run.returning=!0,n.mode="flight",n.message="Return to Meg's Rooftop to bank your earnings.",n.revision++)}function gr(n,e){const t=n.run;if(!t)return;n.drop=null,n.descent=null,n.haloFade=0;const i=e?t.earnings:0;n.summary={success:e,earnings:i,deliveries:t.deliveries},e&&(n.profile.coins+=i),n.profile.runs++,n.run=null,n.mode="summary",n.player.speed=0,n.player.throttle=0,n.player.hover=!0,n.player.velocity={x:0,y:0,z:0},n.message=e?"Shift complete. Earnings banked!":"Rescue called. Unbanked earnings were lost.",n.revision++}function Wh(n){if(n.mode==="tutorial")return Rt.find(e=>e.id==="harbor-cafe");if(n.run)return Rt.find(e=>{var t;return e.id===(n.run.returning?"home":(t=n.run.job)==null?void 0:t.to)})}function up(n,e,t){return(Math.atan2(e.x-n.x,-(e.z-n.z))-t)*180/Math.PI}function hp(n){var e;return((e=Rt.find(t=>t.id===n))==null?void 0:e.name)??n}function ko(n){if(!(n.drop||n.descent)&&!(n.mode!=="tutorial"&&n.mode!=="flight"))return Wh(n)}function Hs(n){let e=n|0;return e=Math.imul(e^e>>>16,73244475),e=Math.imul(e^e>>>16,73244475),(e^e>>>16)>>>0}function Xh(n,e,t){let i=Hs(n^Hs(e)^Hs(t.length));const s=Rt.find(l=>l.id===t),r=Rt.filter(l=>l.id!=="home"&&l.id!==t).map(l=>({stop:l,distance:Math.hypot(l.position.x-s.position.x,l.position.z-s.position.z)})).sort((l,u)=>l.distance-u.distance);i=Hs(i+1);const o=r[i%Math.min(3,r.length)],a=r.slice(-Math.min(3,r.length));i=Hs(i+2);const c=a[i%a.length];return[o,c].sort((l,u)=>l.distance-u.distance).map(({stop:l,distance:u},d)=>{const h=u<100?20:u<180?35:50;return{from:t,to:l.id,payout:h,label:d===0?"Short hop":"Long haul",parcel:"Delivery parcel"}})}function dp(n,e){let t;for(const i of Uh){const s={x:i.min.x-qt,y:i.min.y-qt,z:i.min.z-qt},r={x:i.max.x+qt,y:i.max.y+qt,z:i.max.z+qt};let o=-1e-9,a=1,c={x:0,y:0,z:0};for(const l of["x","y","z"]){const u=n[l],d=e[l];if(Math.abs(d)<1e-9){if(u<s[l]||u>r[l]){o=2;break}continue}const h=(s[l]-u)/d,f=(r[l]-u)/d,g=Math.min(h,f),_=Math.max(h,f);if(g>o&&(o=g,c={x:0,y:0,z:0},c[l]=h<f?-1:1),a=Math.min(a,_),o>a)break}o>=0&&o<=1&&o<=a&&(!t||o<t.t)&&(t={t:o,normal:c})}return t}function qh(n,e){var t;return n.mode==="tutorial"?e.id==="harbor-cafe":n.mode!=="flight"||!n.run?!1:e.id==="home"?n.run.returning&&!n.run.job:((t=n.run.job)==null?void 0:t.to)===e.id}function fp(n){if(n.drop||n.descent||n.haloFade>0||n.mode!=="tutorial"&&n.mode!=="flight"||Math.abs(n.player.speed)>Bh)return;const e=ko(n),t=e?mr(n):void 0;!t||t.id!==e.id||!qh(n,t)||(n.haloFade=Oh)}function pp(n){const e=ko(n),t=e?mr(n):void 0;!t||t.id!==e.id||!qh(n,t)||Math.abs(n.player.speed)>Bh||Wa(n,t)}function Wa(n,e){const t=n.player.position.x-e.position.x,i=n.player.position.z-e.position.z,s=Math.hypot(t,i),r=Math.atan2(i,t),o=Math.atan2(-Math.sin(r),-Math.cos(r)),a=Math.abs(Math.atan2(Math.sin(o-n.player.yaw),Math.cos(o-n.player.yaw)));n.descent={stopId:e.id,startY:n.player.position.y,angle:r,radius0:s,orbitR:Math.max(s,Yf),dir:a<=Math.PI/2?1:-1,t:0},n.player.brakeHold=!1,Vh(n),n.message="Descending…",n.revision++}function mp(n,e,t){if(n.mode==="home"){cf(n,e,t);return}if(n.paused||n.mode!=="tutorial"&&n.mode!=="flight"&&n.mode!=="offers"||!Number.isFinite(t)||t<=0)return;if(n.drop){if(n.mode!=="flight"&&n.mode!=="tutorial")n.drop=null;else{if(n.drop.t+=Math.max(0,t),n.drop.t>=Fh){const x=n.drop.stopId;n.drop=null,op(n,x)}n.revision++}return}const i=Math.max(0,t);if(n.haloFade>0&&(n.haloFade=Math.max(0,n.haloFade-i),n.haloFade===0&&pp(n),n.revision++,n.haloFade>0||n.drop||n.descent))return;if(n.descent){const x=Rt.find(E=>E.id===n.descent.stopId);if(n.mode!=="flight"&&n.mode!=="tutorial"||!x)n.descent=null,n.player.hover=!1;else{const E=x.position.y+Xf;if(n.player.position.y-E<=.05)n.descent=null,rp(n,x);else{const R=n.descent,P=n.player.position.x,D=n.player.position.z,F=Math.min(Kf,Math.max(Jf,(n.player.position.y-E)*1.5));n.player.position.y=Math.max(E,n.player.position.y-F*i),R.t+=i,R.angle+=R.dir*qf*i;const B=R.radius0+(R.orbitR-R.radius0)*Va(R.t/Zf),N=Math.max(0,(n.player.position.y-E)/Math.max(.001,R.startY-E)),O=N>=Ql?1:Va(N/Ql),I=B*O,G=x.position.x+Math.cos(R.angle)*I,q=x.position.z+Math.sin(R.angle)*I,te=G-P,Z=q-D;if(Math.hypot(te,Z)>.75*i){const le=Math.atan2(te,-Z),Ne=Math.atan2(Math.sin(le-n.player.yaw),Math.cos(le-n.player.yaw)),De=$f*i;n.player.yaw+=Math.max(-De,Math.min(De,Ne))}n.player.position.x=G,n.player.position.z=q,n.revision++}}return}if(n.run&&(n.mode==="flight"||n.mode==="offers")){if(n.run.elapsed>=ei-1e-9){n.run.elapsed=ei,gr(n,!1);return}const x=n.run.elapsed;if(n.run.elapsed=Math.min(ei,x+i),n.run.elapsed>=ei-1e-9){n.run.elapsed=ei,gr(n,!1);return}if(gp(n,x),n.mode==="offers"){n.revision++;return}}const s=n.player,r=Bn(e.turn,-1,1),o=Bn(e.climb,-1,1),a=Of*(1+n.profile.upgrades.speed*.1),c=zf*(1+n.profile.upgrades.handling*.2),l=Qf(s.speed,n.profile.upgrades.braking);s.yaw+=r*c*i,s.pitch+=(o*.38-s.pitch)*Math.min(1,7*i),e.cutThrottle&&(s.throttle=0),s.throttle=Bn(s.throttle+Bn(e.throttle,-1,1)*Bf*i,0,a);let u,d=1/0;const h=s.hover?void 0:ko(n);if(h){const x=h.position.x-s.position.x,E=h.position.z-s.position.z;d=Math.hypot(x,E),d<jl?(u=0,s.brakeHold=!0):s.brakeHold&&d<jf?u=0:d>1e-6&&(s.velocity.x*x+s.velocity.z*E)/d>.5&&(u=Math.sqrt(2*zh*d)),u===void 0&&(s.brakeHold=!1)}else s.brakeHold=!1;const f=s.throttle>ep?s.throttle:s.speed,g=s.hover?0:u===void 0?s.throttle:Math.min(u,f);s.speed=Bn(s.speed+Bn(g-s.speed,-l*i,kf*i),0,a),Math.abs(s.speed)<.01&&(s.speed=0),s.brakeHold&&s.speed===0&&(s.brakeHold=!1,d>=jl&&(s.throttle=0));const _={x:Math.sin(s.yaw),z:-Math.cos(s.yaw)},m=s.hover?0:o*Math.max(s.speed,3)*.7,p={x:_.x*s.speed*i,y:m*i,z:_.z*s.speed*i};tp(s.position,p);const S=s.position.x,y=s.position.y,v=s.position.z;let b={...p};for(let x=0;x<3;x++){const E=dp(s.position,b);if(!E){s.position.x+=b.x,s.position.y+=b.y,s.position.z+=b.z;break}if(!(E.normal.x||E.normal.y||E.normal.z))break;const R=Math.max(0,E.t-1e-4);s.position.x+=b.x*R,s.position.y+=b.y*R,s.position.z+=b.z*R;const P=1-R;if(b={x:E.normal.x?0:b.x*P,y:E.normal.y?0:b.y*P,z:E.normal.z?0:b.z*P},!b.x&&!b.y&&!b.z)break}for(let x=0;x<4;x++){let E=!1;for(const R of Uh){const P=R.min.x-qt,D=R.max.x+qt,F=R.min.y-qt,B=R.max.y+qt,N=R.min.z-qt,O=R.max.z+qt,I=s.position;if(I.x<=P||I.x>=D||I.y<=F||I.y>=B||I.z<=N||I.z>=O)continue;const G=I.x-P,q=D-I.x,te=I.y-F,Z=B-I.y,le=I.z-N,Ne=O-I.z,De=Math.min(G,q,te,Z,le,Ne),Ae=.02;De===G?I.x=P-Ae:De===q?I.x=D+Ae:De===te?I.y=F-Ae:De===Z?I.y=B+Ae:De===le?I.z=N-Ae:I.z=O+Ae,E=!0}if(!E)break}s.position.x=Bn(s.position.x,-nr+qt,nr-qt);const w=Math.max(Tt(s.position.x,s.position.z),0)+Uf;s.position.y=Bn(s.position.y,w,Ff),s.position.z=Bn(s.position.z,-nr+qt,nr-qt),s.velocity={x:(s.position.x-S)/i,y:(s.position.y-y)/i,z:(s.position.z-v)/i};const A=np({x:s.position.x-S,y:s.position.y-y,z:s.position.z-v});n.mode==="tutorial"&&n.tutorialStage===0&&A>.1?(n.tutorialStage=1,n.message=n.coarsePointer?"Release the stick to slow down and hover.":"Press Space to slow down and hover."):n.mode==="tutorial"&&n.tutorialStage===1&&Math.abs(s.speed)<.5&&(n.tutorialStage=2,n.message="Nice and steady. Drift over the glowing Harbor Cafe pad — the parcel drops itself."),fp(n),n.revision++}function gp(n,e){const t=ei-n.run.elapsed,i=ei-e;i>30&&t<=30?n.message="30 seconds left — return home before nightfall!":i>60&&t<=60?n.message="One minute left — Meg needs to head home.":i>120&&t<=120&&(n.message="Two minutes left — finish up before nightfall.")}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qc="185",xp=0,tu=1,_p=2,mo=1,vp=2,sr=3,wi=0,rn=1,Wt=2,ri=0,Ss=1,Xa=2,nu=3,iu=4,Mp=5,Ni=100,yp=101,Sp=102,bp=103,wp=104,Ep=200,Tp=201,Ap=202,Rp=203,qa=204,Ya=205,Cp=206,Pp=207,Lp=208,Dp=209,Ip=210,Np=211,Up=212,Fp=213,Op=214,Za=0,$a=1,Ka=2,Cs=3,Ja=4,Qa=5,ja=6,ec=7,Yh=0,zp=1,Bp=2,Vn=0,Zh=1,$h=2,Kh=3,jc=4,Jh=5,Qh=6,jh=7,ed=300,Hi=301,Ps=302,Jo=303,Qo=304,Ho=306,Eo=1e3,ni=1001,tc=1002,Xt=1003,kp=1004,Ur=1005,en=1006,jo=1007,zi=1008,xn=1009,td=1010,nd=1011,xr=1012,el=1013,qn=1014,Dn=1015,ai=1016,tl=1017,nl=1018,_r=1020,id=35902,sd=35899,rd=1021,od=1022,In=1023,ci=1026,Bi=1027,il=1028,sl=1029,Gi=1030,rl=1031,ol=1033,go=33776,xo=33777,_o=33778,vo=33779,nc=35840,ic=35841,sc=35842,rc=35843,oc=36196,ac=37492,cc=37496,lc=37488,uc=37489,To=37490,hc=37491,dc=37808,fc=37809,pc=37810,mc=37811,gc=37812,xc=37813,_c=37814,vc=37815,Mc=37816,yc=37817,Sc=37818,bc=37819,wc=37820,Ec=37821,Tc=36492,Ac=36494,Rc=36495,Cc=36283,Pc=36284,Ao=36285,Lc=36286,Hp=3200,Dc=0,Gp=1,yi="",Yt="srgb",Ro="srgb-linear",Co="linear",mt="srgb",Ji=7680,su=519,Vp=512,Wp=513,Xp=514,al=515,qp=516,Yp=517,cl=518,Zp=519,Ic=35044,ru="300 es",Gn=2e3,vr=2001;function $p(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Po(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kp(){const n=Po("canvas");return n.style.display="block",n}const ou={};function Lo(...n){const e="THREE."+n.shift();console.log(e,...n)}function ad(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function $e(...n){n=ad(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function lt(...n){n=ad(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function bs(...n){const e=n.join(" ");e in ou||(ou[e]=!0,$e(...n))}function Jp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Qp={[Za]:$a,[Ka]:ja,[Ja]:ec,[Cs]:Qa,[$a]:Za,[ja]:Ka,[ec]:Ja,[Qa]:Cs};class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let au=1234567;const cr=Math.PI/180,Mr=180/Math.PI;function Wn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function ll(n,e){return(n%e+e)%e}function jp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function em(n,e,t){return n!==e?(t-n)/(e-n):0}function lr(n,e,t){return(1-t)*n+t*e}function tm(n,e,t,i){return lr(n,e,1-Math.exp(-t*i))}function nm(n,e=1){return e-Math.abs(ll(n,e*2)-e)}function im(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function sm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function rm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function om(n,e){return n+Math.random()*(e-n)}function am(n){return n*(.5-Math.random())}function cm(n){n!==void 0&&(au=n);let e=au+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lm(n){return n*cr}function um(n){return n*Mr}function hm(n){return(n&n-1)===0&&n!==0}function dm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function fm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function pm(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:$e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ln(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Si={DEG2RAD:cr,RAD2DEG:Mr,generateUUID:Wn,clamp:rt,euclideanModulo:ll,mapLinear:jp,inverseLerp:em,lerp:lr,damp:tm,pingpong:nm,smoothstep:im,smootherstep:sm,randInt:rm,randFloat:om,randFloatSpread:am,seededRandom:cm,degToRad:lm,radToDeg:um,isPowerOfTwo:hm,ceilPowerOfTwo:dm,floorPowerOfTwo:fm,setQuaternionFromProperEuler:pm,normalize:gt,denormalize:Ln},Tl=class Tl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Tl.prototype.isVector2=!0;let ue=Tl;class Os{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(d!==_||c!==h||l!==f||u!==g){let m=c*h+l*f+u*g+d*_;m<0&&(h=-h,f=-f,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const S=Math.acos(m),y=Math.sin(S);p=Math.sin(p*S)/y,a=Math.sin(a*S)/y,c=c*p+h*a,l=l*p+f*a,u=u*p+g*a,d=d*p+_*a}else{c=c*p+h*a,l=l*p+f*a,u=u*p+g*a,d=d*p+_*a;const S=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=S,l*=S,u*=S,d*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*d+c*f-l*h,e[t+1]=c*g+u*h+l*d-a*f,e[t+2]=l*g+u*f+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(r/2),h=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Al=class Al{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ea.copy(this).projectOnVector(e),this.sub(ea)}reflect(e){return this.sub(ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Al.prototype.isVector3=!0;let L=Al;const ea=new L,cu=new Os,Rl=class Rl{constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],S=s[1],y=s[4],v=s[7],b=s[2],w=s[5],A=s[8];return r[0]=o*_+a*S+c*b,r[3]=o*m+a*y+c*w,r[6]=o*p+a*v+c*A,r[1]=l*_+u*S+d*b,r[4]=l*m+u*y+d*w,r[7]=l*p+u*v+d*A,r[2]=h*_+f*S+g*b,r[5]=h*m+f*y+g*w,r[8]=h*p+f*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*r,f=l*r-o*c,g=t*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*l-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=h*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ta.makeScale(e,t)),this}rotate(e){return bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ta.makeRotation(-e)),this}translate(e,t){return bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Rl.prototype.isMatrix3=!0;let Qe=Rl;const ta=new Qe,lu=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uu=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mm(){const n={enabled:!0,workingColorSpace:Ro,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(s.r=oi(s.r),s.g=oi(s.g),s.b=oi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yi?Co:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ro]:{primaries:e,whitePoint:i,transfer:Co,toXYZ:lu,fromXYZ:uu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:lu,fromXYZ:uu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),n}const ut=mm();function oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Qi;class gm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qi===void 0&&(Qi=Po("canvas")),Qi.width=e.width,Qi.height=e.height;const s=Qi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Qi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Po("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=oi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(oi(t[i]/255)*255):t[i]=oi(t[i]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xm=0;class ul{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(na(s[o].image)):r.push(na(s[o]))}else r=na(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function na(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let _m=0;const ia=new L;class Zt extends Xi{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,i=ni,s=ni,r=en,o=zi,a=In,c=xn,l=Zt.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Wn(),this.name="",this.source=new ul(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ia).x}get height(){return this.source.getSize(ia).y}get depth(){return this.source.getSize(ia).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Eo:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case tc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Eo:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case tc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=ed;Zt.DEFAULT_ANISOTROPY=1;const Cl=class Cl{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,v=(f+1)/2,b=(p+1)/2,w=(u+h)/4,A=(d+_)/4,x=(g+m)/4;return y>v&&y>b?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=w/i,r=A/i):v>b?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=w/s,r=x/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=A/r,s=x/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-_)/S,this.z=(h-u)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Cl.prototype.isVector4=!0;let Pt=Cl;class vm extends Xi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Zt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ul(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends vm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class cd extends Zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mm extends Zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bo=class Bo{constructor(e,t,i,s,r,o,a,c,l,u,d,h,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,d,h,f,g,_,m)}set(e,t,i,s,r,o,a,c,l,u,d,h,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bo().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ji.setFromMatrixColumn(e,0).length(),r=1/ji.setFromMatrixColumn(e,1).length(),o=1/ji.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,f=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,f=c*d,g=l*u,_=l*d;t[0]=h+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,f=c*d,g=l*u,_=l*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,f=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+_,t[1]=c*d,t[5]=_*l+h,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+_,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ym,e,Sm)}lookAt(e,t,i){const s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),fi.crossVectors(i,dn),fi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),fi.crossVectors(i,dn)),fi.normalize(),Fr.crossVectors(dn,fi),s[0]=fi.x,s[4]=Fr.x,s[8]=dn.x,s[1]=fi.y,s[5]=Fr.y,s[9]=dn.y,s[2]=fi.z,s[6]=Fr.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],S=i[3],y=i[7],v=i[11],b=i[15],w=s[0],A=s[4],x=s[8],E=s[12],R=s[1],P=s[5],D=s[9],F=s[13],B=s[2],N=s[6],O=s[10],I=s[14],G=s[3],q=s[7],te=s[11],Z=s[15];return r[0]=o*w+a*R+c*B+l*G,r[4]=o*A+a*P+c*N+l*q,r[8]=o*x+a*D+c*O+l*te,r[12]=o*E+a*F+c*I+l*Z,r[1]=u*w+d*R+h*B+f*G,r[5]=u*A+d*P+h*N+f*q,r[9]=u*x+d*D+h*O+f*te,r[13]=u*E+d*F+h*I+f*Z,r[2]=g*w+_*R+m*B+p*G,r[6]=g*A+_*P+m*N+p*q,r[10]=g*x+_*D+m*O+p*te,r[14]=g*E+_*F+m*I+p*Z,r[3]=S*w+y*R+v*B+b*G,r[7]=S*A+y*P+v*N+b*q,r[11]=S*x+y*D+v*O+b*te,r[15]=S*E+y*F+v*I+b*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],S=c*f-l*h,y=a*f-l*d,v=a*h-c*d,b=o*f-l*u,w=o*h-c*u,A=o*d-a*u;return t*(_*S-m*y+p*v)-i*(g*S-m*b+p*w)+s*(g*y-_*b+p*A)-r*(g*v-_*w+m*A)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=t*a-i*o,y=t*c-s*o,v=t*l-r*o,b=i*c-s*a,w=i*l-r*a,A=s*l-r*c,x=u*_-d*g,E=u*m-h*g,R=u*p-f*g,P=d*m-h*_,D=d*p-f*_,F=h*p-f*m,B=S*F-y*D+v*P+b*R-w*E+A*x;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/B;return e[0]=(a*F-c*D+l*P)*N,e[1]=(s*D-i*F-r*P)*N,e[2]=(_*A-m*w+p*b)*N,e[3]=(h*w-d*A-f*b)*N,e[4]=(c*R-o*F-l*E)*N,e[5]=(t*F-s*R+r*E)*N,e[6]=(m*v-g*A-p*y)*N,e[7]=(u*A-h*v+f*y)*N,e[8]=(o*D-a*R+l*x)*N,e[9]=(i*R-t*D-r*x)*N,e[10]=(g*w-_*v+p*S)*N,e[11]=(d*v-u*w-f*S)*N,e[12]=(a*E-o*P-c*x)*N,e[13]=(t*P-i*E+s*x)*N,e[14]=(_*y-g*b-m*S)*N,e[15]=(u*b-d*y+h*S)*N,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,h=r*l,f=r*u,g=r*d,_=o*u,m=o*d,p=a*d,S=c*l,y=c*u,v=c*d,b=i.x,w=i.y,A=i.z;return s[0]=(1-(_+p))*b,s[1]=(f+v)*b,s[2]=(g-y)*b,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(h+p))*w,s[6]=(m+S)*w,s[7]=0,s[8]=(g+y)*A,s[9]=(m-S)*A,s[10]=(1-(h+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=ji.set(s[0],s[1],s[2]).length();const a=ji.set(s[4],s[5],s[6]).length(),c=ji.set(s[8],s[9],s[10]).length();r<0&&(o=-o),wn.copy(this);const l=1/o,u=1/a,d=1/c;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=d,wn.elements[9]*=d,wn.elements[10]*=d,t.setFromRotationMatrix(wn),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=Gn,c=!1){const l=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===Gn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===vr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Gn,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===Gn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===vr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Bo.prototype.isMatrix4=!0;let Mt=Bo;const ji=new L,wn=new Mt,ym=new L(0,0,0),Sm=new L(1,1,1),fi=new L,Fr=new L,dn=new L,hu=new Mt,du=new Os;class Vi{constructor(e=0,t=0,i=0,s=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return du.setFromEuler(this),this.setFromQuaternion(du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class hl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bm=0;const fu=new L,es=new Os,$n=new Mt,Or=new L,Gs=new L,wm=new L,Em=new Os,pu=new L(1,0,0),mu=new L(0,1,0),gu=new L(0,0,1),xu={type:"added"},Tm={type:"removed"},ts={type:"childadded",child:null},sa={type:"childremoved",child:null};class Ot extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new L,t=new Vi,i=new Os,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Qe}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(pu,e)}rotateY(e){return this.rotateOnAxis(mu,e)}rotateZ(e){return this.rotateOnAxis(gu,e)}translateOnAxis(e,t){return fu.copy(e).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pu,e)}translateY(e){return this.translateOnAxis(mu,e)}translateZ(e){return this.translateOnAxis(gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Or.copy(e):Or.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Gs,Or,this.up):$n.lookAt(Or,Gs,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),es.setFromRotationMatrix($n),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xu),ts.child=e,this.dispatchEvent(ts),ts.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tm),sa.child=e,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xu),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,wm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,Em,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ot.DEFAULT_UP=new L(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class at extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Am={type:"move"};class ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new at,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new at,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new at,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Am)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new at;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},zr={h:0,s:0,l:0};function oa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ct{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=ll(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=oa(o,r,e+1/3),this.g=oa(o,r,e),this.b=oa(o,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=Yt){function i(r){r!==void 0&&parseFloat(r)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const i=ld[e.toLowerCase()];return i!==void 0?this.setHex(i,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return ut.workingToColorSpace(Jt.copy(this),e),Math.round(rt(Jt.r*255,0,255))*65536+Math.round(rt(Jt.g*255,0,255))*256+Math.round(rt(Jt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(Jt.copy(this),t);const i=Jt.r,s=Jt.g,r=Jt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Yt){ut.workingToColorSpace(Jt.copy(this),e);const t=Jt.r,i=Jt.g,s=Jt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(zr);const i=lr(pi.h,zr.h,t),s=lr(pi.s,zr.s,t),r=lr(pi.l,zr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new ct;ct.NAMES=ld;class Do{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ct(e),this.density=t}clone(){return new Do(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Rm extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const En=new L,Kn=new L,aa=new L,Jn=new L,ns=new L,is=new L,_u=new L,ca=new L,la=new L,ua=new L,ha=new Pt,da=new Pt,fa=new Pt;class Sn{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),En.subVectors(e,t),s.cross(En);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){En.subVectors(s,t),Kn.subVectors(i,t),aa.subVectors(e,t);const o=En.dot(En),a=En.dot(Kn),c=En.dot(aa),l=Kn.dot(Kn),u=Kn.dot(aa),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Jn.x),c.addScaledVector(o,Jn.y),c.addScaledVector(a,Jn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return ha.setScalar(0),da.setScalar(0),fa.setScalar(0),ha.fromBufferAttribute(e,t),da.fromBufferAttribute(e,i),fa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ha,r.x),o.addScaledVector(da,r.y),o.addScaledVector(fa,r.z),o}static isFrontFacing(e,t,i,s){return En.subVectors(i,t),Kn.subVectors(e,t),En.cross(Kn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),En.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Sn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ns.subVectors(s,i),is.subVectors(r,i),ca.subVectors(e,i);const c=ns.dot(ca),l=is.dot(ca);if(c<=0&&l<=0)return t.copy(i);la.subVectors(e,s);const u=ns.dot(la),d=is.dot(la);if(u>=0&&d<=u)return t.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(ns,o);ua.subVectors(e,r);const f=ns.dot(ua),g=is.dot(ua);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(is,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return _u.subVectors(r,s),a=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(_u,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(ns,o).addScaledVector(is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Br.copy(i.boundingBox)),Br.applyMatrix4(e.matrixWorld),this.union(Br)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),kr.subVectors(this.max,Vs),ss.subVectors(e.a,Vs),rs.subVectors(e.b,Vs),os.subVectors(e.c,Vs),mi.subVectors(rs,ss),gi.subVectors(os,rs),Ti.subVectors(ss,os);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Ti.z,Ti.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Ti.z,0,-Ti.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Ti.y,Ti.x,0];return!pa(t,ss,rs,os,kr)||(t=[1,0,0,0,1,0,0,0,1],!pa(t,ss,rs,os,kr))?!1:(Hr.crossVectors(mi,gi),t=[Hr.x,Hr.y,Hr.z],pa(t,ss,rs,os,kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qn=[new L,new L,new L,new L,new L,new L,new L,new L],Tn=new L,Br=new qi,ss=new L,rs=new L,os=new L,mi=new L,gi=new L,Ti=new L,Vs=new L,kr=new L,Hr=new L,Ai=new L;function pa(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ai.fromArray(n,r);const a=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),c=e.dot(Ai),l=t.dot(Ai),u=i.dot(Ai);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const zt=new L,Gr=new ue;let Cm=0;class un extends Xi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ic,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gr.fromBufferAttribute(this,t),Gr.applyMatrix3(e),this.setXY(t,Gr.x,Gr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ln(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ic&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ud extends un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class hd extends un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class st extends un{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Pm=new qi,Ws=new L,ma=new L;class Tr{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Pm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);const t=Ws.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ws,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(ma)),this.expandByPoint(Ws.copy(e.center).sub(ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Lm=0;const Mn=new Mt,ga=new Ot,as=new L,fn=new qi,Xs=new qi,Vt=new L;class Dt extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($p(e)?hd:ud)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,i){return Mn.makeTranslation(e,t,i),this.applyMatrix4(Mn),this}scale(e,t,i){return Mn.makeScale(e,t,i),this.applyMatrix4(Mn),this}lookAt(e){return ga.lookAt(e),ga.updateMatrix(),this.applyMatrix4(ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new st(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(fn.min,Xs.min),fn.expandByPoint(Vt),Vt.addVectors(fn.max,Xs.max),fn.expandByPoint(Vt)):(fn.expandByPoint(Xs.min),fn.expandByPoint(Xs.max))}fn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Vt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Vt.fromBufferAttribute(a,l),c&&(as.fromBufferAttribute(e,l),Vt.add(as)),s=Math.max(s,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new un(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let x=0;x<i.count;x++)a[x]=new L,c[x]=new L;const l=new L,u=new L,d=new L,h=new ue,f=new ue,g=new ue,_=new L,m=new L;function p(x,E,R){l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,R),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,R),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),a[x].add(_),a[E].add(_),a[R].add(_),c[x].add(m),c[E].add(m),c[R].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,E=S.length;x<E;++x){const R=S[x],P=R.start,D=R.count;for(let F=P,B=P+D;F<B;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new L,v=new L,b=new L,w=new L;function A(x){b.fromBufferAttribute(s,x),w.copy(b);const E=a[x];y.copy(E),y.sub(b.multiplyScalar(b.dot(E))).normalize(),v.crossVectors(w,E);const P=v.dot(c[x])<0?-1:1;o.setXYZW(x,y.x,y.y,y.z,P)}for(let x=0,E=S.length;x<E;++x){const R=S[x],P=R.start,D=R.count;for(let F=P,B=P+D;F<B;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,u=new L,d=new L;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new un(h,u,d)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=e(h,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ic,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new L;class Io{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ln(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ln(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Lo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Io(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Lo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Im=0;class zs extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=Ss,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=Ya,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(i.blending=this.blending),this.side!==wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ya&&(i.blendDst=this.blendDst),this.blendEquation!==Ni&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==su&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ct().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ue().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dl extends zs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let cs;const qs=new L,ls=new L,us=new L,hs=new ue,Ys=new ue,dd=new Mt,Vr=new L,Zs=new L,Wr=new L,vu=new ue,xa=new ue,Mu=new ue;class Nc extends Ot{constructor(e=new dl){if(super(),this.isSprite=!0,this.type="Sprite",cs===void 0){cs=new Dt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Dm(t,5);cs.setIndex([0,1,2,0,2,3]),cs.setAttribute("position",new Io(i,3,0,!1)),cs.setAttribute("uv",new Io(i,2,3,!1))}this.geometry=cs,this.material=e,this.center=new ue(.5,.5),this.count=1}raycast(e,t){e.camera===null&&lt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ls.setFromMatrixScale(this.matrixWorld),dd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ls.multiplyScalar(-us.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Xr(Vr.set(-.5,-.5,0),us,o,ls,s,r),Xr(Zs.set(.5,-.5,0),us,o,ls,s,r),Xr(Wr.set(.5,.5,0),us,o,ls,s,r),vu.set(0,0),xa.set(1,0),Mu.set(1,1);let a=e.ray.intersectTriangle(Vr,Zs,Wr,!1,qs);if(a===null&&(Xr(Zs.set(-.5,.5,0),us,o,ls,s,r),xa.set(0,1),a=e.ray.intersectTriangle(Vr,Wr,Zs,!1,qs),a===null))return;const c=e.ray.origin.distanceTo(qs);c<e.near||c>e.far||t.push({distance:c,point:qs.clone(),uv:Sn.getInterpolation(qs,Vr,Zs,Wr,vu,xa,Mu,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Xr(n,e,t,i,s,r){hs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ys.x=r*hs.x-s*hs.y,Ys.y=s*hs.x+r*hs.y):Ys.copy(hs),n.copy(e),n.x+=Ys.x,n.y+=Ys.y,n.applyMatrix4(dd)}const jn=new L,_a=new L,qr=new L,xi=new L,va=new L,Yr=new L,Ma=new L;class fd{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){_a.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(_a);const r=e.distanceTo(t)*.5,o=-this.direction.dot(qr),a=xi.dot(this.direction),c=-xi.dot(qr),l=xi.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(_a).addScaledVector(qr,h),f}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),s=jn.dot(jn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,i,s,r){va.subVectors(t,e),Yr.subVectors(i,e),Ma.crossVectors(va,Yr);let o=this.direction.dot(Ma),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xi.subVectors(this.origin,e);const c=a*this.direction.dot(Yr.crossVectors(xi,Yr));if(c<0)return null;const l=a*this.direction.dot(va.cross(xi));if(l<0||c+l>o)return null;const u=-a*xi.dot(Ma);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rn extends zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yu=new Mt,Ri=new fd,Zr=new Tr,Su=new L,$r=new L,Kr=new L,Jr=new L,ya=new L,Qr=new L,bu=new L,jr=new L;class Q extends Ot{constructor(e=new Dt,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Qr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(ya.fromBufferAttribute(d,e),o?Qr.addScaledVector(ya,u):Qr.addScaledVector(ya.sub(t),u))}t.add(Qr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(r),Ri.copy(e.ray).recast(e.near),!(Zr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Zr,Su)===null||Ri.origin.distanceToSquared(Su)>(e.far-e.near)**2))&&(yu.copy(r).invert(),Ri.copy(e.ray).applyMatrix4(yu),!(i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,b=y;v<b;v+=3){const w=a.getX(v),A=a.getX(v+1),x=a.getX(v+2);s=eo(this,p,e,i,l,u,d,w,A,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=eo(this,o,e,i,l,u,d,S,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,b=y;v<b;v+=3){const w=v,A=v+1,x=v+2;s=eo(this,p,e,i,l,u,d,w,A,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=m,y=m+1,v=m+2;s=eo(this,o,e,i,l,u,d,S,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Nm(n,e,t,i,s,r,o,a){let c;if(e.side===rn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===wi,a),c===null)return null;jr.copy(a),jr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(jr);return l<t.near||l>t.far?null:{distance:l,point:jr.clone(),object:n}}function eo(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,$r),n.getVertexPosition(c,Kr),n.getVertexPosition(l,Jr);const u=Nm(n,e,t,i,$r,Kr,Jr,bu);if(u){const d=new L;Sn.getBarycoord(bu,$r,Kr,Jr,d),s&&(u.uv=Sn.getInterpolatedAttribute(s,a,c,l,d,new ue)),r&&(u.uv1=Sn.getInterpolatedAttribute(r,a,c,l,d,new ue)),o&&(u.normal=Sn.getInterpolatedAttribute(o,a,c,l,d,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new L,materialIndex:0};Sn.getNormal($r,Kr,Jr,h.normal),u.face=h,u.barycoord=d}return u}class pd extends Zt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Xt,u=Xt,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wu extends un{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ds=new Mt,Eu=new Mt,to=[],Tu=new qi,Um=new Mt,$s=new Q,Ks=new Tr;class pn extends Q{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Um)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ds),Tu.copy(e.boundingBox).applyMatrix4(ds),this.boundingBox.union(Tu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ds),Ks.copy(e.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(Ks)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if($s.geometry=this.geometry,$s.material=this.material,$s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(i),e.ray.intersectsSphere(Ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ds),Eu.multiplyMatrices(i,ds),$s.matrixWorld=Eu,$s.raycast(e,to);for(let o=0,a=to.length;o<a;o++){const c=to[o];c.instanceId=r,c.object=this,t.push(c)}to.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new wu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new pd(new Float32Array(s*this.count),s,this.count,il,Dn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Sa=new L,Fm=new L,Om=new Qe;class Di{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Sa.subVectors(i,t).cross(Fm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Sa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Om.getNormalMatrix(e),s=this.coplanarPoint(Sa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Tr,zm=new ue(.5,.5),no=new L;class fl{constructor(e=new Di,t=new Di,i=new Di,s=new Di,r=new Di,o=new Di){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],S=r[12],y=r[13],v=r[14],b=r[15];if(s[0].setComponents(l-o,f-u,p-g,b-S).normalize(),s[1].setComponents(l+o,f+u,p+g,b+S).normalize(),s[2].setComponents(l+a,f+d,p+_,b+y).normalize(),s[3].setComponents(l-a,f-d,p-_,b-y).normalize(),i)s[4].setComponents(c,h,m,v).normalize(),s[5].setComponents(l-c,f-h,p-m,b-v).normalize();else if(s[4].setComponents(l-c,f-h,p-m,b-v).normalize(),t===Gn)s[5].setComponents(l+c,f+h,p+m,b+v).normalize();else if(t===vr)s[5].setComponents(c,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){Ci.center.set(0,0,0);const t=zm.distanceTo(e.center);return Ci.radius=.7071067811865476+t,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(no.x=s.normal.x>0?e.max.x:e.min.x,no.y=s.normal.y>0?e.max.y:e.min.y,no.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(no)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class md extends Zt{constructor(e=[],t=Hi,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ls extends Zt{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ds extends Zt{constructor(e,t,i=qn,s,r,o,a=Xt,c=Xt,l,u=ci,d=1){if(u!==ci&&u!==Bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ul(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bm extends Ds{constructor(e,t=qn,i=Hi,s,r,o=Xt,a=Xt,c,l=ci){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gd extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Je extends Dt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(d,2));function g(_,m,p,S,y,v,b,w,A,x,E){const R=v/A,P=b/x,D=v/2,F=b/2,B=w/2,N=A+1,O=x+1;let I=0,G=0;const q=new L;for(let te=0;te<O;te++){const Z=te*P-F;for(let le=0;le<N;le++){const Ne=le*R-D;q[_]=Ne*S,q[m]=Z*y,q[p]=B,l.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[p]=w>0?1:-1,u.push(q.x,q.y,q.z),d.push(le/A),d.push(1-te/x),I+=1}}for(let te=0;te<x;te++)for(let Z=0;Z<A;Z++){const le=h+Z+N*te,Ne=h+Z+N*(te+1),De=h+(Z+1)+N*(te+1),Ae=h+(Z+1)+N*te;c.push(le,Ne,Ae),c.push(Ne,De,Ae),G+=6}a.addGroup(f,G,E),f+=G,h+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Je(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class No extends Dt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],u=t/2,d=Math.PI/2*e,h=t,f=2*d+h,g=i*2+r,_=s+1,m=new L,p=new L;for(let S=0;S<=g;S++){let y=0,v=0,b=0,w=0;if(S<=i){const E=S/i,R=E*Math.PI/2;v=-u-e*Math.cos(R),b=e*Math.sin(R),w=-e*Math.cos(R),y=E*d}else if(S<=i+r){const E=(S-i)/r;v=-u+E*t,b=e,w=0,y=d+E*h}else{const E=(S-i-r)/i,R=E*Math.PI/2;v=u+e*Math.sin(R),b=e*Math.cos(R),w=e*Math.sin(R),y=d+h+E*d}const A=Math.max(0,Math.min(1,y/f));let x=0;S===0?x=.5/s:S===g&&(x=-.5/s);for(let E=0;E<=s;E++){const R=E/s,P=R*Math.PI*2,D=Math.sin(P),F=Math.cos(P);p.x=-b*F,p.y=v,p.z=b*D,a.push(p.x,p.y,p.z),m.set(-b*F,w,b*D),m.normalize(),c.push(m.x,m.y,m.z),l.push(R+x,A)}if(S>0){const E=(S-1)*_;for(let R=0;R<s;R++){const P=E+R,D=E+R+1,F=S*_+R,B=S*_+R+1;o.push(P,D,F),o.push(D,B,F)}}}this.setIndex(o),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class pl extends Dt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new L,u=new ue;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=i+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(a,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ft extends Dt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const _=[],m=i/2;let p=0;S(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new st(d,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(f,2));function S(){const v=new L,b=new L;let w=0;const A=(t-e)/i;for(let x=0;x<=r;x++){const E=[],R=x/r,P=R*(t-e)+e;for(let D=0;D<=s;D++){const F=D/s,B=F*c+a,N=Math.sin(B),O=Math.cos(B);b.x=P*N,b.y=-R*i+m,b.z=P*O,d.push(b.x,b.y,b.z),v.set(N,A,O).normalize(),h.push(v.x,v.y,v.z),f.push(F,1-R),E.push(g++)}_.push(E)}for(let x=0;x<s;x++)for(let E=0;E<r;E++){const R=_[E][x],P=_[E+1][x],D=_[E+1][x+1],F=_[E][x+1];(e>0||E!==0)&&(u.push(R,P,F),w+=3),(t>0||E!==r-1)&&(u.push(P,D,F),w+=3)}l.addGroup(p,w,0),p+=w}function y(v){const b=g,w=new ue,A=new L;let x=0;const E=v===!0?e:t,R=v===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,m*R,0),h.push(0,R,0),f.push(.5,.5),g++;const P=g;for(let D=0;D<=s;D++){const B=D/s*c+a,N=Math.cos(B),O=Math.sin(B);A.x=E*O,A.y=m*R,A.z=E*N,d.push(A.x,A.y,A.z),h.push(0,R,0),w.x=N*.5+.5,w.y=O*.5*R+.5,f.push(w.x,w.y),g++}for(let D=0;D<s;D++){const F=b+D,B=P+D;v===!0?u.push(B,B+1,F):u.push(B+1,B,F),x+=3}l.addGroup(p,x,v===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qt extends ft{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Qt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ml extends Dt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const y=new L,v=new L,b=new L;for(let w=0;w<t.length;w+=3)f(t[w+0],y),f(t[w+1],v),f(t[w+2],b),c(y,v,b,S)}function c(S,y,v,b){const w=b+1,A=[];for(let x=0;x<=w;x++){A[x]=[];const E=S.clone().lerp(v,x/w),R=y.clone().lerp(v,x/w),P=w-x;for(let D=0;D<=P;D++)D===0&&x===w?A[x][D]=E:A[x][D]=E.clone().lerp(R,D/P)}for(let x=0;x<w;x++)for(let E=0;E<2*(w-x)-1;E++){const R=Math.floor(E/2);E%2===0?(h(A[x][R+1]),h(A[x+1][R]),h(A[x][R])):(h(A[x][R+1]),h(A[x+1][R+1]),h(A[x+1][R]))}}function l(S){const y=new L;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(S),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function u(){const S=new L;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];const v=m(S)/2/Math.PI+.5,b=p(S)/Math.PI+.5;o.push(v,1-b)}g(),d()}function d(){for(let S=0;S<o.length;S+=6){const y=o[S+0],v=o[S+2],b=o[S+4],w=Math.max(y,v,b),A=Math.min(y,v,b);w>.9&&A<.1&&(y<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),b<.2&&(o[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function f(S,y){const v=S*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){const S=new L,y=new L,v=new L,b=new L,w=new ue,A=new ue,x=new ue;for(let E=0,R=0;E<r.length;E+=9,R+=6){S.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),w.set(o[R+0],o[R+1]),A.set(o[R+2],o[R+3]),x.set(o[R+4],o[R+5]),b.copy(S).add(y).add(v).divideScalar(3);const P=m(b);_(w,R+0,S,P),_(A,R+2,y,P),_(x,R+4,v,P)}}function _(S,y,v,b){b<0&&S.x===1&&(o[y]=S.x-1),v.x===0&&v.z===0&&(o[y]=b/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.vertices,e.indices,e.radius,e.detail)}}class Yn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$e("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ue:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new L,s=[],r=[],o=[],a=new L,c=new Mt;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(rt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(rt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class gl extends Yn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ue){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class km extends gl{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function xl(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Au=new L,Ru=new L,ba=new xl,wa=new xl,Ea=new xl;class Go extends Yn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Ru.subVectors(s[0],s[1]).add(s[0]),l=Ru);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Au.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Au),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ba.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,_,m),wa.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,_,m),Ea.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(ba.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),wa.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Ea.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return i.set(ba.calc(c),wa.calc(c),Ea.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Cu(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function Hm(n,e){const t=1-n;return t*t*e}function Gm(n,e){return 2*(1-n)*n*e}function Vm(n,e){return n*n*e}function ur(n,e,t,i){return Hm(n,e)+Gm(n,t)+Vm(n,i)}function Wm(n,e){const t=1-n;return t*t*t*e}function Xm(n,e){const t=1-n;return 3*t*t*n*e}function qm(n,e){return 3*(1-n)*n*n*e}function Ym(n,e){return n*n*n*e}function hr(n,e,t,i,s){return Wm(n,e)+Xm(n,t)+qm(n,i)+Ym(n,s)}class xd extends Yn{constructor(e=new ue,t=new ue,i=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ue){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(hr(e,s.x,r.x,o.x,a.x),hr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zm extends Yn{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(hr(e,s.x,r.x,o.x,a.x),hr(e,s.y,r.y,o.y,a.y),hr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _d extends Yn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vd extends Yn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Md extends Yn{constructor(e=new ue,t=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ue){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ur(e,s.x,r.x,o.x),ur(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yd extends Yn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ur(e,s.x,r.x,o.x),ur(e,s.y,r.y,o.y),ur(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sd extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Cu(a,c.x,l.x,u.x,d.x),Cu(a,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ue().fromArray(s))}return this}}var Uo=Object.freeze({__proto__:null,ArcCurve:km,CatmullRomCurve3:Go,CubicBezierCurve:xd,CubicBezierCurve3:Zm,EllipseCurve:gl,LineCurve:_d,LineCurve3:vd,QuadraticBezierCurve:Md,QuadraticBezierCurve3:yd,SplineCurve:Sd});class $m extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uo[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Uo[s.type]().fromJSON(s))}return this}}class Uc extends $m{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new _d(this.currentPoint.clone(),new ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Md(this.currentPoint.clone(),new ue(e,t),new ue(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new xd(this.currentPoint.clone(),new ue(e,t),new ue(i,s),new ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Sd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){const l=new gl(e,t,i,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Fc extends Uc{constructor(e){super(e),this.uuid=Wn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Uc().fromJSON(s))}return this}}function Km(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=bd(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=t0(n,e,r,t)),n.length>80*t){a=n[0],c=n[1];let u=a,d=c;for(let h=t;h<s;h+=t){const f=n[h],g=n[h+1];f<a&&(a=f),g<c&&(c=g),f>u&&(u=f),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return yr(r,o,t,a,c,l,0),o}function bd(n,e,t,i,s){let r;if(s===d0(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Pu(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Pu(o/i|0,n[o],n[o+1],r);return r&&Is(r,r.next)&&(br(r),r=r.next),r}function Wi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Is(t,t.next)||Lt(t.prev,t,t.next)===0)){if(br(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function yr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&o0(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?Qm(n,i,s,r):Jm(n)){e.push(c.i,n.i,l.i),br(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=jm(Wi(n),e),yr(n,e,t,i,s,r,2)):o===2&&e0(n,e,t,i,s,r):yr(Wi(n),e,t,i,s,r,1);break}}}function Jm(n){const e=n.prev,t=n,i=n.next;if(Lt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(s,r,o),d=Math.min(a,c,l),h=Math.max(s,r,o),f=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&rr(s,a,r,c,o,l,g.x,g.y)&&Lt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qm(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Lt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,c,l),g=Math.min(u,d,h),_=Math.max(a,c,l),m=Math.max(u,d,h),p=Oc(f,g,e,t,i),S=Oc(_,m,e,t,i);let y=n.prevZ,v=n.nextZ;for(;y&&y.z>=p&&v&&v.z<=S;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&rr(a,u,c,d,l,h,y.x,y.y)&&Lt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&rr(a,u,c,d,l,h,v.x,v.y)&&Lt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&rr(a,u,c,d,l,h,y.x,y.y)&&Lt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=S;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&rr(a,u,c,d,l,h,v.x,v.y)&&Lt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function jm(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Is(i,s)&&Ed(i,t,t.next,s)&&Sr(i,s)&&Sr(s,i)&&(e.push(i.i,t.i,s.i),br(t),br(t.next),t=n=s),t=t.next}while(t!==n);return Wi(t)}function e0(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&l0(o,a)){let c=Td(o,a);o=Wi(o,o.next),c=Wi(c,c.next),yr(o,e,t,i,s,r,0),yr(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function t0(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=bd(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(c0(l))}s.sort(n0);for(let r=0;r<s.length;r++)t=i0(s[r],t);return t}function n0(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function i0(n,e){const t=s0(n,e);if(!t)return e;const i=Td(t,n);return Wi(i,i.next),Wi(t,t.next)}function s0(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Is(n,t))return t;do{if(Is(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&wd(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){const d=Math.abs(s-t.y)/(i-t.x);Sr(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&r0(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function r0(n,e){return Lt(n.prev,n,e.prev)<0&&Lt(e.next,n,n.next)<0}function o0(n,e,t,i){let s=n;do s.z===0&&(s.z=Oc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,a0(s)}function a0(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Oc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function c0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function wd(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function rr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&wd(n,e,t,i,s,r,o,a)}function l0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!u0(n,e)&&(Sr(n,e)&&Sr(e,n)&&h0(n,e)&&(Lt(n.prev,n,e.prev)||Lt(n,e.prev,e))||Is(n,e)&&Lt(n.prev,n,n.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Is(n,e){return n.x===e.x&&n.y===e.y}function Ed(n,e,t,i){const s=so(Lt(n,e,t)),r=so(Lt(n,e,i)),o=so(Lt(t,i,n)),a=so(Lt(t,i,e));return!!(s!==r&&o!==a||s===0&&io(n,t,e)||r===0&&io(n,i,e)||o===0&&io(t,n,i)||a===0&&io(t,e,i))}function io(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function so(n){return n>0?1:n<0?-1:0}function u0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ed(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Sr(n,e){return Lt(n.prev,n,n.next)<0?Lt(n,e,n.next)>=0&&Lt(n,n.prev,e)>=0:Lt(n,e,n.prev)<0||Lt(n,n.next,e)<0}function h0(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Td(n,e){const t=zc(n.i,n.x,n.y),i=zc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Pu(n,e,t,i){const s=zc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function br(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function zc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function d0(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class f0{static triangulate(e,t,i=2){return Km(e,t,i)}}class vs{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return vs.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Lu(e),Du(i,e);let o=e.length;t.forEach(Lu);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Du(i,t[c]);const a=f0.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Lu(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Du(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Fo extends Dt{constructor(e=new Fc([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new st(s,3)),this.setAttribute("uv",new st(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:p0;let y,v=!1,b,w,A,x;if(p){y=p.getSpacedPoints(u),v=!0,h=!1;const ne=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(u,ne),w=new L,A=new L,x=new L}h||(m=0,f=0,g=0,_=0);const E=a.extractPoints(l);let R=E.shape;const P=E.holes;if(!vs.isClockWise(R)){R=R.reverse();for(let ne=0,re=P.length;ne<re;ne++){const se=P[ne];vs.isClockWise(se)&&(P[ne]=se.reverse())}}function F(ne){const se=10000000000000001e-36;let Me=ne[0];for(let ae=1;ae<=ne.length;ae++){const Ue=ae%ne.length,Le=ne[Ue],Ye=Le.x-Me.x,Ke=Le.y-Me.y,U=Ye*Ye+Ke*Ke,_t=Math.max(Math.abs(Le.x),Math.abs(Le.y),Math.abs(Me.x),Math.abs(Me.y)),ot=se*_t*_t;if(U<=ot){ne.splice(Ue,1),ae--;continue}Me=Le}}F(R),P.forEach(F);const B=P.length,N=R;for(let ne=0;ne<B;ne++){const re=P[ne];R=R.concat(re)}function O(ne,re,se){return re||lt("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(re,se)}const I=R.length;function G(ne,re,se){let Me,ae,Ue;const Le=ne.x-re.x,Ye=ne.y-re.y,Ke=se.x-ne.x,U=se.y-ne.y,_t=Le*Le+Ye*Ye,ot=Le*U-Ye*Ke;if(Math.abs(ot)>Number.EPSILON){const C=Math.sqrt(_t),M=Math.sqrt(Ke*Ke+U*U),H=re.x-Ye/C,X=re.y+Le/C,K=se.x-U/M,de=se.y+Ke/M,me=((K-H)*U-(de-X)*Ke)/(Le*U-Ye*Ke);Me=H+Le*me-ne.x,ae=X+Ye*me-ne.y;const J=Me*Me+ae*ae;if(J<=2)return new ue(Me,ae);Ue=Math.sqrt(J/2)}else{let C=!1;Le>Number.EPSILON?Ke>Number.EPSILON&&(C=!0):Le<-Number.EPSILON?Ke<-Number.EPSILON&&(C=!0):Math.sign(Ye)===Math.sign(U)&&(C=!0),C?(Me=-Ye,ae=Le,Ue=Math.sqrt(_t)):(Me=Le,ae=Ye,Ue=Math.sqrt(_t/2))}return new ue(Me/Ue,ae/Ue)}const q=[];for(let ne=0,re=N.length,se=re-1,Me=ne+1;ne<re;ne++,se++,Me++)se===re&&(se=0),Me===re&&(Me=0),q[ne]=G(N[ne],N[se],N[Me]);const te=[];let Z,le=q.concat();for(let ne=0,re=B;ne<re;ne++){const se=P[ne];Z=[];for(let Me=0,ae=se.length,Ue=ae-1,Le=Me+1;Me<ae;Me++,Ue++,Le++)Ue===ae&&(Ue=0),Le===ae&&(Le=0),Z[Me]=G(se[Me],se[Ue],se[Le]);te.push(Z),le=le.concat(Z)}let Ne;if(m===0)Ne=vs.triangulateShape(N,P);else{const ne=[],re=[];for(let se=0;se<m;se++){const Me=se/m,ae=f*Math.cos(Me*Math.PI/2),Ue=g*Math.sin(Me*Math.PI/2)+_;for(let Le=0,Ye=N.length;Le<Ye;Le++){const Ke=O(N[Le],q[Le],Ue);Ie(Ke.x,Ke.y,-ae),Me===0&&ne.push(Ke)}for(let Le=0,Ye=B;Le<Ye;Le++){const Ke=P[Le];Z=te[Le];const U=[];for(let _t=0,ot=Ke.length;_t<ot;_t++){const C=O(Ke[_t],Z[_t],Ue);Ie(C.x,C.y,-ae),Me===0&&U.push(C)}Me===0&&re.push(U)}}Ne=vs.triangulateShape(ne,re)}const De=Ne.length,Ae=g+_;for(let ne=0;ne<I;ne++){const re=h?O(R[ne],le[ne],Ae):R[ne];v?(A.copy(b.normals[0]).multiplyScalar(re.x),w.copy(b.binormals[0]).multiplyScalar(re.y),x.copy(y[0]).add(A).add(w),Ie(x.x,x.y,x.z)):Ie(re.x,re.y,0)}for(let ne=1;ne<=u;ne++)for(let re=0;re<I;re++){const se=h?O(R[re],le[re],Ae):R[re];v?(A.copy(b.normals[ne]).multiplyScalar(se.x),w.copy(b.binormals[ne]).multiplyScalar(se.y),x.copy(y[ne]).add(A).add(w),Ie(x.x,x.y,x.z)):Ie(se.x,se.y,d/u*ne)}for(let ne=m-1;ne>=0;ne--){const re=ne/m,se=f*Math.cos(re*Math.PI/2),Me=g*Math.sin(re*Math.PI/2)+_;for(let ae=0,Ue=N.length;ae<Ue;ae++){const Le=O(N[ae],q[ae],Me);Ie(Le.x,Le.y,d+se)}for(let ae=0,Ue=P.length;ae<Ue;ae++){const Le=P[ae];Z=te[ae];for(let Ye=0,Ke=Le.length;Ye<Ke;Ye++){const U=O(Le[Ye],Z[Ye],Me);v?Ie(U.x,U.y+y[u-1].y,y[u-1].x+se):Ie(U.x,U.y,d+se)}}}$(),he();function $(){const ne=s.length/3;if(h){let re=0,se=I*re;for(let Me=0;Me<De;Me++){const ae=Ne[Me];ke(ae[2]+se,ae[1]+se,ae[0]+se)}re=u+m*2,se=I*re;for(let Me=0;Me<De;Me++){const ae=Ne[Me];ke(ae[0]+se,ae[1]+se,ae[2]+se)}}else{for(let re=0;re<De;re++){const se=Ne[re];ke(se[2],se[1],se[0])}for(let re=0;re<De;re++){const se=Ne[re];ke(se[0]+I*u,se[1]+I*u,se[2]+I*u)}}i.addGroup(ne,s.length/3-ne,0)}function he(){const ne=s.length/3;let re=0;oe(N,re),re+=N.length;for(let se=0,Me=P.length;se<Me;se++){const ae=P[se];oe(ae,re),re+=ae.length}i.addGroup(ne,s.length/3-ne,1)}function oe(ne,re){let se=ne.length;for(;--se>=0;){const Me=se;let ae=se-1;ae<0&&(ae=ne.length-1);for(let Ue=0,Le=u+m*2;Ue<Le;Ue++){const Ye=I*Ue,Ke=I*(Ue+1),U=re+Me+Ye,_t=re+ae+Ye,ot=re+ae+Ke,C=re+Me+Ke;pe(U,_t,ot,C)}}}function Ie(ne,re,se){c.push(ne),c.push(re),c.push(se)}function ke(ne,re,se){nt(ne),nt(re),nt(se);const Me=s.length/3,ae=S.generateTopUV(i,s,Me-3,Me-2,Me-1);qe(ae[0]),qe(ae[1]),qe(ae[2])}function pe(ne,re,se,Me){nt(ne),nt(re),nt(Me),nt(re),nt(se),nt(Me);const ae=s.length/3,Ue=S.generateSideWallUV(i,s,ae-6,ae-3,ae-2,ae-1);qe(Ue[0]),qe(Ue[1]),qe(Ue[3]),qe(Ue[1]),qe(Ue[2]),qe(Ue[3])}function nt(ne){s.push(c[ne*3+0]),s.push(c[ne*3+1]),s.push(c[ne*3+2])}function qe(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return m0(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Uo[s.type]().fromJSON(s)),new Fo(i,e.options)}}const p0={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],u=e[s*3+1];return[new ue(r,o),new ue(a,c),new ue(l,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ue(o,1-c),new ue(l,1-d),new ue(h,1-g),new ue(_,1-p)]:[new ue(a,1-c),new ue(u,1-d),new ue(f,1-g),new ue(m,1-p)]}};function m0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class dr extends ml{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new dr(e.radius,e.detail)}}class cn extends Dt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=e/a,h=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*h-o;for(let y=0;y<l;y++){const v=y*d-r;g.push(v,-S,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const y=S+l*p,v=S+l*(p+1),b=S+1+l*(p+1),w=S+1+l*p;f.push(y,v,w),f.push(v,b,w)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.width,e.height,e.widthSegments,e.heightSegments)}}class dt extends Dt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new L,h=new L,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const S=[],y=p/i,v=o+y*a,b=e*Math.cos(v),w=Math.sqrt(e*e-b*b);let A=0;p===0&&o===0?A=.5/t:p===i&&c===Math.PI&&(A=-.5/t);for(let x=0;x<=t;x++){const E=x/t,R=s+E*r;d.x=-w*Math.cos(R),d.y=b,d.z=w*Math.sin(R),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(E+A,1-y),S.push(l++)}u.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){const y=u[p][S+1],v=u[p][S],b=u[p+1][S],w=u[p+1][S+1];(p!==0||o>0)&&f.push(y,v,w),(p!==i-1||c<Math.PI)&&f.push(v,b,w)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class An extends Dt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],d=[],h=new L,f=new L,g=new L;for(let _=0;_<=i;_++){const m=o+_/i*a;for(let p=0;p<=s;p++){const S=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(S),f.y=(e+t*Math.cos(m))*Math.sin(S),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/s),d.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=s;m++){const p=(s+1)*_+m-1,S=(s+1)*(_-1)+m-1,y=(s+1)*(_-1)+m,v=(s+1)*_+m;c.push(p,S,v),c.push(S,y,v)}this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Vo extends Dt{constructor(e=new yd(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,c=new L,l=new ue;let u=new L;const d=[],h=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new st(d,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(f,2));function _(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),S(),p()}function m(y){u=e.getPointAt(y/t,u);const v=o.normals[y],b=o.binormals[y];for(let w=0;w<=s;w++){const A=w/s*Math.PI*2,x=Math.sin(A),E=-Math.cos(A);c.x=E*v.x+x*b.x,c.y=E*v.y+x*b.y,c.z=E*v.z+x*b.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,d.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let v=1;v<=s;v++){const b=(s+1)*(y-1)+(v-1),w=(s+1)*y+(v-1),A=(s+1)*y+v,x=(s+1)*(y-1)+v;g.push(b,w,x),g.push(w,A,x)}}function S(){for(let y=0;y<=t;y++)for(let v=0;v<=s;v++)l.x=y/t,l.y=v/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Vo(new Uo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Ns(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Iu(s))s.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Iu(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function nn(n){const e={};for(let t=0;t<n.length;t++){const i=Ns(n[t]);for(const s in i)e[s]=i[s]}return e}function Iu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function g0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ad(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const x0={clone:Ns,merge:nn};var _0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_0,this.fragmentShader=v0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=g0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ct().setHex(s.value);break;case"v2":this.uniforms[i].value=new ue().fromArray(s.value);break;case"v3":this.uniforms[i].value=new L().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Pt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Qe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Mt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class M0 extends bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Us extends zs{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class y0 extends zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class S0 extends zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _l extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class b0 extends _l{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ta=new Mt,Nu=new L,Uu=new L;class Rd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fl,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nu),Uu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uu),t.updateMatrixWorld(),Ta.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ta,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===vr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ta)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ro=new L,oo=new Os,On=new L;class Cd extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ro,oo,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ro,oo,On.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ro,oo,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ro,oo,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _i=new L,Fu=new ue,Ou=new ue;class gn extends Cd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,t){return this.getViewBounds(e,Fu,Ou),t.subVectors(Ou,Fu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class w0 extends Rd{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}}class E0 extends _l{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new w0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class vl extends Cd{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class T0 extends Rd{constructor(){super(new vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class A0 extends _l{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new T0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const fs=-90,ps=1;class R0 extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(fs,ps,e,t);s.layers=this.layers,this.add(s);const r=new gn(fs,ps,e,t);r.layers=this.layers,this.add(r);const o=new gn(fs,ps,e,t);o.layers=this.layers,this.add(o);const a=new gn(fs,ps,e,t);a.layers=this.layers,this.add(a);const c=new gn(fs,ps,e,t);c.layers=this.layers,this.add(c);const l=new gn(fs,ps,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===vr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class C0 extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zu=new Mt;class P0{constructor(e,t,i=0,s=1/0){this.ray=new fd(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new hl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):lt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zu),this}intersectObject(e,t=!0,i=[]){return Bc(e,this,i,t),i.sort(Bu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Bc(e[s],this,i,t);return i.sort(Bu),i}}function Bu(n,e){return n.distance-e.distance}function Bc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Bc(r[o],e,t,!0)}}const Pl=class Pl{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Pl.prototype.isMatrix2=!0;let ku=Pl;function Hu(n,e,t,i){const s=L0(i);switch(t){case rd:return n*e;case il:return n*e/s.components*s.byteLength;case sl:return n*e/s.components*s.byteLength;case Gi:return n*e*2/s.components*s.byteLength;case rl:return n*e*2/s.components*s.byteLength;case od:return n*e*3/s.components*s.byteLength;case In:return n*e*4/s.components*s.byteLength;case ol:return n*e*4/s.components*s.byteLength;case go:case xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _o:case vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ic:case rc:return Math.max(n,16)*Math.max(e,8)/4;case nc:case sc:return Math.max(n,8)*Math.max(e,8)/2;case oc:case ac:case lc:case uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case cc:case To:case hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case pc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case mc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case gc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case xc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case _c:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case vc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case yc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case wc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Tc:case Ac:case Rc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Cc:case Pc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ao:case Lc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function L0(n){switch(n){case xn:case td:return{byteLength:1,components:1};case xr:case nd:case ai:return{byteLength:2,components:1};case tl:case nl:return{byteLength:2,components:4};case qn:case el:case Dn:return{byteLength:4,components:1};case id:case sd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function D0(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var I0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N0=`#ifdef USE_ALPHAHASH
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
#endif`,U0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B0=`#ifdef USE_AOMAP
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
#endif`,k0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H0=`#ifdef USE_BATCHING
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
#endif`,G0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,q0=`#ifdef USE_IRIDESCENCE
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
#endif`,Y0=`#ifdef USE_BUMPMAP
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
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,j0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ng=`#define PI 3.141592653589793
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
} // validated`,ig=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sg=`vec3 transformedNormal = objectNormal;
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
#endif`,rg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ug=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hg=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fg=`#ifdef USE_ENVMAP
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
#endif`,pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mg=`#ifdef USE_GRADIENTMAP
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
}`,yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Eg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pg=`PhysicalMaterial material;
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
#endif`,Lg=`uniform sampler2D dfgLUT;
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
}`,Dg=`
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
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ug=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vg=`#if defined( USE_POINTS_UV )
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
#endif`,Wg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$g=`#ifdef USE_MORPHTARGETS
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
#endif`,Kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,nx=`#ifdef USE_NORMALMAP
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
#endif`,ix=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ax=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ux=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,px=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_x=`float getShadowMask() {
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
}`,vx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mx=`#ifdef USE_SKINNING
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
#endif`,yx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sx=`#ifdef USE_SKINNING
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
#endif`,bx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ax=`#ifdef USE_TRANSMISSION
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
#endif`,Rx=`#ifdef USE_TRANSMISSION
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
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nx=`uniform sampler2D t2D;
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
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`#include <common>
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
}`,kx=`#if DEPTH_PACKING == 3200
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
}`,Hx=`#define DISTANCE
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
}`,Gx=`#define DISTANCE
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
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`uniform float scale;
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
}`,qx=`uniform vec3 diffuse;
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
}`,Yx=`#include <common>
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
}`,Zx=`uniform vec3 diffuse;
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
}`,$x=`#define LAMBERT
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
}`,Kx=`#define LAMBERT
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
}`,Jx=`#define MATCAP
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
}`,Qx=`#define MATCAP
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
}`,jx=`#define NORMAL
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
}`,e_=`#define NORMAL
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
}`,t_=`#define PHONG
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
}`,n_=`#define PHONG
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
}`,i_=`#define STANDARD
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
}`,s_=`#define STANDARD
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
}`,r_=`#define TOON
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
}`,o_=`#define TOON
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
}`,a_=`uniform float size;
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
}`,c_=`uniform vec3 diffuse;
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
}`,l_=`#include <common>
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
}`,u_=`uniform vec3 color;
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
}`,h_=`uniform float rotation;
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
}`,d_=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:I0,alphahash_pars_fragment:N0,alphamap_fragment:U0,alphamap_pars_fragment:F0,alphatest_fragment:O0,alphatest_pars_fragment:z0,aomap_fragment:B0,aomap_pars_fragment:k0,batching_pars_vertex:H0,batching_vertex:G0,begin_vertex:V0,beginnormal_vertex:W0,bsdfs:X0,iridescence_fragment:q0,bumpmap_pars_fragment:Y0,clipping_planes_fragment:Z0,clipping_planes_pars_fragment:$0,clipping_planes_pars_vertex:K0,clipping_planes_vertex:J0,color_fragment:Q0,color_pars_fragment:j0,color_pars_vertex:eg,color_vertex:tg,common:ng,cube_uv_reflection_fragment:ig,defaultnormal_vertex:sg,displacementmap_pars_vertex:rg,displacementmap_vertex:og,emissivemap_fragment:ag,emissivemap_pars_fragment:cg,colorspace_fragment:lg,colorspace_pars_fragment:ug,envmap_fragment:hg,envmap_common_pars_fragment:dg,envmap_pars_fragment:fg,envmap_pars_vertex:pg,envmap_physical_pars_fragment:Eg,envmap_vertex:mg,fog_vertex:gg,fog_pars_vertex:xg,fog_fragment:_g,fog_pars_fragment:vg,gradientmap_pars_fragment:Mg,lightmap_pars_fragment:yg,lights_lambert_fragment:Sg,lights_lambert_pars_fragment:bg,lights_pars_begin:wg,lights_toon_fragment:Tg,lights_toon_pars_fragment:Ag,lights_phong_fragment:Rg,lights_phong_pars_fragment:Cg,lights_physical_fragment:Pg,lights_physical_pars_fragment:Lg,lights_fragment_begin:Dg,lights_fragment_maps:Ig,lights_fragment_end:Ng,lightprobes_pars_fragment:Ug,logdepthbuf_fragment:Fg,logdepthbuf_pars_fragment:Og,logdepthbuf_pars_vertex:zg,logdepthbuf_vertex:Bg,map_fragment:kg,map_pars_fragment:Hg,map_particle_fragment:Gg,map_particle_pars_fragment:Vg,metalnessmap_fragment:Wg,metalnessmap_pars_fragment:Xg,morphinstance_vertex:qg,morphcolor_vertex:Yg,morphnormal_vertex:Zg,morphtarget_pars_vertex:$g,morphtarget_vertex:Kg,normal_fragment_begin:Jg,normal_fragment_maps:Qg,normal_pars_fragment:jg,normal_pars_vertex:ex,normal_vertex:tx,normalmap_pars_fragment:nx,clearcoat_normal_fragment_begin:ix,clearcoat_normal_fragment_maps:sx,clearcoat_pars_fragment:rx,iridescence_pars_fragment:ox,opaque_fragment:ax,packing:cx,premultiplied_alpha_fragment:lx,project_vertex:ux,dithering_fragment:hx,dithering_pars_fragment:dx,roughnessmap_fragment:fx,roughnessmap_pars_fragment:px,shadowmap_pars_fragment:mx,shadowmap_pars_vertex:gx,shadowmap_vertex:xx,shadowmask_pars_fragment:_x,skinbase_vertex:vx,skinning_pars_vertex:Mx,skinning_vertex:yx,skinnormal_vertex:Sx,specularmap_fragment:bx,specularmap_pars_fragment:wx,tonemapping_fragment:Ex,tonemapping_pars_fragment:Tx,transmission_fragment:Ax,transmission_pars_fragment:Rx,uv_pars_fragment:Cx,uv_pars_vertex:Px,uv_vertex:Lx,worldpos_vertex:Dx,background_vert:Ix,background_frag:Nx,backgroundCube_vert:Ux,backgroundCube_frag:Fx,cube_vert:Ox,cube_frag:zx,depth_vert:Bx,depth_frag:kx,distance_vert:Hx,distance_frag:Gx,equirect_vert:Vx,equirect_frag:Wx,linedashed_vert:Xx,linedashed_frag:qx,meshbasic_vert:Yx,meshbasic_frag:Zx,meshlambert_vert:$x,meshlambert_frag:Kx,meshmatcap_vert:Jx,meshmatcap_frag:Qx,meshnormal_vert:jx,meshnormal_frag:e_,meshphong_vert:t_,meshphong_frag:n_,meshphysical_vert:i_,meshphysical_frag:s_,meshtoon_vert:r_,meshtoon_frag:o_,points_vert:a_,points_frag:c_,shadow_vert:l_,shadow_frag:u_,sprite_vert:h_,sprite_frag:d_},be={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},kn={basic:{uniforms:nn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:nn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:nn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:nn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:nn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ct(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:nn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:nn([be.points,be.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:nn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:nn([be.common,be.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:nn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:nn([be.sprite,be.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:nn([be.common,be.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:nn([be.lights,be.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};kn.physical={uniforms:nn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const ao={r:0,b:0,g:0},f_=new Mt,Ld=new Qe;Ld.set(-1,0,0,0,1,0,0,0,1);function p_(n,e,t,i,s,r){const o=new ct(0);let a=s===!0?0:1,c,l,u=null,d=0,h=null;function f(S){let y=S.isScene===!0?S.background:null;if(y&&y.isTexture){const v=S.backgroundBlurriness>0;y=e.get(y,v)}return y}function g(S){let y=!1;const v=f(S);v===null?m(o,a):v&&v.isColor&&(m(v,1),y=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(S,y){const v=f(y);v&&(v.isCubeTexture||v.mapping===Ho)?(l===void 0&&(l=new Q(new Je(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Ns(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(f_.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ld),l.material.toneMapped=ut.getTransfer(v.colorSpace)!==mt,(u!==v||d!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Q(new cn(2,2),new bn({name:"BackgroundMaterial",uniforms:Ns(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ut.getTransfer(v.colorSpace)!==mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,y){S.getRGB(ao,Ad(n)),t.buffers.color.setClear(ao.r,ao.g,ao.b,y,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,y=1){o.set(S),a=y,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:g,addToRenderList:_,dispose:p}}function m_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(P,D,F,B,N){let O=!1;const I=d(P,B,F,D);r!==I&&(r=I,l(r.object)),O=f(P,B,F,N),O&&g(P,B,F,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,v(P,D,F,B),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return n.createVertexArray()}function l(P){return n.bindVertexArray(P)}function u(P){return n.deleteVertexArray(P)}function d(P,D,F,B){const N=B.wireframe===!0;let O=i[D.id];O===void 0&&(O={},i[D.id]=O);const I=P.isInstancedMesh===!0?P.id:0;let G=O[I];G===void 0&&(G={},O[I]=G);let q=G[F.id];q===void 0&&(q={},G[F.id]=q);let te=q[N];return te===void 0&&(te=h(c()),q[N]=te),te}function h(P){const D=[],F=[],B=[];for(let N=0;N<t;N++)D[N]=0,F[N]=0,B[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:B,object:P,attributes:{},index:null}}function f(P,D,F,B){const N=r.attributes,O=D.attributes;let I=0;const G=F.getAttributes();for(const q in G)if(G[q].location>=0){const Z=N[q];let le=O[q];if(le===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(le=P.instanceColor)),Z===void 0||Z.attribute!==le||le&&Z.data!==le.data)return!0;I++}return r.attributesNum!==I||r.index!==B}function g(P,D,F,B){const N={},O=D.attributes;let I=0;const G=F.getAttributes();for(const q in G)if(G[q].location>=0){let Z=O[q];Z===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));const le={};le.attribute=Z,Z&&Z.data&&(le.data=Z.data),N[q]=le,I++}r.attributes=N,r.attributesNum=I,r.index=B}function _(){const P=r.newAttributes;for(let D=0,F=P.length;D<F;D++)P[D]=0}function m(P){p(P,0)}function p(P,D){const F=r.newAttributes,B=r.enabledAttributes,N=r.attributeDivisors;F[P]=1,B[P]===0&&(n.enableVertexAttribArray(P),B[P]=1),N[P]!==D&&(n.vertexAttribDivisor(P,D),N[P]=D)}function S(){const P=r.newAttributes,D=r.enabledAttributes;for(let F=0,B=D.length;F<B;F++)D[F]!==P[F]&&(n.disableVertexAttribArray(F),D[F]=0)}function y(P,D,F,B,N,O,I){I===!0?n.vertexAttribIPointer(P,D,F,N,O):n.vertexAttribPointer(P,D,F,B,N,O)}function v(P,D,F,B){_();const N=B.attributes,O=F.getAttributes(),I=D.defaultAttributeValues;for(const G in O){const q=O[G];if(q.location>=0){let te=N[G];if(te===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),te!==void 0){const Z=te.normalized,le=te.itemSize,Ne=e.get(te);if(Ne===void 0)continue;const De=Ne.buffer,Ae=Ne.type,$=Ne.bytesPerElement,he=Ae===n.INT||Ae===n.UNSIGNED_INT||te.gpuType===el;if(te.isInterleavedBufferAttribute){const oe=te.data,Ie=oe.stride,ke=te.offset;if(oe.isInstancedInterleavedBuffer){for(let pe=0;pe<q.locationSize;pe++)p(q.location+pe,oe.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let pe=0;pe<q.locationSize;pe++)m(q.location+pe);n.bindBuffer(n.ARRAY_BUFFER,De);for(let pe=0;pe<q.locationSize;pe++)y(q.location+pe,le/q.locationSize,Ae,Z,Ie*$,(ke+le/q.locationSize*pe)*$,he)}else{if(te.isInstancedBufferAttribute){for(let oe=0;oe<q.locationSize;oe++)p(q.location+oe,te.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let oe=0;oe<q.locationSize;oe++)m(q.location+oe);n.bindBuffer(n.ARRAY_BUFFER,De);for(let oe=0;oe<q.locationSize;oe++)y(q.location+oe,le/q.locationSize,Ae,Z,le*$,le/q.locationSize*oe*$,he)}}else if(I!==void 0){const Z=I[G];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(q.location,Z);break;case 3:n.vertexAttrib3fv(q.location,Z);break;case 4:n.vertexAttrib4fv(q.location,Z);break;default:n.vertexAttrib1fv(q.location,Z)}}}}S()}function b(){E();for(const P in i){const D=i[P];for(const F in D){const B=D[F];for(const N in B){const O=B[N];for(const I in O)u(O[I].object),delete O[I];delete B[N]}}delete i[P]}}function w(P){if(i[P.id]===void 0)return;const D=i[P.id];for(const F in D){const B=D[F];for(const N in B){const O=B[N];for(const I in O)u(O[I].object),delete O[I];delete B[N]}}delete i[P.id]}function A(P){for(const D in i){const F=i[D];for(const B in F){const N=F[B];if(N[P.id]===void 0)continue;const O=N[P.id];for(const I in O)u(O[I].object),delete O[I];delete N[P.id]}}}function x(P){for(const D in i){const F=i[D],B=P.isInstancedMesh===!0?P.id:0,N=F[B];if(N!==void 0){for(const O in N){const I=N[O];for(const G in I)u(I[G].object),delete I[G];delete N[O]}delete F[B],Object.keys(F).length===0&&delete i[D]}}}function E(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function g_(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function x_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==In&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const x=A===ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==xn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Dn&&!x)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&($e("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:v,maxSamples:b,samples:w}}function __(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Di,a=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const S=r?0:i,y=S*4;let v=p.clippingState||null;c.value=v,v=u(g,h,y,f);for(let b=0;b!==y;++b)v[b]=t[b];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)o.copy(d[y]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const bi=4,Gu=[.125,.215,.35,.446,.526,.582],Ui=20,v_=256,Js=new vl,Vu=new ct;let Aa=null,Ra=0,Ca=0,Pa=!1;const M_=new L;class Wu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=M_}=r;Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Aa,Ra,Ca),this._renderer.xr.enabled=Pa,e.scissorTest=!1,ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:ai,format:In,colorSpace:Ro,depthBuffer:!1},s=Xu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xu(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=y_(r)),this._blurMaterial=b_(r,e,t),this._ggxMaterial=S_(r,e,t)}return s}_compileMaterial(e){const t=new Q(new Dt,e);this._renderer.compile(t,Js)}_sceneToCubeUV(e,t,i,s,r){const c=new gn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Vu),d.toneMapping=Vn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Q(new Je,new Rn({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(Vu),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[y],r.y,r.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[y]));const b=this._cubeSize;ms(s,v*b,y>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(_,c),d.render(e,c)}d.toneMapping=f,d.autoClear=h,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Hi||e.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;ms(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Js)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=0+l*1.25,f=d*h,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-bi?i-g+bi:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,ms(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(a,Js),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,ms(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(a,Js)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&lt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=l;const h=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ui-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Ui;m>Ui&&$e(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ui}`);const p=[];let S=0;for(let A=0;A<Ui;++A){const x=A/_,E=Math.exp(-x*x/2);p.push(E),A===0?S+=E:A<m&&(S+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const v=this._sizeLods[s],b=3*v*(s>y-bi?s-y+bi:0),w=4*(this._cubeSize-v);ms(t,b,w,3*v,2*v),c.setRenderTarget(t),c.render(d,Js)}}function y_(n){const e=[],t=[],i=[];let s=n;const r=n-bi+1+Gu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-bi?c=Gu[o-n+bi-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,x=w>2?0:-1,E=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];S.set(E,_*g*w),y.set(h,m*g*w);const R=[w,w,w,w,w,w];v.set(R,p*g*w)}const b=new Dt;b.setAttribute("position",new un(S,_)),b.setAttribute("uv",new un(y,m)),b.setAttribute("faceIndex",new un(v,p)),i.push(new Q(b,null)),s>bi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Xu(n,e,t){const i=new Xn(n,e,t);return i.texture.mapping=Ho,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ms(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function S_(n,e,t){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:v_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function b_(n,e,t){const i=new Float32Array(Ui),s=new L(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function qu(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Yu(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Wo(){return`

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
	`}class Dd extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new md(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Je(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:ri});r.uniforms.tEquirect.value=t;const o=new Q(s,r),a=t.minFilter;return t.minFilter===zi&&(t.minFilter=en),new R0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function w_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===Jo||f===Qo)if(e.has(h)){const g=e.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new Dd(g.height);return _.fromEquirectangularTexture(n,h),e.set(h,_),h.addEventListener("dispose",l),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,g=f===Jo||f===Qo,_=f===Hi||f===Ps;if(g||_){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Wu(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const S=h.image;return g&&S&&S.height>0||_&&S&&c(S)?(i===null&&(i=new Wu(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===Jo?h.mapping=Hi:f===Qo&&(h.mapping=Ps),h}function c(h){let f=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function l(h){const f=h.target;f.removeEventListener("dispose",l);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function E_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&bs("WebGLRenderer: "+i+" extension not supported."),s}}}function T_(n,e,t,i){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const S=f.array;_=f.version;for(let y=0,v=S.length;y<v;y+=3){const b=S[y+0],w=S[y+1],A=S[y+2];h.push(b,w,w,A,A,b)}}else{const S=g.array;_=g.version;for(let y=0,v=S.length/3-1;y<v;y+=3){const b=y+0,w=y+1,A=y+2;h.push(b,w,w,A,A,b)}}const m=new(g.count>=65535?hd:ud)(h,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function A_(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function l(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*o,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let _=0;for(let m=0;m<f;m++)_+=h[m];t.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function R_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:lt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function C_(n,e,t){const i=new WeakMap,s=new Pt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let R=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",R)};var f=R;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let b=a.attributes.position.count*v,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*w*4*d),x=new cd(A,b,w,d);x.type=Dn,x.needsUpdate=!0;const E=v*4;for(let P=0;P<d;P++){const D=p[P],F=S[P],B=y[P],N=b*w*4*P;for(let O=0;O<D.count;O++){const I=O*E;g===!0&&(s.fromBufferAttribute(D,O),A[N+I+0]=s.x,A[N+I+1]=s.y,A[N+I+2]=s.z,A[N+I+3]=0),_===!0&&(s.fromBufferAttribute(F,O),A[N+I+4]=s.x,A[N+I+5]=s.y,A[N+I+6]=s.z,A[N+I+7]=0),m===!0&&(s.fromBufferAttribute(B,O),A[N+I+8]=s.x,A[N+I+9]=s.y,A[N+I+10]=s.z,A[N+I+11]=B.itemSize===4?s.w:1)}}h={count:d,texture:x,size:new ue(b,w)},i.set(a,h),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function P_(n,e,t,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const L_={[Zh]:"LINEAR_TONE_MAPPING",[$h]:"REINHARD_TONE_MAPPING",[Kh]:"CINEON_TONE_MAPPING",[jc]:"ACES_FILMIC_TONE_MAPPING",[Qh]:"AGX_TONE_MAPPING",[jh]:"NEUTRAL_TONE_MAPPING",[Jh]:"CUSTOM_TONE_MAPPING"};function D_(n,e,t,i,s,r){const o=new Xn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new Ds(e,t):void 0}),a=new Xn(e,t,{type:ai,depthBuffer:!1,stencilBuffer:!1}),c=new Dt;c.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new st([0,2,0,0,2,0],2));const l=new M0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Q(c,l),d=new vl(-1,1,1,-1,0,1);let h=null,f=null,g=!1,_,m=null,p=[],S=!1;this.setSize=function(y,v){o.setSize(y,v),a.setSize(y,v);for(let b=0;b<p.length;b++){const w=p[b];w.setSize&&w.setSize(y,v)}},this.setEffects=function(y){p=y,S=p.length>0&&p[0].isRenderPass===!0;const v=o.width,b=o.height;for(let w=0;w<p.length;w++){const A=p[w];A.setSize&&A.setSize(v,b)}},this.begin=function(y,v){if(g||y.toneMapping===Vn&&p.length===0)return!1;if(m=v,v!==null){const b=v.width,w=v.height;(o.width!==b||o.height!==w)&&this.setSize(b,w)}return S===!1&&y.setRenderTarget(o),_=y.toneMapping,y.toneMapping=Vn,!0},this.hasRenderPass=function(){return S},this.end=function(y,v){y.toneMapping=_,g=!0;let b=o,w=a;for(let A=0;A<p.length;A++){const x=p[A];if(x.enabled!==!1&&(x.render(y,w,b,v),x.needsSwap!==!1)){const E=b;b=w,w=E}}if(h!==y.outputColorSpace||f!==y.toneMapping){h=y.outputColorSpace,f=y.toneMapping,l.defines={},ut.getTransfer(h)===mt&&(l.defines.SRGB_TRANSFER="");const A=L_[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(m),y.render(u,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}const Id=new Zt,kc=new Ds(1,1),Nd=new cd,Ud=new Mm,Fd=new md,Zu=[],$u=[],Ku=new Float32Array(16),Ju=new Float32Array(9),Qu=new Float32Array(4);function Bs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Zu[s];if(r===void 0&&(r=new Float32Array(s),Zu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xo(n,e){let t=$u[e];t===void 0&&(t=new Int32Array(e),$u[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function I_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function N_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function U_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function F_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function O_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;Qu.set(i),n.uniformMatrix2fv(this.addr,!1,Qu),Gt(t,i)}}function z_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;Ju.set(i),n.uniformMatrix3fv(this.addr,!1,Ju),Gt(t,i)}}function B_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;Ku.set(i),n.uniformMatrix4fv(this.addr,!1,Ku),Gt(t,i)}}function k_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function H_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function G_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function V_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function W_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function X_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function q_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function Y_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function Z_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(kc.compareFunction=t.isReversedDepthBuffer()?cl:al,r=kc):r=Id,t.setTexture2D(e||r,s)}function $_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ud,s)}function K_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Fd,s)}function J_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Nd,s)}function Q_(n){switch(n){case 5126:return I_;case 35664:return N_;case 35665:return U_;case 35666:return F_;case 35674:return O_;case 35675:return z_;case 35676:return B_;case 5124:case 35670:return k_;case 35667:case 35671:return H_;case 35668:case 35672:return G_;case 35669:case 35673:return V_;case 5125:return W_;case 36294:return X_;case 36295:return q_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return Z_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return K_;case 36289:case 36303:case 36311:case 36292:return J_}}function j_(n,e){n.uniform1fv(this.addr,e)}function ev(n,e){const t=Bs(e,this.size,2);n.uniform2fv(this.addr,t)}function tv(n,e){const t=Bs(e,this.size,3);n.uniform3fv(this.addr,t)}function nv(n,e){const t=Bs(e,this.size,4);n.uniform4fv(this.addr,t)}function iv(n,e){const t=Bs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function sv(n,e){const t=Bs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function rv(n,e){const t=Bs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ov(n,e){n.uniform1iv(this.addr,e)}function av(n,e){n.uniform2iv(this.addr,e)}function cv(n,e){n.uniform3iv(this.addr,e)}function lv(n,e){n.uniform4iv(this.addr,e)}function uv(n,e){n.uniform1uiv(this.addr,e)}function hv(n,e){n.uniform2uiv(this.addr,e)}function dv(n,e){n.uniform3uiv(this.addr,e)}function fv(n,e){n.uniform4uiv(this.addr,e)}function pv(n,e,t){const i=this.cache,s=e.length,r=Xo(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=kc:o=Id;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function mv(n,e,t){const i=this.cache,s=e.length,r=Xo(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ud,r[o])}function gv(n,e,t){const i=this.cache,s=e.length,r=Xo(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Fd,r[o])}function xv(n,e,t){const i=this.cache,s=e.length,r=Xo(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Nd,r[o])}function _v(n){switch(n){case 5126:return j_;case 35664:return ev;case 35665:return tv;case 35666:return nv;case 35674:return iv;case 35675:return sv;case 35676:return rv;case 5124:case 35670:return ov;case 35667:case 35671:return av;case 35668:case 35672:return cv;case 35669:case 35673:return lv;case 5125:return uv;case 36294:return hv;case 36295:return dv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return pv;case 35679:case 36299:case 36307:return mv;case 35680:case 36300:case 36308:case 36293:return gv;case 36289:case 36303:case 36311:case 36292:return xv}}class vv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Q_(t.type)}}class Mv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_v(t.type)}}class yv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const La=/(\w+)(\])?(\[|\.)?/g;function ju(n,e){n.seq.push(e),n.map[e.id]=e}function Sv(n,e,t){const i=n.name,s=i.length;for(La.lastIndex=0;;){const r=La.exec(i),o=La.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ju(t,l===void 0?new vv(a,n,e):new Mv(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new yv(a),ju(t,d)),t=d}}}class Mo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Sv(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function eh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const bv=37297;let wv=0;function Ev(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const th=new Qe;function Tv(n){ut._getMatrix(th,ut.workingColorSpace,n);const e=`mat3( ${th.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case Co:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function nh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Ev(n.getShaderSource(e),a)}else return r}function Av(n,e){const t=Tv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Rv={[Zh]:"Linear",[$h]:"Reinhard",[Kh]:"Cineon",[jc]:"ACESFilmic",[Qh]:"AgX",[jh]:"Neutral",[Jh]:"Custom"};function Cv(n,e){const t=Rv[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const co=new L;function Pv(){ut.getLuminanceCoefficients(co);const n=co.x.toFixed(4),e=co.y.toFixed(4),t=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function Dv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Iv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function or(n){return n!==""}function ih(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hc(n){return n.replace(Nv,Fv)}const Uv=new Map;function Fv(n,e){let t=tt[e];if(t===void 0){const i=Uv.get(e);if(i!==void 0)t=tt[i],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Hc(t)}const Ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rh(n){return n.replace(Ov,zv)}function zv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function oh(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Bv={[mo]:"SHADOWMAP_TYPE_PCF",[sr]:"SHADOWMAP_TYPE_VSM"};function kv(n){return Bv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Hv={[Hi]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE",[Ho]:"ENVMAP_TYPE_CUBE_UV"};function Gv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Hv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Vv={[Ps]:"ENVMAP_MODE_REFRACTION"};function Wv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Vv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Xv={[Yh]:"ENVMAP_BLENDING_MULTIPLY",[zp]:"ENVMAP_BLENDING_MIX",[Bp]:"ENVMAP_BLENDING_ADD"};function qv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Xv[n.combine]||"ENVMAP_BLENDING_NONE"}function Yv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Zv(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=kv(t),l=Gv(t),u=Wv(t),d=qv(t),h=Yv(t),f=Lv(t),g=Dv(r),_=s.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(or).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(or).join(`
`),p.length>0&&(p+=`
`)):(m=[oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),p=[oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?tt.tonemapping_pars_fragment:"",t.toneMapping!==Vn?Cv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Av("linearToOutputTexel",t.outputColorSpace),Pv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(or).join(`
`)),o=Hc(o),o=ih(o,t),o=sh(o,t),a=Hc(a),a=ih(a,t),a=sh(a,t),o=rh(o),a=rh(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+o,v=S+p+a,b=eh(s,s.VERTEX_SHADER,y),w=eh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,b),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(P){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(b)||"",B=s.getShaderInfoLog(w)||"",N=D.trim(),O=F.trim(),I=B.trim();let G=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,b,w);else{const te=nh(s,b,"vertex"),Z=nh(s,w,"fragment");lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+te+`
`+Z)}else N!==""?$e("WebGLProgram: Program Info Log:",N):(O===""||I==="")&&(q=!1);q&&(P.diagnostics={runnable:G,programLog:N,vertexShader:{log:O,prefix:m},fragmentShader:{log:I,prefix:p}})}s.deleteShader(b),s.deleteShader(w),x=new Mo(s,_),E=Iv(s,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,bv)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}let $v=0;class Kv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Jv(e),t.set(e,i)),i}}class Jv{constructor(e){this.id=$v++,this.code=e,this.usedTimes=0}}function Qv(n){return n===Gi||n===To||n===Ao}function jv(n,e,t,i,s,r){const o=new hl,a=new Kv,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,E,R,P,D,F){const B=P.fog,N=D.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,I=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=e.get(x.envMap||O,I),q=G&&G.mapping===Ho?G.image.height:null,te=f[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&$e("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const Z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,le=Z!==void 0?Z.length:0;let Ne=0;N.morphAttributes.position!==void 0&&(Ne=1),N.morphAttributes.normal!==void 0&&(Ne=2),N.morphAttributes.color!==void 0&&(Ne=3);let De,Ae,$,he;if(te){const Fe=kn[te];De=Fe.vertexShader,Ae=Fe.fragmentShader}else{De=x.vertexShader,Ae=x.fragmentShader;const Fe=a.getVertexShaderStage(x),It=a.getFragmentShaderStage(x);a.update(x,Fe,It),$=Fe.id,he=It.id}const oe=n.getRenderTarget(),Ie=n.state.buffers.depth.getReversed(),ke=D.isInstancedMesh===!0,pe=D.isBatchedMesh===!0,nt=!!x.map,qe=!!x.matcap,ne=!!G,re=!!x.aoMap,se=!!x.lightMap,Me=!!x.bumpMap&&x.wireframe===!1,ae=!!x.normalMap,Ue=!!x.displacementMap,Le=!!x.emissiveMap,Ye=!!x.metalnessMap,Ke=!!x.roughnessMap,U=x.anisotropy>0,_t=x.clearcoat>0,ot=x.dispersion>0,C=x.iridescence>0,M=x.sheen>0,H=x.transmission>0,X=U&&!!x.anisotropyMap,K=_t&&!!x.clearcoatMap,de=_t&&!!x.clearcoatNormalMap,me=_t&&!!x.clearcoatRoughnessMap,J=C&&!!x.iridescenceMap,ee=C&&!!x.iridescenceThicknessMap,xe=M&&!!x.sheenColorMap,He=M&&!!x.sheenRoughnessMap,ye=!!x.specularMap,_e=!!x.specularColorMap,Xe=!!x.specularIntensityMap,Ze=H&&!!x.transmissionMap,je=H&&!!x.thicknessMap,z=!!x.gradientMap,ge=!!x.alphaMap,j=x.alphaTest>0,ve=!!x.alphaHash,Te=!!x.extensions;let ie=Vn;x.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ie=n.toneMapping);const Be={shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:De,fragmentShader:Ae,defines:x.defines,customVertexShaderID:$,customFragmentShaderID:he,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:pe,batchingColor:pe&&D._colorsTexture!==null,instancing:ke,instancingColor:ke&&D.instanceColor!==null,instancingMorph:ke&&D.morphTexture!==null,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:nt,matcap:qe,envMap:ne,envMapMode:ne&&G.mapping,envMapCubeUVHeight:q,aoMap:re,lightMap:se,bumpMap:Me,normalMap:ae,displacementMap:Ue,emissiveMap:Le,normalMapObjectSpace:ae&&x.normalMapType===Gp,normalMapTangentSpace:ae&&x.normalMapType===Dc,packedNormalMap:ae&&x.normalMapType===Dc&&Qv(x.normalMap.format),metalnessMap:Ye,roughnessMap:Ke,anisotropy:U,anisotropyMap:X,clearcoat:_t,clearcoatMap:K,clearcoatNormalMap:de,clearcoatRoughnessMap:me,dispersion:ot,iridescence:C,iridescenceMap:J,iridescenceThicknessMap:ee,sheen:M,sheenColorMap:xe,sheenRoughnessMap:He,specularMap:ye,specularColorMap:_e,specularIntensityMap:Xe,transmission:H,transmissionMap:Ze,thicknessMap:je,gradientMap:z,opaque:x.transparent===!1&&x.blending===Ss&&x.alphaToCoverage===!1,alphaMap:ge,alphaTest:j,alphaHash:ve,combine:x.combine,mapUv:nt&&g(x.map.channel),aoMapUv:re&&g(x.aoMap.channel),lightMapUv:se&&g(x.lightMap.channel),bumpMapUv:Me&&g(x.bumpMap.channel),normalMapUv:ae&&g(x.normalMap.channel),displacementMapUv:Ue&&g(x.displacementMap.channel),emissiveMapUv:Le&&g(x.emissiveMap.channel),metalnessMapUv:Ye&&g(x.metalnessMap.channel),roughnessMapUv:Ke&&g(x.roughnessMap.channel),anisotropyMapUv:X&&g(x.anisotropyMap.channel),clearcoatMapUv:K&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:de&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:He&&g(x.sheenRoughnessMap.channel),specularMapUv:ye&&g(x.specularMap.channel),specularColorMapUv:_e&&g(x.specularColorMap.channel),specularIntensityMapUv:Xe&&g(x.specularIntensityMap.channel),transmissionMapUv:Ze&&g(x.transmissionMap.channel),thicknessMapUv:je&&g(x.thicknessMap.channel),alphaMapUv:ge&&g(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ae||U),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!N.attributes.uv&&(nt||ge),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&ae===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ie,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Ne,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ie,decodeVideoTexture:nt&&x.map.isVideoTexture===!0&&ut.getTransfer(x.map.colorSpace)===mt,decodeVideoTextureEmissive:Le&&x.emissiveMap.isVideoTexture===!0&&ut.getTransfer(x.emissiveMap.colorSpace)===mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Wt,flipSided:x.side===rn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Te&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&x.extensions.multiDraw===!0||pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function m(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)E.push(R),E.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(E,x),S(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function S(x,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){const E=f[x.type];let R;if(E){const P=kn[E];R=x0.clone(P.uniforms)}else R=x.uniforms;return R}function v(x,E){let R=u.get(E);return R!==void 0?++R.usedTimes:(R=new Zv(n,E,x,s),l.push(R),u.set(E,R)),R}function b(x){if(--x.usedTimes===0){const E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:y,acquireProgram:v,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:A}}function eM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function tM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ah(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ch(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,_,m,p){let S=n[e];return S===void 0?(S={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},n[e]=S):(S.id=h.id,S.object=h,S.geometry=f,S.material=g,S.materialVariant=o(h),S.groupOrder=_,S.renderOrder=h.renderOrder,S.z=m,S.group=p),e++,S}function c(h,f,g,_,m,p){const S=a(h,f,g,_,m,p);g.transmission>0?i.push(S):g.transparent===!0?s.push(S):t.push(S)}function l(h,f,g,_,m,p){const S=a(h,f,g,_,m,p);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function u(h,f,g){t.length>1&&t.sort(h||tM),i.length>1&&i.sort(f||ah),s.length>1&&s.sort(f||ah),g&&(t.reverse(),i.reverse(),s.reverse())}function d(){for(let h=e,f=n.length;h<f;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function nM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new ch,n.set(i,[o])):s>=r.length?(o=new ch,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function iM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ct};break;case"SpotLight":t={position:new L,direction:new L,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function sM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let rM=0;function oM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function aM(n){const e=new iM,t=sM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);const s=new L,r=new Mt,o=new Mt;function a(l){let u=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,y=0,v=0,b=0,w=0,A=0;l.sort(oM);for(let E=0,R=l.length;E<R;E++){const P=l[E],D=P.color,F=P.intensity,B=P.distance;let N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Gi?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=D.r*F,d+=D.g*F,h+=D.b*F;else if(P.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(P.sh.coefficients[O],F);A++}else if(P.isDirectionalLight){const O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const I=P.shadow,G=t.get(P);G.shadowIntensity=I.intensity,G.shadowBias=I.bias,G.shadowNormalBias=I.normalBias,G.shadowRadius=I.radius,G.shadowMapSize=I.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=N,i.directionalShadowMatrix[f]=P.shadow.matrix,S++}i.directional[f]=O,f++}else if(P.isSpotLight){const O=e.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(D).multiplyScalar(F),O.distance=B,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,i.spot[_]=O;const I=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,I.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[_]=I.matrix,P.castShadow){const G=t.get(P);G.shadowIntensity=I.intensity,G.shadowBias=I.bias,G.shadowNormalBias=I.normalBias,G.shadowRadius=I.radius,G.shadowMapSize=I.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=N,v++}_++}else if(P.isRectAreaLight){const O=e.get(P);O.color.copy(D).multiplyScalar(F),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=O,m++}else if(P.isPointLight){const O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){const I=P.shadow,G=t.get(P);G.shadowIntensity=I.intensity,G.shadowBias=I.bias,G.shadowNormalBias=I.normalBias,G.shadowRadius=I.radius,G.shadowMapSize=I.mapSize,G.shadowCameraNear=I.camera.near,G.shadowCameraFar=I.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=P.shadow.matrix,y++}i.point[g]=O,g++}else if(P.isHemisphereLight){const O=e.get(P);O.skyColor.copy(P.color).multiplyScalar(F),O.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[p]=O,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==S||x.numPointShadows!==y||x.numSpotShadows!==v||x.numSpotMaps!==b||x.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+b-w,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,x.directionalLength=f,x.pointLength=g,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=S,x.numPointShadows=y,x.numSpotShadows=v,x.numSpotMaps=b,x.numLightProbes=A,i.version=rM++)}function c(l,u){let d=0,h=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const y=l[p];if(y.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(y.isSpotLight){const v=i.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function lh(n){const e=new aM(n),t=[],i=[],s=[];function r(h){d.camera=h,t.length=0,i.length=0,s.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function cM(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new lh(n),e.set(s,[a])):r>=o.length?(a=new lh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const lM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uM=`uniform sampler2D shadow_pass;
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
}`,hM=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],dM=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],uh=new Mt,Qs=new L,Da=new L;function fM(n,e,t){let i=new fl;const s=new ue,r=new ue,o=new Pt,a=new y0,c=new S0,l={},u=t.maxTextureSize,d={[wi]:rn,[rn]:wi,[Wt]:Wt},h=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:lM,fragmentShader:uM}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Dt;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Q(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mo;let p=this.type;this.render=function(w,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===vp&&($e("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=mo);const E=n.getRenderTarget(),R=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),D=n.state;D.setBlending(ri),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const F=p!==this.type;F&&A.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(N=>N.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,N=w.length;B<N;B++){const O=w[B],I=O.shadow;if(I===void 0){$e("WebGLShadowMap:",O,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const G=I.getFrameExtents();s.multiply(G),r.copy(I.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/G.x),s.x=r.x*G.x,I.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/G.y),s.y=r.y*G.y,I.mapSize.y=r.y));const q=n.state.buffers.depth.getReversed();if(I.camera._reversedDepth=q,I.map===null||F===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===sr){if(O.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Xn(s.x,s.y,{format:Gi,type:ai,minFilter:en,magFilter:en,generateMipmaps:!1}),I.map.texture.name=O.name+".shadowMap",I.map.depthTexture=new Ds(s.x,s.y,Dn),I.map.depthTexture.name=O.name+".shadowMapDepth",I.map.depthTexture.format=ci,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Xt,I.map.depthTexture.magFilter=Xt}else O.isPointLight?(I.map=new Dd(s.x),I.map.depthTexture=new Bm(s.x,qn)):(I.map=new Xn(s.x,s.y),I.map.depthTexture=new Ds(s.x,s.y,qn)),I.map.depthTexture.name=O.name+".shadowMap",I.map.depthTexture.format=ci,this.type===mo?(I.map.depthTexture.compareFunction=q?cl:al,I.map.depthTexture.minFilter=en,I.map.depthTexture.magFilter=en):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Xt,I.map.depthTexture.magFilter=Xt);I.camera.updateProjectionMatrix()}const te=I.map.isWebGLCubeRenderTarget?6:1;for(let Z=0;Z<te;Z++){if(I.map.isWebGLCubeRenderTarget)n.setRenderTarget(I.map,Z),n.clear();else{Z===0&&(n.setRenderTarget(I.map),n.clear());const le=I.getViewport(Z);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),D.viewport(o)}if(O.isPointLight){const le=I.camera,Ne=I.matrix,De=O.distance||le.far;De!==le.far&&(le.far=De,le.updateProjectionMatrix()),Qs.setFromMatrixPosition(O.matrixWorld),le.position.copy(Qs),Da.copy(le.position),Da.add(hM[Z]),le.up.copy(dM[Z]),le.lookAt(Da),le.updateMatrixWorld(),Ne.makeTranslation(-Qs.x,-Qs.y,-Qs.z),uh.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),I._frustum.setFromProjectionMatrix(uh,le.coordinateSystem,le.reversedDepth)}else I.updateMatrices(O);i=I.getFrustum(),v(A,x,I.camera,O,this.type)}I.isPointLightShadow!==!0&&this.type===sr&&S(I,x),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,R,P)};function S(w,A){const x=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Xn(s.x,s.y,{format:Gi,type:ai})),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,x,h,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,x,f,_,null)}function y(w,A,x,E){let R=null;const P=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)R=P;else if(R=x.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const D=R.uuid,F=A.uuid;let B=l[D];B===void 0&&(B={},l[D]=B);let N=B[F];N===void 0&&(N=R.clone(),B[F]=N,A.addEventListener("dispose",b)),R=N}if(R.visible=A.visible,R.wireframe=A.wireframe,E===sr?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const D=n.properties.get(R);D.light=x}return R}function v(w,A,x,E,R){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===sr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const F=e.update(w),B=w.material;if(Array.isArray(B)){const N=F.groups;for(let O=0,I=N.length;O<I;O++){const G=N[O],q=B[G.materialIndex];if(q&&q.visible){const te=y(w,q,E,R);w.onBeforeShadow(n,w,A,x,F,te,G),n.renderBufferDirect(x,null,F,te,w,G),w.onAfterShadow(n,w,A,x,F,te,G)}}}else if(B.visible){const N=y(w,B,E,R);w.onBeforeShadow(n,w,A,x,F,N,null),n.renderBufferDirect(x,null,F,N,w,null),w.onAfterShadow(n,w,A,x,F,N,null)}}const D=w.children;for(let F=0,B=D.length;F<B;F++)v(D[F],A,x,E,R)}function b(w){w.target.removeEventListener("dispose",b);for(const x in l){const E=l[x],R=w.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function pM(n,e){function t(){let z=!1;const ge=new Pt;let j=null;const ve=new Pt(0,0,0,0);return{setMask:function(Te){j!==Te&&!z&&(n.colorMask(Te,Te,Te,Te),j=Te)},setLocked:function(Te){z=Te},setClear:function(Te,ie,Be,Fe,It){It===!0&&(Te*=Fe,ie*=Fe,Be*=Fe),ge.set(Te,ie,Be,Fe),ve.equals(ge)===!1&&(n.clearColor(Te,ie,Be,Fe),ve.copy(ge))},reset:function(){z=!1,j=null,ve.set(-1,0,0,0)}}}function i(){let z=!1,ge=!1,j=null,ve=null,Te=null;return{setReversed:function(ie){if(ge!==ie){const Be=e.get("EXT_clip_control");ie?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ge=ie;const Fe=Te;Te=null,this.setClear(Fe)}},getReversed:function(){return ge},setTest:function(ie){ie?oe(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(ie){j!==ie&&!z&&(n.depthMask(ie),j=ie)},setFunc:function(ie){if(ge&&(ie=Qp[ie]),ve!==ie){switch(ie){case Za:n.depthFunc(n.NEVER);break;case $a:n.depthFunc(n.ALWAYS);break;case Ka:n.depthFunc(n.LESS);break;case Cs:n.depthFunc(n.LEQUAL);break;case Ja:n.depthFunc(n.EQUAL);break;case Qa:n.depthFunc(n.GEQUAL);break;case ja:n.depthFunc(n.GREATER);break;case ec:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=ie}},setLocked:function(ie){z=ie},setClear:function(ie){Te!==ie&&(Te=ie,ge&&(ie=1-ie),n.clearDepth(ie))},reset:function(){z=!1,j=null,ve=null,Te=null,ge=!1}}}function s(){let z=!1,ge=null,j=null,ve=null,Te=null,ie=null,Be=null,Fe=null,It=null;return{setTest:function(wt){z||(wt?oe(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(wt){ge!==wt&&!z&&(n.stencilMask(wt),ge=wt)},setFunc:function(wt,Nn,Un){(j!==wt||ve!==Nn||Te!==Un)&&(n.stencilFunc(wt,Nn,Un),j=wt,ve=Nn,Te=Un)},setOp:function(wt,Nn,Un){(ie!==wt||Be!==Nn||Fe!==Un)&&(n.stencilOp(wt,Nn,Un),ie=wt,Be=Nn,Fe=Un)},setLocked:function(wt){z=wt},setClear:function(wt){It!==wt&&(n.clearStencil(wt),It=wt)},reset:function(){z=!1,ge=null,j=null,ve=null,Te=null,ie=null,Be=null,Fe=null,It=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,S=null,y=null,v=null,b=null,w=null,A=null,x=new ct(0,0,0),E=0,R=!1,P=null,D=null,F=null,B=null,N=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,G=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(q)[1]),I=G>=1):q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),I=G>=2);let te=null,Z={};const le=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),De=new Pt().fromArray(le),Ae=new Pt().fromArray(Ne);function $(z,ge,j,ve){const Te=new Uint8Array(4),ie=n.createTexture();n.bindTexture(z,ie),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<j;Be++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(ge+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return ie}const he={};he[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(Cs),Me(!1),ae(tu),oe(n.CULL_FACE),re(ri);function oe(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function Ie(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function ke(z,ge){return h[z]!==ge?(n.bindFramebuffer(z,ge),h[z]=ge,z===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ge),z===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function pe(z,ge){let j=g,ve=!1;if(z){j=f.get(ge),j===void 0&&(j=[],f.set(ge,j));const Te=z.textures;if(j.length!==Te.length||j[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Be=Te.length;ie<Be;ie++)j[ie]=n.COLOR_ATTACHMENT0+ie;j.length=Te.length,ve=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,ve=!0);ve&&n.drawBuffers(j)}function nt(z){return _!==z?(n.useProgram(z),_=z,!0):!1}const qe={[Ni]:n.FUNC_ADD,[yp]:n.FUNC_SUBTRACT,[Sp]:n.FUNC_REVERSE_SUBTRACT};qe[bp]=n.MIN,qe[wp]=n.MAX;const ne={[Ep]:n.ZERO,[Tp]:n.ONE,[Ap]:n.SRC_COLOR,[qa]:n.SRC_ALPHA,[Ip]:n.SRC_ALPHA_SATURATE,[Lp]:n.DST_COLOR,[Cp]:n.DST_ALPHA,[Rp]:n.ONE_MINUS_SRC_COLOR,[Ya]:n.ONE_MINUS_SRC_ALPHA,[Dp]:n.ONE_MINUS_DST_COLOR,[Pp]:n.ONE_MINUS_DST_ALPHA,[Np]:n.CONSTANT_COLOR,[Up]:n.ONE_MINUS_CONSTANT_COLOR,[Fp]:n.CONSTANT_ALPHA,[Op]:n.ONE_MINUS_CONSTANT_ALPHA};function re(z,ge,j,ve,Te,ie,Be,Fe,It,wt){if(z===ri){m===!0&&(Ie(n.BLEND),m=!1);return}if(m===!1&&(oe(n.BLEND),m=!0),z!==Mp){if(z!==p||wt!==R){if((S!==Ni||b!==Ni)&&(n.blendEquation(n.FUNC_ADD),S=Ni,b=Ni),wt)switch(z){case Ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xa:n.blendFunc(n.ONE,n.ONE);break;case nu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case iu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:lt("WebGLState: Invalid blending: ",z);break}else switch(z){case Ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case nu:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case iu:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",z);break}y=null,v=null,w=null,A=null,x.set(0,0,0),E=0,p=z,R=wt}return}Te=Te||ge,ie=ie||j,Be=Be||ve,(ge!==S||Te!==b)&&(n.blendEquationSeparate(qe[ge],qe[Te]),S=ge,b=Te),(j!==y||ve!==v||ie!==w||Be!==A)&&(n.blendFuncSeparate(ne[j],ne[ve],ne[ie],ne[Be]),y=j,v=ve,w=ie,A=Be),(Fe.equals(x)===!1||It!==E)&&(n.blendColor(Fe.r,Fe.g,Fe.b,It),x.copy(Fe),E=It),p=z,R=!1}function se(z,ge){z.side===Wt?Ie(n.CULL_FACE):oe(n.CULL_FACE);let j=z.side===rn;ge&&(j=!j),Me(j),z.blending===Ss&&z.transparent===!1?re(ri):re(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const ve=z.stencilWrite;a.setTest(ve),ve&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Le(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function Me(z){P!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),P=z)}function ae(z){z!==xp?(oe(n.CULL_FACE),z!==D&&(z===tu?n.cullFace(n.BACK):z===_p?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),D=z}function Ue(z){z!==F&&(I&&n.lineWidth(z),F=z)}function Le(z,ge,j){z?(oe(n.POLYGON_OFFSET_FILL),(B!==ge||N!==j)&&(B=ge,N=j,o.getReversed()&&(ge=-ge),n.polygonOffset(ge,j))):Ie(n.POLYGON_OFFSET_FILL)}function Ye(z){z?oe(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function Ke(z){z===void 0&&(z=n.TEXTURE0+O-1),te!==z&&(n.activeTexture(z),te=z)}function U(z,ge,j){j===void 0&&(te===null?j=n.TEXTURE0+O-1:j=te);let ve=Z[j];ve===void 0&&(ve={type:void 0,texture:void 0},Z[j]=ve),(ve.type!==z||ve.texture!==ge)&&(te!==j&&(n.activeTexture(j),te=j),n.bindTexture(z,ge||he[z]),ve.type=z,ve.texture=ge)}function _t(){const z=Z[te];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ot(){try{n.compressedTexImage2D(...arguments)}catch(z){lt("WebGLState:",z)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(z){lt("WebGLState:",z)}}function M(){try{n.texSubImage2D(...arguments)}catch(z){lt("WebGLState:",z)}}function H(){try{n.texSubImage3D(...arguments)}catch(z){lt("WebGLState:",z)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(z){lt("WebGLState:",z)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(z){lt("WebGLState:",z)}}function de(){try{n.texStorage2D(...arguments)}catch(z){lt("WebGLState:",z)}}function me(){try{n.texStorage3D(...arguments)}catch(z){lt("WebGLState:",z)}}function J(){try{n.texImage2D(...arguments)}catch(z){lt("WebGLState:",z)}}function ee(){try{n.texImage3D(...arguments)}catch(z){lt("WebGLState:",z)}}function xe(z){return d[z]!==void 0?d[z]:n.getParameter(z)}function He(z,ge){d[z]!==ge&&(n.pixelStorei(z,ge),d[z]=ge)}function ye(z){De.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),De.copy(z))}function _e(z){Ae.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Ae.copy(z))}function Xe(z,ge){let j=l.get(ge);j===void 0&&(j=new WeakMap,l.set(ge,j));let ve=j.get(z);ve===void 0&&(ve=n.getUniformBlockIndex(ge,z.name),j.set(z,ve))}function Ze(z,ge){const ve=l.get(ge).get(z);c.get(ge)!==ve&&(n.uniformBlockBinding(ge,ve,z.__bindingPointIndex),c.set(ge,ve))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},te=null,Z={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,S=null,y=null,v=null,b=null,w=null,A=null,x=new ct(0,0,0),E=0,R=!1,P=null,D=null,F=null,B=null,N=null,De.set(0,0,n.canvas.width,n.canvas.height),Ae.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:Ie,bindFramebuffer:ke,drawBuffers:pe,useProgram:nt,setBlending:re,setMaterial:se,setFlipSided:Me,setCullFace:ae,setLineWidth:Ue,setPolygonOffset:Le,setScissorTest:Ye,activeTexture:Ke,bindTexture:U,unbindTexture:_t,compressedTexImage2D:ot,compressedTexImage3D:C,texImage2D:J,texImage3D:ee,pixelStorei:He,getParameter:xe,updateUBOMapping:Xe,uniformBlockBinding:Ze,texStorage2D:de,texStorage3D:me,texSubImage2D:M,texSubImage3D:H,compressedTexSubImage2D:X,compressedTexSubImage3D:K,scissor:ye,viewport:_e,reset:je}}function mM(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ue,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return g?new OffscreenCanvas(C,M):Po("canvas")}function m(C,M,H){let X=1;const K=ot(C);if((K.width>H||K.height>H)&&(X=H/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const de=Math.floor(X*K.width),me=Math.floor(X*K.height);h===void 0&&(h=_(de,me));const J=M?_(de,me):h;return J.width=de,J.height=me,J.getContext("2d").drawImage(C,0,0,de,me),$e("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+de+"x"+me+")."),J}else return"data"in C&&$e("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function p(C){return C.generateMipmaps}function S(C){n.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(C,M,H,X,K,de=!1){if(C!==null){if(n[C]!==void 0)return n[C];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let me;X&&(me=e.get("EXT_texture_norm16"),me||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=M;if(M===n.RED&&(H===n.FLOAT&&(J=n.R32F),H===n.HALF_FLOAT&&(J=n.R16F),H===n.UNSIGNED_BYTE&&(J=n.R8),H===n.UNSIGNED_SHORT&&me&&(J=me.R16_EXT),H===n.SHORT&&me&&(J=me.R16_SNORM_EXT)),M===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.R8UI),H===n.UNSIGNED_SHORT&&(J=n.R16UI),H===n.UNSIGNED_INT&&(J=n.R32UI),H===n.BYTE&&(J=n.R8I),H===n.SHORT&&(J=n.R16I),H===n.INT&&(J=n.R32I)),M===n.RG&&(H===n.FLOAT&&(J=n.RG32F),H===n.HALF_FLOAT&&(J=n.RG16F),H===n.UNSIGNED_BYTE&&(J=n.RG8),H===n.UNSIGNED_SHORT&&me&&(J=me.RG16_EXT),H===n.SHORT&&me&&(J=me.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.RG8UI),H===n.UNSIGNED_SHORT&&(J=n.RG16UI),H===n.UNSIGNED_INT&&(J=n.RG32UI),H===n.BYTE&&(J=n.RG8I),H===n.SHORT&&(J=n.RG16I),H===n.INT&&(J=n.RG32I)),M===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.RGB8UI),H===n.UNSIGNED_SHORT&&(J=n.RGB16UI),H===n.UNSIGNED_INT&&(J=n.RGB32UI),H===n.BYTE&&(J=n.RGB8I),H===n.SHORT&&(J=n.RGB16I),H===n.INT&&(J=n.RGB32I)),M===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),H===n.UNSIGNED_INT&&(J=n.RGBA32UI),H===n.BYTE&&(J=n.RGBA8I),H===n.SHORT&&(J=n.RGBA16I),H===n.INT&&(J=n.RGBA32I)),M===n.RGB&&(H===n.UNSIGNED_SHORT&&me&&(J=me.RGB16_EXT),H===n.SHORT&&me&&(J=me.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),M===n.RGBA){const ee=de?Co:ut.getTransfer(K);H===n.FLOAT&&(J=n.RGBA32F),H===n.HALF_FLOAT&&(J=n.RGBA16F),H===n.UNSIGNED_BYTE&&(J=ee===mt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&me&&(J=me.RGBA16_EXT),H===n.SHORT&&me&&(J=me.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function b(C,M){let H;return C?M===null||M===qn||M===_r?H=n.DEPTH24_STENCIL8:M===Dn?H=n.DEPTH32F_STENCIL8:M===xr&&(H=n.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===qn||M===_r?H=n.DEPTH_COMPONENT24:M===Dn?H=n.DEPTH_COMPONENT32F:M===xr&&(H=n.DEPTH_COMPONENT16),H}function w(C,M){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Xt&&C.minFilter!==en?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){const M=C.target;M.removeEventListener("dispose",A),E(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&d.delete(M)}function x(C){const M=C.target;M.removeEventListener("dispose",x),P(M)}function E(C){const M=i.get(C);if(M.__webglInit===void 0)return;const H=C.source,X=f.get(H);if(X){const K=X[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&R(C),Object.keys(X).length===0&&f.delete(H)}i.remove(C)}function R(C){const M=i.get(C);n.deleteTexture(M.__webglTexture);const H=C.source,X=f.get(H);delete X[M.__cacheKey],o.memory.textures--}function P(C){const M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(M.__webglFramebuffer[X]))for(let K=0;K<M.__webglFramebuffer[X].length;K++)n.deleteFramebuffer(M.__webglFramebuffer[X][K]);else n.deleteFramebuffer(M.__webglFramebuffer[X]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[X])}else{if(Array.isArray(M.__webglFramebuffer))for(let X=0;X<M.__webglFramebuffer.length;X++)n.deleteFramebuffer(M.__webglFramebuffer[X]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let X=0;X<M.__webglColorRenderbuffer.length;X++)M.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=C.textures;for(let X=0,K=H.length;X<K;X++){const de=i.get(H[X]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(H[X])}i.remove(C)}let D=0;function F(){D=0}function B(){return D}function N(C){D=C}function O(){const C=D;return C>=s.maxTextures&&$e("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function I(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function G(C,M){const H=i.get(C);if(C.isVideoTexture&&U(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){const X=C.image;if(X===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(H,C,M);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+M)}function q(C,M){const H=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Ie(H,C,M);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+M)}function te(C,M){const H=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Ie(H,C,M);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+M)}function Z(C,M){const H=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){ke(H,C,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+M)}const le={[Eo]:n.REPEAT,[ni]:n.CLAMP_TO_EDGE,[tc]:n.MIRRORED_REPEAT},Ne={[Xt]:n.NEAREST,[kp]:n.NEAREST_MIPMAP_NEAREST,[Ur]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[jo]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR},De={[Vp]:n.NEVER,[Zp]:n.ALWAYS,[Wp]:n.LESS,[al]:n.LEQUAL,[Xp]:n.EQUAL,[cl]:n.GEQUAL,[qp]:n.GREATER,[Yp]:n.NOTEQUAL};function Ae(C,M){if(M.type===Dn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===en||M.magFilter===jo||M.magFilter===Ur||M.magFilter===zi||M.minFilter===en||M.minFilter===jo||M.minFilter===Ur||M.minFilter===zi)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,le[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,le[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,le[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Ne[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Ne[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,De[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Xt||M.minFilter!==Ur&&M.minFilter!==zi||M.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function $(C,M){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));const X=M.source;let K=f.get(X);K===void 0&&(K={},f.set(X,K));const de=I(M);if(de!==C.__cacheKey){K[de]===void 0&&(K[de]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),K[de].usedTimes++;const me=K[C.__cacheKey];me!==void 0&&(K[C.__cacheKey].usedTimes--,me.usedTimes===0&&R(M)),C.__cacheKey=de,C.__webglTexture=K[de].texture}return H}function he(C,M,H){return Math.floor(Math.floor(C/H)/M)}function oe(C,M,H,X){const de=C.updateRanges;if(de.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,H,X,M.data);else{de.sort((He,ye)=>He.start-ye.start);let me=0;for(let He=1;He<de.length;He++){const ye=de[me],_e=de[He],Xe=ye.start+ye.count,Ze=he(_e.start,M.width,4),je=he(ye.start,M.width,4);_e.start<=Xe+1&&Ze===je&&he(_e.start+_e.count-1,M.width,4)===Ze?ye.count=Math.max(ye.count,_e.start+_e.count-ye.start):(++me,de[me]=_e)}de.length=me+1;const J=t.getParameter(n.UNPACK_ROW_LENGTH),ee=t.getParameter(n.UNPACK_SKIP_PIXELS),xe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let He=0,ye=de.length;He<ye;He++){const _e=de[He],Xe=Math.floor(_e.start/4),Ze=Math.ceil(_e.count/4),je=Xe%M.width,z=Math.floor(Xe/M.width),ge=Ze,j=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,je),t.pixelStorei(n.UNPACK_SKIP_ROWS,z),t.texSubImage2D(n.TEXTURE_2D,0,je,z,ge,j,H,X,M.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,J),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(n.UNPACK_SKIP_ROWS,xe)}}function Ie(C,M,H){let X=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=n.TEXTURE_3D);const K=$(C,M),de=M.source;t.bindTexture(X,C.__webglTexture,n.TEXTURE0+H);const me=i.get(de);if(de.version!==me.__version||K===!0){if(t.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const j=ut.getPrimaries(ut.workingColorSpace),ve=M.colorSpace===yi?null:ut.getPrimaries(M.colorSpace),Te=M.colorSpace===yi||j===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let ee=m(M.image,!1,s.maxTextureSize);ee=_t(M,ee);const xe=r.convert(M.format,M.colorSpace),He=r.convert(M.type);let ye=v(M.internalFormat,xe,He,M.normalized,M.colorSpace,M.isVideoTexture);Ae(X,M);let _e;const Xe=M.mipmaps,Ze=M.isVideoTexture!==!0,je=me.__version===void 0||K===!0,z=de.dataReady,ge=w(M,ee);if(M.isDepthTexture)ye=b(M.format===Bi,M.type),je&&(Ze?t.texStorage2D(n.TEXTURE_2D,1,ye,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,ye,ee.width,ee.height,0,xe,He,null));else if(M.isDataTexture)if(Xe.length>0){Ze&&je&&t.texStorage2D(n.TEXTURE_2D,ge,ye,Xe[0].width,Xe[0].height);for(let j=0,ve=Xe.length;j<ve;j++)_e=Xe[j],Ze?z&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,_e.width,_e.height,xe,He,_e.data):t.texImage2D(n.TEXTURE_2D,j,ye,_e.width,_e.height,0,xe,He,_e.data);M.generateMipmaps=!1}else Ze?(je&&t.texStorage2D(n.TEXTURE_2D,ge,ye,ee.width,ee.height),z&&oe(M,ee,xe,He)):t.texImage2D(n.TEXTURE_2D,0,ye,ee.width,ee.height,0,xe,He,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ze&&je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,ye,Xe[0].width,Xe[0].height,ee.depth);for(let j=0,ve=Xe.length;j<ve;j++)if(_e=Xe[j],M.format!==In)if(xe!==null)if(Ze){if(z)if(M.layerUpdates.size>0){const Te=Hu(_e.width,_e.height,M.format,M.type);for(const ie of M.layerUpdates){const Be=_e.data.subarray(ie*Te/_e.data.BYTES_PER_ELEMENT,(ie+1)*Te/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,ie,_e.width,_e.height,1,xe,Be)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,ee.depth,xe,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,ye,_e.width,_e.height,ee.depth,0,_e.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,ee.depth,xe,He,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,ye,_e.width,_e.height,ee.depth,0,xe,He,_e.data)}else{Ze&&je&&t.texStorage2D(n.TEXTURE_2D,ge,ye,Xe[0].width,Xe[0].height);for(let j=0,ve=Xe.length;j<ve;j++)_e=Xe[j],M.format!==In?xe!==null?Ze?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,_e.width,_e.height,xe,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,j,ye,_e.width,_e.height,0,_e.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?z&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,_e.width,_e.height,xe,He,_e.data):t.texImage2D(n.TEXTURE_2D,j,ye,_e.width,_e.height,0,xe,He,_e.data)}else if(M.isDataArrayTexture)if(Ze){if(je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,ye,ee.width,ee.height,ee.depth),z)if(M.layerUpdates.size>0){const j=Hu(ee.width,ee.height,M.format,M.type);for(const ve of M.layerUpdates){const Te=ee.data.subarray(ve*j/ee.data.BYTES_PER_ELEMENT,(ve+1)*j/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ve,ee.width,ee.height,1,xe,He,Te)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,xe,He,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,ee.width,ee.height,ee.depth,0,xe,He,ee.data);else if(M.isData3DTexture)Ze?(je&&t.texStorage3D(n.TEXTURE_3D,ge,ye,ee.width,ee.height,ee.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,xe,He,ee.data)):t.texImage3D(n.TEXTURE_3D,0,ye,ee.width,ee.height,ee.depth,0,xe,He,ee.data);else if(M.isFramebufferTexture){if(je)if(Ze)t.texStorage2D(n.TEXTURE_2D,ge,ye,ee.width,ee.height);else{let j=ee.width,ve=ee.height;for(let Te=0;Te<ge;Te++)t.texImage2D(n.TEXTURE_2D,Te,ye,j,ve,0,xe,He,null),j>>=1,ve>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const j=n.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),ee.parentNode!==j){j.appendChild(ee),d.add(M),j.onpaint=ve=>{const Te=ve.changedElements;for(const ie of d)Te.includes(ie.image)&&(ie.needsUpdate=!0)},j.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ee);else{const Te=n.RGBA,ie=n.RGBA,Be=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Te,ie,Be,ee)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(Ze&&je){const j=ot(Xe[0]);t.texStorage2D(n.TEXTURE_2D,ge,ye,j.width,j.height)}for(let j=0,ve=Xe.length;j<ve;j++)_e=Xe[j],Ze?z&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,xe,He,_e):t.texImage2D(n.TEXTURE_2D,j,ye,xe,He,_e);M.generateMipmaps=!1}else if(Ze){if(je){const j=ot(ee);t.texStorage2D(n.TEXTURE_2D,ge,ye,j.width,j.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,He,ee)}else t.texImage2D(n.TEXTURE_2D,0,ye,xe,He,ee);p(M)&&S(X),me.__version=de.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ke(C,M,H){if(M.image.length!==6)return;const X=$(C,M),K=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+H);const de=i.get(K);if(K.version!==de.__version||X===!0){t.activeTexture(n.TEXTURE0+H);const me=ut.getPrimaries(ut.workingColorSpace),J=M.colorSpace===yi?null:ut.getPrimaries(M.colorSpace),ee=M.colorSpace===yi||me===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const xe=M.isCompressedTexture||M.image[0].isCompressedTexture,He=M.image[0]&&M.image[0].isDataTexture,ye=[];for(let ie=0;ie<6;ie++)!xe&&!He?ye[ie]=m(M.image[ie],!0,s.maxCubemapSize):ye[ie]=He?M.image[ie].image:M.image[ie],ye[ie]=_t(M,ye[ie]);const _e=ye[0],Xe=r.convert(M.format,M.colorSpace),Ze=r.convert(M.type),je=v(M.internalFormat,Xe,Ze,M.normalized,M.colorSpace),z=M.isVideoTexture!==!0,ge=de.__version===void 0||X===!0,j=K.dataReady;let ve=w(M,_e);Ae(n.TEXTURE_CUBE_MAP,M);let Te;if(xe){z&&ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,je,_e.width,_e.height);for(let ie=0;ie<6;ie++){Te=ye[ie].mipmaps;for(let Be=0;Be<Te.length;Be++){const Fe=Te[Be];M.format!==In?Xe!==null?z?j&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Be,0,0,Fe.width,Fe.height,Xe,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Be,je,Fe.width,Fe.height,0,Fe.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Be,0,0,Fe.width,Fe.height,Xe,Ze,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Be,je,Fe.width,Fe.height,0,Xe,Ze,Fe.data)}}}else{if(Te=M.mipmaps,z&&ge){Te.length>0&&ve++;const ie=ot(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,je,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(He){z?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ye[ie].width,ye[ie].height,Xe,Ze,ye[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,je,ye[ie].width,ye[ie].height,0,Xe,Ze,ye[ie].data);for(let Be=0;Be<Te.length;Be++){const It=Te[Be].image[ie].image;z?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Be+1,0,0,It.width,It.height,Xe,Ze,It.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Be+1,je,It.width,It.height,0,Xe,Ze,It.data)}}else{z?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Xe,Ze,ye[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,je,Xe,Ze,ye[ie]);for(let Be=0;Be<Te.length;Be++){const Fe=Te[Be];z?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Be+1,0,0,Xe,Ze,Fe.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Be+1,je,Xe,Ze,Fe.image[ie])}}}p(M)&&S(n.TEXTURE_CUBE_MAP),de.__version=K.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function pe(C,M,H,X,K,de){const me=r.convert(H.format,H.colorSpace),J=r.convert(H.type),ee=v(H.internalFormat,me,J,H.normalized,H.colorSpace),xe=i.get(M),He=i.get(H);if(He.__renderTarget=M,!xe.__hasExternalTextures){const ye=Math.max(1,M.width>>de),_e=Math.max(1,M.height>>de);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,de,ee,ye,_e,M.depth,0,me,J,null):t.texImage2D(K,de,ee,ye,_e,0,me,J,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ke(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,K,He.__webglTexture,0,Ye(M)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,K,He.__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(C,M,H){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer){const X=M.depthTexture,K=X&&X.isDepthTexture?X.type:null,de=b(M.stencilBuffer,K),me=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ke(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye(M),de,M.width,M.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye(M),de,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,de,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,C)}else{const X=M.textures;for(let K=0;K<X.length;K++){const de=X[K],me=r.convert(de.format,de.colorSpace),J=r.convert(de.type),ee=v(de.internalFormat,me,J,de.normalized,de.colorSpace);Ke(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye(M),ee,M.width,M.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye(M),ee,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ee,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qe(C,M,H){const X=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(M.depthTexture);if(K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X){if(K.__webglInit===void 0&&(K.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,M.depthTexture);const xe=r.convert(M.depthTexture.format),He=r.convert(M.depthTexture.type);let ye;M.depthTexture.format===ci?ye=n.DEPTH_COMPONENT24:M.depthTexture.format===Bi&&(ye=n.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ye,M.width,M.height,0,xe,He,null)}}else G(M.depthTexture,0);const de=K.__webglTexture,me=Ye(M),J=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,ee=M.depthTexture.format===Bi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===ci)Ke(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,J,de,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,ee,J,de,0);else if(M.depthTexture.format===Bi)Ke(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,J,de,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,ee,J,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(C){const M=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),X){const K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=X}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let X=0;X<6;X++)qe(M.__webglFramebuffer[X],C,X);else{const X=C.texture.mipmaps;X&&X.length>0?qe(M.__webglFramebuffer[0],C,0):qe(M.__webglFramebuffer,C,0)}else if(H){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]===void 0)M.__webglDepthbuffer[X]=n.createRenderbuffer(),nt(M.__webglDepthbuffer[X],C,!1);else{const K=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=M.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,de)}}else{const X=C.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),nt(M.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,de)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(C,M,H){const X=i.get(C);M!==void 0&&pe(X.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&ne(C)}function se(C){const M=C.texture,H=i.get(C),X=i.get(M);C.addEventListener("dispose",x);const K=C.textures,de=C.isWebGLCubeRenderTarget===!0,me=K.length>1;if(me||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=M.version,o.memory.textures++),de){H.__webglFramebuffer=[];for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[J]=[];for(let ee=0;ee<M.mipmaps.length;ee++)H.__webglFramebuffer[J][ee]=n.createFramebuffer()}else H.__webglFramebuffer[J]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let J=0;J<M.mipmaps.length;J++)H.__webglFramebuffer[J]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(me)for(let J=0,ee=K.length;J<ee;J++){const xe=i.get(K[J]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Ke(C)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){const ee=K[J];H.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[J]);const xe=r.convert(ee.format,ee.colorSpace),He=r.convert(ee.type),ye=v(ee.internalFormat,xe,He,ee.normalized,ee.colorSpace,C.isXRRenderTarget===!0),_e=Ye(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,ye,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,H.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),nt(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,M);for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)pe(H.__webglFramebuffer[J][ee],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ee);else pe(H.__webglFramebuffer[J],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(M)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let J=0,ee=K.length;J<ee;J++){const xe=K[J],He=i.get(xe);let ye=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ye=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,He.__webglTexture),Ae(ye,xe),pe(H.__webglFramebuffer,C,xe,n.COLOR_ATTACHMENT0+J,ye,0),p(xe)&&S(ye)}t.unbindTexture()}else{let J=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,X.__webglTexture),Ae(J,M),M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)pe(H.__webglFramebuffer[ee],C,M,n.COLOR_ATTACHMENT0,J,ee);else pe(H.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,J,0);p(M)&&S(J),t.unbindTexture()}C.depthBuffer&&ne(C)}function Me(C){const M=C.textures;for(let H=0,X=M.length;H<X;H++){const K=M[H];if(p(K)){const de=y(C),me=i.get(K).__webglTexture;t.bindTexture(de,me),S(de),t.unbindTexture()}}}const ae=[],Ue=[];function Le(C){if(C.samples>0){if(Ke(C)===!1){const M=C.textures,H=C.width,X=C.height;let K=n.COLOR_BUFFER_BIT;const de=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(C),J=M.length>1;if(J)for(let xe=0;xe<M.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const ee=C.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[xe]);const He=i.get(M[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,He,0)}n.blitFramebuffer(0,0,H,X,0,0,H,X,K,n.NEAREST),c===!0&&(ae.length=0,Ue.length=0,ae.push(n.COLOR_ATTACHMENT0+xe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ae.push(de),Ue.push(de),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ue)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ae))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let xe=0;xe<M.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,me.__webglColorRenderbuffer[xe]);const He=i.get(M[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,He,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Ye(C){return Math.min(s.maxSamples,C.samples)}function Ke(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function U(C){const M=o.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function _t(C,M){const H=C.colorSpace,X=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Ro&&H!==yi&&(ut.getTransfer(H)===mt?(X!==In||K!==xn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",H)),M}function ot(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.getTextureUnits=B,this.setTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=q,this.setTexture3D=te,this.setTextureCube=Z,this.rebindTextures=re,this.setupRenderTarget=se,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function gM(n,e){function t(i,s=yi){let r;const o=ut.getTransfer(s);if(i===xn)return n.UNSIGNED_BYTE;if(i===tl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===id)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===sd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===td)return n.BYTE;if(i===nd)return n.SHORT;if(i===xr)return n.UNSIGNED_SHORT;if(i===el)return n.INT;if(i===qn)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===ai)return n.HALF_FLOAT;if(i===rd)return n.ALPHA;if(i===od)return n.RGB;if(i===In)return n.RGBA;if(i===ci)return n.DEPTH_COMPONENT;if(i===Bi)return n.DEPTH_STENCIL;if(i===il)return n.RED;if(i===sl)return n.RED_INTEGER;if(i===Gi)return n.RG;if(i===rl)return n.RG_INTEGER;if(i===ol)return n.RGBA_INTEGER;if(i===go||i===xo||i===_o||i===vo)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nc||i===ic||i===sc||i===rc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oc||i===ac||i===cc||i===lc||i===uc||i===To||i===hc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===oc||i===ac)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===cc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===lc)return r.COMPRESSED_R11_EAC;if(i===uc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===To)return r.COMPRESSED_RG11_EAC;if(i===hc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===dc||i===fc||i===pc||i===mc||i===gc||i===xc||i===_c||i===vc||i===Mc||i===yc||i===Sc||i===bc||i===wc||i===Ec)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===dc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_c)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ec)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tc||i===Ac||i===Rc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Tc)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cc||i===Pc||i===Ao||i===Lc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Cc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const xM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_M=`
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

}`;class vM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new gd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new bn({vertexShader:xM,fragmentShader:_M,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Q(new cn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MM extends Xi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new vM,p={},S=t.getContextAttributes();let y=null,v=null;const b=[],w=[],A=new ue;let x=null;const E=new gn;E.viewport=new Pt;const R=new gn;R.viewport=new Pt;const P=[E,R],D=new C0;let F=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let he=b[$];return he===void 0&&(he=new ra,b[$]=he),he.getTargetRaySpace()},this.getControllerGrip=function($){let he=b[$];return he===void 0&&(he=new ra,b[$]=he),he.getGripSpace()},this.getHand=function($){let he=b[$];return he===void 0&&(he=new ra,b[$]=he),he.getHandSpace()};function N($){const he=w.indexOf($.inputSource);if(he===-1)return;const oe=b[he];oe!==void 0&&(oe.update($.inputSource,$.frame,l||o),oe.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",I);for(let $=0;$<b.length;$++){const he=w[$];he!==null&&(w[$]=null,b[$].disconnect(he))}F=null,B=null,m.reset();for(const $ in p)delete p[$];e.setRenderTarget(y),f=null,h=null,d=null,s=null,v=null,Ae.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",O),s.addEventListener("inputsourceschange",I),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Ie=null,ke=null;S.depth&&(ke=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=S.stencil?Bi:ci,Ie=S.stencil?_r:qn);const pe={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(pe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Xn(h.textureWidth,h.textureHeight,{format:In,type:xn,depthTexture:new Ds(h.textureWidth,h.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const oe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Xn(f.framebufferWidth,f.framebufferHeight,{format:In,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ae.setContext(s),Ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function I($){for(let he=0;he<$.removed.length;he++){const oe=$.removed[he],Ie=w.indexOf(oe);Ie>=0&&(w[Ie]=null,b[Ie].disconnect(oe))}for(let he=0;he<$.added.length;he++){const oe=$.added[he];let Ie=w.indexOf(oe);if(Ie===-1){for(let pe=0;pe<b.length;pe++)if(pe>=w.length){w.push(oe),Ie=pe;break}else if(w[pe]===null){w[pe]=oe,Ie=pe;break}if(Ie===-1)break}const ke=b[Ie];ke&&ke.connect(oe)}}const G=new L,q=new L;function te($,he,oe){G.setFromMatrixPosition(he.matrixWorld),q.setFromMatrixPosition(oe.matrixWorld);const Ie=G.distanceTo(q),ke=he.projectionMatrix.elements,pe=oe.projectionMatrix.elements,nt=ke[14]/(ke[10]-1),qe=ke[14]/(ke[10]+1),ne=(ke[9]+1)/ke[5],re=(ke[9]-1)/ke[5],se=(ke[8]-1)/ke[0],Me=(pe[8]+1)/pe[0],ae=nt*se,Ue=nt*Me,Le=Ie/(-se+Me),Ye=Le*-se;if(he.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ye),$.translateZ(Le),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ke[10]===-1)$.projectionMatrix.copy(he.projectionMatrix),$.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ke=nt+Le,U=qe+Le,_t=ae-Ye,ot=Ue+(Ie-Ye),C=ne*qe/U*Ke,M=re*qe/U*Ke;$.projectionMatrix.makePerspective(_t,ot,C,M,Ke,U),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Z($,he){he===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(he.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let he=$.near,oe=$.far;m.texture!==null&&(m.depthNear>0&&(he=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),D.near=R.near=E.near=he,D.far=R.far=E.far=oe,(F!==D.near||B!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),F=D.near,B=D.far),D.layers.mask=$.layers.mask|6,E.layers.mask=D.layers.mask&-5,R.layers.mask=D.layers.mask&-3;const Ie=$.parent,ke=D.cameras;Z(D,Ie);for(let pe=0;pe<ke.length;pe++)Z(ke[pe],Ie);ke.length===2?te(D,E,R):D.projectionMatrix.copy(E.projectionMatrix),le($,D,Ie)};function le($,he,oe){oe===null?$.matrix.copy(he.matrixWorld):($.matrix.copy(oe.matrixWorld),$.matrix.invert(),$.matrix.multiply(he.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(he.projectionMatrix),$.projectionMatrixInverse.copy(he.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Mr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function($){return p[$]};let Ne=null;function De($,he){if(u=he.getViewerPose(l||o),g=he,u!==null){const oe=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ie=!1;oe.length!==D.cameras.length&&(D.cameras.length=0,Ie=!0);for(let qe=0;qe<oe.length;qe++){const ne=oe[qe];let re=null;if(f!==null)re=f.getViewport(ne);else{const Me=d.getViewSubImage(h,ne);re=Me.viewport,qe===0&&(e.setRenderTargetTextures(v,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(v))}let se=P[qe];se===void 0&&(se=new gn,se.layers.enable(qe),se.viewport=new Pt,P[qe]=se),se.matrix.fromArray(ne.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ne.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(re.x,re.y,re.width,re.height),qe===0&&(D.matrix.copy(se.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ie===!0&&D.cameras.push(se)}const ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const qe=d.getDepthInformation(oe[0]);qe&&qe.isValid&&qe.texture&&m.init(qe,s.renderState)}if(ke&&ke.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let qe=0;qe<oe.length;qe++){const ne=oe[qe].camera;if(ne){let re=p[ne];re||(re=new gd,p[ne]=re);const se=d.getCameraImage(ne);re.sourceTexture=se}}}}for(let oe=0;oe<b.length;oe++){const Ie=w[oe],ke=b[oe];Ie!==null&&ke!==void 0&&ke.update(Ie,he,l||o)}Ne&&Ne($,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}const Ae=new Pd;Ae.setAnimationLoop(De),this.setAnimationLoop=function($){Ne=$},this.dispose=function(){}}}const yM=new Mt,Od=new Qe;Od.set(-1,0,0,0,1,0,0,0,1);function SM(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ad(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,y,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),y=S.envMap,v=S.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(yM.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Od),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function bM(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,b){const w=b.program;i.uniformBlockBinding(v,w)}function l(v,b){let w=s[v.id];w===void 0&&(m(v),w=u(v),s[v.id]=w,v.addEventListener("dispose",S));const A=b.program;i.updateUBOMapping(v,A);const x=e.render.frame;r[v.id]!==x&&(h(v),r[v.id]=x)}function u(v){const b=d();v.__bindingPointIndex=b;const w=n.createBuffer(),A=v.__size,x=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,A,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,w),w}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const b=s[v.id],w=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let x=0,E=w.length;x<E;x++){const R=w[x];if(Array.isArray(R))for(let P=0,D=R.length;P<D;P++)f(R[P],x,P,A);else f(R,x,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,b,w,A){if(_(v,b,w,A)===!0){const x=v.__offset,E=v.value;if(Array.isArray(E)){let R=0;for(let P=0;P<E.length;P++){const D=E[P],F=p(D);g(D,v.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,v.__data)}}function g(v,b,w){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,w)}function _(v,b,w,A){const x=v.value,E=b+"_"+w;if(A[E]===void 0)return typeof x=="number"||typeof x=="boolean"?A[E]=x:ArrayBuffer.isView(x)?A[E]=x.slice():A[E]=x.clone(),!0;{const R=A[E];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(v){const b=v.uniforms;let w=0;const A=16;for(let E=0,R=b.length;E<R;E++){const P=Array.isArray(b[E])?b[E]:[b[E]];for(let D=0,F=P.length;D<F;D++){const B=P[D],N=Array.isArray(B.value)?B.value:[B.value];for(let O=0,I=N.length;O<I;O++){const G=N[O],q=p(G),te=w%A,Z=te%q.boundary,le=te+Z;w+=Z,le!==0&&A-le<q.storage&&(w+=A-le),B.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=w,w+=q.storage}}}const x=w%A;return x>0&&(w+=A-x),v.__size=w,v.__cache={},this}function p(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",v),b}function S(v){const b=v.target;b.removeEventListener("dispose",S);const w=o.indexOf(b.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function y(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:y}}const wM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zn=null;function EM(){return zn===null&&(zn=new pd(wM,16,16,Gi,ai),zn.name="DFG_LUT",zn.minFilter=en,zn.magFilter=en,zn.wrapS=ni,zn.wrapT=ni,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}class TM{constructor(e={}){const{canvas:t=Kp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=xn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=f,m=new Set([ol,rl,sl]),p=new Set([xn,qn,xr,_r,tl,nl]),S=new Uint32Array(4),y=new Int32Array(4),v=new L;let b=null,w=null;const A=[],x=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let P=!1,D=null,F=null,B=null,N=null;this._outputColorSpace=Yt;let O=0,I=0,G=null,q=-1,te=null;const Z=new Pt,le=new Pt;let Ne=null;const De=new ct(0);let Ae=0,$=t.width,he=t.height,oe=1,Ie=null,ke=null;const pe=new Pt(0,0,$,he),nt=new Pt(0,0,$,he);let qe=!1;const ne=new fl;let re=!1,se=!1;const Me=new Mt,ae=new L,Ue=new Pt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function Ke(){return G===null?oe:1}let U=i;function _t(T,k){return t.getContext(T,k)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qc}`),t.addEventListener("webglcontextlost",It,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",Nn,!1),U===null){const k="webgl2";if(U=_t(k,T),U===null)throw _t(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw lt("WebGLRenderer: "+T.message),T}let ot,C,M,H,X,K,de,me,J,ee,xe,He,ye,_e,Xe,Ze,je,z,ge,j,ve,Te,ie;function Be(){ot=new E_(U),ot.init(),ve=new gM(U,ot),C=new x_(U,ot,e,ve),M=new pM(U,ot),C.reversedDepthBuffer&&h&&M.buffers.depth.setReversed(!0),F=U.createFramebuffer(),B=U.createFramebuffer(),N=U.createFramebuffer(),H=new R_(U),X=new eM,K=new mM(U,ot,M,X,C,ve,H),de=new w_(R),me=new D0(U),Te=new m_(U,me),J=new T_(U,me,H,Te),ee=new P_(U,J,me,Te,H),z=new C_(U,C,K),Xe=new __(X),xe=new jv(R,de,ot,C,Te,Xe),He=new SM(R,X),ye=new nM,_e=new cM(ot),je=new p_(R,de,M,ee,g,c),Ze=new fM(R,ee,C),ie=new bM(U,H,C,M),ge=new g_(U,ot,H),j=new A_(U,ot,H),H.programs=xe.programs,R.capabilities=C,R.extensions=ot,R.properties=X,R.renderLists=ye,R.shadowMap=Ze,R.state=M,R.info=H}Be(),_!==xn&&(E=new D_(_,t.width,t.height,a,s,r));const Fe=new MM(R,U);this.xr=Fe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=ot.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ot.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(T){T!==void 0&&(oe=T,this.setSize($,he,!1))},this.getSize=function(T){return T.set($,he)},this.setSize=function(T,k,Y=!0){if(Fe.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,he=k,t.width=Math.floor(T*oe),t.height=Math.floor(k*oe),Y===!0&&(t.style.width=T+"px",t.style.height=k+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set($*oe,he*oe).floor()},this.setDrawingBufferSize=function(T,k,Y){$=T,he=k,oe=Y,t.width=Math.floor(T*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,T,k)},this.setEffects=function(T){if(_===xn){lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let k=0;k<T.length;k++)if(T[k].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Z)},this.getViewport=function(T){return T.copy(pe)},this.setViewport=function(T,k,Y,V){T.isVector4?pe.set(T.x,T.y,T.z,T.w):pe.set(T,k,Y,V),M.viewport(Z.copy(pe).multiplyScalar(oe).round())},this.getScissor=function(T){return T.copy(nt)},this.setScissor=function(T,k,Y,V){T.isVector4?nt.set(T.x,T.y,T.z,T.w):nt.set(T,k,Y,V),M.scissor(le.copy(nt).multiplyScalar(oe).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(T){M.setScissorTest(qe=T)},this.setOpaqueSort=function(T){Ie=T},this.setTransparentSort=function(T){ke=T},this.getClearColor=function(T){return T.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,Y=!0){let V=0;if(T){let W=!1;if(G!==null){const Ee=G.texture.format;W=m.has(Ee)}if(W){const Ee=G.texture.type,Pe=p.has(Ee),we=je.getClearColor(),ze=je.getClearAlpha(),Ge=we.r,et=we.g,it=we.b;Pe?(S[0]=Ge,S[1]=et,S[2]=it,S[3]=ze,U.clearBufferuiv(U.COLOR,0,S)):(y[0]=Ge,y[1]=et,y[2]=it,y[3]=ze,U.clearBufferiv(U.COLOR,0,y))}else V|=U.COLOR_BUFFER_BIT}k&&(V|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",Nn,!1),je.dispose(),ye.dispose(),_e.dispose(),X.dispose(),de.dispose(),ee.dispose(),Te.dispose(),ie.dispose(),xe.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Dl),Fe.removeEventListener("sessionend",Il),Ei.stop()};function It(T){T.preventDefault(),Lo("WebGLRenderer: Context Lost."),P=!0}function wt(){Lo("WebGLRenderer: Context Restored."),P=!1;const T=H.autoReset,k=Ze.enabled,Y=Ze.autoUpdate,V=Ze.needsUpdate,W=Ze.type;Be(),H.autoReset=T,Ze.enabled=k,Ze.autoUpdate=Y,Ze.needsUpdate=V,Ze.type=W}function Nn(T){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Un(T){const k=T.target;k.removeEventListener("dispose",Un),$d(k)}function $d(T){Kd(T),X.remove(T)}function Kd(T){const k=X.get(T).programs;k!==void 0&&(k.forEach(function(Y){xe.releaseProgram(Y)}),T.isShaderMaterial&&xe.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,Y,V,W,Ee){k===null&&(k=Le);const Pe=W.isMesh&&W.matrixWorld.determinantAffine()<0,we=jd(T,k,Y,V,W);M.setMaterial(V,Pe);let ze=Y.index,Ge=1;if(V.wireframe===!0){if(ze=J.getWireframeAttribute(Y),ze===void 0)return;Ge=2}const et=Y.drawRange,it=Y.attributes.position;let Ve=et.start*Ge,vt=(et.start+et.count)*Ge;Ee!==null&&(Ve=Math.max(Ve,Ee.start*Ge),vt=Math.min(vt,(Ee.start+Ee.count)*Ge)),ze!==null?(Ve=Math.max(Ve,0),vt=Math.min(vt,ze.count)):it!=null&&(Ve=Math.max(Ve,0),vt=Math.min(vt,it.count));const Ut=vt-Ve;if(Ut<0||Ut===1/0)return;Te.setup(W,V,we,Y,ze);let Nt,yt=ge;if(ze!==null&&(Nt=me.get(ze),yt=j,yt.setIndex(Nt)),W.isMesh)V.wireframe===!0?(M.setLineWidth(V.wireframeLinewidth*Ke()),yt.setMode(U.LINES)):yt.setMode(U.TRIANGLES);else if(W.isLine){let $t=V.linewidth;$t===void 0&&($t=1),M.setLineWidth($t*Ke()),W.isLineSegments?yt.setMode(U.LINES):W.isLineLoop?yt.setMode(U.LINE_LOOP):yt.setMode(U.LINE_STRIP)}else W.isPoints?yt.setMode(U.POINTS):W.isSprite&&yt.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))yt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const $t=W._multiDrawStarts,Ce=W._multiDrawCounts,hn=W._multiDrawCount,ht=ze?me.get(ze).bytesPerElement:1,vn=X.get(V).currentProgram.getUniforms();for(let Fn=0;Fn<hn;Fn++)vn.setValue(U,"_gl_DrawID",Fn),yt.render($t[Fn]/ht,Ce[Fn])}else if(W.isInstancedMesh)yt.renderInstances(Ve,Ut,W.count);else if(Y.isInstancedBufferGeometry){const $t=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ce=Math.min(Y.instanceCount,$t);yt.renderInstances(Ve,Ut,Ce)}else yt.render(Ve,Ut)};function Ll(T,k,Y){T.transparent===!0&&T.side===Wt&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,Pr(T,k,Y),T.side=wi,T.needsUpdate=!0,Pr(T,k,Y),T.side=Wt):Pr(T,k,Y)}this.compile=function(T,k,Y=null){Y===null&&(Y=T),w=_e.get(Y),w.init(k),x.push(w),Y.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),T!==Y&&T.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights();const V=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Ee=W.material;if(Ee)if(Array.isArray(Ee))for(let Pe=0;Pe<Ee.length;Pe++){const we=Ee[Pe];Ll(we,Y,W),V.add(we)}else Ll(Ee,Y,W),V.add(Ee)}),w=x.pop(),V},this.compileAsync=function(T,k,Y=null){const V=this.compile(T,k,Y);return new Promise(W=>{function Ee(){if(V.forEach(function(Pe){X.get(Pe).currentProgram.isReady()&&V.delete(Pe)}),V.size===0){W(T);return}setTimeout(Ee,10)}ot.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Zo=null;function Jd(T){Zo&&Zo(T)}function Dl(){Ei.stop()}function Il(){Ei.start()}const Ei=new Pd;Ei.setAnimationLoop(Jd),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(T){Zo=T,Fe.setAnimationLoop(T),T===null?Ei.stop():Ei.start()},Fe.addEventListener("sessionstart",Dl),Fe.addEventListener("sessionend",Il),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(T,k);const Y=Fe.enabled===!0&&Fe.isPresenting===!0,V=E!==null&&(G===null||Y)&&E.begin(R,G);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(k),k=Fe.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,k,G),w=_e.get(T,x.length),w.init(k),w.state.textureUnits=K.getTextureUnits(),x.push(w),Me.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ne.setFromProjectionMatrix(Me,Gn,k.reversedDepth),se=this.localClippingEnabled,re=Xe.init(this.clippingPlanes,se),b=ye.get(T,A.length),b.init(),A.push(b),Fe.enabled===!0&&Fe.isPresenting===!0){const Pe=R.xr.getDepthSensingMesh();Pe!==null&&$o(Pe,k,-1/0,R.sortObjects)}$o(T,k,0,R.sortObjects),b.finish(),R.sortObjects===!0&&b.sort(Ie,ke,k.reversedDepth),Ye=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,Ye&&je.addToRenderList(b,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Xe.beginShadows();const W=w.state.shadowsArray;if(Ze.render(W,T,k),re===!0&&Xe.endShadows(),(V&&E.hasRenderPass())===!1){const Pe=b.opaque,we=b.transmissive;if(w.setupLights(),k.isArrayCamera){const ze=k.cameras;if(we.length>0)for(let Ge=0,et=ze.length;Ge<et;Ge++){const it=ze[Ge];Ul(Pe,we,T,it)}Ye&&je.render(T);for(let Ge=0,et=ze.length;Ge<et;Ge++){const it=ze[Ge];Nl(b,T,it,it.viewport)}}else we.length>0&&Ul(Pe,we,T,k),Ye&&je.render(T),Nl(b,T,k)}G!==null&&I===0&&(K.updateMultisampleRenderTarget(G),K.updateRenderTargetMipmap(G)),V&&E.end(R),T.isScene===!0&&T.onAfterRender(R,T,k),Te.resetDefaultState(),q=-1,te=null,x.pop(),x.length>0?(w=x[x.length-1],K.setTextureUnits(w.state.textureUnits),re===!0&&Xe.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,D!==null&&D.renderEnd()};function $o(T,k,Y,V){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ne.intersectsSprite(T)){V&&Ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Me);const Pe=ee.update(T),we=T.material;we.visible&&b.push(T,Pe,we,Y,Ue.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ne.intersectsObject(T))){const Pe=ee.update(T),we=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ue.copy(T.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ue.copy(Pe.boundingSphere.center)),Ue.applyMatrix4(T.matrixWorld).applyMatrix4(Me)),Array.isArray(we)){const ze=Pe.groups;for(let Ge=0,et=ze.length;Ge<et;Ge++){const it=ze[Ge],Ve=we[it.materialIndex];Ve&&Ve.visible&&b.push(T,Pe,Ve,Y,Ue.z,it)}}else we.visible&&b.push(T,Pe,we,Y,Ue.z,null)}}const Ee=T.children;for(let Pe=0,we=Ee.length;Pe<we;Pe++)$o(Ee[Pe],k,Y,V)}function Nl(T,k,Y,V){const{opaque:W,transmissive:Ee,transparent:Pe}=T;w.setupLightsView(Y),re===!0&&Xe.setGlobalState(R.clippingPlanes,Y),V&&M.viewport(Z.copy(V)),W.length>0&&Cr(W,k,Y),Ee.length>0&&Cr(Ee,k,Y),Pe.length>0&&Cr(Pe,k,Y),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Ul(T,k,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){const Ve=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new Xn(1,1,{generateMipmaps:!0,type:Ve?ai:xn,minFilter:zi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace})}const Ee=w.state.transmissionRenderTarget[V.id],Pe=V.viewport||Z;Ee.setSize(Pe.z*R.transmissionResolutionScale,Pe.w*R.transmissionResolutionScale);const we=R.getRenderTarget(),ze=R.getActiveCubeFace(),Ge=R.getActiveMipmapLevel();R.setRenderTarget(Ee),R.getClearColor(De),Ae=R.getClearAlpha(),Ae<1&&R.setClearColor(16777215,.5),R.clear(),Ye&&je.render(Y);const et=R.toneMapping;R.toneMapping=Vn;const it=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),re===!0&&Xe.setGlobalState(R.clippingPlanes,V),Cr(T,Y,V),K.updateMultisampleRenderTarget(Ee),K.updateRenderTargetMipmap(Ee),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let vt=0,Ut=k.length;vt<Ut;vt++){const Nt=k[vt],{object:yt,geometry:$t,material:Ce,group:hn}=Nt;if(Ce.side===Wt&&yt.layers.test(V.layers)){const ht=Ce.side;Ce.side=rn,Ce.needsUpdate=!0,Fl(yt,Y,V,$t,Ce,hn),Ce.side=ht,Ce.needsUpdate=!0,Ve=!0}}Ve===!0&&(K.updateMultisampleRenderTarget(Ee),K.updateRenderTargetMipmap(Ee))}R.setRenderTarget(we,ze,Ge),R.setClearColor(De,Ae),it!==void 0&&(V.viewport=it),R.toneMapping=et}function Cr(T,k,Y){const V=k.isScene===!0?k.overrideMaterial:null;for(let W=0,Ee=T.length;W<Ee;W++){const Pe=T[W],{object:we,geometry:ze,group:Ge}=Pe;let et=Pe.material;et.allowOverride===!0&&V!==null&&(et=V),we.layers.test(Y.layers)&&Fl(we,k,Y,ze,et,Ge)}}function Fl(T,k,Y,V,W,Ee){T.onBeforeRender(R,k,Y,V,W,Ee),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(R,k,Y,V,T,Ee),W.transparent===!0&&W.side===Wt&&W.forceSinglePass===!1?(W.side=rn,W.needsUpdate=!0,R.renderBufferDirect(Y,k,V,W,T,Ee),W.side=wi,W.needsUpdate=!0,R.renderBufferDirect(Y,k,V,W,T,Ee),W.side=Wt):R.renderBufferDirect(Y,k,V,W,T,Ee),T.onAfterRender(R,k,Y,V,W,Ee)}function Pr(T,k,Y){k.isScene!==!0&&(k=Le);const V=X.get(T),W=w.state.lights,Ee=w.state.shadowsArray,Pe=W.state.version,we=xe.getParameters(T,W.state,Ee,k,Y,w.state.lightProbeGridArray),ze=xe.getProgramCacheKey(we);let Ge=V.programs;V.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,V.fog=k.fog;const et=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;V.envMap=de.get(T.envMap||V.environment,et),V.envMapRotation=V.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Ge===void 0&&(T.addEventListener("dispose",Un),Ge=new Map,V.programs=Ge);let it=Ge.get(ze);if(it!==void 0){if(V.currentProgram===it&&V.lightsStateVersion===Pe)return zl(T,we),it}else we.uniforms=xe.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,Y,we),T.onBeforeCompile(we,R),it=xe.acquireProgram(we,ze),Ge.set(ze,it),V.uniforms=we.uniforms;const Ve=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ve.clippingPlanes=Xe.uniform),zl(T,we),V.needsLights=tf(T),V.lightsStateVersion=Pe,V.needsLights&&(Ve.ambientLightColor.value=W.state.ambient,Ve.lightProbe.value=W.state.probe,Ve.directionalLights.value=W.state.directional,Ve.directionalLightShadows.value=W.state.directionalShadow,Ve.spotLights.value=W.state.spot,Ve.spotLightShadows.value=W.state.spotShadow,Ve.rectAreaLights.value=W.state.rectArea,Ve.ltc_1.value=W.state.rectAreaLTC1,Ve.ltc_2.value=W.state.rectAreaLTC2,Ve.pointLights.value=W.state.point,Ve.pointLightShadows.value=W.state.pointShadow,Ve.hemisphereLights.value=W.state.hemi,Ve.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ve.spotLightMatrix.value=W.state.spotLightMatrix,Ve.spotLightMap.value=W.state.spotLightMap,Ve.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=w.state.lightProbeGridArray.length>0,V.currentProgram=it,V.uniformsList=null,it}function Ol(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=Mo.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function zl(T,k){const Y=X.get(T);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Qd(T,k){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(k.matrixWorld);for(let Y=0,V=T.length;Y<V;Y++){const W=T[Y];if(W.texture!==null&&W.boundingBox.containsPoint(v))return W}return null}function jd(T,k,Y,V,W){k.isScene!==!0&&(k=Le),K.resetTextureUnits();const Ee=k.fog,Pe=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?k.environment:null,we=G===null?R.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ut.workingColorSpace,ze=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ge=de.get(V.envMap||Pe,ze),et=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,it=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ve=!!Y.morphAttributes.position,vt=!!Y.morphAttributes.normal,Ut=!!Y.morphAttributes.color;let Nt=Vn;V.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Nt=R.toneMapping);const yt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,$t=yt!==void 0?yt.length:0,Ce=X.get(V),hn=w.state.lights;if(re===!0&&(se===!0||T!==te)){const Et=T===te&&V.id===q;Xe.setState(V,T,Et)}let ht=!1;V.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==hn.state.version||Ce.outputColorSpace!==we||W.isBatchedMesh&&Ce.batching===!1||!W.isBatchedMesh&&Ce.batching===!0||W.isBatchedMesh&&Ce.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ce.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ce.instancing===!1||!W.isInstancedMesh&&Ce.instancing===!0||W.isSkinnedMesh&&Ce.skinning===!1||!W.isSkinnedMesh&&Ce.skinning===!0||W.isInstancedMesh&&Ce.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ce.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ce.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ce.instancingMorph===!1&&W.morphTexture!==null||Ce.envMap!==Ge||V.fog===!0&&Ce.fog!==Ee||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Xe.numPlanes||Ce.numIntersection!==Xe.numIntersection)||Ce.vertexAlphas!==et||Ce.vertexTangents!==it||Ce.morphTargets!==Ve||Ce.morphNormals!==vt||Ce.morphColors!==Ut||Ce.toneMapping!==Nt||Ce.morphTargetsCount!==$t||!!Ce.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,Ce.__version=V.version);let vn=Ce.currentProgram;ht===!0&&(vn=Pr(V,k,W),D&&V.isNodeMaterial&&D.onUpdateProgram(V,vn,Ce));let Fn=!1,li=!1,Yi=!1;const St=vn.getUniforms(),Ft=Ce.uniforms;if(M.useProgram(vn.program)&&(Fn=!0,li=!0,Yi=!0),V.id!==q&&(q=V.id,li=!0),Ce.needsLights){const Et=Qd(w.state.lightProbeGridArray,W);Ce.lightProbeGrid!==Et&&(Ce.lightProbeGrid=Et,li=!0)}if(Fn||te!==T){M.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),St.setValue(U,"projectionMatrix",T.projectionMatrix),St.setValue(U,"viewMatrix",T.matrixWorldInverse);const hi=St.map.cameraPosition;hi!==void 0&&hi.setValue(U,ae.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&St.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&St.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),te!==T&&(te=T,li=!0,Yi=!0)}if(Ce.needsLights&&(hn.state.directionalShadowMap.length>0&&St.setValue(U,"directionalShadowMap",hn.state.directionalShadowMap,K),hn.state.spotShadowMap.length>0&&St.setValue(U,"spotShadowMap",hn.state.spotShadowMap,K),hn.state.pointShadowMap.length>0&&St.setValue(U,"pointShadowMap",hn.state.pointShadowMap,K)),W.isSkinnedMesh){St.setOptional(U,W,"bindMatrix"),St.setOptional(U,W,"bindMatrixInverse");const Et=W.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),St.setValue(U,"boneTexture",Et.boneTexture,K))}W.isBatchedMesh&&(St.setOptional(U,W,"batchingTexture"),St.setValue(U,"batchingTexture",W._matricesTexture,K),St.setOptional(U,W,"batchingIdTexture"),St.setValue(U,"batchingIdTexture",W._indirectTexture,K),St.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&St.setValue(U,"batchingColorTexture",W._colorsTexture,K));const ui=Y.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&z.update(W,Y,vn),(li||Ce.receiveShadow!==W.receiveShadow)&&(Ce.receiveShadow=W.receiveShadow,St.setValue(U,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&k.environment!==null&&(Ft.envMapIntensity.value=k.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=EM()),li){if(St.setValue(U,"toneMappingExposure",R.toneMappingExposure),Ce.needsLights&&ef(Ft,Yi),Ee&&V.fog===!0&&He.refreshFogUniforms(Ft,Ee),He.refreshMaterialUniforms(Ft,V,oe,he,w.state.transmissionRenderTarget[T.id]),Ce.needsLights&&Ce.lightProbeGrid){const Et=Ce.lightProbeGrid;Ft.probesSH.value=Et.texture,Ft.probesMin.value.copy(Et.boundingBox.min),Ft.probesMax.value.copy(Et.boundingBox.max),Ft.probesResolution.value.copy(Et.resolution)}Mo.upload(U,Ol(Ce),Ft,K)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Mo.upload(U,Ol(Ce),Ft,K),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&St.setValue(U,"center",W.center),St.setValue(U,"modelViewMatrix",W.modelViewMatrix),St.setValue(U,"normalMatrix",W.normalMatrix),St.setValue(U,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){const Et=V.uniformsGroups;for(let hi=0,Zi=Et.length;hi<Zi;hi++){const Bl=Et[hi];ie.update(Bl,vn),ie.bind(Bl,vn)}}return vn}function ef(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function tf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(T,k,Y){const V=X.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),X.get(T.texture).__webglTexture=k,X.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){const Y=X.get(T);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,Y=0){G=T,O=k,I=Y;let V=null,W=!1,Ee=!1;if(T){const we=X.get(T);if(we.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(U.FRAMEBUFFER,we.__webglFramebuffer),Z.copy(T.viewport),le.copy(T.scissor),Ne=T.scissorTest,M.viewport(Z),M.scissor(le),M.setScissorTest(Ne),q=-1;return}else if(we.__webglFramebuffer===void 0)K.setupRenderTarget(T);else if(we.__hasExternalTextures)K.rebindTextures(T,X.get(T.texture).__webglTexture,X.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const et=T.depthTexture;if(we.__boundDepthTexture!==et){if(et!==null&&X.has(et)&&(T.width!==et.image.width||T.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(T)}}const ze=T.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ee=!0);const Ge=X.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ge[k])?V=Ge[k][Y]:V=Ge[k],W=!0):T.samples>0&&K.useMultisampledRTT(T)===!1?V=X.get(T).__webglMultisampledFramebuffer:Array.isArray(Ge)?V=Ge[Y]:V=Ge,Z.copy(T.viewport),le.copy(T.scissor),Ne=T.scissorTest}else Z.copy(pe).multiplyScalar(oe).floor(),le.copy(nt).multiplyScalar(oe).floor(),Ne=qe;if(Y!==0&&(V=F),M.bindFramebuffer(U.FRAMEBUFFER,V)&&M.drawBuffers(T,V),M.viewport(Z),M.scissor(le),M.setScissorTest(Ne),W){const we=X.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,we.__webglTexture,Y)}else if(Ee){const we=k;for(let ze=0;ze<T.textures.length;ze++){const Ge=X.get(T.textures[ze]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ze,Ge.__webglTexture,Y,we)}}else if(T!==null&&Y!==0){const we=X.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,we.__webglTexture,Y)}q=-1},this.readRenderTargetPixels=function(T,k,Y,V,W,Ee,Pe,we=0){if(!(T&&T.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(ze=ze[Pe]),ze){M.bindFramebuffer(U.FRAMEBUFFER,ze);try{const Ge=T.textures[we],et=Ge.format,it=Ge.type;if(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+we),!C.textureFormatReadable(et)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(it)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-V&&Y>=0&&Y<=T.height-W&&U.readPixels(k,Y,V,W,ve.convert(et),ve.convert(it),Ee)}finally{const Ge=G!==null?X.get(G).__webglFramebuffer:null;M.bindFramebuffer(U.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(T,k,Y,V,W,Ee,Pe,we=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(ze=ze[Pe]),ze)if(k>=0&&k<=T.width-V&&Y>=0&&Y<=T.height-W){M.bindFramebuffer(U.FRAMEBUFFER,ze);const Ge=T.textures[we],et=Ge.format,it=Ge.type;if(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+we),!C.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ve),U.bufferData(U.PIXEL_PACK_BUFFER,Ee.byteLength,U.STREAM_READ),U.readPixels(k,Y,V,W,ve.convert(et),ve.convert(it),0);const vt=G!==null?X.get(G).__webglFramebuffer:null;M.bindFramebuffer(U.FRAMEBUFFER,vt);const Ut=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Jp(U,Ut,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ve),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ee),U.deleteBuffer(Ve),U.deleteSync(Ut),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,Y=0){const V=Math.pow(2,-Y),W=Math.floor(T.image.width*V),Ee=Math.floor(T.image.height*V),Pe=k!==null?k.x:0,we=k!==null?k.y:0;K.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,Pe,we,W,Ee),M.unbindTexture()},this.copyTextureToTexture=function(T,k,Y=null,V=null,W=0,Ee=0){let Pe,we,ze,Ge,et,it,Ve,vt,Ut;const Nt=T.isCompressedTexture?T.mipmaps[Ee]:T.image;if(Y!==null)Pe=Y.max.x-Y.min.x,we=Y.max.y-Y.min.y,ze=Y.isBox3?Y.max.z-Y.min.z:1,Ge=Y.min.x,et=Y.min.y,it=Y.isBox3?Y.min.z:0;else{const Ft=Math.pow(2,-W);Pe=Math.floor(Nt.width*Ft),we=Math.floor(Nt.height*Ft),T.isDataArrayTexture?ze=Nt.depth:T.isData3DTexture?ze=Math.floor(Nt.depth*Ft):ze=1,Ge=0,et=0,it=0}V!==null?(Ve=V.x,vt=V.y,Ut=V.z):(Ve=0,vt=0,Ut=0);const yt=ve.convert(k.format),$t=ve.convert(k.type);let Ce;k.isData3DTexture?(K.setTexture3D(k,0),Ce=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(K.setTexture2DArray(k,0),Ce=U.TEXTURE_2D_ARRAY):(K.setTexture2D(k,0),Ce=U.TEXTURE_2D),M.activeTexture(U.TEXTURE0),M.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),M.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),M.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const hn=M.getParameter(U.UNPACK_ROW_LENGTH),ht=M.getParameter(U.UNPACK_IMAGE_HEIGHT),vn=M.getParameter(U.UNPACK_SKIP_PIXELS),Fn=M.getParameter(U.UNPACK_SKIP_ROWS),li=M.getParameter(U.UNPACK_SKIP_IMAGES);M.pixelStorei(U.UNPACK_ROW_LENGTH,Nt.width),M.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Nt.height),M.pixelStorei(U.UNPACK_SKIP_PIXELS,Ge),M.pixelStorei(U.UNPACK_SKIP_ROWS,et),M.pixelStorei(U.UNPACK_SKIP_IMAGES,it);const Yi=T.isDataArrayTexture||T.isData3DTexture,St=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const Ft=X.get(T),ui=X.get(k),Et=X.get(Ft.__renderTarget),hi=X.get(ui.__renderTarget);M.bindFramebuffer(U.READ_FRAMEBUFFER,Et.__webglFramebuffer),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let Zi=0;Zi<ze;Zi++)Yi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(T).__webglTexture,W,it+Zi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(k).__webglTexture,Ee,Ut+Zi)),U.blitFramebuffer(Ge,et,Pe,we,Ve,vt,Pe,we,U.DEPTH_BUFFER_BIT,U.NEAREST);M.bindFramebuffer(U.READ_FRAMEBUFFER,null),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||X.has(T)){const Ft=X.get(T),ui=X.get(k);M.bindFramebuffer(U.READ_FRAMEBUFFER,B),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,N);for(let Et=0;Et<ze;Et++)Yi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ft.__webglTexture,W,it+Et):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ft.__webglTexture,W),St?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ui.__webglTexture,Ee,Ut+Et):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ui.__webglTexture,Ee),W!==0?U.blitFramebuffer(Ge,et,Pe,we,Ve,vt,Pe,we,U.COLOR_BUFFER_BIT,U.NEAREST):St?U.copyTexSubImage3D(Ce,Ee,Ve,vt,Ut+Et,Ge,et,Pe,we):U.copyTexSubImage2D(Ce,Ee,Ve,vt,Ge,et,Pe,we);M.bindFramebuffer(U.READ_FRAMEBUFFER,null),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else St?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Ce,Ee,Ve,vt,Ut,Pe,we,ze,yt,$t,Nt.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(Ce,Ee,Ve,vt,Ut,Pe,we,ze,yt,Nt.data):U.texSubImage3D(Ce,Ee,Ve,vt,Ut,Pe,we,ze,yt,$t,Nt):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ee,Ve,vt,Pe,we,yt,$t,Nt.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ee,Ve,vt,Nt.width,Nt.height,yt,Nt.data):U.texSubImage2D(U.TEXTURE_2D,Ee,Ve,vt,Pe,we,yt,$t,Nt);M.pixelStorei(U.UNPACK_ROW_LENGTH,hn),M.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ht),M.pixelStorei(U.UNPACK_SKIP_PIXELS,vn),M.pixelStorei(U.UNPACK_SKIP_ROWS,Fn),M.pixelStorei(U.UNPACK_SKIP_IMAGES,li),Ee===0&&k.generateMipmaps&&U.generateMipmap(Ce),M.unbindTexture()},this.initRenderTarget=function(T){X.get(T).__webglFramebuffer===void 0&&K.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?K.setTextureCube(T,0):T.isData3DTexture?K.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?K.setTexture2DArray(T,0):K.setTexture2D(T,0),M.unbindTexture()},this.resetState=function(){O=0,I=0,G=null,M.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}const hh=200,dh=440,AM=`
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
`,RM=`
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
`;function CM(){const n=new cn(dh,dh,hh,hh);n.rotateX(-Math.PI/2);const e=n.attributes.position,t=new Float32Array(e.count);for(let r=0;r<e.count;r++)t[r]=-Tt(e.getX(r),e.getZ(r));n.setAttribute("aDepth",new un(t,1));const i=new bn({uniforms:{uTime:{value:0}},vertexShader:AM,fragmentShader:RM}),s=new Q(n,i);return s.position.y=0,s.frustumCulled=!1,{mesh:s,update(r){i.uniforms.uTime.value=r}}}const PM=8.8,LM=4.4,lo=2.4,uo=3.2,fh=4.4;function zd(n){return n.kind==="switchback"?LM:PM}const ph=new Map;function Ml(n){let e=ph.get(n);if(!e){const t=Rs(jt(n.a)),i=Rs(jt(n.b)),s=new L((t.x+i.x)/2,(t.y+i.y)/2+.15,(t.z+i.z)/2);e=new Go([new L(t.x,t.y+.18,t.z),s,new L(i.x,i.y+.18,i.z)]),ph.set(n,e)}return e}const vi=new L,js=new L;function yo(n,e){const t=Ml(n),i=zd(n)/2;t.getPointAt(e,vi),t.getTangentAt(e,js);const s=Math.hypot(js.x,js.z)||1,r=-js.z/s,o=js.x/s;return Math.max(vi.y,Tt(vi.x,vi.z),Tt(vi.x+r*i,vi.z+o*i),Tt(vi.x-r*i,vi.z-o*i))+.15}let gs=null;function DM(){if(gs)return gs;gs=new Map;for(const n of _n){if(n.kind==="bridge")continue;const e=[[n.a,0],[n.b,1]];for(const[t,i]of e){const s=yo(n,i);gs.set(t,Math.max(gs.get(t)??-1/0,s))}}return gs}function Gc(n,e){const t=DM(),i=t.get(n.a)??yo(n,0),s=t.get(n.b)??yo(n,1);return Math.max(yo(n,e),i+(s-i)*e)}const IM=12596780,mh=7,gh=1,er=3.2,xh=12;function NM(){return new Us({color:IM})}function UM(n){const e=_n.find(_=>_.kind==="bridge");if(!e)return;const t=Rs(jt(e.a)),i=Rs(jt(e.b)),s=e.deckY??6,r=new L(i.x-t.x,0,i.z-t.z),o=r.length();if(o<1)return;r.normalize();const a=new L(-r.z,0,r.x),c=(_,m,p)=>new L(t.x+(i.x-t.x)*_+a.x*m,p,t.z+(i.z-t.z)*_+a.z*m),l=_=>_==="x"?Math.atan2(-r.z,r.x):Math.atan2(a.x,a.z),u=NM(),d=new Us({color:16767370}),h=new Q(new Je(o,gh,mh),u);h.position.set((t.x+i.x)/2,s-gh/2,(t.z+i.z)/2),h.rotation.y=l("x"),n.add(h);for(const _ of[1/3,2/3]){for(const m of[-er,er]){const p=new Q(new Je(1.5,20,1.5),u),S=c(_,m,s+2);p.position.copy(S),p.rotation.y=l("x"),n.add(p)}for(const m of[s+4,s+10]){const p=new Q(new Je(1,1,er*2+1.5),u);p.position.copy(c(_,0,m)),p.rotation.y=l("z"),n.add(p)}}const f=[];for(const _ of[-er,er]){const m=new Go([c(0,_,s+.2),c(.15,_,s+5),c(.3333333333333333,_,s+xh),c(.5,_,s+2.5),c(.6666666666666666,_,s+xh),c(.85,_,s+5),c(1,_,s+.2)]);f.push(m),n.add(new Q(new Vo(m,64,.25,8,!1),u))}for(const _ of f){const m=_.getPoints(400);for(let p=6;p<o-3;p+=6){const S=p/o,y=t.x+(i.x-t.x)*S;let v=m[0],b=1/0;for(const x of m){const E=Math.abs(x.x-y);E<b&&(b=E,v=x)}const w=v.y-s;if(w<.5)continue;const A=new Q(new ft(.08,.08,w,6),u);A.position.set(y,s+w/2,v.z),n.add(A)}}let g=1;for(let _=6;_<o-3;_+=12){const m=_/o,p=c(m,g*(mh/2-.7),s),S=new Q(new ft(.12,.16,4.2,8),u);S.position.set(p.x,s+2.1,p.z),n.add(S);const y=new Q(new dt(.32,10,8),d);y.position.set(p.x,s+4.2,p.z),n.add(y),g*=-1}}const[yl,Bd,Sl,kd]=pt,Vc=(yl+Sl)/2,wr=(Bd+kd)/2,Ia=(()=>{const n=[];let e=0;for(const t of[wr-10,wr+10])for(let i=yl+2.5;i<=Sl-2.5;i+=5){const s=.9+e*37%10/50;n.push({x:i,z:t,s}),e++}return n})(),FM=[{x0:yl,z0:wr-1.5,x1:Sl,z1:wr+1.5},{x0:Vc-1.5,z0:Bd,x1:Vc+1.5,z1:kd}],OM={x:Vc,z:wr,w:14,d:9,h:5},zM=1e6,Pi=3.4;function Hd(){return{winLit:[],winUnlit:[],sills:[],doors:[],flowerBoxes:[],petals:[],leaves:[],awnings:[[],[],[]],bays:[]}}function BM(n,e){n.winLit.push(...e.winLit),n.winUnlit.push(...e.winUnlit),n.sills.push(...e.sills),n.doors.push(...e.doors),n.flowerBoxes.push(...e.flowerBoxes),n.petals.push(...e.petals),n.leaves.push(...e.leaves),e.awnings.forEach((t,i)=>n.awnings[i].push(...t)),n.bays.push(...e.bays)}const kM={north:0,south:1,east:2,west:3};function HM(n){const{sx:e,sy:t,sz:i,minY:s,cx:r,cz:o,district:a,seedBase:c,colorIdx:l,bayWindow:u}=n,d=Hd(),h=(v,b,w,A,x,E,R,P=0)=>({x:v,y:b,z:w,rotX:P,rotY:A,sx:x,sy:E,sz:R}),f=Math.min(4.2,t*.28),g=t-f,_=Math.max(1,Math.round(g/Pi)),m=Math.min(2.6,e*.18),p=Math.min(2.4,Pi*.55),S=Math.min(3,Pi*.82),y=v=>{const b=v==="north"||v==="south"?e:i,w=b>29?[-.27,.27]:[-.2,.2],A=v==="north"?Math.PI:v==="south"?0:v==="west"?-Math.PI/2:Math.PI/2,x=v==="north"||v==="south",E=v==="north"?-1:v==="south"?1:v==="west"?-1:1,R=(N,O,I)=>x?[r+N,O,o+E*(i*.5+I)]:[r+E*(e*.5+I),O,o+N],P=(N,O)=>{w.forEach((I,G)=>{const q=mn(c*1e3+kM[v]*100+N*10+G),te=m*(.88+q()*.24),Z=p*(.88+q()*.24),le=s+g-Z*.5-.35,Ne=Math.min(O,le),[De,Ae,$]=R(b*I,Ne,.055);(q()<.35?d.winLit:d.winUnlit).push(h(De,Ae,$,A,te,Z,1));const[he,oe,Ie]=R(b*I,Ne-Z*.5-.08,.1);if(d.sills.push(h(he,oe,Ie,x?0:Math.PI/2,te+.38,.18,.16)),q()<.3){const[ke,pe,nt]=R(b*I,Ne-Z*.5-.35,.28);d.flowerBoxes.push(h(ke,pe,nt,x?0:Math.PI/2,te*.8,.35,.4));for(let qe=0;qe<3;qe++){const[ne,re,se]=R(b*I+(qe-1)*te*.22,Ne-Z*.5-.12,.28);(qe%2?d.petals:d.leaves).push(h(ne,re,se,0,.14,.14,.14))}}})},[D,F,B]=R(0,s+S*.5,.06);d.doors.push(h(D,F,B,A,Math.min(2.4,b*.13),S,1)),P(0,s+Pi*.58);for(let N=1;N<_;N++)P(N,s+Pi*N+Pi*.58)};if(y("north"),y("south"),y("east"),y("west"),a==="merchant-row"){const v=Math.min(e*.7,10),b=2.2;d.awnings[l%3].push(h(r,s+S+.55,o+i*.5+b*.5-.15,0,v,b,1,-Math.PI/2))}if(u){const v=Math.min(3.2,e*.4),b=Pi*.95,w=.8;d.bays.push(h(r,s+b*.5,o+i*.5+w*.5-.05,0,v,b,w))}return d}function ce(n){return new Us({color:n,map:GM(),gradientMap:VM()})}let Li,xs;function GM(){if(Li)return Li;const n=document.createElement("canvas");n.width=n.height=ar;const e=n.getContext("2d");e.fillStyle="rgba(255,255,255,.9)",e.fillRect(0,0,ar,ar);for(const t of Pf(Af))e.fillStyle=`rgba(85,55,45,${t.alpha})`,e.fillRect(t.x,t.y,1,1);return Li=new Ls(n),Li.colorSpace=Yt,Li.wrapS=Li.wrapT=Eo,Li}function VM(){if(xs)return xs;const n=document.createElement("canvas");n.width=1,n.height=3;const e=n.getContext("2d");return e.fillStyle="#202020",e.fillRect(0,0,1,1),e.fillStyle="#9a9a9a",e.fillRect(0,1,1,1),e.fillStyle="#fff",e.fillRect(0,2,1,1),xs=new Ls(n),xs.minFilter=xs.magFilter=Xt,xs}function WM(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Dt;let l=0;for(let u=0;u<n.length;++u){const d=n[u];let h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0;const d=[];for(let h=0;h<n.length;++h){const f=n[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=n[h].attributes.position.count}c.setIndex(d)}for(const u in r){const d=_h(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][h]);const g=_h(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function _h(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new un(o,t,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const d=c/t;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<t;g++){const _=u.getComponent(h,g);a.setComponent(h+d,g,_)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}const vh=16,XM=44;let Ms=null;function Gd(){if(Ms)return Ms;const n=new No(.07,.4,4,8);return n.translate(0,-.25,0),Ms={carBody:new Je(1.9,.9,4.2),carCabin:new Je(1.7,.65,2),wheel:new ft(.35,.35,.3,10),pedBody:new No(.22,.9,4,10),pedHead:new dt(.2,12,10),pedArm:n},Ms}let ys=null;function Vd(){if(ys)return ys;const n=e=>ce(e);return ys={glass:n(1714746),tire:n(2236962),carRed:n(13904426),carBlue:n(3829413),carGray:n(9145227),carBlack:n(2763306),carGreen:n(4881497),carBrown:n(9132587),carCream:n(15261904),carPink:n(16731558),carYellow:n(16767306),carPurple:n(10309119),carTeal:n(5111688),skin1:n(16762531),skin2:n(15245418),skin3:n(13007434),skin4:n(9067066),cloth1:n(3829413),cloth2:n(13904426),cloth3:n(4885355),cloth4:n(9132587),cloth5:n(8010362),cloth6:n(15261904),pants:n(2767434)},ys}let ho=null;function Mh(){if(ho)return ho;const n=e=>{const t=document.createElement("canvas");t.width=256,t.height=128;const i=t.getContext("2d");i.fillStyle="white",i.strokeStyle="#333",i.lineWidth=6;const s=24,r=10,o=10,a=236,c=80;i.beginPath(),typeof i.roundRect=="function"?i.roundRect(r,o,a,c,s):(i.moveTo(r+s,o),i.arcTo(r+a,o,r+a,o+c,s),i.arcTo(r+a,o+c,r,o+c,s),i.arcTo(r,o+c,r,o,s),i.arcTo(r,o,r+a,o,s),i.closePath()),i.fill(),i.stroke(),i.beginPath(),i.moveTo(110,88),i.lineTo(128,118),i.lineTo(146,88),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#222",i.font="bold 44px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(e,128,52);const l=new Ls(t);return l.colorSpace=Yt,l};return ho={"Hello!":n("Hello!"),"Hi!":n("Hi!"),"Ahhh!":n("Ahhh!")},ho}function qM(n,e){const t=new at,i=mn(e),s=Gd(),r=Vd();let o,a=4.2,c=.9;switch(n){case"beetle":o=[r.carPink,r.carYellow,r.carPurple,r.carTeal][Math.floor(i()*4)],a=3.6,c=1;break;case"sports":o=r.carRed,a=4,c=.65;break;case"truck":o=[r.carGreen,r.carBrown,r.carBlue][Math.floor(i()*3)],a=4.8,c=1.1;break;case"van":o=[r.carCream,r.carBlue,r.carYellow][Math.floor(i()*3)],a=4.6,c=1.4;break;default:o=[r.carBlue,r.carGray,r.carBlack,r.carRed,r.carGreen][Math.floor(i()*5)]}const l=[],u=new Je(1.9,c,a);u.translate(0,.55+c/2,0),l.push(u);const d=[[-.85,a*.32],[.85,a*.32],[-.85,-a*.32],[.85,-a*.32]];for(const[_,m]of d){const p=s.wheel.clone();p.rotateZ(Math.PI/2),p.translate(_,.35,m),l.push(p)}const h=WM(l);l.forEach(_=>_.dispose());const f=new Q(h,o);f.castShadow=!0,t.add(f);const g=new Q(s.carCabin,r.glass);if(g.position.set(0,.55+c+.3,n==="truck"?a*.25:0),g.scale.z=a/4.2,g.castShadow=!0,t.add(g),n==="beetle"){const _=new pl(.3,12),m=new Rn({color:16777215});for(const p of[1,-1]){const S=new Q(_,m);S.position.set(p*.97,1.1,0),S.rotation.y=p*Math.PI/2,t.add(S)}}return t}function YM(n){const e=new at,t=mn(n),i=Gd(),s=Vd(),r=[s.skin1,s.skin2,s.skin3,s.skin4][Math.floor(t()*4)],o=[s.cloth1,s.cloth2,s.cloth3,s.cloth4,s.cloth5,s.cloth6][Math.floor(t()*6)],a=new Q(i.pedBody,o);a.position.y=.85,a.castShadow=!0,e.add(a);const c=new Q(i.pedHead,r);c.position.y=1.55,c.castShadow=!0,e.add(c);const l=new Q(i.pedArm,o);l.position.set(.32,1.25,0),l.rotation.z=-.15,e.add(l);const u=new Q(i.pedArm,o);return u.position.set(-.32,1.25,0),u.rotation.z=.15,u.scale.y=-1,e.add(u),{group:e,armR:l}}function Na(n,e){for(const t of sn)if(n>t.min.x-1&&n<t.max.x+1&&e>t.min.z-1&&e<t.max.z+1)return!1;return!(Oi.some(t=>n>t[0]&&n<t[2]&&e>t[1]&&e<t[3])||an(n,e))}class ZM{constructor(e){fe(this,"cars",[]);fe(this,"peds",[]);fe(this,"graph",Tf());fe(this,"group",new at);fe(this,"tmpP",new L);fe(this,"tmpT",new L);fe(this,"tmpV",new L);this.scene=e,e.add(this.group),this.spawnCars(),this.spawnPeds()}makeCurve(e){return Ml(e)}spawnCars(){const e=mn(20260927),t=_n.filter(o=>{if(o.kind==="bridge"||o.kind==="switchback")return!1;const a=jt(o.a),c=jt(o.b);return Math.abs(a.x)<120&&Math.abs(c.x)<120&&Math.abs(a.z)<120&&Math.abs(c.z)<120}),i=t.length>0?t:_n.filter(o=>o.kind!=="bridge"),s=["beetle","sports"],r=["sedan","sedan","sedan","sedan","sedan","sedan","truck","truck","truck","van","van","van","sedan","sedan"];for(let o=s.length;o<vh;o++)s.push(r[(o-s.length)%r.length]);for(let o=s.length-1;o>0;o--){const a=Math.floor(e()*(o+1));[s[o],s[a]]=[s[a],s[o]]}for(let o=0;o<vh;o++){const a=i[Math.floor(e()*i.length)],c=this.makeCurve(a),l=s[o],u=qM(l,1e3+o);this.group.add(u);const d=l==="sports"?12:8+e()*4;this.cars.push({edge:a,t:e(),dir:e()<.5?1:-1,speed:d,variant:l,group:u,curve:c,edgeLen:c.getLength()})}}spawnPeds(){const e=mn(20260928),t=Mh(),i=_n.filter(s=>{if(s.kind==="bridge"||s.kind==="switchback")return!1;const r=jt(s.a),o=jt(s.b);return Math.abs(r.x)<130&&Math.abs(o.x)<130&&Math.abs(r.z)<130&&Math.abs(o.z)<130});for(let s=0;s<XM;s++){const r=s>=30;let o=null,a=0,c=0;if(r){let m=0;for(;m++<50&&(a=pt[0]+e()*(pt[2]-pt[0]),c=pt[1]+e()*(pt[3]-pt[1]),!Na(a,c)););m>=50&&(a=(pt[0]+pt[2])/2,c=(pt[1]+pt[3])/2)}else o=i[Math.floor(e()*i.length)];const{group:l,armR:u}=YM(2e3+s),d=o?this.makeCurve(o):new Go([new L(a,0,c),new L(a+1,0,c)]);let h=0,f=1;!r&&o&&(h=e(),d.getPointAt(h,this.tmpP),d.getTangentAt(h,this.tmpT),f=e()<.5?1:-1,a=this.tmpP.x+-this.tmpT.z*4*f,c=this.tmpP.z+this.tmpT.x*4*f);const g=Tt(a,c);l.position.set(a,g,c),this.group.add(l);const _=new Nc(new dl({map:t["Hello!"],transparent:!0,opacity:0,depthTest:!1}));_.scale.set(1.5,.75,1),_.position.set(a,g+2.2,c),_.visible=!1,this.group.add(_),this.peds.push({edge:o,t:h,dir:e()<.5?1:-1,side:f,sideOff:f*4,speed:1.2+e()*.6,inPark:r,parkTarget:new L(a,0,c),pos:new L(a,g,c),group:l,armR:u,bubble:_,greetCd:0,startleCd:0,bubbleT:0,hopT:0,waveT:0,stuckT:0,lastPos:new L(a,g,c),curve:d,edgeLen:d.getLength()}),r&&this.pickParkTarget(this.peds[this.peds.length-1],e)}}pickParkTarget(e,t){let i=0;for(;i++<30;){const s=pt[0]+t()*(pt[2]-pt[0]),r=pt[1]+t()*(pt[3]-pt[1]);if(Na(s,r)){e.parkTarget.set(s,0,r);return}}e.parkTarget.copy(e.pos)}update(e,t,i,s,r){for(const o of this.cars)this.updateCar(o,e);for(const o of this.peds)this.updatePed(o,e,t,i,s,r)}nextEdge(e,t){const i=_n.filter(r=>r.kind!=="bridge"&&(r.a===t||r.b===t)&&!(r.a===e.a&&r.b===e.b)),s=i.length>0?i[Math.floor(Math.random()*i.length)]:e;return s.a===t?{edge:s,dir:1,t:0}:s.b===t?{edge:s,dir:-1,t:1}:{edge:s,dir:1,t:0}}updateCar(e,t){if(e.t+=e.dir*e.speed*t/e.edgeLen,e.t>=1||e.t<=0){const a=e.t>=1?e.dir===1?e.edge.b:e.edge.a:e.dir===1?e.edge.a:e.edge.b,{edge:c,dir:l,t:u}=this.nextEdge(e.edge,a);e.edge=c,e.dir=l,e.t=u,e.curve=this.makeCurve(c),e.edgeLen=e.curve.getLength(),e.speed=(e.variant==="sports"?12:10)*(c.kind==="switchback"?.6:1)}const i=Si.clamp(e.t,0,1),s=Gc(e.edge,i);e.curve.getPointAt(i,this.tmpP),e.curve.getTangentAt(i,this.tmpT),e.dir===-1&&this.tmpT.negate();const r=this.tmpP.x+-this.tmpT.z*1.4,o=this.tmpP.z+this.tmpT.x*1.4;e.group.position.set(r,s,o),e.group.rotation.y=Math.atan2(this.tmpT.x,this.tmpT.z)}updatePed(e,t,i,s,r,o){e.inPark?this.updateParkPed(e,t):this.updateSidewalkPed(e,t);const a=i.x-e.pos.x,c=i.z-e.pos.z,l=Math.hypot(a,c),u=i.y-e.pos.y,d=Mh();if(l<6&&u<10&&u>-2&&(s>15||r<-8)?o>e.startleCd&&(e.startleCd=o+12,e.bubble.material.map=d["Ahhh!"],e.bubble.material.needsUpdate=!0,e.bubbleT=2,e.bubble.visible=!0,e.hopT=.4,e.waveT=0):l<12&&u>0&&u<8&&s<10&&o>e.greetCd&&(e.greetCd=o+8,e.bubble.material.map=d["Hello!"],e.bubble.material.needsUpdate=!0,e.bubbleT=2,e.bubble.visible=!0,e.waveT=2),e.bubbleT>0){e.bubbleT-=t;const h=e.bubble.material;h.opacity=Math.min(1,e.bubbleT/.3,(2-e.bubbleT)/.3),e.bubble.position.set(e.pos.x,e.pos.y+2.2,e.pos.z),e.bubbleT<=0&&(e.bubble.visible=!1)}if(e.hopT>0){e.hopT-=t;const h=1-e.hopT/.4;e.group.position.y=e.pos.y+Math.sin(h*Math.PI)*.3}e.waveT>0?(e.waveT-=t,e.armR.rotation.z=-2.2+Math.sin(o*12)*.3):e.armR.rotation.z=-.15}updateSidewalkPed(e,t){if(e.t+=e.dir*e.speed*t/e.edgeLen,e.t>=1||e.t<=0){const c=e.t>=1?e.dir===1?e.edge.b:e.edge.a:e.dir===1?e.edge.a:e.edge.b,{edge:l,dir:u,t:d}=this.nextEdge(e.edge,c);e.edge=l,e.dir=u,e.t=d,e.curve=this.makeCurve(l),e.edgeLen=e.curve.getLength(),Math.random()<.3&&(e.side*=-1)}const i=Si.clamp(e.t,0,1);e.curve.getPointAt(i,this.tmpP),e.curve.getTangentAt(i,this.tmpT),e.dir===-1&&this.tmpT.negate();const r=e.side*4-e.sideOff;e.sideOff+=Si.clamp(r,-3*t,3*t);const o=this.tmpP.x+-this.tmpT.z*e.sideOff,a=this.tmpP.z+this.tmpT.x*e.sideOff;if(e.pos.set(o,Tt(o,a),a),e.group.position.copy(e.pos),e.group.rotation.y=Math.atan2(this.tmpT.x,this.tmpT.z),e.group.position.y+=Math.abs(Math.sin(performance.now()*.008+o))*.05,e.pos.distanceToSquared(e.lastPos)<.01){if(e.stuckT+=t,e.stuckT>5){const{edge:c,dir:l,t:u}=this.nextEdge(e.edge,e.dir===1?e.edge.b:e.edge.a);e.edge=c,e.dir=l,e.t=u,e.curve=this.makeCurve(c),e.edgeLen=e.curve.getLength(),e.stuckT=0}}else e.stuckT=0;e.lastPos.copy(e.pos)}updateParkPed(e,t){if(this.tmpV.subVectors(e.parkTarget,e.pos),this.tmpV.y=0,this.tmpV.length()<1)this.pickParkTarget(e,Math.random);else{this.tmpV.normalize();const s=e.pos.x+this.tmpV.x*e.speed*t,r=e.pos.z+this.tmpV.z*e.speed*t;Na(s,r)?e.pos.set(s,Tt(s,r),r):this.pickParkTarget(e,Math.random),e.group.position.copy(e.pos),e.group.rotation.y=Math.atan2(this.tmpV.x,this.tmpV.z),e.group.position.y+=Math.abs(Math.sin(performance.now()*.008+s))*.05}}dispose(){this.group.traverse(e=>{if(e instanceof Q){const t=e.geometry;Ms&&!Object.values(Ms).includes(t)&&t.dispose();const i=e.material;ys&&!Object.values(ys).includes(i)&&i.dispose()}else e instanceof Nc&&e.material.dispose()}),this.scene.remove(this.group),this.cars=[],this.peds=[]}}const $M=n=>-n,Es={x:13,y:12,z:18},Oo=2,yh=(n,e)=>Math.max(-e,Math.min(e,n));function KM(n,e){const t=yh(n,Oa),i=yh(e,za);return{look:[t,Oo,i],cam:[t+Es.x,Oo+Es.y,i+Es.z]}}function JM(n,e,t,i,s){if(t||s)return e;if(i<=0)return n;const r=1-Math.exp(-i*5);return[n[0]+(e[0]-n[0])*r,n[1]+(e[1]-n[1])*r]}function QM(n,e,t){if(t<=0)return n;const i=Math.atan2(Math.sin(e-n),Math.cos(e-n)),s=i*(1-Math.exp(-t*1.25)),r=i-s;return n+s+Math.sign(r)*Math.max(0,Math.abs(r)-1.35)}const At=n=>new Us({color:n}),Fi=At(9262134),on=At(5189671),fo=At(16773071),Sh=At(16112046),jM=At(1670008),po=At(13200951),ey=At(14657867),ty=At(4948573);function Bt(n,e,t,i=Fi){const s=new Q(new Je(n,e,t),i);return s.castShadow=s.receiveShadow=!0,s}function yn(n,e,t=Fi,i=10){const s=new Q(new ft(n,n,e,i),t);return s.castShadow=s.receiveShadow=!0,s}function We(n,e,t,i,s){return e.position.set(t,i,s),n.add(e),e}class ny{constructor(){fe(this,"group",new at);fe(this,"meg",new at);fe(this,"pip",new at);fe(this,"tail",new at);fe(this,"clock",0);fe(this,"disposed",!1);fe(this,"furniture",new Map);fe(this,"facing",0);fe(this,"lastHome",!1);this.group.name="Meg attic room",this.makeRoom(),this.makeBasics(),this.makeStations(),this.makeMeg(),this.makePumpkin(),this.makeFurniture(),this.group.visible=!1}update(e,t,i){if(this.disposed)return;const s=e,r=s.mode==="home";if(this.group.visible=r,!r){this.lastHome=!1;return}const o=Math.min(.05,Math.max(0,t||.016));this.clock+=o;const a=s.homePosition||{x:0,z:0},c=new L(Si.clamp(a.x,-7.5,7.5),0,Si.clamp(a.z,-5.5,5.5));this.lastHome?this.meg.position.lerp(c,1-Math.exp(-o*14)):this.meg.position.copy(c),this.lastHome=!0;const l=s.homeFacing;typeof l=="number"?this.facing=l:c.distanceToSquared(this.meg.position)>.001&&(this.facing=Math.atan2(c.x-this.meg.position.x,c.z-this.meg.position.z)),this.meg.rotation.y=this.facing;const u=c.distanceTo(this.meg.position)>.035;this.meg.children.filter(f=>f.name==="limb").forEach((f,g)=>f.rotation.x=i?0:Math.sin(this.clock*11+g*Math.PI)*(u?.55:.08)),this.meg.position.y=i?0:u?Math.abs(Math.sin(this.clock*11))*.045:Math.sin(this.clock*2)*.018;const d=this.meg.position.clone().add(new L(-Math.sin(this.facing)*1.25,0,-Math.cos(this.facing)*1.25));d.x=Si.clamp(d.x,-7.3,7.3),d.z=Si.clamp(d.z,-5.3,5.3),this.pip.position.lerp(d,1-Math.exp(-o*4)),this.pip.lookAt(this.meg.position.x,0,this.meg.position.z);const h=this.meg.position.distanceToSquared(new L(4,0,3))<2.7;this.pip.position.y=!i&&h?Math.sin(this.clock*6)*.075:0,this.tail.rotation.z=i?.12:Math.sin(this.clock*(h?5:2))*.34,this.furniture.forEach((f,g)=>f.visible=s.profile.furniture.includes(g))}dispose(){if(this.disposed)return;this.disposed=!0;const e=new Set,t=new Set,i=new Set;this.group.traverse(s=>{const r=s;r.geometry&&e.add(r.geometry),(r.material?Array.isArray(r.material)?r.material:[r.material]:[]).forEach(a=>{t.add(a),Object.values(a).forEach(c=>{c instanceof Zt&&i.add(c)})})}),e.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),i.forEach(s=>s.dispose()),this.group.clear()}makeRoom(){const e=Bt(18,.25,14,Fi);We(this.group,e,0,-.13,0);for(let s=-6;s<=6;s+=1){const r=Bt(17.8,.012,.035,on);We(this.group,r,0,.01,s+.5)}const t=Bt(18,8,.22,Sh);We(this.group,t,0,4,-7);const i=Bt(.22,8,14,Sh);We(this.group,i,4,4,0),i.position.x=-9;for(const[s,r,o,a]of[[-8.65,0,.34,14],[0,-6.65,18,.34],[0,-3.9,18,.25]])We(this.group,Bt(o,.28,a,on),s,7.55,r);for(const s of[-8.4,-4.4,0,4.4,8.4]){const r=Bt(.32,7.6,.35,on);r.rotation.z=s/34,We(this.group,r,s,3.8,-6.75)}this.makeWindow()}makeWindow(){const e=new at;We(this.group,e,2.3,4.7,-6.78);const t=new Q(new cn(3.2,2.45),new Rn({color:16764813}));t.position.z=.02,e.add(t);for(const[s,r,o,a]of[[0,0,3.45,.17],[0,0,.16,2.6],[-1.65,0,.16,2.6],[1.65,0,.16,2.6],[0,1.22,3.45,.16]])We(e,Bt(o,a,.12,on),s,r,.08);for(const s of[-2,2]){const r=new Q(new ft(.45,.56,2.65,8),At(8559016));r.scale.z=.28,We(e,r,s,0,.22)}const i=Bt(4.5,.18,.55,Fi);We(e,i,0,-1.38,.32)}makeBasics(){const e=new at;We(this.group,e,5.8,0,4.65),We(e,Bt(4.2,.35,2.6,on),0,.55,0),We(e,Bt(4,.32,2.35,At(10249076)),0,.9,0),We(e,Bt(4.25,2.25,.22,on),0,1.5,1.16),We(e,Bt(1.55,.26,.8,fo),-.9,1.2,-.55),[[-1.8,-1],[1.8,-1],[-1.8,1],[1.8,1]].forEach(([s,r])=>We(e,yn(.12,.65,on),s,.25,r));const t=new at;We(this.group,t,-5,0,-3),We(t,Bt(3.3,.22,1.55,Fi),0,1.75,0),[-1.35,1.35].forEach(s=>[-.58,.58].forEach(r=>We(t,yn(.11,1.7,on),s,.85,r))),We(t,Bt(.9,.72,1.15,on),-1.05,1.25,0),We(t,Bt(.62,.12,.88,At(15982509)),.55,1.93,.03);const i=new at;We(this.group,i,-4.2,0,-1.45),We(i,yn(.48,.16,At(7314849)),0,1,0),We(i,yn(.13,1,on),0,.5,0)}makeStations(){const e=new at;We(this.group,e,5,0,-3),We(e,Bt(2.2,.16,.46,on),0,2.55,0),[-.75,0,.75].forEach(s=>{const r=yn(.06,2.35,Fi);r.rotation.z=-.16+s*.1,We(e,r,s,1.25,0),We(e,new Q(new Qt(.29,.52,7),po),s-.14,.28,0)});const t=new at;We(this.group,t,-5,0,3),We(t,yn(.48,1.15,on),0,.58,0),We(t,Bt(1.25,.14,.9,At(6065798)),0,1.2,0),t.rotation.y=-.25;const i=new Q(new ft(1.15,1.3,.16,16),At(14262655));We(this.group,i,4,.08,3),Rh.forEach(s=>this.group.add(this.label(s.id==="jobs"?"POST":s.id==="decor"?"HOME":s.id.toUpperCase(),s.x,3.3,s.z)))}makeMeg(){const e=this.meg;e.name="Meg",this.group.add(e),We(e,new Q(new dt(.34,12,10),At(16761758)),0,1.52,0);const t=new Q(new dt(.38,12,10,0,Math.PI*2,0,Math.PI*.55),At(9323307));We(e,t,0,1.7,.01);const i=new at;We(e,i,0,1.94,0),We(i,new Q(new ft(.48,.48,.12,12),At(4534349)),0,0,0);const s=new Q(new Qt(.3,.82,12),At(4534349));s.rotation.z=-.18,We(i,s,.06,.39,0),We(e,new Q(new Qt(.48,1.05,12),jM),0,.84,0);for(const[r,o]of[[-.22,.08],[.22,.08]]){const a=yn(.09,.55,on);a.name="limb",We(e,a,r,.3,o);const c=yn(.075,.58,At(16761758));c.name="limb",c.rotation.z=r*1.8,We(e,c,r*1.5,1.06,0)}}makePumpkin(){const e=this.pip;e.name="Pumpkin",this.group.add(e),We(e,new Q(new dt(.43,12,9),fo),0,.48,0),We(e,new Q(new dt(.34,12,9),fo),0,.76,.28);for(const r of[-.2,.2]){const o=new Q(new Qt(.16,.36,4),po);We(e,o,r,1.12,.26);const a=new Q(new dt(.045,8,6),At(2893616));We(e,a,r*.72,.8,.59)}const t=Bt(.18,.42,.08,po);t.rotation.z=Math.PI/2,We(e,t,0,.86,.58);const i=new at;this.tail=i,We(e,i,0,.51,-.38);const s=new Q(new An(.34,.07,6,12,Math.PI*1.4),po);s.rotation.x=Math.PI/2,We(i,s,0,.36,-.22)}makeFurniture(){const e=(t,i,s,r)=>{const o=r();o.position.set(i,0,s),o.visible=!1,this.group.add(o),this.furniture.set(t,o)};e("rug",0,-.2,()=>{const t=new Q(new ft(2.1,2.1,.05,20),At(7508365));return t.position.y=.035,t}),e("plant",-7,4.6,()=>{const t=new at;We(t,yn(.38,.7,At(13273941)),0,.35,0);for(let i=0;i<6;i++){const s=new Q(new dt(.35,8,6),ty);We(t,s,Math.sin(i)*.28,1+Math.abs(Math.cos(i))*.25,Math.cos(i)*.28)}return t}),e("shelf",-7.7,-2.2,()=>{const t=new at;We(t,Bt(.55,3.1,2.2,on),0,1.55,0);for(let i=.6;i<3;i+=.75)We(t,Bt(.7,.1,2.1,Fi),0,i,0);return t}),e("lamp",1.8,-4.8,()=>{const t=new at;We(t,yn(.1,2.2,ey),0,1.1,0);const i=new Q(new Qt(.52,.48,12,1,!0),fo);return We(t,i,0,2.1,0),t}),e("cushion",1.4,3.5,()=>{const t=new Q(new dt(.6,12,7),At(13858182));return t.scale.y=.32,t.position.y=.18,t}),e("cat-tree",7,2.5,()=>{const t=new at;return We(t,yn(.17,2.5,At(13610617)),0,1.25,0),We(t,yn(.72,.16,At(13605991)),0,2.45,0),t})}label(e,t,i,s){const r=document.createElement("canvas");r.width=256,r.height=92;const o=r.getContext("2d");o.fillStyle="#3f2b35",o.roundRect(4,4,248,84,18),o.fill(),o.strokeStyle="#f7d688",o.lineWidth=5,o.roundRect(4,4,248,84,18),o.stroke(),o.fillStyle="#fff3cf",o.font="bold 36px sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(e,128,48);const a=new Nc(new dl({map:new Ls(r),transparent:!0}));return a.position.set(t,i,s),a.scale.set(1.7,.62,1),a}}function iy(n,e,t){const i=n.mode==="flight"||n.mode==="tutorial",s=Math.hypot(n.player.velocity.x,n.player.velocity.y,n.player.velocity.z),r=i&&!n.paused&&!t;return{bob:r&&n.player.hover&&s<.3?Math.sin(e*1.5)*.035:0,speed:r?Math.min(1,Math.max(0,(s-5)/16.6)):0}}class sy{constructor(e){fe(this,"element",document.createElement("div"));this.element.className="flight-effects",this.element.setAttribute("aria-hidden","true");for(let t=0;t<14;t++){const i=document.createElement("i"),s=t*Math.PI*2/14;i.style.left=`${50+Math.cos(s)*43}%`,i.style.top=`${50+Math.sin(s)*43}%`,i.style.setProperty("--angle",`${s}rad`),i.style.animationDelay=`${-t*.17}s`,this.element.append(i)}e.insertAdjacentElement("afterend",this.element)}update(e,t){this.element.hidden=e<=0,this.element.style.setProperty("--speed",e.toFixed(3)),this.element.classList.toggle("low-quality",t)}dispose(){this.element.remove()}}const ry=[15907014,11063528,15915176,13154528];function bh(n){const e=new Q(new Je(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z));return e.position.set((n.min.x+n.max.x)/2,(n.min.y+n.max.y)/2,(n.min.z+n.max.z)/2),e}class oy{constructor(e){fe(this,"scene",new Rm);fe(this,"camera",new gn(62,1,.1,900));fe(this,"renderer");fe(this,"effects");fe(this,"hero",new at);fe(this,"dropParcel",new at);fe(this,"glowColumn",new at);fe(this,"glowMats",[]);fe(this,"lastGlowStopId");fe(this,"targetRing",new at);fe(this,"clouds",new at);fe(this,"birds",new at);fe(this,"boats",[]);fe(this,"clock",0);fe(this,"camPos",new L(0,27,145));fe(this,"camLook",new L(0,18,90));fe(this,"homeLook",new L(0,Oo,0));fe(this,"ray",new P0);fe(this,"blockers",[]);fe(this,"outlines",[]);fe(this,"life");fe(this,"beamGroup",null);fe(this,"beamLight",null);fe(this,"lighthouseLit",!0);fe(this,"sun");fe(this,"disposed",!1);fe(this,"lastMode");fe(this,"lastWidth",-1);fe(this,"lastHeight",-1);fe(this,"lastPixelRatio",-1);fe(this,"followYaw",0);fe(this,"world");fe(this,"water",null);fe(this,"room",new ny);fe(this,"outdoorFog",new Do(12180704,.0035));fe(this,"birdFlock",[]);this.renderer=new TM({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.effects=new sy(e),this.renderer.outputColorSpace=Yt,this.renderer.toneMapping=jc,this.renderer.toneMappingExposure=1.12,this.renderer.setClearColor(11459048),this.scene.fog=new Do(12180704,.0035),this.camera.position.copy(this.camPos);const t=new b0(14283263,13074296,2.35);this.scene.add(t),this.sun=new A0(16765344,2.5),this.sun.position.set(-80,115,48),this.scene.add(this.sun),this.world=this.makeWorld(),this.life=new ZM(this.world),this.scene.add(this.world,this.hero,this.dropParcel,this.glowColumn,this.targetRing,this.clouds,this.birds,this.room.group),this.makeHero(),this.makeDropParcel(),this.makeGlowColumn(),this.makeSkyLife(),this.resize()}resize(){this.lastWidth=-1}render(e,t,i){if(this.disposed)return;const s=e.paused?0:Math.min(.05,Math.max(0,t));this.clock+=s,this.water&&!i.reducedMotion&&this.water.update(this.clock);const r=iy(e,this.clock,i.reducedMotion);this.effects.update(r.speed,i.lowQuality);const o=this.renderer.domElement,a=Math.max(1,o.clientWidth||o.width),c=Math.max(1,o.clientHeight||o.height),l=i.lowQuality?1e6:2e6,u=Math.min(devicePixelRatio||1,Math.sqrt(l/(a*c)));(a!==this.lastWidth||c!==this.lastHeight||u!==this.lastPixelRatio)&&(this.renderer.setPixelRatio(u),this.renderer.setSize(a,c,!1),this.camera.aspect=a/c,this.camera.updateProjectionMatrix(),this.lastWidth=a,this.lastHeight=c,this.lastPixelRatio=u),this.renderer.shadowMap.enabled=!i.lowQuality,this.outlines.forEach(m=>{m.visible=!i.lowQuality});const d=e.mode==="home";if([this.world,this.hero,this.dropParcel,this.glowColumn,this.targetRing,this.clouds,this.birds].forEach(m=>m.visible=!d),this.room.update(e,s,i.reducedMotion),d){this.scene.fog=null,this.renderer.setClearColor(14010030),this.camera.fov=48,this.camera.updateProjectionMatrix();const m=e.homePosition||{x:0,z:0},p=KM(m.x,m.z),S=JM([this.homeLook.x,this.homeLook.z],[p.look[0],p.look[2]],this.lastMode!=="home",s,i.reducedMotion);this.homeLook.set(S[0],Oo,S[1]),this.camera.position.set(this.homeLook.x+Es.x,this.homeLook.y+Es.y,this.homeLook.z+Es.z),this.camera.up.set(0,1,0),this.camera.lookAt(this.homeLook),this.lastMode=e.mode,this.renderer.render(this.scene,this.camera);return}this.camera.fov!==62&&(this.camera.fov=62,this.camera.updateProjectionMatrix()),this.scene.fog=this.outdoorFog,this.renderer.setClearColor(11459048);const h=e.player.position,f=new L(h.x,h.y,h.z),g=this.lastMode===void 0||this.lastMode!==e.mode;this.hero.position.copy(f),this.hero.rotation.order="YXZ",this.hero.rotation.y=$M(e.player.yaw),this.hero.rotation.x=e.player.pitch*.4,this.hero.rotation.z=0,this.hero.scale.setScalar(e.mode==="title"||e.mode==="summary"?.86:.28),this.hero.position.y+=r.bob,this.animateSky(i.reducedMotion,s),!d&&s>0&&this.life.update(s,f,e.player.speed,e.player.velocity.y,this.clock),this.updateBeacon(this.destination(e),i.reducedMotion||e.paused?0:s),this.updateGlowColumn(e,i.reducedMotion),this.updateDropParcel(e,i.reducedMotion?0:s,i.reducedMotion),this.updateCamera(e,f,s,i.reducedMotion,g),this.lastMode=e.mode;const _=e.run?Math.min(1,e.run.elapsed/480):.1;this.sun.color.setHSL(.095-_*.08,.9,.78),this.sun.intensity=2.5-_*.45,this.scene.fog.color.setHSL(.55-_*.48,.42,.82-_*.12),this.renderer.render(this.scene,this.camera)}dispose(){this.effects.dispose(),this.disposed=!0,this.scene.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const i=t.material;(Array.isArray(i)?i:[i]).forEach(s=>s==null?void 0:s.dispose())}),this.renderer.dispose()}makeWorld(){const e=new at,t=ce(16772548),i=CM();this.water=i,e.add(i.mesh);const s=new cn(440,440,200,200);s.rotateX(-Math.PI/2);const r=s.attributes.position;for(let y=0;y<r.count;y++)r.setY(y,Tt(r.getX(y),r.getZ(y)));s.computeVertexNormals();const o=1024,a=document.createElement("canvas");a.width=o,a.height=o;const c=a.getContext("2d"),l=c.createImageData(o,o);l.data.set(wf(o)),c.putImageData(l,0,0);const u=new Ls(a);u.colorSpace=Yt,u.anisotropy=4;const d=ce(16777215);d.map=u;const h=new Q(s,d);e.add(h),t.side=Wt;const f=ce(16777215);f.vertexColors=!0,f.side=Wt;const g=ce(9072461);g.side=Wt;const _=new Map,m=y=>{const v=y.toFixed(1);let b=_.get(v);return b||(y>5?b=[[-fh,12103840],[-uo,12103840],[-uo,11033418],[-lo,11033418],[-lo,4408138],[lo,4408138],[lo,11033418],[uo,11033418],[uo,12103840],[fh,12103840]]:b=[[-y/2,4408138],[y/2,4408138]],_.set(v,b)),b},p=(y,v,b)=>{const w=new at,A=24,x=b/2,E=m(b),R=E.length,P=[],D=[],F=[],B=[],N=[],O=[],I=[],G=new ct;for(let Ne=0;Ne<=A;Ne++){const De=Ne/A,Ae=v.getPointAt(De),$=v.getTangentAt(De),he=-$.z,oe=$.x,Ie=Math.hypot(he,oe)||1,ke=he/Ie,pe=oe/Ie,nt=Gc(y,De);for(const[ae,Ue]of E)P.push(Ae.x+ke*ae,nt,Ae.z+pe*ae),D.push(0,1,0),G.setHex(Ue),F.push(G.r,G.g,G.b);if(Ne<A)for(let ae=0;ae<R-1;ae++){const Ue=Ne*R+ae,Le=Ue+R;B.push(Ue,Le,Ue+1,Ue+1,Le,Le+1)}const qe=Ae.x+ke*x,ne=Ae.z+pe*x,re=Ae.x-ke*x,se=Ae.z-pe*x,Me=[[qe,ne,ke,pe],[re,se,-ke,-pe]];for(const[ae,Ue,Le,Ye]of Me){const Ke=Tt(ae,Ue),U=Ke<nt-.35?Math.max(Ke-.1,nt-4):nt;N.push(ae,nt,Ue,ae,U,Ue),O.push(Le,0,Ye,Le,0,Ye)}if(Ne<A){const ae=Ne*4;I.push(ae,ae+4,ae+1,ae+1,ae+4,ae+5),I.push(ae+2,ae+3,ae+6,ae+3,ae+7,ae+6)}}const q=new Dt;q.setAttribute("position",new st(P,3)),q.setAttribute("normal",new st(D,3)),q.setAttribute("color",new st(F,3)),q.setIndex(B);const te=new Q(q,f);te.receiveShadow=!0,w.add(te);const Z=new Dt;Z.setAttribute("position",new st(N,3)),Z.setAttribute("normal",new st(O,3)),Z.setIndex(I);const le=new Q(Z,g);return le.receiveShadow=!0,w.add(le),w};for(const y of _n){if(y.kind==="bridge")continue;const v=Ml(y),b=zd(y);e.add(p(y,v,b));const w=ce(16774872);w.side=Wt;const A=v.getLength();for(let x=0;x<A-2;x+=4){const E=v.getPointAt(x/A),R=v.getPointAt(Math.min(1,(x+2)/A)),P=new L().addVectors(E,R).multiplyScalar(.5),D=new Q(new cn(.24,2),w);D.rotation.x=-Math.PI/2,D.rotation.z=Math.atan2(R.x-E.x,R.z-E.z);const F=Gc(y,(x+1)/A)+.03;D.position.set(P.x,F,P.z),e.add(D)}}UM(e);const S=ce(10117447);return kl.forEach(([y,v])=>{const b=new Q(new Je(ff,.7,pf),S);b.position.set(y,.8,v),e.add(b)}),this.makeBuildings(e),this.makeGreenery(e),this.makeLighthouse(e),this.makeClockTower(e),this.makeObservatoryDome(e),this.makeBakeryDormer(e),this.makeMansionTerraces(e),this.makeBoats(e),this.makeLaundryLines(e),this.makeDockDressing(e),this.makeStreetLamps(e),this.makePark(e),e}makePark(e){const[t,i,s,r]=pt,o=(t+s)/2,a=(i+r)/2,c=Tt(o,a),l=new Q(new cn(s-t,r-i),ce(8367708));l.rotation.x=-Math.PI/2,l.position.set(o,c+.1,a),e.add(l);const u=new Ot,d=new pn(new ft(.35,.55,4,7),ce(7621174),Ia.length),h=new pn(new dr(2.6,1),ce(5085035),Ia.length);Ia.forEach((v,b)=>{const w=Tt(v.x,v.z);u.rotation.set(0,b*2.39996,0),u.scale.setScalar(v.s),u.position.set(v.x,w+2*v.s,v.z),u.updateMatrix(),d.setMatrixAt(b,u.matrix),u.position.set(v.x,w+5.5*v.s,v.z),u.updateMatrix(),h.setMatrixAt(b,u.matrix)}),d.instanceMatrix.needsUpdate=!0,h.instanceMatrix.needsUpdate=!0,e.add(d,h);const f=ce(15260864);for(const v of FM){const b=new Q(new Je(v.x1-v.x0,.2,v.z1-v.z0),f);b.position.set((v.x0+v.x1)/2,c+.15,(v.z0+v.z1)/2),e.add(b)}const g=OM,_=new Us({color:13625572,transparent:!0,opacity:.5}),m=new Q(new Je(g.w,g.h,g.d),_);m.position.set(g.x,c+g.h/2,g.z),e.add(m);const p=g.d/2,S=new Q(new dt(p,16,10,0,Math.PI*2,0,Math.PI/2),_);S.position.set(g.x,c+g.h,g.z),e.add(S);const y=ce(8030858);for(let v=0;v<6;v++){const b=new Q(new An(p,.15,6,12,Math.PI),y);b.position.set(g.x,c+g.h,g.z),b.rotation.y=v/6*Math.PI,e.add(b)}}makeLaundryLines(e){const t=ce(4865845),i=[ce(16747434),ce(8370408),ce(16777215),ce(16767306),ce(10147455)],s=[[-25,9,-50,-20,9,-32],[5,11,-50,15,11,-45],[-20,8,-22,15,8,-28]],r=mn(42);s.forEach(([o,a,c,l,u,d])=>{const h=new L(o,a,c),f=new L(l,u,d),g=h.distanceTo(f),_=12;let m=h.clone();for(let S=1;S<=_;S++){const y=S/_,v=h.clone().lerp(f,y);v.y-=Math.sin(y*Math.PI)*.8;const b=m.distanceTo(v),w=new Q(new ft(.03,.03,b,4),t);w.position.copy(m).lerp(v,.5),w.lookAt(v),w.rotateX(Math.PI/2),e.add(w),m=v}const p=Math.floor(g/3);for(let S=0;S<p;S++){const y=(S+.7)/(p+.4),v=h.clone().lerp(f,y);v.y-=Math.sin(y*Math.PI)*.8;const b=.9+r()*.5,w=1.1+r()*.5,A=new Q(new cn(b,w),i[Math.floor(r()*i.length)]);A.position.set(v.x,v.y-w/2,v.z),A.rotation.y=Math.atan2(f.x-h.x,f.z-h.z)+Math.PI/2,A.material.side=Wt,e.add(A)}})}makeDockDressing(e){const t=ce(11040318),i=ce(8016432),s=ce(13218953),r=kl,o=mn(7);r.forEach(([a,c])=>{const l=2+Math.floor(o()*3);for(let d=0;d<l;d++){const h=1.1+o()*.5,f=new Q(new Je(h,h,h),t);f.position.set(a-10+o()*20,1.15+h/2+(d===2?1.4:0),c-3+o()*6),f.rotation.y=o()*.6,f.castShadow=!0,e.add(f)}for(let d=0;d<2;d++){const h=new Q(new ft(.65,.65,1.5,10),i);h.position.set(a-8+o()*16,1.9,c-2.5+o()*5),h.castShadow=!0,e.add(h)}const u=new Q(new An(.55,.18,8,16),s);u.position.set(a-6+o()*12,1.25,c-2+o()*4),u.rotation.x=Math.PI/2,e.add(u)})}makeStreetLamps(e){const t=ce(3816002),i=ce(16767370);[[-70,30],[-62,42],[-78,48],[-92,12],[-92,20],[-47,24],[-47,32],[-10,-40],[10,-40],[-10,-55],[10,-55]].forEach(([r,o])=>{const c=new Q(new ft(.12,.16,4.2,8),t);c.position.set(r,0+2.1,o),c.castShadow=!0,e.add(c);const l=new Q(new Qt(.45,.35,8),t);l.position.set(r,0+4.55,o),e.add(l);const u=new Q(new dt(.32,10,8),i);u.position.set(r,0+4.2,o),e.add(u)})}makeBoats(e){const t=ce(9132604),i=ce(5996454),s=ce(7031343),r=ce(16117985),o=new Fc;o.moveTo(0,4.2),o.quadraticCurveTo(1.7,2.5,1.6,0),o.quadraticCurveTo(1.5,-2.5,1,-3.4),o.quadraticCurveTo(0,-3.8,-1,-3.4),o.quadraticCurveTo(-1.5,-2.5,-1.6,0),o.quadraticCurveTo(-1.7,2.5,0,4.2);const a=new Fo(o,{depth:1.1,bevelEnabled:!1});a.rotateX(-Math.PI/2);const c=new Fc;c.moveTo(0,4.5),c.quadraticCurveTo(1.95,2.6,1.85,0),c.quadraticCurveTo(1.75,-2.6,1.15,-3.65),c.quadraticCurveTo(0,-4.1,-1.15,-3.65),c.quadraticCurveTo(-1.75,-2.6,-1.85,0),c.quadraticCurveTo(-1.95,2.6,0,4.5);const l=new Uc;l.moveTo(0,3.9),l.quadraticCurveTo(1.45,2.4,1.35,0),l.quadraticCurveTo(1.25,-2.4,.85,-3.15),l.quadraticCurveTo(0,-3.5,-.85,-3.15),l.quadraticCurveTo(-1.25,-2.4,-1.35,0),l.quadraticCurveTo(-1.45,2.4,0,3.9),c.holes.push(l);const u=new Fo(c,{depth:.28,bevelEnabled:!1});u.rotateX(-Math.PI/2);const d=[.08,-.06,.1,-.08,.06,-.1];mf.map(([f,g],_)=>[f,g,d[_]]).forEach(([f,g,_],m)=>{const p=new at,S=m%2?i:t,y=new Q(a,S);y.position.y=1.1,p.add(y);const v=new Q(u,s);v.position.y=1.1,p.add(v);const b=new Q(new ft(.12,.16,5.5,6),s);b.position.y=3.8,p.add(b);const w=new Q(new Je(.3,3.6,1.7),r);w.position.set(0,3.3,-1.2),p.add(w),p.position.set(f,.1,g),p.rotation.y=_,p.userData.phase=m*1.3,p.userData.baseY=.1,e.add(p),this.boats.push(p)})}makeBuildings(e){const t=Hd(),i=ce(16768938),s=ce(3501961),r=ce(16767370),o=ce(7358008),a=ce(5085035),c=ce(16747434),l=(_,m,p,S,y,v,b,w,A,x,E,R)=>{const P=Math.min(4.2,m*.28),D=new Q(new Je(_,m-P,p),ce(E));D.position.set(y,S+(m-P)*.5,v),D.castShadow=!0,D.receiveShadow=!0,e.add(D);const F=_*.5,B=p*.5,N=m*.5-P,O=new L(y,S+m*.5,v),I=new Dt;I.setAttribute("position",new st([-F,N,-B,F,N,-B,0,m*.5,0,F,N,-B,F,N,B,0,m*.5,0,F,N,B,-F,N,B,0,m*.5,0,-F,N,B,-F,N,-B,0,m*.5,0],3)),I.setIndex([0,2,1,3,5,4,6,8,7,9,11,10]),I.computeVertexNormals();const G=new Q(I,ce(R));G.position.copy(O),G.castShadow=!0,e.add(G),BM(t,HM({sx:_,sy:m,sz:p,minY:S,cx:y,cz:v,district:b,seedBase:w,colorIdx:A,bayWindow:x}))};sn.forEach((_,m)=>{const p=_.max.x-_.min.x,S=_.max.y-_.min.y,y=_.max.z-_.min.z,v=new L((_.min.x+_.max.x)/2,(_.min.y+_.max.y)/2,(_.min.z+_.max.z)/2),b=bh(_);if(this.blockers.push(b),m===Hl||m===Gl||m===Vl)return;const w=_.district&&Dr[_.district]||Dr["old-town"];l(p,S,y,_.min.y,v.x,v.z,_.district??"old-town",m,m,!1,w.bodies[m%w.bodies.length],w.roofs[m%w.roofs.length]),_.district==="bungalow-lanes"&&this.makePicketFence(e,_,m),_.district==="mansion-hill"&&this.makeWalledGarden(e,_,m)});const u=Ga(),d=Nh(u),h=ce(9076594),f=ce(12101770),g=_n.filter(_=>_.kind!=="bridge").map(_=>{const m=Rs(jt(_.a)),p=Rs(jt(_.b));return{x0:m.x,z0:m.z,x1:p.x,z1:p.z}});u.forEach((_,m)=>{const p=wo(_.x,_.z,_.w,_.d),S=p?p.maxH:Tt(_.x+_.w/2,_.z+_.d/2),y=p?p.minH:S,v=S,b=Dr[_.district]||Dr["old-town"],w=_.palette===0?b.bodies[m%b.bodies.length]:ry[_.palette-1];if(S-y>.3){const D=new Q(new Je(_.w,S-y,_.d),h);D.position.set(_.x+_.w/2,y+(S-y)/2,_.z+_.d/2),D.castShadow=!0,D.receiveShadow=!0,e.add(D)}l(_.w,_.h,_.d,v,_.x+_.w/2,_.z+_.d/2,_.district,zM+m,m,_.bayWindow,w,b.roofs[m%b.roofs.length]),this.blockers.push(bh(d[m]));const A=_.x+_.w/2,x=_.z+_.d/2;let E=0,R=0,P=1/0;for(const D of g){const F=D.x1-D.x0,B=D.z1-D.z0,N=F*F+B*B;let O=N>0?((A-D.x0)*F+(x-D.z0)*B)/N:0;O=Math.max(0,Math.min(1,O));const I=D.x0+O*F,G=D.z0+O*B,q=Math.hypot(A-I,x-G);q<P&&(P=q,E=I,R=G)}if(P<1/0&&P>.5){const D=E-A,F=R-x,B=Math.hypot(D,F),N=D/B,O=F/B,I=(_.w*Math.abs(N)+_.d*Math.abs(O))/2,G=A+N*I,q=x+O*I,te=E-N*2.8,Z=R-O*2.8,le=Math.hypot(te-G,Z-q);if(le>1.5){const Ne=(G+te)/2,De=(q+Z)/2,Ae=(Tt(G,q)+Tt(te,Z))/2+.1,$=new Q(new Je(3,.18,le),f);$.position.set(Ne,Ae,De),$.rotation.y=Math.atan2(te-G,Z-q),$.receiveShadow=!0,e.add($)}}}),this.buildFacadeInstances(e,t,{trimMat:i,glassMat:s,litMat:r,doorMat:o,leafMat:a,petalMat:c})}buildFacadeInstances(e,t,i){const s=new cn(1,1),r=new Je(1,1,1),o=new dt(1,6,5),a=new Ot,c=(h,f)=>{f.forEach((g,_)=>{a.position.set(g.x,g.y,g.z),a.rotation.set(g.rotX,g.rotY,0),a.scale.set(g.sx,g.sy,g.sz),a.updateMatrix(),h.setMatrixAt(_,a.matrix)}),h.instanceMatrix.needsUpdate=!0,h.frustumCulled=!1,e.add(h)};if(t.winLit.length){const h=new pn(s,i.litMat,t.winLit.length);c(h,t.winLit)}if(t.winUnlit.length){const h=new pn(s,i.glassMat,t.winUnlit.length);c(h,t.winUnlit)}if(t.doors.length){const h=new pn(s,i.doorMat,t.doors.length);c(h,t.doors)}if(t.sills.length){const h=new pn(r,i.trimMat,t.sills.length);c(h,t.sills)}if(t.bays.length){const h=new pn(r,i.trimMat,t.bays.length);c(h,t.bays)}if(t.flowerBoxes.length){const h=new pn(r,i.doorMat,t.flowerBoxes.length);c(h,t.flowerBoxes)}if(t.petals.length){const h=new pn(o,i.petalMat,t.petals.length);c(h,t.petals)}if(t.leaves.length){const h=new pn(o,i.leafMat,t.leaves.length);c(h,t.leaves)}const l=new cn(1,1,1,1),u=l.attributes.position;for(let h=0;h<u.count;h++)u.getY(h)<0&&u.setZ(h,-.7);l.computeVertexNormals();const d=[["#e86a6a","#f5f0e1"],["#5b7fa6","#f5f0e1"],["#6aa86a","#f5f0e1"]];t.awnings.forEach((h,f)=>{if(!h.length)return;const[g,_]=d[f%d.length],m=document.createElement("canvas");m.width=128,m.height=16;const p=m.getContext("2d");for(let v=0;v<8;v++)p.fillStyle=v%2?g:_,p.fillRect(v*16,0,16,16);const S=new Ls(m);S.colorSpace=Yt;const y=new pn(l,new Us({map:S,side:Wt}),h.length);c(y,h)})}makePicketFence(e,t,i){const s=(t.min.x+t.max.x)/2,r=(t.min.z+t.max.z)/2,o=t.max.x-t.min.x,a=t.max.z-t.min.z,c=t.min.y,l=ce(16117985),u=ce(7031343),d=[ce(16747434),ce(16767306),ce(16777215),ce(15231594)],h=4,f=s-o/2-h,g=s+o/2+h,_=r+a/2+h,m=[[f,_,s-1.2,_],[s+1.2,_,g,_],[f,r-a/2,f,_],[g,r-a/2,g,_]],p=[],S=new Ot;m.forEach(([x,E,R,P])=>{const D=Math.hypot(R-x,P-E),F=Math.max(2,Math.floor(D/.38)),B=Math.atan2(R-x,P-E);for(let G=0;G<=F;G++){const q=G/F;S.position.set(x+(R-x)*q,c+.55,E+(P-E)*q),S.rotation.set(0,B,0),S.updateMatrix(),p.push(S.matrix.clone())}const N=D,O=new Q(new Je(.08,.12,N),l);O.position.set((x+R)/2,c+.75,(E+P)/2),O.rotation.y=B,e.add(O);const I=O.clone();I.position.y=c+.35,e.add(I)});const y=new Je(.14,1.1,.07),v=new pn(y,l,p.length);p.forEach((x,E)=>v.setMatrixAt(E,x)),v.instanceMatrix.needsUpdate=!0,e.add(v);const b=new Qt(.1,.18,4),w=new pn(b,l,p.length);p.forEach((x,E)=>{const R=new L().setFromMatrixPosition(x);S.position.set(R.x,R.y+.64,R.z),S.rotation.set(0,Math.PI/4,0),S.updateMatrix(),w.setMatrixAt(E,S.matrix)}),w.instanceMatrix.needsUpdate=!0,e.add(w);const A=mn(i*77+5);[-1,1].forEach(x=>{const E=s+x*3.2,R=r+a/2+2.2,P=new Q(new Je(3.4,.35,1.8),u);P.position.set(E,c+.18,R),e.add(P);for(let D=0;D<7;D++){const F=new Q(new dt(.22,7,6),d[Math.floor(A()*d.length)]);F.position.set(E+(A()-.5)*2.8,c+.55,R+(A()-.5)*1.2),e.add(F);const B=new Q(new dt(.18,6,5),ce(5085035));B.position.set(E+(A()-.5)*2.8,c+.42,R+(A()-.5)*1.2),e.add(B)}})}makeWalledGarden(e,t,i){const s=Oi.find(O=>t.min.x>=O[0]-1&&t.max.x<=O[2]+1&&t.min.z>=O[1]-1&&t.max.z<=O[3]+1);if(!s)return;const[r,o,a,c]=s,l=t.min.y,u=ce(12103840),d=ce(14209216),h=ce(4033119),f=ce(7031343),g=[ce(16747434),ce(16767306),ce(16777215)],_=Oi.some(O=>O!==s&&Math.abs(O[2]-r)<.01),m=Oi.some(O=>O!==s&&Math.abs(O[0]-a)<.01),p=[[(r+a)/2,o,a-r,.5]],S=[[(r+a)/2,o+1.5,a-r-3,.8]],y=t.max.z-o,v=(o+t.max.z)/2;_||(p.push([r,v,.5,y]),S.push([r+1.5,v,.8,y-3])),m?S.push([a,v,.8,y-2]):(p.push([a,v,.5,y]),S.push([a-1.5,v,.8,y-3]));const b=[],w=o+3,A=t.max.z-2;if(A-w>=5){const O=[];!_&&t.min.x-r>=5&&O.push([r+2.5,t.min.x-2.5]),!m&&a-t.max.x>=5&&O.push([t.max.x+2.5,a-2.5]);for(const[I,G]of O){const q=(I+G)/2,te=Math.max(1,Math.floor((A-w)/8));for(let Z=0;Z<te;Z++){const le=w+(Z+.5)*((A-w)/te);b.push([q,le])}}}const x=.9;p.forEach(([O,I,G,q])=>{const te=new Q(new Je(G,x,q),u);te.position.set(O,l+x/2,I),te.castShadow=!0,e.add(te);const Z=new Q(new Je(G+.15,.12,q+.15),d);Z.position.set(O,l+x+.06,I),e.add(Z)});const E=1;S.forEach(([O,I,G,q])=>{const te=new Q(new Je(G,E,q),h);te.position.set(O,l+E/2,I),te.castShadow=!0,e.add(te)});const R=mn(i*131+11);b.forEach(([O,I])=>{const G=new Q(new Je(3.2,.4,2.4),f);G.position.set(O,l+.2,I),e.add(G);for(let q=0;q<8;q++){const te=new Q(new dt(.24,7,6),g[Math.floor(R()*g.length)]);te.position.set(O+(R()-.5)*2.6,l+.6,I+(R()-.5)*1.8),e.add(te)}});const P=[],D=o+5,F=t.min.z-4;if(F-D>6){const O=Math.max(2,Math.floor((a-r-10)/11));for(let I=0;I<O;I++){const G=r+7+(I+.5)*((a-r-14)/O)+(R()-.5)*3,q=(D+F)/2+(R()-.5)*2;P.push([G,q])}}!_&&t.min.x-r>9&&P.push([(r+t.min.x)/2,(D+F)/2]),!m&&a-t.max.x>9&&P.push([(t.max.x+a)/2,(D+F)/2]);const B=ce(7621174),N=ce(5085035);for(const[O,I]of P){const G=new Q(new ft(.4,.65,3.2,7),B);G.position.set(O,l+1.6,I),G.castShadow=!0,e.add(G);const q=new Q(new dr(3,1),N);q.position.set(O,l+5,I),q.castShadow=!0,e.add(q)}}makeGreenery(e){const t=ce(7621174),i=ce(5085035),s=ce(4033119),r=ce(16747434),o=mn(1337),a=Ga(),c=_n.map(f=>{const g=jt(f.a),_=jt(f.b);return{x0:g.x,z0:g.z,x1:_.x,z1:_.z}}),l=(f,g)=>{for(const _ of c){const m=_.x1-_.x0,p=_.z1-_.z0,S=m*m+p*p;let y=S>0?((f-_.x0)*m+(g-_.z0)*p)/S:0;if(y=Math.max(0,Math.min(1,y)),Math.hypot(f-(_.x0+y*m),g-(_.z0+y*p))<4.5)return!1}for(const _ of a)if(f>_.x-2&&f<_.x+_.w+2&&g>_.z-2&&g<_.z+_.d+2)return!1;for(const _ of sn)if(f>_.min.x-2&&f<_.max.x+2&&g>_.min.z-2&&g<_.max.z+2)return!1;return!Oi.some(_=>f>_[0]&&f<_[2]&&g>_[1]&&g<_[3])},u=(f,g)=>{const _=new at,m=3+o()*2.5,p=new Q(new ft(.35,.55,m,7),t);p.position.y=m/2,_.add(p);const S=o()<.5?i:s,y=new Q(new dr(2.2+o()*1.2,1),S);if(y.position.y=m+1.5,_.add(y),_.position.set(f,Tt(f,g),g),_.rotation.y=o()*Math.PI*2,e.add(_),o()<.3){const v=new Q(new dt(.28,7,6),r);v.position.set(f+.8,Tt(f,g)+.5,g+.6),e.add(v)}};let d=0,h=0;for(;d<260&&h<6e3;){h++;const f=(o()-.5)*400,g=60+o()*160;Xl(f,g)&&l(f,g)&&(Rt.some(_=>Math.hypot(f-_.position.x,g-_.position.z)<24)||Math.hypot(f,g)<145||(u(f,g),d++))}for(d=0,h=0;d<60&&h<3e3;){h++;const f=(o()-.5)*400,g=(o()-.5)*400;Xl(f,g)&&l(f,g)&&(Rt.some(_=>Math.hypot(f-_.position.x,g-_.position.z)<24)||f>pt[0]&&f<pt[2]&&g>pt[1]&&g<pt[3]||Math.hypot(f,g)<100&&o()<.7||g>60&&Math.hypot(f,g)>=145||(u(f,g),d++))}}makeLighthouse(e){const t=sn[3],i=sn[Hl],s=(t.min.x+t.max.x)/2,r=(t.min.z+t.max.z)/2,o=new Q(new ft(20,24,9,18),ce(9076594));o.position.set(s,t.min.y+2.5,r),o.castShadow=!0,e.add(o);const a=(i.min.x+i.max.x)/2,c=(i.min.z+i.max.z)/2,l=i.min.y,u=new Q(new ft(3.6,5.2,26,16),ce(16773332));u.position.set(a,16+l,c),u.castShadow=!0,e.add(u);const d=p=>5.2-(p-3)*(1.6/26);for(const p of[8,14,20,26]){const S=new Q(new ft(d(p+1.1)+.15,d(p-1.1)+.15,2.2,16),ce(13786193));S.position.set(a,p+l,c),e.add(S)}const h=new Q(new ft(4.6,4.6,1.2,16),ce(4089472));h.position.set(a,29.6+l,c),e.add(h);const f=new Q(new ft(2.6,2.6,3.4,12),new Rn({color:16771501}));f.position.set(a,31.8+l,c),e.add(f);const g=new Q(new Qt(3.4,2.6,12),ce(13194062));g.position.set(a,34.8+l,c),e.add(g);const _=new at;_.position.set(a,31.8+l,c);const m=new Rn({color:16768910,transparent:!0,opacity:.28,depthWrite:!1,side:Wt});[0,Math.PI].forEach(p=>{const S=new Q(new Qt(3.2,26,12,1,!0),m);S.rotation.z=Math.PI/2,S.rotation.y=p,S.position.set(Math.cos(p)*13,0,-Math.sin(p)*13),_.add(S)}),e.add(_),this.beamGroup=_,this.beamLight=new E0(16768146,60,90),this.beamLight.position.set(a,32+l,c),e.add(this.beamLight),this.setLighthouseLit(!0)}setLighthouseLit(e){this.lighthouseLit=e,this.beamGroup&&(this.beamGroup.visible=e),this.beamLight&&(this.beamLight.intensity=e?60:0)}makeClockTower(e){const t=sn[Gl],i=(t.min.x+t.max.x)/2,s=(t.min.z+t.max.z)/2,r=t.min.y,o=ce(13935988),a=ce(11951167),c=ce(16768938),l=new Q(new Je(8,20,8),o);l.position.set(i,r+10,s),l.castShadow=!0,e.add(l);const u=new Q(new Je(8.6,3,8.6),o);u.position.set(i,r+21.5,s),u.castShadow=!0,e.add(u);const d=ce(2763317),h=[[0,-4.32,Math.PI],[0,4.32,0],[-4.32,0,-Math.PI/2],[4.32,0,Math.PI/2]];for(const[m,p,S]of h){const y=new Q(new ft(2.2,2.2,.3,24),new Rn({color:16314584}));y.rotation.x=Math.PI/2,y.rotation.z=S,y.position.set(i+m,r+17,s+p),e.add(y);const v=new Rn({color:2763317}),b=new Q(new Je(.18,1.1,.1),v);b.position.set(i+m*1.02,r+17.3,s+p*1.02),b.rotation.z=-.6,b.rotation.y=S,e.add(b);const w=new Q(new Je(.14,1.6,.1),v);w.position.set(i+m*1.02,r+17.2,s+p*1.02),w.rotation.z=.9,w.rotation.y=S,e.add(w);const A=new Q(new cn(2.4,2),d);A.position.set(i+m*1.01,r+21.5,s+p*1.01),A.rotation.y=S,e.add(A)}const f=new Qt(6.2,5,4),g=new Q(f,a);g.position.set(i,r+25.5,s),g.rotation.y=Math.PI/4,g.castShadow=!0,e.add(g);const _=new Q(new dt(.5,10,8),c);_.position.set(i,r+28.2,s),e.add(_);for(const[m,p]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const S=new Q(new Je(.7,20,.7),c);S.position.set(i+m*3.8,r+10,s+p*3.8),e.add(S)}}makeObservatoryDome(e){const t=sn[Vl],i=(t.min.x+t.max.x)/2,s=(t.min.z+t.max.z)/2,r=t.min.y,o=ce(9079442),a=ce(6064762),c=new Q(new ft(4.5,4.8,3,18),o);c.position.set(i,r+1.5,s),c.castShadow=!0,e.add(c);const l=new Q(new dt(4.5,20,12,0,Math.PI*2,0,Math.PI/2),a);l.position.set(i,r+3,s),l.castShadow=!0,e.add(l);const u=new Q(new Je(1.2,3.5,.4),ce(1710629));u.position.set(i,r+4.85,s+4.1),u.rotation.x=-.25,e.add(u);const d=new Q(new dt(.4,8,6),ce(9071162));d.position.set(i,r+7.7,s),e.add(d)}makeBakeryDormer(e){const t=sn[0],i=(t.min.x+t.max.x)/2,s=(t.min.z+t.max.z)/2,r=i,o=s-8,a=t.max.x-t.min.x,c=t.max.y-t.min.y,l=t.max.z-t.min.z,u=Math.min(4.2,c*.28),d=Math.max(0,Math.min(1-Math.abs(r-i)/(a/2),1-Math.abs(o-s)/(l/2))),h=t.max.y-u+d*u,f=ce(16049320),g=ce(9132602),_=new Q(new Je(4.5,2.6,3),f);_.position.set(r,h+1.3,o),_.castShadow=!0,e.add(_);const m=new Q(new cn(2.6,1.6),new Rn({color:16767114}));m.position.set(r,h+1.3,o+1.52),e.add(m);const p=new Q(new Je(3,2,.15),g);p.position.set(r,h+1.3,o+1.45),e.add(p),m.position.z=o+1.54;const S=new Dt;S.setAttribute("position",new st([-2.45,0,-1.7,2.45,0,-1.7,0,.2,0,2.45,0,-1.7,2.45,0,1.7,0,.2,0,2.45,0,1.7,-2.45,0,1.7,0,.2,0,-2.45,0,1.7,-2.45,0,-1.7,0,.2,0],3)),S.setIndex([0,2,1,3,5,4,6,8,7,9,11,10]),S.computeVertexNormals();const y=new Q(S,g);y.position.set(r,h+2.6,o),y.castShadow=!0,e.add(y)}makeMansionTerraces(e){const t=ce(10132114),i=ce(6989930),s=(r,o,a,c,l,u)=>{const d=c-a,h=new Q(new Je(o-r,d,u-l),t);h.position.set((r+o)/2,a+d/2,(l+u)/2),h.castShadow=!0,h.receiveShadow=!0,e.add(h);const f=new Q(new Je(o-r-.6,.25,u-l-.6),i);f.position.set((r+o)/2,c+.12,(l+u)/2),f.receiveShadow=!0,e.add(f)};for(const r of[17,18]){const o=sn[r],a=o.min.y;s(o.min.x,o.max.x,a,a+1.5,o.max.z,o.max.z+4.5),s(o.min.x+4,o.max.x-4,a,a+3,o.max.z+2.25,o.max.z+4.5)}}makeHero(){const e=new Rn({color:3746621,side:rn}),t=(c,l,u,d)=>{const h=new Q(c,l);h.position.set(u.x,u.y,u.z),d&&h.scale.set(d.x,d.y,d.z),this.hero.add(h);const f=new Q(c,e);return f.scale.setScalar(1.045),h.add(f),this.outlines.push(f),h},i=t(new ft(.16,.21,8.6,10),ce(8736825),{x:0,y:.15,z:.35});i.rotation.x=Math.PI/2;const s=t(new An(.62,.105,7,14,Math.PI*1.25),ce(7946799),{x:0,y:.58,z:-4.05});s.rotation.z=Math.PI*.18,[3,3.3].forEach(c=>t(new An(.34,.1,6,12),ce(5583662),{x:0,y:.15,z:c}));for(let c=0;c<21;c++){const l=(c-10)/10,u=new vd(new L(l*.25,.15,3),new L(l*1.5,-.05+Math.cos(c)*.16,5.8-Math.abs(l)*.35));t(new Vo(u,1,.11,5,!1),ce(c%2?13869914:15780216),{x:0,y:0,z:0})}t(new Qt(1.75,4.3,9),ce(1535606),{x:0,y:4,z:-.25}),t(new dt(1.15,14,10),ce(16762531),{x:0,y:6.5,z:-.35}),t(new Qt(2.05,4.6,11),ce(2443608),{x:0,y:9,z:-.35}),t(new An(1.55,.28,7,16),ce(2443608),{x:0,y:7.25,z:-.35},{x:1,y:1,z:1}).rotation.x=Math.PI/2,[-1,1].forEach(c=>{const l=t(new ft(.34,.48,2.2,7),ce(2443608),{x:c*.72,y:2.35,z:.05});l.rotation.z=c*.36;const u=t(new ft(.28,.35,1.75,7),ce(2443608),{x:c*1.12,y:1.15,z:-.08});u.rotation.z=-c*.62,t(new dt(.46,8,7),ce(5716276),{x:c*1.48,y:.52,z:-.47},{x:1,y:.65,z:1.45})}),[-.75,-.38,.38,.75].forEach((c,l)=>t(new dt(.45,8,7),ce(10308914),{x:c,y:6.75-l%2*.42,z:-1.15})),[-.4,.4].forEach(c=>t(new dt(.14,8,7),ce(2504770),{x:c,y:6.65,z:-1.43}));const r=ce(15914671);t(new dt(1.02,12,9),r,{x:0,y:2,z:1.48}),t(new dt(.78,12,9),r,{x:0,y:2.78,z:2.08}),[-.48,.48].forEach(c=>t(new Qt(.38,.78,3),ce(14721900),{x:c,y:3.55,z:2.2})),[-.26,.26].forEach(c=>t(new dt(.12,7,6),ce(2572625),{x:c,y:2.88,z:2.88})),[-.42,.42].forEach(c=>t(new dt(.19,7,6),r,{x:c,y:1.27,z:2.12},{x:1,y:.7,z:1.15}));const o=t(new An(.79,.075,6,12),ce(12929874),{x:0,y:2.45,z:2.06});o.rotation.x=Math.PI/2;const a=t(new An(1,.17,7,12,Math.PI*.8),ce(15914671),{x:0,y:2,z:.95});a.rotation.x=Math.PI/2}makeSkyLife(){const e=ce(16776171);for(let t=0;t<12;t++){const i=new at;for(let s=0;s<4;s++){const r=new Q(new dt(3+s%2*1.5,10,7),e);r.position.set(s*3,Math.sin(s)*.8,0),i.add(r)}i.position.set(-190+t*47%380,38+t%4*16,-155+t*71%320),this.clouds.add(i)}this.makeBirds()}makeBirds(){const e=ce(16119280),t=ce(14277081),i=ce(15242044),s=mn(1234);for(let r=0;r<12;r++){const o=new at,a=new Q(new dt(.45,10,8),e);a.scale.set(.7,.6,1.6),o.add(a);const c=new Q(new dt(.26,10,8),e);c.position.set(0,.22,.75),o.add(c);const l=new Q(new Qt(.09,.35,8),i);l.position.set(0,.18,1.05),l.rotation.x=Math.PI/2,o.add(l);const u=new Q(new Je(.5,.07,.6),t);u.position.set(0,.05,-.85),o.add(u);const d=g=>{const _=new at;_.position.set(g*.28,.12,.1);const m=new Q(new Je(1.5,.07,.65),t);m.position.x=g*.85;const p=new Q(new Je(.7,.06,.45),t);return p.position.x=g*1.85,_.add(m,p),o.add(_),_},h=d(-1),f=d(1);o.position.set(-30+s()*80,28+s()*12,45+s()*55),this.birds.add(o),this.birdFlock.push({group:o,left:h,right:f,vel:new L((s()-.5)*8,0,(s()-.5)*8),phase:s()*Math.PI*2})}}updateBirds(e){const t=this.birdFlock.length;if(!t||e<=0)return;const i=14,s=9,r=4.5,o=26,a=new L,c=new L;for(let l=0;l<t;l++){const u=this.birdFlock[l],d=new L,h=new L,f=new L;let g=0;for(let w=0;w<t;w++){if(l===w)continue;const A=this.birdFlock[w],x=u.group.position.distanceTo(A.group.position);x<i&&x>.001&&(g++,c.copy(u.group.position).sub(A.group.position).divideScalar(x*x),d.add(c),h.add(A.vel),f.add(A.group.position))}a.set(0,0,0),g>0&&(d.divideScalar(g).normalize().multiplyScalar(s).sub(u.vel),d.clampLength(0,o),h.divideScalar(g).normalize().multiplyScalar(s).sub(u.vel),h.clampLength(0,o),f.divideScalar(g).sub(u.group.position).normalize().multiplyScalar(s).sub(u.vel),f.clampLength(0,o),a.addScaledVector(d,1.6).addScaledVector(h,1).addScaledVector(f,.9));const _=33-u.group.position.y;a.y+=Si.clamp(_*2.2,-o*.6,o*.6),a.x+=Math.sin(this.clock*.9+u.phase)*4+Math.sin(this.clock*.23+u.phase*2.1)*3,a.z+=Math.cos(this.clock*.7+u.phase*1.3)*4+Math.cos(this.clock*.31+u.phase*.7)*3,u.vel.addScaledVector(a,e);const m=u.vel.length();m>s?u.vel.multiplyScalar(s/m):m<r&&m>.001&&u.vel.multiplyScalar(r/m),u.group.position.addScaledVector(u.vel,e);const p=u.group.position.clone().add(u.vel);u.group.lookAt(p);const S=(this.clock*.35+u.phase*.15)%1;let y,v;S<.58?(y=.75,v=0):(y=.06,v=.18);const b=v+Math.sin(this.clock*11+u.phase)*y;u.left.rotation.z=b,u.right.rotation.z=-b}}animateSky(e,t){e||(this.clouds.children.forEach((i,s)=>{i.position.x+=.012*(1+s%3),i.position.x>205&&(i.position.x=-205)}),this.updateBirds(t),this.beamGroup&&this.lighthouseLit&&(this.beamGroup.rotation.y+=.015),this.boats.forEach(i=>{const s=i.userData.baseY??.35;i.position.y=s+Math.sin(this.clock*1.2+i.userData.phase)*.18,i.rotation.z=Math.sin(this.clock*.9+i.userData.phase)*.03}))}destination(e){var i,s,r;if(e.mode==="tutorial")return Rt.find(o=>o.id==="harbor-cafe")||Rt[1];const t=(i=e.run)!=null&&i.returning?"home":(r=(s=e.run)==null?void 0:s.job)==null?void 0:r.to;return Rt.find(o=>o.id===t)||Rt.find(o=>o.id==="home")||Rt[0]}updateBeacon(e,t){if(e&&(this.targetRing.position.set(e.position.x,Math.max(3,e.position.y+.6),e.position.z),this.targetRing.rotation.y+=t*.8,!this.targetRing.children.length)){const i=new Q(new An(4.5,.25,8,28),ce(16770203));i.rotation.x=Math.PI/2,this.targetRing.add(i);const s=new Q(new ft(.08,.26,8,8,1,!0),new Rn({color:16771234,transparent:!0,opacity:.16,depthWrite:!1,side:Wt}));s.position.y=4,this.targetRing.add(s)}}makeGlowColumn(){const t=[{rTop:kh,rBottom:2.4,opacity:.2},{rTop:1.7,rBottom:1.1,opacity:.32}];for(const i of t){const s=new ft(i.rTop,i.rBottom,90,24,1,!0),r=new bn({transparent:!0,depthWrite:!1,blending:Xa,side:Wt,uniforms:{uHeight:{value:90},uOpacity:{value:i.opacity},uPulse:{value:1}},vertexShader:`varying float vH; uniform float uHeight;
void main(){ vH = position.y / uHeight + .5; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,fragmentShader:`varying float vH; uniform float uOpacity; uniform float uPulse;
void main(){ float a = pow(clamp(1. - vH, 0., 1.), 1.7) * uOpacity * uPulse;
  gl_FragColor = vec4(1., .62, .22, a); }`}),o=new Q(s,r);o.position.y=90/2,this.glowColumn.add(o),this.glowMats.push(r)}this.glowColumn.visible=!1}updateGlowColumn(e,t){const i=ko(e),s=!!i;if(this.glowColumn.visible=s,!s||!i){this.lastGlowStopId=void 0;return}this.lastGlowStopId!==i.id&&(this.lastGlowStopId=i.id,this.glowColumn.position.set(i.position.x,i.position.y,i.position.z));const r=e.haloFade>0?Math.max(0,Math.min(1,e.haloFade/Oh)):1,o=(t?1:.86+.14*Math.sin(this.clock*2.4))*r;for(const a of this.glowMats)a.uniforms.uPulse.value=o}makeDropParcel(){const e=new Q(new Je(1.5,1.1,1.5),ce(13208927)),t=ce(12929874),i=new Q(new Je(1.56,1.16,.34),t),s=new Q(new Je(.34,1.16,1.56),t),r=new Q(new dt(.3,8,6),t);r.position.y=.68,r.scale.set(1.4,.7,1.4),this.dropParcel.add(e,i,s,r),this.dropParcel.visible=!1}updateDropParcel(e,t,i){const s=e.drop,r=s?Rt.find(h=>h.id===s.stopId):void 0,o=!!s&&!!r&&s.parcel;if(this.dropParcel.visible=o,!o||!s||!r)return;const a=i?1:Math.min(1,s.t/Fh),c=a*a,l=e.player.position,u=r.position.y+.7,d=Math.max(l.y-1.4,u);this.dropParcel.position.set(l.x+(r.position.x-l.x)*c,d+(u-d)*c,l.z+(r.position.z-l.z)*c),i||(this.dropParcel.rotation.y+=t*4)}updateCamera(e,t,i,s,r){let o,a;if(e.mode==="title"||e.mode==="summary"){const c=s?0:this.clock*.035;o=new L(-92+Math.sin(c)*8,48,146+Math.cos(c)*7),a=new L(18,13,65)}else{this.followYaw=r?e.player.yaw:QM(this.followYaw,e.player.yaw,i);const c=this.followYaw,l=new L(-Math.sin(c)*26,12,Math.cos(c)*26);o=t.clone().add(l),a=t.clone().add(new L(Math.sin(c)*5,2,-Math.cos(c)*5));const u=t.clone().add(new L(0,2,0)),d=o.clone().sub(u),h=d.length();this.blockers.forEach(g=>g.updateWorldMatrix(!0,!1)),this.ray.set(u,d.normalize());const f=this.ray.intersectObjects(this.blockers,!1)[0];f&&f.distance<h&&o.copy(u).add(d.setLength(Math.max(7,f.distance-1)))}this.camPos.copy(o),this.camLook.copy(a),this.camera.position.copy(this.camPos),this.camera.up.set(0,1,0),this.camera.lookAt(this.camLook)}}const ay=()=>({lastKey:null,dismissedKey:null});function cy(n,e,t){return`${n}|${e}|${t}`}function ly(n,e,t,i,s,r){const o=cy(e,t,s),a=o===n.lastKey?n:{lastKey:o,dismissedKey:null};return{hidden:!(e.includes("tutorial")||i!==""||e==="flight"&&(r??1/0)<=120)||a.dismissedKey===o,next:a}}function uy(n){return{...n,dismissedKey:n.lastKey}}const Mi=n=>`<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${{star:'<path d="m12 2 2.8 6.5L22 9l-5.4 4.7 1.6 7.1-6.2-3.7-6.2 3.7 1.6-7.1L2 9l7.2-.5Z"/>',envelope:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',pause:'<path d="M7 4h3v16H7zm7 0h3v16h-3z"/>',sound:'<path d="M4 10h4l5-4v12l-5-4H4zM16 9c1 .8 1 5.2 0 6m2-9c3 2.6 3 9.4 0 12"/>',fullscreen:'<path d="M4 9V5h4m8 0h4v4M20 15v4h-4M8 19H4v-4"/>',home:'<path d="m3 11 9-8 9 8v9h-6v-6H9v6H3z"/>'}[n]}</svg>`,_s=n=>`${Math.max(0,Math.round(n))} coins`,hy=n=>n===void 0||!Number.isFinite(n)?"--:--":`${Math.floor(Math.max(0,Math.ceil(n))/60).toString().padStart(2,"0")}:${(Math.max(0,Math.ceil(n))%60).toString().padStart(2,"0")}`;class dy{constructor(e,t){fe(this,"el",{});fe(this,"previousRevision",-1);fe(this,"offersKey","");fe(this,"tip",ay());e.classList.add("meg-ui"),e.innerHTML=`
<header class="gamebar"><div class="gamebar-brand">MEG’S <span>Delivery Service</span></div><div class="sun-pill"><i></i>Nightfall in <b id="countdown">--:--</b></div><div class="gamebar-actions"><button class="icon-button" id="audio-btn" aria-label="Mute audio">${Mi("sound")}</button><button class="icon-button" id="pause-btn" aria-label="Pause flight">${Mi("pause")}</button></div></header><main class="screen-layer">
<section class="title-card panel" id="title-card"><div class="eyebrow">${Mi("star")} A LITTLE WITCH. A BIG SKY.</div><h1>MEG’S<br><em>Delivery</em> Service</h1><p class="premise">Take on a parcel, then return home <b>before nightfall</b> to bank your earnings.</p><p class="key-hint desktop-hint">Steer with <kbd>WASD</kbd> / arrows · rise with <kbd>W</kbd> · hover with <kbd>Space</kbd></p><p class="key-hint touch-hint">Touch anywhere to fly · release the stick to slow down</p><button id="start-btn" class="primary-button">Learn to fly <span>→</span></button><div class="title-controls"><button id="quality-btn">Quality: <b>High</b></button><button id="motion-btn">Motion: <b>Full</b></button><button id="fullscreen-btn">${Mi("fullscreen")} Fullscreen</button></div><footer>MADE OF LITTLE ADVENTURES <span class="desktop-hint">⌨</span><span class="touch-hint">touch to fly</span> <span class="build-sha">build 0d7a229</span></footer></section>
<section class="offers-card panel menu-card" id="offers-card"><div class="eyebrow">${Mi("envelope")} TODAY’S POST</div><h2>Choose a delivery</h2><p>Nightfall is already on its way. Pick one parcel and make it home with your earnings.</p><div class="offer-balances"><span>Satchel <b id="offer-earnings">0 coins</b></span><span>Banked <b id="offer-banked">0 coins</b></span></div><div id="offer-list" class="offer-list"></div><button id="return-home-btn" class="secondary-button">Return home</button></section>
<section class="summary-card panel menu-card" id="summary-card"><div class="eyebrow">${Mi("star")} DAY’S END</div><h2 id="summary-heading">A lovely landing.</h2><p id="summary-copy"></p><div class="summary-stats"><div><span>Deliveries</span><b id="summary-deliveries">0</b></div><div><span>Earnings saved</span><b id="summary-earnings">0 coins</b></div></div><button id="next-day-btn" class="primary-button">Another day <span>→</span></button></section>
<section class="flight-hud" id="flight-hud"><div class="destination-card panel"><div class="eyebrow">${Mi("envelope")} <span id="target-label">Next delivery</span></div><strong id="target-name">The village</strong><div class="target-direction"><span class="compass-arrow" id="target-arrow"></span><span id="target-distance">— m away</span></div></div><div class="tutorial-bubble" id="tutorial-bubble"><button class="bubble-close" id="bubble-close" aria-label="Dismiss tip">×</button><b>Pumpkin says:</b> <span id="tutorial-text"></span></div><div class="flight-readout panel"><span><b id="speed-value">0</b> m/s</span><span class="satchel-readout">Satchel <b id="flight-earnings">0</b></span></div></section>
<section class="pause-card panel menu-card" id="pause-card"><div class="eyebrow">${Mi("star")} TAKING A BREATHER</div><h2>The sky will wait.</h2><p id="pause-reason"></p><p class="key-hint desktop-hint">When you return: <kbd>WASD</kbd> or arrows to steer · <kbd>Q</kbd>/<kbd>E</kbd> for speed</p><p class="key-hint touch-hint">When you return: touch anywhere to fly · release the stick to slow down</p><button id="resume-btn" class="primary-button">Continue flying <span>→</span></button><button id="unstuck-btn" class="secondary-button">Unstuck me</button><div class="title-controls"><button id="pause-quality-btn">Quality</button><button id="pause-motion-btn">Motion</button></div></section></main>`;const i=r=>e.querySelector(`#${r}`);["title-card","offers-card","summary-card","flight-hud","pause-card","countdown","pause-reason","target-name","target-distance","target-arrow","target-label","tutorial-bubble","tutorial-text","bubble-close","speed-value","flight-earnings","audio-btn","pause-btn","resume-btn","unstuck-btn","quality-btn","motion-btn","pause-quality-btn","pause-motion-btn","offer-list","return-home-btn","offer-earnings","offer-banked","summary-heading","summary-copy","summary-deliveries","summary-earnings","next-day-btn","start-btn"].forEach(r=>this.el[r]=i(r));const s=(r,o)=>i(r).onclick=a=>{o(),a.currentTarget.blur()};s("start-btn",t.start),s("pause-btn",t.pause),s("resume-btn",t.resume),s("unstuck-btn",t.unstuck),s("audio-btn",t.mute),i("bubble-close").onclick=r=>{this.tip=uy(this.tip),this.el["tutorial-bubble"].hidden=!0,r.currentTarget.blur()},s("return-home-btn",()=>{var r;return(r=t.returnHome)==null?void 0:r.call(t)}),s("next-day-btn",()=>{var r;return(r=t.nextDay)==null?void 0:r.call(t)}),[i("quality-btn"),i("pause-quality-btn")].forEach(r=>r.onclick=t.quality),[i("motion-btn"),i("pause-motion-btn")].forEach(r=>r.onclick=t.motion),i("fullscreen-btn").onclick=t.fullscreen,i("offer-list").onclick=r=>{var a;const o=r.target.closest("[data-job]");o&&((a=t.chooseJob)==null||a.call(t,+o.dataset.job),o.blur())}}render(e,t){var u,d,h;const i=["offers","summary"].includes(e.mode),s=e.mode==="title",r=!s&&e.paused;this.el["title-card"].hidden=!s,this.el["offers-card"].hidden=e.mode!=="offers"||r,this.el["summary-card"].hidden=e.mode!=="summary"||r,this.el["flight-hud"].hidden=s||i||r,this.el["pause-card"].hidden=!r,this.el.countdown.textContent=hy(t.timeRemaining),this.el.countdown.className=t.timeRemaining!==void 0&&t.timeRemaining<=30?"urgent":t.timeRemaining!==void 0&&t.timeRemaining<=60?"warning":"",this.el["start-btn"].innerHTML=`${e.profile.tutorialDone?"Start a delivery day":"Learn to fly"} <span>→</span>`,this.el["target-name"].textContent=t.targetName,this.el["target-distance"].textContent=t.targetDistance>0?`${Math.round(t.targetDistance)} m away`:"Right here",this.el["target-label"].textContent=(u=e.run)!=null&&u.returning?"Return home":"Next delivery",this.el["target-arrow"].style.transform=`rotate(${t.targetBearing??0}deg)`,this.el["speed-value"].textContent=String(Math.round(t.speed)),this.el["audio-btn"].classList.toggle("is-muted",t.muted),this.el["audio-btn"].setAttribute("aria-label",t.muted?"Unmute audio":"Mute audio"),this.el["quality-btn"].innerHTML=`Quality: <b>${t.lowQuality?"Low":"High"}</b>`,this.el["motion-btn"].innerHTML=`Motion: <b>${t.reducedMotion?"Low":"Full"}</b>`,this.el["tutorial-text"].textContent=t.status||e.message||"Let’s take the scenic route!";const o=t.status||e.message||"",a=ly(this.tip,e.mode,e.tutorialStage,t.status,o,t.timeRemaining);this.tip=a.next,this.el["tutorial-bubble"].hidden=a.hidden,this.el["flight-earnings"].textContent=_s(((d=e.run)==null?void 0:d.earnings)??0),this.el["offer-earnings"].textContent=_s(((h=e.run)==null?void 0:h.earnings)??0),this.el["offer-banked"].textContent=_s(e.profile.coins),this.renderOffers(e);const c=e.summary,l=(c==null?void 0:c.success)??!1;this.el["summary-heading"].textContent=l?"A lovely landing.":"Rescued from nightfall.",this.el["summary-copy"].textContent=l?`You banked ${_s((c==null?void 0:c.earnings)??0)} after ${(c==null?void 0:c.deliveries)??0} deliveries.`:"The unbanked satchel was lost, but tomorrow brings another chance.",this.el["summary-deliveries"].textContent=String((c==null?void 0:c.deliveries)??0),this.el["summary-earnings"].textContent=_s((c==null?void 0:c.earnings)??0),this.el["next-day-btn"].innerHTML=`${l?"Another day":"Back home"} <span>→</span>`,this.previousRevision!==e.revision&&(this.el["pause-reason"].textContent=e.pauseReason||"Rest your wings whenever you need.",this.previousRevision=e.revision)}renderOffers(e){var s,r;if(e.mode!=="offers")return;this.el["return-home-btn"].hidden=(((s=e.run)==null?void 0:s.deliveries)??0)===0;const t=(((r=e.run)==null?void 0:r.offers)??[]).slice(0,2),i=t.map(o=>`${o.to}:${o.parcel}:${o.payout}`).join("|");i!==this.offersKey&&(this.offersKey=i,this.el["offer-list"].innerHTML=t.map((o,a)=>{const c=Rt.find(u=>u.id===o.to),l=c?Math.hypot(c.position.x-e.player.position.x,c.position.z-e.player.position.z):0;return`<button class="offer-button" data-job="${a}"><span><b>${(c==null?void 0:c.name)??o.to}</b><small>${l<115?"Short":"Long"} route · ${o.parcel} · ${Math.round(l)} m</small></span><strong>${_s(o.payout)} <i>→</i></strong></button>`}).join(""))}}class fy{constructor(e,t,i=()=>!0){fe(this,"keys",new Set);fe(this,"stick",{x:0,y:0});fe(this,"stickPointer",null);fe(this,"cutPending",!1);fe(this,"keydown");fe(this,"keyup");fe(this,"canvas");fe(this,"joystick");fe(this,"stickEnabled");this.canvas=e,this.stickEnabled=i,this.keydown=s=>{if(this.inControl(s.target))return;const r=s.key.toLowerCase();["arrowleft","arrowright","arrowup","arrowdown","w","a","s","d","q","e"," ","enter","escape","p","f"].includes(r)&&s.preventDefault(),!s.repeat&&r===" "&&t.hover(),!s.repeat&&r==="enter"&&t.interact(),!s.repeat&&(r==="escape"||r==="p")&&t.pause(),!s.repeat&&r==="f"&&t.fullscreen(),this.keys.add(r)},this.keyup=s=>this.keys.delete(s.key.toLowerCase()),window.addEventListener("keydown",this.keydown),window.addEventListener("keyup",this.keyup),e.addEventListener("blur",()=>this.clear()),this.joystick=document.querySelector("#joystick")||void 0,this.joystick&&(this.joystick.hidden=!0),this.bindTouch()}sample(){const e=(a,c)=>Number(this.keys.has(a)||this.keys.has(c)),t=e("arrowright","d")-e("arrowleft","a")+this.stick.x,i=e("arrowup","w")-e("arrowdown","s")-this.stick.y,s=this.stickPointer!==null,r=e("e","e")-e("q","q")+(s?1:0),o=this.cutPending;return this.cutPending=!1,{turn:Math.max(-1,Math.min(1,t)),climb:Math.max(-1,Math.min(1,i)),throttle:Math.max(-1,Math.min(1,r)),cutThrottle:o}}clear(){this.keys.clear(),this.stickPointer=null,this.stick.x=this.stick.y=0,this.cutPending=!1,this.joystick&&(this.joystick.style.removeProperty("--stick-x"),this.joystick.style.removeProperty("--stick-y"),this.joystick.classList.remove("is-dragging"),this.joystick.hidden=!0)}dispose(){window.removeEventListener("keydown",this.keydown),window.removeEventListener("keyup",this.keyup),this.clear()}inControl(e){return e instanceof Element&&!!e.closest('input, button, select, textarea, [contenteditable="true"]')}bindTouch(){if(!this.joystick)return;const e=this.joystick,t=o=>{const a=e.getBoundingClientRect(),c=a.width*.34,l=o.clientX-(a.left+a.width/2),u=o.clientY-(a.top+a.height/2),d=Math.max(c,Math.hypot(l,u));this.stick.x=l/d,this.stick.y=u/d,e.style.setProperty("--stick-x",`${this.stick.x*c}px`),e.style.setProperty("--stick-y",`${this.stick.y*c}px`)},i=o=>{if(o.pointerType==="mouse"||this.stickPointer!==null||!this.stickEnabled())return;this.stickPointer=o.pointerId;try{this.canvas.setPointerCapture(o.pointerId)}catch{}const a=e.offsetWidth/2||56;e.style.left=`${o.clientX-a}px`,e.style.top=`${o.clientY-a}px`,e.hidden=!1,e.classList.add("is-dragging"),t(o)},s=o=>{o.pointerId===this.stickPointer&&t(o)},r=o=>{o.pointerId===this.stickPointer&&(this.stickPointer=null,this.stick.x=this.stick.y=0,e.style.removeProperty("--stick-x"),e.style.removeProperty("--stick-y"),e.classList.remove("is-dragging"),e.hidden=!0,this.cutPending=!0)};this.canvas.addEventListener("pointerdown",i),this.canvas.addEventListener("pointermove",s),this.canvas.addEventListener("pointerup",r),this.canvas.addEventListener("pointercancel",r),this.canvas.addEventListener("lostpointercapture",r)}}class py{constructor(e,t){fe(this,"root");fe(this,"key","");this.actions=t,this.root=document.createElement("section"),this.root.className="home-interface",e.append(this.root),this.root.addEventListener("click",i=>{const s=i.target.closest("button");s&&(s.dataset.action==="interact"?t.interact():s.dataset.action==="close"?t.close():s.dataset.action==="start"?t.start():s.dataset.upgrade?t.upgrade(s.dataset.upgrade):s.dataset.furnish&&t.furnish(s.dataset.furnish),s.blur())})}render(e){if(this.root.hidden=e.mode!=="home"||e.paused,this.root.hidden)return;const t=Zc(e),i=JSON.stringify([e.homePanel,t==null?void 0:t.id,e.profile.coins,e.profile.upgrades,e.profile.furniture,e.message]);if(i===this.key)return;this.key=i;const s=e.profile,r=`<div class="eyebrow">MEG'S ROOM</div><h2>Welcome home, Meg.</h2><p class="home-wallet">${s.coins} coins saved · ${s.furniture.length}/6 cozy touches</p>`,o=`<button class="context-button" data-action="interact" ${t?"":"disabled"}>${t?`Visit ${t.name}`:"Explore your room"} <kbd>Enter</kbd></button>`;if(e.homePanel==="none"){const c=`<aside class="room-guide panel">${r}<p>Walk to the Job Board, Broom Workshop, or Decor Corner.</p>${o}</aside>`;this.root.innerHTML=`${c}${hf(s)?'<div class="completion-ribbon">✦ Every little corner feels like home. Keep flying, little witch.</div>':""}`;return}let a="";e.homePanel==="jobs"&&(a='<div class="eyebrow">A NEW DELIVERY DAY</div><h2>The town is waiting.</h2><p>Choose your first delivery — pick the route that suits you. You have eight minutes to make deliveries and return home. Anything still in your satchel at nightfall will be lost.</p><button class="primary-button" data-action="start">See today’s deliveries →</button>'),e.homePanel==="brooms"&&(a=`<div class="eyebrow">THE BROOM STAND · ${s.coins} COINS</div><h2>A little more magic.</h2><div class="shop-list">${["speed","handling","braking"].map(c=>{const l=s.upgrades[c],u=l===0?60:120,d={speed:"Fly 10% faster per level",handling:"Turn 20% more responsively per level",braking:"Slow down 20% faster per level"}[c];return`<button data-upgrade="${c}" ${l===2||s.coins<u?"disabled":""}><span><b>${c[0].toUpperCase()+c.slice(1)}</b><small>${d} · ${l}/2</small></span><strong>${l===2?"Mastered":`${u} coins`}</strong></button>`}).join("")}</div>`),e.homePanel==="decor"&&(a=`<div class="eyebrow">THE HOME CATALOGUE · ${s.coins} COINS</div><h2>Make yourself at home.</h2><div class="shop-list">${qc.map(c=>`<button data-furnish="${c.id}" ${s.furniture.includes(c.id)||s.coins<c.cost?"disabled":""}><span><b>${c.name}</b><small>${c.description}</small></span><strong>${s.furniture.includes(c.id)?"At home":`${c.cost} coins`}</strong></button>`).join("")}</div>`),e.homePanel==="cat"&&(a='<div class="eyebrow">PUMPKIN’S CORNER</div><h2>A very good copilot.</h2><p>Pumpkin leans into your hand and purrs. The best part of any delivery day is coming home together.</p><div class="purr">♡ purr… purr… ♡</div>'),this.root.innerHTML=`<section class="menu-card panel room-menu">${a}<button class="secondary-button" data-action="close">Back to your room</button></section>`}}function Wd(n,e,t){return e?!1:n==="flight"||n==="tutorial"?!0:n==="home"&&t==="none"}function Xd(n){return n.haloFade>0||n.descent!=null||n.drop!=null}class my{constructor(e){fe(this,"root");this.root=document.createElement("div"),this.root.className="touch-controls",this.root.id="touch-controls",this.root.innerHTML='<div id="joystick" class="joystick" hidden><i></i></div>',e.append(this.root)}render(e){this.root.hidden=Xd(e)||!Wd(e.mode,e.paused,e.homePanel)}}const tr="megs-delivery-save-v1",gy=["title","tutorial","flight","offers","home","summary"],xy=["none","jobs","brooms","decor","cat"],Wc=new Set(Rt.map(n=>n.id)),wh=new Set(["rug","plant","shelf","lamp","cushion","cat-tree"]),_y=new Set([20,35,50]),vy=1e5,Hn=n=>typeof n=="object"&&n!==null&&!Array.isArray(n),ln=(n,e=-1/0,t=1/0)=>typeof n=="number"&&Number.isFinite(n)&&n>=e&&n<=t,Pn=(n,e=0,t=Number.MAX_SAFE_INTEGER)=>Number.isInteger(n)&&ln(n,e,t),ki=(n,e=160)=>typeof n=="string"&&n.length<=e,Eh=(n,e=500)=>Hn(n)&&ln(n.x,-e,e)&&ln(n.y,-e,e)&&ln(n.z,-e,e);function Th(n){return!Hn(n)||!ki(n.from,64)||!ki(n.to,64)||!Wc.has(n.from)||!Wc.has(n.to)||n.from===n.to||!_y.has(n.payout)||!ki(n.label,80)||!ki(n.parcel,100)?null:{from:n.from,to:n.to,payout:n.payout,label:n.label,parcel:n.parcel}}function My(n){return!Hn(n)||!Pn(n.coins)||!Hn(n.upgrades)||!Pn(n.upgrades.speed,0,2)||!Pn(n.upgrades.handling,0,2)||!Pn(n.upgrades.braking,0,2)||!Array.isArray(n.furniture)||n.furniture.length>wh.size||!n.furniture.every(e=>typeof e=="string"&&wh.has(e))||new Set(n.furniture).size!==n.furniture.length||typeof n.tutorialDone!="boolean"||!Pn(n.runs)||!Pn(n.deliveries)?null:{coins:n.coins,upgrades:{speed:n.upgrades.speed,handling:n.upgrades.handling,braking:n.upgrades.braking},furniture:[...n.furniture],tutorialDone:n.tutorialDone,runs:n.runs,deliveries:n.deliveries}}function yy(n){if(n===null)return null;if(!Hn(n)||!Pn(n.seed,-Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)||!ln(n.elapsed,0,480)||!ln(n.earnings,0)||!Pn(n.deliveries)||typeof n.returning!="boolean"||!ki(n.lastStop,64)||!Wc.has(n.lastStop)||!Array.isArray(n.offers)||n.offers.length>2)return;const e=n.job===null?null:Th(n.job),t=n.offers.map(Th);if(!(n.job!==null&&!e||t.some(i=>!i)||new Set(t.map(i=>i.to)).size!==t.length))return{seed:n.seed,elapsed:n.elapsed,earnings:n.earnings,deliveries:n.deliveries,job:e,offers:t,returning:n.returning,lastStop:n.lastStop}}function Ua(n){if(typeof n!="string"||n.length>vy)return null;let e;try{e=JSON.parse(n)}catch{return null}if(!Hn(e)||e.version!==1||!Hn(e.state))return null;const t=e.state;if(!gy.includes(t.mode)||!Hn(t.player)||!Eh(t.player.position)||!ln(t.player.yaw)||!ln(t.player.pitch,-Math.PI/2,Math.PI/2)||!ln(t.player.speed,0,30)||!ln(t.player.throttle,0,30)||typeof t.player.hover!="boolean"||!Eh(t.player.velocity,50))return null;const i=My(t.profile),s=yy(t.run),r=t.homeFacing===void 0?0:t.homeFacing,o=t.homePanel===void 0?"none":t.homePanel;if(!i||s===void 0||typeof t.paused!="boolean"||!ki(t.pauseReason)||!ki(t.message,500)||!Pn(t.tutorialStage,0,10)||!Hn(t.homePosition)||!ln(t.homePosition.x)||!ln(t.homePosition.z)||!ln(r,-10,10)||!xy.includes(o)||!Pn(t.revision))return null;let a=null;if(t.summary!==null){if(!Hn(t.summary)||typeof t.summary.success!="boolean"||!ln(t.summary.earnings,0)||!Pn(t.summary.deliveries))return null;a={success:t.summary.success,earnings:t.summary.earnings,deliveries:t.summary.deliveries}}const c=t.mode;if((c==="title"||c==="tutorial"||c==="home"||c==="summary")&&s!==null||c==="flight"&&(!s||!s.job&&!s.returning)||c==="offers"&&(!s||s.job!==null||s.returning||s.offers.length!==2)||c==="summary"&&!a||c!=="summary"&&a||c==="home"&&(Math.abs(t.homePosition.x)>8||Math.abs(t.homePosition.z)>6))return null;const l={position:{...t.player.position},yaw:t.player.yaw,pitch:t.player.pitch,speed:t.player.speed,throttle:t.player.throttle,hover:!1,velocity:{...t.player.velocity},brakeHold:t.player.brakeHold===!0},u={mode:c,player:l,profile:i,run:s,paused:t.paused,pauseReason:t.pauseReason,message:t.message,tutorialStage:t.tutorialStage,homePosition:{x:t.homePosition.x,z:t.homePosition.z},homeFacing:r,homePanel:o,summary:a,revision:t.revision};return u.drop=null,u.descent=null,u.haloFade=0,(u.mode==="tutorial"||u.mode==="flight"||u.mode==="offers")&&(u.paused=!0,u.pauseReason="Welcome back"),(u.mode==="title"||u.mode==="home")&&(u.paused=!1,u.pauseReason=""),u}function Sy(n){return JSON.stringify({version:1,state:n})}class by{constructor(){fe(this,"releaseLock");fe(this,"generation",0);fe(this,"writable",!1);fe(this,"status","");fe(this,"memory")}get message(){return this.status}get canSave(){return this.writable}async acquire(){this.release();const e=++this.generation,t=this.storage();if(!t)return this.session("Saved games are unavailable in this browser.");const i=typeof navigator>"u"?void 0:navigator.locks;if(!i)try{const s=t.getItem(tr),r=s===null?void 0:Ua(s);return s!==null&&!r?(this.status="Saved game could not be read. It was left untouched.",{kind:"invalid",message:this.status}):this.session("This browser cannot safely share saved games; playing in this tab only.",r??void 0)}catch{return this.session("Saved games are unavailable in this browser.")}return new Promise(s=>{i.request("megs-delivery-save",{ifAvailable:!0},r=>{var u;if(e!==this.generation||!r){s({kind:"readonly",message:"Saved game is open in another tab. Retry after closing it."});return}let o;const a=new Promise(d=>{o=d});this.releaseLock=()=>{this.releaseLock=void 0,this.writable=!1,o()};let c;try{c=t.getItem(tr)}catch{return(u=this.releaseLock)==null||u.call(this),s(this.session("Saved games are unavailable in this browser.")),a}const l=c===null?void 0:Ua(c)??void 0;return c!==null&&!l?(this.status="Saved game could not be read. It was left untouched.",s({kind:"invalid",message:this.status}),a):(this.writable=!0,this.memory=l,this.status="Saved game ready.",s({kind:"ready",state:l,message:this.status}),a)}).catch(()=>s(this.session("Saved games are unavailable in this browser.")))})}save(e){if(!this.writable)return!1;const t=this.storage();if(!t)return this.writable=!1,this.status="Saving is unavailable in this browser.",!1;try{return t.setItem(tr,Sy(e)),this.memory=e,this.status="Saved.",!0}catch{return this.memory=e,this.writable=!1,this.status="Could not save; progress remains in this tab.",!1}}release(){var e;this.generation++,(e=this.releaseLock)==null||e.call(this),this.writable=!1}continueSession(){this.release(),this.memory=void 0,this.status="Continuing with a fresh session."}discardUnreadable(){try{const e=this.storage(),t=e==null?void 0:e.getItem(tr);t!=null&&!Ua(t)&&(e==null||e.removeItem(tr))}catch{}this.writable=!0,this.memory=void 0,this.status="Discarded the unreadable save."}storage(){try{return typeof localStorage>"u"?void 0:localStorage}catch{return}}session(e,t){return this.writable=!1,this.memory=t,this.status=e,{kind:"session",state:t,message:e}}}class wy{constructor(){fe(this,"context");fe(this,"master");fe(this,"ambience");fe(this,"ambienceSources",[]);fe(this,"tones",new Set);fe(this,"muted",!0);fe(this,"disposed",!1);fe(this,"snapshot");fe(this,"nextNote",0);fe(this,"lastActive",!1);fe(this,"operationPending",!1)}setMuted(e){this.disposed||(this.muted=e,!(!e&&!this.ensureContext())&&this.reconcile())}update(e,t){const i=this.snapshot,s=this.takeSnapshot(e);this.snapshot=s,this.lastActive=!(t||e.paused||typeof document<"u"&&document.hidden),!(this.muted||this.disposed||!this.context)&&(this.reconcile(),!(!this.canPlay()||this.context.state!=="running")&&(this.playMelody(),i&&(s.deliveries>i.deliveries&&this.deliveryCue(),s.coins<i.coins&&(s.upgrades!==i.upgrades||s.furniture!==i.furniture)&&this.purchaseCue(),i.homePanel!=="cat"&&s.homePanel==="cat"&&this.purrCue())))}dispose(){if(!this.disposed){this.disposed=!0,this.lastActive=!1,this.clearAmbience();for(const e of this.tones){try{e.stop()}catch{}e.disconnect()}this.tones.clear(),this.context&&this.context.state!=="closed"&&this.context.close().catch(()=>{}),this.context=void 0,this.master=void 0}}debugState(){var e;return{context:((e=this.context)==null?void 0:e.state)??"unavailable",muted:this.muted}}ensureContext(){if(this.context)return this.context;const e=typeof window>"u"?void 0:window.AudioContext||window.webkitAudioContext;if(e)try{const t=new e,i=t.createGain();return i.gain.value=1e-4,i.connect(t.destination),this.context=t,this.master=i,t}catch{return}}canPlay(){return!this.disposed&&!this.muted&&this.lastActive}reconcile(){const e=this.context;if(!e||e.state==="closed")return;const t=this.canPlay();if(t&&e.state==="running"){this.startAmbience();return}if(!t&&this.master){const s=e.currentTime;this.master.gain.cancelScheduledValues(s),this.master.gain.setTargetAtTime(1e-4,s,.025)}if(this.operationPending||(t?e.state!=="suspended":e.state!=="running"))return;this.operationPending=!0,(t?e.resume.bind(e):e.suspend.bind(e))().catch(()=>{}).then(()=>{this.operationPending=!1,this.canPlay()&&e.state==="running"&&this.startAmbience(),this.reconcile()})}startAmbience(){const e=this.context,t=this.master;if(!e||!t||e.state!=="running"||!this.canPlay())return;const i=e.currentTime;if(t.gain.cancelScheduledValues(i),t.gain.setTargetAtTime(.14,i,.08),this.ambience)return;const s=e.createGain(),r=e.createOscillator(),o=e.createOscillator(),a=e.createGain();s.gain.value=.035,s.connect(t),r.type="sine",r.frequency.value=82,o.type="sine",o.frequency.value=.09,a.gain.value=11,o.connect(a).connect(r.frequency),r.connect(s),r.start(),o.start(),this.ambience=s,this.ambienceSources=[r,o]}clearAmbience(){var e;for(const t of this.ambienceSources){try{t.stop()}catch{}t.disconnect()}this.ambienceSources=[],(e=this.ambience)==null||e.disconnect(),this.ambience=void 0}playMelody(){const e=this.context;if(!e||e.currentTime<this.nextNote)return;const t=[261.63,329.63,392,523.25,440,329.63];this.tone(t[Math.floor(e.currentTime*1.7%t.length)],.11,.045,"sine"),this.nextNote=e.currentTime+1.45}deliveryCue(){this.tone(659.25,.08,.09,"triangle"),this.tone(783.99,.19,.07,"triangle",.09)}purchaseCue(){this.tone(523.25,.06,.08,"sine"),this.tone(783.99,.16,.075,"sine",.07)}purrCue(){this.tone(110,.48,.055,"sine"),this.tone(164.81,.42,.035,"sine",.08)}tone(e,t,i,s,r=0){const o=this.context,a=this.master;if(!o||!a||o.state!=="running"||!this.canPlay())return;const c=o.currentTime+r,l=o.createOscillator(),u=o.createGain();l.type=s,l.frequency.value=e,u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(i,c+.018),u.gain.exponentialRampToValueAtTime(1e-4,c+t),l.connect(u).connect(a),this.tones.add(l),l.onended=()=>{this.tones.delete(l),l.disconnect(),u.disconnect()},l.start(c),l.stop(c+t+.03)}takeSnapshot(e){var t;return{deliveries:Math.max(e.profile.deliveries,((t=e.run)==null?void 0:t.deliveries)??0),coins:e.profile.coins,upgrades:`${e.profile.upgrades.speed}:${e.profile.upgrades.handling}:${e.profile.upgrades.braking}`,furniture:e.profile.furniture.join("|"),homePanel:e.homePanel}}}const qo=document.querySelector("#game"),Ar=document.querySelector("#app"),Ey=new URLSearchParams(location.search),bl=Ey.get("test")==="1";let Re=Jc(),So=!0,zo=matchMedia("(pointer: coarse)").matches;const wl=matchMedia("(pointer: coarse)").matches;Re.coarsePointer=wl;let fr=matchMedia("(prefers-reduced-motion: reduce)").matches,Er,bt,ii=0,bo=0,Fs=!1;const Ts=new by,Yo=new wy;let Ct=!1,si="loading",As="Opening your little world…",pr=null,Ah;function Ty(n,e=8e3){pr=n,clearTimeout(Ah),Ah=setTimeout(()=>{pr=null,xt(0)},e)}let Fa=0;function Rr(n="Take a little breather."){Hh(Re,!0,n),bt==null||bt.clear(),ii=0,kt(),xt(0)}function Xc(){!Ct||document.hidden||Fs||(Hh(Re,!1),bt==null||bt.clear(),ii=0,bo=performance.now(),kt(),xt(0))}function qd(){var n,e,t;document.fullscreenElement?(n=document.exitFullscreen)==null||n.call(document):(t=(e=document.documentElement).requestFullscreen)==null||t.call(e).catch(()=>{})}const Ay=new dy(Ar,{start(){var n;Ct&&(Re.profile.tutorialDone?Ba(Re):ip(Re),bt==null||bt.clear(),(n=document.activeElement)==null||n.blur(),kt(),xt(0))},pause:()=>Rr(),resume:Xc,unstuck(){if(!Ct)return;const n=Re.player.position;let e=Rt[0],t=1/0;for(const i of Rt){const s=(i.position.x-n.x)**2+(i.position.z-n.z)**2;s<t&&(t=s,e=i)}Re.player.position={x:e.position.x,y:e.position.y+5,z:e.position.z},Re.player.velocity={x:0,y:0,z:0},Re.player.speed=0,Re.player.throttle=0,Xc(),bt==null||bt.clear(),kt(),xt(0)},mute(){So=!So,Yo.setMuted(So),xt(0)},quality(){zo=!zo,xt(0)},motion(){fr=!fr,xt(0)},fullscreen:qd,chooseJob(n){Ct&&(cp(Re,n),bt.clear(),kt(),xt(0))},returnHome(){Ct&&(lp(Re),bt.clear(),kt(),xt(0))},nextDay(){Ct&&(Ba(Re),bt.clear(),kt(),xt(0))}}),Ry=new py(Ar,{interact(){Ct&&(Gh(Re),bt.clear(),kt(),xt(0))},close(){Ct&&(Ch(Re),bt.clear(),kt(),xt(0))},start(){Ct&&(ap(Re,bl?42:void 0),bt.clear(),kt(),xt(0))},upgrade(n){Ct&&(lf(Re,n),kt(),xt(0))},furnish(n){Ct&&(uf(Re,n),kt(),xt(0))}}),Cy=new my(Ar),ti=document.createElement("aside");ti.className="save-status";ti.setAttribute("aria-live","polite");Ar.append(ti);ti.addEventListener("click",n=>{const e=n.target.closest("button");(e==null?void 0:e.dataset.save)==="retry"&&El()});try{Er=new oy(qo)}catch{throw Ar.innerHTML='<main class="compatibility"><h1>A little more sky, please.</h1><p>Meg needs a browser with WebGL 2 and hardware acceleration. Try a current browser with graphics acceleration enabled.</p></main>',new Error("WebGL 2 is unavailable.")}bt=new fy(qo,{hover:()=>{Ct&&(sp(Re),kt(),xt(0))},interact:()=>{!Ct||Re.mode!=="home"||(Gh(Re),kt(),xt(0))},pause:()=>{Ct&&(Re.mode==="home"&&Re.homePanel!=="none"?(Ch(Re),kt(),xt(0)):Re.paused?Xc():Rr())},fullscreen:qd},()=>wl&&!Xd(Re)&&Wd(Re.mode,Re.paused,Re.homePanel));function kt(){!Ct||!Ts.canSave||Ts.save(Re)||(si="session",As=Ts.message)}async function El(){Ct=!1,si="loading",As="Opening your little world…",xt(0);const n=await Ts.acquire();if(n.kind==="invalid"){Ts.discardUnreadable(),Re=Jc(),Re.coarsePointer=wl,Ct=!0,si="ready",As="",kt(),Ty("Your saved game could not be read, so it was discarded and a new game was started."),bt==null||bt.clear(),ii=0,xt(0);return}si=n.kind,As=n.message,n.state&&(Re=n.state),Ct=n.kind==="ready"||n.kind==="session",bt==null||bt.clear(),ii=0,xt(0)}function xt(n){if(Yo.update(Re,!Ct||Fs),document.body.classList.toggle("reduced-motion",fr),!Er||Fs)return;Er.render(Re,n,{reducedMotion:fr,lowQuality:zo});const e=Wh(Re)??Rt[0];Ay.render(Re,{muted:So,lowQuality:zo,reducedMotion:fr,targetName:e.name,targetDistance:Math.hypot(e.position.x-Re.player.position.x,e.position.z-Re.player.position.z),targetBearing:up(Re.player.position,e.position,Re.player.yaw),speed:Re.player.speed,status:"",timeRemaining:Re.run?Math.max(0,480-Re.run.elapsed):void 0}),Ry.render(Re),Cy.render(Re),Ct||(document.querySelector(".home-interface").hidden=!0),Re.mode==="home"&&(document.querySelector("#flight-hud").hidden=!0),document.querySelector("#start-btn").disabled=!Ct,Re.profile.tutorialDone&&(document.querySelector("#start-btn").innerHTML="Come on in <span>→</span>"),document.querySelector("#next-day-btn").innerHTML="Back to your room <span>→</span>",document.querySelector(".sun-pill").hidden=!Re.run,ti.hidden=si==="ready"&&pr===null;const t=si+As+(pr??"");ti.dataset.key!==t&&(ti.dataset.key=t,ti.textContent=si==="ready"?pr??"":As,si==="readonly"&&ti.insertAdjacentHTML("beforeend",'<br><button data-save="retry">Retry</button>'))}function Yd(n){if(!Ct||Re.paused||document.hidden||Fs){ii=0,xt(0);return}const e=Re.mode;for(ii+=Math.max(0,n)/1e3;ii+1e-10>=1/60;)mp(Re,bt.sample(),1/60),ii-=1/60;Fa+=n,(Fa>=5e3||e!==Re.mode)&&(kt(),Fa=0),xt(Math.min(n/1e3,.1))}function Zd(n){const e=bo?Math.min(n-bo,100):0;bo=n,bl||Yd(e),requestAnimationFrame(Zd)}window.addEventListener("resize",()=>{Er.resize(),xt(0)});document.addEventListener("visibilitychange",()=>{document.hidden&&Rr("Welcome back. Ready to fly?")});window.addEventListener("blur",()=>{bt.clear(),Re.mode!=="title"&&Rr()});qo.addEventListener("webglcontextlost",n=>{n.preventDefault(),Rr("The sky is taking a moment."),Fs=!0});qo.addEventListener("webglcontextrestored",()=>{Fs=!1,xt(0)});window.addEventListener("pagehide",()=>{kt(),Ct=!1,Yo.update(Re,!0),Ts.release()});window.addEventListener("pageshow",n=>{n.persisted&&El()});Object.assign(window,{advanceTime:n=>Yd(n),render_game_to_text:()=>{var n,e;return JSON.stringify({coordinates:"x right/east, y up, z south; yaw 0 faces -z",mode:Re.mode,paused:Re.paused,player:Re.player,tutorialStage:Re.tutorialStage,message:Re.message,run:Re.run,profile:Re.profile,stops:Rt,nearby:((n=mr(Re))==null?void 0:n.id)??null,homePosition:Re.homePosition,homePanel:Re.homePanel,station:(e=Zc(Re))==null?void 0:e.id,saveKind:si})}});bl&&Object.assign(window,{__game:{get state(){return Re},get ready(){return Ct},reset(){Re=Jc(),ii=0,xt(0)},draw:()=>xt(0),audio:()=>Yo.debugState(),persist:kt,renderer:()=>Er}});xt(0);requestAnimationFrame(Zd);El();
