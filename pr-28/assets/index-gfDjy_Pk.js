var Dd=Object.defineProperty;var Id=(n,e,t)=>e in n?Dd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var pe=(n,e,t)=>Id(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const oh=[{id:"jobs",name:"Job Board",x:-5,z:-3},{id:"brooms",name:"Broom Workshop",x:5,z:-3},{id:"decor",name:"Decor Corner",x:-5,z:3},{id:"cat",name:"Pumpkin",x:4,z:3}],Dc=[{id:"rug",name:"Woven Rug",cost:30,description:"A soft landing for tired feet."},{id:"plant",name:"Moonleaf Plant",cost:40,description:"A little green for Meg's room."},{id:"shelf",name:"Parcel Shelf",cost:50,description:"A home for souvenirs and parcels."},{id:"lamp",name:"Warm Lamp",cost:60,description:"A cozy glow after a long shift."},{id:"cushion",name:"Window Cushion",cost:70,description:"The perfect reading nook."},{id:"cat-tree",name:"Cat Tree",cost:80,description:"Pumpkin's new favorite perch."}],Ic=[{id:"speed",name:"Swift Bristles",description:"Raises top speed by 10% per level."},{id:"handling",name:"Responsive Handle",description:"Raises turn rate by 20% per level."},{id:"braking",name:"Cloud Brake",description:"Raises hover braking by 20% per level."}],Ta=7.5,Aa=5.5,Nd=2.4,Ud=3.5,Ar=(n,e,t)=>Math.max(e,Math.min(t,n));function Ra(n){n.mode="home",n.run=null,n.paused=!1,n.pauseReason="",n.homePosition={x:0,z:3},n.homeFacing=0,n.homePanel="none",n.message="Back at Meg's room.",n.revision++}function ah(n){n.mode!=="home"||n.homePanel==="none"||(n.homePanel="none",n.revision++)}function Nc(n){if(n.mode==="home")return oh.find(e=>Math.hypot(n.homePosition.x-e.x,n.homePosition.z-e.z)<=Nd)}function Fd(n){if(n.mode!=="home"||n.paused)return;const e=Nc(n);e&&(n.homePanel=e.id,n.message=e.id==="cat"?"Pumpkin purrs.":`${e.name} opened.`,n.revision++)}function Od(n,e,t){if(n.mode!=="home"||n.paused||n.homePanel!=="none"||!Number.isFinite(t)||t<=0)return;const i=Ar(e.turn,-1,1),s=-Ar(e.climb,-1,1),r=Math.hypot(i,s);if(r>0){const o=Ud*t/Math.max(1,r);n.homePosition.x=Ar(n.homePosition.x+i*o,-Ta,Ta),n.homePosition.z=Ar(n.homePosition.z+s*o,-Aa,Aa),n.homeFacing=Math.atan2(i,s)}n.revision++}function zd(n,e){if(n.paused||n.mode!=="home"||n.homePanel!=="brooms"||!Hd(e))return!1;const t=n.profile.upgrades[e];if(t>=2)return!1;const i=t===0?60:120;return n.profile.coins<i?!1:(n.profile.coins-=i,n.profile.upgrades[e]=t+1,n.message=`${Ic.find(s=>s.id===e).name} upgraded.`,n.revision++,!0)}function Bd(n,e){if(n.paused||n.mode!=="home"||n.homePanel!=="decor")return!1;const t=Dc.find(i=>i.id===e);return!t||n.profile.furniture.includes(e)||n.profile.coins<t.cost?!1:(n.profile.coins-=t.cost,n.profile.furniture.push(e),n.message=`${t.name} added to the room.`,n.revision++,!0)}function kd(n){return Dc.every(e=>n.furniture.includes(e.id))&&Ic.every(e=>n.upgrades[e.id]>=2)}function Hd(n){return Ic.some(e=>e.id===n)}const $s=230,nn=[-40,-195,40,-155],Xi=[[20,-25],[30,-18],[40,-5],[46,12],[50,30],[54,50],[56,70],[60,90],[63,105],[66,120],[70,140],[76,160],[82,180],[88,200],[95,220],[45,220],[40,200],[34,180],[26,160],[16,140],[6,120],[-2,100],[-8,82],[-14,65],[-18,45],[-20,25],[-16,5],[-6,-12],[6,-22]];function un(n,e){let t=!1;for(let i=0,s=Xi.length-1;i<Xi.length;s=i++){const r=Xi[i][0],o=Xi[i][1],a=Xi[s][0],c=Xi[s][1];o>e!=c>e&&n<(a-r)*(e-o)/(c-o)+r&&(t=!t)}return t}const Gd=24,Vd=8,bl=[[-11,50],[-6,70],[1,90],[49,60],[50,80],[50,120]],Wd=[[-11,58],[-6,78],[1,82],[50,68],[50,88],[50,128]],tr=[[-86.5,-191.5,-60,-163.5],[-60,-191.5,-33.5,-163.5]],Tt=[{id:"home",name:"Bakery Attic",subtitle:"Home — borrowed attic",position:{x:-25,y:30,z:-48},color:"#f9cf68"},{id:"harbor-cafe",name:"Harbor Cafe",subtitle:"Tutorial delivery",position:{x:-80,y:18.12,z:150},color:"#63c7dc"},{id:"market",name:"Sunset Market",subtitle:"Fresh parcels",position:{x:-88,y:33,z:-88},color:"#e88869"},{id:"lighthouse",name:"The Lighthouse",subtitle:"Beacon House",position:{x:130,y:15,z:140},color:"#f4e5b8"},{id:"marina",name:"Marina Works",subtitle:"Dockside roof",position:{x:102,y:20,z:125},color:"#79b9a0"},{id:"observatory",name:"Hill Observatory",subtitle:"East hill pad",position:{x:130,y:53,z:-55},color:"#ad91d1"},{id:"cliffside",name:"Cliffside Books",subtitle:"West avenue",position:{x:-115,y:46,z:-177.5},color:"#db92a7"}],hn=[{min:{x:-37,y:10,z:-60},max:{x:-13,y:28,z:-36},district:"merchant-row"},{min:{x:-94,y:.12,z:136},max:{x:-66,y:16.12,z:164},district:"harbor"},{min:{x:-103,y:10,z:-102},max:{x:-73,y:31,z:-74},district:"old-town"},{min:{x:120,y:0,z:130},max:{x:140,y:13,z:150},district:"lighthouse-headland"},{min:{x:87,y:0,z:110},max:{x:117,y:18,z:140},district:"harbor"},{min:{x:115,y:20,z:-70},max:{x:145,y:51,z:-40},district:"observatory-rise"},{min:{x:-130,y:20,z:-192.5},max:{x:-100,y:44,z:-162.5},district:"bungalow-lanes"},{min:{x:-65,y:0,z:88},max:{x:-45,y:10,z:108},district:"harbor"},{min:{x:-65,y:0,z:38},max:{x:-45,y:12,z:58},district:"harbor"},{min:{x:94,y:0,z:61},max:{x:110,y:10,z:79},district:"harbor"},{min:{x:92,y:0,z:10},max:{x:112,y:12,z:30},district:"harbor"},{min:{x:-50,y:10,z:-98.5},max:{x:-30,y:25,z:-78.5},district:"old-town"},{min:{x:-10,y:10,z:-98.5},max:{x:10,y:25,z:-78.5},district:"old-town"},{min:{x:30,y:10,z:-98.5},max:{x:50,y:26,z:-78.5},district:"old-town"},{min:{x:-50,y:9.19,z:-130.5},max:{x:-30,y:25.19,z:-113.5},district:"old-town"},{min:{x:22.5,y:10,z:-55},max:{x:37.5,y:21,z:-41},district:"merchant-row"},{min:{x:-2.5,y:10,z:-55.5},max:{x:12.5,y:21,z:-40.5},district:"merchant-row"},{min:{x:-80,y:20,z:-187.5},max:{x:-60,y:34,z:-167.5},district:"mansion-hill"},{min:{x:-57.5,y:20,z:-187.5},max:{x:-42.5,y:34,z:-167.5},district:"mansion-hill"},{min:{x:42.5,y:20,z:-185},max:{x:57.5,y:28,z:-170},district:"bungalow-lanes"},{min:{x:60.5,y:20,z:-185},max:{x:75.5,y:27,z:-170},district:"bungalow-lanes"},{min:{x:-122.5,y:19.28,z:-157},max:{x:-107.5,y:27.28,z:-143},district:"bungalow-lanes"},{min:{x:133.5,y:19.26,z:-97.5},max:{x:146.5,y:33.26,z:-82.5},district:"observatory-rise"},{min:{x:-55,y:10,z:-53},max:{x:-45,y:38,z:-43},district:"old-town"},{min:{x:117.5,y:48.5,z:-67.5},max:{x:126.5,y:57,z:-58.5},district:"observatory-rise"},{min:{x:125,y:-.22,z:153},max:{x:135,y:28.78,z:163}}],Rr={harbor:{bodies:[4873579,7043714,6048314,12099704],roofs:[3820117,3095365]},"old-town":{bodies:[13935988,15258808,13219990],roofs:[11951167,4877148]},"merchant-row":{bodies:[11065544,16049320,15247544,15784120],roofs:[9132602,7031338]},"mansion-hill":{bodies:[15790312,10139802],roofs:[3817290]},"bungalow-lanes":{bodies:[8034923,9136970,11033674],roofs:[6048314,4865845]},"observatory-rise":{bodies:[9079442],roofs:[6064762,2767452]},"lighthouse-headland":{bodies:[15266024],roofs:[13948116]}},wl=hn.length-1,El=hn.length-3,Tl=hn.length-2,Xd=[{min:{x:15,y:0,z:168},max:{x:100,y:100,z:172}}];function qd(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Yd=.5*(Math.sqrt(3)-1),Ns=(3-Math.sqrt(3))/6;class ch{constructor(e){pe(this,"perm");const t=qd(e),i=new Uint8Array(256);for(let s=0;s<256;s++)i[s]=s;for(let s=255;s>0;s--){const r=Math.floor(t()*(s+1));[i[s],i[r]]=[i[r],i[s]]}this.perm=new Uint8Array(512);for(let s=0;s<512;s++)this.perm[s]=i[s&255]}noise(e,t){const i=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];let s=0,r=0,o=0;const a=(e+t)*Yd,c=Math.floor(e+a),l=Math.floor(t+a),u=(c+l)*Ns,d=e-(c-u),h=t-(l-u);let m,g;d>h?(m=1,g=0):(m=0,g=1);const v=d-m+Ns,p=h-g+Ns,f=d-1+2*Ns,y=h-1+2*Ns,b=c&255,_=l&255;let w=.5-d*d-h*h;if(w>=0){w*=w;const x=i[this.perm[b+this.perm[_]]&7];s=w*w*(x[0]*d+x[1]*h)}let S=.5-v*v-p*p;if(S>=0){S*=S;const x=i[this.perm[b+m+this.perm[_+g]]&7];r=S*S*(x[0]*v+x[1]*p)}let A=.5-f*f-y*y;if(A>=0){A*=A;const x=i[this.perm[b+1+this.perm[_+1]]&7];o=A*A*(x[0]*f+x[1]*y)}return 70*(s+r+o)}}const lh=1337,Zd=new ch(lh),Ca=new ch(lh+1);function uh(n,e,t=5){let i=0,s=.5,r=1;for(let o=0;o<t;o++)i+=s*Zd.noise(n*r,e*r),s*=.5,r*=2;return i}function $d(n,e,t,i){const s=Ca.noise(n*t+5.2,e*t+1.3),r=Ca.noise(n*t+1.7,e*t+9.1);return[n+s*i,e+r*i]}function En(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}const Uc=[{name:"waterfront",y:0,rects:[[-95,-15,5,175],[50,-35,150,175]]},{name:"midtown",y:10,rects:[[-115,-135,75,-15]]},{name:"upper",y:20,rects:[[-135,-215,135,-135],[55,-135,155,-35]]}];function Pi(n,e){const t=175+Ca.noise(n*.01+3.7,8.2)*35,i=En(t-15,t+45,e);let s=0;un(n,e)?s=e<t+25?1:0:(un(n+6,e)||un(n-6,e)||un(n,e+6)||un(n,e-6))&&e<t+20&&(s=.45);const[r,o]=$d(n,e,.015,18),a=(uh(r*.02,o*.02)*.5+.5)*8,c=Math.hypot(n,e),l=En(145,175,c),u=a*l*(1-s);let d=0,h=0;for(const f of Uc)for(const[y,b,_,w]of f.rects){const S=En(y-20,y+20,n)*(1-En(_-20,_+20,n)),A=En(b-20,b+20,e)*(1-En(w-20,w+20,e)),x=S*A;x>h&&(h=x,d=f.y)}const m=s<.5&&i<.5?1:0,g=d*h+u*(1-h),v=u*(1-m)+g*m,p=Math.min(s*-3.5,i*-12);return{h:v+p,bayT:s,oceanT:i,tierCover:h}}function Ot(n,e){return Pi(n,e).h}const Kd=[.918,.851,.659],Jd=[.498,.682,.431],Al=[.541,.498,.447],Qd=[.72,.68,.52];function Cr(n,e,t){return[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t]}function Rl(n,e){const{h:t,bayT:i,oceanT:s,tierCover:r}=Pi(n,e);if(t<.2||t>4.5&&r<.5||i>0||s>.05)return!1;const o=1.5,a=(Pi(n+o,e).h-Pi(n-o,e).h)/(2*o),c=(Pi(n,e+o).h-Pi(n,e-o).h)/(2*o);return!(Math.hypot(a,c)>.5)}function jd(n){const e=new Float32Array(n*n),t=new Float32Array(n*n),i=new Float32Array(n*n),s=new Float32Array(n*n),r=440/(n-1);for(let a=0;a<n;a++)for(let c=0;c<n;c++){const l=(c/(n-1)-.5)*440,u=(.5-a/(n-1))*440,d=Pi(l,u),h=a*n+c;e[h]=d.h,t[h]=d.bayT,i[h]=d.oceanT,s[h]=d.tierCover}const o=new Uint8ClampedArray(n*n*4);for(let a=0;a<n;a++)for(let c=0;c<n;c++){const l=a*n+c,u=(c/(n-1)-.5)*440,d=(.5-a/(n-1))*440,h=Math.max(1,Math.round(1.5/r)),m=e[a*n+Math.max(c-h,0)],g=e[a*n+Math.min(c+h,n-1)],v=e[Math.max(a-h,0)*n+c],p=e[Math.min(a+h,n-1)*n+c],f=Math.hypot((g-m)/(2*h*r),(p-v)/(2*h*r)),[y,b,_]=ef(e[l],t[l],i[l],f,u,d,s[l]),w=l*4;o[w]=y,o[w+1]=b,o[w+2]=_,o[w+3]=255}return o}function ef(n,e,t,i,s,r,o){const a=Math.max(e,En(.02,.25,t));let c=Cr(Jd,Al,En(3,5.5,n)*(1-o));c=Cr(c,Kd,a*En(-1.5,-.3,n));const l=En(-.8,-1.6,n);c=Cr(c,Qd,l);const u=En(.45,.75,i);u>0&&(c=Cr(c,Al,u));const d=1+uh(s*.08+11.3,r*.08+7.9,3)*.07;return[Math.round(c[0]*d*255),Math.round(c[1]*d*255),Math.round(c[2]*d*255)]}const De=(n,e,t,i)=>({id:n,x:e,z:t,y:i}),tf=[De("ww1",-75,10),De("ww2",-75,70),De("ww3",-75,130),De("ww1b",-35,10),De("ww2b",-35,70),De("ww3b",-35,130),De("we1",85,-10),De("we2",85,50),De("we3",85,110),De("we1b",120,-10),De("we2b",120,50),De("bl-w",-8,100,6),De("bl-e",68,100,6),De("sw1",-75,-8),De("sw2",-95,-25),De("sw3",-65,-42),De("sw4",-90,-58),De("se1",85,-28),De("se2",105,-45),De("se3",75,-60),De("se4",95,-75),De("m1",-60,-72),De("m2",-20,-72),De("m3",20,-72),De("m4",60,-72),De("m5",-60,-105),De("m6",-20,-105),De("m7",20,-105),De("m8",60,-105),De("uc1",20,-120),De("uc2",-5,-135),De("uc3",15,-150),De("u1",-90,-160),De("u2",-30,-160),De("u3",30,-160),De("u4",90,-160),De("u5",90,-195),De("u6",30,-195),De("u7",-30,-195),De("u8",-90,-195),De("ob1",95,-100),De("ob2",110,-70),De("mn1",-100,-25),De("mn2",-68,-25),De("mn3",-20,-25),De("mn4",20,-25),De("mn5",60,-25),De("ms1",-100,-120),De("ms2",-60,-120),De("ms3",-20,-120),De("ms5",60,-120),De("ue1",100,-160),De("ue2",100,-195),De("ui5",130,-160),De("ob3",125,-100),De("wx1",-15,10),De("wx2",-15,70),De("wx3",-15,130),De("ex1",65,-10),De("ex2",65,50),De("ex3",65,110)],ye=(n,e,t="street",i)=>({a:n,b:e,kind:t,deckY:i}),bs=[ye("ww1","ww2"),ye("ww2","ww3"),ye("ww1b","ww2b"),ye("ww2b","ww3b"),ye("ww1","ww1b"),ye("ww2","ww2b"),ye("ww3","ww3b"),ye("we1","we2"),ye("we2","we3"),ye("we1b","we2b"),ye("we1","we1b"),ye("we2","we2b"),ye("wx3","bl-w"),ye("bl-w","bl-e","bridge",6),ye("bl-e","we3"),ye("ww1","sw1","switchback"),ye("sw1","sw2","switchback"),ye("sw2","sw3","switchback"),ye("sw3","sw4","switchback"),ye("sw4","m1","switchback"),ye("we1","se1","switchback"),ye("se1","se2","switchback"),ye("se2","se3","switchback"),ye("se3","se4","switchback"),ye("se4","m4","switchback"),ye("m1","m2"),ye("m2","m3"),ye("m3","m4"),ye("m5","m6"),ye("m6","m7"),ye("m7","m8"),ye("m1","m5"),ye("m2","m6"),ye("m3","m7"),ye("m4","m8"),ye("m3","uc1","switchback"),ye("uc1","uc2","switchback"),ye("uc2","uc3","switchback"),ye("uc3","u3","switchback"),ye("se4","ob1"),ye("ob1","ob2"),ye("mn1","mn2"),ye("mn2","mn3"),ye("mn3","mn4"),ye("mn4","mn5"),ye("mn5","se1"),ye("mn5","m4"),ye("ms1","ms2"),ye("ms3","uc1"),ye("uc1","ms5"),ye("ms2","m5"),ye("uc1","m7"),ye("u1","u2"),ye("u2","u3"),ye("u3","u4"),ye("u4","u5"),ye("u5","u6"),ye("u6","u7"),ye("u7","u8"),ye("u8","u1"),ye("u4","ue1"),ye("ue1","ue2"),ye("ue2","u5"),ye("u4","ui5"),ye("ob1","ob3"),ye("wx1","wx2"),ye("wx2","wx3"),ye("ww1b","wx1"),ye("ww2b","wx2"),ye("ww3b","wx3"),ye("ex1","ex2"),ye("ex2","ex3"),ye("we1","ex1"),ye("we2","ex2"),ye("we3","ex3")];bs.filter(n=>n.kind==="bridge").map(n=>[n.a,n.b]);function Bn(n){const e=tf.find(t=>t.id===n);if(!e)throw new Error(`unknown road node ${n}`);return e}function ps(n){return{x:n.x,y:n.y??Ot(n.x,n.z),z:n.z}}const nf=1836670420,sf=110,nr=32,rf=.07;function Qn(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function of(n){const e=Qn(n),t=[];for(let i=0;i<sf;i++){const s=e()*rf,r=e()*nr,o=e()*nr;t.push({x:r,y:o,alpha:s})}return t}const af=20260927,Cl=5;function go(n,e,t,i){const s=n+t/2,r=e+i/2,o=[Ot(n,e),Ot(n+t,e),Ot(n,e+i),Ot(n+t,e+i),Ot(s,r)],a=Math.min(...o);return a<Pa?null:{minH:a,maxH:Math.max(...o)}}const Pl={harbor:{w:[9,16],d:[8,14],floors:[1,2],bayWindow:!1,palettes:[0]},"old-town":{w:[8,14],d:[8,12],floors:[2,4],bayWindow:!0,palettes:[0]},"merchant-row":{w:[8,14],d:[8,12],floors:[2,3],bayWindow:!0,palettes:[0]},"bungalow-lanes":{w:[8,12],d:[8,12],floors:[1,1],bayWindow:!1,palettes:[1,2,3,4]}},Pa=-.4,cf=2.8,lf=.7,qn=cf+lf,Pr=2,qi=275,Ll=3.4;function hi(n,e,t,i,s,r,o,a){return n<o&&t>s&&e<a&&i>r}function Ks(n,e,t,i,s,r,o,a){const c=t-n,l=i-e,u=o-s,d=a-r,h=c*d-l*u;if(Math.abs(h)<1e-9)return!1;const m=((s-n)*d-(r-e)*u)/h,g=((s-n)*l-(r-e)*c)/h;return m>=0&&m<=1&&g>=0&&g<=1}function Dl(n,e,t,i,s,r,o,a){return n>=s&&n<=o&&e>=r&&e<=a||t>=s&&t<=o&&i>=r&&i<=a?!0:Ks(n,e,t,i,s,r,o,r)||Ks(n,e,t,i,o,r,o,a)||Ks(n,e,t,i,o,a,s,a)||Ks(n,e,t,i,s,a,s,r)}function ko(n,e,t,i,s,r){const o=s-t,a=r-i,c=o*o+a*a,l=c>0?Math.max(0,Math.min(1,((n-t)*o+(e-i)*a)/c)):0,u=t+o*l-n,d=i+a*l-e;return u*u+d*d}function uf(n,e,t,i,s,r,o,a){const c=[[s,r,o,r],[o,r,o,a],[o,a,s,a],[s,a,s,r]];if(n>=s&&n<=o&&e>=r&&e<=a||t>=s&&t<=o&&i>=r&&i<=a)return 0;for(const[u,d,h,m]of c)if(Ks(n,e,t,i,u,d,h,m))return 0;let l=1/0;for(const[u,d]of[[s,r],[o,r],[o,a],[s,a]])l=Math.min(l,ko(u,d,n,e,t,i));for(const[u,d,h,m]of c)l=Math.min(l,ko(n,e,u,d,h,m)),l=Math.min(l,ko(t,i,u,d,h,m));return Math.sqrt(l)}function Il(n,e){for(const t of Uc)for(const[i,s,r,o]of t.rects)if(n>=i&&n<r&&e>=s&&e<o)return t}function Nl(n,e,t,i,s,r,o){const a=Math.max(i,Math.min(n,r)),c=Math.max(s,Math.min(e,o)),l=n-a,u=e-c;return l*l+u*u<t*t}function hh(){const n=Qn(af),e=[],t=hn.map(u=>({x0:u.min.x-Pr,z0:u.min.z-Pr,x1:u.max.x+Pr,z1:u.max.z+Pr})),i=hn[3],s=(i.min.x+i.max.x)/2,r=(i.min.z+i.max.z)/2,o=26,a=bs.filter(u=>u.kind!=="bridge").map(u=>{const d=Bn(u.a),h=Bn(u.b);return{x0:d.x,z0:d.z,x1:h.x,z1:h.z}});let c=0;for(const u of bs){if(u.kind==="bridge")continue;const d=Bn(u.a),h=Bn(u.b),m=h.x-d.x,g=h.z-d.z,v=Math.hypot(m,g);if(v<10)continue;const p=m/v,f=g/v,y=-f,b=p;let _=5;for(;_<v-5&&e.length<qi;){const w=d.x+p*_,S=d.z+f*_,A=Il(w,S);if(!A){_+=6;continue}const x=A.name==="waterfront"?"harbor":A.name==="midtown"?"midtown-mix":"bungalow-lanes",T=x==="midtown-mix"?c%2===0?"old-town":"merchant-row":x,R=Pl[T],P=R.w[0]+n()*(R.w[1]-R.w[0]),D=R.d[0]+n()*(R.d[1]-R.d[0]),z=R.floors[0]+Math.floor(n()*(R.floors[1]-R.floors[0]+1)),k=R.palettes[Math.floor(n()*R.palettes.length)],N=n()<.5?1:-1,O=(P*Math.abs(p)+D*Math.abs(f))/2,I=(P*Math.abs(y)+D*Math.abs(b))/2;for(const G of[N,-N]){if(e.length>=qi)break;let Y=!1;for(const te of[.5,2.5,4.5,6.5,8.5]){if(Y||e.length>=qi)break;const Z=qn+I+te,ue=w+y*G*Z,Ge=S+b*G*Z,Ue=ue-P/2,Pe=Ge-D/2;if(!Il(ue,Ge)||Ot(ue,Ge)<Pa||un(Ue,Pe)||un(Ue+P,Pe)||un(Ue,Pe+D)||un(Ue+P,Pe+D))continue;const J=go(Ue,Pe,P,D);if(!J||J.maxH-J.minH>Cl||hi(Ue,Pe,Ue+P,Pe+D,nn[0],nn[1],nn[2],nn[3])||tr.some(_e=>hi(Ue,Pe,Ue+P,Pe+D,_e[0],_e[1],_e[2],_e[3]))||Nl(s,r,o,Ue,Pe,Ue+P,Pe+D)||t.some(_e=>hi(Ue,Pe,Ue+P,Pe+D,_e.x0,_e.z0,_e.x1,_e.z1))||e.some(_e=>hi(Ue,Pe,Ue+P,Pe+D,_e.x,_e.z,_e.x+_e.w,_e.z+_e.d)))continue;const he=Ue-qn,oe=Pe-qn,Ie=Ue+P+qn,We=Pe+D+qn;a.some(_e=>Dl(_e.x0,_e.z0,_e.x1,_e.z1,he,oe,Ie,We))||(x==="midtown-mix"&&c++,e.push({x:Ue,z:Pe,w:P,d:D,h:z*Ll,floors:z,district:T,bayWindow:R.bayWindow,palette:k}),Y=!0)}}_+=2*O+2}}const l=4;for(const u of Uc)for(const[d,h,m,g]of u.rects){const v=u.name==="waterfront"?"harbor":u.name==="midtown"?"midtown-mix":"bungalow-lanes";for(let p=d+l/2;p<m&&e.length<qi;p+=l)for(let f=h+l/2;f<g&&e.length<qi;f+=l)for(let y=0;y<9&&e.length<qi;y++){const b=(n()-.5)*l*.9,_=(n()-.5)*l*.9,w=v==="midtown-mix"?c%2===0?"old-town":"merchant-row":v,S=Pl[w],A=S.w[0]+n()*(S.w[1]-S.w[0]),x=S.d[0]+n()*(S.d[1]-S.d[0]),T=S.floors[0]+Math.floor(n()*(S.floors[1]-S.floors[0]+1)),R=S.palettes[Math.floor(n()*S.palettes.length)],P=p+b,D=f+_,z=P-A/2,k=D-x/2;let N=!1;for(const Z of a)if(uf(Z.x0,Z.z0,Z.x1,Z.z1,z,k,z+A,k+x)<=15){N=!0;break}if(!N||Ot(P,D)<Pa||un(z,k)||un(z+A,k)||un(z,k+x)||un(z+A,k+x))continue;const O=go(z,k,A,x);if(!O||O.maxH-O.minH>Cl||hi(z,k,z+A,k+x,nn[0],nn[1],nn[2],nn[3])||tr.some(Z=>hi(z,k,z+A,k+x,Z[0],Z[1],Z[2],Z[3]))||Nl(s,r,o,z,k,z+A,k+x)||t.some(Z=>hi(z,k,z+A,k+x,Z.x0,Z.z0,Z.x1,Z.z1))||e.some(Z=>hi(z,k,z+A,k+x,Z.x,Z.z,Z.x+Z.w,Z.z+Z.d)))continue;const I=z-qn,G=k-qn,Y=z+A+qn,te=k+x+qn;a.some(Z=>Dl(Z.x0,Z.z0,Z.x1,Z.z1,I,G,Y,te))||(v==="midtown-mix"&&c++,e.push({x:z,z:k,w:A,d:x,h:T*Ll,floors:T,district:w,bayWindow:S.bayWindow,palette:R}))}}return e}function dh(n){return n.map(e=>{const t=go(e.x,e.z,e.w,e.d),i=t?t.maxH:Ot(e.x+e.w/2,e.z+e.d/2);return{min:{x:e.x,y:i,z:e.z},max:{x:e.x+e.w,y:i+e.h,z:e.z+e.d},district:e.district}})}const Wt=1,hf=3,df=100,ff=18,pf=2.2,mf=7,gf=12,xf=dh(hh()),fh=[...hn,...xf,...Xd],_f=5,vf=.5,jn=480,Mf=3.5,ph=.9,mh=.45,yf=3.5,Sf=1.5,bf=3,wf=.8,Ul=.2,Ef=3,Tf=8,Af=2,gh=6;function Rf(n,e){return Math.max(gh,_f+vf*n)*(1+e*.2)}const Fl=2,Cf=20,Pf=.05,xh=.5,_h=3.6,Un=(n,e,t)=>Math.max(e,Math.min(t,n)),La=n=>{const e=Un(n,0,1);return e*e*(3-2*e)},Ol=45;function Lf(n,e){const t=Math.hypot(n.x,n.z),i=$s-Wt-Ol;if(t<=i)return;const s=La((t-i)/Ol),r=n.x/t,o=n.z/t,a=e.x*r+e.z*o;if(a<=0)return;const c=a*(1-s);e.x+=r*(c-a),e.z+=o*(c-a)}const Df=n=>Math.hypot(n.x,n.y,n.z);function Fc(n=Tt[0].position){return{position:{...n},yaw:0,pitch:0,speed:9,throttle:9,hover:!1,velocity:{x:0,y:0,z:-9},brakeHold:!1}}function Oc(){return{mode:"title",player:Fc(),profile:{coins:0,upgrades:{speed:0,handling:0,braking:0},furniture:[],tutorialDone:!1,runs:0,deliveries:0},run:null,paused:!1,pauseReason:"",message:"",tutorialStage:0,drop:null,descent:null,haloFade:0,homePosition:{x:0,z:3},homeFacing:0,homePanel:"none",summary:null,revision:0,coarsePointer:!1}}function If(n){n.mode="tutorial",n.paused=!1,n.pauseReason="",n.player=Fc(),n.tutorialStage=0,n.drop=null,n.descent=null,n.haloFade=0,n.message="Steer toward the glowing Harbor Cafe pad.",n.revision++}function Nf(n){n.paused||n.mode!=="tutorial"&&n.mode!=="flight"||(n.player.hover=!n.player.hover,n.revision++)}function vh(n,e,t=""){n.paused=e,n.pauseReason=e?t:"",n.revision++}function ur(n){const e=n.player;if(!(e.speed>=Mf))return Tt.find(t=>{const i=e.position.x-t.position.x,s=e.position.z-t.position.z;return Math.hypot(i,s)<=_h&&e.position.y>=t.position.y})}function Mh(n){var t;if(n.paused)return;if(n.mode==="home"){Fd(n);return}if(n.drop||n.descent||n.haloFade>0)return;if(n.mode==="tutorial"){if(((t=ur(n))==null?void 0:t.id)!=="harbor-cafe")return;Da(n,Tt.find(i=>i.id==="harbor-cafe"));return}if(n.mode!=="flight"||!n.run)return;if(n.run.elapsed>=jn){hr(n,!1);return}const e=ur(n);e&&Da(n,e)}function Uf(n,e){n.player.brakeHold=!1,n.haloFade=0,n.drop={stopId:e.id,t:0,parcel:e.id!=="home"},yh(n),n.message=e.id==="home"?"Banking your earnings…":"Parcel away!",n.revision++}function yh(n){n.player.speed=0,n.player.hover=!0,n.player.velocity={x:0,y:0,z:0}}function Ff(n,e){var s;if(n.player.hover=!1,n.player.throttle=0,n.mode==="tutorial"){n.profile.tutorialDone=!0,n.message="Practice complete",n.mode="title",n.tutorialStage=3,n.revision++;return}const t=n.run;if(!t||t.elapsed>=jn){hr(n,!1);return}const i=Tt.find(r=>r.id===e);if(i){if(i.id==="home"){const r=t.earnings,o=t.deliveries;hr(n,!0),n.summary=null,Ra(n),n.message=`Shift complete — banked ${r} coins after ${o} ${o===1?"delivery":"deliveries"}.`;return}((s=t.job)==null?void 0:s.to)===i.id&&(t.earnings+=t.job.payout,t.deliveries++,n.profile.deliveries++,t.job=null,t.lastStop=i.id,t.offers=bh(t.seed,t.deliveries,i.id),t.returning=!1,n.mode="offers",n.message="Delivered! Choose the next parcel or return home.",n.revision++)}}function Of(n,e=Date.now()){if(n.paused||n.run||n.mode!=="title"&&n.mode!=="summary"&&n.mode!=="home")return;const t=Number.isFinite(e)?Math.floor(e):Date.now();n.player=Fc(),n.run={seed:t,elapsed:0,earnings:0,deliveries:0,job:null,offers:bh(t,0,"home"),returning:!1,lastStop:"home"},n.summary=null,n.homePanel="none",n.drop=null,n.descent=null,n.haloFade=0,n.mode="offers",n.message="Choose your first delivery of the day.",n.revision++}function zf(n,e){if(n.paused||n.mode!=="offers"||!n.run||!Number.isInteger(e))return;const t=n.run.offers[e];t&&(n.run.job=t,n.run.offers=[],n.run.returning=!1,n.mode="flight",n.message=`Delivery: ${Hf(t.to)}.`,n.revision++)}function Bf(n){n.paused||n.mode!=="offers"||!n.run||n.run.deliveries===0||(n.run.job=null,n.run.offers=[],n.run.returning=!0,n.mode="flight",n.message="Return to Meg's Rooftop to bank your earnings.",n.revision++)}function hr(n,e){const t=n.run;if(!t)return;n.drop=null,n.descent=null,n.haloFade=0;const i=e?t.earnings:0;n.summary={success:e,earnings:i,deliveries:t.deliveries},e&&(n.profile.coins+=i),n.profile.runs++,n.run=null,n.mode="summary",n.player.speed=0,n.player.throttle=0,n.player.hover=!0,n.player.velocity={x:0,y:0,z:0},n.message=e?"Shift complete. Earnings banked!":"Rescue called. Unbanked earnings were lost.",n.revision++}function Sh(n){if(n.mode==="tutorial")return Tt.find(e=>e.id==="harbor-cafe");if(n.run)return Tt.find(e=>{var t;return e.id===(n.run.returning?"home":(t=n.run.job)==null?void 0:t.to)})}function kf(n,e,t){return(Math.atan2(e.x-n.x,-(e.z-n.z))-t)*180/Math.PI}function Hf(n){var e;return((e=Tt.find(t=>t.id===n))==null?void 0:e.name)??n}function Do(n){if(!(n.drop||n.descent)&&!(n.mode!=="tutorial"&&n.mode!=="flight"))return Sh(n)}function Us(n){let e=n|0;return e=Math.imul(e^e>>>16,73244475),e=Math.imul(e^e>>>16,73244475),(e^e>>>16)>>>0}function bh(n,e,t){let i=Us(n^Us(e)^Us(t.length));const s=Tt.find(l=>l.id===t),r=Tt.filter(l=>l.id!=="home"&&l.id!==t).map(l=>({stop:l,distance:Math.hypot(l.position.x-s.position.x,l.position.z-s.position.z)})).sort((l,u)=>l.distance-u.distance);i=Us(i+1);const o=r[i%Math.min(3,r.length)],a=r.slice(-Math.min(3,r.length));i=Us(i+2);const c=a[i%a.length];return[o,c].sort((l,u)=>l.distance-u.distance).map(({stop:l,distance:u},d)=>{const h=u<100?20:u<180?35:50;return{from:t,to:l.id,payout:h,label:d===0?"Short hop":"Long haul",parcel:"Delivery parcel"}})}function Gf(n,e){let t;for(const i of fh){const s={x:i.min.x-Wt,y:i.min.y-Wt,z:i.min.z-Wt},r={x:i.max.x+Wt,y:i.max.y+Wt,z:i.max.z+Wt};let o=-1e-9,a=1,c={x:0,y:0,z:0};for(const l of["x","y","z"]){const u=n[l],d=e[l];if(Math.abs(d)<1e-9){if(u<s[l]||u>r[l]){o=2;break}continue}const h=(s[l]-u)/d,m=(r[l]-u)/d,g=Math.min(h,m),v=Math.max(h,m);if(g>o&&(o=g,c={x:0,y:0,z:0},c[l]=h<m?-1:1),a=Math.min(a,v),o>a)break}o>=0&&o<=1&&o<=a&&(!t||o<t.t)&&(t={t:o,normal:c})}return t}function wh(n,e){var t;return n.mode==="tutorial"?e.id==="harbor-cafe":n.mode!=="flight"||!n.run?!1:e.id==="home"?n.run.returning&&!n.run.job:((t=n.run.job)==null?void 0:t.to)===e.id}function Vf(n){if(n.drop||n.descent||n.haloFade>0||n.mode!=="tutorial"&&n.mode!=="flight"||Math.abs(n.player.speed)>xh)return;const e=Do(n),t=e?ur(n):void 0;!t||t.id!==e.id||!wh(n,t)||(n.haloFade=mh)}function Wf(n){const e=Do(n),t=e?ur(n):void 0;!t||t.id!==e.id||!wh(n,t)||Math.abs(n.player.speed)>xh||Da(n,t)}function Da(n,e){const t=n.player.position.x-e.position.x,i=n.player.position.z-e.position.z,s=Math.hypot(t,i),r=Math.atan2(i,t),o=Math.atan2(-Math.sin(r),-Math.cos(r)),a=Math.abs(Math.atan2(Math.sin(o-n.player.yaw),Math.cos(o-n.player.yaw)));n.descent={stopId:e.id,startY:n.player.position.y,angle:r,radius0:s,orbitR:Math.max(s,bf),dir:a<=Math.PI/2?1:-1,t:0},n.player.brakeHold=!1,yh(n),n.message="Descending…",n.revision++}function Xf(n,e,t){if(n.mode==="home"){Od(n,e,t);return}if(n.paused||n.mode!=="tutorial"&&n.mode!=="flight"&&n.mode!=="offers"||!Number.isFinite(t)||t<=0)return;if(n.drop){if(n.mode!=="flight"&&n.mode!=="tutorial")n.drop=null;else{if(n.drop.t+=Math.max(0,t),n.drop.t>=ph){const x=n.drop.stopId;n.drop=null,Ff(n,x)}n.revision++}return}const i=Math.max(0,t);if(n.haloFade>0&&(n.haloFade=Math.max(0,n.haloFade-i),n.haloFade===0&&Wf(n),n.revision++,n.haloFade>0||n.drop||n.descent))return;if(n.descent){const x=Tt.find(T=>T.id===n.descent.stopId);if(n.mode!=="flight"&&n.mode!=="tutorial"||!x)n.descent=null,n.player.hover=!1;else{const T=x.position.y+yf;if(n.player.position.y-T<=.05)n.descent=null,Uf(n,x);else{const R=n.descent,P=n.player.position.x,D=n.player.position.z,z=Math.min(Tf,Math.max(Af,(n.player.position.y-T)*1.5));n.player.position.y=Math.max(T,n.player.position.y-z*i),R.t+=i,R.angle+=R.dir*Sf*i;const k=R.radius0+(R.orbitR-R.radius0)*La(R.t/wf),N=Math.max(0,(n.player.position.y-T)/Math.max(.001,R.startY-T)),O=N>=Ul?1:La(N/Ul),I=k*O,G=x.position.x+Math.cos(R.angle)*I,Y=x.position.z+Math.sin(R.angle)*I,te=G-P,Z=Y-D;if(Math.hypot(te,Z)>.75*i){const ue=Math.atan2(te,-Z),Ge=Math.atan2(Math.sin(ue-n.player.yaw),Math.cos(ue-n.player.yaw)),Ue=Ef*i;n.player.yaw+=Math.max(-Ue,Math.min(Ue,Ge))}n.player.position.x=G,n.player.position.z=Y,n.revision++}}return}if(n.run&&(n.mode==="flight"||n.mode==="offers")){if(n.run.elapsed>=jn-1e-9){n.run.elapsed=jn,hr(n,!1);return}const x=n.run.elapsed;if(n.run.elapsed=Math.min(jn,x+i),n.run.elapsed>=jn-1e-9){n.run.elapsed=jn,hr(n,!1);return}if(qf(n,x),n.mode==="offers"){n.revision++;return}}const s=n.player,r=Un(e.turn,-1,1),o=Un(e.climb,-1,1),a=ff*(1+n.profile.upgrades.speed*.1),c=pf*(1+n.profile.upgrades.handling*.2),l=Rf(s.speed,n.profile.upgrades.braking);s.yaw+=r*c*i,s.pitch+=(o*.38-s.pitch)*Math.min(1,7*i),e.cutThrottle&&(s.throttle=0),s.throttle=Un(s.throttle+Un(e.throttle,-1,1)*mf*i,0,a);let u,d=1/0;const h=s.hover?void 0:Do(n);if(h){const x=h.position.x-s.position.x,T=h.position.z-s.position.z;d=Math.hypot(x,T),d<Fl?(u=0,s.brakeHold=!0):s.brakeHold&&d<Cf?u=0:d>1e-6&&(s.velocity.x*x+s.velocity.z*T)/d>.5&&(u=Math.sqrt(2*gh*d)),u===void 0&&(s.brakeHold=!1)}else s.brakeHold=!1;const m=s.throttle>Pf?s.throttle:s.speed,g=s.hover?0:u===void 0?s.throttle:Math.min(u,m);s.speed=Un(s.speed+Un(g-s.speed,-l*i,gf*i),0,a),Math.abs(s.speed)<.01&&(s.speed=0),s.brakeHold&&s.speed===0&&(s.brakeHold=!1,d>=Fl&&(s.throttle=0));const v={x:Math.sin(s.yaw),z:-Math.cos(s.yaw)},p=s.hover?0:o*Math.max(s.speed,3)*.7,f={x:v.x*s.speed*i,y:p*i,z:v.z*s.speed*i};Lf(s.position,f);const y=s.position.x,b=s.position.y,_=s.position.z;let w={...f};for(let x=0;x<3;x++){const T=Gf(s.position,w);if(!T){s.position.x+=w.x,s.position.y+=w.y,s.position.z+=w.z;break}if(!(T.normal.x||T.normal.y||T.normal.z))break;const R=Math.max(0,T.t-1e-4);s.position.x+=w.x*R,s.position.y+=w.y*R,s.position.z+=w.z*R;const P=1-R;if(w={x:T.normal.x?0:w.x*P,y:T.normal.y?0:w.y*P,z:T.normal.z?0:w.z*P},!w.x&&!w.y&&!w.z)break}for(let x=0;x<4;x++){let T=!1;for(const R of fh){const P=R.min.x-Wt,D=R.max.x+Wt,z=R.min.y-Wt,k=R.max.y+Wt,N=R.min.z-Wt,O=R.max.z+Wt,I=s.position;if(I.x<=P||I.x>=D||I.y<=z||I.y>=k||I.z<=N||I.z>=O)continue;const G=I.x-P,Y=D-I.x,te=I.y-z,Z=k-I.y,ue=I.z-N,Ge=O-I.z,Ue=Math.min(G,Y,te,Z,ue,Ge),Pe=.02;Ue===G?I.x=P-Pe:Ue===Y?I.x=D+Pe:Ue===te?I.y=z-Pe:Ue===Z?I.y=k+Pe:Ue===ue?I.z=N-Pe:I.z=O+Pe,T=!0}if(!T)break}s.position.x=Un(s.position.x,-$s+Wt,$s-Wt);const S=Math.max(Ot(s.position.x,s.position.z),0)+hf;s.position.y=Un(s.position.y,S,df),s.position.z=Un(s.position.z,-$s+Wt,$s-Wt),s.velocity={x:(s.position.x-y)/i,y:(s.position.y-b)/i,z:(s.position.z-_)/i};const A=Df({x:s.position.x-y,y:s.position.y-b,z:s.position.z-_});n.mode==="tutorial"&&n.tutorialStage===0&&A>.1?(n.tutorialStage=1,n.message=n.coarsePointer?"Release the stick to slow down and hover.":"Press Space to slow down and hover."):n.mode==="tutorial"&&n.tutorialStage===1&&Math.abs(s.speed)<.5&&(n.tutorialStage=2,n.message="Nice and steady. Drift over the glowing Harbor Cafe pad — the parcel drops itself."),Vf(n),n.revision++}function qf(n,e){const t=jn-n.run.elapsed,i=jn-e;i>30&&t<=30?n.message="30 seconds left — return home before nightfall!":i>60&&t<=60?n.message="One minute left — Meg needs to head home.":i>120&&t<=120&&(n.message="Two minutes left — finish up before nightfall.")}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zc="185",Yf=0,zl=1,Zf=2,ao=1,$f=2,Js=3,yi=0,en=1,rn=2,si=0,gs=1,Ia=2,Bl=3,kl=4,Kf=5,Li=100,Jf=101,Qf=102,jf=103,ep=104,tp=200,np=201,ip=202,sp=203,Na=204,Ua=205,rp=206,op=207,ap=208,cp=209,lp=210,up=211,hp=212,dp=213,fp=214,Fa=0,Oa=1,za=2,ws=3,Ba=4,ka=5,Ha=6,Ga=7,Eh=0,pp=1,mp=2,Hn=0,Th=1,Ah=2,Rh=3,Bc=4,Ch=5,Ph=6,Lh=7,Dh=300,Oi=301,Es=302,Ho=303,Go=304,Io=306,xo=1e3,ti=1001,Va=1002,Gt=1003,gp=1004,Lr=1005,Jt=1006,Vo=1007,Ni=1008,pn=1009,Ih=1010,Nh=1011,dr=1012,kc=1013,Wn=1014,Rn=1015,oi=1016,Hc=1017,Gc=1018,fr=1020,Uh=35902,Fh=35899,Oh=1021,zh=1022,Cn=1023,ai=1026,Ui=1027,Vc=1028,Wc=1029,zi=1030,Xc=1031,qc=1033,co=33776,lo=33777,uo=33778,ho=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,Za=36196,$a=37492,Ka=37496,Ja=37488,Qa=37489,_o=37490,ja=37491,ec=37808,tc=37809,nc=37810,ic=37811,sc=37812,rc=37813,oc=37814,ac=37815,cc=37816,lc=37817,uc=37818,hc=37819,dc=37820,fc=37821,pc=36492,mc=36494,gc=36495,xc=36283,_c=36284,vo=36285,vc=36286,xp=3200,Mc=0,_p=1,vi="",Kt="srgb",Mo="srgb-linear",yo="linear",ft="srgb",Yi=7680,Hl=519,vp=512,Mp=513,yp=514,Yc=515,Sp=516,bp=517,Zc=518,wp=519,yc=35044,Gl="300 es",kn=2e3,pr=2001;function Ep(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function So(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tp(){const n=So("canvas");return n.style.display="block",n}const Vl={};function bo(...n){const e="THREE."+n.shift();console.log(e,...n)}function Bh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ze(...n){n=Bh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function rt(...n){n=Bh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function xs(...n){const e=n.join(" ");e in Vl||(Vl[e]=!0,Ze(...n))}function Ap(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Rp={[Fa]:Oa,[za]:Ha,[Ba]:Ga,[ws]:ka,[Oa]:Fa,[Ha]:za,[Ga]:Ba,[ka]:ws};class Hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wl=1234567;const ir=Math.PI/180,mr=180/Math.PI;function Gn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function $c(n,e){return(n%e+e)%e}function Cp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Pp(n,e,t){return n!==e?(t-n)/(e-n):0}function sr(n,e,t){return(1-t)*n+t*e}function Lp(n,e,t,i){return sr(n,e,1-Math.exp(-t*i))}function Dp(n,e=1){return e-Math.abs($c(n,e*2)-e)}function Ip(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Np(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Up(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Fp(n,e){return n+Math.random()*(e-n)}function Op(n){return n*(.5-Math.random())}function zp(n){n!==void 0&&(Wl=n);let e=Wl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bp(n){return n*ir}function kp(n){return n*mr}function Hp(n){return(n&n-1)===0&&n!==0}function Gp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Vp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Wp(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),m=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*m,a*l);break;case"YXY":n.set(c*m,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*m,a*u,a*l);break;default:Ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function An(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Qs={DEG2RAD:ir,RAD2DEG:mr,generateUUID:Gn,clamp:it,euclideanModulo:$c,mapLinear:Cp,inverseLerp:Pp,lerp:sr,damp:Lp,pingpong:Dp,smoothstep:Ip,smootherstep:Np,randInt:Up,randFloat:Fp,randFloatSpread:Op,seededRandom:zp,degToRad:Bp,radToDeg:kp,isPowerOfTwo:Hp,ceilPowerOfTwo:Gp,floorPowerOfTwo:Vp,setQuaternionFromProperEuler:Wp,normalize:pt,denormalize:An},ll=class ll{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ll.prototype.isVector2=!0;let le=ll;class Ls{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(d!==v||c!==h||l!==m||u!==g){let p=c*h+l*m+u*g+d*v;p<0&&(h=-h,m=-m,g=-g,v=-v,p=-p);let f=1-a;if(p<.9995){const y=Math.acos(p),b=Math.sin(y);f=Math.sin(f*y)/b,a=Math.sin(a*y)/b,c=c*f+h*a,l=l*f+m*a,u=u*f+g*a,d=d*f+v*a}else{c=c*f+h*a,l=l*f+m*a,u=u*f+g*a,d=d*f+v*a;const y=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=y,l*=y,u*=y,d*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[o],h=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*d+c*m-l*h,e[t+1]=c*g+u*h+l*d-a*m,e[t+2]=l*g+u*m+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(r/2),h=c(i/2),m=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"YZX":this._x=h*u*d+l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d-h*m*g;break;case"XZY":this._x=h*u*d-l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d+h*m*g;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ul=class ul{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wo.copy(this).projectOnVector(e),this.sub(Wo)}reflect(e){return this.sub(Wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ul.prototype.isVector3=!0;let L=ul;const Wo=new L,Xl=new Ls,hl=class hl{constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],m=i[5],g=i[8],v=s[0],p=s[3],f=s[6],y=s[1],b=s[4],_=s[7],w=s[2],S=s[5],A=s[8];return r[0]=o*v+a*y+c*w,r[3]=o*p+a*b+c*S,r[6]=o*f+a*_+c*A,r[1]=l*v+u*y+d*w,r[4]=l*p+u*b+d*S,r[7]=l*f+u*_+d*A,r[2]=h*v+m*y+g*w,r[5]=h*p+m*b+g*S,r[8]=h*f+m*_+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*r,m=l*r-o*c,g=t*d+i*h+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(s*l-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=m*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xo.makeScale(e,t)),this}rotate(e){return xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xo.makeRotation(-e)),this}translate(e,t){return xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hl.prototype.isMatrix3=!0;let Je=hl;const Xo=new Je,ql=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yl=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xp(){const n={enabled:!0,workingColorSpace:Mo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ft&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vi?yo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Mo]:{primaries:e,whitePoint:i,transfer:yo,toXYZ:ql,fromXYZ:Yl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:ql,fromXYZ:Yl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),n}const at=Xp();function ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _s(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zi;class qp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Zi===void 0&&(Zi=So("canvas")),Zi.width=e.width,Zi.height=e.height;const s=Zi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Zi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=So("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ri(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ri(t[i]/255)*255):t[i]=ri(t[i]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yp=0;class Kc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qo(s[o].image)):r.push(qo(s[o]))}else r=qo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function qo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}let Zp=0;const Yo=new L;class Xt extends Hi{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=ti,s=ti,r=Jt,o=Ni,a=Cn,c=pn,l=Xt.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Gn(),this.name="",this.source=new Kc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yo).x}get height(){return this.source.getSize(Yo).y}get depth(){return this.source.getSize(Yo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xo:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xo:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Dh;Xt.DEFAULT_ANISOTROPY=1;const dl=class dl{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],m=c[5],g=c[9],v=c[2],p=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,_=(m+1)/2,w=(f+1)/2,S=(u+h)/4,A=(d+v)/4,x=(g+p)/4;return b>_&&b>w?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=S/i,r=A/i):_>w?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=S/s,r=x/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=A/r,s=x/r),this.set(i,s,r,t),this}let y=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-v)/y,this.z=(h-u)/y,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dl.prototype.isVector4=!0;let Rt=dl;class $p extends Hi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Xt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Kc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends $p{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class kh extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kp extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lo=class Lo{constructor(e,t,i,s,r,o,a,c,l,u,d,h,m,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,d,h,m,g,v,p)}set(e,t,i,s,r,o,a,c,l,u,d,h,m,g,v,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lo().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),o=1/$i.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,m=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=h-v*l,t[9]=-a*c,t[2]=v-h*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,m=c*d,g=l*u,v=l*d;t[0]=h+v*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=v+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,m=c*d,g=l*u,v=l*d;t[0]=h-v*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,m=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=g*l-m,t[8]=h*l+v,t[1]=c*d,t[5]=v*l+h,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,m=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-h*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+g,t[10]=h-v*d}else if(e.order==="XZY"){const h=o*c,m=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+v,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jp,e,Qp)}lookAt(e,t,i){const s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),di.crossVectors(i,an),di.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),di.crossVectors(i,an)),di.normalize(),Dr.crossVectors(an,di),s[0]=di.x,s[4]=Dr.x,s[8]=an.x,s[1]=di.y,s[5]=Dr.y,s[9]=an.y,s[2]=di.z,s[6]=Dr.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],m=i[13],g=i[2],v=i[6],p=i[10],f=i[14],y=i[3],b=i[7],_=i[11],w=i[15],S=s[0],A=s[4],x=s[8],T=s[12],R=s[1],P=s[5],D=s[9],z=s[13],k=s[2],N=s[6],O=s[10],I=s[14],G=s[3],Y=s[7],te=s[11],Z=s[15];return r[0]=o*S+a*R+c*k+l*G,r[4]=o*A+a*P+c*N+l*Y,r[8]=o*x+a*D+c*O+l*te,r[12]=o*T+a*z+c*I+l*Z,r[1]=u*S+d*R+h*k+m*G,r[5]=u*A+d*P+h*N+m*Y,r[9]=u*x+d*D+h*O+m*te,r[13]=u*T+d*z+h*I+m*Z,r[2]=g*S+v*R+p*k+f*G,r[6]=g*A+v*P+p*N+f*Y,r[10]=g*x+v*D+p*O+f*te,r[14]=g*T+v*z+p*I+f*Z,r[3]=y*S+b*R+_*k+w*G,r[7]=y*A+b*P+_*N+w*Y,r[11]=y*x+b*D+_*O+w*te,r[15]=y*T+b*z+_*I+w*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],v=e[7],p=e[11],f=e[15],y=c*m-l*h,b=a*m-l*d,_=a*h-c*d,w=o*m-l*u,S=o*h-c*u,A=o*d-a*u;return t*(v*y-p*b+f*_)-i*(g*y-p*w+f*S)+s*(g*b-v*w+f*A)-r*(g*_-v*S+p*A)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],v=e[13],p=e[14],f=e[15],y=t*a-i*o,b=t*c-s*o,_=t*l-r*o,w=i*c-s*a,S=i*l-r*a,A=s*l-r*c,x=u*v-d*g,T=u*p-h*g,R=u*f-m*g,P=d*p-h*v,D=d*f-m*v,z=h*f-m*p,k=y*z-b*D+_*P+w*R-S*T+A*x;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/k;return e[0]=(a*z-c*D+l*P)*N,e[1]=(s*D-i*z-r*P)*N,e[2]=(v*A-p*S+f*w)*N,e[3]=(h*S-d*A-m*w)*N,e[4]=(c*R-o*z-l*T)*N,e[5]=(t*z-s*R+r*T)*N,e[6]=(p*_-g*A-f*b)*N,e[7]=(u*A-h*_+m*b)*N,e[8]=(o*D-a*R+l*x)*N,e[9]=(i*R-t*D-r*x)*N,e[10]=(g*S-v*_+f*y)*N,e[11]=(d*_-u*S-m*y)*N,e[12]=(a*T-o*P-c*x)*N,e[13]=(t*P-i*T+s*x)*N,e[14]=(v*b-g*w-p*y)*N,e[15]=(u*w-d*b+h*y)*N,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,h=r*l,m=r*u,g=r*d,v=o*u,p=o*d,f=a*d,y=c*l,b=c*u,_=c*d,w=i.x,S=i.y,A=i.z;return s[0]=(1-(v+f))*w,s[1]=(m+_)*w,s[2]=(g-b)*w,s[3]=0,s[4]=(m-_)*S,s[5]=(1-(h+f))*S,s[6]=(p+y)*S,s[7]=0,s[8]=(g+b)*A,s[9]=(p-y)*A,s[10]=(1-(h+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=$i.set(s[0],s[1],s[2]).length();const a=$i.set(s[4],s[5],s[6]).length(),c=$i.set(s[8],s[9],s[10]).length();r<0&&(o=-o),yn.copy(this);const l=1/o,u=1/a,d=1/c;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,t.setFromRotationMatrix(yn),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=kn,c=!1){const l=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),m=(i+s)/(i-s);let g,v;if(c)g=r/(o-r),v=o*r/(o-r);else if(a===kn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===pr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=kn,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),m=-(i+s)/(i-s);let g,v;if(c)g=1/(o-r),v=o/(o-r);else if(a===kn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===pr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Lo.prototype.isMatrix4=!0;let _t=Lo;const $i=new L,yn=new _t,Jp=new L(0,0,0),Qp=new L(1,1,1),di=new L,Dr=new L,an=new L,Zl=new _t,$l=new Ls;class Bi{constructor(e=0,t=0,i=0,s=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $l.setFromEuler(this),this.setFromQuaternion($l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class Jc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jp=0;const Kl=new L,Ki=new Ls,Yn=new _t,Ir=new L,Fs=new L,em=new L,tm=new Ls,Jl=new L(1,0,0),Ql=new L(0,1,0),jl=new L(0,0,1),eu={type:"added"},nm={type:"removed"},Ji={type:"childadded",child:null},Zo={type:"childremoved",child:null};class Nt extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new L,t=new Bi,i=new Ls,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new Je}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(Jl,e)}rotateY(e){return this.rotateOnAxis(Ql,e)}rotateZ(e){return this.rotateOnAxis(jl,e)}translateOnAxis(e,t){return Kl.copy(e).applyQuaternion(this.quaternion),this.position.add(Kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jl,e)}translateY(e){return this.translateOnAxis(Ql,e)}translateZ(e){return this.translateOnAxis(jl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ir.copy(e):Ir.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Fs,Ir,this.up):Yn.lookAt(Ir,Fs,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Yn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eu),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nm),Zo.child=e,this.dispatchEvent(Zo),Zo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eu),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,em),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,tm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Nt.DEFAULT_UP=new L(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ut extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const im={type:"move"};class $o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),f=this._getHandJoint(l,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(im)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ut;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function Ko(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=$c(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ko(o,r,e+1/3),this.g=Ko(o,r,e),this.b=Ko(o,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=Kt){function i(r){r!==void 0&&parseFloat(r)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const i=Hh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return at.workingToColorSpace(Zt.copy(this),e),Math.round(it(Zt.r*255,0,255))*65536+Math.round(it(Zt.g*255,0,255))*256+Math.round(it(Zt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(Zt.copy(this),t);const i=Zt.r,s=Zt.g,r=Zt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Kt){at.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,i=Zt.g,s=Zt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(Nr);const i=sr(fi.h,Nr.h,t),s=sr(fi.s,Nr.s,t),r=sr(fi.l,Nr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new ot;ot.NAMES=Hh;class wo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(e),this.density=t}clone(){return new wo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sm extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Sn=new L,Zn=new L,Jo=new L,$n=new L,Qi=new L,ji=new L,tu=new L,Qo=new L,jo=new L,ea=new L,ta=new Rt,na=new Rt,ia=new Rt;class vn{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Sn.subVectors(e,t),s.cross(Sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Sn.subVectors(s,t),Zn.subVectors(i,t),Jo.subVectors(e,t);const o=Sn.dot(Sn),a=Sn.dot(Zn),c=Sn.dot(Jo),l=Zn.dot(Zn),u=Zn.dot(Jo),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,m=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,$n.x),c.addScaledVector(o,$n.y),c.addScaledVector(a,$n.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return ta.setScalar(0),na.setScalar(0),ia.setScalar(0),ta.fromBufferAttribute(e,t),na.fromBufferAttribute(e,i),ia.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ta,r.x),o.addScaledVector(na,r.y),o.addScaledVector(ia,r.z),o}static isFrontFacing(e,t,i,s){return Sn.subVectors(i,t),Zn.subVectors(e,t),Sn.cross(Zn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Sn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return vn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Qi.subVectors(s,i),ji.subVectors(r,i),Qo.subVectors(e,i);const c=Qi.dot(Qo),l=ji.dot(Qo);if(c<=0&&l<=0)return t.copy(i);jo.subVectors(e,s);const u=Qi.dot(jo),d=ji.dot(jo);if(u>=0&&d<=u)return t.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Qi,o);ea.subVectors(e,r);const m=Qi.dot(ea),g=ji.dot(ea);if(g>=0&&m<=g)return t.copy(r);const v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ji,a);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return tu.subVectors(r,s),a=(d-u)/(d-u+(m-g)),t.copy(s).addScaledVector(tu,a);const f=1/(p+v+h);return o=v*f,a=h*f,t.copy(i).addScaledVector(Qi,o).addScaledVector(ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Gi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ur.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ur.copy(i.boundingBox)),Ur.applyMatrix4(e.matrixWorld),this.union(Ur)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),Fr.subVectors(this.max,Os),es.subVectors(e.a,Os),ts.subVectors(e.b,Os),ns.subVectors(e.c,Os),pi.subVectors(ts,es),mi.subVectors(ns,ts),bi.subVectors(es,ns);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-bi.z,bi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,bi.z,0,-bi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-bi.y,bi.x,0];return!sa(t,es,ts,ns,Fr)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,es,ts,ns,Fr))?!1:(Or.crossVectors(pi,mi),t=[Or.x,Or.y,Or.z],sa(t,es,ts,ns,Fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Kn=[new L,new L,new L,new L,new L,new L,new L,new L],bn=new L,Ur=new Gi,es=new L,ts=new L,ns=new L,pi=new L,mi=new L,bi=new L,Os=new L,Fr=new L,Or=new L,wi=new L;function sa(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){wi.fromArray(n,r);const a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),c=e.dot(wi),l=t.dot(wi),u=i.dot(wi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ut=new L,zr=new le;let rm=0;class mn extends Hi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yc,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=An(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Gh extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Vh extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class vt extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const om=new Gi,zs=new L,ra=new L;class Sr{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):om.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);const t=zs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(zs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(ra)),this.expandByPoint(zs.copy(e.center).sub(ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let am=0;const xn=new _t,oa=new Nt,is=new L,cn=new Gi,Bs=new Gi,Ht=new L;class Vt extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ep(e)?Vh:Gh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,i){return xn.makeTranslation(e,t,i),this.applyMatrix4(xn),this}scale(e,t,i){return xn.makeScale(e,t,i),this.applyMatrix4(xn),this}lookAt(e){return oa.lookAt(e),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(cn.min,Bs.min),cn.expandByPoint(Ht),Ht.addVectors(cn.max,Bs.max),cn.expandByPoint(Ht)):(cn.expandByPoint(Bs.min),cn.expandByPoint(Bs.max))}cn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ht));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ht.fromBufferAttribute(a,l),c&&(is.fromBufferAttribute(e,l),Ht.add(is)),s=Math.max(s,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new mn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let x=0;x<i.count;x++)a[x]=new L,c[x]=new L;const l=new L,u=new L,d=new L,h=new le,m=new le,g=new le,v=new L,p=new L;function f(x,T,R){l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,R),h.fromBufferAttribute(r,x),m.fromBufferAttribute(r,T),g.fromBufferAttribute(r,R),u.sub(l),d.sub(l),m.sub(h),g.sub(h);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(P),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(P),a[x].add(v),a[T].add(v),a[R].add(v),c[x].add(p),c[T].add(p),c[R].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,T=y.length;x<T;++x){const R=y[x],P=R.start,D=R.count;for(let z=P,k=P+D;z<k;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const b=new L,_=new L,w=new L,S=new L;function A(x){w.fromBufferAttribute(s,x),S.copy(w);const T=a[x];b.copy(T),b.sub(w.multiplyScalar(w.dot(T))).normalize(),_.crossVectors(S,T);const P=_.dot(c[x])<0?-1:1;o.setXYZW(x,b.x,b.y,b.z,P)}for(let x=0,T=y.length;x<T;++x){const R=y[x],P=R.start,D=R.count;for(let z=P,k=P+D;z<k;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,u=new L,d=new L;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let m=0,g=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*u;for(let f=0;f<u;f++)h[g++]=l[m++]}return new mn(h,u,d)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],m=e(h,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yc,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new L;class Eo{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=An(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){bo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Eo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){bo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let lm=0;class Ds extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=gs,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Ua,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(i.blending=this.blending),this.side!==yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Na&&(i.blendSrc=this.blendSrc),this.blendDst!==Ua&&(i.blendDst=this.blendDst),this.blendEquation!==Li&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new le().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wh extends Ds{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ss;const ks=new L,rs=new L,os=new L,as=new le,Hs=new le,Xh=new _t,Br=new L,Gs=new L,kr=new L,nu=new le,aa=new le,iu=new le;class um extends Nt{constructor(e=new Wh){if(super(),this.isSprite=!0,this.type="Sprite",ss===void 0){ss=new Vt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new cm(t,5);ss.setIndex([0,1,2,0,2,3]),ss.setAttribute("position",new Eo(i,3,0,!1)),ss.setAttribute("uv",new Eo(i,2,3,!1))}this.geometry=ss,this.material=e,this.center=new le(.5,.5),this.count=1}raycast(e,t){e.camera===null&&rt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rs.setFromMatrixScale(this.matrixWorld),Xh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rs.multiplyScalar(-os.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Hr(Br.set(-.5,-.5,0),os,o,rs,s,r),Hr(Gs.set(.5,-.5,0),os,o,rs,s,r),Hr(kr.set(.5,.5,0),os,o,rs,s,r),nu.set(0,0),aa.set(1,0),iu.set(1,1);let a=e.ray.intersectTriangle(Br,Gs,kr,!1,ks);if(a===null&&(Hr(Gs.set(-.5,.5,0),os,o,rs,s,r),aa.set(0,1),a=e.ray.intersectTriangle(Br,kr,Gs,!1,ks),a===null))return;const c=e.ray.origin.distanceTo(ks);c<e.near||c>e.far||t.push({distance:c,point:ks.clone(),uv:vn.getInterpolation(ks,Br,Gs,kr,nu,aa,iu,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Hr(n,e,t,i,s,r){as.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Hs.x=r*as.x-s*as.y,Hs.y=s*as.x+r*as.y):Hs.copy(as),n.copy(e),n.x+=Hs.x,n.y+=Hs.y,n.applyMatrix4(Xh)}const Jn=new L,ca=new L,Gr=new L,gi=new L,la=new L,Vr=new L,ua=new L;class qh{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ca.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(ca);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Gr),a=gi.dot(this.direction),c=-gi.dot(Gr),l=gi.lengthSq(),u=Math.abs(1-o*o);let d,h,m,g;if(u>0)if(d=o*c-a,h=o*a-c,g=r*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,m=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),m=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ca).addScaledVector(Gr,h),m}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),s=Jn.dot(Jn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,i,s,r){la.subVectors(t,e),Vr.subVectors(i,e),ua.crossVectors(la,Vr);let o=this.direction.dot(ua),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,e);const c=a*this.direction.dot(Vr.crossVectors(gi,Vr));if(c<0)return null;const l=a*this.direction.dot(la.cross(gi));if(l<0||c+l>o)return null;const u=-a*gi.dot(ua);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fn extends Ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const su=new _t,Ei=new qh,Wr=new Sr,ru=new L,Xr=new L,qr=new L,Yr=new L,ha=new L,Zr=new L,ou=new L,$r=new L;class Q extends Nt{constructor(e=new Vt,t=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Zr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(ha.fromBufferAttribute(d,e),o?Zr.addScaledVector(ha,u):Zr.addScaledVector(ha.sub(t),u))}t.add(Zr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wr.copy(i.boundingSphere),Wr.applyMatrix4(r),Ei.copy(e.ray).recast(e.near),!(Wr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Wr,ru)===null||Ei.origin.distanceToSquared(ru)>(e.far-e.near)**2))&&(su.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(su),!(i.boundingBox!==null&&Ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const p=h[g],f=o[p.materialIndex],y=Math.max(p.start,m.start),b=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let _=y,w=b;_<w;_+=3){const S=a.getX(_),A=a.getX(_+1),x=a.getX(_+2);s=Kr(this,f,e,i,l,u,d,S,A,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const y=a.getX(p),b=a.getX(p+1),_=a.getX(p+2);s=Kr(this,o,e,i,l,u,d,y,b,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const p=h[g],f=o[p.materialIndex],y=Math.max(p.start,m.start),b=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let _=y,w=b;_<w;_+=3){const S=_,A=_+1,x=_+2;s=Kr(this,f,e,i,l,u,d,S,A,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const y=p,b=p+1,_=p+2;s=Kr(this,o,e,i,l,u,d,y,b,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function hm(n,e,t,i,s,r,o,a){let c;if(e.side===en?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===yi,a),c===null)return null;$r.copy(a),$r.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo($r);return l<t.near||l>t.far?null:{distance:l,point:$r.clone(),object:n}}function Kr(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Xr),n.getVertexPosition(c,qr),n.getVertexPosition(l,Yr);const u=hm(n,e,t,i,Xr,qr,Yr,ou);if(u){const d=new L;vn.getBarycoord(ou,Xr,qr,Yr,d),s&&(u.uv=vn.getInterpolatedAttribute(s,a,c,l,d,new le)),r&&(u.uv1=vn.getInterpolatedAttribute(r,a,c,l,d,new le)),o&&(u.normal=vn.getInterpolatedAttribute(o,a,c,l,d,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new L,materialIndex:0};vn.getNormal(Xr,qr,Yr,h.normal),u.face=h,u.barycoord=d}return u}class Yh extends Xt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Gt,u=Gt,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class au extends mn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const cs=new _t,cu=new _t,Jr=[],lu=new Gi,dm=new _t,Vs=new Q,Ws=new Sr;class ln extends Q{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new au(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,dm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,cs),lu.copy(e.boundingBox).applyMatrix4(cs),this.boundingBox.union(lu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,cs),Ws.copy(e.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(Ws)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ws.copy(this.boundingSphere),Ws.applyMatrix4(i),e.ray.intersectsSphere(Ws)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cs),cu.multiplyMatrices(i,cs),Vs.matrixWorld=cu,Vs.raycast(e,Jr);for(let o=0,a=Jr.length;o<a;o++){const c=Jr[o];c.instanceId=r,c.object=this,t.push(c)}Jr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new au(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Yh(new Float32Array(s*this.count),s,this.count,Vc,Rn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const da=new L,fm=new L,pm=new Je;class Ci{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=da.subVectors(i,t).cross(fm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(da),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||pm.getNormalMatrix(e),s=this.coplanarPoint(da).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Sr,mm=new le(.5,.5),Qr=new L;class Qc{constructor(e=new Ci,t=new Ci,i=new Ci,s=new Ci,r=new Ci,o=new Ci){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=kn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],m=r[7],g=r[8],v=r[9],p=r[10],f=r[11],y=r[12],b=r[13],_=r[14],w=r[15];if(s[0].setComponents(l-o,m-u,f-g,w-y).normalize(),s[1].setComponents(l+o,m+u,f+g,w+y).normalize(),s[2].setComponents(l+a,m+d,f+v,w+b).normalize(),s[3].setComponents(l-a,m-d,f-v,w-b).normalize(),i)s[4].setComponents(c,h,p,_).normalize(),s[5].setComponents(l-c,m-h,f-p,w-_).normalize();else if(s[4].setComponents(l-c,m-h,f-p,w-_).normalize(),t===kn)s[5].setComponents(l+c,m+h,f+p,w+_).normalize();else if(t===pr)s[5].setComponents(c,h,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){Ti.center.set(0,0,0);const t=mm.distanceTo(e.center);return Ti.radius=.7071067811865476+t,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Qr.x=s.normal.x>0?e.max.x:e.min.x,Qr.y=s.normal.y>0?e.max.y:e.min.y,Qr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zh extends Xt{constructor(e=[],t=Oi,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gr extends Xt{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ts extends Xt{constructor(e,t,i=Wn,s,r,o,a=Gt,c=Gt,l,u=ai,d=1){if(u!==ai&&u!==Ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gm extends Ts{constructor(e,t=Wn,i=Oi,s,r,o=Gt,a=Gt,c,l=ai){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class $h extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class et extends Vt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(d,2));function g(v,p,f,y,b,_,w,S,A,x,T){const R=_/A,P=w/x,D=_/2,z=w/2,k=S/2,N=A+1,O=x+1;let I=0,G=0;const Y=new L;for(let te=0;te<O;te++){const Z=te*P-z;for(let ue=0;ue<N;ue++){const Ge=ue*R-D;Y[v]=Ge*y,Y[p]=Z*b,Y[f]=k,l.push(Y.x,Y.y,Y.z),Y[v]=0,Y[p]=0,Y[f]=S>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(ue/A),d.push(1-te/x),I+=1}}for(let te=0;te<x;te++)for(let Z=0;Z<A;Z++){const ue=h+Z+N*te,Ge=h+Z+N*(te+1),Ue=h+(Z+1)+N*(te+1),Pe=h+(Z+1)+N*te;c.push(ue,Ge,Pe),c.push(Ge,Ue,Pe),G+=6}a.addGroup(m,G,T),m+=G,h+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new et(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class dt extends Vt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],m=[];let g=0;const v=[],p=i/2;let f=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(m,2));function y(){const _=new L,w=new L;let S=0;const A=(t-e)/i;for(let x=0;x<=r;x++){const T=[],R=x/r,P=R*(t-e)+e;for(let D=0;D<=s;D++){const z=D/s,k=z*c+a,N=Math.sin(k),O=Math.cos(k);w.x=P*N,w.y=-R*i+p,w.z=P*O,d.push(w.x,w.y,w.z),_.set(N,A,O).normalize(),h.push(_.x,_.y,_.z),m.push(z,1-R),T.push(g++)}v.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){const R=v[T][x],P=v[T+1][x],D=v[T+1][x+1],z=v[T][x+1];(e>0||T!==0)&&(u.push(R,P,z),S+=3),(t>0||T!==r-1)&&(u.push(P,D,z),S+=3)}l.addGroup(f,S,0),f+=S}function b(_){const w=g,S=new le,A=new L;let x=0;const T=_===!0?e:t,R=_===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,p*R,0),h.push(0,R,0),m.push(.5,.5),g++;const P=g;for(let D=0;D<=s;D++){const k=D/s*c+a,N=Math.cos(k),O=Math.sin(k);A.x=T*O,A.y=p*R,A.z=T*N,d.push(A.x,A.y,A.z),h.push(0,R,0),S.x=N*.5+.5,S.y=O*.5*R+.5,m.push(S.x,S.y),g++}for(let D=0;D<s;D++){const z=w+D,k=P+D;_===!0?u.push(k,k+1,z):u.push(k+1,k,z),x+=3}l.addGroup(f,x,_===!0?1:2),f+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $t extends dt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new $t(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jc extends Vt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new vt(r,3)),this.setAttribute("normal",new vt(r.slice(),3)),this.setAttribute("uv",new vt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const b=new L,_=new L,w=new L;for(let S=0;S<t.length;S+=3)m(t[S+0],b),m(t[S+1],_),m(t[S+2],w),c(b,_,w,y)}function c(y,b,_,w){const S=w+1,A=[];for(let x=0;x<=S;x++){A[x]=[];const T=y.clone().lerp(_,x/S),R=b.clone().lerp(_,x/S),P=S-x;for(let D=0;D<=P;D++)D===0&&x===S?A[x][D]=T:A[x][D]=T.clone().lerp(R,D/P)}for(let x=0;x<S;x++)for(let T=0;T<2*(S-x)-1;T++){const R=Math.floor(T/2);T%2===0?(h(A[x][R+1]),h(A[x+1][R]),h(A[x][R])):(h(A[x][R+1]),h(A[x+1][R+1]),h(A[x+1][R]))}}function l(y){const b=new L;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(y),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function u(){const y=new L;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];const _=p(y)/2/Math.PI+.5,w=f(y)/Math.PI+.5;o.push(_,1-w)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){const b=o[y+0],_=o[y+2],w=o[y+4],S=Math.max(b,_,w),A=Math.min(b,_,w);S>.9&&A<.1&&(b<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function m(y,b){const _=y*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function g(){const y=new L,b=new L,_=new L,w=new L,S=new le,A=new le,x=new le;for(let T=0,R=0;T<r.length;T+=9,R+=6){y.set(r[T+0],r[T+1],r[T+2]),b.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),S.set(o[R+0],o[R+1]),A.set(o[R+2],o[R+3]),x.set(o[R+4],o[R+5]),w.copy(y).add(b).add(_).divideScalar(3);const P=p(w);v(S,R+0,y,P),v(A,R+2,b,P),v(x,R+4,_,P)}}function v(y,b,_,w){w<0&&y.x===1&&(o[b]=y.x-1),_.x===0&&_.z===0&&(o[b]=w/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.vertices,e.indices,e.radius,e.detail)}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,m=(o-u)/h;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new le:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new L,s=[],r=[],o=[],a=new L,c=new _t;for(let m=0;m<=e;m++){const g=m/e;s[m]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(it(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(it(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class el extends Xn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new le){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,m=l-this.aY;c=h*u-m*d+this.aX,l=h*d+m*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class xm extends el{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function tl(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,m=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,m*=u,s(o,a,h,m)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const uu=new L,hu=new L,fa=new tl,pa=new tl,ma=new tl;class To extends Xn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(hu.subVectors(s[0],s[1]).add(s[0]),l=hu);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(uu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=uu),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),m),v=Math.pow(d.distanceToSquared(h),m),p=Math.pow(h.distanceToSquared(u),m);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),fa.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,v,p),pa.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,v,p),ma.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,v,p)}else this.curveType==="catmullrom"&&(fa.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),pa.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),ma.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return i.set(fa.calc(c),pa.calc(c),ma.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function du(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function _m(n,e){const t=1-n;return t*t*e}function vm(n,e){return 2*(1-n)*n*e}function Mm(n,e){return n*n*e}function rr(n,e,t,i){return _m(n,e)+vm(n,t)+Mm(n,i)}function ym(n,e){const t=1-n;return t*t*t*e}function Sm(n,e){const t=1-n;return 3*t*t*n*e}function bm(n,e){return 3*(1-n)*n*n*e}function wm(n,e){return n*n*n*e}function or(n,e,t,i,s){return ym(n,e)+Sm(n,t)+bm(n,i)+wm(n,s)}class Kh extends Xn{constructor(e=new le,t=new le,i=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new le){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(or(e,s.x,r.x,o.x,a.x),or(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Em extends Xn{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(or(e,s.x,r.x,o.x,a.x),or(e,s.y,r.y,o.y,a.y),or(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Jh extends Xn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qh extends Xn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jh extends Xn{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(rr(e,s.x,r.x,o.x),rr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ed extends Xn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(rr(e,s.x,r.x,o.x),rr(e,s.y,r.y,o.y),rr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class td extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(du(a,c.x,l.x,u.x,d.x),du(a,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new le().fromArray(s))}return this}}var Ao=Object.freeze({__proto__:null,ArcCurve:xm,CatmullRomCurve3:To,CubicBezierCurve:Kh,CubicBezierCurve3:Em,EllipseCurve:el,LineCurve:Jh,LineCurve3:Qh,QuadraticBezierCurve:jh,QuadraticBezierCurve3:ed,SplineCurve:td});class Tm extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ao[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Ao[s.type]().fromJSON(s))}return this}}class Sc extends Tm{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Jh(this.currentPoint.clone(),new le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new jh(this.currentPoint.clone(),new le(e,t),new le(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Kh(this.currentPoint.clone(),new le(e,t),new le(i,s),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new td(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){const l=new el(e,t,i,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class bc extends Sc{constructor(e){super(e),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Sc().fromJSON(s))}return this}}function Am(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=nd(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=Dm(n,e,r,t)),n.length>80*t){a=n[0],c=n[1];let u=a,d=c;for(let h=t;h<s;h+=t){const m=n[h],g=n[h+1];m<a&&(a=m),g<c&&(c=g),m>u&&(u=m),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return xr(r,o,t,a,c,l,0),o}function nd(n,e,t,i,s){let r;if(s===Vm(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=fu(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=fu(o/i|0,n[o],n[o+1],r);return r&&As(r,r.next)&&(vr(r),r=r.next),r}function ki(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(As(t,t.next)||Ct(t.prev,t,t.next)===0)){if(vr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function xr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Om(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?Cm(n,i,s,r):Rm(n)){e.push(c.i,n.i,l.i),vr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Pm(ki(n),e),xr(n,e,t,i,s,r,2)):o===2&&Lm(n,e,t,i,s,r):xr(ki(n),e,t,i,s,r,1);break}}}function Rm(n){const e=n.prev,t=n,i=n.next;if(Ct(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(s,r,o),d=Math.min(a,c,l),h=Math.max(s,r,o),m=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=m&&js(s,a,r,c,o,l,g.x,g.y)&&Ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Cm(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Ct(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,h=o.y,m=Math.min(a,c,l),g=Math.min(u,d,h),v=Math.max(a,c,l),p=Math.max(u,d,h),f=wc(m,g,e,t,i),y=wc(v,p,e,t,i);let b=n.prevZ,_=n.nextZ;for(;b&&b.z>=f&&_&&_.z<=y;){if(b.x>=m&&b.x<=v&&b.y>=g&&b.y<=p&&b!==s&&b!==o&&js(a,u,c,d,l,h,b.x,b.y)&&Ct(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=m&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&js(a,u,c,d,l,h,_.x,_.y)&&Ct(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=f;){if(b.x>=m&&b.x<=v&&b.y>=g&&b.y<=p&&b!==s&&b!==o&&js(a,u,c,d,l,h,b.x,b.y)&&Ct(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=y;){if(_.x>=m&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&js(a,u,c,d,l,h,_.x,_.y)&&Ct(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Pm(n,e){let t=n;do{const i=t.prev,s=t.next.next;!As(i,s)&&sd(i,t,t.next,s)&&_r(i,s)&&_r(s,i)&&(e.push(i.i,t.i,s.i),vr(t),vr(t.next),t=n=s),t=t.next}while(t!==n);return ki(t)}function Lm(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&km(o,a)){let c=rd(o,a);o=ki(o,o.next),c=ki(c,c.next),xr(o,e,t,i,s,r,0),xr(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Dm(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=nd(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Bm(l))}s.sort(Im);for(let r=0;r<s.length;r++)t=Nm(s[r],t);return t}function Im(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Nm(n,e){const t=Um(n,e);if(!t)return e;const i=rd(t,n);return ki(i,i.next),ki(t,t.next)}function Um(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(As(n,t))return t;do{if(As(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&id(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){const d=Math.abs(s-t.y)/(i-t.x);_r(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&Fm(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function Fm(n,e){return Ct(n.prev,n,e.prev)<0&&Ct(e.next,n,n.next)<0}function Om(n,e,t,i){let s=n;do s.z===0&&(s.z=wc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,zm(s)}function zm(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function wc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Bm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function id(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function js(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&id(n,e,t,i,s,r,o,a)}function km(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Hm(n,e)&&(_r(n,e)&&_r(e,n)&&Gm(n,e)&&(Ct(n.prev,n,e.prev)||Ct(n,e.prev,e))||As(n,e)&&Ct(n.prev,n,n.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function As(n,e){return n.x===e.x&&n.y===e.y}function sd(n,e,t,i){const s=eo(Ct(n,e,t)),r=eo(Ct(n,e,i)),o=eo(Ct(t,i,n)),a=eo(Ct(t,i,e));return!!(s!==r&&o!==a||s===0&&jr(n,t,e)||r===0&&jr(n,i,e)||o===0&&jr(t,n,i)||a===0&&jr(t,e,i))}function jr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function eo(n){return n>0?1:n<0?-1:0}function Hm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&sd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function _r(n,e){return Ct(n.prev,n,n.next)<0?Ct(n,e,n.next)>=0&&Ct(n,n.prev,e)>=0:Ct(n,e,n.prev)<0||Ct(n,n.next,e)<0}function Gm(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function rd(n,e){const t=Ec(n.i,n.x,n.y),i=Ec(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function fu(n,e,t,i){const s=Ec(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function vr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ec(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Vm(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Wm{static triangulate(e,t,i=2){return Am(e,t,i)}}class ms{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return ms.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];pu(e),mu(i,e);let o=e.length;t.forEach(pu);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,mu(i,t[c]);const a=Wm.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function pu(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function mu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Ro extends Vt{constructor(e=new bc([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new vt(s,3)),this.setAttribute("uv",new vt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Xm;let b,_=!1,w,S,A,x;if(f){b=f.getSpacedPoints(u),_=!0,h=!1;const ne=f.isCatmullRomCurve3?f.closed:!1;w=f.computeFrenetFrames(u,ne),S=new L,A=new L,x=new L}h||(p=0,m=0,g=0,v=0);const T=a.extractPoints(l);let R=T.shape;const P=T.holes;if(!ms.isClockWise(R)){R=R.reverse();for(let ne=0,re=P.length;ne<re;ne++){const se=P[ne];ms.isClockWise(se)&&(P[ne]=se.reverse())}}function z(ne){const se=10000000000000001e-36;let be=ne[0];for(let ve=1;ve<=ne.length;ve++){const qe=ve%ne.length,Oe=ne[qe],$e=Oe.x-be.x,Ke=Oe.y-be.y,U=$e*$e+Ke*Ke,gt=Math.max(Math.abs(Oe.x),Math.abs(Oe.y),Math.abs(be.x),Math.abs(be.y)),st=se*gt*gt;if(U<=st){ne.splice(qe,1),ve--;continue}be=Oe}}z(R),P.forEach(z);const k=P.length,N=R;for(let ne=0;ne<k;ne++){const re=P[ne];R=R.concat(re)}function O(ne,re,se){return re||rt("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(re,se)}const I=R.length;function G(ne,re,se){let be,ve,qe;const Oe=ne.x-re.x,$e=ne.y-re.y,Ke=se.x-ne.x,U=se.y-ne.y,gt=Oe*Oe+$e*$e,st=Oe*U-$e*Ke;if(Math.abs(st)>Number.EPSILON){const C=Math.sqrt(gt),M=Math.sqrt(Ke*Ke+U*U),H=re.x-$e/C,X=re.y+Oe/C,$=se.x-U/M,ce=se.y+Ke/M,de=(($-H)*U-(ce-X)*Ke)/(Oe*U-$e*Ke);be=H+Oe*de-ne.x,ve=X+$e*de-ne.y;const K=be*be+ve*ve;if(K<=2)return new le(be,ve);qe=Math.sqrt(K/2)}else{let C=!1;Oe>Number.EPSILON?Ke>Number.EPSILON&&(C=!0):Oe<-Number.EPSILON?Ke<-Number.EPSILON&&(C=!0):Math.sign($e)===Math.sign(U)&&(C=!0),C?(be=-$e,ve=Oe,qe=Math.sqrt(gt)):(be=Oe,ve=$e,qe=Math.sqrt(gt/2))}return new le(be/qe,ve/qe)}const Y=[];for(let ne=0,re=N.length,se=re-1,be=ne+1;ne<re;ne++,se++,be++)se===re&&(se=0),be===re&&(be=0),Y[ne]=G(N[ne],N[se],N[be]);const te=[];let Z,ue=Y.concat();for(let ne=0,re=k;ne<re;ne++){const se=P[ne];Z=[];for(let be=0,ve=se.length,qe=ve-1,Oe=be+1;be<ve;be++,qe++,Oe++)qe===ve&&(qe=0),Oe===ve&&(Oe=0),Z[be]=G(se[be],se[qe],se[Oe]);te.push(Z),ue=ue.concat(Z)}let Ge;if(p===0)Ge=ms.triangulateShape(N,P);else{const ne=[],re=[];for(let se=0;se<p;se++){const be=se/p,ve=m*Math.cos(be*Math.PI/2),qe=g*Math.sin(be*Math.PI/2)+v;for(let Oe=0,$e=N.length;Oe<$e;Oe++){const Ke=O(N[Oe],Y[Oe],qe);Ie(Ke.x,Ke.y,-ve),be===0&&ne.push(Ke)}for(let Oe=0,$e=k;Oe<$e;Oe++){const Ke=P[Oe];Z=te[Oe];const U=[];for(let gt=0,st=Ke.length;gt<st;gt++){const C=O(Ke[gt],Z[gt],qe);Ie(C.x,C.y,-ve),be===0&&U.push(C)}be===0&&re.push(U)}}Ge=ms.triangulateShape(ne,re)}const Ue=Ge.length,Pe=g+v;for(let ne=0;ne<I;ne++){const re=h?O(R[ne],ue[ne],Pe):R[ne];_?(A.copy(w.normals[0]).multiplyScalar(re.x),S.copy(w.binormals[0]).multiplyScalar(re.y),x.copy(b[0]).add(A).add(S),Ie(x.x,x.y,x.z)):Ie(re.x,re.y,0)}for(let ne=1;ne<=u;ne++)for(let re=0;re<I;re++){const se=h?O(R[re],ue[re],Pe):R[re];_?(A.copy(w.normals[ne]).multiplyScalar(se.x),S.copy(w.binormals[ne]).multiplyScalar(se.y),x.copy(b[ne]).add(A).add(S),Ie(x.x,x.y,x.z)):Ie(se.x,se.y,d/u*ne)}for(let ne=p-1;ne>=0;ne--){const re=ne/p,se=m*Math.cos(re*Math.PI/2),be=g*Math.sin(re*Math.PI/2)+v;for(let ve=0,qe=N.length;ve<qe;ve++){const Oe=O(N[ve],Y[ve],be);Ie(Oe.x,Oe.y,d+se)}for(let ve=0,qe=P.length;ve<qe;ve++){const Oe=P[ve];Z=te[ve];for(let $e=0,Ke=Oe.length;$e<Ke;$e++){const U=O(Oe[$e],Z[$e],be);_?Ie(U.x,U.y+b[u-1].y,b[u-1].x+se):Ie(U.x,U.y,d+se)}}}J(),he();function J(){const ne=s.length/3;if(h){let re=0,se=I*re;for(let be=0;be<Ue;be++){const ve=Ge[be];We(ve[2]+se,ve[1]+se,ve[0]+se)}re=u+p*2,se=I*re;for(let be=0;be<Ue;be++){const ve=Ge[be];We(ve[0]+se,ve[1]+se,ve[2]+se)}}else{for(let re=0;re<Ue;re++){const se=Ge[re];We(se[2],se[1],se[0])}for(let re=0;re<Ue;re++){const se=Ge[re];We(se[0]+I*u,se[1]+I*u,se[2]+I*u)}}i.addGroup(ne,s.length/3-ne,0)}function he(){const ne=s.length/3;let re=0;oe(N,re),re+=N.length;for(let se=0,be=P.length;se<be;se++){const ve=P[se];oe(ve,re),re+=ve.length}i.addGroup(ne,s.length/3-ne,1)}function oe(ne,re){let se=ne.length;for(;--se>=0;){const be=se;let ve=se-1;ve<0&&(ve=ne.length-1);for(let qe=0,Oe=u+p*2;qe<Oe;qe++){const $e=I*qe,Ke=I*(qe+1),U=re+be+$e,gt=re+ve+$e,st=re+ve+Ke,C=re+be+Ke;_e(U,gt,st,C)}}}function Ie(ne,re,se){c.push(ne),c.push(re),c.push(se)}function We(ne,re,se){ct(ne),ct(re),ct(se);const be=s.length/3,ve=y.generateTopUV(i,s,be-3,be-2,be-1);Xe(ve[0]),Xe(ve[1]),Xe(ve[2])}function _e(ne,re,se,be){ct(ne),ct(re),ct(be),ct(re),ct(se),ct(be);const ve=s.length/3,qe=y.generateSideWallUV(i,s,ve-6,ve-3,ve-2,ve-1);Xe(qe[0]),Xe(qe[1]),Xe(qe[3]),Xe(qe[1]),Xe(qe[2]),Xe(qe[3])}function ct(ne){s.push(c[ne*3+0]),s.push(c[ne*3+1]),s.push(c[ne*3+2])}function Xe(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return qm(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ao[s.type]().fromJSON(s)),new Ro(i,e.options)}}const Xm={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],u=e[s*3+1];return[new le(r,o),new le(a,c),new le(l,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],m=e[s*3+1],g=e[s*3+2],v=e[r*3],p=e[r*3+1],f=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new le(o,1-c),new le(l,1-d),new le(h,1-g),new le(v,1-f)]:[new le(a,1-c),new le(u,1-d),new le(m,1-g),new le(p,1-f)]}};function qm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ar extends jc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ar(e.radius,e.detail)}}class dn extends Vt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=e/a,h=t/c,m=[],g=[],v=[],p=[];for(let f=0;f<u;f++){const y=f*h-o;for(let b=0;b<l;b++){const _=b*d-r;g.push(_,-y,0),v.push(0,0,1),p.push(b/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<a;y++){const b=y+l*f,_=y+l*(f+1),w=y+1+l*(f+1),S=y+1+l*f;m.push(b,_,S),m.push(_,w,S)}this.setIndex(m),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(v,3)),this.setAttribute("uv",new vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.width,e.height,e.widthSegments,e.heightSegments)}}class ht extends Vt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new L,h=new L,m=[],g=[],v=[],p=[];for(let f=0;f<=i;f++){const y=[],b=f/i,_=o+b*a,w=e*Math.cos(_),S=Math.sqrt(e*e-w*w);let A=0;f===0&&o===0?A=.5/t:f===i&&c===Math.PI&&(A=-.5/t);for(let x=0;x<=t;x++){const T=x/t,R=s+T*r;d.x=-S*Math.cos(R),d.y=w,d.z=S*Math.sin(R),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),p.push(T+A,1-b),y.push(l++)}u.push(y)}for(let f=0;f<i;f++)for(let y=0;y<t;y++){const b=u[f][y+1],_=u[f][y],w=u[f+1][y],S=u[f+1][y+1];(f!==0||o>0)&&m.push(b,_,S),(f!==i-1||c<Math.PI)&&m.push(_,w,S)}this.setIndex(m),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(v,3)),this.setAttribute("uv",new vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ht(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wn extends Vt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],d=[],h=new L,m=new L,g=new L;for(let v=0;v<=i;v++){const p=o+v/i*a;for(let f=0;f<=s;f++){const y=f/s*r;m.x=(e+t*Math.cos(p))*Math.cos(y),m.y=(e+t*Math.cos(p))*Math.sin(y),m.z=t*Math.sin(p),l.push(m.x,m.y,m.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),g.subVectors(m,h).normalize(),u.push(g.x,g.y,g.z),d.push(f/s),d.push(v/i)}}for(let v=1;v<=i;v++)for(let p=1;p<=s;p++){const f=(s+1)*v+p-1,y=(s+1)*(v-1)+p-1,b=(s+1)*(v-1)+p,_=(s+1)*v+p;c.push(f,y,_),c.push(y,b,_)}this.setIndex(c),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class vs extends Vt{constructor(e=new ed(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,c=new L,l=new le;let u=new L;const d=[],h=[],m=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(m,2));function v(){for(let b=0;b<t;b++)p(b);p(r===!1?t:0),y(),f()}function p(b){u=e.getPointAt(b/t,u);const _=o.normals[b],w=o.binormals[b];for(let S=0;S<=s;S++){const A=S/s*Math.PI*2,x=Math.sin(A),T=-Math.cos(A);c.x=T*_.x+x*w.x,c.y=T*_.y+x*w.y,c.z=T*_.z+x*w.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,d.push(a.x,a.y,a.z)}}function f(){for(let b=1;b<=t;b++)for(let _=1;_<=s;_++){const w=(s+1)*(b-1)+(_-1),S=(s+1)*b+(_-1),A=(s+1)*b+_,x=(s+1)*(b-1)+_;g.push(w,S,x),g.push(S,A,x)}}function y(){for(let b=0;b<=t;b++)for(let _=0;_<=s;_++)l.x=b/t,l.y=_/s,m.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new vs(new Ao[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Rs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(gu(s))s.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(gu(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function jt(n){const e={};for(let t=0;t<n.length;t++){const i=Rs(n[t]);for(const s in i)e[s]=i[s]}return e}function gu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ym(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function od(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const Zm={clone:Rs,merge:jt};var $m=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends Ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$m,this.fragmentShader=Km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=Ym(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ot().setHex(s.value);break;case"v2":this.uniforms[i].value=new le().fromArray(s.value);break;case"v3":this.uniforms[i].value=new L().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Rt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Je().fromArray(s.value);break;case"m4":this.uniforms[i].value=new _t().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Jm extends Mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Cs extends Ds{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ot(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Qm extends Ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jm extends Ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class nl extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class e0 extends nl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ga=new _t,xu=new L,_u=new L;class ad{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qc,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;xu.setFromMatrixPosition(e.matrixWorld),t.position.copy(xu),_u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_u),t.updateMatrixWorld(),ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===pr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const to=new L,no=new Ls,In=new L;class cd extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(to,no,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(to,no,In.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(to,no,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(to,no,In.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xi=new L,vu=new le,Mu=new le;class fn extends cd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,vu,Mu),t.subVectors(Mu,vu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ir*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class t0 extends ad{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0}}class n0 extends nl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new t0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class il extends cd{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class i0 extends ad{constructor(){super(new il(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class s0 extends nl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new i0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const ls=-90,us=1;class r0 extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(ls,us,e,t);s.layers=this.layers,this.add(s);const r=new fn(ls,us,e,t);r.layers=this.layers,this.add(r);const o=new fn(ls,us,e,t);o.layers=this.layers,this.add(o);const a=new fn(ls,us,e,t);a.layers=this.layers,this.add(a);const c=new fn(ls,us,e,t);c.layers=this.layers,this.add(c);const l=new fn(ls,us,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===pr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class o0 extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const yu=new _t;class a0{constructor(e,t,i=0,s=1/0){this.ray=new qh(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Jc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):rt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yu),this}intersectObject(e,t=!0,i=[]){return Tc(e,this,i,t),i.sort(Su),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Tc(e[s],this,i,t);return i.sort(Su),i}}function Su(n,e){return n.distance-e.distance}function Tc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Tc(r[o],e,t,!0)}}const fl=class fl{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};fl.prototype.isMatrix2=!0;let bu=fl;function wu(n,e,t,i){const s=c0(i);switch(t){case Oh:return n*e;case Vc:return n*e/s.components*s.byteLength;case Wc:return n*e/s.components*s.byteLength;case zi:return n*e*2/s.components*s.byteLength;case Xc:return n*e*2/s.components*s.byteLength;case zh:return n*e*3/s.components*s.byteLength;case Cn:return n*e*4/s.components*s.byteLength;case qc:return n*e*4/s.components*s.byteLength;case co:case lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uo:case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xa:case Ya:return Math.max(n,16)*Math.max(e,8)/4;case Wa:case qa:return Math.max(n,8)*Math.max(e,8)/2;case Za:case $a:case Ja:case Qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ka:case _o:case ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case nc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ic:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case rc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case oc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ac:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case lc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case uc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case hc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case dc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case fc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case pc:case mc:case gc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case xc:case _c:return Math.ceil(n/4)*Math.ceil(e/4)*8;case vo:case vc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function c0(n){switch(n){case pn:case Ih:return{byteLength:1,components:1};case dr:case Nh:case oi:return{byteLength:2,components:1};case Hc:case Gc:return{byteLength:2,components:4};case Wn:case kc:case Rn:return{byteLength:4,components:1};case Uh:case Fh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ld(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function l0(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<d.length;m++){const g=d[h],v=d[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let m=0,g=d.length;m<g;m++){const v=d[m];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var u0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h0=`#ifdef USE_ALPHAHASH
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
#endif`,d0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g0=`#ifdef USE_AOMAP
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
#endif`,x0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_0=`#ifdef USE_BATCHING
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
#endif`,v0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,b0=`#ifdef USE_IRIDESCENCE
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
#endif`,w0=`#ifdef USE_BUMPMAP
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,I0=`#define PI 3.141592653589793
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
} // validated`,N0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,U0=`vec3 transformedNormal = objectNormal;
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
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k0="gl_FragColor = linearToOutputTexel( gl_FragColor );",H0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J0=`#ifdef USE_GRADIENTMAP
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
}`,Q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ng=`#ifdef USE_ENVMAP
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
#endif`,ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ag=`PhysicalMaterial material;
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
#endif`,cg=`uniform sampler2D dfgLUT;
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
}`,lg=`
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
#endif`,ug=`#if defined( RE_IndirectDiffuse )
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
#endif`,hg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mg=`#if defined( USE_POINTS_UV )
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
#endif`,yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ag=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ig=`#ifdef USE_NORMALMAP
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
#endif`,Ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ug=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Og=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$g=`float getShadowMask() {
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
}`,Kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jg=`#ifdef USE_SKINNING
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
#endif`,Qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jg=`#ifdef USE_SKINNING
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
#endif`,ex=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ix=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sx=`#ifdef USE_TRANSMISSION
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
#endif`,rx=`#ifdef USE_TRANSMISSION
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
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ux=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hx=`uniform sampler2D t2D;
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`#include <common>
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
}`,xx=`#if DEPTH_PACKING == 3200
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
}`,_x=`#define DISTANCE
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
}`,vx=`#define DISTANCE
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
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`uniform float scale;
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
}`,bx=`uniform vec3 diffuse;
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
}`,wx=`#include <common>
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
}`,Ex=`uniform vec3 diffuse;
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
}`,Tx=`#define LAMBERT
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
}`,Ax=`#define LAMBERT
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
}`,Rx=`#define MATCAP
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
}`,Cx=`#define MATCAP
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
}`,Px=`#define NORMAL
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
}`,Lx=`#define NORMAL
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
}`,Dx=`#define PHONG
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
}`,Ix=`#define PHONG
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
}`,Nx=`#define STANDARD
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
}`,Ux=`#define STANDARD
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
}`,Fx=`#define TOON
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
}`,Ox=`#define TOON
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
}`,zx=`uniform float size;
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
}`,Bx=`uniform vec3 diffuse;
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
}`,kx=`#include <common>
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
}`,Hx=`uniform vec3 color;
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
}`,Gx=`uniform float rotation;
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
}`,Vx=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:u0,alphahash_pars_fragment:h0,alphamap_fragment:d0,alphamap_pars_fragment:f0,alphatest_fragment:p0,alphatest_pars_fragment:m0,aomap_fragment:g0,aomap_pars_fragment:x0,batching_pars_vertex:_0,batching_vertex:v0,begin_vertex:M0,beginnormal_vertex:y0,bsdfs:S0,iridescence_fragment:b0,bumpmap_pars_fragment:w0,clipping_planes_fragment:E0,clipping_planes_pars_fragment:T0,clipping_planes_pars_vertex:A0,clipping_planes_vertex:R0,color_fragment:C0,color_pars_fragment:P0,color_pars_vertex:L0,color_vertex:D0,common:I0,cube_uv_reflection_fragment:N0,defaultnormal_vertex:U0,displacementmap_pars_vertex:F0,displacementmap_vertex:O0,emissivemap_fragment:z0,emissivemap_pars_fragment:B0,colorspace_fragment:k0,colorspace_pars_fragment:H0,envmap_fragment:G0,envmap_common_pars_fragment:V0,envmap_pars_fragment:W0,envmap_pars_vertex:X0,envmap_physical_pars_fragment:ng,envmap_vertex:q0,fog_vertex:Y0,fog_pars_vertex:Z0,fog_fragment:$0,fog_pars_fragment:K0,gradientmap_pars_fragment:J0,lightmap_pars_fragment:Q0,lights_lambert_fragment:j0,lights_lambert_pars_fragment:eg,lights_pars_begin:tg,lights_toon_fragment:ig,lights_toon_pars_fragment:sg,lights_phong_fragment:rg,lights_phong_pars_fragment:og,lights_physical_fragment:ag,lights_physical_pars_fragment:cg,lights_fragment_begin:lg,lights_fragment_maps:ug,lights_fragment_end:hg,lightprobes_pars_fragment:dg,logdepthbuf_fragment:fg,logdepthbuf_pars_fragment:pg,logdepthbuf_pars_vertex:mg,logdepthbuf_vertex:gg,map_fragment:xg,map_pars_fragment:_g,map_particle_fragment:vg,map_particle_pars_fragment:Mg,metalnessmap_fragment:yg,metalnessmap_pars_fragment:Sg,morphinstance_vertex:bg,morphcolor_vertex:wg,morphnormal_vertex:Eg,morphtarget_pars_vertex:Tg,morphtarget_vertex:Ag,normal_fragment_begin:Rg,normal_fragment_maps:Cg,normal_pars_fragment:Pg,normal_pars_vertex:Lg,normal_vertex:Dg,normalmap_pars_fragment:Ig,clearcoat_normal_fragment_begin:Ng,clearcoat_normal_fragment_maps:Ug,clearcoat_pars_fragment:Fg,iridescence_pars_fragment:Og,opaque_fragment:zg,packing:Bg,premultiplied_alpha_fragment:kg,project_vertex:Hg,dithering_fragment:Gg,dithering_pars_fragment:Vg,roughnessmap_fragment:Wg,roughnessmap_pars_fragment:Xg,shadowmap_pars_fragment:qg,shadowmap_pars_vertex:Yg,shadowmap_vertex:Zg,shadowmask_pars_fragment:$g,skinbase_vertex:Kg,skinning_pars_vertex:Jg,skinning_vertex:Qg,skinnormal_vertex:jg,specularmap_fragment:ex,specularmap_pars_fragment:tx,tonemapping_fragment:nx,tonemapping_pars_fragment:ix,transmission_fragment:sx,transmission_pars_fragment:rx,uv_pars_fragment:ox,uv_pars_vertex:ax,uv_vertex:cx,worldpos_vertex:lx,background_vert:ux,background_frag:hx,backgroundCube_vert:dx,backgroundCube_frag:fx,cube_vert:px,cube_frag:mx,depth_vert:gx,depth_frag:xx,distance_vert:_x,distance_frag:vx,equirect_vert:Mx,equirect_frag:yx,linedashed_vert:Sx,linedashed_frag:bx,meshbasic_vert:wx,meshbasic_frag:Ex,meshlambert_vert:Tx,meshlambert_frag:Ax,meshmatcap_vert:Rx,meshmatcap_frag:Cx,meshnormal_vert:Px,meshnormal_frag:Lx,meshphong_vert:Dx,meshphong_frag:Ix,meshphysical_vert:Nx,meshphysical_frag:Ux,meshtoon_vert:Fx,meshtoon_frag:Ox,points_vert:zx,points_frag:Bx,shadow_vert:kx,shadow_frag:Hx,sprite_vert:Gx,sprite_frag:Vx},Se={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},On={basic:{uniforms:jt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:jt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:jt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:jt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:jt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new ot(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:jt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:jt([Se.points,Se.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:jt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:jt([Se.common,Se.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:jt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:jt([Se.sprite,Se.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:jt([Se.common,Se.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:jt([Se.lights,Se.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};On.physical={uniforms:jt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const io={r:0,b:0,g:0},Wx=new _t,ud=new Je;ud.set(-1,0,0,0,1,0,0,0,1);function Xx(n,e,t,i,s,r){const o=new ot(0);let a=s===!0?0:1,c,l,u=null,d=0,h=null;function m(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){const _=y.backgroundBlurriness>0;b=e.get(b,_)}return b}function g(y){let b=!1;const _=m(y);_===null?p(o,a):_&&_.isColor&&(p(_,1),b=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,b){const _=m(b);_&&(_.isCubeTexture||_.mapping===Io)?(l===void 0&&(l=new Q(new et(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Rs(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Wx.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ud),l.material.toneMapped=at.getTransfer(_.colorSpace)!==ft,(u!==_||d!==_.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,h=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Q(new dn(2,2),new Mn({name:"BackgroundMaterial",uniforms:Rs(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=at.getTransfer(_.colorSpace)!==ft,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,h=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,b){y.getRGB(io,od(n)),t.buffers.color.setClear(io.r,io.g,io.b,b,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:g,addToRenderList:v,dispose:f}}function qx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(P,D,z,k,N){let O=!1;const I=d(P,k,z,D);r!==I&&(r=I,l(r.object)),O=m(P,k,z,N),O&&g(P,k,z,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,_(P,D,z,k),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return n.createVertexArray()}function l(P){return n.bindVertexArray(P)}function u(P){return n.deleteVertexArray(P)}function d(P,D,z,k){const N=k.wireframe===!0;let O=i[D.id];O===void 0&&(O={},i[D.id]=O);const I=P.isInstancedMesh===!0?P.id:0;let G=O[I];G===void 0&&(G={},O[I]=G);let Y=G[z.id];Y===void 0&&(Y={},G[z.id]=Y);let te=Y[N];return te===void 0&&(te=h(c()),Y[N]=te),te}function h(P){const D=[],z=[],k=[];for(let N=0;N<t;N++)D[N]=0,z[N]=0,k[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:k,object:P,attributes:{},index:null}}function m(P,D,z,k){const N=r.attributes,O=D.attributes;let I=0;const G=z.getAttributes();for(const Y in G)if(G[Y].location>=0){const Z=N[Y];let ue=O[Y];if(ue===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor)),Z===void 0||Z.attribute!==ue||ue&&Z.data!==ue.data)return!0;I++}return r.attributesNum!==I||r.index!==k}function g(P,D,z,k){const N={},O=D.attributes;let I=0;const G=z.getAttributes();for(const Y in G)if(G[Y].location>=0){let Z=O[Y];Z===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));const ue={};ue.attribute=Z,Z&&Z.data&&(ue.data=Z.data),N[Y]=ue,I++}r.attributes=N,r.attributesNum=I,r.index=k}function v(){const P=r.newAttributes;for(let D=0,z=P.length;D<z;D++)P[D]=0}function p(P){f(P,0)}function f(P,D){const z=r.newAttributes,k=r.enabledAttributes,N=r.attributeDivisors;z[P]=1,k[P]===0&&(n.enableVertexAttribArray(P),k[P]=1),N[P]!==D&&(n.vertexAttribDivisor(P,D),N[P]=D)}function y(){const P=r.newAttributes,D=r.enabledAttributes;for(let z=0,k=D.length;z<k;z++)D[z]!==P[z]&&(n.disableVertexAttribArray(z),D[z]=0)}function b(P,D,z,k,N,O,I){I===!0?n.vertexAttribIPointer(P,D,z,N,O):n.vertexAttribPointer(P,D,z,k,N,O)}function _(P,D,z,k){v();const N=k.attributes,O=z.getAttributes(),I=D.defaultAttributeValues;for(const G in O){const Y=O[G];if(Y.location>=0){let te=N[G];if(te===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),te!==void 0){const Z=te.normalized,ue=te.itemSize,Ge=e.get(te);if(Ge===void 0)continue;const Ue=Ge.buffer,Pe=Ge.type,J=Ge.bytesPerElement,he=Pe===n.INT||Pe===n.UNSIGNED_INT||te.gpuType===kc;if(te.isInterleavedBufferAttribute){const oe=te.data,Ie=oe.stride,We=te.offset;if(oe.isInstancedInterleavedBuffer){for(let _e=0;_e<Y.locationSize;_e++)f(Y.location+_e,oe.meshPerAttribute);P.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let _e=0;_e<Y.locationSize;_e++)p(Y.location+_e);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let _e=0;_e<Y.locationSize;_e++)b(Y.location+_e,ue/Y.locationSize,Pe,Z,Ie*J,(We+ue/Y.locationSize*_e)*J,he)}else{if(te.isInstancedBufferAttribute){for(let oe=0;oe<Y.locationSize;oe++)f(Y.location+oe,te.meshPerAttribute);P.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let oe=0;oe<Y.locationSize;oe++)p(Y.location+oe);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let oe=0;oe<Y.locationSize;oe++)b(Y.location+oe,ue/Y.locationSize,Pe,Z,ue*J,ue/Y.locationSize*oe*J,he)}}else if(I!==void 0){const Z=I[G];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(Y.location,Z);break;case 3:n.vertexAttrib3fv(Y.location,Z);break;case 4:n.vertexAttrib4fv(Y.location,Z);break;default:n.vertexAttrib1fv(Y.location,Z)}}}}y()}function w(){T();for(const P in i){const D=i[P];for(const z in D){const k=D[z];for(const N in k){const O=k[N];for(const I in O)u(O[I].object),delete O[I];delete k[N]}}delete i[P]}}function S(P){if(i[P.id]===void 0)return;const D=i[P.id];for(const z in D){const k=D[z];for(const N in k){const O=k[N];for(const I in O)u(O[I].object),delete O[I];delete k[N]}}delete i[P.id]}function A(P){for(const D in i){const z=i[D];for(const k in z){const N=z[k];if(N[P.id]===void 0)continue;const O=N[P.id];for(const I in O)u(O[I].object),delete O[I];delete N[P.id]}}}function x(P){for(const D in i){const z=i[D],k=P.isInstancedMesh===!0?P.id:0,N=z[k];if(N!==void 0){for(const O in N){const I=N[O];for(const G in I)u(I[G].object),delete I[G];delete N[O]}delete z[k],Object.keys(z).length===0&&delete i[D]}}}function T(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function Yx(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let m=0;m<u;m++)h+=l[m];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Zx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Cn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const x=A===oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==pn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Rn&&!x)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ze("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:_,maxSamples:w,samples:S}}function $x(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ci,a=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||s;return s=h,i=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{const y=r?0:i,b=y*4;let _=f.clippingState||null;c.value=_,_=u(g,h,b,m);for(let w=0;w!==b;++w)_[w]=t[w];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const f=m+v*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let b=0,_=m;b!==v;++b,_+=4)o.copy(d[b]).applyMatrix4(y,a),o.normal.toArray(p,_),p[_+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}const Mi=4,Eu=[.125,.215,.35,.446,.526,.582],Di=20,Kx=256,Xs=new il,Tu=new ot;let xa=null,_a=0,va=0,Ma=!1;const Jx=new L;class Au{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=Jx}=r;xa=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xa,_a,va),this._renderer.xr.enabled=Ma,e.scissorTest=!1,hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xa=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:oi,format:Cn,colorSpace:Mo,depthBuffer:!1},s=Ru(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ru(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Qx(r)),this._blurMaterial=e_(r,e,t),this._ggxMaterial=jx(r,e,t)}return s}_compileMaterial(e){const t=new Q(new Vt,e);this._renderer.compile(t,Xs)}_sceneToCubeUV(e,t,i,s,r){const c=new fn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,m=d.toneMapping;d.getClearColor(Tu),d.toneMapping=Hn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Q(new et,new Fn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,p=v.material;let f=!1;const y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,f=!0):(p.color.copy(Tu),f=!0);for(let b=0;b<6;b++){const _=b%3;_===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[b],r.y,r.z)):_===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[b]));const w=this._cubeSize;hs(s,_*w,b>2?w:0,w,w),d.setRenderTarget(s),f&&d.render(v,c),d.render(e,c)}d.toneMapping=m,d.autoClear=h,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Oi||e.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;hs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Xs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=0+l*1.25,m=d*h,{_lodMax:g}=this,v=this._sizeLods[i],p=3*v*(i>g-Mi?i-g+Mi:0),f=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=g-t,hs(r,p,f,3*v,2*v),s.setRenderTarget(r),s.render(a,Xs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,hs(e,p,f,3*v,2*v),s.setRenderTarget(e),s.render(a,Xs)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&rt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=l;const h=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Di-1),v=r/g,p=isFinite(r)?1+Math.floor(u*v):Di;p>Di&&Ze(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Di}`);const f=[];let y=0;for(let A=0;A<Di;++A){const x=A/v,T=Math.exp(-x*x/2);f.push(T),A===0?y+=T:A<p&&(y+=2*T)}for(let A=0;A<f.length;A++)f[A]=f[A]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;const _=this._sizeLods[s],w=3*_*(s>b-Mi?s-b+Mi:0),S=4*(this._cubeSize-_);hs(t,w,S,3*_,2*_),c.setRenderTarget(t),c.render(d,Xs)}}function Qx(n){const e=[],t=[],i=[];let s=n;const r=n-Mi+1+Eu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-Mi?c=Eu[o-n+Mi-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,v=3,p=2,f=1,y=new Float32Array(v*g*m),b=new Float32Array(p*g*m),_=new Float32Array(f*g*m);for(let S=0;S<m;S++){const A=S%3*2/3-1,x=S>2?0:-1,T=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];y.set(T,v*g*S),b.set(h,p*g*S);const R=[S,S,S,S,S,S];_.set(R,f*g*S)}const w=new Vt;w.setAttribute("position",new mn(y,v)),w.setAttribute("uv",new mn(b,p)),w.setAttribute("faceIndex",new mn(_,f)),i.push(new Q(w,null)),s>Mi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Ru(n,e,t){const i=new Vn(n,e,t);return i.texture.mapping=Io,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function jx(n,e,t){return new Mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Kx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:No(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function e_(n,e,t){const i=new Float32Array(Di),s=new L(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:No(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Cu(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:No(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Pu(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function No(){return`

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
	`}class hd extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Zh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new et(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:si});r.uniforms.tEquirect.value=t;const o=new Q(s,r),a=t.minFilter;return t.minFilter===Ni&&(t.minFilter=Jt),new r0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function t_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,m=!1){return h==null?null:m?o(h):r(h)}function r(h){if(h&&h.isTexture){const m=h.mapping;if(m===Ho||m===Go)if(e.has(h)){const g=e.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new hd(g.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",l),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const m=h.mapping,g=m===Ho||m===Go,v=m===Oi||m===Es;if(g||v){let p=t.get(h);const f=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new Au(n)),p=g?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const y=h.image;return g&&y&&y.height>0||v&&y&&c(y)?(i===null&&(i=new Au(n)),p=g?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,m){return m===Ho?h.mapping=Oi:m===Go&&(h.mapping=Es),h}function c(h){let m=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&m++;return m===g}function l(h){const m=h.target;m.removeEventListener("dispose",l);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function u(h){const m=h.target;m.removeEventListener("dispose",u);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function n_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&xs("WebGLRenderer: "+i+" extension not supported."),s}}}function i_(n,e,t,i){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const m in h)e.update(h[m],n.ARRAY_BUFFER)}function l(d){const h=[],m=d.index,g=d.attributes.position;let v=0;if(g===void 0)return;if(m!==null){const y=m.array;v=m.version;for(let b=0,_=y.length;b<_;b+=3){const w=y[b+0],S=y[b+1],A=y[b+2];h.push(w,S,S,A,A,w)}}else{const y=g.array;v=g.version;for(let b=0,_=y.length/3-1;b<_;b+=3){const w=b+0,S=b+1,A=b+2;h.push(w,S,S,A,A,w)}}const p=new(g.count>=65535?Vh:Gh)(h,1);p.version=v;const f=r.get(d);f&&e.remove(f),r.set(d,p)}function u(d){const h=r.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function s_(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function l(d,h,m){m!==0&&(n.drawElementsInstanced(i,h,r,d*o,m),t.update(h,i,m))}function u(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,m);let v=0;for(let p=0;p<m;p++)v+=h[p];t.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function r_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:rt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function o_(n,e,t){const i=new WeakMap,s=new Rt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let R=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",R)};var m=R;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),p===!0&&(_=3);let w=a.attributes.position.count*_,S=1;w>e.maxTextureSize&&(S=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const A=new Float32Array(w*S*4*d),x=new kh(A,w,S,d);x.type=Rn,x.needsUpdate=!0;const T=_*4;for(let P=0;P<d;P++){const D=f[P],z=y[P],k=b[P],N=w*S*4*P;for(let O=0;O<D.count;O++){const I=O*T;g===!0&&(s.fromBufferAttribute(D,O),A[N+I+0]=s.x,A[N+I+1]=s.y,A[N+I+2]=s.z,A[N+I+3]=0),v===!0&&(s.fromBufferAttribute(z,O),A[N+I+4]=s.x,A[N+I+5]=s.y,A[N+I+6]=s.z,A[N+I+7]=0),p===!0&&(s.fromBufferAttribute(k,O),A[N+I+8]=s.x,A[N+I+9]=s.y,A[N+I+10]=s.z,A[N+I+11]=k.itemSize===4?s.w:1)}}h={count:d,texture:x,size:new le(w,S)},i.set(a,h),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function a_(n,e,t,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const c_={[Th]:"LINEAR_TONE_MAPPING",[Ah]:"REINHARD_TONE_MAPPING",[Rh]:"CINEON_TONE_MAPPING",[Bc]:"ACES_FILMIC_TONE_MAPPING",[Ph]:"AGX_TONE_MAPPING",[Lh]:"NEUTRAL_TONE_MAPPING",[Ch]:"CUSTOM_TONE_MAPPING"};function l_(n,e,t,i,s,r){const o=new Vn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new Ts(e,t):void 0}),a=new Vn(e,t,{type:oi,depthBuffer:!1,stencilBuffer:!1}),c=new Vt;c.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new vt([0,2,0,0,2,0],2));const l=new Jm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Q(c,l),d=new il(-1,1,1,-1,0,1);let h=null,m=null,g=!1,v,p=null,f=[],y=!1;this.setSize=function(b,_){o.setSize(b,_),a.setSize(b,_);for(let w=0;w<f.length;w++){const S=f[w];S.setSize&&S.setSize(b,_)}},this.setEffects=function(b){f=b,y=f.length>0&&f[0].isRenderPass===!0;const _=o.width,w=o.height;for(let S=0;S<f.length;S++){const A=f[S];A.setSize&&A.setSize(_,w)}},this.begin=function(b,_){if(g||b.toneMapping===Hn&&f.length===0)return!1;if(p=_,_!==null){const w=_.width,S=_.height;(o.width!==w||o.height!==S)&&this.setSize(w,S)}return y===!1&&b.setRenderTarget(o),v=b.toneMapping,b.toneMapping=Hn,!0},this.hasRenderPass=function(){return y},this.end=function(b,_){b.toneMapping=v,g=!0;let w=o,S=a;for(let A=0;A<f.length;A++){const x=f[A];if(x.enabled!==!1&&(x.render(b,S,w,_),x.needsSwap!==!1)){const T=w;w=S,S=T}}if(h!==b.outputColorSpace||m!==b.toneMapping){h=b.outputColorSpace,m=b.toneMapping,l.defines={},at.getTransfer(h)===ft&&(l.defines.SRGB_TRANSFER="");const A=c_[m];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(p),b.render(u,d),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}const dd=new Xt,Ac=new Ts(1,1),fd=new kh,pd=new Kp,md=new Zh,Lu=[],Du=[],Iu=new Float32Array(16),Nu=new Float32Array(9),Uu=new Float32Array(4);function Is(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Lu[s];if(r===void 0&&(r=new Float32Array(s),Lu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Uo(n,e){let t=Du[e];t===void 0&&(t=new Int32Array(e),Du[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function u_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function h_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function d_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function f_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function p_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;Uu.set(i),n.uniformMatrix2fv(this.addr,!1,Uu),kt(t,i)}}function m_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;Nu.set(i),n.uniformMatrix3fv(this.addr,!1,Nu),kt(t,i)}}function g_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;Iu.set(i),n.uniformMatrix4fv(this.addr,!1,Iu),kt(t,i)}}function x_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function __(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function v_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function M_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function y_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function S_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function b_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function w_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function E_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ac.compareFunction=t.isReversedDepthBuffer()?Zc:Yc,r=Ac):r=dd,t.setTexture2D(e||r,s)}function T_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||pd,s)}function A_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||md,s)}function R_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||fd,s)}function C_(n){switch(n){case 5126:return u_;case 35664:return h_;case 35665:return d_;case 35666:return f_;case 35674:return p_;case 35675:return m_;case 35676:return g_;case 5124:case 35670:return x_;case 35667:case 35671:return __;case 35668:case 35672:return v_;case 35669:case 35673:return M_;case 5125:return y_;case 36294:return S_;case 36295:return b_;case 36296:return w_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return T_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return R_}}function P_(n,e){n.uniform1fv(this.addr,e)}function L_(n,e){const t=Is(e,this.size,2);n.uniform2fv(this.addr,t)}function D_(n,e){const t=Is(e,this.size,3);n.uniform3fv(this.addr,t)}function I_(n,e){const t=Is(e,this.size,4);n.uniform4fv(this.addr,t)}function N_(n,e){const t=Is(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function U_(n,e){const t=Is(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function F_(n,e){const t=Is(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function O_(n,e){n.uniform1iv(this.addr,e)}function z_(n,e){n.uniform2iv(this.addr,e)}function B_(n,e){n.uniform3iv(this.addr,e)}function k_(n,e){n.uniform4iv(this.addr,e)}function H_(n,e){n.uniform1uiv(this.addr,e)}function G_(n,e){n.uniform2uiv(this.addr,e)}function V_(n,e){n.uniform3uiv(this.addr,e)}function W_(n,e){n.uniform4uiv(this.addr,e)}function X_(n,e,t){const i=this.cache,s=e.length,r=Uo(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ac:o=dd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function q_(n,e,t){const i=this.cache,s=e.length,r=Uo(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||pd,r[o])}function Y_(n,e,t){const i=this.cache,s=e.length,r=Uo(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||md,r[o])}function Z_(n,e,t){const i=this.cache,s=e.length,r=Uo(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||fd,r[o])}function $_(n){switch(n){case 5126:return P_;case 35664:return L_;case 35665:return D_;case 35666:return I_;case 35674:return N_;case 35675:return U_;case 35676:return F_;case 5124:case 35670:return O_;case 35667:case 35671:return z_;case 35668:case 35672:return B_;case 35669:case 35673:return k_;case 5125:return H_;case 36294:return G_;case 36295:return V_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return Z_}}class K_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=C_(t.type)}}class J_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$_(t.type)}}class Q_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const ya=/(\w+)(\])?(\[|\.)?/g;function Fu(n,e){n.seq.push(e),n.map[e.id]=e}function j_(n,e,t){const i=n.name,s=i.length;for(ya.lastIndex=0;;){const r=ya.exec(i),o=ya.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Fu(t,l===void 0?new K_(a,n,e):new J_(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Q_(a),Fu(t,d)),t=d}}}class fo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);j_(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Ou(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ev=37297;let tv=0;function nv(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const zu=new Je;function iv(n){at._getMatrix(zu,at.workingColorSpace,n);const e=`mat3( ${zu.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case yo:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Bu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+nv(n.getShaderSource(e),a)}else return r}function sv(n,e){const t=iv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const rv={[Th]:"Linear",[Ah]:"Reinhard",[Rh]:"Cineon",[Bc]:"ACESFilmic",[Ph]:"AgX",[Lh]:"Neutral",[Ch]:"Custom"};function ov(n,e){const t=rv[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const so=new L;function av(){at.getLuminanceCoefficients(so);const n=so.x.toFixed(4),e=so.y.toFixed(4),t=so.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function lv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function er(n){return n!==""}function ku(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(n){return n.replace(hv,fv)}const dv=new Map;function fv(n,e){let t=tt[e];if(t===void 0){const i=dv.get(e);if(i!==void 0)t=tt[i],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Rc(t)}const pv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gu(n){return n.replace(pv,mv)}function mv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const gv={[ao]:"SHADOWMAP_TYPE_PCF",[Js]:"SHADOWMAP_TYPE_VSM"};function xv(n){return gv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _v={[Oi]:"ENVMAP_TYPE_CUBE",[Es]:"ENVMAP_TYPE_CUBE",[Io]:"ENVMAP_TYPE_CUBE_UV"};function vv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":_v[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Mv={[Es]:"ENVMAP_MODE_REFRACTION"};function yv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Mv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Sv={[Eh]:"ENVMAP_BLENDING_MULTIPLY",[pp]:"ENVMAP_BLENDING_MIX",[mp]:"ENVMAP_BLENDING_ADD"};function bv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Sv[n.combine]||"ENVMAP_BLENDING_NONE"}function wv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ev(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=xv(t),l=vv(t),u=yv(t),d=bv(t),h=wv(t),m=cv(t),g=lv(r),v=s.createProgram();let p,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(er).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(er).join(`
`),f.length>0&&(f+=`
`)):(p=[Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),f=[Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?tt.tonemapping_pars_fragment:"",t.toneMapping!==Hn?ov("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,sv("linearToOutputTexel",t.outputColorSpace),av(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),o=Rc(o),o=ku(o,t),o=Hu(o,t),a=Rc(a),a=ku(a,t),a=Hu(a,t),o=Gu(o),a=Gu(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=y+p+o,_=y+f+a,w=Ou(s,s.VERTEX_SHADER,b),S=Ou(s,s.FRAGMENT_SHADER,_);s.attachShader(v,w),s.attachShader(v,S),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(P){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(v)||"",z=s.getShaderInfoLog(w)||"",k=s.getShaderInfoLog(S)||"",N=D.trim(),O=z.trim(),I=k.trim();let G=!0,Y=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,w,S);else{const te=Bu(s,w,"vertex"),Z=Bu(s,S,"fragment");rt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+te+`
`+Z)}else N!==""?Ze("WebGLProgram: Program Info Log:",N):(O===""||I==="")&&(Y=!1);Y&&(P.diagnostics={runnable:G,programLog:N,vertexShader:{log:O,prefix:p},fragmentShader:{log:I,prefix:f}})}s.deleteShader(w),s.deleteShader(S),x=new fo(s,v),T=uv(s,v)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(v,ev)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=S,this}let Tv=0;class Av{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Rv(e),t.set(e,i)),i}}class Rv{constructor(e){this.id=Tv++,this.code=e,this.usedTimes=0}}function Cv(n){return n===zi||n===_o||n===vo}function Pv(n,e,t,i,s,r){const o=new Jc,a=new Av,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,T,R,P,D,z){const k=P.fog,N=D.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,I=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=e.get(x.envMap||O,I),Y=G&&G.mapping===Io?G.image.height:null,te=m[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Ze("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const Z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ue=Z!==void 0?Z.length:0;let Ge=0;N.morphAttributes.position!==void 0&&(Ge=1),N.morphAttributes.normal!==void 0&&(Ge=2),N.morphAttributes.color!==void 0&&(Ge=3);let Ue,Pe,J,he;if(te){const Le=On[te];Ue=Le.vertexShader,Pe=Le.fragmentShader}else{Ue=x.vertexShader,Pe=x.fragmentShader;const Le=a.getVertexShaderStage(x),Pt=a.getFragmentShaderStage(x);a.update(x,Le,Pt),J=Le.id,he=Pt.id}const oe=n.getRenderTarget(),Ie=n.state.buffers.depth.getReversed(),We=D.isInstancedMesh===!0,_e=D.isBatchedMesh===!0,ct=!!x.map,Xe=!!x.matcap,ne=!!G,re=!!x.aoMap,se=!!x.lightMap,be=!!x.bumpMap&&x.wireframe===!1,ve=!!x.normalMap,qe=!!x.displacementMap,Oe=!!x.emissiveMap,$e=!!x.metalnessMap,Ke=!!x.roughnessMap,U=x.anisotropy>0,gt=x.clearcoat>0,st=x.dispersion>0,C=x.iridescence>0,M=x.sheen>0,H=x.transmission>0,X=U&&!!x.anisotropyMap,$=gt&&!!x.clearcoatMap,ce=gt&&!!x.clearcoatNormalMap,de=gt&&!!x.clearcoatRoughnessMap,K=C&&!!x.iridescenceMap,ee=C&&!!x.iridescenceThicknessMap,me=M&&!!x.sheenColorMap,ze=M&&!!x.sheenRoughnessMap,Me=!!x.specularMap,ge=!!x.specularColorMap,Ve=!!x.specularIntensityMap,Ye=H&&!!x.transmissionMap,Qe=H&&!!x.thicknessMap,F=!!x.gradientMap,fe=!!x.alphaMap,j=x.alphaTest>0,xe=!!x.alphaHash,Te=!!x.extensions;let ie=Hn;x.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ie=n.toneMapping);const Fe={shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:Ue,fragmentShader:Pe,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:he,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:_e,batchingColor:_e&&D._colorsTexture!==null,instancing:We,instancingColor:We&&D.instanceColor!==null,instancingMorph:We&&D.morphTexture!==null,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ct,matcap:Xe,envMap:ne,envMapMode:ne&&G.mapping,envMapCubeUVHeight:Y,aoMap:re,lightMap:se,bumpMap:be,normalMap:ve,displacementMap:qe,emissiveMap:Oe,normalMapObjectSpace:ve&&x.normalMapType===_p,normalMapTangentSpace:ve&&x.normalMapType===Mc,packedNormalMap:ve&&x.normalMapType===Mc&&Cv(x.normalMap.format),metalnessMap:$e,roughnessMap:Ke,anisotropy:U,anisotropyMap:X,clearcoat:gt,clearcoatMap:$,clearcoatNormalMap:ce,clearcoatRoughnessMap:de,dispersion:st,iridescence:C,iridescenceMap:K,iridescenceThicknessMap:ee,sheen:M,sheenColorMap:me,sheenRoughnessMap:ze,specularMap:Me,specularColorMap:ge,specularIntensityMap:Ve,transmission:H,transmissionMap:Ye,thicknessMap:Qe,gradientMap:F,opaque:x.transparent===!1&&x.blending===gs&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:j,alphaHash:xe,combine:x.combine,mapUv:ct&&g(x.map.channel),aoMapUv:re&&g(x.aoMap.channel),lightMapUv:se&&g(x.lightMap.channel),bumpMapUv:be&&g(x.bumpMap.channel),normalMapUv:ve&&g(x.normalMap.channel),displacementMapUv:qe&&g(x.displacementMap.channel),emissiveMapUv:Oe&&g(x.emissiveMap.channel),metalnessMapUv:$e&&g(x.metalnessMap.channel),roughnessMapUv:Ke&&g(x.roughnessMap.channel),anisotropyMapUv:X&&g(x.anisotropyMap.channel),clearcoatMapUv:$&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:me&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ze&&g(x.sheenRoughnessMap.channel),specularMapUv:Me&&g(x.specularMap.channel),specularColorMapUv:ge&&g(x.specularColorMap.channel),specularIntensityMapUv:Ve&&g(x.specularIntensityMap.channel),transmissionMapUv:Ye&&g(x.transmissionMap.channel),thicknessMapUv:Qe&&g(x.thicknessMap.channel),alphaMapUv:fe&&g(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ve||U),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!N.attributes.uv&&(ct||fe),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&ve===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ie,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ge,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ie,decodeVideoTexture:ct&&x.map.isVideoTexture===!0&&at.getTransfer(x.map.colorSpace)===ft,decodeVideoTextureEmissive:Oe&&x.emissiveMap.isVideoTexture===!0&&at.getTransfer(x.emissiveMap.colorSpace)===ft,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===rn,flipSided:x.side===en,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Te&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&x.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function p(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)T.push(R),T.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(f(T,x),y(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function f(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function y(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function b(x){const T=m[x.type];let R;if(T){const P=On[T];R=Zm.clone(P.uniforms)}else R=x.uniforms;return R}function _(x,T){let R=u.get(T);return R!==void 0?++R.usedTimes:(R=new Ev(n,T,x,s),l.push(R),u.set(T,R)),R}function w(x){if(--x.usedTimes===0){const T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function A(){a.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:b,acquireProgram:_,releaseProgram:w,releaseShaderCache:S,programs:l,dispose:A}}function Lv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Dv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Wu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function a(h,m,g,v,p,f){let y=n[e];return y===void 0?(y={id:h.id,object:h,geometry:m,material:g,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:p,group:f},n[e]=y):(y.id=h.id,y.object=h,y.geometry=m,y.material=g,y.materialVariant=o(h),y.groupOrder=v,y.renderOrder=h.renderOrder,y.z=p,y.group=f),e++,y}function c(h,m,g,v,p,f){const y=a(h,m,g,v,p,f);g.transmission>0?i.push(y):g.transparent===!0?s.push(y):t.push(y)}function l(h,m,g,v,p,f){const y=a(h,m,g,v,p,f);g.transmission>0?i.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function u(h,m,g){t.length>1&&t.sort(h||Dv),i.length>1&&i.sort(m||Wu),s.length>1&&s.sort(m||Wu),g&&(t.reverse(),i.reverse(),s.reverse())}function d(){for(let h=e,m=n.length;h<m;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function Iv(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Xu,n.set(i,[o])):s>=r.length?(o=new Xu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Nv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ot};break;case"SpotLight":t={position:new L,direction:new L,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function Uv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Fv=0;function Ov(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function zv(n){const e=new Nv,t=Uv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);const s=new L,r=new _t,o=new _t;function a(l){let u=0,d=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,g=0,v=0,p=0,f=0,y=0,b=0,_=0,w=0,S=0,A=0;l.sort(Ov);for(let T=0,R=l.length;T<R;T++){const P=l[T],D=P.color,z=P.intensity,k=P.distance;let N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===zi?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=D.r*z,d+=D.g*z,h+=D.b*z;else if(P.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(P.sh.coefficients[O],z);A++}else if(P.isDirectionalLight){const O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const I=P.shadow,G=t.get(P);G.shadowIntensity=I.intensity,G.shadowBias=I.bias,G.shadowNormalBias=I.normalBias,G.shadowRadius=I.radius,G.shadowMapSize=I.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=N,i.directionalShadowMatrix[m]=P.shadow.matrix,y++}i.directional[m]=O,m++}else if(P.isSpotLight){const O=e.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(D).multiplyScalar(z),O.distance=k,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,i.spot[v]=O;const I=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,I.updateMatrices(P),P.castShadow&&S++),i.spotLightMatrix[v]=I.matrix,P.castShadow){const G=t.get(P);G.shadowIntensity=I.intensity,G.shadowBias=I.bias,G.shadowNormalBias=I.normalBias,G.shadowRadius=I.radius,G.shadowMapSize=I.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=N,_++}v++}else if(P.isRectAreaLight){const O=e.get(P);O.color.copy(D).multiplyScalar(z),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=O,p++}else if(P.isPointLight){const O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){const I=P.shadow,G=t.get(P);G.shadowIntensity=I.intensity,G.shadowBias=I.bias,G.shadowNormalBias=I.normalBias,G.shadowRadius=I.radius,G.shadowMapSize=I.mapSize,G.shadowCameraNear=I.camera.near,G.shadowCameraFar=I.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=P.shadow.matrix,b++}i.point[g]=O,g++}else if(P.isHemisphereLight){const O=e.get(P);O.skyColor.copy(P.color).multiplyScalar(z),O.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[f]=O,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==m||x.pointLength!==g||x.spotLength!==v||x.rectAreaLength!==p||x.hemiLength!==f||x.numDirectionalShadows!==y||x.numPointShadows!==b||x.numSpotShadows!==_||x.numSpotMaps!==w||x.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=_+w-S,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=A,x.directionalLength=m,x.pointLength=g,x.spotLength=v,x.rectAreaLength=p,x.hemiLength=f,x.numDirectionalShadows=y,x.numPointShadows=b,x.numSpotShadows=_,x.numSpotMaps=w,x.numLightProbes=A,i.version=Fv++)}function c(l,u){let d=0,h=0,m=0,g=0,v=0;const p=u.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){const b=l[f];if(b.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),d++}else if(b.isSpotLight){const _=i.spot[m];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const _=i.point[h];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),h++}else if(b.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(p),v++}}}return{setup:a,setupView:c,state:i}}function qu(n){const e=new zv(n),t=[],i=[],s=[];function r(h){d.camera=h,t.length=0,i.length=0,s.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Bv(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new qu(n),e.set(s,[a])):r>=o.length?(a=new qu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const kv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hv=`uniform sampler2D shadow_pass;
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
}`,Gv=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Vv=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Yu=new _t,qs=new L,Sa=new L;function Wv(n,e,t){let i=new Qc;const s=new le,r=new le,o=new Rt,a=new Qm,c=new jm,l={},u=t.maxTextureSize,d={[yi]:en,[en]:yi,[rn]:rn},h=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:kv,fragmentShader:Hv}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Vt;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Q(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ao;let f=this.type;this.render=function(S,A,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===$f&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ao);const T=n.getRenderTarget(),R=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),D=n.state;D.setBlending(si),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const z=f!==this.type;z&&A.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(N=>N.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,N=S.length;k<N;k++){const O=S[k],I=O.shadow;if(I===void 0){Ze("WebGLShadowMap:",O,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const G=I.getFrameExtents();s.multiply(G),r.copy(I.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/G.x),s.x=r.x*G.x,I.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/G.y),s.y=r.y*G.y,I.mapSize.y=r.y));const Y=n.state.buffers.depth.getReversed();if(I.camera._reversedDepth=Y,I.map===null||z===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Js){if(O.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Vn(s.x,s.y,{format:zi,type:oi,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),I.map.texture.name=O.name+".shadowMap",I.map.depthTexture=new Ts(s.x,s.y,Rn),I.map.depthTexture.name=O.name+".shadowMapDepth",I.map.depthTexture.format=ai,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Gt,I.map.depthTexture.magFilter=Gt}else O.isPointLight?(I.map=new hd(s.x),I.map.depthTexture=new gm(s.x,Wn)):(I.map=new Vn(s.x,s.y),I.map.depthTexture=new Ts(s.x,s.y,Wn)),I.map.depthTexture.name=O.name+".shadowMap",I.map.depthTexture.format=ai,this.type===ao?(I.map.depthTexture.compareFunction=Y?Zc:Yc,I.map.depthTexture.minFilter=Jt,I.map.depthTexture.magFilter=Jt):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Gt,I.map.depthTexture.magFilter=Gt);I.camera.updateProjectionMatrix()}const te=I.map.isWebGLCubeRenderTarget?6:1;for(let Z=0;Z<te;Z++){if(I.map.isWebGLCubeRenderTarget)n.setRenderTarget(I.map,Z),n.clear();else{Z===0&&(n.setRenderTarget(I.map),n.clear());const ue=I.getViewport(Z);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),D.viewport(o)}if(O.isPointLight){const ue=I.camera,Ge=I.matrix,Ue=O.distance||ue.far;Ue!==ue.far&&(ue.far=Ue,ue.updateProjectionMatrix()),qs.setFromMatrixPosition(O.matrixWorld),ue.position.copy(qs),Sa.copy(ue.position),Sa.add(Gv[Z]),ue.up.copy(Vv[Z]),ue.lookAt(Sa),ue.updateMatrixWorld(),Ge.makeTranslation(-qs.x,-qs.y,-qs.z),Yu.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Yu,ue.coordinateSystem,ue.reversedDepth)}else I.updateMatrices(O);i=I.getFrustum(),_(A,x,I.camera,O,this.type)}I.isPointLightShadow!==!0&&this.type===Js&&y(I,x),I.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(T,R,P)};function y(S,A){const x=e.update(v);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Vn(s.x,s.y,{format:zi,type:oi})),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(A,null,x,h,v,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(A,null,x,m,v,null)}function b(S,A,x,T){let R=null;const P=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)R=P;else if(R=x.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const D=R.uuid,z=A.uuid;let k=l[D];k===void 0&&(k={},l[D]=k);let N=k[z];N===void 0&&(N=R.clone(),k[z]=N,A.addEventListener("dispose",w)),R=N}if(R.visible=A.visible,R.wireframe=A.wireframe,T===Js?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const D=n.properties.get(R);D.light=x}return R}function _(S,A,x,T,R){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===Js)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);const z=e.update(S),k=S.material;if(Array.isArray(k)){const N=z.groups;for(let O=0,I=N.length;O<I;O++){const G=N[O],Y=k[G.materialIndex];if(Y&&Y.visible){const te=b(S,Y,T,R);S.onBeforeShadow(n,S,A,x,z,te,G),n.renderBufferDirect(x,null,z,te,S,G),S.onAfterShadow(n,S,A,x,z,te,G)}}}else if(k.visible){const N=b(S,k,T,R);S.onBeforeShadow(n,S,A,x,z,N,null),n.renderBufferDirect(x,null,z,N,S,null),S.onAfterShadow(n,S,A,x,z,N,null)}}const D=S.children;for(let z=0,k=D.length;z<k;z++)_(D[z],A,x,T,R)}function w(S){S.target.removeEventListener("dispose",w);for(const x in l){const T=l[x],R=S.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function Xv(n,e){function t(){let F=!1;const fe=new Rt;let j=null;const xe=new Rt(0,0,0,0);return{setMask:function(Te){j!==Te&&!F&&(n.colorMask(Te,Te,Te,Te),j=Te)},setLocked:function(Te){F=Te},setClear:function(Te,ie,Fe,Le,Pt){Pt===!0&&(Te*=Le,ie*=Le,Fe*=Le),fe.set(Te,ie,Fe,Le),xe.equals(fe)===!1&&(n.clearColor(Te,ie,Fe,Le),xe.copy(fe))},reset:function(){F=!1,j=null,xe.set(-1,0,0,0)}}}function i(){let F=!1,fe=!1,j=null,xe=null,Te=null;return{setReversed:function(ie){if(fe!==ie){const Fe=e.get("EXT_clip_control");ie?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),fe=ie;const Le=Te;Te=null,this.setClear(Le)}},getReversed:function(){return fe},setTest:function(ie){ie?oe(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(ie){j!==ie&&!F&&(n.depthMask(ie),j=ie)},setFunc:function(ie){if(fe&&(ie=Rp[ie]),xe!==ie){switch(ie){case Fa:n.depthFunc(n.NEVER);break;case Oa:n.depthFunc(n.ALWAYS);break;case za:n.depthFunc(n.LESS);break;case ws:n.depthFunc(n.LEQUAL);break;case Ba:n.depthFunc(n.EQUAL);break;case ka:n.depthFunc(n.GEQUAL);break;case Ha:n.depthFunc(n.GREATER);break;case Ga:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=ie}},setLocked:function(ie){F=ie},setClear:function(ie){Te!==ie&&(Te=ie,fe&&(ie=1-ie),n.clearDepth(ie))},reset:function(){F=!1,j=null,xe=null,Te=null,fe=!1}}}function s(){let F=!1,fe=null,j=null,xe=null,Te=null,ie=null,Fe=null,Le=null,Pt=null;return{setTest:function(bt){F||(bt?oe(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(bt){fe!==bt&&!F&&(n.stencilMask(bt),fe=bt)},setFunc:function(bt,Pn,Ln){(j!==bt||xe!==Pn||Te!==Ln)&&(n.stencilFunc(bt,Pn,Ln),j=bt,xe=Pn,Te=Ln)},setOp:function(bt,Pn,Ln){(ie!==bt||Fe!==Pn||Le!==Ln)&&(n.stencilOp(bt,Pn,Ln),ie=bt,Fe=Pn,Le=Ln)},setLocked:function(bt){F=bt},setClear:function(bt){Pt!==bt&&(n.clearStencil(bt),Pt=bt)},reset:function(){F=!1,fe=null,j=null,xe=null,Te=null,ie=null,Fe=null,Le=null,Pt=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h={},m=new WeakMap,g=[],v=null,p=!1,f=null,y=null,b=null,_=null,w=null,S=null,A=null,x=new ot(0,0,0),T=0,R=!1,P=null,D=null,z=null,k=null,N=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,G=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Y)[1]),I=G>=1):Y.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),I=G>=2);let te=null,Z={};const ue=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),Ue=new Rt().fromArray(ue),Pe=new Rt().fromArray(Ge);function J(F,fe,j,xe){const Te=new Uint8Array(4),ie=n.createTexture();n.bindTexture(F,ie),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<j;Fe++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(fe+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return ie}const he={};he[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(ws),be(!1),ve(zl),oe(n.CULL_FACE),re(si);function oe(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Ie(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function We(F,fe){return h[F]!==fe?(n.bindFramebuffer(F,fe),h[F]=fe,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=fe),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function _e(F,fe){let j=g,xe=!1;if(F){j=m.get(fe),j===void 0&&(j=[],m.set(fe,j));const Te=F.textures;if(j.length!==Te.length||j[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Fe=Te.length;ie<Fe;ie++)j[ie]=n.COLOR_ATTACHMENT0+ie;j.length=Te.length,xe=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,xe=!0);xe&&n.drawBuffers(j)}function ct(F){return v!==F?(n.useProgram(F),v=F,!0):!1}const Xe={[Li]:n.FUNC_ADD,[Jf]:n.FUNC_SUBTRACT,[Qf]:n.FUNC_REVERSE_SUBTRACT};Xe[jf]=n.MIN,Xe[ep]=n.MAX;const ne={[tp]:n.ZERO,[np]:n.ONE,[ip]:n.SRC_COLOR,[Na]:n.SRC_ALPHA,[lp]:n.SRC_ALPHA_SATURATE,[ap]:n.DST_COLOR,[rp]:n.DST_ALPHA,[sp]:n.ONE_MINUS_SRC_COLOR,[Ua]:n.ONE_MINUS_SRC_ALPHA,[cp]:n.ONE_MINUS_DST_COLOR,[op]:n.ONE_MINUS_DST_ALPHA,[up]:n.CONSTANT_COLOR,[hp]:n.ONE_MINUS_CONSTANT_COLOR,[dp]:n.CONSTANT_ALPHA,[fp]:n.ONE_MINUS_CONSTANT_ALPHA};function re(F,fe,j,xe,Te,ie,Fe,Le,Pt,bt){if(F===si){p===!0&&(Ie(n.BLEND),p=!1);return}if(p===!1&&(oe(n.BLEND),p=!0),F!==Kf){if(F!==f||bt!==R){if((y!==Li||w!==Li)&&(n.blendEquation(n.FUNC_ADD),y=Li,w=Li),bt)switch(F){case gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ia:n.blendFunc(n.ONE,n.ONE);break;case Bl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:rt("WebGLState: Invalid blending: ",F);break}else switch(F){case gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ia:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Bl:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kl:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",F);break}b=null,_=null,S=null,A=null,x.set(0,0,0),T=0,f=F,R=bt}return}Te=Te||fe,ie=ie||j,Fe=Fe||xe,(fe!==y||Te!==w)&&(n.blendEquationSeparate(Xe[fe],Xe[Te]),y=fe,w=Te),(j!==b||xe!==_||ie!==S||Fe!==A)&&(n.blendFuncSeparate(ne[j],ne[xe],ne[ie],ne[Fe]),b=j,_=xe,S=ie,A=Fe),(Le.equals(x)===!1||Pt!==T)&&(n.blendColor(Le.r,Le.g,Le.b,Pt),x.copy(Le),T=Pt),f=F,R=!1}function se(F,fe){F.side===rn?Ie(n.CULL_FACE):oe(n.CULL_FACE);let j=F.side===en;fe&&(j=!j),be(j),F.blending===gs&&F.transparent===!1?re(si):re(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const xe=F.stencilWrite;a.setTest(xe),xe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Oe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function be(F){P!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),P=F)}function ve(F){F!==Yf?(oe(n.CULL_FACE),F!==D&&(F===zl?n.cullFace(n.BACK):F===Zf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),D=F}function qe(F){F!==z&&(I&&n.lineWidth(F),z=F)}function Oe(F,fe,j){F?(oe(n.POLYGON_OFFSET_FILL),(k!==fe||N!==j)&&(k=fe,N=j,o.getReversed()&&(fe=-fe),n.polygonOffset(fe,j))):Ie(n.POLYGON_OFFSET_FILL)}function $e(F){F?oe(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function Ke(F){F===void 0&&(F=n.TEXTURE0+O-1),te!==F&&(n.activeTexture(F),te=F)}function U(F,fe,j){j===void 0&&(te===null?j=n.TEXTURE0+O-1:j=te);let xe=Z[j];xe===void 0&&(xe={type:void 0,texture:void 0},Z[j]=xe),(xe.type!==F||xe.texture!==fe)&&(te!==j&&(n.activeTexture(j),te=j),n.bindTexture(F,fe||he[F]),xe.type=F,xe.texture=fe)}function gt(){const F=Z[te];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function st(){try{n.compressedTexImage2D(...arguments)}catch(F){rt("WebGLState:",F)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(F){rt("WebGLState:",F)}}function M(){try{n.texSubImage2D(...arguments)}catch(F){rt("WebGLState:",F)}}function H(){try{n.texSubImage3D(...arguments)}catch(F){rt("WebGLState:",F)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(F){rt("WebGLState:",F)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(F){rt("WebGLState:",F)}}function ce(){try{n.texStorage2D(...arguments)}catch(F){rt("WebGLState:",F)}}function de(){try{n.texStorage3D(...arguments)}catch(F){rt("WebGLState:",F)}}function K(){try{n.texImage2D(...arguments)}catch(F){rt("WebGLState:",F)}}function ee(){try{n.texImage3D(...arguments)}catch(F){rt("WebGLState:",F)}}function me(F){return d[F]!==void 0?d[F]:n.getParameter(F)}function ze(F,fe){d[F]!==fe&&(n.pixelStorei(F,fe),d[F]=fe)}function Me(F){Ue.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Ue.copy(F))}function ge(F){Pe.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Pe.copy(F))}function Ve(F,fe){let j=l.get(fe);j===void 0&&(j=new WeakMap,l.set(fe,j));let xe=j.get(F);xe===void 0&&(xe=n.getUniformBlockIndex(fe,F.name),j.set(F,xe))}function Ye(F,fe){const xe=l.get(fe).get(F);c.get(fe)!==xe&&(n.uniformBlockBinding(fe,xe,F.__bindingPointIndex),c.set(fe,xe))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},te=null,Z={},h={},m=new WeakMap,g=[],v=null,p=!1,f=null,y=null,b=null,_=null,w=null,S=null,A=null,x=new ot(0,0,0),T=0,R=!1,P=null,D=null,z=null,k=null,N=null,Ue.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:Ie,bindFramebuffer:We,drawBuffers:_e,useProgram:ct,setBlending:re,setMaterial:se,setFlipSided:be,setCullFace:ve,setLineWidth:qe,setPolygonOffset:Oe,setScissorTest:$e,activeTexture:Ke,bindTexture:U,unbindTexture:gt,compressedTexImage2D:st,compressedTexImage3D:C,texImage2D:K,texImage3D:ee,pixelStorei:ze,getParameter:me,updateUBOMapping:Ve,uniformBlockBinding:Ye,texStorage2D:ce,texStorage3D:de,texSubImage2D:M,texSubImage3D:H,compressedTexSubImage2D:X,compressedTexSubImage3D:$,scissor:Me,viewport:ge,reset:Qe}}function qv(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new le,u=new WeakMap,d=new Set;let h;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,M){return g?new OffscreenCanvas(C,M):So("canvas")}function p(C,M,H){let X=1;const $=st(C);if(($.width>H||$.height>H)&&(X=H/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ce=Math.floor(X*$.width),de=Math.floor(X*$.height);h===void 0&&(h=v(ce,de));const K=M?v(ce,de):h;return K.width=ce,K.height=de,K.getContext("2d").drawImage(C,0,0,ce,de),Ze("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ce+"x"+de+")."),K}else return"data"in C&&Ze("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function f(C){return C.generateMipmaps}function y(C){n.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(C,M,H,X,$,ce=!1){if(C!==null){if(n[C]!==void 0)return n[C];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let de;X&&(de=e.get("EXT_texture_norm16"),de||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=M;if(M===n.RED&&(H===n.FLOAT&&(K=n.R32F),H===n.HALF_FLOAT&&(K=n.R16F),H===n.UNSIGNED_BYTE&&(K=n.R8),H===n.UNSIGNED_SHORT&&de&&(K=de.R16_EXT),H===n.SHORT&&de&&(K=de.R16_SNORM_EXT)),M===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.R8UI),H===n.UNSIGNED_SHORT&&(K=n.R16UI),H===n.UNSIGNED_INT&&(K=n.R32UI),H===n.BYTE&&(K=n.R8I),H===n.SHORT&&(K=n.R16I),H===n.INT&&(K=n.R32I)),M===n.RG&&(H===n.FLOAT&&(K=n.RG32F),H===n.HALF_FLOAT&&(K=n.RG16F),H===n.UNSIGNED_BYTE&&(K=n.RG8),H===n.UNSIGNED_SHORT&&de&&(K=de.RG16_EXT),H===n.SHORT&&de&&(K=de.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RG8UI),H===n.UNSIGNED_SHORT&&(K=n.RG16UI),H===n.UNSIGNED_INT&&(K=n.RG32UI),H===n.BYTE&&(K=n.RG8I),H===n.SHORT&&(K=n.RG16I),H===n.INT&&(K=n.RG32I)),M===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RGB8UI),H===n.UNSIGNED_SHORT&&(K=n.RGB16UI),H===n.UNSIGNED_INT&&(K=n.RGB32UI),H===n.BYTE&&(K=n.RGB8I),H===n.SHORT&&(K=n.RGB16I),H===n.INT&&(K=n.RGB32I)),M===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),H===n.UNSIGNED_INT&&(K=n.RGBA32UI),H===n.BYTE&&(K=n.RGBA8I),H===n.SHORT&&(K=n.RGBA16I),H===n.INT&&(K=n.RGBA32I)),M===n.RGB&&(H===n.UNSIGNED_SHORT&&de&&(K=de.RGB16_EXT),H===n.SHORT&&de&&(K=de.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),M===n.RGBA){const ee=ce?yo:at.getTransfer($);H===n.FLOAT&&(K=n.RGBA32F),H===n.HALF_FLOAT&&(K=n.RGBA16F),H===n.UNSIGNED_BYTE&&(K=ee===ft?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&de&&(K=de.RGBA16_EXT),H===n.SHORT&&de&&(K=de.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function w(C,M){let H;return C?M===null||M===Wn||M===fr?H=n.DEPTH24_STENCIL8:M===Rn?H=n.DEPTH32F_STENCIL8:M===dr&&(H=n.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Wn||M===fr?H=n.DEPTH_COMPONENT24:M===Rn?H=n.DEPTH_COMPONENT32F:M===dr&&(H=n.DEPTH_COMPONENT16),H}function S(C,M){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==Gt&&C.minFilter!==Jt?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){const M=C.target;M.removeEventListener("dispose",A),T(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&d.delete(M)}function x(C){const M=C.target;M.removeEventListener("dispose",x),P(M)}function T(C){const M=i.get(C);if(M.__webglInit===void 0)return;const H=C.source,X=m.get(H);if(X){const $=X[M.__cacheKey];$.usedTimes--,$.usedTimes===0&&R(C),Object.keys(X).length===0&&m.delete(H)}i.remove(C)}function R(C){const M=i.get(C);n.deleteTexture(M.__webglTexture);const H=C.source,X=m.get(H);delete X[M.__cacheKey],o.memory.textures--}function P(C){const M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(M.__webglFramebuffer[X]))for(let $=0;$<M.__webglFramebuffer[X].length;$++)n.deleteFramebuffer(M.__webglFramebuffer[X][$]);else n.deleteFramebuffer(M.__webglFramebuffer[X]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[X])}else{if(Array.isArray(M.__webglFramebuffer))for(let X=0;X<M.__webglFramebuffer.length;X++)n.deleteFramebuffer(M.__webglFramebuffer[X]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let X=0;X<M.__webglColorRenderbuffer.length;X++)M.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=C.textures;for(let X=0,$=H.length;X<$;X++){const ce=i.get(H[X]);ce.__webglTexture&&(n.deleteTexture(ce.__webglTexture),o.memory.textures--),i.remove(H[X])}i.remove(C)}let D=0;function z(){D=0}function k(){return D}function N(C){D=C}function O(){const C=D;return C>=s.maxTextures&&Ze("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function I(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function G(C,M){const H=i.get(C);if(C.isVideoTexture&&U(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){const X=C.image;if(X===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(H,C,M);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+M)}function Y(C,M){const H=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Ie(H,C,M);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+M)}function te(C,M){const H=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Ie(H,C,M);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+M)}function Z(C,M){const H=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){We(H,C,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+M)}const ue={[xo]:n.REPEAT,[ti]:n.CLAMP_TO_EDGE,[Va]:n.MIRRORED_REPEAT},Ge={[Gt]:n.NEAREST,[gp]:n.NEAREST_MIPMAP_NEAREST,[Lr]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[Vo]:n.LINEAR_MIPMAP_NEAREST,[Ni]:n.LINEAR_MIPMAP_LINEAR},Ue={[vp]:n.NEVER,[wp]:n.ALWAYS,[Mp]:n.LESS,[Yc]:n.LEQUAL,[yp]:n.EQUAL,[Zc]:n.GEQUAL,[Sp]:n.GREATER,[bp]:n.NOTEQUAL};function Pe(C,M){if(M.type===Rn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Jt||M.magFilter===Vo||M.magFilter===Lr||M.magFilter===Ni||M.minFilter===Jt||M.minFilter===Vo||M.minFilter===Lr||M.minFilter===Ni)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ue[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ue[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ue[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Ge[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Ge[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Gt||M.minFilter!==Lr&&M.minFilter!==Ni||M.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function J(C,M){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));const X=M.source;let $=m.get(X);$===void 0&&($={},m.set(X,$));const ce=I(M);if(ce!==C.__cacheKey){$[ce]===void 0&&($[ce]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),$[ce].usedTimes++;const de=$[C.__cacheKey];de!==void 0&&($[C.__cacheKey].usedTimes--,de.usedTimes===0&&R(M)),C.__cacheKey=ce,C.__webglTexture=$[ce].texture}return H}function he(C,M,H){return Math.floor(Math.floor(C/H)/M)}function oe(C,M,H,X){const ce=C.updateRanges;if(ce.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,H,X,M.data);else{ce.sort((ze,Me)=>ze.start-Me.start);let de=0;for(let ze=1;ze<ce.length;ze++){const Me=ce[de],ge=ce[ze],Ve=Me.start+Me.count,Ye=he(ge.start,M.width,4),Qe=he(Me.start,M.width,4);ge.start<=Ve+1&&Ye===Qe&&he(ge.start+ge.count-1,M.width,4)===Ye?Me.count=Math.max(Me.count,ge.start+ge.count-Me.start):(++de,ce[de]=ge)}ce.length=de+1;const K=t.getParameter(n.UNPACK_ROW_LENGTH),ee=t.getParameter(n.UNPACK_SKIP_PIXELS),me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let ze=0,Me=ce.length;ze<Me;ze++){const ge=ce[ze],Ve=Math.floor(ge.start/4),Ye=Math.ceil(ge.count/4),Qe=Ve%M.width,F=Math.floor(Ve/M.width),fe=Ye,j=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Qe,F,fe,j,H,X,M.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(n.UNPACK_SKIP_ROWS,me)}}function Ie(C,M,H){let X=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=n.TEXTURE_3D);const $=J(C,M),ce=M.source;t.bindTexture(X,C.__webglTexture,n.TEXTURE0+H);const de=i.get(ce);if(ce.version!==de.__version||$===!0){if(t.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const j=at.getPrimaries(at.workingColorSpace),xe=M.colorSpace===vi?null:at.getPrimaries(M.colorSpace),Te=M.colorSpace===vi||j===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let ee=p(M.image,!1,s.maxTextureSize);ee=gt(M,ee);const me=r.convert(M.format,M.colorSpace),ze=r.convert(M.type);let Me=_(M.internalFormat,me,ze,M.normalized,M.colorSpace,M.isVideoTexture);Pe(X,M);let ge;const Ve=M.mipmaps,Ye=M.isVideoTexture!==!0,Qe=de.__version===void 0||$===!0,F=ce.dataReady,fe=S(M,ee);if(M.isDepthTexture)Me=w(M.format===Ui,M.type),Qe&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,Me,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Me,ee.width,ee.height,0,me,ze,null));else if(M.isDataTexture)if(Ve.length>0){Ye&&Qe&&t.texStorage2D(n.TEXTURE_2D,fe,Me,Ve[0].width,Ve[0].height);for(let j=0,xe=Ve.length;j<xe;j++)ge=Ve[j],Ye?F&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ge.width,ge.height,me,ze,ge.data):t.texImage2D(n.TEXTURE_2D,j,Me,ge.width,ge.height,0,me,ze,ge.data);M.generateMipmaps=!1}else Ye?(Qe&&t.texStorage2D(n.TEXTURE_2D,fe,Me,ee.width,ee.height),F&&oe(M,ee,me,ze)):t.texImage2D(n.TEXTURE_2D,0,Me,ee.width,ee.height,0,me,ze,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ye&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Me,Ve[0].width,Ve[0].height,ee.depth);for(let j=0,xe=Ve.length;j<xe;j++)if(ge=Ve[j],M.format!==Cn)if(me!==null)if(Ye){if(F)if(M.layerUpdates.size>0){const Te=wu(ge.width,ge.height,M.format,M.type);for(const ie of M.layerUpdates){const Fe=ge.data.subarray(ie*Te/ge.data.BYTES_PER_ELEMENT,(ie+1)*Te/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,ie,ge.width,ge.height,1,me,Fe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ge.width,ge.height,ee.depth,me,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Me,ge.width,ge.height,ee.depth,0,ge.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ge.width,ge.height,ee.depth,me,ze,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,Me,ge.width,ge.height,ee.depth,0,me,ze,ge.data)}else{Ye&&Qe&&t.texStorage2D(n.TEXTURE_2D,fe,Me,Ve[0].width,Ve[0].height);for(let j=0,xe=Ve.length;j<xe;j++)ge=Ve[j],M.format!==Cn?me!==null?Ye?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,j,Me,ge.width,ge.height,0,ge.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?F&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ge.width,ge.height,me,ze,ge.data):t.texImage2D(n.TEXTURE_2D,j,Me,ge.width,ge.height,0,me,ze,ge.data)}else if(M.isDataArrayTexture)if(Ye){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Me,ee.width,ee.height,ee.depth),F)if(M.layerUpdates.size>0){const j=wu(ee.width,ee.height,M.format,M.type);for(const xe of M.layerUpdates){const Te=ee.data.subarray(xe*j/ee.data.BYTES_PER_ELEMENT,(xe+1)*j/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xe,ee.width,ee.height,1,me,ze,Te)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,me,ze,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,ee.width,ee.height,ee.depth,0,me,ze,ee.data);else if(M.isData3DTexture)Ye?(Qe&&t.texStorage3D(n.TEXTURE_3D,fe,Me,ee.width,ee.height,ee.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,me,ze,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Me,ee.width,ee.height,ee.depth,0,me,ze,ee.data);else if(M.isFramebufferTexture){if(Qe)if(Ye)t.texStorage2D(n.TEXTURE_2D,fe,Me,ee.width,ee.height);else{let j=ee.width,xe=ee.height;for(let Te=0;Te<fe;Te++)t.texImage2D(n.TEXTURE_2D,Te,Me,j,xe,0,me,ze,null),j>>=1,xe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const j=n.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),ee.parentNode!==j){j.appendChild(ee),d.add(M),j.onpaint=xe=>{const Te=xe.changedElements;for(const ie of d)Te.includes(ie.image)&&(ie.needsUpdate=!0)},j.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ee);else{const Te=n.RGBA,ie=n.RGBA,Fe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Te,ie,Fe,ee)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ve.length>0){if(Ye&&Qe){const j=st(Ve[0]);t.texStorage2D(n.TEXTURE_2D,fe,Me,j.width,j.height)}for(let j=0,xe=Ve.length;j<xe;j++)ge=Ve[j],Ye?F&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,me,ze,ge):t.texImage2D(n.TEXTURE_2D,j,Me,me,ze,ge);M.generateMipmaps=!1}else if(Ye){if(Qe){const j=st(ee);t.texStorage2D(n.TEXTURE_2D,fe,Me,j.width,j.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,ze,ee)}else t.texImage2D(n.TEXTURE_2D,0,Me,me,ze,ee);f(M)&&y(X),de.__version=ce.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function We(C,M,H){if(M.image.length!==6)return;const X=J(C,M),$=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+H);const ce=i.get($);if($.version!==ce.__version||X===!0){t.activeTexture(n.TEXTURE0+H);const de=at.getPrimaries(at.workingColorSpace),K=M.colorSpace===vi?null:at.getPrimaries(M.colorSpace),ee=M.colorSpace===vi||de===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const me=M.isCompressedTexture||M.image[0].isCompressedTexture,ze=M.image[0]&&M.image[0].isDataTexture,Me=[];for(let ie=0;ie<6;ie++)!me&&!ze?Me[ie]=p(M.image[ie],!0,s.maxCubemapSize):Me[ie]=ze?M.image[ie].image:M.image[ie],Me[ie]=gt(M,Me[ie]);const ge=Me[0],Ve=r.convert(M.format,M.colorSpace),Ye=r.convert(M.type),Qe=_(M.internalFormat,Ve,Ye,M.normalized,M.colorSpace),F=M.isVideoTexture!==!0,fe=ce.__version===void 0||X===!0,j=$.dataReady;let xe=S(M,ge);Pe(n.TEXTURE_CUBE_MAP,M);let Te;if(me){F&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Qe,ge.width,ge.height);for(let ie=0;ie<6;ie++){Te=Me[ie].mipmaps;for(let Fe=0;Fe<Te.length;Fe++){const Le=Te[Fe];M.format!==Cn?Ve!==null?F?j&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,0,0,Le.width,Le.height,Ve,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,Qe,Le.width,Le.height,0,Le.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,0,0,Le.width,Le.height,Ve,Ye,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,Qe,Le.width,Le.height,0,Ve,Ye,Le.data)}}}else{if(Te=M.mipmaps,F&&fe){Te.length>0&&xe++;const ie=st(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Qe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ze){F?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Me[ie].width,Me[ie].height,Ve,Ye,Me[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Qe,Me[ie].width,Me[ie].height,0,Ve,Ye,Me[ie].data);for(let Fe=0;Fe<Te.length;Fe++){const Pt=Te[Fe].image[ie].image;F?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,0,0,Pt.width,Pt.height,Ve,Ye,Pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,Qe,Pt.width,Pt.height,0,Ve,Ye,Pt.data)}}else{F?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ve,Ye,Me[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Qe,Ve,Ye,Me[ie]);for(let Fe=0;Fe<Te.length;Fe++){const Le=Te[Fe];F?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,0,0,Ve,Ye,Le.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,Qe,Ve,Ye,Le.image[ie])}}}f(M)&&y(n.TEXTURE_CUBE_MAP),ce.__version=$.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function _e(C,M,H,X,$,ce){const de=r.convert(H.format,H.colorSpace),K=r.convert(H.type),ee=_(H.internalFormat,de,K,H.normalized,H.colorSpace),me=i.get(M),ze=i.get(H);if(ze.__renderTarget=M,!me.__hasExternalTextures){const Me=Math.max(1,M.width>>ce),ge=Math.max(1,M.height>>ce);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,ce,ee,Me,ge,M.depth,0,de,K,null):t.texImage2D($,ce,ee,Me,ge,0,de,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ke(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,$,ze.__webglTexture,0,$e(M)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,$,ze.__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(C,M,H){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer){const X=M.depthTexture,$=X&&X.isDepthTexture?X.type:null,ce=w(M.stencilBuffer,$),de=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ke(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$e(M),ce,M.width,M.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,$e(M),ce,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ce,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,C)}else{const X=M.textures;for(let $=0;$<X.length;$++){const ce=X[$],de=r.convert(ce.format,ce.colorSpace),K=r.convert(ce.type),ee=_(ce.internalFormat,de,K,ce.normalized,ce.colorSpace);Ke(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$e(M),ee,M.width,M.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,$e(M),ee,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ee,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Xe(C,M,H){const X=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=i.get(M.depthTexture);if($.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X){if($.__webglInit===void 0&&($.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,M.depthTexture);const me=r.convert(M.depthTexture.format),ze=r.convert(M.depthTexture.type);let Me;M.depthTexture.format===ai?Me=n.DEPTH_COMPONENT24:M.depthTexture.format===Ui&&(Me=n.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Me,M.width,M.height,0,me,ze,null)}}else G(M.depthTexture,0);const ce=$.__webglTexture,de=$e(M),K=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,ee=M.depthTexture.format===Ui?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===ai)Ke(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,K,ce,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,ee,K,ce,0);else if(M.depthTexture.format===Ui)Ke(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,K,ce,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,ee,K,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(C){const M=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),X){const $=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),M.__depthDisposeCallback=$}M.__boundDepthTexture=X}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let X=0;X<6;X++)Xe(M.__webglFramebuffer[X],C,X);else{const X=C.texture.mipmaps;X&&X.length>0?Xe(M.__webglFramebuffer[0],C,0):Xe(M.__webglFramebuffer,C,0)}else if(H){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]===void 0)M.__webglDepthbuffer[X]=n.createRenderbuffer(),ct(M.__webglDepthbuffer[X],C,!1);else{const $=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,ce)}}else{const X=C.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ct(M.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,ce)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(C,M,H){const X=i.get(C);M!==void 0&&_e(X.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&ne(C)}function se(C){const M=C.texture,H=i.get(C),X=i.get(M);C.addEventListener("dispose",x);const $=C.textures,ce=C.isWebGLCubeRenderTarget===!0,de=$.length>1;if(de||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=M.version,o.memory.textures++),ce){H.__webglFramebuffer=[];for(let K=0;K<6;K++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[K]=[];for(let ee=0;ee<M.mipmaps.length;ee++)H.__webglFramebuffer[K][ee]=n.createFramebuffer()}else H.__webglFramebuffer[K]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let K=0;K<M.mipmaps.length;K++)H.__webglFramebuffer[K]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(de)for(let K=0,ee=$.length;K<ee;K++){const me=i.get($[K]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Ke(C)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let K=0;K<$.length;K++){const ee=$[K];H.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[K]);const me=r.convert(ee.format,ee.colorSpace),ze=r.convert(ee.type),Me=_(ee.internalFormat,me,ze,ee.normalized,ee.colorSpace,C.isXRRenderTarget===!0),ge=$e(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,Me,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,H.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),ct(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,M);for(let K=0;K<6;K++)if(M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)_e(H.__webglFramebuffer[K][ee],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ee);else _e(H.__webglFramebuffer[K],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);f(M)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let K=0,ee=$.length;K<ee;K++){const me=$[K],ze=i.get(me);let Me=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Me=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,ze.__webglTexture),Pe(Me,me),_e(H.__webglFramebuffer,C,me,n.COLOR_ATTACHMENT0+K,Me,0),f(me)&&y(Me)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,X.__webglTexture),Pe(K,M),M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)_e(H.__webglFramebuffer[ee],C,M,n.COLOR_ATTACHMENT0,K,ee);else _e(H.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,K,0);f(M)&&y(K),t.unbindTexture()}C.depthBuffer&&ne(C)}function be(C){const M=C.textures;for(let H=0,X=M.length;H<X;H++){const $=M[H];if(f($)){const ce=b(C),de=i.get($).__webglTexture;t.bindTexture(ce,de),y(ce),t.unbindTexture()}}}const ve=[],qe=[];function Oe(C){if(C.samples>0){if(Ke(C)===!1){const M=C.textures,H=C.width,X=C.height;let $=n.COLOR_BUFFER_BIT;const ce=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(C),K=M.length>1;if(K)for(let me=0;me<M.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const ee=C.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let me=0;me<M.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[me]);const ze=i.get(M[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ze,0)}n.blitFramebuffer(0,0,H,X,0,0,H,X,$,n.NEAREST),c===!0&&(ve.length=0,qe.length=0,ve.push(n.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ve.push(ce),qe.push(ce),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,qe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let me=0;me<M.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,de.__webglColorRenderbuffer[me]);const ze=i.get(M[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function $e(C){return Math.min(s.maxSamples,C.samples)}function Ke(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function U(C){const M=o.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function gt(C,M){const H=C.colorSpace,X=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Mo&&H!==vi&&(at.getTransfer(H)===ft?(X!==Cn||$!==pn)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",H)),M}function st(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.getTextureUnits=k,this.setTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=te,this.setTextureCube=Z,this.rebindTextures=re,this.setupRenderTarget=se,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Yv(n,e){function t(i,s=vi){let r;const o=at.getTransfer(s);if(i===pn)return n.UNSIGNED_BYTE;if(i===Hc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Gc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Uh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Fh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ih)return n.BYTE;if(i===Nh)return n.SHORT;if(i===dr)return n.UNSIGNED_SHORT;if(i===kc)return n.INT;if(i===Wn)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===oi)return n.HALF_FLOAT;if(i===Oh)return n.ALPHA;if(i===zh)return n.RGB;if(i===Cn)return n.RGBA;if(i===ai)return n.DEPTH_COMPONENT;if(i===Ui)return n.DEPTH_STENCIL;if(i===Vc)return n.RED;if(i===Wc)return n.RED_INTEGER;if(i===zi)return n.RG;if(i===Xc)return n.RG_INTEGER;if(i===qc)return n.RGBA_INTEGER;if(i===co||i===lo||i===uo||i===ho)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wa||i===Xa||i===qa||i===Ya)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Za||i===$a||i===Ka||i===Ja||i===Qa||i===_o||i===ja)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Za||i===$a)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ka)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ja)return r.COMPRESSED_R11_EAC;if(i===Qa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===_o)return r.COMPRESSED_RG11_EAC;if(i===ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ec||i===tc||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===cc||i===lc||i===uc||i===hc||i===dc||i===fc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ec)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ic)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ac)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pc||i===mc||i===gc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===pc)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xc||i===_c||i===vo||i===vc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===xc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===_c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Zv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$v=`
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

}`;class Kv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new $h(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Mn({vertexShader:Zv,fragmentShader:$v,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Q(new dn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jv extends Hi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,m=null,g=null;const v=typeof XRWebGLBinding<"u",p=new Kv,f={},y=t.getContextAttributes();let b=null,_=null;const w=[],S=[],A=new le;let x=null;const T=new fn;T.viewport=new Rt;const R=new fn;R.viewport=new Rt;const P=[T,R],D=new o0;let z=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let he=w[J];return he===void 0&&(he=new $o,w[J]=he),he.getTargetRaySpace()},this.getControllerGrip=function(J){let he=w[J];return he===void 0&&(he=new $o,w[J]=he),he.getGripSpace()},this.getHand=function(J){let he=w[J];return he===void 0&&(he=new $o,w[J]=he),he.getHandSpace()};function N(J){const he=S.indexOf(J.inputSource);if(he===-1)return;const oe=w[he];oe!==void 0&&(oe.update(J.inputSource,J.frame,l||o),oe.dispatchEvent({type:J.type,data:J.inputSource}))}function O(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",I);for(let J=0;J<w.length;J++){const he=S[J];he!==null&&(S[J]=null,w[J].disconnect(he))}z=null,k=null,p.reset();for(const J in f)delete f[J];e.setRenderTarget(b),m=null,h=null,d=null,s=null,_=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",O),s.addEventListener("inputsourceschange",I),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Ie=null,We=null;y.depth&&(We=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=y.stencil?Ui:ai,Ie=y.stencil?fr:Wn);const _e={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(_e),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Vn(h.textureWidth,h.textureHeight,{format:Cn,type:pn,depthTexture:new Ts(h.textureWidth,h.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const oe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new Vn(m.framebufferWidth,m.framebufferHeight,{format:Cn,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Pe.setContext(s),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function I(J){for(let he=0;he<J.removed.length;he++){const oe=J.removed[he],Ie=S.indexOf(oe);Ie>=0&&(S[Ie]=null,w[Ie].disconnect(oe))}for(let he=0;he<J.added.length;he++){const oe=J.added[he];let Ie=S.indexOf(oe);if(Ie===-1){for(let _e=0;_e<w.length;_e++)if(_e>=S.length){S.push(oe),Ie=_e;break}else if(S[_e]===null){S[_e]=oe,Ie=_e;break}if(Ie===-1)break}const We=w[Ie];We&&We.connect(oe)}}const G=new L,Y=new L;function te(J,he,oe){G.setFromMatrixPosition(he.matrixWorld),Y.setFromMatrixPosition(oe.matrixWorld);const Ie=G.distanceTo(Y),We=he.projectionMatrix.elements,_e=oe.projectionMatrix.elements,ct=We[14]/(We[10]-1),Xe=We[14]/(We[10]+1),ne=(We[9]+1)/We[5],re=(We[9]-1)/We[5],se=(We[8]-1)/We[0],be=(_e[8]+1)/_e[0],ve=ct*se,qe=ct*be,Oe=Ie/(-se+be),$e=Oe*-se;if(he.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX($e),J.translateZ(Oe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),We[10]===-1)J.projectionMatrix.copy(he.projectionMatrix),J.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ke=ct+Oe,U=Xe+Oe,gt=ve-$e,st=qe+(Ie-$e),C=ne*Xe/U*Ke,M=re*Xe/U*Ke;J.projectionMatrix.makePerspective(gt,st,C,M,Ke,U),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Z(J,he){he===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(he.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let he=J.near,oe=J.far;p.texture!==null&&(p.depthNear>0&&(he=p.depthNear),p.depthFar>0&&(oe=p.depthFar)),D.near=R.near=T.near=he,D.far=R.far=T.far=oe,(z!==D.near||k!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),z=D.near,k=D.far),D.layers.mask=J.layers.mask|6,T.layers.mask=D.layers.mask&-5,R.layers.mask=D.layers.mask&-3;const Ie=J.parent,We=D.cameras;Z(D,Ie);for(let _e=0;_e<We.length;_e++)Z(We[_e],Ie);We.length===2?te(D,T,R):D.projectionMatrix.copy(T.projectionMatrix),ue(J,D,Ie)};function ue(J,he,oe){oe===null?J.matrix.copy(he.matrixWorld):(J.matrix.copy(oe.matrixWorld),J.matrix.invert(),J.matrix.multiply(he.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(he.projectionMatrix),J.projectionMatrixInverse.copy(he.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=mr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(J){c=J,h!==null&&(h.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(J){return f[J]};let Ge=null;function Ue(J,he){if(u=he.getViewerPose(l||o),g=he,u!==null){const oe=u.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let Ie=!1;oe.length!==D.cameras.length&&(D.cameras.length=0,Ie=!0);for(let Xe=0;Xe<oe.length;Xe++){const ne=oe[Xe];let re=null;if(m!==null)re=m.getViewport(ne);else{const be=d.getViewSubImage(h,ne);re=be.viewport,Xe===0&&(e.setRenderTargetTextures(_,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(_))}let se=P[Xe];se===void 0&&(se=new fn,se.layers.enable(Xe),se.viewport=new Rt,P[Xe]=se),se.matrix.fromArray(ne.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ne.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(re.x,re.y,re.width,re.height),Xe===0&&(D.matrix.copy(se.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ie===!0&&D.cameras.push(se)}const We=s.enabledFeatures;if(We&&We.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const Xe=d.getDepthInformation(oe[0]);Xe&&Xe.isValid&&Xe.texture&&p.init(Xe,s.renderState)}if(We&&We.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let Xe=0;Xe<oe.length;Xe++){const ne=oe[Xe].camera;if(ne){let re=f[ne];re||(re=new $h,f[ne]=re);const se=d.getCameraImage(ne);re.sourceTexture=se}}}}for(let oe=0;oe<w.length;oe++){const Ie=S[oe],We=w[oe];Ie!==null&&We!==void 0&&We.update(Ie,he,l||o)}Ge&&Ge(J,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}const Pe=new ld;Pe.setAnimationLoop(Ue),this.setAnimationLoop=function(J){Ge=J},this.dispose=function(){}}}const Qv=new _t,gd=new Je;gd.set(-1,0,0,0,1,0,0,0,1);function jv(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,od(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,y,b,_){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,_)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),v(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,y,b):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===en&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===en&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const y=e.get(f),b=y.envMap,_=y.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(Qv.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(gd),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,y,b){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=b*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===en&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){const y=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function eM(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,w){const S=w.program;i.uniformBlockBinding(_,S)}function l(_,w){let S=s[_.id];S===void 0&&(p(_),S=u(_),s[_.id]=S,_.addEventListener("dispose",y));const A=w.program;i.updateUBOMapping(_,A);const x=e.render.frame;r[_.id]!==x&&(h(_),r[_.id]=x)}function u(_){const w=d();_.__bindingPointIndex=w;const S=n.createBuffer(),A=_.__size,x=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const w=s[_.id],S=_.uniforms,A=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let x=0,T=S.length;x<T;x++){const R=S[x];if(Array.isArray(R))for(let P=0,D=R.length;P<D;P++)m(R[P],x,P,A);else m(R,x,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(_,w,S,A){if(v(_,w,S,A)===!0){const x=_.__offset,T=_.value;if(Array.isArray(T)){let R=0;for(let P=0;P<T.length;P++){const D=T[P],z=f(D);g(D,_.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,_.__data)}}function g(_,w,S){typeof _=="number"||typeof _=="boolean"?w[0]=_:_.isMatrix3?(w[0]=_.elements[0],w[1]=_.elements[1],w[2]=_.elements[2],w[3]=0,w[4]=_.elements[3],w[5]=_.elements[4],w[6]=_.elements[5],w[7]=0,w[8]=_.elements[6],w[9]=_.elements[7],w[10]=_.elements[8],w[11]=0):ArrayBuffer.isView(_)?w.set(new _.constructor(_.buffer,_.byteOffset,w.length)):_.toArray(w,S)}function v(_,w,S,A){const x=_.value,T=w+"_"+S;if(A[T]===void 0)return typeof x=="number"||typeof x=="boolean"?A[T]=x:ArrayBuffer.isView(x)?A[T]=x.slice():A[T]=x.clone(),!0;{const R=A[T];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function p(_){const w=_.uniforms;let S=0;const A=16;for(let T=0,R=w.length;T<R;T++){const P=Array.isArray(w[T])?w[T]:[w[T]];for(let D=0,z=P.length;D<z;D++){const k=P[D],N=Array.isArray(k.value)?k.value:[k.value];for(let O=0,I=N.length;O<I;O++){const G=N[O],Y=f(G),te=S%A,Z=te%Y.boundary,ue=te+Z;S+=Z,ue!==0&&A-ue<Y.storage&&(S+=A-ue),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=Y.storage}}}const x=S%A;return x>0&&(S+=A-x),_.__size=S,_.__cache={},this}function f(_){const w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(w.boundary=16,w.storage=_.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",_),w}function y(_){const w=_.target;w.removeEventListener("dispose",y);const S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function b(){for(const _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:b}}const tM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Nn=null;function nM(){return Nn===null&&(Nn=new Yh(tM,16,16,zi,oi),Nn.name="DFG_LUT",Nn.minFilter=Jt,Nn.magFilter=Jt,Nn.wrapS=ti,Nn.wrapT=ti,Nn.generateMipmaps=!1,Nn.needsUpdate=!0),Nn}class iM{constructor(e={}){const{canvas:t=Tp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:m=pn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=m,p=new Set([qc,Xc,Wc]),f=new Set([pn,Wn,dr,fr,Hc,Gc]),y=new Uint32Array(4),b=new Int32Array(4),_=new L;let w=null,S=null;const A=[],x=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let P=!1,D=null,z=null,k=null,N=null;this._outputColorSpace=Kt;let O=0,I=0,G=null,Y=-1,te=null;const Z=new Rt,ue=new Rt;let Ge=null;const Ue=new ot(0);let Pe=0,J=t.width,he=t.height,oe=1,Ie=null,We=null;const _e=new Rt(0,0,J,he),ct=new Rt(0,0,J,he);let Xe=!1;const ne=new Qc;let re=!1,se=!1;const be=new _t,ve=new L,qe=new Rt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function Ke(){return G===null?oe:1}let U=i;function gt(E,B){return t.getContext(E,B)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zc}`),t.addEventListener("webglcontextlost",Pt,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",Pn,!1),U===null){const B="webgl2";if(U=gt(B,E),U===null)throw gt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw rt("WebGLRenderer: "+E.message),E}let st,C,M,H,X,$,ce,de,K,ee,me,ze,Me,ge,Ve,Ye,Qe,F,fe,j,xe,Te,ie;function Fe(){st=new n_(U),st.init(),xe=new Yv(U,st),C=new Zx(U,st,e,xe),M=new Xv(U,st),C.reversedDepthBuffer&&h&&M.buffers.depth.setReversed(!0),z=U.createFramebuffer(),k=U.createFramebuffer(),N=U.createFramebuffer(),H=new r_(U),X=new Lv,$=new qv(U,st,M,X,C,xe,H),ce=new t_(R),de=new l0(U),Te=new qx(U,de),K=new i_(U,de,H,Te),ee=new a_(U,K,de,Te,H),F=new o_(U,C,$),Ve=new $x(X),me=new Pv(R,ce,st,C,Te,Ve),ze=new jv(R,X),Me=new Iv,ge=new Bv(st),Qe=new Xx(R,ce,M,ee,g,c),Ye=new Wv(R,ee,C),ie=new eM(U,H,C,M),fe=new Yx(U,st,H),j=new s_(U,st,H),H.programs=me.programs,R.capabilities=C,R.extensions=st,R.properties=X,R.renderLists=Me,R.shadowMap=Ye,R.state=M,R.info=H}Fe(),v!==pn&&(T=new l_(v,t.width,t.height,a,s,r));const Le=new Jv(R,U);this.xr=Le,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=st.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=st.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(E){E!==void 0&&(oe=E,this.setSize(J,he,!1))},this.getSize=function(E){return E.set(J,he)},this.setSize=function(E,B,q=!0){if(Le.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}J=E,he=B,t.width=Math.floor(E*oe),t.height=Math.floor(B*oe),q===!0&&(t.style.width=E+"px",t.style.height=B+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(J*oe,he*oe).floor()},this.setDrawingBufferSize=function(E,B,q){J=E,he=B,oe=q,t.width=Math.floor(E*q),t.height=Math.floor(B*q),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(v===pn){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){Ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Z)},this.getViewport=function(E){return E.copy(_e)},this.setViewport=function(E,B,q,V){E.isVector4?_e.set(E.x,E.y,E.z,E.w):_e.set(E,B,q,V),M.viewport(Z.copy(_e).multiplyScalar(oe).round())},this.getScissor=function(E){return E.copy(ct)},this.setScissor=function(E,B,q,V){E.isVector4?ct.set(E.x,E.y,E.z,E.w):ct.set(E,B,q,V),M.scissor(ue.copy(ct).multiplyScalar(oe).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(E){M.setScissorTest(Xe=E)},this.setOpaqueSort=function(E){Ie=E},this.setTransparentSort=function(E){We=E},this.getClearColor=function(E){return E.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,q=!0){let V=0;if(E){let W=!1;if(G!==null){const Ee=G.texture.format;W=p.has(Ee)}if(W){const Ee=G.texture.type,Ce=f.has(Ee),we=Qe.getClearColor(),Ne=Qe.getClearAlpha(),Be=we.r,je=we.g,nt=we.b;Ce?(y[0]=Be,y[1]=je,y[2]=nt,y[3]=Ne,U.clearBufferuiv(U.COLOR,0,y)):(b[0]=Be,b[1]=je,b[2]=nt,b[3]=Ne,U.clearBufferiv(U.COLOR,0,b))}else V|=U.COLOR_BUFFER_BIT}B&&(V|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),Qe.dispose(),Me.dispose(),ge.dispose(),X.dispose(),ce.dispose(),ee.dispose(),Te.dispose(),ie.dispose(),me.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",ml),Le.removeEventListener("sessionend",gl),Si.stop()};function Pt(E){E.preventDefault(),bo("WebGLRenderer: Context Lost."),P=!0}function bt(){bo("WebGLRenderer: Context Restored."),P=!1;const E=H.autoReset,B=Ye.enabled,q=Ye.autoUpdate,V=Ye.needsUpdate,W=Ye.type;Fe(),H.autoReset=E,Ye.enabled=B,Ye.autoUpdate=q,Ye.needsUpdate=V,Ye.type=W}function Pn(E){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ln(E){const B=E.target;B.removeEventListener("dispose",Ln),Ed(B)}function Ed(E){Td(E),X.remove(E)}function Td(E){const B=X.get(E).programs;B!==void 0&&(B.forEach(function(q){me.releaseProgram(q)}),E.isShaderMaterial&&me.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,q,V,W,Ee){B===null&&(B=Oe);const Ce=W.isMesh&&W.matrixWorld.determinantAffine()<0,we=Cd(E,B,q,V,W);M.setMaterial(V,Ce);let Ne=q.index,Be=1;if(V.wireframe===!0){if(Ne=K.getWireframeAttribute(q),Ne===void 0)return;Be=2}const je=q.drawRange,nt=q.attributes.position;let ke=je.start*Be,xt=(je.start+je.count)*Be;Ee!==null&&(ke=Math.max(ke,Ee.start*Be),xt=Math.min(xt,(Ee.start+Ee.count)*Be)),Ne!==null?(ke=Math.max(ke,0),xt=Math.min(xt,Ne.count)):nt!=null&&(ke=Math.max(ke,0),xt=Math.min(xt,nt.count));const Dt=xt-ke;if(Dt<0||Dt===1/0)return;Te.setup(W,V,we,q,Ne);let Lt,Mt=fe;if(Ne!==null&&(Lt=de.get(Ne),Mt=j,Mt.setIndex(Lt)),W.isMesh)V.wireframe===!0?(M.setLineWidth(V.wireframeLinewidth*Ke()),Mt.setMode(U.LINES)):Mt.setMode(U.TRIANGLES);else if(W.isLine){let qt=V.linewidth;qt===void 0&&(qt=1),M.setLineWidth(qt*Ke()),W.isLineSegments?Mt.setMode(U.LINES):W.isLineLoop?Mt.setMode(U.LINE_LOOP):Mt.setMode(U.LINE_STRIP)}else W.isPoints?Mt.setMode(U.POINTS):W.isSprite&&Mt.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(st.get("WEBGL_multi_draw"))Mt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const qt=W._multiDrawStarts,Re=W._multiDrawCounts,on=W._multiDrawCount,lt=Ne?de.get(Ne).bytesPerElement:1,gn=X.get(V).currentProgram.getUniforms();for(let Dn=0;Dn<on;Dn++)gn.setValue(U,"_gl_DrawID",Dn),Mt.render(qt[Dn]/lt,Re[Dn])}else if(W.isInstancedMesh)Mt.renderInstances(ke,Dt,W.count);else if(q.isInstancedBufferGeometry){const qt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Re=Math.min(q.instanceCount,qt);Mt.renderInstances(ke,Dt,Re)}else Mt.render(ke,Dt)};function pl(E,B,q){E.transparent===!0&&E.side===rn&&E.forceSinglePass===!1?(E.side=en,E.needsUpdate=!0,Tr(E,B,q),E.side=yi,E.needsUpdate=!0,Tr(E,B,q),E.side=rn):Tr(E,B,q)}this.compile=function(E,B,q=null){q===null&&(q=E),S=ge.get(q),S.init(B),x.push(S),q.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),E!==q&&E.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),S.setupLights();const V=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Ee=W.material;if(Ee)if(Array.isArray(Ee))for(let Ce=0;Ce<Ee.length;Ce++){const we=Ee[Ce];pl(we,q,W),V.add(we)}else pl(Ee,q,W),V.add(Ee)}),S=x.pop(),V},this.compileAsync=function(E,B,q=null){const V=this.compile(E,B,q);return new Promise(W=>{function Ee(){if(V.forEach(function(Ce){X.get(Ce).currentProgram.isReady()&&V.delete(Ce)}),V.size===0){W(E);return}setTimeout(Ee,10)}st.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let zo=null;function Ad(E){zo&&zo(E)}function ml(){Si.stop()}function gl(){Si.start()}const Si=new ld;Si.setAnimationLoop(Ad),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(E){zo=E,Le.setAnimationLoop(E),E===null?Si.stop():Si.start()},Le.addEventListener("sessionstart",ml),Le.addEventListener("sessionend",gl),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(E,B);const q=Le.enabled===!0&&Le.isPresenting===!0,V=T!==null&&(G===null||q)&&T.begin(R,G);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(B),B=Le.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,B,G),S=ge.get(E,x.length),S.init(B),S.state.textureUnits=$.getTextureUnits(),x.push(S),be.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ne.setFromProjectionMatrix(be,kn,B.reversedDepth),se=this.localClippingEnabled,re=Ve.init(this.clippingPlanes,se),w=Me.get(E,A.length),w.init(),A.push(w),Le.enabled===!0&&Le.isPresenting===!0){const Ce=R.xr.getDepthSensingMesh();Ce!==null&&Bo(Ce,B,-1/0,R.sortObjects)}Bo(E,B,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(Ie,We,B.reversedDepth),$e=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,$e&&Qe.addToRenderList(w,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Ve.beginShadows();const W=S.state.shadowsArray;if(Ye.render(W,E,B),re===!0&&Ve.endShadows(),(V&&T.hasRenderPass())===!1){const Ce=w.opaque,we=w.transmissive;if(S.setupLights(),B.isArrayCamera){const Ne=B.cameras;if(we.length>0)for(let Be=0,je=Ne.length;Be<je;Be++){const nt=Ne[Be];_l(Ce,we,E,nt)}$e&&Qe.render(E);for(let Be=0,je=Ne.length;Be<je;Be++){const nt=Ne[Be];xl(w,E,nt,nt.viewport)}}else we.length>0&&_l(Ce,we,E,B),$e&&Qe.render(E),xl(w,E,B)}G!==null&&I===0&&($.updateMultisampleRenderTarget(G),$.updateRenderTargetMipmap(G)),V&&T.end(R),E.isScene===!0&&E.onAfterRender(R,E,B),Te.resetDefaultState(),Y=-1,te=null,x.pop(),x.length>0?(S=x[x.length-1],$.setTextureUnits(S.state.textureUnits),re===!0&&Ve.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,D!==null&&D.renderEnd()};function Bo(E,B,q,V){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLightProbeGrid)S.pushLightProbeGrid(E);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ne.intersectsSprite(E)){V&&qe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(be);const Ce=ee.update(E),we=E.material;we.visible&&w.push(E,Ce,we,q,qe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ne.intersectsObject(E))){const Ce=ee.update(E),we=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),qe.copy(E.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),qe.copy(Ce.boundingSphere.center)),qe.applyMatrix4(E.matrixWorld).applyMatrix4(be)),Array.isArray(we)){const Ne=Ce.groups;for(let Be=0,je=Ne.length;Be<je;Be++){const nt=Ne[Be],ke=we[nt.materialIndex];ke&&ke.visible&&w.push(E,Ce,ke,q,qe.z,nt)}}else we.visible&&w.push(E,Ce,we,q,qe.z,null)}}const Ee=E.children;for(let Ce=0,we=Ee.length;Ce<we;Ce++)Bo(Ee[Ce],B,q,V)}function xl(E,B,q,V){const{opaque:W,transmissive:Ee,transparent:Ce}=E;S.setupLightsView(q),re===!0&&Ve.setGlobalState(R.clippingPlanes,q),V&&M.viewport(Z.copy(V)),W.length>0&&Er(W,B,q),Ee.length>0&&Er(Ee,B,q),Ce.length>0&&Er(Ce,B,q),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function _l(E,B,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[V.id]===void 0){const ke=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[V.id]=new Vn(1,1,{generateMipmaps:!0,type:ke?oi:pn,minFilter:Ni,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace})}const Ee=S.state.transmissionRenderTarget[V.id],Ce=V.viewport||Z;Ee.setSize(Ce.z*R.transmissionResolutionScale,Ce.w*R.transmissionResolutionScale);const we=R.getRenderTarget(),Ne=R.getActiveCubeFace(),Be=R.getActiveMipmapLevel();R.setRenderTarget(Ee),R.getClearColor(Ue),Pe=R.getClearAlpha(),Pe<1&&R.setClearColor(16777215,.5),R.clear(),$e&&Qe.render(q);const je=R.toneMapping;R.toneMapping=Hn;const nt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),S.setupLightsView(V),re===!0&&Ve.setGlobalState(R.clippingPlanes,V),Er(E,q,V),$.updateMultisampleRenderTarget(Ee),$.updateRenderTargetMipmap(Ee),st.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let xt=0,Dt=B.length;xt<Dt;xt++){const Lt=B[xt],{object:Mt,geometry:qt,material:Re,group:on}=Lt;if(Re.side===rn&&Mt.layers.test(V.layers)){const lt=Re.side;Re.side=en,Re.needsUpdate=!0,vl(Mt,q,V,qt,Re,on),Re.side=lt,Re.needsUpdate=!0,ke=!0}}ke===!0&&($.updateMultisampleRenderTarget(Ee),$.updateRenderTargetMipmap(Ee))}R.setRenderTarget(we,Ne,Be),R.setClearColor(Ue,Pe),nt!==void 0&&(V.viewport=nt),R.toneMapping=je}function Er(E,B,q){const V=B.isScene===!0?B.overrideMaterial:null;for(let W=0,Ee=E.length;W<Ee;W++){const Ce=E[W],{object:we,geometry:Ne,group:Be}=Ce;let je=Ce.material;je.allowOverride===!0&&V!==null&&(je=V),we.layers.test(q.layers)&&vl(we,B,q,Ne,je,Be)}}function vl(E,B,q,V,W,Ee){E.onBeforeRender(R,B,q,V,W,Ee),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(R,B,q,V,E,Ee),W.transparent===!0&&W.side===rn&&W.forceSinglePass===!1?(W.side=en,W.needsUpdate=!0,R.renderBufferDirect(q,B,V,W,E,Ee),W.side=yi,W.needsUpdate=!0,R.renderBufferDirect(q,B,V,W,E,Ee),W.side=rn):R.renderBufferDirect(q,B,V,W,E,Ee),E.onAfterRender(R,B,q,V,W,Ee)}function Tr(E,B,q){B.isScene!==!0&&(B=Oe);const V=X.get(E),W=S.state.lights,Ee=S.state.shadowsArray,Ce=W.state.version,we=me.getParameters(E,W.state,Ee,B,q,S.state.lightProbeGridArray),Ne=me.getProgramCacheKey(we);let Be=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,V.fog=B.fog;const je=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=ce.get(E.envMap||V.environment,je),V.envMapRotation=V.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Be===void 0&&(E.addEventListener("dispose",Ln),Be=new Map,V.programs=Be);let nt=Be.get(Ne);if(nt!==void 0){if(V.currentProgram===nt&&V.lightsStateVersion===Ce)return yl(E,we),nt}else we.uniforms=me.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,q,we),E.onBeforeCompile(we,R),nt=me.acquireProgram(we,Ne),Be.set(Ne,nt),V.uniforms=we.uniforms;const ke=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ke.clippingPlanes=Ve.uniform),yl(E,we),V.needsLights=Ld(E),V.lightsStateVersion=Ce,V.needsLights&&(ke.ambientLightColor.value=W.state.ambient,ke.lightProbe.value=W.state.probe,ke.directionalLights.value=W.state.directional,ke.directionalLightShadows.value=W.state.directionalShadow,ke.spotLights.value=W.state.spot,ke.spotLightShadows.value=W.state.spotShadow,ke.rectAreaLights.value=W.state.rectArea,ke.ltc_1.value=W.state.rectAreaLTC1,ke.ltc_2.value=W.state.rectAreaLTC2,ke.pointLights.value=W.state.point,ke.pointLightShadows.value=W.state.pointShadow,ke.hemisphereLights.value=W.state.hemi,ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ke.spotLightMatrix.value=W.state.spotLightMatrix,ke.spotLightMap.value=W.state.spotLightMap,ke.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=S.state.lightProbeGridArray.length>0,V.currentProgram=nt,V.uniformsList=null,nt}function Ml(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=fo.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function yl(E,B){const q=X.get(E);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Rd(E,B){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;_.setFromMatrixPosition(B.matrixWorld);for(let q=0,V=E.length;q<V;q++){const W=E[q];if(W.texture!==null&&W.boundingBox.containsPoint(_))return W}return null}function Cd(E,B,q,V,W){B.isScene!==!0&&(B=Oe),$.resetTextureUnits();const Ee=B.fog,Ce=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?B.environment:null,we=G===null?R.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:at.workingColorSpace,Ne=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Be=ce.get(V.envMap||Ce,Ne),je=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,nt=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),ke=!!q.morphAttributes.position,xt=!!q.morphAttributes.normal,Dt=!!q.morphAttributes.color;let Lt=Hn;V.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Lt=R.toneMapping);const Mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,qt=Mt!==void 0?Mt.length:0,Re=X.get(V),on=S.state.lights;if(re===!0&&(se===!0||E!==te)){const wt=E===te&&V.id===Y;Ve.setState(V,E,wt)}let lt=!1;V.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==on.state.version||Re.outputColorSpace!==we||W.isBatchedMesh&&Re.batching===!1||!W.isBatchedMesh&&Re.batching===!0||W.isBatchedMesh&&Re.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Re.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Re.instancing===!1||!W.isInstancedMesh&&Re.instancing===!0||W.isSkinnedMesh&&Re.skinning===!1||!W.isSkinnedMesh&&Re.skinning===!0||W.isInstancedMesh&&Re.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Re.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Re.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Re.instancingMorph===!1&&W.morphTexture!==null||Re.envMap!==Be||V.fog===!0&&Re.fog!==Ee||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Ve.numPlanes||Re.numIntersection!==Ve.numIntersection)||Re.vertexAlphas!==je||Re.vertexTangents!==nt||Re.morphTargets!==ke||Re.morphNormals!==xt||Re.morphColors!==Dt||Re.toneMapping!==Lt||Re.morphTargetsCount!==qt||!!Re.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,Re.__version=V.version);let gn=Re.currentProgram;lt===!0&&(gn=Tr(V,B,W),D&&V.isNodeMaterial&&D.onUpdateProgram(V,gn,Re));let Dn=!1,ci=!1,Vi=!1;const yt=gn.getUniforms(),It=Re.uniforms;if(M.useProgram(gn.program)&&(Dn=!0,ci=!0,Vi=!0),V.id!==Y&&(Y=V.id,ci=!0),Re.needsLights){const wt=Rd(S.state.lightProbeGridArray,W);Re.lightProbeGrid!==wt&&(Re.lightProbeGrid=wt,ci=!0)}if(Dn||te!==E){M.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),yt.setValue(U,"projectionMatrix",E.projectionMatrix),yt.setValue(U,"viewMatrix",E.matrixWorldInverse);const ui=yt.map.cameraPosition;ui!==void 0&&ui.setValue(U,ve.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&yt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&yt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),te!==E&&(te=E,ci=!0,Vi=!0)}if(Re.needsLights&&(on.state.directionalShadowMap.length>0&&yt.setValue(U,"directionalShadowMap",on.state.directionalShadowMap,$),on.state.spotShadowMap.length>0&&yt.setValue(U,"spotShadowMap",on.state.spotShadowMap,$),on.state.pointShadowMap.length>0&&yt.setValue(U,"pointShadowMap",on.state.pointShadowMap,$)),W.isSkinnedMesh){yt.setOptional(U,W,"bindMatrix"),yt.setOptional(U,W,"bindMatrixInverse");const wt=W.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),yt.setValue(U,"boneTexture",wt.boneTexture,$))}W.isBatchedMesh&&(yt.setOptional(U,W,"batchingTexture"),yt.setValue(U,"batchingTexture",W._matricesTexture,$),yt.setOptional(U,W,"batchingIdTexture"),yt.setValue(U,"batchingIdTexture",W._indirectTexture,$),yt.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&yt.setValue(U,"batchingColorTexture",W._colorsTexture,$));const li=q.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&F.update(W,q,gn),(ci||Re.receiveShadow!==W.receiveShadow)&&(Re.receiveShadow=W.receiveShadow,yt.setValue(U,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&B.environment!==null&&(It.envMapIntensity.value=B.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=nM()),ci){if(yt.setValue(U,"toneMappingExposure",R.toneMappingExposure),Re.needsLights&&Pd(It,Vi),Ee&&V.fog===!0&&ze.refreshFogUniforms(It,Ee),ze.refreshMaterialUniforms(It,V,oe,he,S.state.transmissionRenderTarget[E.id]),Re.needsLights&&Re.lightProbeGrid){const wt=Re.lightProbeGrid;It.probesSH.value=wt.texture,It.probesMin.value.copy(wt.boundingBox.min),It.probesMax.value.copy(wt.boundingBox.max),It.probesResolution.value.copy(wt.resolution)}fo.upload(U,Ml(Re),It,$)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(fo.upload(U,Ml(Re),It,$),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&yt.setValue(U,"center",W.center),yt.setValue(U,"modelViewMatrix",W.modelViewMatrix),yt.setValue(U,"normalMatrix",W.normalMatrix),yt.setValue(U,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){const wt=V.uniformsGroups;for(let ui=0,Wi=wt.length;ui<Wi;ui++){const Sl=wt[ui];ie.update(Sl,gn),ie.bind(Sl,gn)}}return gn}function Pd(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Ld(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(E,B,q){const V=X.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),X.get(E.texture).__webglTexture=B,X.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const q=X.get(E);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,q=0){G=E,O=B,I=q;let V=null,W=!1,Ee=!1;if(E){const we=X.get(E);if(we.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(U.FRAMEBUFFER,we.__webglFramebuffer),Z.copy(E.viewport),ue.copy(E.scissor),Ge=E.scissorTest,M.viewport(Z),M.scissor(ue),M.setScissorTest(Ge),Y=-1;return}else if(we.__webglFramebuffer===void 0)$.setupRenderTarget(E);else if(we.__hasExternalTextures)$.rebindTextures(E,X.get(E.texture).__webglTexture,X.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const je=E.depthTexture;if(we.__boundDepthTexture!==je){if(je!==null&&X.has(je)&&(E.width!==je.image.width||E.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(E)}}const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Ee=!0);const Be=X.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Be[B])?V=Be[B][q]:V=Be[B],W=!0):E.samples>0&&$.useMultisampledRTT(E)===!1?V=X.get(E).__webglMultisampledFramebuffer:Array.isArray(Be)?V=Be[q]:V=Be,Z.copy(E.viewport),ue.copy(E.scissor),Ge=E.scissorTest}else Z.copy(_e).multiplyScalar(oe).floor(),ue.copy(ct).multiplyScalar(oe).floor(),Ge=Xe;if(q!==0&&(V=z),M.bindFramebuffer(U.FRAMEBUFFER,V)&&M.drawBuffers(E,V),M.viewport(Z),M.scissor(ue),M.setScissorTest(Ge),W){const we=X.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,we.__webglTexture,q)}else if(Ee){const we=B;for(let Ne=0;Ne<E.textures.length;Ne++){const Be=X.get(E.textures[Ne]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ne,Be.__webglTexture,q,we)}}else if(E!==null&&q!==0){const we=X.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,we.__webglTexture,q)}Y=-1},this.readRenderTargetPixels=function(E,B,q,V,W,Ee,Ce,we=0){if(!(E&&E.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){M.bindFramebuffer(U.FRAMEBUFFER,Ne);try{const Be=E.textures[we],je=Be.format,nt=Be.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+we),!C.textureFormatReadable(je)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(nt)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-V&&q>=0&&q<=E.height-W&&U.readPixels(B,q,V,W,xe.convert(je),xe.convert(nt),Ee)}finally{const Be=G!==null?X.get(G).__webglFramebuffer:null;M.bindFramebuffer(U.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(E,B,q,V,W,Ee,Ce,we=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne)if(B>=0&&B<=E.width-V&&q>=0&&q<=E.height-W){M.bindFramebuffer(U.FRAMEBUFFER,Ne);const Be=E.textures[we],je=Be.format,nt=Be.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+we),!C.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ke),U.bufferData(U.PIXEL_PACK_BUFFER,Ee.byteLength,U.STREAM_READ),U.readPixels(B,q,V,W,xe.convert(je),xe.convert(nt),0);const xt=G!==null?X.get(G).__webglFramebuffer:null;M.bindFramebuffer(U.FRAMEBUFFER,xt);const Dt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Ap(U,Dt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ke),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ee),U.deleteBuffer(ke),U.deleteSync(Dt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,q=0){const V=Math.pow(2,-q),W=Math.floor(E.image.width*V),Ee=Math.floor(E.image.height*V),Ce=B!==null?B.x:0,we=B!==null?B.y:0;$.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,Ce,we,W,Ee),M.unbindTexture()},this.copyTextureToTexture=function(E,B,q=null,V=null,W=0,Ee=0){let Ce,we,Ne,Be,je,nt,ke,xt,Dt;const Lt=E.isCompressedTexture?E.mipmaps[Ee]:E.image;if(q!==null)Ce=q.max.x-q.min.x,we=q.max.y-q.min.y,Ne=q.isBox3?q.max.z-q.min.z:1,Be=q.min.x,je=q.min.y,nt=q.isBox3?q.min.z:0;else{const It=Math.pow(2,-W);Ce=Math.floor(Lt.width*It),we=Math.floor(Lt.height*It),E.isDataArrayTexture?Ne=Lt.depth:E.isData3DTexture?Ne=Math.floor(Lt.depth*It):Ne=1,Be=0,je=0,nt=0}V!==null?(ke=V.x,xt=V.y,Dt=V.z):(ke=0,xt=0,Dt=0);const Mt=xe.convert(B.format),qt=xe.convert(B.type);let Re;B.isData3DTexture?($.setTexture3D(B,0),Re=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?($.setTexture2DArray(B,0),Re=U.TEXTURE_2D_ARRAY):($.setTexture2D(B,0),Re=U.TEXTURE_2D),M.activeTexture(U.TEXTURE0),M.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),M.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),M.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const on=M.getParameter(U.UNPACK_ROW_LENGTH),lt=M.getParameter(U.UNPACK_IMAGE_HEIGHT),gn=M.getParameter(U.UNPACK_SKIP_PIXELS),Dn=M.getParameter(U.UNPACK_SKIP_ROWS),ci=M.getParameter(U.UNPACK_SKIP_IMAGES);M.pixelStorei(U.UNPACK_ROW_LENGTH,Lt.width),M.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Lt.height),M.pixelStorei(U.UNPACK_SKIP_PIXELS,Be),M.pixelStorei(U.UNPACK_SKIP_ROWS,je),M.pixelStorei(U.UNPACK_SKIP_IMAGES,nt);const Vi=E.isDataArrayTexture||E.isData3DTexture,yt=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const It=X.get(E),li=X.get(B),wt=X.get(It.__renderTarget),ui=X.get(li.__renderTarget);M.bindFramebuffer(U.READ_FRAMEBUFFER,wt.__webglFramebuffer),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let Wi=0;Wi<Ne;Wi++)Vi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(E).__webglTexture,W,nt+Wi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(B).__webglTexture,Ee,Dt+Wi)),U.blitFramebuffer(Be,je,Ce,we,ke,xt,Ce,we,U.DEPTH_BUFFER_BIT,U.NEAREST);M.bindFramebuffer(U.READ_FRAMEBUFFER,null),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||X.has(E)){const It=X.get(E),li=X.get(B);M.bindFramebuffer(U.READ_FRAMEBUFFER,k),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,N);for(let wt=0;wt<Ne;wt++)Vi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,It.__webglTexture,W,nt+wt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,It.__webglTexture,W),yt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,li.__webglTexture,Ee,Dt+wt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,li.__webglTexture,Ee),W!==0?U.blitFramebuffer(Be,je,Ce,we,ke,xt,Ce,we,U.COLOR_BUFFER_BIT,U.NEAREST):yt?U.copyTexSubImage3D(Re,Ee,ke,xt,Dt+wt,Be,je,Ce,we):U.copyTexSubImage2D(Re,Ee,ke,xt,Be,je,Ce,we);M.bindFramebuffer(U.READ_FRAMEBUFFER,null),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else yt?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Re,Ee,ke,xt,Dt,Ce,we,Ne,Mt,qt,Lt.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Re,Ee,ke,xt,Dt,Ce,we,Ne,Mt,Lt.data):U.texSubImage3D(Re,Ee,ke,xt,Dt,Ce,we,Ne,Mt,qt,Lt):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ee,ke,xt,Ce,we,Mt,qt,Lt.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ee,ke,xt,Lt.width,Lt.height,Mt,Lt.data):U.texSubImage2D(U.TEXTURE_2D,Ee,ke,xt,Ce,we,Mt,qt,Lt);M.pixelStorei(U.UNPACK_ROW_LENGTH,on),M.pixelStorei(U.UNPACK_IMAGE_HEIGHT,lt),M.pixelStorei(U.UNPACK_SKIP_PIXELS,gn),M.pixelStorei(U.UNPACK_SKIP_ROWS,Dn),M.pixelStorei(U.UNPACK_SKIP_IMAGES,ci),Ee===0&&B.generateMipmaps&&U.generateMipmap(Re),M.unbindTexture()},this.initRenderTarget=function(E){X.get(E).__webglFramebuffer===void 0&&$.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?$.setTextureCube(E,0):E.isData3DTexture?$.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?$.setTexture2DArray(E,0):$.setTexture2D(E,0),M.unbindTexture()},this.resetState=function(){O=0,I=0,G=null,M.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}const Zu=200,$u=440,sM=`
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
`,rM=`
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
`;function oM(){const n=new dn($u,$u,Zu,Zu);n.rotateX(-Math.PI/2);const e=n.attributes.position,t=new Float32Array(e.count);for(let r=0;r<e.count;r++)t[r]=-Ot(e.getX(r),e.getZ(r));n.setAttribute("aDepth",new mn(t,1));const i=new Mn({uniforms:{uTime:{value:0}},vertexShader:sM,fragmentShader:rM}),s=new Q(n,i);return s.position.y=0,s.frustumCulled=!1,{mesh:s,update(r){i.uniforms.uTime.value=r}}}const aM=12596780,Ku=7,Ju=1,Ys=3.2,Qu=12;function cM(){return new Cs({color:aM})}function lM(n){const e=bs.find(v=>v.kind==="bridge");if(!e)return;const t=ps(Bn(e.a)),i=ps(Bn(e.b)),s=e.deckY??6,r=new L(i.x-t.x,0,i.z-t.z),o=r.length();if(o<1)return;r.normalize();const a=new L(-r.z,0,r.x),c=(v,p,f)=>new L(t.x+(i.x-t.x)*v+a.x*p,f,t.z+(i.z-t.z)*v+a.z*p),l=v=>v==="x"?Math.atan2(-r.z,r.x):Math.atan2(a.x,a.z),u=cM(),d=new Cs({color:16767370}),h=new Q(new et(o,Ju,Ku),u);h.position.set((t.x+i.x)/2,s-Ju/2,(t.z+i.z)/2),h.rotation.y=l("x"),n.add(h);for(const v of[1/3,2/3]){for(const p of[-Ys,Ys]){const f=new Q(new et(1.5,20,1.5),u),y=c(v,p,s+2);f.position.copy(y),f.rotation.y=l("x"),n.add(f)}for(const p of[s+4,s+10]){const f=new Q(new et(1,1,Ys*2+1.5),u);f.position.copy(c(v,0,p)),f.rotation.y=l("z"),n.add(f)}}const m=[];for(const v of[-Ys,Ys]){const p=new To([c(0,v,s+.2),c(.15,v,s+5),c(.3333333333333333,v,s+Qu),c(.5,v,s+2.5),c(.6666666666666666,v,s+Qu),c(.85,v,s+5),c(1,v,s+.2)]);m.push(p),n.add(new Q(new vs(p,64,.25,8,!1),u))}for(const v of m){const p=v.getPoints(400);for(let f=6;f<o-3;f+=6){const y=f/o,b=t.x+(i.x-t.x)*y;let _=p[0],w=1/0;for(const x of p){const T=Math.abs(x.x-b);T<w&&(w=T,_=x)}const S=_.y-s;if(S<.5)continue;const A=new Q(new dt(.08,.08,S,6),u);A.position.set(b,s+S/2,_.z),n.add(A)}}let g=1;for(let v=6;v<o-3;v+=12){const p=v/o,f=c(p,g*(Ku/2-.7),s),y=new Q(new dt(.12,.16,4.2,8),u);y.position.set(f.x,s+2.1,f.z),n.add(y);const b=new Q(new ht(.32,10,8),d);b.position.set(f.x,s+4.2,f.z),n.add(b),g*=-1}}const[sl,xd,rl,_d]=nn,Cc=(sl+rl)/2,Mr=(xd+_d)/2,ba=(()=>{const n=[];let e=0;for(const t of[Mr-10,Mr+10])for(let i=sl+2.5;i<=rl-2.5;i+=5){const s=.9+e*37%10/50;n.push({x:i,z:t,s}),e++}return n})(),uM=[{x0:sl,z0:Mr-1.5,x1:rl,z1:Mr+1.5},{x0:Cc-1.5,z0:xd,x1:Cc+1.5,z1:_d}],hM={x:Cc,z:Mr,w:14,d:9,h:5},dM=1e6,Ai=3.4;function vd(){return{winLit:[],winUnlit:[],sills:[],doors:[],flowerBoxes:[],petals:[],leaves:[],awnings:[[],[],[]],bays:[]}}function fM(n,e){n.winLit.push(...e.winLit),n.winUnlit.push(...e.winUnlit),n.sills.push(...e.sills),n.doors.push(...e.doors),n.flowerBoxes.push(...e.flowerBoxes),n.petals.push(...e.petals),n.leaves.push(...e.leaves),e.awnings.forEach((t,i)=>n.awnings[i].push(...t)),n.bays.push(...e.bays)}const pM={north:0,south:1,east:2,west:3};function mM(n){const{sx:e,sy:t,sz:i,minY:s,cx:r,cz:o,district:a,seedBase:c,colorIdx:l,bayWindow:u}=n,d=vd(),h=(_,w,S,A,x,T,R,P=0)=>({x:_,y:w,z:S,rotX:P,rotY:A,sx:x,sy:T,sz:R}),m=Math.min(4.2,t*.28),g=t-m,v=Math.max(1,Math.round(g/Ai)),p=Math.min(2.6,e*.18),f=Math.min(2.4,Ai*.55),y=Math.min(3,Ai*.82),b=_=>{const w=_==="north"||_==="south"?e:i,S=w>29?[-.27,.27]:[-.2,.2],A=_==="north"?Math.PI:_==="south"?0:_==="west"?-Math.PI/2:Math.PI/2,x=_==="north"||_==="south",T=_==="north"?-1:_==="south"?1:_==="west"?-1:1,R=(N,O,I)=>x?[r+N,O,o+T*(i*.5+I)]:[r+T*(e*.5+I),O,o+N],P=(N,O)=>{S.forEach((I,G)=>{const Y=Qn(c*1e3+pM[_]*100+N*10+G),te=p*(.88+Y()*.24),Z=f*(.88+Y()*.24),ue=s+g-Z*.5-.35,Ge=Math.min(O,ue),[Ue,Pe,J]=R(w*I,Ge,.055);(Y()<.35?d.winLit:d.winUnlit).push(h(Ue,Pe,J,A,te,Z,1));const[he,oe,Ie]=R(w*I,Ge-Z*.5-.08,.1);if(d.sills.push(h(he,oe,Ie,x?0:Math.PI/2,te+.38,.18,.16)),Y()<.3){const[We,_e,ct]=R(w*I,Ge-Z*.5-.35,.28);d.flowerBoxes.push(h(We,_e,ct,x?0:Math.PI/2,te*.8,.35,.4));for(let Xe=0;Xe<3;Xe++){const[ne,re,se]=R(w*I+(Xe-1)*te*.22,Ge-Z*.5-.12,.28);(Xe%2?d.petals:d.leaves).push(h(ne,re,se,0,.14,.14,.14))}}})},[D,z,k]=R(0,s+y*.5,.06);d.doors.push(h(D,z,k,A,Math.min(2.4,w*.13),y,1)),P(0,s+Ai*.58);for(let N=1;N<v;N++)P(N,s+Ai*N+Ai*.58)};if(b("north"),b("south"),b("east"),b("west"),a==="merchant-row"){const _=Math.min(e*.7,10),w=2.2;d.awnings[l%3].push(h(r,s+y+.55,o+i*.5+w*.5-.15,0,_,w,1,-Math.PI/2))}if(u){const _=Math.min(3.2,e*.4),w=Ai*.95,S=.8;d.bays.push(h(r,s+w*.5,o+i*.5+S*.5-.05,0,_,w,S))}return d}const gM=n=>-n,Ms={x:13,y:12,z:18},Co=2,ju=(n,e)=>Math.max(-e,Math.min(e,n));function xM(n,e){const t=ju(n,Ta),i=ju(e,Aa);return{look:[t,Co,i],cam:[t+Ms.x,Co+Ms.y,i+Ms.z]}}function _M(n,e,t,i,s){if(t||s)return e;if(i<=0)return n;const r=1-Math.exp(-i*5);return[n[0]+(e[0]-n[0])*r,n[1]+(e[1]-n[1])*r]}function vM(n,e,t){if(t<=0)return n;const i=Math.atan2(Math.sin(e-n),Math.cos(e-n)),s=i*(1-Math.exp(-t*1.25)),r=i-s;return n+s+Math.sign(r)*Math.max(0,Math.abs(r)-1.35)}const Et=n=>new Cs({color:n}),Ii=Et(9262134),tn=Et(5189671),ro=Et(16773071),eh=Et(16112046),MM=Et(1670008),oo=Et(13200951),yM=Et(14657867),SM=Et(4948573);function Ft(n,e,t,i=Ii){const s=new Q(new et(n,e,t),i);return s.castShadow=s.receiveShadow=!0,s}function _n(n,e,t=Ii,i=10){const s=new Q(new dt(n,n,e,i),t);return s.castShadow=s.receiveShadow=!0,s}function He(n,e,t,i,s){return e.position.set(t,i,s),n.add(e),e}class bM{constructor(){pe(this,"group",new ut);pe(this,"meg",new ut);pe(this,"pip",new ut);pe(this,"tail",new ut);pe(this,"clock",0);pe(this,"disposed",!1);pe(this,"furniture",new Map);pe(this,"facing",0);pe(this,"lastHome",!1);this.group.name="Meg attic room",this.makeRoom(),this.makeBasics(),this.makeStations(),this.makeMeg(),this.makePumpkin(),this.makeFurniture(),this.group.visible=!1}update(e,t,i){if(this.disposed)return;const s=e,r=s.mode==="home";if(this.group.visible=r,!r){this.lastHome=!1;return}const o=Math.min(.05,Math.max(0,t||.016));this.clock+=o;const a=s.homePosition||{x:0,z:0},c=new L(Qs.clamp(a.x,-7.5,7.5),0,Qs.clamp(a.z,-5.5,5.5));this.lastHome?this.meg.position.lerp(c,1-Math.exp(-o*14)):this.meg.position.copy(c),this.lastHome=!0;const l=s.homeFacing;typeof l=="number"?this.facing=l:c.distanceToSquared(this.meg.position)>.001&&(this.facing=Math.atan2(c.x-this.meg.position.x,c.z-this.meg.position.z)),this.meg.rotation.y=this.facing;const u=c.distanceTo(this.meg.position)>.035;this.meg.children.filter(m=>m.name==="limb").forEach((m,g)=>m.rotation.x=i?0:Math.sin(this.clock*11+g*Math.PI)*(u?.55:.08)),this.meg.position.y=i?0:u?Math.abs(Math.sin(this.clock*11))*.045:Math.sin(this.clock*2)*.018;const d=this.meg.position.clone().add(new L(-Math.sin(this.facing)*1.25,0,-Math.cos(this.facing)*1.25));d.x=Qs.clamp(d.x,-7.3,7.3),d.z=Qs.clamp(d.z,-5.3,5.3),this.pip.position.lerp(d,1-Math.exp(-o*4)),this.pip.lookAt(this.meg.position.x,0,this.meg.position.z);const h=this.meg.position.distanceToSquared(new L(4,0,3))<2.7;this.pip.position.y=!i&&h?Math.sin(this.clock*6)*.075:0,this.tail.rotation.z=i?.12:Math.sin(this.clock*(h?5:2))*.34,this.furniture.forEach((m,g)=>m.visible=s.profile.furniture.includes(g))}dispose(){if(this.disposed)return;this.disposed=!0;const e=new Set,t=new Set,i=new Set;this.group.traverse(s=>{const r=s;r.geometry&&e.add(r.geometry),(r.material?Array.isArray(r.material)?r.material:[r.material]:[]).forEach(a=>{t.add(a),Object.values(a).forEach(c=>{c instanceof Xt&&i.add(c)})})}),e.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),i.forEach(s=>s.dispose()),this.group.clear()}makeRoom(){const e=Ft(18,.25,14,Ii);He(this.group,e,0,-.13,0);for(let s=-6;s<=6;s+=1){const r=Ft(17.8,.012,.035,tn);He(this.group,r,0,.01,s+.5)}const t=Ft(18,8,.22,eh);He(this.group,t,0,4,-7);const i=Ft(.22,8,14,eh);He(this.group,i,4,4,0),i.position.x=-9;for(const[s,r,o,a]of[[-8.65,0,.34,14],[0,-6.65,18,.34],[0,-3.9,18,.25]])He(this.group,Ft(o,.28,a,tn),s,7.55,r);for(const s of[-8.4,-4.4,0,4.4,8.4]){const r=Ft(.32,7.6,.35,tn);r.rotation.z=s/34,He(this.group,r,s,3.8,-6.75)}this.makeWindow()}makeWindow(){const e=new ut;He(this.group,e,2.3,4.7,-6.78);const t=new Q(new dn(3.2,2.45),new Fn({color:16764813}));t.position.z=.02,e.add(t);for(const[s,r,o,a]of[[0,0,3.45,.17],[0,0,.16,2.6],[-1.65,0,.16,2.6],[1.65,0,.16,2.6],[0,1.22,3.45,.16]])He(e,Ft(o,a,.12,tn),s,r,.08);for(const s of[-2,2]){const r=new Q(new dt(.45,.56,2.65,8),Et(8559016));r.scale.z=.28,He(e,r,s,0,.22)}const i=Ft(4.5,.18,.55,Ii);He(e,i,0,-1.38,.32)}makeBasics(){const e=new ut;He(this.group,e,5.8,0,4.65),He(e,Ft(4.2,.35,2.6,tn),0,.55,0),He(e,Ft(4,.32,2.35,Et(10249076)),0,.9,0),He(e,Ft(4.25,2.25,.22,tn),0,1.5,1.16),He(e,Ft(1.55,.26,.8,ro),-.9,1.2,-.55),[[-1.8,-1],[1.8,-1],[-1.8,1],[1.8,1]].forEach(([s,r])=>He(e,_n(.12,.65,tn),s,.25,r));const t=new ut;He(this.group,t,-5,0,-3),He(t,Ft(3.3,.22,1.55,Ii),0,1.75,0),[-1.35,1.35].forEach(s=>[-.58,.58].forEach(r=>He(t,_n(.11,1.7,tn),s,.85,r))),He(t,Ft(.9,.72,1.15,tn),-1.05,1.25,0),He(t,Ft(.62,.12,.88,Et(15982509)),.55,1.93,.03);const i=new ut;He(this.group,i,-4.2,0,-1.45),He(i,_n(.48,.16,Et(7314849)),0,1,0),He(i,_n(.13,1,tn),0,.5,0)}makeStations(){const e=new ut;He(this.group,e,5,0,-3),He(e,Ft(2.2,.16,.46,tn),0,2.55,0),[-.75,0,.75].forEach(s=>{const r=_n(.06,2.35,Ii);r.rotation.z=-.16+s*.1,He(e,r,s,1.25,0),He(e,new Q(new $t(.29,.52,7),oo),s-.14,.28,0)});const t=new ut;He(this.group,t,-5,0,3),He(t,_n(.48,1.15,tn),0,.58,0),He(t,Ft(1.25,.14,.9,Et(6065798)),0,1.2,0),t.rotation.y=-.25;const i=new Q(new dt(1.15,1.3,.16,16),Et(14262655));He(this.group,i,4,.08,3),oh.forEach(s=>this.group.add(this.label(s.id==="jobs"?"POST":s.id==="decor"?"HOME":s.id.toUpperCase(),s.x,3.3,s.z)))}makeMeg(){const e=this.meg;e.name="Meg",this.group.add(e),He(e,new Q(new ht(.34,12,10),Et(16761758)),0,1.52,0);const t=new Q(new ht(.38,12,10,0,Math.PI*2,0,Math.PI*.55),Et(9323307));He(e,t,0,1.7,.01);const i=new ut;He(e,i,0,1.94,0),He(i,new Q(new dt(.48,.48,.12,12),Et(4534349)),0,0,0);const s=new Q(new $t(.3,.82,12),Et(4534349));s.rotation.z=-.18,He(i,s,.06,.39,0),He(e,new Q(new $t(.48,1.05,12),MM),0,.84,0);for(const[r,o]of[[-.22,.08],[.22,.08]]){const a=_n(.09,.55,tn);a.name="limb",He(e,a,r,.3,o);const c=_n(.075,.58,Et(16761758));c.name="limb",c.rotation.z=r*1.8,He(e,c,r*1.5,1.06,0)}}makePumpkin(){const e=this.pip;e.name="Pumpkin",this.group.add(e),He(e,new Q(new ht(.43,12,9),ro),0,.48,0),He(e,new Q(new ht(.34,12,9),ro),0,.76,.28);for(const r of[-.2,.2]){const o=new Q(new $t(.16,.36,4),oo);He(e,o,r,1.12,.26);const a=new Q(new ht(.045,8,6),Et(2893616));He(e,a,r*.72,.8,.59)}const t=Ft(.18,.42,.08,oo);t.rotation.z=Math.PI/2,He(e,t,0,.86,.58);const i=new ut;this.tail=i,He(e,i,0,.51,-.38);const s=new Q(new wn(.34,.07,6,12,Math.PI*1.4),oo);s.rotation.x=Math.PI/2,He(i,s,0,.36,-.22)}makeFurniture(){const e=(t,i,s,r)=>{const o=r();o.position.set(i,0,s),o.visible=!1,this.group.add(o),this.furniture.set(t,o)};e("rug",0,-.2,()=>{const t=new Q(new dt(2.1,2.1,.05,20),Et(7508365));return t.position.y=.035,t}),e("plant",-7,4.6,()=>{const t=new ut;He(t,_n(.38,.7,Et(13273941)),0,.35,0);for(let i=0;i<6;i++){const s=new Q(new ht(.35,8,6),SM);He(t,s,Math.sin(i)*.28,1+Math.abs(Math.cos(i))*.25,Math.cos(i)*.28)}return t}),e("shelf",-7.7,-2.2,()=>{const t=new ut;He(t,Ft(.55,3.1,2.2,tn),0,1.55,0);for(let i=.6;i<3;i+=.75)He(t,Ft(.7,.1,2.1,Ii),0,i,0);return t}),e("lamp",1.8,-4.8,()=>{const t=new ut;He(t,_n(.1,2.2,yM),0,1.1,0);const i=new Q(new $t(.52,.48,12,1,!0),ro);return He(t,i,0,2.1,0),t}),e("cushion",1.4,3.5,()=>{const t=new Q(new ht(.6,12,7),Et(13858182));return t.scale.y=.32,t.position.y=.18,t}),e("cat-tree",7,2.5,()=>{const t=new ut;return He(t,_n(.17,2.5,Et(13610617)),0,1.25,0),He(t,_n(.72,.16,Et(13605991)),0,2.45,0),t})}label(e,t,i,s){const r=document.createElement("canvas");r.width=256,r.height=92;const o=r.getContext("2d");o.fillStyle="#3f2b35",o.roundRect(4,4,248,84,18),o.fill(),o.strokeStyle="#f7d688",o.lineWidth=5,o.roundRect(4,4,248,84,18),o.stroke(),o.fillStyle="#fff3cf",o.font="bold 36px sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(e,128,48);const a=new um(new Wh({map:new gr(r),transparent:!0}));return a.position.set(t,i,s),a.scale.set(1.7,.62,1),a}}function wM(n,e,t){const i=n.mode==="flight"||n.mode==="tutorial",s=Math.hypot(n.player.velocity.x,n.player.velocity.y,n.player.velocity.z),r=i&&!n.paused&&!t;return{bob:r&&n.player.hover&&s<.3?Math.sin(e*1.5)*.035:0,speed:r?Math.min(1,Math.max(0,(s-5)/16.6)):0}}class EM{constructor(e){pe(this,"element",document.createElement("div"));this.element.className="flight-effects",this.element.setAttribute("aria-hidden","true");for(let t=0;t<14;t++){const i=document.createElement("i"),s=t*Math.PI*2/14;i.style.left=`${50+Math.cos(s)*43}%`,i.style.top=`${50+Math.sin(s)*43}%`,i.style.setProperty("--angle",`${s}rad`),i.style.animationDelay=`${-t*.17}s`,this.element.append(i)}e.insertAdjacentElement("afterend",this.element)}update(e,t){this.element.hidden=e<=0,this.element.style.setProperty("--speed",e.toFixed(3)),this.element.classList.toggle("low-quality",t)}dispose(){this.element.remove()}}const TM=[15907014,11063528,15915176,13154528];function th(n){const e=new Q(new et(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z));return e.position.set((n.min.x+n.max.x)/2,(n.min.y+n.max.y)/2,(n.min.z+n.max.z)/2),e}class AM{constructor(e){pe(this,"scene",new sm);pe(this,"camera",new fn(62,1,.1,900));pe(this,"renderer");pe(this,"effects");pe(this,"hero",new ut);pe(this,"dropParcel",new ut);pe(this,"glowColumn",new ut);pe(this,"glowMats",[]);pe(this,"lastGlowStopId");pe(this,"targetRing",new ut);pe(this,"clouds",new ut);pe(this,"birds",new ut);pe(this,"boats",[]);pe(this,"clock",0);pe(this,"camPos",new L(0,27,145));pe(this,"camLook",new L(0,18,90));pe(this,"homeLook",new L(0,Co,0));pe(this,"ray",new a0);pe(this,"blockers",[]);pe(this,"outlines",[]);pe(this,"beamGroup",null);pe(this,"beamLight",null);pe(this,"lighthouseLit",!0);pe(this,"sun");pe(this,"disposed",!1);pe(this,"lastMode");pe(this,"lastWidth",-1);pe(this,"lastHeight",-1);pe(this,"lastPixelRatio",-1);pe(this,"followYaw",0);pe(this,"world");pe(this,"water",null);pe(this,"room",new bM);pe(this,"outdoorFog",new wo(12180704,.0035));pe(this,"birdFlock",[]);this.renderer=new iM({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.effects=new EM(e),this.renderer.outputColorSpace=Kt,this.renderer.toneMapping=Bc,this.renderer.toneMappingExposure=1.12,this.renderer.setClearColor(11459048),this.scene.fog=new wo(12180704,.0035),this.camera.position.copy(this.camPos);const t=new e0(14283263,13074296,2.35);this.scene.add(t),this.sun=new s0(16765344,2.5),this.sun.position.set(-80,115,48),this.scene.add(this.sun),this.world=this.makeWorld(),this.scene.add(this.world,this.hero,this.dropParcel,this.glowColumn,this.targetRing,this.clouds,this.birds,this.room.group),this.makeHero(),this.makeDropParcel(),this.makeGlowColumn(),this.makeSkyLife(),this.resize()}resize(){this.lastWidth=-1}render(e,t,i){if(this.disposed)return;const s=e.paused?0:Math.min(.05,Math.max(0,t));this.clock+=s,this.water&&!i.reducedMotion&&this.water.update(this.clock);const r=wM(e,this.clock,i.reducedMotion);this.effects.update(r.speed,i.lowQuality);const o=this.renderer.domElement,a=Math.max(1,o.clientWidth||o.width),c=Math.max(1,o.clientHeight||o.height),l=i.lowQuality?1e6:2e6,u=Math.min(devicePixelRatio||1,Math.sqrt(l/(a*c)));(a!==this.lastWidth||c!==this.lastHeight||u!==this.lastPixelRatio)&&(this.renderer.setPixelRatio(u),this.renderer.setSize(a,c,!1),this.camera.aspect=a/c,this.camera.updateProjectionMatrix(),this.lastWidth=a,this.lastHeight=c,this.lastPixelRatio=u),this.renderer.shadowMap.enabled=!i.lowQuality,this.outlines.forEach(p=>{p.visible=!i.lowQuality});const d=e.mode==="home";if([this.world,this.hero,this.dropParcel,this.glowColumn,this.targetRing,this.clouds,this.birds].forEach(p=>p.visible=!d),this.room.update(e,s,i.reducedMotion),d){this.scene.fog=null,this.renderer.setClearColor(14010030),this.camera.fov=48,this.camera.updateProjectionMatrix();const p=e.homePosition||{x:0,z:0},f=xM(p.x,p.z),y=_M([this.homeLook.x,this.homeLook.z],[f.look[0],f.look[2]],this.lastMode!=="home",s,i.reducedMotion);this.homeLook.set(y[0],Co,y[1]),this.camera.position.set(this.homeLook.x+Ms.x,this.homeLook.y+Ms.y,this.homeLook.z+Ms.z),this.camera.up.set(0,1,0),this.camera.lookAt(this.homeLook),this.lastMode=e.mode,this.renderer.render(this.scene,this.camera);return}this.camera.fov!==62&&(this.camera.fov=62,this.camera.updateProjectionMatrix()),this.scene.fog=this.outdoorFog,this.renderer.setClearColor(11459048);const h=e.player.position,m=new L(h.x,h.y,h.z),g=this.lastMode===void 0||this.lastMode!==e.mode;this.hero.position.copy(m),this.hero.rotation.order="YXZ",this.hero.rotation.y=gM(e.player.yaw),this.hero.rotation.x=e.player.pitch*.4,this.hero.rotation.z=0,this.hero.scale.setScalar(e.mode==="title"||e.mode==="summary"?.86:.62),this.hero.position.y+=r.bob,this.animateSky(i.reducedMotion,s),this.updateBeacon(this.destination(e),i.reducedMotion||e.paused?0:s),this.updateGlowColumn(e,i.reducedMotion),this.updateDropParcel(e,i.reducedMotion?0:s,i.reducedMotion),this.updateCamera(e,m,s,i.reducedMotion,g),this.lastMode=e.mode;const v=e.run?Math.min(1,e.run.elapsed/480):.1;this.sun.color.setHSL(.095-v*.08,.9,.78),this.sun.intensity=2.5-v*.45,this.scene.fog.color.setHSL(.55-v*.48,.42,.82-v*.12),this.renderer.render(this.scene,this.camera)}dispose(){this.effects.dispose(),this.disposed=!0,this.scene.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const i=t.material;(Array.isArray(i)?i:[i]).forEach(s=>s==null?void 0:s.dispose())}),this.renderer.dispose()}makeWorld(){const e=new ut,t=ae(16772548),i=oM();this.water=i,e.add(i.mesh);const s=new dn(440,440,200,200);s.rotateX(-Math.PI/2);const r=s.attributes.position;for(let g=0;g<r.count;g++)r.setY(g,Ot(r.getX(g),r.getZ(g)));s.computeVertexNormals();const o=1024,a=document.createElement("canvas");a.width=o,a.height=o;const c=a.getContext("2d"),l=c.createImageData(o,o);l.data.set(jd(o)),c.putImageData(l,0,0);const u=new gr(a);u.colorSpace=Kt,u.anisotropy=4;const d=ae(16777215);d.map=u;const h=new Q(s,d);e.add(h);for(const g of bs){if(g.kind==="bridge")continue;const v=ps(Bn(g.a)),p=ps(Bn(g.b)),f=new L((v.x+p.x)/2,(v.y+p.y)/2+.15,(v.z+p.z)/2),y=new To([new L(v.x,v.y+.18,v.z),f,new L(p.x,p.y+.18,p.z)]),b=g.kind==="switchback"?2.2:2.8;e.add(new Q(new vs(y,24,b,8,!1),t));const _=[],w=y.getLength();for(let S=0;S<w-2;S+=4)_.push(y.getPointAt(S/w),y.getPointAt(Math.min(1,(S+2)/w)));for(let S=0;S<_.length;S+=2){const A=new To([_[S],_[S+1]]);e.add(new Q(new vs(A,4,.12,6,!1),ae(16774872)))}}lM(e);const m=ae(10117447);return bl.forEach(([g,v])=>{const p=new Q(new et(Gd,.7,Vd),m);p.position.set(g,.8,v),e.add(p)}),this.makeBuildings(e),this.makeGreenery(e),this.makeLighthouse(e),this.makeClockTower(e),this.makeObservatoryDome(e),this.makeBakeryDormer(e),this.makeMansionTerraces(e),this.makeBoats(e),this.makeLaundryLines(e),this.makeDockDressing(e),this.makeStreetLamps(e),this.makePark(e),e}makePark(e){const[t,i,s,r]=nn,o=(t+s)/2,a=(i+r)/2,c=Ot(o,a),l=new Q(new dn(s-t,r-i),ae(8367708));l.rotation.x=-Math.PI/2,l.position.set(o,c+.1,a),e.add(l);const u=new Nt,d=new ln(new dt(.35,.55,4,7),ae(7621174),ba.length),h=new ln(new ar(2.6,1),ae(5085035),ba.length);ba.forEach((_,w)=>{const S=Ot(_.x,_.z);u.rotation.set(0,w*2.39996,0),u.scale.setScalar(_.s),u.position.set(_.x,S+2*_.s,_.z),u.updateMatrix(),d.setMatrixAt(w,u.matrix),u.position.set(_.x,S+5.5*_.s,_.z),u.updateMatrix(),h.setMatrixAt(w,u.matrix)}),d.instanceMatrix.needsUpdate=!0,h.instanceMatrix.needsUpdate=!0,e.add(d,h);const m=ae(15260864);for(const _ of uM){const w=new Q(new et(_.x1-_.x0,.2,_.z1-_.z0),m);w.position.set((_.x0+_.x1)/2,c+.15,(_.z0+_.z1)/2),e.add(w)}const g=hM,v=new Cs({color:13625572,transparent:!0,opacity:.5}),p=new Q(new et(g.w,g.h,g.d),v);p.position.set(g.x,c+g.h/2,g.z),e.add(p);const f=g.d/2,y=new Q(new ht(f,16,10,0,Math.PI*2,0,Math.PI/2),v);y.position.set(g.x,c+g.h,g.z),e.add(y);const b=ae(8030858);for(let _=0;_<6;_++){const w=new Q(new wn(f,.15,6,12,Math.PI),b);w.position.set(g.x,c+g.h,g.z),w.rotation.y=_/6*Math.PI,e.add(w)}}makeLaundryLines(e){const t=ae(4865845),i=[ae(16747434),ae(8370408),ae(16777215),ae(16767306),ae(10147455)],s=[[-25,9,-50,-20,9,-32],[5,11,-50,15,11,-45],[-20,8,-22,15,8,-28]],r=Qn(42);s.forEach(([o,a,c,l,u,d])=>{const h=new L(o,a,c),m=new L(l,u,d),g=h.distanceTo(m),v=12;let p=h.clone();for(let y=1;y<=v;y++){const b=y/v,_=h.clone().lerp(m,b);_.y-=Math.sin(b*Math.PI)*.8;const w=p.distanceTo(_),S=new Q(new dt(.03,.03,w,4),t);S.position.copy(p).lerp(_,.5),S.lookAt(_),S.rotateX(Math.PI/2),e.add(S),p=_}const f=Math.floor(g/3);for(let y=0;y<f;y++){const b=(y+.7)/(f+.4),_=h.clone().lerp(m,b);_.y-=Math.sin(b*Math.PI)*.8;const w=.9+r()*.5,S=1.1+r()*.5,A=new Q(new dn(w,S),i[Math.floor(r()*i.length)]);A.position.set(_.x,_.y-S/2,_.z),A.rotation.y=Math.atan2(m.x-h.x,m.z-h.z)+Math.PI/2,A.material.side=rn,e.add(A)}})}makeDockDressing(e){const t=ae(11040318),i=ae(8016432),s=ae(13218953),r=bl,o=Qn(7);r.forEach(([a,c])=>{const l=2+Math.floor(o()*3);for(let d=0;d<l;d++){const h=1.1+o()*.5,m=new Q(new et(h,h,h),t);m.position.set(a-10+o()*20,1.15+h/2+(d===2?1.4:0),c-3+o()*6),m.rotation.y=o()*.6,m.castShadow=!0,e.add(m)}for(let d=0;d<2;d++){const h=new Q(new dt(.65,.65,1.5,10),i);h.position.set(a-8+o()*16,1.9,c-2.5+o()*5),h.castShadow=!0,e.add(h)}const u=new Q(new wn(.55,.18,8,16),s);u.position.set(a-6+o()*12,1.25,c-2+o()*4),u.rotation.x=Math.PI/2,e.add(u)})}makeStreetLamps(e){const t=ae(3816002),i=ae(16767370);[[-70,30],[-62,42],[-78,48],[-92,12],[-92,20],[-47,24],[-47,32],[-10,-40],[10,-40],[-10,-55],[10,-55]].forEach(([r,o])=>{const c=new Q(new dt(.12,.16,4.2,8),t);c.position.set(r,0+2.1,o),c.castShadow=!0,e.add(c);const l=new Q(new $t(.45,.35,8),t);l.position.set(r,0+4.55,o),e.add(l);const u=new Q(new ht(.32,10,8),i);u.position.set(r,0+4.2,o),e.add(u)})}makeBoats(e){const t=ae(9132604),i=ae(5996454),s=ae(7031343),r=ae(16117985),o=new bc;o.moveTo(0,4.2),o.quadraticCurveTo(1.7,2.5,1.6,0),o.quadraticCurveTo(1.5,-2.5,1,-3.4),o.quadraticCurveTo(0,-3.8,-1,-3.4),o.quadraticCurveTo(-1.5,-2.5,-1.6,0),o.quadraticCurveTo(-1.7,2.5,0,4.2);const a=new Ro(o,{depth:1.1,bevelEnabled:!1});a.rotateX(-Math.PI/2);const c=new bc;c.moveTo(0,4.5),c.quadraticCurveTo(1.95,2.6,1.85,0),c.quadraticCurveTo(1.75,-2.6,1.15,-3.65),c.quadraticCurveTo(0,-4.1,-1.15,-3.65),c.quadraticCurveTo(-1.75,-2.6,-1.85,0),c.quadraticCurveTo(-1.95,2.6,0,4.5);const l=new Sc;l.moveTo(0,3.9),l.quadraticCurveTo(1.45,2.4,1.35,0),l.quadraticCurveTo(1.25,-2.4,.85,-3.15),l.quadraticCurveTo(0,-3.5,-.85,-3.15),l.quadraticCurveTo(-1.25,-2.4,-1.35,0),l.quadraticCurveTo(-1.45,2.4,0,3.9),c.holes.push(l);const u=new Ro(c,{depth:.28,bevelEnabled:!1});u.rotateX(-Math.PI/2);const d=[.08,-.06,.1,-.08,.06,-.1];Wd.map(([m,g],v)=>[m,g,d[v]]).forEach(([m,g,v],p)=>{const f=new ut,y=p%2?i:t,b=new Q(a,y);b.position.y=1.1,f.add(b);const _=new Q(u,s);_.position.y=1.1,f.add(_);const w=new Q(new dt(.12,.16,5.5,6),s);w.position.y=3.8,f.add(w);const S=new Q(new et(.3,3.6,1.7),r);S.position.set(0,3.3,-1.2),f.add(S),f.position.set(m,.1,g),f.rotation.y=v,f.userData.phase=p*1.3,f.userData.baseY=.1,e.add(f),this.boats.push(f)})}makeBuildings(e){const t=vd(),i=ae(16768938),s=ae(3501961),r=ae(16767370),o=ae(7358008),a=ae(5085035),c=ae(16747434),l=(v,p,f,y,b,_,w,S,A,x,T,R)=>{const P=Math.min(4.2,p*.28),D=new Q(new et(v,p-P,f),ae(T));D.position.set(b,y+(p-P)*.5,_),D.castShadow=!0,D.receiveShadow=!0,e.add(D);const z=v*.5,k=f*.5,N=p*.5-P,O=new L(b,y+p*.5,_),I=new Vt;I.setAttribute("position",new vt([-z,N,-k,z,N,-k,0,p*.5,0,z,N,-k,z,N,k,0,p*.5,0,z,N,k,-z,N,k,0,p*.5,0,-z,N,k,-z,N,-k,0,p*.5,0],3)),I.setIndex([0,2,1,3,5,4,6,8,7,9,11,10]),I.computeVertexNormals();const G=new Q(I,ae(R));G.position.copy(O),G.castShadow=!0,e.add(G),fM(t,mM({sx:v,sy:p,sz:f,minY:y,cx:b,cz:_,district:w,seedBase:S,colorIdx:A,bayWindow:x}))};hn.forEach((v,p)=>{const f=v.max.x-v.min.x,y=v.max.y-v.min.y,b=v.max.z-v.min.z,_=new L((v.min.x+v.max.x)/2,(v.min.y+v.max.y)/2,(v.min.z+v.max.z)/2),w=th(v);if(this.blockers.push(w),p===wl||p===El||p===Tl)return;const S=v.district&&Rr[v.district]||Rr["old-town"];l(f,y,b,v.min.y,_.x,_.z,v.district??"old-town",p,p,!1,S.bodies[p%S.bodies.length],S.roofs[p%S.roofs.length]),v.district==="bungalow-lanes"&&this.makePicketFence(e,v,p),v.district==="mansion-hill"&&this.makeWalledGarden(e,v,p)});const u=hh(),d=dh(u),h=ae(9076594),m=ae(12101770),g=bs.filter(v=>v.kind!=="bridge").map(v=>{const p=ps(Bn(v.a)),f=ps(Bn(v.b));return{x0:p.x,z0:p.z,x1:f.x,z1:f.z}});u.forEach((v,p)=>{const f=go(v.x,v.z,v.w,v.d),y=f?f.maxH:Ot(v.x+v.w/2,v.z+v.d/2),b=f?f.minH:y,_=y,w=Rr[v.district]||Rr["old-town"],S=v.palette===0?w.bodies[p%w.bodies.length]:TM[v.palette-1];if(y-b>.3){const D=new Q(new et(v.w,y-b,v.d),h);D.position.set(v.x+v.w/2,b+(y-b)/2,v.z+v.d/2),D.castShadow=!0,D.receiveShadow=!0,e.add(D)}l(v.w,v.h,v.d,_,v.x+v.w/2,v.z+v.d/2,v.district,dM+p,p,v.bayWindow,S,w.roofs[p%w.roofs.length]),this.blockers.push(th(d[p]));const A=v.x+v.w/2,x=v.z+v.d/2;let T=0,R=0,P=1/0;for(const D of g){const z=D.x1-D.x0,k=D.z1-D.z0,N=z*z+k*k;let O=N>0?((A-D.x0)*z+(x-D.z0)*k)/N:0;O=Math.max(0,Math.min(1,O));const I=D.x0+O*z,G=D.z0+O*k,Y=Math.hypot(A-I,x-G);Y<P&&(P=Y,T=I,R=G)}if(P<1/0&&P>.5){const D=T-A,z=R-x,k=Math.hypot(D,z),N=D/k,O=z/k,I=(v.w*Math.abs(N)+v.d*Math.abs(O))/2,G=A+N*I,Y=x+O*I,te=T-N*2.8,Z=R-O*2.8,ue=Math.hypot(te-G,Z-Y);if(ue>1.5){const Ge=(G+te)/2,Ue=(Y+Z)/2,Pe=(Ot(G,Y)+Ot(te,Z))/2+.1,J=new Q(new et(3,.18,ue),m);J.position.set(Ge,Pe,Ue),J.rotation.y=Math.atan2(te-G,Z-Y),J.receiveShadow=!0,e.add(J)}}}),this.buildFacadeInstances(e,t,{trimMat:i,glassMat:s,litMat:r,doorMat:o,leafMat:a,petalMat:c})}buildFacadeInstances(e,t,i){const s=new dn(1,1),r=new et(1,1,1),o=new ht(1,6,5),a=new Nt,c=(h,m)=>{m.forEach((g,v)=>{a.position.set(g.x,g.y,g.z),a.rotation.set(g.rotX,g.rotY,0),a.scale.set(g.sx,g.sy,g.sz),a.updateMatrix(),h.setMatrixAt(v,a.matrix)}),h.instanceMatrix.needsUpdate=!0,h.frustumCulled=!1,e.add(h)};if(t.winLit.length){const h=new ln(s,i.litMat,t.winLit.length);c(h,t.winLit)}if(t.winUnlit.length){const h=new ln(s,i.glassMat,t.winUnlit.length);c(h,t.winUnlit)}if(t.doors.length){const h=new ln(s,i.doorMat,t.doors.length);c(h,t.doors)}if(t.sills.length){const h=new ln(r,i.trimMat,t.sills.length);c(h,t.sills)}if(t.bays.length){const h=new ln(r,i.trimMat,t.bays.length);c(h,t.bays)}if(t.flowerBoxes.length){const h=new ln(r,i.doorMat,t.flowerBoxes.length);c(h,t.flowerBoxes)}if(t.petals.length){const h=new ln(o,i.petalMat,t.petals.length);c(h,t.petals)}if(t.leaves.length){const h=new ln(o,i.leafMat,t.leaves.length);c(h,t.leaves)}const l=new dn(1,1,1,1),u=l.attributes.position;for(let h=0;h<u.count;h++)u.getY(h)<0&&u.setZ(h,-.7);l.computeVertexNormals();const d=[["#e86a6a","#f5f0e1"],["#5b7fa6","#f5f0e1"],["#6aa86a","#f5f0e1"]];t.awnings.forEach((h,m)=>{if(!h.length)return;const[g,v]=d[m%d.length],p=document.createElement("canvas");p.width=128,p.height=16;const f=p.getContext("2d");for(let _=0;_<8;_++)f.fillStyle=_%2?g:v,f.fillRect(_*16,0,16,16);const y=new gr(p);y.colorSpace=Kt;const b=new ln(l,new Cs({map:y,side:rn}),h.length);c(b,h)})}makePicketFence(e,t,i){const s=(t.min.x+t.max.x)/2,r=(t.min.z+t.max.z)/2,o=t.max.x-t.min.x,a=t.max.z-t.min.z,c=t.min.y,l=ae(16117985),u=ae(7031343),d=[ae(16747434),ae(16767306),ae(16777215),ae(15231594)],h=4,m=s-o/2-h,g=s+o/2+h,v=r+a/2+h,p=[[m,v,s-1.2,v],[s+1.2,v,g,v],[m,r-a/2,m,v],[g,r-a/2,g,v]],f=[],y=new Nt;p.forEach(([x,T,R,P])=>{const D=Math.hypot(R-x,P-T),z=Math.max(2,Math.floor(D/.38)),k=Math.atan2(R-x,P-T);for(let G=0;G<=z;G++){const Y=G/z;y.position.set(x+(R-x)*Y,c+.55,T+(P-T)*Y),y.rotation.set(0,k,0),y.updateMatrix(),f.push(y.matrix.clone())}const N=D,O=new Q(new et(.08,.12,N),l);O.position.set((x+R)/2,c+.75,(T+P)/2),O.rotation.y=k,e.add(O);const I=O.clone();I.position.y=c+.35,e.add(I)});const b=new et(.14,1.1,.07),_=new ln(b,l,f.length);f.forEach((x,T)=>_.setMatrixAt(T,x)),_.instanceMatrix.needsUpdate=!0,e.add(_);const w=new $t(.1,.18,4),S=new ln(w,l,f.length);f.forEach((x,T)=>{const R=new L().setFromMatrixPosition(x);y.position.set(R.x,R.y+.64,R.z),y.rotation.set(0,Math.PI/4,0),y.updateMatrix(),S.setMatrixAt(T,y.matrix)}),S.instanceMatrix.needsUpdate=!0,e.add(S);const A=Qn(i*77+5);[-1,1].forEach(x=>{const T=s+x*3.2,R=r+a/2+2.2,P=new Q(new et(3.4,.35,1.8),u);P.position.set(T,c+.18,R),e.add(P);for(let D=0;D<7;D++){const z=new Q(new ht(.22,7,6),d[Math.floor(A()*d.length)]);z.position.set(T+(A()-.5)*2.8,c+.55,R+(A()-.5)*1.2),e.add(z);const k=new Q(new ht(.18,6,5),ae(5085035));k.position.set(T+(A()-.5)*2.8,c+.42,R+(A()-.5)*1.2),e.add(k)}})}makeWalledGarden(e,t,i){const s=tr.find(O=>t.min.x>=O[0]-1&&t.max.x<=O[2]+1&&t.min.z>=O[1]-1&&t.max.z<=O[3]+1);if(!s)return;const[r,o,a,c]=s,l=t.min.y,u=ae(12103840),d=ae(14209216),h=ae(4033119),m=ae(7031343),g=[ae(16747434),ae(16767306),ae(16777215)],v=tr.some(O=>O!==s&&Math.abs(O[2]-r)<.01),p=tr.some(O=>O!==s&&Math.abs(O[0]-a)<.01),f=[[(r+a)/2,o,a-r,.5]],y=[[(r+a)/2,o+1.5,a-r-3,.8]],b=t.max.z-o,_=(o+t.max.z)/2;v||(f.push([r,_,.5,b]),y.push([r+1.5,_,.8,b-3])),p?y.push([a,_,.8,b-2]):(f.push([a,_,.5,b]),y.push([a-1.5,_,.8,b-3]));const w=[],S=o+3,A=t.max.z-2;if(A-S>=5){const O=[];!v&&t.min.x-r>=5&&O.push([r+2.5,t.min.x-2.5]),!p&&a-t.max.x>=5&&O.push([t.max.x+2.5,a-2.5]);for(const[I,G]of O){const Y=(I+G)/2,te=Math.max(1,Math.floor((A-S)/8));for(let Z=0;Z<te;Z++){const ue=S+(Z+.5)*((A-S)/te);w.push([Y,ue])}}}const x=.9;f.forEach(([O,I,G,Y])=>{const te=new Q(new et(G,x,Y),u);te.position.set(O,l+x/2,I),te.castShadow=!0,e.add(te);const Z=new Q(new et(G+.15,.12,Y+.15),d);Z.position.set(O,l+x+.06,I),e.add(Z)});const T=1;y.forEach(([O,I,G,Y])=>{const te=new Q(new et(G,T,Y),h);te.position.set(O,l+T/2,I),te.castShadow=!0,e.add(te)});const R=Qn(i*131+11);w.forEach(([O,I])=>{const G=new Q(new et(3.2,.4,2.4),m);G.position.set(O,l+.2,I),e.add(G);for(let Y=0;Y<8;Y++){const te=new Q(new ht(.24,7,6),g[Math.floor(R()*g.length)]);te.position.set(O+(R()-.5)*2.6,l+.6,I+(R()-.5)*1.8),e.add(te)}});const P=[],D=o+5,z=t.min.z-4;if(z-D>6){const O=Math.max(2,Math.floor((a-r-10)/11));for(let I=0;I<O;I++){const G=r+7+(I+.5)*((a-r-14)/O)+(R()-.5)*3,Y=(D+z)/2+(R()-.5)*2;P.push([G,Y])}}!v&&t.min.x-r>9&&P.push([(r+t.min.x)/2,(D+z)/2]),!p&&a-t.max.x>9&&P.push([(t.max.x+a)/2,(D+z)/2]);const k=ae(7621174),N=ae(5085035);for(const[O,I]of P){const G=new Q(new dt(.4,.65,3.2,7),k);G.position.set(O,l+1.6,I),G.castShadow=!0,e.add(G);const Y=new Q(new ar(3,1),N);Y.position.set(O,l+5,I),Y.castShadow=!0,e.add(Y)}}makeGreenery(e){const t=ae(7621174),i=ae(5085035),s=ae(4033119),r=ae(16747434),o=Qn(1337),a=(u,d)=>{const h=new ut,m=3+o()*2.5,g=new Q(new dt(.35,.55,m,7),t);g.position.y=m/2,h.add(g);const v=o()<.5?i:s,p=new Q(new ar(2.2+o()*1.2,1),v);if(p.position.y=m+1.5,h.add(p),h.position.set(u,Ot(u,d),d),h.rotation.y=o()*Math.PI*2,e.add(h),o()<.3){const f=new Q(new ht(.28,7,6),r);f.position.set(u+.8,Ot(u,d)+.5,d+.6),e.add(f)}};let c=0,l=0;for(;c<260&&l<6e3;){l++;const u=(o()-.5)*400,d=60+o()*160;Rl(u,d)&&(Tt.some(h=>Math.hypot(u-h.position.x,d-h.position.z)<24)||Math.hypot(u,d)<145||(a(u,d),c++))}for(c=0,l=0;c<60&&l<3e3;){l++;const u=(o()-.5)*400,d=(o()-.5)*400;Rl(u,d)&&(Tt.some(h=>Math.hypot(u-h.position.x,d-h.position.z)<24)||u>nn[0]&&u<nn[2]&&d>nn[1]&&d<nn[3]||Math.hypot(u,d)<100&&o()<.7||d>60&&Math.hypot(u,d)>=145||(a(u,d),c++))}}makeLighthouse(e){const t=hn[3],i=hn[wl],s=(t.min.x+t.max.x)/2,r=(t.min.z+t.max.z)/2,o=new Q(new dt(20,24,9,18),ae(9076594));o.position.set(s,t.min.y+2.5,r),o.castShadow=!0,e.add(o);const a=(i.min.x+i.max.x)/2,c=(i.min.z+i.max.z)/2,l=i.min.y,u=new Q(new dt(3.6,5.2,26,16),ae(16773332));u.position.set(a,16+l,c),u.castShadow=!0,e.add(u);const d=f=>5.2-(f-3)*(1.6/26);for(const f of[8,14,20,26]){const y=new Q(new dt(d(f+1.1)+.15,d(f-1.1)+.15,2.2,16),ae(13786193));y.position.set(a,f+l,c),e.add(y)}const h=new Q(new dt(4.6,4.6,1.2,16),ae(4089472));h.position.set(a,29.6+l,c),e.add(h);const m=new Q(new dt(2.6,2.6,3.4,12),new Fn({color:16771501}));m.position.set(a,31.8+l,c),e.add(m);const g=new Q(new $t(3.4,2.6,12),ae(13194062));g.position.set(a,34.8+l,c),e.add(g);const v=new ut;v.position.set(a,31.8+l,c);const p=new Fn({color:16768910,transparent:!0,opacity:.28,depthWrite:!1,side:rn});[0,Math.PI].forEach(f=>{const y=new Q(new $t(3.2,26,12,1,!0),p);y.rotation.z=Math.PI/2,y.rotation.y=f,y.position.set(Math.cos(f)*13,0,-Math.sin(f)*13),v.add(y)}),e.add(v),this.beamGroup=v,this.beamLight=new n0(16768146,60,90),this.beamLight.position.set(a,32+l,c),e.add(this.beamLight),this.setLighthouseLit(!0)}setLighthouseLit(e){this.lighthouseLit=e,this.beamGroup&&(this.beamGroup.visible=e),this.beamLight&&(this.beamLight.intensity=e?60:0)}makeClockTower(e){const t=hn[El],i=(t.min.x+t.max.x)/2,s=(t.min.z+t.max.z)/2,r=t.min.y,o=ae(13935988),a=ae(11951167),c=ae(16768938),l=new Q(new et(8,20,8),o);l.position.set(i,r+10,s),l.castShadow=!0,e.add(l);const u=new Q(new et(8.6,3,8.6),o);u.position.set(i,r+21.5,s),u.castShadow=!0,e.add(u);const d=ae(2763317),h=[[0,-4.32,Math.PI],[0,4.32,0],[-4.32,0,-Math.PI/2],[4.32,0,Math.PI/2]];for(const[p,f,y]of h){const b=new Q(new dt(2.2,2.2,.3,24),new Fn({color:16314584}));b.rotation.x=Math.PI/2,b.rotation.z=y,b.position.set(i+p,r+17,s+f),e.add(b);const _=new Fn({color:2763317}),w=new Q(new et(.18,1.1,.1),_);w.position.set(i+p*1.02,r+17.3,s+f*1.02),w.rotation.z=-.6,w.rotation.y=y,e.add(w);const S=new Q(new et(.14,1.6,.1),_);S.position.set(i+p*1.02,r+17.2,s+f*1.02),S.rotation.z=.9,S.rotation.y=y,e.add(S);const A=new Q(new dn(2.4,2),d);A.position.set(i+p*1.01,r+21.5,s+f*1.01),A.rotation.y=y,e.add(A)}const m=new $t(6.2,5,4),g=new Q(m,a);g.position.set(i,r+25.5,s),g.rotation.y=Math.PI/4,g.castShadow=!0,e.add(g);const v=new Q(new ht(.5,10,8),c);v.position.set(i,r+28.2,s),e.add(v);for(const[p,f]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const y=new Q(new et(.7,20,.7),c);y.position.set(i+p*3.8,r+10,s+f*3.8),e.add(y)}}makeObservatoryDome(e){const t=hn[Tl],i=(t.min.x+t.max.x)/2,s=(t.min.z+t.max.z)/2,r=t.min.y,o=ae(9079442),a=ae(6064762),c=new Q(new dt(4.5,4.8,3,18),o);c.position.set(i,r+1.5,s),c.castShadow=!0,e.add(c);const l=new Q(new ht(4.5,20,12,0,Math.PI*2,0,Math.PI/2),a);l.position.set(i,r+3,s),l.castShadow=!0,e.add(l);const u=new Q(new et(1.2,3.5,.4),ae(1710629));u.position.set(i,r+4.85,s+4.1),u.rotation.x=-.25,e.add(u);const d=new Q(new ht(.4,8,6),ae(9071162));d.position.set(i,r+7.7,s),e.add(d)}makeBakeryDormer(e){const t=hn[0],i=(t.min.x+t.max.x)/2,s=(t.min.z+t.max.z)/2,r=i,o=s-8,a=t.max.x-t.min.x,c=t.max.y-t.min.y,l=t.max.z-t.min.z,u=Math.min(4.2,c*.28),d=Math.max(0,Math.min(1-Math.abs(r-i)/(a/2),1-Math.abs(o-s)/(l/2))),h=t.max.y-u+d*u,m=ae(16049320),g=ae(9132602),v=new Q(new et(4.5,2.6,3),m);v.position.set(r,h+1.3,o),v.castShadow=!0,e.add(v);const p=new Q(new dn(2.6,1.6),new Fn({color:16767114}));p.position.set(r,h+1.3,o+1.52),e.add(p);const f=new Q(new et(3,2,.15),g);f.position.set(r,h+1.3,o+1.45),e.add(f),p.position.z=o+1.54;const y=new Vt;y.setAttribute("position",new vt([-2.45,0,-1.7,2.45,0,-1.7,0,.2,0,2.45,0,-1.7,2.45,0,1.7,0,.2,0,2.45,0,1.7,-2.45,0,1.7,0,.2,0,-2.45,0,1.7,-2.45,0,-1.7,0,.2,0],3)),y.setIndex([0,2,1,3,5,4,6,8,7,9,11,10]),y.computeVertexNormals();const b=new Q(y,g);b.position.set(r,h+2.6,o),b.castShadow=!0,e.add(b)}makeMansionTerraces(e){const t=ae(10132114),i=ae(6989930),s=(r,o,a,c,l,u)=>{const d=c-a,h=new Q(new et(o-r,d,u-l),t);h.position.set((r+o)/2,a+d/2,(l+u)/2),h.castShadow=!0,h.receiveShadow=!0,e.add(h);const m=new Q(new et(o-r-.6,.25,u-l-.6),i);m.position.set((r+o)/2,c+.12,(l+u)/2),m.receiveShadow=!0,e.add(m)};for(const r of[17,18]){const o=hn[r],a=o.min.y;s(o.min.x,o.max.x,a,a+1.5,o.max.z,o.max.z+4.5),s(o.min.x+4,o.max.x-4,a,a+3,o.max.z+2.25,o.max.z+4.5)}}makeHero(){const e=new Fn({color:3746621,side:en}),t=(c,l,u,d)=>{const h=new Q(c,l);h.position.set(u.x,u.y,u.z),d&&h.scale.set(d.x,d.y,d.z),this.hero.add(h);const m=new Q(c,e);return m.scale.setScalar(1.045),h.add(m),this.outlines.push(m),h},i=t(new dt(.16,.21,8.6,10),ae(8736825),{x:0,y:.15,z:.35});i.rotation.x=Math.PI/2;const s=t(new wn(.62,.105,7,14,Math.PI*1.25),ae(7946799),{x:0,y:.58,z:-4.05});s.rotation.z=Math.PI*.18,[3,3.3].forEach(c=>t(new wn(.34,.1,6,12),ae(5583662),{x:0,y:.15,z:c}));for(let c=0;c<21;c++){const l=(c-10)/10,u=new Qh(new L(l*.25,.15,3),new L(l*1.5,-.05+Math.cos(c)*.16,5.8-Math.abs(l)*.35));t(new vs(u,1,.11,5,!1),ae(c%2?13869914:15780216),{x:0,y:0,z:0})}t(new $t(1.75,4.3,9),ae(1535606),{x:0,y:4,z:-.25}),t(new ht(1.15,14,10),ae(16762531),{x:0,y:6.5,z:-.35}),t(new $t(2.05,4.6,11),ae(2443608),{x:0,y:9,z:-.35}),t(new wn(1.55,.28,7,16),ae(2443608),{x:0,y:7.25,z:-.35},{x:1,y:1,z:1}).rotation.x=Math.PI/2,[-1,1].forEach(c=>{const l=t(new dt(.34,.48,2.2,7),ae(2443608),{x:c*.72,y:2.35,z:.05});l.rotation.z=c*.36;const u=t(new dt(.28,.35,1.75,7),ae(2443608),{x:c*1.12,y:1.15,z:-.08});u.rotation.z=-c*.62,t(new ht(.46,8,7),ae(5716276),{x:c*1.48,y:.52,z:-.47},{x:1,y:.65,z:1.45})}),[-.75,-.38,.38,.75].forEach((c,l)=>t(new ht(.45,8,7),ae(10308914),{x:c,y:6.75-l%2*.42,z:-1.15})),[-.4,.4].forEach(c=>t(new ht(.14,8,7),ae(2504770),{x:c,y:6.65,z:-1.43}));const r=ae(15914671);t(new ht(1.02,12,9),r,{x:0,y:2,z:1.48}),t(new ht(.78,12,9),r,{x:0,y:2.78,z:2.08}),[-.48,.48].forEach(c=>t(new $t(.38,.78,3),ae(14721900),{x:c,y:3.55,z:2.2})),[-.26,.26].forEach(c=>t(new ht(.12,7,6),ae(2572625),{x:c,y:2.88,z:2.88})),[-.42,.42].forEach(c=>t(new ht(.19,7,6),r,{x:c,y:1.27,z:2.12},{x:1,y:.7,z:1.15}));const o=t(new wn(.79,.075,6,12),ae(12929874),{x:0,y:2.45,z:2.06});o.rotation.x=Math.PI/2;const a=t(new wn(1,.17,7,12,Math.PI*.8),ae(15914671),{x:0,y:2,z:.95});a.rotation.x=Math.PI/2}makeSkyLife(){const e=ae(16776171);for(let t=0;t<12;t++){const i=new ut;for(let s=0;s<4;s++){const r=new Q(new ht(3+s%2*1.5,10,7),e);r.position.set(s*3,Math.sin(s)*.8,0),i.add(r)}i.position.set(-190+t*47%380,38+t%4*16,-155+t*71%320),this.clouds.add(i)}this.makeBirds()}makeBirds(){const e=ae(16119280),t=ae(14277081),i=ae(15242044),s=Qn(1234);for(let r=0;r<12;r++){const o=new ut,a=new Q(new ht(.45,10,8),e);a.scale.set(.7,.6,1.6),o.add(a);const c=new Q(new ht(.26,10,8),e);c.position.set(0,.22,.75),o.add(c);const l=new Q(new $t(.09,.35,8),i);l.position.set(0,.18,1.05),l.rotation.x=Math.PI/2,o.add(l);const u=new Q(new et(.5,.07,.6),t);u.position.set(0,.05,-.85),o.add(u);const d=g=>{const v=new ut;v.position.set(g*.28,.12,.1);const p=new Q(new et(1.5,.07,.65),t);p.position.x=g*.85;const f=new Q(new et(.7,.06,.45),t);return f.position.x=g*1.85,v.add(p,f),o.add(v),v},h=d(-1),m=d(1);o.position.set(-30+s()*80,28+s()*12,45+s()*55),this.birds.add(o),this.birdFlock.push({group:o,left:h,right:m,vel:new L((s()-.5)*8,0,(s()-.5)*8),phase:s()*Math.PI*2})}}updateBirds(e){const t=this.birdFlock.length;if(!t||e<=0)return;const i=14,s=9,r=4.5,o=26,a=new L,c=new L;for(let l=0;l<t;l++){const u=this.birdFlock[l],d=new L,h=new L,m=new L;let g=0;for(let S=0;S<t;S++){if(l===S)continue;const A=this.birdFlock[S],x=u.group.position.distanceTo(A.group.position);x<i&&x>.001&&(g++,c.copy(u.group.position).sub(A.group.position).divideScalar(x*x),d.add(c),h.add(A.vel),m.add(A.group.position))}a.set(0,0,0),g>0&&(d.divideScalar(g).normalize().multiplyScalar(s).sub(u.vel),d.clampLength(0,o),h.divideScalar(g).normalize().multiplyScalar(s).sub(u.vel),h.clampLength(0,o),m.divideScalar(g).sub(u.group.position).normalize().multiplyScalar(s).sub(u.vel),m.clampLength(0,o),a.addScaledVector(d,1.6).addScaledVector(h,1).addScaledVector(m,.9));const v=33-u.group.position.y;a.y+=Qs.clamp(v*2.2,-o*.6,o*.6),a.x+=Math.sin(this.clock*.9+u.phase)*4+Math.sin(this.clock*.23+u.phase*2.1)*3,a.z+=Math.cos(this.clock*.7+u.phase*1.3)*4+Math.cos(this.clock*.31+u.phase*.7)*3,u.vel.addScaledVector(a,e);const p=u.vel.length();p>s?u.vel.multiplyScalar(s/p):p<r&&p>.001&&u.vel.multiplyScalar(r/p),u.group.position.addScaledVector(u.vel,e);const f=u.group.position.clone().add(u.vel);u.group.lookAt(f);const y=(this.clock*.35+u.phase*.15)%1;let b,_;y<.58?(b=.75,_=0):(b=.06,_=.18);const w=_+Math.sin(this.clock*11+u.phase)*b;u.left.rotation.z=w,u.right.rotation.z=-w}}animateSky(e,t){e||(this.clouds.children.forEach((i,s)=>{i.position.x+=.012*(1+s%3),i.position.x>205&&(i.position.x=-205)}),this.updateBirds(t),this.beamGroup&&this.lighthouseLit&&(this.beamGroup.rotation.y+=.015),this.boats.forEach(i=>{const s=i.userData.baseY??.35;i.position.y=s+Math.sin(this.clock*1.2+i.userData.phase)*.18,i.rotation.z=Math.sin(this.clock*.9+i.userData.phase)*.03}))}destination(e){var i,s,r;if(e.mode==="tutorial")return Tt.find(o=>o.id==="harbor-cafe")||Tt[1];const t=(i=e.run)!=null&&i.returning?"home":(r=(s=e.run)==null?void 0:s.job)==null?void 0:r.to;return Tt.find(o=>o.id===t)||Tt.find(o=>o.id==="home")||Tt[0]}updateBeacon(e,t){if(e&&(this.targetRing.position.set(e.position.x,Math.max(3,e.position.y+.6),e.position.z),this.targetRing.rotation.y+=t*.8,!this.targetRing.children.length)){const i=new Q(new wn(4.5,.25,8,28),ae(16770203));i.rotation.x=Math.PI/2,this.targetRing.add(i);const s=new Q(new dt(.08,.26,8,8,1,!0),new Fn({color:16771234,transparent:!0,opacity:.16,depthWrite:!1,side:rn}));s.position.y=4,this.targetRing.add(s)}}makeGlowColumn(){const t=[{rTop:_h,rBottom:2.4,opacity:.2},{rTop:1.7,rBottom:1.1,opacity:.32}];for(const i of t){const s=new dt(i.rTop,i.rBottom,90,24,1,!0),r=new Mn({transparent:!0,depthWrite:!1,blending:Ia,side:rn,uniforms:{uHeight:{value:90},uOpacity:{value:i.opacity},uPulse:{value:1}},vertexShader:`varying float vH; uniform float uHeight;
void main(){ vH = position.y / uHeight + .5; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,fragmentShader:`varying float vH; uniform float uOpacity; uniform float uPulse;
void main(){ float a = pow(clamp(1. - vH, 0., 1.), 1.7) * uOpacity * uPulse;
  gl_FragColor = vec4(1., .62, .22, a); }`}),o=new Q(s,r);o.position.y=90/2,this.glowColumn.add(o),this.glowMats.push(r)}this.glowColumn.visible=!1}updateGlowColumn(e,t){const i=Do(e),s=!!i;if(this.glowColumn.visible=s,!s||!i){this.lastGlowStopId=void 0;return}this.lastGlowStopId!==i.id&&(this.lastGlowStopId=i.id,this.glowColumn.position.set(i.position.x,i.position.y,i.position.z));const r=e.haloFade>0?Math.max(0,Math.min(1,e.haloFade/mh)):1,o=(t?1:.86+.14*Math.sin(this.clock*2.4))*r;for(const a of this.glowMats)a.uniforms.uPulse.value=o}makeDropParcel(){const e=new Q(new et(1.5,1.1,1.5),ae(13208927)),t=ae(12929874),i=new Q(new et(1.56,1.16,.34),t),s=new Q(new et(.34,1.16,1.56),t),r=new Q(new ht(.3,8,6),t);r.position.y=.68,r.scale.set(1.4,.7,1.4),this.dropParcel.add(e,i,s,r),this.dropParcel.visible=!1}updateDropParcel(e,t,i){const s=e.drop,r=s?Tt.find(h=>h.id===s.stopId):void 0,o=!!s&&!!r&&s.parcel;if(this.dropParcel.visible=o,!o||!s||!r)return;const a=i?1:Math.min(1,s.t/ph),c=a*a,l=e.player.position,u=r.position.y+.7,d=Math.max(l.y-1.4,u);this.dropParcel.position.set(l.x+(r.position.x-l.x)*c,d+(u-d)*c,l.z+(r.position.z-l.z)*c),i||(this.dropParcel.rotation.y+=t*4)}updateCamera(e,t,i,s,r){let o,a;if(e.mode==="title"||e.mode==="summary"){const c=s?0:this.clock*.035;o=new L(-92+Math.sin(c)*8,48,146+Math.cos(c)*7),a=new L(18,13,65)}else{this.followYaw=r?e.player.yaw:vM(this.followYaw,e.player.yaw,i);const c=this.followYaw,l=new L(-Math.sin(c)*26,12,Math.cos(c)*26);o=t.clone().add(l),a=t.clone().add(new L(Math.sin(c)*5,2,-Math.cos(c)*5));const u=t.clone().add(new L(0,2,0)),d=o.clone().sub(u),h=d.length();this.blockers.forEach(g=>g.updateWorldMatrix(!0,!1)),this.ray.set(u,d.normalize());const m=this.ray.intersectObjects(this.blockers,!1)[0];m&&m.distance<h&&o.copy(u).add(d.setLength(Math.max(7,m.distance-1)))}this.camPos.copy(o),this.camLook.copy(a),this.camera.position.copy(this.camPos),this.camera.up.set(0,1,0),this.camera.lookAt(this.camLook)}}function ae(n){return new Cs({color:n,map:RM(),gradientMap:CM()})}let Ri,ds;function RM(){if(Ri)return Ri;const n=document.createElement("canvas");n.width=n.height=nr;const e=n.getContext("2d");e.fillStyle="rgba(255,255,255,.9)",e.fillRect(0,0,nr,nr);for(const t of of(nf))e.fillStyle=`rgba(85,55,45,${t.alpha})`,e.fillRect(t.x,t.y,1,1);return Ri=new gr(n),Ri.colorSpace=Kt,Ri.wrapS=Ri.wrapT=xo,Ri}function CM(){if(ds)return ds;const n=document.createElement("canvas");n.width=1,n.height=3;const e=n.getContext("2d");return e.fillStyle="#202020",e.fillRect(0,0,1,1),e.fillStyle="#9a9a9a",e.fillRect(0,1,1,1),e.fillStyle="#fff",e.fillRect(0,2,1,1),ds=new gr(n),ds.minFilter=ds.magFilter=Gt,ds}const PM=()=>({lastKey:null,dismissedKey:null});function LM(n,e,t){return`${n}|${e}|${t}`}function DM(n,e,t,i,s,r){const o=LM(e,t,s),a=o===n.lastKey?n:{lastKey:o,dismissedKey:null};return{hidden:!(e.includes("tutorial")||i!==""||e==="flight"&&(r??1/0)<=120)||a.dismissedKey===o,next:a}}function IM(n){return{...n,dismissedKey:n.lastKey}}const _i=n=>`<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${{star:'<path d="m12 2 2.8 6.5L22 9l-5.4 4.7 1.6 7.1-6.2-3.7-6.2 3.7 1.6-7.1L2 9l7.2-.5Z"/>',envelope:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',pause:'<path d="M7 4h3v16H7zm7 0h3v16h-3z"/>',sound:'<path d="M4 10h4l5-4v12l-5-4H4zM16 9c1 .8 1 5.2 0 6m2-9c3 2.6 3 9.4 0 12"/>',fullscreen:'<path d="M4 9V5h4m8 0h4v4M20 15v4h-4M8 19H4v-4"/>',home:'<path d="m3 11 9-8 9 8v9h-6v-6H9v6H3z"/>'}[n]}</svg>`,fs=n=>`${Math.max(0,Math.round(n))} coins`,NM=n=>n===void 0||!Number.isFinite(n)?"--:--":`${Math.floor(Math.max(0,Math.ceil(n))/60).toString().padStart(2,"0")}:${(Math.max(0,Math.ceil(n))%60).toString().padStart(2,"0")}`;class UM{constructor(e,t){pe(this,"el",{});pe(this,"previousRevision",-1);pe(this,"offersKey","");pe(this,"tip",PM());e.classList.add("meg-ui"),e.innerHTML=`
<header class="gamebar"><div class="gamebar-brand">MEG’S <span>Delivery Service</span></div><div class="sun-pill"><i></i>Nightfall in <b id="countdown">--:--</b></div><div class="gamebar-actions"><button class="icon-button" id="audio-btn" aria-label="Mute audio">${_i("sound")}</button><button class="icon-button" id="pause-btn" aria-label="Pause flight">${_i("pause")}</button></div></header><main class="screen-layer">
<section class="title-card panel" id="title-card"><div class="eyebrow">${_i("star")} A LITTLE WITCH. A BIG SKY.</div><h1>MEG’S<br><em>Delivery</em> Service</h1><p class="premise">Take on a parcel, then return home <b>before nightfall</b> to bank your earnings.</p><p class="key-hint desktop-hint">Steer with <kbd>WASD</kbd> / arrows · rise with <kbd>W</kbd> · hover with <kbd>Space</kbd></p><p class="key-hint touch-hint">Touch anywhere to fly · release the stick to slow down</p><button id="start-btn" class="primary-button">Learn to fly <span>→</span></button><div class="title-controls"><button id="quality-btn">Quality: <b>High</b></button><button id="motion-btn">Motion: <b>Full</b></button><button id="fullscreen-btn">${_i("fullscreen")} Fullscreen</button></div><footer>MADE OF LITTLE ADVENTURES <span class="desktop-hint">⌨</span><span class="touch-hint">touch to fly</span> <span class="build-sha">build 578c60f</span></footer></section>
<section class="offers-card panel menu-card" id="offers-card"><div class="eyebrow">${_i("envelope")} TODAY’S POST</div><h2>Choose a delivery</h2><p>Nightfall is already on its way. Pick one parcel and make it home with your earnings.</p><div class="offer-balances"><span>Satchel <b id="offer-earnings">0 coins</b></span><span>Banked <b id="offer-banked">0 coins</b></span></div><div id="offer-list" class="offer-list"></div><button id="return-home-btn" class="secondary-button">Return home</button></section>
<section class="summary-card panel menu-card" id="summary-card"><div class="eyebrow">${_i("star")} DAY’S END</div><h2 id="summary-heading">A lovely landing.</h2><p id="summary-copy"></p><div class="summary-stats"><div><span>Deliveries</span><b id="summary-deliveries">0</b></div><div><span>Earnings saved</span><b id="summary-earnings">0 coins</b></div></div><button id="next-day-btn" class="primary-button">Another day <span>→</span></button></section>
<section class="flight-hud" id="flight-hud"><div class="destination-card panel"><div class="eyebrow">${_i("envelope")} <span id="target-label">Next delivery</span></div><strong id="target-name">The village</strong><div class="target-direction"><span class="compass-arrow" id="target-arrow"></span><span id="target-distance">— m away</span></div></div><div class="tutorial-bubble" id="tutorial-bubble"><button class="bubble-close" id="bubble-close" aria-label="Dismiss tip">×</button><b>Pumpkin says:</b> <span id="tutorial-text"></span></div><div class="flight-readout panel"><span><b id="speed-value">0</b> m/s</span><span class="satchel-readout">Satchel <b id="flight-earnings">0</b></span></div></section>
<section class="pause-card panel menu-card" id="pause-card"><div class="eyebrow">${_i("star")} TAKING A BREATHER</div><h2>The sky will wait.</h2><p id="pause-reason"></p><p class="key-hint desktop-hint">When you return: <kbd>WASD</kbd> or arrows to steer · <kbd>Q</kbd>/<kbd>E</kbd> for speed</p><p class="key-hint touch-hint">When you return: touch anywhere to fly · release the stick to slow down</p><button id="resume-btn" class="primary-button">Continue flying <span>→</span></button><button id="unstuck-btn" class="secondary-button">Unstuck me</button><div class="title-controls"><button id="pause-quality-btn">Quality</button><button id="pause-motion-btn">Motion</button></div></section></main>`;const i=r=>e.querySelector(`#${r}`);["title-card","offers-card","summary-card","flight-hud","pause-card","countdown","pause-reason","target-name","target-distance","target-arrow","target-label","tutorial-bubble","tutorial-text","bubble-close","speed-value","flight-earnings","audio-btn","pause-btn","resume-btn","unstuck-btn","quality-btn","motion-btn","pause-quality-btn","pause-motion-btn","offer-list","return-home-btn","offer-earnings","offer-banked","summary-heading","summary-copy","summary-deliveries","summary-earnings","next-day-btn","start-btn"].forEach(r=>this.el[r]=i(r));const s=(r,o)=>i(r).onclick=a=>{o(),a.currentTarget.blur()};s("start-btn",t.start),s("pause-btn",t.pause),s("resume-btn",t.resume),s("unstuck-btn",t.unstuck),s("audio-btn",t.mute),i("bubble-close").onclick=r=>{this.tip=IM(this.tip),this.el["tutorial-bubble"].hidden=!0,r.currentTarget.blur()},s("return-home-btn",()=>{var r;return(r=t.returnHome)==null?void 0:r.call(t)}),s("next-day-btn",()=>{var r;return(r=t.nextDay)==null?void 0:r.call(t)}),[i("quality-btn"),i("pause-quality-btn")].forEach(r=>r.onclick=t.quality),[i("motion-btn"),i("pause-motion-btn")].forEach(r=>r.onclick=t.motion),i("fullscreen-btn").onclick=t.fullscreen,i("offer-list").onclick=r=>{var a;const o=r.target.closest("[data-job]");o&&((a=t.chooseJob)==null||a.call(t,+o.dataset.job),o.blur())}}render(e,t){var u,d,h;const i=["offers","summary"].includes(e.mode),s=e.mode==="title",r=!s&&e.paused;this.el["title-card"].hidden=!s,this.el["offers-card"].hidden=e.mode!=="offers"||r,this.el["summary-card"].hidden=e.mode!=="summary"||r,this.el["flight-hud"].hidden=s||i||r,this.el["pause-card"].hidden=!r,this.el.countdown.textContent=NM(t.timeRemaining),this.el.countdown.className=t.timeRemaining!==void 0&&t.timeRemaining<=30?"urgent":t.timeRemaining!==void 0&&t.timeRemaining<=60?"warning":"",this.el["start-btn"].innerHTML=`${e.profile.tutorialDone?"Start a delivery day":"Learn to fly"} <span>→</span>`,this.el["target-name"].textContent=t.targetName,this.el["target-distance"].textContent=t.targetDistance>0?`${Math.round(t.targetDistance)} m away`:"Right here",this.el["target-label"].textContent=(u=e.run)!=null&&u.returning?"Return home":"Next delivery",this.el["target-arrow"].style.transform=`rotate(${t.targetBearing??0}deg)`,this.el["speed-value"].textContent=String(Math.round(t.speed)),this.el["audio-btn"].classList.toggle("is-muted",t.muted),this.el["audio-btn"].setAttribute("aria-label",t.muted?"Unmute audio":"Mute audio"),this.el["quality-btn"].innerHTML=`Quality: <b>${t.lowQuality?"Low":"High"}</b>`,this.el["motion-btn"].innerHTML=`Motion: <b>${t.reducedMotion?"Low":"Full"}</b>`,this.el["tutorial-text"].textContent=t.status||e.message||"Let’s take the scenic route!";const o=t.status||e.message||"",a=DM(this.tip,e.mode,e.tutorialStage,t.status,o,t.timeRemaining);this.tip=a.next,this.el["tutorial-bubble"].hidden=a.hidden,this.el["flight-earnings"].textContent=fs(((d=e.run)==null?void 0:d.earnings)??0),this.el["offer-earnings"].textContent=fs(((h=e.run)==null?void 0:h.earnings)??0),this.el["offer-banked"].textContent=fs(e.profile.coins),this.renderOffers(e);const c=e.summary,l=(c==null?void 0:c.success)??!1;this.el["summary-heading"].textContent=l?"A lovely landing.":"Rescued from nightfall.",this.el["summary-copy"].textContent=l?`You banked ${fs((c==null?void 0:c.earnings)??0)} after ${(c==null?void 0:c.deliveries)??0} deliveries.`:"The unbanked satchel was lost, but tomorrow brings another chance.",this.el["summary-deliveries"].textContent=String((c==null?void 0:c.deliveries)??0),this.el["summary-earnings"].textContent=fs((c==null?void 0:c.earnings)??0),this.el["next-day-btn"].innerHTML=`${l?"Another day":"Back home"} <span>→</span>`,this.previousRevision!==e.revision&&(this.el["pause-reason"].textContent=e.pauseReason||"Rest your wings whenever you need.",this.previousRevision=e.revision)}renderOffers(e){var s,r;if(e.mode!=="offers")return;this.el["return-home-btn"].hidden=(((s=e.run)==null?void 0:s.deliveries)??0)===0;const t=(((r=e.run)==null?void 0:r.offers)??[]).slice(0,2),i=t.map(o=>`${o.to}:${o.parcel}:${o.payout}`).join("|");i!==this.offersKey&&(this.offersKey=i,this.el["offer-list"].innerHTML=t.map((o,a)=>{const c=Tt.find(u=>u.id===o.to),l=c?Math.hypot(c.position.x-e.player.position.x,c.position.z-e.player.position.z):0;return`<button class="offer-button" data-job="${a}"><span><b>${(c==null?void 0:c.name)??o.to}</b><small>${l<115?"Short":"Long"} route · ${o.parcel} · ${Math.round(l)} m</small></span><strong>${fs(o.payout)} <i>→</i></strong></button>`}).join(""))}}class FM{constructor(e,t,i=()=>!0){pe(this,"keys",new Set);pe(this,"stick",{x:0,y:0});pe(this,"stickPointer",null);pe(this,"cutPending",!1);pe(this,"keydown");pe(this,"keyup");pe(this,"canvas");pe(this,"joystick");pe(this,"stickEnabled");this.canvas=e,this.stickEnabled=i,this.keydown=s=>{if(this.inControl(s.target))return;const r=s.key.toLowerCase();["arrowleft","arrowright","arrowup","arrowdown","w","a","s","d","q","e"," ","enter","escape","p","f"].includes(r)&&s.preventDefault(),!s.repeat&&r===" "&&t.hover(),!s.repeat&&r==="enter"&&t.interact(),!s.repeat&&(r==="escape"||r==="p")&&t.pause(),!s.repeat&&r==="f"&&t.fullscreen(),this.keys.add(r)},this.keyup=s=>this.keys.delete(s.key.toLowerCase()),window.addEventListener("keydown",this.keydown),window.addEventListener("keyup",this.keyup),e.addEventListener("blur",()=>this.clear()),this.joystick=document.querySelector("#joystick")||void 0,this.joystick&&(this.joystick.hidden=!0),this.bindTouch()}sample(){const e=(a,c)=>Number(this.keys.has(a)||this.keys.has(c)),t=e("arrowright","d")-e("arrowleft","a")+this.stick.x,i=e("arrowup","w")-e("arrowdown","s")-this.stick.y,s=this.stickPointer!==null,r=e("e","e")-e("q","q")+(s?1:0),o=this.cutPending;return this.cutPending=!1,{turn:Math.max(-1,Math.min(1,t)),climb:Math.max(-1,Math.min(1,i)),throttle:Math.max(-1,Math.min(1,r)),cutThrottle:o}}clear(){this.keys.clear(),this.stickPointer=null,this.stick.x=this.stick.y=0,this.cutPending=!1,this.joystick&&(this.joystick.style.removeProperty("--stick-x"),this.joystick.style.removeProperty("--stick-y"),this.joystick.classList.remove("is-dragging"),this.joystick.hidden=!0)}dispose(){window.removeEventListener("keydown",this.keydown),window.removeEventListener("keyup",this.keyup),this.clear()}inControl(e){return e instanceof Element&&!!e.closest('input, button, select, textarea, [contenteditable="true"]')}bindTouch(){if(!this.joystick)return;const e=this.joystick,t=o=>{const a=e.getBoundingClientRect(),c=a.width*.34,l=o.clientX-(a.left+a.width/2),u=o.clientY-(a.top+a.height/2),d=Math.max(c,Math.hypot(l,u));this.stick.x=l/d,this.stick.y=u/d,e.style.setProperty("--stick-x",`${this.stick.x*c}px`),e.style.setProperty("--stick-y",`${this.stick.y*c}px`)},i=o=>{if(o.pointerType==="mouse"||this.stickPointer!==null||!this.stickEnabled())return;this.stickPointer=o.pointerId;try{this.canvas.setPointerCapture(o.pointerId)}catch{}const a=e.offsetWidth/2||56;e.style.left=`${o.clientX-a}px`,e.style.top=`${o.clientY-a}px`,e.hidden=!1,e.classList.add("is-dragging"),t(o)},s=o=>{o.pointerId===this.stickPointer&&t(o)},r=o=>{o.pointerId===this.stickPointer&&(this.stickPointer=null,this.stick.x=this.stick.y=0,e.style.removeProperty("--stick-x"),e.style.removeProperty("--stick-y"),e.classList.remove("is-dragging"),e.hidden=!0,this.cutPending=!0)};this.canvas.addEventListener("pointerdown",i),this.canvas.addEventListener("pointermove",s),this.canvas.addEventListener("pointerup",r),this.canvas.addEventListener("pointercancel",r),this.canvas.addEventListener("lostpointercapture",r)}}class OM{constructor(e,t){pe(this,"root");pe(this,"key","");this.actions=t,this.root=document.createElement("section"),this.root.className="home-interface",e.append(this.root),this.root.addEventListener("click",i=>{const s=i.target.closest("button");s&&(s.dataset.action==="interact"?t.interact():s.dataset.action==="close"?t.close():s.dataset.action==="start"?t.start():s.dataset.upgrade?t.upgrade(s.dataset.upgrade):s.dataset.furnish&&t.furnish(s.dataset.furnish),s.blur())})}render(e){if(this.root.hidden=e.mode!=="home"||e.paused,this.root.hidden)return;const t=Nc(e),i=JSON.stringify([e.homePanel,t==null?void 0:t.id,e.profile.coins,e.profile.upgrades,e.profile.furniture,e.message]);if(i===this.key)return;this.key=i;const s=e.profile,r=`<div class="eyebrow">MEG'S ROOM</div><h2>Welcome home, Meg.</h2><p class="home-wallet">${s.coins} coins saved · ${s.furniture.length}/6 cozy touches</p>`,o=`<button class="context-button" data-action="interact" ${t?"":"disabled"}>${t?`Visit ${t.name}`:"Explore your room"} <kbd>Enter</kbd></button>`;if(e.homePanel==="none"){const c=`<aside class="room-guide panel">${r}<p>Walk to the Job Board, Broom Workshop, or Decor Corner.</p>${o}</aside>`;this.root.innerHTML=`${c}${kd(s)?'<div class="completion-ribbon">✦ Every little corner feels like home. Keep flying, little witch.</div>':""}`;return}let a="";e.homePanel==="jobs"&&(a='<div class="eyebrow">A NEW DELIVERY DAY</div><h2>The town is waiting.</h2><p>Choose your first delivery — pick the route that suits you. You have eight minutes to make deliveries and return home. Anything still in your satchel at nightfall will be lost.</p><button class="primary-button" data-action="start">See today’s deliveries →</button>'),e.homePanel==="brooms"&&(a=`<div class="eyebrow">THE BROOM STAND · ${s.coins} COINS</div><h2>A little more magic.</h2><div class="shop-list">${["speed","handling","braking"].map(c=>{const l=s.upgrades[c],u=l===0?60:120,d={speed:"Fly 10% faster per level",handling:"Turn 20% more responsively per level",braking:"Slow down 20% faster per level"}[c];return`<button data-upgrade="${c}" ${l===2||s.coins<u?"disabled":""}><span><b>${c[0].toUpperCase()+c.slice(1)}</b><small>${d} · ${l}/2</small></span><strong>${l===2?"Mastered":`${u} coins`}</strong></button>`}).join("")}</div>`),e.homePanel==="decor"&&(a=`<div class="eyebrow">THE HOME CATALOGUE · ${s.coins} COINS</div><h2>Make yourself at home.</h2><div class="shop-list">${Dc.map(c=>`<button data-furnish="${c.id}" ${s.furniture.includes(c.id)||s.coins<c.cost?"disabled":""}><span><b>${c.name}</b><small>${c.description}</small></span><strong>${s.furniture.includes(c.id)?"At home":`${c.cost} coins`}</strong></button>`).join("")}</div>`),e.homePanel==="cat"&&(a='<div class="eyebrow">PUMPKIN’S CORNER</div><h2>A very good copilot.</h2><p>Pumpkin leans into your hand and purrs. The best part of any delivery day is coming home together.</p><div class="purr">♡ purr… purr… ♡</div>'),this.root.innerHTML=`<section class="menu-card panel room-menu">${a}<button class="secondary-button" data-action="close">Back to your room</button></section>`}}function Md(n,e,t){return e?!1:n==="flight"||n==="tutorial"?!0:n==="home"&&t==="none"}function yd(n){return n.haloFade>0||n.descent!=null||n.drop!=null}class zM{constructor(e){pe(this,"root");this.root=document.createElement("div"),this.root.className="touch-controls",this.root.id="touch-controls",this.root.innerHTML='<div id="joystick" class="joystick" hidden><i></i></div>',e.append(this.root)}render(e){this.root.hidden=yd(e)||!Md(e.mode,e.paused,e.homePanel)}}const Zs="megs-delivery-save-v1",BM=["title","tutorial","flight","offers","home","summary"],kM=["none","jobs","brooms","decor","cat"],Pc=new Set(Tt.map(n=>n.id)),nh=new Set(["rug","plant","shelf","lamp","cushion","cat-tree"]),HM=new Set([20,35,50]),GM=1e5,zn=n=>typeof n=="object"&&n!==null&&!Array.isArray(n),sn=(n,e=-1/0,t=1/0)=>typeof n=="number"&&Number.isFinite(n)&&n>=e&&n<=t,Tn=(n,e=0,t=Number.MAX_SAFE_INTEGER)=>Number.isInteger(n)&&sn(n,e,t),Fi=(n,e=160)=>typeof n=="string"&&n.length<=e,ih=(n,e=500)=>zn(n)&&sn(n.x,-e,e)&&sn(n.y,-e,e)&&sn(n.z,-e,e);function sh(n){return!zn(n)||!Fi(n.from,64)||!Fi(n.to,64)||!Pc.has(n.from)||!Pc.has(n.to)||n.from===n.to||!HM.has(n.payout)||!Fi(n.label,80)||!Fi(n.parcel,100)?null:{from:n.from,to:n.to,payout:n.payout,label:n.label,parcel:n.parcel}}function VM(n){return!zn(n)||!Tn(n.coins)||!zn(n.upgrades)||!Tn(n.upgrades.speed,0,2)||!Tn(n.upgrades.handling,0,2)||!Tn(n.upgrades.braking,0,2)||!Array.isArray(n.furniture)||n.furniture.length>nh.size||!n.furniture.every(e=>typeof e=="string"&&nh.has(e))||new Set(n.furniture).size!==n.furniture.length||typeof n.tutorialDone!="boolean"||!Tn(n.runs)||!Tn(n.deliveries)?null:{coins:n.coins,upgrades:{speed:n.upgrades.speed,handling:n.upgrades.handling,braking:n.upgrades.braking},furniture:[...n.furniture],tutorialDone:n.tutorialDone,runs:n.runs,deliveries:n.deliveries}}function WM(n){if(n===null)return null;if(!zn(n)||!Tn(n.seed,-Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)||!sn(n.elapsed,0,480)||!sn(n.earnings,0)||!Tn(n.deliveries)||typeof n.returning!="boolean"||!Fi(n.lastStop,64)||!Pc.has(n.lastStop)||!Array.isArray(n.offers)||n.offers.length>2)return;const e=n.job===null?null:sh(n.job),t=n.offers.map(sh);if(!(n.job!==null&&!e||t.some(i=>!i)||new Set(t.map(i=>i.to)).size!==t.length))return{seed:n.seed,elapsed:n.elapsed,earnings:n.earnings,deliveries:n.deliveries,job:e,offers:t,returning:n.returning,lastStop:n.lastStop}}function wa(n){if(typeof n!="string"||n.length>GM)return null;let e;try{e=JSON.parse(n)}catch{return null}if(!zn(e)||e.version!==1||!zn(e.state))return null;const t=e.state;if(!BM.includes(t.mode)||!zn(t.player)||!ih(t.player.position)||!sn(t.player.yaw)||!sn(t.player.pitch,-Math.PI/2,Math.PI/2)||!sn(t.player.speed,0,30)||!sn(t.player.throttle,0,30)||typeof t.player.hover!="boolean"||!ih(t.player.velocity,50))return null;const i=VM(t.profile),s=WM(t.run),r=t.homeFacing===void 0?0:t.homeFacing,o=t.homePanel===void 0?"none":t.homePanel;if(!i||s===void 0||typeof t.paused!="boolean"||!Fi(t.pauseReason)||!Fi(t.message,500)||!Tn(t.tutorialStage,0,10)||!zn(t.homePosition)||!sn(t.homePosition.x)||!sn(t.homePosition.z)||!sn(r,-10,10)||!kM.includes(o)||!Tn(t.revision))return null;let a=null;if(t.summary!==null){if(!zn(t.summary)||typeof t.summary.success!="boolean"||!sn(t.summary.earnings,0)||!Tn(t.summary.deliveries))return null;a={success:t.summary.success,earnings:t.summary.earnings,deliveries:t.summary.deliveries}}const c=t.mode;if((c==="title"||c==="tutorial"||c==="home"||c==="summary")&&s!==null||c==="flight"&&(!s||!s.job&&!s.returning)||c==="offers"&&(!s||s.job!==null||s.returning||s.offers.length!==2)||c==="summary"&&!a||c!=="summary"&&a||c==="home"&&(Math.abs(t.homePosition.x)>8||Math.abs(t.homePosition.z)>6))return null;const l={position:{...t.player.position},yaw:t.player.yaw,pitch:t.player.pitch,speed:t.player.speed,throttle:t.player.throttle,hover:!1,velocity:{...t.player.velocity},brakeHold:t.player.brakeHold===!0},u={mode:c,player:l,profile:i,run:s,paused:t.paused,pauseReason:t.pauseReason,message:t.message,tutorialStage:t.tutorialStage,homePosition:{x:t.homePosition.x,z:t.homePosition.z},homeFacing:r,homePanel:o,summary:a,revision:t.revision};return u.drop=null,u.descent=null,u.haloFade=0,(u.mode==="tutorial"||u.mode==="flight"||u.mode==="offers")&&(u.paused=!0,u.pauseReason="Welcome back"),(u.mode==="title"||u.mode==="home")&&(u.paused=!1,u.pauseReason=""),u}function XM(n){return JSON.stringify({version:1,state:n})}class qM{constructor(){pe(this,"releaseLock");pe(this,"generation",0);pe(this,"writable",!1);pe(this,"status","");pe(this,"memory")}get message(){return this.status}get canSave(){return this.writable}async acquire(){this.release();const e=++this.generation,t=this.storage();if(!t)return this.session("Saved games are unavailable in this browser.");const i=typeof navigator>"u"?void 0:navigator.locks;if(!i)try{const s=t.getItem(Zs),r=s===null?void 0:wa(s);return s!==null&&!r?(this.status="Saved game could not be read. It was left untouched.",{kind:"invalid",message:this.status}):this.session("This browser cannot safely share saved games; playing in this tab only.",r??void 0)}catch{return this.session("Saved games are unavailable in this browser.")}return new Promise(s=>{i.request("megs-delivery-save",{ifAvailable:!0},r=>{var u;if(e!==this.generation||!r){s({kind:"readonly",message:"Saved game is open in another tab. Retry after closing it."});return}let o;const a=new Promise(d=>{o=d});this.releaseLock=()=>{this.releaseLock=void 0,this.writable=!1,o()};let c;try{c=t.getItem(Zs)}catch{return(u=this.releaseLock)==null||u.call(this),s(this.session("Saved games are unavailable in this browser.")),a}const l=c===null?void 0:wa(c)??void 0;return c!==null&&!l?(this.status="Saved game could not be read. It was left untouched.",s({kind:"invalid",message:this.status}),a):(this.writable=!0,this.memory=l,this.status="Saved game ready.",s({kind:"ready",state:l,message:this.status}),a)}).catch(()=>s(this.session("Saved games are unavailable in this browser.")))})}save(e){if(!this.writable)return!1;const t=this.storage();if(!t)return this.writable=!1,this.status="Saving is unavailable in this browser.",!1;try{return t.setItem(Zs,XM(e)),this.memory=e,this.status="Saved.",!0}catch{return this.memory=e,this.writable=!1,this.status="Could not save; progress remains in this tab.",!1}}release(){var e;this.generation++,(e=this.releaseLock)==null||e.call(this),this.writable=!1}continueSession(){this.release(),this.memory=void 0,this.status="Continuing with a fresh session."}discardUnreadable(){try{const e=this.storage(),t=e==null?void 0:e.getItem(Zs);t!=null&&!wa(t)&&(e==null||e.removeItem(Zs))}catch{}this.writable=!0,this.memory=void 0,this.status="Discarded the unreadable save."}storage(){try{return typeof localStorage>"u"?void 0:localStorage}catch{return}}session(e,t){return this.writable=!1,this.memory=t,this.status=e,{kind:"session",state:t,message:e}}}class YM{constructor(){pe(this,"context");pe(this,"master");pe(this,"ambience");pe(this,"ambienceSources",[]);pe(this,"tones",new Set);pe(this,"muted",!0);pe(this,"disposed",!1);pe(this,"snapshot");pe(this,"nextNote",0);pe(this,"lastActive",!1);pe(this,"operationPending",!1)}setMuted(e){this.disposed||(this.muted=e,!(!e&&!this.ensureContext())&&this.reconcile())}update(e,t){const i=this.snapshot,s=this.takeSnapshot(e);this.snapshot=s,this.lastActive=!(t||e.paused||typeof document<"u"&&document.hidden),!(this.muted||this.disposed||!this.context)&&(this.reconcile(),!(!this.canPlay()||this.context.state!=="running")&&(this.playMelody(),i&&(s.deliveries>i.deliveries&&this.deliveryCue(),s.coins<i.coins&&(s.upgrades!==i.upgrades||s.furniture!==i.furniture)&&this.purchaseCue(),i.homePanel!=="cat"&&s.homePanel==="cat"&&this.purrCue())))}dispose(){if(!this.disposed){this.disposed=!0,this.lastActive=!1,this.clearAmbience();for(const e of this.tones){try{e.stop()}catch{}e.disconnect()}this.tones.clear(),this.context&&this.context.state!=="closed"&&this.context.close().catch(()=>{}),this.context=void 0,this.master=void 0}}debugState(){var e;return{context:((e=this.context)==null?void 0:e.state)??"unavailable",muted:this.muted}}ensureContext(){if(this.context)return this.context;const e=typeof window>"u"?void 0:window.AudioContext||window.webkitAudioContext;if(e)try{const t=new e,i=t.createGain();return i.gain.value=1e-4,i.connect(t.destination),this.context=t,this.master=i,t}catch{return}}canPlay(){return!this.disposed&&!this.muted&&this.lastActive}reconcile(){const e=this.context;if(!e||e.state==="closed")return;const t=this.canPlay();if(t&&e.state==="running"){this.startAmbience();return}if(!t&&this.master){const s=e.currentTime;this.master.gain.cancelScheduledValues(s),this.master.gain.setTargetAtTime(1e-4,s,.025)}if(this.operationPending||(t?e.state!=="suspended":e.state!=="running"))return;this.operationPending=!0,(t?e.resume.bind(e):e.suspend.bind(e))().catch(()=>{}).then(()=>{this.operationPending=!1,this.canPlay()&&e.state==="running"&&this.startAmbience(),this.reconcile()})}startAmbience(){const e=this.context,t=this.master;if(!e||!t||e.state!=="running"||!this.canPlay())return;const i=e.currentTime;if(t.gain.cancelScheduledValues(i),t.gain.setTargetAtTime(.14,i,.08),this.ambience)return;const s=e.createGain(),r=e.createOscillator(),o=e.createOscillator(),a=e.createGain();s.gain.value=.035,s.connect(t),r.type="sine",r.frequency.value=82,o.type="sine",o.frequency.value=.09,a.gain.value=11,o.connect(a).connect(r.frequency),r.connect(s),r.start(),o.start(),this.ambience=s,this.ambienceSources=[r,o]}clearAmbience(){var e;for(const t of this.ambienceSources){try{t.stop()}catch{}t.disconnect()}this.ambienceSources=[],(e=this.ambience)==null||e.disconnect(),this.ambience=void 0}playMelody(){const e=this.context;if(!e||e.currentTime<this.nextNote)return;const t=[261.63,329.63,392,523.25,440,329.63];this.tone(t[Math.floor(e.currentTime*1.7%t.length)],.11,.045,"sine"),this.nextNote=e.currentTime+1.45}deliveryCue(){this.tone(659.25,.08,.09,"triangle"),this.tone(783.99,.19,.07,"triangle",.09)}purchaseCue(){this.tone(523.25,.06,.08,"sine"),this.tone(783.99,.16,.075,"sine",.07)}purrCue(){this.tone(110,.48,.055,"sine"),this.tone(164.81,.42,.035,"sine",.08)}tone(e,t,i,s,r=0){const o=this.context,a=this.master;if(!o||!a||o.state!=="running"||!this.canPlay())return;const c=o.currentTime+r,l=o.createOscillator(),u=o.createGain();l.type=s,l.frequency.value=e,u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(i,c+.018),u.gain.exponentialRampToValueAtTime(1e-4,c+t),l.connect(u).connect(a),this.tones.add(l),l.onended=()=>{this.tones.delete(l),l.disconnect(),u.disconnect()},l.start(c),l.stop(c+t+.03)}takeSnapshot(e){var t;return{deliveries:Math.max(e.profile.deliveries,((t=e.run)==null?void 0:t.deliveries)??0),coins:e.profile.coins,upgrades:`${e.profile.upgrades.speed}:${e.profile.upgrades.handling}:${e.profile.upgrades.braking}`,furniture:e.profile.furniture.join("|"),homePanel:e.homePanel}}}const Fo=document.querySelector("#game"),br=document.querySelector("#app"),ZM=new URLSearchParams(location.search),ol=ZM.get("test")==="1";let Ae=Oc(),po=!0,Po=matchMedia("(pointer: coarse)").matches;const al=matchMedia("(pointer: coarse)").matches;Ae.coarsePointer=al;let cr=matchMedia("(prefers-reduced-motion: reduce)").matches,yr,St,ni=0,mo=0,Ps=!1;const ys=new qM,Oo=new YM;let At=!1,ii="loading",Ss="Opening your little world…",lr=null,rh;function $M(n,e=8e3){lr=n,clearTimeout(rh),rh=setTimeout(()=>{lr=null,mt(0)},e)}let Ea=0;function wr(n="Take a little breather."){vh(Ae,!0,n),St==null||St.clear(),ni=0,zt(),mt(0)}function Lc(){!At||document.hidden||Ps||(vh(Ae,!1),St==null||St.clear(),ni=0,mo=performance.now(),zt(),mt(0))}function Sd(){var n,e,t;document.fullscreenElement?(n=document.exitFullscreen)==null||n.call(document):(t=(e=document.documentElement).requestFullscreen)==null||t.call(e).catch(()=>{})}const KM=new UM(br,{start(){var n;At&&(Ae.profile.tutorialDone?Ra(Ae):If(Ae),St==null||St.clear(),(n=document.activeElement)==null||n.blur(),zt(),mt(0))},pause:()=>wr(),resume:Lc,unstuck(){if(!At)return;const n=Ae.player.position;let e=Tt[0],t=1/0;for(const i of Tt){const s=(i.position.x-n.x)**2+(i.position.z-n.z)**2;s<t&&(t=s,e=i)}Ae.player.position={x:e.position.x,y:e.position.y+5,z:e.position.z},Ae.player.velocity={x:0,y:0,z:0},Ae.player.speed=0,Ae.player.throttle=0,Lc(),St==null||St.clear(),zt(),mt(0)},mute(){po=!po,Oo.setMuted(po),mt(0)},quality(){Po=!Po,mt(0)},motion(){cr=!cr,mt(0)},fullscreen:Sd,chooseJob(n){At&&(zf(Ae,n),St.clear(),zt(),mt(0))},returnHome(){At&&(Bf(Ae),St.clear(),zt(),mt(0))},nextDay(){At&&(Ra(Ae),St.clear(),zt(),mt(0))}}),JM=new OM(br,{interact(){At&&(Mh(Ae),St.clear(),zt(),mt(0))},close(){At&&(ah(Ae),St.clear(),zt(),mt(0))},start(){At&&(Of(Ae,ol?42:void 0),St.clear(),zt(),mt(0))},upgrade(n){At&&(zd(Ae,n),zt(),mt(0))},furnish(n){At&&(Bd(Ae,n),zt(),mt(0))}}),QM=new zM(br),ei=document.createElement("aside");ei.className="save-status";ei.setAttribute("aria-live","polite");br.append(ei);ei.addEventListener("click",n=>{const e=n.target.closest("button");(e==null?void 0:e.dataset.save)==="retry"&&cl()});try{yr=new AM(Fo)}catch{throw br.innerHTML='<main class="compatibility"><h1>A little more sky, please.</h1><p>Meg needs a browser with WebGL 2 and hardware acceleration. Try a current browser with graphics acceleration enabled.</p></main>',new Error("WebGL 2 is unavailable.")}St=new FM(Fo,{hover:()=>{At&&(Nf(Ae),zt(),mt(0))},interact:()=>{!At||Ae.mode!=="home"||(Mh(Ae),zt(),mt(0))},pause:()=>{At&&(Ae.mode==="home"&&Ae.homePanel!=="none"?(ah(Ae),zt(),mt(0)):Ae.paused?Lc():wr())},fullscreen:Sd},()=>al&&!yd(Ae)&&Md(Ae.mode,Ae.paused,Ae.homePanel));function zt(){!At||!ys.canSave||ys.save(Ae)||(ii="session",Ss=ys.message)}async function cl(){At=!1,ii="loading",Ss="Opening your little world…",mt(0);const n=await ys.acquire();if(n.kind==="invalid"){ys.discardUnreadable(),Ae=Oc(),Ae.coarsePointer=al,At=!0,ii="ready",Ss="",zt(),$M("Your saved game could not be read, so it was discarded and a new game was started."),St==null||St.clear(),ni=0,mt(0);return}ii=n.kind,Ss=n.message,n.state&&(Ae=n.state),At=n.kind==="ready"||n.kind==="session",St==null||St.clear(),ni=0,mt(0)}function mt(n){if(Oo.update(Ae,!At||Ps),document.body.classList.toggle("reduced-motion",cr),!yr||Ps)return;yr.render(Ae,n,{reducedMotion:cr,lowQuality:Po});const e=Sh(Ae)??Tt[0];KM.render(Ae,{muted:po,lowQuality:Po,reducedMotion:cr,targetName:e.name,targetDistance:Math.hypot(e.position.x-Ae.player.position.x,e.position.z-Ae.player.position.z),targetBearing:kf(Ae.player.position,e.position,Ae.player.yaw),speed:Ae.player.speed,status:"",timeRemaining:Ae.run?Math.max(0,480-Ae.run.elapsed):void 0}),JM.render(Ae),QM.render(Ae),At||(document.querySelector(".home-interface").hidden=!0),Ae.mode==="home"&&(document.querySelector("#flight-hud").hidden=!0),document.querySelector("#start-btn").disabled=!At,Ae.profile.tutorialDone&&(document.querySelector("#start-btn").innerHTML="Come on in <span>→</span>"),document.querySelector("#next-day-btn").innerHTML="Back to your room <span>→</span>",document.querySelector(".sun-pill").hidden=!Ae.run,ei.hidden=ii==="ready"&&lr===null;const t=ii+Ss+(lr??"");ei.dataset.key!==t&&(ei.dataset.key=t,ei.textContent=ii==="ready"?lr??"":Ss,ii==="readonly"&&ei.insertAdjacentHTML("beforeend",'<br><button data-save="retry">Retry</button>'))}function bd(n){if(!At||Ae.paused||document.hidden||Ps){ni=0,mt(0);return}const e=Ae.mode;for(ni+=Math.max(0,n)/1e3;ni+1e-10>=1/60;)Xf(Ae,St.sample(),1/60),ni-=1/60;Ea+=n,(Ea>=5e3||e!==Ae.mode)&&(zt(),Ea=0),mt(Math.min(n/1e3,.1))}function wd(n){const e=mo?Math.min(n-mo,100):0;mo=n,ol||bd(e),requestAnimationFrame(wd)}window.addEventListener("resize",()=>{yr.resize(),mt(0)});document.addEventListener("visibilitychange",()=>{document.hidden&&wr("Welcome back. Ready to fly?")});window.addEventListener("blur",()=>{St.clear(),Ae.mode!=="title"&&wr()});Fo.addEventListener("webglcontextlost",n=>{n.preventDefault(),wr("The sky is taking a moment."),Ps=!0});Fo.addEventListener("webglcontextrestored",()=>{Ps=!1,mt(0)});window.addEventListener("pagehide",()=>{zt(),At=!1,Oo.update(Ae,!0),ys.release()});window.addEventListener("pageshow",n=>{n.persisted&&cl()});Object.assign(window,{advanceTime:n=>bd(n),render_game_to_text:()=>{var n,e;return JSON.stringify({coordinates:"x right/east, y up, z south; yaw 0 faces -z",mode:Ae.mode,paused:Ae.paused,player:Ae.player,tutorialStage:Ae.tutorialStage,message:Ae.message,run:Ae.run,profile:Ae.profile,stops:Tt,nearby:((n=ur(Ae))==null?void 0:n.id)??null,homePosition:Ae.homePosition,homePanel:Ae.homePanel,station:(e=Nc(Ae))==null?void 0:e.id,saveKind:ii})}});ol&&Object.assign(window,{__game:{get state(){return Ae},get ready(){return At},reset(){Ae=Oc(),ni=0,mt(0)},draw:()=>mt(0),audio:()=>Oo.debugState(),persist:zt,renderer:()=>yr}});mt(0);requestAnimationFrame(wd);cl();
